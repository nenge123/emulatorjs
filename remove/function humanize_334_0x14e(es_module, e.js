function humanize_334_0x14e(es_module, es_exports, es_require) {


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
}