function id_325_0x145(es_module, es_exports) {

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
}