function Gamepads_001_0x1(es_module, es_exports, es_require) {

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
}