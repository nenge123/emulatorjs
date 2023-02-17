var EJS = (function (modules) {
    'use strict';
    class NengeDisk {
        constructor(T) {
            let D = this,
                I = T.I;
            I.defines(this, {
                T,
                I
            }, 1);
            D.callaction = T.callaction;
        }
        speed = 1000 / 60;
        action = {};
        DB = {};
        SetModule(Module) {
            let D = this;
            if (Module) D.I.defines(D, {
                Module
            }, 1);
            if (!D.Module) return;
            D.MEMFS.stream_ops.write = function (stream, buffer, offset, length, position, canOwn) {
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
                        D.update(stream);
                        node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
                        node.usedBytes = length;
                        return length
                    } else if (position + length <= node.usedBytes) {
                        node.contents.set(buffer.subarray(offset, offset + length), position);
                        return length
                    }
                }
                D.MEMFS.expandFileStorage(node, position + length);
                if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position);
                else {
                    for (var i = 0; i < length; i++) {
                        node.contents[position + i] = buffer[offset + i]
                    }
                }
                node.usedBytes = Math.max(node.usedBytes, position + length);
                return length
            };
            if (D.MEMFS.ops_table) D.MEMFS.ops_table.file.stream.write = D.MEMFS.stream_ops.write;
        }
        SetDB(DB) {
            this.I.assign(this.DB, DB);
        }
        get FS() {
            return this.Module.FS;
        }
        get MEMFS() {
            return this.Module.MEMFS || this.FS.filesystems.MEMFS;
        }
        get HEAP8() {
            return this.Module.HEAP8;
        }
        getStore(mount) {
            let D = this,
                DB = D.DB,
                path = mount.mountpoint || mount;
            if (!DB[path]) {
                return false;
            }
            return DB[path];
        }
        mount(mount) {
            let D = this;
            if (!D.FS.analyzePath(mount.mountpoint).exists) {
                D.FS.createPath('/', mount.mountpoint, !0, !0);
            }
            let len = mount.mountpoint.split('/').length;
            let node = D.MEMFS.createNode(len < 3 ? D.FS.root : null, len < 3 ? mount.mountpoint.split('/').pop() : mount.mountpoint.replace(/^\//, ''), 16384 | 511, 0);
            if (D.getStore(mount)) {
                if (!D.__mount) D.__mount = [];
                D.__mount.push(D.syncfs(mount, txt => D.callaction('DiskReadyOut', txt)));
            }
            return node;
        }
        mountReady() {
            return Promise.all(this.__mount || []);
        }
        async syncfs(mount, callback, error) {
            let D = this;
            callback = error instanceof Function ? error : callback;
            let store = D.getStore(mount);
            let result;
            if (!mount.isReady) {
                result = await D.writeToFS(store);
            } else {
                result = await D.syncWrite(store, mount);
            }
            mount.isReady = true;
            (callback instanceof Function) && callback(result);
            return result;
        }
        async writeToFS(store) {
            let D = this,
                I = D.I;
            return I.toArr(await store.all(true)).map(entry => D.storeLocalEntry(entry[0], entry[1])).join("\n");
        }
        async syncWrite(store, mount) {
            let D = this,
                I = D.I,
                IsReady = mount.isReady,
                local = D.getLocalSet(mount),
                remote = await D.getRemoteSet(store),
                src = (IsReady ? local : remote).entries || {},
                dst = (!IsReady ? local : remote).entries || {};
            let result = await Promise.all(I.toArr(src).filter(entry => {
                if (!entry[1]) return '';
                let path = entry[0],
                    e2 = dst[path];
                if (!e2 || entry[1].timestamp > e2.timestamp) {
                    return true;
                }
                return false;

            }).map(entry => entry[0]).sort().map(async path => {
                if (!IsReady) {
                    let contents = await store.get(path);
                    if (contents) {
                        return D.storeLocalEntry(path, contents);
                    }
                } else {
                    let contents = D.loadLocalEntry(path);
                    if (contents) {
                        await store.put(path, contents);
                        return 'DB saved:' + path;
                    }
                }
            }));
            result.concat(await Promise.all(I.toArr(dst).filter(entry => {
                if (!entry[1]) return '';
                let e2 = src[entry[0]],
                    path = entry[0];
                if (!e2 || entry[1].timestamp > e2.timestamp) {
                    return true;
                }
                return false;

            }).map(entry => entry[0]).sort().map(async path => {
                let msg = '';
                if (!IsReady) {
                    D.removeLocalEntry(path);
                    msg = 'FS remove:';
                } else {
                    await store.remove(path, true);
                    msg = 'DB remove:';
                }
                return msg + path;
            })));
            D.callaction('indexdb-sync', IsReady, result);
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
                FS = D.FS
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
        async getRemoteSet(store, callback) {
            let remote = {
                'type': "remote",
                store,
                entries: await store.cursor('timestamp', true)
            };
            callback && callback(remote);
            return remote;
        }
        getLocalSet(mount, callback) {
            let D = this;
            if (!mount) return console.log('mount:PATH ERROR');
            let result = {
                "type": "local",
                entries: D.getLocalList(mount.mountpoint)
            };
            callback && callback(result);
            return result
        }
        getLocalList(mountpoint) {
            return this.getPathList(mountpoint, !0);
        }
        getPathList(mountpoint, bool) {
            if (!this.Module) return {};
            mountpoint = mountpoint || '/';
            let D = this,
                FS = D.FS,
                entries = {},
                filterRoot = [".", ".."].concat(mountpoint == '/' ? ["dev", "tmp", "proc"] : []),
                isRealDir = p => !bool || !filterRoot.includes(p),
                toAbsolute = root => p => D.join2(root, p),
                check = D.stat(mountpoint) && FS.readdir(mountpoint).filter(isRealDir).map(toAbsolute(mountpoint));
            if (!check) return console.log('mount:PATH ERROR');
            while (check.length) {
                let path = check.shift();
                if (!bool && path == mountpoint) continue;
                let stat = D.stat(path);
                if (stat) {
                    entries[path] = {
                        timestamp: stat.mtime
                    }
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
        updatePromise(stream) {
            let D = this;
            return new Promise((resolve, reject) => {
                if (!D.updateList.includes(stream.node.mount)) D.updateList.push(stream.node.mount);
                let Timer = setInterval(() => {
                    if (D.updateTime && Timer != D.updateTime) {
                        clearInterval(Timer);
                        reject('other update');
                    }
                    if (stream.fd == null || D.FS.streams[stream.fd] == null) {
                        clearInterval(Timer);
                        resolve('ok');
                    }
                }, D.speed);
                D.updateTime = Timer;
            });
        }
        updatePath = [];
        updateList = [];
        async updateMount() {
            let D = this;
            if (D.updateList.length) {
                let list = D.updateList.map(async mount => D.syncfs(mount, e => console.log(e)));
                D.updateList = [];
                D.updatePath = [];
                await Promise.all(list);
            }
        }
        update(stream) {
            let D = this;
            if (!D.getStore(stream.node.mount)) return;
            if (stream.path && stream.fd != null && !D.updatePath.includes(stream.path)) {
                D.updatePath.push(stream.path)
                D.updatePromise(stream).then(result => D.updateMount());
            }
        }
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
    }
    const T = Nenge,
        I = T.I,
        DISK = new NengeDisk(T),
        eventMouseList = ['mousemove', 'mousedown', 'mouseup'],
        eventTouchList = ['touchstart', 'touchsend', 'touchmove'];
    DISK.SetDB({
        libjs: T.getStore('data-libjs'),
        patch: T.getStore('data-patch'),
        parent: T.getStore('data-parent'),
        rooms: T.getStore('data-rooms'),
        system: T.getStore('data-system'),
        bios: T.getStore('data-bios'),
        saves: T.getStore('data-saves'),
        openbor: T.getStore('data-openbor'),
    });

    function SetEvent(thisArg, object, evt, isAdd, passive, capture) {
        passive = !passive || passive;
        var E = this;
        if (thisArg && 'addEventListener' in thisArg && !I.empty(object) && I.func(evt)) {
            var eventTypes = object['split'](' '),
                opt = capture;
            opt = {
                'passive': passive,
                'capture': capture
            };
            eventTypes['forEach'](function (type) {
                E && E['eventListeners'] && isAdd && E['eventListeners']['push']({
                    'element': thisArg,
                    'type': type,
                    'callback': evt,
                    'options': opt
                }), thisArg[isAdd ? 'addEventListener' : 'removeEventListener'](type, evt, opt);
            });
        }
    }

    function addEvent(object, evt, func, capture, opt) {
        return SetEvent['call'](this, object, evt || '', func, !0x0, capture || true, opt);
    }

    function saveEvent(object, evt, func, capture, opt) {
        return SetEvent['call'](this, object, evt || '', func, !0x1, capture || true, opt);
    }

    function onceEvent(object, evt, func, passive, capture) {
        evt = evt || '';
        passive = !passive || passive;
        SetEvent['call'](this, object, evt, function runfunc() {

            saveEvent(object, evt, runfunc, passive, capture);
            for (var num = arguments['length'], arr = new Array(num), index = 0x0; index < num; index++) arr[index] = arguments[index];
            func['apply'](this, arr);
        }, !0x0, passive, capture);
    }

    function appendEJSChild(nodeElm, elm) {
        var nodeElms = nodeElm['length'] ? nodeElm : [nodeElm];
        Array['from'](nodeElms)['reverse']()['forEach'](function (topElm, index) {
            var belm = index > 0x0 ? elm['cloneNode'](!0x0) : elm,
                pelm = topElm['parentNode'],
                nelm = topElm['nextSibling'];
            belm['appendChild'](topElm), nelm ? pelm['insertBefore'](belm, nelm) : pelm['appendChild'](belm);
        });
    }

    function setElmAttr(elm, attr) {
        //!I.null(entry[1])&&!I.none(entry[1])
        I.elm(elm) && I.toArr(attr, entry => elm['setAttribute'](entry[0], entry[1]));
    }

    function createElm(str, attr, html) {
        var elm = document['createElement'](str);
        I.obj(attr) && setElmAttr(elm, attr);
        I.str(html) && (elm.innerHTML = html);
        return elm;
    }

    function resultAttrData(str, attr) {
        if (!I.str(str) || I.empty(str)) return {};
        var result = {};
        I.toArr(str.split(','), (entry) => {
            entry = entry['trim']();
            var className = entry['replace']('.', ''),
                classSplit = entry['replace'](/[[\]]/g, '')['split']('='),
                classLeft = classSplit[0x0],
                classRight = classSplit['length'] > 0x1 ? classSplit[0x1]['replace'](/["']/g, '') : '';
            switch (entry['charAt'](0x0)) {
                case '.':
                    I.obj(attr) && I.str(attr['class']) && (attr['class'] += ' ' ['concat'](className));
                    result['class'] = className;
                    break;
                case '#':
                    result['id'] = entry['replace']('#', '');
                    break;
                case '[':
                    result[classLeft] = classRight;
            }
        });
        return result;
    }

    function toggleHidden(elm, bool) {

        if (I.elm(elm)) {
            I.bool(bool) || (bool = !elm['hidden']);
            elm.hidden = bool;
        }
    }

    function elmAddRemoveClass(NodeElm, classname, bool) {

        if (I.nodelist(NodeElm)) return I.toArr(NodeElm, elm => elmAddRemoveClass(elm, classname, bool));
        if (I.elm(NodeElm)) {
            NodeElm['classList'][bool ? 'add' : I.bool(bool) ? 'remove' : 'toggle'](classname);
            return hasClassName(NodeElm, classname);
        }
        return !0x1;
    }

    function hasClassName(elm, classname) {

        return I.elm(elm) && elm['classList']['contains'](classname);
    }

    function elmInNodeList(_0x248d98, _0x11ded1) {
        return I.toArr(T.$$(_0x11ded1))['includes'](_0x248d98);
    }

    function _0xe124af() {
        const E = this;
        var _0x4da8c8 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : null,
            _0x2b151e = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] && arguments[0x1];
        if (I.elm(_0x4da8c8)) {
            var _0x1599d7 = E.SelectorAll('button:not(:disabled), input:not(:disabled), [tabindex]'),
                _0x4e1cb5 = _0x1599d7[0x0],
                _0x1c45af = _0x1599d7[_0x1599d7['length'] - 0x1];
            SetEvent['call'](E, E['elements']['container'], 'keydown', function (_0x21378e) {

                if ('Tab' === _0x21378e['key'] && 0x9 === _0x21378e['keyCode']) {
                    var _0x4c4c4d = document['activeElement'];
                    _0x4c4c4d !== _0x1c45af || _0x21378e['shiftKey'] ? _0x4c4c4d === _0x4e1cb5 && _0x21378e['shiftKey'] && (_0x1c45af['focus'](), _0x21378e['preventDefault']()) : (_0x4e1cb5['focus'](), _0x21378e['preventDefault']());
                }
            }, _0x2b151e, !0x1);
        }
    }

    function tabFocusAddRemoveClass() {
        var _0x1e3486 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : null,
            _0x2f6eb2 = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] && arguments[0x1];
        I.elm(_0x1e3486) && (_0x1e3486['focus'](), _0x2f6eb2 && elmAddRemoveClass(_0x1e3486, this['config']['classNames']['tabFocus']));
    }

    let ejs_ClassLists = {
        'ejs-wrapper': 'ejs--de6433374cb30211f10e148b320b2f',
        'ejs': 'ejs--7a5f920ceffb2913f6dbda780573cf',
        'ejs--full-ui': 'ejs--f3a002bba9836fe4ebfed357a45521',
        'controls-tabs': 'ejs--008adea3c1ef33a8fc94892a1e97e6',
        'gamepad': 'ejs--a891fe6f6e4cc43e11a6d8cf4a2dbb',
        'gamepad-remapping-axis': 'ejs--0ddc742668e636837948f68cade3e2',
        'gamepad-name': 'ejs--9af1c81949dbc3652bee73a340152c',
        'overlay': 'ejs--85a95eb6bf74a40ab61b91a91e5bff',
        'key-setting-popup': 'ejs--d169a219343bc32dd4aecc3f6b7f25',
        'loading-info': 'ejs--782e3572812f983b3a150eec177391',
        'p1': 'ejs--c426dd1d179aa351e6cec47e1d9438',
        'p2': 'ejs--31e7e81db48819ee35ec6f50378a2e',
        'p3': 'ejs--20d4eb2646d396f558a645dc0574f1',
        'p4': 'ejs--4de05306c8b099bdeb4585571ac095',
        'ejs__contextmenu': 'ejs--c7957d8666bb6b8fc7c3e9c021aaf8',
        'ad-11': 'ejs--3a16fd9a56aec8059089709cbb16f4',
        'close-ad': 'ejs--f3a1903d935f6cf720d4a0498db62a',
        'start-game': 'ejs--73f9b4e94a7a1fe74e11107d5ab2ef',
        'pulse': 'ejs--9bd947b3e6427453595f083d740a7c',
        'ejs__control': 'ejs--8732295ca5c4902a060d34706a8146',
        'ejs__tab-focus': 'ejs--a83b6c705e103e81a7762d0ed5e64b',
        'ejs__control--pressed': 'ejs--b1238136ec472a92297159882cf4b8',
        'icon--pressed': 'ejs--ec731619062226d943da67f5d83009',
        'icon--not-pressed': 'ejs--dc7068585e3d84fe0e676864c1439e',
        'label--pressed': 'ejs--0c6561f9155750b0aeeed6da5da7bf',
        'label--not-pressed': 'ejs--13d64e30c1333cc99391af48ddabaa',
        'ejs--video': 'ejs--d5f430a99a1619b3434bf58e34a99c',
        'ejs__controls': 'ejs--1acedc5ed6816abe96dd27d910fd74',
        'ejs__progress': 'ejs--f1aa376719b564cae0e653157cde14',
        'ejs__time': 'ejs--90d2780f99bcc76fdb6b0378a7238e',
        'ejs__menu': 'ejs--c7bfb2d1b75a40fdaaf90624bea9e7',
        'ejs__volume': 'ejs--36ceeeec0df37a9cf4bbe05fa204ec',
        'ejs__tooltip': 'ejs--74c6d4176d27e37a19d2e9e61de8f4',
        'ejs__disk': 'ejs--e8274f91a3d68f381fcc9d51db9c72',
        'ejs__hotkey': 'ejs--50ea0ce6747ecfa5147eba0d14e2ff',
        'game-started': 'ejs--7da7949f602347007818e6d192eb23',
        'ejs__controls_show': 'ejs--a03cf4c79123fcf49b2b6eb2ee856c',
        'ejs--hide-controls': 'ejs--1b8cb7f2294b1eb5de5238daea3513',
        'ejs--fullscreen-enabled': 'ejs--19409fe2057ab935a7e46abb5b4f49',
        'ejs__menu__container': 'ejs--013213afedeeb6878089b1ca1b4e47',
        'ejs-popup': 'ejs--c2532bfe04554193cc42b3be753700',
        'ejs__control--forward': 'ejs--0b4cdb4057d1a4623e60836ccc6275',
        'ejs__control--back': 'ejs--a7ad9de0cb0ca672b6703c50de7db9',
        'ejs__menu__value': 'ejs--f91e90fe7cabc875aff9a431bf5389',
        'ejs__menu_right': 'ejs--3464f4dc60866db801859648ec92cb',
        'ejs__disk__container': 'ejs--93b777c74e38cef84eb9ed727c473b',
        'ejs__disk__index': 'ejs--65d5006322417d2267bc2d4fa5fecc',
        'active': 'ejs--68d337c212ec6a5bc43125440d422b',
        'ejs__tooltip--visible': 'ejs--6ea27aa07e60d1d6e4c9782740028a',
        'ejs--menu-open': 'ejs--da54136ccf8c6b0b16d98e8b8e8b88',
        'ejs__video-wrapper': 'ejs--057800d021995e1347ec07cb748672',
        'portrait': 'ejs--64f1256f556fb94454b930cb3ea7f2',
        'ejs__progress__buffer': 'ejs--f8d706413436fd119cf01aaf5a9d9d',
        'ejs--audio': 'ejs--bd0222e58d71b0a304d6037dfcffd5',
        'ejs--loading': 'ejs--2521e1257996f264de36e77cc9c5ee',
        'ejs__dialogs': 'ejs--d31688f864f56d6426ebbf2217d6ee',
        'ejs__dialog': 'ejs--5e71fd80268afbb1d588e40b993508',
        'ejs__focus_notice__container': 'ejs--8005476e024127364d230c0f4c72e1',
        'ejs__cheat__container': 'ejs--8abe1d2bc8d34697952f4ae16785a5',
        'ejs__cache__container': 'ejs--1e0f0672f67d0e96592314c9ed78b0',
        'ejs__loading__container': 'ejs--d7e6a6a8f38bfaa256fe5d709a8258',
        'ejs__load-state__container': 'ejs--b183f581b5336c4908ad258d3e1cc7',
        'ejs__netplay__container': 'ejs--158ea9dd34e3e7af2d837f8b05babb',
        'ejs__gamepad__container': 'ejs--3f0897a8158ba363a0ee0afe4da7c5',
        'dialog-container': 'ejs--38cc09882a55e98c76168dbe838aa0',
        'dialog-title': 'ejs--b373c9d5029d49324fb8ac3ece96c1',
        'dialog-content': 'ejs--a5e2629abb9a5bcbc8b2c1307922d2',
        'dialog-buttons': 'ejs--580e3c22e63f8a1eb29694fd0b141b',
        'btn-cancel': 'ejs--ad20569e1449d7b8e99e6465960456',
        'tabs': 'ejs--8e7922427f460a31935084b7acfb1a',
        'tabs-content': 'ejs--31eb28817642bb1bfe0a2c422108bb',
        'tabs-panel': 'ejs--f932566a0af5314da834324c901978',
        'button-container': 'ejs--c233fb69cbef43078bc39e9d1efac8',
        'btn-submit': 'ejs--bdb54e9fc47f9805b506b746e897bf',
        'btn-create-room': 'ejs--67d03ee7480b871ad6507d6319a839',
        'btn-quit': 'ejs--c2d931157456c1d438d40a2f66af2c',
        'set': 'ejs--6604c83041a275a78837c452a71dd8',
        'btn-join-room': 'ejs--99150e15f962c63c689cadc81ef40d',
        'netplay-player-name': 'ejs--71527b6509aa48afce3ce1a11c02f0',
        'netplay-player-name-input': 'ejs--7ad35768e3f6b9faf97db01d5b60ae',
        'netplay-player-name-set': 'ejs--9c403e5e107a3e4374ba244b636400',
        'netplay-roomlist': 'ejs--d6a46533fa6e510a571af5c28b440a',
        'netplay-create-room': 'ejs--57ca9b3853cc7de731483cfcc95a59',
        'netplay-room-name-input': 'ejs--0885d5e25e19127b6b516014426a1b',
        'netplay-room-password-input': 'ejs--25023d28756fdb9dfbbfb6dccb8677',
        'netplay-create-room-set': 'ejs--75b3a8d35aacc6424ed7422fdeaaaa',
        'netplay-room': 'ejs--eefdf28d69ed2d20f197308981bb61',
        'cheats-add': 'ejs--9e670880bb57e824400fa00f09aaad',
        'cheats-list': 'ejs--2b4e3c245b7b25dfdac5e09155a68e',
        'cheat-code-input': 'ejs--572b0b3a0345a6b01b01a15a02842c',
        'cheat-name-input': 'ejs--a7d7f80c8999469c991ea452a85dd9',
        'ejs__widgets': 'ejs--952c974392296e7f643d51db380157',
        'ejs__widget': 'ejs--0d7e216cf12ae73705b5d5bb0452fc',
        'ejs__widget_netplay': 'ejs--c0a5e71f6613caab66d6ae15a5a00f',
        'with-chat-box': 'ejs--04f0471d5de3dffea09ac3d539d0bc',
        'chat-box': 'ejs--f817e633c82da74c3f82a1007e9aa8',
        'netplay-players': 'ejs--0b77f56df0c6023120dd9ffaa37dcd',
        'chat-toggle': 'ejs--4f88570c8af219fec07219dbd9dbbe',
        'chat-count': 'ejs--3ee5963a7747179cf98ce8ce095a5f',
        'chat-messages': 'ejs--258ae7dfee4b10b7568161e6a48636',
        'chat-input': 'ejs--0e8443aac737c78260c3c5e0370276',
        'ejs__widget_controls_toggle': 'ejs--666d4296310579687cf3cf3d2cf951',
        'ejs__widget_load_srm': 'ejs--a8753b9c4fe32d12bb6605d4a20ef2',
        'ejs__widget_save_srm': 'ejs--e7e06622e3c04957c2ebb05c5adec0',
        'ejs-virtual-gamepad': 'ejs--ca9ea317b9bd20abfc8c0463ac5bbe',
        'virtual-gamepad': 'ejs--2440e3b831017ff8327c939e2a4413',
        'top': 'ejs--b8d8b771d0bbb94e2bbd03054f53fd',
        'left': 'ejs--c83d70cb63c933edc073c7fe92e32b',
        'buttons': 'ejs--6e7015634623fd6a82e6a7d3488c84',
        'center': 'ejs--49fa47c86a131e4ca8fb268bfdde89',
        'right': 'ejs--7d2b19f77fd0ccabf94dc1ca39ae18',
        'touch': 'ejs--d708d9d486f1eca73a593d5c09f8ad',
        'b_select': 'ejs--e7e4800b31773c5d47b84c75cc6cf7',
        'b_start': 'ejs--76fa7567879f97f5991c50ac600735',
        'b_1': 'ejs--2592ce9b796695f4941e00f0972644',
        'b_2': 'ejs--b8e92dfa494924e1bde9486a0be217',
        'b_3': 'ejs--28a32587453e5bbcf95f746657f15f',
        'b_4': 'ejs--fad921b4fce16af564d7597e8de5f2',
        'b_5': 'ejs--6f79544eaf1d4b6e8a7609b506d988',
        'b_6': 'ejs--2afd974f6d46005a1e522dca4485e8',
        'b_z': 'ejs--d64fa2a822535d54379899a24f6e77',
        'b_c': 'ejs--10621f07d4508631aa3abcdb124a83',
        'b_l': 'ejs--7930ee9bb7ae2fa6e2f7b5568f1e98',
        'b_r': 'ejs--2226100d4c5408c2699e942aabb31c',
        'b_l2': 'ejs--3a43805a8ec126ef388abd5ceb54b2',
        'b_r2': 'ejs--d40828f231043de3a0f9c0637091d1',
        'b_insert_coin': 'ejs--7db312734c1e18065c434e8f96e893',
        'b_a': 'ejs--b4c6d9bdbbd3dcfc8fa82689ecf448',
        'b_b': 'ejs--b7c456c7dd7a616a55965bb134323b',
        'b_x': 'ejs--87c940c15830daa967b08e67e9b87e',
        'b_y': 'ejs--fbd499578ebef494fbcd1c9114cd1d',
        'b_c1': 'ejs--6febbc4be9f01b015178d52120d930',
        'b_c2': 'ejs--05e1505b655c8ef151de9ba2c47fb5',
        'b_c3': 'ejs--017bc19e138d2e63c92520db378e1d',
        'b_c4': 'ejs--1474a869d502ac0c04d535c96f9795',
        'b_z_t': 'ejs--9c96e9c7f33171cf0fedfc85ca53fa',
        'b_l_t': 'ejs--c39b270a2774fd4bd3858e5f0892c0',
        'b_r_t': 'ejs--353cf6be7120854ae25fede87ce136',
        'dpad-container': 'ejs--914358605501b11476e86626b2ff16',
        'dpad-bg': 'ejs--be66239219d594001da38f91c9ad02',
        'dpad-front': 'ejs--9dbb9be3403878e912527181e2d41b',
        'dpad-1': 'ejs--f9c7797bdf05569bdc13b4f2074270',
        'dpad-2': 'ejs--2645f3bad105488a313c5e30dab74f',
        'dpad-1-bg': 'ejs--a57cf324c8ff108947112e35e589b5',
        'dpad-2-bg': 'ejs--4873d94c18140ab195da609b40b71a',
        'dpad-left': 'ejs--bd9311b0a4f654af6ab5ba28bcf358',
        'dpad-right': 'ejs--704d45ea060cc6809451a0d9d47ad7',
        'dpad-up': 'ejs--f0b89ca5b5621659af184c8e012ccb',
        'dpad-down': 'ejs--8de361d6b01eaa181f8db4ac3eb7af',
        'ejs-virtual-gamepad-style-1': 'ejs--d534874cabeb9d2a907a812e5b8cd0',
        'ejs-virtual-gamepad-style-2': 'ejs--3e7ce32418477db21b1c6caed189d9',
        'ejs-virtual-gamepad-style-3': 'ejs--9213ba9ca7bc508e87ca7a2cefa397',
        'ejs-virtual-gamepad-style-4': 'ejs--cbac8c123fcc678ad946a27592156c',
        'ejs-virtual-gamepad-style-5': 'ejs--b4b0898f13bf4668a6e0077f43964a',
        'ejs-virtual-gamepad-style-6': 'ejs--49834279a72803b358c2a283342698',
        'ejs-virtual-gamepad-style-10': 'ejs--23587cee2522ccb891f58a95e3cab8',
        'ejs-virtual-gamepad-style-7': 'ejs--25a102181c6e79af65fe086f151c4f',
        'ejs-virtual-gamepad-style-8': 'ejs--cbcbce2bfd0aa13f6bebbbf8a0e974',
        'ejs-virtual-gamepad-style-9': 'ejs--c46c519e67f0f7ff83ba0b4d208683',
        'modal': 'ejs--eefec939452eb92fad035932d0f47c',
        'modal__overlay': 'ejs--f1f43b27384834c8c22c6f81d0c5ae',
        'modal__container': 'ejs--c4ee33766a01ed0356c3ec07898e96',
        'modal__header': 'ejs--a073f32023da1ced805c5f95a4e81c',
        'modal__footer': 'ejs--ed44f59bb8cd49177586b140658c6c',
        'modal__title': 'ejs--81470ba5e6a6d68014839ad4d9a977',
        'modal__close': 'ejs--c3c85789c2a7f56d8b26dba75b7e1f',
        'modal__content': 'ejs--db44f5520e6f4fd0dd34b478bb9ee8',
        'modal__btn': 'ejs--319bcec5dee9444e1a2a53d6503b7c',
        'modal__btn-primary': 'ejs--eaf3c1cba25d415d92ac48d7db34dd',
        'modal__errmsg': 'ejs--940087708c06b6129ce2bfa45f1d89',
        'micromodal-slide': 'ejs--bef295f3125e9ba83d4f3677264bae',
        'is-open': 'ejs--60c17e0d149099f207b06f27edae6a',
        'mmfadeIn': 'ejs--9d7aa2bd5ee276be085e5b2a0bbc2e',
        'mmslideIn': 'ejs--8b069266f76099cc6bc220f6ea56cc',
        'mmfadeOut': 'ejs--184b7558ffeb569c1790654537477b',
        'mmslideOut': 'ejs--379a464ad0e66ea5fc601e5f2fd73e',
        'ejs-toast': 'ejs--e686b5f4b8f94b017dce6aa34938a5',
        'ejs-toast-item': 'ejs--48741994500b16cfabc909661adbc0',
        'ejs-switch': 'ejs--4c3e63d4005bd8a0468e9c74a35f62',
        'ejs-delete-cheat': 'ejs--90bcdd71cd0d2307e9ee0dffa916da',
        'icon--exit-fullscreen': 'ejs--2b3dd6e2e26c0f0dc4ac5779dedd5e',
        'ejs--fullscreen-fallback': 'ejs--412041671de21945d3e028b6ae84c9',
        'ejs--no-transition': 'ejs--33643265135cf89e6c0a0d9866d6f1',
        'ejs__sr-only': 'ejs--6f0e996cd15e5fb6be0256918531d7',
        'ejs-fade-in': 'ejs--7cadf43f3d9eb17c7e3c36de84973b'
    };

    function getClassName(name, bool) {
        let pre = bool ? '.' : ''
        if (I.str(name)) name = name.trim().split(' ');
        else if (I.obj(name)) {
            return I.toArr(name).map(n => pre + (!n[1] ? '' : ejs_ClassLists[n[0]] ? ejs_ClassLists[n[0]] : n[0])).join(' ');
        }
        return name.map(n => pre + (ejs_ClassLists[n] ? ejs_ClassLists[n] : n)).join(' ');
    }

    function getCtrlclassName(name, bool) {
        return (bool ? '.' : '') + ejs_Controller.classNames[name];
    }

    function getSvgIcon(name) {
        return ejs_install['icons'][name + '.svg'];
    }
    var _0x1ec19d, _0x529f8c, _0x226a6d, _0x2c3eed = (_0x1ec19d = document['createElement']('span'), _0x529f8c = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd otransitionend',
        'transition': 'transitionend'
    }, _0x226a6d = Object['keys'](_0x529f8c)['find'](function (_0x2e1e8a) {

        return void 0x0 !== _0x1ec19d['style'][_0x2e1e8a];
    }), !!I.str(_0x226a6d) && _0x529f8c[_0x226a6d]);

    function tryHidden(elm) {
        setTimeout(function () {
            try {
                toggleHidden(elm, !0x0);
                elm['offsetHeight'];
                toggleHidden(elm, !0x1);
            } catch (e) {}
        }, 0x0);
    }
    var _0x9cb9c5, _0x45806f, ejs_Browser = {
            'isEdge': 'Netscape' === navigator['appName'] && navigator['appVersion']['indexOf']('Edge') > -0x1,
            'isIE': !!document['documentMode'],
            'isWebkit': 'WebkitAppearance' in document['documentElement']['style'] && !/Edge/ ['test'](navigator['userAgent']),
            'isIPhone': /(iPhone|iPod)/gi ['test'](navigator['platform']),
            'isIos': /(iPad|iPhone|iPod)/gi ['test'](navigator['platform']),
            'info': function () {
                var _0x4f5b2c = /(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d\.apre]+)/ ['exec'](navigator['userAgent']);
                return {
                    'name': _0x4f5b2c[0x1]['toLowerCase'](),
                    'version': _0x4f5b2c[0x2]
                };
            }
        },
        EnvVariable = {
            'rangeInput': (_0x45806f = document['createElement']('input'), _0x45806f['type'] = 'range', 'range' === _0x45806f['type']),
            'touch': 'ontouchstart' in document['documentElement'],
            'transitions': !0x1 !== _0x2c3eed,
            'reducedMotion': 'matchMedia' in window && window['matchMedia']('(prefers-reduced-motion)')['matches'],
            'webgl': (function () {
                var _0x33e952 = {
                    'DETECTED': !0x1
                };
                if (!_0x33e952['DETECTED']) {
                    var _0x52090c = document['createElement']('canvas');
                    if (_0x52090c && _0x52090c['getContext'])
                        for (var _0x5e5df3 = ['webgl2', 'experimental-webgl2', 'webgl', 'experimental-webgl'], _0x35f259 = 0x0, _0x2f36b0 = _0x5e5df3['length']; _0x35f259 < _0x2f36b0; ++_0x35f259) {
                            var _0x4188e6 = _0x5e5df3[_0x35f259],
                                _0x3aeb75 = _0x52090c['getContext'](_0x4188e6);
                            if (_0x3aeb75) {
                                _0x33e952['WEBGL_CONTEXT'] = _0x4188e6, _0x33e952['WEBGL_VERSION'] = _0x3aeb75['getParameter'](_0x3aeb75['VERSION']), _0x33e952['WEBGL_VENDOR'] = _0x3aeb75['getParameter'](_0x3aeb75['VENDOR']), _0x33e952['WEBGL_SL_VERSION'] = _0x3aeb75['getParameter'](_0x3aeb75['SHADING_LANGUAGE_VERSION']), _0x33e952['MAX_TEXTURE_SIZE'] = _0x3aeb75['getParameter'](_0x3aeb75['MAX_TEXTURE_SIZE']);
                                var _0xbf9366 = _0x3aeb75['getExtension']('WEBGL_debug_renderer_info');
                                _0xbf9366 && (_0x33e952['WEBGL_VENDOR'] = _0x3aeb75['getParameter'](_0xbf9366['UNMASKED_VENDOR_WEBGL']), _0x33e952['WEBGL_RENDERER'] = _0x3aeb75['getParameter'](_0xbf9366['UNMASKED_RENDERER_WEBGL'])), _0x33e952['DETECTED'] = !0x0;
                                break;
                            }
                        }
                }
                return _0x33e952;
            }()),
            'wasm': 'undefined' != typeof WebAssembly && I.obj(WebAssembly),
            'websocket': 'undefined' != typeof WebSocket,
            'webRTCSupported': (_0x9cb9c5 = !0x1, ['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer']['forEach'](function (_0x2c8e24) {
                _0x9cb9c5 || _0x2c8e24 in window && (_0x9cb9c5 = !0x0);
            }), _0x9cb9c5),
            'audioContext': 'undefined' != typeof AudioContext,
            'filesystem': void('showOpenFilePicker' in window && 'showSaveFilePicker' in window && window),
            'indexeddb': 'indexedDB' in window
        };

    function ejs_define(obj, key, value) {
        return key in obj ? Object['defineProperty'](obj, key, {
            'value': value,
            'enumerable': !0x0,
            'configurable': !0x0,
            'writable': !0x0
        }) : obj[key] = value, obj;
    }

    function _0x288469() {

        for (var _0x490c35 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : {}, _0x35136e = arguments['length'], _0x58cab3 = new Array(_0x35136e > 0x1 ? _0x35136e - 0x1 : 0x0), _0x34cf6d = 0x1; _0x34cf6d < _0x35136e; _0x34cf6d++) _0x58cab3[_0x34cf6d - 0x1] = arguments[_0x34cf6d];
        if (!_0x58cab3['length']) return _0x490c35;
        var _0x1905c2 = _0x58cab3['shift']();
        return I.obj(_0x1905c2) ? (Object['keys'](_0x1905c2)['forEach'](function (_0xe5f1a6) {

            I.obj(_0x1905c2[_0xe5f1a6]) ? (Object['keys'](_0x490c35)['includes'](_0xe5f1a6) || Object['assign'](_0x490c35, ejs_define({}, _0xe5f1a6, {})), _0x288469(_0x490c35[_0xe5f1a6], _0x1905c2[_0xe5f1a6])) : Object['assign'](_0x490c35, ejs_define({}, _0xe5f1a6, _0x1905c2[_0xe5f1a6]));
        }), _0x288469['apply'](void 0x0, [_0x490c35]['concat'](_0x58cab3))) : _0x490c35;
    }

    function preg_replace(str, preg, text) {
        str = str || '';
        preg = preg && preg.toString() || '';
        text = text && text.toString() || '';
        return str['replace'](new RegExp(preg['replace'](/([.*+?^=!:${}()|[\]/\\])/g, '\\\x241'), 'g'), text);
    }

    function _0x378cd2() {
        var _0x2c60fd = (arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '')['toString']();
        return (_0x2c60fd = (function () {
            var _0xa317e4 = (arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '')['toString']();
            return _0xa317e4 = preg_replace(_0xa317e4, '-', ' '), _0xa317e4 = preg_replace(_0xa317e4, '_', ' '), preg_replace(_0xa317e4 = (function () {

                return (arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '')['toString']()['replace'](/\w\S*/g, function (_0x2afc66) {

                    return _0x2afc66['charAt'](0x0)['toUpperCase']() + _0x2afc66['substr'](0x1)['toLowerCase']();
                });
            }(_0xa317e4)), ' ', '');
        }(_0x2c60fd)))['charAt'](0x0)['toLowerCase']() + _0x2c60fd['slice'](0x1);
    }
    var _0x1c59aa,
        outDpadHtml = function (_0x35bbcb) {

            ! function (_0x3d9906) {

                _0x3d9906['width'];
                var _0x391ce0 = _0x3d9906['container'],
                    _0x4182d4 = _0x3d9906['event'];
                'function' != typeof _0x4182d4 && (_0x4182d4 = function () {});
                var _0x1b5afa = createElm('div', {
                        'class': getClassName('dpad-bg')
                    }),
                    _0x25a50e = createElm('div', {
                        'class': getClassName('dpad-front')
                    });

                function _0x386078(_0xb97eba) {
                    var _0x3e4526;
                    if (_0x3e4526 = _0xb97eba['targetTouches'][0x0]) {
                        var _0x560d90 = _0x25a50e['getBoundingClientRect'](),
                            _0x27cbb8 = _0x3e4526['clientX'] - _0x560d90['left'] - _0x25a50e['clientWidth'] / 0x2,
                            _0x206b99 = _0x3e4526['clientY'] - _0x560d90['top'] - _0x25a50e['clientHeight'] / 0x2,
                            _0x5d928a = 0x0,
                            _0x1568d0 = 0x0,
                            _0x38475a = 0x0,
                            _0x2545b4 = 0x0,
                            _0x1bb01b = Math['atan'](_0x27cbb8 / _0x206b99) / (Math['PI'] / 0xb4);
                        _0x206b99 <= -0xa && (_0x5d928a = 0x1), _0x206b99 >= 0xa && (_0x1568d0 = 0x1), _0x27cbb8 >= 0xa && (_0x2545b4 = 0x1, _0x38475a = 0x0, (_0x1bb01b < 0x0 && _0x1bb01b >= -0x23 || _0x1bb01b > 0x0 && _0x1bb01b <= 0x23) && (_0x2545b4 = 0x0), _0x5d928a = _0x1bb01b < 0x0 && _0x1bb01b >= -0x37 ? 0x1 : 0x0, _0x1568d0 = _0x1bb01b > 0x0 && _0x1bb01b <= 0x37 ? 0x1 : 0x0), _0x27cbb8 <= -0xa && (_0x2545b4 = 0x0, _0x38475a = 0x1, (_0x1bb01b < 0x0 && _0x1bb01b >= -0x23 || _0x1bb01b > 0x0 && _0x1bb01b <= 0x23) && (_0x38475a = 0x0), _0x5d928a = _0x1bb01b > 0x0 && _0x1bb01b <= 0x37 ? 0x1 : 0x0, _0x1568d0 = _0x1bb01b < 0x0 && _0x1bb01b >= -0x37 ? 0x1 : 0x0), _0x1b5afa['classList']['toggle'](getClassName('dpad-right'), _0x2545b4), _0x1b5afa['classList']['toggle'](getClassName('dpad-left'), _0x38475a), _0x1b5afa['classList']['toggle'](getClassName('dpad-up'), _0x5d928a), _0x1b5afa['classList']['toggle'](getClassName('dpad-down'), _0x1568d0), _0x4182d4(_0x38475a, _0x2545b4, _0x5d928a, _0x1568d0);
                    }
                    _0xb97eba['stopPropagation']();
                }

                function _0x54ac75(_0x4249fc) {

                    _0x4182d4(0x0, 0x0, 0x0, 0x0), _0x1b5afa['classList']['toggle'](getClassName('dpad-up'), !0x1), _0x1b5afa['classList']['toggle'](getClassName('dpad-down'), !0x1), _0x1b5afa['classList']['toggle'](getClassName('dpad-right'), !0x1), _0x1b5afa['classList']['toggle'](getClassName('dpad-left'), !0x1), _0x4249fc['stopPropagation']();
                }
                _0x1b5afa.innerHTML = '<div class="' ['concat'](getClassName('dpad-1'), '"><div class="')['concat'](getClassName('dpad-1-bg'), '"></div></div>\n    <div class="')['concat'](getClassName('dpad-2'), '"><div class="')['concat'](getClassName('dpad-2-bg'), '"></div></div>'), _0x391ce0['append'](_0x1b5afa), _0x391ce0['append'](_0x25a50e), addEvent(_0x25a50e, 'touchstart', _0x386078), addEvent(_0x25a50e, 'touchmove', _0x386078), addEvent(_0x25a50e, 'touchend', _0x54ac75), addEvent(_0x25a50e, 'touchcancel', _0x54ac75);
            }(_0x35bbcb);
        };

    function _0x163757(_0x501f7d) {

        return (_0x163757 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (_0x238f7e) {
            return typeof _0x238f7e;
        } : function (_0x47cfbd) {

            return _0x47cfbd && 'function' == typeof Symbol && _0x47cfbd['constructor'] === Symbol && _0x47cfbd !== Symbol['prototype'] ? 'symbol' : typeof _0x47cfbd;
        })(_0x501f7d);
    }

    class ejs_arraybuffer {
        constructor(_0x31a1ed, _0x35a474) {
            if ('object' === _0x163757(_0x31a1ed) && _0x31a1ed['files'] && (_0x31a1ed = _0x31a1ed['files'][0x0]), this['littleEndian'] = !0x1, this['offset'] = 0x0, this['_lastRead'] = null, 'object' === _0x163757(_0x31a1ed) && _0x31a1ed['name'] && _0x31a1ed['size']) {
                if ('function' != typeof window['FileReader'])
                    throw new Error('Incompatible Browser');
                this['fileName'] = _0x31a1ed['name'], this['fileType'] = _0x31a1ed['type'], this['fileSize'] = _0x31a1ed['size'], this['_fileReader'] = new FileReader(), this['_fileReader']['marcFile'] = this, this['_fileReader']['addEventListener']('load', function () {

                    this['marcFile']['_u8array'] = new Uint8Array(this['result']), this['marcFile']['_dataView'] = new DataView(this['result']), _0x35a474 && _0x35a474['call']();
                }, !0x1), this['_fileReader']['readAsArrayBuffer'](_0x31a1ed);
            } else {
                if ('object' === _0x163757(_0x31a1ed) && 'string' == typeof _0x31a1ed['fileName'] && 'boolean' == typeof _0x31a1ed['littleEndian']) {
                    this['fileName'] = _0x31a1ed['fileName'], this['fileType'] = _0x31a1ed['fileType'], this['fileSize'] = _0x31a1ed['fileSize'];
                    var _0x5a0c04 = new ArrayBuffer(_0x31a1ed);
                    this['_u8array'] = new Uint8Array(this['fileType']), this['_dataView'] = new DataView(this['fileType']), _0x31a1ed['copyToFile'](this, 0x0), _0x35a474 && _0x35a474['call']();
                } else {
                    if ('object' === _0x163757(_0x31a1ed) && 'number' == typeof _0x31a1ed['byteLength'])
                        this['fileName'] = 'file.bin', this['fileType'] = 'application/octet-stream', this['fileSize'] = _0x31a1ed['byteLength'], void 0x0 !== _0x31a1ed['buffer'] && (_0x31a1ed = _0x31a1ed['buffer']), this['_u8array'] = new Uint8Array(_0x31a1ed), this['_dataView'] = new DataView(_0x31a1ed), _0x35a474 && _0x35a474['call']();
                    else {
                        if ('number' != typeof _0x31a1ed)
                            throw new Error('Invalid source');
                        this['fileName'] = 'file.bin', this['fileType'] = 'application/octet-stream', this['fileSize'] = _0x31a1ed, _0x5a0c04 = new ArrayBuffer(_0x31a1ed), (this['_u8array'] = new Uint8Array(_0x5a0c04), this['_dataView'] = new DataView(_0x5a0c04), _0x35a474 && _0x35a474['call']());
                    }
                }
            }
        }
        seek(_0x448d09) {

            this['offset'] = _0x448d09;
        }
        skip(_0x3b38e1) {

            this['offset'] += _0x3b38e1;
        }
        isEOF() {

            return !(this['offset'] < this['fileSize']);
        }
        slice(_0x399f8a, _0x439f9c) {
            var _0x41048c;
            return _0x439f9c = _0x439f9c || this['fileSize'] - _0x399f8a, void 0x0 !== this['_u8array']['buffer']['slice'] ? ((_0x41048c = new ejs_arraybuffer(0x0))['fileSize'] = _0x439f9c, _0x41048c['_u8array'] = new Uint8Array(this['_u8array']['buffer']['slice'](_0x399f8a, _0x399f8a + _0x439f9c))) : (_0x41048c = new ejs_arraybuffer(_0x439f9c), this['copyToFile'](_0x41048c, _0x399f8a, _0x439f9c, 0x0)), _0x41048c['fileName'] = this['fileName'], _0x41048c['fileType'] = this['fileType'], _0x41048c['littleEndian'] = this['littleEndian'], _0x41048c;
        }
        copyToFile(_0x54d257, _0x23b48b, _0x2e15ac, _0x342caa) {

            void 0x0 === _0x342caa && (_0x342caa = _0x23b48b), _0x2e15ac = _0x2e15ac || this['fileSize'] - _0x23b48b;
            for (var _0x424317 = 0x0; _0x424317 < _0x2e15ac; _0x424317++)
                _0x54d257['_u8array'][_0x342caa + _0x424317] = this['_u8array'][_0x23b48b + _0x424317];
        }
        save() {
            var _0x3d2138;
            try {
                _0x3d2138 = new Blob([this['_u8array']], {
                    'type': this['fileType']
                });
            } catch (_0x177f80) {
                if (window['BlobBuilder'] = window['BlobBuilder'] || window['WebKitBlobBuilder'] || window['MozBlobBuilder'] || window['MSBlobBuilder'], 'InvalidStateError' !== _0x177f80['name'] || !window['BlobBuilder'])
                    throw new Error('Incompatible Browser');
                var _0x4f709a = new BlobBuilder();
                _0x4f709a['append'](this['_u8array']['buffer']), _0x3d2138 = _0x4f709a['getBlob'](this['fileType']);
            }
            saveAs(_0x3d2138, this['fileName']);
        }
        readU8() {

            return this['_lastRead'] = this['_u8array'][this['offset']], this['offset']++, this['_lastRead'];
        }
        readU16() {

            return this['littleEndian'] ? this['_lastRead'] = this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) : this['_lastRead'] = (this['_u8array'][this['offset']] << 0x8) + this['_u8array'][this['offset'] + 0x1], this['offset'] += 0x2, this['_lastRead'] >>> 0x0;
        }
        readU24() {

            return this['littleEndian'] ? this['_lastRead'] = this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) + (this['_u8array'][this['offset'] + 0x2] << 0x10) : this['_lastRead'] = (this['_u8array'][this['offset']] << 0x10) + (this['_u8array'][this['offset'] + 0x1] << 0x8) + this['_u8array'][this['offset'] + 0x2], this['offset'] += 0x3, this['_lastRead'] >>> 0x0;
        }
        readU32() {

            return this['littleEndian'] ? this['_lastRead'] = this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) + (this['_u8array'][this['offset'] + 0x2] << 0x10) + (this['_u8array'][this['offset'] + 0x3] << 0x18) : this['_lastRead'] = (this['_u8array'][this['offset']] << 0x18) + (this['_u8array'][this['offset'] + 0x1] << 0x10) + (this['_u8array'][this['offset'] + 0x2] << 0x8) + this['_u8array'][this['offset'] + 0x3], this['offset'] += 0x4, this['_lastRead'] >>> 0x0;
        }
        readBytes(_0x575b10) {

            this['_lastRead'] = new Array(_0x575b10);
            for (var _0x3280df = 0x0; _0x3280df < _0x575b10; _0x3280df++)
                this['_lastRead'][_0x3280df] = this['_u8array'][this['offset'] + _0x3280df];
            return this['offset'] += _0x575b10, this['_lastRead'];
        }
        readString(_0x83afb5) {

            this['_lastRead'] = '';
            for (var _0x126bb4 = 0x0; _0x126bb4 < _0x83afb5 && this['offset'] + _0x126bb4 < this['fileSize'] && this['_u8array'][this['offset'] + _0x126bb4] > 0x0; _0x126bb4++)
                this['_lastRead'] = this['_lastRead'] + String['fromCharCode'](this['_u8array'][this['offset'] + _0x126bb4]);
            return this['offset'] += _0x83afb5, this['_lastRead'];
        }
        writeU8(_0x368acd) {

            this['_u8array'][this['offset']] = _0x368acd, this['offset']++;
        }
        writeU16(_0x594e82) {

            this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x594e82, this['_u8array'][this['offset'] + 0x1] = _0x594e82 >> 0x8) : (this['_u8array'][this['offset']] = _0x594e82 >> 0x8, this['_u8array'][this['offset'] + 0x1] = 0xff & _0x594e82), this['offset'] += 0x2;
        }
        writeU24(_0x581e87) {

            this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x581e87, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x581e87) >> 0x8, this['_u8array'][this['offset'] + 0x2] = (0xff0000 & _0x581e87) >> 0x10) : (this['_u8array'][this['offset']] = (0xff0000 & _0x581e87) >> 0x10, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x581e87) >> 0x8, this['_u8array'][this['offset'] + 0x2] = 0xff & _0x581e87), this['offset'] += 0x3;
        }
        writeU32(_0x4cf7b9) {

            this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x4cf7b9, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x4cf7b9) >> 0x8, this['_u8array'][this['offset'] + 0x2] = (0xff0000 & _0x4cf7b9) >> 0x10, this['_u8array'][this['offset'] + 0x3] = (0xff000000 & _0x4cf7b9) >> 0x18) : (this['_u8array'][this['offset']] = (0xff000000 & _0x4cf7b9) >> 0x18, this['_u8array'][this['offset'] + 0x1] = (0xff0000 & _0x4cf7b9) >> 0x10, this['_u8array'][this['offset'] + 0x2] = (0xff00 & _0x4cf7b9) >> 0x8, this['_u8array'][this['offset'] + 0x3] = 0xff & _0x4cf7b9), this['offset'] += 0x4;
        }
        writeBytes(_0x3eb2a0) {

            for (var _0x5520af = 0x0; _0x5520af < _0x3eb2a0['length']; _0x5520af++)
                this['_u8array'][this['offset'] + _0x5520af] = _0x3eb2a0[_0x5520af];
            this['offset'] += _0x3eb2a0['length'];
        }
        writeString(_0x52b17e, _0x4a5232) {

            _0x4a5232 = _0x4a5232 || _0x52b17e['length'];
            for (var _0x91e34d = 0x0; _0x91e34d < _0x52b17e['length'] && _0x91e34d < _0x4a5232; _0x91e34d++)
                this['_u8array'][this['offset'] + _0x91e34d] = _0x52b17e['charCodeAt'](_0x91e34d);
            for (; _0x91e34d < _0x4a5232; _0x91e34d++)
                this['_u8array'][this['offset'] + _0x91e34d] = 0x0;
            this['offset'] += _0x4a5232;
        }
    }
    ejs_arraybuffer['IS_MACHINE_LITTLE_ENDIAN'] = (_0x1c59aa = new ArrayBuffer(0x2), new DataView(_0x1c59aa)['setInt16'](0x0, 0x100, !0x0), 0x100 === new Int16Array(_0x1c59aa)[0x0])
    var _0x20ca82 = 0x0;

    function _0x445e21() {

        this['records'] = [], this['truncate'] = !0x1;
    }

    function _0x31959e(_0x841162) {
        var _0x30efe6 = new _0x445e21();
        _0x841162['seek'](0x5);
        for (var _0x26bea7 = 0x0, _0x3443ec = 0x0; !_0x841162['isEOF']();) {
            if (0x454f46 === (_0x26bea7 = _0x841162['readU24']())) {
                if (_0x841162['isEOF']()) break;
                if (_0x841162['offset'] + 0x3 === _0x841162['fileSize']) {
                    _0x30efe6['truncate'] = _0x841162['readU24']();
                    break;
                }
            }(_0x3443ec = _0x841162['readU16']()) === _0x20ca82 ? _0x30efe6['addRLERecord'](_0x26bea7, _0x841162['readU16'](), _0x841162['readU8']()) : _0x30efe6['addSimpleRecord'](_0x26bea7, _0x841162['readBytes'](_0x3443ec));
        }
        return _0x30efe6;
    }
    _0x445e21['prototype']['addSimpleRecord'] = function (_0x3107f5, _0xa5eb8e) {

        this['records']['push']({
            'offset': _0x3107f5,
            'type': 0x1,
            'length': _0xa5eb8e['length'],
            'data': _0xa5eb8e
        });
    }, _0x445e21['prototype']['addRLERecord'] = function (_0x250523, _0x248b08, _0x5ea46b) {

        this['records']['push']({
            'offset': _0x250523,
            'type': _0x20ca82,
            'length': _0x248b08,
            'byte': _0x5ea46b
        });
    }, _0x445e21['prototype']['toString'] = function () {

        nSimpleRecords = 0x0, nRLERecords = 0x0;
        for (var _0xcf3841 = 0x0; _0xcf3841 < this['records']['length']; _0xcf3841++) this['records'][_0xcf3841]['type'] === _0x20ca82 ? nRLERecords++ : nSimpleRecords++;
        var _0x19f1ed = 'Simple records: ' + nSimpleRecords;
        return _0x19f1ed += '\nRLE records: ' + nRLERecords, _0x19f1ed += '\nTotal records: ' + this['records']['length'], this['truncate'] && (_0x19f1ed += '\nTruncate at: 0x' + this['truncate']['toString'](0x10)), _0x19f1ed;
    }, _0x445e21['prototype']['export'] = function (_0x591388) {

        for (var _0x37c8b2 = 0x5, _0x14749d = 0x0; _0x14749d < this['records']['length']; _0x14749d++) this['records'][_0x14749d]['type'] === _0x20ca82 ? _0x37c8b2 += 0x8 : _0x37c8b2 += 0x5 + this['records'][_0x14749d]['data']['length'];
        _0x37c8b2 += 0x3, this['truncate'] && (_0x37c8b2 += 0x3), tempFile = new ejs_arraybuffer(_0x37c8b2), tempFile['fileName'] = _0x591388 + '.ips', tempFile['writeString']('PATCH');
        for (_0x14749d = 0x0; _0x14749d < this['records']['length']; _0x14749d++) {
            var _0x188618 = this['records'][_0x14749d];
            tempFile['writeU24'](_0x188618['offset']), _0x188618['type'] === _0x20ca82 ? (tempFile['writeU16'](0x0), tempFile['writeU16'](_0x188618['length']), tempFile['writeU8'](_0x188618['byte'])) : (tempFile['writeU16'](_0x188618['data']['length']), tempFile['writeBytes'](_0x188618['data']));
        }
        return tempFile['writeString']('EOF'), _0x188618['truncate'] && tempFile['writeU24'](_0x188618['truncate']), tempFile;
    }, _0x445e21['prototype']['apply'] = function (_0x58dba4) {
        var _0x36d089;
        if (this['truncate']) _0x36d089 = _0x58dba4['slice'](0x0, this['truncate']);
        else {
            for (var _0x21bc72 = _0x58dba4['fileSize'], _0x404f02 = 0x0; _0x404f02 < this['records']['length']; _0x404f02++) {
                var _0x2c0ab8 = this['records'][_0x404f02];
                _0x2c0ab8['type'] === _0x20ca82 ? _0x2c0ab8['offset'] + _0x2c0ab8['length'] > _0x21bc72 && (_0x21bc72 = _0x2c0ab8['offset'] + _0x2c0ab8['length']) : _0x2c0ab8['offset'] + _0x2c0ab8['data']['length'] > _0x21bc72 && (_0x21bc72 = _0x2c0ab8['offset'] + _0x2c0ab8['data']['length']);
            }
            _0x21bc72 === _0x58dba4['fileSize'] ? _0x36d089 = _0x58dba4['slice'](0x0, _0x58dba4['fileSize']) : (_0x36d089 = new ejs_arraybuffer(_0x21bc72), _0x58dba4['copyToFile'](_0x36d089, 0x0));
        }
        _0x58dba4['seek'](0x0);
        for (_0x404f02 = 0x0; _0x404f02 < this['records']['length']; _0x404f02++)
            if (_0x36d089['seek'](this['records'][_0x404f02]['offset']), this['records'][_0x404f02]['type'] === _0x20ca82) {
                for (var _0x401cb5 = 0x0; _0x401cb5 < this['records'][_0x404f02]['length']; _0x401cb5++) _0x36d089['writeU8'](this['records'][_0x404f02]['byte']);
            } else _0x36d089['writeBytes'](this['records'][_0x404f02]['data']);
        return _0x36d089;
    }, '0123456789abcdef' ['split']('');
    var _0x45683b = (function () {
        for (var _0x25f66d, _0x5a29e9 = [], _0x5522a5 = 0x0; _0x5522a5 < 0x100; _0x5522a5++) {
            _0x25f66d = _0x5522a5;
            for (var _0x3dafe9 = 0x0; _0x3dafe9 < 0x8; _0x3dafe9++) _0x25f66d = 0x1 & _0x25f66d ? 0xedb88320 ^ _0x25f66d >>> 0x1 : _0x25f66d >>> 0x1;
            _0x5a29e9[_0x5522a5] = _0x25f66d;
        }
        return _0x5a29e9;
    }());

    function getCrc32int(_0x1bb516, _0x1111dd, _0x47fb53) {
        var _0xd59c83 = _0x1111dd ? new Uint8Array(_0x1bb516['_u8array']['buffer'], _0x1111dd) : _0x1bb516['_u8array'],
            _0x4f6f5a = -0x1,
            _0x3d8750 = _0x47fb53 ? _0xd59c83['length'] - 0x4 : _0xd59c83['length'],
            _0x5ecc07 = 0x0;
        for (; _0x5ecc07 < _0x3d8750; _0x5ecc07++) _0x4f6f5a = _0x4f6f5a >>> 0x8 ^ _0x45683b[0xff & (_0x4f6f5a ^ _0xd59c83[_0x5ecc07])];
        return (-0x1 ^ _0x4f6f5a) >>> 0x0;
    }
    var _0x252f1b = 0x0,
        _0x3295c2 = 0x1,
        _0x5e81be = 0x2,
        _0x3db972 = 0x3;

    function _0x238008() {

        this['sourceSize'] = 0x0, this['targetSize'] = 0x0, this['metaData'] = '', this['actions'] = [], this['sourceChecksum'] = 0x0, this['targetChecksum'] = 0x0, this['patchChecksum'] = 0x0;
    }

    function _0x291a53(_0x171dcc) {

        _0x171dcc['readVLV'] = _0x4d16ba, _0x171dcc['littleEndian'] = !0x0;
        var _0x35bdc7 = new _0x238008();
        _0x171dcc['seek'](0x4), _0x35bdc7['sourceSize'] = _0x171dcc['readVLV'](), _0x35bdc7['targetSize'] = _0x171dcc['readVLV']();
        var _0x3a7b10 = _0x171dcc['readVLV']();
        _0x3a7b10 && (_0x35bdc7['metaData'] = _0x171dcc['readString'](_0x3a7b10));
        for (var _0x212c64 = _0x171dcc['fileSize'] - 0xc; _0x171dcc['offset'] < _0x212c64;) {
            var _0x2df873 = _0x171dcc['readVLV'](),
                _0x2d759b = {
                    'type': 0x3 & _0x2df873,
                    'length': 0x1 + (_0x2df873 >> 0x2)
                };
            if (_0x2d759b['type'] === _0x3295c2) _0x2d759b['bytes'] = _0x171dcc['readBytes'](_0x2d759b['length']);
            else {
                if (_0x2d759b['type'] === _0x5e81be || _0x2d759b['type'] === _0x3db972) {
                    var _0x32021e = _0x171dcc['readVLV']();
                    _0x2d759b['relativeOffset'] = (0x1 & _0x32021e ? -0x1 : 0x1) * (_0x32021e >> 0x1);
                }
            }
            _0x35bdc7['actions']['push'](_0x2d759b);
        }
        if (_0x35bdc7['sourceChecksum'] = _0x171dcc['readU32'](), _0x35bdc7['targetChecksum'] = _0x171dcc['readU32'](), _0x35bdc7['patchChecksum'] = _0x171dcc['readU32'](), _0x35bdc7['patchChecksum'] !== getCrc32int(_0x171dcc, 0x0, !0x0)) throw new Error('error_crc_patch');
        return _0x35bdc7;
    }

    function _0x4d16ba() {

        for (var _0xf9982e = 0x0, _0x4315ce = 0x1;;) {
            var _0x2d57f3 = this['readU8']();
            if (_0xf9982e += (0x7f & _0x2d57f3) * _0x4315ce, 0x80 & _0x2d57f3) break;
            _0xf9982e += _0x4315ce <<= 0x7;
        }
        return this['_lastRead'] = _0xf9982e, _0xf9982e;
    }

    function _0x46cc0e(_0x2af705) {

        for (;;) {
            var _0x397c09 = 0x7f & _0x2af705;
            if (0x0 === (_0x2af705 >>= 0x7)) {
                this['writeU8'](0x80 | _0x397c09);
                break;
            }
            this['writeU8'](_0x397c09), _0x2af705--;
        }
    }

    function _0x2cbaf7(_0x21b2bf) {
        for (var _0x4a75e7 = 0x0;;) {
            if (0x0 === (_0x21b2bf >>= 0x7)) {
                _0x4a75e7++;
                break;
            }
            _0x4a75e7++, _0x21b2bf--;
        }
        return _0x4a75e7;
    }

    function _0x55a9d8() {

        this['offset'] = 0x0, this['next'] = null;
    }
    _0x238008['prototype']['toString'] = function () {
        var _0x3f2e16 = 'Source size: ' + this['sourceSize'];
        return _0x3f2e16 += '\x0aTarget size: ' + this['targetSize'], _0x3f2e16 += '\x0aMetadata: ' + this['metaData'], _0x3f2e16 += '\n#Actions: ' + this['actions']['length'];
    }, _0x238008['prototype']['validateSource'] = function (_0x111cd0, _0x3c6257) {

        return this['sourceChecksum'] === getCrc32int(_0x111cd0, _0x3c6257);
    }, _0x238008['prototype']['apply'] = function (_0x57e076, _0x466b6e) {

        if (_0x466b6e && !this['validateSource'](_0x57e076)) throw new Error('error_crc_input');
        for (var _0x1d8955 = new ejs_arraybuffer(this['targetSize']), _0x35c896 = 0x0, _0x4ad173 = 0x0, _0x3f341a = 0x0; _0x3f341a < this['actions']['length']; _0x3f341a++) {
            var _0x141601 = this['actions'][_0x3f341a];
            if (_0x141601['type'] === _0x252f1b) _0x57e076['copyToFile'](_0x1d8955, _0x1d8955['offset'], _0x141601['length']), _0x1d8955['skip'](_0x141601['length']);
            else {
                if (_0x141601['type'] === _0x3295c2) _0x1d8955['writeBytes'](_0x141601['bytes']);
                else {
                    if (_0x141601['type'] === _0x5e81be) {
                        _0x35c896 += _0x141601['relativeOffset'];
                        for (var _0x195472 = _0x141601['length']; _0x195472--;) _0x1d8955['writeU8'](_0x57e076['_u8array'][_0x35c896]), _0x35c896++;
                    } else {
                        if (_0x141601['type'] === _0x3db972) {
                            _0x4ad173 += _0x141601['relativeOffset'];
                            for (_0x195472 = _0x141601['length']; _0x195472--;) _0x1d8955['writeU8'](_0x1d8955['_u8array'][_0x4ad173]), _0x4ad173++;
                        }
                    }
                }
            }
        }
        if (_0x466b6e && this['targetChecksum'] !== getCrc32int(_0x1d8955)) throw new Error('error_crc_output');
        return _0x1d8955;
    }, _0x238008['prototype']['export'] = function (_0x19844c) {
        var _0x5775c6 = 'BPS1' ['length'];
        _0x5775c6 += _0x2cbaf7(this['sourceSize']), _0x5775c6 += _0x2cbaf7(this['targetSize']), _0x5775c6 += _0x2cbaf7(this['metaData']['length']), _0x5775c6 += this['metaData']['length'];
        for (var _0x416358 = 0x0; _0x416358 < this['actions']['length']; _0x416358++) {
            _0x5775c6 += _0x2cbaf7(((_0x28dccd = this['actions'][_0x416358])['length'] - 0x1 << 0x2) + _0x28dccd['type']), _0x28dccd['type'] === _0x3295c2 ? _0x5775c6 += _0x28dccd['length'] : _0x28dccd['type'] !== _0x5e81be && _0x28dccd['type'] !== _0x3db972 || (_0x5775c6 += _0x2cbaf7((Math['abs'](_0x28dccd['relativeOffset']) << 0x1) + (_0x28dccd['relativeOffset'] < 0x0 ? 0x1 : 0x0)));
        }
        var _0x3373ae = new ejs_arraybuffer(_0x5775c6 += 0xc);
        _0x3373ae['fileName'] = _0x19844c + '.bps', _0x3373ae['littleEndian'] = !0x0, _0x3373ae['writeVLV'] = _0x46cc0e, _0x3373ae['writeString']('BPS1'), _0x3373ae['writeVLV'](this['sourceSize']), _0x3373ae['writeVLV'](this['targetSize']), _0x3373ae['writeVLV'](this['metaData']['length']), _0x3373ae['writeString'](this['metaData'], this['metaData']['length']);
        for (_0x416358 = 0x0; _0x416358 < this['actions']['length']; _0x416358++) {
            var _0x28dccd = this['actions'][_0x416358];
            _0x3373ae['writeVLV']((_0x28dccd['length'] - 0x1 << 0x2) + _0x28dccd['type']), _0x28dccd['type'] === _0x3295c2 ? _0x3373ae['writeBytes'](_0x28dccd['bytes']) : _0x28dccd['type'] !== _0x5e81be && _0x28dccd['type'] !== _0x3db972 || _0x3373ae['writeVLV']((Math['abs'](_0x28dccd['relativeOffset']) << 0x1) + (_0x28dccd['relativeOffset'] < 0x0 ? 0x1 : 0x0));
        }
        return _0x3373ae['writeU32'](this['sourceChecksum']), _0x3373ae['writeU32'](this['targetChecksum']), _0x3373ae['writeU32'](this['patchChecksum']), _0x3373ae;
    }, _0x55a9d8['prototype']['delete'] = function () {

        this['next'] && delete this['next'];
    };
    var _0x4bc4ab = 'UPS1';

    function _0x50fdb2() {

        this['records'] = [], this['sizeInput'] = 0x0, this['sizeOutput'] = 0x0, this['checksumInput'] = 0x0, this['checksumOutput'] = 0x0;
    }

    function _0x23561c(_0xda93ea) {

        for (;;) {
            var _0x432094 = 0x7f & _0xda93ea;
            if (0x0 === (_0xda93ea >>= 0x7)) {
                this['writeU8'](0x80 | _0x432094);
                break;
            }
            this['writeU8'](_0x432094), _0xda93ea -= 0x1;
        }
    }

    function _0x4c4d36() {

        for (var _0x57ce9a = 0x0, _0xe0dd71 = 0x1;;) {
            var _0x3d796e = this['readU8']();
            if (-0x1 == _0x3d796e) throw new Error('Can\x27t read UPS VLV at 0x' + (this['offset'] - 0x1)['toString'](0x10));
            if (_0x57ce9a += (0x7f & _0x3d796e) * _0xe0dd71, 0x0 != (0x80 & _0x3d796e)) break;
            _0x57ce9a += _0xe0dd71 <<= 0x7;
        }
        return _0x57ce9a;
    }

    function _0x1f9751(_0x5f0fdf) {
        for (var _0x25729e = 0x0;;) {
            if (_0x25729e++, 0x0 === (_0x5f0fdf >>= 0x7)) break;
            _0x5f0fdf -= 0x1;
        }
        return _0x25729e;
    }

    function _0xe7d66e(_0x2a9d4e) {
        var _0x3d818c = new _0x50fdb2();
        _0x2a9d4e['readVLV'] = _0x4c4d36, _0x2a9d4e['seek'](_0x4bc4ab['length']), _0x3d818c['sizeInput'] = _0x2a9d4e['readVLV'](), _0x3d818c['sizeOutput'] = _0x2a9d4e['readVLV']();
        for (; _0x2a9d4e['offset'] < _0x2a9d4e['fileSize'] - 0xc;) {
            for (var _0x36f2d9 = _0x2a9d4e['readVLV'](), _0x3575ae = []; _0x2a9d4e['readU8']();) _0x3575ae['push'](_0x2a9d4e['_lastRead']);
            _0x3d818c['addRecord'](_0x36f2d9, _0x3575ae);
        }
        return _0x2a9d4e['littleEndian'] = !0x0, _0x3d818c['checksumInput'] = _0x2a9d4e['readU32'](), _0x3d818c['checksumOutput'] = _0x2a9d4e['readU32'](), _0x2a9d4e['littleEndian'] = !0x1, _0x3d818c;
    }
    _0x50fdb2['prototype']['addRecord'] = function (_0xe6f46f, _0x5cd05a) {

        this['records']['push']({
            'offset': _0xe6f46f,
            'XORdata': _0x5cd05a
        });
    }, _0x50fdb2['prototype']['toString'] = function () {
        var _0x538971 = 'Records: ' + (void 0x0)['records']['length'];
        return _0x538971 += '\nInput file size: ' + (void 0x0)['sizeInput'], _0x538971 += '\x0aOutput file size: ' + (void 0x0)['sizeOutput'], _0x538971 += '\nInput file checksum: ' + padZeroes((void 0x0)['checksumInput'], 0x4), _0x538971 += '\nOutput file checksum: ' + padZeroes((void 0x0)['checksumOutput'], 0x4);
    }, _0x50fdb2['prototype']['export'] = function (_0x5c3f14) {
        var _0x59a5b3 = _0x4bc4ab['length'];
        _0x59a5b3 += _0x1f9751(this['sizeInput']), _0x59a5b3 += _0x1f9751(this['sizeOutput']);
        for (var _0x28badf = 0x0; _0x28badf < this['records']['length']; _0x28badf++) _0x59a5b3 += _0x1f9751(this['records'][_0x28badf]['offset']), _0x59a5b3 += this['records'][_0x28badf]['XORdata']['length'] + 0x1;
        _0x59a5b3 += 0xc, tempFile = new ejs_arraybuffer(_0x59a5b3), tempFile['writeVLV'] = _0x23561c, tempFile['fileName'] = _0x5c3f14 + '.ups', tempFile['writeString'](_0x4bc4ab), tempFile['writeVLV'](this['sizeInput']), tempFile['writeVLV'](this['sizeOutput']);
        for (_0x28badf = 0x0; _0x28badf < this['records']['length']; _0x28badf++) tempFile['writeVLV'](this['records'][_0x28badf]['offset']), tempFile['writeBytes'](this['records'][_0x28badf]['XORdata']), tempFile['writeU8'](0x0);
        return tempFile['littleEndian'] = !0x0, tempFile['writeU32'](this['checksumInput']), tempFile['writeU32'](this['checksumOutput']), tempFile['writeU32'](getCrc32int(tempFile, 0x0, !0x0)), tempFile;
    }, _0x50fdb2['prototype']['validateSource'] = function (_0xa205f4, _0x4721ec) {

        return getCrc32int(_0xa205f4, _0x4721ec) === this['checksumInput'];
    }, _0x50fdb2['prototype']['apply'] = function (_0x1d2eff, _0x2767af) {

        _0x2767af && this['validateSource'](_0x1d2eff), tempFile = new ejs_arraybuffer(this['sizeOutput']), _0x1d2eff['copyToFile'](tempFile, 0x0, this['sizeInput']), _0x1d2eff['seek'](0x0);
        for (var _0x330f2c = 0x0; _0x330f2c < this['records']['length']; _0x330f2c++) {
            var _0x3e9369 = this['records'][_0x330f2c];
            tempFile['skip'](_0x3e9369['offset']), _0x1d2eff['skip'](_0x3e9369['offset']);
            for (var _0x4afaa7 = 0x0; _0x4afaa7 < _0x3e9369['XORdata']['length']; _0x4afaa7++) tempFile['writeU8']((_0x1d2eff['isEOF']() ? 0x0 : _0x1d2eff['readU8']()) ^ _0x3e9369['XORdata'][_0x4afaa7]);
            tempFile['skip'](0x1), _0x1d2eff['skip'](0x1);
        }
        return _0x2767af && (getCrc32int(tempFile), this['checksumOutput']), tempFile;
    };
    var ejs_loader = {
        'romdb': null,
        'supportBatterySave': !0x1,
        'hash': '2b35cacf70ae',
        'hash2': 'f5cbb3f38c0bb20e4',
        'hash3': '88cc8ad0c350400499a0',
        'loading': null,
        'gamePatch': null,
        'saveFilenames': [],
        'FS': null,
        'Module': null,
        'aspectRatio': null,
        'memData': null,
        'wasmData': null,
        'coreFileData': {},
        'coreFileName': '',
        'coreFileVersion': '',
        'newCore': !0x1,
        'newCoreKey': null,
        'newCoreKey2': null,
        'servers': {},
        'arcadeCores': ['arcade', 'mame', 'mame0.193', 'mame0.243', 'mame2003', 'fbneo', 'fba0.2.97.29'],
        'isArcadeCore': !0x1,
        'buttonMaps': [],
        'coreOptions': [],
        'diskControl': null,
        'isMobileDevice': !!/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i ['test'](navigator['userAgent'] || '')
    };

    function _0x1fd890(_0x4d718e) {

        return function (_0x290188) {

            if (I.array(_0x290188)) {
                for (var _0x3e2929 = 0x0, _0x2db44a = new Array(_0x290188['length']); _0x3e2929 < _0x290188['length']; _0x3e2929++) _0x2db44a[_0x3e2929] = _0x290188[_0x3e2929];
                return _0x2db44a;
            }
        }(_0x4d718e) || function (_0x1e6085) {

            if (Symbol['iterator'] in Object(_0x1e6085) || '[object Arguments]' === Object['prototype']['toString']['call'](_0x1e6085)) return Array['from'](_0x1e6085);
        }(_0x4d718e) || (function () {

            throw new TypeError('Invalid attempt to spread non-iterable instance');
        }());
    }

    function _0x5d6e75(_0x219318, _0x313eb3) {

        for (var _0x1fc9b0 = 0x0; _0x1fc9b0 < _0x313eb3['length']; _0x1fc9b0++) {
            var _0x2e4c89 = _0x313eb3[_0x1fc9b0];
            _0x2e4c89['enumerable'] = _0x2e4c89['enumerable'] || !0x1, _0x2e4c89['configurable'] = !0x0, 'value' in _0x2e4c89 && (_0x2e4c89['writable'] = !0x0), Object['defineProperty'](_0x219318, _0x2e4c89['key'], _0x2e4c89);
        }
    }
    var _0x43edfa, _0x73670a, _0xf01683, _0x3b49f1, _0x23473e, _0x3e3214 = (_0x43edfa = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'], _0x73670a = (function () {


        function _0xd0e406(_0x5586b5) {
            var _0x31177f = _0x5586b5['targetModal'],
                _0x544aee = _0x5586b5['triggers'],
                _0x483228 = void 0x0 === _0x544aee ? [] : _0x544aee,
                _0x5a503d = _0x5586b5['onShow'],
                _0x19b56b = void 0x0 === _0x5a503d ? function () {} : _0x5a503d,
                _0x679549 = _0x5586b5['onClose'],
                _0x9ed464 = void 0x0 === _0x679549 ? function () {} : _0x679549,
                _0x4a9e61 = _0x5586b5['openTrigger'],
                _0x61dc2 = void 0x0 === _0x4a9e61 ? 'data-micromodal-trigger' : _0x4a9e61,
                _0x5aa4e0 = _0x5586b5['closeTrigger'],
                _0x2f9010 = void 0x0 === _0x5aa4e0 ? 'data-micromodal-close' : _0x5aa4e0,
                _0x2907c9 = _0x5586b5['disableScroll'],
                _0xfe67c7 = void 0x0 !== _0x2907c9 && _0x2907c9,
                _0x560cfb = _0x5586b5['disableFocus'],
                _0x541111 = void 0x0 !== _0x560cfb && _0x560cfb,
                _0x12132c = _0x5586b5['awaitCloseAnimation'],
                _0x194c65 = void 0x0 !== _0x12132c && _0x12132c,
                _0x3c24fc = _0x5586b5['debugMode'],
                _0xb9a40b = void 0x0 !== _0x3c24fc && _0x3c24fc,
                _0x46cea2 = _0x5586b5['closeByEsckey'],
                _0x34f9cf = void 0x0 === _0x46cea2 || _0x46cea2;
            ! function (_0xbaf3ac, _0x526761) {

                if (!(_0xbaf3ac instanceof _0x526761)) throw new TypeError('Cannot call a class as a function');
            }(this, _0xd0e406), this['modal'] = document['getElementById'](_0x31177f), this['config'] = {
                'debugMode': _0xb9a40b,
                'disableScroll': _0xfe67c7,
                'openTrigger': _0x61dc2,
                'closeTrigger': _0x2f9010,
                'onShow': _0x19b56b,
                'onClose': _0x9ed464,
                'awaitCloseAnimation': _0x194c65,
                'disableFocus': _0x541111,
                'closeByEsckey': _0x34f9cf
            }, _0x483228['length'] > 0x0 && this['registerTriggers']['apply'](this, _0x1fd890(_0x483228)), this['onClick'] = this['onClick']['bind'](this), this['onKeydown'] = this['onKeydown']['bind'](this);
        }
        var _0x19e2f9, _0x4ab304, _0x2853bc;
        return _0x19e2f9 = _0xd0e406, (_0x4ab304 = [{
            'key': 'registerTriggers',
            'value': function () {

                for (var _0x563bdb = this, _0x3e0a50 = arguments['length'], _0x568ea3 = new Array(_0x3e0a50), _0x487ad3 = 0x0; _0x487ad3 < _0x3e0a50; _0x487ad3++) _0x568ea3[_0x487ad3] = arguments[_0x487ad3];
                _0x568ea3['forEach'](function (_0x55a4cf) {

                    _0x55a4cf['addEventListener']('click', function () {

                        return _0x563bdb['showModal']();
                    });
                });
            }
        }, {
            'key': 'showModal',
            'value': function () {

                this['activeElement'] = document['activeElement'], this['modal']['setAttribute']('aria-hidden', 'false'), this['modal']['classList']['add'](getClassName('is-open')), this['setFocusToFirstNode'](), this['addEventListeners'](), this['config']['onShow'](this['modal']);
            }
        }, {
            'key': 'closeModal',
            'value': function () {
                var _0x502dc2 = this['modal'];
                this['modal']['setAttribute']('aria-hidden', 'true'), this['removeEventListeners'](), this['config']['onClose'](this['modal']), this['config']['awaitCloseAnimation'] ? this['modal']['addEventListener']('animationend', function _0x37a179() {

                    _0x502dc2['classList']['remove'](getClassName('is-open')), _0x502dc2['removeEventListener']('animationend', _0x37a179, !0x1);
                }, !0x1) : _0x502dc2['classList']['remove'](getClassName('is-open'));
            }
        }, {
            'key': 'addEventListeners',
            'value': function () {

                this['modal']['addEventListener']('touchstart', this['onClick']), this['modal']['addEventListener']('click', this['onClick']), document['addEventListener']('keydown', this['onKeydown']);
            }
        }, {
            'key': 'removeEventListeners',
            'value': function () {

                this['modal']['removeEventListener']('touchstart', this['onClick']), this['modal']['removeEventListener']('click', this['onClick']), document['removeEventListener']('keydown', this['onKeydown']);
            }
        }, {
            'key': 'onClick',
            'value': function (_0x5a4f0a) {

                _0x5a4f0a['target']['hasAttribute'](this['config']['closeTrigger']) && (this['closeModal'](), _0x5a4f0a['preventDefault']());
            }
        }, {
            'key': 'onKeydown',
            'value': function (_0x124c87) {

                this['config']['closeByEsckey'] && 0x1b === _0x124c87['keyCode'] && this['closeModal'](_0x124c87), 0x9 === _0x124c87['keyCode'] && this['maintainFocus'](_0x124c87);
            }
        }, {
            'key': 'getFocusableNodes',
            'value': function () {
                var _0x522311 = this['modal']['querySelectorAll'](_0x43edfa);
                return Object['keys'](_0x522311)['map'](function (_0x4d55f7) {
                    return _0x522311[_0x4d55f7];
                });
            }
        }, {
            'key': 'setFocusToFirstNode',
            'value': function () {

                if (!this['config']['disableFocus']) {
                    var _0x1ee713 = this['getFocusableNodes']();
                    _0x1ee713['length'] && _0x1ee713[0x0]['focus']();
                }
            }
        }, {
            'key': 'maintainFocus',
            'value': function (_0x301ea9) {
                var _0xc66e27 = this['getFocusableNodes']();
                if (this['modal']['contains'](document['activeElement'])) {
                    var _0x559465 = _0xc66e27['indexOf'](document['activeElement']);
                    _0x301ea9['shiftKey'] && 0x0 === _0x559465 && (_0xc66e27[_0xc66e27['length'] - 0x1]['focus'](), _0x301ea9['preventDefault']()), _0x301ea9['shiftKey'] || _0x559465 !== _0xc66e27['length'] - 0x1 || (_0xc66e27[0x0]['focus'](), _0x301ea9['preventDefault']());
                } else _0xc66e27[0x0]['focus']();
            }
        }]) && _0x5d6e75(_0x19e2f9['prototype'], _0x4ab304), _0x2853bc && _0x5d6e75(_0x19e2f9, _0x2853bc), _0xd0e406;
    }()), _0xf01683 = null, _0x3b49f1 = function (_0x4b36ea) {
        if (!document['getElementById'](_0x4b36ea)) return !0x1;
    }, _0x23473e = function (_0x35230b, _0x285f62) {
        if (function (_0x267889) {

                _0x267889['length'] <= 0x0 && (console['warn']('MicroModal v' ['concat'](version, ': ❗Please specify at least one %c\x27micromodal-trigger\x27'), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.'), console['warn']('%cExample:', 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', '<a href="#" data-micromodal-trigger="my-modal"></a>'));
            }(_0x35230b), !_0x285f62) return !0x0;
        for (var _0x13fe73 in _0x285f62) _0x3b49f1(_0x13fe73);
        return !0x0;
    }, {
        'init': function (_0xe13ef) {
            var _0x1224cf = Object['assign']({}, {
                    'openTrigger': 'data-micromodal-trigger'
                }, _0xe13ef),
                _0x51e4c0 = _0x1fd890(document['querySelectorAll']('[' ['concat'](_0x1224cf['openTrigger'], ']'))),
                _0x57a547 = function (_0x5b5f82, _0x3572eb) {
                    var _0x1f2f48 = [];
                    return _0x5b5f82['forEach'](function (_0x1597e2) {
                        var _0x8eb0a9 = _0x1597e2['attributes'][_0x3572eb]['value'];
                        void 0x0 === _0x1f2f48[_0x8eb0a9] && (_0x1f2f48[_0x8eb0a9] = []), _0x1f2f48[_0x8eb0a9]['push'](_0x1597e2);
                    }), _0x1f2f48;
                }(_0x51e4c0, _0x1224cf['openTrigger']);
            if (!0x0 !== _0x1224cf['debugMode'] || !0x1 !== _0x23473e(_0x51e4c0, _0x57a547))
                for (var _0x591a88 in _0x57a547) {
                    var _0x2c025f = _0x57a547[_0x591a88];
                    _0x1224cf['targetModal'] = _0x591a88, _0x1224cf['triggers'] = _0x1fd890(_0x2c025f), new _0x73670a(_0x1224cf);
                }
        },
        'show': function (_0x2b9197, _0x1797fb) {
            var _0x41aad8 = _0x1797fb || {};
            return _0x41aad8['targetModal'] = _0x2b9197, !0x0 === _0x41aad8['debugMode'] && !0x1 === _0x3b49f1(_0x2b9197) ? _0xf01683 = null : (_0xf01683 = new _0x73670a(_0x41aad8))['showModal'](), _0xf01683;
        },
        'close': function () {

            _0xf01683['closeModal']();
        }
    });
    class ejs_toast {
        constructor(obj) {
            this['container'] = obj['container'];
            this['message'] = obj['message'];
            this['duraction'] = obj['duraction'] || 0xfa0;
            this['onClick'] = this['onClick']['bind'](this);
            this['timeout'] = null;
        }
        showToast() {
            var _0x51d007, _0x2c9f66 = this,
                _0x15a0e4 = this['container']['querySelector']('.' ['concat'](_0x50eb77));
            if (_0x15a0e4 || (_0x15a0e4 = createElm('div', {
                    'class': _0x50eb77
                }), this['container']['appendChild'](_0x15a0e4)), (_0x51d007 = _0x15a0e4['querySelectorAll']('.' ['concat'](_0x509c52)))['length'] > 0x5) {
                var _0x33b0b2 = _0x51d007[0x0];
                _0x15a0e4['removeChild'](_0x33b0b2);
            }
            this['modal'] = createElm('div', {
                'class': _0x509c52
            }, this['message']), this['modal']['setAttribute']('aria-hidden', 'false'), this['modal']['classList']['add'](getClassName('is-open')), this['addEventListeners'](), _0x15a0e4['appendChild'](this['modal']), this['timeout'] = setTimeout(function () {

                _0x2c9f66['closeToast']();
            }, this['duraction']);
        }
        closeToast() {
            var _0x593fe7 = this['modal'],
                _0x12353e = this['container']['querySelector']('.' ['concat'](_0x50eb77));
            this['modal']['setAttribute']('aria-hidden', 'true');
            try {
                _0x12353e['removeChild'](_0x593fe7);
            } catch (_0x2b8549) {}
            this['removeEventListeners'](), this['timeout'] && (clearTimeout(this['timeout']), this['timeout'] = null);
        }
        addEventListeners() {

            this['modal']['addEventListener']('touchstart', this['onClick']), this['modal']['addEventListener']('click', this['onClick']);
        }
        removeEventListeners() {

            this['modal']['removeEventListener']('touchstart', this['onClick']), this['modal']['removeEventListener']('click', this['onClick']);
        }
        onClick(event) {

            this['closeToast'](), event['preventDefault']();
        }
    }
    var _0x50eb77, _0x509c52, _0x45facf, _0x88c152 = (_0x50eb77 = getClassName('ejs-toast'), _0x509c52 = getClassName('ejs-toast-item'), _0x45facf = null, {
        'show': function (_0x15a353, _0x17f10e, _0x4f32be) {
            var _0x80e80a = {};
            return _0x80e80a['container'] = _0x15a353, _0x80e80a['message'] = _0x17f10e, _0x80e80a['duraction'] = _0x4f32be, (_0x45facf = new ejs_toast(_0x80e80a))['showToast'](), _0x45facf;
        },
        'close': function () {

            _0x45facf['closeModal']();
        }
    });

    function _0x33f24c(_0x483818, _0x46cc1f, _0x48c95a, _0x4b0716, _0x407368, _0x2cd4d3, _0x214fbf) {

        try {
            var _0x23c305 = _0x483818[_0x2cd4d3](_0x214fbf),
                _0x65cad = _0x23c305['value'];
        } catch (_0x2be715) {
            return void _0x48c95a(_0x2be715);
        }
        _0x23c305['done'] ? _0x46cc1f(_0x65cad) : Promise['resolve'](_0x65cad)['then'](_0x4b0716, _0x407368);
    }
    var ejs_Controller = {
        CF: T.callaction,
        RF: T.runaction,
        action: {},
        defaultControllers: {
            0x0: {
                0x0: {
                    value: '88',
                    value2: '1'
                },
                0x1: {
                    value: '83',
                    value2: '3'
                },
                0x2: {
                    value: '16',
                    value2: '8'
                },
                0x3: {
                    value: '13',
                    value2: '9'
                },
                0x4: {
                    value: '38',
                    value2: '12'
                },
                0x5: {
                    value: '40',
                    value2: '13'
                },
                0x6: {
                    value: '37',
                    value2: '14'
                },
                0x7: {
                    value: '39',
                    value2: '15'
                },
                0x8: {
                    value: '90',
                    value2: '0'
                },
                0x9: {
                    value: '65',
                    value2: '2'
                },
                0xa: {
                    value: '81',
                    value2: '4'
                },
                0xb: {
                    value: '69',
                    value2: '5'
                },
                0xc: {
                    value: '82',
                    value2: '6'
                },
                0xd: {
                    value: '84',
                    value2: '7'
                },
                0xe: {},
                0xf: {},
                0x10: {
                    value: '72'
                },
                0x11: {
                    value: '70'
                },
                0x12: {
                    value: '71'
                },
                0x13: {
                    value: '84'
                },
                0x14: {},
                0x15: {},
                0x16: {},
                0x17: {}
            },
            0x1: {},
            0x2: {},
            0x3: {}
        },
        controllers: {},
        remappingAxis: {},
        virtualGamepadContainer: null,
        keyMap: {
            0x8: 'backspace',
            0x9: 'tab',
            0xd: 'enter',
            0x10: 'shift',
            0x11: 'ctrl',
            0x12: 'alt',
            0x13: 'pause/break',
            0x14: 'caps lock',
            0x1b: 'escape',
            0x20: 'space',
            0x21: 'page up',
            0x22: 'page down',
            0x23: 'end',
            0x24: 'home',
            0x25: 'left arrow',
            0x26: 'up arrow',
            0x27: 'right arrow',
            0x28: 'down arrow',
            0x2d: 'insert',
            0x2e: 'delete',
            0x30: '0',
            0x31: '1',
            0x32: '2',
            0x33: '3',
            0x34: '4',
            0x35: '5',
            0x36: '6',
            0x37: '7',
            0x38: '8',
            0x39: '9',
            0x41: 'a',
            0x42: 'b',
            0x43: 'c',
            0x44: 'd',
            0x45: 'e',
            0x46: 'f',
            0x47: 'g',
            0x48: 'h',
            0x49: 'i',
            0x4a: 'j',
            0x4b: 'k',
            0x4c: 'l',
            0x4d: 'm',
            0x4e: 'n',
            0x4f: 'o',
            0x50: 'p',
            0x51: 'q',
            0x52: 'r',
            0x53: 's',
            0x54: 't',
            0x55: 'u',
            0x56: 'v',
            0x57: 'w',
            0x58: 'x',
            0x59: 'y',
            0x5a: 'z',
            0x5b: 'left window key',
            0x5c: 'right window key',
            0x5d: 'select key',
            0x60: 'numpad 0',
            0x61: 'numpad 1',
            0x62: 'numpad 2',
            0x63: 'numpad 3',
            0x64: 'numpad 4',
            0x65: 'numpad 5',
            0x66: 'numpad 6',
            0x67: 'numpad 7',
            0x68: 'numpad 8',
            0x69: 'numpad 9',
            0x6a: 'multiply',
            0x6b: 'add',
            0x6d: 'subtract',
            0x6e: 'decimal point',
            0x6f: 'divide',
            0x70: 'f1',
            0x71: 'f2',
            0x72: 'f3',
            0x73: 'f4',
            0x74: 'f5',
            0x75: 'f6',
            0x76: 'f7',
            0x77: 'f8',
            0x78: 'f9',
            0x79: 'f10',
            0x7a: 'f11',
            0x7b: 'f12',
            0x90: 'num lock',
            0x91: 'scroll lock',
            0xba: 'semi-colon',
            0xbb: 'equal sign',
            0xbc: 'comma',
            0xbd: 'dash',
            0xbe: 'period',
            0xbf: 'forward slash',
            0xc0: 'grave accent',
            0xdb: 'open bracket',
            0xdc: 'back slash',
            0xdd: 'close braket',
            0xde: 'single quote'
        },
        mamekeymap: {
            0x1: 'a',
            0x2: 'b',
            0x3: 'c',
            0x4: 'd',
            0x5: 'e',
            0x6: 'f',
            0x7: 'g',
            0x8: 'h',
            0x9: 'i',
            0xa: 'k',
            0xb: 'l',
            0xc: 'l',
            0xd: 'm',
            0xe: 'n',
            0xf: 'o',
            0x10: 'p',
            0x11: 'q',
            0x12: 'r',
            0x13: 's',
            0x14: 't',
            0x15: 'u',
            0x16: 'v',
            0x17: 'w',
            0x18: 'x',
            0x19: 'y',
            0x1a: 'z',
            0x1b: '0',
            0x1c: '1',
            0x1d: '2',
            0x1e: '3',
            0x1f: '4',
            0x20: '5',
            0x21: '6',
            0x22: '7',
            0x23: '8',
            0x24: '9',
            0x25: 'f1',
            0x26: 'f2',
            0x27: 'f3',
            0x28: 'f4',
            0x29: 'f5',
            0x2a: 'f6',
            0x2b: 'f7',
            0x2c: 'f8',
            0x2d: 'f9',
            0x2e: 'f10',
            0x2f: 'f11',
            0x30: 'f12',
            0x39: 'escape',
            0x3b: 'dash',
            0x3c: 'equal sign',
            0x3d: 'backspace',
            0x41: 'enter',
            0x49: 'space',
            0x4a: 'insert',
            0x4b: 'delete',
            0x4c: 'home',
            0x4d: 'end',
            0x50: 'left',
            0x51: 'right',
            0x52: 'up',
            0x53: 'down'
        },
        mamekeytype: {
            0x7: 'START1',
            0x8: 'START2',
            0x9: 'START3',
            0xa: 'START4',
            0x11: 'COIN1',
            0x12: 'COIN2',
            0x13: 'COIN3',
            0x14: 'COIN4',
            0x1e: 'SERVICE1',
            0x1f: 'SERVICE2',
            0x20: 'SERVICE3',
            0x21: 'SERVICE4',
            0x22: 'TILT1',
            0x23: 'TILT2',
            0x24: 'TILT3',
            0x25: 'TILT4',
            0x26: 'POWER_ON',
            0x27: 'POWER_OFF',
            0x28: 'SERVICE',
            0x29: 'TILT',
            0x2a: 'INTERLOCK',
            0x2b: 'MEMORY_RESET',
            0x2e: 'START',
            0x2f: 'SELECT',
            0x33: 'JOYSTICK_UP',
            0x34: 'JOYSTICK_DOWN',
            0x35: 'JOYSTICK_LEFT',
            0x36: 'JOYSTICK_RIGHT',
            0x37: 'JOYSTICKRIGHT_UP',
            0x38: 'JOYSTICKRIGHT_DOWN',
            0x39: 'JOYSTICKRIGHT_LEFT',
            0x3a: 'JOYSTICKRIGHT_RIGHT',
            0x3b: 'JOYSTICKLEFT_UP',
            0x3c: 'JOYSTICKLEFT_DOWN',
            0x3d: 'JOYSTICKLEFT_LEFT',
            0x3e: 'JOYSTICKLEFT_RIGHT',
            0x40: 'BUTTON1',
            0x41: 'BUTTON2',
            0x42: 'BUTTON3',
            0x43: 'BUTTON4',
            0x44: 'BUTTON5',
            0x45: 'BUTTON6',
            0x46: 'BUTTON7',
            0x47: 'BUTTON8',
            0x48: 'BUTTON9',
            0x49: 'BUTTON10',
            0x4a: 'BUTTON11',
            0x4b: 'BUTTON12',
            0x4c: 'BUTTON13',
            0x4d: 'BUTTON14',
            0x4e: 'BUTTON15',
            0x4f: 'BUTTON16',
            0x51: 'MAHJONG_A',
            0x52: 'MAHJONG_B',
            0x53: 'MAHJONG_C',
            0x54: 'MAHJONG_D',
            0x55: 'MAHJONG_E',
            0x56: 'MAHJONG_F',
            0x57: 'MAHJONG_G',
            0x58: 'MAHJONG_H',
            0x59: 'MAHJONG_I',
            0x5a: 'MAHJONG_J',
            0x5b: 'MAHJONG_K',
            0x5c: 'MAHJONG_L',
            0x5d: 'MAHJONG_M',
            0x5e: 'MAHJONG_N',
            0x5f: 'MAHJONG_O',
            0x60: 'MAHJONG_P',
            0x61: 'MAHJONG_Q',
            0x62: 'MAHJONG_KAN',
            0x63: 'MAHJONG_PON',
            0x64: 'MAHJONG_CHI',
            0x65: 'MAHJONG_REACH',
            0x66: 'MAHJONG_RON',
            0x67: 'MAHJONG_FLIP_FLOP',
            0x68: 'MAHJONG_BET',
            0x69: 'MAHJONG_SCORE',
            0x6a: 'MAHJONG_DOUBLE_UP',
            0x6b: 'MAHJONG_BIG',
            0x6c: 'MAHJONG_SMALL',
            0x6d: 'MAHJONG_LAST_CHANCE',
            0x70: 'HANAFUDA_A',
            0x71: 'HANAFUDA_B',
            0x72: 'HANAFUDA_C',
            0x73: 'HANAFUDA_D',
            0x74: 'HANAFUDA_E',
            0x75: 'HANAFUDA_F',
            0x76: 'HANAFUDA_G',
            0x77: 'HANAFUDA_H',
            0x78: 'HANAFUDA_YES',
            0x79: 'HANAFUDA_NO',
            0x7c: 'GAMBLE_KEYIN',
            0x7d: 'GAMBLE_KEYOUT',
            0x7e: 'GAMBLE_SERVICE',
            0x7f: 'GAMBLE_BOOK',
            0x80: 'GAMBLE_DOOR',
            0x81: 'GAMBLE_PAYOUT',
            0x82: 'GAMBLE_BET',
            0x83: 'GAMBLE_DEAL',
            0x84: 'GAMBLE_STAND',
            0x85: 'GAMBLE_TAKE',
            0x86: 'GAMBLE_D_UP',
            0x87: 'GAMBLE_HALF',
            0x88: 'GAMBLE_HIGH',
            0x89: 'GAMBLE_LOW',
            0x8a: 'POKER_HOLD1',
            0x8b: 'POKER_HOLD2',
            0x8c: 'POKER_HOLD3',
            0x8d: 'POKER_HOLD4',
            0x8e: 'POKER_HOLD5',
            0x8f: 'POKER_CANCEL',
            0x90: 'SLOT_STOP1',
            0x91: 'SLOT_STOP2',
            0x92: 'SLOT_STOP3',
            0x93: 'SLOT_STOP4',
            0x94: 'SLOT_STOP_ALL',
            0x98: 'AD_STICK_X',
            0x99: 'AD_STICK_Y',
            0x9a: 'AD_STICK_Z',
            0x9b: 'PADDLE',
            0x9c: 'PADDLE_V',
            0x9d: 'PEDAL',
            0x9e: 'PEDAL2',
            0x9f: 'PEDAL3',
            0xa0: 'LIGHTGUN_X',
            0xa1: 'LIGHTGUN_Y',
            0xa2: 'POSITIONAL',
            0xa3: 'POSITIONAL_V',
            0xa5: 'DIAL',
            0xa6: 'DIAL_V',
            0xa7: 'TRACKBALL_X',
            0xa8: 'TRACKBALL_Y',
            0xa9: 'MOUSE_X',
            0xaa: 'MOUSE_Y'
        },
        gamepad: null,
        allowCheat: !0x1,
        connection: null,
        connected: !0x1,
        playerName: '',
        players: [],
        roomMaster: null,
        coreOptionData: {},
        currentFrame: 0x0,
        wait: !0x1,
        progressHelper: {},
        loadRoomsListTimer: null,
        loadRoomsList: function () {},
        stopLoadRooms: function () {
            ejs_Controller['loadRoomsListTimer'] && clearTimeout(ejs_Controller['loadRoomsListTimer']);
        },
        openRoom: function () {},
        isPaused: null,
        setVolume: null,
        setVariable: null,
        saveState: null,
        loadState: null,
        quickSaveState: null,
        quickLoadState: null,
        getScreenData: null,
        getStateInfo: null,
        setCheat: null,
        resetCheat: null,
        getDiskNum: null,
        setDisk: null,
        ejectDisk: null,
        stateSupported: !0x1,
        saveSavFiles: null,
        contentCrc32: null,
        netPlayHost: null,
        netPlayClient: null,
        netPlayClose: null,
        netplayNewUser: null,
        netplayPushData: null,
        netPlayString: null,
        netPlayIsHost: !0x1,
        netPlayUsers: ['', ''],
        netPlayPassword: null,
        romcrc32: '',
        _netPlayConnected: !0x1,
        netPlayDialogOpened: !0x1,
        netPlayConnectChange: function () {},
        classNames: {
            'dialog-container': getClassName('dialog-container'),
            'tabs': getClassName('tabs'),
            'dialog-title': getClassName('dialog-title'),
            'dialog-content': getClassName('dialog-content'),
            'dialog-buttons': getClassName('dialog-buttons'),
            'gamepad': getClassName('gamepad'),
            'gamepad-name': getClassName('gamepad-name'),
            'gamepad-remapping-axis': getClassName('gamepad-remapping-axis'),
            'overlay': getClassName('overlay'),
            'key-setting-popup': getClassName('key-setting-popup'),
            'tabs-panel': getClassName('tabs-panel'),
            'tabs-content': getClassName('tabs-content'),
            'button-container': getClassName('button-container'),
            'set': getClassName('set'),
            'active': getClassName('active'),
            'btn-cancel': getClassName('btn-cancel'),
            'btn-create': getClassName('btn-create'),
            'btn-submit': getClassName('btn-submit'),
            'btn-join-room': getClassName('btn-join-room'),
            'btn-quit': getClassName('btn-quit'),
            'btn-create-room': getClassName('btn-create-room'),
            'netplay-player-name': getClassName('netplay-player-name'),
            'netplay-roomlist': getClassName('netplay-roomlist'),
            'netplay-room-name-input': getClassName('netplay-room-name-input'),
            'netplay-room-password-input': getClassName('netplay-room-password-input'),
            'netplay-create-room-set': getClassName('netplay-create-room-set'),
            'netplay-room': getClassName('netplay-room'),
            'modal': getClassName('modal'),
            'modal__overlay': getClassName('modal__overlay'),
            'modal__container': getClassName('modal__container'),
            'modal__header': getClassName('modal__header'),
            'modal__title': getClassName('modal__title'),
            'modal__close': getClassName('modal__close'),
            'modal__content': getClassName('modal__content'),
            'modal__btn': getClassName('modal__btn'),
            'modal__btn-primary': getClassName('modal__btn-primary'),
            'micromodal-slide': getClassName('micromodal-slide'),
            'modal__errmsg': getClassName('modal__errmsg'),
            'modal__footer': getClassName('modal__footer'),
            'cheats-add': getClassName('cheats-add'),
            'cheats-list': getClassName('cheats-list'),
            'cheat-code-input': getClassName('cheat-code-input'),
            'cheat-name-input': getClassName('cheat-name-input'),
            'ejs-switch': getClassName('ejs-switch'),
            'ejs-delete-cheat': getClassName('ejs-delete-cheat'),
            'controls-toggle': getClassName('ejs--controls-toggle')
        },
        setGamepadDialog: function () {
            /**
             * UI
             * 手柄控制器
             */
            const E = this;
            var
                classTabs = getCtrlclassName('tabs-content'),
                ElmGamepad = E['elements']['dialogs']['gamepad'],
                ElmContainer = E['elements']['container'];
            ElmGamepad.innerHTML =
                `<div class="${getCtrlclassName('dialog-container')}">
            <div class="${getCtrlclassName('dialog-title')}">
                <h4>${T.getLang('Controls Settings')}</h4>
            </div>
            <ul class="${getCtrlclassName('tabs')}" id="controls-tabs">
                <li class="tabs-title" role="presentation">
                    <a href="#" onclick="return false" role="tab" aria-controls="controls-0" aria-selected="false" id="controls-0-label">${T.getLang('Player 1')}</a>
                </li>
                <li class="tabs-title" role="presentation">
                    <a href="#" onclick="return false" role="tab" aria-controls="controls-1" aria-selected="false" id="controls-1-label">${T.getLang('Player 2')}</a>
                </li>
                <li class="tabs-title" role="presentation">
                    <a href="#" onclick="return false" role="tab" aria-controls="controls-2" aria-selected="false" id="controls-2-label">${T.getLang('Player 3')}</a>
                </li>
                <li class="tabs-title" role="presentation">
                    <a href="#" onclick="return false" role="tab" aria-controls="controls-3" aria-selected="false" id="controls-3-label">${T.getLang('Player 4')}</a>
                </li>
            </ul>
            <div class="${getCtrlclassName('dialog-content')}">
                <div class="${classTabs} controls">
                </div>
            </div>
            <div class="${getCtrlclassName('dialog-buttons')}">
                <a href="#" onclick="return false" class="${getCtrlclassName('btn-submit')}">${T.getLang('Update')}</a>
                <a href="#" onclick="return false" class="${getCtrlclassName('btn-cancel')}">${T.getLang('Cancel')}</a>
            </div>
            <div class="${getCtrlclassName('overlay')}" hidden>
                <div class="${getCtrlclassName('key-setting-popup')}">
                    <span>${T.getLang('[Select]')}</span><br />
                    <div style="color:#fff !important">${T.getLang('Press keyboard or gamepad')}</div>
                </div>
            </div>
        </div>`;
            var htmlTabsContent =
                `<div class="${getCtrlclassName('tabs-panel')}" id="controls-{index}" hidden>
    <div>
        <div style="">
            <div class="${getCtrlclassName('gamepad')}">
                ${T.getLang('Connected gamepad')}: 
                <span class="${getCtrlclassName('gamepad-name')}">${T.getLang('None detected')}</span>
            </div>
            <div class="${getCtrlclassName('gamepad-remapping-axis')}" hidden>
                <input type="checkbox" value="1" id="remapping-axis-{index}" />
                <label for="remapping-axis-{index}">${T.getLang('Remapping left axis to D-Pad')}</label>
            </div>
        </div>
        <div style="width:25%;float:left">&nbsp;</div>
        <div style="font-size:12px;width:50%;float:left">
            <div class="row">
                <div style="text-align:center;width:50%;float:left">${T.getLang('Gamepad')}</div>
                <div style="text-align:center;width:50%;float:left">${T.getLang('Keyboard')}</div>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
</div>`,
                htmlButtonContent =
                `<div class="${getCtrlclassName('button-container')}" data-id="{id}" data-index="{index}" data-label="{label}" style="margin-bottom:5px">
    <div style="width:25%;float:left;font-size:12px">
        <label>{label}:</label>
    </div>
    <div style="width:50%;float:left">
        <div>
            <div style="width:50%;float:left;padding: 0 5px;">
                <input type="text" data-id="{id}" data-value="" data-type="2" data-index="{index}" readonly="" placeholder="" disabled>
            </div>
            <div style="width:50%;float:left;padding: 0 5px;">
                <input type="text" data-id="{id}" data-value="" data-type="1" data-index="{index}" readonly="" placeholder="" disabled>
            </div>
            <div style="clear:both"></div>
        </div>
    </div>
    <div style="width:25%;float:left">
        <a class="${getCtrlclassName('set')}" href="#" onclick="return false">${T.getLang('Set')}</a>
    </div>
    <div style="clear:both"></div>
</div>`,
                gpad_btn = {
                    0x0: 'B',
                    0x1: 'Y',
                    0x2: 'SELECT',
                    0x3: 'START',
                    0x4: 'UP',
                    0x5: 'DOWN',
                    0x6: 'LEFT',
                    0x7: 'RIGHT',
                    0x8: 'A',
                    0x9: 'X',
                    0xa: 'L',
                    0xb: 'R',
                    0xc: 'L2',
                    0xd: 'R2',
                    0xe: 'L3',
                    0xf: 'R3',
                    0x13: 'L STICK UP',
                    0x12: 'L STICK DOWN',
                    0x11: 'L STICK LEFT',
                    0x10: 'L STICK RIGHT',
                    0x17: 'R STICK UP',
                    0x16: 'R STICK DOWN',
                    0x15: 'R STICK LEFT',
                    0x14: 'R STICK RIGHT'
                };
            if (ejs_loader['arcadeCores']['includes'](E['system'])) gpad_btn[0x2] = 'INSERT COIN';
            if ('nds' === E['system']) gpad_btn[0xe] = 'Microphone';
            if ('nes' === E['system']) {
                I.toArr([0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17], entry => delete gpad_btn[entry]);
            }
            if ('snes' === E['system']) {
                I.toArr([0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17], entry => delete gpad_btn[entry]);
            }
            if ('fmsx' === E['system']) {
                gpad_btn = {
                    0x0: 'Enter',
                    0x1: 'M',
                    0x2: 'F4',
                    0x3: 'F1',
                    0x4: 'Arrow Up',
                    0x5: 'Arrow Down',
                    0x6: 'Arrow Left',
                    0x7: 'Arrow Right',
                    0x8: 'Space',
                    0x9: 'N',
                    0xa: 'F2',
                    0xb: 'F3',
                    0xc: 'Graph',
                    0xd: 'Ctrl',
                    0xe: 'F5',
                    0xf: 'Escape'
                }
            }
            var buttonMaps = ejs_loader['buttonMaps'] || [];
            var buttonLists = [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x0, 0x9, 0x1, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x13, 0x12, 0x11, 0x10, 0x17, 0x16, 0x15, 0x14],
                elmSelector = str => ElmGamepad.querySelector(str),
                elmBtnSelector = (id, index, type) => elmSelector(`[data-id="${id}"][data-index="${index}"][data-type="${type}"]`),
                elmBtnSetbackgroundColor = (id, index, type, color) => elmBtnSelector(id, index, type) && (elmBtnSelector(id, index, type)['style']['backgroundColor'] = color),
                gpadSelectorAll = s => ElmGamepad['querySelectorAll'](s);
            if (I.obj(buttonMaps)) buttonMaps = I.toArr(buttonMaps).map(entry => entry[1]);
            if (I.array(buttonMaps) && buttonMaps['length'] > 0x0) {
                var ElmNodeTabs = E['SelectorAll']('#controls-tabs li');
                I.toArr(ElmNodeTabs, elm => toggleHidden(elm, !0x0));
                I.toArr(buttonMaps, (key, index) => {
                    ElmNodeTabs[index] && toggleHidden(ElmNodeTabs[index], !0x1);
                    var buttonItems = buttonMaps[index];
                    elmSelector('.' + classTabs).innerHTML += I.RegRe(htmlTabsContent, {
                        index
                    });
                    I.toArr(buttonLists, entry => {
                        if (buttonItems[entry]) {
                            elmSelector('#controls-' + index).innerHTML += I.RegRe(htmlButtonContent, {
                                index,
                                id: entry,
                                label: T.getLang(I.obj(buttonItems[entry]) ? buttonItems[entry]['text'] : buttonItems[entry])
                            });
                        }

                    })
                    I.toArr([16, 17, 18, 19, 20, 21, 22, 23], v => elmBtnSetbackgroundColor(v, index, 2, '#ccc'));
                });
            } else {
                I.toArr(4, (v, index2) => {
                    elmSelector('.' + classTabs).innerHTML += I.RegRe(htmlTabsContent, {
                        index: index2
                    });
                    I.toArr(buttonLists, entry => {
                        if (gpad_btn[entry]) {
                            elmSelector('#controls-' ['concat'](index2)).innerHTML += I.RegRe(htmlButtonContent, {
                                index: index2,
                                id: entry,
                                label: T.getLang(gpad_btn[entry])
                            });
                        }
                    })
                    I.toArr([16, 17, 18, 19, 20, 21, 22, 23], v => elmBtnSetbackgroundColor(v, index2, 2, '#ccc'));

                });
            }
            I.toArr(ejs_Controller['controllers'], entry => {
                if (entry[1]) {
                    I.toArr(entry[1], item => {
                        var elm1 = elmBtnSelector(item[0], entry[0], 1),
                            elm2 = elmBtnSelector(item[0], entry[0], 2);
                        if (!elm1 || !elm2) return !0x1;
                        var datas = item[1];
                        if (datas) {
                            if (datas['type'] && 0x1 !== parseInt(datas['type'], 0xa)) {
                                elm2['value'] = '';
                            } else if (datas['value']) {
                                elm1['value'] = ejs_Controller['keyMap'][datas['value']];
                                elm1['setAttribute']('data-value', datas['value'])
                            }
                        }
                        if (datas['value2']) {
                            var elm2value = T['Gamepad']['StandardButtons'][datas['value2']];
                            if (!elm2value) elm2value = 'button ' ['concat'](parseInt(datas['value2'], 0xa) + 0x1);
                            elm2['value'] = elm2value;
                            elm2['setAttribute']('data-value', datas['value2']);
                        }
                    });
                }

            });
            I.toArr(gpadSelectorAll('input[type=checkbox]'), elm => {
                var id = elm['getAttribute']('id')['replace']('remapping-axis-', '');
                ejs_Controller['remappingAxis'][id] ? elm['setAttribute']('checked', !0x0) : elm['removeAttribute']('checked');
                E['addEvent'](elm, 'change', event => {
                    ejs_Controller['remappingAxis'][id] = elm['checked'] ? 0x1 : 0x0;
                });
            });
            E['addEvent'](elmSelector(getCtrlclassName('btn-submit', !0)), 'click', event => {
                var elmInput = gpadSelectorAll('input[type=text]'),
                    objdata = {};
                I.toArr(elmInput, elm => {
                    var value2, datas = I.elmdata(elm),
                        index = datas.index,
                        value = elm['getAttribute']('data-value');
                    if (0x2 === parseInt(datas.type, 0xa)) {
                        value2 = value;
                    }
                    var id = datas.id;
                    objdata[index] || (objdata[index] = {});
                    objdata[index][id] || (objdata[index][id] = {});
                    value && (objdata[index][id]['value'] = value);
                    value2 && (objdata[index][id]['value2'] = value2);

                });
                ejs_data['storage']['set']({
                    'controllers': objdata
                });
                ejs_Controller['controllers'] = objdata;
                var check_data = {};
                I.toArr(gpadSelectorAll('input[type=checkbox]'), elm => {
                    check_data[elm['getAttribute']('id')['replace']('remapping-axis-', '')] = elm['checked'] ? 0x1 : 0x0;
                });
                ejs_data['storage']['set']({
                    'remappingAxis': check_data
                });
                ejs_Controller['remappingAxis'] = check_data;
                toggleHidden(ElmGamepad, !0x0);
                ElmContainer['focus']();
                event['stopPropagation']();
                return !0x1;
            });
            E['addEvent'](elmSelector(getCtrlclassName('btn-cancel', !0)), 'click', event => {
                toggleHidden(ElmGamepad, !0x0);
                ElmContainer['focus']();
                event['stopPropagation']();
                return !0x1;
            });
            I.toArr(gpadSelectorAll(getCtrlclassName('tabs', !0) + ' li'),
                elm => E['addEvent'](elm, 'mousedown', event => {

                    elmAddRemoveClass(gpadSelectorAll(getCtrlclassName('tabs', !0) + ' li'), getCtrlclassName('active'), !0x1);
                    elmAddRemoveClass(elm, getCtrlclassName('active'), !0x0);
                    I.toArr(
                        gpadSelectorAll('.' + classTabs + ' .' + getCtrlclassName('tabs-panel')),
                        etab => toggleHidden(etab, !0x0)
                    );
                    toggleHidden(
                        elmSelector(
                            '.' + classTabs + ' #' + elm['querySelector']('a')['getAttribute']('aria-controls')
                        ),
                        !0x1
                    );
                    event['stopPropagation']();
                    return !0x1;
                })
            );
            E['callEvent'](elmSelector('[aria-controls="controls-0"]')['parentNode'], 'mousedown');
            var ElmOverlay = elmSelector(getCtrlclassName('overlay', !0));
            E['addEvent'](ElmOverlay, 'mousedown', (event) => {

                toggleHidden(ElmOverlay, !0x0);
                event['stopPropagation']();
            });
            I.toArr(gpadSelectorAll(getCtrlclassName('button-container', !0)),
                elm => {

                    E['addEvent'](elm, 'mousedown',
                        event => E['callEvent'](elm['querySelector']('a' + getCtrlclassName('set', !0)), event['type'], !0x0, {}));
                }
            );
            I.toArr(gpadSelectorAll(getCtrlclassName('tabs-panel', !0) + ' a.' + getCtrlclassName('set')),
                elm => {
                    E['addEvent'](elm, 'mousedown', event => {
                        var ppelm = elm['parentNode']['parentNode'],
                            datas = I.elmdata(ppelm);
                        toggleHidden(ElmOverlay, !0x1);
                        ElmOverlay['setAttribute']('data-id', datas.id);
                        ElmOverlay['setAttribute']('data-index', datas.index);
                        var html = '[ ' + datas.label + ' ]';
                        if (ejs_Controller['gamepad']['gamepads'][datas.index] && datas.id < 0x10) {
                            html += '<br /><span style="font-size:12px">' + T.getLang('Gamepad') + ':' + ejs_Controller['gamepad']['gamepads'][datas.index]['id'] + '</span><br />' + T.getLang('Press keyboard or gamepad');
                        } else {
                            html += '<br />' + T.getLang('Press keyboard');
                        }
                        ElmOverlay['querySelector'](getCtrlclassName('key-setting-popup', !0)).innerHTML = html;
                        event['stopPropagation']();
                    });
                }
            );
        },
        setCacheDialog: function () {
            /**
             * UI
             * 缓存管理
             */
            const E = this;
            var ElmCacheContainer = E['elements']['dialogs']['cache'],
                eSelector = str => ElmCacheContainer.querySelector(str),
                elmSelector = str => eSelector(getCtrlclassName(str, !0)),
                getFShtml = str => I.toArr(DISK.getPathList(str)).map(entry => `<li data-root="${entry[0]}"><p data-root="${entry[0]}">${entry[0]}</p><p data-root="${entry[0]}">${entry[1].timestamp.toLocaleString()}</p></li>`).join("");
            ElmCacheContainer.innerHTML =
                `<div class="${getCtrlclassName('dialog-container')}">
    <div class="${getCtrlclassName('dialog-title')}">
        <h4>${T.getLang('Cache Manager')}</h4>
    </div>
    <div class="${getCtrlclassName('dialog-content')}">
    <div style="text-align:center">${T.getLang('Waiting...')}</div>
    </div>
    <div class="${getCtrlclassName('dialog-buttons')}">
        <a href="#" onclick="return false" class="${getCtrlclassName('btn-cancel')}">${T.getLang('Close')}</a>
    </div>
</div>`
            E['addEvent'](elmSelector('btn-cancel'), 'click', event => {
                toggleHidden(ElmCacheContainer, !0x0);
                E['elements']['container']['focus']();
                event['stopPropagation']();
                return !0x1;
            });
            E['addEvent'](ElmCacheContainer, 'opendialog', async () => {
                let html = `<h3>${T.getLang('Local Virtual File System')}</h3><ul class="fspath">${getFShtml(E['savefullpath'])}</ul>`;
                I.toArr(T.F.DataBase, entry => {
                    html += `<h3>${T.getLang('Database Name:')}${entry[0]}</h3><ul>`;
                    I.toArr(entry[1].objectStoreNames, table => html += `<li><h6 data-name="${entry[0]}" data-table="${table}">${T.getLang('Database Table:')}${table}</h6><ul></ul></li>`);
                    html += '</ul>';
                    elmSelector('dialog-content').innerHTML = html;
                })
            });
            Nttr(elmSelector('dialog-content')).click(async e => {
                let elm = e.target,
                    data = I.elmdata(elm);
                if (data.name && data.table) {
                    let store = T.getStore(data.table, data.name);
                    if (data.downpath) {
                        let contents = await store.data(data.downpath);
                        if (I.obj(contents)) {
                            I.toArr(contents, entry => T.down(entry[0], entry[1]));
                            T.null(contents);
                        } else {
                            T.down(T.F.getname(data.downpath), contents);
                        }
                        contents = null;
                    } else if (data.removepath) {
                        elm.parentNode.parentNode.remove();
                        await store.remove(data.removepath);
                    } else if (data.replacepath) {
                        I.toArr(data, e => elm.removeAttribute(e[0]));
                        E['callaction']('upload', async file => {
                            if (store == DISK.DB.system) {
                                let sysdata = await store.get(data.replacepath);
                                sysdata.contents = await T.unFile(file, e => elm.innerHTML = e);
                                await store.put(data.replacepath, sysdata);
                                elm.innerHTML = T.getLang('OK!');
                                T.null(sysdata);
                                sysdata = null;
                            }
                        }, null, {
                            accept: data.accept || ''
                        });
                    } else {
                        let keys = await store.keys(),
                            html = '';
                        if (!keys || !keys.length) return elm.nextElementSibling.innerHTML = `<p>${T.getLang('Empty')}</p>`;
                        I.toArr(keys, key => {
                            let other = '';
                            if (store == DISK.DB.system) {
                                other = `<button data-replacepath="${key}" data-name="${data.name}" data-table="${data.table}" data-accept=".zip,.data,.7z">${T.getLang('Replace Core')}</button>`;
                            }
                            html += `<li><p>${T.F.getname(key)}<p><button data-removepath="${key}" data-name="${data.name}" data-table="${data.table}">${T.getLang('Delete data')}</button><button data-downpath="${key}" data-name="${data.name}" data-table="${data.table}">${T.getLang('Download data')}</button>${other}</li>`
                        });
                        elm.nextElementSibling.innerHTML = html;
                    }
                } else if (data.root) {
                    let FS = DISK.FS,
                        status = FS.analyzePath(data.root),
                        mode = status.object.mode;
                    if (FS.isDir(mode)) eSelector('.fspath').innerHTML = getFShtml(data.root);
                    else if (FS.isFile(mode)) T.down(T.F.getname(data.root), FS.readFile(data.root))
                }
            });
        },
        showLoading: function (text) {

            _0x3e3214['show']('modal-6ed698f3d04061f5', {
                'closeByEsckey': !0x1
            }), this['elements']['container']['querySelector'](getCtrlclassName('modal__container', !0))['innerText'] = text || 'Loading...', toggleHidden(this['elements']['dialogs']['loading'], !0x1);
        },
        hideLoading: function () {

            _0x3e3214['close'](), toggleHidden(this['elements']['dialogs']['loading'], !0x0);
        },
        setLoadingDialog: function () {

            this['elements']['dialogs']['loading'] && (this['elements']['dialogs']['loading'].innerHTML = ('\n            <div class="')['concat'](getCtrlclassName('modal'), ' ')['concat'](getCtrlclassName('micromodal-slide'), '" id="modal-6ed698f3d04061f5" aria-hidden="true">\n                <div class="')['concat'](getCtrlclassName('modal__overlay'), '" tabindex="-1">\x0a                <div class="')['concat'](getCtrlclassName('modal__container'), '" role="dialog" aria-modal="true" aria-labelledby="modal-6ed698f3d04061f5-title">\n                Loading...\n                </div>\n                </div>\n            </div>'));
        },
        setCheatDialog: function () {
            const E = this;
            var ElmDialogsCheat = E['elements']['dialogs']['cheat'],
                elmdCheatSelector = (s, d) => (d || ElmDialogsCheat).querySelector(s),
                getdCheatElm = (s, d) => elmdCheatSelector(getCtrlclassName(s, !0), d);
            if (ElmDialogsCheat) {
                ElmDialogsCheat.innerHTML =
                    `<div class="${getCtrlclassName('dialog-container')}">
    <div class="${getCtrlclassName('dialog-title')}">
        <h4>${T.getLang('Cheats')}</h4>
    </div>
    <div class="${getCtrlclassName('dialog-content')}">
        <div class="${getCtrlclassName('cheats-list')}">
            
        </div>
    </div>
    <div class="${getCtrlclassName('dialog-buttons')}">
        <a href="#" onclick="return false" class="${getCtrlclassName('cheats-add')}">${T.getLang('Add Cheat')}</a>
        <a href="#" onclick="return false" class="${getCtrlclassName('btn-submit')}">${T.getLang('OK')}</a>
        <a href="#" onclick="return false" class="${getCtrlclassName('btn-cancel')}">${T.getLang('Close')}</a>
    </div>
</div>
<div class="${getCtrlclassName('modal')} ${getCtrlclassName('micromodal-slide')}" id="modal-85cd7a1c543a484b" aria-hidden="true">
    <div class="${getCtrlclassName('modal__overlay')}" tabindex="-1" >
    <div class="${getCtrlclassName('modal__container')}" style="width:100%" role="dialog" aria-modal="true" aria-labelledby="modal-85cd7a1c543a484b-title">
        <div class="${getCtrlclassName('modal__header')}">
        <h2 class="${getCtrlclassName('modal__title')}" id="modal-85cd7a1c543a484b-title">${T.getLang('Add Cheat Code')}</h2>
        <button class="${getCtrlclassName('modal__close')}" aria-label="Close modal" data-modal-close></button>
        </div>
        <main class="${getCtrlclassName('modal__content')}" id="modal-85cd7a1c543a484b-content">
            <div class="${getCtrlclassName('modal__errmsg')}"></div>
            <strong>${T.getLang('Code')}</strong><br />
            <textarea style="width:100%;height:80px;" class="${getCtrlclassName('cheat-code-input')}"></textarea><br />
            <strong>${T.getLang('Description')}</strong><br />
            <input type="text" class="${getCtrlclassName('cheat-name-input')}" /><br />
        </main>
        <footer class="${getCtrlclassName('modal__footer')}">
        <button class="${getCtrlclassName('modal__btn')} ${getCtrlclassName('modal__btn-primary')}">${T.getLang('Submit')}</button>
        <button class="${getCtrlclassName('modal__btn')}" data-modal-close aria-label="Close">${T.getLang('Close')}</button>
        </footer>
    </div>
    </div>
</div>`;
                var _0x2e34ca = elmdCheatSelector('#modal-85cd7a1c543a484b');
                E['addEvent'](getdCheatElm('cheats-add'), 'click', function (_0xd8641b) {

                    return _0x3e3214['show']('modal-85cd7a1c543a484b', {
                        'closeByEsckey': !0x1,
                        'closeTrigger': 'data-modal-close'
                    }), !0x1;
                });
                var _0x258e4a = getdCheatElm('cheats-list');
                E['addEvent'](getdCheatElm('modal__btn-primary', _0x2e34ca), 'click', function (_0x25dc60) {
                    var _0x5c8936 = getdCheatElm('cheat-name-input', _0x2e34ca)['value'],
                        _0x2409ad = getdCheatElm('cheat-code-input', _0x2e34ca)['value'];
                    if (_0x5c8936 && _0x2409ad) {
                        var _0x30ce63 = _0x258e4a['querySelectorAll']('input:checked');
                        getdCheatElm('cheat-name-input', _0x2e34ca)['value'] = '', getdCheatElm('cheat-code-input', _0x2e34ca)['value'] = '', _0x3e3214['close']();
                        var _0x1dbe53 = E['cheats']['length'];
                        E['cheats']['push']([_0x5c8936, _0x2409ad]), _0x258e4a.innerHTML += '<div class="' ['concat'](getCtrlclassName('ejs-switch'), '">\n                            <input type="checkbox" value="')['concat'](_0x1dbe53, '" id="ejs-cheat-switch-')['concat'](_0x1dbe53, '">\x0a                            <label for="ejs-cheat-switch-')['concat'](_0x1dbe53, '">')['concat'](_0x5c8936, '</label>\n                            <a href="#" data-idx="')['concat'](_0x1dbe53, '" onclick="return false" class="')['concat'](getCtrlclassName('ejs-delete-cheat'), '">&times;</a>\n                        </div>'), _0x30ce63['forEach'](function (_0x2ec279, _0xdd6470) {

                            _0x258e4a['querySelector']('#ejs-cheat-switch-' ['concat'](_0xdd6470))['setAttribute']('checked', 'checked');
                        });
                    }
                    return E['storageSupported'] && localStorage['setItem']('' ['concat'](E['system'], '-')['concat'](E['startName'], '-cheats'), JSON['stringify'](E['cheats'])), _0x25dc60['stopPropagation'](), !0x1;
                });
                var _0xaa6fc9 = function () {

                    if (E['storageSupported']) {
                        var _0x3a1278 = localStorage['getItem']('' ['concat'](E['system'], '-')['concat'](E['startName'], '-cheats'));
                        try {
                            _0x3a1278 = JSON['parse'](_0x3a1278);
                        } catch (_0x2cda54) {}
                        _0x3a1278 && (E['cheats'] = _0x3a1278);
                    }
                    _0x258e4a.innerHTML = '', E['cheats'] && I.array(E['cheats']) && E['cheats']['forEach'](function (_0x525fb3, _0x1d84fe) {
                        var _0x294e54 = _0x525fb3[0x0];
                        _0x525fb3[0x1], _0x258e4a.innerHTML += '<div class="' ['concat'](getCtrlclassName('ejs-switch'), '">\n                                <input type="checkbox" value="')['concat'](_0x1d84fe, '" id="ejs-cheat-switch-')['concat'](_0x1d84fe, '">\n                                <label for="ejs-cheat-switch-')['concat'](_0x1d84fe, '">')['concat'](_0x294e54, '</label>\n                                <a href="#" data-idx="')['concat'](_0x1d84fe, '" onclick="return false" class="')['concat'](getCtrlclassName('ejs-delete-cheat'), '">&times;</a>\n                            </div>');
                    });
                };
                E['addEvent'](_0x258e4a, 'click', function (_0x256be7) {

                    if (_0x256be7['target'] && _0x256be7['target']['classList']['contains'](getCtrlclassName('ejs-delete-cheat')) && _0x256be7['target']['getAttribute']('data-idx')) {
                        var _0x54f4b2 = _0x256be7['target']['getAttribute']('data-idx');
                        E['cheats']['splice'](_0x54f4b2, 0x1), E['storageSupported'] && localStorage['setItem']('' ['concat'](E['system'], '-')['concat'](E['startName'], '-cheats'), JSON['stringify'](E['cheats']));
                        var _0x42aa98 = [];
                        _0x258e4a['querySelectorAll']('input')['forEach'](function (_0x5acb1c, _0x3d9a1d) {

                            _0x42aa98[_0x3d9a1d] = !!_0x258e4a['querySelector']('#ejs-cheat-switch-' ['concat'](_0x3d9a1d, ':checked'));
                        }), _0x42aa98['splice'](_0x54f4b2, 0x1), _0xaa6fc9(), _0x42aa98['forEach'](function (_0x1ff5a2, _0x5beedb) {

                            _0x1ff5a2 && _0x258e4a['querySelector']('#ejs-cheat-switch-' ['concat'](_0x5beedb))['setAttribute']('checked', 'checked');
                        });
                    }
                    return _0x256be7['stopPropagation'](), !0x1;
                });
                E['addEvent'](E['elements']['container'], 'start-game', function (_0x286724) {
                    _0xaa6fc9();
                });
                E['addEvent'](getdCheatElm('btn-cancel'), 'click', function (_0x11623c) {

                    return toggleHidden(ElmDialogsCheat, !0x0), _0x11623c['stopPropagation'](), E['elements']['container']['focus'](), !0x1;
                });
                E['addEvent'](getdCheatElm('btn-submit'), 'click', function (_0x584c7c) {

                    return ejs_Controller['CF']('resetCheat'), _0x258e4a['querySelectorAll']('input:checked')['forEach'](function (_0x144247, _0x54b25c) {
                        var _0x4b87fb = E['cheats'][_0x144247['value']];
                        _0x4b87fb && ejs_Controller['CF']('setCheat', _0x54b25c, 0x1, _0x4b87fb[0x1]);
                    }), toggleHidden(ElmDialogsCheat, !0x0), E['elements']['container']['focus'](), !0x1;
                });
                ejs_loader['arcadeCores']['includes'](E['system']) && (ejs_Controller['allowCheat'] = !0x1), ejs_Controller['CF']('CM', 'set_cheat') || (ejs_Controller['allowCheat'] = !0x1), ejs_Controller['allowCheat'] || I.elm(E['elements']['buttons']['cheat']) && E['elements']['buttons']['cheat']['remove']();
            }
        },
        setNetplayDialog: function () {
            const E = this;
            var ElmDialogsNetplay = E['elements']['dialogs']['netplay'],
                elmDialogsNetplaySelector = s => ElmDialogsNetplay.querySelector(s);
            if (!ejs_Controller['netPlayHost'] || !ejs_data['supportNetPlay']['call'](this)) {
                if (I.elm(E['elements']['buttons']['netplay'])) {
                    E['elements']['buttons']['netplay']['remove']();
                    ejs_data['fixMenuPos']['call'](E);
                }
                return !0x1;
            }
            if (ElmDialogsNetplay) {
                ElmDialogsNetplay.innerHTML =
                    `<div class="${getCtrlclassName('dialog-container')}">
    <div class="${getCtrlclassName('dialog-title')}">
        <h4>${T.getLang('Netplay')}</h4>
    </div>
    <div class="${getCtrlclassName('dialog-content')}">
        <div class="${getCtrlclassName('netplay-roomlist')}" hidden>
            <strong>${T.getLang('Rooms')}</strong>
            <table style="width:100%" cellspacing=0>
                    <thead>
                    <tr>
                        <td>${T.getLang('Server')}</td>
                        <td>${T.getLang('Room Name')}</td>
                        <td>${T.getLang('Players')}</td>
                        <td></td>
                    </tr>
                    </thead>
                <tbody>
                        <tr>
                            <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="${getCtrlclassName('netplay-room')}" hidden>
            <strong>${T.getLang('Room Name')}</strong>
            <div data-room-password>${T.getLang('Password')}: <span></span></div>
                <table style="width:calc(100% - 20px)" cellspacing="0">
                    <thead>
                        <tr>
                            <td>${T.getLang('Player')}</td>
                            <td>${T.getLang('Name')}</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>${T.getLang('Name')} 1</td>
                            <td></td>
                        </tr>
                            <tr>
                            <td>2</td>
                            <td>${T.getLang('Name')} 2</td>
                            <td></td>
                        </tr>
                            <tr>
                            <td>3</td>
                            <td>${T.getLang('Name')} 3</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>${T.getLang('Name')} 4</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="${getCtrlclassName('dialog-buttons')}">
            <a href="#" onclick="return false" class="${getCtrlclassName('btn-quit')}">${T.getLang('Quit Room')}</a>
            <a href="#" onclick="return false" class="${getCtrlclassName('btn-create-room')}">${T.getLang('Create a Room')}</a>
            <a href="#" onclick="return false" class="${getCtrlclassName('btn-cancel')}">${T.getLang('Close')}</a>
        </div>
    </div>
    <div class="${getCtrlclassName('modal')} ${getCtrlclassName('micromodal-slide')}" id="modal-9de6c4e9ce2b9361" aria-hidden="true">
        <div class="${getCtrlclassName('modal__overlay')}" tabindex="-1">
            <div class="${getCtrlclassName('modal__container')}" role="dialog" aria-modal="true" aria-labelledby="modal-9de6c4e9ce2b9361-title">
                <div class="${getCtrlclassName('modal__header')}">
                    <h2 class="${getCtrlclassName('modal__title')}" id="modal-9de6c4e9ce2b9361-title">${T.getLang('Set Player Name')}</h2>
                </div>
                <main class="${getCtrlclassName('modal__content')}" id="modal-9de6c4e9ce2b9361-content">
                    <div class="${getCtrlclassName('modal__errmsg')}"></div>
                    <strong>${T.getLang('Player Name')}</strong><br />
                    <input type="text" maxlength="10" class="${getCtrlclassName('netplay-player-name')}" /><br />
                </main>
                <footer class="${getCtrlclassName('modal__footer')}">
                    <button class="${getCtrlclassName('modal__btn')} ${getCtrlclassName('modal__btn-primary')}">${T.getLang('Submit')}</button>
                </footer>
            </div>
        </div>
    </div>
    <div class="${getCtrlclassName('modal')} ${getCtrlclassName('micromodal-slide')}" id="modal-85cd7a1c543a484a" aria-hidden="true">
        <div class="${getCtrlclassName('modal__overlay')}" tabindex="-1">
            <div class="${getCtrlclassName('modal__container')}" role="dialog" aria-modal="true" aria-labelledby="modal-85cd7a1c543a484a-title">
                <div class="${getCtrlclassName('modal__header')}">
                    <h2 class="${getCtrlclassName('modal__title')}" id="modal-85cd7a1c543a484a-title">${T.getLang('Create a Room')}</h2>
                    <button class="${getCtrlclassName('modal__close')}" aria-label="Close modal" data-modal-close></button>
                </div>
                <main class="${getCtrlclassName('modal__content')}" id="modal-85cd7a1c543a484a-content">
                    <div class="${getCtrlclassName('modal__errmsg')}"></div>
                        <div><strong>${T.getLang('Room Name')}</strong></div>
                    <div><input type="text" maxlength="20" class="${getCtrlclassName('netplay-room-name-input')}" /></div>
                    <div><strong>${T.getLang('Server')}</strong></div>
                    <div><select data-server></select></div>
                    <div><strong>${T.getLang('Max Players')}</strong></div>
                        <div>
                            <select data-max-players>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    <div><strong>${T.getLang('Password (Optional)')}</strong></div>
                    <div><input type="text" maxlength="10" class="${getCtrlclassName('netplay-room-password-input')}" /></div>
                </main>
                <footer class="${getCtrlclassName('modal__footer')}">
                    <button class="${getCtrlclassName('modal__btn')} ${getCtrlclassName('modal__btn-primary')}">${T.getLang('Submit')}</button>
                    <button class="${getCtrlclassName('modal__btn')}" data-modal-close aria-label="Close">${T.getLang('Close')}</button>
                </footer>
            </div>
        </div>
    </div>
    <div class="${getCtrlclassName('modal')} ${getCtrlclassName('micromodal-slide')}" id="modal-5aa765d61d8327de" aria-hidden="true">
        <div class="${getCtrlclassName('modal__overlay')}" tabindex="-1" data-modal-close>
            <div class="${getCtrlclassName('modal__container')}" role="dialog" aria-modal="true" aria-labelledby="modal-5aa765d61d8327de-title">
                <div class="${getCtrlclassName('modal__header')}">
                    <h2 class="${getCtrlclassName('modal__title')}" id="modal-5aa765d61d8327de-title">${T.getLang('Password')}</h2>
                    <button class="${getCtrlclassName('modal__close')}" aria-label="Close modal" data-modal-close></button>
                </div>
                <main class="${getCtrlclassName('modal__content')}" id="modal-5aa765d61d8327de-content">
                    <div class="${getCtrlclassName('modal__errmsg')}"></div>
                    <input type="text" maxlength="10" class="${getCtrlclassName('netplay-room-password-input')}" /><br />
                </main>
                <footer class="${getCtrlclassName('modal__footer')}">
                    <button class="${getCtrlclassName('modal__btn')} ${getCtrlclassName('modal__btn-primary')}">${T.getLang('Submit')}</button>
                    <button class="${getCtrlclassName('modal__btn')}" data-modal-close aria-label="Close">${T.getLang('Close')}</button>
                </footer>
            </div>
        </div>
    </div>
    <div class="${getCtrlclassName('modal')} ${getCtrlclassName('micromodal-slide')}" id="modal-7d8fd50ed642340b" aria-hidden="true">
        <div class="${getCtrlclassName('modal__overlay')}" tabindex="-1" data-modal-close>
            <div class="${getCtrlclassName('modal__container')}" role="dialog" aria-modal="true" aria-labelledby="modal-7d8fd50ed642340b-title">
                <div class="${getCtrlclassName('modal__header')}">
                <h2 class="${getCtrlclassName('modal__title')}" id="modal-7d8fd50ed642340b-title"></h2>
                <button class="${getCtrlclassName('modal__close')}" aria-label="Close modal" data-modal-close></button>
            </div>
            <main class="${getCtrlclassName('modal__content')}" id="modal-7d8fd50ed642340b-content">
            </main>
            <footer class="${getCtrlclassName('modal__footer')}">
                <button class="${getCtrlclassName('modal__btn')} ${getCtrlclassName('modal__btn-primary')}" data-modal-close>${T.getLang('OK')}</button>
            </footer>
        </div>
    </div>
</div>`;
                var ElmWidgetsNetPlay = E['elements']['widgets']['netplay'],
                    elmWidgetsSelector = s => ElmWidgetsNetPlay.querySelector(s),
                    _0xe989f, _0x934635 = elmDialogsNetplaySelector('#modal-9de6c4e9ce2b9361'),
                    _0x4b86d1 = elmDialogsNetplaySelector('#modal-85cd7a1c543a484a'),
                    _0x26d33b = elmDialogsNetplaySelector('#modal-7d8fd50ed642340b'),
                    _0x208711 = elmDialogsNetplaySelector('#modal-5aa765d61d8327de'),
                    webSocket = null;
                if (ejs_Controller['netplayNewUser']) {
                    E['addEvent'](elmDialogsNetplaySelector(getCtrlclassName('btn-cancel', !0)), 'click', (event) => {
                        toggleHidden(ElmDialogsNetplay, !0x0);
                        ejs_Controller['netPlayDialogOpened'] = !0x1;
                        ejs_Controller['stopLoadRooms']();
                        event['stopPropagation']();
                        E['elements']['container']['focus']();
                        return !0x1;
                    });
                    var lobbyRoomHost, _0x5be3ac = function () {

                            toggleHidden(ElmWidgetsNetPlay, !0x1);
                            var _0x2a56dc = elmWidgetsSelector(getClassName('netplay-players', 1)),
                                _0x433000 = elmWidgetsSelector(getClassName('chat-toggle', 1)),
                                _0x540fcb = elmWidgetsSelector(getClassName('chat-box', 1));
                            if (!_0x2a56dc) {
                                _0x2a56dc = createElm('ul', {
                                    'class': getClassName('netplay-players')
                                }), ElmWidgetsNetPlay['appendChild'](_0x2a56dc)
                            }
                            if (!_0x433000) {
                                _0x433000 = createElm('div', {
                                    'class': getClassName('chat-toggle')
                                });

                                _0x433000.innerHTML = getSvgIcon('chat') + ` <span class="${getClassName('chat-count')}">0</span>`;
                                ElmWidgetsNetPlay['appendChild'](_0x433000);
                                E['addEvent'](_0x433000, 'click', function (event) {
                                    elmAddRemoveClass(ElmWidgetsNetPlay, getClassName('with-chat-box'));
                                    _0x433000['querySelector'](getClassName('chat-count', 1))['innerText'] = '0';
                                })

                            }
                            if (!_0x540fcb) {
                                (_0x540fcb = createElm('div', {
                                    'class': getClassName('chat-box')
                                })).innerHTML = `<div class="${getClassName('chat-messages')}">
                                <ul></ul>
                            </div>
                            <div class="${getClassName('chat-input')}">
                                <textarea maxlength="100"></textarea>
                            <button type="button">Send</button>
                            </div>`, ElmWidgetsNetPlay['appendChild'](_0x540fcb), E['addEvent'](_0x540fcb['querySelector']('textarea'), 'keydown keyup', function (_0x3f53e2) {

                                    return ('keydown' != _0x3f53e2['type'] || 0xd != _0x3f53e2['keyCode']) && ('keyup' == _0x3f53e2['type'] && 0xd == _0x3f53e2['keyCode'] ? (E['callEvent'](_0x540fcb['querySelector']('button'), 'click'), !0x1) : void _0x3f53e2['stopPropagation']());
                                }), E['addEvent'](_0x540fcb['querySelector']('button'), 'click', function (_0x68b5ad) {

                                    if (ejs_Controller['connected']) {
                                        var _0x3d607e = _0x540fcb['querySelector']('textarea')['value']['trim']();
                                        if (_0x540fcb['querySelector']('textarea')['value'] = '', _0x3d607e) {
                                            var _0x3fbb2b = _0x540fcb['querySelector']('.' ['concat'](getClassName('chat-messages'), ' ul')),
                                                _0x1c60d6 = createElm('li', {});
                                            _0x1c60d6.innerHTML = '<strong>' ['concat'](ejs_Controller['playerName'], '</strong> (You) : ')['concat'](_0x3d607e), _0x3fbb2b['appendChild'](_0x1c60d6);
                                            var _0x37ce0d = _0x3fbb2b['querySelectorAll']('li');
                                            _0x37ce0d['length'] > 0x32 && _0x3fbb2b['removeChild'](_0x37ce0d[0x0]), _0x37ce0d = null, ejs_Controller['connection'] ? ejs_Controller['connection']['send'](JSON['stringify']({
                                                'type': 'chat',
                                                'content': _0x3d607e['substring'](0x0, 0x64)
                                            })) : webSocket['send'](JSON['stringify']({
                                                'type': 'chat',
                                                'content': _0x3d607e['substring'](0x0, 0x64),
                                                'from': ejs_Controller['playerName']
                                            })), _0x540fcb['querySelector'](getClassName('chat-messages', 1))['scroll'](0x0, _0x3fbb2b['clientHeight']), _0x540fcb['querySelector']('textarea')['focus']();
                                        }
                                    }
                                    _0x68b5ad['stopPropagation']();
                                })
                            }
                            var _0x5129fc = '';
                            if (ejs_Controller['connection']) ejs_Controller['players']['forEach'](function (_0x5b6e0a, _0x4721ab) {
                                var _0x2b0624 = null;
                                if (_0x5b6e0a) {
                                    ejs_Controller['connection']['peers'][_0x5b6e0a] ? _0x2b0624 = ejs_Controller['connection']['peers'][_0x5b6e0a]['extra'] : ejs_Controller['connection']['userid'] === _0x5b6e0a && (_0x2b0624 = ejs_Controller['connection']['extra']);
                                    var _0x3fa850 = _0x2b0624['country'] ? ('<i class="ejs-flag ejs-flag-')['concat'](_0x2b0624['country']['toLocaleLowerCase'](), '"></i>') : ' ';
                                    _0x5129fc += '<li>' ['concat'](_0x4721ab + 0x1, '. ')['concat'](_0x2b0624['name'], ' ')['concat'](_0x3fa850, '</li>');
                                } else _0x5129fc += '<li>' ['concat'](_0x4721ab + 0x1, '. </li>');
                            }), _0x5129fc += '', _0x2a56dc.innerHTML = _0x5129fc;
                            else {
                                var _0x34e942 = elmDialogsNetplaySelector(getCtrlclassName('netplay-room', !0))['querySelector']('tbody');
                                _0x34e942.innerHTML = '', ejs_Controller['netPlayUsers']['forEach'](function (_0x1f55c9, _0x5537a0) {

                                    if (_0x1f55c9) {
                                        var _0x3e85d1 = document['createElement']('tr');
                                        _0x3e85d1.innerHTML = '<td>' ['concat'](_0x5537a0 + 0x1, '</td><td>')['concat'](_0x1f55c9, '</td><td></td>'), _0x34e942['appendChild'](_0x3e85d1);
                                    }
                                }), _0x5129fc = '<ul>', ejs_Controller['netPlayUsers']['forEach'](function (_0x3de1e3, _0x3d46df) {

                                    _0x5129fc += '<li>' ['concat'](_0x3d46df + 0x1, '. ')['concat'](_0x3de1e3, '</li>');
                                }), _0x5129fc += '</ul>', _0x2a56dc.innerHTML = _0x5129fc;
                            }
                        },
                        HostLobby = 'https://lobby.emulatorjs.com',
                        _0x2941ff = function (_0x44747a) {
                            var _0x212615, _0x4d2901, _0x1a7c3c = _0x44747a['data'];
                            if (I.buf(_0x1a7c3c)) {
                                _0x212615 = regeneratorRuntime['mark'](function _0x279571() {
                                    var _0x38a304, _0x3a1fff, _0x5c94ee;
                                    return regeneratorRuntime['wrap'](function (_0x33d349) {

                                        for (;;) switch (_0x33d349['prev'] = _0x33d349['next']) {
                                            case 0x0:
                                                return _0x33d349['next'] = 0x2, _0x1a7c3c['arrayBuffer']();
                                            case 0x2:
                                                _0x38a304 = _0x33d349['sent'], _0x3a1fff = new Uint8Array(_0x38a304), _0x5c94ee = ejs_loader['Module']['_malloc'](_0x3a1fff['length'] * _0x3a1fff['BYTES_PER_ELEMENT']), ejs_loader['Module']['HEAPU8']['set'](_0x3a1fff, _0x5c94ee), ejs_loader['Module']['ccall']('netplay_push_data', 'number', ['number', 'number'], [_0x5c94ee, _0x3a1fff['byteLength']]), ejs_loader['Module']['_free'](_0x5c94ee);
                                            case 0x8:
                                            case 'end':
                                                return _0x33d349['stop']();
                                        }
                                    }, _0x279571);
                                });
                                _0x4d2901 = function () {
                                    var _0xcb5850 = this,
                                        _0xc236eb = arguments;
                                    return new Promise(function (_0x4ffe3f, _0x4f1940) {
                                        var _0x4c9801 = _0x212615['apply'](_0xcb5850, _0xc236eb);

                                        function _0x4214e6(_0xdb41bf) {
                                            _0x33f24c(_0x4c9801, _0x4ffe3f, _0x4f1940, _0x4214e6, _0x2ea043, 'next', _0xdb41bf);
                                        }

                                        function _0x2ea043(_0xba70af) {

                                            _0x33f24c(_0x4c9801, _0x4ffe3f, _0x4f1940, _0x4214e6, _0x2ea043, 'throw', _0xba70af);
                                        }
                                        _0x4214e6(void 0x0);
                                    });
                                };
                                _0x4d2901();
                            } else {
                                if ('string' == typeof _0x1a7c3c) {
                                    var _0x155582 = null;
                                    try {
                                        _0x155582 = JSON['parse'](_0x1a7c3c);
                                    } catch (_0x118ef3) {}
                                    if (_0x155582) {
                                        if ('chat' == _0x155582['type']) {
                                            var _0xa29475 = _0x155582['from'],
                                                _0x518fc5 = _0x155582['content'];
                                            if (_0x518fc5) {
                                                var _0x77b32e = elmWidgetsSelector('.' ['concat'](getClassName('chat-messages'), ' ul')),
                                                    _0xe19a73 = createElm('li', {});
                                                _0xe19a73.innerHTML = '<strong>' ['concat'](_0xa29475, '</strong> : ')['concat'](_0x518fc5), _0x77b32e['appendChild'](_0xe19a73);
                                                var _0x508553 = _0x77b32e['querySelectorAll']('li');
                                                if (_0x508553['length'] > 0x32 && _0x77b32e['removeChild'](_0x508553[0x0]), _0x508553 = null, elmWidgetsSelector(getClassName('chat-messages', 1))['scroll'](0x0, _0x77b32e['clientHeight']), !ElmWidgetsNetPlay['classList']['contains'](getClassName('with-chat-box'))) {
                                                    var _0x10ddce = elmWidgetsSelector(getClassName('chat-count', 1))['innerText'];
                                                    _0x10ddce = parseInt(_0x10ddce), _0x10ddce++, elmWidgetsSelector(getClassName('chat-count', 1))['innerText'] = _0x10ddce;
                                                }
                                            }
                                        }
                                    } else 'n:' == _0x1a7c3c['substring'](0x0, 0x2) && (ejs_Controller['netplayNewUser'](), ejs_Controller['netPlayUsers'][0x1] = decodeURIComponent(_0x1a7c3c['substring'](0x2)), _0x5be3ac(), _0x88c152['show'](E['elements']['container'], decodeURIComponent(_0x1a7c3c['substring'](0x2)) + ' joined')), 'q:' == _0x1a7c3c['substring'](0x0, 0x2) && (ejs_Controller['netPlayIsHost'] ? (ejs_Controller['netPlayClose'](), ejs_Controller['netPlayHost'](), ejs_Controller['netPlayUsers'][0x1] = '', _0x5be3ac(), _0x88c152['show'](E['elements']['container'], decodeURIComponent(_0x1a7c3c['substring'](0x2)) + ' quited')) : webSocket['close']());
                                }
                            }
                        },
                        _0x2fb1d8 = function () {

                            ejs_Controller['hideLoading']['call'](E);
                            ejs_Controller['connected'] = !0x0;
                            ['n64', 'mupen64plus', 'mupen64plus2', 'mupen64plus-nx']['includes'](E['system']) || ejs_loader['Module']['_fast_forward_2'];
                            toggleHidden(E['elements']['buttons']['loadState'], !0x0);
                            toggleHidden(E['elements']['buttons']['saveState'], !0x0);
                            ejs_Controller['CF']('resetCheat');
                            toggleHidden(E['elements']['buttons']['cheat'], !0x0);
                            toggleHidden(ejs_data['contextMenu']['querySelectorAll']('ul li')['item'](0x1), !0x0);
                            toggleHidden(ejs_data['contextMenu']['querySelectorAll']('ul li')['item'](0x2), !0x0);
                            Array['from'](E['elements']['buttons']['play'])['forEach'](function (_0x39b266) {
                                toggleHidden(_0x39b266, !0x0);
                            });
                            var _0x2dcea6 = elmDialogsNetplaySelector(getCtrlclassName('netplay-room', !0)),
                                _0x4926a6 = _0x2dcea6['querySelector']('[data-room-password]');
                            null === ejs_Controller['netPlayPassword'] ? toggleHidden(_0x4926a6, !0x0) : (toggleHidden(_0x4926a6, !0x1), _0x4926a6['querySelector']('span')['innerText'] = ejs_Controller['netPlayPassword']), _0x2dcea6['querySelector']('strong')['innerText'] = ejs_Controller['netPlayRoomname'], _0x5be3ac(), ejs_data['updateCoreOptionMenuItems']['call'](E);
                        },
                        _0x112810 = function () {

                            ejs_Controller['connected'] = !0x1;
                            ['n64', 'mupen64plus', 'mupen64plus2', 'mupen64plus-nx']['includes'](E['system']) || ejs_loader['Module']['_fast_forward_2'];
                            ejs_Controller['netPlayUsers'] = ['', ''];
                            ejs_Controller['netPlayClose']();
                            ejs_Controller['netPlayIsHost'] = !0x1;
                            !0x1;
                            ejs_Controller['hideLoading']['call'](E);
                            toggleHidden(E['elements']['buttons']['restart'], !0x1);
                            toggleHidden(E['elements']['buttons']['loadState'], !0x1);
                            toggleHidden(E['elements']['buttons']['saveState'], !0x1);
                            ejs_Controller['allowCheat'] && toggleHidden(E['elements']['buttons']['cheat'], !0x1);
                            toggleHidden(ejs_data['contextMenu']['querySelectorAll']('ul li')['item'](0x1), !0x1);
                            toggleHidden(ejs_data['contextMenu']['querySelectorAll']('ul li')['item'](0x2), !0x1);
                            Array['from'](E['elements']['buttons']['play'])['forEach'](function (_0x2da7fd) {
                                toggleHidden(_0x2da7fd, !0x1);
                            }), ejs_data['updateCoreOptionMenuItems']['call'](E);
                            var _0x42decd = elmWidgetsSelector('.' ['concat'](getClassName('chat-messages'), ' ul'));
                            _0x42decd && (_0x42decd.innerHTML = '');
                            var _0x5630b5 = elmWidgetsSelector(getClassName('netplay-players', 1));
                            _0x5630b5 && (_0x5630b5.innerHTML = ''), toggleHidden(ElmWidgetsNetPlay, !0x0);
                        },
                        _0x18d09e = function (_0x5f2c65, _0x39913f, _0x4c414d) {

                            ejs_Controller['showLoading']['call'](E);
                            T.ajax({
                                url: HostLobby + '/join',
                                post: {
                                    'id': _0x39913f,
                                    'password': _0x4c414d,
                                    'nickname': ejs_Controller['playerName']
                                },
                                type: 'json',
                                headers: E['ajaxHeaders'],
                                success(result, headers) {

                                    if (result) {
                                        if (!result['room_id']) throw result['error'];
                                        var nickname = result['nicknames'];
                                        nickname[0x1] && (ejs_Controller['playerName'] = nickname[0x1]);
                                        _0x208711['classList']['remove'](getClassName('is-open'));
                                        lobbyRoomHost = ejs_loader['servers'][_0x5f2c65]['url'];
                                        webSocket = new WebSocket(lobbyRoomHost + 'room/' + result['room_id']);
                                        T.on(webSocket, 'open', (event) => {

                                            ejs_Controller['hideLoading']['call'](E);
                                            webSocket['send']('n:' ['concat'](encodeURIComponent(ejs_Controller['playerName'])));
                                            E['playing'] || Array['from'](E['elements']['buttons']['play'])['forEach'](function (_0x5f4fd6) {

                                                E['callEvent'](_0x5f4fd6, 'click');
                                            });
                                            ejs_Controller['netPlayClient']();
                                            ejs_Controller['stopLoadRooms']();
                                            ejs_Controller['openRoom'](E);
                                            _0x2fb1d8();
                                        });
                                        T.on(webSocket, 'close', (event) => {

                                            ejs_Controller['hideLoading']['call'](E), ejs_Controller['loadRoomsList'](), _0x112810(), 0x3ed != event['code'] && (_0x26d33b['querySelector']('#modal-7d8fd50ed642340b-content').innerHTML = 'Error', _0x3e3214['show']('modal-7d8fd50ed642340b', {
                                                'closeTrigger': 'data-modal-close'
                                            }));

                                        });
                                        T.on(webSocket, 'message', (event) => {
                                            _0x2941ff(event);
                                        });
                                        T.on(webSocket, 'error', event => console.log(event));

                                        ejs_Controller['netPlayUsers'][0x0] = nickname[0x0];
                                        ejs_Controller['netPlayUsers'][0x1] = nickname[0x1];
                                        ejs_Controller['netPlayRoomname'] = result['room_name'];
                                        ejs_Controller['netPlayPassword'] = _0x4c414d;
                                        _0x5be3ac();
                                    }

                                },
                                error(error) {

                                    ejs_Controller['hideLoading']['call'](E);
                                    _0x26d33b['querySelector']('#modal-7d8fd50ed642340b-content').innerHTML = 'Error: ' + ('string' == typeof error ? error : '');
                                    _0x3e3214['show']('modal-7d8fd50ed642340b', {
                                        'closeTrigger': 'data-modal-close'
                                    });

                                }
                            });
                        },
                        _0x22cdbf = function (_0x4f6c57) {
                            var _0x32c3eb = _0x4f6c57['target']['getAttribute']('data-id'),
                                _0x101bb4 = _0x4f6c57['target']['getAttribute']('data-server');
                            'Y' === _0x4f6c57['target']['getAttribute']('data-password') ? (_0x3e3214['show']('modal-5aa765d61d8327de', {
                                'closeTrigger': 'data-modal-close'
                            }), _0x208711['setAttribute']('data-id', _0x32c3eb), _0x208711['setAttribute']('data-server', _0x101bb4)) : (ejs_Controller['showLoading']['call'](E), _0x18d09e(_0x101bb4, _0x32c3eb, ''));
                            _0x4f6c57['stopPropagation']();
                            return !0x1;
                        };
                    ejs_Controller['loadRoomsList'] = function () {

                        toggleHidden(elmDialogsNetplaySelector(getCtrlclassName('netplay-roomlist', !0)), !0x1), toggleHidden(elmDialogsNetplaySelector(getCtrlclassName('netplay-room', !0)), !0x0), toggleHidden(elmDialogsNetplaySelector(getCtrlclassName('btn-create-room', !0)), !0x1), toggleHidden(elmDialogsNetplaySelector(getCtrlclassName('btn-quit', !0)), !0x0);
                        var _0x55392d = elmDialogsNetplaySelector(getCtrlclassName('netplay-roomlist', !0))['querySelector']('tbody');
                        ejs_Controller['netPlayString'] = encodeURIComponent(JSON['stringify']({
                            'system': E['system'],
                            'crc32': ejs_Controller['romcrc32'],
                            'romname': E['startName']
                        }));
                        var _0x28f76a = HostLobby + '/list?q=' + ejs_Controller['netPlayString'];
                        T.ajax({
                            url: _0x28f76a,
                            type: 'json',
                            headers: {
                                'content-type': E['ajaxHeaders']['content-type']
                            },
                            success(result) {
                                if (result) {
                                    var _0x873577 = [],
                                        _0x46e0f1 = [];
                                    _0x55392d['querySelectorAll']('tr')['forEach'](function (_0x208d6d) {

                                        _0x46e0f1['push'](_0x208d6d['getAttribute']('id'));
                                    }), result['forEach'](function (_0x429b30) {
                                        var _0x3bb0e9 = _0x429b30['id'];
                                        if (_0x873577['push'](_0x3bb0e9), _0x46e0f1['includes'](_0x3bb0e9)) {
                                            var _0x3576af = _0x55392d['querySelector']('tr[id="' ['concat'](_0x3bb0e9, '"]'));
                                            _0x55392d['removeChild'](_0x3576af);
                                        }
                                        var _0x2265a8 = document['createElement']('tr');
                                        _0x2265a8['setAttribute']('id', _0x3bb0e9);
                                        var _0x4a53f3 = _0x429b30['password'] ? getSvgIcon('lock') : '',
                                            _0x187674 = _0x429b30['password'] ? 'Y' : 'N',
                                            _0x3b7651 = _0x429b30['players'] < 0x2 ? '<span data-id="' ['concat'](_0x3bb0e9, '" data-server="')['concat'](_0x429b30['server'], '" data-password="')['concat'](_0x187674, '" class="')['concat'](getCtrlclassName('btn-join-room'), '">Join</span>') : '',
                                            _0x588cef = _0x429b30['country'] ? '[' ['concat'](_0x429b30['country'], '] ') : '',
                                            _0x6358e6 = _0x429b30['server'] ? _0x429b30['server'] : '';
                                        if (_0x6358e6 && ejs_loader['servers'][_0x6358e6]) {
                                            var _0x3c14fb = ejs_loader['servers'][_0x6358e6]['name'];
                                            _0x2265a8.innerHTML = '<td>' ['concat'](_0x3c14fb, '</td><td>')['concat'](_0x588cef)['concat'](_0x4a53f3)['concat'](_0x429b30['name'], '</td><td>')['concat'](_0x429b30['players'], '/2</td><td>')['concat'](_0x3b7651, '</td>');
                                            E['addEvent'](_0x2265a8['querySelector'](getCtrlclassName('btn-join-room', !0)), 'click', _0x22cdbf), _0x55392d['appendChild'](_0x2265a8);
                                        }
                                    }), _0x55392d['querySelectorAll']('tr')['forEach'](function (_0x326d67) {

                                        _0x873577['includes'](_0x326d67['id']) || _0x55392d['removeChild'](_0x326d67);
                                    });
                                }
                                ejs_Controller['loadRoomsListTimer'] = setTimeout(ejs_Controller['loadRoomsList'], 0x7d0);

                            },
                            error(e) {
                                console['log']('Network Error', e), ejs_Controller['loadRoomsListTimer'] = setTimeout(ejs_Controller['loadRoomsList'], 0x7d0);

                            }
                        });
                    };
                    ejs_Controller['openRoom'] = function (_0x5a26d8) {

                        ejs_Controller['stopLoadRooms'](), toggleHidden(_0x5a26d8['elements']['dialogs']['netplay']['querySelector'](getCtrlclassName('netplay-roomlist', !0)), !0x0), toggleHidden(_0x5a26d8['elements']['dialogs']['netplay']['querySelector'](getCtrlclassName('netplay-room', !0)), !0x1), toggleHidden(_0x5a26d8['elements']['dialogs']['netplay']['querySelector'](getCtrlclassName('btn-create-room', !0)), !0x0), toggleHidden(_0x5a26d8['elements']['dialogs']['netplay']['querySelector'](getCtrlclassName('btn-quit', !0)), !0x1), ejs_Controller['CF']('resetCheat'), toggleHidden(_0x5a26d8['elements']['buttons']['cheat'], !0x0);
                        var _0x29aa55 = _0x5a26d8['elements']['dialogs']['netplay']['querySelector'](getCtrlclassName('netplay-room', !0)),
                            _0x34fdf5 = _0x29aa55['querySelector']('[data-room-password]');
                        null === ejs_Controller['netPlayPassword'] ? toggleHidden(_0x34fdf5, !0x0) : (toggleHidden(_0x34fdf5, !0x1), _0x34fdf5['querySelector']('span')['innerText'] = ejs_Controller['netPlayPassword']);
                        var _0x4ba447 = _0x29aa55['querySelector']('tbody');
                        _0x4ba447.innerHTML = '', _0x29aa55['querySelector']('strong')['innerText'] = ejs_Controller['netPlayRoomname'], ejs_Controller['netPlayUsers']['forEach'](function (_0x27184c, _0x315279) {
                            var _0x250531 = document['createElement']('tr');
                            _0x250531.innerHTML = '<td>' ['concat'](_0x315279 + 0x1, '</td><td>')['concat'](_0x27184c, '</td><td></td>'), _0x4ba447['appendChild'](_0x250531);
                        });
                    };
                    E['addEvent'](_0x208711['querySelector'](getCtrlclassName('modal__btn-primary', !0)), 'click', function (_0x2dce50) {
                        var _0x38f079 = _0x208711['querySelector'](getCtrlclassName('netplay-room-password-input', !0))['value'];
                        ejs_Controller['showLoading']['call'](E);
                        var _0x58034f = _0x208711['getAttribute']('data-id'),
                            _0x1699b0 = _0x208711['getAttribute']('data-server');
                        _0x18d09e(_0x1699b0, _0x58034f, _0x38f079), _0x2dce50['stopPropagation']();
                    });
                    E['addEvent'](_0x934635['querySelector'](getCtrlclassName('modal__btn-primary', !0)), 'click', function (_0x2980e1) {
                        var _0x885491 = _0x934635['querySelector'](getCtrlclassName('netplay-player-name', !0))['value'];
                        _0x885491 = _0x885491['replace'](/<|>/g, ''), _0x934635['querySelector'](getCtrlclassName('modal__errmsg', !0)).innerHTML = '', _0x885491['trim']() && (ejs_Controller['playerName'] = _0x885491['trim'](), _0x3e3214['close']()), _0x2980e1['stopPropagation']();
                    });
                    E['addEvent'](_0x4b86d1['querySelector'](getCtrlclassName('modal__btn-primary', !0)), 'click', function (event) {
                        var _0x5aa2c3 = _0x4b86d1['querySelector'](getCtrlclassName('netplay-room-name-input', !0))['value'];
                        _0x5aa2c3 = _0x5aa2c3['replace'](/<|>/g, '');
                        var _0x48ed40 = _0x4b86d1['querySelector']('select[data-server] option:checked')['value'];
                        lobbyRoomHost = ejs_loader['servers'][_0x48ed40]['url'];
                        var _0x38790f = _0x4b86d1['querySelector']('select[data-max-players] option:checked')['value'];
                        _0x38790f < 0x2 && (_0x38790f = 0x2), _0x38790f > 0x4 && (_0x38790f = 0x4), _0x38790f = 0x2;
                        for (var _0x79b04a = 0x0; _0x79b04a < _0x38790f; _0x79b04a++) ejs_Controller['players'][_0x79b04a] = null;
                        var _0x2366c0 = _0x4b86d1['querySelector'](getCtrlclassName('netplay-room-password-input', !0))['value'];


                        _0x4b86d1['querySelector'](getCtrlclassName('modal__errmsg', !0)).innerHTML = '';
                        if (_0x5aa2c3['trim']()) {
                            ejs_Controller['showLoading']['call'](E);
                            T.ajax({
                                url: HostLobby + '/add',
                                json: {
                                    'room_name': _0x5aa2c3,
                                    'room_password': _0x2366c0,
                                    'server': _0x48ed40,
                                    'room_key': encodeURIComponent(JSON['stringify']({
                                        'system': E['system'],
                                        'crc32': ejs_Controller['romcrc32'],
                                        'romname': E['startName'],
                                        'url': E['config']['url']
                                    }))
                                },
                                type: 'json',
                                headers: E['ajaxHeaders'],
                                success(result, headers) {
                                    ejs_Controller['stopLoadRooms']();
                                    _0xe989f['closeModal']();
                                    if (!result['room_id']) throw 'error';
                                    ejs_Controller['netPlayPassword'] = _0x2366c0, ejs_Controller['netPlayRoomname'] = _0x5aa2c3, (webSocket = new WebSocket(lobbyRoomHost + 'room/' + result['room_id']))['onopen'] = function (_0x1ddcd0) {

                                        ejs_Controller['hideLoading']['call'](E);
                                        webSocket['send']('core_name=' ['concat'](E['system'], '&game_crc=')['concat'](ejs_Controller['romcrc32'], '&nick=')['concat'](encodeURIComponent(ejs_Controller['playerName']))), E['playing'] || Array['from'](E['elements']['buttons']['play'])['forEach'](function (_0x4e31d1) {

                                            E['callEvent'](_0x4e31d1, 'click');
                                        }), ejs_Controller['netPlayIsHost'] = !0x0, ejs_Controller['netPlayHost'](), _0xe989f['closeModal'](), ejs_Controller['stopLoadRooms'](), ejs_Controller['openRoom'](E), ejs_Controller['netPlayUsers'][0x0] = ejs_Controller['playerName'], _0x2fb1d8();
                                    }, webSocket['onclose'] = function (_0x41a801) {

                                        ejs_Controller['hideLoading']['call'](E), ejs_Controller['loadRoomsList'](), _0x112810(), 0x3ed != _0x41a801['code'] && (_0x26d33b['querySelector']('#modal-7d8fd50ed642340b-content').innerHTML = 'Error', _0x3e3214['show']('modal-7d8fd50ed642340b', {
                                            'closeTrigger': 'data-modal-close'
                                        }));
                                    }, webSocket['onmessage'] = function (result) {
                                        _0x2941ff(_0x57761b);
                                    }, webSocket['onerror'] = function (result) {};

                                },
                                error(_0x537b27) {

                                    ejs_Controller['loadRoomsList'](), ejs_Controller['hideLoading']['call'](E), _0x26d33b['querySelector']('#modal-7d8fd50ed642340b-content').innerHTML = 'Error', _0x3e3214['show']('modal-7d8fd50ed642340b', {
                                        'closeTrigger': 'data-modal-close'
                                    });
                                }
                            });
                        } else {
                            _0xe989f['closeModal']();
                        }
                        event['stopPropagation']();
                    });
                    E['addEvent'](elmDialogsNetplaySelector(getCtrlclassName('btn-create-room', !0)), 'click', function (_0x46e59d) {

                        _0xe989f = _0x3e3214['show']('modal-85cd7a1c543a484a', {
                            'closeTrigger': 'data-modal-close',
                            'closeByEsckey': !0x1,
                            'onClose': function () {

                                E['elements']['container']['focus']();
                            }
                        }), _0x4b86d1['querySelector']('select[data-max-players]')['setAttribute']('disabled', 'disabled');
                        var _0x12d285 = _0x4b86d1['querySelector']('select[data-server]');
                        if (_0x12d285.innerHTML = '', Object['keys'](ejs_loader['servers'])['forEach'](function (_0x126b68) {
                                var _0x8828b2 = document['createElement']('option');
                                _0x8828b2['text'] = ejs_loader['servers'][_0x126b68]['name'], _0x8828b2['value'] = _0x126b68, _0x12d285['appendChild'](_0x8828b2);
                            }), I.obj(ejs_loader['servers'])) try {
                            var _0x2b11b9 = null;
                            Object['keys'](ejs_loader['servers'])['forEach'](function (_0x110ea2, _0x540c58) {
                                var _0x27b963 = ejs_loader['servers'][_0x110ea2]['url']['replace']('wss://', 'https://');
                                fetch(_0x27b963)['then'](function (_0x1358de) {
                                    var _0x3d2163, _0x285375 = new Date()['valueOf']();
                                    fetch(_0x27b963)['then'](function (_0xbf72a8) {

                                        _0x3d2163 = new Date()['valueOf']() - _0x285375, ejs_loader['servers'][_0x110ea2]['latency'] = _0x3d2163;
                                        var _0x587cf3 = _0x12d285['querySelector']('option[value=' + _0x110ea2 + ']');
                                        _0x587cf3['text'] = ejs_loader['servers'][_0x110ea2]['name'] + ' (' + _0x3d2163 + 'ms)', (!_0x2b11b9 || _0x2b11b9 > _0x3d2163) && (_0x2b11b9 = _0x3d2163, _0x587cf3['setAttribute']('selected', !0x0));
                                    })['catch'](function (_0x55e7e5) {});
                                })['catch'](function (_0x21cbd8) {});
                            });
                        } catch (_0x239f8b) {}
                        return _0x46e59d['stopPropagation'](), !0x1;
                    });
                    E['addEvent'](elmDialogsNetplaySelector(getCtrlclassName('btn-quit', !0)), 'click', function (_0xcbfb0c) {

                        return webSocket['close'](), ejs_Controller['stopLoadRooms'](), ejs_Controller['loadRoomsList'](), ejs_Controller['netPlayClose'](), _0xcbfb0c['stopPropagation'](), !0x1;
                    });
                    addEvent(window, 'message', function (_0xb9873d) {

                        return _0xb9873d['source'] == window && (I.obj(_0xb9873d['data']) && ('netplay' == _0xb9873d['data']['type'] && _0xb9873d['data']['data'] instanceof Uint8Array && (_0xb9873d['data']['data'][0x3], webSocket['send'](_0xb9873d['data']['data'])), void('netplay-close' == _0xb9873d['data']['type'] && (webSocket['close'](), ejs_Controller['netPlayDialogOpened'] && (ejs_Controller['stopLoadRooms'](), ejs_Controller['loadRoomsList']()), ejs_Controller['netPlayClose'](), _0x112810()))));
                    });
                }
            }
        },
        setDiskContainer: function () {
            var E = this;
            if (!0x1 === ejs_loader['diskControl']) return E['elements']['container']['querySelector'](getClassName('ejs__disk', 1))['remove'](), !0x1;
            if (ejs_Controller['getDiskNum'] && ejs_Controller['getDiskNum']() > 0x1) {
                for (var _0x162ee6, _0x2d4c03 = ejs_Controller['getDiskNum'](), _0x4b6173 = E['elements']['container']['querySelector']('.' ['concat'](getClassName('ejs__disk__container'), ' > div')), _0x20eb86 = function (_0x483aa9) {

                        (_0x162ee6 = createElm('div', {
                            'class': getClassName('ejs__disk__index')
                        })).innerHTML = 'Disk ' ['concat'](_0x483aa9), E['addEvent'](_0x162ee6, 'click touchstart', function (_0x5310a2) {

                            ejs_Controller['ejectDisk'] && ejs_Controller['ejectDisk'](), ejs_Controller['setDisk'](_0x483aa9 - 0x1), ejs_Controller['ejectDisk'] && setTimeout(function () {

                                ejs_Controller['ejectDisk']();
                            }, 0x12c), 'psx' == E['system'] || 'psx-legacy' == E['system'] ? (E['elements']['buttons']['disk']['querySelector']('span').innerHTML = 'Current Disc: ' + _0x483aa9, _0x88c152['show'](E['elements']['container'], 'Change Disc: ' + _0x483aa9)) : (E['elements']['buttons']['disk']['querySelector']('span').innerHTML = 'Current Disk: ' + _0x483aa9, _0x88c152['show'](E['elements']['container'], 'Change Disk: ' + _0x483aa9)), toggleHidden(E['elements']['container']['querySelector'](getClassName('ejs__disk__container', 1)), !0x0);
                            var _0x18598e = getClassName('ejs__tooltip--visible'),
                                _0x1200ed = E['elements']['buttons']['disk']['querySelector'](getClassName('ejs__tooltip', 1));
                            elmAddRemoveClass(_0x1200ed, _0x18598e, !0x0), setTimeout(function () {
                                elmAddRemoveClass(_0x1200ed, _0x18598e, !0x1);
                            }, 0x1388);
                        }), _0x4b6173['appendChild'](_0x162ee6);
                    }, _0x464a6e = _0x2d4c03; _0x464a6e >= 0x1; _0x464a6e--) _0x20eb86(_0x464a6e);
                E['elements']['buttons']['disk']['querySelector']('span').innerHTML = 'Current Disk: 1', E['addEvent'](E['elements']['buttons']['disk'], 'click', function (_0x194d3d) {

                    toggleHidden(E['elements']['container']['querySelector'](getClassName('ejs__disk__container', 1)));
                });
            } else E['elements']['container']['querySelector'](getClassName('ejs__disk', 1))['remove']();
        },
        initKeyboard: function () {
            var _0x598c89 = this,
                _0xdeb06e = this,
                _0x4d3cd9 = this['elements']['dialogs']['gamepad']['querySelector'](getCtrlclassName('overlay', !0)),
                _0x20d62d = function (_0xcb580) {

                    if (_0xdeb06e['focused']) {
                        var _0x268d19 = !_0x598c89['elements']['dialogs']['gamepad']['hidden'] && !_0x4d3cd9['hidden'];
                        if (_0xcb580['which'] >= 0x70 && _0xcb580['which'] <= 0x7b);
                        else {
                            var _0x20a6c2 = 'keydown' === _0xcb580['type'];
                            if (_0x20a6c2 && _0x268d19) {
                                var _0x383461 = _0x4d3cd9['getAttribute']('data-index'),
                                    _0x16b9c4 = _0x4d3cd9['getAttribute']('data-id'),
                                    _0x20735f = null;
                                _0xcb580['key'] && ((_0x20735f = _0xdeb06e['elements']['dialogs']['gamepad']['querySelector']('[data-id="' ['concat'](_0x16b9c4, '"][data-index="')['concat'](_0x383461, '"][data-type="1"]')))['setAttribute']('data-value', _0xcb580['keyCode']), _0x20735f['value'] = ejs_Controller['keyMap'][_0xcb580['keyCode']]), toggleHidden(_0x4d3cd9, !0x0);
                            } else Object['keys'](ejs_Controller['controllers'])['forEach'](function (_0x3da2fb) {

                                Object['keys'](ejs_Controller['controllers'][_0x3da2fb])['forEach'](function (_0x346729) {

                                    if (parseInt(ejs_Controller['controllers'][_0x3da2fb][_0x346729]['value'], 0xa) === _0xcb580['keyCode']) {
                                        if (_0x20a6c2) {
                                            if (_0x346729 >= 0x10 && _0x346729 <= 0x17) {
                                                var _0x3b8146 = 0x7fff;
                                                0x13 != _0x346729 && 0x11 != _0x346729 && 0x17 != _0x346729 && 0x15 != _0x346729 || (_0x3b8146 = -_0x3b8146), ejs_Controller['CF']('simulateInput', _0x3da2fb, _0x346729, _0x3b8146);
                                            } else ejs_Controller['CF']('simulateInput', _0x3da2fb, _0x346729, 0x1);
                                        } else ejs_Controller['CF']('simulateInput', _0x3da2fb, _0x346729, 0x0);
                                    }
                                });
                            });
                        }
                        if (['input', 'textarea']['includes'](_0xcb580['target']['nodeName']['toLocaleLowerCase']()) ? _0xcb580['stopPropagation']() : (_0xcb580['preventDefault'](), _0xcb580['stopPropagation']()), _0x268d19) return !0x1;
                        if (_0xdeb06e['keyboard']) {
                            var _0x32d4ad = new KeyboardEvent(_0xcb580['type'], {
                                'isTrusted': !0x1,
                                'bubbles': !0x1,
                                'cancelable': !0x1,
                                'char': _0xcb580['char'],
                                'key': _0xcb580['key'],
                                'shiftKey': _0xcb580['shiftKey'],
                                'ctrlKey': _0xcb580['ctrlKey'],
                                'altKey': _0xcb580['altKey'],
                                'keyCode': _0xcb580['keyCode'],
                                'code': _0xcb580['code']
                            });
                            ejs_loader['Module']['canvas']['dispatchEvent'](_0x32d4ad), ejs_loader['Module']['canvas']['parentElement']['querySelector']('input')['dispatchEvent'](_0x32d4ad);
                        }
                    }
                };
            document['body']['addEventListener']('keydown', _0x20d62d), document['body']['addEventListener']('keyup', _0x20d62d);
        },
        initGamepad: function () {
            var _0x8a2d17 = this,
                _0x15b935 = this,
                _0x43243c = this['elements']['dialogs']['gamepad']['querySelector'](getCtrlclassName('overlay', !0)),
                _0x428a47 = new T['Gamepad']();
            if (ejs_Controller['gamepad'] = _0x428a47, _0x428a47['init']()) {
                var _0x52a3bb = 0x0;
                _0x428a47['bind'](T['Gamepad']['Event']['TICK'], function (_0x4a508d) {

                    _0x4a508d['forEach'](function (_0x225640) {
                        var _0x17e1cd, _0x138e9e;
                        _0x225640 && _0x225640['axes'] && _0x225640['axes'][0x9] && ((_0x17e1cd = _0x225640['axes'][0x9]) < 3.28571 ? (_0x52a3bb = _0x17e1cd, 0x1 == _0x17e1cd ? (_0x225640['extra_buttons'][0xc]['pressed'] || (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xe]['pressed'] || (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }))) : _0x17e1cd <= -0.7142857 && _0x17e1cd >= -0.714291 ? (_0x225640['extra_buttons'][0xc]['pressed'] || (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xf]['pressed'] || (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }))) : _0x17e1cd >= 0.42856 && _0x17e1cd <= 0.42858 ? (_0x225640['extra_buttons'][0xd]['pressed'] || (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xe]['pressed'] || (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }))) : _0x17e1cd >= -0.14287 && _0x17e1cd <= -0.14285 ? (_0x225640['extra_buttons'][0xd]['pressed'] || (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xf]['pressed'] || (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }))) : _0x17e1cd <= -0x1 && _0x17e1cd >= -1.01 ? _0x225640['extra_buttons'][0xc]['pressed'] || (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })) : _0x17e1cd >= 0.142857 && _0x17e1cd <= 0.142858 ? _0x225640['extra_buttons'][0xd]['pressed'] || (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })) : _0x17e1cd >= 0.7142857 && _0x17e1cd <= 0.7142858 ? _0x225640['extra_buttons'][0xe]['pressed'] || (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })) : _0x17e1cd <= -0.42857 && _0x17e1cd >= -0.42858 && (_0x225640['extra_buttons'][0xf]['pressed'] || (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })))) : _0x52a3bb != _0x17e1cd && (_0x225640['extra_buttons'][0xc]['pressed'] && (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xd]['pressed'] && (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xe]['pressed'] && (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xf]['pressed'] && (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x52a3bb = _0x17e1cd)), _0x225640 && _0x225640['axes'] && 0x0 in _0x225640['axes'] && ejs_Controller['remappingAxis'][_0x225640['index']] && (_0x17e1cd = _0x225640['axes'][0x0], Math['abs'](_0x17e1cd) <= 0.2 && (_0x17e1cd = 0x0), _0x17e1cd >= 0.5 && (_0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x225640['extra_buttons'][0xf]['pressed'] || (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd), _0x17e1cd <= -0.5 && (_0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x225640['extra_buttons'][0xe]['pressed'] || (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd), 0x0 == _0x17e1cd && (_0x138e9e = T['Gamepad']['StandardButtons'][0xe], _0x225640['extra_buttons'][0xe]['pressed'] && (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x138e9e = T['Gamepad']['StandardButtons'][0xf], _0x225640['extra_buttons'][0xf]['pressed'] && (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd)), _0x225640 && _0x225640['axes'] && 0x1 in _0x225640['axes'] && ejs_Controller['remappingAxis'][_0x225640['index']] && (_0x17e1cd = _0x225640['axes'][0x1], Math['abs'](_0x17e1cd) <= 0.2 && (_0x17e1cd = 0x0), _0x17e1cd >= 0.5 && (_0x138e9e = T['Gamepad']['StandardButtons'][0xd], _0x225640['extra_buttons'][0xd]['pressed'] || (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd), _0x17e1cd <= -0.5 && (_0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x225640['extra_buttons'][0xc]['pressed'] || (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd), 0x0 == _0x17e1cd && (_0x138e9e = T['Gamepad']['StandardButtons'][0xc], _0x225640['extra_buttons'][0xc]['pressed'] && (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x138e9e = T['Gamepad']['StandardButtons'][0xd], _0x225640['extra_buttons'][0xd]['pressed'] && (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x428a47['_fire'](T['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd));
                    });
                }), _0x428a47['bind'](T['Gamepad']['Event']['BUTTON_DOWN'], function (_0x2325fd) {

                    if (!_0x8a2d17['elements']['dialogs']['gamepad']['hidden'] && !_0x43243c['hidden']) {
                        var _0x297105, _0x2eb2fc = parseInt(_0x43243c['getAttribute']('data-index'), 0xa),
                            _0x5ef3ad = _0x43243c['getAttribute']('data-id');
                        if (_0x2325fd['gamepad']['index'] === parseInt(_0x2eb2fc, 0xa)) {
                            for (var _0x48b7b8 = 0x0; _0x48b7b8 < 0x20 && ((_0x297105 = _0x2325fd['gamepad']['buttons'][_0x48b7b8]) || (_0x297105 = _0x2325fd['gamepad']['extra_buttons'][_0x48b7b8]), !_0x297105 || !('number' == typeof _0x297105 && 0x1 === _0x297105 || 'number' == typeof _0x297105['value'] && 0x1 === _0x297105['value'])); _0x48b7b8 += 0x1);
                            var _0x48eb61 = null;
                            (_0x48eb61 = _0x15b935['elements']['dialogs']['gamepad']['querySelector']('[data-id="' ['concat'](_0x5ef3ad, '"][data-index="')['concat'](_0x2eb2fc, '"][data-type="2"]')))['setAttribute']('data-value', _0x2325fd['index']), _0x48eb61['value'] = _0x2325fd['control'] ? _0x2325fd['control'] : 'button ' ['concat'](_0x2325fd['index'] + 0x1), toggleHidden(_0x43243c, !0x0);
                        }
                    } else {
                        var _0x90822a = [];
                        ejs_loader['buttonMaps'] && (_0x90822a = ejs_loader['buttonMaps']), Object['keys'](ejs_Controller['controllers'])['forEach'](function (_0x250252) {

                            Object['keys'](ejs_Controller['controllers'][_0x250252])['forEach'](function (_0x1a0581) {

                                parseInt(ejs_Controller['controllers'][_0x250252][_0x1a0581]['value2'], 0xa) === parseInt(_0x2325fd['index'], 0xa) && parseInt(_0x250252, 0xa) === parseInt(_0x2325fd['gamepad']['index'], 0xa) && (!_0x90822a[_0x250252] || _0x90822a[_0x250252] && _0x90822a[_0x250252][_0x1a0581]) && ejs_Controller['CF']('simulateInput', _0x250252, _0x1a0581, 0x1);
                            });
                        });
                    }
                }), _0x428a47['bind'](T['Gamepad']['Event']['BUTTON_UP'], function (_0x2e80d7) {
                    var _0x48970c = [];
                    ejs_loader['buttonMaps'] && (_0x48970c = ejs_loader['buttonMaps']), Object['keys'](ejs_Controller['controllers'])['forEach'](function (_0x250708) {

                        Object['keys'](ejs_Controller['controllers'][_0x250708])['forEach'](function (_0x5c638e) {

                            parseInt(ejs_Controller['controllers'][_0x250708][_0x5c638e]['value2'], 0xa) === parseInt(_0x2e80d7['index'], 0xa) && parseInt(_0x250708, 0xa) === parseInt(_0x2e80d7['gamepad']['index'], 0xa) && (!_0x48970c[_0x250708] || _0x48970c[_0x250708] && _0x48970c[_0x250708][_0x5c638e]) && ejs_Controller['CF']('simulateInput', _0x250708, _0x5c638e, 0x0);
                        });
                    });
                }), _0x428a47['bind'](T['Gamepad']['Event']['AXIS_CHANGED'], function (_0x3a3f6b) {
                    var _0x2c4bf5 = _0x3a3f6b['gamepad']['index'],
                        _0x125870 = [];
                    if (ejs_loader['buttonMaps'] && (_0x125870 = ejs_loader['buttonMaps']), 0x0 == _0x125870['length'] || !_0x125870[_0x2c4bf5]) return !0x1;
                    'LEFT_STICK_X' === _0x3a3f6b['axis'] && (_0x3a3f6b['value'] > 0x0 ? (_0x125870[_0x2c4bf5][0x10] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x10, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x11] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x11, 0x0)) : (_0x125870[_0x2c4bf5][0x11] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x11, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x10] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x10, 0x0))), 'LEFT_STICK_Y' === _0x3a3f6b['axis'] && (_0x3a3f6b['value'] > 0x0 ? (_0x125870[_0x2c4bf5][0x12] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x12, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x13] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x13, 0x0)) : (_0x125870[_0x2c4bf5][0x13] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x13, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x12] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x12, 0x0))), 'RIGHT_STICK_X' === _0x3a3f6b['axis'] && (_0x3a3f6b['value'] > 0x0 ? (_0x125870[_0x2c4bf5][0x14] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x14, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x15] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x15, 0x0)) : (_0x125870[_0x2c4bf5][0x15] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x15, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x14] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x14, 0x0))), 'RIGHT_STICK_Y' === _0x3a3f6b['axis'] && (_0x3a3f6b['value'] > 0x0 ? (_0x125870[_0x2c4bf5][0x16] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x16, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x17] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x17, 0x0)) : (_0x125870[_0x2c4bf5][0x17] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x17, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x16] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x16, 0x0)));
                }), _0x428a47['bind'](T['Gamepad']['Event']['DISCONNECTED'], function (_0x2e78bb) {

                    [0x0, 0x1, 0x2, 0x3]['forEach'](function (_0x31c03e) {
                        var _0x4fd66b = _0x428a47['gamepads'][_0x31c03e];
                        _0x4fd66b ? _0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e)) && (_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e, ' .')['concat'](getCtrlclassName('gamepad-name'))).innerHTML = _0x4fd66b['id'], toggleHidden(_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e, ' .')['concat'](getCtrlclassName('gamepad-remapping-axis'))), !0x1)) : _0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e)) && (_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e, ' .')['concat'](getCtrlclassName('gamepad-name'))).innerHTML = 'None detected', toggleHidden(_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e, ' .')['concat'](getCtrlclassName('gamepad-remapping-axis'))), !0x0));
                    });
                }), _0x428a47['bind'](T['Gamepad']['Event']['CONNECTED'], function (_0x450f2e) {

                    Object['keys'](_0x428a47['gamepads'])['forEach'](function (_0x9bd8df) {
                        var _0x15cb12 = _0x428a47['gamepads'][_0x9bd8df];
                        _0x15cb12 ? _0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x9bd8df)) && (_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x9bd8df, ' .')['concat'](getCtrlclassName('gamepad-name'))).innerHTML = _0x15cb12['id'], toggleHidden(_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x9bd8df, ' .')['concat'](getCtrlclassName('gamepad-remapping-axis'))), !0x1)) : _0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x9bd8df)) && (_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x9bd8df, ' .')['concat'](getCtrlclassName('gamepad-name'))).innerHTML = 'None detected', toggleHidden(_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x9bd8df, ' .')['concat'](getCtrlclassName('gamepad-remapping-axis'))), !0x0));
                    });
                });
            }
        },
        setShader: function (_0xb5459b) {
            let FS = DISK.FS;
            if ('disabled' === _0xb5459b) {
                //FS['unlink']('/shader/shader.glslp', '');
                ejs_Controller['CF']('shaderEnable', 0x0);
            } else {
                ejs_Controller['CF']('shaderEnable', 0x0);
                var _0x2ef38 = '/shader/' ['concat'](_0xb5459b);
                DISK.MKFILE('/shader/shader.glslp', ejs_loader.FS['readFile'](_0x2ef38), 1);
                ejs_Controller['CF']('shaderEnable', 0x1);
            }
        },
        toggleVirtualGamepad: function (_0x2bec8b) {
            const E = this;
            if (null === ejs_Controller['virtualGamepadContainer']) {
                var vStyle = 0x2;
                switch (E['system']) {
                    case 'gb':
                    case 'gbc':
                    case 'atari7800':
                    case 'lynx':
                    case 'segaMS':
                    case 'segaGG':
                    case 'atari2600':
                        vStyle = 0x1;
                        break;
                    case 'nes':
                        vStyle = 0x2;
                        break;
                    case 'snes':
                    case 'snes2002':
                    case 'snes2005':
                    case 'snes2010':
                    case 'zc210':
                        vStyle = 0x3;
                        break;
                    case 'gba':
                    case 'vbanext':
                        vStyle = 0x4;
                        break;
                    case 'segaMD':
                    case 'segaCD':
                    case 'sega32x':
                    case 'openbor':
                        vStyle = 0x5;
                        break;
                    case 'segaSaturn':
                        vStyle = 0x6;
                        break;
                    case 'arcade':
                    case 'fba0.2.97.29':
                    case 'mame2003':
                    case 'mame':
                    case 'mame0.193':
                    case 'mame0.243':
                        vStyle = 0x7;
                        break;
                    case 'n64':
                    case 'mupen64plus':
                    case 'mupen64plus2':
                    case 'mupen64plus-nx':
                        vStyle = 0x8;
                        break;
                    case 'psx':
                        vStyle = 0x9;
                        break;
                    case 'pce':
                        vStyle = 0xa;
                        break;
                    case 'ws':
                        vStyle = 0xb;
                }
                var _0x1d43a3 = {
                    'ejs-virtual-gamepad': !0x0
                };
                _0x1d43a3[('ejs-virtual-gamepad-style-')['concat'](vStyle)] = !0x0;
                ejs_Controller['virtualGamepadContainer'] = createElm('div', {
                    'class': getClassName(_0x1d43a3),
                    'hidden': ''
                });
                this['elements']['container']['appendChild'](ejs_Controller['virtualGamepadContainer']);
                console.log('virtual-gamepad');
                /**
                 * 虚拟手柄 虚拟触摸UI
                 */
                ejs_Controller['virtualGamepadContainer'].innerHTML = `<div class="${getClassName('virtual-gamepad')} system-${E['system']}" style="display: block;">
    <div class="${getClassName('top')}"></div>
    <div class="${getClassName('dpad-container')}"></div>
    <div class="${getClassName('left')}"></div>
    <div class="${getClassName('center')}">
        <div data-key-id-2 class="${getClassName('buttons b_select')}">SELECT</div>
        <div data-key-id-3 class="${getClassName('buttons b_start')}">START</div>
        <div data-key-id-2 class="${getClassName('buttons b_insert_coin')}">INSERT COIN</div>
    </div>
    <div class="${getClassName('right')}">
        <div data-key-id-8 class="${getClassName('buttons b_a')}">A</div>
        <div data-key-id-0 class="${getClassName('buttons b_b')}">B</div>
        <div data-key-id-9 class="${getClassName('buttons b_x')}">X</div>
        <div data-key-id-1 class="${getClassName('buttons b_y')}">Y</div>
        <div data-key-id-10 class="${getClassName('buttons b_c')}">C</div>
        <div data-key-id-11 class="${getClassName('buttons b_z')}">Z</div>
        <div data-key-id-8 class="${getClassName('buttons b_1')}">1</div>
        <div data-key-id-0 class="${getClassName('buttons b_2')}">2</div>
        <div data-key-id-10 class="${getClassName('buttons b_3')}">3</div>
        <div data-key-id-9 class="${getClassName('buttons b_4')}">4</div>
        <div data-key-id-1 class="${getClassName('buttons b_5')}">5</div>
        <div data-key-id-11 class="${getClassName('buttons b_6')}">6</div>
        <div data-key-id-10 class="${getClassName('buttons b_l')}">L</div>
        <div data-key-id-11 class="${getClassName('buttons b_r')}">R</div>
        <div data-key-id-12 class="${getClassName('buttons b_l2')}">L2</div>
        <div data-key-id-13 class="${getClassName('buttons b_r2')}">R2</div>
        <div data-key-id-23 class="${getClassName('buttons b_c1')}">C1</div>
        <div data-key-id-22 class="${getClassName('buttons b_c2')}">C2</div>
        <div data-key-id-21 class="${getClassName('buttons b_c3')}">C3</div>
        <div data-key-id-20 class="${getClassName('buttons b_c4')}">C4</div>
        <div data-key-id-12 class="${getClassName('buttons b_z_t')}">Z</div>
        <div data-key-id-10 class="${getClassName('buttons b_l_t')}">L</div>
        <div data-key-id-11 class="${getClassName('buttons b_r_t')}">R</div>
    </div>
</div>`;
                toggleHidden(ejs_Controller['virtualGamepadContainer'], !_0x2bec8b);
                var _0x4a8321 = [];
                ejs_loader['buttonMaps'] && (_0x4a8321 = ejs_loader['buttonMaps']), _0x4a8321[0x0] && Object['keys'](_0x4a8321[0x0])['forEach'](function (_0x4161cd, _0x3cce57) {

                    _0x3cce57 = _0x4a8321[0x0][_0x4161cd], ejs_Controller['virtualGamepadContainer']['querySelectorAll'](getClassName('buttons', 1))['forEach'](function (_0x26b1db) {

                        'data-key-id-' ['concat'](_0x4161cd) in _0x26b1db['attributes'] && (_0x26b1db.innerHTML = _0x3cce57);
                    });
                });
                ejs_Controller['virtualGamepadContainer']['querySelectorAll'](getClassName('buttons', 1))['forEach'](function (_0x5e70dc) {
                    var ElmCanvas = createElm('canvas', {
                        'style': 'width: 100%;height: 100%;position: absolute;left: 0;z-index:1'
                    });
                    _0x5e70dc['appendChild'](ElmCanvas);
                });
                if (vStyle == 9 || vStyle == 8) {
                    //需要触摸板  异步
                    E['callaction']('JoystickGamepad');
                }
                outDpadHtml({
                    'container': E['Selector']('.' ['concat'](getClassName('ejs-virtual-gamepad'), ' .')['concat'](getClassName('dpad-container'))),
                    'event': function (_0x392b90, _0x1b225a, _0x4d23be, _0x289e63) {

                        ejs_Controller['CF']('simulateInput', 0x0, 0x4, _0x4d23be);
                        ejs_Controller['CF']('simulateInput', 0x0, 0x5, _0x289e63);
                        ejs_Controller['CF']('simulateInput', 0x0, 0x6, _0x392b90);
                        ejs_Controller['CF']('simulateInput', 0x0, 0x7, _0x1b225a);
                    }
                });
                var virtualGamepadClass = getClassName('virtual-gamepad'),
                    _0x508e4d = getClassName('touch');
                E['addEvent'](E['Selector']('.' ['concat'](virtualGamepadClass)), 'touchmove', function (_0x1e9ffc) {

                    _0x1e9ffc['stopPropagation']();
                });
                var _0xff41a1 = {};
                _0xff41a1[getClassName('b_a')] = 0x8;
                _0xff41a1[getClassName('b_b')] = 0x0;
                _0xff41a1[getClassName('b_c')] = 0xa;
                _0xff41a1[getClassName('b_x')] = 0x9;
                _0xff41a1[getClassName('b_y')] = 0x1;
                _0xff41a1[getClassName('b_z')] = 0xb;
                _0xff41a1[getClassName('b_l')] = 0xa;
                _0xff41a1[getClassName('b_r')] = 0xb;
                _0xff41a1[getClassName('b_l2')] = 0xc;
                _0xff41a1[getClassName('b_r2')] = 0xd;
                _0xff41a1[getClassName('b_1')] = 0x8;
                _0xff41a1[getClassName('b_2')] = 0x0;
                _0xff41a1[getClassName('b_3')] = 0xa;
                _0xff41a1[getClassName('b_4')] = 0x9;
                _0xff41a1[getClassName('b_5')] = 0x1;
                _0xff41a1[getClassName('b_6')] = 0xb;
                _0xff41a1[getClassName('b_c1')] = 0x17;
                _0xff41a1[getClassName('b_c2')] = 0x16;
                _0xff41a1[getClassName('b_c3')] = 0x15;
                _0xff41a1[getClassName('b_c4')] = 0x14;
                _0xff41a1[getClassName('b_l_t')] = 0xa;
                _0xff41a1[getClassName('b_r_t')] = 0xb;
                _0xff41a1[getClassName('b_z_t')] = 0xc;
                _0xff41a1[getClassName('b_start')] = 0x3;
                _0xff41a1[getClassName('b_select')] = 0x2;
                _0xff41a1[getClassName('b_insert_coin')] = 0x2;
                Object['keys'](_0xff41a1)['forEach'](function (_0x31c309) {
                    var _0x59c0fb = _0xff41a1[_0x31c309];
                    E['addEvent'](E['Selector']('.' ['concat'](virtualGamepadClass, ' .')['concat'](_0x31c309, ' canvas')), 'touchstart touchend', function (_0x3f6422) {

                        if ('touchend' === _0x3f6422['type']) elmAddRemoveClass(E['Selector']('.' ['concat'](virtualGamepadClass, ' .')['concat'](_0x31c309)), _0x508e4d, !0x1), window['setTimeout'](function () {

                            ejs_Controller['CF']('simulateInput', 0x0, _0x59c0fb, 0x0);
                        }, 0xa);
                        else {
                            if (elmAddRemoveClass(E['Selector']('.' ['concat'](virtualGamepadClass, ' .')['concat'](_0x31c309)), _0x508e4d, !0x0), [0x14, 0x15, 0x16, 0x17]['includes'](_0x59c0fb)) {
                                var _0x211e6d = 0x7fff;
                                0x17 != _0x59c0fb && 0x15 != _0x59c0fb || (_0x211e6d = -_0x211e6d), ejs_Controller['CF']('simulateInput', 0x0, _0x59c0fb, _0x211e6d);
                            } else ejs_Controller['CF']('simulateInput', 0x0, _0x59c0fb, 0x1);
                        }
                        _0x3f6422['stopPropagation']();
                    });
                });
            } else toggleHidden(ejs_Controller['virtualGamepadContainer'], !_0x2bec8b);
        },
        setup: function () {
            const E = this;
            if (this['game']) {
                ejs_Controller['playerName'] = E['config']['playerName'];
                elmAddRemoveClass(this['elements']['container'], this['config']['classNames']['type'], !0x0);
                this['elements']['container']['setAttribute']('tabindex', '0');
                if (this['color']) {
                    var div = T.$append(document.body, 'div');
                    div.style.color = this['color'];
                    var color = getComputedStyle(div).color;
                    if (color) {
                        I.setStyle(this['elements']['container'], {
                            '--ejs-primary-color': color.replace(/rgb\((.+?)\)$/, '$1')
                        });
                    }
                    div.remove();
                }
                this['elements']['wrapper'] = createElm('div', {
                    'class': this['config']['classNames']['video']
                });
                appendEJSChild(this['game'], this['elements']['wrapper']);

                if (E['system'] != 'nds') eventTouchList.forEach(v => T.on(this['elements']['wrapper'], v, e => e.target == this['elements']['wrapper'] && T.stopEvent(e)));
                if ('video' !== E['game']['tagName']['toLocaleLowerCase']()) {
                    var _0x396be3 = this['config']['volume'];
                    Object['defineProperty'](E['game'], 'volume', {
                        'get': function () {
                            return _0x396be3;
                        },
                        'set': function (_0x1e0fb7) {

                            _0x396be3 = _0x1e0fb7, E['callEvent'](E['game'], 'volumechange');
                        }
                    });
                    var _0x8ad350 = E['storage']['get']('muted');
                    Object['defineProperty'](E['game'], 'muted', {
                        'get': function () {
                            return _0x8ad350;
                        },
                        'set': function (_0x4be3e9) {
                            var _0x2197ca = !!I.bool(_0x4be3e9) && _0x4be3e9;
                            _0x8ad350 = _0x2197ca, E['callEvent'](E['game'], 'volumechange');
                        }
                    });
                }
            } else console['warn']('No game element found!');
        },
        listeners: function () {
            const E = this;
            var ElmContainer = E['elements']['container'],
                ElmBtns = E['elements']['buttons'];
            ElmBtns['restart'] && E['addEvent'](ElmBtns['restart'], 'click', function (_0x2b1316) {

                //_0x88c152['show'](ElmContainer, T.getLang('Restart Game'), 0x5dc);

                ejs_Controller['restartGame']();
            });
            ElmBtns['play'] && Array['from'](ElmBtns['play'])['forEach'](function (_0x10db9b) {

                E['addEvent'](_0x10db9b, 'click', function (_0x4ca219) {

                    E['playing'] ? (E['playing'] = !0x1, ejs_loader['Module']['pauseMainLoop'](), E['callEvent'](ElmContainer, 'pause', !0x1, {
                        'pause': !0x0
                    })) : (E['playing'] = !0x0, ejs_loader['Module']['resumeMainLoop'](), E['callEvent'](ElmContainer, 'pause', !0x1, {
                        'pause': !0x1
                    }));
                });
            });
            ElmBtns['netplay'] && E['addEvent'](ElmBtns['netplay'], 'click', function (_0x1188e4) {

                toggleHidden(E['elements']['dialogs']['netplay'], !0x1), ejs_Controller['netPlayUsers']['filter'](function (_0x327af7) {
                    return '' != _0x327af7;
                })['length'] > 0x0 ? ejs_Controller['openRoom'](E) : (ejs_Controller['netPlayDialogOpened'] = !0x0, ejs_Controller['stopLoadRooms'](), ejs_Controller['loadRoomsList']()), ejs_Controller['playerName'] || _0x3e3214['show']('modal-9de6c4e9ce2b9361', {
                    'closeByEsckey': !0x1
                });
            });
            I.toArr(['cheat', 'cache'], name => ElmBtns[name] && E['addEvent'](ElmBtns[name], 'click', () => {
                T.triger(E['elements']['dialogs'][name], 'opendialog');
                toggleHidden(E['elements']['dialogs'][name], !0x1);
            }));

            var _0x4c0dc2 = E['SelectorAll']('.' ['concat'](getClassName('ejs__contextmenu'), ' ul li'));
            Array['from'](_0x4c0dc2)['forEach'](function (_0x11755d, _0x550e23) {

                0x0 === _0x550e23 && E['addEvent'](_0x11755d, 'click', function (_0x204b73) {
                    var _0x130f28 = ejs_Controller['getScreenData']();
                    T.down(E['startName'] + '.png', _0x130f28);
                    //_0xe3873()(new Blob([_0x130f28]), E['startName'] + '.png');
                    return !0x1;
                }), 0x1 === _0x550e23 && E['addEvent'](_0x11755d, 'click', function (_0x3ad3cd) {

                    ejs_Controller['quickSaveState'](), ejs_data['contextMenu']['style']['display'] = 'none';
                }), 0x2 === _0x550e23 && E['addEvent'](_0x11755d, 'click', function (_0xf06990) {

                    ejs_Controller['quickLoadState'](), ejs_data['contextMenu']['style']['display'] = 'none';
                });
            }), E['addEvent'](ElmContainer, 'savestate', function (_0x5ab2e7) {
                console.log('即时存档 state saves');
                var _0x421707 = _0x5ab2e7['detail']['state'],
                    _0x63f494 = E['startName']['split']('/')['pop']()['split']('.'),
                    _0x4e6b22 = _0x63f494['slice'](0x0, _0x63f494['length'] - 0x1)['join']('.'),
                    _0x2e2422 = _0x4e6b22 ? '' ['concat'](_0x4e6b22, '.state') : 'game.state';
                if ('custom' == E['config']['onsavestate']) {
                    if (loaderWindow) {
                        loaderWindow['postMessage']({
                            'act': 'ejs-savestate',
                            'data': {
                                'screenshot': _0x5ab2e7['detail']['screenshot'],
                                'state': _0x421707
                            },
                            'name': _0x2e2422
                        }, '*');
                    }
                } else if (I.func(E['config']['onsavestate'])) {
                    E['config']['onsavestate']['call'](null, {
                        'screenshot': _0x5ab2e7['detail']['screenshot'],
                        'state': _0x421707
                    });
                } else {
                    let key = T.F.getKeyName(E['startName']),
                        path = E['savefullpath'] + '/';
                    DISK.MKFILE(path + key + '.state', _0x421707, 1);
                    DISK.MKFILE(path + key + '.png', _0x5ab2e7['detail']['screenshot'], 1);
                    //userdata.setData(path+key+'.state',_0x421707).then(e=>{
                    //     ElmContainer['focus']();
                    //});
                    //userdata.setData(path+key+'.png',_0x421707);
                    //return;
                    //_0xcb1ae3 = new Blob([_0x421707]),
                    //_0xe3873()(_0xcb1ae3, _0x2e2422)
                }
                ElmContainer['focus']();
            }), (E['game']['stateloadField'] = createElm('input'), E['game']['stateloadField']['type'] = 'file', E['game']['stateloadField']['onchange'] = function _0x5443ff(_0x5b452b) {
                var _0x3f07e2, _0x4a2ba0 = _0x5b452b['target']['files'];
                _0x4a2ba0['length'] > 0x0 && ((_0x3f07e2 = new FileReader())['file_name'] = _0x4a2ba0[0x0]['name'], _0x3f07e2['onload'] = function () {
                    var _0x457c84 = new Uint8Array(_0x3f07e2['result']);
                    EJS_loadState(_0x457c84);
                }, _0x3f07e2['readAsArrayBuffer'](_0x4a2ba0[0x0])), E['game']['stateloadField'] = createElm('input'), E['game']['stateloadField']['type'] = 'file', E['game']['stateloadField']['onchange'] = _0x5443ff;
            }, E['addEvent'](ElmContainer, 'loadstate', function (_0x5c440f) {
                console.log('即时读档 load state');

                if ('custom' == E['config']['onsavestate'] && loaderWindow) {
                    loaderWindow['postMessage']({
                        'act': 'ejs-loadstate'
                    }, '*');
                } else if (I.func(E['config']['onsavestate'])) {
                    E['config']['onloadstate']['call'](null, E['loadState']);
                } else {
                    let key = T.F.getKeyName(E['startName']),
                        path = E['savefullpath'] + '/' + key + '.state',
                        FS = ejs_loader.FS;
                    if (FS.analyzePath(path).exists) {
                        //ejs_loader.FS.readFile(path+key+'.state');
                        ejs_Controller['loadState'](ejs_loader.FS.readFile(path), 0x0);
                    }
                    /*
                    T.getStore('userdata').data(path+key+'.state').then(e=>{
                        ejs_Controller['loadState'](e, 0x0);
                        ElmContainer['focus']();
                    });
                    */
                    //userdata.setData(path+key+'.png',_0x421707);
                    return;
                    //_0xcb1ae3 = new Blob([_0x421707]),
                    //_0xe3873()(_0xcb1ae3, _0x2e2422)
                }
                ElmContainer['focus']();

            }), document['addEventListener']('visibilitychange', function () {

                document['visibilityState'];
            }));
        },
        bindFunction: function () {
            var _0x4bd348, E = this,
                System = E['system'],
                Module = ejs_loader['Module'];
            let func = "CM(o){return !!Module['_'+o]},GM(o){return this.action[o]},",
                getMfunc = o => `'${o[0]}':Module['_${o[0]}']&&Module["cwrap"](${o.map(e=>I.str(e)?`'${e}'`:I.array(e)?`[${e.map(k=>k?`'${k}'`:`''`).join(',')}]`:`${e}`).join(',')})||null,`,
                getfunc = o => `(...arg){return this.CF('CM','${o}')?this.RF('${o}',arg):null},`;
            I.toArr({
                getDiskNum: ['get_disk_num', 'number', []],
                setDisk: ['set_disk', 'number', ['number']],
                ejectDisk: ['eject_disk', 'null', []],
                netPlayHost: ['netplay_host', 'number', ['string', 'string']],
                netPlayClient: ['netplay_client', 'number', ['string', 'string']],
                netPlayClose: ['netplay_close', 'number', []],
                netplayNewUser: ['netplay_new_user', 'number', []],
                netplayPushData: ['netplay_push_data', 'number', ['string', 'number']],
                contentCrc32: ['get_content_crc', 'string', []],
                getScreenshot: ['cmd_take_screenshot', '', []],
                adjustVolume: ['adjust_volume', 'null', ['number']],
                setVolume: ['set_volume', 'null', ['number']],
                setVariable: ['set_variable', 'null', ['string', 'string']],
                simulateInput: ['simulate_input', 'null', ['number', 'number', 'number']],
                shaderEnable: ['shader_enable', 'null', ['number']],
                getStateInfo: ['get_state_info', 'string', []],
                loadState: ['load_state', 'number', ['string', 'number']],
                setCheat: ['set_cheat', 'number', ['number', 'number', 'string']],
                resetCheat: ['reset_cheat', '', []],
                restartGame: ['system_restart', '', []],
                currentFrameNum: ['get_current_frame_count', '', []],
                saveSavFiles: ['cmd_savefiles', '', []],
                getGameCoreOptions: ['get_core_options', 'string', []],
                fastForward: ['fast_forward', 'number', []],
                fastForward2: ['fast_forward_2', 'number', []],
            }, entry => {
                func += getMfunc(entry[1]) + entry[0] + getfunc(entry[1][0])
            });
            func = `Object.assign(this.action,{${func}});`;
            (new Function('Module', func)).call(ejs_Controller, Module);
            let setVolume = I.toArr(['adjust_volume', 'set_volume']).filter(e => ejs_Controller['CF']('CM', e))[0];
            if (setVolume) {
                ejs_Controller['setVolume'] = () => {
                    var volume = -0x50;
                    if (!E['muted']) {
                        if (setVolume == 'set_volume') {
                            if (E['volume'] > 0.5) volume = (E['volume'] / 0.5 - 1) * 80;
                            else if (E['volume'] > 0) volume = (E['volume'] / 0.5 - 1) * 10;
                        } else if (E['volume'] > 0) {
                            volume = 1 * E['volume'];
                        }
                    }
                    ejs_Controller['action'][setVolume](volume);
                }
            }
            ejs_Controller['saveState'] = function () {
                //返回即时存档
                var u8buf, lenList = ejs_Controller['CF']('getStateInfo')['split']('|'),
                    startlen = lenList[0x0] >> 0x0;
                if (startlen > 0x0) {
                    var startpos = lenList[0x1] >> 0x0;
                    u8buf = Module['HEAPU8']['slice'] ? Module['HEAPU8']['slice'](startpos, startpos + startlen) : Module['HEAPU8']['subarray'](startpos, startpos + startlen);
                }
                return u8buf;
            };
            var loadState = (name, pos) => ejs_Controller['CF']('loadState', name, pos);
            ejs_Controller['loadState'] = function (u8buf, pos) {
                //加载即时存档
                if (ejs_Controller['netPlayConnected']) return !0x1;
                let FS = ejs_loader.FS;
                pos = pos || 0;
                FS.analyzePath('/game.state').exists && FS['unlink']('game.state');
                FS['createDataFile']('/', 'game.state', u8buf, !0x0, !0x0);
                loadState('game.state', pos);
                if ('arcade' === System) {
                    setTimeout(e => {
                        ejs_Controller['CF']('getStateInfo');
                        loadState('game.state', pos);
                        FS['unlink']('game.state');
                    }, 0xa)
                } else {
                    FS['unlink']('game.state');
                }
                E['elements']['container']['focus']();
            };
            ejs_Controller['quickSaveState'] = function () {
                //快捷 保存 即时存档
                if (ejs_Controller['netPlayConnected']) return !0x1;
                if (E['started'] && !ejs_Controller['connected']) {
                    var u8buf = ejs_Controller['saveState']();
                    if (u8buf) {
                        DISK.MKFILE('/quick.state', u8buf, 1);
                        _0x88c152['show'](E['elements']['container'], T.getLang('Quick Save'));
                    }
                }
            };
            ejs_Controller['quickLoadState'] = function () {
                //快捷 读取 即时存档
                if (ejs_Controller['netPlayConnected']) return !0x1;
                if (E['started'] && !ejs_Controller['connected']) {
                    loadState('quick.state', 0x0);
                    if ('arcade' === System) {
                        setTimeout(e => {

                            ejs_Controller['CF']('getStateInfo');
                            loadState('quick.state', 0x0);
                        }, 0xa);
                        _0x88c152['show'](E['elements']['container'], T.getLang('Quick Load'))
                    }
                }
            };
            Module['_get_disk_num'] && (ejs_Controller['getDiskNum'] = Module['cwrap']('get_disk_num', 'number', []));
            Module['_set_disk'] && (ejs_Controller['setDisk'] = Module['cwrap']('set_disk', 'number', ['number']));
            Module['_eject_disk'] && (ejs_Controller['ejectDisk'] = Module['cwrap']('eject_disk', 'null', []));
            Module['_netplay_host'] && (ejs_Controller['netPlayHost'] = Module['cwrap']('netplay_host', 'number', ['string', 'string']));
            Module['_netplay_client'] && (ejs_Controller['netPlayClient'] = Module['cwrap']('netplay_client', 'number', ['string', 'string']));
            Module['_netplay_close'] && (ejs_Controller['netPlayClose'] = Module['cwrap']('netplay_close', 'number', []));
            Module['_netplay_new_user'] && (ejs_Controller['netplayNewUser'] = Module['cwrap']('netplay_new_user', 'number', []));
            Module['_netplay_push_data'] && (ejs_Controller['netplayPushData'] = Module['cwrap']('netplay_push_data', 'number', ['string', 'number']));
            Module['_get_content_crc'] && (ejs_Controller['contentCrc32'] = Module['cwrap']('get_content_crc', 'string', []));
            window['EJS_loadState'] = function (_0x29f6af) {
                ejs_Controller['loadState'](_0x29f6af, 0x0);
            };
            var _0x2cdff1 = Module['cwrap']('cmd_take_screenshot', '', []);
            ejs_Controller['getScreenData'] = function () {
                ejs_Controller['CF']('shaderEnable', 0x0);
                _0x2cdff1();
                ejs_Controller['CF']('shaderEnable', 0x1);
                if (ejs_loader.FS.analyzePath('screenshot.png').exists) {
                    return ejs_loader.FS['readFile']('screenshot.png');
                } else {
                    return new Uint8Array(0);
                }
            };
            ejs_Controller['restartGame'] = Module['cwrap']('system_restart', '', []);
            ejs_Controller['currentFrameNum'] = Module['cwrap']('get_current_frame_count', '', []);
            Module['_cmd_savefiles'] && (ejs_Controller['saveSavFiles'] = Module['cwrap']('cmd_savefiles', '', []));
            ejs_Controller['systemPause'] = function (_0x4c41aa) {
                return !0x1;
            }, ejs_Controller['controllers'] = ejs_data['storage']['get']('controllers'), ejs_Controller['controllers'] || (ejs_Controller['controllers'] = ejs_Controller['defaultControllers']), ejs_Controller['remappingAxis'] = ejs_data['storage']['get']('remappingAxis'), ejs_Controller['remappingAxis'] || (ejs_Controller['remappingAxis'] = {});
        }
    };
    I.defines(ejs_Controller, {
        'netPlayConnected': {
            get() {

                return ejs_Controller['_netPlayConnected'];
            },
            set(status) {
                ejs_Controller['_netPlayConnected'] = status;
                ejs_Controller['netPlayConnectChange'](status);
            }
        }
    });
    var ejs_data = {
        coreoptions: {},
        'storage': null,
        'coreOptionsValues': {},
        'contextMenu': null,
        'normalOptions': {
            'mypanel': {
                'label': 'My Panel',
                'options': {
                    'disabled': 'Disabled',
                    'importSates': 'import sates',
                },
                'default': 'disabled'
            },
            'shader': {
                'label': 'Shader',
                'options': {
                    'disabled': 'Disabled',
                    '2xScaleHQ.glslp': '2xScaleHQ',
                    '4xScaleHQ.glslp': '4xScaleHQ',
                    '5xbrz.glslp': '5xbrz',
                    '6xbrz.glslp': '6xbrz',
                    'crt-easymode.glslp': 'CRT easymode',
                    'crt-aperture.glslp': 'CRT aperture',
                    'crt-geom.glslp': 'CRT geom',
                    'crt-mattias.glslp': 'CRT mattias'
                },
                'default': 'disabled'
            },
            'virtual-gamepad': {
                'label': 'Virtual Gamepad',
                'options': {
                    'disabled': 'Disabled',
                    'enabled': 'Enabled'
                },
                'default': 'enabled'
            }
        },
        'defaultCoreOptionsValues': function () {
            var _0x4a2c7d = {};
            switch (this['system']) {
                case 'pce':
                    _0x4a2c7d = {
                        'pce_nospritelimit': 'enabled'
                    };
                    break;
                case 'jaguar':
                    _0x4a2c7d = {
                        'virtualjaguar_doom_res_hack': 'enabled'
                    };
                    break;
                case 'psx':
                case 'nds':
                    _0x4a2c7d = {};
                    break;
                case 'nes':
                    _0x4a2c7d = {
                        'fceumm_turbo_enable': 'Both'
                    };
            }
            return _0x4a2c7d;
        },
        getCoreOptions(bool) {
            var E = this,
                CoreOptionData = {};
            switch (E['system']) {
                case 'nes':
                    CoreOptionData['fceumm_palette'] = {
                        'label': 'Color Palette',
                        'options': {
                            'default': 'Default',
                            'asqrealc': 'AspiringSquire\x27s Real',
                            'nintendo-vc': 'Nintendo Virtual Console',
                            'rgb': 'Nintendo RGB PPU',
                            'yuv-v3': 'FBX\x27s YUV-V3',
                            'unsaturated-final': 'FBX\x27s Unsaturated-Final',
                            'sony-cxa2025as-us': 'Sony CXA2025AS US',
                            'pal': 'PAL',
                            'bmf-final2': 'BMF\x27s Final 2',
                            'bmf-final3': 'BMF\x27s Final 3',
                            'smooth-fbx': 'FBX\x27s Smooth',
                            'composite-direct-fbx': 'FBX\x27s Composite Direct',
                            'pvm-style-d93-fbx': 'FBX\x27s PVM Style D93',
                            'ntsc-hardware-fbx': 'FBX\x27s NTSC Hardware',
                            'nes-classic-fbx-fs': 'FBX\x27s NES-Classic FS',
                            'nescap': 'RGBSource\x27s NESCAP',
                            'wavebeam': 'nakedarthur\x27s Wavebeam',
                            'raw': 'Raw'
                        },
                        'default': 'default',
                        'netplay': !0x0
                    }, CoreOptionData['fceumm_nospritelimit'] = {
                        'label': 'No Sprite Limit',
                        'options': {
                            'enabled': 'Enabled',
                            'disabled': 'Disabled'
                        },
                        'default': 'disabled',
                        'netplay': !0x0
                    }, CoreOptionData['fceumm_sndquality'] = {
                        'label': 'Sound Quality',
                        'options': {
                            'Low': 'Low',
                            'High': 'High',
                            'Very High': 'Very High'
                        },
                        'default': 'Low',
                        'netplay': !0x0
                    }, CoreOptionData['fceumm_turbo_enable'] = {
                        'label': 'Turbo Enable',
                        'options': ['None', 'Player 1', 'Player 2', 'Both'],
                        'default': 'Both',
                        'netplay': !0x0
                    }, CoreOptionData['fceumm_region'] = {
                        'label': 'Region',
                        'options': ['Auto', 'NTSC', 'PAL', 'Dendy'],
                        'default': 'Auto',
                        'netplay': !0x0
                    };
                    break;
                case 'snes':
                    CoreOptionData = {
                        'snes9x_next_overclock': {
                            'label': 'SuperFX Overclock',
                            'options': {
                                'disabled': 'Disabled(10MHz)',
                                '40MHz': '40MHz',
                                '60MHz': '60MHz',
                                '80MHz': '80MHz',
                                '100MHz': '100MHz'
                            },
                            'default': 'disabled',
                            'netplay': !0x0
                        }
                    };
                    break;
                case 'snes2002':
                case 'snes2005':
                case 'snes2010':
                case 'gb':
                case 'gba':
                case 'vbanext':
                case 'n64':
                    CoreOptionData = {};
                    break;
                case 'nds':
                    CoreOptionData = {
                        'desmume_screens_layout': {
                            'label': 'Screen layout',
                            'options': ['top/bottom', 'bottom/top', 'left/right', 'right/left', 'top only', 'bottom only'],
                            'default': 'top/bottom'
                        },
                        'screen_rotation': {
                            'label': 'Screen Rotation',
                            'options': {
                                0x0: '0\u00b0',
                                0x5a: '90°',
                                0xb4: '180°',
                                0x10e: '270°'
                            },
                            'default': 0x0
                        },
                        'desmume_frameskip': {
                            'label': 'Frameskip',
                            'options': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                            'default': '0'
                        }
                    }, EnvVariable['wasm'] || delete CoreOptionData['screen_rotation'];
                    break;
                case 'vb':
                case 'pce':
                    CoreOptionData = {};
                    break;
                case 'segaMS':
                case 'segaGG':
                case 'segaMD':
                case 'segaCD':
                    CoreOptionData = {
                        'genesis_plus_gx_no_sprite_limit': {
                            'label': 'No Sprite Limit',
                            'options': ['disabled', 'enabled'],
                            'default': 'disabled',
                            'netplay': !0x0
                        },
                        'genesis_plus_gx_overclock': {
                            'label': 'CPU speed',
                            'options': ['100%', '125%', '150%', '175%', '200%'],
                            'default': '100%',
                            'netplay': !0x0
                        },
                        'genesis_plus_gx_sound_output': {
                            'label': 'Sound output',
                            'options': ['stereo', 'mono'],
                            'default': 'stereo',
                            'netplay': !0x0
                        }
                    };
                    break;
                case 'sega32x':
                    CoreOptionData = {
                        'picodrive_sprlim': {
                            'label': 'No sprite limit',
                            'options': ['disabled', 'enabled'],
                            'default': 'disabled',
                            'netplay': !0x0
                        }
                    };
                    break;
                case 'segaSaturn':
                    CoreOptionData = {
                        'yabause_frameskip': {
                            'label': 'Frameskip',
                            'options': ['disabled', 'enabled'],
                            'default': 'disabled'
                        }
                    };
                    break;
                case 'msx':
                    CoreOptionData = {
                        'bluemsx_nospritelimits': {
                            'label': 'No Sprite Limit',
                            'options': ['OFF', 'ON'],
                            'default': 'OFF'
                        }
                    };
                    break;
                case 'ws':
                case 'ngp':
                    CoreOptionData = {};
                    break;
                case 'jaguar':
                    CoreOptionData = {
                        'virtualjaguar_usefastblitter': {
                            'label': 'Fast Blitter',
                            'options': ['disabled', 'enabled'],
                            'default': 'disabled'
                        },
                        'virtualjaguar_bios': {
                            'label': 'Bios',
                            'options': ['disabled', 'enabled'],
                            'default': 'disabled'
                        }
                    };
                    break;
                case 'psx':
                    CoreOptionData = {
                        'pcsx_rearmed_vibration': {
                            'label': 'Enable Vibration',
                            'options': ['enabled', 'disabled'],
                            'default': 'enabled',
                            'netplay': !0x0
                        }
                    };
                    break;
                case 'arcade':
                case 'fba0.2.97.29':
                    CoreOptionData = {
                        'fba-aspect': {
                            'label': 'Aspect ratio',
                            'options': ['DAR', 'PAR'],
                            'default': 'DAR'
                        },
                        'fba-cpu-speed-adjust': {
                            'label': 'CPU overclock',
                            'options': ['100', '110', '120', '130', '140', '150', '160', '170', '180', '190', '200'],
                            'default': '100',
                            'netplay': !0x0
                        },
                        'fba-diagnostic-input': {
                            'label': 'Diagnostic Input',
                            'options': ['None', 'Hold Start', 'Start + A + B', 'Hold Start + A + B', 'Start + L + R', 'Hold Start + L + R', 'Hold Select', 'Select + A + B', 'Hold Select + A + B', 'Select + L + R', 'Hold Select + L + R'],
                            'default': 'None',
                            'netplay': !0x0
                        },
                        'fba-neogeo-mode': {
                            'label': 'Force Neo Geo mode',
                            'options': ['MVS', 'AES', 'UNIBIOS', 'DIPSWITCH'],
                            'default': 'MVS',
                            'netplay': !0x0
                        }
                    };
                    break;
                case 'mame2003':
                case 'mame2010':
                case 'mame':
                    CoreOptionData = {};
                    break;
                default:
                    CoreOptionData = {};
            };
            if (ejs_loader['coreOptions'] && I.array(ejs_loader['coreOptions'])) {
                I.toArr(ejs_loader['coreOptions'], (entry, index) => {
                    CoreOptionData[entry['key']] = {
                        'label': entry['label'],
                        'options': entry['options'],
                        'default': entry['default'],
                        'netplay': entry['netplay']
                    };
                });
            }
            I.assign(ejs_data['coreoptions'], CoreOptionData);
            return CoreOptionData;
        },
        'supportNetPlay': function () {

            return !!EnvVariable['websocket'] && ('segaGG' != this['system'] && (!this['lightgun'] && !this['mouse'] && 'openbor' != this['system']));
        },
        'isNetPlay': function () {},
        'findElements': function () {
            const E = this;
            E['elements']['controls'] = E['Selector'](E['config']['selectors']['controls']['wrapper']);
            I.toArr(['play', 'pause', 'restart', 'mute', 'settings', 'fullscreen', 'saveState', 'loadState', 'disk', 'gamepad', 'netplay', 'cheat', 'cache', 'autosave', 'recorder', 'fastforward'], v => {
                let x = v.replace(/([A-Z])/, (a, b, c) => '-' + b.toLocaleLowerCase()),
                    elm = E['SelectorAll']('[data-btn="' + x + '"]');
                if (elm) E['elements']['buttons'] = elm;
            });
            E['elements']['inputs'] = {
                'volume': E['Selector'](E['config']['selectors']['inputs']['volume'])
            };
            return !0x0;
        },
        'createIcon': function (name, _0xece231) {
            var ElmSvg = document['createElementNS']('http://www.w3.org/2000/svg', 'svg');
            setElmAttr(ElmSvg, _0x288469(_0xece231, {
                'role': 'presentation',
                'focusable': 'false'
            }));
            ElmSvg.innerHTML = getSvgIcon(name);
            return ElmSvg;
        },
        'createLabel': function (_0x3f0e85) {
            var _0x52fcaf = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : {},
                _0x580924 = this.Geti18n(_0x3f0e85);
            'saveState' == _0x3f0e85 && (_0x580924 += '<span class="' ['concat'](this['config']['classNames']['hotkey'], '"> (Shift + F2)</span>')), 'loadState' == _0x3f0e85 && (_0x580924 += '<span class="' ['concat'](this['config']['classNames']['hotkey'], '"> (Shift + F4)</span>'));
            var _0x2cc382 = {};
            _0x2cc382[_0x52fcaf['class']] = !0x0, _0x2cc382[this['config']['classNames']['hidden']] = !0x0;
            var _0x3ee770 = Object['assign']({}, _0x52fcaf, {
                'class': [_0x52fcaf['class'], this['config']['classNames']['tooltip']]['filter'](Boolean)['join'](' ')
            });
            return createElm('span', _0x3ee770, _0x580924);
        },
        'createBadge': function (_0x5bd767) {
            
            if (I.empty(_0x5bd767)) return null;
            console.log(_0x5bd767);
            var _0x3974e6 = createElm('span', {
                'class': this['config']['classNames']['menu']['value']
            });
            return _0x3974e6['appendChild'](createElm('span', {
                'class': this['config']['classNames']['menu']['badge']
            }, _0x5bd767)), _0x3974e6;
        },
        'createButton': function (_0xab1afc, _0x483374) {
            var _0x18cedc, _0x3c0ebc, _0xc288ad, _0xd18d6a, _0xa67a7a = createElm('button'),
                _0x15b7b8 = Object['assign']({}, _0x483374),
                _0x4fabd0 = _0x378cd2(_0xab1afc),
                _0x4bdd84 = !0x1;
            'type' in _0x15b7b8 || (_0x15b7b8['type'] = 'button');
            var _0xf6d062 = getClassName('ejs__control');
            switch ('class' in _0x15b7b8 ? _0x15b7b8['class']['includes'](_0xf6d062) || (_0x15b7b8['class'] += ' ' ['concat'](_0xf6d062)) : _0x15b7b8['class'] = _0xf6d062, _0xab1afc) {
                case 'play':
                    _0x4bdd84 = !0x0, _0x18cedc = 'play', _0xc288ad = 'pause', _0x3c0ebc = 'play', _0xd18d6a = 'pause';
                    break;
                case 'mute':
                    _0x4bdd84 = !0x0, _0x18cedc = 'mute', _0xc288ad = 'unmute', _0x3c0ebc = 'volume', _0xd18d6a = 'muted';
                    break;
                case 'fullscreen':
                    _0x4bdd84 = !0x0, _0x18cedc = 'enterFullscreen', _0xc288ad = 'exitFullscreen', _0x3c0ebc = 'enter-fullscreen', _0xd18d6a = 'exit-fullscreen';
                    break;
                default:
                    _0x18cedc = _0x4fabd0, _0x3c0ebc = _0xab1afc;
            }
            return _0x4bdd84 ? (_0xa67a7a['appendChild'](ejs_data['createIcon']['call'](this, _0xd18d6a, {
                'class': getClassName('icon--pressed')
            })), _0xa67a7a['appendChild'](ejs_data['createIcon']['call'](this, _0x3c0ebc, {
                'class': getClassName('icon--not-pressed')
            })), _0xa67a7a['appendChild'](ejs_data['createLabel']['call'](this, _0xc288ad, {
                'class': getClassName('icon--pressed')
            })), _0xa67a7a['appendChild'](ejs_data['createLabel']['call'](this, _0x18cedc, {
                'class': getClassName('icon--not-pressed')
            }))) : (_0xa67a7a['appendChild'](ejs_data['createIcon']['call'](this, _0x3c0ebc)), _0xa67a7a['appendChild'](ejs_data['createLabel']['call'](this, _0x18cedc))), _0x288469(_0x15b7b8, resultAttrData(this['config']['selectors']['buttons'][_0x4fabd0], _0x15b7b8)), setElmAttr(_0xa67a7a, _0x15b7b8), 'play' === _0x4fabd0 ? (I.array(this['elements']['buttons'][_0x4fabd0]) || (this['elements']['buttons'][_0x4fabd0] = []), this['elements']['buttons'][_0x4fabd0]['push'](_0xa67a7a)) : this['elements']['buttons'][_0x4fabd0] = _0xa67a7a, _0xa67a7a;
        },
        'createRange': function (_0x118684, _0x55c993) {
            var _0x884a80 = createElm('input', _0x288469(resultAttrData(this['config']['selectors']['inputs'][_0x118684]), {
                'type': 'range',
                'min': 0x0,
                'max': 0x64,
                'step': 0.1,
                'value': 0x0,
                'autocomplete': 'off',
                'role': 'slider',
                'aria-label': this.Geti18n(_0x118684),
                'aria-valuemin': 0x0,
                'aria-valuemax': 0x64,
                'aria-valuenow': 0x0
            }, _0x55c993));
            return this['elements']['inputs'][_0x118684] = _0x884a80, ejs_data['updateRangeFill']['call'](this, _0x884a80), _0x884a80;
        },
        'bindMenuItemShortcuts': function (_0x330429, _0x7ff691) {
            var _0xb35c69 = this;
            addEvent(_0x330429, 'keydown keyup', function (_0x3a1488) {

                if ([0x20, 0x26, 0x27, 0x28]['includes'](_0x3a1488['which']) && (_0x3a1488['preventDefault'](), _0x3a1488['stopPropagation'](), 'keydown' !== _0x3a1488['type'])) {
                    var _0xedfdac, _0xc18a0f = elmInNodeList(_0x330429, '[role="menuitemradio"]');
                    if (!_0xc18a0f && [0x20, 0x27]['includes'](_0x3a1488['which'])) ejs_data['showMenuPanel']['call'](_0xb35c69, _0x7ff691, !0x0);
                    else 0x20 !== _0x3a1488['which'] && (0x28 === _0x3a1488['which'] || _0xc18a0f && 0x27 === _0x3a1488['which'] ? (_0xedfdac = _0x330429['nextElementSibling'], I.elm(_0xedfdac) || (_0xedfdac = _0x330429['parentNode']['firstElementChild'])) : (_0xedfdac = _0x330429['previousElementSibling'], I.elm(_0xedfdac) || (_0xedfdac = _0x330429['parentNode']['lastElementChild'])), tabFocusAddRemoveClass['call'](_0xb35c69, _0xedfdac, !0x0));
                }
            }, !0x1);
            addEvent(_0x330429, 'keyup', function (_0x198ac7) {

                0xd === _0x198ac7['which'] && ejs_data['focusFirstMenuItem']['call'](_0xb35c69, null, !0x0);
            });
        },
        'createMenuItem': function (_0x58afec) {
            var E = this,
                optValue = _0x58afec['value'],
                optList = _0x58afec['list'],
                optType = _0x58afec['type'],
                optTitle = _0x58afec['title'],
                optbadge = _0x58afec['badge'],
                ElmBadge = void 0x0 === optbadge ? null : optbadge,
                _0xb9dfbf = _0x58afec['checked'],
                _0x4f957f = void 0x0 !== _0xb9dfbf && _0xb9dfbf,
                _0x4d8f4c = resultAttrData(this['config']['selectors']['inputs'][optType]),
                ElmBtn = createElm('button', _0x288469(_0x4d8f4c, {
                    'type': 'button',
                    'role': 'menuitemradio',
                    'class': '' ['concat'](this['config']['classNames']['control'], ' ')['concat'](_0x4d8f4c['class'] ? _0x4d8f4c['class'] : '')['trim'](),
                    'aria-checked': _0x4f957f,
                    'value': optValue
                })),
                ElmSpan = createElm('span');
            ElmSpan.innerHTML = T.getLang(optTitle);
             I.elm(ElmBadge) && ElmSpan['appendChild'](ElmBadge);
             ElmBtn['appendChild'](ElmSpan);
             Object['defineProperty'](ElmBtn, 'checked', {
                'enumerable': !0x0,
                'get': function () {

                    return 'true' === ElmBtn['getAttribute']('aria-checked');
                },
                'set': function (bool) {

                    bool && Array['from'](ElmBtn['parentNode']['children'])['filter'](function (nelm) {
                        return elmInNodeList(nelm, '[role="menuitemradio"]');
                    })['forEach'](function (nelm) {

                        return nelm['setAttribute']('aria-checked', 'false');
                    });
                    ElmBtn['setAttribute']('aria-checked', bool ? 'true' : 'false');
                }
            });
            var coreOptions = ejs_data['coreoptions'];
            this['listeners']['bind'](ElmBtn, 'click keyup', function (event) {
                if (!I.keyevt(event) || 0x20 === event['which']) {
                    console.log(event['preventDefault']);
                    ElmBtn['checked'] = !0x0;
                    Object['keys'](ejs_data['normalOptions'])['includes'](optType) && ejs_data['updateNormalOptions']['call'](E, optType, optValue);
                    Object['keys'](coreOptions)['includes'](optType) && (coreOptions[optType]['netplay'] && ejs_Controller['connected'] ? ejs_Controller['connection']['isInitiator'] && ejs_data['updateCoreOptions']['call'](E, optType, optValue) : ejs_data['updateCoreOptions']['call'](E, optType, optValue));
                    ejs_data['showMenuPanel']['call'](E, 'home', I.keyevt(event))
                }
            }, optType, !0x1);
            ejs_data['bindMenuItemShortcuts']['call'](this, ElmBtn, optType), optList['appendChild'](ElmBtn);
        },
        'updateVolume': function () {

            I.elm(this['elements']['inputs']['volume']) && ejs_data['setRange']['call'](this, this['elements']['inputs']['volume'], this['muted'] ? 0x0 : this['volume']), I.elm(this['elements']['buttons']['mute']) && (this['elements']['buttons']['mute']['pressed'] = this['muted'] || 0x0 === this['volume']);
        },
        'setRange': function (_0x21ac17) {
            var _0x16122e = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x0;
            I.elm(_0x21ac17) && (_0x21ac17['value'] = _0x16122e, ejs_data['updateRangeFill']['call'](this, _0x21ac17));
        },
        'updateRangeFill': function (_0x4a08d7) {
            var _0x5d0873 = I.evt(_0x4a08d7) ? _0x4a08d7['target'] : _0x4a08d7;
            if (I.elm(_0x5d0873) && 'range' === _0x5d0873['getAttribute']('type')) {
                if (elmInNodeList(_0x5d0873, this['config']['selectors']['inputs']['volume'])) {
                    var _0xd7af80 = 0x64 * _0x5d0873['value'];
                    _0x5d0873['setAttribute']('aria-valuenow', _0xd7af80), _0x5d0873['setAttribute']('aria-valuetext', '' ['concat'](_0xd7af80['toFixed'](0x1), '%'));
                } else _0x5d0873['setAttribute']('aria-valuenow', _0x5d0873['value']);
                ejs_Browser['isWebkit'] && _0x5d0873['style']['setProperty']('--value', '' ['concat'](_0x5d0873['value'] / _0x5d0873['max'] * 0x64, '%'));
            }
        },
        'toggleMenuButton': function (_0x5dbc75, _0x56b5f5) {

            toggleHidden(this['elements']['settings']['buttons'][_0x5dbc75], !_0x56b5f5);
        },
        'updateNormalOptions': function (_0x49b545, _0x1e4fab) {

            if ('mypanel' === _0x49b545) {
                console.log(_0x49b545, _0x1e4fab);
                if ('importSates' == _0x1e4fab) {
                    this['game']['stateloadField']['click']();
                }
            }
            this['elements']['settings']['buttons'][_0x49b545]['querySelector']('.' ['concat'](this['config']['classNames']['menu']['value'])).innerHTML = T.getLang(ejs_data['normalOptions'][_0x49b545]['options'][_0x1e4fab]);
            var _0x461986 = {};
            _0x461986[_0x49b545] = _0x1e4fab;
            ejs_data['storage']['set'](_0x461986);
            'shader' === _0x49b545 && ejs_Controller['setShader'](_0x1e4fab);
            'virtual-gamepad' === _0x49b545 && ejs_Controller['toggleVirtualGamepad']['call'](this, 'enabled' === _0x1e4fab);
            if ('mypanel' === _0x49b545) {
                console.log(_0x49b545, _0x1e4fab);
            }

        },
        'updateCoreOptions': function (coreKey, coreData) {
            console.log('更新 应用核心');
            if ('nds' == this['system'] && !EnvVariable['wasm']) return !0x0;
            if(!ejs_data['storage']['data']['core-options'])ejs_data['storage']['data']['core-options'] = {};
            ejs_data['storage']['data']['core-options'][coreKey] = coreData;
            if('psx' === this['system']){
                setTimeout(function () {

                'pcsx_rearmed_frameskip' != coreKey && 'pcsx_rearmed_memcard2' != coreKey && ejs_Controller['CF']('setVariable', coreKey, coreData);
            }, 0x64), setTimeout(function () {}, 0xc8)
            }else{
                setTimeout(function () {

                ejs_Controller['CF']('setVariable', coreKey, coreData);
            }, 0x32)
            }
            if ('nds' === this['system'] && EnvVariable['wasm']) {
                var ElmCanvas = this['elements']['wrapper']['querySelector']('canvas');
                if ('screen_rotation' === coreKey) switch (ElmCanvas['style']['transform'] = 'rotate(' + coreData + 'deg)', coreData) {
                    case '0':
                        ejs_Controller['CF']('setVariable', 'desmume_input_rotation', '0');
                        break;
                    case '90':
                        ejs_Controller['CF']('setVariable', 'desmume_input_rotation', '270');
                        break;
                    case '180':
                        ejs_Controller['CF']('setVariable', 'desmume_input_rotation', '180');
                        break;
                    case '270':
                        ejs_Controller['CF']('setVariable', 'desmume_input_rotation', '90');
                }
            }
            if ('arcade' === this['system'] || 'fba0.2.97.29' === this['system']) {
                var ElmCanvas = this['elements']['wrapper']['querySelector']('canvas');
                ElmCanvas['height'] = 'fba-aspect' === coreKey && 'PAR' === coreData ? ElmCanvas['width'] / 0x10 * 0x9 : ElmCanvas['width'] / 0x4 * 0x3;
            }
            var coreOptions = ejs_data['coreoptions'];
            ejs_data['storage']['data']['core-options'][coreKey] = coreData;
            ejs_data['storage']['set']();
            if (coreOptions[coreKey]) {
                if (this['elements']['settings']['buttons'][coreKey]) {
                    var ElmOpt = this['elements']['settings']['buttons'][coreKey]['querySelector']('.' ['concat'](this['config']['classNames']['menu']['value']));
                    if (ElmOpt) {
                        ElmOpt.innerHTML = T.getLang(I.obj(coreOptions[coreKey]['options']) ? coreOptions[coreKey]['options'][coreData] : coreData);
                    }else{
                        console.log(ElmOpt)
                    }
                }

            }
        },
        'setOptionMenuItem': function (_0x22245a, _0x314866) {
            var E = this,
                ElmMenuHome = this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]'),
                ElmMenuTop = this['elements']['settings']['popup']['children'][0x0];
            Object['keys'](_0x22245a)['forEach'](function (itemname) {

                var itemElm = createElm('button', _0x288469(resultAttrData(E['config']['selectors']['buttons']['settings']), {
                    'type': 'button',
                    'class': getClassName({
                        'ejs__control': !0x0,
                        'ejs__control--forward': !0x0
                    }),
                    'role': 'menuitem',
                    'item': itemname,
                    'aria-haspopup': !0x0
                }));
                addEvent(itemElm, 'pointerup', function (e) {
                    console.log(e);
                    ejs_data['showMenuPanel']['call'](E, itemname, !0x1);
                });
                var _0x297e7a, _0x31ed55 = createElm('span', null, T.getLang(_0x22245a[itemname]['label'])),
                    _0x3e234f = createElm('span', {
                        'class': E['config']['classNames']['menu']['value']
                    });
                I.obj(_0x314866) && (_0x297e7a = _0x314866[itemname]);
                I.empty(_0x297e7a) && (_0x297e7a = _0x22245a[itemname]['default']);

                 _0x3e234f.innerHTML = T.getLang(
                    I.obj(_0x22245a[itemname]['options'])? _0x22245a[itemname]['options'][_0x297e7a]: _0x297e7a
                    );
                _0x31ed55['appendChild'](_0x3e234f), itemElm['appendChild'](_0x31ed55), ElmMenuHome['appendChild'](itemElm);
                var _0x59afee = createElm('div', {
                        'data-pane': escape(itemname),
                        'hidden': ''
                    }),
                    _0x24ad2f = createElm('button', {
                        'type': 'button',
                        'class': getClassName({
                            'ejs__control': !0x0,
                            'ejs__control--back': !0x0
                        })
                    });
                _0x24ad2f['appendChild'](createElm('span', {
                    'aria-hidden': !0x0
                }, T.getLang(_0x22245a[itemname]['label'])));

                _0x24ad2f['appendChild'](createElm('span', {
                    'class': getClassName('ejs__sr-only')
                }, E.Geti18n('menuBack')));
                addEvent(_0x59afee, 'keydown', function (_0x545bab) {
                    0x25 === _0x545bab['which'] && (_0x545bab['preventDefault'](), _0x545bab['stopPropagation'](), ejs_data['showMenuPanel']['call'](E, 'home', !0x0));
                }, !0x1);
                addEvent(_0x24ad2f, 'pointerup', function () {

                    ejs_data['showMenuPanel']['call'](E, 'home', !0x1);
                });
                _0x59afee['appendChild'](_0x24ad2f);
                 _0x59afee['appendChild'](createElm('div', {
                    'role': 'menu'
                }));
                ElmMenuTop['appendChild'](_0x59afee);
                E['elements']['settings']['buttons'][itemname] = itemElm, E['elements']['settings']['panels'][itemname] = _0x59afee;
                var _0x171571 = _0x59afee['querySelector']('[role="menu"]');
                ! function (_0x9e4960) {

                    if (I.elm(_0x9e4960)) {
                        for (var _0x2c9689 = _0x9e4960['childNodes']['length']; _0x2c9689 > 0x0;) _0x9e4960['removeChild'](_0x9e4960['lastChild']), _0x2c9689 -= 0x1;
                    }
                }(_0x171571);
                //console.log(_0x22245a[itemname]['options']);
                I.toArr(_0x22245a[itemname]['options'], entry => {
                    if (I.array(entry) && entry.length == 2) {
                        ejs_data['createMenuItem']['call'](E, {
                            'value': entry[0],
                            'list': _0x171571,
                            'type': itemname,
                            'title': entry[1],
                            'badge': null,
                            'checked': Boolean(_0x297e7a === entry[0])
                        });
                    } else {
                        ejs_data['createMenuItem']['call'](E, {
                            'value': entry,
                            'list': _0x171571,
                            'type': itemname,
                            'title': entry,
                            'badge': null,
                            'checked': Boolean(_0x297e7a === entry)
                        });
                    }
                });
            });
        },
        'setNormalOptionsMenu': function () {
            var E = this,
                _0x46fcad = {};
            _0x46fcad['orientation'] = ejs_data['storage']['get']('orientation');
            _0x46fcad['shader'] = ejs_data['storage']['get']('shader');
            E['touch'] ? (_0x46fcad['virtual-gamepad'] = ejs_data['storage']['get']('virtual-gamepad'), E['addEvent'](E['elements']['container'], 'start-game', function () {

                ('enabled' === _0x46fcad['virtual-gamepad'] || I.empty(_0x46fcad['virtual-gamepad'])) && ejs_Controller['toggleVirtualGamepad']['call'](E, !0x0);
            })) : delete ejs_data['normalOptions']['virtual-gamepad'];

            ejs_data['setOptionMenuItem']['call'](this, ejs_data['normalOptions'], _0x46fcad);


            E['addEvent'](E['elements']['container'], 'start-game', function () {
                /**
                 * 游戏启动时 加载核心配置信息
                 * 
                 *  */
                var coreOptions = E['callaction']('loadCoreOptions', ejs_loader['coreOptions']);
                var storageOption = ejs_data['storage']['data']['core-options']||{};
                ejs_data['setOptionMenuItem']['call'](E, coreOptions,storageOption);
                I.toArr(storageOption, entry => {
                    /*
                     * 从本地数据更新核心默认数据
                     */
                    ejs_data['updateCoreOptions']['call'](E, entry[0], entry[1]);
                });
            });
        },
        'updateCoreOptionMenuItems': function () {
            var _0x2365e6 = this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]'),
                _0x17e7d2 = ejs_data['coreoptions'];
            ejs_Controller['connected'] ? Object['keys'](_0x17e7d2)['forEach'](function (_0x2cc61f) {

                _0x17e7d2[_0x2cc61f]['netplay'] && _0x2365e6['querySelector']('[item="' ['concat'](_0x2cc61f, '"]'))['setAttribute']('disabled', '');
            }) : Object['keys'](_0x17e7d2)['forEach'](function (_0x47baa7) {

                _0x2365e6['querySelector']('[item="' ['concat'](_0x47baa7, '"]'))['removeAttribute']('disabled');
            });
        },
        'setCoreOptionsMenu': function (bool) {

            console.log('核心设置');
            this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]');
            this['elements']['settings']['popup']['children'][0x0];
            var coreoptions = ejs_data['getCoreOptions']['call'](this, bool);
            ejs_data['setOptionMenuItem']['call'](this, coreoptions, ejs_data['storage']['data']['core-options']||{});
        },
        'checkMenu': function () {
            var _0x2b5fce = this['elements']['settings']['buttons'];
            !I.empty(_0x2b5fce) && Object['values'](_0x2b5fce)['some'](function (_0x162c26) {

                return !_0x162c26['hidden'];
            }), toggleHidden(this['elements']['settings']['menu'], !0x1);
        },
        'focusFirstMenuItem': function (elm) {
            var bool = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] && arguments[0x1];
            if (!this['elements']['settings']['popup']['hidden']) {
                I.elm(elm) || (elm = Object['values'](this['elements']['settings']['panels'])['find'](function (_0x1b8186) {

                    return !_0x1b8186['hidden'];
                }));
                var subelm = elm['querySelector']('[role^="menuitem"]');
                tabFocusAddRemoveClass['call'](this, subelm, bool);
            }
        },
        'toggleMenu': function (ebool) {
            var E = this,
                ElmMenuPopup = this['elements']['settings']['popup'],
                ElmBtnSetting = this['elements']['buttons']['settings'],
                Elmtop = ElmMenuPopup['children'][0];
            if (I.elm(ElmMenuPopup) && I.elm(ElmBtnSetting)) {
                var isPopuphidden = ElmMenuPopup['hidden'],
                    isPopuphidden2 = isPopuphidden;
                if (I.bool(ebool)) isPopuphidden2 = ebool;
                else {
                    if (I.keyevt(ebool) && 0x1b === ebool['which']) isPopuphidden2 = !0x1;
                    else {
                        if (I.evt(ebool)) {
                            var elm = ElmMenuPopup['contains'](ebool['target']);
                            if (elm || !elm && ebool['target'] !== ElmBtnSetting && isPopuphidden2) return;
                        }
                    }
                }
                ElmBtnSetting['setAttribute']('aria-expanded', isPopuphidden2);
                toggleHidden(ElmMenuPopup, !isPopuphidden2);
                elmAddRemoveClass(this['elements']['container'], this['config']['classNames']['menu']['open'], isPopuphidden2);
                isPopuphidden2 && I.keyevt(ebool) ? ejs_data['focusFirstMenuItem']['call'](this, null, !0x0) : isPopuphidden2 || isPopuphidden || tabFocusAddRemoveClass['call'](this, ElmBtnSetting, I.keyevt(ebool));

                if (!Elmtop['style']['height']) {
                    var o = Elmtop.querySelector('[data-pane="home"]').getBoundingClientRect();
                    I.setStyle(Elmtop, {
                        width: o.width + 'px',
                        height: o.height + 'px'
                    });
                }
            }
        },
        'showLoadStatePanel': function () {},
        'showMenuPanel': function (itemname, bool) {
            //底部菜单 设置菜单
            console.log('设置菜单');
            const E = this;
            var Elmtop = E['elements']['settings']['popup']['children'][0],
                ElmPane = E['Selector']('[data-pane="' + (itemname || 'home') + '"]');
            if (I.elm(ElmPane)) {
                if (itemname) {
                    if ('ontransitionend' in document) {
                        I.toArr(E['SelectorAll']('[data-pane]'), elm => {
                            if (!elm.hidden) {
                                elm.hidden = true;
                            }
                        });
                        T.once(Elmtop, 'transitionend', e => {
                            ElmPane.classList.remove('active');
                        });
                    }
                }
                ElmPane.classList.add('active');
                var sizePane = ElmPane.getBoundingClientRect();
                I.setStyle(Elmtop, {
                    width: sizePane['width'] + 'px',
                    height: sizePane['height'] + 'px'
                });
                ElmPane.hidden = false;
            }
            ejs_data['focusFirstMenuItem']['call'](E, ElmPane, !0);
        },
        'setLoadState': function (_0x27ab32, _0x469e41) {

            _0x27ab32['appendChild'](ejs_data['createButton']['call'](this, 'load-state', {
                'aria-haspopup': !0x0,
                'aria-expanded': !0x1
            }));
            var _0x578616 = createElm('div', {
                    'class': getClassName({
                        'ejs__dialog': !0x0,
                        'ejs__load-state__container': !0x0
                    }),
                    'hidden': ''
                }),
                _0x266c9a = createElm('div');
            _0x578616['appendChild'](_0x266c9a);
            this.Selector('.' ['concat'](getClassName('ejs__dialogs')))['appendChild'](_0x578616), this['elements']['dialogs']['loadState'] = _0x578616;
        },
        'setDisk': function (_0x13c7f3, _0x1030c8) {
            var _0x5dcb38 = createElm('div', {
                'class': getClassName('ejs__disk')
            });
            _0x5dcb38['appendChild'](ejs_data['createButton']['call'](this, 'disk', {
                'aria-haspopup': !0x0,
                'aria-expanded': !0x1
            }));
            var _0x29d526 = createElm('div', {
                    'class': getClassName('ejs__disk__container'),
                    'hidden': ''
                }),
                _0x194874 = createElm('div');
            _0x29d526['appendChild'](_0x194874), _0x5dcb38['appendChild'](_0x29d526), _0x13c7f3['appendChild'](_0x5dcb38);
        },
        'setGamepad': function (_0x1004e1, _0x463ef2) {
            var _0x3dd6b3 = ejs_data['createButton']['call'](this, 'gamepad', {
                'aria-haspopup': !0x0,
                'aria-expanded': !0x1
            });
            _0x1004e1['appendChild'](_0x3dd6b3);
            var _0x10864b = createElm('div', {
                    'class': getClassName({
                        'ejs__dialog': !0x0,
                        'ejs__gamepad__container': !0x0
                    }),
                    'hidden': ''
                }),
                _0x2b7c43 = createElm('div');
            _0x10864b['appendChild'](_0x2b7c43), this.Selector('.' ['concat'](getClassName('ejs__dialogs')))['appendChild'](_0x10864b), this['elements']['dialogs']['gamepad'] = _0x10864b;
        },
        'setCheat': function (_0x291c51, _0x1b2e92) {
            var ElmBtnCheat = ejs_data['createButton']['call'](this, 'cheat', {
                'aria-haspopup': !0x0,
                'aria-expanded': !0x1
            });
            _0x291c51['appendChild'](ElmBtnCheat);
            var _0x15ed27 = createElm('div', {
                    'class': getClassName({
                        'ejs__dialog': !0x0,
                        'ejs__cheat__container': !0x0
                    }),
                    'hidden': ''
                }),
                _0x45b466 = createElm('div');
            _0x15ed27['appendChild'](_0x45b466);
            this.Selector('.' ['concat'](getClassName('ejs__dialogs')))['appendChild'](_0x15ed27);
            this['elements']['dialogs']['cheat'] = _0x15ed27;
        },
        'setNetplayWidgets': function () {
            var ElmNetPlayStatus = createElm('div', {
                    'class': getClassName({
                        'ejs__widget': !0x0,
                        'ejs__widget_netplay': !0x0
                    })
                }),
                _0xd97053 = createElm('div');
            ElmNetPlayStatus['appendChild'](_0xd97053);
            this.Selector(getClassName('ejs__widgets', !0))['appendChild'](ElmNetPlayStatus);
            this['elements']['widgets']['netplay'] = ElmNetPlayStatus;
        },
        'setControllToggleWidgets': function () {
            const E = this;
            var
                ElmMobileMenu = createElm('div', {
                    'class': getClassName({
                        'ejs__widget': !0x0,
                        'ejs__widget_controls_toggle': !0x0
                    })
                }, getSvgIcon('ctrltoggle')),
                _0x168c70 = createElm('div');
            ElmMobileMenu['appendChild'](_0x168c70);
            this.Selector('.' ['concat'](getClassName('ejs__widgets')))['appendChild'](ElmMobileMenu);
            this['elements']['widgets']['controlToggle'] = ElmMobileMenu;

            /*
            addEvent(this['elements']['container'], 'click touchstart', function (_0x391cad) {

                if (!E['started']) return !0x1;
                E['elements']['controls']['contains'](_0x391cad['target']) ||  ElmMobileMenu['contains'](_0x391cad['target']) || (toggleHidden(E['elements']['controls']['querySelector'](getClassName('ejs__menu__container', 1)), !0x0), E['callaction']('toggleControls', !0x1), E['elements']['controls']['classList']['toggle'](getClassName('ejs__controls_show'), !0x1));
            });
            */
            T.on(ElmMobileMenu, 'pointerdown', function (event) {
                //手机模式 激活 底部菜单
                //let bool = E['elements']['controls']['classList']['toggle'](getClassName('ejs__controls_show'));
                if (!E['elements']['controls']['classList']['toggle'](getClassName('ejs__controls_show'))) {
                    E['elements']['settings']['popup'].hidden = true;
                }
                T.stopEvent(event);
            });
            E['addEvent'](E['elements']['container'], 'start-game', function () {
                ejs_loader['Module']['_event_load_save_files'] && ejs_loader['Module']['cwrap']('event_load_save_files', '', [])();
                var _0x1205b7 = createElm('div', {
                        'class': getClassName({
                            'ejs__widget': !0x0,
                            'ejs__widget_load_srm': !0x0
                        }),
                        'title': T.getLang('Import save file')
                    }, getSvgIcon('loadsrm')),
                    _0x26e7ee = createElm('div');
                _0x1205b7['appendChild'](_0x26e7ee);
                E['Selector']('.' ['concat'](getClassName('ejs__widgets')))['appendChild'](_0x1205b7);
                addEvent(_0x1205b7, 'click', function (_0x3ea374) {
                    E['callaction']('upload',
                        async file => {
                                DISK.MKFILE(E['gameSavePath'], new Uint8Array(await file.arrayBuffer()), 1);
                                if (ejs_loader['Module']['_event_load_save_files']) {
                                    ejs_loader['Module']['_event_load_save_files']();
                                    ejs_Controller['restartGame']();
                                } else {
                                    location.reload();
                                }

                            },
                            null, {
                                'accept': E['system']['includes'](['psx', 'psx-legacy']) ? '.srm,.mcr' : '.srm,.sav,.dsv,.mcr',
                            })
                    _0x3ea374['stopPropagation']();
                });
                var _0xa3c7ec = createElm('div', {
                        'class': getClassName({
                            'ejs__widget': !0x0,
                            'ejs__widget_save_srm': !0x0
                        }),
                        'title': T.getLang('Export save file')
                    }, getSvgIcon('savesrm')),
                    _0xc5a39e = createElm('div');
                _0xa3c7ec['appendChild'](_0xc5a39e);
                E['Selector']('.' ['concat'](getClassName('ejs__widgets')))['appendChild'](_0xa3c7ec);
                addEvent(_0xa3c7ec, 'click', function (event) {
                    //导出存档
                    let savePath = '' != E['config']['savename'] ? E['savefullpath'] + '/' + E['config']['savename'] + '.' + E['gameSaveExt'] : E['gameSavePath'];
                    if (ejs_loader.FS.analyzePath(savePath).exists) {
                        T.down(E['gameName'] + '.' + E['gameSaveExt'], ejs_loader.FS.readFile(savePath));
                    }
                    event['stopPropagation']();
                });
            });
        },
        'setNetplay': function (_0x119c61, _0x400c58) {

            _0x119c61['appendChild'](ejs_data['createButton']['call'](this, 'netplay', {
                'aria-haspopup': !0x0,
                'aria-expanded': !0x1
            }));
            var _0x55fa34 = createElm('div', {
                    'class': getClassName({
                        'ejs__dialog': !0x0,
                        'ejs__netplay__container': !0x0
                    }),
                    'hidden': ''
                }),
                _0x62d0c3 = createElm('div');
            _0x55fa34['appendChild'](_0x62d0c3), this.Selector('.' ['concat'](getClassName('ejs__dialogs')))['appendChild'](_0x55fa34), this['elements']['dialogs']['netplay'] = _0x55fa34, ejs_data['setNetplayWidgets']['call'](this);
        },
        'toggleContextMenu': function (_0x3a3fae, _0x27db2a) {

            if (hasClassName(_0x3a3fae['target'], getClassName('ejs__dialogs'))) {
                var _0x2f93f6 = ejs_data['contextMenu']['timer'];
                if (this['started']) {
                    var _0x4a5044 = this.Selector('.' ['concat'](getClassName('ejs__contextmenu'), ' ul'));
                    if (_0x27db2a) {
                        ejs_data['contextMenu']['style']['display'] = 'block', ejs_data['contextMenu']['style']['left'] = '' ['concat'](_0x3a3fae['layerX'], 'px'), ejs_data['contextMenu']['style']['top'] = '' ['concat'](_0x3a3fae['layerY'], 'px');
                        var _0x9ab66 = this.SelectorAll('.' ['concat'](getClassName('ejs__contextmenu'), ' ul li'));
                        if (Array['from'](_0x9ab66)['forEach'](function (_0x4129e7, _0x249f07) {}), null === _0x4a5044['getAttribute']('menu')) {
                            _0x4a5044['setAttribute']('menu', '');
                        }
                        _0x2f93f6 && clearTimeout(_0x2f93f6), _0x2f93f6 = setTimeout(function () {}, 0xfa0), ejs_data['contextMenu']['timer'] = _0x2f93f6;
                    } else ejs_data['contextMenu']['style']['display'] = 'none';
                }
            }
        },
        'fixMenuPos': function () {

            document['querySelectorAll']('' ['concat'](this['config']['selectors']['controls']['wrapper'], ' > div, ')['concat'](this['config']['selectors']['controls']['wrapper'], ' > button'))['forEach'](function (_0x37ef1b, _0xb102b) {
                var _0x4174e1 = getClassName('ejs__menu');
                _0x37ef1b['classList']['contains'](_0x4174e1) && _0xb102b % 0x2 == 0x0 ? _0x37ef1b['classList']['add'](getClassName('ejs__menu_right')) : _0x37ef1b['classList']['remove'](getClassName('ejs__menu_right'));
            });
        },
        'create': function (objData) {
            const E = this;
            ejs_data['storage'] = new ejs_storage(E, 'ejs_' ['concat'](E['system'], '_settings'));
            var ElmControls = createElm('div', resultAttrData(E['config']['selectors']['controls']['wrapper']));
            ElmControls['classList']['add'](getClassName('ejs__controls_show'));
            /**
             * 右键菜单
             */
            ejs_data['contextMenu'] = createElm('div', {
                'class': getClassName('ejs__contextmenu'),
                'style': 'position: absolute; display:none;z-index:9'
            });
            ejs_data['contextMenu'].innerHTML = `<ul><li><a href="#" onclick="return false">${T.getLang('Take Screenshot')}</a></li><li><a href="#" onclick="return false">${T.getLang('Quick Save (F2)')}</a></li><li><a href="#" onclick="return false">${T.getLang('Quick Load (F4)')}</a></li></ul>`;
            E['elements']['container']['appendChild'](ejs_data['contextMenu']);
            var ElmCacheContainer = createElm('div', {
                'class': getClassName({
                    'ejs__dialog': !0x0,
                    'ejs__cache__container': !0x0
                }),
                'hidden': ''
            });
            E.Selector('.' ['concat'](getClassName('ejs__dialogs')))['appendChild'](ElmCacheContainer);
            E['elements']['dialogs']['cache'] = ElmCacheContainer;
            var _0x44e6b3 = createElm('div', {
                'class': getClassName({
                    'ejs__dialog': !0x0,
                    'ejs__loading__container': !0x0
                }),
                'hidden': ''
            });
            E.Selector('.' ['concat'](getClassName('ejs__dialogs')))['appendChild'](_0x44e6b3);
            E['elements']['dialogs']['loading'] = _0x44e6b3;
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'restart')); //重启按钮
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'play')); //暂停继续按钮
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'save-state', {
                'aria-expanded': !0x1
            })); //即时存档按钮
            ejs_data['setLoadState']['call'](E, ElmControls, objData);
            ejs_data['setDisk']['call'](E, ElmControls, objData);
            ejs_data['supportNetPlay']['call'](E, ElmControls);
            ejs_data['setNetplay']['call'](E, ElmControls, objData);
            ejs_data['setGamepad']['call'](E, ElmControls, objData);
            ejs_data['setCheat']['call'](E, ElmControls, objData);
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'cache')); //缓存按钮
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'autosave')); //自动保存按钮
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'recorder')); //录制
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'fastforward')); //加速
            E['elements']['buttons']['recorder'].hidden = true;
            var ElmVolume = createElm('div', {
                'class': getClassName('ejs__volume')
            });
            ElmVolume['appendChild'](ejs_data['createButton']['call'](E, 'mute'));
            var _0x5abc43 = {
                'max': 0x1,
                'step': 0.01,
                'value': E['config']['volume']
            };
            ElmVolume['appendChild'](ejs_data['createRange']['call'](E, 'volume', _0x288469(_0x5abc43, {})));
            E['elements']['volume'] = ElmVolume, ElmControls['appendChild'](ElmVolume);
            var ElmBtnSetting = createElm('div', {
                'class': getClassName('ejs__menu')
            });
            ElmBtnSetting['appendChild'](ejs_data['createButton']['call'](E, 'settings', {
                'aria-haspopup': !0x0,
                'aria-expanded': !0x1
            }));
            var ElmMenuPopup = createElm('div', {
                    'class': getClassName('ejs__menu__container'),
                    'hidden': ''
                }),
                _0x2000e1 = createElm('div'),
                _0x1de3c4 = createElm('div', {
                    'data-pane': 'home'
                }),
                _0x4ad0af = createElm('div', {
                    'role': 'menu'
                });
            _0x1de3c4['appendChild'](_0x4ad0af);
            _0x2000e1['appendChild'](_0x1de3c4);
            E['elements']['settings']['panels']['home'] = _0x1de3c4;
            ElmMenuPopup['appendChild'](_0x2000e1);
            ElmBtnSetting['appendChild'](ElmMenuPopup);
            ElmControls['appendChild'](ElmBtnSetting);
            E['elements']['settings']['popup'] = ElmMenuPopup;
            E['elements']['settings']['menu'] = ElmBtnSetting;
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'fullscreen'));
            E['elements']['controls'] = ElmControls;
            ejs_data['setNormalOptionsMenu']['call'](E);
            ejs_data['setCoreOptionsMenu']['call'](E);
            ejs_data['setControllToggleWidgets']['call'](E);
            return ElmControls;
        },
        'inject': function () {
            const E = this;
            E['id'] = Math['floor'](10000 * Math['random']());
            var ControlsData = null;
            E['elements']['controls'] = null;
            var isCreate = !0x0;
            if (I.func(E['config']['controls'])) {
                E['config']['controls'] = E['config']['controls']['call'](E['props']);
            }
            if (!E['config']['controls']) E['config']['controls'] = [];
            if (!I.elm(E['config']['controls'])) {
                if (I.str(E['config']['controls'])) {
                    ControlsData = E['config']['controls'];
                } else {
                    ControlsData = ejs_data['create']['call'](E, {
                        'id': E['id'],
                        'seektime': E['config']['seekTime'],
                        'speed': E['speed'],
                        'quality': E['quality']
                    });
                    isCreate = !0x1
                }
            }
            var ElmControlsContainer, MkControls = data => I.RegRe(data, {
                'id': E['id']
            });
            if (isCreate) {
                if (I.str(E['config']['controls'])) {
                    ControlsData = MkControls(ControlsData);
                } else if (I.elm(ControlsData)) {
                    ControlsData.innerHTML = MkControls(ControlsData.innerHTML)
                }
            }
            if (I.str(E['config']['selectors']['controls']['container'])) {
                ElmControlsContainer = document['querySelector'](E['config']['selectors']['controls']['container'])
            }
            if (!I.elm(ElmControlsContainer)) {
                ElmControlsContainer = E['elements']['container']
            }
            ElmControlsContainer[I.elm(ControlsData) ? 'insertAdjacentElement' : 'insertAdjacentHTML']('afterbegin', ControlsData);
            if (!I.elm(E['elements']['controls'])) {
                ejs_data['findElements']['call'](E);
            }
            if (!I.empty(E['elements']['buttons'])) {
                var setElmProp = function (elm) {
                    var ElmControlPressed = E['config']['classNames']['controlPressed'];
                    I.define(elm, 'pressed', {
                        enumerable: !0x0,
                        get() {
                            return hasClassName(elm, ElmControlPressed);
                        },
                        set(bool) {
                            elmAddRemoveClass(elm, ElmControlPressed, bool);
                        }

                    });
                };
                I.toArr(E['elements']['buttons'], entry => I.array(entry[1]) || I.nodelist(entry[1]) ? I.toArr(entry[1], setElmProp) : setElmProp(entry[1]));
            }
            if (window['navigator']['userAgent']['includes']('Edge')) {
                tryHidden(ElmControlsContainer)
            }
            ejs_data['fixMenuPos']['call'](E);
        }
    };
    class ejs_fullscreen {
        constructor(E) {
            this['player'] = E;
            this['scrollPosition'] = {
                'x': 0x0,
                'y': 0x0
            };
            E['addEvent'](document, 'ms' === this['prefix'] ? 'MSFullscreenChange' : '' ['concat'](this['prefix'], 'fullscreenchange'),
                () => this.setActive()
            );
            this['update']();

        }
        update() {
            this['enabled'], elmAddRemoveClass(this['player']['elements']['container'], this['player']['config']['classNames']['fullscreen']['enabled'], this['enabled']);
        }
        enter() {
            this['enabled'] && (this['native'] ? this['prefix'] ? I.empty(this['prefix']) || this['target']['' ['concat'](this['prefix'], 'Request')['concat'](this['property'])]() : this['target']['requestFullscreen']() : this.scroll(!0x0));
        }
        exit() {
            if (this['enabled']) {
                if (this['native']) {
                    if (this['prefix']) {
                        if (!I.empty(this['prefix'])) {
                            var _0x50d92a = 'moz' === this['prefix'] ? 'Cancel' : 'Exit';
                            document['' ['concat'](this['prefix'])['concat'](_0x50d92a)['concat'](this['property'])]();
                        }
                    } else(document['cancelFullScreen'] || document['exitFullscreen'])['call'](document);
                } else this.scroll(!0x1);
            }
        }
        toggle() {
            this['active'] ? this['exit']() : this['enter']();
        }
        get enabled() {
            return this.native;
        }
        get active() {
            return !!this['enabled'] && (this['native'] ? (this['prefix'] ? document['' ['concat'](this['prefix'])['concat'](this['property'], 'Element')] : document['fullscreenElement']) === this['target'] : hasClassName(this['target'], this['player']['config']['classNames']['fullscreen']['fallback']));
        }
        get target() {
            return ejs_Browser['isEdge'] ? this['player']['game'] : this['player']['elements']['container'];
        }
        get native() {
            return !!(document['fullscreenEnabled'] || document['webkitFullscreenEnabled'] || document['mozFullScreenEnabled'] || document['msFullscreenEnabled']);
        }
        get property() {
            return 'moz' === this['prefix'] ? 'FullScreen' : 'Fullscreen';
        }
        get prefix() {
            if (I.func(document['exitFullscreen'])) return '';
            var _0x3c13c4 = '';
            ['webkit', 'moz', 'ms']['some'](function (_0x875897) {
                return !(!I.func(document['' ['concat'](_0x875897, 'ExitFullscreen')]) && !I.func(document['' ['concat'](_0x875897, 'CancelFullScreen')]) || (_0x3c13c4 = _0x875897, 0x0));
            });
            return _0x3c13c4;
        }
        scroll(bool) {
            let F = this,
                E = F['player'];
            if (bool) {
                F['scrollPosition'] = {
                    'x': window['scrollX'] || 0x0,
                    'y': window['scrollY'] || 0x0
                }
            } else {
                window['scrollTo'](F['scrollPosition']['x'], F['scrollPosition']['y'])
            }
            document['body']['style']['overflow'] = bool ? 'hidden' : '';
            elmAddRemoveClass(F['target'], E['config']['classNames']['fullscreen']['fallback'], bool);
            F.setActive();
        }
        setActive() {
            let F = this,
                E = F['player'];
            if (F['enabled']) {
                var elmF = E['elements']['buttons']['fullscreen'];
                if (I.elm(elmF)) {
                    elmF['pressed'] = F['active'];
                }
                E['callEvent'](F['target'], F['active'] ? 'enterfullscreen' : 'exitfullscreen', !0x0);
                if (!ejs_Browser['isIos']) _0xe124af['call'](E, F['target'], F['active']);
            }
        }
    }
    class ejs_listeners {
        lastKey = null;
        focusTimer = null;
        lastKeyDown = null;
        constructor(emulator) {
            let L = this;
            L['emulator'] = emulator;
            L['toggleMenu'] = L['toggleMenu']['bind'](L);
            L['setTabFocus'] = L['setTabFocus']['bind'](L);
            L['firstTouch'] = L['firstTouch']['bind'](L);
        }
        toggleMenu(_0x413d96) {

            ejs_data['toggleMenu']['call'](this['emulator'], _0x413d96);
        }
        firstTouch() {
            var _0x3f3947 = this['emulator'],
                _0x3b3926 = _0x3f3947['elements'];
            _0x3f3947['touch'] = !0x0, elmAddRemoveClass(_0x3b3926['container'], _0x3f3947['config']['classNames']['isTouch'], !0x0);
        }
        setTabFocus(_0x5c64e9) {
            var E = this['emulator'],
                _0x57482b = E['elements'];
            if (clearTimeout(this['focusTimer']), 'keydown' !== _0x5c64e9['type'] || 0x9 === _0x5c64e9['which']) {
                'keydown' === _0x5c64e9['type'] && (this['lastKeyDown'] = _0x5c64e9['timeStamp']);
                var _0x362e48, _0x69ede6 = _0x5c64e9['timeStamp'] - this['lastKeyDown'] <= 0x14;
                ('focus' !== _0x5c64e9['type'] || _0x69ede6) && (_0x362e48 = E['config']['classNames']['tabFocus'], elmAddRemoveClass(E['SelectorAll']('.' ['concat'](_0x362e48)), _0x362e48, !0x1), this['focusTimer'] = setTimeout(function () {
                    var _0x5554ff = document['activeElement'];
                    _0x57482b['container']['contains'](_0x5554ff) && elmAddRemoveClass(document['activeElement'], E['config']['classNames']['tabFocus'], !0x0);
                }, 0xa));
            }
        }
        global() {
            var _0x823a6f = !(arguments['length'] > 0x0 && void 0x0 !== arguments[0x0]) || arguments[0x0],
                E = this['emulator'];
            SetEvent['call'](E, document['body'], 'click', this['toggleMenu'], _0x823a6f), onceEvent['call'](E, document['body'], 'touchstart', this['firstTouch']), SetEvent['call'](E, document['body'], 'keydown focus blur', this['setTabFocus'], _0x823a6f, !0x1, !0x0), E['addEvent'](document['body'], 'keyup', function (_0x2ecd9f) {

                E['started'] && (0x71 === _0x2ecd9f['which'] && (_0x2ecd9f['shiftKey'] ? null === E['elements']['buttons']['saveState']['getAttribute']('hidden') && E['callEvent'](E['elements']['buttons']['saveState'], 'click') : ejs_Controller['quickSaveState']()), 0x73 === _0x2ecd9f['which'] && (_0x2ecd9f['shiftKey'] ? null === E['elements']['buttons']['loadState']['getAttribute']('hidden') && E['callEvent'](E['elements']['buttons']['loadState'], 'click') : ejs_Controller['quickLoadState']()), 0x78 === _0x2ecd9f['which'] && E['callEvent'](E['elements']['buttons']['mute'], 'click'));
            });
        }
        container() {
            var E = this['emulator'],
                Elms = E['elements'];
            E['addEvent'](Elms['container'], 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen start-game', function (event) {
                //主容器事件  
                var ElmCtrl = Elms['controls'];
                ElmCtrl && 'enterfullscreen' === event['type'] && (ElmCtrl['pressed'] = !0x1, ElmCtrl['hover'] = !0x1);
            });
            E['addEvent'](window, 'resize', function (event) {
                var cHeight = E['elements']['container']['clientHeight'],
                    ElmMenuPopup = E['SelectorAll'](getClassName('ejs__menu__container', !0) + ' [role="menu"]');
                let {
                    width,
                    height
                } = E['elements']['container'].getBoundingClientRect();
                I.setStyle(E['elements']['container'], {
                    '--width': width + 'px',
                    '--height': height + 'px',
                });
                Array['from'](ElmMenuPopup)['forEach'](function (_0x33d1de) {

                    _0x33d1de['style']['maxHeight'] = '' ['concat'](cHeight - 0x89, 'px'), _0x33d1de['style']['overflow'] = 'auto';
                });
                ejs_loader['Module'] && ejs_loader['Module']['canvas'];
                if (E['elements']['container']['clientWidth'] / E['elements']['container']['clientHeight'] < 1.3) {
                    elmAddRemoveClass(E['elements']['container'], getClassName('portrait'), !0x0)
                } else {
                    elmAddRemoveClass(E['elements']['container'], getClassName('portrait'), !0x1);
                }
            });
            E['callEvent'](window, 'resize');
            E['addEvent'](E['elements']['container'], 'enterfullscreen', function (_0x5b41b0) {
                setTimeout(function () {

                    E['callEvent'](window, 'resize');
                }, 0x12c);
            });
            E['addEvent'](E['elements']['container'], 'exitfullscreen', function (_0xa21ed9) {
                setTimeout(function () {

                    E['callEvent'](window, 'resize');
                }, 0x12c);
            });
            E['addEvent'](E['elements']['container'], 'start-game', function (event) {
                ///var _0x173e25 = window['document']['createEvent']('UIEvents');
                //_0x173e25['initUIEvent']('resize', !0x0, !0x1, window, 0x0);
                //window['dispatchEvent'](_0x173e25);
                E['callEvent'](window, 'resize');
                elmAddRemoveClass(E['elements']['container'], getClassName('game-started'), !0x0);
            });
            E['addEvent'](E['elements']['container'], 'blur', function (_0x272c11) {
                var _0x13810b = _0x272c11['currentTarget'];
                setTimeout(function () {

                    _0x13810b['contains'](document['activeElement']) || E['callEvent'](E['elements'], 'blurgame');
                }, 0x0);
            });
            if (!I.mobile) {
                E['addEvent'](E['elements']['container'], 'focus', function (_0x15e2f7) {
                    var _0x3f8f53 = _0x15e2f7['currentTarget'];
                    setTimeout(function () {

                        _0x3f8f53['contains'](document['activeElement']) && E['callEvent'](E['elements'], 'focusgame');
                    }, 0x0);
                });

            }
        }
        media() {
            var E = this['emulator'],
                _0x392b4c = E['elements'];
            E['addEvent'](E['game'], 'volumechange', function (_0x4471c0) {

                return ejs_data['updateVolume']['call'](E, _0x4471c0);
            });
            E['addEvent'](_0x392b4c['container'], 'contextmenu', function (_0x48dd70) {

                E['touch'] || E['lightgun'] || E['mouse'] || ejs_data['toggleContextMenu']['call'](E, _0x48dd70, !0x0);
                 _0x48dd70['preventDefault']();
            }, !0x1);
            T.on(document.body,'contextmenu',e=>T.stopEvent(e));
            E['addEvent'](_0x392b4c['container'], 'mousewheel', function (_0x84a53) {

                _0x84a53['stopPropagation']();
            }, !0x1);
            E['addEvent'](_0x392b4c['container'], 'mousedown', function (_0xf614c8) {

                E['touch'] || E['mouse'] || ejs_data['toggleContextMenu']['call'](E, _0xf614c8, !0x1);
            }, !0x1);
            E['addEvent'](E['game'], 'volumechange', function () {

                E['storage']['set']({
                    'volume': E['volume'],
                    'muted': E['muted']
                }), ejs_Controller['setVolume'] && ejs_Controller['setVolume']();
            });
            var _0x5d664f = E['config']['events']['concat'](['keyup', 'keydown'])['join'](' ');
            E['addEvent'](E['game'], _0x5d664f, function (_0x5a5f62) {
                var _0x2c34c7 = _0x5a5f62['detail'],
                    _0x392762 = void 0x0 === _0x2c34c7 ? {} : _0x2c34c7;
                'error' === _0x5a5f62['type'] && (_0x392762 = E['game']['error']);
                E['callEvent'](_0x392b4c['container'], _0x5a5f62['type'], !0x0, _0x392762);
            });
        }
        proxy(_0x6f8a15, _0x14fb57, _0x55f8ad) {
            var _0x12a1a2 = this['emulator'],
                _0x361ac4 = _0x12a1a2['config']['listeners'][_0x55f8ad],
                _0x54d482 = !0x0;
            I.func(_0x361ac4) && (_0x54d482 = _0x361ac4['call'](_0x12a1a2, _0x6f8a15)), _0x54d482 && I.func(_0x14fb57) && _0x14fb57['call'](_0x12a1a2, _0x6f8a15);
        }
        bind(elm, evt, func, name, opt) {
            var L = this,
                E = this['emulator'],
                Ename = E['config']['listeners'][name],
                isFunc = I.func(Ename);
            E['addEvent'](elm, evt, event => L['proxy'](event, func, name), opt && !isFunc);
        }
        controls() {
            var L = this,
                E = L['emulator'],
                Elms = E['elements'],
                ElmBtns = Elms['buttons'],
                rangeEvt = ejs_Browser['isIE'] ? 'change' : 'input';
            L['bind'](ElmBtns['mute'], 'click', () => E['muted'] = !E['muted'], 'mute'); //静音 事件绑定
            L['bind'](ElmBtns['fullscreen'], 'click', () => E['fullscreen']['toggle'](), 'fullscreen'); //全屏 事件绑定
            L['bind'](ElmBtns['gamepad'], 'click', () => {

                E['callaction']('toggleControls', !0x1);
                toggleHidden(Elms['dialogs']['gamepad'], !0x1);
            }, 'mute'); //手柄映射 事件绑定
            L['bind'](ElmBtns['saveState'], 'click', () => {

                E['callEvent'](E['elements']['container'], 'savestate-start', !0x1, {});
                E['callEvent'](E['elements']['container'], 'savestate', !0x1, {
                    'state': ejs_Controller['saveState'](),
                    'screenshot': ejs_Controller['getScreenData']()
                });
            }, 'mute'); //即时存档 事件绑定
            L['bind'](ElmBtns['loadState'], 'click', () => {

                E['callEvent'](E['elements']['container'], 'loadstate', !0x1, {});
            }, 'mute'); //即时读档 事件绑定

            I.toArr(['autosave', 'recorder', 'fastforward'], v => {
                ElmBtns[v] && L['bind'](ElmBtns[v], 'click', e => {
                    if (E['started']) {
                        ElmBtns[v].classList.toggle('active');
                        E['callaction']('button_' + v, ElmBtns[v], ElmBtns[v].classList.contains('active'));
                    }
                })
            }); //自动保存 录制

            L['bind'](ElmBtns['settings'], 'click', event => {
                event['stopPropagation']();
                ejs_data['toggleMenu']['call'](E, event);
            }); //设置 事件绑定 设置菜单

            L['bind'](ElmBtns['settings'], 'keyup', event => {
                //快捷键打开设置
                var _0x30fc8e = event['which'];
                if ([0xd, 0x20]['includes'](_0x30fc8e)) {
                    if (0xd !== _0x30fc8e) {
                        event['preventDefault'](), event['stopPropagation'](), ejs_data['toggleMenu']['call'](E, event)
                    } else {
                        ejs_data['focusFirstMenuItem']['call'](E, null, !0x0)
                    }
                }
            }, null, !0x1);
            L['bind'](Elms['settings']['menu'], 'keydown', event => {


                //快捷键关闭设置
                0x1b === event['which'] && ejs_data['toggleMenu']['call'](E, event);
            });


            if (ejs_Browser['isIos']) {
                I.toArr(E['SelectorAll']('input[type="range"]'), elm => L['bind'](elm, rangeEvt, event => tryHidden(event['target'])));
            }
            if (ejs_Browser['isWebkit']) {
                I.toArr(E['SelectorAll']('input[type="range"]'), elm => L['bind'](elm, 'input', event => ejs_data['updateRangeFill']['call'](E, event['target'])));
            }
            L['bind'](Elms['inputs']['volume'], rangeEvt, event => {
                //声音按钮 事件绑定
                E['volume'] = event['target']['value'];
            }, 'volume');
            /*
            L['bind'](Elms['controls'], 'mouseenter mouseleave', event => {
                //底部菜单鼠标 事件绑定
                if ('mouseleave' === event['type'] && null === event['toElement']) {
                    Elms['controls']['hover'] = !0x0;
                } else {
                    Elms['controls']['hover'] = !E['touch'] && 'mouseenter' === event['type'];
                }
            });
            */

            /*
            L['bind'](Elms['controls'], 'mousedown mouseup touchstart touchend touchcancel', event => {

                //底部菜单 事件绑定
                Elms['controls']['pressed'] = ['mousedown', 'touchstart']['includes'](event['type']);
                if (['mousedown', 'touchstart']['includes'](event['type'])) {
                    Elms['controls']['pressed'] = !0x0;
                    var _0x3fdd1b = Elms['controls']['getAttribute']('data-timer2');
                    clearTimeout(_0x3fdd1b);
                } else {
                    var timeId = setTimeout(() => {
                        Elms['controls']['pressed'] = !0x1;
                    }, 0xfa0);
                    Elms['controls']['setAttribute']('data-timer2', timeId);
                }
            });
                */
            L['bind'](Elms['inputs']['volume'], 'wheel', event => {
                var _0x2adb35 = [event['deltaX'], -event['deltaY']].map(value => event['webkitDirectionInvertedFromDevice'] ? -value : value),
                    _0x2197be = _0x2adb35[0x0],
                    _0x327e2f = _0x2adb35[0x1],
                    _0x345fb0 = Math['sign'](Math['abs'](_0x2197be) > Math['abs'](_0x327e2f) ? _0x2197be : _0x327e2f);

                console.log(_0x2adb35, event);

                E['increaseVolume'](_0x345fb0 / 0x32);
                var _0x38c838 = E['game']['volume'];
                (0x1 === _0x345fb0 && _0x38c838 < 0x1 || -0x1 === _0x345fb0 && _0x38c838 > 0x0) && event['preventDefault']();
            }, 'volume', !0x1); //音量 事件绑定
            L['bind'](Elms['controls'], 'contextmenu', event => event['stopPropagation']()); //屏蔽右键 事件绑定
            L['bind'](Elms['contextMenu'], 'contextmenu', event => event['stopPropagation']()); //屏蔽右键 事件绑定
        }
    }
    class ejs_storage {
        constructor(E, key) {
            this['enabled'] = !0x0;
            this['key'] = key;
            var localdata = window['localStorage']['getItem'](key);
            this.data = !localdata?{}:JSON['parse'](localdata);
        }
        data = {};
        get(key) {
            if(key)return this.data[key];
            return this.data;
        }
        set(data) {
            /**
             * 储存 避免多次读取写入
             */
            if(data)I.assign(this.data,data);
            window['localStorage']['setItem'](this['key'], JSON['stringify'](this.data));
        }
    }
    class ejs_install {
        defaultConfig = {
            volume: 0.5,
            muted: !0x1,
            /*
            多国语言
            */
            i18n: {
                restart: 'Restart',
                play: 'Play',
                pause: 'Pause',
                played: 'Played',
                volume: 'Volume',
                mute: 'Mute (F9)',
                unmute: 'Unmute (F9)',
                enterFullscreen: 'Enter fullscreen',
                exitFullscreen: 'Exit fullscreen',
                settings: 'Settings',
                saveState: 'Save State',
                loadState: 'Load State',
                disk: 'Disk',
                netplay: 'Netplay',
                gamepad: 'Controls Settings',
                cheat: 'Cheats',
                menuBack: 'Go back to previous menu',
                normal: 'Normal',
                all: 'All',
                reset: 'Reset',
                disabled: 'Disabled',
                enabled: 'Enabled',
                playNow: 'Play Now',
                cache: 'Database',
                autosave: 'Auto Save',
                recorder: 'Video Rec',
                fastforward: 'Fast Forward'
            },
            listeners: {
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                mute: null,
                volume: null,
                fullscreen: null
            },
            events: ['ready'],
            selectors: {
                editable: 'input, textarea, select, [contenteditable]',
                container: '.ejs',
                controls: {
                    container: null,
                    wrapper: '.jes__controls'
                },
                buttons: {
                    play: '[data-btn="play"]',
                    pause: '[data-btn="pause"]',
                    mute: '[data-btn="mute"]',
                    fullscreen: '[data-btn="fullscreen"]',
                    settings: '[data-btn="settings"]',
                    saveState: '[data-btn="save-state"]',
                    loadState: '[data-btn="load-state"]',
                    gamepad: '[data-btn="gamepad"]',
                    netplay: '[data-btn="netplay"]',
                    cheat: '[data-btn="cheat"]',
                    cache: '[data-btn="cache"]',
                    autosave: '[data-btn="autosave"]',
                    recorder: '[data-btn="recorder"]',
                    fastforward: '[data-btn="fastforward"]'
                },
                inputs: {
                    volume: '[data-range="volume"]'
                }
            },
            classNames: {
                type: 'ejs--video',
                video: 'ejs__video-wrapper',
                poster: 'ejs__poster',
                posterEnabled: 'ejs__poster-enabled',
                control: 'ejs__control',
                controlPressed: 'ejs__control--pressed',
                playing: 'ejs--playing',
                paused: 'ejs--paused',
                stopped: 'ejs--stopped',
                loading: 'ejs--loading',
                hover: 'ejs--hover',
                tooltip: 'ejs__tooltip',
                hotkey: 'ejs__hotkey',
                hidden: 'ejs__sr-only',
                hideControls: 'ejs--hide-controls',
                isIos: 'ejs--is-ios',
                isTouch: 'ejs--is-touch',
                uiSupported: 'ejs--full-ui',
                noTransition: 'ejs--no-transition',
                menu: {
                    value: 'ejs__menu__value',
                    badge: 'ejs__badge',
                    open: 'ejs--menu-open'
                },
                fullscreen: {
                    enabled: 'ejs--fullscreen-enabled',
                    fallback: 'ejs--fullscreen-fallback'
                },
                tabFocus: 'ejs__tab-focus'
            },
            gameParentUrl: [],
            offline: !1,
        };
        elements = {
            container: null,
            buttons: {},
            display: {},
            inputs: {},
            settings: {
                popup: null,
                menu: null,
                panels: {},
                buttons: {}
            },
            dialogs: {
                gamepad: null,
                loading: null,
                netplay: null,
                cache: null
            },
            widgets: {}
        };
        fullscreen = {
            active: !0x1
        };
        mode = 0x2;
        hash = '';
        lightgun = !0x1;
        mouse = !0x1;
        multitap = !0x1;
        keyboard = !0x1;
        savename = '';
        ready = !0x1;
        paused = !0x0;
        started = !0x1;
        focused = !0x1;
        version = '0.4.99';
        RootPath = T.RootPath || location.pathname;
        constructor(divID, Configs) {
            const E = this;
            ejs_install.cleargc();
            if (!I.elm(divID)) {
                if (I.str(divID))
                    E['game'] = T.$(divID);
                else if (I.obj(divID) && divID.length)
                    E['game'] = divID[0];
            } else {
                E['game'] = divID;
            }
            if (E['game']['emulator']) return console['warn']('Target already setup');
            I.defines(E, {
                T,
                I
            }, 1);
            E['runaction'] = T.runaction;
            E['callaction'] = T.callaction;
            Configs['gameParentUrl'] = Configs['gameParentUrl'] || [];
            if (I.str(Configs['gameParentUrl'])) Configs['gameParentUrl'] = [Configs['gameParentUrl']];
            if ('undefined' != typeof EJS_savename && '' != EJS_savename) {
                E['savename'] = EJS_savename;
            }
            Configs['savename'] = E['savename'];
            E['storageSupported'] = !0;
            E['touch'] = EnvVariable['touch'];
            E['game'].innerHTML = '';
            E['config'] = I.assign({}, E['defaultConfig'], ejs_install['defaults'], Configs || {});
            E['lightgun'] = E['config']['lightgun'];
            E['mouse'] = E['config']['mouse'];
            E['multitap'] = E['config']['multitap'];
            E['cheats'] = E['config']['cheats'];
            E['savepath'] = E['config']['system'];
            E['cheats'] || (E['cheats'] = []);
            E['color'] = E['config']['color'];
            //['melonds', 'segaSaturn', 'mame']['includes'](Configs['system']) && (E['mode'] = 0x1);
            if (E['system'] == 'mame') E['system'] = 'mame0.193';
            E['config']['url'] = '';
            /**
             * 绑定对应CSSname
             */
            I.toArr(E['config']['classNames'], entry => {
                if (I.str(entry[1])) {
                    E['config']['classNames'][entry[0]] = getClassName(I.toObj([
                        [entry[1], !0]
                    ]));
                } else {
                    I.toArr(entry[1], subentry => {
                        E['config']['classNames'][entry[0]][subentry[0]] = getClassName(I.toObj([
                            [subentry[1], !0]
                        ]));
                    });
                }
            });
            E['config']['selectors']['controls']['wrapper'] = getClassName('ejs__controls', !0);
            E['config']['selectors']['container'] = getClassName('ejs', !0);
            E['config']['mute'] = !0x0;
            E['eventListeners'] = [];
            E['listeners'] = new ejs_listeners(E);
            E['storage'] = new ejs_storage(E, 'ejs_settings');
            if (!I.elm(E['elements']['container'])) {
                E['elements']['container'] = T.$append(E['game'].parentNode, T.$ce('div'));
                T.$append(E['elements']['container'], E['game']);
            }
            I.defines(E['game'], {
                emulator: E,
                loader: ejs_loader,
                controller: ejs_Controller,
            }, 1);
            I.defines(ejs_install, {
                emulator: E
            }, 1, 1)
            E['elements']['container']['appendChild'](createElm('div', {
                'class': getClassName('ejs__widgets')
            }));
            let ElmDialogs = createElm('div', {
                'class': getClassName('ejs__dialogs')
            })
            E['elements']['container']['appendChild'](ElmDialogs);
            T.stopGesture(document.body);
            T.stopGesture(ElmDialogs);
            eventTouchList.forEach(v => T.on(ElmDialogs, v, e => e.target == ElmDialogs && T.stopEvent(e)));
            T.stopGesture(E['elements']['container']);
            E['create']();
        }
        restart() {
            this['currentTime'] = 0x0;
        }
        increaseVolume(num) {
            var _0x34c4f1 = this['game']['muted'] ? 0x0 : this['volume'];
            this['volume'] = _0x34c4f1 + (I.num(num) ? num : 0x0);
        }
        decreaseVolume(num) {

            this['increaseVolume'](-num);
        }
        toggleControls(bool) {
            const E = this;
            if (E['started']) {
                var isbool = void 0x0 === bool ? void 0x0 : !bool,
                    ishas = elmAddRemoveClass(E['elements']['container'], E['config']['classNames']['hideControls'], isbool);
                ishas && ejs_data['toggleMenu']['call'](E, !0x1);
                return !ishas;
            }
            return !0x1;
        }
        loadState(name) {

            ejs_Controller['loadState'](name, 0x0);
        }
        on(evt, func) {

            this.addEvent(this['elements']['container'], evt, func);
        }
        once(evt, func) {

            this.onceEvent(this['elements']['container'], evt, func);
        }
        onceEvent(...arg) {
            return onceEvent.apply(this, arg);
        }
        addEvent(...arg) {
            return addEvent.apply(this, arg);
        }
        callEvent(object, type, bubbles, detail) {
            if (I.elm(object) && !I.empty(type)) {
                T.triger(object, type, I.assign({}, detail, {
                    'emulator': this
                }), {
                    'bubbles': bubbles
                });
            }
        }
        off(evt, func) {
            saveEvent(this['elements']['container'], evt, func);
        }
        set playing(bool) {
            Array['from'](this['elements']['buttons']['play'] || [])['forEach'](function (_0x6c461f) {

                _0x6c461f['pressed'] = bool;
            }), this['paused'] = !bool;
        }
        get playing() {

            return Boolean(this['ready'] && !this['paused']);
        }
        set volume(num) {
            var num2 = num;
            I.str(num2) && (num2 = Number(num2)), I.num(num2) || (num2 = this['storage']['get']('volume')), I.num(num2) || (num2 = this['config']['volume']), num2 > 0x1 && (num2 = 0x1), num2 < 0x0 && (num2 = 0x0), this['config']['volume'] = num2, this['game']['volume'] = num2, !I.empty(num) && this['muted'] && num2 > 0x0 && (this['muted'] = !0x1);
        }
        get volume() {

            return Number(this['game']['volume']);
        }
        set muted(num) {
            var num2 = num;
            I.bool(num2) || (num2 = this['storage']['get']('muted')), I.bool(num2) || (num2 = this['config']['muted']), this['config']['muted'] = num2, this['game']['muted'] = num2;
        }
        get muted() {
            return Boolean(this['game']['muted']);
        }
        get system() {
            return this.config.system;
        }
        set system(system) {
            this.config.system = system;
        }
        SelectorAll(str) {

            return this['elements']['container']['querySelectorAll'](str);
        }
        Selector(str) {

            return this['elements']['container']['querySelector'](str);
        }
        action = {
            addStyleHook() {
                let config = this['config'],
                    container = this['elements']['container'];
                elmAddRemoveClass(container, config['selectors']['container']['replace']('.', ''), !0x0);
                elmAddRemoveClass(container, config['classNames']['uiSupported'], !0x0);
                elmAddRemoveClass(container, config['classNames']['hideControls'], !0x0);
            },
            build() {
                const E = this;
                E['listeners']['media']();
                if (!I.elm(E['elements']['controls'])) {
                    ejs_data['inject']['call'](E);
                    E['listeners']['controls']()
                }
                E['volume'] = null;
                E['muted'] = null;
                ejs_data['updateVolume']['call'](E);
                elmAddRemoveClass(E['elements']['container'], E['config']['classNames']['isTouch'], E['touch']);
                E['ready'] = !0x0;
            },
            toggleControls(bool) {
                const E = this;
                var ElmControls = E['elements']['controls'];
                if (ElmControls) {
                    var len = 0;
                    I.toArr(
                        E['SelectorAll'](`${getClassName('ejs__dialogs', 1)} > ${getClassName('ejs__dialog', 1)}`),
                        elm => !0x0 !== elm['hidden'] && (len += 1)
                    );
                    if (len > 0) {
                        E['toggleControls'](!0x1)
                    } else {
                        E['toggleControls'](Boolean(bool || E['paused'] || ElmControls['pressed'] || ElmControls['hover']))
                    }
                }
            },
            loadCoreOptions(coreOptions) {
                /* 加载核心配置信息 */
                var E = this,
                    CoreOptionData = {},
                    coresText = ejs_Controller['RF']('get_core_options'),
                    storageOptions = ejs_data['storage']['data']['core-options']||{};
                I.toArr(coreOptions, entry => {
                    var coreKey = entry['key'];
                    CoreOptionData[coreKey] = {
                        'label': entry['label'],
                        'options': entry['options'],
                        'default': entry['default'],
                        'netplay': entry['netplay']
                    };
                });
                I.toArr(coresText&&coresText.trim().split('\n'), (entry, index) => {
                    var coreData = entry.trim()['split'](';'),
                        coreKey = coreData[0].trim(),
                        coreLable = coreKey && coreKey.toString(),
                        coreOption = coreData[1] && coreData[1].split('|').map(e => e.trim()).filter(e => !I.empty(e)),
                        coreDefault;
                    if (CoreOptionData[coreKey]) return;
                    if (storageOptions[coreKey]) {
                        coreDefault = storageOptions[coreKey];
                    } else {
                        coreDefault = coreOption.filter(v => /^(auto|autodetect|0|none|disabled|off|no|nul)$/i.test(v))[0];
                        if (!coreDefault) {
                            coreOption.push('nul');
                            coreDefault = 'nul';

                        }
                    }
                    if (coreLable && coreOption.length > 0) {
                        //itemData['default'] = itemData['options'][0];
                        if (0x0 === coreKey['indexOf']('fba-dipswitch-') || 0x0 === coreKey['indexOf']('fbneo-dipswitch-')) {
                            var _0x3f3187 = coreData[0x1]['split']('|'),
                                _0x573b9f = coreKey['replace'](/_/g, ' ')['replace'](/.+\-(.+)/, '$1'),
                                _0x36f894 = 0x0 == coreKey['indexOf']('fbneo-dipswitch-') ? _0x3f3187['slice'](0x0, -0x1) : _0x3f3187['slice'](0x1, -0x1),
                                _0x446996 = _0x3f3187[0x0]['replace']('(Default) ', '');
                            CoreOptionData[coreKey] = {
                                'label': _0x573b9f,
                                'options': _0x36f894,
                                'default': _0x446996,
                                'netplay': !0x0
                            };
                        } else {
                            if (E['system'] == 'gba') coreLable = coreLable.replace(/^mgba_/g, '').replace(/_/g, ' ').trim();
                            CoreOptionData[coreKey] = {
                                label: coreLable,
                                options: coreOption,
                                default: coreDefault
                            };
                        }
                    }
                });
                I.assign(ejs_data['coreoptions'], CoreOptionData);
                return CoreOptionData;
            },
            async JoystickGamepad() {
                const E = this,
                    elm = E['Selector'](getClassName('ejs-virtual-gamepad', !0) + ' ' + getClassName('left', !0));
                if (typeof self.nipplejs == 'undefined') await T.loadLibjs(T.RootPath + 'nipplejs.js', e => elm.innerHTML = e);
                if (E.joystickGamepad) return;
                E.joystickGamepad = true;
                elm.innerHTML = '';
                var nipplejsGamepad = nipplejs.create({
                    'zone': elm,
                    'mode': 'static',
                    'position': {
                        'left': '50%',
                        'top': '50%'
                    },
                    'color': 'red'
                });
                nipplejsGamepad['on']('end', function (event, detail) {
                    ejs_Controller['CF']('simulateInput', 0x0, 0x13, 0x0);
                    ejs_Controller['CF']('simulateInput', 0x0, 0x12, 0x0);
                    ejs_Controller['CF']('simulateInput', 0x0, 0x11, 0x0);
                    ejs_Controller['CF']('simulateInput', 0x0, 0x10, 0x0);
                });
                nipplejsGamepad['on']('move', function (event, detail) {
                    let {
                        x,
                        y
                    } = detail.vector;
                    console.log(x, y);
                    if (x > 0) {
                        ejs_Controller['CF']('simulateInput', 0x0, 0x10, 0x7fff * x);
                        ejs_Controller['CF']('simulateInput', 0x0, 0x11, 0x0)
                    } else {
                        ejs_Controller['CF']('simulateInput', 0x0, 0x11, 0x7fff * x);
                        ejs_Controller['CF']('simulateInput', 0x0, 0x10, 0x0)
                    }
                    if (y < 0) {
                        ejs_Controller['CF']('simulateInput', 0x0, 0x12, 0x7fff * y);
                        ejs_Controller['CF']('simulateInput', 0x0, 0x13, 0x0)
                    } else {
                        ejs_Controller['CF']('simulateInput', 0x0, 0x13, 0x7fff * y);
                        ejs_Controller['CF']('simulateInput', 0x0, 0x12, 0x0)
                    }
                });
            },
            async button_autosave(elm, bool) {
                const E = this;
                clearInterval(elm['time']);
                if (bool) {
                    elm['time'] = setInterval(() => {
                        if (E['isAutoSave']) {
                            clearInterval(elm['time']);
                            toggleHidden(elm, !1);
                            return;
                        }
                        ejs_Controller['saveSavFiles'] && ejs_Controller['saveSavFiles']();
                    }, 15000);
                }
            },
            async button_recorder(elm, bool) {
                let mime;
                if (!bool) {
                    return T.triger(elm, 'close');
                }
                I.toArr(['webm', 'mp4'], v => {
                    MediaRecorder.isTypeSupported('video/' + v) && (mime = v)
                });
                if (!mime) elm.hidden = true;
                ///if(window.navigator && navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getDisplayMedia) {
                //let UserMedia = await navigator.mediaDevices.getUserMedia({video:false,audio:true});
                //ModuleMedia.addTrack(UserMedia.getAudioTracks()[0]);
                //}
                //    T=Nenge,I=Nenge.I,mimeType = 'video/webm;audio/webm';
                let ModuleMedia = Module.canvas.captureStream(25);
                //let AudioMedia = new MediaStream(Module.RA.context.createMediaStreamDestination().stream);
                ///let Stream = new MediaStream();
                ///Stream.addTrack(UserMedia.getAudioTracks()[0]);
                let Media = new MediaRecorder(ModuleMedia, {
                    mimeType: 'video/' + mime
                });
                //T.on(Media,'stop',e=>T.down('xxx.webm',chunks));
                T.on(Media, 'dataavailable', e => {
                    T.down(this['gameName'] + '.' + mime, e.data);
                    ModuleMedia.getTracks()[0].stop();
                    ModuleMedia = null;
                    Media = null;
                });
                T.once(elm, 'close', e => Media.stop());
                Media.start();
                self.xxx = Media;
                ///}
            },
            async button_fastforward(elm, bool) {
                //'fast_forward_2', 
                let evt = I.toArr(['fast_forward']).filter(e => ejs_Controller['CF']('CM', e));
                evt.forEach(v => ejs_Controller['RF'](v, bool ? 1 : 0));
            }
        };

        ajaxHeaders = {
            'accept': 'application/json, text/plain, */*',
            'content-type': 'application/x-www-form-urlencoded'
        };
        Geti18n(key, data) {
            let i18n = data ? data || {} : this.config.i18n,
                content = i18n[key] || null;
            if (I.empty(content)) return key;
            content = content.replace(/\{(.+?)\}/g, (str, arg) => {
                console.log(arg);
                return i18n[arg] || arg
            });
            return T.getLang(content);
        }
        async create() {
            /**
             * @var {ejs_install} 实例化的ejs_install
             */
            const E = this;
            var ElmContainer = E['elements']['container'],
                /**
                 * @var {string}  核心系统类型
                 */
                RealSystemName, //记录真实核心
                /**
                 * @var {array} 核心支持扩展名
                 */
                RealSystemExt,
                /**
                 * @var 写入数据长度
                 */
                ejs_sizelength = 0x0,
                /**
                 * @var 是否当前Module 待删
                 */
                isLoadModule = !0x1,
                /**
                 * @var 扩展名列表
                 */
                SystemFileExt = {
                    'psx': ['bin', 'iso', 'cue', 'img', 'mdf', 'pbp', 'toc', 'cbn', 'm3u'],
                    'nds': ['nds', 'bin'],
                    'nes': ['fds', 'nes', 'unif', 'unf'],
                    'mesen': ['fds', 'nes', 'unif', 'unf'],
                    'snes': ['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'],
                    'snes2002': ['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'],
                    'snes2005': ['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'],
                    'snes2010': ['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'],
                    'gb': ['gb', 'gbc', 'dmg'],
                    'gba': ['gb', 'gbc', 'gba'],
                    'vbanext': ['gba'],
                    'vb': ['vb', 'vboy', 'bin'],
                    '3do': ['iso', 'bin', 'cue'],
                    'lynx': ['lnx'],
                    'jaguar': ['j64', 'jag', 'rom', 'abs', 'cof', 'bin', 'prg'],
                    'a7800': ['a78', 'bin'],
                    'a2600': ['a26', 'bin'],
                    'ngp': ['ngp', 'ngc'],
                    'n64': ['n64', 'v64', 'z64', 'bin', 'u1', 'ndd'],
                    'pce': ['pce', 'bin', 'iso', 'cue', 'ccd', 'img', 'chd'],
                    'pcfx': ['ccd', 'toc', 'chd', 'cue'],
                    'sega': ['mdx', 'md', 'smd', 'gen', 'bin', 'iso', 'cue', 'sms', 'gg', 'sg', '68k', 'chd'],
                    'segacd': ['mdx', 'md', 'smd', 'gen', 'bin', 'iso', 'cue', 'sms', 'gg', 'sg', '68k', 'chd', 'm3u'],
                    '32x': ['32x', 'bin', 'gen', 'smd', 'md', 'cue', 'iso', 'sms'],
                    'saturn': ['bin', 'cue', 'iso'],
                    'msx': ['rom', 'mx1', 'mx2', 'dsk', 'cas'],
                    'bluemsx': ['rom', 'ri', 'mx1', 'mx2', 'col', 'dsk', 'cas', 'sg', 'sc', 'm3u'],
                    'ws': ['ws', 'wsc'],
                    'arcade': ['zip'],
                    'fba0.2.97.29': ['zip'],
                    'mame2003': ['zip'],
                    'mame': ['zip']
                },
                CoreSystemList = {
                    'psx': 'psx',
                    'nds': 'nds',
                    'nes': 'nes',
                    'mesen': 'mesen',
                    'snes': 'snes',
                    'snes2002': 'snes2002',
                    'snes2005': 'snes2005',
                    'snes2010': 'snes2010',
                    'gb': 'gb',
                    'gbc': 'gb',
                    'gba': 'gba',
                    'vbanext': 'vbanext',
                    'vb': 'vb',
                    'n64': 'n64',
                    '3do': '3do',
                    'segaMS': 'sega',
                    'segaGG': 'sega',
                    'segaMD': 'sega',
                    'segaCD': 'segacd',
                    'sega32x': '32x',
                    'segaSaturn': 'saturn',
                    'ngp': 'ngp',
                    'pce': 'pce',
                    'pcfx': 'pcfx',
                    'msx': 'bluemsx',
                    'atari2600': 'a2600',
                    'atari7800': 'a7800',
                    'lynx': 'lynx',
                    'ws': 'ws',
                    'arcade': 'arcade',
                    'fba0.2.97.29': 'fba0.2.97.29',
                    'fbneo': 'fbneo',
                    'jaguar': 'jaguar',
                    'mame2003': 'mame2003',
                    'mame0.193': 'mame',
                    'mame0.243': 'mame0.243'
                };
            if (!ejs_install['icons']) {
                ejs_install['icons'] = await T.FetchItem({
                    url: 'frontend/buttons.zip?' + T.time,
                    unpack: true,
                    version: T.version,
                    store: DISK.DB.libjs,
                    decode: I.decode
                });
            }
            if (!T.Gamepad) await T.loadLibjs(T.RootPath + 'gamepad.min.js');
            E['callaction']('addStyleHook');
            ejs_Controller['setup']['call'](E);
            E['callaction']('build');
            E['listeners']['container']();
            E['listeners']['global']();
            E['fullscreen'] = new ejs_fullscreen(E);
            var ElmCanvas = document['createElement']('canvas'),
                ElmInput = document['createElement']('input');
            E['game']['appendChild'](ElmCanvas);
            E['game']['appendChild'](ElmInput);
            toggleHidden(ElmInput, !0x0);
            ejs_loader['loading'] = createElm('div', {
                'class': E['config']['classNames']['loading']
            });
            ElmContainer['appendChild'](ejs_loader['loading']);
            /**
             * 启动时主界面
             */
            ejs_loader['loading'].innerHTML = `
            <div>
                <div class="${getClassName('loading-info')}" style="position: absolute;bottom: 20px;left: 50%;transform: translateX(-50%);z-index:2">
                    <div class="${getClassName('p1')}"></div>
                    <div class="${getClassName('p2')}"></div>
                    <div class="${getClassName('p3')}"></div>
                </div>
                <div style="position: absolute;bottom: 20px;left: 50%;transform: translateX(-50%);width: 100%;text-align: center;z-index: 1;">
                    <a href="#" onclick="return false" class="${getClassName('start-game')}">${E['Geti18n']('playNow')}</a>
                    <div style="font-size: 18px;padding-top:5px;display:none">
                        ${T.getLang('Save Game Roms')}: 
                        <label for="ejs-save-rom-1">
                            <input id="ejs-save-rom-1" name="ejs-save-rom" type="radio"> ${T.getLang('Local Directory')} 
                        </label>
                        <label for="ejs-save-rom-2">
                            <input id="ejs-save-rom-2" name="ejs-save-rom" type="radio"> ${T.getLang('Browser Storage')} 
                        </label>
                        <label for="ejs-save-rom-3">
                            <input id="ejs-save-rom-3" name="ejs-save-rom" type="radio"> ${T.getLang('Don\'t Save')} 
                        </label>
                    </div>
                </div>
            </div>`;
            var LoadingSelector = str => ejs_loader.loading.querySelector(str),
                LoadingInfo = LoadingSelector(getClassName('loading-info', 1)), //状态容器
                LoadingP1 = LoadingSelector(getClassName('p1', 1)), //状态信息 1
                LoadingP2 = LoadingSelector(getClassName('p2', 1)), //状态信息 2
                LoadingP3 = LoadingSelector(getClassName('p3', 1)), //状态信息 3
                LoadingBtnStart = LoadingSelector(getClassName('start-game', 1)); //状态 开始按钮
            E['addEvent'](ElmContainer, 'click', function (event) {
                if (E['started']) {
                    var ElmDialogs = E['Selector'](getClassName('ejs__dialogs', 1))['querySelector'](getClassName('ejs__focus_notice__container', 1));
                    ElmDialogs && ElmDialogs['contains'](event['target']) && setTimeout(function () {
                        toggleHidden(ElmDialogs, !0x0);
                    }, 0x5);
                }
            });
            E['addEvent'](ElmContainer, 'focusin', function (event) {

                if (document['activeElement'] != ElmContainer) return !0x1;
                E['focused'] = !0x0;
                toggleHidden(E['Selector'](getClassName('ejs__dialogs', 1))['querySelector'](getClassName('ejs__focus_notice__container', 1)), !0x0);
            });
            E['addEvent'](ElmContainer, 'focusout', (event) => {

                if (E['started'] && !event['relatedTarget']) {
                    if (ElmContainer == event['srcElement']) {
                        var _0x49b150 = !0x0;
                        I.toArr(document['querySelectorAll'](getClassName('ejs', !0) + ' > *'), elm => {
                            hasClassName(elm, getClassName('ejs__controls')) || hasClassName(elm, E['config']['classNames']['video']) || hasClassName(elm, getClassName('ejs__widgets')) || hasClassName(elm, getClassName('ejs__dialogs')) || hasClassName(elm, getClassName('ejs__contextmenu')) || hasClassName(elm, getClassName('ejs--loading')) || elm['clientWidth'] >= 0.8 * ElmContainer['clientWidth'] && elm['clientHeight'] >= 0.8 * ElmContainer['clientHeight'] && (_0x49b150 = !0x1);

                        });
                        if (!_0x49b150) return E['focused'] = !0x1, !0x1;
                        var _0x4c0ee5 = E['Selector'](getClassName('ejs__dialogs', 1))['querySelector'](getClassName('ejs__focus_notice__container', 1));
                        /**
                         * 遮罩
                         */
                        if (_0x4c0ee5); // toggleHidden(_0x4c0ee5, !0x1);
                        else {
                            var ElmNotice = createElm('div', {
                                    'class': getClassName({
                                        'ejs__dialog': !0x0,
                                        'ejs__focus_notice__container': !0x0
                                    })
                                }),
                                ElmVisor = createElm('div', {
                                    'style': 'color:#fff !important'
                                });
                            ElmVisor.innerHTML = T.getLang('Click to make keyboard keys work');
                            ElmNotice['appendChild'](ElmVisor);
                            E['Selector'](getClassName('ejs__dialogs', 1))['appendChild'](ElmNotice);
                        }
                        E['focused'] = !0x1;
                    } else ElmContainer['focus']();
                }
            });
            if (!EnvVariable['webgl']['DETECTED']) {
                toggleHidden(LoadingBtnStart, !0x0),
                    LoadingP3.innerHTML = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Failed to initialize WebGL.</strong>';
            };
            E['addEvent'](ElmContainer, 'start-game', function (_0x1ea849) {
                E['started'] = !0x0;
                E['playing'] = !0x0;
                toggleHidden(LoadingInfo, !0x0);
                E['callaction']('toggleControls', !0x0);
                var ElmClassTooltip = getClassName('ejs__tooltip--visible'),
                    ElmTooltips = E['elements']['buttons']['gamepad']['querySelector'](getClassName('ejs__tooltip', 1));
                elmAddRemoveClass(ElmTooltips, ElmClassTooltip, !0x0);
                setTimeout(function () {
                    elmAddRemoveClass(ElmTooltips, ElmClassTooltip, !0x1);
                }, 0x1388), toggleHidden(LoadingBtnStart, !0x0);
                var _0x50da70 = _0x288469(ejs_data['defaultCoreOptionsValues']['call'](E), ejs_data['storage']['data']['core-options'] || {});
                'n64' === E['system'] && _0x50da70 && Object['keys'](_0x50da70)['forEach'](function (_0x4a2d30) {

                    'glupen64-aspect' === _0x4a2d30 && '16:9' === _0x50da70[_0x4a2d30] && (ElmCanvas['height'] = ElmCanvas['width'] / 0x10 * 0x9, ejs_loader['aspectRatio'] = 0x10 / 0x9);
                });
                'arcade' !== E['system'] && 'fba0.2.97.29' !== E['system'] || _0x50da70 && Object['keys'](_0x50da70)['forEach'](function (_0x5d1990) {

                    'fba-aspect' === _0x5d1990 && 'PAR' === _0x50da70[_0x5d1990] && (ElmCanvas['height'] = ElmCanvas['width'] / 0x10 * 0x9, ejs_loader['aspectRatio'] = 0x10 / 0x9);
                });
                ///'gba' === E['system'] && (ElmCanvas['height'] = ElmCanvas['width'] / 1.5, ejs_loader['aspectRatio'] = 1.5);
                if ('undefined' != typeof RI) {
                    T.un(document, 'mousemove', RI['eventHandler'], false);
                    T.un(ElmCanvas, 'mousedown', RI['canvasEventHandler'], false);
                    T.un(ElmCanvas, 'mouseup', RI['canvasEventHandler'], false);
                    ElmContainer['addEventListener']('mousemove', function (event) {
                        var _0x27f54a = 0x0,
                            _0x1be677 = 0x0,
                            _0x109101 = event['offsetX'] - ejs_loader['Module']['canvas']['offsetLeft'],
                            _0x42b854 = event['offsetY'] - ejs_loader['Module']['canvas']['offsetTop'];
                        switch (event['type']) {
                            case 'mousemove':
                                _0x109101 < 0x0 ? (_0x109101 = 0x0, _0x27f54a = -ejs_loader['Module']['canvas']['offsetWidth']) : _0x109101 > ejs_loader['Module']['canvas']['offsetWidth'] ? (_0x109101 = ejs_loader['Module']['canvas']['offsetWidth'], _0x27f54a = ejs_loader['Module']['canvas']['offsetWidth']) : _0x27f54a = _0x109101 - RI['currentX'], _0x42b854 < 0x0 ? (_0x42b854 = 0x0, _0x1be677 = -ejs_loader['Module']['canvas']['offsetHeight']) : _0x42b854 > ejs_loader['Module']['canvas']['offsetHeight'] ? (_0x42b854 = ejs_loader['Module']['canvas']['offsetHeight'], _0x1be677 = ejs_loader['Module']['canvas']['offsetHeight']) : _0x1be677 = _0x42b854 - RI['currentY'], RI['currentX'] = _0x109101, RI['currentY'] = _0x42b854;
                                for (var _0x4e5a16 = 0x0; _0x4e5a16 < RI['contexts']['length']; _0x4e5a16 += 0x1) HEAP32[RI['contexts'][_0x4e5a16]['state'] + 0x20 >> 0x2] = _0x27f54a, HEAP32[RI['contexts'][_0x4e5a16]['state'] + 0x24 >> 0x2] = _0x1be677;
                        }
                    }, !0x1);
                    T.on(ElmContainer, 'mousedown', RI['canvasEventHandler'], !0x1);
                    T.on(ElmContainer, 'mouseup', RI['canvasEventHandler'], !0x1);
                    I.toArr(['touchstart', 'touchend'], v => T.on(ElmContainer, v, event => {

                        if (event['targetTouches'][0x0]) {
                            var _0x3632b5, _0x1aed91, _0x5b332f = 0x0,
                                _0x275451 = 0x0,
                                _0x3f17ff = event['target']['getBoundingClientRect'](),
                                _0x190658 = event['targetTouches'][0x0]['clientX'] - _0x3f17ff['left'],
                                _0x298653 = event['targetTouches'][0x0]['clientY'] - _0x3f17ff['top'];
                            _0x190658 < 0x0 ? (_0x190658 = 0x0, _0x5b332f = -ejs_loader['Module']['canvas']['offsetWidth']) : _0x190658 > ejs_loader['Module']['canvas']['offsetWidth'] ? (_0x190658 = ejs_loader['Module']['canvas']['offsetWidth'], _0x5b332f = ejs_loader['Module']['canvas']['offsetWidth']) : _0x5b332f = _0x190658 - RI['currentX'], _0x298653 < 0x0 ? (_0x298653 = 0x0, _0x275451 = -ejs_loader['Module']['canvas']['offsetHeight']) : _0x298653 > ejs_loader['Module']['canvas']['offsetHeight'] ? (_0x298653 = ejs_loader['Module']['canvas']['offsetHeight'], _0x275451 = ejs_loader['Module']['canvas']['offsetHeight']) : _0x275451 = _0x298653 - RI['currentY'], RI['currentX'] = _0x190658, RI['currentY'] = _0x298653;
                            for (var _0x360178 = 0x0; _0x360178 < RI['contexts']['length']; _0x360178 += 0x1) HEAP32[RI['contexts'][_0x360178]['state'] + 0x20 >> 0x2] = _0x5b332f, HEAP32[RI['contexts'][_0x360178]['state'] + 0x24 >> 0x2] = _0x275451;
                            switch (event['type']) {
                                case 'touchend':
                                case 'touchstart':
                                    if (0x0 === event['button']) _0x1aed91 = 0x28;
                                    else {
                                        if (0x2 !== event['button']) break;
                                        _0x1aed91 = 0x29;
                                    }
                                    _0x3632b5 = 'touchend' === event['type'] ? 0x0 : 0x1;
                                    for (var _0x32b43c = 0x0; _0x32b43c < RI['contexts']['length']; _0x32b43c += 0x1) HEAP8[RI['contexts'][_0x32b43c]['state'] + _0x1aed91 >> 0x0] = _0x3632b5;
                            }
                        }
                    }, !1));
                } else {
                    I.toArr([].concat(eventMouseList, eventTouchList), v => T.on(ejs_loader['Module']['canvas'], v, e => e.stopPropagation()));
                    I.toArr(eventMouseList, v => T.on(ElmContainer, v, event => {
                        var newEvent = new MouseEvent(event['type'], {
                            'isTrusted': !0x1,
                            'altKey': event['altKey'],
                            'bubbles': !0x1,
                            'button': event['button'],
                            'buttons': event['buttons'],
                            'cancelBubble': !0x1,
                            'cancelable': !0x0,
                            'clientX': event['clientX'],
                            'clientY': event['clientY'],
                            'composed': !0x0,
                            'ctrlKey': !0x1,
                            'defaultPrevented': !0x1,
                            'detail': event['detail'],
                            'eventPhase': event['eventPhase'],
                            'layerX': event['layerX'],
                            'layerY': event['layerY'],
                            'metaKey': event['metaKey'],
                            'movementX': event['movementX'],
                            'movementY': event['movementY'],
                            'offsetX': event['offsetX'],
                            'offsetY': event['offsetY'],
                            'pageX': event['pageX'],
                            'pageY': event['pageY'],
                            'which': event['which'],
                            'x': event['x'],
                            'y': event['y']
                        });
                        ejs_loader['Module']['canvas']['dispatchEvent'](newEvent), E['elements']['wrapper']['dispatchEvent'](newEvent), E['system'];
                    }, {
                        passive: false
                    }));
                    I.toArr(eventTouchList, v => T.on(ElmContainer, v, event => {
                        var eventEvent, eventData = {
                            'isTrusted': !0x1,
                            'altKey': event['altKey'],
                            'bubbles': !0x1,
                            'button': event['button'],
                            'buttons': event['buttons'],
                            'cancelBubble': !0x1,
                            'cancelable': !0x0,
                            'clientX': event['clientX'],
                            'clientY': event['clientY'],
                            'composed': !0x0,
                            'ctrlKey': !0x1,
                            'defaultPrevented': !0x1,
                            'detail': event['detail'],
                            'eventPhase': event['eventPhase'],
                            'layerX': event['layerX'],
                            'layerY': event['layerY'],
                            'metaKey': event['metaKey'],
                            'movementX': event['movementX'],
                            'movementY': event['movementY'],
                            'offsetX': event['offsetX'],
                            'offsetY': event['offsetY'],
                            'pageX': event['pageX'],
                            'pageY': event['pageY'],
                            'which': event['which'],
                            'x': event['x'],
                            'y': event['y']
                        };
                        if ('touchstart' == event['type']) {
                            eventEvent = new MouseEvent('mousedown', eventData)
                        } else if ('touchsend' == event['type']) {
                            eventEvent = new MouseEvent('mouseup', eventData)
                        } else if ('touchmove' == event['type']) {
                            eventEvent = new MouseEvent('mousemove', eventData)
                        }
                        if (eventEvent) {
                            ejs_loader['Module']['canvas']['dispatchEvent'](eventEvent);
                            E['elements']['wrapper']['dispatchEvent'](eventEvent);
                        }
                    }, {
                        passive: false
                    }));
                }
                'msx' === E['system'] && function (_0x2ab99f) {

                    if ('undefined' != typeof RI) {
                        document['removeEventListener']('keydown', RI['eventHandler'], !0x1), document['removeEventListener']('keyup', RI['eventHandler'], !0x1);
                        var _0x1210c1 = function (_0x7a4c37) {
                            var _0x1b2394 = _0x7a4c37['keyCode'],
                                _0x298f5e = _0x1b2394 >> 0x3,
                                _0x4a764f = 0x1 << (0x7 & _0x1b2394);
                            switch (_0x7a4c37['type']) {
                                case 'keyup':
                                case 'keydown':
                                    if (_0x298f5e >= 0x20) throw 'key code error! bad code: ' + _0x1b2394;
                                    for (var _0x47d5f4 = 0x0; _0x47d5f4 < RI['contexts']['length']; _0x47d5f4++) {
                                        var _0x22bba6 = HEAP8[RI['contexts'][_0x47d5f4]['state'] + _0x298f5e >> 0x0];
                                        'keyup' === _0x7a4c37['type'] ? _0x22bba6 &= ~_0x4a764f : _0x22bba6 |= _0x4a764f, HEAP8[RI['contexts'][_0x47d5f4]['state'] + _0x298f5e >> 0x0] = _0x22bba6;
                                    }
                            }
                        };
                        document['addEventListener']('keydown', _0x1210c1, !0x1), document['addEventListener']('keyup', _0x1210c1, !0x1);
                    }
                }();
                setTimeout(function () {
                    var _0x29453d;
                    _0x29453d = ejs_Browser['info'](), null === ejs_Controller['setVolume'] && 'undefined' != typeof RA ? (RA['queueAudio'] = function () {
                        var _0x400270, _0x15b28c = E['volume'],
                            _0x21c72e = RA['bufIndex'];
                        _0x400270 = RA['bufIndex'] ? RA['buffers'][RA['bufIndex'] - 0x1]['endTime'] : RA['context']['currentTime'], RA['buffers'][_0x21c72e]['endTime'] = _0x400270 + RA['buffers'][_0x21c72e]['duration'];
                        var _0x4a6c40 = RA['context']['createBufferSource']();
                        if (_0x4a6c40['buffer'] = RA['buffers'][_0x21c72e], E['muted'] && (_0x15b28c = 0x0), 0x1 === _0x15b28c) _0x4a6c40['connect'](RA['context']['destination']);
                        else {
                            var _0x3866f5 = RA['context']['createGain']();
                            _0x4a6c40['connect'](_0x3866f5), _0x3866f5['connect'](RA['context']['destination']), ejs_Browser['isEdge'] || 'chrome' === _0x29453d['name'] && parseInt(_0x29453d['version'], 0xa) <= 0x3c || 'firefox' === _0x29453d['name'] && parseInt(_0x29453d['version'], 0xa) <= 0x38 || 'opera' === _0x29453d['name'] && parseInt(_0x29453d['version'], 0xa) <= 0x2c ? _0x3866f5['gain']['value'] = _0x15b28c : 'firefox' === _0x29453d['name'] ? _0x3866f5['gain']['setValueAtTime'](_0x15b28c, RA['context']['currentTime']) : _0x3866f5['gain']['setValueAtTime'](_0x15b28c, RA['context']['currentTime'], 0x0);
                        }
                        _0x4a6c40['start'](_0x400270), RA['bufIndex'] += 0x1, RA['bufOffset'] = 0x0;
                    }, ejs_Browser['isIos'] && window['addEventListener']('touchstart', function () {

                        if (RA['context']) {
                            RA['context']['resume']();
                            var _0x5d0584 = RA['context']['createBufferSource']();
                            _0x5d0584['connect'](RA['context']['destination']), _0x5d0584['start']();
                        }
                    }, !0x1)) : ejs_Controller['setVolume'] && ejs_Controller['setVolume']();
                }, 0x64);
                //void 0x0 === window['addRunDependency'] && (window['Module'] = void 0x0);
                var gameBuf = ejs_loader.FS['readFile'](E['startName']);
                if (gameBuf['length'] <= 0x8000000) {
                    var fsgameBuf;
                    if (['snes', 'snes2002', 'snes2005', 'snes2010']['includes'](E['system'])) {
                        var snesLen = gameBuf['length'] % 0x400;
                        fsgameBuf = new ejs_arraybuffer(snesLen ? gameBuf['slice'] ? gameBuf['slice'](snesLen) : gameBuf['subarray'](snesLen) : gameBuf);
                    } else {
                        fsgameBuf = new ejs_arraybuffer(gameBuf);
                    }
                    //be96d189
                    if (self.SparkMD5) E['hash'] = new SparkMD5.ArrayBuffer().append(fsgameBuf._u8array.buffer).end();
                    if (ejs_data['supportNetPlay']['call'](E) && ejs_Controller['netPlayHost']) {
                        console.log(11);
                        if (ejs_Controller['contentCrc32']) ejs_Controller['romcrc32'] = ejs_Controller['contentCrc32']();
                        else {
                            var Crc32int = getCrc32int(fsgameBuf);
                            ejs_Controller['romcrc32'] = Crc32int['toString'](0x10);
                            ejs_Controller['romcrc32'] = ejs_Controller['romcrc32']['padStart'](0x8, '0');
                        }
                    }
                    T.null(fsgameBuf);
                    fsgameBuf = null;

                }
                gameBuf = null;
                ejs_Controller['setDiskContainer']['call'](E);
                ElmContainer['focus']();
            });
            var PatchToContent = function () {

                if (ejs_loader['gamePatch']) {
                    var _0x42e9d8 = E['startName']['split']('/'),
                        _0x44c9cc = _0x42e9d8['pop']()['split']('.')['pop'](),
                        _0x54cc74 = (ejs_loader['gamePatch']['split']('.')['pop'](), ejs_loader['gamePatch']['split']('/')['pop']()['split']('.')['shift']()),
                        _0x43e991 = '' ['concat'](_0x42e9d8['join']('/'), '/')['concat'](_0x54cc74, '.')['concat'](_0x44c9cc);
                    _0x43e991 = _0x43e991['replace'](/\#/g, '');
                    var _0x4136ee = ejs_loader['gamePatch'];
                    if (ejs_loader.FS['rename'](E['startName'], _0x43e991), E['startName'] = _0x43e991, 'snes' === E['system'] || ['snes2002', 'snes2005', 'snes2010']['includes'](E['system'])) {
                        var _0x2e6771 = new ejs_arraybuffer(ejs_loader.FS['readFile'](E['startName'])),
                            _0x3d734d = getCrc32int(_0x2e6771);
                        ejs_Controller['romcrc32'] = _0x3d734d['toString'](0x10);
                        var _0x30e2fc, _0x57a048, _0x2e3a2d, _0x367813 = new ejs_arraybuffer(ejs_loader.FS['readFile'](_0x4136ee)),
                            _0x8bb892 = _0x367813['readString'](0x6),
                            _0x3bf629 = _0x2e6771['_u8array']['length'] % 0x400;
                        _0x8bb892['startsWith']('PATCH') ? (_0x30e2fc = _0x31959e(_0x367813), 0x0 === _0x3bf629 && 'B19ED489' === _0x3d734d['toString'](0x10)['toUpperCase']() && ((_0x57a048 = new Uint8Array(_0x2e6771['_u8array']['length'] + 0x200))['set'](new Uint8Array(0x200), 0x0), _0x57a048['set'](_0x2e6771['_u8array'], 0x200), _0x2e6771 = new ejs_arraybuffer(_0x57a048))) : _0x8bb892['startsWith'](_0x4bc4ab) ? _0x30e2fc = _0xe7d66e(_0x367813) : _0x8bb892['startsWith']('BPS1') && (_0x30e2fc = _0x291a53(_0x367813), _0x3bf629 > 0x0 && 'A31BEAD4' === _0x3d734d['toString'](0x10)['toUpperCase']() && (_0x57a048 = _0x2e6771['_u8array']['slice'] ? _0x2e6771['_u8array']['slice'](_0x3bf629) : _0x2e6771['_u8array']['subarray'](_0x3bf629), _0x2e6771 = new ejs_arraybuffer(_0x57a048)));
                        try {
                            if (_0x2e3a2d = _0x30e2fc['apply'](_0x2e6771, !0x1)) {
                                var _0x27e145 = _0x2e3a2d['_u8array']['length'] % 0x400;
                                _0x27e145 > 0x0 && (_0x57a048 = _0x2e3a2d['_u8array']['slice'] ? _0x2e3a2d['_u8array']['slice'](_0x27e145) : _0x2e3a2d['_u8array']['subarray'](_0x27e145), _0x2e3a2d = new ejs_arraybuffer(_0x57a048)), ejs_loader.FS['unlink'](_0x4136ee), ejs_loader.FS['unlink'](E['startName']), ejs_loader.FS['writeFile'](E['startName'], _0x2e3a2d['_u8array']);
                            }
                        } catch (_0x6cf446) {}
                    } else {
                        var _0x23cafe, _0x157de4, _0x567245 = new ejs_arraybuffer(ejs_loader.FS['readFile'](E['startName'])),
                            _0xc9d854 = new ejs_arraybuffer(ejs_loader.FS['readFile'](_0x4136ee)),
                            _0x386761 = _0xc9d854['readString'](0x6);
                        _0x386761['startsWith']('PATCH') ? _0x23cafe = _0x31959e(_0xc9d854) : _0x386761['startsWith'](_0x4bc4ab) ? _0x23cafe = _0xe7d66e(_0xc9d854) : _0x386761['startsWith']('BPS1') && (_0x23cafe = _0x291a53(_0xc9d854));
                        try {
                            (_0x157de4 = _0x23cafe['apply'](_0x567245, !0x1)) && (ejs_loader.FS['unlink'](_0x4136ee), ejs_loader.FS['unlink'](E['startName']), ejs_loader.FS['writeFile'](E['startName'], _0x157de4['_u8array']));
                        } catch (_0x4395fe) {}
                    }
                }
            };
            I.assign(
                E['action'], {
                    PlayNow() {
                        LoadingP3.innerHTML = T.getLang('Loading...');
                        /**
                         * 获取核心信息
                         * 注意此文件含有新版核心 加密信息,
                         */
                        let system = E['system'];
                        return T.FetchItem({
                            url: `https://www.emulatorjs.com/api/v?name=${system}&_t=${T.time}`,
                            type: 'json',
                            success: (JsonData, headers) => E['callaction']('Wasm_ReadInfo', JsonData, headers),
                            error() {
                                //网络异常 本地测试
                                console.log('local json');
                                E['offline'] = !0;
                                return T.FetchItem({
                                    url: E['RootPath'] + 'json/' + system + '.json',
                                    type: 'json',
                                    success: (JsonData, headers) => E['callaction']('Wasm_ReadInfo', JsonData, headers),
                                });
                            }
                        });
                    },
                    /**
                     * 读取返回的配置信息
                     * @param {JSON} JsonData 配置数据数据
                     * @param {JSON} headers 返回信息文件头
                     * @returns {Function} 下载WASM
                     */
                    async Wasm_ReadInfo(JsonData, headers) {
                        console.log('/api/v?name= 加载核心配置信息 新版核心此处有加密信息 旧版则可用缓存下来', JsonData, headers);
                        var CoreRealName = CoreSystemList[E['system']],
                            isOrgin = !0x1,
                            threads = !0x1,
                            btnRestart = !0x0,
                            btnPause = !0x0,
                            btnSettings = !0x0,
                            btnVolume = !0x0,
                            btnScreenshot = !0x0,
                            dbCoreName,
                            CoreVersion = 0x1,
                            CoreState = !0x1,
                            CoreAsmjs = !0x1,
                            CoreWasm = !0x1,
                            CoreCheat = !0x1,
                            N64LeaAcy = !0x1,
                            ElmBtn = E['elements']['buttons'];
                        if (!CoreRealName) CoreRealName = E['system'];
                        RealSystemName = CoreRealName;
                        var CoreEnv = JsonData[E['system']];
                        //替换默认扩展名
                        if (JsonData['extensions']) SystemFileExt[CoreRealName] = JsonData['extensions'];
                        RealSystemExt = SystemFileExt[CoreRealName];
                        //替换核心参数
                        if (JsonData['options']) ejs_loader['coreOptions'] = JsonData['options'];
                        //disk-control
                        if (!0x1 === JsonData['disk-control']) ejs_loader['diskControl'] = !0x1;
                        //是否限制跨域资源
                        if ('undefined' != typeof SharedArrayBuffer) isOrgin = !0x0;
                        if (JsonData['threads']) threads = JsonData['threads'];
                        if (JsonData['buttons']) ejs_loader['buttonMaps'] = JsonData['buttons'];
                        if (JsonData['savepath']) E['savepath'] = JsonData['savepath'];
                        if (JsonData['servers']) ejs_loader['servers'] = JsonData['servers'];
                        if ('restart' in JsonData) btnRestart = JsonData['restart'];
                        if ('pause' in JsonData) btnPause = JsonData['pause'];
                        if ('settings' in JsonData) btnSettings = JsonData['settings'];
                        if ('volume' in JsonData) btnVolume = JsonData['volume'];
                        if ('screenshot' in JsonData) btnScreenshot = JsonData['screenshot'];
                        if ('keyboard' in JsonData && JsonData['keyboard']) E['keyboard'] = !0x0;
                        if (!btnRestart && I.elm(ElmBtn['restart'])) toggleHidden(ElmBtn['restart'], !0x0);

                        if (!btnPause) {
                            I.toArr(ElmBtn['play'], elm => toggleHidden(elm, !0x0));
                        };
                        if (!btnSettings) toggleHidden(ElmBtn['settings'], !0x0);
                        if (!btnVolume) toggleHidden(ElmContainer['querySelector'](getClassName('ejs__volume', 1)), !0x0);
                        if (!btnSettings && !btnVolume) ElmBtn['fullscreen']['style']['marginLeft'] = 'auto';
                        if (!btnScreenshot) toggleHidden(ElmContainer['querySelector']('.' ['concat'](getClassName('ejs__contextmenu'), ' li:nth-child(1)')), !0x0);
                        if (CoreEnv instanceof Array) {
                            CoreVersion = CoreEnv[0x0] ? CoreEnv[0x0] : 1;
                            CoreState = Boolean(CoreEnv[0x1]);
                            CoreAsmjs = Boolean(CoreEnv[0x2]);
                            CoreWasm = Boolean(CoreEnv[0x3]);
                            CoreCheat = Boolean(CoreEnv[0x4]);
                        } else if (CoreEnv) {
                            Boolean(CoreEnv['netplay']);
                            CoreVersion = CoreEnv['version'] ? CoreEnv['version'] : 0x1;
                            CoreState = Boolean(CoreEnv['state']);
                            CoreAsmjs = Boolean(CoreEnv['asmjs']);
                            CoreWasm = Boolean(CoreEnv['wasm']);
                            CoreCheat = Boolean(CoreEnv['cheat']);
                        }
                        if (CoreCheat) ejs_Controller['allowCheat'] = !0x0;
                        if (headers) {
                            ejs_loader['newCoreKey'] = headers['key'];
                            ejs_loader['newCoreKey2'] = headers['key2'];
                        }
                        if ('nds' == E['system'] && !EnvVariable['wasm']) CoreState = !0x1;
                        ejs_loader['coreFileVersion'] = CoreVersion;
                        ejs_loader['coreFileName'] = CoreRealName;
                        if (['webgl2', 'experimental-webgl2']['includes'](EnvVariable['webgl']['WEBGL_CONTEXT'])) N64LeaAcy = !0x0;
                        if ('undefined' != typeof EJS_N64_LEGACY && 0x1 == EJS_N64_LEGACY) N64LeaAcy = !0x1;
                        if (ejs_loader['arcadeCores']['includes'](E['system'])) ejs_loader['isArcadeCore'] = !0x0;

                        /**
                         * mame
                         * 需要检测游戏文件名
                         */
                        if ('mame' == E['system'] || 'mame0.193' == E['system'] || 'mame0.243' == E['system']) {
                            return await E['callaction']('Wasm_Mame_Check_Rooms');
                        } else {
                            var errorText = 'Please upgrade your browser to the latest version';
                            if (EnvVariable['wasm'] && CoreWasm) {
                                dbCoreName = CoreRealName + '-wasm.data';
                                if ('n64' === E['system'] && !N64LeaAcy) {
                                    dbCoreName = CoreRealName + '-legacy-wasm.data';
                                    CoreState = !0x1;
                                }
                                isLoadModule = !0x0;
                            } else if (CoreAsmjs) {
                                dbCoreName = CoreRealName, '-asmjs.data';
                                if ('n64' === E['system'] && !N64LeaAcy) {
                                    dbCoreName = CoreRealName + '-legacy-asmjs.data';
                                }
                            }
                            if (threads && isOrgin) {
                                dbCoreName = CoreRealName + '-wasm-threads.data';
                            }
                            if ('undefined' != typeof EJS_CUSTOM_COREFILE) {
                                /**
                                 * 自定义核心
                                 */
                                dbCoreName = EJS_CUSTOM_COREFILE;
                            }
                            if (['mupen64plus', 'mupen64plus-nx']['includes'](E['system']) && !N64LeaAcy) {
                                errorText = 'Your browser does not support WebGL2';
                                dbCoreName = null;
                            }
                        }

                        if (dbCoreName) E['callaction']('Wasm_Download', dbCoreName, CoreVersion);
                        else LoadingP3.innerHTML = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">' + errorText + '</strong>';
                        if (I.elm(ElmBtn['saveState'])) toggleHidden(ElmBtn['saveState'], !CoreState);
                        if (I.elm(ElmBtn['loadState'])) toggleHidden(ElmBtn['loadState'], !CoreState);
                        ejs_Controller['stateSupported'] = CoreState;
                    },
                    /**
                     * 
                     * @returns 下载MAME核心
                     */
                    async Wasm_Mame_Check_Rooms() {
                        if (!E['config']['gameUrl']) {
                            return E['callaction']('MAME_NENGE_SET_ROOMS');
                        } else {
                            let roomname = T.F.getname(E['config']['gameUrl']),
                                systemName = E['system'] == 'mame0.243' ? 'mame0.243' : 'mame';
                            T.FetchItem({
                                url: 'https://www.emulatorjs.com/api/' + systemName + '?name=' + roomname,
                                type: 'text',
                                success(result) {
                                    let index = E['callaction']('MAME_SHOW_INFO', result);
                                    if (index) {
                                        E['callaction']('Wasm_Download', systemName + '-' + index + '-wasm.data', ejs_loader['coreFileVersion']);
                                    } else {
                                        LoadingP3.innerHTML = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">' + T.getLang('Unsupported Game') + '</strong>'
                                    }
                                },
                                error() {
                                    LoadingP3.innerHTML = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">' + T.getLang('Network Error') + '</strong>';
                                }
                            });
                        }
                    },
                    NENGE_ROOMS_WELCOME_UI(list) {
                        let Div = T.$append(ejs_loader.loading, T.$ca('div', {
                            class: 'nenge-write-rooms'
                        }));
                        Div.innerHTML = `
                        <ul class="nenge-menu">
                            ${list.map(v => `<li>${T.getLang(v)}</li>`).join("")}
                        </ul>
                        <div class="is_down"></div>
                        <div class="is_write"></div>
                        <div class="storage_data"></div>
                        <p class="info-message">${T.getLang('uncompressed:auto check zip/7z/rar4,BIOS awayls to uncompressed load.')}</p>`;
                        return Div;
                    },
                    MAME_NENGE_SET_ROOMS() {
                        let Div = E['callaction']('NENGE_ROOMS_WELCOME_UI', [
                                'Import rooms',
                                'Import and decompressed*',
                                'View Rooms Storage',
                            ]),
                            GameSystem = E['system'],
                            nDiv = Nttr(Div),
                            ElmIsDown = nDiv.$('.is_down'),
                            ElmIsWrite = nDiv.$('.is_write'),
                            ElmStorage = nDiv.$('.storage_data'),
                            nList = I.toArr(nDiv.$('.nenge-menu').children),
                            systemName = E['system'] == 'mame0.243' ? 'mame0.243' : 'mame';;
                        E['MAMEDATA'] = {};
                        console.log(GameSystem);
                        nDiv.$('.info-message').innerHTML += `<hr>` + T.getLang('MAME must select a rooms name to check!');
                        if (nList && nList.length > 0) {
                            [0, 1].forEach(index =>
                                Nttr(nList[index]).click(
                                    e => E['callaction']('upload',
                                        async file => await E['callaction'](
                                            'GAME_NENGE_ADD_LIST',
                                            file.name,
                                            file,
                                            GameSystem,
                                            ElmIsWrite,
                                            index,
                                            'Set Rooms',
                                            async name => {
                                                if (T.F.getExt(name) != 'zip') return true;
                                            }
                                        ))
                                )
                            );
                            Nttr(nList[2]).click(
                                e => E['callaction']('GAME_NENGE_ADD_ROOMS', GameSystem, ElmStorage, 'Set Rooms')
                            );
                        }
                        Nttr(ElmIsWrite).click(async e => {
                            let elm = e.target;
                            if (I.elm(elm)) {
                                let data = elm.dataset;
                                if (!data) return;
                                if (data.path) {
                                    let name = data.path;
                                    let result = await E['callaction']('MAME_CHECK_ROOM_NAME', name, systemName);
                                    E['callaction']('MAME_SHOW_INFO', result, ElmIsDown, name);
                                }
                            }
                        });
                        Nttr(ElmStorage).click(async e => {
                            let elm = e.target;
                            if (I.elm(elm)) {
                                let data = elm.dataset;
                                if (!data) return;
                                if (data.name) {
                                    let name = data.name.replace(E['system'] + '-', '');
                                    let result = await E['callaction']('MAME_CHECK_ROOM_NAME', name, systemName);
                                    E['callaction']('MAME_SHOW_INFO', result, ElmIsDown, name);
                                } else if (data.remove) {
                                    DISK.DB.rooms.remove(data.remove);
                                    elm.parentNode.parentNode.remove();
                                }
                            }
                        });
                        Nttr(ElmIsDown).click(e => {
                            let elm = e.target;
                            if (I.elm(elm)) {
                                let data = elm.dataset;
                                if (data.bios) {
                                    if (E['config']['biosUrl'] && I.str(E['config']['biosUrl'])) {
                                        E['config']['biosUrl'] = [E['config']['biosUrl']];
                                    } else {
                                        E['config']['biosUrl'] = [];
                                    }
                                    if (!E['config']['biosUrl'].includes(data.bios)) E['config']['biosUrl'].push(data.bios)
                                } else if (data.name && data.index) {
                                    Nttr(ElmIsWrite).remove();
                                    Nttr(ElmStorage).remove();
                                    Nttr(ElmIsDown).remove();
                                    nDiv.remove();
                                    E['config']['gameUrl'] = data.name;
                                    E['callaction']('Wasm_Download', systemName + '-' + data.index + '-wasm.data', ejs_loader['coreFileVersion']);
                                }
                            }
                        });

                    },
                    MAME_CHECK_ROOM_NAME(RoomName, systemName) {
                        return T.FetchItem({
                            url: 'https://www.emulatorjs.com/api/' + systemName + '?name=' + RoomName,
                            type: 'text'
                        });
                    },
                    MAME_SHOW_INFO(result, ElmIsDown, RoomName) {
                        let html = "",
                            index, CoreState = !0,
                            ElmBtn = E['elements']['buttons'];
                        if (result.charAt(0) == '{') {
                            let JsonResult = I.Json(result);
                            CoreState = 'supported' == JsonResult['savestate'];
                            index = JsonResult['index'];
                            if (ElmIsDown) {
                                I.toArr(JsonResult, entry => {
                                    if (I.str(entry[1])) {
                                        html += `<p>${T.getLang('mame ' + entry[0])}:${entry[1]}</p>`
                                    } else if (entry[0] == 'files' && entry.length > 0) {
                                        html += `<h6>${T.getLang('mame ' + entry[0])}</h6>`;
                                        I.toArr(entry[1], value => {
                                            html += `<p>${value}<button data-bios="${value}">${T.getLang('must click when you run')}</button></p>`
                                        })
                                    }
                                })
                            } else {
                                if (JsonResult['files']) E['config']['biosUrl'] = JsonResult['files'];
                            }
                        } else if (result && result.charAt(0) != '|') {
                            let entry = result.split('|');
                            if (entry[0]) index = entry[0];
                            if (entry[1]) CoreState = entry[1] == 1;
                            if (ElmIsDown) {
                                html += `<p>${T.getLang('mame index')}:${entry[0]}</p>`;
                                html += `<p>${T.getLang('mame savestate')}:${entry[1]}</p>`;
                            }


                        }
                        if (I.elm(ElmBtn['saveState'])) toggleHidden(ElmBtn['saveState'], !CoreState);
                        if (I.elm(ElmBtn['loadState'])) toggleHidden(ElmBtn['loadState'], !CoreState);
                        ejs_Controller['stateSupported'] = CoreState;
                        if (ElmIsDown) {
                            if (!index) ElmIsDown.innerHTML = `<h3>${RoomName}</h3>` + T.getLang('this rooms can not run in:') + E['system'];
                            else ElmIsDown.innerHTML = `<h3>${RoomName}</h3>${html}<p><button data-index="${index}" data-name="${RoomName}">${T.getLang('Run this!')}</button></p>`;
                        } else {
                            return index;
                        }
                    },
                    async Wasm_Download(coreName, coreVersion) {
                        console.log('读取/下载 wasm file 若需加载指定核心(旧版)修改这里', coreName);
                        let url = `//www.emulatorjs.com/cores/${coreName}?v=${coreVersion}`,
                            key = coreName;
                        if (E['offline']) {
                            coreName = coreName.replace(/\.data$/, '.7z');
                            url = E['RootPath'] + '/oldcores/' + coreName + '?v=' + coreVersion;
                            key = 'old-' + coreName;
                        }
                        return T.FetchItem({
                            url,
                            key,
                            store: DISK.DB.system,
                            dataOption: {
                                version: coreVersion,
                                system: E['system'] == 'vbanext' ? 'gba' : E['system'],
                            },
                            version: coreVersion,
                            unpack: true,
                            /*
                            decode(contents) {
                                let wasmAsmjs = new TextDecoder().decode(contents);
                                wasmAsmjs = wasmAsmjs.replace(/\}Module\["run"\]\s*=\s*\/, '}var GLOBAL_BASE;if(!Module.MEMFS)Module.setMEMFS(MEMFS,FS,RA,GLOBAL_BASE);Module["run"]=');
                                return wasmAsmjs;
                            },
                            */
                            Filter: coreName.endsWith('.data') ? (wasmU8) => {
                                /**
                                 * 检查是否合法7z压缩包
                                 * 还原原始wasm.data非合法文件
                                 */
                                let mime = T.F.CheckExt(wasmU8);
                                console.log(mime);
                                if (!mime) {
                                    wasmU8 = wasmU8['slice'](0xc);
                                    wasmU8['set']([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c, 0x0, 0x3], 0x0);
                                }
                                return wasmU8;
                            } : undefined,
                            success(wasmU8) {
                                if (I.u8obj(wasmU8)) {
                                    /**
                                     * 兼容旧版未解压
                                     * 检查是否合法7z压缩包
                                     */
                                    let mime = T.F.CheckExt(wasmU8);
                                    if (!mime) {
                                        wasmU8 = wasmU8['slice'](0xc);
                                        wasmU8['set']([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c, 0x0, 0x3], 0x0);
                                    }
                                    T.unFile(wasmU8, e => {
                                        LoadingP1.innerHTML = `${T.getLang('Decompress Game Core')} ${e}`;
                                    }).then(data => E['callaction']('Wasm_ReadFile', data));

                                } else if (wasmU8) {
                                    E['callaction']('Wasm_ReadFile', wasmU8);
                                }
                                wasmU8 = null;
                            },
                            process(e) {
                                LoadingP3.innerHTML = `${T.getLang('Download Game Core')}   ${e}`;
                            },
                            error() {
                                LoadingP3.innerHTML = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Network Error</strong>';
                            }
                        }).catch(function (e) {
                            console.log(this, e)
                        });
                    },
                    async Wasm_ReadFile(datalist) {
                        console.log('读取并解压wasmfile');
                        let wasmAsmjs, memfile;
                        const Module = {
                            //TOTAL_MEMORY: 0x10000000,
                            noInitialRun: !0x0,
                            arguments: [],
                            preRun: [],
                            postRun: [],
                            canvas: ElmCanvas,
                            coreFileData: {},
                            print(text) {
                                //'undefined' != typeof EJS_DEBUG_ && !0x0 === EJS_DEBUG_ && console['log'](text);
                            },
                            printErr(text) {
                                if (!text) return;
                                //'undefined' != typeof EJS_DEBUG_ && !0x0 === EJS_DEBUG_ && console['log'](text);
                                //if (RealSystemName) {
                                //    if (SAVE_EVENT_TEXT[RealSystemName] && SAVE_EVENT_TEXT[RealSystemName].includes(text)) {
                                //ejs_Controller['saveSavFiles']();
                                //E['isAutoSave'] = true;
                                //    }
                                //}
                                //fix aspect-ratio 强行修正纵横比
                                //console.log(text);
                                let videosize = text.match(/Video\s*@\s*(\d+)x(\d+)/);
                                if (videosize) {
                                    console.log(videosize);
                                    //E['videosize'] = videosize[1] / videosize[2];
                                    Module.SetAspectRatio(videosize[1] / videosize[2]);
                                }
                                let newaspectRatio = text.match(/^\[INFO\]\s*SET_GEOMETRY:\s*\d+x\d+,\s*aspect:\s(.+?)\.$/);
                                if (newaspectRatio) {
                                    Module.SetAspectRatio(I.Int(newaspectRatio[1]));
                                }

                            },
                            SetAspectRatio(aspectRatio) {
                                console.log(aspectRatio);
                                E['videosize'] = aspectRatio;
                                I.setStyle(E['elements']['container'], {
                                    '--aspect-hw': 1 / aspectRatio,
                                    '--aspect-wh': E['videosize'],
                                });
                                ejs_loader.aspectRatio = E['videosize'];
                                if (Module.setCanvasSize) {
                                    Module.setCanvasSize(720, 720 / E['videosize']);
                                }

                            },
                            totalDependencies: 0x0,
                            monitorRunDependencies(left) {},
                            locateFile: function (url) {
                                if (Module.coreFileData[url]) {
                                    return window['URL']['createObjectURL'](new Blob([Module.coreFileData[url]], {
                                        'type': url.endsWith('.worker.js') ? 'application/javascript' : 'application/octet-stream'
                                    }));
                                }
                                return url;
                            },
                            readAsync(url, callback, error) {
                                if (url.byteLength) return callback(url);
                                return T.FetchItem({
                                    url,
                                    success(data) {
                                        if (data instanceof Uint8Array) return callback(data);
                                        error('404');
                                    },
                                    error() {

                                        error('404');
                                    }
                                });
                            },
                            monitorRunDependencies(left) {
                                //0x0 === left && E['callaction']('Wasm_Ready');
                            },
                            onRuntimeInitialized() {
                                I.defines(ejs_loader, {
                                    FS: Module.FS
                                }, 1);
                                if ('undefined' != typeof EJS_DEBUG_ && !0x0 === EJS_DEBUG_) {
                                    window['EJS_MODULE'] = ejs_loader['Module'];
                                    window['ejs_loader'] = ejs_loader;
                                    window['ejs_media'] = ejs_Controller
                                };
                                E['callaction']('Wasm_Ready', this);
                                if (Module.wasmBinary) delete Module.wasmBinary;
                                T.null(datalist);
                                T.null(Module.coreFileData);
                                Module.coreFileData = null;
                                datalist = null;
                            },
                            setMEMFS(MEMFS, FS, RA, GLOBAL_BASE) {
                                if (!this.MEMFS && MEMFS) I.defines(this, {
                                    MEMFS
                                }, 1);
                                if (!this.FS && FS) I.defines(this, {
                                    FS
                                }, 1);
                                if (!this.RA && RA) I.defines(this, {
                                    RA
                                }, 1);
                                if (!this.GLOBAL_BASE && GLOBAL_BASE) I.defines(this, {
                                    GLOBAL_BASE
                                }, 1);
                            }
                        };
                        I.toArr(datalist, entry => {
                            var entryName = T.F.getname(entry[0]),
                                entryExt = T.F.getExt(entry[0]);
                            if ('js' === entryExt && !entryName['includes']('.worker.js')) {
                                wasmAsmjs = I.u8buf(entry[1]) ? new TextDecoder().decode(entry[1]) : entry[1];
                                delete datalist[entry[0]];
                            } else if ('mem' === entryExt) {
                                memfile = entry[0];
                            } else if ('wasm' === entryExt) {
                                Module['wasmBinary'] = entry[1]
                                delete datalist[entry[0]];
                            }
                        });
                        Module.coreFileData = datalist;
                        /*
                        const SAVE_EVENT_TEXT = {
                            'gba': [
                                '[libretro INFO] GBA Savedata: Savedata synced',
                                '[libretro INFO] GB Memory: Savedata synced'
                            ]
                        };
                        */
                        I.defines(ejs_loader, {
                            Module
                        }, 1, 1);
                        if ('openbor' == E['system']) {
                            Module['preRun'] = [function () {
                                ENV['SDL_EMSCRIPTEN_KEYBOARD_ELEMENT'] = '#canvas';
                            }]
                        }
                        /**
                         * 如果报错 FS null
                         * wasmAsmjs.replace(/Module\["run"\]\*=\s*run;/,'if(!Module.FS)Module.FS=FS;Module["run"] = run;')
                         */
                        //wasmAsmjs = wasmAsmjs.replace(/Module\["run"\]\s*=\s*/, 'var GLOBAL_BASE;Nenge.I.defines(Module,{FS,MEMFS,GLOBAL_BASE},1);Module["run"]=').replace(/return\s*domElement/g,'console.log(domElement,111);return domElement').replace(/catch\s*\(e\)\s*\{/,'catch (e) {console.log(e);','function\s*indEventTarget\(target\)\s*\{','console.log(specialHTMLTargets);function findEventTarget(target) {');
                        if (['n64'].includes(E['system'])) E['callaction']('Memory_Reset', Module);
                        wasmAsmjs = wasmAsmjs.replace(/\}Module\["run"\]\s*=\s*/, '}var GLOBAL_BASE,RI,RA,MEMFS,FS;Module.setMEMFS(MEMFS,FS,RA,GLOBAL_BASE);Module["run"]=') + `;if(typeof ENV !='undefined')window.ENV = ENV;var EmulatorJS,EmulatorJS_;self.result = {EmulatorJS,EmulatorJS_};`;
                        I.defines(window, {
                            Module
                        }, 1, 1);
                        (new Function('Module', wasmAsmjs))(Module);
                        //await T.addJS(wasmAsmjs);
                        var result = self.result;
                        //wasmAsmjs = await T.FetchItem({url:'cores/psx-wasm/retroarch.js?'+T.time,type:'text'});
                        //let result = (new Function('Module', wasmAsmjs + `;if(typeof ENV !='undefined')window.ENV = ENV;var EmulatorJS,EmulatorJS_;return {EmulatorJS,EmulatorJS_};`))(Module) || {};
                        console.log(result);
                        if (self.result) {
                            if (!I.none(result.EmulatorJS)) {
                                result.EmulatorJS(Module);
                            } else if (result.EmulatorJS_) {
                                I.await(result.EmulatorJS_.ready) ? result.EmulatorJS_.ready().then(e => e(Module)) : I.func(result.EmulatorJS_) ? result.EmulatorJS_(Module) : '';
                                ejs_loader['newCore'] = !0x0
                            }
                        }
                        if (memfile && !ejs_loader['newCore']) E['callaction']('MemData_Reset', Module.coreFileData[memfile]);
                        //I.defines(ejs_loader, {FS: Module.FS}, 1,1);
                        wasmAsmjs = null;
                    },
                    async Wasm_Ready() {
                        var Module = ejs_loader.Module,
                            FS = ejs_loader.FS;
                        console.log('核心已经启动,初始化!');
                        LoadingP1.innerHTML = T.getLang('Game Core ready');
                        I.toArr(['bindFunction', 'setGamepadDialog', 'setCacheDialog', 'setLoadingDialog', 'setNetplayDialog', 'setCheatDialog', 'initGamepad', 'initKeyboard', 'listeners'], entry => ejs_Controller[entry]['call'](E));
                        if (!Module.FS) I.defines(Module, {
                            FS
                        }, 1, 1);
                        /**
                         * 绑定Module
                         */
                        DISK.SetModule(Module);
                        DISK.SetDB({
                            '/data': DISK.DB.saves,
                            '/Saves': DISK.DB.openbor,
                        });
                        I.defines(ejs_loader, {
                            DISK
                        }, 1);
                        console.log('替换FS虚拟硬盘');
                        //设置一些目录 以及绑定目录虚拟硬盘
                        FS['createPath']('/', 'etc', !0x0, !0x0);
                        FS['createPath']('/', 'data', !0, !0);
                        FS['createPath']('/', 'Saves', !0, !0);
                        /*
                        'undefined' != typeof IDBFS ? FS['mount'](IDBFS, {}, '/data/saves') : FS['mount'](FS['filesystems']['IDBFS'], {}, '/data/saves');
                        */
                        FS['mkdir']('/shader');
                        //ejs_loader.screenshots = '/data/screenshots';
                        E['savefullpath'] = '/data/saves/' + E['savepath'];
                        if ('openbor' != E['system']) {
                            E['savefullpath'] = '/data/saves/' + E['savepath'];
                            FS['mount'](DISK, {}, '/data');
                            FS['mkdir']('/data/saves');
                            //FS['mkdir'](ejs_loader.screenshots);
                            FS['mkdir'](E['savefullpath']);
                        } else {
                            E['savefullpath'] = '/Saves';
                            FS['mount'](DISK, {}, '/Saves');
                        }
                        console.log(E['savefullpath']);
                        await DISK.mountReady();
                        DISK['action']['indexdb-sync'] = (a, b) => {
                            console.log(a, b);
                            a && _0x88c152['show'](E['elements']['container'], b.join('<hr>'));
                        }
                        //加载滤镜
                        await T.FetchItem({
                            url: E['RootPath'] + 'frontend/shader.zip',
                            unpack: true,
                            store: DISK.DB.libjs,
                            success(data) {
                                I.toArr(data, entry => DISK.MKFILE('/shader/' + entry[0], entry[1]))
                            }
                        });
                        if (FS.analyzePath('shader/' + ejs_data['storage']['get']('shader')).exists) {
                            DISK.MKFILE('/shader/shader.glslp', FS.readFile('shader/' + ejs_data['storage']['get']('shader')));
                        }
                        /**
                             * 每四秒 自动同步保存
                        (function () {
                            return;
                            window['setInterval'](function () {
                                if (E['started']) {
                                    var gameName = T.getKeyName(E['startName']),
                                        path = `${E['savefullpath']}/${gameName}.${E['gameSaveExt']}`,
                                        _0x14c54c = [];
                                    ejs_Controller['saveSavFiles'] && ejs_Controller['saveSavFiles']();
                                    if ('' != E['config']['savename']) {
                                        if (FS.analyzePath(path).exists) {
                                            FS['writeFile'](`${E['savefullpath']}/${E['config']['savename']}.${E['gameSaveExt']}`, FS['readFile'](path));
                                        }
                                    }
                                }
                            }, 4000);
                        }());
                             */
                        var cfgText = 'savefile_directory = ' + E['savefullpath'] +
                            '\nsystem_directory = /\n' +
                            '\nsavestate_directory = ' + E['savefullpath'] +
                            '\nvideo_vsync = true' +
                            '\nscreenshot_directory = /' +
                            '\nvideo_shader = /shader/shader.glslp' +
                            '\nvideo_shader_enable = true' +
                            '\nvideo_font_enable = false' +
                            '\nvideo_scale = 1.0' +
                            '\nvideo_gpu_screenshot = false' +
                            '\ncamera_allow = "false"' +
                            '\ncamera_driver = "null"' +
                            '\ncamera_device = "null"\n';


                        var _0xe4449b = ejs_data['defaultCoreOptionsValues']['call'](E);
                        if (E['lightgun']) {
                            if ('nes' === E['system']) {
                                cfgText += 'input_libretro_device_p2 = "258"\n'

                            }
                            if ('segaMS' !== E['system'] && 'segaMD' !== E['system'] && 'segaCD' !== E['system']) {

                            } else {
                                _0xe4449b['genesis_plus_gx_gun_cursor'] = 'yes', _0xe4449b['genesis_plus_gx_invert_mouse'] = 'yes', _0xe4449b['genesis_plus_gx_bram'] = 'per game', 0x1 == E['lightgun'] ? cfgText += 'input_libretro_device_p2 = "260"\n' : 0x2 == E['lightgun'] ? cfgText += 'input_libretro_device_p2 = "516"\n' : 0x3 == E['lightgun'] && (cfgText += 'input_libretro_device_p2 = "772"\x0a')
                            }
                            if ('snes' === E['system']) {
                                cfgText += 'input_libretro_device_p2 = "260"\x0a'
                            }
                            if (['snes2002', 'snes2005', 'snes2010']['includes'](E['system'])) {
                                cfgText += 'input_libretro_device_p2 = "260"\n'
                            }
                            if (['fbneo']['includes'](E['system'])) {
                                cfgText += 'input_libretro_device_p1 = "514"\n'
                            }
                        }
                        if (E['mouse']) {
                            if ('snes' === E['system']) cfgText += 'input_libretro_device_p1 = 2\n';
                            if (['snes2002', 'snes2005', 'snes2010']['includes'](E['system'])) cfgText += 'input_libretro_device_p1 = 2\x0a';
                            if ('segaMD' === E['system']) cfgText += 'input_libretro_device_p2 = 2\n';
                        }
                        if (E['multitap']) {
                            if ('snes' === E['system']) cfgText += 'input_libretro_device_p2 = 257\x0a';
                            if (['snes2002', 'snes2005', 'snes2010']['includes'](E['system'])) cfgText += 'input_libretro_device_p2 = 257\n';


                        }
                        if (['n64', 'mupen64plus', 'mupen64plus2', 'mupen64plus-nx']['includes'](E['system'])) {
                            cfgText += 'input_libretro_device_p1 = 5\n' +
                                'input_libretro_device_p2 = 5\n' +
                                'input_libretro_device_p3 = 5\n' +
                                'input_libretro_device_p4 = 5\n'
                        }
                        if (ejs_loader['arcadeCores']['includes'](E['system'])) {
                            cfgText += 'input_libretro_device_p1 = 5\n' +
                                'input_libretro_device_p2 = 5\n' +
                                'input_libretro_device_p3 = 5\n' +
                                'input_libretro_device_p4 = 5\n'

                        }
                        E['system'];
                        if ('fmsx' === E['system']) {
                            cfgText += 'input_libretro_device_p1 = 513\n';

                        }
                        cfgText += 'video_smooth = false\x0a';
                        var coresOptionData = _0x288469(_0xe4449b, ejs_data['storage']['data']['core-options'] || {}),
                            coresOptionCfg = '';
                        if ('psx' == E['system']) {
                            coresOptionCfg = 'pcsx_rearmed_memcard2 = "disabled"\n'
                        }
                        I.toArr(coresOptionData, entry => {
                            //if(entry[1]=='nul')return;
                            coresOptionCfg += `${entry[0]} = "${entry[1]}"\n`;
                            E['addEvent'](ElmContainer, 'start-game', function (_0x53ed11) {
                                setTimeout(function () {
                                    'pcsx_rearmed_frameskip' != entry[0] && 'pcsx_rearmed_memcard2' != entry[0] && ejs_Controller['CF']('setVariable', entry[0], entry[1]);
                                }, 0x32);

                            });
                        });
                        FS['createDataFile']('/etc', 'retroarch.cfg', cfgText, !0x0, !0x0);
                        if (FS['createFolder']) {
                            FS['createFolder']('/home/web_user', '.config', !0x0, !0x0);
                            FS['createFolder']('/home/web_user/.config', 'retroarch', !0x0, !0x0);
                        } else {
                            FS['createPath']('/home/web_user', '.config', !0x0, !0x0);
                            FS['createPath']('/home/web_user/.config', 'retroarch', !0x0, !0x0)
                        }
                        if (0x1 == E['lightgun'] && 'mame0.243' == E['system']) {

                            ejs_loader['Module']['canvas']['addEventListener']('mousemove', function (event) {
                                var clientWidth = ejs_loader['Module']['canvas']['clientWidth'],
                                    clientHeight = ejs_loader['Module']['canvas']['clientHeight'],
                                    halfWidth = clientWidth / 0x2,
                                    halfHeight = clientHeight / 0x2,
                                    offsetX = 0x0,
                                    offsetY = 0x0,
                                    offsetId = 0x0;
                                if (event['offsetX'] >= 0x0 && event['offsetY'] <= clientWidth) {
                                    if (event['offsetX'] > halfWidth) {

                                        offsetX = (event['offsetX'] - halfWidth) / clientWidth * 0x2 * 0x7fff;
                                        offsetId = 0x10;
                                        ejs_Controller['CF']('simulateInput', 0x0, 0x11, 0x0);
                                        ejs_Controller['CF']('simulateInput', 0x0, offsetId, offsetX)

                                    } else {

                                        offsetX = (event['offsetX'] - halfWidth) / clientWidth * 0x2 * 0x7fff;
                                        offsetId = 0x11, ejs_Controller['CF']('simulateInput', 0x0, 0x10, 0x0);
                                        ejs_Controller['CF']('simulateInput', 0x0, offsetId, offsetX);
                                    }
                                    if (event['offsetY'] > halfHeight) {
                                        offsetY = (event['offsetY'] - halfHeight) / clientHeight * 0x2 * 0x7fff;
                                        offsetId = 0x12;
                                        ejs_Controller['CF']('simulateInput', 0x0, 0x13, 0x0);
                                        ejs_Controller['CF']('simulateInput', 0x0, offsetId, offsetY)

                                    } else {
                                        offsetY = (event['offsetY'] - halfHeight) / clientHeight * 0x2 * 0x7fff;
                                        offsetId = 0x13, ejs_Controller['CF']('simulateInput', 0x0, 0x12, 0x0);
                                        ejs_Controller['CF']('simulateInput', 0x0, offsetId, offsetY)
                                    }
                                }
                            }, !0x1);
                            ElmContainer['addEventListener']('mousedown', function (event) {

                                switch (event['which']) {
                                    case 0x1:
                                        ejs_Controller['CF']('simulateInput', 0x0, 0x8, 0x1);
                                        break;
                                    case 0x2:
                                        break;
                                    case 0x3:
                                        ejs_Controller['CF']('simulateInput', 0x0, 0x0, 0x1);
                                }
                            }, !0x1);
                            ElmContainer['addEventListener']('mouseup', function (event) {

                                switch (event['which']) {
                                    case 0x1:
                                        ejs_Controller['CF']('simulateInput', 0x0, 0x8, 0x0);
                                        break;
                                    case 0x2:
                                        break;
                                    case 0x3:
                                        ejs_Controller['CF']('simulateInput', 0x0, 0x0, 0x0);
                                }
                            }, !0x1)

                        }
                        FS['createDataFile']('/home/web_user/.config/retroarch', 'retroarch-core-options.cfg', coresOptionCfg, !0x0, !0x0);
                        FS['createDataFile']('/etc', 'retroarch-core-options.cfg', coresOptionCfg, !0x0, !0x0);
                        /*
                        if (E['config']['biosUrl']) {
                           
                        } else {
                            E['callaction']('GAME_ParentData');
                        }
                        */
                        E['callaction']('GAME_ReadBios');
                    },
                    async GAME_ReadBios() {
                        let urlList = E['config']['biosUrl'],
                            system = E['system'] == 'vbanext' ? 'gba' : E['system'];
                        if (urlList.length == 0 && ejs_loader['arcadeCores']['includes'](E['system'])) {
                            //街机不能没有bios 因此强制加载bios
                            urlList = [T.RootPath + 'bios/arcade.7z']
                        }
                        if (urlList) {
                            if (I.str(urlList)) urlList = [urlList];
                            await I.Async(urlList.map(async url => {
                                let autounpack = true; //根据大小是否自动解压
                                if (T.F.getExt(url) == 'zip' && ejs_loader['arcadeCores']['includes'](E['system'])) {
                                    //当文件为zip时 判断是否街机
                                    autounpack = false;
                                }
                                await T.FetchItem({
                                    url,
                                    store: DISK.DB.bios,
                                    autounpack,
                                    dataOption: {
                                        system
                                    },
                                    success(u8) {
                                        if (I.u8obj(u8)) {
                                            DISK.MKFILE(T.F.getname(url), u8, 1);
                                            ejs_sizelength += u8.byteLength;
                                        } else if (u8) {
                                            I.toArr(
                                                u8,
                                                entry => {
                                                    DISK.MKFILE(entry[0], entry[1], 1);
                                                    ejs_sizelength += entry[1].byteLength;
                                                }
                                            );
                                        }
                                        u8 = null;
                                    },
                                    process(e) {
                                        LoadingP2.innerHTML = T.getLang('Download BIOS') + ' ' + e;
                                    },
                                    error(e) {
                                        LoadingP2.innerHTML = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">' + e.message, '</strong>';
                                        E['callaction']('GAME_ParentData');
                                    }
                                });
                            }));
                        };
                        E['callaction']('GAME_ParentData');
                    },
                    async GAME_ParentData() {
                        var UrlList = E['config']['gameParentUrl'],
                            UrlLen = 0x0,
                            system = E['config']['system'];
                        if (I.str(UrlList)) UrlList = [UrlList];
                        if (UrlList && UrlList.length > 0) {
                            console.log('这里没看懂here unknow  不知道会不会报错,大概是设置类似MAME 前置Rooms,this func may error');
                            await Promise.all(UrlList.map(async sUrl => {
                                let name = T.F.getname(sUrl),
                                    nameExt = name.split('.').pop(),
                                    isSample = !1,
                                    isNvram = !1,
                                    key = system + '-' + name;
                                if (sUrl['indexOf']('/sample/') != -1) {
                                    isSample = !0;
                                    key = system + '-sample-' + name;
                                }
                                if (sUrl['indexOf']('/nvram/') != -1) {
                                    isNvram = !0x0;
                                    key = system + '-nvram-' + name;
                                }
                                return T.FetchItem({
                                    url: sUrl,
                                    store: DISK.DB.rooms,
                                    key,
                                    dataOption: {
                                        system
                                    },
                                    success(dataU8) {
                                        ejs_sizelength += dataU8.byteLength;
                                        if ('chd' == nameExt) {
                                            _0x1839c0 = !1;
                                            DISK.MKFILE(name, dataU8, 1);
                                        } else if (isNvram) {
                                            T.unFile(dataU8).then(data => {
                                                if (data instanceof Uint8Array) {
                                                    ejs_sizelength += dataU8.byteLength;
                                                    DISK.MKFILE(name, dataU8, 1);
                                                } else {
                                                    I.toArr(data, entry => {
                                                        ejs_sizelength += entry[1].byteLength;
                                                        DISK.MKFILE(E['savefullpath'] + '/mame/' + entry[0], entry[1], 1);
                                                    });
                                                }
                                            })
                                        } else if (isSample) {
                                            DISK.MKFILE('/samples/' + name, dataU8, 1);
                                        } else {
                                            DISK.MKFILE('/' + name, dataU8, 1)
                                        }
                                        UrlLen++;
                                    },
                                    process(e) {
                                        LoadingP3.innerHTML = `${T.getLang('Download Game Data')}   ${name}${e}(${UrlLen}/${UrlList.length})`;
                                    },
                                    error() {
                                        UrlLen++;
                                    }
                                });
                            }));
                        }
                        E['callaction']('GAME_Patch');
                    },
                    async GAME_Patch() {
                        if (E['config']['gamePatchUrl']) {
                            console.log('game patch');
                            let url = E['config']['gamePatchUrl'],
                                name = T.F.getname(url);
                            return T.FetchItem({
                                url,
                                upack: true,
                                //key:'patch-'+GameName,
                                //store:DISK.DB.rooms',
                                //dataOption:{
                                //    'system':GameSystem
                                //},
                                success(u8) {
                                    if (I.u8obj(u8)) {
                                        ejs_sizelength += u8['length'];
                                        DISK.MKFILE(name, u8, 1);
                                        if (['ips', 'bps', 'ups']['includes'](name.split('.').pop()) && !ejs_loader['gamePatch']) {
                                            ejs_loader['gamePatch'] = '/' + entry[0];
                                        }
                                    } else {
                                        I.toArr(
                                            u8,
                                            entry => {
                                                let fileName = T.F.getname(entry[0]);
                                                DISK.MKFILE(fileName, entry[1], 1);
                                                ejs_sizelength += entry[1].byteLength;
                                                if (['ips', 'bps', 'ups']['includes'](fileName.split('.').pop()) && !ejs_loader['gamePatch']) {
                                                    ejs_loader['gamePatch'] = '/' + entry[0];
                                                }
                                                entry[1] = null;

                                            }
                                        );
                                    }
                                    u8 = null;
                                    E['callaction']('GAME_Rooms');
                                },
                                error(e) {
                                    LoadingP3.innerHTML = `<strong style="color:#f00;text-shadow: 0px 0px 3px;">${e.message}</strong>`;
                                    E['callaction']('GAME_Rooms');
                                },
                                process(e) {
                                    LoadingP3.innerHTML = `${T.getLang('Loading Game Data')} ${e}`;
                                }

                            });
                        }
                        E['callaction']('GAME_Rooms');
                    },
                    async GAME_Rooms() {
                        console.log('读取游戏文件');
                        var Config = E['config'],
                            GameUrl = Config['gameUrl'] || '',
                            GameSystem = Config['system'],
                            GameName = T.F.getname(GameUrl),
                            len = 0;
                        if ('vbanext' == GameSystem) {
                            GameSystem = 'gba';
                        }
                        if (E['savepath']) {
                            GameSystem = E['savepath'];
                        }
                        let html = T.getLang('Download Game Data');
                        if (ejs_loader['arcadeCores']['includes'](E['system']) && E['config']['gameParentUrl']['length']) {
                            len += E['config']['gameParentUrl']['length'];
                        } else if (E['config']['gamePatchUrl']) {
                            len += 1;
                        }
                        if (len) LoadingP3.innerHTML = html + `${len - 1}/${len}`;
                        if (!GameUrl) {
                            /**
                             * 自定义 写入文件
                             */
                            return E['callaction']('GAME_NENGE_WriteRooms', GameSystem);
                        }
                        let autounpack = true; //大小小于一定值自动解压保存 开启此项有效减少等待时间
                        if (T.F.getExt(url) == 'zip' && ejs_loader['arcadeCores']['includes'](E['system'])) {
                            //当文件为zip时 判断是否街机
                            autounpack = false;
                        }
                        return T.FetchItem({
                            url: GameUrl,
                            key: GameSystem + '-' + GameName,
                            store: DISK.DB.rooms,
                            dataOption: {
                                'system': GameSystem
                            },
                            autounpack,
                            success(data) {
                                if (I.u8obj(data)) {
                                    ejs_sizelength += data.byteLength;
                                    DISK.MKFILE(E['callaction']('GAME_GET_PATH', GameName), data, 1);
                                } else if (data) {
                                    I.toArr(data, entry => {
                                        if (/^__MACOSX/.test(entry[0])) {
                                            return;
                                        }
                                        ejs_sizelength += entry[1].byteLength;
                                        DISK.MKFILE(E['callaction']('GAME_GET_PATH', entry[0]), entry[1], 1);
                                    })
                                }
                                E['callaction']('GAME_START');
                                data = null;
                            },
                            error(e) {
                                LoadingP3.innerHTML = `<strong style="color:#f00;text-shadow: 0px 0px 3px;">${e.message}</strong>`;
                            },
                            process(e) {
                                LoadingP3.innerHTML = `${T.getLang('Loading Game Data')}    ${e}`;
                            }

                        });
                    },
                    GAME_GET_PATH(path) {
                        path = T.F.getname(path);
                        let ext = T.F.getExt(path);
                        console.log(RealSystemExt);
                        if (RealSystemExt['includes'](ext)) {
                            if ('openbor' == E['system']) {
                                path = 'Paks/' + path;
                                E['startName'] = path;
                            } else {
                                E['startName'] = path;
                            }
                        }
                        return path;
                    },
                    async GAME_NENGE_WriteRooms(GameSystem) {

                        let Div = E['callaction']('NENGE_ROOMS_WELCOME_UI', [
                                'Import rooms',
                                'Import and decompressed*',
                                'View Rooms Storage',
                                'Import Bios*',
                            ]),
                            nDiv = Nttr(Div),
                            ElmIsWrite = nDiv.$('.is_write'),
                            ElmStorage = nDiv.$('.storage_data');
                        ElmIsWrite.innerHTML = await E['callaction']('GAME_NENGE_GET_BIOS_LIST', GameSystem);
                        I.toArr(Nttr(Div).$('.nenge-menu').children, (elm, index) => {
                            if (index == 3) {
                                Nttr(elm).click(
                                    e => {
                                        E['callaction'](
                                            'upload',
                                            async file => {
                                                let u8 = await T.unFile(file);
                                                E['callaction']('GAME_NENGE_ADD_BIOS', file.name, u8, GameSystem, ElmIsWrite);
                                            }
                                        )
                                    }
                                )
                            } else if (index == 2) {
                                Nttr(elm).click(e => E['callaction']('GAME_NENGE_ADD_ROOMS', GameSystem, ElmStorage));
                            } else if (index == 0 || index == 1) {
                                Nttr(elm).click(
                                    e => {
                                        E['callaction'](
                                            'upload',
                                            async file => {
                                                console.log(elm, index);
                                                await E['callaction']('GAME_NENGE_ADD_LIST', file.name, file, GameSystem, ElmIsWrite, index);
                                                file = null;
                                            }
                                        )
                                    }
                                )
                            }
                        });
                        Nttr(Nttr(Div).$('.storage_data')).click(async e => {
                            let elm = e.target;
                            if (I.elm(elm)) {
                                let name = elm.dataset.name;
                                if (name) {
                                    elm.removeAttribute('data-name');
                                    await E['callaction']('GAME_NENGE_ADD_LIST', name, null, GameSystem, ElmIsWrite);
                                } else if (elm.dataset.remove) {
                                    elm.parentNode.parentNode.remove();
                                    DISK.DB.rooms.remove(elm.dataset.remove);
                                }

                            }
                        });
                        Nttr(Nttr(Div).$('.is_write')).click(async e => {
                            let elm = e.target;
                            if (I.elm(elm)) {
                                let path = elm.dataset.path;
                                if (path) {
                                    E['startName'] = path;
                                    Nttr(Div).remove();
                                    E['callaction']('GAME_START');
                                } else if (elm.dataset.removebios) {
                                    elm.parentNode.parentNode.remove();
                                    DISK.DB.bios.remove(elm.dataset.removebios);
                                } else if (elm.dataset.writebios) {
                                    E['callaction']('GAME_NENGE_ADD_BIOS', elm.dataset.writebios, null, GameSystem, elm);
                                }
                            }
                        });

                    },
                    async GAME_NENGE_ADD_LIST(path, u8, system, ElmIsWrite, index, text, check) {
                        let pathname = path,
                            havedata = !1;
                        if (!text) text = 'Run Start';
                        if (!u8) {
                            u8 = await DISK.DB.rooms.data(path);
                            pathname = path.replace(/^[a-z0-9\-]+\-/i, '');
                        } else if (u8) {
                            if (index) u8 = await T.unFile(u8);
                            else if (I.blob(u8)) u8 = new Uint8Array(await u8.arrayBuffer());
                            havedata = !0;
                            pathname = path;
                        }
                        if (I.u8obj(u8)) {
                            if (check && await check(pathname)) return;
                            if (havedata) await DISK.DB.rooms.setData(system + '-' + pathname, u8, {
                                filesize: u8.byteLength,
                                system
                            });
                            pathname = E['callaction']('GAME_GET_PATH', pathname);
                            DISK.MKFILE(pathname, u8, 1);
                            ejs_sizelength += u8.byteLength;
                            T.$append(ElmIsWrite, T.$ct('div', `${pathname}<span data-path="${pathname}">${T.getLang(text)}</span>`));
                        } else {
                            I.toArr(u8, async entry => {
                                if (/^(__MACOSX|\.)/.test(entry[0])) return;
                                let filename = T.F.getname(entry[0]);
                                if (check && await check(filename)) return;
                                filename = E['callaction']('GAME_GET_PATH', filename);
                                if (havedata) {
                                    await DISK.DB.rooms.setData(system + '-' + filename, entry[1], {
                                        filesize: entry[1].byteLength,
                                        system
                                    });
                                };
                                DISK.MKFILE(filename, entry[1], 1);
                                ejs_sizelength += entry[1].byteLength;
                                T.$append(ElmIsWrite, T.$ct('div', `${filename}<span data-path="${filename}">${T.getLang(text)}</span>`));

                            })
                        }
                        u8 = null;
                    },
                    async GAME_NENGE_ADD_ROOMS(GameSystem, elm, text) {
                        let key, list2;
                        key = IDBKeyRange.only(GameSystem);
                        let list = await DISK.DB.rooms.keys({
                                only: 1,
                                index: 'system',
                                Range: IDBKeyRange.only(GameSystem)
                            }),
                            html = "";
                        if (E['config']['system'] == 'gba') {
                            list2 = await DISK.DB.rooms.keys({
                                only: 1,
                                index: 'system',
                                Range: IDBKeyRange.only('gb')
                            });
                            if (list2) {
                                if (I.array(list2)) list = (list || []).concat(list2);
                            }
                        }
                        if (list) {
                            I.toArr(list, entry => {
                                let path, filename;
                                if (I.str(entry)) {
                                    if (E['config']['system'] == 'vbanext' && /\.(gb|gbc)$/i.test(entry)) return;
                                    filename = entry.replace(/^[a-z0-9]+\-/, '');
                                    path = entry;
                                }
                                html += `<li><p>${path}</p><p><span data-remove="${path}">${T.getLang('Delete')}</span><span data-name="${path}">${T.getLang(text || 'Write in')}</span></p></li>`;
                            });
                        }
                        elm.innerHTML = `<ul>${html}</ul>`;

                    },
                    async GAME_NENGE_ADD_BIOS(path, data, system, elm) {
                        if (!data) {
                            elm.removeAttribute('data-writebios');
                            elm.innerHTML = T.getLang('Write complete');
                            data = await DISK.DB.bios.data(path);
                        } else {
                            if (I.blob(data)) data = new Uint8Array(await file.arrayBuffer());
                            await DISK.DB.bios.setData(path, data, {
                                system
                            });
                            T.$append(elm, T.$ct('div', `<div><p>BIOS:${path}</p><p><span>${T.getLang('Write complete')}</span></p></div>`))

                        }
                        if (I.u8obj(data)) {
                            ejs_sizelength += data.byteLength;
                            DISK.MKFILE(path, data, 1);
                        } else I.toArr(data, entry => {
                            if (/^(__MACOSX|\.)/.test(entry[0]) || !I.u8obj(entry[1])) return;
                            ejs_sizelength += entry[1].byteLength;
                            DISK.MKFILE(entry[0], entry[1], 1);
                        });
                        data = null;
                    },
                    async GAME_NENGE_GET_BIOS_LIST(GameSystem) {
                        let bhtml = "";
                        I.toArr(
                            await DISK.DB.bios.keys({
                                index: 'system',
                                Range: IDBKeyRange.only(GameSystem)
                            }),
                            entry => {
                                let path = I.str(entry) ? entry : entry[0];
                                bhtml += `<div><p>BIOS:${path}</p><p><span data-remvebios="${path}">${T.getLang('Delete')}</span><span data-writebios="${path}">${T.getLang('Write Bios')}</span></p></div>`;
                            }
                        );
                        return bhtml;
                    },
                    GAME_START(gamePath) {
                        var saveExt = 'srm',
                            Module = ejs_loader['Module'];
                        if (!E['startName'] && gamePath) E['startName'] = gamePath;
                        if (!E['startName']) {
                            LoadingP3.innerHTML = T.getLang('Game name lost');
                            return E['callaction']('GAME_NENGE_WriteRooms', E['config']['system']);
                        }
                        E['gameName'] = T.F.getKeyName(E['startName']);
                        if ('nds' === E['system']) saveExt = 'dsv';
                        if (['melonds', 'zc210']['includes'](E['system'])) saveExt = 'sav';
                        E['gameSaveExt'] = saveExt;
                        E['gamePathKey'] = E['savefullpath'] + '/' + E['gameName'];
                        E['gameSavePath'] = E['gamePathKey'] + '.' + E['gameSaveExt'];
                        try {
                            E['callaction']('Memory_Reset', ejs_loader['Module']);
                            PatchToContent();
                            var hash = ejs_loader['hash'] + ejs_loader['hash2'] + ejs_loader['hash3'],
                                ArgInfo = ['-v', E['startName'], hash];
                            /**
                             * 为什么离线不能运行 因为新版核心是使用随机hash,目前不知道他的算法,其HASH在获取api?name=gba中header头里面的key2 
                             */
                            if (ejs_loader['newCore'] && ejs_loader['newCoreKey']) ArgInfo[2] = ejs_loader['newCoreKey'];
                            if (Module['_get_content_crc'] && ejs_loader['newCoreKey2']) ArgInfo[2] = ejs_loader['newCoreKey2'];

                            if (Module['specialHTMLTargets']) {
                                Module['specialHTMLTargets']['#canvas'] = Module['canvas'];
                                Module['specialHTMLTargets']['#canvas-input'] = Module['canvas']['parentElement']['querySelector']('input');
                                Module['specialHTMLTargets']['#canvas-mouse'] = E['elements']['wrapper'];
                                if ('amiga' == E['system']) {
                                    Module['specialHTMLTargets']['#canvas-mouse'] = E['elements']['wrapper']
                                }
                            }
                            if ('openbor' == E['system']) ArgInfo = ['-v', ejs_loader['newCoreKey2'] || hash];
                            console['log'](ArgInfo);
                            Module['callMain'](ArgInfo);
                            ejs_loader['loading'].remove();
                            E['callEvent'](ElmContainer, 'start-game');
                            T.triger(window, 'resize');
                        } catch (e) {
                            console.log(e);
                            LoadingP3.innerHTML = `<strong style="color:#f00;text-shadow: 0px 0px 3px;">${T.getLang('Failed to start game')}</strong>`;
                        }
                    },
                    upload(func, bool, ARG) {
                        let input = T.$ce('input');
                        input.type = 'file';
                        if (bool) input.multiple = true;
                        if (ARG) I.toArr(ARG, entry => input.setAttribute(entry[0], entry[1]));
                        input.onchange = e => {
                            let files = e.target.files;
                            if (files && files.length > 0) {
                                I.toArr(files, file => func(file));
                            }
                            input.remove();
                        };
                        input.click();
                    },
                    Memory_Reset(Module) {
                        //return;
                        /*
                        if (isLoadModule) {
                            ejs_loader.Module['TOTAL_MEMORY'] = 0x0;
                            if ('jaguar' == E['system']) {
                                ejs_loader.Module['TOTAL_MEMORY'] = 0x10000000;
                            }
                            if (['nds', 'nes', 'snes', 'arcade', 'mame']['includes'](E['system'])) {
                                ejs_loader.Module['TOTAL_MEMORY'] = 0x0;
                            }
                            if (['snes2002', 'snes2005', 'snes2010']['includes'](E['system'])) {
                                ejs_loader.Module['TOTAL_MEMORY'] = 0x0;
                            }
                            if ('gba' == E['system']) {
                                ejs_loader.Module['TOTAL_MEMORY'] = 0x0;
                            }
                            if ('3do' == E['system']) {
                                ejs_loader.Module['TOTAL_MEMORY'] = 0x0;
                            }
                            if ('n64' == E['system']) {
                                ejs_loader.Module['TOTAL_MEMORY'] = 0x0;
                            }
                        } else {
                        */
                        if ('nes' == E['system']) {
                            Module['TOTAL_MEMORY'] = 0x8000000;
                        }
                        Module['TOTAL_MEMORY'] = ejs_sizelength + 0x4000000;
                        if (ejs_loader['arcadeCores']['includes'](E['system'])) {
                            Module['TOTAL_MEMORY'] = ejs_sizelength + 0x10000000;
                            if (ejs_loader['isMobileDevice']) Module['TOTAL_MEMORY'] = 0x12c00000;
                        }
                        if (['n64', 'nds', 'jaguar']['includes'](E['system'])) {
                            Module['TOTAL_MEMORY'] = ejs_sizelength + 0x10000000;
                            if (ejs_loader['isMobileDevice']) Module['TOTAL_MEMORY'] = 0x12c00000;

                        }
                        if ('gba' == E['system']) {
                            Module['TOTAL_MEMORY'] = 0x10000000;
                        }
                        //}
                        if ('undefined' != typeof EJS_MEMORY) Module['TOTAL_MEMORY'] = EJS_MEMORY;
                    },
                    MemData_Reset(u8buf) {
                        let Module = ejs_loader['Module'],
                            HEAPU8 = Module['HEAPU8'];
                        if ('undefined' != typeof Module.GLOBAL_BASE) {
                            HEAPU8['set'](u8buf, Module.GLOBAL_BASE);
                        } else if ('undefined' != typeof Runtime && Runtime['GLOBAL_BASE']) {
                            HEAPU8['set'](u8buf, Runtime['GLOBAL_BASE']);
                        } else if (ejs_loader['newCore']) {
                            HEAPU8['set'](u8buf, 0x400);
                        } else {
                            HEAPU8['set'](u8buf, 0x8)
                        }
                    }
                }
            );
            if (!E['config']['gameUrl']) {
                /**
                 * 未设置游戏文件直接先运行后上传
                 */
                toggleHidden(LoadingBtnStart, !0x0);
                E['callaction']('PlayNow');
            } else {
                onceEvent(LoadingBtnStart, 'click touchstart', function (event) {
                    /*点击PLAY NOW 运行*/
                    toggleHidden(LoadingBtnStart, !0x0);
                    E['callaction']('PlayNow');
                });
            }
        }
    }
    I.defines(ejs_install, {
        defaults: {
            value: {},
            writable: true,
        },
        systemlist: {
            value: {
                'Nintendo': {
                    gb: 'Game Boy | Color(gambatte)',
                    gba: 'Game Boy Advance(mGba)',
                    nes: 'NES(nestopia)',
                    snes: 'SNES(snes9x)',
                    nds: 'Nintendo DS',
                    n64: 'Nintendo 64',
                    vb: 'Virtual Boy',
                    vbanext: 'Game Boy Advance(vbanext)'
                },
                'Sony PlayStation': {
                    psx: 'PlayStation(pcsx_rearmed)',
                    'beetle-psx': 'PlayStation(beetle-psx)'
                },
                'Sega': {
                    segams: 'Sega Master System',
                    segagg: 'Sega Game Gear',
                    segamd: 'Sega Mega Drive',
                    segacd: 'Sega CD',
                    sega32x: 'Sega 32X',
                    segasaturn: 'Sega Saturn'
                },
                'Arcade/MAME/FBNEO/NGP': {
                    arcade: 'Arcade(FBA v0.2.97.42 ROMs set)',
                    fbneo: 'FBneo',
                    mame2003: 'MAME2003',
                    'mame0.243': 'MAME0.243',
                    mame: 'MAME',
                    ngp: 'Neo Geo Poket'
                },
                'Zelda Classic/OpenBOR': {
                    zc210: 'Zelda Classic',
                    openbor: 'OpenBOR'
                },
                'Atari': {
                    a2600: 'Atari 2600',
                    a5200: 'Atari 5200',
                    a7800: 'Atari 7800',
                    lynx: 'Atari Lynx',
                    jaguar: 'Atari Jaguar'
                },
                'Wanderswan/MSX/NEC_PC/3do/amgia/px68k': {
                    wanderswan: 'Wanderswan | Color',
                    msx: 'MSX',
                    tg16: 'TurboGrafs-16 | PC Engine',
                    pcfx: 'PC-FX',
                    '3do': '3DO',
                    px68k: 'Sharp - X68000',
                    amiga: 'Amiga'
                }
            }
        },
        FetchSysIcon: {
            async value(process) {
                let X = this;
                let files = await T.FetchItem({
                    url: T.RootPath + 'frontend/system-icons.zip',
                    unpack: true,
                    store: DISK.DB.libjs,
                    process
                });
                I.toArr(files).map(
                    v => {
                        files[v[0]] = T.F.URL(v[1], T.F.getMime('png'));
                        v[0] = null;
                    }
                );
                X.systemIcons = files;
            }
        },
        cleargc: {
            value() {
                let X = this;
                if (X.systemIcons) {
                    I.toArr(
                        X.systemIcons,
                        entry => {
                            T.F.removeURL(entry[1]);
                            entry[1] = null;
                        }
                    );
                    T.null(X.systemIcons);
                    X.systemIcons = null;
                }
            }
        },
        getSystemIcon: {
            async value(elm, process) {
                let X = this;
                await X.FetchSysIcon(process);
                let html = "";
                I.toArr(X.systemlist, entry => {
                    html += `<h1>${entry[0]}</h1><ul>`;
                    I.toArr(entry[1], item => {
                        let files = X.systemIcons,
                            url = files[item[0] + '.png'];
                        if (!url) {
                            if (item[0] == 'beetle-psx') url = files['psx.png'];
                            else if (item[0] == 'mame0.243') url = files['mame.png'];
                            else if (item[0] == 'vbanext') url = files['gba.png'];
                        }
                        html += `<li><p data-system="${item[0]}" style="background-image:url(${url})">${item[1]}</p></li>`;
                    });
                    html += '</ul>';
                });
                elm.appendChild(T.$ct('div', html));
            }
        }
    });
    return ejs_install;
})();