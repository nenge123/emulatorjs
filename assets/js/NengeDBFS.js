var EJS_ROOT = document.currentScript.src.split('/')&&document.currentScript.src.split('/').slice(0, -3).join('/')+'/';
if(!EJS_ROOT){
    if(location.pathname.length>0)EJS_ROOT = (location.origin+location.pathname).split('/').slice(0,-1).join('/')+'/';
    else EJS_ROOT = location.origin+'/';
}
var NengeDBFS = new class {
    maxsize = 0x6400000;
    part = '-part-';
    DB_NAME = 'ejs--custom-db';
    DB_STORE_MAP = {
        'data-libjs':null,
        'data-rooms':null,
        'data-cores':null,
        'data-bios':null,
        'data-patch':null,
        '/userdata':'userdata',
        '/shader':'shader',
    };
    Libjs = {};
    async getItem(store,name,cb) {
        if(!name) return await this.GetItems(store,cb);
        let T = this,db = await T.GET_DB(store),
        maxsize = T.maxsize,
        part = T.part;
        return new Promise(callback => {
            T.transaction(store,db,!0).get(name).onsuccess = event => {
                let result = event.target.result;
                if(result&&result.contents&&result.filesize&&result.filesize>maxsize&&result.key.search(part) ==-1){
                    let maxLen = Math.ceil(result.filesize/maxsize),
                    returnBuf = new Uint8Array(result.filesize),
                    list=[];
                    returnBuf.set(result.contents,0);
                    delete result.contents;
                    for(let index=1;index<maxLen;index++){
                        list.push(T.getItem(store,name+part+index));
                    }
                    return Promise.all(list).then(values_1=>{
                        values_1.forEach((data,index)=>{
                            let num = Number(data.key.split(part).pop());
                            returnBuf.set(data.contents, num * maxsize);
                            delete data.contents;
                            delete values_1[index];

                        });
                        result.contents = returnBuf;
                        callback(result);
                        cb && cb(result);
                    });

                }
                callback(result),
                cb&&cb(result)
            };
        })
    }
    async setItem(store, name, data,cb) {
        let T=this,db = await T.GET_DB(store),maxsize = T.maxsize,part = T.part;
        if(data.hasOwnProperty('version')&&!data.version)delete data.version;
        if(data.contents&&data.contents.length>maxsize){
            let save = [],BufLen = data.contents.length;
            for(var index=0;index<Math.ceil(BufLen/maxsize);index++){
                let newdata = {
                        filesize:data.filesize,
                        timestamp:data.timestamp,
                        type:data.type
                    };
                    if(data.version)newdata.version = data.version;
                newdata.contents = new Uint8Array(data.contents.subarray(maxsize*index,BufLen - maxsize*index>=maxsize ? (index+1)*maxsize :BufLen)) ;
                newdata.key = index>0?name+part+index:name;
                save.push(T.setItem(store,newdata.key,newdata));

            }
            const values_1 = await Promise.all(save);
            cb && cb(values_1);
            return values_1;
        }
        return new Promise(callback => {
            T.transaction(store,db).put(data, name).onsuccess = e => {
                let result = e.target.result;
                callback(result),cb&&cb(result)};
        });
    }
    async removeItem(store, name, data,cb) {
        let T=this,db = await T.GET_DB(store);
        return new Promise((resolve,reject)=>{
            T.transaction(store,db).delete(name).onsuccess = e=>resolve(`delete:${name}`);
        });
    }
    async getContent(store, name) {
        let result = await this.getItem(store, name);
        if(!result) return undefined;
        return result.contents||result;
    }
    async getAllKeys(store,cb) {
        let T=this,db = await T.GET_DB(store);
        return new Promise(callback => {
            T.transaction(store,db,!0).getAllKeys().onsuccess = e => {let result = e.target.result;callback(result),cb&&cb(result)};
        });
    }
    async GetItems(store,cb) {
        let T=this,db = await T.GET_DB(store);
        return new Promise(callback => {
            var entries = {};
            T.transaction(store,db,!0).openCursor().onsuccess = evt => {
                var cursor = evt.target.result;
                if (cursor) {
                    entries[cursor.primaryKey] = cursor.value;
                    cursor.continue();
                } else {
                    callback(entries);
                    cb&&cb(entries);
                }
            }
        });
    }
    async FectchItem(ARG){
        let T=this,
            response,
            key = ARG.key || ARG.url.split('/').pop(),
            result = {},
            version = ARG.version,
            callback = result=>{
                if(result&&result.contents){
                    ARG.success&&ARG.success(result.contents,response&&response.headers);
                    return result.contents;
                }
                return ;
            };
            key = key.split('?')[0]
        if(ARG.store&&!ARG.unset){
            result = await T.getItem(ARG.store,key);
            if(result){
                if(version&&result.version){
                    if(version==result.version) return callback(result);
                }else if(!ARG.checksize){
                    return callback(result);
                }
            }
        }
        if(!ARG.url) return ;
        response = await fetch(ARG.url);
        let type = (ARG.type=='Uint8Array'?'arrayBuffer':ARG.type) || 'arrayBuffer',
        downsize = Number(response.headers.get("Content-Length")) || 0,
        havesize = 0;            
        if (response.status == 404) {
            ARG.error && ARG.error(response.statusText);
            return callback(result);
        }else if(result&&result.filesize&&downsize>0){
            if(result.filesize==downsize)return callback(result);
            if(result.contents)delete result.contents
        };
        const reader = response.body.getReader();
        const stream = new ReadableStream({
            start(controller) {
                let push = e => {
                    reader.read().then(({
                        done,
                        value
                    }) => {
                        if (done) {
                            controller.close();
                            push = null;
                            return;
                        }
                        havesize += value.length;
                        let statussize = '0%';
                        if(downsize)statussize = Math.floor(havesize / downsize * 100) + '%';
                        ARG.process && ARG.process(statussize, value.length, havesize);
                        //下载或者上传进度
                        controller.enqueue(value);
                        push();
                    });
                }
                push();
            }
        });
        let contents = await (new Response(stream)[type]());
        console.log(ARG.url+'  is download.');
        let filesize = contents.byteLength;
        if(['arrayBuffer','Uint8Array'].includes(type)){
            contents = new Uint8Array(contents);
            filesize = contents.byteLength;
            type = 'Uint8Array';
        };
        if(ARG.unpack){
            if((/www\.emulatorjs\.com\/cores\/[\w-]+?\.data/i).test(ARG.url)){
                contents = contents.slice ? contents.slice(12) : contents.subarray(12);
                contents.set([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c, 0, 0x3], 0);
            }
            contents = await T.CHECK_FILE(contents,ARG.process);
        }
        if(ARG.store){
            await T.setItem(ARG.store,key,{
                contents,
                timestamp:new Date,
                filesize,
                version,
                type
            });
        }
        ARG.success&&ARG.success(contents,response.headers);
        return contents;
    }
    async CHECK_FILE(u8,cb){
        if(u8 instanceof ArrayBuffer) u8 = new Uint8Array(u8);
        let head = new TextDecoder().decode(u8.slice ? u8.slice(0,8):u8.subarray(0,8)),
            unFile=this.unFile,
            action = null;
        if (/^7z/.test(head)) action = 'un7z';
        else if (/^Rar!/.test(head) || /[\x52][\x45][\x7E][\x5E]/.test(head))action = 'unRAR';
        else if (/^PK/.test(head)) action = 'unZip';
        if(action&&unFile[action]) return await unFile[action](u8,cb);
        return u8;
    }
    unFile = {
        'unRAR':async (u8,cb,password,file)=>{
            let worker = new Worker(await this.getLibjs(file||'rar.js'));
            return new Promise(complete=>{
                let contents = {};
                worker.onmessage = result=>{
                    if(1 === result.data.t){
                        complete(contents);
                        result.target['terminate']();
                    }else if (2 === result.data.t) {
                        contents[result.data.file] = result.data.data;
                    }else if(4 === result.data.t && result.data.total > 0){
                        cb&&cb(Math.floor(result.data.current / result.data.total * 100)+'%');

                    }
                },
                worker.postMessage(u8);
            });

        },
        'un7z':async (u8,cb)=>{
            return this.unFile.unRAR(u8,cb,null,'7z.js');
        },
        'unZip':async (u8,cb)=>{
            return this.unFile.unRAR(u8,cb,null,'zip.js');
            
        }
    };

    async getLibjs(file){
        if(this.Libjs[file]) return this.Libjs[file];
        let contents = await this.getContent('data-libjs',file);
        if(!contents) {
            this.Libjs[file] = EJS_ROOT+`assets/js/${file}`;
        }else {
            if(file=='rar.js'){
                let mem = await this.getLibjs('rar.mem.png');
                contents = `var dataToPass=[];self.unFile={monitorRunDependencies:function(t){0==t&&setTimeout((function(){unrar(dataToPass,null)}),100)},onRuntimeInitialized:function(){}};${new TextDecoder().decode(contents).replace('libunrar.js.mem',mem).replace('rar.mem.png',mem)};let unrar=function(t,e){let n=readRARContent(t.map((function(t){return{name:t.name,content:new Uint8Array(t.content)}})),e,(function(t,e,n){postMessage({t:4,current:n,total:e,name:t})})),o=function(t){if("file"===t.type)postMessage({t:2,file:t.fullFileName,size:t.fileSize,data:t.fileContent});else{if("dir"!==t.type)throw"Unknown type";Object.keys(t.ls).forEach((function(e){o(t.ls[e])}))}};return o(n),postMessage({t:1}),n};onmessage=function(t){dataToPass.push({name:"test.rar",content:t.data})};`;
            }
            this.Libjs[file] = window.URL.createObjectURL(new Blob([contents]));
        };
        return this.Libjs[file];
    }
    IsReady(){
        let T=this,mounts = T.FS.root.mount.mounts;
        return new Promise(complete=>{
            let Timer = setInterval(()=>{
                let ok = true;
                for(let i = 0;i<mounts.length;i++){
                    let mount = mounts[i];
                    if(T.DB_STORE_MAP[mount.mountpoint]&&!mount.isReady){
                        ok=false;
                    }
                }
                if(ok){
                    console.log(`syncfs ready!`);
                    clearInterval(Timer);
                    complete(Timer);
                }
            },100)
        });
    }
    mount(mount) {
        let T=this,
            FS=T.FS,
            node = T.createNode(null,mount.mountpoint, 16384 | 511, 0);
        setTimeout(()=>{
            T.syncfs(mount,e=>{});
        },1);
        return node;
    }
    createNode(parent, name, mode, dev){
        let T = this,FS = T.FS;
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(1)
        }
        var node = FS.createNode(parent, name, mode, dev),
            ops_table = T.ops_table;
        if (FS.isDir(node.mode)) {
            node.node_ops = ops_table.dir.node;
            node.stream_ops = ops_table.dir.stream;
            node.contents = {}
        } else if (FS.isFile(node.mode)) {
            node.node_ops = ops_table.file.node;
            node.stream_ops = ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null
        } else if (FS.isLink(node.mode)) {
            node.node_ops = ops_table.link.node;
            node.stream_ops = ops_table.link.stream
        } else if (FS.isChrdev(node.mode)) {
            node.node_ops = ops_table.chrdev.node;
            node.stream_ops = FS.chrdev_stream_ops;
        }
        node.timestamp = Date.now();
        if (parent) {
            parent.contents[name] = node
        }
        return node
    }
    get node_ops(){
        let T=this;
        if (T._node_ops) return T._node_ops;
        let FS = T.FS;
        T._node_ops = {
            getattr: (node) => {
                var attr = {};
                attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
                attr.ino = node.id;
                attr.mode = node.mode;
                attr.nlink = 1;
                attr.uid = 0;
                attr.gid = 0;
                attr.rdev = node.rdev;
                if (FS.isDir(node.mode)) {
                    attr.size = 4096
                } else if (FS.isFile(node.mode)) {
                    attr.size = node.usedBytes
                } else if (FS.isLink(node.mode)) {
                    attr.size = node.link.length
                } else {
                    attr.size = 0
                }
                attr.atime = new Date(node.timestamp);
                attr.mtime = new Date(node.timestamp);
                attr.ctime = new Date(node.timestamp);
                attr.blksize = 4096;
                attr.blocks = Math.ceil(attr.size / attr.blksize);
                return attr;
            },
            setattr: (node, attr) => {
                if (attr.mode !== undefined) {
                    node.mode = attr.mode
                }
                if (attr.timestamp !== undefined) {
                    node.timestamp = attr.timestamp;
                }
                if (attr.size !== undefined) {
                    T.resizeFileStorage(node, attr.size);
                }
            },
            lookup: (parent, name) => {
                throw FS.genericErrors[2];
            },
            mknod: (parent, name, mode, dev) => {
                return T.createNode(parent, name, mode, dev)
            },
            rename: (old_node, new_dir, new_name) => {
                if (FS.isDir(old_node.mode)) {
                    var new_node;
                    try {
                        new_node = FS.lookupNode(new_dir, new_name)
                    } catch (e) {}
                    if (new_node) {
                        for (var i in new_node.contents) {
                            throw new FS.ErrnoError(39)
                        }
                    }
                }
                delete old_node.parent.contents[old_node.name];
                old_node.name = new_name;
                new_dir.contents[new_name] = old_node;
                old_node.parent = new_dir
            },
            unlink: (parent, name) => {
                delete parent.contents[name]
            },
            rmdir: (parent, name) => {
                var node = FS.lookupNode(parent, name);
                for (var i in node.contents) {
                    throw new FS.ErrnoError(39)
                }
                delete parent.contents[name]
            },
            readdir: (node) => {
                var entries = [".", ".."];
                for (var key in node.contents) {
                    if (!node.contents.hasOwnProperty(key)) {
                        continue
                    }
                    entries.push(key)
                }
                return entries
            },
            symlink: (parent, newname, oldpath) => {
                var node = T.createNode(parent, newname, 511 | 40960, 0);
                node.link = oldpath;
                return node
            },
            readlink: (node) => {
                if (!FS.isLink(node.mode)) {
                    throw new FS.ErrnoError(22)
                }
                return node.link
            }
        };
        return T._node_ops;
    }
    get stream_ops(){
        let T=this;
        if (T._stream_ops) return T._stream_ops;
        let FS = T.FS;
        T._stream_ops = {
            read: (stream, buffer, offset, length, position) => {
                var contents = stream.node.contents;
                if (position >= stream.node.usedBytes) return 0;
                var size = Math.min(stream.node.usedBytes - position, length);
                if (size > 8 && contents.subarray) {
                    buffer.set(contents.subarray(position, position + size), offset)
                } else {
                    for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i]
                }
                return size
            },
            write:(stream, buffer, offset, length, position, canOwn) => {
                if (!length) return 0;
                var node = stream.node;
                node.timestamp = Date.now();
                let sysfs = (path)=>{
                    clearTimeout(T.writeTime);
                    T.writeTime = setTimeout(()=>{
                        if(T.DB_STORE_MAP[node.mount.mountpoint]){
                            T.syncfs(node.mount).then(e=>{
                                if(T.DownFile){
                                    if(FS.analyzePath(T.DownFile).exists){
                                        if(T.DownState)T.download(T.DownFile.split('/').pop(),FS.readFile(T.DownFile));
                                        let SaveSRM = T.emu&&T.emu.config.SaveSRM;
                                        if(SaveSRM){
                                            SaveSRM.call(T.emu,FS.readFile(T.DownFile));
                                        }
                                    }
                                    T.DownState = null;
                                    T.DownFile = null;
                                }
                            });
                        }
                    },500);
                };
                if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                    if (canOwn) {
                        node.contents = buffer.subarray(offset, offset + length);
                        node.usedBytes = length;
                        return length
                    } else if (node.usedBytes === 0 && position === 0) {
                        node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
                        node.usedBytes = length;
                        sysfs(stream.path);
                        return length
                    } else if (position + length <= node.usedBytes) {
                        node.contents.set(buffer.subarray(offset, offset + length), position);
                        return length
                    }
                }
                T.expandFileStorage(node, position + length);
                if (node.contents.subarray && buffer.subarray){
                    node.contents.set(buffer.subarray(offset, offset + length), position);
                }else {
                    for (var i = 0; i < length; i++) {
                        node.contents[position + i] = buffer[offset + i]
                    }
                }
                node.usedBytes = Math.max(node.usedBytes, position + length);
                return length
            },
            llseek: (stream, offset, whence) => {
                var position = offset;
                if (whence === 1) {
                    position += stream.position
                } else if (whence === 2) {
                    if (FS.isFile(stream.node.mode)) {
                        position += stream.node.usedBytes
                    }
                }
                if (position < 0) {
                    throw new FS.ErrnoError(22)
                }
                return position
            },
            allocate: (stream, offset, length) => {
                T.expandFileStorage(stream.node, offset + length);
                stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
            },
            mmap: (stream, buffer, offset, length, position, prot, flags) => {
                if (!FS.isFile(stream.node.mode)) {
                    throw new FS.ErrnoError(19)
                }
                var ptr;
                var allocated;
                var contents = stream.node.contents;
                if (!(flags & 2) && (contents.buffer === buffer || contents.buffer === buffer.buffer)) {
                    allocated = false;
                    ptr = contents.byteOffset
                } else {
                    if (position > 0 || position + length < stream.node.usedBytes) {
                        if (contents.subarray) {
                            contents = contents.subarray(position, position + length)
                        } else {
                            contents = Array.prototype.slice.call(contents, position, position + length)
                        }
                    }
                    allocated = true;
                    ptr = _malloc(length);
                    if (!ptr) {
                        throw new FS.ErrnoError(12)
                    }
                    buffer.set(contents, ptr)
                }
                return {
                    ptr: ptr,
                    allocated: allocated
                }
            },
            msync: (stream, buffer, offset, length, mmapFlags) => {
                if (!FS.isFile(stream.node.mode)) {
                    throw new FS.ErrnoError(19)
                }
                if (mmapFlags & 2) {
                    return 0
                }
                var bytesWritten = T.stream_ops.write(stream, buffer, 0, length, offset, false);
                return 0
            }
        };
        return T._stream_ops;
    }
    get ops_table() {
        let T = this;
        if (T._ops_table) return T._ops_table;
        let FS = T.FS,
            node_ops = T.node_ops,
            stream_ops = T.stream_ops;
            if(!FS.genericErrors[2])FS.genericErrors[2] = new FS.ErrnoError(2);
            T._ops_table = {
                dir: {
                    node: {
                        getattr: node_ops.getattr,
                        setattr: node_ops.setattr,
                        lookup: node_ops.lookup,
                        mknod: node_ops.mknod,
                        rename: node_ops.rename,
                        unlink: node_ops.unlink,
                        rmdir: node_ops.rmdir,
                        readdir: node_ops.readdir,
                        symlink: node_ops.symlink
                    },
                    stream: {
                        llseek: stream_ops.llseek
                    }
                },
                file: {
                    node: {
                        getattr: node_ops.getattr,
                        setattr: node_ops.setattr
                    },
                    stream: {
                        llseek: stream_ops.llseek,
                        read: stream_ops.read,
                        write: stream_ops.write,
                        allocate: stream_ops.allocate,
                        mmap: stream_ops.mmap,
                        msync: stream_ops.msync
                    }
                },
                link: {
                    node: {
                        getattr: node_ops.getattr,
                        setattr: node_ops.setattr,
                        readlink: node_ops.readlink
                    },
                    stream: {}
                },
                chrdev: {
                    node: {
                        getattr: node_ops.getattr,
                        setattr: node_ops.setattr
                    }
                }
            };
        return T._ops_table;
    }
    async GET_DB(storeName,version,key) {
        let T=this;
        storeName = storeName||'userdata';
        return new Promise((resolve, reject) => {
            if (T.db&&T.StoreNames.contains(storeName)) return resolve(T.db);
            let req = T.indexedDB.open(T.DB_NAME, version);
            if (!req) return reject("Unable to connect to IndexedDB");
            req.onupgradeneeded = e => {
                T.db = e.target.result;
                let fileStore,
                    createIndex= (store,keyId)=>store.createIndex(keyId, keyId, {"unique": false});
                if (!T.StoreNames.contains(storeName)) {
                    for (var i in T.DB_STORE_MAP) {
                        let NAME = T.DB_STORE_MAP[i] || i,
                            keyId =  null;
                        if (T.StoreNames.contains(NAME)) continue;
                        let Store = T.db.createObjectStore(NAME);
                        if(T.DB_STORE_MAP[i])keyId = "timestamp";
                        else if (key&&NAME == storeName) keyId = key;
                        if (keyId&&!Store.indexNames.contains(keyId)) createIndex(Store,keyId);
                        if (NAME == storeName) fileStore = Store;
                    }
                    if (!fileStore) {
                        fileStore = T.db.createObjectStore(storeName);
                        if (key&&!fileStore.indexNames.contains(key))createIndex(fileStore,key);
                    }
                }
            };
            req.onsuccess = async e => {
                T.db = e.target.result;
                if (!T.StoreNames.contains(storeName)) {
                    version = T.db.version + 1;
                    T.close();
                    T.db = T.GET_DB(storeName, version,key);
                    resolve(T.db)
                }else{
                    resolve(T.db);
                }
            };
            req.onerror = e => {
                reject(req.error);
                e.preventDefault()
            }
        });
    }
    SaveDataFile(link,data,dir){
        let FS=this.FS;
        if(!data) return ;
        if(typeof data =='string')data = new TextEncoder().encode(data);
        if(data instanceof Uint8Array){
            let path = link.split('/').slice(0,-1).join('/');
            if(!FS.analyzePath(path).exists){
                FS.createPath('/',path,!0,!0);
            }
            if(FS.analyzePath(link).exists){
                FS.unlink(link);
            }
            FS.createDataFile(path,link.split('/').pop(),data,!0,!0);
        }else if(dir){
            for(var i in data){
                T.SaveDataFile(dir+i,data[i]);
            }
        }
    }
    resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0;return}if(!node.contents||node.contents.subarray){var oldContents=node.contents;node.contents=new Uint8Array(new ArrayBuffer(newSize));if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize;return}if(!node.contents)node.contents=[];if(node.contents.length>newSize)node.contents.length=newSize;else while(node.contents.length<newSize)node.contents.push(0);node.usedBytes=newSize}
    expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)|0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0);return}
    getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array;if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)}
    findMount(mount){let T=this,FS=T.FS;if(!FS||!FS.analyzePath(mount).exists)return;let mounts=FS.root.mount.mounts;for(var i=0;i<mounts.length;i++){if(mounts[i].mountpoint==mount)return mounts[i]}let node=T.createNode(null,mount,16384|511,0);return node.mount}
    async syncfs(mount, populate, callback) {
        callback = callback || populate || null;
        let T = this,
            reback = result=>{
                mount.isReady = true;
                if (callback && typeof callback == 'function') {
                    callback(result)
                }
                return result;
            };
        if (typeof mount == 'string') {
            mount = T.findMount(mount)
        }
        if (!mount || !mount.mountpoint) {
            throw 'mount is erro';
        }
        let storeName = T.DB_STORE_MAP[mount.mountpoint];
        if (!storeName) throw 'indexDB Store Name erro';
        let total = 0,
            IsReady = mount.isReady,
            local = await T.getLocalSet(mount),
            remote = await T.getRemoteSet(storeName),
            src = !IsReady ? remote : local,
            dst = !IsReady ? local : remote,
            create = [],
            remove = [];
        if(!remote ||remote.entries.length==0) return reback('no data');
        for (const [key, value] of Object.entries(src.entries)) {
            var e2 = dst.entries[key];
            if (!e2 || value.timestamp > e2.timestamp) {
                create.push(key);
                total++
            }
        }
        if(IsReady)for (const [key, value] of Object.entries(dst.entries)) {
            var e = dst.entries[key];
            var e2 = src.entries[key];
            if (!e2) {
                remove.push(key);
                total++
            }
        }
        if (!total) {
            return reback('no file need to sysfs');
        }
        let result = "",
            db = remote.db,
            store = T.transaction(storeName, db);
            create.sort();
            remove.sort();
            create.forEach(path=>{

            });
        for (let a = 0; a < create.length; a++) {
            let path = create[a];
            if (dst.type === "local") {
                let entry = await T.loadRemoteEntry(store, path);
                if (entry) {
                    result += await T.storeLocalEntry(path, entry) || ''
                }
            } else {
                let entry2 = await T.loadLocalEntry(path);
                result += await T.storeRemoteEntry(store, path, entry2)
            }
        }
        for (let b = 0; b < remove.length; b++) {
            let path2 = remove[b];
            if (dst.type === "local") {
                result += await T.removeLocalEntry(path2)
            } else {
                result += await T.removeRemoteEntry(store, path2)
            }
        }
        return reback(result)
    }
    async getRemoteSet(store, callback) {
        let T = this,
            db = await T.GET_DB(store);
        return new Promise(resolve => {
            var type = "remote",
                entries = {},
                key = "timestamp",
                STORE = T.transaction(store, db);
            if(!STORE.indexNames.contains(key)){
                let remote = {type,db,'entries':{}};
                callback && callback(remote);
                resolve(remote);
                return 
            }
            T.transaction(store, db).index(key).openKeyCursor().onsuccess = evt => {
                var cursor = evt.target.result;
                if (cursor) {
                    entries[cursor.primaryKey] = {
                        "timestamp": cursor.key
                    };
                    cursor.continue()
                } else {
                    let remote = {
                        type,
                        db,
                        entries
                    };
                    callback && callback(remote);
                    resolve(remote)
                }
            }
        })
    }
    async getLocalSet(mount,callback){return new Promise((resolve,reject)=>{if(!mount)return reject('mount:PATH ERROR');let T=this,FS=T.FS,entries={},index=0,isRealDir=p=>p!=="."&&p!=="..",toAbsolute=root=>p=>T.join2(root,p),check=FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));if(!check)return reject('mount:PATH ERROR');while(check.length){let path=check.pop();index++;if(FS.analyzePath(path).exists){let stat=FS.stat(path);if(FS.isDir(stat.mode)){check.push.apply(check,FS.readdir(path).filter(isRealDir).map(toAbsolute(path)))}entries[path]={timestamp:stat.mtime}}}let result={"type":"local",entries};callback&&callback(result);resolve(result)})}
    get indexedDB(){let ret=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB;if(!ret)throw"IDBFS used, but indexedDB not supported";return ret}
    transaction(store,db,mode){
        db = db || this.db;
        mode = mode?"readonly":"readwrite";
        var transaction = db.transaction([store],mode);
        transaction.onerror = e => {
            e.preventDefault(); throw transaction.error; }; return transaction.objectStore(store);
    }
    async clearDB(storeName){let T=this;if(!storeName)return T.indexedDB.deleteDatabase(T.DB_NAME);var db=await T.GET_DB(storeName);T.transaction(store,db).clear()}
    close(e){this.db&&this.db.close()}
    get StoreNames(){return this.db.objectStoreNames}
    loadLocalEntry(path){let T=this,FS=T.FS,stat,node;return new Promise((resolve,reject)=>{if(FS.analyzePath(path).exists){var lookup=FS.lookupPath(path);node=lookup.node;stat=FS.stat(path)}else{return reject(e)}if(FS.isDir(stat.mode)){return resolve({timestamp:stat.mtime,mode:stat.mode})}else if(FS.isFile(stat.mode)){node.contents=T.getFileDataAsTypedArray(node);return resolve({timestamp:stat.mtime,mode:stat.mode,contents:node.contents})}else{return reject("node type not supported")}})}
    storeLocalEntry(path, entry) {
        let T = this,
            FS = T.FS;
        return new Promise((resolve, reject) => {
            if (FS.isDir(entry.mode)) {
                FS.mkdir(path, entry.mode)
            } else if (FS.isFile(entry.mode)) {
                FS.writeFile(path, entry.contents, {canOwn: true,encoding:"binary"});
            } else {
                reject("node type not supported")
            }
            FS.chmod(path, entry.mode);
            FS.utime(path, entry.timestamp, entry.timestamp);
            resolve(`FS saved:${path}\n`)
        })
    }
    removeLocalEntry(path){let T=this,FS=T.FS;return new Promise((resolve,reject)=>{if(FS.analyzePath(path).exists){var stat=FS.stat(path);if(FS.isDir(stat.mode)){FS.rmdir(path)}else if(FS.isFile(stat.mode)){FS.unlink(path)}resolve(`FS unlink:${path}\n`)}else{return reject(`${path}is not exists\n`)}})}
    loadRemoteEntry(store,path){return new Promise((resolve,reject)=>{var req=store.get(path);req.onsuccess=event=>{resolve(event.target.result)};req.onerror=e=>{reject(req.error);e.preventDefault()}})}
    storeRemoteEntry(store,path,entry){return new Promise((resolve,reject)=>{var req=store.put(entry,path);req.onsuccess=()=>{resolve(`indexDB save:${path}\n`)};req.onerror=e=>{reject(req.error);e.preventDefault()}})}
    removeRemoteEntry(store,path){return new Promise((resolve,reject)=>{var req=store.delete(path);req.onsuccess=()=>{resolve(`indexDB delete:${path}\n`)};req.onerror=e=>{reject(req.error);e.preventDefault()}})}
    splitPath(filename) { var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/; return splitPathRe.exec(filename).slice(1) }
    normalizeArray(parts, allowAboveRoot) { var up = 0; for (var i = parts.length - 1; i >= 0; i--) { var last = parts[i]; if (last === ".") { parts.splice(i, 1) } else if (last === "..") { parts.splice(i, 1); up++ } else if (up) { parts.splice(i, 1); up-- } } if (allowAboveRoot) { for (; up; up--) { parts.unshift("..") } } return parts }
    normalize(path) { var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substring(-1) === "/"; path = this.normalizeArray(path.split("/").filter(p => { return !!p }), !isAbsolute).join("/"); if (!path && !isAbsolute) { path = "." } if (path && trailingSlash) { path += "/" } return (isAbsolute ? "/" : "") + path }
    dirname(path) { var result = this.splitPath(path), root = result[0], dir = result[1]; if (!root && !dir) { return "." } if (dir) { dir = dir.substring(0, dir.length - 1) } return root + dir }
    basename(path) { if (path === "/") return "/"; var lastSlash = path.lastIndexOf("/"); if (lastSlash === -1) return path; return path.substring(lastSlash + 1) }
    extname(path) { return this.splitPath(path)[3] }
    join() { var paths = Array.prototype.slice.call(arguments, 0); return this.normalize(paths.join("/")) }
    join2(l, r) { return this.normalize(l + "/" + r) }
    addJS(buf,cb,iscss){
        let re = false;
        if(!/^http:\/\//.test(buf)){
            re = true;
            buf = window.URL.createObjectURL(new Blob([buf],{type:!iscss ?'text/javascript':'text/css'}));
        }
        let script = document.createElement(!iscss ? 'script':'link');;
        script.src = buf;
        if(iscss){
            script.href = buf;
            script.rel="stylesheet";
        }
        script.onload = e=>{
            cb&&cb(e);
            if(re)window.URL.revokeObjectURL(buf);
            buf = null;
        };
        document[!iscss ? 'body':'head'].appendChild(script);
    }
    download(name,buf,mime){
        let a = document.createElement("a"),
            data = {};
        if (mime) data['type'] = mime;
        a.href = window.URL.createObjectURL(new Blob(buf instanceof Blob ? buf : [buf], data));
        a.download = name;
        a.click();
        a.remove();
    }
    async FS_upload(path,type){
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = (event)=>{
            console.log(event.target.files[0]);
            let reader = new FileReader;
            reader.onload = e => {
                T.SaveDataFile(path,new Uint8Array(e.target.result));
                if(type == 'state')this.emu.loadState(path);
                else this.Module._system_restart&&this.Module._system_restart();
            };
            reader.readAsArrayBuffer(event.target.files[0]);
            input.remove();
        }
        input.click();
    }
    constructor(){
        let d='DOMContentLoaded',
            RUNEJS = ()=>{
                if(document.readyState =='loading') return window.addEventListener(d,RUNEJS);
                this.RUNEJS();
                window.removeEventListener(d,RUNEJS);
        };
        if("undefined" == typeof EJS){
            this.FectchItem({
                url:EJS_ROOT+'assets/js/e.min.png?t='+Math.random(),
                unpack:true,
                store:'data-libjs',
                checksize:true,
                success:files=>{
                    for(var file in files)this.addJS(files[file],e=>RUNEJS());
                }
            });
        }else{
            RUNEJS();
        }
    }
    READY(A,B){
        if("undefined" == typeof EJS)return self.emu = new EJS(A,B);
        this._EJS = [A,B];
    }
    RUNEJS(){
        if(this._EJS){
            if(!document.querySelector(this._EJS[0])){
                this._EJS[0] = document.createElement('div');
                this._EJS[0].id = 'game-'+Math.random().toString().replace(/\./,'');
                this._EJS[0].style.cssText="width: 100vw;height:100vh !important;overflow: hidden;z-index:99;";
                document.body.append(this._EJS[0]);
            }
            self.emu = new EJS(this._EJS[0],this._EJS[1]);
            delete this._EJS;
            return;
        }
        this.createElement('app-emujs',(type,T)=>{
            let div = document.createElement('div');
            div.id = 'game-'+Math.random().toString().replace(/\./,'');
            T.appendChild(div);
            let config = {};
            for(var i=0;i<T.attributes.length;i++){
                let obj = T.attributes[i];
                if(obj.name == 'style'){
                    div.style.cssText = obj.value;
                }else if(obj.name == 'config'){
                    try{
                        config[obj.name] = JSON.parse(obj.value);
                    }catch(e){

                    }

                }else config[obj.name] =  obj.value;
            }
            if(config['gameurl']&&config['system']){
                return self.emu = new EJS(div,config);
            }
            if(self.MyEJS){
                self.MyEJS.call(this,div);
            }
        });
    }
    createElement(myelement, func,func2) {
        class MyElement extends HTMLElement {
            CALLFUNC = func;
            CLOSEFUNC = func2;
            connectedCallback() {
                if(this._install)return;
                this._install = true;
                this.CALLFUNC&&this.CALLFUNC('connect', this);
            }
            disconnectedCallback() {
                this.CLOSEFUNC&&this.CLOSEFUNC('remove', this);
            }
        }
        window.customElements.define(myelement, MyElement);
    }
};

self.LANGUAGE = {
    'zh': {
        "File\'s Panel": "文件面板",
        "Save State":'存档',
        "Load State":'读档',
        "Manual Save SRM":'保存电子存档',
        "Nenge's Panel": '能哥面板',
        'DownLoad SRM':'下载电子存档',
        "Upload SRM": "上传电子存档",
        "DownLoad State": "下载即时状态",
        "Upload State": "上传即时状态",
        "Fast Forward": "加速",
        "Stop Forward": '停止加速',
        "Start Screen Recording": '开始录像',
        "Stop Screen Recording": '停止录像',
        "Reload Page": "刷新页面",
        "SELECT": '选择',
        "START": '开始',
        "MENU": '菜单',
        "Full Screen ?": "让屏幕占满?",
        "Loading...": "载入中",
        "Download Shader":"下载滤镜",
        "OpenGBA RTC": "开启GBARTC",
        "Network Error": "网络错误！",
        "Download Game Core": "载入运行核心",
        "Decompress Game Core": "解压核心进度",
        "Game Core ready": "核心加载完毕！",
        'Download Game Data': '载入游戏数据',
        "Decompress Game Data": "解压游戏数据",
        "Game Data ready": "游戏数据准备完毕！",
        "Take Screenshot": "截图",
        "Home Page": '主页',
        "Cache Manager": "游戏缓存管理",
        "Cache Manage": "游戏缓存列表",
        "Quick Save (F2)": "即存",
        "Quick Load (F4)": "即读",
        "All Clear": "全部清除",
        "Room Name": "房间名",
        "Password:": "密码",
        "Player": "玩家",
        "Name": "名称",
        "Set Player Name": "设置玩家名",
        "Create a Room": "建房",
        "Password (Optional)": "密码(可选)",
        "Password": "密码",
        "Rooms": "房间列表",
        "Players": "玩家数量",
        "Player Name": "玩家名称",
        "Max Players": "最大玩家数量",
        "OK": "好",
        "Clear": "清除",
        "Remove": "移除",
        "Load this Game": "载入这个游戏",
        'on start': '准备开始',
        'on ready': '准备完毕',
        'COMBOKEY': '连发',
        "Enabled": "启用",
        "enabled": "开启",
        "disabled": "关闭",
        'Disabled': '关闭',
        '2xScaleHQ': '2倍柔化',
        "4xScaleHQ": "4倍柔化",
        "4xScaleHQ.glslp": "启用4倍柔化",
        "CRT easymode": "液晶简易",
        "CRT aperture": "液晶模糊",
        "CRT geom": "液晶管道",
        "Shader": "屏幕滤镜",
        "Virtual Gamepad": "虚拟按键",
        "Enable Turbo Buttons": "开启加速选项",
        "Turbo Delay in frames": "加速帧延迟",
        "Solar sensor level": "光感等级",
        "Frameskip": "跳帧",
        "Screen layout": "屏幕布局",
        "top/bottom": "上/下",
        "bottom/top": "下/上",
        "left/right": "左/右",
        "right/left": "右/左",
        "top only": "只有上",
        "bottom only": "只有下",
        "quick switch": "快速切换",
        "hybrid/top": "放大上",
        "hybrid/bottom": "放大下",
        "Screen Rotation": "旋转屏幕",
        "none": "空的",
        "Player 1 Pak": "玩家1 Pak",
        "Player 2 Pak": "玩家2 Pak",
        "Player 3 Pak": "玩家3 Pak",
        "Player 4 Pak": "玩家4 Pak",
        "memory": "内存",
        "rumble": "噪音",
        "Aspect Ratio (Need to refresh page)": "宽高比（需要刷新页面）",
        "16:9 Resolution": "16:9 分辨率",
        "4:3 Resolution": "4:3 分辨率",
        "Enable second memory card": "开启第二内存卡",
        "Pad 1 Type": "Pad 1类型",
        "Pad 2 Type": "Pad 2类型",
        "Pad 3 Type": "Pad 3类型",
        "Pad 4 Type": "Pad 4类型",
        "default": "默认",
        "standard": "标准",
        "analog": "摇杆",
        "negcon": "NeGcon",
        "Enable Vibration": "启动震动",
        "Enable interlacing mode(s)": "启用隔行扫描模式(*)",
        "Enhanced resolution (slow)": "增强分辨率（慢）",
        "Enhanced resolution speed hack": "增强的分辨率速度破解",
        "INSERT COIN": "投币",
        "Aspect ratio": "宽高比",
        "DAR": "窄屏",
        "PAR": "宽屏",
        "CPU overclock": "CPU超频",
        "Diagnostic Input": "诊断输入",
        "None": "",
        "None": "空的",
        "Hold Start": "按住开始",
        "Start + A + B": "开始+A+B",
        "Hold Start + A + B": "按住开始+A+B",
        "Start + L + R": "开始+L+R",
        "Hold Start + L + R": "按住开始+L+R",
        "Hold Select": "按住选择",
        "Select + A + B": "选择+A+B",
        "Hold Select + A + B": "按住选择+A+B",
        "Select + L + R": "选择+L+R",
        "Hold Select + L + R": "按住选择+L+R",
        "Force Neo Geo mode": "强制NeoGeo模式",
        "MVS": "街机",
        "AES": "家用",
        "UNIBIOS": "反作弊",
        "DIPSWITCH": "DIP开关",
        "Voice": "声音",
        "Test mode": "测试模式",
        "Stop mode": "暂停模式",
        "Off": "关闭",
        "On": "开启",
        "Bios select (Fake)": "Bios 选择(虚拟)",
        "Newer": "较新",
        "Older": "较旧",
        "Music": "音乐",
        "Free play": "免费开始",
        "Newer (no intro, calendar)": "较新(无介绍,日历)",
        "Newer (no intro)": "较新(无介绍)",
        "Region (Fake)": "地区(虚拟)",
        "World": "世界",
        "China": "中国",
        "Taiwan": "台湾",
        "Japan": "日本",
        "Korea": "韩国",
        "Hong Kong": "香港",
        "World": "世界",
        "Restart": "",
        "Play": "开始",
        "Pause": "暂停",
        "Played": "已开始",
        "Volume": "音量",
        "Mute (F9)": "静音(F9)",
        "Unmute (F9)": "取消静音(F9)",
        "Enter fullscreen": "进入全屏",
        "Exit fullscreen": "取消全屏",
        "Settings": "设置",
        "Save State (Shift + F2)": "存储状态(Shift + F2)",
        "Load State (Shift + F4)": "读取状态(Shift + F4)",
        "Netplay": "联机",
        "Controls Settings": "控制设置",
        "Cheats": "金手指",
        "Go back to previous menu": "返回上层菜单",
        "Normal": "普通",
        "All": "全部",
        "Reset": "重设",
        "Play Now": "开始游戏",
        "Restart": "重启",
        "Add Cheat": "添加金手指",
        "Close": "关闭",
        "Add Cheat Code": "添加金手指代码",
        "Code": "代码",
        "Description": "描述",
        "Submit": "提交",
        "Player 1": "玩家1",
        "Player 2": "玩家2",
        "Player 3": "玩家3",
        "Player 4": "玩家4",
        "Update": "更新",
        "Cancel": "取消",
        "Press keyboard or gamepad": "按下任意键",
        "Connected gamepad": "连接的手柄",
        "Gamepad": "手柄",
        "Keyboard": "键盘",
        "Set": "设置",
        "Default": "默认",
        "Low": "低",
        "High": "高",
        "Very High": "很高",
        "4 Players Support": "支持4玩家",
        "Color Palette": "彩电调色板",
        "asqrealc": "",
        "nintendo-vc": "任天堂VC",
        "rgb": "红绿蓝",
        "yuv-v3": "YUV版本3",
        "Auto": "自动",
        "NTSC": "NTSC美国制",
        "PAL": "PAL帕尔制",
        "pal": "PAL帕尔制",
        "Sound Quality": "声音质量",
        "NES": "红白机",
        "Famicom": "家庭用机",
        "Turbo Enable": "启用涡轮",
        "Both": "两者",
        "Region": "地区",
        "Dendy": "山寨FC",
        "bmf-final2": "BMF2",
        "bmf-final3": "BMF3",
        "smooth-fbx": "FBX",
        "composite-direct-fbx": "FBX2",
        "pvm-style-d93-fbx": "FBX3",
        "nescap": "nescap",
        "ntsc-hardware-fbx": "ntsc-hardware-fbx",
        "nes-classic-fbx-fs": "nes-classic-fbx-fs",
        "wavebeam": "波动枪",
        "No Sprite Limit": "无限制",
        "asqrealc": "asqrealc",
        "unsaturated-final": "unsaturated-final",
        "sony-cxa2025as-us": "sony-cxa2025as-us",
        "Saved SRM": "保存SRM",
        "Loaded SRM": "读取SRM",
        "GB Colorization": "GB着色",
        "internal": "内置",
        "auto": "自动",
        "Internal Palette": "内置调色板",
        "GBC - Blue": "GBC蓝",
        "GBC - Brown": "GBC褐色",
        "GBC - Dark Blue": "GBC深蓝",
        "GBC - Dark Brown": "GBC深褐色",
        "GBC - Dark Green": "GBC深绿",
        "GBC - Grayscale": "GBC灰色",
        "GBC - Green": "GBC绿色",
        "GBC - Inverted": "GBC底片",
        "GBC - Orange": "GBC橙色",
        "GBC - Pastel Mix": "GBC混合",
        "GBC - Red": "GBC红色",
        "GBC - Yellow": "GBC黄色",
        "Download BIOS": "下载BIOS",
        "BIOS ready": "BIOS 完成",

    }
}