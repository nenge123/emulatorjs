function id_331_0x14b(es_module, es_exports, es_require) {
    var _export_332 = es_require(0x14c),
        _0x46035c = es_require(0x14d)('socket.io-client:url');
    es_module['exports'] = function (_0x52ad88, _0x34e22d) {
        var _0x5dbda0 = _0x52ad88;
        _0x34e22d = _0x34e22d || 'undefined' != typeof location && location, null == _0x52ad88 && (_0x52ad88 = _0x34e22d['protocol'] + '//' + _0x34e22d['host']), 'string' == typeof _0x52ad88 && ('/' === _0x52ad88['charAt'](0x0) && (_0x52ad88 = '/' === _0x52ad88['charAt'](0x1) ? _0x34e22d['protocol'] + _0x52ad88 : _0x34e22d['host'] + _0x52ad88), /^(https?|wss?):\/\// ['test'](_0x52ad88) || (_0x46035c('protocol-less url %s', _0x52ad88), _0x52ad88 = void 0x0 !== _0x34e22d ? _0x34e22d['protocol'] + '//' + _0x52ad88 : 'https://' + _0x52ad88), _0x46035c('parse %s', _0x52ad88), _0x5dbda0 = _export_332(_0x52ad88)), _0x5dbda0['port'] || (/^(http|ws)$/ ['test'](_0x5dbda0['protocol']) ? _0x5dbda0['port'] = '80' : /^(http|ws)s$/ ['test'](_0x5dbda0['protocol']) && (_0x5dbda0['port'] = '443')), _0x5dbda0['path'] = _0x5dbda0['path'] || '/';
        var _0x4d66c1 = -0x1 !== _0x5dbda0['host']['indexOf'](':') ? '[' + _0x5dbda0['host'] + ']' : _0x5dbda0['host'];
        return _0x5dbda0['id'] = _0x5dbda0['protocol'] + '://' + _0x4d66c1 + ':' + _0x5dbda0['port'], _0x5dbda0['href'] = _0x5dbda0['protocol'] + '://' + _0x4d66c1 + (_0x34e22d && _0x34e22d['port'] === _0x5dbda0['port'] ? '' : ':' + _0x5dbda0['port']), _0x5dbda0;
    };
}