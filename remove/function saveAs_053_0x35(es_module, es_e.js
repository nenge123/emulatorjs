function saveAs_053_0x35(es_module, es_exports, es_require) {
    (function (_0x46c728) {
        var _0x39e035, _0x7c34ef, _0x129747;
        _0x7c34ef = [], void 0x0 === (_0x129747 = 'function' == typeof (_0x39e035 = function () {
            'use strict';


            function _0x5e21e2(_0x2d6c64, _0x4dfa21, _0x6044a8) {
                var _0x3ca1dc = new XMLHttpRequest();
                _0x3ca1dc.open('GET', _0x2d6c64), _0x3ca1dc['responseType'] = 'blob', _0x3ca1dc['onload'] = function () {

                    _0x197ad0(_0x3ca1dc['response'], _0x4dfa21, _0x6044a8);
                }, _0x3ca1dc['onerror'] = function () {

                    console['error']('could not download file');
                }, _0x3ca1dc['send']();
            }

            function _0x32a675(_0x433c4f) {
                var _0xf74209 = new XMLHttpRequest();
                _0xf74209.open('HEAD', _0x433c4f, !0x1);
                try {
                    _0xf74209['send']();
                } catch (_0x1455a9) {}
                return 0xc8 <= _0xf74209['status'] && 0x12b >= _0xf74209['status'];
            }

            function _0x3e2db2(_0x347373) {

                try {
                    _0x347373['dispatchEvent'](new MouseEvent('click'));
                } catch (_0x36a677) {
                    var _0xc8f93f = document['createEvent']('MouseEvents');
                    _0xc8f93f['initMouseEvent']('click', !0x0, !0x0, window, 0x0, 0x0, 0x0, 0x50, 0x14, !0x1, !0x1, !0x1, !0x1, 0x0, null), _0x347373['dispatchEvent'](_0xc8f93f);
                }
            }
            var _0x24613b = 'object' == typeof window && window['window'] === window ? window : 'object' == typeof self && self['self'] === self ? self : 'object' == typeof _0x46c728 && _0x46c728['global'] === _0x46c728 ? _0x46c728 : void 0x0,
                _0x197ad0 = _0x24613b['saveAs'] || ('object' != typeof window || window !== _0x24613b ? function () {} : 'download' in HTMLAnchorElement['prototype'] ? function (_0x428266, _0x31ec24, _0x37f18d) {
                    var _0x3b6e16 = _0x24613b['URL'] || _0x24613b['webkitURL'],
                        _0x2ea307 = document['createElement']('a');
                    _0x31ec24 = _0x31ec24 || _0x428266['name'] || 'download', _0x2ea307['download'] = _0x31ec24, _0x2ea307['rel'] = 'noopener', 'string' == typeof _0x428266 ? (_0x2ea307['href'] = _0x428266, _0x2ea307['origin'] === location['origin'] ? _0x3e2db2(_0x2ea307) : _0x32a675(_0x2ea307['href']) ? _0x5e21e2(_0x428266, _0x31ec24, _0x37f18d) : _0x3e2db2(_0x2ea307, _0x2ea307['target'] = '_blank')) : (_0x2ea307['href'] = _0x3b6e16['createObjectURL'](_0x428266), setTimeout(function () {

                        _0x3b6e16['revokeObjectURL'](_0x2ea307['href']);
                    }, 0x9c40), setTimeout(function () {
                        _0x3e2db2(_0x2ea307);
                    }, 0x0));
                } : 'msSaveOrOpenBlob' in navigator ? function (_0x1451d8, _0x47e6f9, _0x30451e) {

                    if (_0x47e6f9 = _0x47e6f9 || _0x1451d8['name'] || 'download', 'string' != typeof _0x1451d8) navigator['msSaveOrOpenBlob'](function (_0x17c3c7, _0x250ce5) {

                        return void 0x0 === _0x250ce5 ? _0x250ce5 = {
                            'autoBom': !0x1
                        } : 'object' != typeof _0x250ce5 && (console['warn']('Deprecated: Expected third argument to be a object'), _0x250ce5 = {
                            'autoBom': !_0x250ce5
                        }), _0x250ce5['autoBom'] && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i ['test'](_0x17c3c7['type']) ? new Blob(['\ufeff', _0x17c3c7], {
                            'type': _0x17c3c7['type']
                        }) : _0x17c3c7;
                    }(_0x1451d8, _0x30451e), _0x47e6f9);
                    else {
                        if (_0x32a675(_0x1451d8)) _0x5e21e2(_0x1451d8, _0x47e6f9, _0x30451e);
                        else {
                            var _0xd3ea27 = document['createElement']('a');
                            _0xd3ea27['href'] = _0x1451d8, _0xd3ea27['target'] = '_blank', setTimeout(function () {
                                _0x3e2db2(_0xd3ea27);
                            });
                        }
                    }
                } : function (_0x4bab01, _0x398db1, _0x199823, _0x185ae6) {

                    if ((_0x185ae6 = _0x185ae6 || open('', '_blank')) && (_0x185ae6['document']['title'] = _0x185ae6['document']['body']['innerText'] = 'downloading...'), 'string' == typeof _0x4bab01) return _0x5e21e2(_0x4bab01, _0x398db1, _0x199823);
                    var _0x316c43 = 'application/octet-stream' === _0x4bab01['type'],
                        _0xf654f2 = /constructor/i ['test'](_0x24613b['HTMLElement']) || _0x24613b['safari'],
                        _0x21da0f = /CriOS\/[\d]+/ ['test'](navigator['userAgent']);
                    if ((_0x21da0f || _0x316c43 && _0xf654f2) && 'object' == typeof FileReader) {
                        var _0x48c6a4 = new FileReader();
                        _0x48c6a4['onloadend'] = function () {
                            var _0x25f668 = _0x48c6a4['result'];
                            _0x25f668 = _0x21da0f ? _0x25f668 : _0x25f668['replace'](/^data:[^;]*;/, 'data:attachment/file;'), _0x185ae6 ? _0x185ae6['location']['href'] = _0x25f668 : location = _0x25f668, _0x185ae6 = null;
                        }, _0x48c6a4['readAsDataURL'](_0x4bab01);
                    } else {
                        var _0x32d065 = _0x24613b['URL'] || _0x24613b['webkitURL'],
                            _0x19c97f = _0x32d065['createObjectURL'](_0x4bab01);
                        _0x185ae6 ? _0x185ae6['location'] = _0x19c97f : location['href'] = _0x19c97f, _0x185ae6 = null, setTimeout(function () {
                            _0x32d065['revokeObjectURL'](_0x19c97f);
                        }, 0x9c40);
                    }
                });
            _0x24613b['saveAs'] = _0x197ad0['saveAs'] = _0x197ad0, es_module['exports'] = _0x197ad0;
        }) ? _0x39e035['apply'](es_exports, _0x7c34ef) : _0x39e035) || (es_module['exports'] = _0x129747);
    } ['call'](this, window));
}