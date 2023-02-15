var EJS = function (modules) {
    var installedModules = {};

    function _require(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId]['exports'];
        var moduleItem = installedModules[moduleId] = {
            'i': moduleId,
            'l': !0x1,
            'exports': {}
        };
        modules[moduleId]['call'](
            moduleItem['exports'],
            moduleItem,
            moduleItem['exports'],
            _require
        );
        moduleItem['l'] = !0x0;
        return moduleItem['exports'];
    }
    _require['m'] = modules,
        _require['c'] = installedModules,
        _require['d'] = function (exports, name, getter) {
            _require['o'](exports, name) || Object['defineProperty'](exports, name, {
                'enumerable': !0x0,
                'get': getter
            });
        },
        _require['r'] = function (moduleItem) {
            'undefined' != typeof Symbol && Symbol['toStringTag'] && Object['defineProperty'](moduleItem, Symbol['toStringTag'], {
                'value': 'Module'
            });
            Object['defineProperty'](moduleItem, '__esModule', {
                'value': !0x0
            });
        },
        _require['t'] = function (moduleItem, type) {
            if (0x1 & type && (moduleItem = _require(moduleItem)), 0x8 & type) return moduleItem;
            if (0x4 & type && 'object' == typeof moduleItem && moduleItem && moduleItem['__esModule']) return moduleItem;
            var object = Object['create'](null);
            if (_require['r'](object), Object['defineProperty'](object, 'default', {
                    'enumerable': !0x0,
                    'value': moduleItem
                }), 0x2 & type && 'string' != typeof moduleItem) {
                for (var Prop in moduleItem) _require['d'](object, Prop, function (name) {
                    return moduleItem[name];
                } ['bind'](null, Prop));
            }
            return object;
        },
        _require['n'] = function (moduleItem) {
            var getter = moduleItem && moduleItem['__esModule'] ? function () {
                return moduleItem['default'];
            } : function () {
                return moduleItem;
            };
            return _require['d'](getter, 'a', getter), getter;
        },
        _require['o'] = function (object, property) {

            return Object['prototype']['hasOwnProperty']['call'](object, property);
        },
        _require['p'] = '';
    return _require(_require['s'] = 336);
}([function id_000_0x0(es_module, es_exports, es_require) {
    var _export_2 = es_require(0x2),
        _export_9 = es_require(0x9),
        _export_16 = es_require(0x10),
        _export_13 = es_require(0xd),
        _export_19 = es_require(0x13),
        _0x508e6c = function (_0x52b2c0, _0x4f044d, _0x102795) {
            var _0x115109, _0x24ef94, _0x51e756, _0x5c9d00, _0x26798d = _0x52b2c0 & _0x508e6c['F'],
                _0x16c514 = _0x52b2c0 & _0x508e6c['G'],
                _0x1c0ce3 = _0x52b2c0 & _0x508e6c['S'],
                _0x3f717e = _0x52b2c0 & _0x508e6c['P'],
                _0xc498cd = _0x52b2c0 & _0x508e6c['B'],
                _0x3975e8 = _0x16c514 ? _export_2 : _0x1c0ce3 ? _export_2[_0x4f044d] || (_export_2[_0x4f044d] = {}) : (_export_2[_0x4f044d] || {})['prototype'],
                _0x42bd9d = _0x16c514 ? _export_9 : _export_9[_0x4f044d] || (_export_9[_0x4f044d] = {}),
                _0x1b80a9 = _0x42bd9d['prototype'] || (_0x42bd9d['prototype'] = {});
            for (_0x115109 in (_0x16c514 && (_0x102795 = _0x4f044d), _0x102795)) _0x51e756 = ((_0x24ef94 = !_0x26798d && _0x3975e8 && void 0x0 !== _0x3975e8[_0x115109]) ? _0x3975e8 : _0x102795)[_0x115109], _0x5c9d00 = _0xc498cd && _0x24ef94 ? _export_19(_0x51e756, _export_2) : _0x3f717e && 'function' == typeof _0x51e756 ? _export_19(Function['call'], _0x51e756) : _0x51e756, _0x3975e8 && _export_13(_0x3975e8, _0x115109, _0x51e756, _0x52b2c0 & _0x508e6c['U']), _0x42bd9d[_0x115109] != _0x51e756 && _export_16(_0x42bd9d, _0x115109, _0x5c9d00), _0x3f717e && _0x1b80a9[_0x115109] != _0x51e756 && (_0x1b80a9[_0x115109] = _0x51e756);
        };
    _export_2['core'] = _export_9, _0x508e6c['F'] = 0x1, _0x508e6c['G'] = 0x2, _0x508e6c['S'] = 0x4, _0x508e6c['P'] = 0x8, _0x508e6c['B'] = 0x10, _0x508e6c['W'] = 0x20, _0x508e6c['U'] = 0x40, _0x508e6c['R'] = 0x80, es_module['exports'] = _0x508e6c;
}, function Gamepads_001_0x1(es_module, es_exports, es_require) {

    ! function (_0x4abadd) {
        'use strict';

        var _0xa2cfe2 = function () {},
            _0x8bd8ef = {
                'getType': function () {

                    return 'null';
                },
                'isSupported': function () {
                    return !0x1;
                },
                'update': _0xa2cfe2
            },
            _0x8f134a = function (_0x2d1740) {
                var _0x1155e5 = this,
                    _0x336d7e = window;
                this['update'] = _0xa2cfe2, this['requestAnimationFrame'] = _0x2d1740 || _0x336d7e['requestAnimationFrame'] || _0x336d7e['webkitRequestAnimationFrame'] || _0x336d7e['mozRequestAnimationFrame'], this['tickFunction'] = function () {

                    _0x1155e5['update'](), _0x1155e5['startTicker']();
                }, this['startTicker'] = function () {

                    _0x1155e5['requestAnimationFrame']['apply'](_0x336d7e, [_0x1155e5['tickFunction']]);
                };
            };
        _0x8f134a['prototype']['start'] = function (_0x135408) {

            this['update'] = _0x135408 || _0xa2cfe2, this['startTicker']();
        };
        var _0x2c79d8 = function () {};
        _0x2c79d8['prototype']['update'] = _0xa2cfe2, _0x2c79d8['prototype']['start'] = function (_0x179ffd) {

            this['update'] = _0x179ffd || _0xa2cfe2;
        };
        var _0x407f50 = function (_0x5e0867, _0x2f0a91) {

            this['listener'] = _0x5e0867, this['gamepadGetter'] = _0x2f0a91, this['knownGamepads'] = [];
        };
        _0x407f50['factory'] = function (_0x52767a) {
            var _0x9703d0 = _0x8bd8ef,
                _0x1a396c = window && window['navigator'];
            return _0x1a396c && (void 0x0 !== _0x1a396c['getGamepads'] ? _0x9703d0 = new _0x407f50(_0x52767a, function () {

                return _0x1a396c['getGamepads']();
            }) : void 0x0 !== _0x1a396c['webkitGamepads'] ? _0x9703d0 = new _0x407f50(_0x52767a, function () {
                return _0x1a396c['webkitGamepads']();
            }) : void 0x0 !== _0x1a396c['webkitGetGamepads'] && (_0x9703d0 = new _0x407f50(_0x52767a, function () {
                return _0x1a396c['webkitGetGamepads']();
            }))), _0x9703d0;
        }, _0x407f50['getType'] = function () {

            return 'WebKit';
        }, _0x407f50['prototype']['getType'] = function () {
            return _0x407f50['getType']();
        }, _0x407f50['prototype']['isSupported'] = function () {
            return !0x0;
        }, _0x407f50['prototype']['update'] = function () {
            var _0x4c5965, _0xf09ad6, _0x2b3fc4 = Array['prototype']['slice']['call'](this['gamepadGetter'](), 0x0);
            for (_0xf09ad6 = this['knownGamepads']['length'] - 0x1; _0xf09ad6 >= 0x0; _0xf09ad6--) _0x4c5965 = this['knownGamepads'][_0xf09ad6], _0x2b3fc4['indexOf'](_0x4c5965) < 0x0 && (this['knownGamepads']['splice'](_0xf09ad6, 0x1), this['listener']['_disconnect'](_0x4c5965));
            for (_0xf09ad6 = 0x0; _0xf09ad6 < _0x2b3fc4['length']; _0xf09ad6++)(_0x4c5965 = _0x2b3fc4[_0xf09ad6]) && this['knownGamepads']['indexOf'](_0x4c5965) < 0x0 && (this['knownGamepads']['push'](_0x4c5965), this['listener']['_connect'](_0x4c5965));
        };
        var _0x1bd983 = function (_0x2db3ee) {

            this['listener'] = _0x2db3ee, -0x1 !== (window && window['navigator'])['userAgent']['indexOf']('Firefox') && (window['addEventListener']('gamepadconnected', function (_0xcd42e5) {
                _0x2db3ee['_connect'](_0xcd42e5['gamepad']);
            }), window['addEventListener']('gamepaddisconnected', function (_0xd3c816) {

                _0x2db3ee['_disconnect'](_0xd3c816['gamepad']);
            }));
        };
        _0x1bd983['factory'] = function (_0x1c54dd) {
            var _0x5bb143 = _0x8bd8ef;
            return window && void 0x0 !== window['addEventListener'] && (_0x5bb143 = new _0x1bd983(_0x1c54dd)), _0x5bb143;
        }, _0x1bd983['getType'] = function () {

            return 'Firefox';
        }, _0x1bd983['prototype']['getType'] = function () {
            return _0x1bd983['getType']();
        }, _0x1bd983['prototype']['isSupported'] = function () {

            return -0x1 !== (window && window['navigator'])['userAgent']['indexOf']('Firefox');
        }, _0x1bd983['prototype']['update'] = _0xa2cfe2;
        var _0x17eb4d = function (_0x4c56fd) {

            this['updateStrategy'] = _0x4c56fd || new _0x8f134a(), this['gamepads'] = [], this['listeners'] = {}, this['platform'] = _0x8bd8ef, this['deadzone'] = 0.03, this['maximizeThreshold'] = 0.97;
        };
        _0x17eb4d['UpdateStrategies'] = {
            'AnimFrameUpdateStrategy': _0x8f134a,
            'ManualUpdateStrategy': _0x2c79d8
        }, _0x17eb4d['PlatformFactories'] = [_0x1bd983['factory'], _0x407f50['factory']], _0x17eb4d['Type'] = {
            'N64': 'n64',
            'PLAYSTATION': 'playstation',
            'PLAYSTATION4': 'playstation4',
            'LOGITECH': 'logitech',
            'XBOX': 'xbox',
            'ECKA': 'ecka',
            'USBJOYSTICK': 'usbjoystick',
            'UNKNOWN': 'unknown'
        }, _0x17eb4d['Event'] = {
            'CONNECTED': 'connected',
            'UNSUPPORTED': 'unsupported',
            'DISCONNECTED': 'disconnected',
            'TICK': 'tick',
            'BUTTON_DOWN': 'button-down',
            'BUTTON_UP': 'button-up',
            'AXIS_CHANGED': 'axis-changed'
        }, _0x17eb4d['StandardButtons'] = ['BUTTON_1', 'BUTTON_2', 'BUTTON_3', 'BUTTON_4', 'LEFT_TOP_SHOULDER', 'RIGHT_TOP_SHOULDER', 'LEFT_BOTTOM_SHOULDER', 'RIGHT_BOTTOM_SHOULDER', 'SELECT_BACK', 'START_FORWARD', 'LEFT_STICK', 'RIGHT_STICK', 'DPAD_UP', 'DPAD_DOWN', 'DPAD_LEFT', 'DPAD_RIGHT', 'HOME'], _0x17eb4d['StandardAxes'] = ['LEFT_STICK_X', 'LEFT_STICK_Y', 'RIGHT_STICK_X', 'RIGHT_STICK_Y'];
        var _0x2e010f, _0x3941dd = function (_0x3a3c3d, _0x583d43, _0x488927) {

            return _0x583d43 < _0x3a3c3d['length'] ? _0x3a3c3d[_0x583d43] : _0x488927 + (_0x583d43 - _0x3a3c3d['length'] + 0x1);
        };
        _0x17eb4d['StandardMapping'] = {
            'env': {},
            'buttons': {
                'byButton': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x3]
            }
        }, _0x17eb4d['Mappings'] = [{
            'env': {
                'platform': _0x1bd983['getType'](),
                'type': _0x17eb4d['Type']['N64']
            },
            'buttons': {
                'byButton': [0x2, 0x1, 0x3, 0x0, 0x4, 0x5, -0x1, -0x1, 0x8, 0x9, -0x1, -0x1, 0xc, 0xd, 0xe, 0xf, -0x1]
            },
            'axes': {
                'byAxis': [0x1, 0x2, -0x1, -0x1]
            }
        }, {
            'env': {
                'platform': _0x407f50['getType'](),
                'type': _0x17eb4d['Type']['N64']
            },
            'buttons': {
                'byButton': [0x2, 0x1, 0x3, 0x0, 0x4, 0x5, -0x1, -0x1, 0x8, 0x9, -0x1, -0x1, 0xc, 0xd, 0xe, 0xf, -0x1]
            },
            'axes': {
                'byAxis': [0x0, 0x1, -0x1, -0x1]
            }
        }, {
            'env': {
                'platform': _0x1bd983['getType'](),
                'type': _0x17eb4d['Type']['XBOX']
            },
            'buttons': {
                'byButton': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0xf, 0x10, 0x9, 0x8, 0x6, 0x7, 0xb, 0xc, 0xd, 0xe, 0xa]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x3]
            }
        }, {
            'env': {
                'platform': _0x1bd983['getType'](),
                'type': _0x17eb4d['Type']['PLAYSTATION']
            },
            'buttons': {
                'byButton': [0xe, 0xd, 0xf, 0xc, 0xa, 0xb, 0x8, 0x9, 0x0, 0x3, 0x1, 0x2, 0x4, 0x6, 0x7, 0x5, 0x10]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x3]
            }
        }, {
            'env': {
                'platform': _0x1bd983['getType'](),
                'type': _0x17eb4d['Type']['PLAYSTATION4']
            },
            'buttons': {
                'byButton': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x3]
            }
        }, {
            'env': {
                'platform': _0x407f50['getType'](),
                'type': _0x17eb4d['Type']['PLAYSTATION4']
            },
            'buttons': {
                'byButton': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x3]
            }
        }, {
            'env': {
                'platform': _0x407f50['getType'](),
                'type': _0x17eb4d['Type']['LOGITECH']
            },
            'buttons': {
                'byButton': [0x1, 0x2, 0x0, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xb, 0xc, 0xd, 0xe, 0xa]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x3]
            }
        }, {
            'env': {
                'platform': _0x1bd983['getType'](),
                'type': _0x17eb4d['Type']['LOGITECH']
            },
            'buttons': {
                'byButton': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, -0x1, -0x1, 0x6, 0x7, 0x8, 0x9, 0xb, 0xc, 0xd, 0xe, 0xa],
                'byAxis': [-0x1, -0x1, -0x1, -0x1, -0x1, -0x1, [0x2, 0x0, 0x1],
                    [0x2, 0x0, -0x1]
                ]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x3, 0x4]
            }
        }, {
            'env': {
                'platform': _0x407f50['getType'](),
                'type': _0x17eb4d['Type']['ECKA']
            },
            'buttons': {
                'byButton': [0x2, 0x1, 0x3, 0x0, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xb, 0xc, 0xd, 0xe, 0xa],
                'byAxis': [-0x1, -0x1, -0x1, -0x1, -0x1, -0x1, [0x2, 0x0, 0x1],
                    [0x2, 0x0, -0x1]
                ]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x3, 0x4]
            }
        }, {
            'env': {
                'platform': _0x1bd983['getType'](),
                'type': _0x17eb4d['Type']['USBJOYSTICK']
            },
            'buttons': {
                'byButton': [0x2, 0x1, 0x3, 0x0, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x5]
            }
        }, {
            'env': {
                'platform': _0x407f50['getType'](),
                'type': _0x17eb4d['Type']['USBJOYSTICK']
            },
            'buttons': {
                'byButton': [0x2, 0x1, 0x3, 0x0, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x5]
            }
        }, {
            'env': {
                'platform': _0x407f50['getType'](),
                'type': _0x17eb4d['Type']['UNKNOWN']
            },
            'buttons': {
                'byButton': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, -0x1, -0x1, 0x6, 0x7, 0x8, 0x9, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0xa]
            },
            'axes': {
                'byAxis': [0x0, 0x1, 0x2, 0x5]
            }
        }], _0x17eb4d['prototype']['init'] = function () {
            var _0x5e730e = _0x17eb4d['resolvePlatform'](this),
                _0x54a41e = this;
            return this['platform'] = _0x5e730e, this['updateStrategy']['start'](function () {
                _0x54a41e['_update']();
            }), this['buttonState'] = [], this['extraButtonState'] = [], _0x5e730e['isSupported']();
        }, _0x17eb4d['prototype']['bind'] = function (_0x3bb1ae, _0x4a2431) {

            return void 0x0 === this['listeners'][_0x3bb1ae] && (this['listeners'][_0x3bb1ae] = []), this['listeners'][_0x3bb1ae]['push'](_0x4a2431), this;
        }, _0x17eb4d['prototype']['unbind'] = function (_0x51231e, _0x3e17f6) {

            if (void 0x0 !== _0x51231e) {
                if (void 0x0 !== _0x3e17f6) {
                    if (void 0x0 === this['listeners'][_0x51231e]) return !0x1;
                    for (var _0x3b6c03 = 0x0; _0x3b6c03 < this['listeners'][_0x51231e]['length']; _0x3b6c03++)
                        if (this['listeners'][_0x51231e][_0x3b6c03] === _0x3e17f6) return this['listeners'][_0x51231e]['splice'](_0x3b6c03, 0x1), !0x0;
                    return !0x1;
                }
                this['listeners'][_0x51231e] = [];
            } else this['listeners'] = {};
        }, _0x17eb4d['prototype']['count'] = function () {

            return this['gamepads']['length'];
        }, _0x17eb4d['prototype']['_fire'] = function (_0xaf7ecb, _0x27d443) {

            if (void 0x0 !== this['listeners'][_0xaf7ecb]) {
                for (var _0x24074c = 0x0; _0x24074c < this['listeners'][_0xaf7ecb]['length']; _0x24074c++) this['listeners'][_0xaf7ecb][_0x24074c]['apply'](this['listeners'][_0xaf7ecb][_0x24074c], [_0x27d443]);
                var _0x4e562e = this;
                _0x27d443['gamepad'] && _0x27d443['gamepad']['extra_buttons'] && _0x27d443['gamepad']['extra_buttons']['forEach'](function (_0x216de9, _0x76c929) {

                    _0x4e562e['extraButtonState'][_0x27d443['gamepad']['index']] || (_0x4e562e['extraButtonState'][_0x27d443['gamepad']['index']] = []), _0x4e562e['extraButtonState'][_0x27d443['gamepad']['index']][_0x76c929] = _0x216de9;
                });
            }
        }, _0x17eb4d['getNullPlatform'] = function () {

            return Object['create'](_0x8bd8ef);
        }, _0x17eb4d['resolvePlatform'] = function (_0x40ac42) {
            var _0x30c6c0, _0x4d5dbd = _0x8bd8ef;
            for (_0x30c6c0 = 0x0; !_0x4d5dbd['isSupported']() && _0x30c6c0 < _0x17eb4d['PlatformFactories']['length']; _0x30c6c0++) _0x4d5dbd = _0x17eb4d['PlatformFactories'][_0x30c6c0](_0x40ac42);
            return _0x4d5dbd;
        }, _0x17eb4d['prototype']['_connect'] = function (_0x376985) {
            var _0x22acbd, _0x303860, _0x1953ee = this['_resolveMapping'](_0x376985);
            for (_0x376985['state'] = {}, _0x376985['lastState'] = {}, _0x376985['updater'] = [], this['buttonState'][_0x376985['index']] || (this['buttonState'][_0x376985['index']] = []), this['extraButtonState'][_0x376985['index']] || (this['extraButtonState'][_0x376985['index']] = []), _0x22acbd = _0x1953ee['buttons']['byButton']['length'], _0x303860 = 0x0; _0x303860 < _0x22acbd; _0x303860++) this['_addButtonUpdater'](_0x376985, _0x1953ee, _0x303860);
            for (_0x22acbd = _0x1953ee['axes']['byAxis']['length'], _0x303860 = 0x0; _0x303860 < _0x22acbd; _0x303860++) this['_addAxisUpdater'](_0x376985, _0x1953ee, _0x303860);
            if (this['gamepads'][_0x376985['index']] = _0x376985, !this['gamepads'][_0x376985['index']]['extra_buttons']) {
                for (this['gamepads'][_0x376985['index']]['extra_buttons'] = [], _0x303860 = 0xc; _0x303860 < 0x10; _0x303860++) this['extraButtonState'][_0x376985['index']][_0x303860] ? this['gamepads'][_0x376985['index']]['extra_buttons'][_0x303860] = this['extraButtonState'][_0x376985['index']][_0x303860] : this['gamepads'][_0x376985['index']]['extra_buttons'][_0x303860] = {
                    'pressed': !0x1,
                    'value': 0x0
                };
            }
            this['_fire'](_0x17eb4d['Event']['CONNECTED'], _0x376985);
        }, _0x17eb4d['prototype']['_addButtonUpdater'] = function (_0x763542, _0x3bd950, _0x33f427) {
            var _0x2ee915, _0x4d5cde = _0x3941dd(_0x17eb4d['StandardButtons'], _0x33f427, 'EXTRA_BUTTON_'),
                _0x536be0 = this['_createButtonGetter'](_0x763542, _0x3bd950['buttons'], _0x33f427),
                _0x3db028 = this,
                _0x5098c8 = {
                    'gamepad': _0x763542,
                    'control': _0x4d5cde,
                    'index': _0x33f427,
                    'gamepadIndex': _0x763542['index']
                };
            _0x763542['state'][_0x4d5cde] = 0x0, _0x763542['lastState'][_0x4d5cde] = 0x0, null == this['buttonState'][_0x763542['index']][_0x4d5cde] && (this['buttonState'][_0x763542['index']][_0x4d5cde] = 0x0), _0x2ee915 = function () {
                var _0x42e4ee = _0x536be0(),
                    _0x344afc = _0x763542['lastState'][_0x4d5cde],
                    _0x29c201 = _0x42e4ee > 0.5,
                    _0x2cd3a7 = _0x344afc > 0.5;
                _0x763542['state'][_0x4d5cde] = _0x42e4ee, _0x29c201 && !_0x2cd3a7 ? _0x3db028['_fire'](_0x17eb4d['Event']['BUTTON_DOWN'], Object['create'](_0x5098c8)) : !_0x29c201 && _0x2cd3a7 ? _0x3db028['_fire'](_0x17eb4d['Event']['BUTTON_UP'], Object['create'](_0x5098c8)) : _0x3db028['buttonState'][_0x763542['index']][_0x4d5cde] != _0x42e4ee && _0x3db028['_fire'](_0x17eb4d['Event']['BUTTON_UP'], Object['create'](_0x5098c8)), 0x0 !== _0x42e4ee && 0x1 !== _0x42e4ee && _0x42e4ee !== _0x344afc && _0x3db028['_fireAxisChangedEvent'](_0x763542, _0x4d5cde, _0x42e4ee), _0x763542['lastState'][_0x4d5cde] = _0x42e4ee, _0x3db028['buttonState'][_0x763542['index']][_0x4d5cde] = _0x42e4ee;
            }, _0x763542['updater']['push'](_0x2ee915);
        }, _0x17eb4d['prototype']['_addAxisUpdater'] = function (_0x1e9b98, _0x238971, _0x126bb1) {
            var _0x49edaa, _0x5c3102 = _0x3941dd(_0x17eb4d['StandardAxes'], _0x126bb1, 'EXTRA_AXIS_'),
                _0x3271c0 = this['_createAxisGetter'](_0x1e9b98, _0x238971['axes'], _0x126bb1),
                _0xd6a09e = this;
            _0x1e9b98['state'][_0x5c3102] = 0x0, _0x1e9b98['lastState'][_0x5c3102] = 0x0, null == this['buttonState'][_0x1e9b98['index']][_0x5c3102] && (this['buttonState'][_0x1e9b98['index']][_0x5c3102] = 0x0), _0x49edaa = function () {
                var _0x186435 = _0x3271c0(),
                    _0x511108 = _0xd6a09e['buttonState'][_0x1e9b98['index']][_0x5c3102];
                _0x1e9b98['state'][_0x5c3102] = _0x186435, _0x186435 !== _0x511108 && _0xd6a09e['_fireAxisChangedEvent'](_0x1e9b98, _0x5c3102, _0x186435), _0x1e9b98['lastState'][_0x5c3102] = _0x186435, _0xd6a09e['buttonState'][_0x1e9b98['index']][_0x5c3102] = _0x186435;
            }, _0x1e9b98['updater']['push'](_0x49edaa);
        }, _0x17eb4d['prototype']['_fireAxisChangedEvent'] = function (_0x41885c, _0x286627, _0xafe174) {
            var _0x3fe0cf = {
                'gamepad': _0x41885c,
                'axis': _0x286627,
                'value': _0xafe174
            };
            this['_fire'](_0x17eb4d['Event']['AXIS_CHANGED'], _0x3fe0cf);
        }, _0x17eb4d['prototype']['_createButtonGetter'] = (_0x2e010f = function () {
            return 0x0;
        }, function (es_module, es_exports, es_require) {
            var _0x44858d, _0x16f8dd, _0xef2518 = _0x2e010f,
                _0xe4aead = this;
            return -0x1 !== (_0x44858d = es_exports['byButton'][es_require]) ? 'number' == typeof _0x44858d && _0x44858d < es_module['buttons']['length'] && (_0xef2518 = function () {
                var _0x4110e6 = es_module['buttons'][_0x44858d];
                return 'number' == typeof _0x4110e6 ? _0x4110e6 : 'number' == typeof _0x4110e6['value'] ? _0x4110e6['value'] : 0x0;
            }) : es_exports['byAxis'] && es_require < es_exports['byAxis']['length'] && (_0x44858d = es_exports['byAxis'][es_require], _0x16f8dd = _0x44858d, '[object Array]' === Object['prototype']['toString']['call'](_0x16f8dd) && 0x3 == _0x44858d['length'] && _0x44858d[0x0] < es_module['axes']['length'] && (_0xef2518 = function (_0x590d7d, _0x968d5c, _0x2e34c8) {
                var _0x411eb8 = _0x2e010f;
                return _0x968d5c < _0x2e34c8 ? _0x411eb8 = function () {
                    var _0x55254f = _0x2e34c8 - _0x968d5c,
                        _0x15b9e8 = _0x590d7d();
                    return (_0x15b9e8 = (_0x15b9e8 - _0x968d5c) / _0x55254f) < 0x0 ? 0x0 : _0x15b9e8;
                } : _0x2e34c8 < _0x968d5c && (_0x411eb8 = function () {
                    var _0x238ae1 = _0x968d5c - _0x2e34c8,
                        _0x227af9 = _0x590d7d();
                    return (_0x227af9 = (_0x227af9 - _0x2e34c8) / _0x238ae1) > 0x1 ? 0x0 : 0x1 - _0x227af9;
                }), _0x411eb8;
            }(_0xef2518 = function () {
                var _0x5be81a = es_module['axes'][_0x44858d[0x0]];
                return _0xe4aead['_applyDeadzoneMaximize'](_0x5be81a);
            }, _0x44858d[0x1], _0x44858d[0x2]))), _0xef2518;
        }), _0x17eb4d['prototype']['_createAxisGetter'] = (function () {
            var _0x50d3b3 = function () {
                return 0x0;
            };
            return function (_0x3a6301, _0x45d978, _0xc59af2) {
                var _0x103281, _0xee58f8 = _0x50d3b3,
                    _0x5da719 = this;
                return -0x1 !== (_0x103281 = _0x45d978['byAxis'][_0xc59af2]) && 'number' == typeof _0x103281 && _0x103281 < _0x3a6301['axes']['length'] && (_0xee58f8 = function () {
                    var _0x4eb9b8 = _0x3a6301['axes'][_0x103281];
                    return _0x5da719['_applyDeadzoneMaximize'](_0x4eb9b8);
                }), _0xee58f8;
            };
        }()), _0x17eb4d['prototype']['_disconnect'] = function (_0x3c66e0) {
            var _0x4e9e9e, _0x2ef6eb = [];
            for (void 0x0 !== this['gamepads'][_0x3c66e0['index']] && delete this['gamepads'][_0x3c66e0['index']], _0x4e9e9e = 0x0; _0x4e9e9e < this['gamepads']['length']; _0x4e9e9e++) void 0x0 !== this['gamepads'][_0x4e9e9e] && (_0x2ef6eb[_0x4e9e9e] = this['gamepads'][_0x4e9e9e]);
            this['gamepads'] = _0x2ef6eb, this['_fire'](_0x17eb4d['Event']['DISCONNECTED'], _0x3c66e0);
        }, _0x17eb4d['prototype']['_resolveControllerType'] = function (_0x40340e) {

            return -0x1 !== (_0x40340e = _0x40340e['toLowerCase']()['replace'](/\s+/g, ' ')['replace'](/^\s+|\s+$/g, ''))['indexOf']('playstation') ? _0x17eb4d['Type']['PLAYSTATION'] : -0x1 !== _0x40340e['indexOf']('vendor: 054c') ? _0x17eb4d['Type']['PLAYSTATION4'] : -0x1 !== _0x40340e['indexOf']('logitech') || -0x1 !== _0x40340e['indexOf']('wireless gamepad') ? _0x17eb4d['Type']['LOGITECH'] : -0x1 !== _0x40340e['indexOf']('xbox') || -0x1 !== _0x40340e['indexOf']('360') ? _0x17eb4d['Type']['XBOX'] : -0x1 !== _0x40340e['indexOf']('79-6-generic') && -0x1 !== _0x40340e['indexOf']('joystick') || -0x1 !== _0x40340e['indexOf']('vendor: 0079 product: 0006') && -0x1 !== _0x40340e['indexOf']('generic usb joystick') ? _0x17eb4d['Type']['N64'] : 'usb joystick (vendor: 0e8f product: 0002)' === _0x40340e ? _0x17eb4d['Type']['ECKA'] : -0x1 !== _0x40340e['indexOf']('vendor: 0079 product: 0006') ? _0x17eb4d['Type']['USBJOYSTICK'] : _0x17eb4d['Type']['UNKNOWN'];
        }, _0x17eb4d['prototype']['_resolveMapping'] = function (_0x6b12a6) {
            var _0x18ca4d, _0x1c32ec, _0x48295c = _0x17eb4d['Mappings'],
                _0x1bce33 = null,
                _0x5a4f1d = {
                    'platform': this['platform']['getType'](),
                    'type': this['_resolveControllerType'](_0x6b12a6['id'])
                };
            for (_0x18ca4d = 0x0; !_0x1bce33 && _0x18ca4d < _0x48295c['length']; _0x18ca4d++) _0x1c32ec = _0x48295c[_0x18ca4d], _0x17eb4d['envMatchesFilter'](_0x1c32ec['env'], _0x5a4f1d) && (_0x1bce33 = _0x1c32ec);
            return _0x1bce33 || _0x17eb4d['StandardMapping'];
        }, _0x17eb4d['envMatchesFilter'] = function (_0x161de7, _0x15b1bc) {
            var _0x1223dd, _0x526d64 = !0x0;
            for (_0x1223dd in _0x161de7) _0x161de7[_0x1223dd] !== _0x15b1bc[_0x1223dd] && (_0x526d64 = !0x1);
            return _0x526d64;
        }, _0x17eb4d['prototype']['_update'] = function () {

            this['platform']['update'](), this['gamepads']['forEach'](function (_0x3144a7) {

                _0x3144a7 && _0x3144a7['updater']['forEach'](function (_0x15bb0c) {
                    _0x15bb0c();
                });
            }), this['gamepads']['length'] > 0x0 && this['_fire'](_0x17eb4d['Event']['TICK'], this['gamepads']);
        }, _0x17eb4d['prototype']['_applyDeadzoneMaximize'] = function (_0x58715b, _0x533e4b, _0x261d4e) {

            return _0x533e4b = void 0x0 !== _0x533e4b ? _0x533e4b : this['deadzone'], _0x261d4e = void 0x0 !== _0x261d4e ? _0x261d4e : this['maximizeThreshold'], _0x58715b >= 0x0 ? _0x58715b < _0x533e4b ? _0x58715b = 0x0 : _0x58715b > _0x261d4e && (_0x58715b = 0x1) : _0x58715b > -_0x533e4b ? _0x58715b = 0x0 : _0x58715b < -_0x261d4e && (_0x58715b = -0x1), _0x58715b;
        }, _0x4abadd['Gamepad'] = _0x17eb4d;
    }(es_module['exports'] || window);
}, function id_002_0x2(es_module, es_exports) {
    var _0x3a1350 = es_module['exports'] = 'undefined' != typeof window && window['Math'] == Math ? window : 'undefined' != typeof self && self['Math'] == Math ? self : Function('return this')();
    'number' == typeof __g && (__g = _0x3a1350);
}, function id_003_0x3(es_module, es_exports) {
    es_module['exports'] = function (_0x131c63) {
        try {
            return !!_0x131c63();
        } catch (_0x1f6ab8) {
            return !0x0;
        }
    };
}, function id_004_0x4(es_module, es_exports, es_require) {
    var _export_5 = es_require(0x5);
    es_module['exports'] = function (_0x258157) {

        if (!_export_5(_0x258157)) throw TypeError(_0x258157 + ' is not an object!');
        return _0x258157;
    };
}, function id_005_0x5(es_module, es_exports) {

    console.log(es_module, es_exports);
    es_module['exports'] = function (_0x3df4d9) {

        return 'object' == typeof _0x3df4d9 ? null !== _0x3df4d9 : 'function' == typeof _0x3df4d9;
    };
}, , function id_007_0x7(es_module, es_exports, es_require) {
    var _0x1009eb = es_require(0x36)('wks'),
        _export_31 = es_require(0x1f),
        _0x7d3905 = es_require(0x2)['Symbol'],
        _0xdbdfd3 = 'function' == typeof _0x7d3905;
    (es_module['exports'] = function (_0x2dc25b) {
        return _0x1009eb[_0x2dc25b] || (_0x1009eb[_0x2dc25b] = _0xdbdfd3 && _0x7d3905[_0x2dc25b] || (_0xdbdfd3 ? _0x7d3905 : _export_31)('Symbol.' + _0x2dc25b));
    })['store'] = _0x1009eb;
}, function id_008_0x8(es_module, es_exports, es_require) {
    var _export_21 = es_require(0x15),
        _0x2d8dfe = Math['min'];
    es_module['exports'] = function (_0x4888d7) {
        return _0x4888d7 > 0x0 ? _0x2d8dfe(_export_21(_0x4888d7), 0x1fffffffffffff) : 0x0;
    };
}, function id_009_0x9(es_module, es_exports) {
    var version = es_module['exports'] = {
        'version': '2.6.12'
    };
    'number' == typeof __e && (__e = version);
}, function id_010_0xa(es_module, es_exports, es_require) {

    es_module['exports'] = !es_require(0x3)(function () {

        return 0x7 != Object['defineProperty']({}, 'a', {
            'get': function () {
                return 0x7;
            }
        })['a'];
    });
}, function id_011_0xb(es_module, es_exports, es_require) {
    var _export_4 = es_require(0x4),
        _export_95 = es_require(0x5f),
        _export_28 = es_require(0x1c),
        _0x6315d4 = Object['defineProperty'];
    es_exports['f'] = es_require(0xa) ? Object['defineProperty'] : function (_0x456606, _0x5851ab, _0x22af7e) {

        if (_export_4(_0x456606), _0x5851ab = _export_28(_0x5851ab, !0x0), _export_4(_0x22af7e), _export_95) try {
            return _0x6315d4(_0x456606, _0x5851ab, _0x22af7e);
        } catch (_0x5ea8d2) {}
        if ('get' in _0x22af7e || 'set' in _0x22af7e) throw TypeError('Accessors not supported!');
        return 'value' in _0x22af7e && (_0x456606[_0x5851ab] = _0x22af7e['value']), _0x456606;
    };
}, function id_012_0xc(es_module, es_exports, es_require) {
    var _export_26 = es_require(0x1a);
    es_module['exports'] = function (_0x243d54) {
        return Object(_export_26(_0x243d54));
    };
}, function id_013_0xd(es_module, es_exports, es_require) {
    var _export_2 = es_require(0x2),
        _export_16 = es_require(0x10),
        _export_15 = es_require(0xf),
        _0xddec37 = es_require(0x1f)('src'),
        _export_138 = es_require(0x8a),
        _0x50ba36 = ('' + _export_138)['split']('toString');
    es_require(0x9)['inspectSource'] = function (_0x1c9026) {

        return _export_138['call'](_0x1c9026);
    }, (es_module['exports'] = function (_0x5367af, _0x441f84, _0x4c0266, _0x215bc5) {
        var _0x5bdd36 = 'function' == typeof _0x4c0266;
        _0x5bdd36 && (_export_15(_0x4c0266, 'name') || _export_16(_0x4c0266, 'name', _0x441f84)), _0x5367af[_0x441f84] !== _0x4c0266 && (_0x5bdd36 && (_export_15(_0x4c0266, _0xddec37) || _export_16(_0x4c0266, _0xddec37, _0x5367af[_0x441f84] ? '' + _0x5367af[_0x441f84] : _0x50ba36['join'](String(_0x441f84)))), _0x5367af === _export_2 ? _0x5367af[_0x441f84] = _0x4c0266 : _0x215bc5 ? _0x5367af[_0x441f84] ? _0x5367af[_0x441f84] = _0x4c0266 : _export_16(_0x5367af, _0x441f84, _0x4c0266) : (delete _0x5367af[_0x441f84], _export_16(_0x5367af, _0x441f84, _0x4c0266)));
    })(Function['prototype'], 'toString', function () {

        return 'function' == typeof this && this[_0xddec37] || _export_138['call'](this);
    });
}, function id_014_0xe(es_module, es_exports, es_require) {
    var _export_0 = es_require(0x0),
        _export_3 = es_require(0x3),
        _export_26 = es_require(0x1a),
        _0x5a99db = /"/g,
        _0x3e332b = function (_0x13b43a, _0x5726a3, _0x3b1b3b, _0x58d039) {
            var _0x755f4e = String(_export_26(_0x13b43a)),
                _0x334c5f = '<' + _0x5726a3;
            return '' !== _0x3b1b3b && (_0x334c5f += ' ' + _0x3b1b3b + '="' + String(_0x58d039)['replace'](_0x5a99db, '&quot;') + '"'), _0x334c5f + '>' + _0x755f4e + '</' + _0x5726a3 + '>';
        };
    es_module['exports'] = function (_0x35f692, _0x1faffd) {
        var _0x5ba665 = {};
        _0x5ba665[_0x35f692] = _0x1faffd(_0x3e332b), _export_0(_export_0['P'] + _export_0['F'] * _export_3(function () {
            var _0x558ec1 = '' [_0x35f692]('"');
            return _0x558ec1 !== _0x558ec1['toLowerCase']() || _0x558ec1['split']('"')['length'] > 0x3;
        }), 'String', _0x5ba665);
    };
}, function id_015_0xf(es_module, es_exports) {
    var _0x57e95c = {} ['hasOwnProperty'];
    es_module['exports'] = function (_0x180b0a, _0x1e8e7c) {

        return _0x57e95c['call'](_0x180b0a, _0x1e8e7c);
    };
}, function id_016_0x10(es_module, es_exports, es_require) {
    var _export_11 = es_require(0xb),
        _export_30 = es_require(0x1e);
    es_module['exports'] = es_require(0xa) ? function (_0x3a1c89, _0x231e05, _0x3ce080) {
        return _export_11['f'](_0x3a1c89, _0x231e05, _export_30(0x1, _0x3ce080));
    } : function (_0x10f66d, _0x438a8a, _0x261f04) {
        return _0x10f66d[_0x438a8a] = _0x261f04, _0x10f66d;
    };
}, function id_017_0x11(es_module, es_exports, es_require) {
    var _export_48 = es_require(0x30),
        _export_26 = es_require(0x1a);
    es_module['exports'] = function (_0x172aff) {
        return _export_48(_export_26(_0x172aff));
    };
}, function id_018_0x12(es_module, es_exports, es_require) {
    'use strict';

    var _export_3 = es_require(0x3);
    es_module['exports'] = function (_0x5baaf3, _0x3d1b39) {
        return !!_0x5baaf3 && _export_3(function () {

            _0x3d1b39 ? _0x5baaf3['call'](null, function () {}, 0x1) : _0x5baaf3['call'](null);
        });
    };
}, function id_019_0x13(es_module, es_exports, es_require) {
    var _export_20 = es_require(0x14);
    es_module['exports'] = function (_0x4582b4, _0x38309c, _0x1b30a4) {

        if (_export_20(_0x4582b4), void 0x0 === _0x38309c) return _0x4582b4;
        switch (_0x1b30a4) {
            case 0x1:
                return function (_0x519f31) {
                    return _0x4582b4['call'](_0x38309c, _0x519f31);
                };
            case 0x2:
                return function (_0x1b21c0, _0x4c34e9) {

                    return _0x4582b4['call'](_0x38309c, _0x1b21c0, _0x4c34e9);
                };
            case 0x3:
                return function (_0x3f8869, _0x4119e6, _0x43b62e) {

                    return _0x4582b4['call'](_0x38309c, _0x3f8869, _0x4119e6, _0x43b62e);
                };
        }
        return function () {

            return _0x4582b4['apply'](_0x38309c, arguments);
        };
    };
}, function id_020_0x14(es_module, es_exports) {

    es_module['exports'] = function (_0x564e14) {

        if ('function' != typeof _0x564e14) throw TypeError(_0x564e14 + ' is not a function!');
        return _0x564e14;
    };
}, function id_021_0x15(es_module, es_exports) {
    var _0x32ca83 = Math['ceil'],
        _0x410095 = Math['floor'];
    es_module['exports'] = function (_0x56d886) {
        return isNaN(_0x56d886 = +_0x56d886) ? 0x0 : (_0x56d886 > 0x0 ? _0x410095 : _0x32ca83)(_0x56d886);
    };
}, function id_022_0x16(es_module, es_exports, es_require) {
    var _export_49 = es_require(0x31),
        _export_30 = es_require(0x1e),
        _export_17 = es_require(0x11),
        _export_28 = es_require(0x1c),
        _export_15 = es_require(0xf),
        _export_95 = es_require(0x5f),
        _0x3b418a = Object['getOwnPropertyDescriptor'];
    es_exports['f'] = es_require(0xa) ? _0x3b418a : function (_0x3e1cc9, _0x109bb4) {

        if (_0x3e1cc9 = _export_17(_0x3e1cc9), _0x109bb4 = _export_28(_0x109bb4, !0x0), _export_95) try {
            return _0x3b418a(_0x3e1cc9, _0x109bb4);
        } catch (_0x57d241) {}
        if (_export_15(_0x3e1cc9, _0x109bb4)) return _export_30(!_export_49['f']['call'](_0x3e1cc9, _0x109bb4), _0x3e1cc9[_0x109bb4]);
    };
}, function id_023_0x17(es_module, es_exports, es_require) {
    var _export_0 = es_require(0x0),
        _export_9 = es_require(0x9),
        _export_3 = es_require(0x3);
    es_module['exports'] = function (_0x36ab2b, _0x482c47) {
        var _0x3f89a3 = (_export_9['Object'] || {})[_0x36ab2b] || Object[_0x36ab2b],
            _0x4839f2 = {};
        _0x4839f2[_0x36ab2b] = _0x482c47(_0x3f89a3), _export_0(_export_0['S'] + _export_0['F'] * _export_3(function () {
            _0x3f89a3(0x1);
        }), 'Object', _0x4839f2);
    };
}, function id_024_0x18(es_module, es_exports, es_require) {
    var _export_19 = es_require(0x13),
        _export_48 = es_require(0x30),
        _export_12 = es_require(0xc),
        _export_8 = es_require(0x8),
        _export_111 = es_require(0x6f);
    es_module['exports'] = function (_0x623f72, _0x56b01b) {
        var _0x331311 = 0x1 == _0x623f72,
            _0x5a87c7 = 0x2 == _0x623f72,
            _0x5dc1a5 = 0x3 == _0x623f72,
            _0x1cf80a = 0x4 == _0x623f72,
            _0x2b4f58 = 0x6 == _0x623f72,
            _0x4a4c72 = 0x5 == _0x623f72 || _0x2b4f58,
            _0x10feb = _0x56b01b || _export_111;
        return function (_0x454760, _0x473b1e, _0x1dca95) {
            for (var _0x4e8b71, _0xa18bf1, _0x5a88cc = _export_12(_0x454760), _0x47ac26 = _export_48(_0x5a88cc), _0x1f2a4b = _export_19(_0x473b1e, _0x1dca95, 0x3), _0x57f702 = _export_8(_0x47ac26['length']), _0x377a3b = 0x0, _0x1e4976 = _0x331311 ? _0x10feb(_0x454760, _0x57f702) : _0x5a87c7 ? _0x10feb(_0x454760, 0x0) : void 0x0; _0x57f702 > _0x377a3b; _0x377a3b++)
                if ((_0x4a4c72 || _0x377a3b in _0x47ac26) && (_0xa18bf1 = _0x1f2a4b(_0x4e8b71 = _0x47ac26[_0x377a3b], _0x377a3b, _0x5a88cc), _0x623f72)) {
                    if (_0x331311) _0x1e4976[_0x377a3b] = _0xa18bf1;
                    else {
                        if (_0xa18bf1) switch (_0x623f72) {
                            case 0x3:
                                return !0x0;
                            case 0x5:
                                return _0x4e8b71;
                            case 0x6:
                                return _0x377a3b;
                            case 0x2:
                                _0x1e4976['push'](_0x4e8b71);
                        } else {
                            if (_0x1cf80a) return !0x1;
                        }
                    }
                } return _0x2b4f58 ? -0x1 : _0x5dc1a5 || _0x1cf80a ? _0x1cf80a : _0x1e4976;
        };
    };
}, function id_025_0x19(es_module, es_exports) {
    var _0xd5efa = {} ['toString'];
    es_module['exports'] = function (_0x19315a) {

        return _0xd5efa['call'](_0x19315a)['slice'](0x8, -0x1);
    };
}, function id_026_0x1a(es_module, es_exports) {
    es_module['exports'] = function (_0x16695c) {
        if (null == _0x16695c) throw TypeError('Can\x27t call method on  ' + _0x16695c);
        return _0x16695c;
    };
}, , function id_028_0x1c(es_module, es_exports, es_require) {
    var _export_5 = es_require(0x5);
    es_module['exports'] = function (_0x401af1, _0x5688dc) {

        if (!_export_5(_0x401af1)) return _0x401af1;
        var _0x40ff7b, _0x379dcd;
        if (_0x5688dc && 'function' == typeof (_0x40ff7b = _0x401af1['toString']) && !_export_5(_0x379dcd = _0x40ff7b['call'](_0x401af1))) return _0x379dcd;
        if ('function' == typeof (_0x40ff7b = _0x401af1['valueOf']) && !_export_5(_0x379dcd = _0x40ff7b['call'](_0x401af1))) return _0x379dcd;
        if (!_0x5688dc && 'function' == typeof (_0x40ff7b = _0x401af1['toString']) && !_export_5(_0x379dcd = _0x40ff7b['call'](_0x401af1))) return _0x379dcd;
        throw TypeError('Can\x27t convert object to primitive value');
    };
}, function id_029_0x1d(es_module, es_exports, es_require) {
    var _0x97b68e = es_require(0x1f)('meta'),
        _export_5 = es_require(0x5),
        _export_15 = es_require(0xf),
        _0x4a0d23 = es_require(0xb)['f'],
        _0x412e22 = 0x0,
        _0x5a6780 = Object['isExtensible'] || function () {
            return !0x0;
        },
        _0x425586 = !es_require(0x3)(function () {

            return _0x5a6780(Object['preventExtensions']({}));
        }),
        _0x57ea1e = function (_0xb1200d) {
            _0x4a0d23(_0xb1200d, _0x97b68e, {
                'value': {
                    'i': 'O' + ++_0x412e22,
                    'w': {}
                }
            });
        },
        _0x5db521 = es_module['exports'] = {
            'KEY': _0x97b68e,
            'NEED': !0x1,
            'fastKey': function (_0x25f929, _0x50a592) {

                if (!_export_5(_0x25f929)) return 'symbol' == typeof _0x25f929 ? _0x25f929 : ('string' == typeof _0x25f929 ? 'S' : 'P') + _0x25f929;
                if (!_export_15(_0x25f929, _0x97b68e)) {
                    if (!_0x5a6780(_0x25f929)) return 'F';
                    if (!_0x50a592) return 'E';
                    _0x57ea1e(_0x25f929);
                }
                return _0x25f929[_0x97b68e]['i'];
            },
            'getWeak': function (_0x69a947, _0x5303e9) {
                if (!_export_15(_0x69a947, _0x97b68e)) {
                    if (!_0x5a6780(_0x69a947)) return !0x0;
                    if (!_0x5303e9) return !0x1;
                    _0x57ea1e(_0x69a947);
                }
                return _0x69a947[_0x97b68e]['w'];
            },
            'onFreeze': function (_0x1c2de0) {

                return _0x425586 && _0x5db521['NEED'] && _0x5a6780(_0x1c2de0) && !_export_15(_0x1c2de0, _0x97b68e) && _0x57ea1e(_0x1c2de0), _0x1c2de0;
            }
        };
}, function id_030_0x1e(es_module, es_exports) {

    es_module['exports'] = function (_0x4423e2, _0x43f626) {
        return {
            'enumerable': !(0x1 & _0x4423e2),
            'configurable': !(0x2 & _0x4423e2),
            'writable': !(0x4 & _0x4423e2),
            'value': _0x43f626
        };
    };
}, function id_031_0x1f(es_module, es_exports) {
    var _0x269efb = 0x0,
        _0x30e364 = Math['random']();
    es_module['exports'] = function (_0x5382d6) {

        return 'Symbol(' ['concat'](void 0x0 === _0x5382d6 ? '' : _0x5382d6, ')_', (++_0x269efb + _0x30e364)['toString'](0x24));
    };
}, function id_032_0x20(es_module, es_exports) {
    es_module['exports'] = !0x1;
}, function id_033_0x21(es_module, es_exports, es_require) {
    var _export_97 = es_require(0x61),
        _export_69 = es_require(0x45);
    es_module['exports'] = Object['keys'] || function (_0x1cf0f0) {
        return _export_97(_0x1cf0f0, _export_69);
    };
}, function id_034_0x22(es_module, es_exports, es_require) {
    var _export_21 = es_require(0x15),
        _0x25287a = Math['max'],
        _0x39b8ef = Math['min'];
    es_module['exports'] = function (_0x18812a, _0x134752) {
        return (_0x18812a = _export_21(_0x18812a)) < 0x0 ? _0x25287a(_0x18812a + _0x134752, 0x0) : _0x39b8ef(_0x18812a, _0x134752);
    };
}, function id_035_0x23(es_module, es_exports, es_require) {
    var _export_4 = es_require(0x4),
        _export_98 = es_require(0x62),
        _export_69 = es_require(0x45),
        _0x45d6b3 = es_require(0x44)('IE_PROTO'),
        _0x1b5619 = function () {},
        _0x426aab = function () {
            var _0x382078, _0x39c497 = es_require(0x42)('iframe'),
                _0x3d0486 = _export_69['length'];
            for (_0x39c497['style']['display'] = 'none', es_require(0x46)['appendChild'](_0x39c497), _0x39c497['src'] = 'javascript:', (_0x382078 = _0x39c497['contentWindow']['document']).open(), _0x382078['write']('<script>document.F=Object</script>'), _0x382078['close'](), _0x426aab = _0x382078['F']; _0x3d0486--;) delete _0x426aab['prototype'][_export_69[_0x3d0486]];
            return _0x426aab();
        };
    es_module['exports'] = Object['create'] || function (_0x2b9558, _0xaa8434) {
        var _0x1de993;
        return null !== _0x2b9558 ? (_0x1b5619['prototype'] = _export_4(_0x2b9558), _0x1de993 = new _0x1b5619(), _0x1b5619['prototype'] = null, _0x1de993[_0x45d6b3] = _0x2b9558) : _0x1de993 = _0x426aab(), void 0x0 === _0xaa8434 ? _0x1de993 : _export_98(_0x1de993, _0xaa8434);
    };
}, function id_036_0x24(es_module, es_exports, es_require) {
    var _export_97 = es_require(0x61),
        _0x74d2ec = es_require(0x45)['concat']('length', 'prototype');
    es_exports['f'] = Object['getOwnPropertyNames'] || function (_0x2b9045) {
        return _export_97(_0x2b9045, _0x74d2ec);
    };
}, function id_037_0x25(es_module, es_exports, es_require) {
    var _export_15 = es_require(0xf),
        _export_12 = es_require(0xc),
        _0x2bec84 = es_require(0x44)('IE_PROTO'),
        _0x406c2d = Object['prototype'];
    es_module['exports'] = Object['getPrototypeOf'] || function (_0x27cb57) {

        return _0x27cb57 = _export_12(_0x27cb57), _export_15(_0x27cb57, _0x2bec84) ? _0x27cb57[_0x2bec84] : 'function' == typeof _0x27cb57['constructor'] && _0x27cb57 instanceof _0x27cb57['constructor'] ? _0x27cb57['constructor']['prototype'] : _0x27cb57 instanceof Object ? _0x406c2d : null;
    };
}, function id_038_0x26(es_module, es_exports, es_require) {
    var _0x12a051 = es_require(0x7)('unscopables'),
        _0x75b516 = Array['prototype'];
    null == _0x75b516[_0x12a051] && es_require(0x10)(_0x75b516, _0x12a051, {}), es_module['exports'] = function (_0x3ce590) {
        _0x75b516[_0x12a051][_0x3ce590] = !0x0;
    };
}, function id_039_0x27(es_module, es_exports, es_require) {
    var _export_5 = es_require(0x5);
    es_module['exports'] = function (_0x2ac01d, _0x2fc594) {

        if (!_export_5(_0x2ac01d) || _0x2ac01d['_t'] !== _0x2fc594) throw TypeError('Incompatible receiver, ' + _0x2fc594 + ' required!');
        return _0x2ac01d;
    };
}, function id_040_0x28(es_module, es_exports, es_require) {
    var _0x5f4bc6 = es_require(0xb)['f'],
        _export_15 = es_require(0xf),
        _0x872f58 = es_require(0x7)('toStringTag');
    es_module['exports'] = function (_0x31b4c1, _0x448682, _0x527ba0) {

        _0x31b4c1 && !_export_15(_0x31b4c1 = _0x527ba0 ? _0x31b4c1 : _0x31b4c1['prototype'], _0x872f58) && _0x5f4bc6(_0x31b4c1, _0x872f58, {
            'configurable': !0x0,
            'value': _0x448682
        });
    };
}, function id_041_0x29(es_module, es_exports, es_require) {
    var _export_0 = es_require(0x0),
        _export_26 = es_require(0x1a),
        _export_3 = es_require(0x3),
        _export_72 = es_require(0x48),
        _0x15668d = '[' + _export_72 + ']',
        _0x3cb390 = RegExp('^' + _0x15668d + _0x15668d + '*'),
        _0x4e7551 = RegExp(_0x15668d + _0x15668d + '*$'),
        _0x4680c1 = function (_0x230492, _0x73cf32, _0x2924e1) {
            var _0x1361a1 = {},
                _0x16e113 = _export_3(function () {
                    return !!_export_72[_0x230492]() || '\u200b\u0085' != '\u200b\u0085' [_0x230492]();
                }),
                _0x2ea722 = _0x1361a1[_0x230492] = _0x16e113 ? _0x73cf32(_0x5bd607) : _export_72[_0x230492];
            _0x2924e1 && (_0x1361a1[_0x2924e1] = _0x2ea722), _export_0(_export_0['P'] + _export_0['F'] * _0x16e113, 'String', _0x1361a1);
        },
        _0x5bd607 = _0x4680c1['trim'] = function (_0x1d42e3, _0x9285cf) {

            return _0x1d42e3 = String(_export_26(_0x1d42e3)), 0x1 & _0x9285cf && (_0x1d42e3 = _0x1d42e3['replace'](_0x3cb390, '')), 0x2 & _0x9285cf && (_0x1d42e3 = _0x1d42e3['replace'](_0x4e7551, '')), _0x1d42e3;
        };
    es_module['exports'] = _0x4680c1;
}, function id_042_0x2a(es_module, es_exports) {

    es_module['exports'] = {};
}, function id_043_0x2b(es_module, es_exports, es_require) {
    'use strict';

    var _export_2 = es_require(0x2),
        _export_11 = es_require(0xb),
        _export_10 = es_require(0xa),
        _0x472161 = es_require(0x7)('species');
    es_module['exports'] = function (_0x10a801) {
        var _0x146ac2 = _export_2[_0x10a801];
        _export_10 && _0x146ac2 && !_0x146ac2[_0x472161] && _export_11['f'](_0x146ac2, _0x472161, {
            'configurable': !0x0,
            'get': function () {
                return this;
            }
        });
    };
}, function id_044_0x2c(es_module, es_exports) {

    es_module['exports'] = function (_0x39faf2, _0x28fd43, _0x4e777d, _0x28fe1a) {
        if (!(_0x39faf2 instanceof _0x28fd43) || void 0x0 !== _0x28fe1a && _0x28fe1a in _0x39faf2) throw TypeError(_0x4e777d + (': incorrect invocation!'));
        return _0x39faf2;
    };
}, function id_045_0x2d(es_module, es_exports, es_require) {
    var _export_13 = es_require(0xd);
    es_module['exports'] = function (_0x382286, _0x4ed810, _0x365709) {
        for (var _0x2e2a0a in _0x4ed810) _export_13(_0x382286, _0x2e2a0a, _0x4ed810[_0x2e2a0a], _0x365709);
        return _0x382286;
    };
}, function indexbid_046_0x2e(es_module, es_exports, es_require) {
    console.log(es_module, es_exports);
    es_module['exports'] = () => {};
}, , function id_048_0x30(es_module, es_exports, es_require) {
    var _export_25 = es_require(0x19);
    es_module['exports'] = Object('z')['propertyIsEnumerable'](0x0) ? Object : function (_0x3b9b6f) {

        return 'String' == _export_25(_0x3b9b6f) ? _0x3b9b6f['split']('') : Object(_0x3b9b6f);
    };
}, function id_049_0x31(es_module, es_exports) {
    es_exports['f'] = {} ['propertyIsEnumerable'];
}, function id_050_0x32(es_module, es_exports, es_require) {
    var _export_25 = es_require(0x19),
        _0x9f1711 = es_require(0x7)('toStringTag'),
        _0x4f674a = 'Arguments' == _export_25((function () {
            return arguments;
        }()));
    es_module['exports'] = function (_0x495822) {
        var _0x5bceec, _0x10b88b, _0x4a0ef4;
        return void 0x0 === _0x495822 ? 'Undefined' : null === _0x495822 ? 'Null' : 'string' == typeof (_0x10b88b = function (_0x10cc20, _0x5077f2) {
            try {
                return _0x10cc20[_0x5077f2];
            } catch (_0x2b8601) {}
        }(_0x5bceec = Object(_0x495822), _0x9f1711)) ? _0x10b88b : _0x4f674a ? _export_25(_0x5bceec) : 'Object' == (_0x4a0ef4 = _export_25(_0x5bceec)) && 'function' == typeof _0x5bceec['callee'] ? 'Arguments' : _0x4a0ef4;
    };
}, function id_051_0x33(es_module, es_exports, es_require) {
    var _export_4 = es_require(0x4),
        _export_20 = es_require(0x14),
        _0x33385e = es_require(0x7)('species');
    es_module['exports'] = function (_0x6e5996, _0x2f0eb5) {
        var _0x17fbf0, _0x5f193e = _export_4(_0x6e5996)['constructor'];
        return void 0x0 === _0x5f193e || null == (_0x17fbf0 = _export_4(_0x5f193e)[_0x33385e]) ? _0x2f0eb5 : _export_20(_0x17fbf0);
    };
}, , function saveAs_053_0x35(es_module, es_exports, es_require) {
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
}, function corejs_054_0x36(es_module, es_exports, es_require) {
    var _export_9 = es_require(0x9),
        _export_2 = es_require(0x2),
        _0x345286 = _export_2['__core-js_shared__'] || (_export_2['__core-js_shared__'] = {});
    (es_module['exports'] = function (_0x298173, _0x2496a0) {
        return _0x345286[_0x298173] || (_0x345286[_0x298173] = void 0x0 !== _0x2496a0 ? _0x2496a0 : {});
    })('versions', [])['push']({
        'version': _export_9['version'],
        'mode': es_require(0x20) ? 'pure' : 'global',
        'copyright': '© 2020 Denis Pushkarev (zloirock.ru)'
    });
}, function id_055_0x37(es_module, es_exports, es_require) {
    var _export_17 = es_require(0x11),
        _export_8 = es_require(0x8),
        _export_34 = es_require(0x22);
    es_module['exports'] = function (_0x329651) {
        return function (_0x361988, _0x460750, _0x4d7e46) {
            var _0x394bdd, _0x54befb = _export_17(_0x361988),
                _0x2278b7 = _export_8(_0x54befb['length']),
                _0x5469b0 = _export_34(_0x4d7e46, _0x2278b7);
            if (_0x329651 && _0x460750 != _0x460750) {
                for (; _0x2278b7 > _0x5469b0;)
                    if ((_0x394bdd = _0x54befb[_0x5469b0++]) != _0x394bdd) return !0x0;
            } else {
                for (; _0x2278b7 > _0x5469b0; _0x5469b0++)
                    if ((_0x329651 || _0x5469b0 in _0x54befb) && _0x54befb[_0x5469b0] === _0x460750) return _0x329651 || _0x5469b0 || 0x0;
            }
            return !_0x329651 && -0x1;
        };
    };
}, function id_056_0x38(es_module, es_exports) {

    es_exports['f'] = Object['getOwnPropertySymbols'];
}, function id_057_0x39(es_module, es_exports, es_require) {
    var _export_25 = es_require(0x19);
    es_module['exports'] = Array['isArray'] || function (_0x5218b7) {

        return 'Array' == _export_25(_0x5218b7);
    };
}, function id_058_0x3a(es_module, es_exports, es_require) {
    var _0x34fcbc = es_require(0x7)('iterator'),
        _0x30b77a = !0x1;
    try {
        var _0x54409e = [0x7][_0x34fcbc]();
        _0x54409e['return'] = function () {
            _0x30b77a = !0x0;
        }, Array['from'](_0x54409e, function () {
            throw 0x2;
        });
    } catch (_0x223c45) {}
    es_module['exports'] = function (_0x1e9f1d, _0x22b1ad) {

        if (!_0x22b1ad && !_0x30b77a) return !0x1;
        var _0xa2e0fb = !0x1;
        try {
            var _0xe8a361 = [0x7],
                _0x11d5d9 = _0xe8a361[_0x34fcbc]();
            _0x11d5d9['next'] = function () {
                return {
                    'done': _0xa2e0fb = !0x0
                };
            }, _0xe8a361[_0x34fcbc] = function () {
                return _0x11d5d9;
            }, _0x1e9f1d(_0xe8a361);
        } catch (_0xc363dd) {}
        return _0xa2e0fb;
    };
}, function id_059_0x3b(es_module, es_exports, es_require) {
    'use strict';

    var _export_4 = es_require(0x4);
    es_module['exports'] = function () {
        var _0x184a98 = _export_4(this),
            _0x46e4d5 = '';
        return _0x184a98['global'] && (_0x46e4d5 += 'g'), _0x184a98['ignoreCase'] && (_0x46e4d5 += 'i'), _0x184a98['multiline'] && (_0x46e4d5 += 'm'), _0x184a98['unicode'] && (_0x46e4d5 += 'u'), _0x184a98['sticky'] && (_0x46e4d5 += 'y'), _0x46e4d5;
    };
}, function id_060_0x3c(es_module, es_exports, es_require) {
    'use strict';

    var _export_50 = es_require(0x32),
        _0x47997b = RegExp['prototype']['exec'];
    es_module['exports'] = function (_0x36dd1a, _0x4f4207) {
        var _0x4bb75a = _0x36dd1a['exec'];
        if ('function' == typeof _0x4bb75a) {
            var _0x3052d2 = _0x4bb75a['call'](_0x36dd1a, _0x4f4207);
            if ('object' != typeof _0x3052d2) throw new TypeError('RegExp exec method returned something other than an Object or null');
            return _0x3052d2;
        }
        if ('RegExp' !== _export_50(_0x36dd1a)) throw new TypeError('RegExp#exec called on incompatible receiver');
        return _0x47997b['call'](_0x36dd1a, _0x4f4207);
    };
}, function id_061_0x3d(es_module, es_exports, es_require) {
    'use strict';

    es_require(0x73);
    var _export_13 = es_require(0xd),
        _export_16 = es_require(0x10),
        _export_3 = es_require(0x3),
        _export_26 = es_require(0x1a),
        _export_7 = es_require(0x7),
        _export_87 = es_require(0x57),
        _0xce213e = _export_7('species'),
        _0x1cb31a = !_export_3(function () {
            var _0xe333a = /./;
            return _0xe333a['exec'] = function () {
                var _0x458bf8 = [];
                return _0x458bf8['groups'] = {
                    'a': '7'
                }, _0x458bf8;
            }, '7' !== '' ['replace'](_0xe333a, '\x24<a>');
        }),
        _0xd5d341 = (function () {
            var _0x1ecab0 = /(?:)/,
                _0x1cbda6 = _0x1ecab0['exec'];
            _0x1ecab0['exec'] = function () {

                return _0x1cbda6['apply'](this, arguments);
            };
            var _0x37ed23 = 'ab' ['split'](_0x1ecab0);
            return 0x2 === _0x37ed23['length'] && 'a' === _0x37ed23[0x0] && 'b' === _0x37ed23[0x1];
        }());
    es_module['exports'] = function (_0x1824ed, _0x5ba7c2, _0x4e1f22) {
        var _0x1f3170 = _export_7(_0x1824ed),
            _0x542f49 = !_export_3(function () {
                var _0x5b9e55 = {};
                return _0x5b9e55[_0x1f3170] = function () {
                    return 0x7;
                }, 0x7 != '' [_0x1824ed](_0x5b9e55);
            }),
            _0x295291 = _0x542f49 ? !_export_3(function () {
                var _0x257aa8 = !0x1,
                    _0x63704c = /a/;
                return _0x63704c['exec'] = function () {
                    return _0x257aa8 = !0x0, null;
                }, 'split' === _0x1824ed && (_0x63704c['constructor'] = {}, _0x63704c['constructor'][_0xce213e] = function () {
                    return _0x63704c;
                }), _0x63704c[_0x1f3170](''), !_0x257aa8;
            }) : void 0x0;
        if (!_0x542f49 || !_0x295291 || 'replace' === _0x1824ed && !_0x1cb31a || 'split' === _0x1824ed && !_0xd5d341) {
            var _0x1ce4c1 = /./ [_0x1f3170],
                _0x26851c = _0x4e1f22(_export_26, _0x1f3170, '' [_0x1824ed], function (_0x5d5356, _0x3b6b3f, _0x25d1d2, _0x1da5b5, _0x841a94) {
                    return _0x3b6b3f['exec'] === _export_87 ? _0x542f49 && !_0x841a94 ? {
                        'done': !0x0,
                        'value': _0x1ce4c1['call'](_0x3b6b3f, _0x25d1d2, _0x1da5b5)
                    } : {
                        'done': !0x0,
                        'value': _0x5d5356['call'](_0x25d1d2, _0x3b6b3f, _0x1da5b5)
                    } : {
                        'done': !0x1
                    };
                }),
                _0x379873 = _0x26851c[0x0],
                _0x2810d0 = _0x26851c[0x1];
            _export_13(String['prototype'], _0x1824ed, _0x379873), _export_16(RegExp['prototype'], _0x1f3170, 0x2 == _0x5ba7c2 ? function (_0x17a22a, _0x724b7a) {

                return _0x2810d0['call'](_0x17a22a, this, _0x724b7a);
            } : function (_0x149a9b) {

                return _0x2810d0['call'](_0x149a9b, this);
            });
        }
    };
}, function id_062_0x3e(es_module, es_exports, es_require) {
    var _export_19 = es_require(0x13),
        _export_110 = es_require(0x6e),
        _export_82 = es_require(0x52),
        _export_4 = es_require(0x4),
        _export_8 = es_require(0x8),
        _export_84 = es_require(0x54),
        _0x524e89 = {},
        _0x5bf699 = {};
    (es_exports = es_module['exports'] = function (_0x2d68e7, _0x53dac9, _0x4818a, _0x1fb12b, _0x51e0ca) {
        var _0x24663c, _0x47ed0d, _0x45b007, _0x5b6fec, _0x598413 = _0x51e0ca ? function () {
                return _0x2d68e7;
            } : _export_84(_0x2d68e7),
            _0x244c6d = _export_19(_0x4818a, _0x1fb12b, _0x53dac9 ? 0x2 : 0x1),
            _0x207d38 = 0x0;
        if ('function' != typeof _0x598413) throw TypeError(_0x2d68e7 + ' is not iterable!');
        if (_export_82(_0x598413)) {
            for (_0x24663c = _export_8(_0x2d68e7['length']); _0x24663c > _0x207d38; _0x207d38++)
                if ((_0x5b6fec = _0x53dac9 ? _0x244c6d(_export_4(_0x47ed0d = _0x2d68e7[_0x207d38])[0x0], _0x47ed0d[0x1]) : _0x244c6d(_0x2d68e7[_0x207d38])) === _0x524e89 || _0x5b6fec === _0x5bf699) return _0x5b6fec;
        } else {
            for (_0x45b007 = _0x598413['call'](_0x2d68e7); !(_0x47ed0d = _0x45b007['next']())['done'];)
                if ((_0x5b6fec = _export_110(_0x45b007, _0x244c6d, _0x47ed0d['value'], _0x53dac9)) === _0x524e89 || _0x5b6fec === _0x5bf699) return _0x5b6fec;
        }
    })['BREAK'] = _0x524e89, es_exports['RETURN'] = _0x5bf699;
}, function id_063_0x3f(es_module, es_exports, es_require) {
    var _0x608013 = es_require(0x2)['navigator'];
    es_module['exports'] = _0x608013 && _0x608013['userAgent'] || '';
}, function id_064_0x40(es_module, es_exports, es_require) {
    'use strict';

    var _export_2 = es_require(0x2),
        _export_0 = es_require(0x0),
        _export_13 = es_require(0xd),
        _export_45 = es_require(0x2d),
        _export_29 = es_require(0x1d),
        _export_62 = es_require(0x3e),
        _export_44 = es_require(0x2c),
        _export_5 = es_require(0x5),
        _export_3 = es_require(0x3),
        _export_58 = es_require(0x3a),
        _export_40 = es_require(0x28),
        _export_73 = es_require(0x49);
    es_module['exports'] = function (_0x486e39, _0x3132c7, _0x4ea451, _0x3a2945, _0x496d6a, _0x4adb53) {
        var _0x268484 = _export_2[_0x486e39],
            _0x28ed9d = _0x268484,
            _0x54c7b8 = _0x496d6a ? 'set' : 'add',
            _0x477788 = _0x28ed9d && _0x28ed9d['prototype'],
            _0x278c98 = {},
            _0x475d49 = function (_0x329d0b) {
                var _0x3ad680 = _0x477788[_0x329d0b];
                _export_13(_0x477788, _0x329d0b, 'delete' == _0x329d0b ? function (_0x3aaf4b) {

                    return !(_0x4adb53 && !_export_5(_0x3aaf4b)) && _0x3ad680['call'](this, 0x0 === _0x3aaf4b ? 0x0 : _0x3aaf4b);
                } : 'has' == _0x329d0b ? function (_0xa81b09) {

                    return !(_0x4adb53 && !_export_5(_0xa81b09)) && _0x3ad680['call'](this, 0x0 === _0xa81b09 ? 0x0 : _0xa81b09);
                } : 'get' == _0x329d0b ? function (_0x59a5d2) {

                    return _0x4adb53 && !_export_5(_0x59a5d2) ? void 0x0 : _0x3ad680['call'](this, 0x0 === _0x59a5d2 ? 0x0 : _0x59a5d2);
                } : 'add' == _0x329d0b ? function (_0xc3bfa6) {

                    return _0x3ad680['call'](this, 0x0 === _0xc3bfa6 ? 0x0 : _0xc3bfa6), this;
                } : function (_0x34aa2a, _0x376112) {
                    return _0x3ad680['call'](this, 0x0 === _0x34aa2a ? 0x0 : _0x34aa2a, _0x376112), this;
                });
            };
        if ('function' == typeof _0x28ed9d && (_0x4adb53 || _0x477788['forEach'] && !_export_3(function () {

                new _0x28ed9d()['entries']()['next']();
            }))) {
            var _0x2b0ccc = new _0x28ed9d(),
                _0x4a74bc = _0x2b0ccc[_0x54c7b8](_0x4adb53 ? {} : -0x0, 0x1) != _0x2b0ccc,
                _0x528449 = _export_3(function () {

                    _0x2b0ccc['has'](0x1);
                }),
                _0x2fd600 = _export_58(function (_0x5e3bcc) {
                    new _0x28ed9d(_0x5e3bcc);
                }),
                _0x1015cb = !_0x4adb53 && _export_3(function () {
                    for (var _0x598afb = new _0x28ed9d(), _0x25bf45 = 0x5; _0x25bf45--;) _0x598afb[_0x54c7b8](_0x25bf45, _0x25bf45);
                    return !_0x598afb['has'](-0x0);
                });
            _0x2fd600 || ((_0x28ed9d = _0x3132c7(function (_0x3483b2, _0x20bead) {
                _export_44(_0x3483b2, _0x28ed9d, _0x486e39);
                var _0x5bfc81 = _export_73(new _0x268484(), _0x3483b2, _0x28ed9d);
                return null != _0x20bead && _export_62(_0x20bead, _0x496d6a, _0x5bfc81[_0x54c7b8], _0x5bfc81), _0x5bfc81;
            }))['prototype'] = _0x477788, _0x477788['constructor'] = _0x28ed9d), (_0x528449 || _0x1015cb) && (_0x475d49('delete'), _0x475d49('has'), _0x496d6a && _0x475d49('get')), (_0x1015cb || _0x4a74bc) && _0x475d49(_0x54c7b8), _0x4adb53 && _0x477788['clear'] && delete _0x477788['clear'];
        } else _0x28ed9d = _0x3a2945['getConstructor'](_0x3132c7, _0x486e39, _0x496d6a, _0x54c7b8), _export_45(_0x28ed9d['prototype'], _0x4ea451), _export_29['NEED'] = !0x0;
        return _export_40(_0x28ed9d, _0x486e39), _0x278c98[_0x486e39] = _0x28ed9d, _export_0(_export_0['G'] + _export_0['W'] + _export_0['F'] * (_0x28ed9d != _0x268484), _0x278c98), _0x4adb53 || _0x3a2945['setStrong'](_0x28ed9d, _0x486e39, _0x496d6a), _0x28ed9d;
    };
}, function id_065_0x41(es_module, es_exports, es_require) {

    for (var _0x3cd37e, _export_2 = es_require(0x2), _export_16 = es_require(0x10), _export_31 = es_require(0x1f), _0x4d4e28 = _export_31('typed_array'), _0x88692e = _export_31('view'), _0x40354b = !(!_export_2['ArrayBuffer'] || !_export_2['DataView']), _0x354489 = _0x40354b, _0xf96a49 = 0x0, _0xa115b6 = ('Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array')['split'](','); _0xf96a49 < 0x9;)(_0x3cd37e = _export_2[_0xa115b6[_0xf96a49++]]) ? (_export_16(_0x3cd37e['prototype'], _0x4d4e28, !0x0), _export_16(_0x3cd37e['prototype'], _0x88692e, !0x0)) : _0x354489 = !0x1;
    es_module['exports'] = {
        'ABV': _0x40354b,
        'CONSTR': _0x354489,
        'TYPED': _0x4d4e28,
        'VIEW': _0x88692e
    };
}, function id_066_0x42(es_module, es_exports, es_require) {
    var _export_5 = es_require(0x5),
        _0x588a9d = es_require(0x2)['document'],
        _0x34df93 = _export_5(_0x588a9d) && _export_5(_0x588a9d['createElement']);
    es_module['exports'] = function (_0x4b0eb9) {

        return _0x34df93 ? _0x588a9d['createElement'](_0x4b0eb9) : {};
    };
}, function id_067_0x43(es_module, es_exports, es_require) {
    es_exports['f'] = es_require(0x7);
}, function id_068_0x44(es_module, es_exports, es_require) {
    var _0x3b34fd = es_require(0x36)('keys'),
        _export_31 = es_require(0x1f);
    es_module['exports'] = function (_0x455e36) {
        return _0x3b34fd[_0x455e36] || (_0x3b34fd[_0x455e36] = _export_31(_0x455e36));
    };
}, function id_069_0x45(es_module, es_exports) {

    es_module['exports'] = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf')['split'](',');
}, function id_070_0x46(es_module, es_exports, es_require) {
    var _0x14ccd7 = es_require(0x2)['document'];
    es_module['exports'] = _0x14ccd7 && _0x14ccd7['documentElement'];
}, function id_071_0x47(es_module, es_exports, es_require) {
    var _export_5 = es_require(0x5),
        _export_4 = es_require(0x4),
        _0x37e416 = function (_0x1ed8a5, _0x4e7ca9) {

            if (_export_4(_0x1ed8a5), !_export_5(_0x4e7ca9) && null !== _0x4e7ca9) throw TypeError(_0x4e7ca9 + (': can\x27t set as prototype!'));
        };
    es_module['exports'] = {
        'set': Object['setPrototypeOf'] || ('__proto__' in {} ? function (_0x45135c, _0x3799c8, _0x43ebc4) {

            try {
                (_0x43ebc4 = es_require(0x13)(Function['call'], es_require(0x16)['f'](Object['prototype'], '__proto__')['set'], 0x2))(_0x45135c, []), _0x3799c8 = !(_0x45135c instanceof Array);
            } catch (_0x49f6e8) {
                _0x3799c8 = !0x0;
            }
            return function (_0x1e6024, _0x2e5d57) {

                return _0x37e416(_0x1e6024, _0x2e5d57), _0x3799c8 ? _0x1e6024['__proto__'] = _0x2e5d57 : _0x43ebc4(_0x1e6024, _0x2e5d57), _0x1e6024;
            };
        }({}, !0x1) : void 0x0),
        'check': _0x37e416
    };
}, function id_072_0x48(es_module, es_exports) {
    console.log(es_module, es_exports);
    es_module['exports'] = '\t\n\v\f\r\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff';
}, function id_073_0x49(es_module, es_exports, es_require) {
    var _export_5 = es_require(0x5),
        _0x5512dd = es_require(0x47)['set'];
    es_module['exports'] = function (_0x160914, _0x2ab767, _0x5a1ec2) {
        var _0xa05a0c, _0x36a2ef = _0x2ab767['constructor'];
        return _0x36a2ef !== _0x5a1ec2 && 'function' == typeof _0x36a2ef && (_0xa05a0c = _0x36a2ef['prototype']) !== _0x5a1ec2['prototype'] && _export_5(_0xa05a0c) && _0x5512dd && _0x5512dd(_0x160914, _0xa05a0c), _0x160914;
    };
}, function id_074_0x4a(es_module, es_exports, es_require) {
    'use strict';

    var _export_21 = es_require(0x15),
        _export_26 = es_require(0x1a);
    es_module['exports'] = function (_0x148793) {
        var _0xb0a1e8 = String(_export_26(this)),
            _0x323557 = '',
            _0x5ea8eb = _export_21(_0x148793);
        if (_0x5ea8eb < 0x0 || _0x5ea8eb == 0x1 / 0x0) throw RangeError('Count can\x27t be negative');
        for (; _0x5ea8eb > 0x0;
            (_0x5ea8eb >>>= 0x1) && (_0xb0a1e8 += _0xb0a1e8)) 0x1 & _0x5ea8eb && (_0x323557 += _0xb0a1e8);
        return _0x323557;
    };
}, function id_075_0x4b(es_module, es_exports) {

    es_module['exports'] = Math['sign'] || function (_0x2a330c) {
        return 0x0 == (_0x2a330c = +_0x2a330c) || _0x2a330c != _0x2a330c ? _0x2a330c : _0x2a330c < 0x0 ? -0x1 : 0x1;
    };
}, function id_076_0x4c(es_module, es_exports) {
    var _0x36cad9 = Math['expm1'];
    es_module['exports'] = !_0x36cad9 || _0x36cad9(0xa) > 22025.465794806718 || _0x36cad9(0xa) < 22025.465794806718 || -2e-17 != _0x36cad9(-2e-17) ? function (_0x302b17) {

        return 0x0 == (_0x302b17 = +_0x302b17) ? _0x302b17 : _0x302b17 > -0.000001 && _0x302b17 < 0.000001 ? _0x302b17 + _0x302b17 * _0x302b17 / 0x2 : Math['exp'](_0x302b17) - 0x1;
    } : _0x36cad9;
}, function id_077_0x4d(es_module, es_exports, es_require) {
    var _export_21 = es_require(0x15),
        _export_26 = es_require(0x1a);
    es_module['exports'] = function (_0xb05422) {

        return function (_0x16a515, _0x12a16d) {
            var _0x53fa19, _0x35753c, _0x39a72e = String(_export_26(_0x16a515)),
                _0x31d2d7 = _export_21(_0x12a16d),
                _0x4eeffc = _0x39a72e['length'];
            return _0x31d2d7 < 0x0 || _0x31d2d7 >= _0x4eeffc ? _0xb05422 ? '' : void 0x0 : (_0x53fa19 = _0x39a72e['charCodeAt'](_0x31d2d7)) < 0xd800 || _0x53fa19 > 0xdbff || _0x31d2d7 + 0x1 === _0x4eeffc || (_0x35753c = _0x39a72e['charCodeAt'](_0x31d2d7 + 0x1)) < 0xdc00 || _0x35753c > 0xdfff ? _0xb05422 ? _0x39a72e['charAt'](_0x31d2d7) : _0x53fa19 : _0xb05422 ? _0x39a72e['slice'](_0x31d2d7, _0x31d2d7 + 0x2) : _0x35753c - 0xdc00 + (_0x53fa19 - 0xd800 << 0xa) + 0x10000;
        };
    };
}, function id_078_0x4e(es_module, es_exports, es_require) {
    'use strict';

    var _export_32 = es_require(0x20),
        _export_0 = es_require(0x0),
        _export_13 = es_require(0xd),
        _export_16 = es_require(0x10),
        _export_42 = es_require(0x2a),
        _export_109 = es_require(0x6d),
        _export_40 = es_require(0x28),
        _export_37 = es_require(0x25),
        _0x523d0f = es_require(0x7)('iterator'),
        _0x196c4a = !([]['keys'] && 'next' in []['keys']()),
        _0x430101 = function () {
            return this;
        };
    es_module['exports'] = function (_0xbced9f, _0x1efce4, _0x26452b, _0x5c7281, _0x4277b9, _0x4ec5e3, _0x419963) {

        _export_109(_0x26452b, _0x1efce4, _0x5c7281);
        var _0x600033, _0x1538ca, _0x4d59a5, _0x4811e8 = function (_0x234c7f) {

                if (!_0x196c4a && _0x234c7f in _0x156f81) return _0x156f81[_0x234c7f];
                switch (_0x234c7f) {
                    case 'keys':
                    case 'values':
                        return function () {
                            return new _0x26452b(this, _0x234c7f);
                        };
                }
                return function () {
                    return new _0x26452b(this, _0x234c7f);
                };
            },
            _0x3c27b4 = _0x1efce4 + ' Iterator',
            _0x232635 = 'values' == _0x4277b9,
            _0x33640d = !0x1,
            _0x156f81 = _0xbced9f['prototype'],
            _0x38b609 = _0x156f81[_0x523d0f] || _0x156f81['@@iterator'] || _0x4277b9 && _0x156f81[_0x4277b9],
            _0x496fed = _0x38b609 || _0x4811e8(_0x4277b9),
            _0x2a06b0 = _0x4277b9 ? _0x232635 ? _0x4811e8('entries') : _0x496fed : void 0x0,
            _0x1f4c63 = 'Array' == _0x1efce4 && _0x156f81['entries'] || _0x38b609;
        if (_0x1f4c63 && (_0x4d59a5 = _export_37(_0x1f4c63['call'](new _0xbced9f()))) !== Object['prototype'] && _0x4d59a5['next'] && (_export_40(_0x4d59a5, _0x3c27b4, !0x0), _export_32 || 'function' == typeof _0x4d59a5[_0x523d0f] || _export_16(_0x4d59a5, _0x523d0f, _0x430101)), _0x232635 && _0x38b609 && 'values' !== _0x38b609['name'] && (_0x33640d = !0x0, _0x496fed = function () {

                return _0x38b609['call'](this);
            }), _export_32 && !_0x419963 || !_0x196c4a && !_0x33640d && _0x156f81[_0x523d0f] || _export_16(_0x156f81, _0x523d0f, _0x496fed), _export_42[_0x1efce4] = _0x496fed, _export_42[_0x3c27b4] = _0x430101, _0x4277b9) {
            if (_0x600033 = {
                    'values': _0x232635 ? _0x496fed : _0x4811e8('values'),
                    'keys': _0x4ec5e3 ? _0x496fed : _0x4811e8('keys'),
                    'entries': _0x2a06b0
                }, _0x419963) {
                for (_0x1538ca in _0x600033) _0x1538ca in _0x156f81 || _export_13(_0x156f81, _0x1538ca, _0x600033[_0x1538ca]);
            } else _export_0(_export_0['P'] + _export_0['F'] * (_0x196c4a || _0x33640d), _0x1efce4, _0x600033);
        }
        return _0x600033;
    };
}, function id_079_0x4f(es_module, es_exports, es_require) {
    var _export_80 = es_require(0x50),
        _export_26 = es_require(0x1a);
    es_module['exports'] = function (_0x2d343e, _0x33053c, _0x53d075) {

        if (_export_80(_0x33053c)) throw TypeError('String#' + _0x53d075 + (' doesn\x27t accept regex!'));
        return String(_export_26(_0x2d343e));
    };
}, function id_080_0x50(es_module, es_exports, es_require) {
    var _export_5 = es_require(0x5),
        _export_25 = es_require(0x19),
        _0x1f6fee = es_require(0x7)('match');
    es_module['exports'] = function (_0x15bdc1) {
        var _0x195af9;
        return _export_5(_0x15bdc1) && (void 0x0 !== (_0x195af9 = _0x15bdc1[_0x1f6fee]) ? !!_0x195af9 : 'RegExp' == _export_25(_0x15bdc1));
    };
}, function id_081_0x51(es_module, es_exports, es_require) {
    var _0x423670 = es_require(0x7)('match');
    es_module['exports'] = function (_0xc9d909) {
        var _0x25bb7b = /./;
        try {
            '/./' [_0xc9d909](_0x25bb7b);
        } catch (_0x5d49b7) {
            try {
                return _0x25bb7b[_0x423670] = !0x1, !'/./' [_0xc9d909](_0x25bb7b);
            } catch (_0x1409f) {}
        }
        return !0x0;
    };
}, function id_082_0x52(es_module, es_exports, es_require) {
    var _export_42 = es_require(0x2a),
        _0x27a16d = es_require(0x7)('iterator'),
        _0x5d0256 = Array['prototype'];
    es_module['exports'] = function (_0x47c83b) {
        return void 0x0 !== _0x47c83b && (_export_42['Array'] === _0x47c83b || _0x5d0256[_0x27a16d] === _0x47c83b);
    };
}, function id_083_0x53(es_module, es_exports, es_require) {
    'use strict';

    var _export_11 = es_require(0xb),
        _export_30 = es_require(0x1e);
    es_module['exports'] = function (_0x7b2ad8, _0x3e7900, _0x147b90) {
        _0x3e7900 in _0x7b2ad8 ? _export_11['f'](_0x7b2ad8, _0x3e7900, _export_30(0x0, _0x147b90)) : _0x7b2ad8[_0x3e7900] = _0x147b90;
    };
}, function id_084_0x54(es_module, es_exports, es_require) {
    var _export_50 = es_require(0x32),
        _0x26600a = es_require(0x7)('iterator'),
        _export_42 = es_require(0x2a);
    es_module['exports'] = es_require(0x9)['getIteratorMethod'] = function (_0x432488) {
        if (null != _0x432488) return _0x432488[_0x26600a] || _0x432488['@@iterator'] || _export_42[_export_50(_0x432488)];
    };
}, function id_085_0x55(es_module, es_exports, es_require) {
    'use strict';

    var _export_12 = es_require(0xc),
        _export_34 = es_require(0x22),
        _export_8 = es_require(0x8);
    es_module['exports'] = function (_0x122640) {

        for (var _0x12cc30 = _export_12(this), _0x29d59c = _export_8(_0x12cc30['length']), _0xdf0fcf = arguments['length'], _0x4d3154 = _export_34(_0xdf0fcf > 0x1 ? arguments[0x1] : void 0x0, _0x29d59c), _0x1a04ea = _0xdf0fcf > 0x2 ? arguments[0x2] : void 0x0, _0x3e7224 = void 0x0 === _0x1a04ea ? _0x29d59c : _export_34(_0x1a04ea, _0x29d59c); _0x3e7224 > _0x4d3154;) _0x12cc30[_0x4d3154++] = _0x122640;
        return _0x12cc30;
    };
}, function id_086_0x56(es_module, es_exports, es_require) {
    'use strict';

    var _export_38 = es_require(0x26),
        _export_114 = es_require(0x72),
        _export_42 = es_require(0x2a),
        _export_17 = es_require(0x11);
    es_module['exports'] = es_require(0x4e)(Array, 'Array', function (_0x325b1d, _0x5eef46) {
        this['_t'] = _export_17(_0x325b1d), this['_i'] = 0x0, this['_k'] = _0x5eef46;
    }, function () {
        var _0x3eb81b = this['_t'],
            _0x57405e = this['_k'],
            _0x47d8e0 = this['_i']++;
        return !_0x3eb81b || _0x47d8e0 >= _0x3eb81b['length'] ? (this['_t'] = void 0x0, _export_114(0x1)) : _export_114(0x0, 'keys' == _0x57405e ? _0x47d8e0 : 'values' == _0x57405e ? _0x3eb81b[_0x47d8e0] : [_0x47d8e0, _0x3eb81b[_0x47d8e0]]);
    }, 'values'), _export_42['Arguments'] = _export_42['Array'], _export_38('keys'), _export_38('values'), _export_38('entries');
}, function id_087_0x57(es_module, es_exports, es_require) {
    'use strict';

    var _0x3d712f, _0x4625f5, _export_59 = es_require(0x3b),
        _0x34a58e = RegExp['prototype']['exec'],
        _0x5352d0 = String['prototype']['replace'],
        _0x17e182 = _0x34a58e,
        _0x3a77bd = (_0x3d712f = /a/, _0x4625f5 = /b*/g, _0x34a58e['call'](_0x3d712f, 'a'), _0x34a58e['call'](_0x4625f5, 'a'), 0x0 !== _0x3d712f['lastIndex'] || 0x0 !== _0x4625f5['lastIndex']),
        _0x252639 = void 0x0 !== /()??/ ['exec']('')[0x1];
    (_0x3a77bd || _0x252639) && (_0x17e182 = function (_0x5a8944) {
        var _0x5ec3cd, _0x265ba7, _0x15090c, _0x4bf313, _0x3cf317 = this;
        return _0x252639 && (_0x265ba7 = new RegExp('^' + _0x3cf317['source'] + '\x24(?!\\s)', _export_59['call'](_0x3cf317))), _0x3a77bd && (_0x5ec3cd = _0x3cf317['lastIndex']), _0x15090c = _0x34a58e['call'](_0x3cf317, _0x5a8944), _0x3a77bd && _0x15090c && (_0x3cf317['lastIndex'] = _0x3cf317['global'] ? _0x15090c['index'] + _0x15090c[0x0]['length'] : _0x5ec3cd), _0x252639 && _0x15090c && _0x15090c['length'] > 0x1 && _0x5352d0['call'](_0x15090c[0x0], _0x265ba7, function () {

            for (_0x4bf313 = 0x1; _0x4bf313 < arguments['length'] - 0x2; _0x4bf313++) void 0x0 === arguments[_0x4bf313] && (_0x15090c[_0x4bf313] = void 0x0);
        }), _0x15090c;
    }), es_module['exports'] = _0x17e182;
}, function id_088_0x58(es_module, es_exports, es_require) {
    'use strict';

    var _0x4187e6 = es_require(0x4d)(!0x0);
    es_module['exports'] = function (_0x50cc9d, _0x4ba124, _0x2ae3a8) {

        return _0x4ba124 + (_0x2ae3a8 ? _0x4187e6(_0x50cc9d, _0x4ba124)['length'] : 0x1);
    };
}, function id_089_0x59(es_module, es_exports, es_require) {
    var _0x21b2d7, _0x2ac513, _0xd3e43e, _export_19 = es_require(0x13),
        _export_103 = es_require(0x67),
        _export_70 = es_require(0x46),
        _export_66 = es_require(0x42),
        _export_2 = es_require(0x2),
        _0x4967d6 = _export_2['process'],
        _0x345e48 = _export_2['setImmediate'],
        _0x28fc34 = _export_2['clearImmediate'],
        _0x132115 = _export_2['MessageChannel'],
        _0x1bf1f7 = _export_2['Dispatch'],
        _0x5e9ebb = 0x0,
        _0xd6c68 = {},
        _0x4752ca = function () {
            var _0x1c0e48 = +this;
            if (_0xd6c68['hasOwnProperty'](_0x1c0e48)) {
                var _0x3b9390 = _0xd6c68[_0x1c0e48];
                delete _0xd6c68[_0x1c0e48], _0x3b9390();
            }
        },
        _0xcc5c97 = function (_0x4afd73) {

            _0x4752ca['call'](_0x4afd73['data']);
        };
    _0x345e48 && _0x28fc34 || (_0x345e48 = function (_0x3420ca) {

        for (var _0x450b78 = [], _0x4a4752 = 0x1; arguments['length'] > _0x4a4752;) _0x450b78['push'](arguments[_0x4a4752++]);
        return _0xd6c68[++_0x5e9ebb] = function () {
            _export_103('function' == typeof _0x3420ca ? _0x3420ca : Function(_0x3420ca), _0x450b78);
        }, _0x21b2d7(_0x5e9ebb), _0x5e9ebb;
    }, _0x28fc34 = function (_0x448b54) {
        delete _0xd6c68[_0x448b54];
    }, 'process' == es_require(0x19)(_0x4967d6) ? _0x21b2d7 = function (_0xb122f4) {
        _0x4967d6['nextTick'](_export_19(_0x4752ca, _0xb122f4, 0x1));
    } : _0x1bf1f7 && _0x1bf1f7['now'] ? _0x21b2d7 = function (_0x283041) {
        _0x1bf1f7['now'](_export_19(_0x4752ca, _0x283041, 0x1));
    } : _0x132115 ? (_0xd3e43e = (_0x2ac513 = new _0x132115())['port2'], _0x2ac513['port1']['onmessage'] = _0xcc5c97, _0x21b2d7 = _export_19(_0xd3e43e['postMessage'], _0xd3e43e, 0x1)) : _export_2['addEventListener'] && 'function' == typeof postMessage && !_export_2['importScripts'] ? (_0x21b2d7 = function (_0xfb4d51) {

        _export_2['postMessage'](_0xfb4d51 + '', '*');
    }, _export_2['addEventListener']('message', _0xcc5c97, !0x1)) : _0x21b2d7 = 'onreadystatechange' in _export_66('script') ? function (_0x5e4966) {

        _export_70['appendChild'](_export_66('script'))['onreadystatechange'] = function () {

            _export_70['removeChild'](this), _0x4752ca['call'](_0x5e4966);
        };
    } : function (_0x1a6653) {
        setTimeout(_export_19(_0x4752ca, _0x1a6653, 0x1), 0x0);
    }), es_module['exports'] = {
        'set': _0x345e48,
        'clear': _0x28fc34
    };
}, function id_090_0x5a(es_module, es_exports, es_require) {
    'use strict';

    var _export_2 = es_require(0x2),
        _export_10 = es_require(0xa),
        _export_32 = es_require(0x20),
        _export_65 = es_require(0x41),
        _export_16 = es_require(0x10),
        _export_45 = es_require(0x2d),
        _export_3 = es_require(0x3),
        _export_44 = es_require(0x2c),
        _export_21 = es_require(0x15),
        _export_8 = es_require(0x8),
        _export_122 = es_require(0x7a),
        _0x3088e5 = es_require(0x24)['f'],
        _0x475b06 = es_require(0xb)['f'],
        _export_85 = es_require(0x55),
        _export_40 = es_require(0x28),
        _0x54afcb = 'prototype',
        _0x318814 = 'Wrong index!',
        _0x21ea50 = _export_2['ArrayBuffer'],
        _0x5b6eab = _export_2['DataView'],
        _0x42829d = _export_2['Math'],
        _0x838097 = _export_2['RangeError'],
        _0x4281a5 = _export_2['Infinity'],
        _0x4a6e2c = _0x21ea50,
        _0x5cd98c = _0x42829d['abs'],
        _0x490b99 = _0x42829d['pow'],
        _0x3cd08d = _0x42829d['floor'],
        _0x39d954 = _0x42829d['log'],
        _0xf2e400 = _0x42829d['LN2'],
        _0x20d462 = _export_10 ? '_b' : 'buffer',
        _0x3682cf = _export_10 ? '_l' : 'byteLength',
        _0x2fe325 = _export_10 ? '_o' : 'byteOffset';

    function _0x1cf0ca(_0x5cd10d, _0x4a9756, _0x4f1e9f) {
        var _0x612c06, _0xc6fdf1, _0x142f1d, _0x3a41f7 = new Array(_0x4f1e9f),
            _0x59bfec = 0x8 * _0x4f1e9f - _0x4a9756 - 0x1,
            _0x220152 = (0x1 << _0x59bfec) - 0x1,
            _0x184679 = _0x220152 >> 0x1,
            _0x2f4839 = 0x17 === _0x4a9756 ? _0x490b99(0x2, -0x18) - _0x490b99(0x2, -0x4d) : 0x0,
            _0x16ffce = 0x0,
            _0x21acbe = _0x5cd10d < 0x0 || 0x0 === _0x5cd10d && 0x1 / _0x5cd10d < 0x0 ? 0x1 : 0x0;
        for ((_0x5cd10d = _0x5cd98c(_0x5cd10d)) != _0x5cd10d || _0x5cd10d === _0x4281a5 ? (_0xc6fdf1 = _0x5cd10d != _0x5cd10d ? 0x1 : 0x0, _0x612c06 = _0x220152) : (_0x612c06 = _0x3cd08d(_0x39d954(_0x5cd10d) / _0xf2e400), _0x5cd10d * (_0x142f1d = _0x490b99(0x2, -_0x612c06)) < 0x1 && (_0x612c06--, _0x142f1d *= 0x2), (_0x5cd10d += _0x612c06 + _0x184679 >= 0x1 ? _0x2f4839 / _0x142f1d : _0x2f4839 * _0x490b99(0x2, 0x1 - _0x184679)) * _0x142f1d >= 0x2 && (_0x612c06++, _0x142f1d /= 0x2), _0x612c06 + _0x184679 >= _0x220152 ? (_0xc6fdf1 = 0x0, _0x612c06 = _0x220152) : _0x612c06 + _0x184679 >= 0x1 ? (_0xc6fdf1 = (_0x5cd10d * _0x142f1d - 0x1) * _0x490b99(0x2, _0x4a9756), _0x612c06 += _0x184679) : (_0xc6fdf1 = _0x5cd10d * _0x490b99(0x2, _0x184679 - 0x1) * _0x490b99(0x2, _0x4a9756), _0x612c06 = 0x0)); _0x4a9756 >= 0x8; _0x3a41f7[_0x16ffce++] = 0xff & _0xc6fdf1, _0xc6fdf1 /= 0x100, _0x4a9756 -= 0x8);
        for (_0x612c06 = _0x612c06 << _0x4a9756 | _0xc6fdf1, _0x59bfec += _0x4a9756; _0x59bfec > 0x0; _0x3a41f7[_0x16ffce++] = 0xff & _0x612c06, _0x612c06 /= 0x100, _0x59bfec -= 0x8);
        return _0x3a41f7[--_0x16ffce] |= 0x80 * _0x21acbe, _0x3a41f7;
    }

    function _0x5b2f68(_0x5eea03, _0x4baa0e, _0x1c88a7) {
        var _0x190568, _0x2d14f7 = 0x8 * _0x1c88a7 - _0x4baa0e - 0x1,
            _0x372c17 = (0x1 << _0x2d14f7) - 0x1,
            _0x2ade97 = _0x372c17 >> 0x1,
            _0x248d4d = _0x2d14f7 - 0x7,
            _0x5bd6e7 = _0x1c88a7 - 0x1,
            _0x2abe7d = _0x5eea03[_0x5bd6e7--],
            _0x1f7512 = 0x7f & _0x2abe7d;
        for (_0x2abe7d >>= 0x7; _0x248d4d > 0x0; _0x1f7512 = 0x100 * _0x1f7512 + _0x5eea03[_0x5bd6e7], _0x5bd6e7--, _0x248d4d -= 0x8);
        for (_0x190568 = _0x1f7512 & (0x1 << -_0x248d4d) - 0x1, _0x1f7512 >>= -_0x248d4d, _0x248d4d += _0x4baa0e; _0x248d4d > 0x0; _0x190568 = 0x100 * _0x190568 + _0x5eea03[_0x5bd6e7], _0x5bd6e7--, _0x248d4d -= 0x8);
        if (0x0 === _0x1f7512) _0x1f7512 = 0x1 - _0x2ade97;
        else {
            if (_0x1f7512 === _0x372c17) return _0x190568 ? NaN : _0x2abe7d ? -_0x4281a5 : _0x4281a5;
            _0x190568 += _0x490b99(0x2, _0x4baa0e), _0x1f7512 -= _0x2ade97;
        }
        return (_0x2abe7d ? -0x1 : 0x1) * _0x190568 * _0x490b99(0x2, _0x1f7512 - _0x4baa0e);
    }

    function _0x2b77e6(_0x4b3e28) {
        return _0x4b3e28[0x3] << 0x18 | _0x4b3e28[0x2] << 0x10 | _0x4b3e28[0x1] << 0x8 | _0x4b3e28[0x0];
    }

    function _0x26d337(_0x252095) {
        return [0xff & _0x252095];
    }

    function _0x3271bd(_0xe94c0) {
        return [0xff & _0xe94c0, _0xe94c0 >> 0x8 & 0xff];
    }

    function _0x17116f(_0x3de61b) {
        return [0xff & _0x3de61b, _0x3de61b >> 0x8 & 0xff, _0x3de61b >> 0x10 & 0xff, _0x3de61b >> 0x18 & 0xff];
    }

    function _0x27498f(_0x5b54f) {
        return _0x1cf0ca(_0x5b54f, 0x34, 0x8);
    }

    function _0x5c8665(_0x1bf43f) {
        return _0x1cf0ca(_0x1bf43f, 0x17, 0x4);
    }

    function _0x283126(_0x249755, _0x1f795d, _0x4eba76) {
        _0x475b06(_0x249755[_0x54afcb], _0x1f795d, {
            'get': function () {
                return this[_0x4eba76];
            }
        });
    }

    function _0x186ac3(_0x4bd3d7, _0x32ba46, _0x4a807b, _0x23fe76) {
        var _0x1a29a5 = _export_122(+_0x4a807b);
        if (_0x1a29a5 + _0x32ba46 > _0x4bd3d7[_0x3682cf]) throw _0x838097(_0x318814);
        var _0x386ad0 = _0x4bd3d7[_0x20d462]['_b'],
            _0x3f5b8e = _0x1a29a5 + _0x4bd3d7[_0x2fe325],
            _0x5d31bc = _0x386ad0['slice'](_0x3f5b8e, _0x3f5b8e + _0x32ba46);
        return _0x23fe76 ? _0x5d31bc : _0x5d31bc['reverse']();
    }

    function _0x24c0fa(_0x46fed9, _0x407a6c, _0x145049, _0x4ec6d3, _0x48b7f1, _0xcf4e94) {
        var _0x373df1 = _export_122(+_0x145049);
        if (_0x373df1 + _0x407a6c > _0x46fed9[_0x3682cf]) throw _0x838097(_0x318814);
        for (var _0x592826 = _0x46fed9[_0x20d462]['_b'], _0x20f500 = _0x373df1 + _0x46fed9[_0x2fe325], _0x699e3 = _0x4ec6d3(+_0x48b7f1), _0x529d69 = 0x0; _0x529d69 < _0x407a6c; _0x529d69++) _0x592826[_0x20f500 + _0x529d69] = _0x699e3[_0xcf4e94 ? _0x529d69 : _0x407a6c - _0x529d69 - 0x1];
    }
    if (_export_65['ABV']) {
        if (!_export_3(function () {
                _0x21ea50(0x1);
            }) || !_export_3(function () {
                new _0x21ea50(-0x1);
            }) || _export_3(function () {

                return new _0x21ea50(), new _0x21ea50(1.5), new _0x21ea50(NaN), 'ArrayBuffer' != _0x21ea50['name'];
            })) {
            for (var _0x1056e7, _0x371bf9 = (_0x21ea50 = function (_0x25f3f1) {
                    return _export_44(this, _0x21ea50), new _0x4a6e2c(_export_122(_0x25f3f1));
                })[_0x54afcb] = _0x4a6e2c[_0x54afcb], _0x2c8dd4 = _0x3088e5(_0x4a6e2c), _0x182a97 = 0x0; _0x2c8dd4['length'] > _0x182a97;)(_0x1056e7 = _0x2c8dd4[_0x182a97++]) in _0x21ea50 || _export_16(_0x21ea50, _0x1056e7, _0x4a6e2c[_0x1056e7]);
            _export_32 || (_0x371bf9['constructor'] = _0x21ea50);
        }
        var _0x1308a9 = new _0x5b6eab(new _0x21ea50(0x2)),
            _0xdf79af = _0x5b6eab[_0x54afcb]['setInt8'];
        _0x1308a9['setInt8'](0x0, 0x80000000), _0x1308a9['setInt8'](0x1, 0x80000001), !_0x1308a9['getInt8'](0x0) && _0x1308a9['getInt8'](0x1) || _export_45(_0x5b6eab[_0x54afcb], {
            'setInt8': function (_0xc2fd3, _0x4e9079) {

                _0xdf79af['call'](this, _0xc2fd3, _0x4e9079 << 0x18 >> 0x18);
            },
            'setUint8': function (_0x171cd6, _0x32c9d3) {

                _0xdf79af['call'](this, _0x171cd6, _0x32c9d3 << 0x18 >> 0x18);
            }
        }, !0x0);
    } else _0x21ea50 = function (_0x1b756a) {

        _export_44(this, _0x21ea50, 'ArrayBuffer');
        var _0x4f9a79 = _export_122(_0x1b756a);
        this['_b'] = _export_85['call'](new Array(_0x4f9a79), 0x0), this[_0x3682cf] = _0x4f9a79;
    }, _0x5b6eab = function (_0x311015, _0x4dbdba, _0x14b433) {

        _export_44(this, _0x5b6eab, 'DataView'), _export_44(_0x311015, _0x21ea50, 'DataView');
        var _0x1652ea = _0x311015[_0x3682cf],
            _0x19ed97 = _export_21(_0x4dbdba);
        if (_0x19ed97 < 0x0 || _0x19ed97 > _0x1652ea) throw _0x838097('Wrong offset!');
        if (_0x19ed97 + (_0x14b433 = void 0x0 === _0x14b433 ? _0x1652ea - _0x19ed97 : _export_8(_0x14b433)) > _0x1652ea) throw _0x838097('Wrong length!');
        this[_0x20d462] = _0x311015, this[_0x2fe325] = _0x19ed97, this[_0x3682cf] = _0x14b433;
    }, _export_10 && (_0x283126(_0x21ea50, 'byteLength', '_l'), _0x283126(_0x5b6eab, 'buffer', '_b'), _0x283126(_0x5b6eab, 'byteLength', '_l'), _0x283126(_0x5b6eab, 'byteOffset', '_o')), _export_45(_0x5b6eab[_0x54afcb], {
        'getInt8': function (_0x54511b) {
            return _0x186ac3(this, 0x1, _0x54511b)[0x0] << 0x18 >> 0x18;
        },
        'getUint8': function (_0x1a24e2) {
            return _0x186ac3(this, 0x1, _0x1a24e2)[0x0];
        },
        'getInt16': function (_0x204327) {
            var _0x366a34 = _0x186ac3(this, 0x2, _0x204327, arguments[0x1]);
            return (_0x366a34[0x1] << 0x8 | _0x366a34[0x0]) << 0x10 >> 0x10;
        },
        'getUint16': function (_0x5e7406) {
            var _0x125046 = _0x186ac3(this, 0x2, _0x5e7406, arguments[0x1]);
            return _0x125046[0x1] << 0x8 | _0x125046[0x0];
        },
        'getInt32': function (_0x1be538) {
            return _0x2b77e6(_0x186ac3(this, 0x4, _0x1be538, arguments[0x1]));
        },
        'getUint32': function (_0x12c0b4) {
            return _0x2b77e6(_0x186ac3(this, 0x4, _0x12c0b4, arguments[0x1])) >>> 0x0;
        },
        'getFloat32': function (_0x408df8) {
            return _0x5b2f68(_0x186ac3(this, 0x4, _0x408df8, arguments[0x1]), 0x17, 0x4);
        },
        'getFloat64': function (_0xf533fc) {
            return _0x5b2f68(_0x186ac3(this, 0x8, _0xf533fc, arguments[0x1]), 0x34, 0x8);
        },
        'setInt8': function (_0x3e1f4d, _0x488d79) {
            _0x24c0fa(this, 0x1, _0x3e1f4d, _0x26d337, _0x488d79);
        },
        'setUint8': function (_0x2c93fb, _0x35c92d) {
            _0x24c0fa(this, 0x1, _0x2c93fb, _0x26d337, _0x35c92d);
        },
        'setInt16': function (_0x46578d, _0x262d98) {
            _0x24c0fa(this, 0x2, _0x46578d, _0x3271bd, _0x262d98, arguments[0x2]);
        },
        'setUint16': function (_0x38e449, _0x553593) {
            _0x24c0fa(this, 0x2, _0x38e449, _0x3271bd, _0x553593, arguments[0x2]);
        },
        'setInt32': function (_0x394155, _0x2a58c3) {
            _0x24c0fa(this, 0x4, _0x394155, _0x17116f, _0x2a58c3, arguments[0x2]);
        },
        'setUint32': function (_0x1507fc, _0x232654) {
            _0x24c0fa(this, 0x4, _0x1507fc, _0x17116f, _0x232654, arguments[0x2]);
        },
        'setFloat32': function (_0x312b96, _0x5143fb) {
            _0x24c0fa(this, 0x4, _0x312b96, _0x5c8665, _0x5143fb, arguments[0x2]);
        },
        'setFloat64': function (_0x1b6046, _0x9e8a7e) {
            _0x24c0fa(this, 0x8, _0x1b6046, _0x27498f, _0x9e8a7e, arguments[0x2]);
        }
    });
    _export_40(_0x21ea50, 'ArrayBuffer'), _export_40(_0x5b6eab, 'DataView'), _export_16(_0x5b6eab[_0x54afcb], _export_65['VIEW'], !0x0), es_exports['ArrayBuffer'] = _0x21ea50, es_exports['DataView'] = _0x5b6eab;
}, function id_091_0x5b(es_module, es_exports) {
    var _0x1c7d27 = es_module['exports'] = 'undefined' != typeof window && window['Math'] == Math ? window : 'undefined' != typeof self && self['Math'] == Math ? self : Function('return this')();
    'number' == typeof __g && (__g = _0x1c7d27);
}, function id_092_0x5c(es_module, es_exports) {
    es_module['exports'] = function (_0x57aebf) {

        return 'object' == typeof _0x57aebf ? null !== _0x57aebf : 'function' == typeof _0x57aebf;
    };
}, function id_093_0x5d(es_module, es_exports, es_require) {
    es_module['exports'] = !es_require(0x7f)(function () {

        return 0x7 != Object['defineProperty']({}, 'a', {
            'get': function () {
                return 0x7;
            }
        })['a'];
    });
}, function id_094_0x5e(es_module, es_exports) {
    var _0x5d1e57, _0x396a95, _0x5b1c1f = es_module['exports'] = {};

    function _0x298955() {

        throw new Error('setTimeout has not been defined');
    }

    function _0x701e1f() {

        throw new Error('clearTimeout has not been defined');
    }

    function _0x3e9fb6(_0xd9bad9) {

        if (_0x5d1e57 === setTimeout) return setTimeout(_0xd9bad9, 0x0);
        if ((_0x5d1e57 === _0x298955 || !_0x5d1e57) && setTimeout) return _0x5d1e57 = setTimeout, setTimeout(_0xd9bad9, 0x0);
        try {
            return _0x5d1e57(_0xd9bad9, 0x0);
        } catch (_0x1a53eb) {
            try {
                return _0x5d1e57['call'](null, _0xd9bad9, 0x0);
            } catch (_0x5e90c4) {
                return _0x5d1e57['call'](this, _0xd9bad9, 0x0);
            }
        }
    }!(function () {

        try {
            _0x5d1e57 = 'function' == typeof setTimeout ? setTimeout : _0x298955;
        } catch (_0x4459e3) {
            _0x5d1e57 = _0x298955;
        }
        try {
            _0x396a95 = 'function' == typeof clearTimeout ? clearTimeout : _0x701e1f;
        } catch (_0x3c7309) {
            _0x396a95 = _0x701e1f;
        }
    }());
    var _0x42089c, _0x4b2f49 = [],
        _0x23cb4a = !0x1,
        _0x31b946 = -0x1;

    function _0x59e86c() {

        _0x23cb4a && _0x42089c && (_0x23cb4a = !0x1, _0x42089c['length'] ? _0x4b2f49 = _0x42089c['concat'](_0x4b2f49) : _0x31b946 = -0x1, _0x4b2f49['length'] && _0xc20075());
    }

    function _0xc20075() {

        if (!_0x23cb4a) {
            var _0x479e7c = _0x3e9fb6(_0x59e86c);
            _0x23cb4a = !0x0;
            for (var _0x51842b = _0x4b2f49['length']; _0x51842b;) {
                for (_0x42089c = _0x4b2f49, _0x4b2f49 = []; ++_0x31b946 < _0x51842b;) _0x42089c && _0x42089c[_0x31b946]['run']();
                _0x31b946 = -0x1, _0x51842b = _0x4b2f49['length'];
            }
            _0x42089c = null, _0x23cb4a = !0x1,
                function (_0x47ba92) {

                    if (_0x396a95 === clearTimeout) return clearTimeout(_0x47ba92);
                    if ((_0x396a95 === _0x701e1f || !_0x396a95) && clearTimeout) return _0x396a95 = clearTimeout, clearTimeout(_0x47ba92);
                    try {
                        _0x396a95(_0x47ba92);
                    } catch (_0x811682) {
                        try {
                            return _0x396a95['call'](null, _0x47ba92);
                        } catch (_0x4f5f2d) {
                            return _0x396a95['call'](this, _0x47ba92);
                        }
                    }
                }(_0x479e7c);
        }
    }

    function _0x133cae(_0x2db036, _0x527f8b) {
        this['fun'] = _0x2db036, this['array'] = _0x527f8b;
    }

    function _0x14be78() {}
    _0x5b1c1f['nextTick'] = function (_0x426864) {
        var _0x417932 = new Array(arguments['length'] - 0x1);
        if (arguments['length'] > 0x1) {
            for (var _0x4dec77 = 0x1; _0x4dec77 < arguments['length']; _0x4dec77++) _0x417932[_0x4dec77 - 0x1] = arguments[_0x4dec77];
        }
        _0x4b2f49['push'](new _0x133cae(_0x426864, _0x417932)), 0x1 !== _0x4b2f49['length'] || _0x23cb4a || _0x3e9fb6(_0xc20075);
    }, _0x133cae['prototype']['run'] = function () {

        this['fun']['apply'](null, this['array']);
    }, _0x5b1c1f['title'] = 'browser', _0x5b1c1f['browser'] = !0x0, _0x5b1c1f['env'] = {}, _0x5b1c1f['argv'] = [], _0x5b1c1f['version'] = '', _0x5b1c1f['versions'] = {}, _0x5b1c1f['on'] = _0x14be78, _0x5b1c1f['addListener'] = _0x14be78, _0x5b1c1f['once'] = _0x14be78, _0x5b1c1f['off'] = _0x14be78, _0x5b1c1f['removeListener'] = _0x14be78, _0x5b1c1f['removeAllListeners'] = _0x14be78, _0x5b1c1f['emit'] = _0x14be78, _0x5b1c1f['prependListener'] = _0x14be78, _0x5b1c1f['prependOnceListener'] = _0x14be78, _0x5b1c1f['listeners'] = function (_0x487abc) {
        return [];
    }, _0x5b1c1f['binding'] = function (_0x55dcbf) {
        throw new Error('process.binding is not supported');
    }, _0x5b1c1f['cwd'] = function () {
        return '/';
    }, _0x5b1c1f['chdir'] = function (_0x15152) {

        throw new Error('process.chdir is not supported');
    }, _0x5b1c1f['umask'] = function () {
        return 0x0;
    };
}, function id_095_0x5f(es_module, es_exports, es_require) {

    es_module['exports'] = !es_require(0xa) && !es_require(0x3)(function () {

        return 0x7 != Object['defineProperty'](es_require(0x42)('div'), 'a', {
            'get': function () {
                return 0x7;
            }
        })['a'];
    });
}, function id_096_0x60(es_module, es_exports, es_require) {
    var _export_2 = es_require(0x2),
        _export_9 = es_require(0x9),
        _export_32 = es_require(0x20),
        _export_67 = es_require(0x43),
        _0x209492 = es_require(0xb)['f'];
    es_module['exports'] = function (_0x47c074) {
        var _0x388b4a = _export_9['Symbol'] || (_export_9['Symbol'] = _export_32 ? {} : _export_2['Symbol'] || {});
        '_' == _0x47c074['charAt'](0x0) || _0x47c074 in _0x388b4a || _0x209492(_0x388b4a, _0x47c074, {
            'value': _export_67['f'](_0x47c074)
        });
    };
}, function id_097_0x61(es_module, es_exports, es_require) {
    var _export_15 = es_require(0xf),
        _export_17 = es_require(0x11),
        _0x48d376 = es_require(0x37)(!0x1),
        _0x2aa633 = es_require(0x44)('IE_PROTO');
    es_module['exports'] = function (_0xcb5e93, _0x2454a6) {
        var _0x5687b0, _0xd68fb6 = _export_17(_0xcb5e93),
            _0xb96866 = 0x0,
            _0x1ebf9d = [];
        for (_0x5687b0 in _0xd68fb6) _0x5687b0 != _0x2aa633 && _export_15(_0xd68fb6, _0x5687b0) && _0x1ebf9d['push'](_0x5687b0);
        for (; _0x2454a6['length'] > _0xb96866;) _export_15(_0xd68fb6, _0x5687b0 = _0x2454a6[_0xb96866++]) && (~_0x48d376(_0x1ebf9d, _0x5687b0) || _0x1ebf9d['push'](_0x5687b0));
        return _0x1ebf9d;
    };
}, function id_098_0x62(es_module, es_exports, es_require) {
    var _export_11 = es_require(0xb),
        _export_4 = es_require(0x4),
        _export_33 = es_require(0x21);
    es_module['exports'] = es_require(0xa) ? Object['defineProperties'] : function (_0x308bd4, _0x5be8d5) {
        _export_4(_0x308bd4);
        for (var _0x2f4aea, _0x29d2b6 = _export_33(_0x5be8d5), _0x2e5eea = _0x29d2b6['length'], _0x5de50b = 0x0; _0x2e5eea > _0x5de50b;) _export_11['f'](_0x308bd4, _0x2f4aea = _0x29d2b6[_0x5de50b++], _0x5be8d5[_0x2f4aea]);
        return _0x308bd4;
    };
}, function id_099_0x63(es_module, es_exports, es_require) {
    var _export_17 = es_require(0x11),
        _0x5bae11 = es_require(0x24)['f'],
        _0x5364fe = {} ['toString'],
        _0x34c77a = 'object' == typeof window && window && Object['getOwnPropertyNames'] ? Object['getOwnPropertyNames'](window) : [];
    es_module['exports']['f'] = function (_0x30b89b) {

        return _0x34c77a && '[object Window]' == _0x5364fe['call'](_0x30b89b) ? function (_0x49454e) {

            try {
                return _0x5bae11(_0x49454e);
            } catch (_0x586567) {
                return _0x34c77a['slice']();
            }
        }(_0x30b89b) : _0x5bae11(_export_17(_0x30b89b));
    };
}, function id_100_0x64(es_module, es_exports, es_require) {
    'use strict';

    var _export_10 = es_require(0xa),
        _export_33 = es_require(0x21),
        _export_56 = es_require(0x38),
        _export_49 = es_require(0x31),
        _export_12 = es_require(0xc),
        _export_48 = es_require(0x30),
        _0x2a534a = Object['assign'];
    es_module['exports'] = !_0x2a534a || es_require(0x3)(function () {
        var _0x4e2643 = {},
            _0x436b5c = {},
            _0xae25bf = Symbol(),
            _0x1ebe81 = 'abcdefghijklmnopqrst';
        return _0x4e2643[_0xae25bf] = 0x7, _0x1ebe81['split']('')['forEach'](function (_0xd87031) {
            _0x436b5c[_0xd87031] = _0xd87031;
        }), 0x7 != _0x2a534a({}, _0x4e2643)[_0xae25bf] || Object['keys'](_0x2a534a({}, _0x436b5c))['join']('') != _0x1ebe81;
    }) ? function (_0x5af8a8, _0x5cc266) {

        for (var _0x1af2be = _export_12(_0x5af8a8), _0x5c1b76 = arguments['length'], _0x5a85f6 = 0x1, _0x3c2943 = _export_56['f'], _0x55e9b6 = _export_49['f']; _0x5c1b76 > _0x5a85f6;)
            for (var _0x2fe95c, _0x3ff775 = _export_48(arguments[_0x5a85f6++]), _0x5f5ce0 = _0x3c2943 ? _export_33(_0x3ff775)['concat'](_0x3c2943(_0x3ff775)) : _export_33(_0x3ff775), _0x15f8df = _0x5f5ce0['length'], _0x1be8d2 = 0x0; _0x15f8df > _0x1be8d2;) _0x2fe95c = _0x5f5ce0[_0x1be8d2++], _export_10 && !_0x55e9b6['call'](_0x3ff775, _0x2fe95c) || (_0x1af2be[_0x2fe95c] = _0x3ff775[_0x2fe95c]);
        return _0x1af2be;
    } : _0x2a534a;
}, function id_101_0x65(es_module, es_exports) {

    es_module['exports'] = Object['is'] || function (_0x3020b1, _0x27dc58) {
        return _0x3020b1 === _0x27dc58 ? 0x0 !== _0x3020b1 || 0x1 / _0x3020b1 == 0x1 / _0x27dc58 : _0x3020b1 != _0x3020b1 && _0x27dc58 != _0x27dc58;
    };
}, function id_102_0x66(es_module, es_exports, es_require) {
    'use strict';

    var _export_20 = es_require(0x14),
        _export_5 = es_require(0x5),
        _export_103 = es_require(0x67),
        _0x20eee6 = []['slice'],
        _0x37efc2 = {},
        _0x4b461b = function (_0x48b0de, _0x3a8669, _0x57d97a) {

            if (!(_0x3a8669 in _0x37efc2)) {
                for (var _0x2c0f17 = [], _0x28a786 = 0x0; _0x28a786 < _0x3a8669; _0x28a786++) _0x2c0f17[_0x28a786] = 'a[' + _0x28a786 + ']';
                _0x37efc2[_0x3a8669] = Function('F,a', 'return new F(' + _0x2c0f17['join'](',') + ')');
            }
            return _0x37efc2[_0x3a8669](_0x48b0de, _0x57d97a);
        };
    es_module['exports'] = Function['bind'] || function (_0x3d94ea) {
        var _0x127588 = _export_20(this),
            _0xf00c77 = _0x20eee6['call'](arguments, 0x1),
            _0x4d75cc = function () {
                var _0x3014a7 = _0xf00c77['concat'](_0x20eee6['call'](arguments));
                return this instanceof _0x4d75cc ? _0x4b461b(_0x127588, _0x3014a7['length'], _0x3014a7) : _export_103(_0x127588, _0x3014a7, _0x3d94ea);
            };
        return _export_5(_0x127588['prototype']) && (_0x4d75cc['prototype'] = _0x127588['prototype']), _0x4d75cc;
    };
}, function id_103_0x67(es_module, es_exports) {

    es_module['exports'] = function (_0x58725f, _0x4e2df5, _0x196d1d) {
        var _0x236d82 = void 0x0 === _0x196d1d;
        switch (_0x4e2df5['length']) {
            case 0x0:
                return _0x236d82 ? _0x58725f() : _0x58725f['call'](_0x196d1d);
            case 0x1:
                return _0x236d82 ? _0x58725f(_0x4e2df5[0x0]) : _0x58725f['call'](_0x196d1d, _0x4e2df5[0x0]);
            case 0x2:
                return _0x236d82 ? _0x58725f(_0x4e2df5[0x0], _0x4e2df5[0x1]) : _0x58725f['call'](_0x196d1d, _0x4e2df5[0x0], _0x4e2df5[0x1]);
            case 0x3:
                return _0x236d82 ? _0x58725f(_0x4e2df5[0x0], _0x4e2df5[0x1], _0x4e2df5[0x2]) : _0x58725f['call'](_0x196d1d, _0x4e2df5[0x0], _0x4e2df5[0x1], _0x4e2df5[0x2]);
            case 0x4:
                return _0x236d82 ? _0x58725f(_0x4e2df5[0x0], _0x4e2df5[0x1], _0x4e2df5[0x2], _0x4e2df5[0x3]) : _0x58725f['call'](_0x196d1d, _0x4e2df5[0x0], _0x4e2df5[0x1], _0x4e2df5[0x2], _0x4e2df5[0x3]);
        }
        return _0x58725f['apply'](_0x196d1d, _0x4e2df5);
    };
}, function id_104_0x68(es_module, es_exports, es_require) {
    var _0x52c4da = es_require(0x2)['parseInt'],
        _0x283314 = es_require(0x29)['trim'],
        _export_72 = es_require(0x48),
        _0x1f76fa = /^[-+]?0[xX]/;
    es_module['exports'] = 0x8 !== _0x52c4da(_export_72 + '08') || 0x16 !== _0x52c4da(_export_72 + '0x16') ? function (_0x23527e, _0x227099) {
        var _0x3eba7c = _0x283314(String(_0x23527e), 0x3);
        return _0x52c4da(_0x3eba7c, _0x227099 >>> 0x0 || (_0x1f76fa['test'](_0x3eba7c) ? 0x10 : 0xa));
    } : _0x52c4da;
}, function id_105_0x69(es_module, es_exports, es_require) {
    var _0x69b3c9 = es_require(0x2)['parseFloat'],
        _0x1182b0 = es_require(0x29)['trim'];
    es_module['exports'] = 0x1 / _0x69b3c9(es_require(0x48) + '-0') != -0x1 / 0x0 ? function (_0x19a0d3) {
        var _0x4bb3e9 = _0x1182b0(String(_0x19a0d3), 0x3),
            _0x1a2044 = _0x69b3c9(_0x4bb3e9);
        return 0x0 === _0x1a2044 && '-' == _0x4bb3e9['charAt'](0x0) ? -0x0 : _0x1a2044;
    } : _0x69b3c9;
}, function id_106_0x6a(es_module, es_exports, es_require) {
    var _export_25 = es_require(0x19);
    es_module['exports'] = function (_0x1e3439, _0x34d177) {

        if ('number' != typeof _0x1e3439 && 'Number' != _export_25(_0x1e3439)) throw TypeError(_0x34d177);
        return +_0x1e3439;
    };
}, function id_107_0x6b(es_module, es_exports, es_require) {
    var _export_5 = es_require(0x5),
        _0x56b743 = Math['floor'];
    es_module['exports'] = function (_0x296914) {
        return !_export_5(_0x296914) && isFinite(_0x296914) && _0x56b743(_0x296914) === _0x296914;
    };
}, function id_108_0x6c(es_module, es_exports) {

    es_module['exports'] = Math['log1p'] || function (_0x39d393) {

        return (_0x39d393 = +_0x39d393) > -1e-8 && _0x39d393 < 1e-8 ? _0x39d393 - _0x39d393 * _0x39d393 / 0x2 : Math['log'](0x1 + _0x39d393);
    };
}, function id_109_0x6d(es_module, es_exports, es_require) {
    'use strict';

    var _export_35 = es_require(0x23),
        _export_30 = es_require(0x1e),
        _export_40 = es_require(0x28),
        _0x349931 = {};
    es_require(0x10)(_0x349931, es_require(0x7)('iterator'), function () {
        return this;
    }), es_module['exports'] = function (_0x4db035, _0x420d49, _0x35a0fb) {

        _0x4db035['prototype'] = _export_35(_0x349931, {
            'next': _export_30(0x1, _0x35a0fb)
        }), _export_40(_0x4db035, _0x420d49 + ' Iterator');
    };
}, function id_110_0x6e(es_module, es_exports, es_require) {
    var _export_4 = es_require(0x4);
    es_module['exports'] = function (_0x438da6, _0x2961a6, _0x76506c, _0x2b95a3) {

        try {
            return _0x2b95a3 ? _0x2961a6(_export_4(_0x76506c)[0x0], _0x76506c[0x1]) : _0x2961a6(_0x76506c);
        } catch (_0x52098b) {
            var _0x122c8b = _0x438da6['return'];
            throw void 0x0 !== _0x122c8b && _export_4(_0x122c8b['call'](_0x438da6)), _0x52098b;
        }
    };
}, function id_111_0x6f(es_module, es_exports, es_require) {
    var _export_228 = es_require(0xe4);
    es_module['exports'] = function (_0x3b582f, _0x3009f9) {
        return new(_export_228(_0x3b582f))(_0x3009f9);
    };
}, function id_112_0x70(es_module, es_exports, es_require) {
    var _export_20 = es_require(0x14),
        _export_12 = es_require(0xc),
        _export_48 = es_require(0x30),
        _export_8 = es_require(0x8);
    es_module['exports'] = function (_0x1e6e1b, _0x2443d0, _0x5458c2, _0x16510b, _0x4f6460) {

        _export_20(_0x2443d0);
        var _0x4e7edf = _export_12(_0x1e6e1b),
            _0x4d2f93 = _export_48(_0x4e7edf),
            _0x55b26d = _export_8(_0x4e7edf['length']),
            _0x19a175 = _0x4f6460 ? _0x55b26d - 0x1 : 0x0,
            _0x48373f = _0x4f6460 ? -0x1 : 0x1;
        if (_0x5458c2 < 0x2)
            for (;;) {
                if (_0x19a175 in _0x4d2f93) {
                    _0x16510b = _0x4d2f93[_0x19a175], _0x19a175 += _0x48373f;
                    break;
                }
                if (_0x19a175 += _0x48373f, _0x4f6460 ? _0x19a175 < 0x0 : _0x55b26d <= _0x19a175) throw TypeError('Reduce of empty array with no initial value');
            }
        for (; _0x4f6460 ? _0x19a175 >= 0x0 : _0x55b26d > _0x19a175; _0x19a175 += _0x48373f) _0x19a175 in _0x4d2f93 && (_0x16510b = _0x2443d0(_0x16510b, _0x4d2f93[_0x19a175], _0x19a175, _0x4e7edf));
        return _0x16510b;
    };
}, function id_113_0x71(es_module, es_exports, es_require) {
    'use strict';

    var _export_12 = es_require(0xc),
        _export_34 = es_require(0x22),
        _export_8 = es_require(0x8);
    es_module['exports'] = []['copyWithin'] || function (_0x2aa2dd, _0x4c7af7) {
        var _0x5ea4e4 = _export_12(this),
            _0x3b8105 = _export_8(_0x5ea4e4['length']),
            _0x37c627 = _export_34(_0x2aa2dd, _0x3b8105),
            _0x226dad = _export_34(_0x4c7af7, _0x3b8105),
            _0x1f798f = arguments['length'] > 0x2 ? arguments[0x2] : void 0x0,
            _0x210d3e = Math['min']((void 0x0 === _0x1f798f ? _0x3b8105 : _export_34(_0x1f798f, _0x3b8105)) - _0x226dad, _0x3b8105 - _0x37c627),
            _0x570007 = 0x1;
        for (_0x226dad < _0x37c627 && _0x37c627 < _0x226dad + _0x210d3e && (_0x570007 = -0x1, _0x226dad += _0x210d3e - 0x1, _0x37c627 += _0x210d3e - 0x1); _0x210d3e-- > 0x0;) _0x226dad in _0x5ea4e4 ? _0x5ea4e4[_0x37c627] = _0x5ea4e4[_0x226dad] : delete _0x5ea4e4[_0x37c627], _0x37c627 += _0x570007, _0x226dad += _0x570007;
        return _0x5ea4e4;
    };
}, function id_114_0x72(es_module, es_exports) {

    es_module['exports'] = function (_0x2581b2, _0x39a4b5) {
        return {
            'value': _0x39a4b5,
            'done': !!_0x2581b2
        };
    };
}, function id_115_0x73(es_module, es_exports, es_require) {
    'use strict';

    var _export_87 = es_require(0x57);
    es_require(0x0)({
        'target': 'RegExp',
        'proto': !0x0,
        'forced': _export_87 !== /./ ['exec']
    }, {
        'exec': _export_87
    });
}, function id_116_0x74(es_module, es_exports, es_require) {

    es_require(0xa) && 'g' != /./g ['flags'] && es_require(0xb)['f'](RegExp['prototype'], 'flags', {
        'configurable': !0x0,
        'get': es_require(0x3b)
    });
}, function id_117_0x75(es_module, es_exports, es_require) {
    'use strict';

    var _0x18cfe7, _0x2c0dd8, _0x1949a2, _0x1f911b, _export_32 = es_require(0x20),
        _export_2 = es_require(0x2),
        _export_19 = es_require(0x13),
        _export_50 = es_require(0x32),
        _export_0 = es_require(0x0),
        _export_5 = es_require(0x5),
        _export_20 = es_require(0x14),
        _export_44 = es_require(0x2c),
        _export_62 = es_require(0x3e),
        _export_51 = es_require(0x33),
        _0x53ccc7 = es_require(0x59)['set'],
        _0x1a6ad4 = es_require(0xf8)(),
        _export_118 = es_require(0x76),
        _export_249 = es_require(0xf9),
        _export_63 = es_require(0x3f),
        _export_119 = es_require(0x77),
        _0x25c9ff = _export_2['TypeError'],
        _0x33708c = _export_2['process'],
        _0x3aa3bc = _0x33708c && _0x33708c['versions'],
        _0x829092 = _0x3aa3bc && _0x3aa3bc['v8'] || '',
        _0x2baf3e = _export_2['Promise'],
        _0x191bf7 = 'process' == _export_50(_0x33708c),
        _0x3d038e = function () {},
        _0x4523ca = _0x2c0dd8 = _export_118['f'],
        _0x500ed2 = !!(function () {

            try {
                var _0x123a93 = _0x2baf3e['resolve'](0x1),
                    _0xf8671 = (_0x123a93['constructor'] = {})[es_require(0x7)('species')] = function (_0x1b2e99) {
                        _0x1b2e99(_0x3d038e, _0x3d038e);
                    };
                return (_0x191bf7 || 'function' == typeof PromiseRejectionEvent) && _0x123a93['then'](_0x3d038e) instanceof _0xf8671 && 0x0 !== _0x829092['indexOf']('6.6') && -0x1 === _export_63['indexOf']('Chrome/66');
            } catch (_0x453b71) {}
        }()),
        _0xc8c763 = function (_0x398979) {
            var _0x3b3234;
            return !(!_export_5(_0x398979) || 'function' != typeof (_0x3b3234 = _0x398979['then'])) && _0x3b3234;
        },
        _0x20efd6 = function (_0x49cd7e, _0x46abe4) {

            if (!_0x49cd7e['_n']) {
                _0x49cd7e['_n'] = !0x0;
                var _0x4304df = _0x49cd7e['_c'];
                _0x1a6ad4(function () {

                    for (var _0x38f273 = _0x49cd7e['_v'], _0x1e2565 = 0x1 == _0x49cd7e['_s'], _0x12f0f0 = 0x0, _0x3ad92d = function (_0x14c928) {
                            var _0x3c7337, _0x5ea164, _0x1f5499, _0xded473 = _0x1e2565 ? _0x14c928['ok'] : _0x14c928['fail'],
                                _0x536a46 = _0x14c928['resolve'],
                                _0x387506 = _0x14c928['reject'],
                                _0x425730 = _0x14c928['domain'];
                            try {
                                _0xded473 ? (_0x1e2565 || (0x2 == _0x49cd7e['_h'] && _0x5554d7(_0x49cd7e), _0x49cd7e['_h'] = 0x1), !0x0 === _0xded473 ? _0x3c7337 = _0x38f273 : (_0x425730 && _0x425730['enter'](), _0x3c7337 = _0xded473(_0x38f273), _0x425730 && (_0x425730['exit'](), _0x1f5499 = !0x0)), _0x3c7337 === _0x14c928['promise'] ? _0x387506(_0x25c9ff('Promise-chain cycle')) : (_0x5ea164 = _0xc8c763(_0x3c7337)) ? _0x5ea164['call'](_0x3c7337, _0x536a46, _0x387506) : _0x536a46(_0x3c7337)) : _0x387506(_0x38f273);
                            } catch (_0x2458dc) {
                                _0x425730 && !_0x1f5499 && _0x425730['exit'](), _0x387506(_0x2458dc);
                            }
                        }; _0x4304df['length'] > _0x12f0f0;) _0x3ad92d(_0x4304df[_0x12f0f0++]);
                    _0x49cd7e['_c'] = [], _0x49cd7e['_n'] = !0x1, _0x46abe4 && !_0x49cd7e['_h'] && _0x1352a6(_0x49cd7e);
                });
            }
        },
        _0x1352a6 = function (_0x10c808) {

            _0x53ccc7['call'](_export_2, function () {
                var _0x5bc26e, _0x40f3b4, _0x3e68f4, _0x3636c2 = _0x10c808['_v'],
                    _0x52a788 = _0x571aee(_0x10c808);
                if (_0x52a788 && (_0x5bc26e = _export_249(function () {

                        _0x191bf7 ? _0x33708c['emit']('unhandledRejection', _0x3636c2, _0x10c808) : (_0x40f3b4 = _export_2['onunhandledrejection']) ? _0x40f3b4({
                            'promise': _0x10c808,
                            'reason': _0x3636c2
                        }) : (_0x3e68f4 = _export_2['console']) && _0x3e68f4['error'] && _0x3e68f4['error']('Unhandled promise rejection', _0x3636c2);
                    }), _0x10c808['_h'] = _0x191bf7 || _0x571aee(_0x10c808) ? 0x2 : 0x1), _0x10c808['_a'] = void 0x0, _0x52a788 && _0x5bc26e['e']) throw _0x5bc26e['v'];
            });
        },
        _0x571aee = function (_0xf9f168) {

            return 0x1 !== _0xf9f168['_h'] && 0x0 === (_0xf9f168['_a'] || _0xf9f168['_c'])['length'];
        },
        _0x5554d7 = function (_0x5dfa47) {

            _0x53ccc7['call'](_export_2, function () {
                var _0x306386;
                _0x191bf7 ? _0x33708c['emit']('rejectionHandled', _0x5dfa47) : (_0x306386 = _export_2['onrejectionhandled']) && _0x306386({
                    'promise': _0x5dfa47,
                    'reason': _0x5dfa47['_v']
                });
            });
        },
        _0x1799d4 = function (_0x901598) {
            var _0x5964ba = this;
            _0x5964ba['_d'] || (_0x5964ba['_d'] = !0x0, (_0x5964ba = _0x5964ba['_w'] || _0x5964ba)['_v'] = _0x901598, _0x5964ba['_s'] = 0x2, _0x5964ba['_a'] || (_0x5964ba['_a'] = _0x5964ba['_c']['slice']()), _0x20efd6(_0x5964ba, !0x0));
        },
        _0x105c5a = function (_0x419c73) {
            var _0x2dad9c, _0x1a2386 = this;
            if (!_0x1a2386['_d']) {
                _0x1a2386['_d'] = !0x0, _0x1a2386 = _0x1a2386['_w'] || _0x1a2386;
                try {
                    if (_0x1a2386 === _0x419c73) throw _0x25c9ff('Promise can\x27t be resolved itself');
                    (_0x2dad9c = _0xc8c763(_0x419c73)) ? _0x1a6ad4(function () {
                        var _0x3dd6ba = {
                            '_w': _0x1a2386,
                            '_d': !0x1
                        };
                        try {
                            _0x2dad9c['call'](_0x419c73, _export_19(_0x105c5a, _0x3dd6ba, 0x1), _export_19(_0x1799d4, _0x3dd6ba, 0x1));
                        } catch (_0x1120a7) {
                            _0x1799d4['call'](_0x3dd6ba, _0x1120a7);
                        }
                    }): (_0x1a2386['_v'] = _0x419c73, _0x1a2386['_s'] = 0x1, _0x20efd6(_0x1a2386, !0x1));
                } catch (_0x4ddb1d) {
                    _0x1799d4['call']({
                        '_w': _0x1a2386,
                        '_d': !0x1
                    }, _0x4ddb1d);
                }
            }
        };
    _0x500ed2 || (_0x2baf3e = function (_0x445582) {

        _export_44(this, _0x2baf3e, 'Promise', '_h'), _export_20(_0x445582), _0x18cfe7['call'](this);
        try {
            _0x445582(_export_19(_0x105c5a, this, 0x1), _export_19(_0x1799d4, this, 0x1));
        } catch (_0xeed99e) {
            _0x1799d4['call'](this, _0xeed99e);
        }
    }, (_0x18cfe7 = function (_0x451658) {
        this['_c'] = [], this['_a'] = void 0x0, this['_s'] = 0x0, this['_d'] = !0x1, this['_v'] = void 0x0, this['_h'] = 0x0, this['_n'] = !0x1;
    })['prototype'] = es_require(0x2d)(_0x2baf3e['prototype'], {
        'then': function (_0x2e9542, _0x40244f) {
            var _0x58d843 = _0x4523ca(_export_51(this, _0x2baf3e));
            return _0x58d843['ok'] = 'function' != typeof _0x2e9542 || _0x2e9542, _0x58d843['fail'] = 'function' == typeof _0x40244f && _0x40244f, _0x58d843['domain'] = _0x191bf7 ? _0x33708c['domain'] : void 0x0, this['_c']['push'](_0x58d843), this['_a'] && this['_a']['push'](_0x58d843), this['_s'] && _0x20efd6(this, !0x1), _0x58d843['promise'];
        },
        'catch': function (_0x3ba26e) {
            return this['then'](void 0x0, _0x3ba26e);
        }
    }), _0x1949a2 = function () {
        var _0x35e108 = new _0x18cfe7();
        this['promise'] = _0x35e108, this['resolve'] = _export_19(_0x105c5a, _0x35e108, 0x1), this['reject'] = _export_19(_0x1799d4, _0x35e108, 0x1);
    }, _export_118['f'] = _0x4523ca = function (_0x2f0928) {
        return _0x2f0928 === _0x2baf3e || _0x2f0928 === _0x1f911b ? new _0x1949a2(_0x2f0928) : _0x2c0dd8(_0x2f0928);
    }), _export_0(_export_0['G'] + _export_0['W'] + _export_0['F'] * !_0x500ed2, {
        'Promise': _0x2baf3e
    }), es_require(0x28)(_0x2baf3e, 'Promise'), es_require(0x2b)('Promise'), _0x1f911b = es_require(0x9)['Promise'], _export_0(_export_0['S'] + _export_0['F'] * !_0x500ed2, 'Promise', {
        'reject': function (_0x12adf3) {
            var _0x1e389a = _0x4523ca(this);
            return (0x0, _0x1e389a['reject'])(_0x12adf3), _0x1e389a['promise'];
        }
    }), _export_0(_export_0['S'] + _export_0['F'] * (_export_32 || !_0x500ed2), 'Promise', {
        'resolve': function (_0x1ee02d) {
            return _export_119(_export_32 && this === _0x1f911b ? _0x2baf3e : this, _0x1ee02d);
        }
    }), _export_0(_export_0['S'] + _export_0['F'] * !(_0x500ed2 && es_require(0x3a)(function (_0x5cc5a8) {

        _0x2baf3e['all'](_0x5cc5a8)['catch'](_0x3d038e);
    })), 'Promise', {
        'all': function (_0x195c09) {
            var _0x69f497 = this,
                _0x487a1b = _0x4523ca(_0x69f497),
                _0x2f8ad9 = _0x487a1b['resolve'],
                _0x14c0f2 = _0x487a1b['reject'],
                _0x364082 = _export_249(function () {
                    var _0xca9f2 = [],
                        _0x42253c = 0x0,
                        _0x37594b = 0x1;
                    _export_62(_0x195c09, !0x1, function (_0x41df0f) {
                        var _0x4b4054 = _0x42253c++,
                            _0x58a0a6 = !0x1;
                        _0xca9f2['push'](void 0x0), _0x37594b++, _0x69f497['resolve'](_0x41df0f)['then'](function (_0x5c716b) {
                            _0x58a0a6 || (_0x58a0a6 = !0x0, _0xca9f2[_0x4b4054] = _0x5c716b, --_0x37594b || _0x2f8ad9(_0xca9f2));
                        }, _0x14c0f2);
                    }), --_0x37594b || _0x2f8ad9(_0xca9f2);
                });
            return _0x364082['e'] && _0x14c0f2(_0x364082['v']), _0x487a1b['promise'];
        },
        'race': function (_0x33ec32) {
            var _0x1aa51f = this,
                _0x2d8f56 = _0x4523ca(_0x1aa51f),
                _0x47c922 = _0x2d8f56['reject'],
                _0x566806 = _export_249(function () {
                    _export_62(_0x33ec32, !0x1, function (_0x4a9493) {

                        _0x1aa51f['resolve'](_0x4a9493)['then'](_0x2d8f56['resolve'], _0x47c922);
                    });
                });
            return _0x566806['e'] && _0x47c922(_0x566806['v']), _0x2d8f56['promise'];
        }
    });
}, function id_118_0x76(es_module, es_exports, es_require) {
    'use strict';

    var _export_20 = es_require(0x14);

    function _0x493022(_0x4f8c50) {
        var _0x132128, _0x5616ce;
        this['promise'] = new _0x4f8c50(function (_0x32d46f, _0x7eef30) {
            if (void 0x0 !== _0x132128 || void 0x0 !== _0x5616ce) throw TypeError('Bad Promise constructor');
            _0x132128 = _0x32d46f, _0x5616ce = _0x7eef30;
        }), this['resolve'] = _export_20(_0x132128), this['reject'] = _export_20(_0x5616ce);
    }
    es_module['exports']['f'] = function (_0x45d536) {
        return new _0x493022(_0x45d536);
    };
}, function id_119_0x77(es_module, es_exports, es_require) {
    var _export_4 = es_require(0x4),
        _export_5 = es_require(0x5),
        _export_118 = es_require(0x76);
    es_module['exports'] = function (_0x2c6723, _0x10c2e7) {

        if (_export_4(_0x2c6723), _export_5(_0x10c2e7) && _0x10c2e7['constructor'] === _0x2c6723) return _0x10c2e7;
        var _0x2240c7 = _export_118['f'](_0x2c6723);
        return (0x0, _0x2240c7['resolve'])(_0x10c2e7), _0x2240c7['promise'];
    };
}, function id_120_0x78(es_module, es_exports, es_require) {
    'use strict';

    var _0x5e7322 = es_require(0xb)['f'],
        _export_35 = es_require(0x23),
        _export_45 = es_require(0x2d),
        _export_19 = es_require(0x13),
        _export_44 = es_require(0x2c),
        _export_62 = es_require(0x3e),
        _export_78 = es_require(0x4e),
        _export_114 = es_require(0x72),
        _export_43 = es_require(0x2b),
        _export_10 = es_require(0xa),
        _0x564645 = es_require(0x1d)['fastKey'],
        _export_39 = es_require(0x27),
        _0x23e466 = _export_10 ? '_s' : 'size',
        _0x4452de = function (_0x3ae781, _0x2bf170) {
            var _0x3092c8, _0x320003 = _0x564645(_0x2bf170);
            if ('F' !== _0x320003) return _0x3ae781['_i'][_0x320003];
            for (_0x3092c8 = _0x3ae781['_f']; _0x3092c8; _0x3092c8 = _0x3092c8['n'])
                if (_0x3092c8['k'] == _0x2bf170) return _0x3092c8;
        };
    es_module['exports'] = {
        'getConstructor': function (_0x5b45b0, _0x327e83, _0xbfc4b0, _0x53e288) {
            var _0x25fc4f = _0x5b45b0(function (_0xb50967, _0x5ce02a) {
                _export_44(_0xb50967, _0x25fc4f, _0x327e83, '_i'), _0xb50967['_t'] = _0x327e83, _0xb50967['_i'] = _export_35(null), _0xb50967['_f'] = void 0x0, _0xb50967['_l'] = void 0x0, _0xb50967[_0x23e466] = 0x0, null != _0x5ce02a && _export_62(_0x5ce02a, _0xbfc4b0, _0xb50967[_0x53e288], _0xb50967);
            });
            return _export_45(_0x25fc4f['prototype'], {
                'clear': function () {
                    for (var _0x10c164 = _export_39(this, _0x327e83), _0x1270e8 = _0x10c164['_i'], _0x18e595 = _0x10c164['_f']; _0x18e595; _0x18e595 = _0x18e595['n']) _0x18e595['r'] = !0x0, _0x18e595['p'] && (_0x18e595['p'] = _0x18e595['p']['n'] = void 0x0), delete _0x1270e8[_0x18e595['i']];
                    _0x10c164['_f'] = _0x10c164['_l'] = void 0x0, _0x10c164[_0x23e466] = 0x0;
                },
                'delete': function (_0x399439) {
                    var _0x5848ee = _export_39(this, _0x327e83),
                        _0x160a8b = _0x4452de(_0x5848ee, _0x399439);
                    if (_0x160a8b) {
                        var _0x3fbe58 = _0x160a8b['n'],
                            _0x2939b2 = _0x160a8b['p'];
                        delete _0x5848ee['_i'][_0x160a8b['i']], _0x160a8b['r'] = !0x0, _0x2939b2 && (_0x2939b2['n'] = _0x3fbe58), _0x3fbe58 && (_0x3fbe58['p'] = _0x2939b2), _0x5848ee['_f'] == _0x160a8b && (_0x5848ee['_f'] = _0x3fbe58), _0x5848ee['_l'] == _0x160a8b && (_0x5848ee['_l'] = _0x2939b2), _0x5848ee[_0x23e466]--;
                    }
                    return !!_0x160a8b;
                },
                'forEach': function (_0x4cb189) {

                    _export_39(this, _0x327e83);
                    for (var _0x501b6c, _0x2a6335 = _export_19(_0x4cb189, arguments['length'] > 0x1 ? arguments[0x1] : void 0x0, 0x3); _0x501b6c = _0x501b6c ? _0x501b6c['n'] : this['_f'];)
                        for (_0x2a6335(_0x501b6c['v'], _0x501b6c['k'], this); _0x501b6c && _0x501b6c['r'];) _0x501b6c = _0x501b6c['p'];
                },
                'has': function (_0x1bcbe0) {
                    return !!_0x4452de(_export_39(this, _0x327e83), _0x1bcbe0);
                }
            }), _export_10 && _0x5e7322(_0x25fc4f['prototype'], 'size', {
                'get': function () {
                    return _export_39(this, _0x327e83)[_0x23e466];
                }
            }), _0x25fc4f;
        },
        'def': function (_0x526c6b, _0x211c53, _0x2fa3ea) {
            var _0x184e82, _0x2bba09, _0xfb7f3a = _0x4452de(_0x526c6b, _0x211c53);
            return _0xfb7f3a ? _0xfb7f3a['v'] = _0x2fa3ea : (_0x526c6b['_l'] = _0xfb7f3a = {
                'i': _0x2bba09 = _0x564645(_0x211c53, !0x0),
                'k': _0x211c53,
                'v': _0x2fa3ea,
                'p': _0x184e82 = _0x526c6b['_l'],
                'n': void 0x0,
                'r': !0x1
            }, _0x526c6b['_f'] || (_0x526c6b['_f'] = _0xfb7f3a), _0x184e82 && (_0x184e82['n'] = _0xfb7f3a), _0x526c6b[_0x23e466]++, 'F' !== _0x2bba09 && (_0x526c6b['_i'][_0x2bba09] = _0xfb7f3a)), _0x526c6b;
        },
        'getEntry': _0x4452de,
        'setStrong': function (_0x3bd8fe, _0x43da75, _0x27c921) {

            _export_78(_0x3bd8fe, _0x43da75, function (_0x2cc182, _0x3acdf6) {
                this['_t'] = _export_39(_0x2cc182, _0x43da75), this['_k'] = _0x3acdf6, this['_l'] = void 0x0;
            }, function () {
                for (var _0x915b82 = this['_k'], _0x40135b = this['_l']; _0x40135b && _0x40135b['r'];) _0x40135b = _0x40135b['p'];
                return this['_t'] && (this['_l'] = _0x40135b = _0x40135b ? _0x40135b['n'] : this['_t']['_f']) ? _export_114(0x0, 'keys' == _0x915b82 ? _0x40135b['k'] : 'values' == _0x915b82 ? _0x40135b['v'] : [_0x40135b['k'], _0x40135b['v']]) : (this['_t'] = void 0x0, _export_114(0x1));
            }, _0x27c921 ? 'entries' : 'values', !_0x27c921, !0x0), _export_43(_0x43da75);
        }
    };
}, function id_121_0x79(es_module, es_exports, es_require) {
    'use strict';

    var _export_45 = es_require(0x2d),
        _0x872f85 = es_require(0x1d)['getWeak'],
        _export_4 = es_require(0x4),
        _export_5 = es_require(0x5),
        _export_44 = es_require(0x2c),
        _export_62 = es_require(0x3e),
        _export_24 = es_require(0x18),
        _export_15 = es_require(0xf),
        _export_39 = es_require(0x27),
        _0x17d0b7 = _export_24(0x5),
        _0x37ec1c = _export_24(0x6),
        _0x1d98ce = 0x0,
        _0x5a6d8d = function (_0xcf30b8) {
            return _0xcf30b8['_l'] || (_0xcf30b8['_l'] = new _0x1d006f());
        },
        _0x1d006f = function () {
            this['a'] = [];
        },
        _0x2fd3b6 = function (_0x1bf64d, _0x391160) {
            return _0x17d0b7(_0x1bf64d['a'], function (_0x19b9c6) {
                return _0x19b9c6[0x0] === _0x391160;
            });
        };
    _0x1d006f['prototype'] = {
        'get': function (_0x213062) {
            var _0x49177c = _0x2fd3b6(this, _0x213062);
            if (_0x49177c) return _0x49177c[0x1];
        },
        'has': function (_0x445cfe) {
            return !!_0x2fd3b6(this, _0x445cfe);
        },
        'set': function (_0x4d682f, _0x44f933) {
            var _0x3c04c1 = _0x2fd3b6(this, _0x4d682f);
            _0x3c04c1 ? _0x3c04c1[0x1] = _0x44f933 : this['a']['push']([_0x4d682f, _0x44f933]);
        },
        'delete': function (_0x4e8d9a) {
            var _0x4af614 = _0x37ec1c(this['a'], function (_0x3e21fb) {
                return _0x3e21fb[0x0] === _0x4e8d9a;
            });
            return ~_0x4af614 && this['a']['splice'](_0x4af614, 0x1), !!~_0x4af614;
        }
    }, es_module['exports'] = {
        'getConstructor': function (_0x56b3e8, _0x3a73c3, _0xfda935, _0x36a5f0) {
            var _0x2eea12 = _0x56b3e8(function (_0x313c6a, _0xc92f3e) {
                _export_44(_0x313c6a, _0x2eea12, _0x3a73c3, '_i'), _0x313c6a['_t'] = _0x3a73c3, _0x313c6a['_i'] = _0x1d98ce++, _0x313c6a['_l'] = void 0x0, null != _0xc92f3e && _export_62(_0xc92f3e, _0xfda935, _0x313c6a[_0x36a5f0], _0x313c6a);
            });
            return _export_45(_0x2eea12['prototype'], {
                'delete': function (_0x5d929b) {
                    if (!_export_5(_0x5d929b)) return !0x1;
                    var _0x42e950 = _0x872f85(_0x5d929b);
                    return !0x0 === _0x42e950 ? _0x5a6d8d(_export_39(this, _0x3a73c3))['delete'](_0x5d929b) : _0x42e950 && _export_15(_0x42e950, this['_i']) && delete _0x42e950[this['_i']];
                },
                'has': function (_0x7495a7) {

                    if (!_export_5(_0x7495a7)) return !0x1;
                    var _0x2a5334 = _0x872f85(_0x7495a7);
                    return !0x0 === _0x2a5334 ? _0x5a6d8d(_export_39(this, _0x3a73c3))['has'](_0x7495a7) : _0x2a5334 && _export_15(_0x2a5334, this['_i']);
                }
            }), _0x2eea12;
        },
        'def': function (_0x3f1525, _0xa0ac1, _0x23441e) {
            var _0x2ac25e = _0x872f85(_export_4(_0xa0ac1), !0x0);
            return !0x0 === _0x2ac25e ? _0x5a6d8d(_0x3f1525)['set'](_0xa0ac1, _0x23441e) : _0x2ac25e[_0x3f1525['_i']] = _0x23441e, _0x3f1525;
        },
        'ufstore': _0x5a6d8d
    };
}, function id_122_0x7a(es_module, es_exports, es_require) {
    var _export_21 = es_require(0x15),
        _export_8 = es_require(0x8);
    es_module['exports'] = function (_0x270557) {

        if (void 0x0 === _0x270557) return 0x0;
        var _0x706b5f = _export_21(_0x270557),
            _0x1c4f58 = _export_8(_0x706b5f);
        if (_0x706b5f !== _0x1c4f58) throw RangeError('Wrong length!');
        return _0x1c4f58;
    };
}, function id_123_0x7b(es_module, es_exports, es_require) {
    var _export_36 = es_require(0x24),
        _export_56 = es_require(0x38),
        _export_4 = es_require(0x4),
        _0x43645e = es_require(0x2)['Reflect'];
    es_module['exports'] = _0x43645e && _0x43645e['ownKeys'] || function (_0x5b2b44) {
        var _0x13db58 = _export_36['f'](_export_4(_0x5b2b44)),
            _0x1d7241 = _export_56['f'];
        return _0x1d7241 ? _0x13db58['concat'](_0x1d7241(_0x5b2b44)) : _0x13db58;
    };
}, function id_124_0x7c(es_module, es_exports, es_require) {
    var _export_8 = es_require(0x8),
        _export_74 = es_require(0x4a),
        _export_26 = es_require(0x1a);
    es_module['exports'] = function (_0x3158a0, _0x1f76b8, _0x6a5a27, _0x1302d6) {
        var _0x587717 = String(_export_26(_0x3158a0)),
            _0x1c0b26 = _0x587717['length'],
            _0x1f915c = void 0x0 === _0x6a5a27 ? ' ' : String(_0x6a5a27),
            _0x519319 = _export_8(_0x1f76b8);
        if (_0x519319 <= _0x1c0b26 || '' == _0x1f915c) return _0x587717;
        var _0x3915a0 = _0x519319 - _0x1c0b26,
            _0x4504c3 = _export_74['call'](_0x1f915c, Math['ceil'](_0x3915a0 / _0x1f915c['length']));
        return _0x4504c3['length'] > _0x3915a0 && (_0x4504c3 = _0x4504c3['slice'](0x0, _0x3915a0)), _0x1302d6 ? _0x4504c3 + _0x587717 : _0x587717 + _0x4504c3;
    };
}, function id_125_0x7d(es_module, es_exports, es_require) {
    var _export_10 = es_require(0xa),
        _export_33 = es_require(0x21),
        _export_17 = es_require(0x11),
        _0x273063 = es_require(0x31)['f'];
    es_module['exports'] = function (_0x54d29f) {

        return function (_0x4715d5) {

            for (var _0x51c300, _0x14c712 = _export_17(_0x4715d5), _0x529ca5 = _export_33(_0x14c712), _0x21f036 = _0x529ca5['length'], _0x1cb02c = 0x0, _0x49b5bd = []; _0x21f036 > _0x1cb02c;) _0x51c300 = _0x529ca5[_0x1cb02c++], _export_10 && !_0x273063['call'](_0x14c712, _0x51c300) || _0x49b5bd['push'](_0x54d29f ? [_0x51c300, _0x14c712[_0x51c300]] : _0x14c712[_0x51c300]);
            return _0x49b5bd;
        };
    };
}, function id_126_0x7e(es_module, es_exports) {
    var _0x5cef15 = es_module['exports'] = {
        'version': '2.6.12'
    };
    'number' == typeof __e && (__e = _0x5cef15);
}, function id_127_0x7f(es_module, es_exports) {
    es_module['exports'] = function (_0xf82750) {
        try {
            return !!_0xf82750();
        } catch (_0x5e7e00) {
            return !0x0;
        }
    };
}, function id_128_0x80(es_module, es_exports) {

    es_module['exports'] = function (_0x4fffd2) {

        return _0x4fffd2['webpackPolyfill'] || (_0x4fffd2['deprecate'] = function () {}, _0x4fffd2['paths'] = [], _0x4fffd2['children'] || (_0x4fffd2['children'] = []), Object['defineProperty'](_0x4fffd2, 'loaded', {
            'enumerable': !0x0,
            'get': function () {
                return _0x4fffd2['l'];
            }
        }), Object['defineProperty'](_0x4fffd2, 'id', {
            'enumerable': !0x0,
            'get': function () {
                return _0x4fffd2['i'];
            }
        }), _0x4fffd2['webpackPolyfill'] = 0x1), _0x4fffd2;
    };
}, , , , , , , , , , function id_138_0x8a(es_module, es_exports, es_require) {

    es_module['exports'] = es_require(0x36)('native-function-to-string', Function['toString']);
}, function id_139_0x8b(es_module, es_exports, es_require) {
    var _export_33 = es_require(0x21),
        _export_56 = es_require(0x38),
        _export_49 = es_require(0x31);
    es_module['exports'] = function (_0x3ec0d2) {
        var _0x2f7c08 = _export_33(_0x3ec0d2),
            _0x3bab71 = _export_56['f'];
        if (_0x3bab71) {
            for (var _0x3ce27e, _0x465ff2 = _0x3bab71(_0x3ec0d2), _0x423d6e = _export_49['f'], _0x552e85 = 0x0; _0x465ff2['length'] > _0x552e85;) _0x423d6e['call'](_0x3ec0d2, _0x3ce27e = _0x465ff2[_0x552e85++]) && _0x2f7c08['push'](_0x3ce27e);
        }
        return _0x2f7c08;
    };
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function id_279_0x117(es_module, es_exports, es_require) {

    es_require(0x118), es_module['exports'] = es_require(0x9)['Array']['includes'];
}, function id_280_0x118(es_module, es_exports, es_require) {
    'use strict';

    var _export_0 = es_require(0x0),
        _0x43465e = es_require(0x37)(!0x0);
    _export_0(_export_0['P'], 'Array', {
        'includes': function (_0xb285cd) {

            return _0x43465e(this, _0xb285cd, arguments['length'] > 0x1 ? arguments[0x1] : void 0x0);
        }
    }), es_require(0x26)('includes');
}, function id_281_0x119(es_module, es_exports, es_require) {

    es_require(0x11a), es_module['exports'] = es_require(0x9)['Array']['flatMap'];
}, function id_282_0x11a(es_module, es_exports, es_require) {
    'use strict';

    var _export_0 = es_require(0x0),
        _export_283 = es_require(0x11b),
        _export_12 = es_require(0xc),
        _export_8 = es_require(0x8),
        _export_20 = es_require(0x14),
        _export_111 = es_require(0x6f);
    _export_0(_export_0['P'], 'Array', {
        'flatMap': function (_0x2477de) {
            var _0x105606, _0x263024, _0x777788 = _export_12(this);
            return _export_20(_0x2477de), _0x105606 = _export_8(_0x777788['length']), _0x263024 = _export_111(_0x777788, 0x0), _export_283(_0x263024, _0x777788, _0x777788, _0x105606, 0x0, 0x1, _0x2477de, arguments[0x1]), _0x263024;
        }
    }), es_require(0x26)('flatMap');
}, function id_283_0x11b(es_module, es_exports, es_require) {
    'use strict';

    var _export_57 = es_require(0x39),
        _export_5 = es_require(0x5),
        _export_8 = es_require(0x8),
        _export_19 = es_require(0x13),
        _0x5c8d7b = es_require(0x7)('isConcatSpreadable');
    es_module['exports'] = function _0x28bc36(_0x3fd93f, _0xd36af0, _0x2be146, _0x25db1e, _0xb1e852, _0x1d77f1, _0x49dfac, _0x59e4db) {

        for (var _0x322ac1, _0x9c6e63, _0x189d7a = _0xb1e852, _0x370575 = 0x0, _0x2fc221 = !!_0x49dfac && _export_19(_0x49dfac, _0x59e4db, 0x3); _0x370575 < _0x25db1e;) {
            if (_0x370575 in _0x2be146) {
                if (_0x322ac1 = _0x2fc221 ? _0x2fc221(_0x2be146[_0x370575], _0x370575, _0xd36af0) : _0x2be146[_0x370575], _0x9c6e63 = !0x1, _export_5(_0x322ac1) && (_0x9c6e63 = void 0x0 !== (_0x9c6e63 = _0x322ac1[_0x5c8d7b]) ? !!_0x9c6e63 : _export_57(_0x322ac1)), _0x9c6e63 && _0x1d77f1 > 0x0) _0x189d7a = _0x28bc36(_0x3fd93f, _0xd36af0, _0x322ac1, _export_8(_0x322ac1['length']), _0x189d7a, _0x1d77f1 - 0x1) - 0x1;
                else {
                    if (_0x189d7a >= 0x1fffffffffffff) throw TypeError();
                    _0x3fd93f[_0x189d7a] = _0x322ac1;
                }
                _0x189d7a++;
            }
            _0x370575++;
        }
        return _0x189d7a;
    };
}, function id_284_0x11c(es_module, es_exports, es_require) {

    es_require(0x11d), es_module['exports'] = es_require(0x9)['String']['padStart'];
}, function id_285_0x11d(es_module, es_exports, es_require) {
    'use strict';

    var _export_0 = es_require(0x0),
        _export_124 = es_require(0x7c),
        _export_63 = es_require(0x3f),
        _0x125236 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\// ['test'](_export_63);
    _export_0(_export_0['P'] + _export_0['F'] * _0x125236, 'String', {
        'padStart': function (_0x4d01ed) {
            return _export_124(this, _0x4d01ed, arguments['length'] > 0x1 ? arguments[0x1] : void 0x0, !0x0);
        }
    });
}, function id_286_0x11e(es_module, es_exports, es_require) {

    es_require(0x11f), es_module['exports'] = es_require(0x9)['String']['padEnd'];
}, function id_287_0x11f(es_module, es_exports, es_require) {
    'use strict';

    var _export_0 = es_require(0x0),
        _export_124 = es_require(0x7c),
        _export_63 = es_require(0x3f),
        _0x371df3 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\// ['test'](_export_63);
    _export_0(_export_0['P'] + _export_0['F'] * _0x371df3, 'String', {
        'padEnd': function (_0x9a573) {

            return _export_124(this, _0x9a573, arguments['length'] > 0x1 ? arguments[0x1] : void 0x0, !0x1);
        }
    });
}, function id_288_0x120(es_module, es_exports, es_require) {

    es_require(0x121), es_module['exports'] = es_require(0x9)['String']['trimLeft'];
}, function id_289_0x121(es_module, es_exports, es_require) {
    'use strict';

    es_require(0x29)('trimLeft', function (_0x5c26a7) {
        return function () {
            return _0x5c26a7(this, 0x1);
        };
    }, 'trimStart');
}, function id_290_0x122(es_module, es_exports, es_require) {

    es_require(0x123), es_module['exports'] = es_require(0x9)['String']['trimRight'];
}, function id_291_0x123(es_module, es_exports, es_require) {
    'use strict';

    es_require(0x29)('trimRight', function (_0x4346e6) {
        return function () {
            return _0x4346e6(this, 0x2);
        };
    }, 'trimEnd');
}, function id_292_0x124(es_module, es_exports, es_require) {

    es_require(0x125), es_module['exports'] = es_require(0x43)['f']('asyncIterator');
}, function id_293_0x125(es_module, es_exports, es_require) {

    es_require(0x60)('asyncIterator');
}, function id_294_0x126(es_module, es_exports, es_require) {

    es_require(0x127), es_module['exports'] = es_require(0x9)['Object']['getOwnPropertyDescriptors'];
}, function id_295_0x127(es_module, es_exports, es_require) {
    var _export_0 = es_require(0x0),
        _export_123 = es_require(0x7b),
        _export_17 = es_require(0x11),
        _export_22 = es_require(0x16),
        _export_83 = es_require(0x53);
    _export_0(_export_0['S'], 'Object', {
        'getOwnPropertyDescriptors': function (_0x24d612) {

            for (var _0x5871e7, _0x34ac99, _0x5d95ee = _export_17(_0x24d612), _0xb7cea3 = _export_22['f'], _0x4ebc13 = _export_123(_0x5d95ee), _0x17a864 = {}, _0x4385a4 = 0x0; _0x4ebc13['length'] > _0x4385a4;) void 0x0 !== (_0x34ac99 = _0xb7cea3(_0x5d95ee, _0x5871e7 = _0x4ebc13[_0x4385a4++])) && _export_83(_0x17a864, _0x5871e7, _0x34ac99);
            return _0x17a864;
        }
    });
}, function id_296_0x128(es_module, es_exports, es_require) {

    es_require(0x129), es_module['exports'] = es_require(0x9)['Object']['values'];
}, function id_297_0x129(es_module, es_exports, es_require) {
    var _export_0 = es_require(0x0),
        _0xc3d6b7 = es_require(0x7d)(!0x1);
    _export_0(_export_0['S'], 'Object', {
        'values': function (_0x2f1ab1) {
            return _0xc3d6b7(_0x2f1ab1);
        }
    });
}, function id_298_0x12a(es_module, es_exports, es_require) {

    es_require(0x12b), es_module['exports'] = es_require(0x9)['Object']['entries'];
}, function id_299_0x12b(es_module, es_exports, es_require) {
    var _export_0 = es_require(0x0),
        _0xd8b0e6 = es_require(0x7d)(!0x0);
    _export_0(_export_0['S'], 'Object', {
        'entries': function (_0x235de2) {
            return _0xd8b0e6(_0x235de2);
        }
    });
}, function id_300_0x12c(es_module, es_exports, es_require) {
    'use strict';

    es_require(0x75), es_require(0x12d), es_module['exports'] = es_require(0x9)['Promise']['finally'];
}, function id_301_0x12d(es_module, es_exports, es_require) {
    'use strict';

    var _export_0 = es_require(0x0),
        _export_9 = es_require(0x9),
        _export_2 = es_require(0x2),
        _export_51 = es_require(0x33),
        _export_119 = es_require(0x77);
    _export_0(_export_0['P'] + _export_0['R'], 'Promise', {
        'finally': function (_0x55a324) {
            var _0x33427a = _export_51(this, _export_9['Promise'] || _export_2['Promise']),
                _0x20ae44 = 'function' == typeof _0x55a324;
            return this['then'](_0x20ae44 ? function (_0x1503c2) {
                return _export_119(_0x33427a, _0x55a324())['then'](function () {
                    return _0x1503c2;
                });
            } : _0x55a324, _0x20ae44 ? function (_0x55e8a7) {
                return _export_119(_0x33427a, _0x55a324())['then'](function () {
                    throw _0x55e8a7;
                });
            } : _0x55a324);
        }
    });
}, , , , , function id_306_0x132(es_module, es_exports, es_require) {
    console.log(es_module, es_exports);
    var _0x305a18 = function (_0x3950f2) {
        'use strict';

        var _0x526b98, _0x384ea9 = Object['prototype'],
            _0x4bcada = _0x384ea9['hasOwnProperty'],
            _0x2d5dba = 'function' == typeof Symbol ? Symbol : {},
            _0x824ff6 = _0x2d5dba['iterator'] || '@@iterator',
            _0x420f61 = _0x2d5dba['asyncIterator'] || '@@asyncIterator',
            _0x4fd672 = _0x2d5dba['toStringTag'] || '@@toStringTag';

        function _0x138d38(_0x450ec4, _0x23585f, _0x2b1b6c) {

            return Object['defineProperty'](_0x450ec4, _0x23585f, {
                'value': _0x2b1b6c,
                'enumerable': !0x0,
                'configurable': !0x0,
                'writable': !0x0
            }), _0x450ec4[_0x23585f];
        }
        try {
            _0x138d38({}, '');
        } catch (_0x421b96) {
            _0x138d38 = function (_0x177325, _0x3bfe17, _0x533e7e) {
                return _0x177325[_0x3bfe17] = _0x533e7e;
            };
        }

        function _0x548fd1(_0x2e02cd, _0x3b6a79, _0x3ccc9a, _0x4a1873) {
            var _0xfed069 = _0x3b6a79 && _0x3b6a79['prototype'] instanceof _0x2e2271 ? _0x3b6a79 : _0x2e2271,
                _0x4fcadd = Object['create'](_0xfed069['prototype']),
                _0x366708 = new _0x374318(_0x4a1873 || []);
            return _0x4fcadd['_invoke'] = function (_0x196311, _0xce0849, _0x5ebed1) {
                var _0x25bef6 = _0x23dbef;
                return function (_0x23e190, _0x2e57d1) {

                    if (_0x25bef6 === _0x4a0cdb) throw new Error('Generator is already running');
                    if (_0x25bef6 === _0x36c7f1) {
                        if ('throw' === _0x23e190) throw _0x2e57d1;
                        return _0x577987();
                    }
                    for (_0x5ebed1['method'] = _0x23e190, _0x5ebed1['arg'] = _0x2e57d1;;) {
                        var _0x5216e4 = _0x5ebed1['delegate'];
                        if (_0x5216e4) {
                            var _0x145664 = _0x2f8e22(_0x5216e4, _0x5ebed1);
                            if (_0x145664) {
                                if (_0x145664 === _0x5b1b5b) continue;
                                return _0x145664;
                            }
                        }
                        if ('next' === _0x5ebed1['method']) _0x5ebed1['sent'] = _0x5ebed1['_sent'] = _0x5ebed1['arg'];
                        else {
                            if ('throw' === _0x5ebed1['method']) {
                                if (_0x25bef6 === _0x23dbef) throw _0x25bef6 = _0x36c7f1, _0x5ebed1['arg'];
                                _0x5ebed1['dispatchException'](_0x5ebed1['arg']);
                            } else 'return' === _0x5ebed1['method'] && _0x5ebed1['abrupt']('return', _0x5ebed1['arg']);
                        }
                        _0x25bef6 = _0x4a0cdb;
                        var _0x4829c2 = _0x1a14f7(_0x196311, _0xce0849, _0x5ebed1);
                        if ('normal' === _0x4829c2['type']) {
                            if (_0x25bef6 = _0x5ebed1['done'] ? _0x36c7f1 : _0xa2c4b5, _0x4829c2['arg'] === _0x5b1b5b) continue;
                            return {
                                'value': _0x4829c2['arg'],
                                'done': _0x5ebed1['done']
                            };
                        }
                        'throw' === _0x4829c2['type'] && (_0x25bef6 = _0x36c7f1, _0x5ebed1['method'] = 'throw', _0x5ebed1['arg'] = _0x4829c2['arg']);
                    }
                };
            }(_0x2e02cd, _0x3ccc9a, _0x366708), _0x4fcadd;
        }

        function _0x1a14f7(_0x52121a, _0x3530b1, _0xdc3304) {

            try {
                return {
                    'type': 'normal',
                    'arg': _0x52121a['call'](_0x3530b1, _0xdc3304)
                };
            } catch (_0xaf5bd6) {
                return {
                    'type': 'throw',
                    'arg': _0xaf5bd6
                };
            }
        }
        _0x3950f2['wrap'] = _0x548fd1;
        var _0x23dbef = 'suspendedStart',
            _0xa2c4b5 = 'suspendedYield',
            _0x4a0cdb = 'executing',
            _0x36c7f1 = 'completed',
            _0x5b1b5b = {};

        function _0x2e2271() {}

        function _0x3bc4d2() {}

        function _0x31dfb7() {}
        var _0x402331 = {};
        _0x138d38(_0x402331, _0x824ff6, function () {
            return this;
        });
        var _0x2e8c7a = Object['getPrototypeOf'],
            _0x428269 = _0x2e8c7a && _0x2e8c7a(_0x2e8c7a(_0x4eefd1([])));
        _0x428269 && _0x428269 !== _0x384ea9 && _0x4bcada['call'](_0x428269, _0x824ff6) && (_0x402331 = _0x428269);
        var _0x260ee8 = _0x31dfb7['prototype'] = _0x2e2271['prototype'] = Object['create'](_0x402331);

        function _0x26381d(_0x276fcc) {

            ['next', 'throw', 'return']['forEach'](function (_0xa232de) {
                _0x138d38(_0x276fcc, _0xa232de, function (_0x3ce0be) {

                    return this['_invoke'](_0xa232de, _0x3ce0be);
                });
            });
        }

        function _0xc35a3f(_0x292752, _0x832167) {
            var _0x563679;
            this['_invoke'] = function (_0x36ed82, _0x2aabce) {


                function _0x6bf942() {

                    return new _0x832167(function (_0x17f3ea, _0x232f75) {

                        ! function _0x82b37c(_0x476073, _0x47e52b, _0x452070, _0x139336) {
                            var _0x3ff905 = _0x1a14f7(_0x292752[_0x476073], _0x292752, _0x47e52b);
                            if ('throw' !== _0x3ff905['type']) {
                                var _0x178d09 = _0x3ff905['arg'],
                                    _0x3939cd = _0x178d09['value'];
                                return _0x3939cd && 'object' == typeof _0x3939cd && _0x4bcada['call'](_0x3939cd, '__await') ? _0x832167['resolve'](_0x3939cd['__await'])['then'](function (_0x47bd0f) {
                                    _0x82b37c('next', _0x47bd0f, _0x452070, _0x139336);
                                }, function (_0x5ae229) {

                                    _0x82b37c('throw', _0x5ae229, _0x452070, _0x139336);
                                }) : _0x832167['resolve'](_0x3939cd)['then'](function (_0x3aa56a) {

                                    _0x178d09['value'] = _0x3aa56a, _0x452070(_0x178d09);
                                }, function (_0x4004b4) {

                                    return _0x82b37c('throw', _0x4004b4, _0x452070, _0x139336);
                                });
                            }
                            _0x139336(_0x3ff905['arg']);
                        }(_0x36ed82, _0x2aabce, _0x17f3ea, _0x232f75);
                    });
                }
                return _0x563679 = _0x563679 ? _0x563679['then'](_0x6bf942, _0x6bf942) : _0x6bf942();
            };
        }

        function _0x2f8e22(_0x47a3f9, _0x428898) {
            var _0x5dda6f = _0x47a3f9['iterator'][_0x428898['method']];
            if (_0x5dda6f === _0x526b98) {
                if (_0x428898['delegate'] = null, 'throw' === _0x428898['method']) {
                    if (_0x47a3f9['iterator']['return'] && (_0x428898['method'] = 'return', _0x428898['arg'] = _0x526b98, _0x2f8e22(_0x47a3f9, _0x428898), 'throw' === _0x428898['method'])) return _0x5b1b5b;
                    _0x428898['method'] = 'throw', _0x428898['arg'] = new TypeError('The iterator does not provide a \x27throw\x27 method');
                }
                return _0x5b1b5b;
            }
            var _0x44fd38 = _0x1a14f7(_0x5dda6f, _0x47a3f9['iterator'], _0x428898['arg']);
            if ('throw' === _0x44fd38['type']) return _0x428898['method'] = 'throw', _0x428898['arg'] = _0x44fd38['arg'], _0x428898['delegate'] = null, _0x5b1b5b;
            var _0x315737 = _0x44fd38['arg'];
            return _0x315737 ? _0x315737['done'] ? (_0x428898[_0x47a3f9['resultName']] = _0x315737['value'], _0x428898['next'] = _0x47a3f9['nextLoc'], 'return' !== _0x428898['method'] && (_0x428898['method'] = 'next', _0x428898['arg'] = _0x526b98), _0x428898['delegate'] = null, _0x5b1b5b) : _0x315737 : (_0x428898['method'] = 'throw', _0x428898['arg'] = new TypeError('iterator result is not an object'), _0x428898['delegate'] = null, _0x5b1b5b);
        }

        function _0x5863cc(_0xd79a6f) {
            var _0x4ee26f = {
                'tryLoc': _0xd79a6f[0x0]
            };
            0x1 in _0xd79a6f && (_0x4ee26f['catchLoc'] = _0xd79a6f[0x1]), 0x2 in _0xd79a6f && (_0x4ee26f['finallyLoc'] = _0xd79a6f[0x2], _0x4ee26f['afterLoc'] = _0xd79a6f[0x3]), this['tryEntries']['push'](_0x4ee26f);
        }

        function _0x91b1df(_0x5c269e) {
            var _0xcda9af = _0x5c269e['completion'] || {};
            _0xcda9af['type'] = 'normal', delete _0xcda9af['arg'], _0x5c269e['completion'] = _0xcda9af;
        }

        function _0x374318(_0x4a89dd) {

            this['tryEntries'] = [{
                'tryLoc': 'root'
            }], _0x4a89dd['forEach'](_0x5863cc, this), this['reset'](!0x0);
        }

        function _0x4eefd1(_0x209af2) {

            if (_0x209af2) {
                var _0x5b115b = _0x209af2[_0x824ff6];
                if (_0x5b115b) return _0x5b115b['call'](_0x209af2);
                if ('function' == typeof _0x209af2['next']) return _0x209af2;
                if (!isNaN(_0x209af2['length'])) {
                    var _0x281626 = -0x1,
                        _0x3ba3e1 = function _0x28fcd2() {

                            for (; ++_0x281626 < _0x209af2['length'];)
                                if (_0x4bcada['call'](_0x209af2, _0x281626)) return _0x28fcd2['value'] = _0x209af2[_0x281626], _0x28fcd2['done'] = !0x1, _0x28fcd2;
                            return _0x28fcd2['value'] = _0x526b98, _0x28fcd2['done'] = !0x0, _0x28fcd2;
                        };
                    return _0x3ba3e1['next'] = _0x3ba3e1;
                }
            }
            return {
                'next': _0x577987
            };
        }

        function _0x577987() {
            return {
                'value': _0x526b98,
                'done': !0x0
            };
        }
        return _0x3bc4d2['prototype'] = _0x31dfb7, _0x138d38(_0x260ee8, 'constructor', _0x31dfb7), _0x138d38(_0x31dfb7, 'constructor', _0x3bc4d2), _0x3bc4d2['displayName'] = _0x138d38(_0x31dfb7, _0x4fd672, 'GeneratorFunction'), _0x3950f2['isGeneratorFunction'] = function (_0x538200) {
            var _0x4b1d17 = 'function' == typeof _0x538200 && _0x538200['constructor'];
            return !!_0x4b1d17 && (_0x4b1d17 === _0x3bc4d2 || 'GeneratorFunction' === (_0x4b1d17['displayName'] || _0x4b1d17['name']));
        }, _0x3950f2['mark'] = function (_0x4cb4fd) {

            return Object['setPrototypeOf'] ? Object['setPrototypeOf'](_0x4cb4fd, _0x31dfb7) : (_0x4cb4fd['__proto__'] = _0x31dfb7, _0x138d38(_0x4cb4fd, _0x4fd672, 'GeneratorFunction')), _0x4cb4fd['prototype'] = Object['create'](_0x260ee8), _0x4cb4fd;
        }, _0x3950f2['awrap'] = function (_0x56afcb) {
            return {
                '__await': _0x56afcb
            };
        }, _0x26381d(_0xc35a3f['prototype']), _0x138d38(_0xc35a3f['prototype'], _0x420f61, function () {
            return this;
        }), _0x3950f2['AsyncIterator'] = _0xc35a3f, _0x3950f2['async'] = function (_0x59044e, _0x3d089b, _0x3235a0, _0x1274b5, _0x1919f7) {

            void 0x0 === _0x1919f7 && (_0x1919f7 = Promise);
            var _0x291b45 = new _0xc35a3f(_0x548fd1(_0x59044e, _0x3d089b, _0x3235a0, _0x1274b5), _0x1919f7);
            return _0x3950f2['isGeneratorFunction'](_0x3d089b) ? _0x291b45 : _0x291b45['next']()['then'](function (_0x5e44c7) {

                return _0x5e44c7['done'] ? _0x5e44c7['value'] : _0x291b45['next']();
            });
        }, _0x26381d(_0x260ee8), _0x138d38(_0x260ee8, _0x4fd672, 'Generator'), _0x138d38(_0x260ee8, _0x824ff6, function () {
            return this;
        }), _0x138d38(_0x260ee8, 'toString', function () {

            return '[object Generator]';
        }), _0x3950f2['keys'] = function (_0x37b6c6) {
            var _0x27c786 = [];
            for (var _0x26d51b in _0x37b6c6) _0x27c786['push'](_0x26d51b);
            return _0x27c786['reverse'](),
                function _0x1bd402() {

                    for (; _0x27c786['length'];) {
                        var _0x1f0b1f = _0x27c786['pop']();
                        if (_0x1f0b1f in _0x37b6c6) return _0x1bd402['value'] = _0x1f0b1f, _0x1bd402['done'] = !0x1, _0x1bd402;
                    }
                    return _0x1bd402['done'] = !0x0, _0x1bd402;
                };
        }, _0x3950f2['values'] = _0x4eefd1, _0x374318['prototype'] = {
            'constructor': _0x374318,
            'reset': function (_0x12c8a0) {

                if (this['prev'] = 0x0, this['next'] = 0x0, this['sent'] = this['_sent'] = _0x526b98, this['done'] = !0x1, this['delegate'] = null, this['method'] = 'next', this['arg'] = _0x526b98, this['tryEntries']['forEach'](_0x91b1df), !_0x12c8a0) {
                    for (var _0x1eb314 in this) 't' === _0x1eb314['charAt'](0x0) && _0x4bcada['call'](this, _0x1eb314) && !isNaN(+_0x1eb314['slice'](0x1)) && (this[_0x1eb314] = _0x526b98);
                }
            },
            'stop': function () {

                this['done'] = !0x0;
                var _0x13988b = this['tryEntries'][0x0]['completion'];
                if ('throw' === _0x13988b['type']) throw _0x13988b['arg'];
                return this['rval'];
            },
            'dispatchException': function (_0x257f94) {

                if (this['done']) throw _0x257f94;
                var _0x47221a = this;

                function _0x3d637a(_0x568b07, _0x2604a3) {

                    return _0x416299['type'] = 'throw', _0x416299['arg'] = _0x257f94, _0x47221a['next'] = _0x568b07, _0x2604a3 && (_0x47221a['method'] = 'next', _0x47221a['arg'] = _0x526b98), !!_0x2604a3;
                }
                for (var _0x436971 = this['tryEntries']['length'] - 0x1; _0x436971 >= 0x0; --_0x436971) {
                    var _0x14fee = this['tryEntries'][_0x436971],
                        _0x416299 = _0x14fee['completion'];
                    if ('root' === _0x14fee['tryLoc']) return _0x3d637a('end');
                    if (_0x14fee['tryLoc'] <= this['prev']) {
                        var _0x1ef055 = _0x4bcada['call'](_0x14fee, 'catchLoc'),
                            _0x4a6b5f = _0x4bcada['call'](_0x14fee, 'finallyLoc');
                        if (_0x1ef055 && _0x4a6b5f) {
                            if (this['prev'] < _0x14fee['catchLoc']) return _0x3d637a(_0x14fee['catchLoc'], !0x0);
                            if (this['prev'] < _0x14fee['finallyLoc']) return _0x3d637a(_0x14fee['finallyLoc']);
                        } else {
                            if (_0x1ef055) {
                                if (this['prev'] < _0x14fee['catchLoc']) return _0x3d637a(_0x14fee['catchLoc'], !0x0);
                            } else {
                                if (!_0x4a6b5f) throw new Error('try statement without catch or finally');
                                if (this['prev'] < _0x14fee['finallyLoc']) return _0x3d637a(_0x14fee['finallyLoc']);
                            }
                        }
                    }
                }
            },
            'abrupt': function (_0xe1af7, _0x222780) {

                for (var _0x5b87c9 = this['tryEntries']['length'] - 0x1; _0x5b87c9 >= 0x0; --_0x5b87c9) {
                    var _0x1463ce = this['tryEntries'][_0x5b87c9];
                    if (_0x1463ce['tryLoc'] <= this['prev'] && _0x4bcada['call'](_0x1463ce, 'finallyLoc') && this['prev'] < _0x1463ce['finallyLoc']) {
                        var _0x465eef = _0x1463ce;
                        break;
                    }
                }
                _0x465eef && ('break' === _0xe1af7 || 'continue' === _0xe1af7) && _0x465eef['tryLoc'] <= _0x222780 && _0x222780 <= _0x465eef['finallyLoc'] && (_0x465eef = null);
                var _0x2e5878 = _0x465eef ? _0x465eef['completion'] : {};
                return _0x2e5878['type'] = _0xe1af7, _0x2e5878['arg'] = _0x222780, _0x465eef ? (this['method'] = 'next', this['next'] = _0x465eef['finallyLoc'], _0x5b1b5b) : this['complete'](_0x2e5878);
            },
            'complete': function (_0x32a2b8, _0x218d03) {

                if ('throw' === _0x32a2b8['type']) throw _0x32a2b8['arg'];
                return 'break' === _0x32a2b8['type'] || 'continue' === _0x32a2b8['type'] ? this['next'] = _0x32a2b8['arg'] : 'return' === _0x32a2b8['type'] ? (this['rval'] = this['arg'] = _0x32a2b8['arg'], this['method'] = 'return', this['next'] = 'end') : 'normal' === _0x32a2b8['type'] && _0x218d03 && (this['next'] = _0x218d03), _0x5b1b5b;
            },
            'finish': function (_0x17060c) {

                for (var _0x5d259f = this['tryEntries']['length'] - 0x1; _0x5d259f >= 0x0; --_0x5d259f) {
                    var _0xda9c9d = this['tryEntries'][_0x5d259f];
                    if (_0xda9c9d['finallyLoc'] === _0x17060c) return this['complete'](_0xda9c9d['completion'], _0xda9c9d['afterLoc']), _0x91b1df(_0xda9c9d), _0x5b1b5b;
                }
            },
            'catch': function (_0x33b768) {

                for (var _0x2ee9c0 = this['tryEntries']['length'] - 0x1; _0x2ee9c0 >= 0x0; --_0x2ee9c0) {
                    var _0x11793d = this['tryEntries'][_0x2ee9c0];
                    if (_0x11793d['tryLoc'] === _0x33b768) {
                        var _0x2133c7 = _0x11793d['completion'];
                        if ('throw' === _0x2133c7['type']) {
                            var _0x3f5b76 = _0x2133c7['arg'];
                            _0x91b1df(_0x11793d);
                        }
                        return _0x3f5b76;
                    }
                }
                throw new Error('illegal catch attempt');
            },
            'delegateYield': function (_0x4798d0, _0x5c2583, _0x590e23) {

                return this['delegate'] = {
                    'iterator': _0x4eefd1(_0x4798d0),
                    'resultName': _0x5c2583,
                    'nextLoc': _0x590e23
                }, 'next' === this['method'] && (this['arg'] = _0x526b98), _0x5b1b5b;
            }
        }, _0x3950f2;
    }(es_module['exports']);
    try {
        regeneratorRuntime = _0x305a18;
    } catch (_0x5f723a) {
        'object' == typeof globalThis ? globalThis['regeneratorRuntime'] = _0x305a18 : Function('r', 'regeneratorRuntime = r')(_0x305a18);
    }
}, , , , , , , , , , , , , , , , , function id_323_0x143(es_module, es_exports) {

    es_module['exports'] = function (_0x11498a) {
        var _0x3e76a9 = [];
        return _0x3e76a9['toString'] = function () {

            return this['map'](function (_0x1617cf) {
                var _0x23abfc = function (_0x126ead, _0x41e120) {
                    var _0xc9495 = _0x126ead[0x1] || '',
                        _0x5c76b3 = _0x126ead[0x3];
                    if (!_0x5c76b3) return _0xc9495;
                    if (_0x41e120 && 'function' == typeof btoa) {
                        var _0x316902 = (_0x209a74 = _0x5c76b3, '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON['stringify'](_0x209a74)))) + ' */'),
                            _0x2bbbcf = _0x5c76b3['sources']['map'](function (_0x4d8712) {

                                return '/*# sourceURL=' + _0x5c76b3['sourceRoot'] + _0x4d8712 + ' */';
                            });
                        return [_0xc9495]['concat'](_0x2bbbcf)['concat']([_0x316902])['join']('\x0a');
                    }
                    var _0x209a74;
                    return [_0xc9495]['join']('\x0a');
                }(_0x1617cf, _0x11498a);
                return _0x1617cf[0x2] ? '@media ' + _0x1617cf[0x2] + '{' + _0x23abfc + '}' : _0x23abfc;
            })['join']('');
        }, _0x3e76a9['i'] = function (_0x1bda79, _0x3a1111) {

            'string' == typeof _0x1bda79 && (_0x1bda79 = [
                [null, _0x1bda79, '']
            ]);
            for (var _0x2bac1f = {}, _0x4e2917 = 0x0; _0x4e2917 < this['length']; _0x4e2917++) {
                var _0x255109 = this[_0x4e2917][0x0];
                'number' == typeof _0x255109 && (_0x2bac1f[_0x255109] = !0x0);
            }
            for (_0x4e2917 = 0x0; _0x4e2917 < _0x1bda79['length']; _0x4e2917++) {
                var _0x20a15a = _0x1bda79[_0x4e2917];
                'number' == typeof _0x20a15a[0x0] && _0x2bac1f[_0x20a15a[0x0]] || (_0x3a1111 && !_0x20a15a[0x2] ? _0x20a15a[0x2] = _0x3a1111 : _0x3a1111 && (_0x20a15a[0x2] = '(' + _0x20a15a[0x2] + ') and (' + _0x3a1111 + ')'), _0x3e76a9['push'](_0x20a15a));
            }
        }, _0x3e76a9;
    };
}, function id_324_0x144(es_module, es_exports, es_require) {
    console.log(es_module, 'block css');
    es_module['exports'] = () => {};
    return;
    /**
     * block css
     */
}, function id_325_0x145(es_module, es_exports) {

    es_module['exports'] = function (_0x23ec8e) {
        var _0x1d72de = 'undefined' != typeof window && window['location'];
        if (!_0x1d72de) throw new Error('fixUrls requires window.location');
        if (!_0x23ec8e || 'string' != typeof _0x23ec8e) return _0x23ec8e;
        var _0x2e1978 = _0x1d72de['protocol'] + '//' + _0x1d72de['host'],
            _0x86730a = _0x2e1978 + _0x1d72de['pathname']['replace'](/\/[^\/]*$/, '/');
        return _0x23ec8e['replace'](/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (_0x1df2b3, _0x5c7c11) {
            var _0x1d2756, _0x4e974c = _0x5c7c11['trim']()['replace'](/^"(.*)"$/, function (_0x3139bb, _0x34fba6) {
                return _0x34fba6;
            })['replace'](/^'(.*)'$/, function (_0x5e9cc9, _0x1e2f5d) {
                return _0x1e2f5d;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i ['test'](_0x4e974c) ? _0x1df2b3 : (_0x1d2756 = 0x0 === _0x4e974c['indexOf']('//') ? _0x4e974c : 0x0 === _0x4e974c['indexOf']('/') ? _0x2e1978 + _0x4e974c : _0x86730a + _0x4e974c['replace'](/^\.\//, ''), 'url(' + JSON['stringify'](_0x1d2756) + ')');
        });
    };
}, function id_326_0x146(es_module, es_exports, es_require) {
    'use strict';

    (function (_0x2f3bab) {
        var _export_327 = es_require(0x147),
            _export_328 = es_require(0x148),
            _export_329 = es_require(0x149);

        function _0x34f3cd() {

            return _0x10ab18['TYPED_ARRAY_SUPPORT'] ? 0x7fffffff : 0x3fffffff;
        }

        function _0x5b2d81(_0x1eac07, _0x14b137) {

            if (_0x34f3cd() < _0x14b137) throw new RangeError('Invalid typed array length');
            return _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (_0x1eac07 = new Uint8Array(_0x14b137))['__proto__'] = _0x10ab18['prototype'] : (null === _0x1eac07 && (_0x1eac07 = new _0x10ab18(_0x14b137)), _0x1eac07['length'] = _0x14b137), _0x1eac07;
        }

        function _0x10ab18(_0x32a5b8, _0x3008e4, _0x2c3756) {

            if (!(_0x10ab18['TYPED_ARRAY_SUPPORT'] || this instanceof _0x10ab18)) return new _0x10ab18(_0x32a5b8, _0x3008e4, _0x2c3756);
            if ('number' == typeof _0x32a5b8) {
                if ('string' == typeof _0x3008e4) throw new Error('If encoding is specified then the first argument must be a string');
                return _0x3ed8b4(this, _0x32a5b8);
            }
            return _0x478e20(this, _0x32a5b8, _0x3008e4, _0x2c3756);
        }

        function _0x478e20(_0xbd4e92, _0x2bff68, _0x34cc9c, _0x2556a4) {

            if ('number' == typeof _0x2bff68) throw new TypeError('"value" argument must not be a number');
            return 'undefined' != typeof ArrayBuffer && _0x2bff68 instanceof ArrayBuffer ? function (_0x866d0c, _0x32dfb4, _0x5cf8d3, _0x5dfb6e) {

                if (_0x32dfb4['byteLength'], _0x5cf8d3 < 0x0 || _0x32dfb4['byteLength'] < _0x5cf8d3) throw new RangeError('\x27offset\x27 is out of bounds');
                if (_0x32dfb4['byteLength'] < _0x5cf8d3 + (_0x5dfb6e || 0x0)) throw new RangeError('\x27length\x27 is out of bounds');
                return _0x32dfb4 = void 0x0 === _0x5cf8d3 && void 0x0 === _0x5dfb6e ? new Uint8Array(_0x32dfb4) : void 0x0 === _0x5dfb6e ? new Uint8Array(_0x32dfb4, _0x5cf8d3) : new Uint8Array(_0x32dfb4, _0x5cf8d3, _0x5dfb6e), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (_0x866d0c = _0x32dfb4)['__proto__'] = _0x10ab18['prototype'] : _0x866d0c = _0x52c6fb(_0x866d0c, _0x32dfb4), _0x866d0c;
            }(_0xbd4e92, _0x2bff68, _0x34cc9c, _0x2556a4) : 'string' == typeof _0x2bff68 ? function (_0x166f21, _0x313bb1, _0x2ddc19) {

                'string' == typeof _0x2ddc19 && '' !== _0x2ddc19 || (_0x2ddc19 = 'utf8');
                if (!_0x10ab18['isEncoding'](_0x2ddc19)) throw new TypeError('"encoding" must be a valid string encoding');
                var _0xa7c72a = 0x0 | _0xd0c02(_0x313bb1, _0x2ddc19),
                    _0x531eff = (_0x166f21 = _0x5b2d81(_0x166f21, _0xa7c72a))['write'](_0x313bb1, _0x2ddc19);
                return _0x531eff !== _0xa7c72a && (_0x166f21 = _0x166f21['slice'](0x0, _0x531eff)), _0x166f21;
            }(_0xbd4e92, _0x2bff68, _0x34cc9c) : function (_0x429817, _0x3c357b) {

                if (_0x10ab18['isBuffer'](_0x3c357b)) {
                    var _0x33b5ac = 0x0 | _0x15bff3(_0x3c357b['length']);
                    return 0x0 === (_0x429817 = _0x5b2d81(_0x429817, _0x33b5ac))['length'] ? _0x429817 : (_0x3c357b['copy'](_0x429817, 0x0, 0x0, _0x33b5ac), _0x429817);
                }
                if (_0x3c357b) {
                    if ('undefined' != typeof ArrayBuffer && _0x3c357b['buffer'] instanceof ArrayBuffer || 'length' in _0x3c357b) return 'number' != typeof _0x3c357b['length'] || (_0x12af58 = _0x3c357b['length']) != _0x12af58 ? _0x5b2d81(_0x429817, 0x0) : _0x52c6fb(_0x429817, _0x3c357b);
                    if ('Buffer' === _0x3c357b['type'] && _export_329(_0x3c357b['data'])) return _0x52c6fb(_0x429817, _0x3c357b['data']);
                }
                var _0x12af58;
                throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
            }(_0xbd4e92, _0x2bff68);
        }

        function _0x1e99c5(_0x2be469) {

            if ('number' != typeof _0x2be469) throw new TypeError('"size" argument must be a number');
            if (_0x2be469 < 0x0) throw new RangeError('"size" argument must not be negative');
        }

        function _0x3ed8b4(_0x4a8511, _0x29ae5c) {

            if (_0x1e99c5(_0x29ae5c), _0x4a8511 = _0x5b2d81(_0x4a8511, _0x29ae5c < 0x0 ? 0x0 : 0x0 | _0x15bff3(_0x29ae5c)), !_0x10ab18['TYPED_ARRAY_SUPPORT']) {
                for (var _0x365105 = 0x0; _0x365105 < _0x29ae5c; ++_0x365105) _0x4a8511[_0x365105] = 0x0;
            }
            return _0x4a8511;
        }

        function _0x52c6fb(_0x1571fa, _0x25ffee) {
            var _0x40c179 = _0x25ffee['length'] < 0x0 ? 0x0 : 0x0 | _0x15bff3(_0x25ffee['length']);
            _0x1571fa = _0x5b2d81(_0x1571fa, _0x40c179);
            for (var _0x4d2dae = 0x0; _0x4d2dae < _0x40c179; _0x4d2dae += 0x1) _0x1571fa[_0x4d2dae] = 0xff & _0x25ffee[_0x4d2dae];
            return _0x1571fa;
        }

        function _0x15bff3(_0x2f1d84) {

            if (_0x2f1d84 >= _0x34f3cd()) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + _0x34f3cd()['toString'](0x10) + ' bytes');
            return 0x0 | _0x2f1d84;
        }

        function _0xd0c02(_0x152b6c, _0x3d4a24) {

            if (_0x10ab18['isBuffer'](_0x152b6c)) return _0x152b6c['length'];
            if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer['isView'] && (ArrayBuffer['isView'](_0x152b6c) || _0x152b6c instanceof ArrayBuffer)) return _0x152b6c['byteLength'];
            'string' != typeof _0x152b6c && (_0x152b6c = '' + _0x152b6c);
            var _0x54defd = _0x152b6c['length'];
            if (0x0 === _0x54defd) return 0x0;
            for (var _0x5a0f6c = !0x1;;) switch (_0x3d4a24) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                    return _0x54defd;
                case 'utf8':
                case 'utf-8':
                case void 0x0:
                    return _0x1f6f9c(_0x152b6c)['length'];
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return 0x2 * _0x54defd;
                case 'hex':
                    return _0x54defd >>> 0x1;
                case 'base64':
                    return _0xa1e0c9(_0x152b6c)['length'];
                default:
                    if (_0x5a0f6c) return _0x1f6f9c(_0x152b6c)['length'];
                    _0x3d4a24 = ('' + _0x3d4a24)['toLowerCase'](), _0x5a0f6c = !0x0;
            }
        }

        function _0x32f44f(_0x24a0f5, _0x2a68e5, _0x3596a5) {
            var _0x51e0f3 = !0x1;
            if ((void 0x0 === _0x2a68e5 || _0x2a68e5 < 0x0) && (_0x2a68e5 = 0x0), _0x2a68e5 > this['length']) return '';
            if ((void 0x0 === _0x3596a5 || _0x3596a5 > this['length']) && (_0x3596a5 = this['length']), _0x3596a5 <= 0x0) return '';
            if ((_0x3596a5 >>>= 0x0) <= (_0x2a68e5 >>>= 0x0)) return '';
            for (_0x24a0f5 || (_0x24a0f5 = 'utf8');;) switch (_0x24a0f5) {
                case 'hex':
                    return _0x2597be(this, _0x2a68e5, _0x3596a5);
                case 'utf8':
                case 'utf-8':
                    return _0x1aed34(this, _0x2a68e5, _0x3596a5);
                case 'ascii':
                    return _0x5af474(this, _0x2a68e5, _0x3596a5);
                case 'latin1':
                case 'binary':
                    return _0x4a844d(this, _0x2a68e5, _0x3596a5);
                case 'base64':
                    return _0x928a62(this, _0x2a68e5, _0x3596a5);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return _0x2db623(this, _0x2a68e5, _0x3596a5);
                default:
                    if (_0x51e0f3) throw new TypeError('Unknown encoding: ' + _0x24a0f5);
                    _0x24a0f5 = (_0x24a0f5 + '')['toLowerCase'](), _0x51e0f3 = !0x0;
            }
        }

        function _0x1441f5(_0x8a7be2, _0x452a1f, _0x488a59) {
            var _0x414d9b = _0x8a7be2[_0x452a1f];
            _0x8a7be2[_0x452a1f] = _0x8a7be2[_0x488a59], _0x8a7be2[_0x488a59] = _0x414d9b;
        }

        function _0x1bc7b8(_0x4d91a7, _0x3f6195, _0x187bc1, _0x432a6f, _0x139987) {

            if (0x0 === _0x4d91a7['length']) return -0x1;
            if ('string' == typeof _0x187bc1 ? (_0x432a6f = _0x187bc1, _0x187bc1 = 0x0) : _0x187bc1 > 0x7fffffff ? _0x187bc1 = 0x7fffffff : _0x187bc1 < -0x80000000 && (_0x187bc1 = -0x80000000), _0x187bc1 = +_0x187bc1, isNaN(_0x187bc1) && (_0x187bc1 = _0x139987 ? 0x0 : _0x4d91a7['length'] - 0x1), _0x187bc1 < 0x0 && (_0x187bc1 = _0x4d91a7['length'] + _0x187bc1), _0x187bc1 >= _0x4d91a7['length']) {
                if (_0x139987) return -0x1;
                _0x187bc1 = _0x4d91a7['length'] - 0x1;
            } else {
                if (_0x187bc1 < 0x0) {
                    if (!_0x139987) return -0x1;
                    _0x187bc1 = 0x0;
                }
            }
            if ('string' == typeof _0x3f6195 && (_0x3f6195 = _0x10ab18['from'](_0x3f6195, _0x432a6f)), _0x10ab18['isBuffer'](_0x3f6195)) return 0x0 === _0x3f6195['length'] ? -0x1 : _0x5ab2e2(_0x4d91a7, _0x3f6195, _0x187bc1, _0x432a6f, _0x139987);
            if ('number' == typeof _0x3f6195) return _0x3f6195 &= 0xff, _0x10ab18['TYPED_ARRAY_SUPPORT'] && 'function' == typeof Uint8Array['prototype']['indexOf'] ? _0x139987 ? Uint8Array['prototype']['indexOf']['call'](_0x4d91a7, _0x3f6195, _0x187bc1) : Uint8Array['prototype']['lastIndexOf']['call'](_0x4d91a7, _0x3f6195, _0x187bc1) : _0x5ab2e2(_0x4d91a7, [_0x3f6195], _0x187bc1, _0x432a6f, _0x139987);
            throw new TypeError('val must be string, number or Buffer');
        }

        function _0x5ab2e2(_0x4c91d9, _0x472c9b, _0x11b608, _0x510bc2, _0x838884) {
            var _0x5301e5, _0x358412 = 0x1,
                _0x15a45d = _0x4c91d9['length'],
                _0x1da414 = _0x472c9b['length'];
            if (void 0x0 !== _0x510bc2 && ('ucs2' === (_0x510bc2 = String(_0x510bc2)['toLowerCase']()) || 'ucs-2' === _0x510bc2 || 'utf16le' === _0x510bc2 || 'utf-16le' === _0x510bc2)) {
                if (_0x4c91d9['length'] < 0x2 || _0x472c9b['length'] < 0x2) return -0x1;
                _0x358412 = 0x2, _0x15a45d /= 0x2, _0x1da414 /= 0x2, _0x11b608 /= 0x2;
            }

            function _0x37e811(_0x11a0b4, _0x1b76e1) {

                return 0x1 === _0x358412 ? _0x11a0b4[_0x1b76e1] : _0x11a0b4['readUInt16BE'](_0x1b76e1 * _0x358412);
            }
            if (_0x838884) {
                var _0xa05f6 = -0x1;
                for (_0x5301e5 = _0x11b608; _0x5301e5 < _0x15a45d; _0x5301e5++)
                    if (_0x37e811(_0x4c91d9, _0x5301e5) === _0x37e811(_0x472c9b, -0x1 === _0xa05f6 ? 0x0 : _0x5301e5 - _0xa05f6)) {
                        if (-0x1 === _0xa05f6 && (_0xa05f6 = _0x5301e5), _0x5301e5 - _0xa05f6 + 0x1 === _0x1da414) return _0xa05f6 * _0x358412;
                    } else -0x1 !== _0xa05f6 && (_0x5301e5 -= _0x5301e5 - _0xa05f6), _0xa05f6 = -0x1;
            } else
                for (_0x11b608 + _0x1da414 > _0x15a45d && (_0x11b608 = _0x15a45d - _0x1da414), _0x5301e5 = _0x11b608; _0x5301e5 >= 0x0; _0x5301e5--) {
                    for (var _0x4225a4 = !0x0, _0x4236a9 = 0x0; _0x4236a9 < _0x1da414; _0x4236a9++)
                        if (_0x37e811(_0x4c91d9, _0x5301e5 + _0x4236a9) !== _0x37e811(_0x472c9b, _0x4236a9)) {
                            _0x4225a4 = !0x1;
                            break;
                        } if (_0x4225a4) return _0x5301e5;
                }
            return -0x1;
        }

        function _0x110e30(_0x1b656, _0x4fed00, _0xe16e7, _0x4a22a7) {

            _0xe16e7 = Number(_0xe16e7) || 0x0;
            var _0x3c587f = _0x1b656['length'] - _0xe16e7;
            _0x4a22a7 ? (_0x4a22a7 = Number(_0x4a22a7)) > _0x3c587f && (_0x4a22a7 = _0x3c587f) : _0x4a22a7 = _0x3c587f;
            var _0xb72e5e = _0x4fed00['length'];
            if (_0xb72e5e % 0x2 != 0x0) throw new TypeError('Invalid hex string');
            _0x4a22a7 > _0xb72e5e / 0x2 && (_0x4a22a7 = _0xb72e5e / 0x2);
            for (var _0x3c0777 = 0x0; _0x3c0777 < _0x4a22a7; ++_0x3c0777) {
                var _0x1dc0d8 = parseInt(_0x4fed00['substr'](0x2 * _0x3c0777, 0x2), 0x10);
                if (isNaN(_0x1dc0d8)) return _0x3c0777;
                _0x1b656[_0xe16e7 + _0x3c0777] = _0x1dc0d8;
            }
            return _0x3c0777;
        }

        function _0x45e86b(_0x9060dd, _0x3f7619, _0xebe788, _0xce7d3b) {

            return _0x1113fe(_0x1f6f9c(_0x3f7619, _0x9060dd['length'] - _0xebe788), _0x9060dd, _0xebe788, _0xce7d3b);
        }

        function _0x24f1c8(_0x3b361a, _0x4b3b16, _0x173dc9, _0x4a680b) {
            return _0x1113fe(function (_0x24e991) {

                for (var _0x4bdb37 = [], _0x313292 = 0x0; _0x313292 < _0x24e991['length']; ++_0x313292) _0x4bdb37['push'](0xff & _0x24e991['charCodeAt'](_0x313292));
                return _0x4bdb37;
            }(_0x4b3b16), _0x3b361a, _0x173dc9, _0x4a680b);
        }

        function _0x36aacd(_0x12c192, _0x3ac53a, _0x245489, _0x35a60c) {
            return _0x24f1c8(_0x12c192, _0x3ac53a, _0x245489, _0x35a60c);
        }

        function _0x49784e(_0x79638c, _0x5a15a5, _0x218e60, _0x4f48f0) {
            return _0x1113fe(_0xa1e0c9(_0x5a15a5), _0x79638c, _0x218e60, _0x4f48f0);
        }

        function _0x2213c5(_0x491ee5, _0x5cdf7f, _0x5ee4bc, _0x4559c4) {

            return _0x1113fe(function (_0x3e1a08, _0x5cc236) {

                for (var _0x456319, _0x52c657, _0x24416d, _0x1c8225 = [], _0x4c25ce = 0x0; _0x4c25ce < _0x3e1a08['length'] && !((_0x5cc236 -= 0x2) < 0x0); ++_0x4c25ce) _0x456319 = _0x3e1a08['charCodeAt'](_0x4c25ce), _0x52c657 = _0x456319 >> 0x8, _0x24416d = _0x456319 % 0x100, _0x1c8225['push'](_0x24416d), _0x1c8225['push'](_0x52c657);
                return _0x1c8225;
            }(_0x5cdf7f, _0x491ee5['length'] - _0x5ee4bc), _0x491ee5, _0x5ee4bc, _0x4559c4);
        }

        function _0x928a62(_0x46e8f7, _0x342328, _0x2d702d) {

            return 0x0 === _0x342328 && _0x2d702d === _0x46e8f7['length'] ? _export_327['fromByteArray'](_0x46e8f7) : _export_327['fromByteArray'](_0x46e8f7['slice'](_0x342328, _0x2d702d));
        }

        function _0x1aed34(_0x1e5d07, _0x4d697b, _0x23d19c) {

            _0x23d19c = Math['min'](_0x1e5d07['length'], _0x23d19c);
            for (var _0x108dcc = [], _0x179882 = _0x4d697b; _0x179882 < _0x23d19c;) {
                var _0x132c2e, _0x214089, _0x53841a, _0x395230, _0x27fafd = _0x1e5d07[_0x179882],
                    _0x57e18d = null,
                    _0x570ba9 = _0x27fafd > 0xef ? 0x4 : _0x27fafd > 0xdf ? 0x3 : _0x27fafd > 0xbf ? 0x2 : 0x1;
                if (_0x179882 + _0x570ba9 <= _0x23d19c) switch (_0x570ba9) {
                    case 0x1:
                        _0x27fafd < 0x80 && (_0x57e18d = _0x27fafd);
                        break;
                    case 0x2:
                        0x80 == (0xc0 & (_0x132c2e = _0x1e5d07[_0x179882 + 0x1])) && (_0x395230 = (0x1f & _0x27fafd) << 0x6 | 0x3f & _0x132c2e) > 0x7f && (_0x57e18d = _0x395230);
                        break;
                    case 0x3:
                        _0x132c2e = _0x1e5d07[_0x179882 + 0x1], _0x214089 = _0x1e5d07[_0x179882 + 0x2], 0x80 == (0xc0 & _0x132c2e) && 0x80 == (0xc0 & _0x214089) && (_0x395230 = (0xf & _0x27fafd) << 0xc | (0x3f & _0x132c2e) << 0x6 | 0x3f & _0x214089) > 0x7ff && (_0x395230 < 0xd800 || _0x395230 > 0xdfff) && (_0x57e18d = _0x395230);
                        break;
                    case 0x4:
                        _0x132c2e = _0x1e5d07[_0x179882 + 0x1], _0x214089 = _0x1e5d07[_0x179882 + 0x2], _0x53841a = _0x1e5d07[_0x179882 + 0x3], 0x80 == (0xc0 & _0x132c2e) && 0x80 == (0xc0 & _0x214089) && 0x80 == (0xc0 & _0x53841a) && (_0x395230 = (0xf & _0x27fafd) << 0x12 | (0x3f & _0x132c2e) << 0xc | (0x3f & _0x214089) << 0x6 | 0x3f & _0x53841a) > 0xffff && _0x395230 < 0x110000 && (_0x57e18d = _0x395230);
                }
                null === _0x57e18d ? (_0x57e18d = 0xfffd, _0x570ba9 = 0x1) : _0x57e18d > 0xffff && (_0x57e18d -= 0x10000, _0x108dcc['push'](_0x57e18d >>> 0xa & 0x3ff | 0xd800), _0x57e18d = 0xdc00 | 0x3ff & _0x57e18d), _0x108dcc['push'](_0x57e18d), _0x179882 += _0x570ba9;
            }
            return function (_0x185077) {
                var _0x3fd2ed = _0x185077['length'];
                if (_0x3fd2ed <= _0xa8d045) return String['fromCharCode']['apply'](String, _0x185077);
                var _0x3dbd81 = '',
                    _0x1cafab = 0x0;
                for (; _0x1cafab < _0x3fd2ed;) _0x3dbd81 += String['fromCharCode']['apply'](String, _0x185077['slice'](_0x1cafab, _0x1cafab += _0xa8d045));
                return _0x3dbd81;
            }(_0x108dcc);
        }
        es_exports['Buffer'] = _0x10ab18, es_exports['SlowBuffer'] = function (_0x1a60f2) {

            return +_0x1a60f2 != _0x1a60f2 && (_0x1a60f2 = 0x0), _0x10ab18['alloc'](+_0x1a60f2);
        }, es_exports['INSPECT_MAX_BYTES'] = 0x32, _0x10ab18['TYPED_ARRAY_SUPPORT'] = void 0x0 !== _0x2f3bab['TYPED_ARRAY_SUPPORT'] ? _0x2f3bab['TYPED_ARRAY_SUPPORT'] : (function () {

            try {
                var _0x4d10b2 = new Uint8Array(0x1);
                return _0x4d10b2['__proto__'] = {
                    '__proto__': Uint8Array['prototype'],
                    'foo': function () {
                        return 0x2a;
                    }
                }, 0x2a === _0x4d10b2['foo']() && 'function' == typeof _0x4d10b2['subarray'] && 0x0 === _0x4d10b2['subarray'](0x1, 0x1)['byteLength'];
            } catch (_0x2b2968) {
                return !0x1;
            }
        }()), es_exports['kMaxLength'] = _0x34f3cd(), _0x10ab18['poolSize'] = 0x2000, _0x10ab18['_augment'] = function (_0x48f144) {

            return _0x48f144['__proto__'] = _0x10ab18['prototype'], _0x48f144;
        }, _0x10ab18['from'] = function (_0x3a88a4, _0xc3ec64, _0x32df67) {
            return _0x478e20(null, _0x3a88a4, _0xc3ec64, _0x32df67);
        }, _0x10ab18['TYPED_ARRAY_SUPPORT'] && (_0x10ab18['prototype']['__proto__'] = Uint8Array['prototype'], _0x10ab18['__proto__'] = Uint8Array, 'undefined' != typeof Symbol && Symbol['species'] && _0x10ab18[Symbol['species']] === _0x10ab18 && Object['defineProperty'](_0x10ab18, Symbol['species'], {
            'value': null,
            'configurable': !0x0
        })), _0x10ab18['alloc'] = function (_0x3651bb, _0x227989, _0x25c9c5) {

            return function (_0x14b690, _0x10dc3c, _0x15b161, _0xf2153c) {

                return _0x1e99c5(_0x10dc3c), _0x10dc3c <= 0x0 ? _0x5b2d81(_0x14b690, _0x10dc3c) : void 0x0 !== _0x15b161 ? 'string' == typeof _0xf2153c ? _0x5b2d81(_0x14b690, _0x10dc3c)['fill'](_0x15b161, _0xf2153c) : _0x5b2d81(_0x14b690, _0x10dc3c)['fill'](_0x15b161) : _0x5b2d81(_0x14b690, _0x10dc3c);
            }(null, _0x3651bb, _0x227989, _0x25c9c5);
        }, _0x10ab18['allocUnsafe'] = function (_0x15e1d4) {
            return _0x3ed8b4(null, _0x15e1d4);
        }, _0x10ab18['allocUnsafeSlow'] = function (_0x2ea7c9) {
            return _0x3ed8b4(null, _0x2ea7c9);
        }, _0x10ab18['isBuffer'] = function (_0x25ca41) {

            return !(null == _0x25ca41 || !_0x25ca41['_isBuffer']);
        }, _0x10ab18['compare'] = function (_0x48efad, _0x128e96) {

            if (!_0x10ab18['isBuffer'](_0x48efad) || !_0x10ab18['isBuffer'](_0x128e96)) throw new TypeError('Arguments must be Buffers');
            if (_0x48efad === _0x128e96) return 0x0;
            for (var _0x19ddc8 = _0x48efad['length'], _0xc7aad7 = _0x128e96['length'], _0x42c6b4 = 0x0, _0x3f57e0 = Math['min'](_0x19ddc8, _0xc7aad7); _0x42c6b4 < _0x3f57e0; ++_0x42c6b4)
                if (_0x48efad[_0x42c6b4] !== _0x128e96[_0x42c6b4]) {
                    _0x19ddc8 = _0x48efad[_0x42c6b4], _0xc7aad7 = _0x128e96[_0x42c6b4];
                    break;
                } return _0x19ddc8 < _0xc7aad7 ? -0x1 : _0xc7aad7 < _0x19ddc8 ? 0x1 : 0x0;
        }, _0x10ab18['isEncoding'] = function (_0x1419a4) {

            switch (String(_0x1419a4)['toLowerCase']()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return !0x0;
                default:
                    return !0x1;
            }
        }, _0x10ab18['concat'] = function (_0x54e074, _0x3a1371) {

            if (!_export_329(_0x54e074)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0x0 === _0x54e074['length']) return _0x10ab18['alloc'](0x0);
            var _0x4ec3f9;
            if (void 0x0 === _0x3a1371) {
                for (_0x3a1371 = 0x0, _0x4ec3f9 = 0x0; _0x4ec3f9 < _0x54e074['length']; ++_0x4ec3f9) _0x3a1371 += _0x54e074[_0x4ec3f9]['length'];
            }
            var _0x4cadce = _0x10ab18['allocUnsafe'](_0x3a1371),
                _0x501aee = 0x0;
            for (_0x4ec3f9 = 0x0; _0x4ec3f9 < _0x54e074['length']; ++_0x4ec3f9) {
                var _0x3f6272 = _0x54e074[_0x4ec3f9];
                if (!_0x10ab18['isBuffer'](_0x3f6272)) throw new TypeError('"list" argument must be an Array of Buffers');
                _0x3f6272['copy'](_0x4cadce, _0x501aee), _0x501aee += _0x3f6272['length'];
            }
            return _0x4cadce;
        }, _0x10ab18['byteLength'] = _0xd0c02, _0x10ab18['prototype']['_isBuffer'] = !0x0, _0x10ab18['prototype']['swap16'] = function () {
            var _0x13494a = this['length'];
            if (_0x13494a % 0x2 != 0x0) throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (var _0x1f43a0 = 0x0; _0x1f43a0 < _0x13494a; _0x1f43a0 += 0x2) _0x1441f5(this, _0x1f43a0, _0x1f43a0 + 0x1);
            return this;
        }, _0x10ab18['prototype']['swap32'] = function () {
            var _0x57f5ac = this['length'];
            if (_0x57f5ac % 0x4 != 0x0) throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var _0x61d0ae = 0x0; _0x61d0ae < _0x57f5ac; _0x61d0ae += 0x4) _0x1441f5(this, _0x61d0ae, _0x61d0ae + 0x3), _0x1441f5(this, _0x61d0ae + 0x1, _0x61d0ae + 0x2);
            return this;
        }, _0x10ab18['prototype']['swap64'] = function () {
            var _0x2d4e0c = this['length'];
            if (_0x2d4e0c % 0x8 != 0x0) throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var _0x417ccf = 0x0; _0x417ccf < _0x2d4e0c; _0x417ccf += 0x8) _0x1441f5(this, _0x417ccf, _0x417ccf + 0x7), _0x1441f5(this, _0x417ccf + 0x1, _0x417ccf + 0x6), _0x1441f5(this, _0x417ccf + 0x2, _0x417ccf + 0x5), _0x1441f5(this, _0x417ccf + 0x3, _0x417ccf + 0x4);
            return this;
        }, _0x10ab18['prototype']['toString'] = function () {
            var _0x250ade = 0x0 | this['length'];
            return 0x0 === _0x250ade ? '' : 0x0 === arguments['length'] ? _0x1aed34(this, 0x0, _0x250ade) : _0x32f44f['apply'](this, arguments);
        }, _0x10ab18['prototype']['equals'] = function (_0xcd4391) {

            if (!_0x10ab18['isBuffer'](_0xcd4391)) throw new TypeError('Argument must be a Buffer');
            return this === _0xcd4391 || 0x0 === _0x10ab18['compare'](this, _0xcd4391);
        }, _0x10ab18['prototype']['inspect'] = function () {
            var _0x3fb11b = '',
                _0xb8aec2 = es_exports['INSPECT_MAX_BYTES'];
            return this['length'] > 0x0 && (_0x3fb11b = this['toString']('hex', 0x0, _0xb8aec2)['match'](/.{2}/g)['join'](' '), this['length'] > _0xb8aec2 && (_0x3fb11b += ' ... ')), '<Buffer ' + _0x3fb11b + '>';
        }, _0x10ab18['prototype']['compare'] = function (_0x20df5c, _0x502375, _0x396f6a, _0x4c3174, _0x2b2311) {

            if (!_0x10ab18['isBuffer'](_0x20df5c)) throw new TypeError('Argument must be a Buffer');
            if (void 0x0 === _0x502375 && (_0x502375 = 0x0), void 0x0 === _0x396f6a && (_0x396f6a = _0x20df5c ? _0x20df5c['length'] : 0x0), void 0x0 === _0x4c3174 && (_0x4c3174 = 0x0), void 0x0 === _0x2b2311 && (_0x2b2311 = this['length']), _0x502375 < 0x0 || _0x396f6a > _0x20df5c['length'] || _0x4c3174 < 0x0 || _0x2b2311 > this['length']) throw new RangeError('out of range index');
            if (_0x4c3174 >= _0x2b2311 && _0x502375 >= _0x396f6a) return 0x0;
            if (_0x4c3174 >= _0x2b2311) return -0x1;
            if (_0x502375 >= _0x396f6a) return 0x1;
            if (this === _0x20df5c) return 0x0;
            for (var _0x516813 = (_0x2b2311 >>>= 0x0) - (_0x4c3174 >>>= 0x0), _0x510afc = (_0x396f6a >>>= 0x0) - (_0x502375 >>>= 0x0), _0x25a0e8 = Math['min'](_0x516813, _0x510afc), _0x427d2a = this['slice'](_0x4c3174, _0x2b2311), _0x4cc582 = _0x20df5c['slice'](_0x502375, _0x396f6a), _0x1441bf = 0x0; _0x1441bf < _0x25a0e8; ++_0x1441bf)
                if (_0x427d2a[_0x1441bf] !== _0x4cc582[_0x1441bf]) {
                    _0x516813 = _0x427d2a[_0x1441bf], _0x510afc = _0x4cc582[_0x1441bf];
                    break;
                } return _0x516813 < _0x510afc ? -0x1 : _0x510afc < _0x516813 ? 0x1 : 0x0;
        }, _0x10ab18['prototype']['includes'] = function (_0x43b200, _0x289128, _0x5b0315) {

            return -0x1 !== this['indexOf'](_0x43b200, _0x289128, _0x5b0315);
        }, _0x10ab18['prototype']['indexOf'] = function (_0x5a0ccd, _0x844bd2, _0x5db7b6) {
            return _0x1bc7b8(this, _0x5a0ccd, _0x844bd2, _0x5db7b6, !0x0);
        }, _0x10ab18['prototype']['lastIndexOf'] = function (_0x1aed96, _0x5a4388, _0x12aa6e) {
            return _0x1bc7b8(this, _0x1aed96, _0x5a4388, _0x12aa6e, !0x1);
        }, _0x10ab18['prototype']['write'] = function (_0x313380, _0x3c04ca, _0x40d5ff, _0x459f40) {

            if (void 0x0 === _0x3c04ca) _0x459f40 = 'utf8', _0x40d5ff = this['length'], _0x3c04ca = 0x0;
            else {
                if (void 0x0 === _0x40d5ff && 'string' == typeof _0x3c04ca) _0x459f40 = _0x3c04ca, _0x40d5ff = this['length'], _0x3c04ca = 0x0;
                else {
                    if (!isFinite(_0x3c04ca)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                    _0x3c04ca |= 0x0, isFinite(_0x40d5ff) ? (_0x40d5ff |= 0x0, void 0x0 === _0x459f40 && (_0x459f40 = 'utf8')) : (_0x459f40 = _0x40d5ff, _0x40d5ff = void 0x0);
                }
            }
            var _0x5bee6c = this['length'] - _0x3c04ca;
            if ((void 0x0 === _0x40d5ff || _0x40d5ff > _0x5bee6c) && (_0x40d5ff = _0x5bee6c), _0x313380['length'] > 0x0 && (_0x40d5ff < 0x0 || _0x3c04ca < 0x0) || _0x3c04ca > this['length']) throw new RangeError('Attempt to write outside buffer bounds');
            _0x459f40 || (_0x459f40 = 'utf8');
            for (var _0x43f4fb = !0x1;;) switch (_0x459f40) {
                case 'hex':
                    return _0x110e30(this, _0x313380, _0x3c04ca, _0x40d5ff);
                case 'utf8':
                case 'utf-8':
                    return _0x45e86b(this, _0x313380, _0x3c04ca, _0x40d5ff);
                case 'ascii':
                    return _0x24f1c8(this, _0x313380, _0x3c04ca, _0x40d5ff);
                case 'latin1':
                case 'binary':
                    return _0x36aacd(this, _0x313380, _0x3c04ca, _0x40d5ff);
                case 'base64':
                    return _0x49784e(this, _0x313380, _0x3c04ca, _0x40d5ff);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return _0x2213c5(this, _0x313380, _0x3c04ca, _0x40d5ff);
                default:
                    if (_0x43f4fb) throw new TypeError('Unknown encoding: ' + _0x459f40);
                    _0x459f40 = ('' + _0x459f40)['toLowerCase'](), _0x43f4fb = !0x0;
            }
        }, _0x10ab18['prototype']['toJSON'] = function () {

            return {
                'type': 'Buffer',
                'data': Array['prototype']['slice']['call'](this['_arr'] || this, 0x0)
            };
        };
        var _0xa8d045 = 0x1000;

        function _0x5af474(_0x42b671, _0x24dca3, _0x7db5e0) {
            var _0x213c8d = '';
            _0x7db5e0 = Math['min'](_0x42b671['length'], _0x7db5e0);
            for (var _0x118b56 = _0x24dca3; _0x118b56 < _0x7db5e0; ++_0x118b56) _0x213c8d += String['fromCharCode'](0x7f & _0x42b671[_0x118b56]);
            return _0x213c8d;
        }

        function _0x4a844d(_0x46881a, _0x9108dc, _0x266089) {
            var _0x8805a0 = '';
            _0x266089 = Math['min'](_0x46881a['length'], _0x266089);
            for (var _0x31bd22 = _0x9108dc; _0x31bd22 < _0x266089; ++_0x31bd22) _0x8805a0 += String['fromCharCode'](_0x46881a[_0x31bd22]);
            return _0x8805a0;
        }

        function _0x2597be(_0x197eea, _0x15a649, _0x36ed77) {
            var _0x12d2fa = _0x197eea['length'];
            (!_0x15a649 || _0x15a649 < 0x0) && (_0x15a649 = 0x0), (!_0x36ed77 || _0x36ed77 < 0x0 || _0x36ed77 > _0x12d2fa) && (_0x36ed77 = _0x12d2fa);
            for (var _0x15711f = '', _0x6e03a1 = _0x15a649; _0x6e03a1 < _0x36ed77; ++_0x6e03a1) _0x15711f += _0x4d2a0a(_0x197eea[_0x6e03a1]);
            return _0x15711f;
        }

        function _0x2db623(_0x3388a1, _0x31d3a9, _0x2e97a8) {

            for (var _0x408341 = _0x3388a1['slice'](_0x31d3a9, _0x2e97a8), _0x480b19 = '', _0x266a78 = 0x0; _0x266a78 < _0x408341['length']; _0x266a78 += 0x2) _0x480b19 += String['fromCharCode'](_0x408341[_0x266a78] + 0x100 * _0x408341[_0x266a78 + 0x1]);
            return _0x480b19;
        }

        function _0x17940f(_0x556b20, _0x4a6090, _0xd32849) {

            if (_0x556b20 % 0x1 != 0x0 || _0x556b20 < 0x0) throw new RangeError('offset is not uint');
            if (_0x556b20 + _0x4a6090 > _0xd32849) throw new RangeError('Trying to access beyond buffer length');
        }

        function _0x25eb86(_0x5f25fe, _0x1d17cb, _0x5bd0ea, _0x49e055, _0x39328b, _0x4f9e4e) {

            if (!_0x10ab18['isBuffer'](_0x5f25fe)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (_0x1d17cb > _0x39328b || _0x1d17cb < _0x4f9e4e) throw new RangeError('"value" argument is out of bounds');
            if (_0x5bd0ea + _0x49e055 > _0x5f25fe['length']) throw new RangeError('Index out of range');
        }

        function _0x55b179(_0x248fd1, _0x13a8a3, _0x316d5b, _0x452709) {

            _0x13a8a3 < 0x0 && (_0x13a8a3 = 0xffff + _0x13a8a3 + 0x1);
            for (var _0x118a6d = 0x0, _0x304cb4 = Math['min'](_0x248fd1['length'] - _0x316d5b, 0x2); _0x118a6d < _0x304cb4; ++_0x118a6d) _0x248fd1[_0x316d5b + _0x118a6d] = (_0x13a8a3 & 0xff << 0x8 * (_0x452709 ? _0x118a6d : 0x1 - _0x118a6d)) >>> 0x8 * (_0x452709 ? _0x118a6d : 0x1 - _0x118a6d);
        }

        function _0xcfa4e(_0x49611c, _0x471184, _0x514669, _0x398cb0) {

            _0x471184 < 0x0 && (_0x471184 = 0xffffffff + _0x471184 + 0x1);
            for (var _0x14ed31 = 0x0, _0x4ae437 = Math['min'](_0x49611c['length'] - _0x514669, 0x4); _0x14ed31 < _0x4ae437; ++_0x14ed31) _0x49611c[_0x514669 + _0x14ed31] = _0x471184 >>> 0x8 * (_0x398cb0 ? _0x14ed31 : 0x3 - _0x14ed31) & 0xff;
        }

        function _0x51ac04(_0x23252e, _0x147e1e, _0x57a079, _0x132168, _0x411218, _0x396ae4) {

            if (_0x57a079 + _0x132168 > _0x23252e['length']) throw new RangeError('Index out of range');
            if (_0x57a079 < 0x0) throw new RangeError('Index out of range');
        }

        function _0x4e46e6(_0x4e8a4d, _0x514e58, _0x5c9790, _0x6562aa, _0x4a1f46) {

            return _0x4a1f46 || _0x51ac04(_0x4e8a4d, 0x0, _0x5c9790, 0x4), _export_328['write'](_0x4e8a4d, _0x514e58, _0x5c9790, _0x6562aa, 0x17, 0x4), _0x5c9790 + 0x4;
        }

        function _0x1ad3ff(_0x843d33, _0x32deaa, _0x304516, _0x19b478, _0x9e6b6d) {

            return _0x9e6b6d || _0x51ac04(_0x843d33, 0x0, _0x304516, 0x8), _export_328['write'](_0x843d33, _0x32deaa, _0x304516, _0x19b478, 0x34, 0x8), _0x304516 + 0x8;
        }
        _0x10ab18['prototype']['slice'] = function (_0x372021, _0x4a9d7a) {
            var _0x57d912, _0x2ec787 = this['length'];
            if ((_0x372021 = ~~_0x372021) < 0x0 ? (_0x372021 += _0x2ec787) < 0x0 && (_0x372021 = 0x0) : _0x372021 > _0x2ec787 && (_0x372021 = _0x2ec787), (_0x4a9d7a = void 0x0 === _0x4a9d7a ? _0x2ec787 : ~~_0x4a9d7a) < 0x0 ? (_0x4a9d7a += _0x2ec787) < 0x0 && (_0x4a9d7a = 0x0) : _0x4a9d7a > _0x2ec787 && (_0x4a9d7a = _0x2ec787), _0x4a9d7a < _0x372021 && (_0x4a9d7a = _0x372021), _0x10ab18['TYPED_ARRAY_SUPPORT'])(_0x57d912 = this['subarray'](_0x372021, _0x4a9d7a))['__proto__'] = _0x10ab18['prototype'];
            else {
                var _0x32bf1c = _0x4a9d7a - _0x372021;
                _0x57d912 = new _0x10ab18(_0x32bf1c, void 0x0);
                for (var _0x4bf004 = 0x0; _0x4bf004 < _0x32bf1c; ++_0x4bf004) _0x57d912[_0x4bf004] = this[_0x4bf004 + _0x372021];
            }
            return _0x57d912;
        }, _0x10ab18['prototype']['readUIntLE'] = function (_0x303621, _0x1f23f8, _0x3ef16a) {

            _0x303621 |= 0x0, _0x1f23f8 |= 0x0, _0x3ef16a || _0x17940f(_0x303621, _0x1f23f8, this['length']);
            for (var _0x17eee8 = this[_0x303621], _0x829775 = 0x1, _0x3c634e = 0x0; ++_0x3c634e < _0x1f23f8 && (_0x829775 *= 0x100);) _0x17eee8 += this[_0x303621 + _0x3c634e] * _0x829775;
            return _0x17eee8;
        }, _0x10ab18['prototype']['readUIntBE'] = function (_0x487aa4, _0x452573, _0x519cd8) {

            _0x487aa4 |= 0x0, _0x452573 |= 0x0, _0x519cd8 || _0x17940f(_0x487aa4, _0x452573, this['length']);
            for (var _0x2ede22 = this[_0x487aa4 + --_0x452573], _0x3e6483 = 0x1; _0x452573 > 0x0 && (_0x3e6483 *= 0x100);) _0x2ede22 += this[_0x487aa4 + --_0x452573] * _0x3e6483;
            return _0x2ede22;
        }, _0x10ab18['prototype']['readUInt8'] = function (_0x5269c8, _0x2b8119) {

            return _0x2b8119 || _0x17940f(_0x5269c8, 0x1, this['length']), this[_0x5269c8];
        }, _0x10ab18['prototype']['readUInt16LE'] = function (_0x4780c2, _0x12b3cd) {
            return _0x12b3cd || _0x17940f(_0x4780c2, 0x2, this['length']), this[_0x4780c2] | this[_0x4780c2 + 0x1] << 0x8;
        }, _0x10ab18['prototype']['readUInt16BE'] = function (_0x233f35, _0xce8e1b) {

            return _0xce8e1b || _0x17940f(_0x233f35, 0x2, this['length']), this[_0x233f35] << 0x8 | this[_0x233f35 + 0x1];
        }, _0x10ab18['prototype']['readUInt32LE'] = function (_0x372e38, _0x46d685) {

            return _0x46d685 || _0x17940f(_0x372e38, 0x4, this['length']), (this[_0x372e38] | this[_0x372e38 + 0x1] << 0x8 | this[_0x372e38 + 0x2] << 0x10) + 0x1000000 * this[_0x372e38 + 0x3];
        }, _0x10ab18['prototype']['readUInt32BE'] = function (_0x1afa0c, _0x2b9bb3) {
            return _0x2b9bb3 || _0x17940f(_0x1afa0c, 0x4, this['length']), 0x1000000 * this[_0x1afa0c] + (this[_0x1afa0c + 0x1] << 0x10 | this[_0x1afa0c + 0x2] << 0x8 | this[_0x1afa0c + 0x3]);
        }, _0x10ab18['prototype']['readIntLE'] = function (_0x5e037a, _0x402d, _0x4432a8) {

            _0x5e037a |= 0x0, _0x402d |= 0x0, _0x4432a8 || _0x17940f(_0x5e037a, _0x402d, this['length']);
            for (var _0x88ca2e = this[_0x5e037a], _0x51b40f = 0x1, _0x42bdc8 = 0x0; ++_0x42bdc8 < _0x402d && (_0x51b40f *= 0x100);) _0x88ca2e += this[_0x5e037a + _0x42bdc8] * _0x51b40f;
            return _0x88ca2e >= (_0x51b40f *= 0x80) && (_0x88ca2e -= Math['pow'](0x2, 0x8 * _0x402d)), _0x88ca2e;
        }, _0x10ab18['prototype']['readIntBE'] = function (_0x2f791b, _0x5ab7a2, _0x3beba1) {

            _0x2f791b |= 0x0, _0x5ab7a2 |= 0x0, _0x3beba1 || _0x17940f(_0x2f791b, _0x5ab7a2, this['length']);
            for (var _0x541a95 = _0x5ab7a2, _0x545bb6 = 0x1, _0x44cd1c = this[_0x2f791b + --_0x541a95]; _0x541a95 > 0x0 && (_0x545bb6 *= 0x100);) _0x44cd1c += this[_0x2f791b + --_0x541a95] * _0x545bb6;
            return _0x44cd1c >= (_0x545bb6 *= 0x80) && (_0x44cd1c -= Math['pow'](0x2, 0x8 * _0x5ab7a2)), _0x44cd1c;
        }, _0x10ab18['prototype']['readInt8'] = function (_0x40963a, _0x1a814a) {

            return _0x1a814a || _0x17940f(_0x40963a, 0x1, this['length']), 0x80 & this[_0x40963a] ? -0x1 * (0xff - this[_0x40963a] + 0x1) : this[_0x40963a];
        }, _0x10ab18['prototype']['readInt16LE'] = function (_0x368273, _0x4b113a) {

            _0x4b113a || _0x17940f(_0x368273, 0x2, this['length']);
            var _0x356d62 = this[_0x368273] | this[_0x368273 + 0x1] << 0x8;
            return 0x8000 & _0x356d62 ? 0xffff0000 | _0x356d62 : _0x356d62;
        }, _0x10ab18['prototype']['readInt16BE'] = function (_0x50d00e, _0x27a5c9) {

            _0x27a5c9 || _0x17940f(_0x50d00e, 0x2, this['length']);
            var _0x50d6c3 = this[_0x50d00e + 0x1] | this[_0x50d00e] << 0x8;
            return 0x8000 & _0x50d6c3 ? 0xffff0000 | _0x50d6c3 : _0x50d6c3;
        }, _0x10ab18['prototype']['readInt32LE'] = function (_0x37c6d0, _0x2f333a) {

            return _0x2f333a || _0x17940f(_0x37c6d0, 0x4, this['length']), this[_0x37c6d0] | this[_0x37c6d0 + 0x1] << 0x8 | this[_0x37c6d0 + 0x2] << 0x10 | this[_0x37c6d0 + 0x3] << 0x18;
        }, _0x10ab18['prototype']['readInt32BE'] = function (_0x474339, _0x141e27) {

            return _0x141e27 || _0x17940f(_0x474339, 0x4, this['length']), this[_0x474339] << 0x18 | this[_0x474339 + 0x1] << 0x10 | this[_0x474339 + 0x2] << 0x8 | this[_0x474339 + 0x3];
        }, _0x10ab18['prototype']['readFloatLE'] = function (_0x2ec9c8, _0x5150c1) {

            return _0x5150c1 || _0x17940f(_0x2ec9c8, 0x4, this['length']), _export_328['read'](this, _0x2ec9c8, !0x0, 0x17, 0x4);
        }, _0x10ab18['prototype']['readFloatBE'] = function (_0x25994f, _0x57b6fe) {

            return _0x57b6fe || _0x17940f(_0x25994f, 0x4, this['length']), _export_328['read'](this, _0x25994f, !0x1, 0x17, 0x4);
        }, _0x10ab18['prototype']['readDoubleLE'] = function (_0x49c687, _0x18b4da) {

            return _0x18b4da || _0x17940f(_0x49c687, 0x8, this['length']), _export_328['read'](this, _0x49c687, !0x0, 0x34, 0x8);
        }, _0x10ab18['prototype']['readDoubleBE'] = function (_0x46fa99, _0x2f5cc0) {

            return _0x2f5cc0 || _0x17940f(_0x46fa99, 0x8, this['length']), _export_328['read'](this, _0x46fa99, !0x1, 0x34, 0x8);
        }, _0x10ab18['prototype']['writeUIntLE'] = function (_0x21e9ab, _0x7e114f, _0x632369, _0x2958ef) {

            (_0x21e9ab = +_0x21e9ab, _0x7e114f |= 0x0, _0x632369 |= 0x0, _0x2958ef) || _0x25eb86(this, _0x21e9ab, _0x7e114f, _0x632369, Math['pow'](0x2, 0x8 * _0x632369) - 0x1, 0x0);
            var _0x28c095 = 0x1,
                _0x3abefc = 0x0;
            for (this[_0x7e114f] = 0xff & _0x21e9ab; ++_0x3abefc < _0x632369 && (_0x28c095 *= 0x100);) this[_0x7e114f + _0x3abefc] = _0x21e9ab / _0x28c095 & 0xff;
            return _0x7e114f + _0x632369;
        }, _0x10ab18['prototype']['writeUIntBE'] = function (_0x555575, _0x4b6a05, _0xd58588, _0x5bb8b2) {

            (_0x555575 = +_0x555575, _0x4b6a05 |= 0x0, _0xd58588 |= 0x0, _0x5bb8b2) || _0x25eb86(this, _0x555575, _0x4b6a05, _0xd58588, Math['pow'](0x2, 0x8 * _0xd58588) - 0x1, 0x0);
            var _0x2b35e9 = _0xd58588 - 0x1,
                _0x10b0d2 = 0x1;
            for (this[_0x4b6a05 + _0x2b35e9] = 0xff & _0x555575; --_0x2b35e9 >= 0x0 && (_0x10b0d2 *= 0x100);) this[_0x4b6a05 + _0x2b35e9] = _0x555575 / _0x10b0d2 & 0xff;
            return _0x4b6a05 + _0xd58588;
        }, _0x10ab18['prototype']['writeUInt8'] = function (_0x4a8404, _0x4ccc3f, _0x463d8a) {

            return _0x4a8404 = +_0x4a8404, _0x4ccc3f |= 0x0, _0x463d8a || _0x25eb86(this, _0x4a8404, _0x4ccc3f, 0x1, 0xff, 0x0), _0x10ab18['TYPED_ARRAY_SUPPORT'] || (_0x4a8404 = Math['floor'](_0x4a8404)), this[_0x4ccc3f] = 0xff & _0x4a8404, _0x4ccc3f + 0x1;
        }, _0x10ab18['prototype']['writeUInt16LE'] = function (_0x25cde6, _0x1c70f4, _0x78a7dc) {

            return _0x25cde6 = +_0x25cde6, _0x1c70f4 |= 0x0, _0x78a7dc || _0x25eb86(this, _0x25cde6, _0x1c70f4, 0x2, 0xffff, 0x0), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (this[_0x1c70f4] = 0xff & _0x25cde6, this[_0x1c70f4 + 0x1] = _0x25cde6 >>> 0x8) : _0x55b179(this, _0x25cde6, _0x1c70f4, !0x0), _0x1c70f4 + 0x2;
        }, _0x10ab18['prototype']['writeUInt16BE'] = function (_0x343d62, _0x5412ef, _0x450b03) {

            return _0x343d62 = +_0x343d62, _0x5412ef |= 0x0, _0x450b03 || _0x25eb86(this, _0x343d62, _0x5412ef, 0x2, 0xffff, 0x0), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (this[_0x5412ef] = _0x343d62 >>> 0x8, this[_0x5412ef + 0x1] = 0xff & _0x343d62) : _0x55b179(this, _0x343d62, _0x5412ef, !0x1), _0x5412ef + 0x2;
        }, _0x10ab18['prototype']['writeUInt32LE'] = function (_0x1486ef, _0x1fa3d0, _0x435af1) {

            return _0x1486ef = +_0x1486ef, _0x1fa3d0 |= 0x0, _0x435af1 || _0x25eb86(this, _0x1486ef, _0x1fa3d0, 0x4, 0xffffffff, 0x0), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (this[_0x1fa3d0 + 0x3] = _0x1486ef >>> 0x18, this[_0x1fa3d0 + 0x2] = _0x1486ef >>> 0x10, this[_0x1fa3d0 + 0x1] = _0x1486ef >>> 0x8, this[_0x1fa3d0] = 0xff & _0x1486ef) : _0xcfa4e(this, _0x1486ef, _0x1fa3d0, !0x0), _0x1fa3d0 + 0x4;
        }, _0x10ab18['prototype']['writeUInt32BE'] = function (_0xcc39a2, _0x3e39b3, _0x5d63d9) {

            return _0xcc39a2 = +_0xcc39a2, _0x3e39b3 |= 0x0, _0x5d63d9 || _0x25eb86(this, _0xcc39a2, _0x3e39b3, 0x4, 0xffffffff, 0x0), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (this[_0x3e39b3] = _0xcc39a2 >>> 0x18, this[_0x3e39b3 + 0x1] = _0xcc39a2 >>> 0x10, this[_0x3e39b3 + 0x2] = _0xcc39a2 >>> 0x8, this[_0x3e39b3 + 0x3] = 0xff & _0xcc39a2) : _0xcfa4e(this, _0xcc39a2, _0x3e39b3, !0x1), _0x3e39b3 + 0x4;
        }, _0x10ab18['prototype']['writeIntLE'] = function (_0x1ba520, _0x198890, _0x394366, _0x5a3c6e) {

            if (_0x1ba520 = +_0x1ba520, _0x198890 |= 0x0, !_0x5a3c6e) {
                var _0x1d5595 = Math['pow'](0x2, 0x8 * _0x394366 - 0x1);
                _0x25eb86(this, _0x1ba520, _0x198890, _0x394366, _0x1d5595 - 0x1, -_0x1d5595);
            }
            var _0x5ec3d1 = 0x0,
                _0xdb5b94 = 0x1,
                _0x121aae = 0x0;
            for (this[_0x198890] = 0xff & _0x1ba520; ++_0x5ec3d1 < _0x394366 && (_0xdb5b94 *= 0x100);) _0x1ba520 < 0x0 && 0x0 === _0x121aae && 0x0 !== this[_0x198890 + _0x5ec3d1 - 0x1] && (_0x121aae = 0x1), this[_0x198890 + _0x5ec3d1] = (_0x1ba520 / _0xdb5b94 >> 0x0) - _0x121aae & 0xff;
            return _0x198890 + _0x394366;
        }, _0x10ab18['prototype']['writeIntBE'] = function (_0x28454d, _0x42fbcf, _0x11a9cc, _0x4112d1) {
            if (_0x28454d = +_0x28454d, _0x42fbcf |= 0x0, !_0x4112d1) {
                var _0x2467f4 = Math['pow'](0x2, 0x8 * _0x11a9cc - 0x1);
                _0x25eb86(this, _0x28454d, _0x42fbcf, _0x11a9cc, _0x2467f4 - 0x1, -_0x2467f4);
            }
            var _0x299477 = _0x11a9cc - 0x1,
                _0x317e49 = 0x1,
                _0x5cd8bf = 0x0;
            for (this[_0x42fbcf + _0x299477] = 0xff & _0x28454d; --_0x299477 >= 0x0 && (_0x317e49 *= 0x100);) _0x28454d < 0x0 && 0x0 === _0x5cd8bf && 0x0 !== this[_0x42fbcf + _0x299477 + 0x1] && (_0x5cd8bf = 0x1), this[_0x42fbcf + _0x299477] = (_0x28454d / _0x317e49 >> 0x0) - _0x5cd8bf & 0xff;
            return _0x42fbcf + _0x11a9cc;
        }, _0x10ab18['prototype']['writeInt8'] = function (_0x32bfda, _0x22abff, _0x3533ec) {

            return _0x32bfda = +_0x32bfda, _0x22abff |= 0x0, _0x3533ec || _0x25eb86(this, _0x32bfda, _0x22abff, 0x1, 0x7f, -0x80), _0x10ab18['TYPED_ARRAY_SUPPORT'] || (_0x32bfda = Math['floor'](_0x32bfda)), _0x32bfda < 0x0 && (_0x32bfda = 0xff + _0x32bfda + 0x1), this[_0x22abff] = 0xff & _0x32bfda, _0x22abff + 0x1;
        }, _0x10ab18['prototype']['writeInt16LE'] = function (_0x361c13, _0x237769, _0xd64d9) {

            return _0x361c13 = +_0x361c13, _0x237769 |= 0x0, _0xd64d9 || _0x25eb86(this, _0x361c13, _0x237769, 0x2, 0x7fff, -0x8000), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (this[_0x237769] = 0xff & _0x361c13, this[_0x237769 + 0x1] = _0x361c13 >>> 0x8) : _0x55b179(this, _0x361c13, _0x237769, !0x0), _0x237769 + 0x2;
        }, _0x10ab18['prototype']['writeInt16BE'] = function (_0x2bf21f, _0x2f3d0b, _0x3df38e) {
            return _0x2bf21f = +_0x2bf21f, _0x2f3d0b |= 0x0, _0x3df38e || _0x25eb86(this, _0x2bf21f, _0x2f3d0b, 0x2, 0x7fff, -0x8000), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (this[_0x2f3d0b] = _0x2bf21f >>> 0x8, this[_0x2f3d0b + 0x1] = 0xff & _0x2bf21f) : _0x55b179(this, _0x2bf21f, _0x2f3d0b, !0x1), _0x2f3d0b + 0x2;
        }, _0x10ab18['prototype']['writeInt32LE'] = function (_0xdc270a, _0x2ccc56, _0x4f0708) {

            return _0xdc270a = +_0xdc270a, _0x2ccc56 |= 0x0, _0x4f0708 || _0x25eb86(this, _0xdc270a, _0x2ccc56, 0x4, 0x7fffffff, -0x80000000), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (this[_0x2ccc56] = 0xff & _0xdc270a, this[_0x2ccc56 + 0x1] = _0xdc270a >>> 0x8, this[_0x2ccc56 + 0x2] = _0xdc270a >>> 0x10, this[_0x2ccc56 + 0x3] = _0xdc270a >>> 0x18) : _0xcfa4e(this, _0xdc270a, _0x2ccc56, !0x0), _0x2ccc56 + 0x4;
        }, _0x10ab18['prototype']['writeInt32BE'] = function (_0x21b563, _0x46605c, _0x11400a) {

            return _0x21b563 = +_0x21b563, _0x46605c |= 0x0, _0x11400a || _0x25eb86(this, _0x21b563, _0x46605c, 0x4, 0x7fffffff, -0x80000000), _0x21b563 < 0x0 && (_0x21b563 = 0xffffffff + _0x21b563 + 0x1), _0x10ab18['TYPED_ARRAY_SUPPORT'] ? (this[_0x46605c] = _0x21b563 >>> 0x18, this[_0x46605c + 0x1] = _0x21b563 >>> 0x10, this[_0x46605c + 0x2] = _0x21b563 >>> 0x8, this[_0x46605c + 0x3] = 0xff & _0x21b563) : _0xcfa4e(this, _0x21b563, _0x46605c, !0x1), _0x46605c + 0x4;
        }, _0x10ab18['prototype']['writeFloatLE'] = function (_0x216c80, _0x39c7d9, _0x9955b2) {
            return _0x4e46e6(this, _0x216c80, _0x39c7d9, !0x0, _0x9955b2);
        }, _0x10ab18['prototype']['writeFloatBE'] = function (_0x24f5de, _0x59e791, _0x2569bd) {
            return _0x4e46e6(this, _0x24f5de, _0x59e791, !0x1, _0x2569bd);
        }, _0x10ab18['prototype']['writeDoubleLE'] = function (_0x243795, _0x3d19e0, _0x48f74e) {
            return _0x1ad3ff(this, _0x243795, _0x3d19e0, !0x0, _0x48f74e);
        }, _0x10ab18['prototype']['writeDoubleBE'] = function (_0x1ca0d2, _0x3af72b, _0x4d3ced) {
            return _0x1ad3ff(this, _0x1ca0d2, _0x3af72b, !0x1, _0x4d3ced);
        }, _0x10ab18['prototype']['copy'] = function (_0x265a1d, _0x377461, _0x1f8d25, _0x3384db) {

            if (_0x1f8d25 || (_0x1f8d25 = 0x0), _0x3384db || 0x0 === _0x3384db || (_0x3384db = this['length']), _0x377461 >= _0x265a1d['length'] && (_0x377461 = _0x265a1d['length']), _0x377461 || (_0x377461 = 0x0), _0x3384db > 0x0 && _0x3384db < _0x1f8d25 && (_0x3384db = _0x1f8d25), _0x3384db === _0x1f8d25) return 0x0;
            if (0x0 === _0x265a1d['length'] || 0x0 === this['length']) return 0x0;
            if (_0x377461 < 0x0) throw new RangeError('targetStart out of bounds');
            if (_0x1f8d25 < 0x0 || _0x1f8d25 >= this['length']) throw new RangeError('sourceStart out of bounds');
            if (_0x3384db < 0x0) throw new RangeError('sourceEnd out of bounds');
            _0x3384db > this['length'] && (_0x3384db = this['length']), _0x265a1d['length'] - _0x377461 < _0x3384db - _0x1f8d25 && (_0x3384db = _0x265a1d['length'] - _0x377461 + _0x1f8d25);
            var _0x266b23, _0x317bf1 = _0x3384db - _0x1f8d25;
            if (this === _0x265a1d && _0x1f8d25 < _0x377461 && _0x377461 < _0x3384db) {
                for (_0x266b23 = _0x317bf1 - 0x1; _0x266b23 >= 0x0; --_0x266b23) _0x265a1d[_0x266b23 + _0x377461] = this[_0x266b23 + _0x1f8d25];
            } else {
                if (_0x317bf1 < 0x3e8 || !_0x10ab18['TYPED_ARRAY_SUPPORT']) {
                    for (_0x266b23 = 0x0; _0x266b23 < _0x317bf1; ++_0x266b23) _0x265a1d[_0x266b23 + _0x377461] = this[_0x266b23 + _0x1f8d25];
                } else Uint8Array['prototype']['set']['call'](_0x265a1d, this['subarray'](_0x1f8d25, _0x1f8d25 + _0x317bf1), _0x377461);
            }
            return _0x317bf1;
        }, _0x10ab18['prototype']['fill'] = function (_0x31abfa, _0x137cf6, _0x11e002, _0x52a197) {

            if ('string' == typeof _0x31abfa) {
                if ('string' == typeof _0x137cf6 ? (_0x52a197 = _0x137cf6, _0x137cf6 = 0x0, _0x11e002 = this['length']) : 'string' == typeof _0x11e002 && (_0x52a197 = _0x11e002, _0x11e002 = this['length']), 0x1 === _0x31abfa['length']) {
                    var _0x2aadd1 = _0x31abfa['charCodeAt'](0x0);
                    _0x2aadd1 < 0x100 && (_0x31abfa = _0x2aadd1);
                }
                if (void 0x0 !== _0x52a197 && 'string' != typeof _0x52a197) throw new TypeError('encoding must be a string');
                if ('string' == typeof _0x52a197 && !_0x10ab18['isEncoding'](_0x52a197)) throw new TypeError('Unknown encoding: ' + _0x52a197);
            } else 'number' == typeof _0x31abfa && (_0x31abfa &= 0xff);
            if (_0x137cf6 < 0x0 || this['length'] < _0x137cf6 || this['length'] < _0x11e002) throw new RangeError('Out of range index');
            if (_0x11e002 <= _0x137cf6) return this;
            var _0x1de77c;
            if (_0x137cf6 >>>= 0x0, _0x11e002 = void 0x0 === _0x11e002 ? this['length'] : _0x11e002 >>> 0x0, _0x31abfa || (_0x31abfa = 0x0), 'number' == typeof _0x31abfa) {
                for (_0x1de77c = _0x137cf6; _0x1de77c < _0x11e002; ++_0x1de77c) this[_0x1de77c] = _0x31abfa;
            } else {
                var _0x59a1dd = _0x10ab18['isBuffer'](_0x31abfa) ? _0x31abfa : _0x1f6f9c(new _0x10ab18(_0x31abfa, _0x52a197)['toString']()),
                    _0x1059f9 = _0x59a1dd['length'];
                for (_0x1de77c = 0x0; _0x1de77c < _0x11e002 - _0x137cf6; ++_0x1de77c) this[_0x1de77c + _0x137cf6] = _0x59a1dd[_0x1de77c % _0x1059f9];
            }
            return this;
        };
        var _0x571377 = /[^+\/0-9A-Za-z-_]/g;

        function _0x4d2a0a(_0xba60c8) {

            return _0xba60c8 < 0x10 ? '0' + _0xba60c8['toString'](0x10) : _0xba60c8['toString'](0x10);
        }

        function _0x1f6f9c(_0x2c304f, _0x4fb0b0) {
            var _0x2ab2ee;
            _0x4fb0b0 = _0x4fb0b0 || 0x1 / 0x0;
            for (var _0x4d7600 = _0x2c304f['length'], _0x45cbb2 = null, _0x26f544 = [], _0x187e25 = 0x0; _0x187e25 < _0x4d7600; ++_0x187e25) {
                if ((_0x2ab2ee = _0x2c304f['charCodeAt'](_0x187e25)) > 0xd7ff && _0x2ab2ee < 0xe000) {
                    if (!_0x45cbb2) {
                        if (_0x2ab2ee > 0xdbff) {
                            (_0x4fb0b0 -= 0x3) > -0x1 && _0x26f544['push'](0xef, 0xbf, 0xbd);
                            continue;
                        }
                        if (_0x187e25 + 0x1 === _0x4d7600) {
                            (_0x4fb0b0 -= 0x3) > -0x1 && _0x26f544['push'](0xef, 0xbf, 0xbd);
                            continue;
                        }
                        _0x45cbb2 = _0x2ab2ee;
                        continue;
                    }
                    if (_0x2ab2ee < 0xdc00) {
                        (_0x4fb0b0 -= 0x3) > -0x1 && _0x26f544['push'](0xef, 0xbf, 0xbd), _0x45cbb2 = _0x2ab2ee;
                        continue;
                    }
                    _0x2ab2ee = 0x10000 + (_0x45cbb2 - 0xd800 << 0xa | _0x2ab2ee - 0xdc00);
                } else _0x45cbb2 && (_0x4fb0b0 -= 0x3) > -0x1 && _0x26f544['push'](0xef, 0xbf, 0xbd);
                if (_0x45cbb2 = null, _0x2ab2ee < 0x80) {
                    if ((_0x4fb0b0 -= 0x1) < 0x0) break;
                    _0x26f544['push'](_0x2ab2ee);
                } else {
                    if (_0x2ab2ee < 0x800) {
                        if ((_0x4fb0b0 -= 0x2) < 0x0) break;
                        _0x26f544['push'](_0x2ab2ee >> 0x6 | 0xc0, 0x3f & _0x2ab2ee | 0x80);
                    } else {
                        if (_0x2ab2ee < 0x10000) {
                            if ((_0x4fb0b0 -= 0x3) < 0x0) break;
                            _0x26f544['push'](_0x2ab2ee >> 0xc | 0xe0, _0x2ab2ee >> 0x6 & 0x3f | 0x80, 0x3f & _0x2ab2ee | 0x80);
                        } else {
                            if (!(_0x2ab2ee < 0x110000)) throw new Error('Invalid code point');
                            if ((_0x4fb0b0 -= 0x4) < 0x0) break;
                            _0x26f544['push'](_0x2ab2ee >> 0x12 | 0xf0, _0x2ab2ee >> 0xc & 0x3f | 0x80, _0x2ab2ee >> 0x6 & 0x3f | 0x80, 0x3f & _0x2ab2ee | 0x80);
                        }
                    }
                }
            }
            return _0x26f544;
        }

        function _0xa1e0c9(_0x409e27) {

            return _export_327['toByteArray'](function (_0x2f00f0) {

                if ((_0x2f00f0 = function (_0x53e431) {

                        return _0x53e431['trim'] ? _0x53e431['trim']() : _0x53e431['replace'](/^\s+|\s+$/g, '');
                    }(_0x2f00f0)['replace'](_0x571377, ''))['length'] < 0x2) return '';
                for (; _0x2f00f0['length'] % 0x4 != 0x0;) _0x2f00f0 += '=';
                return _0x2f00f0;
            }(_0x409e27));
        }

        function _0x1113fe(_0x302188, _0x1a2ffa, _0x25d1b5, _0x2213d5) {

            for (var _0x22ccb3 = 0x0; _0x22ccb3 < _0x2213d5 && !(_0x22ccb3 + _0x25d1b5 >= _0x1a2ffa['length'] || _0x22ccb3 >= _0x302188['length']); ++_0x22ccb3) _0x1a2ffa[_0x22ccb3 + _0x25d1b5] = _0x302188[_0x22ccb3];
            return _0x22ccb3;
        }
    } ['call'](this, window));
}, function id_327_0x147(es_module, es_exports, es_require) {
    'use strict';

    es_exports['byteLength'] = function (_0x578a45) {
        var _0x5b8d0f = _0x45d811(_0x578a45),
            _0x3d95c2 = _0x5b8d0f[0x0],
            _0x21efe2 = _0x5b8d0f[0x1];
        return 0x3 * (_0x3d95c2 + _0x21efe2) / 0x4 - _0x21efe2;
    }, es_exports['toByteArray'] = function (_0x53477f) {
        var _0x5a9a46, _0xbe1cd, _0x4ae2d5 = _0x45d811(_0x53477f),
            _0x114cb9 = _0x4ae2d5[0x0],
            _0x5e1ee3 = _0x4ae2d5[0x1],
            _0x25b88c = new _0x176c82(function (_0x167106, _0x29e9b1, _0x5a3b09) {
                return 0x3 * (_0x29e9b1 + _0x5a3b09) / 0x4 - _0x5a3b09;
            }(0x0, _0x114cb9, _0x5e1ee3)),
            _0x4f7476 = 0x0,
            _0x5dadc4 = _0x5e1ee3 > 0x0 ? _0x114cb9 - 0x4 : _0x114cb9;
        for (_0xbe1cd = 0x0; _0xbe1cd < _0x5dadc4; _0xbe1cd += 0x4) _0x5a9a46 = _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd)] << 0x12 | _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd + 0x1)] << 0xc | _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd + 0x2)] << 0x6 | _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd + 0x3)], _0x25b88c[_0x4f7476++] = _0x5a9a46 >> 0x10 & 0xff, _0x25b88c[_0x4f7476++] = _0x5a9a46 >> 0x8 & 0xff, _0x25b88c[_0x4f7476++] = 0xff & _0x5a9a46;
        return 0x2 === _0x5e1ee3 && (_0x5a9a46 = _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd)] << 0x2 | _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd + 0x1)] >> 0x4, _0x25b88c[_0x4f7476++] = 0xff & _0x5a9a46), 0x1 === _0x5e1ee3 && (_0x5a9a46 = _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd)] << 0xa | _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd + 0x1)] << 0x4 | _0x55c12a[_0x53477f['charCodeAt'](_0xbe1cd + 0x2)] >> 0x2, _0x25b88c[_0x4f7476++] = _0x5a9a46 >> 0x8 & 0xff, _0x25b88c[_0x4f7476++] = 0xff & _0x5a9a46), _0x25b88c;
    }, es_exports['fromByteArray'] = function (_0x1d952c) {

        for (var _0x2f278d, _0x5378c2 = _0x1d952c['length'], _0x17af06 = _0x5378c2 % 0x3, _0x1905b4 = [], _0x57dd0a = 0x0, _0x4b1582 = _0x5378c2 - _0x17af06; _0x57dd0a < _0x4b1582; _0x57dd0a += 0x3fff) _0x1905b4['push'](_0x57518a(_0x1d952c, _0x57dd0a, _0x57dd0a + 0x3fff > _0x4b1582 ? _0x4b1582 : _0x57dd0a + 0x3fff));
        return 0x1 === _0x17af06 ? (_0x2f278d = _0x1d952c[_0x5378c2 - 0x1], _0x1905b4['push'](_0x5ed740[_0x2f278d >> 0x2] + _0x5ed740[_0x2f278d << 0x4 & 0x3f] + '==')) : 0x2 === _0x17af06 && (_0x2f278d = (_0x1d952c[_0x5378c2 - 0x2] << 0x8) + _0x1d952c[_0x5378c2 - 0x1], _0x1905b4['push'](_0x5ed740[_0x2f278d >> 0xa] + _0x5ed740[_0x2f278d >> 0x4 & 0x3f] + _0x5ed740[_0x2f278d << 0x2 & 0x3f] + '=')), _0x1905b4['join']('');
    };
    for (var _0x5ed740 = [], _0x55c12a = [], _0x176c82 = 'undefined' != typeof Uint8Array ? Uint8Array : Array, _0x57e779 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', _0x1b9518 = 0x0, _0x5e401b = _0x57e779['length']; _0x1b9518 < _0x5e401b; ++_0x1b9518) _0x5ed740[_0x1b9518] = _0x57e779[_0x1b9518], _0x55c12a[_0x57e779['charCodeAt'](_0x1b9518)] = _0x1b9518;

    function _0x45d811(_0x122428) {
        var _0x51f42d = _0x122428['length'];
        if (_0x51f42d % 0x4 > 0x0) throw new Error('Invalid string. Length must be a multiple of 4');
        var _0x4a16d3 = _0x122428['indexOf']('=');
        return -0x1 === _0x4a16d3 && (_0x4a16d3 = _0x51f42d), [_0x4a16d3, _0x4a16d3 === _0x51f42d ? 0x0 : 0x4 - _0x4a16d3 % 0x4];
    }

    function _0x57518a(_0x8c681c, _0xc56993, _0xdae67a) {

        for (var _0x119ef7, _0xbd5af, _0x395c16 = [], _0x59c87c = _0xc56993; _0x59c87c < _0xdae67a; _0x59c87c += 0x3) _0x119ef7 = (_0x8c681c[_0x59c87c] << 0x10 & 0xff0000) + (_0x8c681c[_0x59c87c + 0x1] << 0x8 & 0xff00) + (0xff & _0x8c681c[_0x59c87c + 0x2]), _0x395c16['push'](_0x5ed740[(_0xbd5af = _0x119ef7) >> 0x12 & 0x3f] + _0x5ed740[_0xbd5af >> 0xc & 0x3f] + _0x5ed740[_0xbd5af >> 0x6 & 0x3f] + _0x5ed740[0x3f & _0xbd5af]);
        return _0x395c16['join']('');
    }
    _0x55c12a['-' ['charCodeAt'](0x0)] = 0x3e, _0x55c12a['_' ['charCodeAt'](0x0)] = 0x3f;
}, function id_328_0x148(es_module, es_exports) {

    es_exports['read'] = function (_0x14cc05, _0x9224ed, _0x39927a, _0x2c0a00, _0x5029e0) {
        var _0x25b191, _0x11519d, _0x1e660b = 0x8 * _0x5029e0 - _0x2c0a00 - 0x1,
            _0x439fae = (0x1 << _0x1e660b) - 0x1,
            _0x320080 = _0x439fae >> 0x1,
            _0x1cda29 = -0x7,
            _0x5e49c7 = _0x39927a ? _0x5029e0 - 0x1 : 0x0,
            _0x3e2134 = _0x39927a ? -0x1 : 0x1,
            _0x3eac04 = _0x14cc05[_0x9224ed + _0x5e49c7];
        for (_0x5e49c7 += _0x3e2134, _0x25b191 = _0x3eac04 & (0x1 << -_0x1cda29) - 0x1, _0x3eac04 >>= -_0x1cda29, _0x1cda29 += _0x1e660b; _0x1cda29 > 0x0; _0x25b191 = 0x100 * _0x25b191 + _0x14cc05[_0x9224ed + _0x5e49c7], _0x5e49c7 += _0x3e2134, _0x1cda29 -= 0x8);
        for (_0x11519d = _0x25b191 & (0x1 << -_0x1cda29) - 0x1, _0x25b191 >>= -_0x1cda29, _0x1cda29 += _0x2c0a00; _0x1cda29 > 0x0; _0x11519d = 0x100 * _0x11519d + _0x14cc05[_0x9224ed + _0x5e49c7], _0x5e49c7 += _0x3e2134, _0x1cda29 -= 0x8);
        if (0x0 === _0x25b191) _0x25b191 = 0x1 - _0x320080;
        else {
            if (_0x25b191 === _0x439fae) return _0x11519d ? NaN : 0x1 / 0x0 * (_0x3eac04 ? -0x1 : 0x1);
            _0x11519d += Math['pow'](0x2, _0x2c0a00), _0x25b191 -= _0x320080;
        }
        return (_0x3eac04 ? -0x1 : 0x1) * _0x11519d * Math['pow'](0x2, _0x25b191 - _0x2c0a00);
    }, es_exports['write'] = function (_0x14afc1, _0x354d8f, _0x4d9412, _0x3fedd1, _0x1fa839, _0x3cceae) {
        var _0x58a1ef, _0x1e1faa, _0x159237, _0x4b17be = 0x8 * _0x3cceae - _0x1fa839 - 0x1,
            _0x3731cb = (0x1 << _0x4b17be) - 0x1,
            _0x26912d = _0x3731cb >> 0x1,
            _0x19fa22 = 0x17 === _0x1fa839 ? Math['pow'](0x2, -0x18) - Math['pow'](0x2, -0x4d) : 0x0,
            _0x592434 = _0x3fedd1 ? 0x0 : _0x3cceae - 0x1,
            _0x2e32da = _0x3fedd1 ? 0x1 : -0x1,
            _0x33b2de = _0x354d8f < 0x0 || 0x0 === _0x354d8f && 0x1 / _0x354d8f < 0x0 ? 0x1 : 0x0;
        for (_0x354d8f = Math['abs'](_0x354d8f), isNaN(_0x354d8f) || _0x354d8f === 0x1 / 0x0 ? (_0x1e1faa = isNaN(_0x354d8f) ? 0x1 : 0x0, _0x58a1ef = _0x3731cb) : (_0x58a1ef = Math['floor'](Math['log'](_0x354d8f) / Math['LN2']), _0x354d8f * (_0x159237 = Math['pow'](0x2, -_0x58a1ef)) < 0x1 && (_0x58a1ef--, _0x159237 *= 0x2), (_0x354d8f += _0x58a1ef + _0x26912d >= 0x1 ? _0x19fa22 / _0x159237 : _0x19fa22 * Math['pow'](0x2, 0x1 - _0x26912d)) * _0x159237 >= 0x2 && (_0x58a1ef++, _0x159237 /= 0x2), _0x58a1ef + _0x26912d >= _0x3731cb ? (_0x1e1faa = 0x0, _0x58a1ef = _0x3731cb) : _0x58a1ef + _0x26912d >= 0x1 ? (_0x1e1faa = (_0x354d8f * _0x159237 - 0x1) * Math['pow'](0x2, _0x1fa839), _0x58a1ef += _0x26912d) : (_0x1e1faa = _0x354d8f * Math['pow'](0x2, _0x26912d - 0x1) * Math['pow'](0x2, _0x1fa839), _0x58a1ef = 0x0)); _0x1fa839 >= 0x8; _0x14afc1[_0x4d9412 + _0x592434] = 0xff & _0x1e1faa, _0x592434 += _0x2e32da, _0x1e1faa /= 0x100, _0x1fa839 -= 0x8);
        for (_0x58a1ef = _0x58a1ef << _0x1fa839 | _0x1e1faa, _0x4b17be += _0x1fa839; _0x4b17be > 0x0; _0x14afc1[_0x4d9412 + _0x592434] = 0xff & _0x58a1ef, _0x592434 += _0x2e32da, _0x58a1ef /= 0x100, _0x4b17be -= 0x8);
        _0x14afc1[_0x4d9412 + _0x592434 - _0x2e32da] |= 0x80 * _0x33b2de;
    };
}, function id_329_0x149(es_module, es_exports) {
    var _0x4b1aa2 = {} ['toString'];
    es_module['exports'] = Array['isArray'] || function (_0x4512e5) {

        return '[object Array]' == _0x4b1aa2['call'](_0x4512e5);
    };
}, function id_330_0x14a(es_module, es_exports) {

    (function (_0x5434bb) {

        es_module['exports'] = _0x5434bb;
    } ['call'](this, {}));
}, function id_331_0x14b(es_module, es_exports, es_require) {
    var _export_332 = es_require(0x14c),
        _0x46035c = es_require(0x14d)('socket.io-client:url');
    es_module['exports'] = function (_0x52ad88, _0x34e22d) {
        var _0x5dbda0 = _0x52ad88;
        _0x34e22d = _0x34e22d || 'undefined' != typeof location && location, null == _0x52ad88 && (_0x52ad88 = _0x34e22d['protocol'] + '//' + _0x34e22d['host']), 'string' == typeof _0x52ad88 && ('/' === _0x52ad88['charAt'](0x0) && (_0x52ad88 = '/' === _0x52ad88['charAt'](0x1) ? _0x34e22d['protocol'] + _0x52ad88 : _0x34e22d['host'] + _0x52ad88), /^(https?|wss?):\/\// ['test'](_0x52ad88) || (_0x46035c('protocol-less url %s', _0x52ad88), _0x52ad88 = void 0x0 !== _0x34e22d ? _0x34e22d['protocol'] + '//' + _0x52ad88 : 'https://' + _0x52ad88), _0x46035c('parse %s', _0x52ad88), _0x5dbda0 = _export_332(_0x52ad88)), _0x5dbda0['port'] || (/^(http|ws)$/ ['test'](_0x5dbda0['protocol']) ? _0x5dbda0['port'] = '80' : /^(http|ws)s$/ ['test'](_0x5dbda0['protocol']) && (_0x5dbda0['port'] = '443')), _0x5dbda0['path'] = _0x5dbda0['path'] || '/';
        var _0x4d66c1 = -0x1 !== _0x5dbda0['host']['indexOf'](':') ? '[' + _0x5dbda0['host'] + ']' : _0x5dbda0['host'];
        return _0x5dbda0['id'] = _0x5dbda0['protocol'] + '://' + _0x4d66c1 + ':' + _0x5dbda0['port'], _0x5dbda0['href'] = _0x5dbda0['protocol'] + '://' + _0x4d66c1 + (_0x34e22d && _0x34e22d['port'] === _0x5dbda0['port'] ? '' : ':' + _0x5dbda0['port']), _0x5dbda0;
    };
}, function id_332_0x14c(es_module, es_exports) {
    var _0x482ed8 = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        _0x254b74 = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
    es_module['exports'] = function (_0x1ac659) {
        var _0x1aa8d2 = _0x1ac659,
            _0x16b006 = _0x1ac659['indexOf']('['),
            _0x1ab01c = _0x1ac659['indexOf'](']'); - 0x1 != _0x16b006 && -0x1 != _0x1ab01c && (_0x1ac659 = _0x1ac659['substring'](0x0, _0x16b006) + _0x1ac659['substring'](_0x16b006, _0x1ab01c)['replace'](/:/g, ';') + _0x1ac659['substring'](_0x1ab01c, _0x1ac659['length']));
        for (var _0x214233 = _0x482ed8['exec'](_0x1ac659 || ''), _0x1519ac = {}, _0x4c2bab = 0xe; _0x4c2bab--;) _0x1519ac[_0x254b74[_0x4c2bab]] = _0x214233[_0x4c2bab] || '';
        return -0x1 != _0x16b006 && -0x1 != _0x1ab01c && (_0x1519ac['source'] = _0x1aa8d2, _0x1519ac['host'] = _0x1519ac['host']['substring'](0x1, _0x1519ac['host']['length'] - 0x1)['replace'](/;/g, ':'), _0x1519ac['authority'] = _0x1519ac['authority']['replace']('[', '')['replace'](']', '')['replace'](/;/g, ':'), _0x1519ac['ipv6uri'] = !0x0), _0x1519ac;
    };
}, function id_333_0x14d(es_module, es_exports, es_require) {

    (function (_0x4fef89) {


        function _0x50d824() {
            var _0x2266de;
            try {
                _0x2266de = es_exports['storage']['debug'];
            } catch (_0xf06da8) {}
            return !_0x2266de && void 0x0 !== _0x4fef89 && 'env' in _0x4fef89 && (_0x2266de = _0x4fef89['env']['DEBUG']), _0x2266de;
        }(es_exports = es_module['exports'] = es_require(0x14e))['log'] = function () {

            return 'object' == typeof console && console['log'] && Function['prototype']['apply']['call'](console['log'], console, arguments);
        }, es_exports['formatArgs'] = function (_0x6842e1) {
            var _0x412a62 = this['useColors'];
            if (_0x6842e1[0x0] = (_0x412a62 ? '%c' : '') + this['namespace'] + (_0x412a62 ? ' %c' : ' ') + _0x6842e1[0x0] + (_0x412a62 ? '%c ' : ' ') + '+' + es_exports['humanize'](this['diff']), !_0x412a62) return;
            var _0x5ea9cd = 'color: ' + this['color'];
            _0x6842e1['splice'](0x1, 0x0, _0x5ea9cd, 'color: inherit');
            var _0xdb2728 = 0x0,
                _0x52fa28 = 0x0;
            _0x6842e1[0x0]['replace'](/%[a-zA-Z%]/g, function (_0x2abd61) {
                '%%' !== _0x2abd61 && (_0xdb2728++, '%c' === _0x2abd61 && (_0x52fa28 = _0xdb2728));
            }), _0x6842e1['splice'](_0x52fa28, 0x0, _0x5ea9cd);
        }, es_exports['save'] = function (_0x4fb14f) {

            try {
                null == _0x4fb14f ? es_exports['storage']['removeItem']('debug') : es_exports['storage']['debug'] = _0x4fb14f;
            } catch (_0x3f3af9) {}
        }, es_exports['load'] = _0x50d824, es_exports['useColors'] = function () {

            if ('undefined' != typeof window && window['process'] && 'renderer' === window['process']['type']) return !0x0;
            if ('undefined' != typeof navigator && navigator['userAgent'] && navigator['userAgent']['toLowerCase']()['match'](/(edge|trident)\/(\d+)/)) return !0x1;
            return 'undefined' != typeof document && document['documentElement'] && document['documentElement']['style'] && document['documentElement']['style']['WebkitAppearance'] || 'undefined' != typeof window && window['console'] && (window['console']['firebug'] || window['console']['exception'] && window['console']['table']) || 'undefined' != typeof navigator && navigator['userAgent'] && navigator['userAgent']['toLowerCase']()['match'](/firefox\/(\d+)/) && parseInt(RegExp['$1'], 0xa) >= 0x1f || 'undefined' != typeof navigator && navigator['userAgent'] && navigator['userAgent']['toLowerCase']()['match'](/applewebkit\/(\d+)/);
        }, es_exports['storage'] = 'undefined' != typeof chrome && void 0x0 !== chrome['storage'] ? chrome['storage']['local'] : (function () {

            try {
                return window['localStorage'];
            } catch (_0x4f589f) {}
        }()), es_exports['colors'] = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'], es_exports['formatters']['j'] = function (_0x1f61c0) {

            try {
                return JSON['stringify'](_0x1f61c0);
            } catch (_0xa527e5) {
                return '[UnexpectedJSONParseError]: ' + _0xa527e5['message'];
            }
        }, es_exports['enable'](_0x50d824());
    } ['call'](this, es_require(0x5e)));
}, function humanize_334_0x14e(es_module, es_exports, es_require) {


    function _0x3d2de9(_0x1ba02c) {
        var _0x1c3ea6;

        function _0x4e7b60() {

            if (_0x4e7b60['enabled']) {
                var _0x387d27 = _0x4e7b60,
                    _0x57f8bb = +new Date(),
                    _0x3e7619 = _0x57f8bb - (_0x1c3ea6 || _0x57f8bb);
                _0x387d27['diff'] = _0x3e7619, _0x387d27['prev'] = _0x1c3ea6, _0x387d27['curr'] = _0x57f8bb, _0x1c3ea6 = _0x57f8bb;
                for (var _0x4b6ca6 = new Array(arguments['length']), _0x5a34ae = 0x0; _0x5a34ae < _0x4b6ca6['length']; _0x5a34ae++) _0x4b6ca6[_0x5a34ae] = arguments[_0x5a34ae];
                _0x4b6ca6[0x0] = es_exports['coerce'](_0x4b6ca6[0x0]), 'string' != typeof _0x4b6ca6[0x0] && _0x4b6ca6['unshift']('%O');
                var _0x298038 = 0x0;
                _0x4b6ca6[0x0] = _0x4b6ca6[0x0]['replace'](/%([a-zA-Z%])/g, function (_0x4d9188, _0x23ac2d) {

                    if ('%%' === _0x4d9188) return _0x4d9188;
                    _0x298038++;
                    var _0xe86643 = es_exports['formatters'][_0x23ac2d];
                    if ('function' == typeof _0xe86643) {
                        var _0x228822 = _0x4b6ca6[_0x298038];
                        _0x4d9188 = _0xe86643['call'](_0x387d27, _0x228822), _0x4b6ca6['splice'](_0x298038, 0x1), _0x298038--;
                    }
                    return _0x4d9188;
                }), es_exports['formatArgs']['call'](_0x387d27, _0x4b6ca6), (_0x4e7b60['log'] || es_exports['log'] || console['log']['bind'](console))['apply'](_0x387d27, _0x4b6ca6);
            }
        }
        return _0x4e7b60['namespace'] = _0x1ba02c, _0x4e7b60['enabled'] = es_exports['enabled'](_0x1ba02c), _0x4e7b60['useColors'] = es_exports['useColors'](), _0x4e7b60['color'] = function (_0x5116c6) {
            var _0x43c373, _0xb17be6 = 0x0;
            for (_0x43c373 in _0x5116c6) _0xb17be6 = (_0xb17be6 << 0x5) - _0xb17be6 + _0x5116c6['charCodeAt'](_0x43c373), _0xb17be6 |= 0x0;
            return es_exports['colors'][Math['abs'](_0xb17be6) % es_exports['colors']['length']];
        }(_0x1ba02c), _0x4e7b60['destroy'] = _0x5ef00f, 'function' == typeof es_exports['init'] && es_exports['init'](_0x4e7b60), es_exports['instances']['push'](_0x4e7b60), _0x4e7b60;
    }

    function _0x5ef00f() {
        var _0x3c209f = es_exports['instances']['indexOf'](this);
        return -0x1 !== _0x3c209f && (es_exports['instances']['splice'](_0x3c209f, 0x1), !0x0);
    }(es_exports = es_module['exports'] = _0x3d2de9['debug'] = _0x3d2de9['default'] = _0x3d2de9)['coerce'] = function (_0x3683f5) {

        return _0x3683f5 instanceof Error ? _0x3683f5['stack'] || _0x3683f5['message'] : _0x3683f5;
    }, es_exports['disable'] = function () {

        es_exports['enable']('');
    }, es_exports['enable'] = function (_0x5043fd) {
        var _0x1a8c30;
        es_exports['save'](_0x5043fd), es_exports['names'] = [], es_exports['skips'] = [];
        var _0x113bb5 = ('string' == typeof _0x5043fd ? _0x5043fd : '')['split'](/[\s,]+/),
            _0x320283 = _0x113bb5['length'];
        for (_0x1a8c30 = 0x0; _0x1a8c30 < _0x320283; _0x1a8c30++) _0x113bb5[_0x1a8c30] && ('-' === (_0x5043fd = _0x113bb5[_0x1a8c30]['replace'](/\*/g, '.*?'))[0x0] ? es_exports['skips']['push'](new RegExp('^' + _0x5043fd['substr'](0x1) + '$')) : es_exports['names']['push'](new RegExp('^' + _0x5043fd + '$')));
        for (_0x1a8c30 = 0x0; _0x1a8c30 < es_exports['instances']['length']; _0x1a8c30++) {
            var _0x542417 = es_exports['instances'][_0x1a8c30];
            _0x542417['enabled'] = es_exports['enabled'](_0x542417['namespace']);
        }
    }, es_exports['enabled'] = function (_0x8e7cd4) {

        if ('*' === _0x8e7cd4[_0x8e7cd4['length'] - 0x1]) return !0x0;
        var _0x42329a, _0x1c3b0a;
        for (_0x42329a = 0x0, _0x1c3b0a = es_exports['skips']['length']; _0x42329a < _0x1c3b0a; _0x42329a++)
            if (es_exports['skips'][_0x42329a]['test'](_0x8e7cd4)) return !0x1;
        for (_0x42329a = 0x0, _0x1c3b0a = es_exports['names']['length']; _0x42329a < _0x1c3b0a; _0x42329a++)
            if (es_exports['names'][_0x42329a]['test'](_0x8e7cd4)) return !0x0;
        return !0x1;
    }, es_exports['humanize'] = es_require(0x14f), es_exports['instances'] = [], es_exports['names'] = [], es_exports['skips'] = [], es_exports['formatters'] = {};
}, function id_335_0x14f(es_module, es_exports) {
    var _0x423440 = 0x3e8,
        _0x12fafd = 0x3c * _0x423440,
        _0x319abf = 0x3c * _0x12fafd,
        _0x34a146 = 0x18 * _0x319abf,
        _0x5e5148 = 365.25 * _0x34a146;

    function _0x540a61(_0xaac20, _0x4dda24, _0x4a7820) {

        if (!(_0xaac20 < _0x4dda24)) return _0xaac20 < 1.5 * _0x4dda24 ? Math['floor'](_0xaac20 / _0x4dda24) + ' ' + _0x4a7820 : Math['ceil'](_0xaac20 / _0x4dda24) + ' ' + _0x4a7820 + 's';
    }
    es_module['exports'] = function (_0x41e110, _0x321c7e) {

        _0x321c7e = _0x321c7e || {};
        var _0x1e9d0f, _0x221aa2 = typeof _0x41e110;
        if ('string' === _0x221aa2 && _0x41e110['length'] > 0x0) return function (_0x277e71) {

            if ((_0x277e71 = String(_0x277e71))['length'] > 0x64) return;
            var _0x20e933 = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i ['exec'](_0x277e71);
            if (!_0x20e933) return;
            var _0x3d1b5c = parseFloat(_0x20e933[0x1]);
            switch ((_0x20e933[0x2] || 'ms')['toLowerCase']()) {
                case 'years':
                case 'year':
                case 'yrs':
                case 'yr':
                case 'y':
                    return _0x3d1b5c * _0x5e5148;
                case 'days':
                case 'day':
                case 'd':
                    return _0x3d1b5c * _0x34a146;
                case 'hours':
                case 'hour':
                case 'hrs':
                case 'hr':
                case 'h':
                    return _0x3d1b5c * _0x319abf;
                case 'minutes':
                case 'minute':
                case 'mins':
                case 'min':
                case 'm':
                    return _0x3d1b5c * _0x12fafd;
                case 'seconds':
                case 'second':
                case 'secs':
                case 'sec':
                case 's':
                    return _0x3d1b5c * _0x423440;
                case 'milliseconds':
                case 'millisecond':
                case 'msecs':
                case 'msec':
                case 'ms':
                    return _0x3d1b5c;
                default:
                    return;
            }
        }(_0x41e110);
        if ('number' === _0x221aa2 && !0x1 === isNaN(_0x41e110)) return _0x321c7e['long'] ? _0x540a61(_0x1e9d0f = _0x41e110, _0x34a146, 'day') || _0x540a61(_0x1e9d0f, _0x319abf, 'hour') || _0x540a61(_0x1e9d0f, _0x12fafd, 'minute') || _0x540a61(_0x1e9d0f, _0x423440, 'second') || _0x1e9d0f + ' ms' : function (_0x50f413) {

            if (_0x50f413 >= _0x34a146) return Math['round'](_0x50f413 / _0x34a146) + 'd';
            if (_0x50f413 >= _0x319abf) return Math['round'](_0x50f413 / _0x319abf) + 'h';
            if (_0x50f413 >= _0x12fafd) return Math['round'](_0x50f413 / _0x12fafd) + 'm';
            if (_0x50f413 >= _0x423440) return Math['round'](_0x50f413 / _0x423440) + 's';
            return _0x50f413 + 'ms';
        }(_0x41e110);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON['stringify'](_0x41e110));
    };
}, function start_module_336_0x150(es_module, es_exports, es_require) {
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
    es_require['r'](es_exports);
    //es_require(0x85);
    //es_require(0x140);
    //es_require(0x141);
    /*_export_129 = es_require(0x81),*/
    /*n_export_129 = es_require['n'](_export_129),*/
    var _0x2c15a8 = function (_0x398ccd) {

            return null != _0x398ccd ? _0x398ccd['constructor'] : null;
        },
        _0x19ed31 = function (_0x57cc8f, _0x57f89b) {
            return Boolean(_0x57cc8f && _0x57f89b && _0x57cc8f instanceof _0x57f89b);
        },
        _0x2e378f = function (_0x50dc6e) {
            return null == _0x50dc6e;
        },
        _0x2979d1 = function (_0x8af40) {
            return _0x2c15a8(_0x8af40) === Object;
        },
        _0x324371 = function (_0x17d8cc) {
            return _0x2c15a8(_0x17d8cc) === String;
        },
        _0x1e9f61 = function (_0x1621c2) {

            return Array['isArray'](_0x1621c2);
        },
        _0x3b2133 = function (_0x149947) {
            return _0x19ed31(_0x149947, NodeList);
        },
        _0x507120 = function (_0x2f93cf) {

            return _0x2e378f(_0x2f93cf) || (_0x324371(_0x2f93cf) || _0x1e9f61(_0x2f93cf) || _0x3b2133(_0x2f93cf)) && !_0x2f93cf['length'] || _0x2979d1(_0x2f93cf) && !Object['keys'](_0x2f93cf)['length'];
        };

    function SetEvent(thisArg, object, evt) {
        var _This = this,
            isAdd = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] && arguments[0x3],
            passive = !(arguments['length'] > 0x4 && void 0x0 !== arguments[0x4]) || arguments[0x4],
            capture = arguments['length'] > 0x5 && void 0x0 !== arguments[0x5] && arguments[0x5];
        if (thisArg && 'addEventListener' in thisArg && !I.empty(object) && I.func(evt)) {
            var eventTypes = object['split'](' '),
                opt = capture;
            opt = {
                'passive': passive,
                'capture': capture
            };
            eventTypes['forEach'](function (type) {

                _This && _This['eventListeners'] && isAdd && _This['eventListeners']['push']({
                    'element': thisArg,
                    'type': type,
                    'callback': evt,
                    'options': opt
                }), thisArg[isAdd ? 'addEventListener' : 'removeEventListener'](type, evt, opt);
            });
        }
    }

    function addEvent(object) {
        var evt = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            func = arguments['length'] > 0x2 ? arguments[0x2] : void 0x0,
            capture = !(arguments['length'] > 0x3 && void 0x0 !== arguments[0x3]) || arguments[0x3],
            ext = arguments['length'] > 0x4 && void 0x0 !== arguments[0x4] && arguments[0x4];
        SetEvent['call'](this, object, evt, func, !0x0, capture, ext);
    }

    function saveEvent(object) {
        var evt = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            func = arguments['length'] > 0x2 ? arguments[0x2] : void 0x0,
            capture = !(arguments['length'] > 0x3 && void 0x0 !== arguments[0x3]) || arguments[0x3],
            opt = arguments['length'] > 0x4 && void 0x0 !== arguments[0x4] && arguments[0x4];
        SetEvent['call'](this, object, evt, func, !0x1, capture, opt);
    }

    function onceEvent(object) {
        var evt = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            func = arguments['length'] > 0x2 ? arguments[0x2] : void 0x0,
            passive = !(arguments['length'] > 0x3 && void 0x0 !== arguments[0x3]) || arguments[0x3],
            capture = arguments['length'] > 0x4 && void 0x0 !== arguments[0x4] && arguments[0x4];
        SetEvent['call'](this, object, evt, function runfunc() {

            saveEvent(object, evt, runfunc, passive, capture);
            for (var num = arguments['length'], arr = new Array(num), index = 0x0; index < num; index++) arr[index] = arguments[index];
            func['apply'](this, arr);
        }, !0x0, passive, capture);
    }

    function callEvent(object) {
        var type = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            bubbles = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] && arguments[0x2],
            detail = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : {};
        if (I.elm(object) && !I.empty(type)) {
            var event = new CustomEvent(type, {
                'bubbles': bubbles,
                'detail': Object['assign']({}, detail, {
                    'emulator': this
                })
            });
            object['dispatchEvent'](event);
        }
    }
    //var _export_130 = es_require(0x82),n__export_130 = es_require['n'](_export_130);

    function _0x31d3b3(_0x528bad, _0x333513) {

        return function (_0x1cb827) {

            if (Array['isArray'](_0x1cb827)) return _0x1cb827;
        }(_0x528bad) || function (_0x14c6fe, _0x164b6a) {
            var _0x23c80b = [],
                _0x5c8191 = !0x0,
                _0x3400b8 = !0x1,
                _0x55158c = void 0x0;
            try {
                for (var _0x2acfc2, _0x43dd02 = _0x14c6fe[Symbol['iterator']](); !(_0x5c8191 = (_0x2acfc2 = _0x43dd02['next']())['done']) && (_0x23c80b['push'](_0x2acfc2['value']), !_0x164b6a || _0x23c80b['length'] !== _0x164b6a); _0x5c8191 = !0x0);
            } catch (_0x4ba48d) {
                _0x3400b8 = !0x0, _0x55158c = _0x4ba48d;
            } finally {
                try {
                    _0x5c8191 || null == _0x43dd02['return'] || _0x43dd02['return']();
                } finally {
                    if (_0x3400b8) throw _0x55158c;
                }
            }
            return _0x23c80b;
        }(_0x528bad, _0x333513) || (function () {

            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }());
    }

    function _0x3266c5(_0x54209e, _0x41bd08) {
        var _0x2ac021 = _0x54209e['length'] ? _0x54209e : [_0x54209e];
        Array['from'](_0x2ac021)['reverse']()['forEach'](function (_0x431437, _0x277867) {
            var _0x2c1f39 = _0x277867 > 0x0 ? _0x41bd08['cloneNode'](!0x0) : _0x41bd08,
                _0x2bb4e2 = _0x431437['parentNode'],
                _0x5462ee = _0x431437['nextSibling'];
            _0x2c1f39['appendChild'](_0x431437), _0x5462ee ? _0x2bb4e2['insertBefore'](_0x2c1f39, _0x5462ee) : _0x2bb4e2['appendChild'](_0x2c1f39);
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

    function _0x24b9ed(_0xbca52c) {

        I.nodelist(_0xbca52c) || I.array(_0xbca52c) ? Array['from'](_0xbca52c)['forEach'](_0x24b9ed) : I.elm(_0xbca52c) && I.elm(_0xbca52c['parentNode']) && _0xbca52c['parentNode']['removeChild'](_0xbca52c);
    }

    function _0x4d33e3(_0x243508, _0x53790c) {

        if (!I.str(_0x243508) || I.empty(_0x243508)) return {};
        var _0x3f565c = {},
            _0x487b80 = _0x53790c;
        return _0x243508['split'](',')['forEach'](function (_0x1c8125) {
            var _0x3609b0 = _0x1c8125['trim'](),
                _0x319f0e = _0x3609b0['replace']('.', ''),
                _0x5a3efe = _0x3609b0['replace'](/[[\]]/g, '')['split']('='),
                _0x5eed0e = _0x5a3efe[0x0],
                _0x4e1477 = _0x5a3efe['length'] > 0x1 ? _0x5a3efe[0x1]['replace'](/["']/g, '') : '';
            switch (_0x3609b0['charAt'](0x0)) {
                case '.':
                    I.obj(_0x487b80) && I.str(_0x487b80['class']) && (_0x487b80['class'] += ' ' ['concat'](_0x319f0e)), _0x3f565c['class'] = _0x319f0e;
                    break;
                case '#':
                    _0x3f565c['id'] = _0x3609b0['replace']('#', '');
                    break;
                case '[':
                    _0x3f565c[_0x5eed0e] = _0x4e1477;
            }
        }), _0x3f565c;
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
        var _0x4da8c8 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : null,
            _0x2b151e = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] && arguments[0x1];
        if (I.elm(_0x4da8c8)) {
            var _0x1599d7 = this.SelectorAll('button:not(:disabled), input:not(:disabled), [tabindex]'),
                _0x4e1cb5 = _0x1599d7[0x0],
                _0x1c45af = _0x1599d7[_0x1599d7['length'] - 0x1];
            SetEvent['call'](this, this['elements']['container'], 'keydown', function (_0x21378e) {

                if ('Tab' === _0x21378e['key'] && 0x9 === _0x21378e['keyCode']) {
                    var _0x4c4c4d = document['activeElement'];
                    _0x4c4c4d !== _0x1c45af || _0x21378e['shiftKey'] ? _0x4c4c4d === _0x4e1cb5 && _0x21378e['shiftKey'] && (_0x1c45af['focus'](), _0x21378e['preventDefault']()) : (_0x4e1cb5['focus'](), _0x21378e['preventDefault']());
                }
            }, _0x2b151e, !0x1);
        }
    }

    function _0x348ac8() {
        var _0x1e3486 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : null,
            _0x2f6eb2 = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] && arguments[0x1];
        I.elm(_0x1e3486) && (_0x1e3486['focus'](), _0x2f6eb2 && elmAddRemoveClass(_0x1e3486, this['config']['classNames']['tabFocus']));
    }

    /*
    function getElmClassName(name) {
        return (getClassName(name)  );
        //console.log(name);
        return n_export_129['a']['bind'](n__export_130['a'])(name);
    }
    */
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

    function _0x1680da(_0x3127d7, _0x180127) {
        return function (_0x1bf724) {

            if (I.array(_0x1bf724)) return _0x1bf724;
        }(_0x3127d7) || function (_0x1f176a, _0x2229fc) {
            var _0x21fdc1 = [],
                _0x9eea0b = !0x0,
                _0x278f49 = !0x1,
                _0x4110b9 = void 0x0;
            try {
                for (var _0x3d7c39, _0x49c88c = _0x1f176a[Symbol['iterator']](); !(_0x9eea0b = (_0x3d7c39 = _0x49c88c['next']())['done']) && (_0x21fdc1['push'](_0x3d7c39['value']), !_0x2229fc || _0x21fdc1['length'] !== _0x2229fc); _0x9eea0b = !0x0);
            } catch (_0x3ac120) {
                _0x278f49 = !0x0, _0x4110b9 = _0x3ac120;
            } finally {
                try {
                    _0x9eea0b || null == _0x49c88c['return'] || _0x49c88c['return']();
                } finally {
                    if (_0x278f49) throw _0x4110b9;
                }
            }
            return _0x21fdc1;
        }(_0x3127d7, _0x180127) || (function () {

            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }());
    }
    var _export_53 = es_require(0x35),
        _0xe3873 = es_require['n'](_export_53),
        _export_1 = es_require(0x1),
        _0x1c59aa,
        _0x1e8be3 = function (_0x35bbcb) {

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

    function _0x761efe(_0x31a1ed, _0x35a474) {

        if ('object' === _0x163757(_0x31a1ed) && _0x31a1ed['files'] && (_0x31a1ed = _0x31a1ed['files'][0x0]), this['littleEndian'] = !0x1, this['offset'] = 0x0, this['_lastRead'] = null, 'object' === _0x163757(_0x31a1ed) && _0x31a1ed['name'] && _0x31a1ed['size']) {
            if ('function' != typeof window['FileReader']) throw new Error('Incompatible Browser');
            this['fileName'] = _0x31a1ed['name'], this['fileType'] = _0x31a1ed['type'], this['fileSize'] = _0x31a1ed['size'], this['_fileReader'] = new FileReader(), this['_fileReader']['marcFile'] = this, this['_fileReader']['addEventListener']('load', function () {

                this['marcFile']['_u8array'] = new Uint8Array(this['result']), this['marcFile']['_dataView'] = new DataView(this['result']), _0x35a474 && _0x35a474['call']();
            }, !0x1), this['_fileReader']['readAsArrayBuffer'](_0x31a1ed);
        } else {
            if ('object' === _0x163757(_0x31a1ed) && 'string' == typeof _0x31a1ed['fileName'] && 'boolean' == typeof _0x31a1ed['littleEndian']) {
                this['fileName'] = _0x31a1ed['fileName'], this['fileType'] = _0x31a1ed['fileType'], this['fileSize'] = _0x31a1ed['fileSize'];
                var _0x5a0c04 = new ArrayBuffer(_0x31a1ed);
                this['_u8array'] = new Uint8Array(this['fileType']), this['_dataView'] = new DataView(this['fileType']), _0x31a1ed['copyToFile'](this, 0x0), _0x35a474 && _0x35a474['call']();
            } else {
                if ('object' === _0x163757(_0x31a1ed) && 'number' == typeof _0x31a1ed['byteLength']) this['fileName'] = 'file.bin', this['fileType'] = 'application/octet-stream', this['fileSize'] = _0x31a1ed['byteLength'], void 0x0 !== _0x31a1ed['buffer'] && (_0x31a1ed = _0x31a1ed['buffer']), this['_u8array'] = new Uint8Array(_0x31a1ed), this['_dataView'] = new DataView(_0x31a1ed), _0x35a474 && _0x35a474['call']();
                else {
                    if ('number' != typeof _0x31a1ed) throw new Error('Invalid source');
                    this['fileName'] = 'file.bin', this['fileType'] = 'application/octet-stream', this['fileSize'] = _0x31a1ed, _0x5a0c04 = new ArrayBuffer(_0x31a1ed), (this['_u8array'] = new Uint8Array(_0x5a0c04), this['_dataView'] = new DataView(_0x5a0c04), _0x35a474 && _0x35a474['call']());
                }
            }
        }
    }
    _0x761efe['IS_MACHINE_LITTLE_ENDIAN'] = (_0x1c59aa = new ArrayBuffer(0x2), new DataView(_0x1c59aa)['setInt16'](0x0, 0x100, !0x0), 0x100 === new Int16Array(_0x1c59aa)[0x0]), _0x761efe['prototype']['seek'] = function (_0x448d09) {

        this['offset'] = _0x448d09;
    }, _0x761efe['prototype']['skip'] = function (_0x3b38e1) {

        this['offset'] += _0x3b38e1;
    }, _0x761efe['prototype']['isEOF'] = function () {

        return !(this['offset'] < this['fileSize']);
    }, _0x761efe['prototype']['slice'] = function (_0x399f8a, _0x439f9c) {
        var _0x41048c;
        return _0x439f9c = _0x439f9c || this['fileSize'] - _0x399f8a, void 0x0 !== this['_u8array']['buffer']['slice'] ? ((_0x41048c = new _0x761efe(0x0))['fileSize'] = _0x439f9c, _0x41048c['_u8array'] = new Uint8Array(this['_u8array']['buffer']['slice'](_0x399f8a, _0x399f8a + _0x439f9c))) : (_0x41048c = new _0x761efe(_0x439f9c), this['copyToFile'](_0x41048c, _0x399f8a, _0x439f9c, 0x0)), _0x41048c['fileName'] = this['fileName'], _0x41048c['fileType'] = this['fileType'], _0x41048c['littleEndian'] = this['littleEndian'], _0x41048c;
    }, _0x761efe['prototype']['copyToFile'] = function (_0x54d257, _0x23b48b, _0x2e15ac, _0x342caa) {

        void 0x0 === _0x342caa && (_0x342caa = _0x23b48b), _0x2e15ac = _0x2e15ac || this['fileSize'] - _0x23b48b;
        for (var _0x424317 = 0x0; _0x424317 < _0x2e15ac; _0x424317++) _0x54d257['_u8array'][_0x342caa + _0x424317] = this['_u8array'][_0x23b48b + _0x424317];
    }, _0x761efe['prototype']['save'] = function () {
        var _0x3d2138;
        try {
            _0x3d2138 = new Blob([this['_u8array']], {
                'type': this['fileType']
            });
        } catch (_0x177f80) {
            if (window['BlobBuilder'] = window['BlobBuilder'] || window['WebKitBlobBuilder'] || window['MozBlobBuilder'] || window['MSBlobBuilder'], 'InvalidStateError' !== _0x177f80['name'] || !window['BlobBuilder']) throw new Error('Incompatible Browser');
            var _0x4f709a = new BlobBuilder();
            _0x4f709a['append'](this['_u8array']['buffer']), _0x3d2138 = _0x4f709a['getBlob'](this['fileType']);
        }
        saveAs(_0x3d2138, this['fileName']);
    }, _0x761efe['prototype']['readU8'] = function () {

        return this['_lastRead'] = this['_u8array'][this['offset']], this['offset']++, this['_lastRead'];
    }, _0x761efe['prototype']['readU16'] = function () {

        return this['littleEndian'] ? this['_lastRead'] = this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) : this['_lastRead'] = (this['_u8array'][this['offset']] << 0x8) + this['_u8array'][this['offset'] + 0x1], this['offset'] += 0x2, this['_lastRead'] >>> 0x0;
    }, _0x761efe['prototype']['readU24'] = function () {

        return this['littleEndian'] ? this['_lastRead'] = this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) + (this['_u8array'][this['offset'] + 0x2] << 0x10) : this['_lastRead'] = (this['_u8array'][this['offset']] << 0x10) + (this['_u8array'][this['offset'] + 0x1] << 0x8) + this['_u8array'][this['offset'] + 0x2], this['offset'] += 0x3, this['_lastRead'] >>> 0x0;
    }, _0x761efe['prototype']['readU32'] = function () {

        return this['littleEndian'] ? this['_lastRead'] = this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) + (this['_u8array'][this['offset'] + 0x2] << 0x10) + (this['_u8array'][this['offset'] + 0x3] << 0x18) : this['_lastRead'] = (this['_u8array'][this['offset']] << 0x18) + (this['_u8array'][this['offset'] + 0x1] << 0x10) + (this['_u8array'][this['offset'] + 0x2] << 0x8) + this['_u8array'][this['offset'] + 0x3], this['offset'] += 0x4, this['_lastRead'] >>> 0x0;
    }, _0x761efe['prototype']['readBytes'] = function (_0x575b10) {

        this['_lastRead'] = new Array(_0x575b10);
        for (var _0x3280df = 0x0; _0x3280df < _0x575b10; _0x3280df++) this['_lastRead'][_0x3280df] = this['_u8array'][this['offset'] + _0x3280df];
        return this['offset'] += _0x575b10, this['_lastRead'];
    }, _0x761efe['prototype']['readString'] = function (_0x83afb5) {

        this['_lastRead'] = '';
        for (var _0x126bb4 = 0x0; _0x126bb4 < _0x83afb5 && this['offset'] + _0x126bb4 < this['fileSize'] && this['_u8array'][this['offset'] + _0x126bb4] > 0x0; _0x126bb4++) this['_lastRead'] = this['_lastRead'] + String['fromCharCode'](this['_u8array'][this['offset'] + _0x126bb4]);
        return this['offset'] += _0x83afb5, this['_lastRead'];
    }, _0x761efe['prototype']['writeU8'] = function (_0x368acd) {

        this['_u8array'][this['offset']] = _0x368acd, this['offset']++;
    }, _0x761efe['prototype']['writeU16'] = function (_0x594e82) {

        this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x594e82, this['_u8array'][this['offset'] + 0x1] = _0x594e82 >> 0x8) : (this['_u8array'][this['offset']] = _0x594e82 >> 0x8, this['_u8array'][this['offset'] + 0x1] = 0xff & _0x594e82), this['offset'] += 0x2;
    }, _0x761efe['prototype']['writeU24'] = function (_0x581e87) {

        this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x581e87, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x581e87) >> 0x8, this['_u8array'][this['offset'] + 0x2] = (0xff0000 & _0x581e87) >> 0x10) : (this['_u8array'][this['offset']] = (0xff0000 & _0x581e87) >> 0x10, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x581e87) >> 0x8, this['_u8array'][this['offset'] + 0x2] = 0xff & _0x581e87), this['offset'] += 0x3;
    }, _0x761efe['prototype']['writeU32'] = function (_0x4cf7b9) {

        this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x4cf7b9, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x4cf7b9) >> 0x8, this['_u8array'][this['offset'] + 0x2] = (0xff0000 & _0x4cf7b9) >> 0x10, this['_u8array'][this['offset'] + 0x3] = (0xff000000 & _0x4cf7b9) >> 0x18) : (this['_u8array'][this['offset']] = (0xff000000 & _0x4cf7b9) >> 0x18, this['_u8array'][this['offset'] + 0x1] = (0xff0000 & _0x4cf7b9) >> 0x10, this['_u8array'][this['offset'] + 0x2] = (0xff00 & _0x4cf7b9) >> 0x8, this['_u8array'][this['offset'] + 0x3] = 0xff & _0x4cf7b9), this['offset'] += 0x4;
    }, _0x761efe['prototype']['writeBytes'] = function (_0x3eb2a0) {

        for (var _0x5520af = 0x0; _0x5520af < _0x3eb2a0['length']; _0x5520af++) this['_u8array'][this['offset'] + _0x5520af] = _0x3eb2a0[_0x5520af];
        this['offset'] += _0x3eb2a0['length'];
    }, _0x761efe['prototype']['writeString'] = function (_0x52b17e, _0x4a5232) {

        _0x4a5232 = _0x4a5232 || _0x52b17e['length'];
        for (var _0x91e34d = 0x0; _0x91e34d < _0x52b17e['length'] && _0x91e34d < _0x4a5232; _0x91e34d++) this['_u8array'][this['offset'] + _0x91e34d] = _0x52b17e['charCodeAt'](_0x91e34d);
        for (; _0x91e34d < _0x4a5232; _0x91e34d++) this['_u8array'][this['offset'] + _0x91e34d] = 0x0;
        this['offset'] += _0x4a5232;
    };
    var _0x2181ff = _0x761efe,
        _0x20ca82 = 0x0;

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
        _0x37c8b2 += 0x3, this['truncate'] && (_0x37c8b2 += 0x3), tempFile = new _0x2181ff(_0x37c8b2), tempFile['fileName'] = _0x591388 + '.ips', tempFile['writeString']('PATCH');
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
            _0x21bc72 === _0x58dba4['fileSize'] ? _0x36d089 = _0x58dba4['slice'](0x0, _0x58dba4['fileSize']) : (_0x36d089 = new _0x2181ff(_0x21bc72), _0x58dba4['copyToFile'](_0x36d089, 0x0));
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
        for (var _0x1d8955 = new _0x2181ff(this['targetSize']), _0x35c896 = 0x0, _0x4ad173 = 0x0, _0x3f341a = 0x0; _0x3f341a < this['actions']['length']; _0x3f341a++) {
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
        var _0x3373ae = new _0x2181ff(_0x5775c6 += 0xc);
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
        _0x59a5b3 += 0xc, tempFile = new _0x2181ff(_0x59a5b3), tempFile['writeVLV'] = _0x23561c, tempFile['fileName'] = _0x5c3f14 + '.ups', tempFile['writeString'](_0x4bc4ab), tempFile['writeVLV'](this['sizeInput']), tempFile['writeVLV'](this['sizeOutput']);
        for (_0x28badf = 0x0; _0x28badf < this['records']['length']; _0x28badf++) tempFile['writeVLV'](this['records'][_0x28badf]['offset']), tempFile['writeBytes'](this['records'][_0x28badf]['XORdata']), tempFile['writeU8'](0x0);
        return tempFile['littleEndian'] = !0x0, tempFile['writeU32'](this['checksumInput']), tempFile['writeU32'](this['checksumOutput']), tempFile['writeU32'](getCrc32int(tempFile, 0x0, !0x0)), tempFile;
    }, _0x50fdb2['prototype']['validateSource'] = function (_0xa205f4, _0x4721ec) {

        return getCrc32int(_0xa205f4, _0x4721ec) === this['checksumInput'];
    }, _0x50fdb2['prototype']['apply'] = function (_0x1d2eff, _0x2767af) {

        _0x2767af && this['validateSource'](_0x1d2eff), tempFile = new _0x2181ff(this['sizeOutput']), _0x1d2eff['copyToFile'](tempFile, 0x0, this['sizeInput']), _0x1d2eff['seek'](0x0);
        for (var _0x330f2c = 0x0; _0x330f2c < this['records']['length']; _0x330f2c++) {
            var _0x3e9369 = this['records'][_0x330f2c];
            tempFile['skip'](_0x3e9369['offset']), _0x1d2eff['skip'](_0x3e9369['offset']);
            for (var _0x4afaa7 = 0x0; _0x4afaa7 < _0x3e9369['XORdata']['length']; _0x4afaa7++) tempFile['writeU8']((_0x1d2eff['isEOF']() ? 0x0 : _0x1d2eff['readU8']()) ^ _0x3e9369['XORdata'][_0x4afaa7]);
            tempFile['skip'](0x1), _0x1d2eff['skip'](0x1);
        }
        return _0x2767af && (getCrc32int(tempFile), this['checksumOutput']), tempFile;
    };

    function _0x1be57e(_0xfca35c, _0x2a0960, _0x302b27, _0xd2d2ea, _0x24098a, _0x2e100b, _0x1ba14c) {

        try {
            var _0x189b15 = _0xfca35c[_0x2e100b](_0x1ba14c),
                _0x472a20 = _0x189b15['value'];
        } catch (_0x314010) {
            return void _0x302b27(_0x314010);
        }
        _0x189b15['done'] ? _0x2a0960(_0x472a20) : Promise['resolve'](_0x472a20)['then'](_0xd2d2ea, _0x24098a);
    }

    function _0x5a91ac(_0x2fd460) {

        return (_0x5a91ac = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (_0x4d951b) {
            return typeof _0x4d951b;
        } : function (_0x41c98c) {

            return _0x41c98c && 'function' == typeof Symbol && _0x41c98c['constructor'] === Symbol && _0x41c98c !== Symbol['prototype'] ? 'symbol' : typeof _0x41c98c;
        })(_0x2fd460);
    }
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
        'aspectRatio': 0x4 / 0x3,
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
        getGameCoreOptions: null,
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
                            var elm2value = _export_1['Gamepad']['StandardButtons'][datas['value2']];
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
                    _0x177d11 = null;
                if (ejs_Controller['netplayNewUser']) {
                    E['addEvent'](elmDialogsNetplaySelector(getCtrlclassName('btn-cancel', !0)), 'click', (event) => {
                        toggleHidden(ElmDialogsNetplay, !0x0);
                        ejs_Controller['netPlayDialogOpened'] = !0x1;
                        ejs_Controller['stopLoadRooms']();
                        event['stopPropagation']();
                        E['elements']['container']['focus']();
                        return !0x1;
                    });
                    var _0x2ca3ff, _0x5be3ac = function () {

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
                                            })) : _0x177d11['send'](JSON['stringify']({
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
                                    } else 'n:' == _0x1a7c3c['substring'](0x0, 0x2) && (ejs_Controller['netplayNewUser'](), ejs_Controller['netPlayUsers'][0x1] = decodeURIComponent(_0x1a7c3c['substring'](0x2)), _0x5be3ac(), _0x88c152['show'](E['elements']['container'], decodeURIComponent(_0x1a7c3c['substring'](0x2)) + ' joined')), 'q:' == _0x1a7c3c['substring'](0x0, 0x2) && (ejs_Controller['netPlayIsHost'] ? (ejs_Controller['netPlayClose'](), ejs_Controller['netPlayHost'](), ejs_Controller['netPlayUsers'][0x1] = '', _0x5be3ac(), _0x88c152['show'](E['elements']['container'], decodeURIComponent(_0x1a7c3c['substring'](0x2)) + ' quited')) : _0x177d11['close']());
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
                                        var _0x205040 = result['nicknames'];
                                        _0x205040[0x1] && (ejs_Controller['playerName'] = _0x205040[0x1]), _0x208711['classList']['remove'](getClassName('is-open')), _0x2ca3ff = ejs_loader['servers'][_0x5f2c65]['url'], (_0x177d11 = new WebSocket(_0x2ca3ff + 'room/' + result['room_id']))['onopen'] = function (_0x31cd10) {

                                            ejs_Controller['hideLoading']['call'](E), _0x177d11['send']('n:' ['concat'](encodeURIComponent(ejs_Controller['playerName']))), E['playing'] || Array['from'](E['elements']['buttons']['play'])['forEach'](function (_0x5f4fd6) {

                                                E['callEvent'](_0x5f4fd6, 'click');
                                            }), ejs_Controller['netPlayClient'](), ejs_Controller['stopLoadRooms'](), ejs_Controller['openRoom'](E), _0x2fb1d8();
                                        }, _0x177d11['onclose'] = function (_0x3b7ad8) {

                                            ejs_Controller['hideLoading']['call'](E), ejs_Controller['loadRoomsList'](), _0x112810(), 0x3ed != _0x3b7ad8['code'] && (_0x26d33b['querySelector']('#modal-7d8fd50ed642340b-content').innerHTML = 'Error', _0x3e3214['show']('modal-7d8fd50ed642340b', {
                                                'closeTrigger': 'data-modal-close'
                                            }));
                                        }, _0x177d11['onmessage'] = function (_0x98523b) {
                                            _0x2941ff(_0x98523b);
                                        }, _0x177d11['onerror'] = function (_0x3e05ce) {}, ejs_Controller['netPlayUsers'][0x0] = _0x205040[0x0], ejs_Controller['netPlayUsers'][0x1] = _0x205040[0x1], ejs_Controller['netPlayRoomname'] = result['room_name'], ejs_Controller['netPlayPassword'] = _0x4c414d, _0x5be3ac();
                                    }

                                },
                                error(_0x1b6a3e) {

                                    ejs_Controller['hideLoading']['call'](E), _0x26d33b['querySelector']('#modal-7d8fd50ed642340b-content').innerHTML = 'Error: ' + ('string' == typeof _0x1b6a3e ? _0x1b6a3e : ''), _0x3e3214['show']('modal-7d8fd50ed642340b', {
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
                                            _0x2265a8.innerHTML = '<td>' ['concat'](_0x3c14fb, '</td><td>')['concat'](_0x588cef)['concat'](_0x4a53f3)['concat'](_0x429b30['name'], '</td><td>')['concat'](_0x429b30['players'], '/2</td><td>')['concat'](_0x3b7651, '</td>'), E['addEvent'](_0x2265a8['querySelector'](getCtrlclassName('btn-join-room', !0)), 'click', _0x22cdbf), _0x55392d['appendChild'](_0x2265a8);
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
                        _0x2ca3ff = ejs_loader['servers'][_0x48ed40]['url'];
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

                                    if (ejs_Controller['stopLoadRooms'](), _0xe989f['closeModal'](), !result['room_id']) throw 'error';
                                    ejs_Controller['netPlayPassword'] = _0x2366c0, ejs_Controller['netPlayRoomname'] = _0x5aa2c3, (_0x177d11 = new WebSocket(_0x2ca3ff + 'room/' + result['room_id']))['onopen'] = function (_0x1ddcd0) {

                                        ejs_Controller['hideLoading']['call'](E), _0x177d11['send']('core_name=' ['concat'](E['system'], '&game_crc=')['concat'](ejs_Controller['romcrc32'], '&nick=')['concat'](encodeURIComponent(ejs_Controller['playerName']))), E['playing'] || Array['from'](E['elements']['buttons']['play'])['forEach'](function (_0x4e31d1) {

                                            E['callEvent'](_0x4e31d1, 'click');
                                        }), ejs_Controller['netPlayIsHost'] = !0x0, ejs_Controller['netPlayHost'](), _0xe989f['closeModal'](), ejs_Controller['stopLoadRooms'](), ejs_Controller['openRoom'](E), ejs_Controller['netPlayUsers'][0x0] = ejs_Controller['playerName'], _0x2fb1d8();
                                    }, _0x177d11['onclose'] = function (_0x41a801) {

                                        ejs_Controller['hideLoading']['call'](E), ejs_Controller['loadRoomsList'](), _0x112810(), 0x3ed != _0x41a801['code'] && (_0x26d33b['querySelector']('#modal-7d8fd50ed642340b-content').innerHTML = 'Error', _0x3e3214['show']('modal-7d8fd50ed642340b', {
                                            'closeTrigger': 'data-modal-close'
                                        }));
                                    }, _0x177d11['onmessage'] = function (_0x57761b) {
                                        _0x2941ff(_0x57761b);
                                    }, _0x177d11['onerror'] = function (_0x24beed) {};

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

                        return _0x177d11['close'](), ejs_Controller['stopLoadRooms'](), ejs_Controller['loadRoomsList'](), ejs_Controller['netPlayClose'](), _0xcbfb0c['stopPropagation'](), !0x1;
                    });
                    addEvent(window, 'message', function (_0xb9873d) {

                        return _0xb9873d['source'] == window && (I.obj(_0xb9873d['data']) && ('netplay' == _0xb9873d['data']['type'] && _0xb9873d['data']['data'] instanceof Uint8Array && (_0xb9873d['data']['data'][0x3], _0x177d11['send'](_0xb9873d['data']['data'])), void('netplay-close' == _0xb9873d['data']['type'] && (_0x177d11['close'](), ejs_Controller['netPlayDialogOpened'] && (ejs_Controller['stopLoadRooms'](), ejs_Controller['loadRoomsList']()), ejs_Controller['netPlayClose'](), _0x112810()))));
                    });
                }
            }
        },
        setDiskContainer: function () {
            var _0x860c5a = this;
            if (!0x1 === ejs_loader['diskControl']) return _0x860c5a['elements']['container']['querySelector'](getClassName('ejs__disk', 1))['remove'](), !0x1;
            if (ejs_Controller['getDiskNum'] && ejs_Controller['getDiskNum']() > 0x1) {
                for (var _0x162ee6, _0x2d4c03 = ejs_Controller['getDiskNum'](), _0x4b6173 = _0x860c5a['elements']['container']['querySelector']('.' ['concat'](getClassName('ejs__disk__container'), ' > div')), _0x20eb86 = function (_0x483aa9) {

                        (_0x162ee6 = createElm('div', {
                            'class': getClassName('ejs__disk__index')
                        })).innerHTML = 'Disk ' ['concat'](_0x483aa9), addEvent['call'](_0x860c5a, _0x162ee6, 'click touchstart', function (_0x5310a2) {

                            ejs_Controller['ejectDisk'] && ejs_Controller['ejectDisk'](), ejs_Controller['setDisk'](_0x483aa9 - 0x1), ejs_Controller['ejectDisk'] && setTimeout(function () {

                                ejs_Controller['ejectDisk']();
                            }, 0x12c), 'psx' == _0x860c5a['system'] || 'psx-legacy' == _0x860c5a['system'] ? (_0x860c5a['elements']['buttons']['disk']['querySelector']('span').innerHTML = 'Current Disc: ' + _0x483aa9, _0x88c152['show'](_0x860c5a['elements']['container'], 'Change Disc: ' + _0x483aa9)) : (_0x860c5a['elements']['buttons']['disk']['querySelector']('span').innerHTML = 'Current Disk: ' + _0x483aa9, _0x88c152['show'](_0x860c5a['elements']['container'], 'Change Disk: ' + _0x483aa9)), toggleHidden(_0x860c5a['elements']['container']['querySelector'](getClassName('ejs__disk__container', 1)), !0x0);
                            var _0x18598e = getClassName('ejs__tooltip--visible'),
                                _0x1200ed = _0x860c5a['elements']['buttons']['disk']['querySelector'](getClassName('ejs__tooltip', 1));
                            elmAddRemoveClass(_0x1200ed, _0x18598e, !0x0), setTimeout(function () {
                                elmAddRemoveClass(_0x1200ed, _0x18598e, !0x1);
                            }, 0x1388);
                        }), _0x4b6173['appendChild'](_0x162ee6);
                    }, _0x464a6e = _0x2d4c03; _0x464a6e >= 0x1; _0x464a6e--) _0x20eb86(_0x464a6e);
                _0x860c5a['elements']['buttons']['disk']['querySelector']('span').innerHTML = 'Current Disk: 1', addEvent['call'](_0x860c5a, _0x860c5a['elements']['buttons']['disk'], 'click', function (_0x194d3d) {

                    toggleHidden(_0x860c5a['elements']['container']['querySelector'](getClassName('ejs__disk__container', 1)));
                });
            } else _0x860c5a['elements']['container']['querySelector'](getClassName('ejs__disk', 1))['remove']();
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
                _0x428a47 = new _export_1[('Gamepad')]();
            if (ejs_Controller['gamepad'] = _0x428a47, _0x428a47['init']()) {
                var _0x52a3bb = 0x0;
                _0x428a47['bind'](_export_1['Gamepad']['Event']['TICK'], function (_0x4a508d) {

                    _0x4a508d['forEach'](function (_0x225640) {
                        var _0x17e1cd, _0x138e9e;
                        _0x225640 && _0x225640['axes'] && _0x225640['axes'][0x9] && ((_0x17e1cd = _0x225640['axes'][0x9]) < 3.28571 ? (_0x52a3bb = _0x17e1cd, 0x1 == _0x17e1cd ? (_0x225640['extra_buttons'][0xc]['pressed'] || (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xe]['pressed'] || (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }))) : _0x17e1cd <= -0.7142857 && _0x17e1cd >= -0.714291 ? (_0x225640['extra_buttons'][0xc]['pressed'] || (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xf]['pressed'] || (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }))) : _0x17e1cd >= 0.42856 && _0x17e1cd <= 0.42858 ? (_0x225640['extra_buttons'][0xd]['pressed'] || (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xe]['pressed'] || (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }))) : _0x17e1cd >= -0.14287 && _0x17e1cd <= -0.14285 ? (_0x225640['extra_buttons'][0xd]['pressed'] || (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xf]['pressed'] || (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }))) : _0x17e1cd <= -0x1 && _0x17e1cd >= -1.01 ? _0x225640['extra_buttons'][0xc]['pressed'] || (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })) : _0x17e1cd >= 0.142857 && _0x17e1cd <= 0.142858 ? _0x225640['extra_buttons'][0xd]['pressed'] || (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })) : _0x17e1cd >= 0.7142857 && _0x17e1cd <= 0.7142858 ? _0x225640['extra_buttons'][0xe]['pressed'] || (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })) : _0x17e1cd <= -0.42857 && _0x17e1cd >= -0.42858 && (_0x225640['extra_buttons'][0xf]['pressed'] || (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        }), _0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })))) : _0x52a3bb != _0x17e1cd && (_0x225640['extra_buttons'][0xc]['pressed'] && (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xd]['pressed'] && (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xd], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xe]['pressed'] && (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x225640['extra_buttons'][0xf]['pressed'] && (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x52a3bb = _0x17e1cd)), _0x225640 && _0x225640['axes'] && 0x0 in _0x225640['axes'] && ejs_Controller['remappingAxis'][_0x225640['index']] && (_0x17e1cd = _0x225640['axes'][0x0], Math['abs'](_0x17e1cd) <= 0.2 && (_0x17e1cd = 0x0), _0x17e1cd >= 0.5 && (_0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x225640['extra_buttons'][0xf]['pressed'] || (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd), _0x17e1cd <= -0.5 && (_0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x225640['extra_buttons'][0xe]['pressed'] || (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd), 0x0 == _0x17e1cd && (_0x138e9e = _export_1['Gamepad']['StandardButtons'][0xe], _0x225640['extra_buttons'][0xe]['pressed'] && (_0x225640['extra_buttons'][0xe] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xe,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xf], _0x225640['extra_buttons'][0xf]['pressed'] && (_0x225640['extra_buttons'][0xf] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xf,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd)), _0x225640 && _0x225640['axes'] && 0x1 in _0x225640['axes'] && ejs_Controller['remappingAxis'][_0x225640['index']] && (_0x17e1cd = _0x225640['axes'][0x1], Math['abs'](_0x17e1cd) <= 0.2 && (_0x17e1cd = 0x0), _0x17e1cd >= 0.5 && (_0x138e9e = _export_1['Gamepad']['StandardButtons'][0xd], _0x225640['extra_buttons'][0xd]['pressed'] || (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd), _0x17e1cd <= -0.5 && (_0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x225640['extra_buttons'][0xc]['pressed'] || (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x0,
                            'value': 0x1
                        }, _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd), 0x0 == _0x17e1cd && (_0x138e9e = _export_1['Gamepad']['StandardButtons'][0xc], _0x225640['extra_buttons'][0xc]['pressed'] && (_0x225640['extra_buttons'][0xc] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xc,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x138e9e = _export_1['Gamepad']['StandardButtons'][0xd], _0x225640['extra_buttons'][0xd]['pressed'] && (_0x225640['extra_buttons'][0xd] = {
                            'pressed': !0x1,
                            'value': 0x0
                        }, _0x428a47['_fire'](_export_1['Gamepad']['Event']['BUTTON_UP'], {
                            'control': _0x138e9e,
                            'index': 0xd,
                            'gamepad': _0x225640,
                            'gamepadIndex': _0x225640['index']
                        })), _0x17e1cd));
                    });
                }), _0x428a47['bind'](_export_1['Gamepad']['Event']['BUTTON_DOWN'], function (_0x2325fd) {

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
                }), _0x428a47['bind'](_export_1['Gamepad']['Event']['BUTTON_UP'], function (_0x2e80d7) {
                    var _0x48970c = [];
                    ejs_loader['buttonMaps'] && (_0x48970c = ejs_loader['buttonMaps']), Object['keys'](ejs_Controller['controllers'])['forEach'](function (_0x250708) {

                        Object['keys'](ejs_Controller['controllers'][_0x250708])['forEach'](function (_0x5c638e) {

                            parseInt(ejs_Controller['controllers'][_0x250708][_0x5c638e]['value2'], 0xa) === parseInt(_0x2e80d7['index'], 0xa) && parseInt(_0x250708, 0xa) === parseInt(_0x2e80d7['gamepad']['index'], 0xa) && (!_0x48970c[_0x250708] || _0x48970c[_0x250708] && _0x48970c[_0x250708][_0x5c638e]) && ejs_Controller['CF']('simulateInput', _0x250708, _0x5c638e, 0x0);
                        });
                    });
                }), _0x428a47['bind'](_export_1['Gamepad']['Event']['AXIS_CHANGED'], function (_0x3a3f6b) {
                    var _0x2c4bf5 = _0x3a3f6b['gamepad']['index'],
                        _0x125870 = [];
                    if (ejs_loader['buttonMaps'] && (_0x125870 = ejs_loader['buttonMaps']), 0x0 == _0x125870['length'] || !_0x125870[_0x2c4bf5]) return !0x1;
                    'LEFT_STICK_X' === _0x3a3f6b['axis'] && (_0x3a3f6b['value'] > 0x0 ? (_0x125870[_0x2c4bf5][0x10] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x10, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x11] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x11, 0x0)) : (_0x125870[_0x2c4bf5][0x11] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x11, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x10] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x10, 0x0))), 'LEFT_STICK_Y' === _0x3a3f6b['axis'] && (_0x3a3f6b['value'] > 0x0 ? (_0x125870[_0x2c4bf5][0x12] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x12, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x13] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x13, 0x0)) : (_0x125870[_0x2c4bf5][0x13] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x13, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x12] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x12, 0x0))), 'RIGHT_STICK_X' === _0x3a3f6b['axis'] && (_0x3a3f6b['value'] > 0x0 ? (_0x125870[_0x2c4bf5][0x14] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x14, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x15] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x15, 0x0)) : (_0x125870[_0x2c4bf5][0x15] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x15, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x14] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x14, 0x0))), 'RIGHT_STICK_Y' === _0x3a3f6b['axis'] && (_0x3a3f6b['value'] > 0x0 ? (_0x125870[_0x2c4bf5][0x16] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x16, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x17] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x17, 0x0)) : (_0x125870[_0x2c4bf5][0x17] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x17, 0x7fff * _0x3a3f6b['value']), _0x125870[_0x2c4bf5][0x16] && ejs_Controller['CF']('simulateInput', _0x2c4bf5, 0x16, 0x0)));
                }), _0x428a47['bind'](_export_1['Gamepad']['Event']['DISCONNECTED'], function (_0x2e78bb) {

                    [0x0, 0x1, 0x2, 0x3]['forEach'](function (_0x31c03e) {
                        var _0x4fd66b = _0x428a47['gamepads'][_0x31c03e];
                        _0x4fd66b ? _0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e)) && (_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e, ' .')['concat'](getCtrlclassName('gamepad-name'))).innerHTML = _0x4fd66b['id'], toggleHidden(_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e, ' .')['concat'](getCtrlclassName('gamepad-remapping-axis'))), !0x1)) : _0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e)) && (_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e, ' .')['concat'](getCtrlclassName('gamepad-name'))).innerHTML = 'None detected', toggleHidden(_0x15b935['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x31c03e, ' .')['concat'](getCtrlclassName('gamepad-remapping-axis'))), !0x0));
                    });
                }), _0x428a47['bind'](_export_1['Gamepad']['Event']['CONNECTED'], function (_0x450f2e) {

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
                _0x1e8be3({
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
                        this['elements']['container']['setAttribute']('style', '--ejs-primary-color: ' + color.replace(/rgb\((.+?)\)$/, '$1'));
                    }
                    div.remove();
                }
                this['elements']['wrapper'] = createElm('div', {
                    'class': this['config']['classNames']['video']
                });
                _0x3266c5(this['game'], this['elements']['wrapper']);

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
                    return _0xe3873()(new Blob([_0x130f28]), E['startName'] + '.png'), !0x1;
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
            Module['_get_core_options'] && (ejs_Controller['getGameCoreOptions'] = Module['cwrap']('get_core_options', 'string', []));
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
        'getCoreOptionsValues': function () {
            var _0xee74d2 = ejs_data['storage']['get']('core-options');
            return I.empty(_0xee74d2) && (_0xee74d2 = {}), _0xee74d2;
        },
        'getCoreOptions': function () {
            var _0x440236 = {};
            switch (this['system']) {
                case 'nes':
                    _0x440236['fceumm_palette'] = {
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
                    }, _0x440236['fceumm_nospritelimit'] = {
                        'label': 'No Sprite Limit',
                        'options': {
                            'enabled': 'Enabled',
                            'disabled': 'Disabled'
                        },
                        'default': 'disabled',
                        'netplay': !0x0
                    }, _0x440236['fceumm_sndquality'] = {
                        'label': 'Sound Quality',
                        'options': {
                            'Low': 'Low',
                            'High': 'High',
                            'Very High': 'Very High'
                        },
                        'default': 'Low',
                        'netplay': !0x0
                    }, _0x440236['fceumm_turbo_enable'] = {
                        'label': 'Turbo Enable',
                        'options': ['None', 'Player 1', 'Player 2', 'Both'],
                        'default': 'Both',
                        'netplay': !0x0
                    }, _0x440236['fceumm_region'] = {
                        'label': 'Region',
                        'options': ['Auto', 'NTSC', 'PAL', 'Dendy'],
                        'default': 'Auto',
                        'netplay': !0x0
                    };
                    break;
                case 'snes':
                    _0x440236 = {
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
                    _0x440236 = {};
                    break;
                case 'nds':
                    _0x440236 = {
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
                    }, EnvVariable['wasm'] || delete _0x440236['screen_rotation'];
                    break;
                case 'vb':
                case 'pce':
                    _0x440236 = {};
                    break;
                case 'segaMS':
                case 'segaGG':
                case 'segaMD':
                case 'segaCD':
                    _0x440236 = {
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
                    _0x440236 = {
                        'picodrive_sprlim': {
                            'label': 'No sprite limit',
                            'options': ['disabled', 'enabled'],
                            'default': 'disabled',
                            'netplay': !0x0
                        }
                    };
                    break;
                case 'segaSaturn':
                    _0x440236 = {
                        'yabause_frameskip': {
                            'label': 'Frameskip',
                            'options': ['disabled', 'enabled'],
                            'default': 'disabled'
                        }
                    };
                    break;
                case 'msx':
                    _0x440236 = {
                        'bluemsx_nospritelimits': {
                            'label': 'No Sprite Limit',
                            'options': ['OFF', 'ON'],
                            'default': 'OFF'
                        }
                    };
                    break;
                case 'ws':
                case 'ngp':
                    _0x440236 = {};
                    break;
                case 'jaguar':
                    _0x440236 = {
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
                    _0x440236 = {
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
                    _0x440236 = {
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
                    _0x440236 = {};
                    break;
                default:
                    _0x440236 = {};
            }
            return (ejs_loader['coreOptions'] && I.array(ejs_loader['coreOptions']) && ejs_loader['coreOptions']['forEach'](function (_0x588ea1, _0x31fc29) {
                var _0x228ecb = _0x588ea1['key'];
                _0x440236[_0x228ecb] = {
                    'label': _0x588ea1['label'],
                    'options': _0x588ea1['options'],
                    'default': _0x588ea1['default'],
                    'netplay': _0x588ea1['netplay']
                };
            }), ejs_Controller['getGameCoreOptions']) && ejs_Controller['getGameCoreOptions']()['split']('\x0a')['forEach'](function (_0x1afb72, _0x4700dd) {
                var _0x2fd6e9 = _0x1afb72['split']('; '),
                    _0x315f2c = _0x2fd6e9[0x0];
                if (0x0 === _0x315f2c['indexOf']('fba-dipswitch-') || 0x0 === _0x315f2c['indexOf']('fbneo-dipswitch-')) {
                    var _0x3f3187 = _0x2fd6e9[0x1]['split']('|'),
                        _0x573b9f = _0x315f2c['replace'](/_/g, ' ')['replace'](/.+\-(.+)/, '$1'),
                        _0x36f894 = 0x0 == _0x315f2c['indexOf']('fbneo-dipswitch-') ? _0x3f3187['slice'](0x0, -0x1) : _0x3f3187['slice'](0x1, -0x1),
                        _0x446996 = _0x3f3187[0x0]['replace']('(Default) ', '');
                    _0x440236[_0x315f2c] = {
                        'label': _0x573b9f,
                        'options': _0x36f894,
                        'default': _0x446996,
                        'netplay': !0x0
                    };
                }
            }), _0x440236;
        },
        'supportNetPlay': function () {

            return !!EnvVariable['websocket'] && ('segaGG' != this['system'] && (!this['lightgun'] && !this['mouse'] && 'openbor' != this['system']));
        },
        'isNetPlay': function () {},
        'findElements': function () {
            const E = this;
            var
                buttons = E['config']['selectors']['buttons'];
            try {
                E['elements']['controls'] = E['Selector'](E['config']['selectors']['controls']['wrapper']);
                E['elements']['buttons'] = {
                    'play': E['SelectorAll'](buttons['play']),
                    'pause': E['Selector'](buttons['pause']),
                    'restart': E['Selector'](buttons['restart']),
                    'mute': E['Selector'](buttons['mute']),
                    'settings': E['Selector'](buttons['settings']),
                    'fullscreen': E['Selector'](buttons['fullscreen']),
                    'saveState': E['Selector'](buttons['saveState']),
                    'loadState': E['Selector'](buttons['loadState']),
                    'disk': E['Selector']('[data-btn="disk"]'),
                    'gamepad': E['Selector'](buttons['gamepad']),
                    'netplay': E['Selector'](buttons['netplay']),
                    'cheat': E['Selector'](buttons['cheat']),
                    'cache': E['Selector'](buttons['cache']),
                    'autosave': E['Selector'](buttons['autosave']),
                    'recorder': E['Selector'](buttons['recorder']),
                    'fastforward': E['Selector'](buttons['fastforward'])
                };
                E['elements']['inputs'] = {
                    'volume': E['Selector'](E['config']['selectors']['inputs']['volume'])
                };
                return !0x0;
            } catch (_0x6ec76b) {
                return E['debug']['warn']('It looks like there is a problem with your custom controls HTML', _0x6ec76b), !0x1;
            }
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
            }))) : (_0xa67a7a['appendChild'](ejs_data['createIcon']['call'](this, _0x3c0ebc)), _0xa67a7a['appendChild'](ejs_data['createLabel']['call'](this, _0x18cedc))), _0x288469(_0x15b7b8, _0x4d33e3(this['config']['selectors']['buttons'][_0x4fabd0], _0x15b7b8)), setElmAttr(_0xa67a7a, _0x15b7b8), 'play' === _0x4fabd0 ? (I.array(this['elements']['buttons'][_0x4fabd0]) || (this['elements']['buttons'][_0x4fabd0] = []), this['elements']['buttons'][_0x4fabd0]['push'](_0xa67a7a)) : this['elements']['buttons'][_0x4fabd0] = _0xa67a7a, _0xa67a7a;
        },
        'createRange': function (_0x118684, _0x55c993) {
            var _0x884a80 = createElm('input', _0x288469(_0x4d33e3(this['config']['selectors']['inputs'][_0x118684]), {
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
                    else 0x20 !== _0x3a1488['which'] && (0x28 === _0x3a1488['which'] || _0xc18a0f && 0x27 === _0x3a1488['which'] ? (_0xedfdac = _0x330429['nextElementSibling'], I.elm(_0xedfdac) || (_0xedfdac = _0x330429['parentNode']['firstElementChild'])) : (_0xedfdac = _0x330429['previousElementSibling'], I.elm(_0xedfdac) || (_0xedfdac = _0x330429['parentNode']['lastElementChild'])), _0x348ac8['call'](_0xb35c69, _0xedfdac, !0x0));
                }
            }, !0x1);
            addEvent(_0x330429, 'keyup', function (_0x198ac7) {

                0xd === _0x198ac7['which'] && ejs_data['focusFirstMenuItem']['call'](_0xb35c69, null, !0x0);
            });
        },
        'createMenuItem': function (_0x58afec) {
            var _0x5df23e = this,
                _0x530751 = _0x58afec['value'],
                _0x4eba24 = _0x58afec['list'],
                _0x5e9f2b = _0x58afec['type'],
                _0x5a91d6 = _0x58afec['title'],
                _0x10b2d1 = _0x58afec['badge'],
                _0x9dc0cf = void 0x0 === _0x10b2d1 ? null : _0x10b2d1,
                _0xb9dfbf = _0x58afec['checked'],
                _0x4f957f = void 0x0 !== _0xb9dfbf && _0xb9dfbf,
                _0x4d8f4c = _0x4d33e3(this['config']['selectors']['inputs'][_0x5e9f2b]),
                _0x151f44 = createElm('button', _0x288469(_0x4d8f4c, {
                    'type': 'button',
                    'role': 'menuitemradio',
                    'class': '' ['concat'](this['config']['classNames']['control'], ' ')['concat'](_0x4d8f4c['class'] ? _0x4d8f4c['class'] : '')['trim'](),
                    'aria-checked': _0x4f957f,
                    'value': _0x530751
                })),
                _0x368d75 = createElm('span');
            _0x368d75.innerHTML = T.getLang(_0x5a91d6), I.elm(_0x9dc0cf) && _0x368d75['appendChild'](_0x9dc0cf), _0x151f44['appendChild'](_0x368d75), Object['defineProperty'](_0x151f44, 'checked', {
                'enumerable': !0x0,
                'get': function () {

                    return 'true' === _0x151f44['getAttribute']('aria-checked');
                },
                'set': function (_0xcf9b2d) {

                    _0xcf9b2d && Array['from'](_0x151f44['parentNode']['children'])['filter'](function (_0x145fb3) {
                        return elmInNodeList(_0x145fb3, '[role="menuitemradio"]');
                    })['forEach'](function (_0x18304d) {

                        return _0x18304d['setAttribute']('aria-checked', 'false');
                    }), _0x151f44['setAttribute']('aria-checked', _0xcf9b2d ? 'true' : 'false');
                }
            });
            var _0x448afd = ejs_data['getCoreOptions']['call'](this);
            this['listeners']['bind'](_0x151f44, 'click keyup', function (_0x1010f9) {

                I.keyevt(_0x1010f9) && 0x20 !== _0x1010f9['which'] || (_0x1010f9['preventDefault'](), _0x1010f9['stopPropagation'](), _0x151f44['checked'] = !0x0, Object['keys'](ejs_data['normalOptions'])['includes'](_0x5e9f2b) && ejs_data['updateNormalOptions']['call'](_0x5df23e, _0x5e9f2b, _0x530751), Object['keys'](_0x448afd)['includes'](_0x5e9f2b) && (_0x448afd[_0x5e9f2b]['netplay'] && ejs_Controller['connected'] ? ejs_Controller['connection']['isInitiator'] && ejs_data['updateCoreOptions']['call'](_0x5df23e, _0x5e9f2b, _0x530751) : ejs_data['updateCoreOptions']['call'](_0x5df23e, _0x5e9f2b, _0x530751)), ejs_data['showMenuPanel']['call'](_0x5df23e, 'home', I.keyevt(_0x1010f9)));
            }, _0x5e9f2b, !0x1), ejs_data['bindMenuItemShortcuts']['call'](this, _0x151f44, _0x5e9f2b), _0x4eba24['appendChild'](_0x151f44);
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
        'updateCoreOptions': function (_0x4b7720, _0x1a8f4f) {

            if ('nds' == this['system'] && !EnvVariable['wasm']) return !0x0;
            if (ejs_data['coreOptionsValues'][_0x4b7720] = _0x1a8f4f, 'psx' === this['system'] ? (setTimeout(function () {

                    'pcsx_rearmed_frameskip' != _0x4b7720 && 'pcsx_rearmed_memcard2' != _0x4b7720 && ejs_Controller['CF']('setVariable', _0x4b7720, _0x1a8f4f);
                }, 0x64), setTimeout(function () {}, 0xc8)) : setTimeout(function () {

                    ejs_Controller['CF']('setVariable', _0x4b7720, _0x1a8f4f);
                }, 0x32), 'nds' === this['system'] && EnvVariable['wasm']) {
                var ElmCanvas = this['elements']['wrapper']['querySelector']('canvas');
                if ('screen_rotation' === _0x4b7720) switch (ElmCanvas['style']['transform'] = 'rotate(' + _0x1a8f4f + 'deg)', _0x1a8f4f) {
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
                ElmCanvas['height'] = 'fba-aspect' === _0x4b7720 && 'PAR' === _0x1a8f4f ? ElmCanvas['width'] / 0x10 * 0x9 : ElmCanvas['width'] / 0x4 * 0x3;
            }
            var _0xd1a01e = ejs_data['getCoreOptions']['call'](this),
                _0x39266e = ejs_data['storage']['get']('core-options');
            if (I.empty(_0x39266e) && (_0x39266e = {}), _0x39266e[_0x4b7720] = _0x1a8f4f, ejs_data['storage']['set']({
                    'core-options': _0x39266e
                }), this['elements']['settings']['buttons'][_0x4b7720]) {
                var _0x56b29f = this['elements']['settings']['buttons'][_0x4b7720]['querySelector']('.' ['concat'](this['config']['classNames']['menu']['value']));
                _0x56b29f.innerHTML = T.getLang(I.obj(_0xd1a01e[_0x4b7720]['options']) ? _0xd1a01e[_0x4b7720]['options'][_0x1a8f4f] : _0x1a8f4f);
            }
        },
        'setOptionMenuItem': function (_0x22245a, _0x314866) {
            var E = this,
                ElmMenuHome = this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]'),
                _0x1295a7 = this['elements']['settings']['popup']['children'][0x0];
            Object['keys'](_0x22245a)['forEach'](function (itemname) {
                var itemElm = createElm('button', _0x288469(_0x4d33e3(E['config']['selectors']['buttons']['settings']), {
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

                I.obj(_0x22245a[itemname]['options']) ? _0x3e234f.innerHTML = T.getLang(_0x22245a[itemname]['options'][_0x297e7a]) : _0x3e234f.innerHTML = T.getLang(_0x297e7a), _0x31ed55['appendChild'](_0x3e234f), itemElm['appendChild'](_0x31ed55), ElmMenuHome['appendChild'](itemElm);
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
                 _0x59afee['appendChild'](_0x24ad2f), _0x59afee['appendChild'](createElm('div', {
                    'role': 'menu'
                }));
                _0x1295a7['appendChild'](_0x59afee);
                E['elements']['settings']['buttons'][itemname] = itemElm, E['elements']['settings']['panels'][itemname] = _0x59afee;
                var _0x171571 = _0x59afee['querySelector']('[role="menu"]');
                ! function (_0x9e4960) {

                    if (I.elm(_0x9e4960)) {
                        for (var _0x2c9689 = _0x9e4960['childNodes']['length']; _0x2c9689 > 0x0;) _0x9e4960['removeChild'](_0x9e4960['lastChild']), _0x2c9689 -= 0x1;
                    }
                }(_0x171571);
                I.obj(_0x22245a[itemname]['options']) ? Object['keys'](_0x22245a[itemname]['options'])['forEach'](function (_0x3c75dc) {

                    ejs_data['createMenuItem']['call'](E, {
                        'value': _0x3c75dc,
                        'list': _0x171571,
                        'type': itemname,
                        'title': _0x22245a[itemname]['options'][_0x3c75dc],
                        'badge': null,
                        'checked': Boolean(_0x297e7a === _0x3c75dc)
                    });
                }) : I.array(_0x22245a[itemname]['options']) && _0x22245a[itemname]['options']['forEach'](function (_0x3bd564) {
                    ejs_data['createMenuItem']['call'](E, {
                        'value': _0x3bd564,
                        'list': _0x171571,
                        'type': itemname,
                        'title': _0x3bd564,
                        'badge': null,
                        'checked': Boolean(_0x297e7a === _0x3bd564)
                    });
                });
            });
        },
        'setNormalOptionsMenu': function () {
            var _0xcb1456 = this,
                _0x4f935 = this,
                _0x46fcad = {};
            _0x46fcad['orientation'] = ejs_data['storage']['get']('orientation'), _0x46fcad['shader'] = ejs_data['storage']['get']('shader'), _0x4f935['touch'] ? (_0x46fcad['virtual-gamepad'] = ejs_data['storage']['get']('virtual-gamepad'), addEvent['call'](_0x4f935, _0x4f935['elements']['container'], 'start-game', function () {

                ('enabled' === _0x46fcad['virtual-gamepad'] || I.empty(_0x46fcad['virtual-gamepad'])) && ejs_Controller['toggleVirtualGamepad']['call'](_0x4f935, !0x0);
            })) : delete ejs_data['normalOptions']['virtual-gamepad'], ejs_data['setOptionMenuItem']['call'](this, ejs_data['normalOptions'], _0x46fcad), addEvent['call'](_0x4f935, _0x4f935['elements']['container'], 'start-game', function () {
                var _0x520627 = _0xcb1456,
                    _0x1b89fe = {};
                (ejs_loader['coreOptions'] && I.array(ejs_loader['coreOptions']) && ejs_loader['coreOptions']['forEach'](function (_0x2bf902, _0x2bb17d) {
                    var _0x5393be = _0x2bf902['key'];
                    _0x1b89fe[_0x5393be] = {
                        'label': _0x2bf902['label'],
                        'options': _0x2bf902['options'],
                        'default': _0x2bf902['default'],
                        'netplay': _0x2bf902['netplay']
                    };
                }), ejs_Controller['getGameCoreOptions']) && ejs_Controller['getGameCoreOptions']()['split']('\x0a')['forEach'](function (_0x14ff2a, _0x5b91ba) {
                    var _0x16bbaa = _0x14ff2a['split']('; '),
                        _0xfb59f3 = _0x16bbaa[0x0];
                    if (0x0 === _0xfb59f3['indexOf']('fba-dipswitch-') || 0x0 === _0xfb59f3['indexOf']('fbneo-dipswitch-')) {
                        var _0x2bda8f = _0x16bbaa[0x1]['split']('|'),
                            _0x2b4b34 = _0xfb59f3['replace'](/_/g, ' ')['replace'](/.+\-(.+)/, '$1'),
                            _0x5bc293 = 0x0 == _0xfb59f3['indexOf']('fbneo-dipswitch-') ? _0x2bda8f['slice'](0x0, -0x1) : _0x2bda8f['slice'](0x1, -0x1),
                            _0x4fc99a = _0x2bda8f[0x0]['replace']('(Default) ', '');
                        _0x1b89fe[_0xfb59f3] = {
                            'label': _0x2b4b34,
                            'options': _0x5bc293,
                            'default': _0x4fc99a,
                            'netplay': !0x0
                        };
                    }
                });
                var _0x343115 = ejs_data['storage']['get']('core-options');
                ejs_data['coreOptionsValues'] = _0x343115 || {}, ejs_data['setOptionMenuItem']['call'](_0x4f935, _0x1b89fe, ejs_data['coreOptionsValues']), Object['keys'](ejs_data['coreOptionsValues'])['forEach'](function (_0xc4e641, _0x1b276f) {

                    ejs_data['updateCoreOptions']['call'](_0x520627, _0xc4e641, ejs_data['coreOptionsValues'][_0xc4e641]);
                });
            });
        },
        'updateCoreOptionMenuItems': function () {
            var _0x2365e6 = this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]'),
                _0x17e7d2 = ejs_data['getCoreOptions']['call'](this);
            ejs_Controller['connected'] ? Object['keys'](_0x17e7d2)['forEach'](function (_0x2cc61f) {

                _0x17e7d2[_0x2cc61f]['netplay'] && _0x2365e6['querySelector']('[item="' ['concat'](_0x2cc61f, '"]'))['setAttribute']('disabled', '');
            }) : Object['keys'](_0x17e7d2)['forEach'](function (_0x47baa7) {

                _0x2365e6['querySelector']('[item="' ['concat'](_0x47baa7, '"]'))['removeAttribute']('disabled');
            });
        },
        'setCoreOptionsMenu': function () {

            this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]'), this['elements']['settings']['popup']['children'][0x0];
            var _0x2fc262 = ejs_data['getCoreOptions']['call'](this),
                _0x302e88 = ejs_data['storage']['get']('core-options');
            ejs_data['coreOptionsValues'] = _0x302e88 || {}, ejs_data['setOptionMenuItem']['call'](this, _0x2fc262, _0x302e88);
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
                _0x348ac8['call'](this, subelm, bool);
            }
        },
        'toggleMenu': function (ebool) {
            var E = this,
                ElmMenuPopup = this['elements']['settings']['popup'],
                ElmBtnSetting = this['elements']['buttons']['settings'];
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
                isPopuphidden2 && I.keyevt(ebool) ? ejs_data['focusFirstMenuItem']['call'](this, null, !0x0) : isPopuphidden2 || isPopuphidden || _0x348ac8['call'](this, ElmBtnSetting, I.keyevt(ebool));
            }
        },
        'getMenuSize': function (_0x530c62) {
            var _0x14e63c = _0x530c62['cloneNode'](!0x0);
            _0x14e63c['style']['position'] = 'absolute', _0x14e63c['style']['opacity'] = 0x0, _0x14e63c['removeAttribute']('hidden'), _0x530c62['parentNode']['appendChild'](_0x14e63c);
            var _0x146388 = _0x14e63c['scrollWidth'],
                _0x33f02e = _0x14e63c['scrollHeight'];
            return _0x24b9ed(_0x14e63c), {
                'width': _0x146388,
                'height': _0x33f02e
            };
        },
        'showLoadStatePanel': function () {},
        'showMenuPanel': function (itemname,bool) {
            //底部菜单 设置菜单
            console.log('设置菜单');
            const E = this;
            var ElmPane = E['Selector']('[data-pane="' + (itemname||'home') + '"]');
            if (itemname&&I.elm(ElmPane)) {
                if('ontransitionend' in document){
                    ElmPane.classList.add('active');
                    var sizePane = ElmPane.getBoundingClientRect();
                    var Elmtop = ElmPane['parentNode'];
                    if(!Elmtop['style']['height'])Elmtop['style']['cssText'] =`width:200px;height:200px;`;
                    //Elmtop['style']['cssText'] =`width:${sizePane['width']}px;height:${sizePane['height']}px;`;
                    I.toArr(E['SelectorAll']('[data-pane]'),elm=>{
                        if(!elm.hidden){
                            Elmtop['style']['cssText'] =`width:${elm['scrollWidth']}px;height:${elm['scrollHeight']}px;`;
                            elm.hidden = true;
                        }
                    });
                    T.once(Elmtop,'transitionend',e=>{
                        ElmPane.classList.remove('active');
                    });
                }
                ElmPane.hidden = false;
                Elmtop['style']['cssText'] =`width:${sizePane['width']}px;height:${sizePane['height']}px;`;
                //toggleHidden(ElmPane, !0x1);
            }
            ejs_data['focusFirstMenuItem']['call'](E, ElmPane, !0);
                //toggleHidden(ElmNotHidden, !0x0);
                return ;
                //ElmPane.style.cssText = 'display: block !important;visibility: hidden;translate(-100%,-100%);';
                
                //ElmPane['style']['cssText'] = '';
                ElmPane.hidden = false;
                if(Elmtop['style']['cssText']){
                    T.once(Elmtop,'transitionend',e=>{
                        Elmtop['style']['cssText'] =``;
                        Elmtop.parentNode.hidden = false;
                        Elmtop.parentNode.focus();
                        console.log(Elmtop.parentNode.hidden);
                    });
                }
                Elmtop['style']['cssText'] =`width:${sizePane['width']}px;height:${sizePane['height']}px;`;
                toggleHidden(ElmNotHidden, !0x0);
                toggleHidden(ElmPane, !0x1);
                ejs_data['focusFirstMenuItem']['call'](E, ElmPane, bool);
                return ;
                
                var Elmtop = ElmPane['parentNode'],
                    ElmNotHidden = Array['from'](Elmtop['children'])['find'](function (elmitem) {
                        return !elmitem['hidden'];
                    });
                if (EnvVariable['transitions'] && !EnvVariable['reducedMotion']) {
                    Elmtop['style']['width'] = '' ['concat'](ElmNotHidden['scrollWidth'], 'px');
                    Elmtop['style']['height'] = '' ['concat'](ElmNotHidden['scrollHeight'], 'px');
                    var sizePane = ejs_data['getMenuSize']['call'](E, ElmPane),
                        _0x17ca9d = function _0x56bc49(e) {

                            e['target'] === Elmtop && ['width', 'height']['includes'](e['propertyName']) && (Elmtop['style']['width'] = '', Elmtop['style']['height'] = '', saveEvent['call'](E, Elmtop, _0x2c3eed, _0x56bc49));
                        };
                    E['addEvent'](Elmtop, _0x2c3eed, _0x17ca9d);
                    Elmtop['style']['width'] = '' ['concat'](sizePane['width'], 'px');
                    Elmtop['style']['height'] = '' ['concat'](sizePane['height'], 'px');
                }
                toggleHidden(ElmNotHidden, !0x0);
                toggleHidden(ElmPane, !0x1);
                ejs_data['focusFirstMenuItem']['call'](E, ElmPane, bool);
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
                _0x49c9a2 = createElm('div', {
                    'class': getClassName({
                        'ejs__widget': !0x0,
                        'ejs__widget_controls_toggle': !0x0
                    })
                }, getSvgIcon('ctrltoggle')),
                _0x168c70 = createElm('div');
            _0x49c9a2['appendChild'](_0x168c70), this.Selector('.' ['concat'](getClassName('ejs__widgets')))['appendChild'](_0x49c9a2), this['elements']['widgets']['controlToggle'] = _0x49c9a2;

            /*
            addEvent(this['elements']['container'], 'click touchstart', function (_0x391cad) {

                if (!E['started']) return !0x1;
                E['elements']['controls']['contains'](_0x391cad['target']) || _0x49c9a2['contains'](_0x391cad['target']) || (toggleHidden(E['elements']['controls']['querySelector'](getClassName('ejs__menu__container', 1)), !0x0), E['callaction']('toggleControls', !0x1), E['elements']['controls']['classList']['toggle'](getClassName('ejs__controls_show'), !0x1));
            });
            */
            addEvent(_0x49c9a2, 'click', function (_0x47d40c) {
                //手机模式 激活 底部菜单
                E['elements']['controls']['classList']['toggle'](getClassName('ejs__controls_show'));
                _0x47d40c['stopPropagation']();
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
            var ElmControls = createElm('div', _0x4d33e3(E['config']['selectors']['controls']['wrapper']));
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
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'recorder')); //自动保存按钮
            ElmControls['appendChild'](ejs_data['createButton']['call'](E, 'fastforward')); //加速
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
        constructor(player) {
            this['player'] = player;
            this['scrollPosition'] = {
                'x': 0x0,
                'y': 0x0
            };
            addEvent['call'](
                this['player'], document, 'ms' === this['prefix'] ? 'MSFullscreenChange' : '' ['concat'](this['prefix'], 'fullscreenchange'),
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
            let F = this;
            if (bool) {
                F['scrollPosition'] = {
                    'x': window['scrollX'] || 0x0,
                    'y': window['scrollY'] || 0x0
                }
            } else {
                window['scrollTo'](F['scrollPosition']['x'], F['scrollPosition']['y'])
            }
            document['body']['style']['overflow'] = bool ? 'hidden' : '';
            elmAddRemoveClass(F['target'], F['player']['config']['classNames']['fullscreen']['fallback'], bool);
            F.setActive();
        }
        setActive() {
            let F = this;
            if (F['enabled']) {
                var elmF = F['player']['elements']['buttons']['fullscreen'];
                if (I.elm(elmF)) {
                    elmF['pressed'] = F['active'];
                }
                callEvent['call'](F['player'], F['target'], F['active'] ? 'enterfullscreen' : 'exitfullscreen', !0x0);
                if (!ejs_Browser['isIos']) _0xe124af['call'](F['player'], F['target'], F['active']);
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
                _0x132ce5 = this['emulator'],
                _0x250e02 = _0x132ce5;
            SetEvent['call'](_0x250e02, document['body'], 'click', this['toggleMenu'], _0x823a6f), onceEvent['call'](_0x250e02, document['body'], 'touchstart', this['firstTouch']), SetEvent['call'](_0x250e02, document['body'], 'keydown focus blur', this['setTabFocus'], _0x823a6f, !0x1, !0x0), addEvent['call'](_0x250e02, document['body'], 'keyup', function (_0x2ecd9f) {

                _0x250e02['started'] && (0x71 === _0x2ecd9f['which'] && (_0x2ecd9f['shiftKey'] ? null === _0x250e02['elements']['buttons']['saveState']['getAttribute']('hidden') && callEvent['call'](_0x250e02, _0x250e02['elements']['buttons']['saveState'], 'click') : ejs_Controller['quickSaveState']()), 0x73 === _0x2ecd9f['which'] && (_0x2ecd9f['shiftKey'] ? null === _0x250e02['elements']['buttons']['loadState']['getAttribute']('hidden') && callEvent['call'](_0x250e02, _0x250e02['elements']['buttons']['loadState'], 'click') : ejs_Controller['quickLoadState']()), 0x78 === _0x2ecd9f['which'] && callEvent['call'](_0x250e02, _0x250e02['elements']['buttons']['mute'], 'click'));
            });
        }
        container() {
            var E = this['emulator'],
                Elms = E['elements'];
            E['addEvent'](Elms['container'], 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen start-game', function (event) {
                var ElmCtrl = Elms['controls'];
                ElmCtrl && 'enterfullscreen' === event['type'] && (ElmCtrl['pressed'] = !0x1, ElmCtrl['hover'] = !0x1);
                /**
                 * UI
                 * 底部菜单激活
                 */
                /*
                var _0x36900f,timecost = 0x0;
                if(['touchstart', 'touchmove', 'mousemove', 'start-game']['includes'](event['type'])){
                    E['callaction']('toggleControls', !0x0);
                     timecost = E['touch'] ? 0xbb8 : 0x7d0;
                }
                clearTimeout(_0x36900f);
                 _0x36900f = setTimeout(()=>E['callaction']('toggleControls', !0x1), timecost);
                 Elms['controls']['setAttribute']('data-timer', _0x36900f);
                 */
            });
            E['addEvent'](window, 'resize', function (event) {
                var cHeight = E['elements']['container']['clientHeight'],
                    ElmMenuPopup = E['SelectorAll'](getClassName('ejs__menu__container', !0) + ' [role="menu"]');
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
            var _0x57af96 = this['emulator'],
                _0x392b4c = _0x57af96['elements'],
                _0x239e0a = _0x57af96;
            addEvent['call'](_0x239e0a, _0x239e0a['game'], 'volumechange', function (_0x4471c0) {

                return ejs_data['updateVolume']['call'](_0x239e0a, _0x4471c0);
            });
            addEvent['call'](_0x239e0a, _0x392b4c['container'], 'contextmenu', function (_0x48dd70) {

                _0x239e0a['touch'] || _0x239e0a['lightgun'] || _0x239e0a['mouse'] || ejs_data['toggleContextMenu']['call'](_0x239e0a, _0x48dd70, !0x0), _0x48dd70['preventDefault']();
            }, !0x1);
            addEvent['call'](_0x239e0a, _0x392b4c['container'], 'mousewheel', function (_0x84a53) {

                _0x84a53['stopPropagation']();
            }, !0x1);
            addEvent['call'](_0x239e0a, _0x392b4c['container'], 'mousedown', function (_0xf614c8) {

                _0x239e0a['touch'] || _0x239e0a['mouse'] || ejs_data['toggleContextMenu']['call'](_0x239e0a, _0xf614c8, !0x1);
            }, !0x1);
            addEvent['call'](_0x239e0a, _0x239e0a['game'], 'volumechange', function () {

                _0x239e0a['storage']['set']({
                    'volume': _0x239e0a['volume'],
                    'muted': _0x239e0a['muted']
                }), ejs_Controller['setVolume'] && ejs_Controller['setVolume']();
            });
            var _0x5d664f = _0x239e0a['config']['events']['concat'](['keyup', 'keydown'])['join'](' ');
            addEvent['call'](_0x239e0a, _0x239e0a['game'], _0x5d664f, function (_0x5a5f62) {
                var _0x2c34c7 = _0x5a5f62['detail'],
                    _0x392762 = void 0x0 === _0x2c34c7 ? {} : _0x2c34c7;
                'error' === _0x5a5f62['type'] && (_0x392762 = _0x239e0a['game']['error']), callEvent['call'](_0x239e0a, _0x392b4c['container'], _0x5a5f62['type'], !0x0, _0x392762);
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
            L['bind'](Elms['controls'], 'mouseenter mouseleave', event => {
                //底部菜单鼠标 事件绑定
                if ('mouseleave' === event['type'] && null === event['toElement']) {
                    Elms['controls']['hover'] = !0x0;
                } else {
                    Elms['controls']['hover'] = !E['touch'] && 'mouseenter' === event['type'];
                }
            });

            L['bind'](Elms['controls'], 'mousedown mouseup touchstart touchend touchcancel', event => {

                //底部菜单 事件绑定
                Elms['controls']['pressed'] = ['mousedown', 'touchstart']['includes'](event['type']);
                /*
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
                */
            });
            L['bind'](Elms['controls'], 'focusin focusout', event => {
                //底部菜单 选中 添加锁定显示菜单
                var config = E['config'],
                    bool = 'focusin' === event['type'];
                //elmAddRemoveClass(Elms['controls'], config['classNames']['noTransition'], bool);
                //elmAddRemoveClass(Elms['controls'], getClassName('ejs__controls_show'), bool);
                //E['callaction']('toggleControls', bool);
                /*
                if (bool) {
                    var timeint = Elms['controls']['getAttribute']('data-timer');
                    setTimeout(() => {
                        elmAddRemoveClass(Elms['controls'], config['classNames']['noTransition'], !0x1);
                    }, 0x0);
                    clearTimeout(timeint);
                    timeint = setTimeout(() => E['callaction']('toggleControls', !0x1), L['touch'] ? 0xbb8 : 0xfa0);
                    Elms['controls']['setAttribute']('data-timer', timeint);
                }
                */
            });
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
    //(es_require(0x14b)());
    class ejs_storage {
        constructor(_0x4edbfc, _0x5d236b) {
            this['enabled'] = !0x0;
            this['key'] = _0x5d236b;
        }
        get(_0x3a9ef2) {
            var _0x46e17f = window['localStorage']['getItem'](this['key']);
            if (I.empty(_0x46e17f)) return null;
            var _0x186693 = JSON['parse'](_0x46e17f);
            return I.str(_0x3a9ef2) && _0x3a9ef2['length'] ? _0x186693[_0x3a9ef2] : _0x186693;
        }
        set(_0x3b2eae) {
            var _0x5551be = this['get']();
            I.empty(_0x5551be) && (_0x5551be = {}), _0x288469(_0x5551be, _0x3b2eae), window['localStorage']['setItem'](this['key'], JSON['stringify'](_0x5551be));
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
            if (!T.lang['restart']) {
                I.assign(T.lang, E['config']['i18n']);
            }
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
            ejs_install.elements.push(E['game']);
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
        callEvent(...arg) {
            return callEvent.apply(this, arg);
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
                            return ;
                        }
                        ejs_Controller['saveSavFiles'] && ejs_Controller['saveSavFiles']();
                    },15000);
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
                evt.forEach(v => ejs_Controller['RF'](v, bool?1:0));
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
            content = content.replace(/{(.+?)}/g, (str, arg) => {
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
                    store: DISK.DB.libjs,
                    decode: I.decode
                });
            }
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
                var _0x50da70 = _0x288469(ejs_data['defaultCoreOptionsValues']['call'](E), ejs_data['storage']['get']('core-options') || {});
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
                        fsgameBuf = new _0x2181ff(snesLen ? gameBuf['slice'] ? gameBuf['slice'](snesLen) : gameBuf['subarray'](snesLen) : gameBuf);
                    } else {
                        fsgameBuf = new _0x2181ff(gameBuf);
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
                        var _0x2e6771 = new _0x2181ff(ejs_loader.FS['readFile'](E['startName'])),
                            _0x3d734d = getCrc32int(_0x2e6771);
                        ejs_Controller['romcrc32'] = _0x3d734d['toString'](0x10);
                        var _0x30e2fc, _0x57a048, _0x2e3a2d, _0x367813 = new _0x2181ff(ejs_loader.FS['readFile'](_0x4136ee)),
                            _0x8bb892 = _0x367813['readString'](0x6),
                            _0x3bf629 = _0x2e6771['_u8array']['length'] % 0x400;
                        _0x8bb892['startsWith']('PATCH') ? (_0x30e2fc = _0x31959e(_0x367813), 0x0 === _0x3bf629 && 'B19ED489' === _0x3d734d['toString'](0x10)['toUpperCase']() && ((_0x57a048 = new Uint8Array(_0x2e6771['_u8array']['length'] + 0x200))['set'](new Uint8Array(0x200), 0x0), _0x57a048['set'](_0x2e6771['_u8array'], 0x200), _0x2e6771 = new _0x2181ff(_0x57a048))) : _0x8bb892['startsWith'](_0x4bc4ab) ? _0x30e2fc = _0xe7d66e(_0x367813) : _0x8bb892['startsWith']('BPS1') && (_0x30e2fc = _0x291a53(_0x367813), _0x3bf629 > 0x0 && 'A31BEAD4' === _0x3d734d['toString'](0x10)['toUpperCase']() && (_0x57a048 = _0x2e6771['_u8array']['slice'] ? _0x2e6771['_u8array']['slice'](_0x3bf629) : _0x2e6771['_u8array']['subarray'](_0x3bf629), _0x2e6771 = new _0x2181ff(_0x57a048)));
                        try {
                            if (_0x2e3a2d = _0x30e2fc['apply'](_0x2e6771, !0x1)) {
                                var _0x27e145 = _0x2e3a2d['_u8array']['length'] % 0x400;
                                _0x27e145 > 0x0 && (_0x57a048 = _0x2e3a2d['_u8array']['slice'] ? _0x2e3a2d['_u8array']['slice'](_0x27e145) : _0x2e3a2d['_u8array']['subarray'](_0x27e145), _0x2e3a2d = new _0x2181ff(_0x57a048)), ejs_loader.FS['unlink'](_0x4136ee), ejs_loader.FS['unlink'](E['startName']), ejs_loader.FS['writeFile'](E['startName'], _0x2e3a2d['_u8array']);
                            }
                        } catch (_0x6cf446) {}
                    } else {
                        var _0x23cafe, _0x157de4, _0x567245 = new _0x2181ff(ejs_loader.FS['readFile'](E['startName'])),
                            _0xc9d854 = new _0x2181ff(ejs_loader.FS['readFile'](_0x4136ee)),
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
                                'undefined' != typeof EJS_DEBUG_ && !0x0 === EJS_DEBUG_ && console['log'](text);
                            },
                            printErr(text) {
                                if (!text) return;
                                'undefined' != typeof EJS_DEBUG_ && !0x0 === EJS_DEBUG_ && console['log'](text);
                                if (RealSystemName) {
                                    if (SAVE_EVENT_TEXT[RealSystemName] && SAVE_EVENT_TEXT[RealSystemName].includes(text)) {
                                        //ejs_Controller['saveSavFiles']();
                                        //E['isAutoSave'] = true;
                                    }
                                }
                                //fix aspect-ratio 强行修正纵横比
                                console.log(text);
                                let videosize = text.match(/Video\s*@\s*(\d+)x(\d+)/);
                                if (videosize) {
                                    console.log(videosize);
                                    E['videosize'] = videosize[1] / videosize[2];
                                    ejs_loader.aspectRatio = E['videosize'];
                                    if (Module.setCanvasSize) {
                                        Module.setCanvasSize(720, 720 / E['videosize']);
                                    }
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
                        const SAVE_EVENT_TEXT = {
                            'gba': [
                                '[libretro INFO] GBA Savedata: Savedata synced',
                                '[libretro INFO] GB Memory: Savedata synced'
                            ]
                        };
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
                        DISK['action']['indexdb-sync'] = (a,b)=>{
                            console.log(a,b);
                            a&&_0x88c152['show'](E['elements']['container'],b.join('<hr>'));
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
                            '\nvideo_gpu_screenshot = false'+
                            '\ncamera_allow = "false"'+
                            '\ncamera_driver = "null"'+
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
                        var coresOptionData = _0x288469(_0xe4449b, ejs_data['storage']['get']('core-options') || {}),
                            coresOptionCfg = '';
                        if ('psx' == E['system']) {
                            coresOptionCfg = 'pcsx_rearmed_memcard2 = "disabled"\n'
                        }
                        I.toArr(coresOptionData, entry => {
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
                            E['callEvent'](ElmContainer, 'start-game');
                            ejs_loader['loading'].remove();
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
                return E['callaction']('PlayNow');
            } else {
                onceEvent(LoadingBtnStart, 'click touchstart', function (event) {
                    /*点击PLAY NOW 运行*/
                    toggleHidden(LoadingBtnStart, !0x0);
                    E['callaction']('PlayNow');
                    return !1;
                });
            }
        }
    }
    I.defines(ejs_install, {
        setup: {
            value(DivIDs, Configs) {
                let X = this;
                if (I.str(DivIDs)) DivIDs = document['querySelectorAll'](DivIDs)
                return I.toArr(DivIDs).map(
                    elm => I.elm(elm) && new X(elm, Configs)
                );
            }
        },
        defaults: {
            value: {},
            writable: true,
        },
        elements: {
            value: [],
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
    I.defines(es_module, {
        exports: ejs_install
    }, 1, 1);
    //es_exports['default'] = ejs_install;
    //es_module['exports'] = ejs_install;
}]);