function id_333_0x14d(es_module, es_exports, es_require) {

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
}