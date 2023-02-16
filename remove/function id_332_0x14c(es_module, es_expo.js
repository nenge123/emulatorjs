function id_332_0x14c(es_module, es_exports) {
    var _0x482ed8 = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        _0x254b74 = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
    es_module['exports'] = function (_0x1ac659) {
        var _0x1aa8d2 = _0x1ac659,
            _0x16b006 = _0x1ac659['indexOf']('['),
            _0x1ab01c = _0x1ac659['indexOf'](']'); - 0x1 != _0x16b006 && -0x1 != _0x1ab01c && (_0x1ac659 = _0x1ac659['substring'](0x0, _0x16b006) + _0x1ac659['substring'](_0x16b006, _0x1ab01c)['replace'](/:/g, ';') + _0x1ac659['substring'](_0x1ab01c, _0x1ac659['length']));
        for (var _0x214233 = _0x482ed8['exec'](_0x1ac659 || ''), _0x1519ac = {}, _0x4c2bab = 0xe; _0x4c2bab--;) _0x1519ac[_0x254b74[_0x4c2bab]] = _0x214233[_0x4c2bab] || '';
        return -0x1 != _0x16b006 && -0x1 != _0x1ab01c && (_0x1519ac['source'] = _0x1aa8d2, _0x1519ac['host'] = _0x1519ac['host']['substring'](0x1, _0x1519ac['host']['length'] - 0x1)['replace'](/;/g, ':'), _0x1519ac['authority'] = _0x1519ac['authority']['replace']('[', '')['replace'](']', '')['replace'](/;/g, ':'), _0x1519ac['ipv6uri'] = !0x0), _0x1519ac;
    };
}