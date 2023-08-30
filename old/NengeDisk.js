
class NengeDisk {
    DB={};
    mountPath = [];
    constructor(path,NAME) {
        if(path)this.pathToDB(NAME||'MyEmu',path);
    }
    SetModule(Module) {
        Object.defineProperty(this,'Module',{get:()=>Module});
    }
    get FS() {
        return this.Module.FS||window.FS;
    }
    get MEMFS() {
        return this.Module.MEMFS || this.FS.filesystems.MEMFS;
    }
    get HEAP8() {
        return this.Module.HEAP8 || self.HEAP8;
    }
    getStore(mount) {
        if(!mount.mountpoint)return;
        return this.DB[mount.mountpoint];
    }
    mount(mount) {
        let path = mount.mountpoint;
        if(!this.DB[path])this.mountPath.push(path);
        return this.MEMFS.mount.apply(null, arguments);
    }
    async syncfs(mount, populate,callback) {
        let D = this;
        if(D.mountPath.length){
            this.pathToDB('MyEmuData',Object.fromEntries(D.mountPath.map(v=>[v,v])));
            D.mountPath = [];
        }
        let store = D.getStore(mount);
        let result;
        if(store){
            if (!mount.isReady) {
                //初始化
                result = await this.loadFile(store).catch(e=>alert(e));
                mount.isReady = true;
            } else {
                result = await D.syncWrite(store, mount);
            }
        }
        populate&&(populate instanceof Function) && populate('ok');
        callback&&(callback instanceof Function) && callback('ok');
        return result;
    }
    async loadFile(store) {
        let D = this;
        return Object.entries(await store.all(true)).map(entry => D.storeLocalEntry(entry[0], entry[1])).join("\n");
    }
    syncUpdate(steam,bool) {
        let D = this;
        if(!bool){
            clearTimeout(D.Timer);
            return D.Timer = setTimeout(()=>D.syncUpdate(steam,!0),1000);
        }
        D.syncfs(steam.node.mount);
    }
    setMEMFS(MEMFS){
        let D = this;
        if(!this.Module.MEMFS)Object.defineProperty(this.Module,'MEMFS',{get:()=>MEMFS});
        else if(!MEMFS)MEMFS = D.MEMFS;
        MEMFS.stream_ops.write = function (stream, buffer, offset, length, position, canOwn) {
            if (D.HEAP8 && buffer.buffer === D.HEAP8.buffer) {
                canOwn = false
            }
            if (!length) return 0;
            var node = stream.node;
            node.timestamp = Date.now();
            if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                if (canOwn) {
                    node.contents = buffer.subarray(offset, offset + length);
                    node.usedBytes = length;
                    return length
                } else if (node.usedBytes === 0 && position === 0) {
                    node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
                    node.usedBytes = length;
                    D.syncUpdate(stream);
                    return length
                } else if (position + length <= node.usedBytes) {
                    node.contents.set(buffer.subarray(offset, offset + length), position);
                    return length
                }
            }
            D.MEMFS.expandFileStorage(node, position + length);
            if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset,
                offset + length), position);
            else {
                for (var i = 0; i < length; i++) {
                    node.contents[position + i] = buffer[offset + i]
                }
            }
            node.usedBytes = Math.max(node.usedBytes, position + length);
            return length
        };
        MEMFS.stream_ops.msync = function(steam){
            console.log('sync');
        }
        if (MEMFS.ops_table) MEMFS.ops_table.file.stream.write = MEMFS.stream_ops.write;
        if (MEMFS.ops_table) MEMFS.ops_table.file.stream.msync = MEMFS.stream_ops.msync;
    }
    async syncWrite(store, mount) {
        let D = this;
            let fslist = this.getLocalList(mount.mountpoint, !0);
            let dblist = await this.getRemoteList(store);
            let savelist = [],
                removelist = [],
                result = [];
            Object.entries(fslist).forEach(entry => {
                if (!dblist[entry[0]] || entry[1] > dblist[entry[0]]) {
                    savelist.push(entry[0]);
                }
            });
            Object.entries(dblist).forEach(entry => {
                if (!fslist[entry[0]]) {
                    removelist.push(entry[0]);
                }
            });
            let db = await store.transaction();
            savelist.sort().forEach(path => {
                db.put(this.loadLocalEntry(path), path);
                result.push('indexdb write:'+path);
            });
            removelist.sort().forEach(path => {
                db.delete(path);
                result.push('indexdb delete:'+path);
            });
            this.log&&this.log(IsReady, result);
            return result.join("\n");
    }
    loadLocalEntry(path) {
        let D = this,
            FS = D.FS,
            stat, node;
        if (FS.analyzePath(path).exists) {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path)
        } else {
            return path + ' is exists'
        }
        if (FS.isDir(stat.mode)) {
            return {
                timestamp: stat.mtime,
                mode: stat.mode
            };
        } else if (FS.isFile(stat.mode)) {
            node.contents = D.getFileDataAsTypedArray(node);
            return {
                timestamp: stat.mtime,
                mode: stat.mode,
                contents: node.contents
            };
        } else {
            return "node type not supported";
        }
    }
    storeLocalEntry(path, entry) {
        let D = this,
            FS = D.FS;
        if(!entry||!entry.mode)return;
        if (FS.isDir(entry.mode)) {
            !FS.analyzePath(path).exists && FS.createPath('/', path, !0, !0)
        } else if (FS.isFile(entry.mode)) {
            let p = path && path.split('/').slice(0, -1).join('/');
            if (p && !FS.analyzePath(p).exists) FS.createPath('/', p, !0, !0);
            FS.writeFile(path, entry.contents, {
                canOwn: true,
                encoding: "binary"
            });
        } else {
            throw "node type not supported";
        }
        FS.chmod(path, entry.mode);
        FS.utime(path, entry.timestamp, entry.timestamp);
        return 'FS write:' + path;
    }
    removeLocalEntry(path) {
        let FS = this.FS;
        if (FS.analyzePath(path).exists) {
            var stat = FS.stat(path);
            if (FS.isDir(stat.mode)) {
                FS.rmdir(path)
            } else if (FS.isFile(stat.mode)) {
                FS.unlink(path)
            }
            return 'FS unlink:' + path;
        } else {
            return path + 'is not exists';
        }
    }
    async getRemoteList(store, callback) {
        let result = await store.cursor('timestamp', true);
        callback && callback(result);
        return result
    }
    getLocalList(mountpoint, bool) {
        mountpoint = mountpoint || '/';
        let D = this,
            FS = D.FS,
            entries = {},
            filterRoot = [".", ".."].concat(mountpoint == '/' ? ["dev", "tmp", "proc"] : []),
            isRealDir = p => !bool || !filterRoot.includes(p),
            toAbsolute = root => p => D.join2(root, p),
            check = D.stat(mountpoint) && FS.readdir(mountpoint).filter(isRealDir).map(toAbsolute(
                mountpoint));
        if (!check) return console.log('mount:PATH ERROR');
        while (check.length) {
            let path = check.shift();
            if (!bool && path == mountpoint) continue;
            let stat = D.stat(path);
            if(D.Filter&&D.Filter(path)) continue;
            if (stat) {
                entries[path] = stat.mtime;
                if (FS.isDir(stat.mode) && bool) {
                    check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)))
                }

            }
        }
        return entries;
    }
    stat(path) {
        let D = this,
            FS = D.FS,
            pathinfo = FS.analyzePath(path);
        if (pathinfo.exists && pathinfo.object.node_ops && pathinfo.object.node_ops.getattr) {
            return FS.stat(path);
        }
    }
    getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array;
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents)
    }
    join() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return this.normalize(paths.join("/"))
    }

    join2(l, r) {
        return this.normalize(l + "/" + r)
    }
    normalize(path) {
        var isAbsolute = path.charAt(0) === "/",
            trailingSlash = path.substring(-1) === "/";
        path = this.normalizeArray(path.split("/").filter(p => {
            return !!p
        }), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
            path = "."
        }
        if (path && trailingSlash) {
            path += "/"
        }
        return (isAbsolute ? "/" : "") + path
    }

    normalizeArray(parts, allowAboveRoot) {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
                parts.splice(i, 1)
            } else if (last === "..") {
                parts.splice(i, 1);
                up++
            } else if (up) {
                parts.splice(i, 1);
                up--
            }
        }
        if (allowAboveRoot) {
            for (; up; up--) {
                parts.unshift("..")
            }
        }
        return parts
    };
    ReadFile(file) {
        if (this.FS.analyzePath(file).exists) return this.FS.readFile(file);
    }
    MKFILE(path, data, bool) {
        if (!this.Module) return;
        let FS = this.FS,
            dir = path.split('/');
        if (dir.length) dir = dir.slice(0, -1).join('/');
        else dir = '/';
        if (!FS.analyzePath(dir).exists) {
            let pdir = dir.split('/').slice(0, -1).join('/');
            if (!FS.analyzePath(pdir).exists) FS.createPath('/', pdir, !0, !0);
            FS.createPath('/', dir, !0, !0);
        }
        if (typeof data == 'string') data = new TextEncoder().encode(data);
        if (bool) {
            if (FS.analyzePath(path).exists) FS.unlink(path);
            FS.writeFile(path, data, {
                //canOwn: true,
                encoding: "binary"
            });
        } else if (!FS.analyzePath(path).exists) {
            FS.writeFile(path, data, {
                //canOwn: true,
                encoding: "binary"
            });
        }
    }
    StoreBase= {};
    StoreTable = {};
    pathToDB(NAME,path){
        let D=this,paths = Object.entries(path),TABLES = paths.map(v=>v[1]);
        if(D.StoreBase[NAME]){
            D.StoreBase[NAME].then(db=>{
                db.close();
                D.StoreBase[NAME] = null;
            })
        }
        paths.forEach(v=>this.DB[v[0]] = new D.StoreClass(NAME,v[1],TABLES,D));

    }
    getDB(NAME,TABLES){
        if(typeof TABLES == 'string') TABLES = [TABLES];
        let D=this;
        if( D.StoreTable[TABLES[0]]) return D.StoreTable[TABLES[0]];
        TABLES.forEach(table=>{
            D.StoreTable[table] = new D.StoreClass(NAME,table,TABLES,D);
        });
        return D.StoreTable[TABLES[0]];
    }
    StoreClass = class{
        constructor(NAME,table,TABLES,D){
            this.NAME = NAME;
            this.table = table;
            this.TABLES = TABLES;
            Object.defineProperty(this,'D',{
                get:()=>D
            });
        }
        idb(version){
            let S = this,
                NAME = S.NAME,
                TABLES = S.TABLES,
                D = S.D;
            if(!version&&D.StoreBase[NAME]&&(D.StoreBase[NAME] instanceof Promise)) return D.StoreBase[NAME];
            return D.StoreBase[NAME] =  new Promise(callback => {
                const request = indexedDB.open(NAME,version);
                request.onupgradeneeded = e => {
                    let db = request.result;
                    TABLES.forEach(
                        table=>{
                            if (!db.objectStoreNames.contains(table)) {
                                let dbtable = db.createObjectStore(table);
                                dbtable.createIndex('timestamp', 'timestamp', {
                                    unique: false
                                });
                            }
                        }
                    )
                };
                request.onsuccess = e => {
                    let db = request.result;
                    if(TABLES.filter(v=>db.objectStoreNames.contains(v)).length == TABLES.length){
                        return callback(db)
                    }else{
                        db.close();
                        S.idb(db.version+1).then(v=>callback(v))
                    }
                };
                request.onerror = e => callback(null);
            });
        }
        async transaction(mode) {
            mode = mode ? "readonly" : "readwrite";
            let table = this.table,
                db = await this.idb(),
                tdb = db.transaction([table], mode);
            return tdb.objectStore(table);
        }
        async getlist(bool){
            /**get all in table data in indexedDB */
            let db = await this.transaction(!0),entries={};
            return new Promise(callback => {
                (bool?db.openCursor():db.index('timestamp').openKeyCursor()).onsuccess = e => {
                    let cursor = e.target.result;
                    if (cursor) {
                        entries[cursor.primaryKey] = cursor[bool?'value':'key'];
                        cursor.continue();
                    } else {
                        callback(entries);
                    }
                }
            });
        }
        async all(){
            return this.getlist(!0);
        }
        async cursor(){
            return this.getlist();
        }
        async findItem(name,key){
            let db = await this.transaction(!0);
            return new Promise(back=>{
                if(typeof name == 'string') db.get(name).onsuccess = e=>{
                    let result = e.target.result;
                    back(key?result[key]:result);
                };
                else Promise.all(name.map(
                    v=>new Promise(c=>db.get(v).onsuccess = e=>{
                        let result = e.target.result;
                        c([v,key?result[key]:result])
                    })
                )).then(result=>back(Object.fromEntries(result.filter(v=>v[1]))));
            });
        }
        async removeItem(name){
            let db = await this.transaction();
            return new Promise(back=>{
                if(typeof name == 'string') db.delete(name).onsuccess = e=>back(e.target.result);
                else Promise.all(name.map(v=>new Promise(c=>db.delete(v).onsuccess = e=>c(e.target.result)))).then(result=>back(Object.fromEntries(result)));
            });
        }
        async saveItem(data,name){
            let db = await this.transaction();
            if(!name)Object.entries(data).map(v=>new Promise(c=>db.put(v[1],v[0]).onsuccess = e=>c(e.target.result)));
            else new Promise(c=>db.put(data,name).onsuccess = e=>c(e.target.result));
        }
        async keys(){
            let db = await this.transaction(!0);
            return new Promise(c=>db.getAllKeys().onsuccess = e => c(e.target.result))
        }
    }
}