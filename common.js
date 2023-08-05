const Nenge = new class NengeCores {
    version = 6;
    DB_NAME = 'XIUNOBBS';
    DB_STORE_MAP = {
        libjs: {},
        myfile: {
            timestamp: false
        }
    };
    LibStore = 'libjs';
    maxsize = 0x6400000;
    part = '-part-';
    lang = {};
    action = {};
    StoreTable = {};
    isLocal = /^(127|localhost|172)/.test(location.host);
    zipsrc = 'zip.min.js';
    
    constructor() {
        let T = this,
            I = T.I,
            spath = I[31].currentScript,
            language = navigator.language,
            src = spath && spath.src.split('?'),
            JSpath = src && src[0].split('/').slice(0, -1).join('/') + '/';
        JSpath && (JSpath = JSpath.replace('static/', ''));
        I[1].assign(T, {
            on(elm, evt, fun, opt, cap) {
                elm = T.$(elm);
                return T.SP(evt, v => I.on(elm, v, fun, opt === false ? {
                    passive: false
                } : opt, cap)), elm;
            },
            un(elm, evt, fun, opt, cap) {
                elm = T.$(elm)
                return T.SP(evt, v => I.un(elm, v, fun, opt === false ? {
                    passive: false
                } : opt, cap)), elm;
            },
            spilt(evt, func, type) {
                let t = type || ',';
                return I.toArr(I.str(evt) ? evt.replace(/[\s\|,]+/g, t).split(t).filter(v => !I.empty(v)) : evt, func);
            },
            SP: (evt, func, type) => T.spilt(evt, func, type),
            once: (elm, evt, fun, cap) => T.on(elm, evt, fun, {
                passive: false,
                once: true
            }, cap),
            docload(f) {
                let d = I[31];
                if (d.readyState == 'complete') return f && f.call(T);
                T.once(d, 'DOMContentLoaded', f);
            },
            $: (e, f) => e ? I.str(e) ? I.$(e, f) : I.func(e) ? T.docload(e) : e : undefined,
            $$: (e, f) => I.$$(e, f),
            $ce: (e) => I.$c(e),
            $ct(e, txt, c) {
                let elm = T.$ce(e);
                if (txt) elm.innerHTML = I.str(txt) ? txt : txt();
                I.Attr(elm, !c ? undefined : I.str(c) ? {
                    'class': c
                } : c);
                return elm;
            },
            $append(a, b) {
                if (I.str(b)) b = this.$ce(b);
                return a.appendChild(b), b;
            },
            $add: (e, c) => e.classList.add(c) && !1 || e,
            async getItemAppend(name, result, ARG) {
                let part = T.part,
                    keySplit = name.split(part),
                    keyName = keySplit[0],
                    names = I.toArr(result.filesize / T.maxsize).map((v, k) => {
                        let newkey = keyName;
                        if (k > 0) newkey += part + k;
                        return newkey;
                    });
                let data = await F.dbGetItem(names.filter(v => v != name), ARG);
                let file = I.File(names.map(v => {
                    if (data[v]) return data[v].contents;
                    return result.contents;
                }), keyName, result.filetype);
                result.contents = null;
                data = null;
                return file;
            },
            async toZip(files, progress, password) {
                await T.loadZip((a,b,c)=>I.progress(progress,T.zipsrc,b,c));
                const zipFileWriter = new zip.BlobWriter();
                const zipWriter = new zip.ZipWriter(zipFileWriter, {
                    password
                });
                if (!files) return zipWriter;
                if (!I.none(files.length)) {
                    I.toArr(files).map(file => zipWriter.add(file.name, new zip.BlobReader(file), {
                        onprogress:(current,total)=>I.progress(progress,file.name,current,total)
                    }));
                } else if (I.obj(files)) {
                    I.toArr(files).map(file => zipWriter.add(file[0], new zip.Uint8ArrayReader(file[1]), {
                        onprogress:(current,total)=>I.progress(progress,file[0],current,total)
                    }));
                } else {
                    return zipWriter;
                }
                await zipWriter.close({
                    onprogress:(current,total)=>I.progress(progress,'zip' + T.GL('progress'),current,total)
                });
                return await zipFileWriter.getData();
            },
            async loadZip(progress) {
                if (!window.zip) {
                    await T.loadLibjs(T.zipsrc, progress);
                }
            },
            async unZip(u8, ARG) {
                ARG = ARG || {};
                let progress = ARG.progress;
                await T.loadZip(progress);
                var ZipFile = new zip.ZipReader(new zip[I.u8buf(u8) ? 'Uint8ArrayReader' : 'BlobReader'](u8)),
                    contents = {},
                    password = ARG.password,
                    getData = async entry => {
                            contents[entry.filename] = await entry.getData(new zip.Uint8ArrayWriter(), {
                                onprogress: (current, total) =>I.progress(progress,entry.filename,current, total),
                                password
                            });
                        },
                        entrylist = await ZipFile.getEntries(),
                        i = 0;
                if (entrylist) {
                    while (entrylist[i]) {
                        let entry = entrylist[i];
                        i++;
                        if (entry.directory) continue;
                        if (entry.encrypted && !password) {
                            if (password === null) continue;
                            await I.AsyncTry(() => getData(entry), error => {
                                password = window.prompt(T.getLang(error), password);
                                if (password == null) return !0;
                            });
                        } else {
                            await getData(entry);
                        }
                    }
                }
                return contents;
            },
            language:language,
            serviceActive: !1,
            charset:I.LC(I[31].characterSet),
            JSpath,
            ROOT: JSpath && JSpath.replace('assets/js/', ''),
            async openServiceWorker(file) {
                let sw =  I[35];
                if(sw){
                    let controller = !sw.controller?await sw.register(file):sw.controller;
                    I[1].assign(T,{
                        serviceActive:!0,
                        serviceWorker: controller,
                        PostMessage: str => T.serviceWorker.postMessage(str)
                    });
                    T.on(sw,'message',async event=>{
                        let data = event.data;
                        if (I.obj(data)) {
                            let result = await T.CF(data.action, data);
                            if(result.id){
                                data.result = result;
                                T.postMessage(data);
                            }else{
                                T.postMessage(data);
                            }
                        }
                    });
                }
            },
            clearWorker(js) {
                if (sw) {
                    sw.getRegistrations().then(
                        sws => sws.forEach(
                            sw => {
                                if (sw.active) {
                                    if (js && sw.active.scriptURL.includes(js)) sw.unregister();
                                    else if (!js) sw.unregister();
                                }
                            }
                        )
                    )
                }
            },
        });
        let langs = I.LC(language).split('-');
        T.langName = langs[0];
        if(langs[0]=='zh'){
            if(langs[1]=='cn')langs[1]='hans';
            else if(langs[1]!='hk') langs[1] = 'hant';
        }
        T.i18nName = langs.join('-');
        let ehtml = I[31].documentElement;
        if(!I.Attr(ehtml,'color-scheme'))T.MediaQuery('(prefers-color-scheme: light)', bool => I.Attr(ehtml, {
            'color-scheme': bool ? 'light' : 'dark'
        }));
        window.onerror = (msg, url, lineNo, columnNo, error) => alert(msg + lineNo + url);
    }

    get date() {
        return this.I.R(30);
    }
    get time() {
        return this.I[30].now();
    }
    get rand() {
        return Math.random()
    }
    get randNum() {
        return this.I.IntVal(this.rand.toString().slice(2))
    }
    dbName(dbName) {
        return dbName || this.DB_NAME;
    }
    async getItem(table, name, version, ARG) {
        ARG = ARG || {};
        ARG.dbName = this.dbName(ARG.dbName);
        ARG.dbTable = table;
        if (!name) return await this.getAllData(table, 1, ARG);
        let T = this,
            F = T.F,
            I = T.I,
            result = await F.dbGetItem(name, ARG);
        if (I.obj(result)) {
            let ver = result.version,
                type = I.LC(result.type),
                filesize = result.filesize;
            if (version && ver && ver != version) {
                result = null;
                return undefined;
            } else if (filesize && filesize > T.maxsize) {
                result.contents = await T.getItemAppend(name, result, ARG);
            }
            if (result && result.contents && !I.str(result.contents) && !I.obj(result.contents)) {
                let contents = result.contents;
                if (type == 'unpack') {
                    contents = await F.unFile(contents, {
                        password: ARG.password || result.password,
                        progress: ARG.progress
                    });
                } else if ([I.L(15), I.L(32)].includes(type)) {
                    contents = I.blob(contents) ? await contents.text() : I.decode(contents);
                    if (type == I.L(32) || /json/.test(result.filetype)) contents = I.Json(contents);
                } else if (type !=I.L(14) && I.blob(contents)) {
                    contents = await I.U8(contents);
                }
                result.contents = contents;
            }
        }
        if (I.array(result)) return I.toObj(result);
        return result;
    }
    async setItem(table, name, data, dbName) {
        let T = this,
            F = T.F,
            I = T.I,
            maxsize = T.maxsize,
            part = T.part,
            ARG = {
                dbTable: table,
                dbName: T.dbName(dbName)
            };
        if (!I.obj(name)) {
            if (I.obj(data) && data.contents) {
                let contents = data.contents;
                contents = await F.dbU8(contents, maxsize);
                if (I.u8buf(contents) && contents.byteLength > maxsize) {
                    let filesize = contents.byteLength;
                    data.filesize = filesize;
                    data.contents = null;
                    delete data.contents;
                    data = I.toObj(I.toArr(data).filter(e => !I.none(e[1])));
                    let result = await F.dbPutItem(null,
                        I.toArr(filesize / maxsize).map(
                            (v, k) => {
                                let i = k * maxsize;
                                return [k > 0 ? name + part + k : name, I.assign({
                                    contents: I.U8(contents.subarray(i, filesize - i >= maxsize ? i + maxsize : filesize))
                                }, data)]
                            }
                        ),
                        ARG
                    );
                    contents = null;
                    return result;
                } else {
                    data.contents = contents;
                }
            } else if (data) {
                data = await F.dbU8(data, maxsize);
                if (I.u8buf(data) && data.byteLength > maxsize) {
                    return T.setItem(table, name, {
                        contents: data,
                        timestamp: T.date
                    }, dbName);
                }
            }
        }
        return await F.dbPutItem(data, name, ARG);
    }
    async removeItem(table, name, ARG) {
        let T = this,
            I = T.I,
            F = T.F;
        ARG = ARG || {};
        ARG.dbName = T.dbName(ARG.dbName);
        ARG.dbTable = table;
        if (ARG.filesize) ARG.clear = !0;
        if (ARG.clear) {
            if (!ARG.filesize) {
                let contents = await F.dbGetItem(name, ARG);
                ARG.filesize = contents && contents.filesize;
            }
            if (ARG.filesize) {
                let keyName = name.split(T.part)[0];
                return await F.dbRemoveItem(I.toArr(ARG.filesize / T.maxsize).map(k => {
                    let key = keyName;
                    if (k > 0) key += T.part + k;
                    return key;
                }), ARG);
            }
        }
        return await F.dbRemoveItem(name, ARG);
    }
    async getAllData(table, only, ARG) {
        if (!table) return {};
        let T = this;
        ARG = ARG || {};
        return await T.F.dbGetAll(T.I.assign(ARG, {
            dbTable: table,
            only,
            dbName: T.dbName(ARG.dbName)
        }));
    }
    async getContent(table, name, version, ARG) {
        let I = this.I;
        ARG = ARG || {};
        ARG.dbName = this.dbName(ARG.dbName);
        let result = await this.getItem(table, name, version, ARG);
        if (I.array(name)) return I.toObj(I.toArr(result).map(entry => [entry[0], entry[1] && entry[1].contents || entry[1]]));
        return result && result.contents || result;
    }
    async setContent(table, name, contents, ARG) {
        let T = this,I=T.I,dbName=T.dbName(ARG.dbName);
        ARG = ARG || {};
        if(I.obj(name)){
            return T.setItem(table,I.toObj(I.toArr(name).map(e=>[e[0],I.assign({
                contents:e[1],
                timestamp: T.date
            }, ARG.options)])),null,dbName);
        }
        return await T.setItem(table, name, I.assign({
            contents,
            timestamp: T.date
        }, ARG.options),dbName);
    }
    async getAllKeys(table, ARG) {
        let T = this;
        ARG = ARG || {};
        return await T.F.dbGetKeys(T.I.assign(ARG, {
            dbTable: table,
            dbName: T.dbName(ARG.dbName)
        }));
    }
    async getAllCursor(table, index, only, ARG) {
        let T = this;
        ARG = ARG || {};
        return await T.F.dbGetCursor(T.I.assign(ARG, {
            dbTable: table,
            only,
            index,
            dbName: T.dbName(ARG.dbName)
        }));
    }
    async clearTable(tables, dbName) {
        if (!tables) return;
        let T = this,
            F = T.F;
        return await F.dbClearTable(tables, T.dbName(dbName));
    }
    async removeTable(table, dbName) {
        let T = this,
            F = T.F;
        return await F.deleteDatabase(table, T.dbName(dbName));
    }
    getStore(table, dbName, opt) {
        if (!table) return undefined;
        let T = this;
        if (table instanceof T.DataStore) return table;
        dbName = T.dbName(dbName);
        if (!T.StoreTable[dbName]) T.StoreTable[dbName] = {};
        if (!T.StoreTable[dbName][table]) T.StoreTable[dbName][table] = new T.DataStore(table, dbName, opt);
        return T.StoreTable[dbName][table];
    }
    async FetchItem(ARG) {
        let T = this,
            F = T.F,
            I = T.I;
        if (!ARG || I.str(ARG)) ARG = {
            url: ARG || '/'
        };
        if (ARG.libjs) {
            ARG.store = T.LibStore;
            ARG.unpack = !0;
        }
        let arrbuff = I.L(10),
            urlname = F.getname(ARG.url),
            key = ARG.key || urlname || 'index.html',
            keyname = (ARG.libjs ? F.LibKey : '') + key,
            StoreName = ARG.StoreName ? ARG.StoreName : ARG.libjs ? keyname.replace(/\.(zip|7z|rar)$/, '.js') : keyname,
            result, version = ARG.version,
            headers = {},
            u8decode = ARG.decode?ARG.decode:I.decode,
            Store = ARG.store && T.getStore(ARG.store, ARG.dbName, ARG.index, ARG.dbOpt),
            texts = [I.L(33),I.L(32),F.html],
            response,
            contents,
            
        dataOption = ARG.dataOption || {},
            unFile = (buf, password) => F.unFile(buf, I.assign(ARG, {
                password
            })),
            callback = async result => {
                    let filename = '';
                    if (result && result.contents) {
                        filename = result.filename;
                        if (result.type == 'unpack') {
                            result = await unFile(result.contents, result.password);
                            if (result.password) delete result.password;
                        } else result = result.contents;
                    }
                    success(result,filename);
                    ARG = null;
                    return result;
                },
                success = (result,filename) => result && ARG.success && ARG.success(result, headers,filename||headers.filename);
        ARG.filename = keyname;
        if (ARG.onLine) {
            ARG.unset = navigator.onLine;
        }
        if (ARG.type=='u8') {
            ARG.type = arrbuff;
        }
        if (Store) {
            result = await Store.get(StoreName, version, ARG);
            if (result && !ARG.unset) {
                if (!ARG.checksize) {
                    return callback(result);
                }
            }
        }
        response = await F.FetchStart(ARG).catch(e => ARG.error && ARG.error(e.message,headers));
        if (response == undefined) return callback(result);
        headers = F.FilterHeader(I.toObj(response.headers) || {});
        if (!headers.filename) headers.filename = urlname;
        I.exends(headers, response, ['url', 'status', 'statusText']);
        let password = headers.password || ARG.password || undefined;
        if (ARG.type == I.NN(I[31].head)){
            response.body&&response.body.cancel();
            return callback(headers);
        }else if (response.status != 200) {
            //404 500
            if (response.body) {
                let errordata = {};
                if(headers.type== F.getMime(I.L(32))){
                    errordata = await response.json();
                }else{
                    response.body.cancel();
                }
                ARG.error && ARG.error(response.statusText, headers,errordata);
            }
            return callback(result);
        } else if (result && result.filesize && headers.length > 0) {
            if (result.filesize == headers.length) {
                response.body.cancel();
                return callback(result);
            }
            result = null;
        }
        contents = await F.StreamResponse(response, ARG.progress, headers);
        if (ARG.type !=I.L(13)) contents = I.U8(await contents[arrbuff]());
        if (ARG.Filter) contents = await ARG.Filter(contents,ARG);
        let type = headers.type,
            filesize = headers.length||contents.size||contents.byteLength,
            filetype = headers.type;
        if (ARG.autounpack && filesize < T.maxsize * .3) {
            ARG.unpack = !0;
        }
        if(I.u8buf(contents)){
            if(I.inArr(texts,ARG.type||type)){
                contents = u8decode(contents,headers.charset);
                type = I.L(15);
                ARG.unpack = !1;
                if(ARG.type == I.L(32)){
                    contents = I.Json(contents);
                    type = I.L(32);
                }
            }else{
                type = I.L(11);
            }
        }
        filesize = contents.byteLength || contents.length;
        if (Store && ARG.unpack && !ARG.libjs && filesize > T.maxsize) {
            type = 'unpack';
            await Store.put(keyname, I.assign({
                contents: contents,
                timestamp: T.date,
                filename:headers.filename,
                filesize,
                filetype,
                version,
                type,
                password
            }, dataOption));
            Store = null;
        }
        if (ARG.unpack) {
            contents = await unFile(contents, password);
            if (!contents.byteLength) {
                if (contents.password) {
                    password = contents.password;
                    delete contents.password;
                }
                type = 'datalist';
            }
        }
        if (Store && ARG.libjs) {
            if (I.u8buf(contents)) {
                type = I.L(11);
                if(ARG.type!=arrbuff){
                    type =  I.L(14);
                    contents = I.File([contents], urlname, ARG.mime || headers['content-type'] || F.getMime(''));
                }
            } else if (I.str(contents)) {
                type = headers['content-type'] || I.L(15);
            } else if (type == 'datalist') {
                return I.Async(async re=>{
                    let ready= !0;
                    await I.Async(I.toArr(contents).map(async entry => {
                        let filename = F.getname(entry[0]),
                            filetype = F.getMime(filename),
                            filesize = entry[1].byteLength,
                            filedata = entry[1],
                            type = I.L(11);
                            if(I.inArr(texts,ARG.unbuf||filetype)){
                                filedata = u8decode(filedata);
                                type = I.L(15);
                                if(ARG.unbuf==I.L(32)){
                                    type = I.L(32);
                                    filedata=I.Json(filedata);
                                }
                            }else if(ARG.unbuf!=arrbuff){
                                type = I.L(14);
                                filedata = I.File([filedata], filename, filetype);
                            }
                        let writename = F.LibKey + filename;
                        await Store.put(writename, I.assign({
                            contents: filedata,
                            timestamp: T.date,
                            filename,
                            filesize,
                            filetype,
                            version: version||T.version,
                            type,
                        }, dataOption));
                        if (StoreName == writename) {
                            ready = !1;
                            re(callback(filedata));
                        }
                        return true;
                    }));
                    if(ready)return re(callback(contents));
                });
            }
        }
        if (Store) {
            await Store.put(keyname, I.assign({
                contents: contents,
                timestamp: T.date,
                filename:headers.filename,
                filesize,
                filetype,
                version,
                type,
                password
            }, dataOption));
        }
        return callback(contents);
    }
    ajax(ARG) {
        let T = this,
            I = T.I,
            F = T.F;
            ARG = I.assign({url: location.href}, ARG || {});
        return I.Async((resolve) => {
            const request = new XMLHttpRequest(ARG.paramsDictionary);
            let evt = [
                'progress', 'readystatechange', 'error', 'abort', 'load', 'loadend', 'loadstart', 'timeout'
            ];
            let ResHeaders,ReType,
                success = (...a)=>{
                    ARG.success && ARG.success.apply(request,a);
                    resolve(a[0]);
                },
                error = (...a)=>{
                    ARG.error && ARG.error.apply(request,a);
                    resolve(null);
                },
                heads=I.NN(I[31].head)
            ;
            T.on(request, evt[1], event => {
                let readyState = request.readyState;
                if(readyState===2){
                    ResHeaders = F.ajaxHeader(request);
                    ReType = ResHeaders.type;
                    if(!ARG.type){
                        if(ReType==F.getMime(I.L(32))){
                            request.responseType = I.L(32);
                        }else if(ReType==F.getMime('xml')){
                            request.responseType = 'xml';
                        }else if(ResHeaders.filename || !/(text|html|javascript|css)/.test(ReType)){
                            request.responseType = I.L(13);
                        }
                    }else if (ARG.type == heads) {
                        request.abort();
                    }
                }else if(readyState===4){
                    if (ARG.type == heads) return success(ResHeaders);
                    let result = request.response
                    if(I.blob(result)){
                        result = I.File([result],ResHeaders.filename||F.getname(ARG.url),ReType, ResHeaders['last-modified']);
                    }
                    if (request.status == 200) {
                        return success(result, ResHeaders);
                    } else {
                        return error(request.statusText||'net::ERR_FAILED', ResHeaders,result);
                    }

                }
            });
            I.func(ARG[evt[0]]) && T.on(request, evt[0], e =>I.progress(ARG[evt[0]],'', e.loaded,e.total,e));
            I.func(ARG.postProgress) && T.on(request.upload, evt[0], e =>I.progress(ARG.postProgress,'',e.loaded, e.total,e));
            ARG.upload && I.toArr(ARG.upload, v => T.on(request.upload, v[0],v[1]));
            let formData,
                headers = ARG.headers || {};
            if (ARG.overType) request.overrideMimeType(ARG.overType);
            if (ARG.json) {
                formData = I.toJson(ARG.json);
                I.assign(headers, {
                    Accept: [F.getMime(I.L(32)), F.getMime(I.L(33)), '*/*'].join()
                });
            } else if (ARG.post) {
                formData = I.post(ARG.post);
            }
            if (ARG.type&&ARG.type != heads) request.responseType = ARG.type;
            request.open(!formData ? "GET" : "POST", I.get(ARG.url, {inajax: T.time}, ARG.get));
            I.toArr(headers, entry => request.setRequestHeader(entry[0], entry[1]));
            request.send(formData);
        });
    }
    async FetchCache(url, type, exp) {
        let T = this,I=T.I;
        type = type || I.L(33);
        let response = await caches.match(url);
        if (response) {
            if (!exp || T.date - T.I[30].parse(response.headers.get('date')) < exp) {
                return response[type]();
            }
        }
        response = await fetch(url);
        if (response) {
            let cache = await caches.open(T.DB_NAME);
            cache.put(response.url, response.clone());
            return response[type]();
        }
    }
    Set(o, I) {
        const T = this;
        if (!I) I = T.I;
        if (!o.action) o.action = {};
        return I.defines(o, {
            I,
            T,
            RF: T.RF,
            CF: T.CF,
            BF: T.BF
        }, 1), I;
    }
    RF(action, data) {
        const R = this,
            A = R.action,
            I = R.I;
        if (A[action]) return I.func(A[action]) ? I.Apply(A[action], R, data || []) : A[action];
    }
    CF(action, ...args) {
        return this.RF(action, args);
    }
    BF(action) {
        const R = this,
            A = R.action,
            I = R.I;
        if (A[action]) return I.func(A[action]) ? A[action].bind(R) : A[action];
    }
    addJS(buf, cb, iscss, id) {
        let T = this,
            F = T.F,
            I = T.I;
        if (I.blob(buf)) {
            id = F.getKeyName(buf.name);
            if (/css/i.test(buf.type)) iscss = true;
        }
        if (id && T.$('#link_' + id)) return;
        let script = T.$ce(!iscss ? 'script' : 'link'),
            func = callback => {
                buf = F.URL(buf, !iscss ? 'js' : 'css');
                if (iscss) {
                    script.type = F.getMime('css');
                    script.href = buf;
                    script.rel = "stylesheet";
                } else {
                    script.type = F.getMime('js');
                    script.src = buf;
                }
                if (id) I.Attr(script, {
                    id: 'link_' + id
                });
                script.onload = e => {
                    callback && callback(e);
                    if (!iscss) {
                        script.remove();
                        if (/^blob:/.test(buf)) F.removeURL(buf);
                    }
                    buf = null;
                };
                I.Attr(script, {
                    crossorigin: 'anonymous'
                });
                T.$append(!iscss ? I[31].body : I[31].head, script);
            };
        if (!cb) return I.Async(func);
        else return func(cb), script;

    };
    async loadScript(js, ARG, bool) {
        ARG = ARG || {};
        let T = this,
            F = T.F,
            I=T.I;
        ARG.url = F.getpath(js);
        if (bool) {
            ARG.type = I.L(33);
        } else {
            if (!ARG.store) ARG.store = T.LibStore;
            if (!ARG.key) ARG.key = F.LibKey;
        }
        ARG.version = ARG.version || T.version;
        let data = await T.FetchItem(ARG);
        if (!bool) {
            return await T.addJS(data);
        }
        return data;
    }
    async addScript(js, ARG) {
        return await T.addJS(await T.loadScript(js, ARG, !0), null, F.getExt(js) == 'css');
    }
    async loadLibjs(name, progress, version, decode, Filter) {
        let T = this,
            F = T.F;
        return await T.addJS(await F.getLibjs(name, progress, version, decode, Filter), null, F.getExt(name) == 'css');
    }
    async unFile(u8, progress, ARG) {
        return this.F.unFile(u8, this.I.assign({
            progress
        }, ARG || {}));
    }
    customElement(myelement) {
        let T = this;
        window.customElements.define(myelement, class extends HTMLElement {
            /* 警告 如果文档处于加载中,自定义元素实际上并不能读取子元素(innerHTML等) */
            /*因此 如果仅仅操作属性(Attribute),可以比元素出现前提前定义.否则最好文档加载完毕再定义,并不会影响事件触发 */
            get ElmName() {
                return this.tagName.replace(/-/g, '_');
            }
            constructor() {
                super();
                const C = this;
                T.CF(`TAG_${C.ElmName}_INIT`, C);
            }
            connectedCallback() {
                /*文档中出现时触发*/
                const C = this;
                T.CF(`TAG_${C.ElmName}`, C);
                T.docload(() => T.CF(`TAG_${C.ElmName}_READY`, C));

            }
            attributeChangedCallback(name, oldValue, newValue) {
                /*attribute增加、删除或者修改某个属性时被调用。*/
                const C = this;
                T.CF(`TAG_${C.ElmName}_ATTR`, C, {
                    name,
                    oldValue,
                    newValue
                });
            }
            disconnectedCallback() {
                /*custom element 文档 DOM 节点上移除时被调用*/
                const C = this;
                T.CF(`TAG_${C.ElmName}_REMOVE`, C);
            }
        });
    }
    docElm(str, mime) {
        return new DOMParser().parseFromString(str, mime || this.F.html);
    }
    Err(msg) {
        return new Error(msg);
    }
    async download(name, buf, type) {
        let T = this,
            F = T.F,
            I = F.I,
            href;
        if (!buf && name) {
            buf = name;
            name = null;
        }
        if (/^(http|blob:|data:)/.test(buf)) {
            href = buf;
            if (!name && /^(http|blob:)/.test(buf)) name = F.getname(buf);
        } else if (buf) {
            href = F.URL(buf, type);
            if (!name) name = buf.name || 'download.' + (await F.CheckExt(buf) || 'txt');
        }
        let a = T.$ce("a");
        a.href = href;
        a.download = name || 'test.txt';
        a.click();
        a.remove();
    }
    getLang(name, arg) {
        return this.GL(name, arg);
    }
    GL(name, arg) {
        let T = this,
            I = T.I;
        if (!I.none(T.lang[name])) name = T.lang[name];
        else console.log(name);
        return I.obj(arg) ? I.RegRe(name, arg) : name;
    }
    triger(target, type, data) {
        let T = this,
            I = T.I;
        target = T.$(target);
        if (!data) data = {
            detail: target
        };
        return I.evt(type) ? T.dispatch(target, type) : T.dispatch(target, I.R(22, type, data)), target;
    }
    dispatch(obj, evt) {
        return obj.dispatchEvent(evt), obj;
    }
    MediaQuery(query, fn) {
        if (window.matchMedia) {
            let m = window.matchMedia(query);
            this.on('change', e => fn(e.matches, e));
            fn(m.matches);
        }
    }
    I = new class NengeType {
        constructor(T) {
            let I = this,len=0;
            Object.assign(I, {
                File: (o, n, type, d) => I.R(14, o, n, {
                    type,
                    lastModified: d && I.R(30, d).getTime()
                }),
                O:a=>I.CS(a)==I[28]?I[a]:a,
                IF: (o, a) => o instanceof I.O(a),
                IC: (o, a) => I.CS(o) === I[a],
                TP:o=>typeof o,
                N:(o)=>(o = I.O(o))&&o.name||I.CS(o)&&I.CS(o).name||I.TP(o),
                R: (o, ...a) => Reflect.construct(I.O(o), a),
                H: (o, a) => a && o.hasOwnProperty(a) || false,
                L:(o)=>((o=I.O(o))&&I.ST(o)||I.N(o)||I.TS(o)).replace(/^(\w)/,re=>I.LC(re)),
                CS: (o) => o != null && o != undefined && o.constructor,
                DP: (o, a) => Reflect.deleteProperty(o, a),
                FE: (o, f) => f && o.forEach && o.forEach(f) || o,
                FM:(o, f) => f && o.map && o.map(f) || o,
                TS:o=>o.toString(),
                NN:o=>I.LC(o.nodeName),
                ST:o=>I.LC(o[Symbol.toStringTag]||''),
                LC:o=>o.toLowerCase(),
                UC:o=>o.toUpperCase(),
                elm: o => I.IF(o, 2),
                elmform: o => I.IF(o, 3),
                urlpost: o => I.IF(o, 4),
                urlget: o => I.IF(o, 5),
                await: o => I.IF(o, 12),
                blob: o => I.IF(o, 13),
                file: o => I.IF(o, 14),
                evt: o => I.IF(o, 17),
                func: o => I.IF(o, 19),
                header: o => I.IF(o, 21),
                array: o => I.IC(o, 0),
                obj: o => I.IC(o, 1),
                doc: o => I.IC(o, 9),
                buf: o => I.IC(o, 10),
                u8obj: o => I.IC(o, 11),
                u8buf: o => I.IC(o, 11),
                str: o => I.IC(o, 15),
                bool: o => I.IC(o, 20),
                num: o => I.IC(o, 28),
                null: o => o === null,
                none: o => I.TP(o) == I.TP(),
                Arr: o => I.R(0, o),
                ArrFrom: o => I[0].from(o),
                FromEntries: o => I[1].fromEntries(o),
                U8: o => I.u8buf(o) ? o : I.blob(o)?I.Async(async re=>re(I.U8(await o[I.L(10)]()))):I.R(11, o.buffer || o),
                Buf16str: o => I.toArr(o).map(v => I.To16(v)).join(""),
                To16: o => o.toString(16).padStart(2, 0).toLocaleUpperCase(),
                ArrTest: (o, a) => I.toArr(o).filter(entry => entry[1].test(a))[0],
                decode: (o, a) => I.R(25, a).decode(o),
                encode: o => I.R(26).encode(o),
                FormPost: o => I.R(4, o),
                FormGet: o => I.R(5, o),
                Int: o => I.R(28, o),
                IntVal: (o, a) => parseInt(o, a),
                PER: (o, ...a) => I.Int(100 * o / a[0]).toFixed(0) + (!a[1] ? "%" : ""),
                Async: (o) => I.array(o) ? I[12].allSettled(o) : I.func(o) ? I.R(12, o) : null,
                $: (o, a) => (a || I[31]).querySelector(o),
                $$: (o, a) => (a || I[31]).querySelectorAll(o),
                $c: (o) => I[31].createElement(o),
                RegRe: (o, a) => I.toArr(a, e => o = o.replace(I.R(29, "\{" + e[0] + "\}", "g"), e[1])) && 0 || o,
                setStyle: (o, a) => I.toArr(a, x => (o.style || o)[(I.bool(x[1]) && !x[1] ? "remove" : "set") + "Property"](x[0], x[1])) && 0 || o,
                Attr: (o, ...a) => I.obj(a[0]) ? I.toArr(a[0], v => I.Attr(o, v[0], v[1])) : a[0] ? o[(a[1] ? "set" : "get") + "Attribute"](a[0], a[1]) : I.toObj(o.attributes),
                Call: (o, ...a) => Reflect.apply(o, a.shift(), a),
                Apply: (o, a, b) => I.str(o) && !(o = a[o]) || Reflect.apply(o, a, b),
                on: (o, ...a) => o && I.Apply(addEventListener, o, a),
                un: (o, ...a) => o && I.Apply(removeEventListener, o, a),
                getProp: (o, n) => o.getPropertyValue&&o.getPropertyValue(n),
                EachNext: (o, a) => !(a = []) || I.Next(o, s => a.push(s)) || a,
                Next(o, fn) {
                    if (o.entries) o = o.entries();
                    let v = o.next();
                    while (!v.done) {
                        fn(v.value);
                        v = o.next()
                    }
                },
                inArr:(o,...a)=>I.Item(a,v=>o.includes(v))||!1,
                inClass:(o,...a)=>I.Item(a,v=>I.IF(v,o))||!1,
                Item(o, fn) {
                    for (let i = 0; i < o.length; i++) {
                        let re = fn(o.item&&o.item(i)||o[i]);
                        if(re)return re;;
                    }
                },
                EachItem: (o, a) => !(a = []) || I.Item(o, v => {
                    let p = I.getProp(o, v);
                    if (I.str(v) && p) a.push([v,p]);
                    else if (v.value) a.push([v.name, v.value]);
                    else a.push(v);

                }) || a,
                EachValue: (o, a) => !(a = []) || !I.FE(o, (v, k) => a.push([k, v])) || a,
                getEntries: (o) => o.item ? I.EachItem(o) : o.byteLength ? I.ArrFrom(I.R(11, o.buffer || o)) : !I.obj(o) && !I.none(o.length) ? I.ArrFrom(o) : o.entries ? I.EachNext(o) : o.forEach ? I.EachValue(o) : I.Entries(o),
                Entries: (o, f) => I.FE(I[1].entries(o), f),
                toJson: (post) => JSON.stringify(I.Json(post)),
                define: (o, p, attr, bool, rw) => I[1].defineProperty(o, p, !bool ? attr : {
                    get: () => attr,
                    configurable: rw == !0
                }),
                defines: (o, attr, bool, rw) => bool ? !I.toArr(attr, entry => I.define(o, entry[0], entry[1], 1, rw)) || o : I[1].defineProperties(o, attr),
                AsyncTry: (fn, error) => I.Async(async re => {
                    fn().catch(async e => {
                        if (error(e)) return re(null);
                        re(await I.AsyncTry(fn, error));
                    }).then(result => re(result));
                }),
                progress(fn,...a){
                    if(fn){
                        a[0]+=' '+I.PER(a[1],a[2]);
                        return I.Apply(fn,a[3],a);                        
                    }
                },
            });
            
            [
                Array, //0
                Object, //1
                Element, //2
                HTMLFormElement, //3
                FormData, //4
                URLSearchParams, //5
                NamedNodeMap, //6,
                DOMStringMap, //7
                CSSStyleDeclaration, //8
                Document, //9
                ArrayBuffer, //10
                Uint8Array, //11,
                Promise, //12
                Blob, //13
                File, //14
                String, //15
                DOMRect, //16
                Event, //17
                KeyboardEvent, //18
                Function, //19
                Boolean, //20
                Headers, //21
                CustomEvent, //22,
                HTMLCollection, //23
                FileList, //24
                TextDecoder, //25,
                TextEncoder, //26
                NodeList, //27
                Number, //28
                RegExp, //29
                Date, //30
                document, //31
                JSON,//32
                Text,//33
                Node,//34
                navigator.serviceWorker,//35
            ].forEach(v => {
                I[len] = v;
                len++;
            });
        }
        assign(...arg) {
            let I = this;
            return I.Apply(I[1].assign, {}, I.array(arg[0]) ? arg[0] : arg)
        }
        exends(a, b, c) {
            if(b){
                if (c) this.toArr(c, v => a[v] = b[v]);
                else a = this.assign(a, b);
            }
            return a;
        }
        get mobile() {
            return 'ontouchend' in this[31]
        }
        post(obj) {
            let I = this;
            let post = I.urlpost(obj) ? obj : I.FormPost(I.elmform(obj) ? obj : I.str(obj) ? I.$(obj) : undefined);
            if (I.obj(obj)) I.toArr(obj, v => post.append(v[0], v[1]));
            return post;
        }
        get(url, ...arg) {
            let I = this,
                urlsearch = url.split('?'),
                urls = urlsearch[1] && urlsearch[1].split('#')[0] || '',
                more = I.toArr(arg).map(e => e ? I.FormGet(e) : '').join('&'),
                data = I.FormGet(urls + '&' + more).toString().replace(/=&/g, '&');
            return urlsearch[0] + (data ? '?' + data : '');
        }
        toObj(obj) {
            if (!obj) return {};
            let I = this;
            if (I.obj(obj)) return obj;
            else if (I.array(obj)) obj = I.FromEntries(obj);
            else obj = I.FromEntries(I.getEntries(obj));
            return obj;
        }
        toArr(obj, func) {
            if (!obj) return [];
            let arr = [],
                I = this,
                type = I.CS(obj);
            if (type == I[0]) arr = obj;
            else if (I.obj(obj)) arr = I.Entries(obj);
            else if (type == I[28]) arr = Array.from("".padStart(Math.ceil(obj)));
            else if (type != I[0]) arr = I.getEntries(obj);
            else arr = obj;
            if (I.func(func)) return I.FE(arr, func);
            return arr;
        }
        Json(post) {
            let I = this;
            if (I.u8buf(post)) post = I.decode(post);
            return I.str(post) ? (I.R(19, 'return ' + post))() : post;
        }
        empty(data) {
            if (!data) return true;
            if (this.str(data)) return data.trim().length == 0;
            if (this.array(data)) return data.length == 0;
            if (this.obj(data)) return this.toArr(data).length == 0;
            return false;
        }
    }(this);
    F = new class NengeUtil {
        Libjs = {};
        LibKey = 'script-';
        ext16 = {
            '7z': /^377ABCAF271C/,
            rar: /^52617221/,
            zip: /^504B0304/,
            png: /^89504E470D0A1A0A/,
            gif: /^47494638(3761|3961)/,
            jpg: /^FFD8FFE000104A464946/,
            webp: /^52494646\w{8}57454250/,
            pdf: /^255044462D312E/,
            bmp: /^424D\w{4}0{8}/,
        };
        exttype = {
            'text': ['css', 'scss', 'sass', 'html', 'htm', 'xml'],
            'text/javascript': ['js'],
            'text/css': ['style'],
            'text/html': ['htm', 'php'],
            'text/plain': ['txt'],
            'text/xml': ['vml'],
            'image': ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'apng', 'heic'],
            'font': ['woff', 'woff2', 'ttf', 'otf'],
            'image/svg+xml': ['svg'],
            'application/octet-stream': ['*'],
            'application': ['pdf', 'json'],
            'application/x-zip-compressed': ['zip'],
            'application/x-rar-compressed': ['rar'],
            'application/x-7z-compressed': ['7z'],
        };
        idb = window.indexedDB || window.webkitindexedDB;
        dbConf = {};
        DataBase = {};
        dbVer = {};
        dbSetConf(tableName, dbName, index, opt) {
            let F = this,
                I = F.I,
                info = F.dbConf;
            if (tableName) {
                if (!info[dbName]) info[dbName] = {};
                if (!info[dbName][tableName]) info[dbName][tableName] = opt || index && I.toObj([
                    [index, false]
                ]) || {};
            }
            if (info != F.dbConf) F.dbConf = info;
            return info;

        }
        async dbLoad(tableName, dbName, index) {
            let F = this,
                I = F.I,
                info = F.dbSetConf(tableName, dbName, index),
                tables = info[dbName],
                version, db = F.DataBase[dbName];
            if (db) {
                if (I.await(db)) db = await db;
                if (db.objectStoreNames.contains(tableName)) return db;
            }
            if (!db) {
                F.DataBase[dbName] = F.dbOpen(dbName, tables, version);
                db = await F.DataBase[dbName];
            }
            if (!F.dbCheckTable(db, tables).length) {
                return db;
            }
            throw 'indexDB error';
        }
        async dbOpen(dbName, dbStore, version, upgrad) {
            let F = this,
                T = F.T,
                I = T.I;
            if (upgrad && !dbStore) {
                if (!version) {
                    if (F.DataBase[dbName]) {
                        (await F.DataBase[dbName]).close();
                        delete F.DataBase[dbName];
                    } else if (!F.dbVer[dbName]) {
                        if (F.idb.databases) F.dbVer = I.toObj((await F.idb.databases()).map(v => [v.name, v.version]));
                        else F.dbVer[dbName] = await I.Async(resolve => {
                            let req = F.idb.open(dbName);
                            T.once(req, 'success', async e => {
                                let db = e.target.result;
                                resolve(db.version);
                                db.close();
                            });
                        });
                    }
                    version = F.dbVer[dbName] + 1;
                }
            }
            return I.Async((resolve, reject) => {
                let req = F.idb.open(dbName, version);
                T.once(req, 'error', async err => {
                    reject(err);
                });
                T.once(req, 'upgradeneeded', upgrad || (async e => {
                    console.log('upgrad indexDB:' + dbName);
                    let db = e.target.result;
                    F.dbCheckTable(db, dbStore, v => {
                        let storeObj = db.createObjectStore(v[0]);
                        I.toArr(v[1], index => storeObj.createIndex(
                            index[0], index[1] && index[1].key || index[0], index[1] && index[1].options || index[1] || {
                                unique: false
                            }
                        ))

                    });
                }));
                T.once(req, 'success', async e => {
                    let db = e.target.result;
                    F.dbVer[dbName] = db.version;
                    //F.DataBase[dbName] = db;
                    I.toArr(db.objectStoreNames, v => F.dbConf[dbName][v] = F.dbConf[dbName][v] || {});
                    if (upgrad) return resolve(!0);
                    if (!F.dbCheckTable(db, dbStore).length) resolve(db);
                    else {
                        db.close();
                        F.dbOpen(dbName, dbStore, db.version + 1).then(db => resolve(db));
                    }
                });
            });
        }
        dbCheckTable(db, tables, func) {
            if (!db) return [];
            return this.I.toArr(tables).filter(v => {
                if (!db.objectStoreNames.contains(v[0])) return func && func(v) || true;
            });
        }
        async dbU8(contents, maxsize) {
            let I = this.I;
            if (I.await(contents)) {
                contents = await contents;
            }
            if (I.str(contents) && contents.lenth * 4 > maxsize) {
                contents = I.encode(contents);
            } else if (I.blob(contents) && contents.size > maxsize) {
                contents = await I.U8(contents);
            } else if (contents.buffer) {
                contents = I.U8(contents);
            }
            return contents;

        }
        async dbSelect(ARG, ReadMode) {
            let db = await this.dbLoad(ARG.dbTable, ARG.dbName, ARG.index),
                tdb = db.transaction([ARG.dbTable], ReadMode ? "readonly" : "readwrite");
            return tdb.objectStore(ARG.dbTable);
        }
        async dbGetItem(name, ARG) {
            let F = this;
            return F.dbFetchItem(name, await F.dbSelect(ARG, !0))
        }
        dbFetchItem(name, DB) {
            let F = this;
            if (F.str(name)) return F.Async(resolve => DB.get(name).onsuccess = e =>{
                let result = e.target.result;
                if(result&&result.type==F.I.L(34)){
                    result.contents = F.T.docElm(result.contents);
                    if(result.tag){
                        result.contents = F.T.$(result.tag,result.contents);
                    }
                }
                resolve(result);
            });
            return F.Async(name.map(async v => [v, await F.dbFetchItem(v, DB)]));
        }
        async dbPutItem(data, name, ARG) {
            let F = this;
            return F.dbWriteItem(await F.dbSelect(ARG), name, data);
        }
        dbWriteItem(DB, name, data) {
            let F = this;
            if (data){
                if(F.I.inClass(34,data,data.contents)){
                    data = F.HtmltoStr(data);
                }
                return F.Async(resolve => DB.put(data, name).onsuccess = e => resolve(e.target.result));}
            return F.Async(F.I.toArr(name).map(entry => F.dbWriteItem(DB, entry[0], entry[1])));
        }
        async dbRemoveItem(name, ARG) {
            let F = this,
                I = F.I,
                DB = await this.dbSelect(ARG);
            if (ARG.index) DB = DB.index(ARG.index);
            if (I.array(name)) return I.Async(name.map(v => v && I.Async(resolve => DB.delete(v).onsuccess = e => resolve(v))));
            return I.Async(resolve => DB.delete(name).onsuccess = e => resolve(name));
        }
        dbClearItem(name, DB) {
            let F = this;
            if (F.str(name)) return F.Async(resolve => DB.delete(name).onsuccess = e => resolve(name));
            return F.Async(name.map(v => F.dbClearItem(v, DB)));
        }
        async dbGetAll(ARG) {
            let F = this,
                I = F.I,
                T = F.T,
                DB = await F.dbSelect(ARG, !0);
            return I.Async(callback => {
                if (ARG.index) DB = DB.index(ARG.index);
                let entries = {},
                    Cursor = DB.openCursor(ARG.Range);
                T.on(Cursor, 'success', evt => {
                    let cursor = evt.target.result;
                    if (cursor) {
                        if (ARG.only && T.part && T.maxsize && I.u8buf(cursor.value.contents) && cursor.value.filesize > T.maxsize) {
                            let skey = cursor.primaryKey.split(T.part),
                                newkey = skey[0],
                                index = skey[1] || 0;
                            if (!entries[newkey]) {
                                let contents = I.U8(cursor.value.filesize);
                                contents.set(cursor.value.contents, index * T.maxsize);
                                delete cursor.value.contents;
                                entries[newkey] = F.assign(cursor.value, {
                                    contents
                                })
                            } else {
                                entries[newkey].contents.set(cursor.value.contents, index * T.maxsize);
                            }
                        } else {
                            entries[cursor.primaryKey] = cursor.value;
                        }
                        cursor.continue();
                    } else {
                        callback(entries);
                    }
                });
                T.on(Cursor, 'error', e => callback(entries));

            });
        }
        async dbGetKeys(ARG) {
            let F = this,
                I = F.I;
            let DB = await F.dbSelect(ARG, !0);
            return I.Async(resolve => {
                if (ARG.index) DB = DB.index(ARG.index);
                DB.getAllKeys(ARG.Range).onsuccess = e => {
                    resolve(ARG.only ? I.toArr(e.target.result).filter(v => !v.includes(F.T.part)) : e.target.result)
                };
            });

        }
        async dbGetCursor(ARG) {
            let F = this,
                T = F.T,
                I = F.I;
            if (I.str(ARG)) ARG = {
                index: ARG
            };
            let index = ARG.index,
                DB = await F.dbSelect(ARG, !0),
                len = DB.indexNames.length;
            if (len && !index) {
                index = DB.indexNames[0];
            } else if (!len) {
                return F.dbGetKeys(ARG);
            }
            return I.Async(resolve => {
                let entries = {};
                DB.index(index).openKeyCursor(ARG.Range).onsuccess = evt => {
                    let cursor = evt.target.result;
                    if (cursor) {
                        if (!ARG.only || T.part && !cursor.primaryKey.includes(T.part)) {
                            entries[cursor.primaryKey] = cursor.key
                        }
                        cursor.continue()
                    } else {
                        resolve(entries)
                    }
                }
            })

        }
        async dbClearTable(tables, dbName) {
            let F = this,
                I = F.I;
            return await I.Async((I.str(tables) ? [tables] : tables).map(async dbTable => (await F.dbSelect({
                dbTable,
                dbName
            })).clear()));
        }
        async deleteDatabase(table, dbName) {
            let F = this;
            if (!table) {
                return F.idb.deleteDatabase(dbName);
            }
            await F.dbOpen(dbName, null, null, e => e.target.result.deleteObjectStore(table));
        }
        get html(){
            let I = this.I;
            return this.getMime(I.NN(I[31].documentElement))
        }
        constructor(T) {
            let F = this,
                I = T.Set(F);
            I[1].assign(F, {
                CheckExt(u8) {
                    let buf = u8.slice(0, 16),
                        mimeHead = F.BF('mimeHead');
                    let text = I.blob(buf) ? I.U8(buf): I.str(buf) ? I.encode(buf) : buf;
                    return I.await(text) ? I.Async(async e => {
                        e(mimeHead(await text))
                    }) : mimeHead(text);
                },
                async getLibjs(jsfile, progress, version, decode, Filter) {
                    let jsname = F.getname(jsfile),
                        file = jsname.replace(/\.zip$/, '.js');
                    if (F.Libjs[jsname]) return F.Libjs[jsname];
                    if (F.Libjs[file]) return F.Libjs[file];
                    version = version || T.version;
                    let contents = await T.getStore(T.LibStore).data(F.LibKey + file, version);
                    if (!contents) {
                        if (/\.zip$/.test(jsname)) await T.loadZip(progress);
                        contents = await T.FetchItem({
                            url: F.getlibpath(jsfile) + '?' + T.time,
                            libjs: !0,
                            version: version,
                            progress,
                            Filter,
                            decode,
                            unbuf:decode?I.L(33):!1,
                        });
                    }
                    if (/json$/.test(file)) {
                        F.Libjs[file] = contents;
                    } else if (contents) {
                        if (I.obj(contents)) {
                            I.toArr(contents, entry => F.Libjs[entry[0]] = entry[1] && F.URL(entry[1], entry[0]));
                        } else {
                            F.Libjs[file] = F.URL(contents, file);
                        }
                    }
                    contents = null;
                    return F.Libjs[file]
                },
                URL(u8, type) {
                    if (I.str(u8) && /^(blob|http|\/|\w+\/|\.+\/)[^\n]*$/i.test(u8)) return u8;
                    return window.URL.createObjectURL(I.blob(u8) ? u8 : new Blob([u8], {
                        type: F.getMime(type || I.u8buf(u8) && F.CheckExt(u8) || 'js')
                    }));
                },
                removeURL(url) {
                    return window.URL.revokeObjectURL(url);
                },
                getlibpath(js) {
                    let x = /^[\w\-\.]+$/.test(js) ? 'lib/' : '';
                    return F.getpath(x + js);
                },
                getname(str) {
                    let name = (str || '').split('/').pop().split('?')[0].split('#')[0];
                    if(!name){
                        str = str.match(/\/\?([\w\-\_\.]+?\.[a-z0-9A-Z]+)\&?/);
                        if(str){
                            name = str[1];
                        }
                    }  
                    return name||'';
                },
                getpath(js) {
                    return /^(\/|https?:\/\/|static\/js\/|data\/|assets|blob\:|\.|\/)/.test(js) ? js : T.JSpath + js;
                },
                getExt(name) {
                    return I.LC(F.getname(name).split('.').pop());
                },
                getKeyName(name) {
                    let p = F.getname(name).split('.');
                    return p.slice(0, p.length > 1 ? p.length - 1 : 1).join('.');
                },
                getMime(type, chartset) {
                    let mime;
                    if (F.exttype[type]) mime = type;
                    else {
                        if (!F.extlist) {
                            F.extlist = I.assign(I.toArr(F.exttype).map(
                                entry => I.toObj(I.toArr(entry[1]).map(v => {
                                    let key = entry[0];
                                    if (!/\//.test(key)) {
                                        delete F.exttype[key];
                                        key += '/' + v;
                                        F.exttype[key] = !0;
                                    }
                                    return [v, key]
                                }))));
                        }
                        mime = F.extlist[F.getExt(type)] || F.extlist['*'];
                    }
                    if (chartset && /(text|javascript|xml|json)/.test(mime)) return mime + ';chartset=utf8';
                    return mime;
                },
                async unFile(u8, ARG) {
                    ARG = ARG || {};
                    if (I.await(u8)) u8 = await u8;
                    if (I.array(u8)) u8 = I.U8(u8);
                    let ext = I.file(u8) && /(zip|rar|7z)/i.test(F.getExt(u8.name)) && F.getExt(u8.name) || await F.CheckExt(u8);
                    if (F.action[ext]) {
                        if (!ARG.PassExt || !ARG.PassExt.includes(zip)) return await F.CF(ext, u8, ARG);
                    }
                    if (I.blob(u8)) u8 = await I.U8(u8);
                    return u8;
                },

                async StreamResponse(response, progress, headers) {
                    if (!response.body || !response.body.getReader) return response.blob();
                    let maxLength = headers['content-length'] || 0,
                        havesize = 0,
                        speedsize = 0,
                        reader = await response.body.getReader();
                    let chunks = []; // 接收到的二进制块的数组（包括 body）
                    while (true) {
                        const {
                            done,
                            value
                        } = await reader.read();
                        if (done) {
                            break;
                        } else {
                            speedsize = value.length;
                            havesize += speedsize;
                        }
                        if(progress){
                            let statustext = " ";
                            if (maxLength && havesize <= maxLength) statustext = I.PER(havesize, maxLength);
                            else statustext = `(${(havesize / 1024).toFixed(1)}KB)`;
                            //下载进度
                            progress((headers.filename||'')+' ' + statustext, havesize,  maxLength,speedsize);

                        }
                        chunks.push(value);
                    }
                    return I.File(chunks, headers.filename, headers['content-type'], headers['last-modified']);
                },
                FilterHeader(headers) {
                    I.toArr(headers, entry => {
                        if (/content-/.test(entry[0])) {
                            let name = entry[0].replace('content-', '');
                            let content = decodeURI(entry[1]);
                            if (isFinite(content)) content = I.IntVal(content);
                            switch (name) {
                                case 'disposition':
                                    let attachName = content.match(/^attachment;\s*filename=[\"\']+?(.+)[\"\']+?$/i);
                                    if (attachName && attachName[1]) {
                                        headers.filename = decodeURI(attachName[1]);
                                    }
                                    break;
                                case 'length':
                                case 'password':
                                    headers[name] = content;
                                    break;
                                case 'type':
                                    content = I.LC(content);
                                    let v = content.split(';');
                                    headers[name] = v[0].trim();
                                    if (v[1]) headers.charset = I.LC((v[1].split('=').pop()).trim());
                                    break;
                            }
                        }
                    });
                    return headers;
                },
                ajaxHeader(request){
                    return F.FilterHeader(I.toObj((request.getAllResponseHeaders() || '').trim().split(/[\r\n]+/).map(line => {
                        let parts = line.split(': ');
                        return [parts.shift(), parts.join(': ')];
                    }).concat([
                        ['status', request.status],
                        ['statusText', request.statusText],
                        ['url', request.responseURL]
                    ])));
                },
                async FetchStart(ARG) {
                    let post,
                        data = {
                            headers: {}
                        };
                    I.toArr([I.L(21), 'context', 'referrer', 'referrerPolicy', 'mode', 'credentials', 'redirect', 'integrity', 'cache'], v => I.none(ARG[v]) || (data[v] = ARG[v], I.DP(ARG, v)));
                    if (ARG.json) {
                        post = I.toJson(ARG.json);
                        data.headers.Accept = F.getMime(I.L(32));
                    } else if (ARG.post) {
                        post = I.post(ARG.post);
                    }
                    if (post) {
                        data.method = 'POST';
                        data.body = post;
                    }
                    I.toArr(['get', 'post', I.L(32)], v => I.DP(ARG, v));
                    return fetch(I.get(ARG.url, ARG.get), data);
                },
                HtmltoStr(obj){
                    if(I.IF(obj,34)&&!obj.contents){
                        obj = {contents:obj}
                    }
                    let elm = obj&&obj.contents
                    if(I.IF(elm,34)){
                        if(elm.outerHTML){
                            obj.contents = elm.outerHTML;
                            obj.tag = I.NN(I[31].body);   
                        }else{
                            obj.contents = elm.documentElement.outerHTML;
                        }
                        obj.type = I.L(34);
                    }
                    return obj;
                },
                dbConf: I.toObj([
                    [T.DB_NAME, T.DB_STORE_MAP]
                ]),
                Async: I.Async,
                str: I.str,
                

            });
            I[1].assign(F.action, {
                mimeHead(s) {
                    let text = I.Buf16str(s),
                        result = I.ArrTest(F.ext16, text);
                    if (result && result[0]) return result[0];
                    return '';
                },
                async rar(u8, ARG, src) {
                    if (I.blob(u8)) {
                        if (!ARG.filename && u8.name) ARG.filename = u8.name;
                        u8 = await I.U8(u8);
                    }
                    src = src || 'libunrar.min.zip';
                    let progress = ARG.progress,
                        _password = ARG.password,
                        url = await F.getLibjs(src,progress),
                        packtext;
                    return I.Async(complete => {
                        let contents, worker = new Worker(url);
                        worker.onmessage = result => {
                                let data = result.data,
                                    t = data.t;
                                if (1 === t) {
                                    if (contents) complete(contents);
                                    else complete(u8);
                                    result.target.terminate();
                                } else if (2 === t) {
                                    if (!contents) contents = {};
                                    contents[data.file] = data.data;
                                } else if (4 === t && data.total > 0 && data.total >= data.current) {
                                    if (progress) {
                                        I.progress(progress,F.getname(data.file||''),data.current, data.total);
                                    }
                                } else if (-1 == t) {
                                    let password = prompt(T.getLang(data.message), _password || '');
                                    if (!password) {
                                        complete(u8);
                                        return result.target.terminate();
                                    }
                                    if (ARG.unpack) contents.password = password;
                                    _password = password;
                                    worker.postMessage({
                                        password
                                    });
                                }
                            },
                            worker.onerror = async error => {
                                complete(u8);
                                worker.terminate();
                            };
                        worker.postMessage({
                            contents: u8,
                            password: _password
                        });
                    });

                },
                '7z': function (u8, ARG) {
                    return F.CF('rar', u8, ARG, 'extract7z.zip');
                },
                async zip(u8, ARG) {
                    if (T.zipsrc) return T.unZip(u8, ARG);
                    return F.CF('rar', u8, ARG, 'extractzip.zip');
                }
            });
        }
    }(this);
    DataStore = (T => {
        let I = T.I;
        return class Store {
            constructor(t, n, o) {
                let S = this;
                I[1].assign(S, {
                    table: t,
                    name: n || S.T.DB_NAME,
                    getItem: (...a) => S.callFunc(T.getItem, a),
                    setItem: (...a) => S.callFunc(T.setItem, a),
                    removeItem: (...a) => S.callFunc(T.removeItem, a),
                    getAllData: (...a) => S.callFunc(T.getAllData, a),
                    getContent: (...a) => S.callFunc(T.getContent, a),
                    setContent: (...a) => S.callFunc(T.setContent, a),
                    getAllKeys: (...a) => S.callFunc(T.getAllKeys, a),
                    getAllCursor: (...a) => S.callFunc(T.getAllCursor, a),
                    clearTable: (...a) => S.callFunc(T.clearTable, a),
                    removeTable: (...a) => S.callFunc(T.removeTable, a),
                    transaction: bool => T.F.dbSelect(S.setName(), bool),
                    setName: (t) => I[1].assign({
                        dbName: S.name,
                        dbTable: S.table,
                        clear: !0
                    }, t),
                    get: (t, e, a) => S.getItem(t, e, S.setName(a)),
                    put: (t, e) => S.setItem(t, e, S.name),
                    remove: (t, e) => S.removeItem(t, S.setName(e)),
                    data: (t, e, a) => S.getData(t, e, a),
                    getData: (t, e, a) => S.getContent(t, e, S.setName(a)),
                    setData: (t, e, a) =>e==undefined?S.getData(t,a):S.setContent(t, e, S.setName(a)),
                    keys: (t) => S.getAllKeys(S.setName(t)),
                    cursor: (t, e, a) => S.getAllCursor(t, e, S.setName(a)),
                    all: (t, e) => S.getAllData(t, S.setName(e)),
                    clear: () => S.clearTable(S.name),
                    delete: () => S.removeTable(S.name),
                    callFunc: (n, a) => I.Apply(n, T, [this.table].concat(a))

                });
                S.read = S.get;
                S.write = S.put;
                S.load = S.getData;
                S.save = S.setData;
                T.F.dbSetConf(t, n, !1, o || {})
            }
        }
    })(this);
};