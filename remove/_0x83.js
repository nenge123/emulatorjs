function id_131_0x83(es_module, es_exports, es_require) {
    var _0x2f3a35, _0x18fbbd, _0xa48483;

    function _0x576b1e(_0x102fa7) {

        return (_0x576b1e = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (_0x3a57c1) {
            return typeof _0x3a57c1;
        } : function (_0x164629) {

            return _0x164629 && 'function' == typeof Symbol && _0x164629['constructor'] === Symbol && _0x164629 !== Symbol['prototype'] ? 'symbol' : typeof _0x164629;
        })(_0x102fa7);
    }! function (_0x37f679) {

        'object' == _0x576b1e(es_exports) && void 0x0 !== es_module ? es_module['exports'] = _0x37f679() : (_0x18fbbd = [], void 0x0 === (_0xa48483 = 'function' == typeof (_0x2f3a35 = _0x37f679) ? _0x2f3a35['apply'](es_exports, _0x18fbbd) : _0x2f3a35) || (es_module['exports'] = _0xa48483));
    }(function () {


        function _0x2ba0b2() {}

        function _0x35cc66(_0x32e0f4, _0x48578d) {

            this['identifier'] = _0x48578d['identifier'];
            this['position'] = _0x48578d['position'];
            this['frontPosition'] = _0x48578d['frontPosition'];
            this['collection'] = _0x32e0f4;
            this['defaults'] = {
                'size': 0x64,
                'threshold': 0.1,
                'color': 'white',
                'fadeTime': 0xfa,
                'dataOnly': !0x1,
                'restJoystick': !0x0,
                'restOpacity': 0.5,
                'mode': 'dynamic',
                'zone': document['body'],
                'lockX': !0x1,
                'lockY': !0x1
            };
            this['config'](_0x48578d), 'dynamic' === this['options']['mode'] && (this['options']['restOpacity'] = 0x0);
            this['id'] = _0x35cc66['id'], _0x35cc66['id'] += 0x1;
            this['buildEl']()['stylize']();
            this['instance'] = {
                'el': this['ui']['el'],
                'on': this['on']['bind'](this),
                'off': this['off']['bind'](this),
                'show': this['show']['bind'](this),
                'hide': this['hide']['bind'](this),
                'add': this['addToDom']['bind'](this),
                'remove': this['removeFromDom']['bind'](this),
                'destroy': this['destroy']['bind'](this),
                'resetDirection': this['resetDirection']['bind'](this),
                'computeDirection': this['computeDirection']['bind'](this),
                'trigger': this['trigger']['bind'](this),
                'position': this['position'],
                'frontPosition': this['frontPosition'],
                'ui': this['ui'],
                'identifier': this['identifier'],
                'id': this['id'],
                'options': this['options']
            };

            return this['instance'];
        }

        function _0x388233(_0x3db44a, _0x367bc2) {
            var _0x27caad = this;
            return _0x27caad['nipples'] = [], _0x27caad['idles'] = [], _0x27caad['actives'] = [], _0x27caad['ids'] = [], _0x27caad['pressureIntervals'] = {}, _0x27caad['manager'] = _0x3db44a, _0x27caad['id'] = _0x388233['id'], _0x388233['id'] += 0x1, _0x27caad['defaults'] = {
                'zone': document['body'],
                'multitouch': !0x1,
                'maxNumberOfNipples': 0xa,
                'mode': 'dynamic',
                'position': {
                    'top': 0x0,
                    'left': 0x0
                },
                'catchDistance': 0xc8,
                'size': 0x64,
                'threshold': 0.1,
                'color': 'white',
                'fadeTime': 0xfa,
                'dataOnly': !0x1,
                'restJoystick': !0x0,
                'restOpacity': 0.5,
                'lockX': !0x1,
                'lockY': !0x1
            }, _0x27caad['config'](_0x367bc2), 'static' !== _0x27caad['options']['mode'] && 'semi' !== _0x27caad['options']['mode'] || (_0x27caad['options']['multitouch'] = !0x1), _0x27caad['options']['multitouch'] || (_0x27caad['options']['maxNumberOfNipples'] = 0x1), _0x27caad['updateBox'](), _0x27caad['prepareNipples'](), _0x27caad['bindings'](), _0x27caad['begin'](), _0x27caad['nipples'];
        }

        function _0x2a7ff9(_0x27cf5b) {
            var _0x119813, _0x212949 = this;
            return _0x212949['ids'] = {}, _0x212949['index'] = 0x0, _0x212949['collections'] = [], _0x212949['config'](_0x27cf5b), _0x212949['prepareCollections'](), _0x2b11bd['bindEvt'](window, 'resize', function (_0x5a42cd) {

                clearTimeout(_0x119813), _0x119813 = setTimeout(function () {
                    var _0x1b687c, _0x41aaef = _0x2b11bd['getScroll']();
                    _0x212949['collections']['forEach'](function (_0x4d50eb) {

                        _0x4d50eb['forEach'](function (_0x17e11d) {

                            _0x1b687c = _0x17e11d['el']['getBoundingClientRect'](), _0x17e11d['position'] = {
                                'x': _0x41aaef['x'] + _0x1b687c['left'],
                                'y': _0x41aaef['y'] + _0x1b687c['top']
                            };
                        });
                    });
                }, 0x64);
            }), _0x212949['collections'];
        }
        var _0x4ded36, _0x48747a = !!('ontouchstart' in window),
            _0x228a73 = !!window['PointerEvent'],
            _0x3486ce = !!window['MSPointerEvent'],
            _0x1ce8c6 = {
                'start': 'mousedown',
                'move': 'mousemove',
                'end': 'mouseup'
            },
            _0x1d3feb = {};
        _0x228a73 ? _0x4ded36 = {
            'start': 'pointerdown',
            'move': 'pointermove',
            'end': 'pointerup, pointercancel'
        } : _0x3486ce ? _0x4ded36 = {
            'start': 'MSPointerDown',
            'move': 'MSPointerMove',
            'end': 'MSPointerUp'
        } : _0x48747a ? (_0x4ded36 = {
            'start': 'touchstart',
            'move': 'touchmove',
            'end': 'touchend, touchcancel'
        }, _0x1d3feb = _0x1ce8c6) : _0x4ded36 = _0x1ce8c6;
        var _0x2b11bd = {
            'distance': function (_0x3c3339, _0x45db09) {
                var _0x5071c0 = _0x45db09['x'] - _0x3c3339['x'],
                    _0x6d9e1f = _0x45db09['y'] - _0x3c3339['y'];
                return Math['sqrt'](_0x5071c0 * _0x5071c0 + _0x6d9e1f * _0x6d9e1f);
            },
            'angle': function (_0x5dbec4, _0x2e985f) {
                var _0x5e88fb = _0x2e985f['x'] - _0x5dbec4['x'],
                    _0x3c6aa9 = _0x2e985f['y'] - _0x5dbec4['y'];
                return _0x2b11bd['degrees'](Math['atan2'](_0x3c6aa9, _0x5e88fb));
            },
            'findCoord': function (_0x6b0d68, _0x40d578, _0x2dea6c) {
                var _0x560bb6 = {
                    'x': 0x0,
                    'y': 0x0
                };
                return _0x2dea6c = _0x2b11bd['radians'](_0x2dea6c), _0x560bb6['x'] = _0x6b0d68['x'] - _0x40d578 * Math['cos'](_0x2dea6c), _0x560bb6['y'] = _0x6b0d68['y'] - _0x40d578 * Math['sin'](_0x2dea6c), _0x560bb6;
            },
            'radians': function (_0x1ceec9) {
                return _0x1ceec9 * (Math['PI'] / 0xb4);
            },
            'degrees': function (_0x419db0) {
                return _0x419db0 * (0xb4 / Math['PI']);
            },
            'bindEvt': function (_0x59ffab, _0x13d459, _0x4786fa) {

                for (var _0x459902, _0xc55394 = _0x13d459['split'](/[ ,]+/g), _0x16ddce = 0x0; _0x16ddce < _0xc55394['length']; _0x16ddce += 0x1) _0x459902 = _0xc55394[_0x16ddce], _0x59ffab['addEventListener'] ? _0x59ffab['addEventListener'](_0x459902, _0x4786fa, !0x1) : _0x59ffab['attachEvent'] && _0x59ffab['attachEvent'](_0x459902, _0x4786fa);
            },
            'unbindEvt': function (_0x5dcf29, _0x2e2b9e, _0x2838b0) {

                for (var _0x3d5436, _0xb47150 = _0x2e2b9e['split'](/[ ,]+/g), _0x5ceafd = 0x0; _0x5ceafd < _0xb47150['length']; _0x5ceafd += 0x1) _0x3d5436 = _0xb47150[_0x5ceafd], _0x5dcf29['removeEventListener'] ? _0x5dcf29['removeEventListener'](_0x3d5436, _0x2838b0) : _0x5dcf29['detachEvent'] && _0x5dcf29['detachEvent'](_0x3d5436, _0x2838b0);
            },
            'trigger': function (_0x5acd4e, _0x6e2801, _0x519c09) {
                var _0x5e2d49 = new CustomEvent(_0x6e2801, _0x519c09);
                _0x5acd4e['dispatchEvent'](_0x5e2d49);
            },
            'prepareEvent': function (_0x4fcea3) {

                return _0x4fcea3['preventDefault'](), _0x4fcea3['type']['match'](/^touch/) ? _0x4fcea3['changedTouches'] : _0x4fcea3;
            },
            'getScroll': function () {

                return {
                    'x': void 0x0 !== window['pageXOffset'] ? window['pageXOffset'] : (document['documentElement'] || document['body']['parentNode'] || document['body'])['scrollLeft'],
                    'y': void 0x0 !== window['pageYOffset'] ? window['pageYOffset'] : (document['documentElement'] || document['body']['parentNode'] || document['body'])['scrollTop']
                };
            },
            'applyPosition': function (_0x34d4b9, _0x32bf67) {

                _0x32bf67['top'] || _0x32bf67['right'] || _0x32bf67['bottom'] || _0x32bf67['left'] ? (_0x34d4b9['style']['top'] = _0x32bf67['top'], _0x34d4b9['style']['right'] = _0x32bf67['right'], _0x34d4b9['style']['bottom'] = _0x32bf67['bottom'], _0x34d4b9['style']['left'] = _0x32bf67['left']) : (_0x34d4b9['style']['left'] = _0x32bf67['x'] + 'px', _0x34d4b9['style']['top'] = _0x32bf67['y'] + 'px');
            },
            'getTransitionStyle': function (_0x5744be, _0x451c1a, _0x309f8d) {
                var _0x345e67 = _0x2b11bd['configStylePropertyObject'](_0x5744be);
                for (var _0x130251 in _0x345e67)
                    if (_0x345e67['hasOwnProperty'](_0x130251)) {
                        if ('string' == typeof _0x451c1a) _0x345e67[_0x130251] = _0x451c1a + ' ' + _0x309f8d;
                        else {
                            for (var _0x535a74 = '', _0x4a3575 = 0x0, _0x2a2721 = _0x451c1a['length']; _0x4a3575 < _0x2a2721; _0x4a3575 += 0x1) _0x535a74 += _0x451c1a[_0x4a3575] + ' ' + _0x309f8d + ', ';
                            _0x345e67[_0x130251] = _0x535a74['slice'](0x0, -0x2);
                        }
                    } return _0x345e67;
            },
            'getVendorStyle': function (_0x1e47a2, _0x1bd805) {
                var _0x4bcfac = _0x2b11bd['configStylePropertyObject'](_0x1e47a2);
                for (var _0x4c372a in _0x4bcfac) _0x4bcfac['hasOwnProperty'](_0x4c372a) && (_0x4bcfac[_0x4c372a] = _0x1bd805);
                return _0x4bcfac;
            },
            'configStylePropertyObject': function (_0x174e9b) {
                var _0xff2582 = {};
                return _0xff2582[_0x174e9b] = '', ['webkit', 'Moz', 'o']['forEach'](function (_0x579c52) {

                    _0xff2582[_0x579c52 + _0x174e9b['charAt'](0x0)['toUpperCase']() + _0x174e9b['slice'](0x1)] = '';
                }), _0xff2582;
            },
            'extend': function (_0x1f4208, _0x3e4a51) {
                for (var _0x2b5c03 in _0x3e4a51) _0x3e4a51['hasOwnProperty'](_0x2b5c03) && (_0x1f4208[_0x2b5c03] = _0x3e4a51[_0x2b5c03]);
                return _0x1f4208;
            },
            'safeExtend': function (_0x307d52, _0x1736bb) {
                var _0x4c0bdf = {};
                for (var _0x2e85c7 in _0x307d52) _0x307d52['hasOwnProperty'](_0x2e85c7) && _0x1736bb['hasOwnProperty'](_0x2e85c7) ? _0x4c0bdf[_0x2e85c7] = _0x1736bb[_0x2e85c7] : _0x307d52['hasOwnProperty'](_0x2e85c7) && (_0x4c0bdf[_0x2e85c7] = _0x307d52[_0x2e85c7]);
                return _0x4c0bdf;
            },
            'map': function (_0x70f92d, _0x4dc52f) {

                if (_0x70f92d['length']) {
                    for (var _0x502285 = 0x0, _0x5f5d7c = _0x70f92d['length']; _0x502285 < _0x5f5d7c; _0x502285 += 0x1) _0x4dc52f(_0x70f92d[_0x502285]);
                } else _0x4dc52f(_0x70f92d);
            }
        };
        _0x2ba0b2['prototype']['on'] = function (_0x304328, _0x2eab21) {
            var _0xdf6bc7, _0x261eb3 = this,
                _0x1d2b26 = _0x304328['split'](/[ ,]+/g);
            _0x261eb3['_handlers_'] = _0x261eb3['_handlers_'] || {};
            for (var _0x400fbc = 0x0; _0x400fbc < _0x1d2b26['length']; _0x400fbc += 0x1) _0xdf6bc7 = _0x1d2b26[_0x400fbc], _0x261eb3['_handlers_'][_0xdf6bc7] = _0x261eb3['_handlers_'][_0xdf6bc7] || [], _0x261eb3['_handlers_'][_0xdf6bc7]['push'](_0x2eab21);
            return _0x261eb3;
        }, _0x2ba0b2['prototype']['off'] = function (_0xc8d34f, _0x1fad0e) {
            var _0x145f02 = this;
            return _0x145f02['_handlers_'] = _0x145f02['_handlers_'] || {}, void 0x0 === _0xc8d34f ? _0x145f02['_handlers_'] = {} : void 0x0 === _0x1fad0e ? _0x145f02['_handlers_'][_0xc8d34f] = null : _0x145f02['_handlers_'][_0xc8d34f] && _0x145f02['_handlers_'][_0xc8d34f]['indexOf'](_0x1fad0e) >= 0x0 && _0x145f02['_handlers_'][_0xc8d34f]['splice'](_0x145f02['_handlers_'][_0xc8d34f]['indexOf'](_0x1fad0e), 0x1), _0x145f02;
        }, _0x2ba0b2['prototype']['trigger'] = function (_0x4c758d, _0x2942c7) {
            var _0x3289a1, _0x1129d8 = this,
                _0x2ace7d = _0x4c758d['split'](/[ ,]+/g);
            _0x1129d8['_handlers_'] = _0x1129d8['_handlers_'] || {};
            for (var _0x3ebd29 = 0x0; _0x3ebd29 < _0x2ace7d['length']; _0x3ebd29 += 0x1) _0x3289a1 = _0x2ace7d[_0x3ebd29], _0x1129d8['_handlers_'][_0x3289a1] && _0x1129d8['_handlers_'][_0x3289a1]['length'] && _0x1129d8['_handlers_'][_0x3289a1]['forEach'](function (_0x11aabb) {
                _0x11aabb['call'](_0x1129d8, {
                    'type': _0x3289a1,
                    'target': _0x1129d8
                }, _0x2942c7);
            });
        }, _0x2ba0b2['prototype']['config'] = function (_0x5035b6) {
            var _0x1a381b = this;
            _0x1a381b['options'] = _0x1a381b['defaults'] || {}, _0x5035b6 && (_0x1a381b['options'] = _0x2b11bd['safeExtend'](_0x1a381b['options'], _0x5035b6));
        }, _0x2ba0b2['prototype']['bindEvt'] = function (_0x5a0f70, _0x1b8189) {
            var _0x67d794 = this;
            return _0x67d794['_domHandlers_'] = _0x67d794['_domHandlers_'] || {}, _0x67d794['_domHandlers_'][_0x1b8189] = function () {

                'function' == typeof _0x67d794['on' + _0x1b8189] ? _0x67d794['on' + _0x1b8189]['apply'](_0x67d794, arguments) : console['warn']('[WARNING] : Missing "on' + _0x1b8189 + '" handler.');
            }, _0x2b11bd['bindEvt'](_0x5a0f70, _0x4ded36[_0x1b8189], _0x67d794['_domHandlers_'][_0x1b8189]), _0x1d3feb[_0x1b8189] && _0x2b11bd['bindEvt'](_0x5a0f70, _0x1d3feb[_0x1b8189], _0x67d794['_domHandlers_'][_0x1b8189]), _0x67d794;
        }, _0x2ba0b2['prototype']['unbindEvt'] = function (_0x1da212, _0xbb5507) {
            var _0x37c8ea = this;
            return _0x37c8ea['_domHandlers_'] = _0x37c8ea['_domHandlers_'] || {}, _0x2b11bd['unbindEvt'](_0x1da212, _0x4ded36[_0xbb5507], _0x37c8ea['_domHandlers_'][_0xbb5507]), _0x1d3feb[_0xbb5507] && _0x2b11bd['unbindEvt'](_0x1da212, _0x1d3feb[_0xbb5507], _0x37c8ea['_domHandlers_'][_0xbb5507]), delete _0x37c8ea['_domHandlers_'][_0xbb5507], this;
        }, _0x35cc66['prototype'] = new _0x2ba0b2(), _0x35cc66['constructor'] = _0x35cc66, _0x35cc66['id'] = 0x0, _0x35cc66['prototype']['buildEl'] = function (_0x3ba019) {

            return this['ui'] = {}, this['options']['dataOnly'] ? this : (this['ui']['el'] = document['createElement']('div'), this['ui']['back'] = document['createElement']('div'), this['ui']['front'] = document['createElement']('div'), this['ui']['el']['className'] = 'nipple collection_' + this['collection']['id'], this['ui']['back']['className'] = 'back', this['ui']['front']['className'] = 'front', this['ui']['el']['setAttribute']('id', 'nipple_' + this['collection']['id'] + '_' + this['id']), this['ui']['el']['appendChild'](this['ui']['back']), this['ui']['el']['appendChild'](this['ui']['front']), this);
        }, _0x35cc66['prototype']['stylize'] = function () {

            if (this['options']['dataOnly']) return this;
            var _0x553551 = this['options']['fadeTime'] + 'ms',
                _0x1ecf8c = _0x2b11bd['getVendorStyle']('borderRadius', '50%'),
                _0x5e6055 = _0x2b11bd['getTransitionStyle']('transition', 'opacity', _0x553551),
                _0x33cd83 = {};
            return _0x33cd83['el'] = {
                'position': 'absolute',
                'opacity': this['options']['restOpacity'],
                'display': 'block',
                'zIndex': 0x3e7
            }, _0x33cd83['back'] = {
                'position': 'absolute',
                'display': 'block',
                'width': this['options']['size'] + 'px',
                'height': this['options']['size'] + 'px',
                'marginLeft': -this['options']['size'] / 0x2 + 'px',
                'marginTop': -this['options']['size'] / 0x2 + 'px',
                'background': this['options']['color'],
                'opacity': '.5'
            }, _0x33cd83['front'] = {
                'width': this['options']['size'] / 0x2 + 'px',
                'height': this['options']['size'] / 0x2 + 'px',
                'position': 'absolute',
                'display': 'block',
                'marginLeft': -this['options']['size'] / 0x4 + 'px',
                'marginTop': -this['options']['size'] / 0x4 + 'px',
                'background': this['options']['color'],
                'opacity': '.5'
            }, _0x2b11bd['extend'](_0x33cd83['el'], _0x5e6055), _0x2b11bd['extend'](_0x33cd83['back'], _0x1ecf8c), _0x2b11bd['extend'](_0x33cd83['front'], _0x1ecf8c), this['applyStyles'](_0x33cd83), this;
        }, _0x35cc66['prototype']['applyStyles'] = function (_0x243d1f) {

            for (var _0x377349 in this['ui'])
                if (this['ui']['hasOwnProperty'](_0x377349)) {
                    for (var _0x3d6fe2 in _0x243d1f[_0x377349]) this['ui'][_0x377349]['style'][_0x3d6fe2] = _0x243d1f[_0x377349][_0x3d6fe2];
                } return this;
        }, _0x35cc66['prototype']['addToDom'] = function () {

            return this['options']['dataOnly'] || document['body']['contains'](this['ui']['el']) ? this : (this['options']['zone']['appendChild'](this['ui']['el']), this);
        }, _0x35cc66['prototype']['removeFromDom'] = function () {

            return this['options']['dataOnly'] || !document['body']['contains'](this['ui']['el']) ? this : (this['options']['zone']['removeChild'](this['ui']['el']), this);
        }, _0x35cc66['prototype']['destroy'] = function () {

            clearTimeout(this['removeTimeout']), clearTimeout(this['showTimeout']), clearTimeout(this['restTimeout']), this['trigger']('destroyed', this['instance']), this['removeFromDom'](), this['off']();
        }, _0x35cc66['prototype']['show'] = function (_0x2f8968) {
            var _0x32c7cc = this;
            return _0x32c7cc['options']['dataOnly'] ? _0x32c7cc : (clearTimeout(_0x32c7cc['removeTimeout']), clearTimeout(_0x32c7cc['showTimeout']), clearTimeout(_0x32c7cc['restTimeout']), _0x32c7cc['addToDom'](), _0x32c7cc['restCallback'](), setTimeout(function () {

                _0x32c7cc['ui']['el']['style']['opacity'] = 0x1;
            }, 0x0), _0x32c7cc['showTimeout'] = setTimeout(function () {

                _0x32c7cc['trigger']('shown', _0x32c7cc['instance']), 'function' == typeof _0x2f8968 && _0x2f8968['call'](this);
            }, _0x32c7cc['options']['fadeTime']), _0x32c7cc);
        }, _0x35cc66['prototype']['hide'] = function (_0x454efe) {
            var _0x139de9 = this;
            return _0x139de9['options']['dataOnly'] ? _0x139de9 : (_0x139de9['ui']['el']['style']['opacity'] = _0x139de9['options']['restOpacity'], clearTimeout(_0x139de9['removeTimeout']), clearTimeout(_0x139de9['showTimeout']), clearTimeout(_0x139de9['restTimeout']), _0x139de9['removeTimeout'] = setTimeout(function () {
                var _0x5476eb = 'dynamic' === _0x139de9['options']['mode'] ? 'none' : 'block';
                _0x139de9['ui']['el']['style']['display'] = _0x5476eb, 'function' == typeof _0x454efe && _0x454efe['call'](_0x139de9), _0x139de9['trigger']('hidden', _0x139de9['instance']);
            }, _0x139de9['options']['fadeTime']), _0x139de9['options']['restJoystick'] && _0x139de9['restPosition'](), _0x139de9);
        }, _0x35cc66['prototype']['restPosition'] = function (_0x14cceb) {
            var _0x5a8ab0 = this;
            _0x5a8ab0['frontPosition'] = {
                'x': 0x0,
                'y': 0x0
            };
            var _0x2731eb = _0x5a8ab0['options']['fadeTime'] + 'ms',
                _0x5f0b0a = {};
            _0x5f0b0a['front'] = _0x2b11bd['getTransitionStyle']('transition', ['top', 'left'], _0x2731eb);
            var _0x97c61f = {
                'front': {}
            };
            _0x97c61f['front'] = {
                'left': _0x5a8ab0['frontPosition']['x'] + 'px',
                'top': _0x5a8ab0['frontPosition']['y'] + 'px'
            }, _0x5a8ab0['applyStyles'](_0x5f0b0a), _0x5a8ab0['applyStyles'](_0x97c61f), _0x5a8ab0['restTimeout'] = setTimeout(function () {

                'function' == typeof _0x14cceb && _0x14cceb['call'](_0x5a8ab0), _0x5a8ab0['restCallback']();
            }, _0x5a8ab0['options']['fadeTime']);
        }, _0x35cc66['prototype']['restCallback'] = function () {
            var _0x3f9445 = this,
                _0x2a828d = {};
            _0x2a828d['front'] = _0x2b11bd['getTransitionStyle']('transition', 'none', ''), _0x3f9445['applyStyles'](_0x2a828d), _0x3f9445['trigger']('rested', _0x3f9445['instance']);
        }, _0x35cc66['prototype']['resetDirection'] = function () {

            this['direction'] = {
                'x': !0x1,
                'y': !0x1,
                'angle': !0x1
            };
        }, _0x35cc66['prototype']['computeDirection'] = function (_0x35187b) {
            var _0x3c0462, _0x2b6615, _0x40e610, _0x688593 = _0x35187b['angle']['radian'],
                _0x359d0c = Math['PI'] / 0x4,
                _0x389349 = Math['PI'] / 0x2;
            if (_0x688593 > _0x359d0c && _0x688593 < 0x3 * _0x359d0c && !_0x35187b['lockX'] ? _0x3c0462 = 'up' : _0x688593 > -_0x359d0c && _0x688593 <= _0x359d0c && !_0x35187b['lockY'] ? _0x3c0462 = 'left' : _0x688593 > 0x3 * -_0x359d0c && _0x688593 <= -_0x359d0c && !_0x35187b['lockX'] ? _0x3c0462 = 'down' : _0x35187b['lockY'] || (_0x3c0462 = 'right'), _0x35187b['lockY'] || (_0x2b6615 = _0x688593 > -_0x389349 && _0x688593 < _0x389349 ? 'left' : 'right'), _0x35187b['lockX'] || (_0x40e610 = _0x688593 > 0x0 ? 'up' : 'down'), _0x35187b['force'] > this['options']['threshold']) {
                var _0x4683c9 = {};
                for (var _0x5f1595 in this['direction']) this['direction']['hasOwnProperty'](_0x5f1595) && (_0x4683c9[_0x5f1595] = this['direction'][_0x5f1595]);
                var _0x3bcb55 = {};
                for (var _0x5f1595 in (this['direction'] = {
                        'x': _0x2b6615,
                        'y': _0x40e610,
                        'angle': _0x3c0462
                    }, _0x35187b['direction'] = this['direction'], _0x4683c9)) _0x4683c9[_0x5f1595] === this['direction'][_0x5f1595] && (_0x3bcb55[_0x5f1595] = !0x0);
                if (_0x3bcb55['x'] && _0x3bcb55['y'] && _0x3bcb55['angle']) return _0x35187b;
                _0x3bcb55['x'] && _0x3bcb55['y'] || this['trigger']('plain', _0x35187b), _0x3bcb55['x'] || this['trigger']('plain:' + _0x2b6615, _0x35187b), _0x3bcb55['y'] || this['trigger']('plain:' + _0x40e610, _0x35187b), _0x3bcb55['angle'] || this['trigger']('dir dir:' + _0x3c0462, _0x35187b);
            }
            return _0x35187b;
        }, _0x388233['prototype'] = new _0x2ba0b2(), _0x388233['constructor'] = _0x388233, _0x388233['id'] = 0x0, _0x388233['prototype']['prepareNipples'] = function () {
            var _0x171fd2 = this,
                _0x251ada = _0x171fd2['nipples'];
            _0x251ada['on'] = _0x171fd2['on']['bind'](_0x171fd2), _0x251ada['off'] = _0x171fd2['off']['bind'](_0x171fd2), _0x251ada['options'] = _0x171fd2['options'], _0x251ada['destroy'] = _0x171fd2['destroy']['bind'](_0x171fd2), _0x251ada['ids'] = _0x171fd2['ids'], _0x251ada['id'] = _0x171fd2['id'], _0x251ada['processOnMove'] = _0x171fd2['processOnMove']['bind'](_0x171fd2), _0x251ada['processOnEnd'] = _0x171fd2['processOnEnd']['bind'](_0x171fd2), _0x251ada['get'] = function (_0x285539) {

                if (void 0x0 === _0x285539) return _0x251ada[0x0];
                for (var _0x5a9649 = 0x0, _0x248d43 = _0x251ada['length']; _0x5a9649 < _0x248d43; _0x5a9649 += 0x1)
                    if (_0x251ada[_0x5a9649]['identifier'] === _0x285539) return _0x251ada[_0x5a9649];
                return !0x1;
            };
        }, _0x388233['prototype']['bindings'] = function () {
            var _0x2b26e3 = this;
            _0x2b26e3['bindEvt'](_0x2b26e3['options']['zone'], 'start'), _0x2b26e3['options']['zone']['style']['touchAction'] = 'none', _0x2b26e3['options']['zone']['style']['msTouchAction'] = 'none';
        }, _0x388233['prototype']['begin'] = function () {
            var _0x40e6cd = this,
                _0x5052f1 = _0x40e6cd['options'];
            if ('static' === _0x5052f1['mode']) {
                var _0x24b13d = _0x40e6cd['createNipple'](_0x5052f1['position'], _0x40e6cd['manager']['getIdentifier']());
                _0x24b13d['add'](), _0x40e6cd['idles']['push'](_0x24b13d);
            }
        }, _0x388233['prototype']['createNipple'] = function (_0xc1eee0, _0x52f92c) {
            var _0x79031e = this,
                _0x4f3a99 = _0x2b11bd['getScroll'](),
                _0x3c7a74 = {},
                _0xa495df = _0x79031e['options'];
            if (_0xc1eee0['x'] && _0xc1eee0['y']) _0x3c7a74 = {
                'x': _0xc1eee0['x'] - (_0x4f3a99['x'] + _0x79031e['box']['left']),
                'y': _0xc1eee0['y'] - (_0x4f3a99['y'] + _0x79031e['box']['top'])
            };
            else {
                if (_0xc1eee0['top'] || _0xc1eee0['right'] || _0xc1eee0['bottom'] || _0xc1eee0['left']) {
                    var _0x1cb6cb = document['createElement']('DIV');
                    _0x1cb6cb['style']['display'] = 'hidden', _0x1cb6cb['style']['top'] = _0xc1eee0['top'], _0x1cb6cb['style']['right'] = _0xc1eee0['right'], _0x1cb6cb['style']['bottom'] = _0xc1eee0['bottom'], _0x1cb6cb['style']['left'] = _0xc1eee0['left'], _0x1cb6cb['style']['position'] = 'absolute', _0xa495df['zone']['appendChild'](_0x1cb6cb);
                    var _0x15293c = _0x1cb6cb['getBoundingClientRect']();
                    _0xa495df['zone']['removeChild'](_0x1cb6cb), _0x3c7a74 = _0xc1eee0, _0xc1eee0 = {
                        'x': _0x15293c['left'] + _0x4f3a99['x'],
                        'y': _0x15293c['top'] + _0x4f3a99['y']
                    };
                }
            }
            var _0x47e90a = new _0x35cc66(_0x79031e, {
                'color': _0xa495df['color'],
                'size': _0xa495df['size'],
                'threshold': _0xa495df['threshold'],
                'fadeTime': _0xa495df['fadeTime'],
                'dataOnly': _0xa495df['dataOnly'],
                'restJoystick': _0xa495df['restJoystick'],
                'restOpacity': _0xa495df['restOpacity'],
                'mode': _0xa495df['mode'],
                'identifier': _0x52f92c,
                'position': _0xc1eee0,
                'zone': _0xa495df['zone'],
                'frontPosition': {
                    'x': 0x0,
                    'y': 0x0
                }
            });
            return _0xa495df['dataOnly'] || (_0x2b11bd['applyPosition'](_0x47e90a['ui']['el'], _0x3c7a74), _0x2b11bd['applyPosition'](_0x47e90a['ui']['front'], _0x47e90a['frontPosition'])), _0x79031e['nipples']['push'](_0x47e90a), _0x79031e['trigger']('added ' + _0x47e90a['identifier'] + ':added', _0x47e90a), _0x79031e['manager']['trigger']('added ' + _0x47e90a['identifier'] + ':added', _0x47e90a), _0x79031e['bindNipple'](_0x47e90a), _0x47e90a;
        }, _0x388233['prototype']['updateBox'] = function () {

            this['box'] = this['options']['zone']['getBoundingClientRect']();
        }, _0x388233['prototype']['bindNipple'] = function (_0x40f7b7) {
            var _0xed1c3c, _0x1ca174 = this,
                _0x7c8ec = function (_0x55fe0b, _0x153d3e) {

                    _0xed1c3c = _0x55fe0b['type'] + ' ' + _0x153d3e['id'] + ':' + _0x55fe0b['type'], _0x1ca174['trigger'](_0xed1c3c, _0x153d3e);
                };
            _0x40f7b7['on']('destroyed', _0x1ca174['onDestroyed']['bind'](_0x1ca174)), _0x40f7b7['on']('shown hidden rested dir plain', _0x7c8ec), _0x40f7b7['on']('dir:up dir:right dir:down dir:left', _0x7c8ec), _0x40f7b7['on']('plain:up plain:right plain:down plain:left', _0x7c8ec);
        }, _0x388233['prototype']['pressureFn'] = function (_0x582b13, _0x114774, _0x420e61) {
            var _0x3cdbe3 = this,
                _0x30939a = 0x0;
            clearInterval(_0x3cdbe3['pressureIntervals'][_0x420e61]), _0x3cdbe3['pressureIntervals'][_0x420e61] = setInterval(function () {
                var _0x5c2c5c = _0x582b13['force'] || _0x582b13['pressure'] || _0x582b13['webkitForce'] || 0x0;
                _0x5c2c5c !== _0x30939a && (_0x114774['trigger']('pressure', _0x5c2c5c), _0x3cdbe3['trigger']('pressure ' + _0x114774['identifier'] + ':pressure', _0x5c2c5c), _0x30939a = _0x5c2c5c);
            } ['bind'](_0x3cdbe3), 0x64);
        }, _0x388233['prototype']['onstart'] = function (_0x4fbcac) {
            var _0x5d84f3 = this,
                _0x56ea51 = _0x5d84f3['options'];
            return _0x4fbcac = _0x2b11bd['prepareEvent'](_0x4fbcac), _0x5d84f3['updateBox'](), (_0x2b11bd['map'](_0x4fbcac, function (_0x586a41) {

                _0x5d84f3['actives']['length'] < _0x56ea51['maxNumberOfNipples'] && _0x5d84f3['processOnStart'](_0x586a41);
            }), _0x5d84f3['manager']['bindDocument'](), !0x1);
        }, _0x388233['prototype']['processOnStart'] = function (_0x449dc5) {
            var _0x58a10d, _0x191fdf = this,
                _0x5efb1a = _0x191fdf['options'],
                _0x588849 = _0x191fdf['manager']['getIdentifier'](_0x449dc5),
                _0x1dc887 = _0x449dc5['force'] || _0x449dc5['pressure'] || _0x449dc5['webkitForce'] || 0x0,
                _0x47a261 = {
                    'x': _0x449dc5['pageX'],
                    'y': _0x449dc5['pageY']
                },
                _0x4a8f8d = _0x191fdf['getOrCreate'](_0x588849, _0x47a261);
            _0x4a8f8d['identifier'] !== _0x588849 && _0x191fdf['manager']['removeIdentifier'](_0x4a8f8d['identifier']), _0x4a8f8d['identifier'] = _0x588849;
            var _0x312ba2 = function (_0x5b385b) {

                _0x5b385b['trigger']('start', _0x5b385b), _0x191fdf['trigger']('start ' + _0x5b385b['id'] + ':start', _0x5b385b), _0x5b385b['show'](), _0x1dc887 > 0x0 && _0x191fdf['pressureFn'](_0x449dc5, _0x5b385b, _0x5b385b['identifier']), _0x191fdf['processOnMove'](_0x449dc5);
            };
            if ((_0x58a10d = _0x191fdf['idles']['indexOf'](_0x4a8f8d)) >= 0x0 && _0x191fdf['idles']['splice'](_0x58a10d, 0x1), _0x191fdf['actives']['push'](_0x4a8f8d), _0x191fdf['ids']['push'](_0x4a8f8d['identifier']), 'semi' !== _0x5efb1a['mode']) _0x312ba2(_0x4a8f8d);
            else {
                if (!(_0x2b11bd['distance'](_0x47a261, _0x4a8f8d['position']) <= _0x5efb1a['catchDistance'])) return _0x4a8f8d['destroy'](), void _0x191fdf['processOnStart'](_0x449dc5);
                _0x312ba2(_0x4a8f8d);
            }
            return _0x4a8f8d;
        }, _0x388233['prototype']['getOrCreate'] = function (_0x5e8b6b, _0x12a0cc) {
            var _0xcfead3, _0x5985bc = this,
                _0x22bee7 = _0x5985bc['options'];
            return /(semi|static)/ ['test'](_0x22bee7['mode']) ? (_0xcfead3 = _0x5985bc['idles'][0x0]) ? (_0x5985bc['idles']['splice'](0x0, 0x1), _0xcfead3) : 'semi' === _0x22bee7['mode'] ? _0x5985bc['createNipple'](_0x12a0cc, _0x5e8b6b) : (console['warn']('Coudln\x27t find the needed nipple.'), !0x1) : _0xcfead3 = _0x5985bc['createNipple'](_0x12a0cc, _0x5e8b6b);
        }, _0x388233['prototype']['processOnMove'] = function (_0x51e0b0) {
            var _0x48d43b = this,
                _0x1d7240 = _0x48d43b['options'],
                _0x30cd58 = _0x48d43b['manager']['getIdentifier'](_0x51e0b0),
                _0x4eda28 = _0x48d43b['nipples']['get'](_0x30cd58);
            if (!_0x4eda28) return console['error']('Found zombie joystick with ID ' + _0x30cd58), void _0x48d43b['manager']['removeIdentifier'](_0x30cd58);
            _0x4eda28['identifier'] = _0x30cd58;
            var _0x22bb09 = _0x4eda28['options']['size'] / 0x2,
                _0x3d375c = {
                    'x': _0x51e0b0['pageX'],
                    'y': _0x51e0b0['pageY']
                },
                _0x457f35 = _0x2b11bd['distance'](_0x3d375c, _0x4eda28['position']),
                _0x1eba74 = _0x2b11bd['angle'](_0x3d375c, _0x4eda28['position']),
                _0x4c32d2 = _0x2b11bd['radians'](_0x1eba74),
                _0x45f417 = _0x457f35 / _0x22bb09;
            _0x457f35 > _0x22bb09 && (_0x457f35 = _0x22bb09, _0x3d375c = _0x2b11bd['findCoord'](_0x4eda28['position'], _0x457f35, _0x1eba74));
            var _0x14359f = _0x3d375c['x'] - _0x4eda28['position']['x'],
                _0x135891 = _0x3d375c['y'] - _0x4eda28['position']['y'];
            _0x1d7240['lockX'] && (_0x135891 = 0x0), _0x1d7240['lockY'] && (_0x14359f = 0x0), _0x4eda28['frontPosition'] = {
                'x': _0x14359f,
                'y': _0x135891
            }, _0x1d7240['dataOnly'] || _0x2b11bd['applyPosition'](_0x4eda28['ui']['front'], _0x4eda28['frontPosition']);
            var _0x46c0a1 = {
                'identifier': _0x4eda28['identifier'],
                'position': _0x3d375c,
                'force': _0x45f417,
                'pressure': _0x51e0b0['force'] || _0x51e0b0['pressure'] || _0x51e0b0['webkitForce'] || 0x0,
                'distance': _0x457f35,
                'angle': {
                    'radian': _0x4c32d2,
                    'degree': _0x1eba74
                },
                'instance': _0x4eda28,
                'lockX': _0x1d7240['lockX'],
                'lockY': _0x1d7240['lockY']
            };
            (_0x46c0a1 = _0x4eda28['computeDirection'](_0x46c0a1))['angle'] = {
                'radian': _0x2b11bd['radians'](0xb4 - _0x1eba74),
                'degree': 0xb4 - _0x1eba74
            }, _0x4eda28['trigger']('move', _0x46c0a1), _0x48d43b['trigger']('move ' + _0x4eda28['id'] + ':move', _0x46c0a1);
        }, _0x388233['prototype']['processOnEnd'] = function (_0x3f2f82) {
            var _0x22e99e = this,
                _0x1e1fa5 = _0x22e99e['options'],
                _0x4831d1 = _0x22e99e['manager']['getIdentifier'](_0x3f2f82),
                _0xa09d32 = _0x22e99e['nipples']['get'](_0x4831d1),
                _0x2d4e32 = _0x22e99e['manager']['removeIdentifier'](_0xa09d32['identifier']);
            _0xa09d32 && (_0x1e1fa5['dataOnly'] || _0xa09d32['hide'](function () {

                'dynamic' === _0x1e1fa5['mode'] && (_0xa09d32['trigger']('removed', _0xa09d32), _0x22e99e['trigger']('removed ' + _0xa09d32['id'] + ':removed', _0xa09d32), _0x22e99e['manager']['trigger']('removed ' + _0xa09d32['id'] + ':removed', _0xa09d32), _0xa09d32['destroy']());
            }), clearInterval(_0x22e99e['pressureIntervals'][_0xa09d32['identifier']]), _0xa09d32['resetDirection'](), _0xa09d32['trigger']('end', _0xa09d32), _0x22e99e['trigger']('end ' + _0xa09d32['id'] + ':end', _0xa09d32), _0x22e99e['ids']['indexOf'](_0xa09d32['identifier']) >= 0x0 && _0x22e99e['ids']['splice'](_0x22e99e['ids']['indexOf'](_0xa09d32['identifier']), 0x1), _0x22e99e['actives']['indexOf'](_0xa09d32) >= 0x0 && _0x22e99e['actives']['splice'](_0x22e99e['actives']['indexOf'](_0xa09d32), 0x1), /(semi|static)/ ['test'](_0x1e1fa5['mode']) ? _0x22e99e['idles']['push'](_0xa09d32) : _0x22e99e['nipples']['indexOf'](_0xa09d32) >= 0x0 && _0x22e99e['nipples']['splice'](_0x22e99e['nipples']['indexOf'](_0xa09d32), 0x1), _0x22e99e['manager']['unbindDocument'](), /(semi|static)/ ['test'](_0x1e1fa5['mode']) && (_0x22e99e['manager']['ids'][_0x2d4e32['id']] = _0x2d4e32['identifier']));
        }, _0x388233['prototype']['onDestroyed'] = function (_0x458241, _0x112e50) {
            var _0x42cce4 = this;
            _0x42cce4['nipples']['indexOf'](_0x112e50) >= 0x0 && _0x42cce4['nipples']['splice'](_0x42cce4['nipples']['indexOf'](_0x112e50), 0x1), _0x42cce4['actives']['indexOf'](_0x112e50) >= 0x0 && _0x42cce4['actives']['splice'](_0x42cce4['actives']['indexOf'](_0x112e50), 0x1), _0x42cce4['idles']['indexOf'](_0x112e50) >= 0x0 && _0x42cce4['idles']['splice'](_0x42cce4['idles']['indexOf'](_0x112e50), 0x1), _0x42cce4['ids']['indexOf'](_0x112e50['identifier']) >= 0x0 && _0x42cce4['ids']['splice'](_0x42cce4['ids']['indexOf'](_0x112e50['identifier']), 0x1), _0x42cce4['manager']['removeIdentifier'](_0x112e50['identifier']), _0x42cce4['manager']['unbindDocument']();
        }, _0x388233['prototype']['destroy'] = function () {
            var _0x4bf18 = this;
            for (var _0x1122ea in (_0x4bf18['unbindEvt'](_0x4bf18['options']['zone'], 'start'), _0x4bf18['nipples']['forEach'](function (_0x2cbe5b) {
                    _0x2cbe5b['destroy']();
                }), _0x4bf18['pressureIntervals'])) _0x4bf18['pressureIntervals']['hasOwnProperty'](_0x1122ea) && clearInterval(_0x4bf18['pressureIntervals'][_0x1122ea]);
            _0x4bf18['trigger']('destroyed', _0x4bf18['nipples']), _0x4bf18['manager']['unbindDocument'](), _0x4bf18['off']();
        }, _0x2a7ff9['prototype'] = new _0x2ba0b2(), _0x2a7ff9['constructor'] = _0x2a7ff9, _0x2a7ff9['prototype']['prepareCollections'] = function () {
            var _0x41b7af = this;
            _0x41b7af['collections']['create'] = _0x41b7af['create']['bind'](_0x41b7af), _0x41b7af['collections']['on'] = _0x41b7af['on']['bind'](_0x41b7af), _0x41b7af['collections']['off'] = _0x41b7af['off']['bind'](_0x41b7af), _0x41b7af['collections']['destroy'] = _0x41b7af['destroy']['bind'](_0x41b7af), _0x41b7af['collections']['get'] = function (_0x51e471) {
                var _0x155544;
                return _0x41b7af['collections']['every'](function (_0x46c5f3) {

                    return !(_0x155544 = _0x46c5f3['get'](_0x51e471));
                }), _0x155544;
            };
        }, _0x2a7ff9['prototype']['create'] = function (_0x384591) {

            return this['createCollection'](_0x384591);
        }, _0x2a7ff9['prototype']['createCollection'] = function (_0x42c54a) {
            var _0x2e729c = this,
                _0x26661c = new _0x388233(_0x2e729c, _0x42c54a);
            return _0x2e729c['bindCollection'](_0x26661c), _0x2e729c['collections']['push'](_0x26661c), _0x26661c;
        }, _0x2a7ff9['prototype']['bindCollection'] = function (_0x330f5d) {
            var _0x5aae9c, _0x3bcc83 = this,
                _0x20fd2b = function (_0x3d12bf, _0x2dd546) {

                    _0x5aae9c = _0x3d12bf['type'] + ' ' + _0x2dd546['id'] + ':' + _0x3d12bf['type'], _0x3bcc83['trigger'](_0x5aae9c, _0x2dd546);
                };
            _0x330f5d['on']('destroyed', _0x3bcc83['onDestroyed']['bind'](_0x3bcc83)), _0x330f5d['on']('shown hidden rested dir plain', _0x20fd2b), _0x330f5d['on']('dir:up dir:right dir:down dir:left', _0x20fd2b), _0x330f5d['on']('plain:up plain:right plain:down plain:left', _0x20fd2b);
        }, _0x2a7ff9['prototype']['bindDocument'] = function () {
            var _0x11d547 = this;
            _0x11d547['binded'] || (_0x11d547['bindEvt'](document, 'move')['bindEvt'](document, 'end'), _0x11d547['binded'] = !0x0);
        }, _0x2a7ff9['prototype']['unbindDocument'] = function (_0x530f3f) {
            var _0x4cf4d2 = this;
            Object['keys'](_0x4cf4d2['ids'])['length'] && !0x0 !== _0x530f3f || (_0x4cf4d2['unbindEvt'](document, 'move')['unbindEvt'](document, 'end'), _0x4cf4d2['binded'] = !0x1);
        }, _0x2a7ff9['prototype']['getIdentifier'] = function (_0x6dc030) {
            var _0x115f66;
            return _0x6dc030 ? void 0x0 === (_0x115f66 = void 0x0 === _0x6dc030['identifier'] ? _0x6dc030['pointerId'] : _0x6dc030['identifier']) && (_0x115f66 = this['latest'] || 0x0) : _0x115f66 = this['index'], void 0x0 === this['ids'][_0x115f66] && (this['ids'][_0x115f66] = this['index'], this['index'] += 0x1), this['latest'] = _0x115f66, this['ids'][_0x115f66];
        }, _0x2a7ff9['prototype']['removeIdentifier'] = function (_0x16ab41) {
            var _0x133a88 = {};
            for (var _0x3d92c7 in this['ids'])
                if (this['ids'][_0x3d92c7] === _0x16ab41) {
                    _0x133a88['id'] = _0x3d92c7, _0x133a88['identifier'] = this['ids'][_0x3d92c7], delete this['ids'][_0x3d92c7];
                    break;
                } return _0x133a88;
        }, _0x2a7ff9['prototype']['onmove'] = function (_0x334fad) {

            return this['onAny']('move', _0x334fad), !0x1;
        }, _0x2a7ff9['prototype']['onend'] = function (_0xd48b08) {

            return this['onAny']('end', _0xd48b08), !0x1;
        }, _0x2a7ff9['prototype']['oncancel'] = function (_0x1690ad) {

            return this['onAny']('end', _0x1690ad), !0x1;
        }, _0x2a7ff9['prototype']['onAny'] = function (_0x41c24f, _0x438232) {
            var _0x47edc5, _0x4cb1c6 = this,
                _0x229d8d = 'processOn' + _0x41c24f['charAt'](0x0)['toUpperCase']() + _0x41c24f['slice'](0x1);
            _0x438232 = _0x2b11bd['prepareEvent'](_0x438232);
            var _0x229d6f = function (_0x5aa22a, _0x3b03db, _0x378ea8) {

                _0x378ea8['ids']['indexOf'](_0x3b03db) >= 0x0 && (_0x378ea8[_0x229d8d](_0x5aa22a), _0x5aa22a['_found_'] = !0x0);
            };
            return _0x2b11bd['map'](_0x438232, function (_0x28366c) {

                _0x47edc5 = _0x4cb1c6['getIdentifier'](_0x28366c), _0x2b11bd['map'](_0x4cb1c6['collections'], _0x229d6f['bind'](null, _0x28366c, _0x47edc5)), _0x28366c['_found_'] || _0x4cb1c6['removeIdentifier'](_0x47edc5);
            }), !0x1;
        }, _0x2a7ff9['prototype']['destroy'] = function () {
            var _0x376c29 = this;
            _0x376c29['unbindDocument'](!0x0), _0x376c29['ids'] = {}, _0x376c29['index'] = 0x0, _0x376c29['collections']['forEach'](function (_0xb94e7c) {

                _0xb94e7c['destroy']();
            }), _0x376c29['off']();
        }, _0x2a7ff9['prototype']['onDestroyed'] = function (_0x1b6e31, _0x17e956) {
            var _0x43a22a = this;
            if (_0x43a22a['collections']['indexOf'](_0x17e956) < 0x0) return !0x1;
            _0x43a22a['collections']['splice'](_0x43a22a['collections']['indexOf'](_0x17e956), 0x1);
        };
        var _0x2bf7d0 = new _0x2a7ff9();
        return {
            'create': function (_0x40aaf0) {

                return _0x2bf7d0['create'](_0x40aaf0);
            },
            'factory': _0x2bf7d0
        };
    });
}