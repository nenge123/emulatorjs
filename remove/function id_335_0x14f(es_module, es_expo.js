function id_335_0x14f(es_module, es_exports) {
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
}