var T = Nenge,
    I = T.I,
    F = T.F;
var EJS = (function () {
    T.DB_NAME = 'Emulatorjs';
    T.LibStore = 'data-libjs';
    F.dbConf[T.DB_NAME] = {
        'data-system': {},
        'data-rooms': {
            system: false
        },
        'data-patch': {
            system: false
        },
        'data-parent': {
            system: false
        },
        'data-bios': {
            system: false
        },
        'data-info': {
            system: false
        },
        'data-libjs': {},
        'data-saves': {
            timestamp: false
        },
        'openbor-save': {
            timestamp: false
        },
        'retroarch': {
            timestamp: false
        },
        'userdata': {
            timestamp: false
        },
    }
    //T.version = 1;
    'use strict';
    var classNameList = {
        "ejs-wrapper": "ejs--de6433374cb30211f10e148b320b2f",
        "ejs": "ejs--7a5f920ceffb2913f6dbda780573cf",
        "ejs--full-ui": "ejs--f3a002bba9836fe4ebfed357a45521",
        "controls-tabs": "ejs--008adea3c1ef33a8fc94892a1e97e6",
        "gamepad": "ejs--a891fe6f6e4cc43e11a6d8cf4a2dbb",
        "gamepad-remapping-axis": "ejs--0ddc742668e636837948f68cade3e2",
        "gamepad-name": "ejs--9af1c81949dbc3652bee73a340152c",
        "overlay": "ejs--85a95eb6bf74a40ab61b91a91e5bff",
        "key-setting-popup": "ejs--d169a219343bc32dd4aecc3f6b7f25",
        "loading-info": "ejs--782e3572812f983b3a150eec177391",
        "p1": "ejs--c426dd1d179aa351e6cec47e1d9438",
        "p2": "ejs--31e7e81db48819ee35ec6f50378a2e",
        "p3": "ejs--20d4eb2646d396f558a645dc0574f1",
        "p4": "ejs--4de05306c8b099bdeb4585571ac095",
        "ejs__contextmenu": "ejs--c7957d8666bb6b8fc7c3e9c021aaf8",
        "ad-11": "ejs--3a16fd9a56aec8059089709cbb16f4",
        "close-ad": "ejs--f3a1903d935f6cf720d4a0498db62a",
        "start-game": "ejs--73f9b4e94a7a1fe74e11107d5ab2ef",
        "pulse": "ejs--9bd947b3e6427453595f083d740a7c",
        "ejs__control": "ejs--8732295ca5c4902a060d34706a8146",
        "ejs__tab-focus": "ejs--a83b6c705e103e81a7762d0ed5e64b",
        "ejs__control--pressed": "ejs--b1238136ec472a92297159882cf4b8",
        "icon--pressed": "ejs--ec731619062226d943da67f5d83009",
        "icon--not-pressed": "ejs--dc7068585e3d84fe0e676864c1439e",
        "label--pressed": "ejs--0c6561f9155750b0aeeed6da5da7bf",
        "label--not-pressed": "ejs--13d64e30c1333cc99391af48ddabaa",
        "ejs--game": "ejs--d173eb69c2d82ba4df4c610263ca63",
        "ejs__controls": "ejs--1acedc5ed6816abe96dd27d910fd74",
        "ejs__progress": "ejs--f1aa376719b564cae0e653157cde14",
        "ejs__time": "ejs--90d2780f99bcc76fdb6b0378a7238e",
        "ejs__menu": "ejs--c7bfb2d1b75a40fdaaf90624bea9e7",
        "ejs__volume": "ejs--36ceeeec0df37a9cf4bbe05fa204ec",
        "ejs__tooltip": "ejs--74c6d4176d27e37a19d2e9e61de8f4",
        "ejs__disk": "ejs--e8274f91a3d68f381fcc9d51db9c72",
        "ejs__hotkey": "ejs--50ea0ce6747ecfa5147eba0d14e2ff",
        "game-started": "ejs--7da7949f602347007818e6d192eb23",
        "ejs__controls_show": "ejs--a03cf4c79123fcf49b2b6eb2ee856c",
        "ejs--hide-controls": "ejs--1b8cb7f2294b1eb5de5238daea3513",
        "ejs--fullscreen-enabled": "ejs--19409fe2057ab935a7e46abb5b4f49",
        "ejs__menu__container": "ejs--013213afedeeb6878089b1ca1b4e47",
        "ejs-popup": "ejs--c2532bfe04554193cc42b3be753700",
        "ejs__control--forward": "ejs--0b4cdb4057d1a4623e60836ccc6275",
        "ejs__control--back": "ejs--a7ad9de0cb0ca672b6703c50de7db9",
        "ejs__menu__value": "ejs--f91e90fe7cabc875aff9a431bf5389",
        "ejs__menu_right": "ejs--3464f4dc60866db801859648ec92cb",
        "ejs__disk__container": "ejs--93b777c74e38cef84eb9ed727c473b",
        "ejs__disk__index": "ejs--65d5006322417d2267bc2d4fa5fecc",
        "active": "ejs--68d337c212ec6a5bc43125440d422b",
        "ejs__tooltip--visible": "ejs--6ea27aa07e60d1d6e4c9782740028a",
        "ejs--menu-open": "ejs--da54136ccf8c6b0b16d98e8b8e8b88",
        "ejs--game-wrapper": "ejs--b8b77c7a746e100363183912a36d0f",
        "portrait": "ejs--64f1256f556fb94454b930cb3ea7f2",
        "nds-fix": "ejs--7e4ee30a8f9dadb6113efbbba54829",
        "ejs__progress__buffer": "ejs--f8d706413436fd119cf01aaf5a9d9d",
        "ejs--audio": "ejs--bd0222e58d71b0a304d6037dfcffd5",
        "ejs--loading": "ejs--2521e1257996f264de36e77cc9c5ee",
        "ejs__dialogs": "ejs--d31688f864f56d6426ebbf2217d6ee",
        "ejs__dialog": "ejs--5e71fd80268afbb1d588e40b993508",
        "ejs__focus_notice__container": "ejs--8005476e024127364d230c0f4c72e1",
        "ejs__cheat__container": "ejs--8abe1d2bc8d34697952f4ae16785a5",
        "ejs__cache__container": "ejs--1e0f0672f67d0e96592314c9ed78b0",
        "ejs__loading__container": "ejs--d7e6a6a8f38bfaa256fe5d709a8258",
        "ejs__load-state__container": "ejs--b183f581b5336c4908ad258d3e1cc7",
        "ejs__netplay__container": "ejs--158ea9dd34e3e7af2d837f8b05babb",
        "ejs__gamepad__container": "ejs--3f0897a8158ba363a0ee0afe4da7c5",
        "dialog-container": "ejs--38cc09882a55e98c76168dbe838aa0",
        "dialog-title": "ejs--b373c9d5029d49324fb8ac3ece96c1",
        "dialog-content": "ejs--a5e2629abb9a5bcbc8b2c1307922d2",
        "dialog-buttons": "ejs--580e3c22e63f8a1eb29694fd0b141b",
        "btn-cancel": "ejs--ad20569e1449d7b8e99e6465960456",
        "tabs": "ejs--8e7922427f460a31935084b7acfb1a",
        "tabs-content": "ejs--31eb28817642bb1bfe0a2c422108bb",
        "tabs-panel": "ejs--f932566a0af5314da834324c901978",
        "button-container": "ejs--c233fb69cbef43078bc39e9d1efac8",
        "btn-submit": "ejs--bdb54e9fc47f9805b506b746e897bf",
        "btn-create-room": "ejs--67d03ee7480b871ad6507d6319a839",
        "btn-quit": "ejs--c2d931157456c1d438d40a2f66af2c",
        "set": "ejs--6604c83041a275a78837c452a71dd8",
        "btn-join-room": "ejs--99150e15f962c63c689cadc81ef40d",
        "netplay-player-name": "ejs--71527b6509aa48afce3ce1a11c02f0",
        "netplay-player-name-input": "ejs--7ad35768e3f6b9faf97db01d5b60ae",
        "netplay-player-name-set": "ejs--9c403e5e107a3e4374ba244b636400",
        "netplay-roomlist": "ejs--d6a46533fa6e510a571af5c28b440a",
        "netplay-create-room": "ejs--57ca9b3853cc7de731483cfcc95a59",
        "netplay-room-name-input": "ejs--0885d5e25e19127b6b516014426a1b",
        "netplay-room-password-input": "ejs--25023d28756fdb9dfbbfb6dccb8677",
        "netplay-create-room-set": "ejs--75b3a8d35aacc6424ed7422fdeaaaa",
        "netplay-room": "ejs--eefdf28d69ed2d20f197308981bb61",
        "cheats-add": "ejs--9e670880bb57e824400fa00f09aaad",
        "cheats-list": "ejs--2b4e3c245b7b25dfdac5e09155a68e",
        "cheat-code-input": "ejs--572b0b3a0345a6b01b01a15a02842c",
        "cheat-name-input": "ejs--a7d7f80c8999469c991ea452a85dd9",
        "ejs__widgets": "ejs--952c974392296e7f643d51db380157",
        "ejs__widget": "ejs--0d7e216cf12ae73705b5d5bb0452fc",
        "ejs__widget_netplay": "ejs--c0a5e71f6613caab66d6ae15a5a00f",
        "with-chat-box": "ejs--04f0471d5de3dffea09ac3d539d0bc",
        "chat-box": "ejs--f817e633c82da74c3f82a1007e9aa8",
        "netplay-players": "ejs--0b77f56df0c6023120dd9ffaa37dcd",
        "chat-toggle": "ejs--4f88570c8af219fec07219dbd9dbbe",
        "chat-count": "ejs--3ee5963a7747179cf98ce8ce095a5f",
        "chat-messages": "ejs--258ae7dfee4b10b7568161e6a48636",
        "chat-input": "ejs--0e8443aac737c78260c3c5e0370276",
        "ejs__widget_controls_toggle": "ejs--666d4296310579687cf3cf3d2cf951",
        "ejs__widget_load_srm": "ejs--a8753b9c4fe32d12bb6605d4a20ef2",
        "ejs__widget_save_srm": "ejs--e7e06622e3c04957c2ebb05c5adec0",
        "ejs__widget_virtual_gamepad": "ejs--f4bae808762221c6b127d6705180f4",
        "step": "ejs--e9d3331148f44fc07bdc14df990eec",
        "step-2": "ejs--0d7254db03d544ef3dab7f20491888",
        "ejs-virtual-gamepad": "ejs--ca9ea317b9bd20abfc8c0463ac5bbe",
        "dpad-container": "ejs--914358605501b11476e86626b2ff16",
        "dpad-bg": "ejs--be66239219d594001da38f91c9ad02",
        "dpad-front": "ejs--9dbb9be3403878e912527181e2d41b",
        "dpad-1": "ejs--f9c7797bdf05569bdc13b4f2074270",
        "dpad-2": "ejs--2645f3bad105488a313c5e30dab74f",
        "dpad-1-bg": "ejs--a57cf324c8ff108947112e35e589b5",
        "dpad-2-bg": "ejs--4873d94c18140ab195da609b40b71a",
        "dpad-left": "ejs--bd9311b0a4f654af6ab5ba28bcf358",
        "dpad-right": "ejs--704d45ea060cc6809451a0d9d47ad7",
        "dpad-up": "ejs--f0b89ca5b5621659af184c8e012ccb",
        "dpad-down": "ejs--8de361d6b01eaa181f8db4ac3eb7af",
        "virtual-gamepad": "ejs--2440e3b831017ff8327c939e2a4413",
        "top": "ejs--b8d8b771d0bbb94e2bbd03054f53fd",
        "joystick": "ejs--f4395d349a2cf15095a736f6a3c96b",
        "center": "ejs--49fa47c86a131e4ca8fb268bfdde89",
        "right": "ejs--7d2b19f77fd0ccabf94dc1ca39ae18",
        "buttons": "ejs--6e7015634623fd6a82e6a7d3488c84",
        "v-selected": "ejs--629da1d6834251f7d136c15f066358",
        "touch": "ejs--d708d9d486f1eca73a593d5c09f8ad",
        "b_select": "ejs--e7e4800b31773c5d47b84c75cc6cf7",
        "b_start": "ejs--76fa7567879f97f5991c50ac600735",
        "b_1": "ejs--2592ce9b796695f4941e00f0972644",
        "b_2": "ejs--b8e92dfa494924e1bde9486a0be217",
        "b_3": "ejs--28a32587453e5bbcf95f746657f15f",
        "b_4": "ejs--fad921b4fce16af564d7597e8de5f2",
        "b_5": "ejs--6f79544eaf1d4b6e8a7609b506d988",
        "b_6": "ejs--2afd974f6d46005a1e522dca4485e8",
        "b_z": "ejs--d64fa2a822535d54379899a24f6e77",
        "b_c": "ejs--10621f07d4508631aa3abcdb124a83",
        "b_l": "ejs--7930ee9bb7ae2fa6e2f7b5568f1e98",
        "b_r": "ejs--2226100d4c5408c2699e942aabb31c",
        "b_l2": "ejs--3a43805a8ec126ef388abd5ceb54b2",
        "b_r2": "ejs--d40828f231043de3a0f9c0637091d1",
        "b_insert_coin": "ejs--7db312734c1e18065c434e8f96e893",
        "b_a": "ejs--b4c6d9bdbbd3dcfc8fa82689ecf448",
        "b_b": "ejs--b7c456c7dd7a616a55965bb134323b",
        "b_x": "ejs--87c940c15830daa967b08e67e9b87e",
        "b_y": "ejs--fbd499578ebef494fbcd1c9114cd1d",
        "b_c1": "ejs--6febbc4be9f01b015178d52120d930",
        "b_c2": "ejs--05e1505b655c8ef151de9ba2c47fb5",
        "b_c3": "ejs--017bc19e138d2e63c92520db378e1d",
        "b_c4": "ejs--1474a869d502ac0c04d535c96f9795",
        "b_z_t": "ejs--9c96e9c7f33171cf0fedfc85ca53fa",
        "b_l_t": "ejs--c39b270a2774fd4bd3858e5f0892c0",
        "b_r_t": "ejs--353cf6be7120854ae25fede87ce136",
        "ejs-virtual-gamepad-style-1": "ejs--d534874cabeb9d2a907a812e5b8cd0",
        "ejs-virtual-gamepad-style-3": "ejs--9213ba9ca7bc508e87ca7a2cefa397",
        "ejs-virtual-gamepad-style-5": "ejs--b4b0898f13bf4668a6e0077f43964a",
        "ejs-virtual-gamepad-style-6": "ejs--49834279a72803b358c2a283342698",
        "ejs-virtual-gamepad-style-10": "ejs--23587cee2522ccb891f58a95e3cab8",
        "ejs-virtual-gamepad-style-7": "ejs--25a102181c6e79af65fe086f151c4f",
        "ejs-virtual-gamepad-style-8": "ejs--cbcbce2bfd0aa13f6bebbbf8a0e974",
        "ejs-virtual-gamepad-style-9": "ejs--c46c519e67f0f7ff83ba0b4d208683",
        "ejs-virtual-gamepad-style-12": "ejs--99012f09884aa40d556422f4969653",
        "modal": "ejs--eefec939452eb92fad035932d0f47c",
        "modal__overlay": "ejs--f1f43b27384834c8c22c6f81d0c5ae",
        "modal__container": "ejs--c4ee33766a01ed0356c3ec07898e96",
        "modal__header": "ejs--a073f32023da1ced805c5f95a4e81c",
        "modal__footer": "ejs--ed44f59bb8cd49177586b140658c6c",
        "modal__title": "ejs--81470ba5e6a6d68014839ad4d9a977",
        "modal__close": "ejs--c3c85789c2a7f56d8b26dba75b7e1f",
        "modal__content": "ejs--db44f5520e6f4fd0dd34b478bb9ee8",
        "modal__btn": "ejs--319bcec5dee9444e1a2a53d6503b7c",
        "modal__btn-primary": "ejs--eaf3c1cba25d415d92ac48d7db34dd",
        "modal__errmsg": "ejs--940087708c06b6129ce2bfa45f1d89",
        "micromodal-slide": "ejs--bef295f3125e9ba83d4f3677264bae",
        "is-open": "ejs--60c17e0d149099f207b06f27edae6a",
        "mmfadeIn": "ejs--9d7aa2bd5ee276be085e5b2a0bbc2e",
        "mmslideIn": "ejs--8b069266f76099cc6bc220f6ea56cc",
        "mmfadeOut": "ejs--184b7558ffeb569c1790654537477b",
        "mmslideOut": "ejs--379a464ad0e66ea5fc601e5f2fd73e",
        "ejs-toast": "ejs--e686b5f4b8f94b017dce6aa34938a5",
        "ejs-toast-item": "ejs--48741994500b16cfabc909661adbc0",
        "ejs-switch": "ejs--4c3e63d4005bd8a0468e9c74a35f62",
        "ejs-cheat-row": "ejs--98246f4c72a31d8fe36801dd81efed",
        "cheat-changed": "ejs--9a9a791ded716a90cf8b2a50b4349f",
        "ejs-delete-cheat": "ejs--90bcdd71cd0d2307e9ee0dffa916da",
        "icon--exit-fullscreen": "ejs--2b3dd6e2e26c0f0dc4ac5779dedd5e",
        "ejs--fullscreen-fallback": "ejs--412041671de21945d3e028b6ae84c9",
        "ejs--no-transition": "ejs--33643265135cf89e6c0a0d9866d6f1",
        "ejs__sr-only": "ejs--6f0e996cd15e5fb6be0256918531d7",
        "ejs-fade-in": "ejs--7cadf43f3d9eb17c7e3c36de84973b"
    };
    var ejsURL = {
        'cores': 'cores/',
        'messageOrigin': 'https://www.emulatorjs.com',
        'embedGameUrl': '//www.emulatorjs.com/embed/game.html',
        'embedContentUrl': '//www.emulatorjs.com/embed/content.html',
        'scriptKey': '//www.emulatorjs.com/emulator.js',
        'styleFile': '//www.emulatorjs.com/emulatorjs.css',
        'versionUrl': 'https://www.emulatorjs.com/api/v',
        'fbaUrl': 'https://www.emulatorjs.com/api/fba',
        'fbneoUrl': 'https://www.emulatorjs.com/api/fbneo',
        'mameUrl': 'https://www.emulatorjs.com/api/mame',
        'mame0243Url': 'https://www.emulatorjs.com/api/mame0.243',
        'versionjson': 'cores/'
    };

    function _0x2c152f(_0x3f5254, _0x54366b, _0x5300bb) {
        var _0x3b3dd4 = this,
            _0x17dd37 = !!(0x3 < arguments['length'] && void 0x0 !== arguments[0x3]) && arguments[0x3],
            _0x436d0c = !(0x4 < arguments['length'] && void 0x0 !== arguments[0x4]) || arguments[0x4],
            _0x5c3a62 = !!(0x5 < arguments['length'] && void 0x0 !== arguments[0x5]) && arguments[0x5];
        if (_0x3f5254 && 'addEventListener' in _0x3f5254 && !I.empty(_0x54366b) && I.func(_0x5300bb)) {
            var _0x37dc6f = _0x54366b['split'](' '),
                _0x5f0160 = _0x5c3a62;
            _0x165de1 && (_0x5f0160 = {
                'passive': _0x436d0c,
                'capture': _0x5c3a62
            }), _0x37dc6f['forEach'](function (_0x3c5aff) {

                _0x3b3dd4 && _0x3b3dd4['eventListeners'] && _0x17dd37 && _0x3b3dd4['eventListeners']['push']({
                    'element': _0x3f5254,
                    'type': _0x3c5aff,
                    'callback': _0x5300bb,
                    'options': _0x5f0160
                }), _0x3f5254[_0x17dd37 ? 'addEventListener' : 'removeEventListener'](_0x3c5aff, _0x5300bb, _0x5f0160);
            });
        }
    }

    function _0x58fce2(_0x1daf70) {
        var _0x446022 = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            _0x537b67 = 0x2 < arguments['length'] ? arguments[0x2] : void 0x0,
            _0x46f392 = !(0x3 < arguments['length'] && void 0x0 !== arguments[0x3]) || arguments[0x3],
            _0x304e24 = !!(0x4 < arguments['length'] && void 0x0 !== arguments[0x4]) && arguments[0x4];
        _0x2c152f['call'](this, _0x1daf70, _0x446022, _0x537b67, !0x0, _0x46f392, _0x304e24);
    }

    function _0x1c7f8f(_0x2f4acf) {
        var _0x49a410 = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            _0x444ac0 = 0x2 < arguments['length'] ? arguments[0x2] : void 0x0,
            _0x16704b = !(0x3 < arguments['length'] && void 0x0 !== arguments[0x3]) || arguments[0x3],
            _0x15c107 = !!(0x4 < arguments['length'] && void 0x0 !== arguments[0x4]) && arguments[0x4];
        _0x2c152f['call'](this, _0x2f4acf, _0x49a410, _0x444ac0, !0x1, _0x16704b, _0x15c107);
    }

    function _0x1fa3b9(_0x380b6f) {
        var _0x4bf7c1 = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            _0x1d371d = 0x2 < arguments['length'] ? arguments[0x2] : void 0x0,
            _0x3f8918 = !(0x3 < arguments['length'] && void 0x0 !== arguments[0x3]) || arguments[0x3],
            _0x2abf5d = !!(0x4 < arguments['length'] && void 0x0 !== arguments[0x4]) && arguments[0x4];
        _0x2c152f['call'](this, _0x380b6f, _0x4bf7c1, function _0x3b8bb3() {

            _0x1c7f8f(_0x380b6f, _0x4bf7c1, _0x3b8bb3, _0x3f8918, _0x2abf5d);
            for (var _0x589e61 = arguments['length'], _0x583ed1 = Array(_0x589e61), _0x17c0ea = 0x0; _0x17c0ea < _0x589e61; _0x17c0ea++) _0x583ed1[_0x17c0ea] = arguments[_0x17c0ea];
            _0x1d371d['apply'](this, _0x583ed1);
        }, !0x0, _0x3f8918, _0x2abf5d);
    }

    function _0x1edc67(_0xbfa30d) {
        var _0x203fbd = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            _0x3ca0d1 = !!(0x2 < arguments['length'] && void 0x0 !== arguments[0x2]) && arguments[0x2],
            _0x69587e = 0x3 < arguments['length'] && void 0x0 !== arguments[0x3] ? arguments[0x3] : {};
        if (I.elm(_0xbfa30d) && !I.empty(_0x203fbd)) {
            var _0xe38219 = new CustomEvent(_0x203fbd, {
                'bubbles': _0x3ca0d1,
                'detail': Object['assign']({}, _0x69587e, {})
            });
            _0xbfa30d['dispatchEvent'](_0xe38219);
        }
    }

    function _0x504d8d(_0x32fcef, _0x473997) {

        return function (_0x427cc4) {

            if (Array['isArray'](_0x427cc4)) return _0x427cc4;
        }(_0x32fcef) || function (_0x1488f0, _0x8c2cf6) {
            var _0x3f1d4a = [],
                _0x2422be = !0x0,
                _0x4fe385 = !0x1,
                _0x91a521 = void 0x0;
            try {
                for (var _0x6d92e0, _0x50dbf3 = _0x1488f0[Symbol['iterator']](); !(_0x2422be = (_0x6d92e0 = _0x50dbf3['next']())['done']) && (_0x3f1d4a['push'](_0x6d92e0['value']), !_0x8c2cf6 || _0x3f1d4a['length'] !== _0x8c2cf6); _0x2422be = !0x0);
            } catch (_0x33bc70) {
                _0x4fe385 = !0x0, _0x91a521 = _0x33bc70;
            } finally {
                try {
                    _0x2422be || null == _0x50dbf3['return'] || _0x50dbf3['return']();
                } finally {
                    if (_0x4fe385) throw _0x91a521;
                }
            }
            return _0x3f1d4a;
        }(_0x32fcef, _0x473997) || (function () {

            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }());
    }

    function _0x3ee401(_0xcb5c73, _0x4b2cc9) {
        var _0x204872 = _0xcb5c73['length'] ? _0xcb5c73 : [_0xcb5c73];
        Array['from'](_0x204872)['reverse']()['forEach'](function (_0x4beaba, _0x3e1199) {
            var _0x44261e = 0x0 < _0x3e1199 ? _0x4b2cc9['cloneNode'](!0x0) : _0x4b2cc9,
                _0xcab421 = _0x4beaba['parentNode'],
                _0x10d990 = _0x4beaba['nextSibling'];
            _0x44261e['appendChild'](_0x4beaba), _0x10d990 ? _0xcab421['insertBefore'](_0x44261e, _0x10d990) : _0xcab421['appendChild'](_0x44261e);
        });
    }

    function _0x3994a2(_0x474ab7, _0x4088a2) {

        !I.elm(_0x474ab7) || I.empty(_0x4088a2) || Object['entries'](_0x4088a2)['filter'](function (_0x5ae388) {
            var _0x4bd0b7 = _0x504d8d(_0x5ae388, 0x2)[0x1];
            return !I.nil(_0x4bd0b7);
        })['forEach'](function (_0x4bd29c) {
            var _0xb8c9f1 = _0x504d8d(_0x4bd29c, 0x2),
                _0x215bb3 = _0xb8c9f1[0x0],
                _0x2c5a76 = _0xb8c9f1[0x1];
            return _0x474ab7['setAttribute'](_0x215bb3, _0x2c5a76);
        });
    }

    function _0x110b30(_0x145ef5, _0x3e0483, _0x2aaabf) {
        var _0xa14e67 = document['createElement'](_0x145ef5);
        return I.obj(_0x3e0483) && _0x3994a2(_0xa14e67, _0x3e0483), I.str(_0x2aaabf) && (_0xa14e67['innerHTML'] = _0x2aaabf), _0xa14e67;
    }

    function _0x353481(_0x482e86) {

        return I.IF(_0x482e86, 27) || I.array(_0x482e86) ? void Array['from'](_0x482e86)['forEach'](_0x353481) : void(!I.elm(_0x482e86) || !I.elm(_0x482e86['parentNode']) || _0x482e86['parentNode']['removeChild'](_0x482e86));
    }

    function _0x3db346(_0x1da0d6, _0x1ce4e3) {

        if (!I.str(_0x1da0d6) || I.empty(_0x1da0d6)) return {};
        var _0x5e1e97 = {},
            _0x55329e = _0x1ce4e3;
        return _0x1da0d6['split'](',')['forEach'](function (_0x50a369) {
            var _0x51a19d = _0x50a369['trim'](),
                _0x37b8f2 = _0x51a19d['replace']('.', ''),
                _0x24209e = _0x51a19d['replace'](/[[\]]/g, '')['split']('='),
                _0x715399 = _0x24209e[0x0],
                _0x27c5b9 = 0x1 < _0x24209e['length'] ? _0x24209e[0x1]['replace'](/["']/g, '') : '';
            switch (_0x51a19d['charAt'](0x0)) {
                case '.':
                    I.obj(_0x55329e) && I.str(_0x55329e['class']) && (_0x55329e['class'] += ' ' ['concat'](_0x37b8f2)), _0x5e1e97['class'] = _0x37b8f2;
                    break;
                case '#':
                    _0x5e1e97['id'] = _0x51a19d['replace']('#', '');
                    break;
                case '[':
                    _0x5e1e97[_0x715399] = _0x27c5b9;
            }
        }), _0x5e1e97;
    }

    function _0x9268bd(_0x4b6d75, _0x1a65dc) {

        if (I.elm(_0x4b6d75)) {
            var _0x4f7fa3 = _0x1a65dc;
            I.bool(_0x4f7fa3) || (_0x4f7fa3 = !_0x4b6d75['hidden']), _0x4f7fa3 ? _0x4b6d75['setAttribute']('hidden', '') : _0x4b6d75['removeAttribute']('hidden');
        }
    }

    function _0x5149bc(_0x1fa4f4, _0x37486e, _0x1b37b8) {

        if (I.IF(_0x1fa4f4, 27)) return Array['from'](_0x1fa4f4)['map'](function (_0x2e98cc) {
            return _0x5149bc(_0x2e98cc, _0x37486e, _0x1b37b8);
        });
        if (I.elm(_0x1fa4f4)) {
            var _0x192c12 = 'toggle';
            return void 0x0 !== _0x1b37b8 && (_0x192c12 = _0x1b37b8 ? 'add' : 'remove'), _0x1fa4f4['classList'][_0x192c12](_0x37486e), _0x1fa4f4['classList']['contains'](_0x37486e);
        }
        return !0x1;
    }

    function _0x108b6f(_0x7e5f26, _0x3948e6) {

        return I.elm(_0x7e5f26) && _0x7e5f26['classList']['contains'](_0x3948e6);
    }

    function _0x4e2906(_0x459bc0, _0x31638a) {
        var _0x51e05d = {
            'Element': Element
        };
        return (_0x51e05d['matches'] || _0x51e05d['webkitMatchesSelector'] || _0x51e05d['mozMatchesSelector'] || _0x51e05d['msMatchesSelector'] || function () {

            return Array['from'](document['querySelectorAll'](_0x31638a))['includes'](this);
        })['call'](_0x459bc0, _0x31638a);
    }

    function _0x5161da(_0x274222) {

        return this['elements']['container']['querySelectorAll'](_0x274222);
    }

    function _0x56b7e6(_0x19aade) {

        return this['elements']['container']['querySelector'](_0x19aade);
    }

    function _0x2bdb51() {
        var _0x58585f = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : null,
            _0x29eaf5 = !!(0x1 < arguments['length'] && void 0x0 !== arguments[0x1]) && arguments[0x1];
        if (I.elm(_0x58585f)) {
            var _0x32e88f = _0x5161da['call'](this, 'button:not(:disabled), input:not(:disabled), [tabindex]'),
                _0x128e31 = _0x32e88f[0x0],
                _0x37a1d2 = _0x32e88f[_0x32e88f['length'] - 0x1];
            _0x2c152f['call'](this, this['elements']['container'], 'keydown', function (_0x21a500) {

                if ('Tab' === _0x21a500['key'] && 0x9 === _0x21a500['keyCode']) {
                    var _0x31a828 = document['activeElement'];
                    _0x31a828 !== _0x37a1d2 || _0x21a500['shiftKey'] ? _0x31a828 === _0x128e31 && _0x21a500['shiftKey'] && (_0x37a1d2['focus'](), _0x21a500['preventDefault']()) : (_0x128e31['focus'](), _0x21a500['preventDefault']());
                }
            }, _0x29eaf5, !0x1);
        }
    }

    function _0x173c20() {
        var _0x11d0e6 = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : null,
            _0x67684f = !!(0x1 < arguments['length'] && void 0x0 !== arguments[0x1]) && arguments[0x1];
        I.elm(_0x11d0e6) && (_0x11d0e6['focus'](), _0x67684f && _0x5149bc(_0x11d0e6, this['config']['classNames']['tabFocus']));
    }

    function _0x44779c(_0x1df5de, _0x18bfff) {

        for (var _0x1a1061, _0x59d696 = 0x0; _0x59d696 < _0x18bfff['length']; _0x59d696++)(_0x1a1061 = _0x18bfff[_0x59d696])['enumerable'] = _0x1a1061['enumerable'] || !0x1, _0x1a1061['configurable'] = !0x0, 'value' in _0x1a1061 && (_0x1a1061['writable'] = !0x0), Object['defineProperty'](_0x1df5de, _0x1a1061['key'], _0x1a1061);
    }

    function _0x561093() {

        if (this['enabled']) {
            var _0x139639 = this['player']['elements']['buttons']['fullscreen'];
            I.elm(_0x139639) && (_0x139639['pressed'] = this['active']), _0x1edc67['call'](this['player'], this['target'], this['active'] ? 'enterfullscreen' : 'exitfullscreen', !0x0), _0x53be21['isIos'] || _0x2bdb51['call'](this['player'], this['target'], this['active']);
        }
    }

    function _0x20a32c() {
        var _0x5deaf4 = !!(0x0 < arguments['length'] && void 0x0 !== arguments[0x0]) && arguments[0x0];
        _0x5deaf4 ? this['scrollPosition'] = {
            'x': window['scrollX'] || 0x0,
            'y': window['scrollY'] || 0x0
        } : window['scrollTo'](this['scrollPosition']['x'], this['scrollPosition']['y']), document['body']['style']['overflow'] = _0x5deaf4 ? 'hidden' : '', _0x5149bc(this['target'], this['player']['config']['classNames']['fullscreen']['fallback'], _0x5deaf4), _0x561093['call'](this);
    }

    function _0x2e127f(_0x40ca4f) {
        setTimeout(function () {
            try {
                _0x9268bd(_0x40ca4f, !0x0), _0x40ca4f['offsetHeight'], _0x9268bd(_0x40ca4f, !0x1);
            } catch (_0x974896) {}
        }, 0x0);
    }

    function _0xa96c03(_0x2929fd) {
        return Object.entries(_0x2929fd).map(v => classNameList[v[0]] ? classNameList[v[0]] : v[0]).join(" ");
    }

    function getClassName(name, bool) {
        let pre = bool ? '.' : ''
        if (I.str(name)) name = name.trim().split(' ');
        else if (I.obj(name)) {
            return I.toArr(name).map(n => pre + (!n[1] ? '' : classNameList[n[0]] ? classNameList[n[0]] : n[0])).join(' ');
        }
        return name.map(n => pre + (classNameList[n] ? classNameList[n] : n)).join(' ');
    }

    function _0x1244c1(_0x2991b1, _0x175e8e, _0x4eaf19) {

        return _0x175e8e in _0x2991b1 ? Object['defineProperty'](_0x2991b1, _0x175e8e, {
            'value': _0x4eaf19,
            'enumerable': !0x0,
            'configurable': !0x0,
            'writable': !0x0
        }) : _0x2991b1[_0x175e8e] = _0x4eaf19, _0x2991b1;
    }

    function _0x50483d(_0x13b41b, _0x381d63) {
        return _0x381d63['split']('.')['reduce'](function (_0x4f3db2, _0x2d4802) {
            return _0x4f3db2 && _0x4f3db2[_0x2d4802];
        }, _0x13b41b);
    }

    function _0x23c7cf() {

        for (var _0x485cea = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {}, _0x29f312 = arguments['length'], _0x1dd5bb = Array(0x1 < _0x29f312 ? _0x29f312 - 0x1 : 0x0), _0x3c8ff8 = 0x1; _0x3c8ff8 < _0x29f312; _0x3c8ff8++) _0x1dd5bb[_0x3c8ff8 - 0x1] = arguments[_0x3c8ff8];
        if (!_0x1dd5bb['length']) return _0x485cea;
        var _0x3279f4 = _0x1dd5bb['shift']();
        return I.obj(_0x3279f4) ? (Object['keys'](_0x3279f4)['forEach'](function (_0x156edf) {

            I.obj(_0x3279f4[_0x156edf]) ? (!Object['keys'](_0x485cea)['includes'](_0x156edf) && Object['assign'](_0x485cea, _0x1244c1({}, _0x156edf, {})), _0x23c7cf(_0x485cea[_0x156edf], _0x3279f4[_0x156edf])) : Object['assign'](_0x485cea, _0x1244c1({}, _0x156edf, _0x3279f4[_0x156edf]));
        }), _0x23c7cf['apply'](void 0x0, [_0x485cea]['concat'](_0x1dd5bb))) : _0x485cea;
    }

    function _0xcc7be() {
        var _0x61f646 = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '',
            _0xe8153c = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : '',
            _0x30c44b = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : '';
        return _0x61f646['replace'](new RegExp(_0xe8153c['toString']()['replace'](/([.*+?^=!:${}()|[\]/\\])/g, '\$1'), 'g'), _0x30c44b['toString']());
    }

    function _0x21bd55() {
        var _0x5d8874 = (0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '')['toString']();
        return (_0x5d8874 = (function () {
            var _0x319737 = (0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '')['toString']();
            return _0x319737 = _0xcc7be(_0x319737, '-', ' '), _0x319737 = _0xcc7be(_0x319737, '_', ' '), _0xcc7be(_0x319737 = (function () {

                return (0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '')['toString']()['replace'](/\w\S*/g, function (_0xcab518) {

                    return _0xcab518['charAt'](0x0)['toUpperCase']() + _0xcab518['substr'](0x1)['toLowerCase']();
                });
            }(_0x319737)), ' ', '');
        }(_0x5d8874)))['charAt'](0x0)['toLowerCase']() + _0x5d8874['slice'](0x1);
    }

    function _0x387d82(_0x2171d, _0x1c6443) {

        return function (_0x340311) {

            if (Array['isArray'](_0x340311)) return _0x340311;
        }(_0x2171d) || function (_0x549855, _0x5cd41a) {
            var _0x4bdef5 = [],
                _0x18c5e3 = !0x0,
                _0x43dc5a = !0x1,
                _0x482ca4 = void 0x0;
            try {
                for (var _0x2d6522, _0x513dcc = _0x549855[Symbol['iterator']](); !(_0x18c5e3 = (_0x2d6522 = _0x513dcc['next']())['done']) && (_0x4bdef5['push'](_0x2d6522['value']), !_0x5cd41a || _0x4bdef5['length'] !== _0x5cd41a); _0x18c5e3 = !0x0);
            } catch (_0x27658e) {
                _0x43dc5a = !0x0, _0x482ca4 = _0x27658e;
            } finally {
                try {
                    _0x18c5e3 || null == _0x513dcc['return'] || _0x513dcc['return']();
                } finally {
                    if (_0x43dc5a) throw _0x482ca4;
                }
            }
            return _0x4bdef5;
        }(_0x2171d, _0x1c6443) || (function () {

            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }());
    }

    function _0x22b7ba(_0x2c6549, _0x319699) {

        for (var _0x5b3996, _0x3a8716 = 0x0; _0x3a8716 < _0x319699['length']; _0x3a8716++)(_0x5b3996 = _0x319699[_0x3a8716])['enumerable'] = _0x5b3996['enumerable'] || !0x1, _0x5b3996['configurable'] = !0x0, 'value' in _0x5b3996 && (_0x5b3996['writable'] = !0x0), Object['defineProperty'](_0x2c6549, _0x5b3996['key'], _0x5b3996);
    }

    function _0x14bb5b(_0x131feb) {

        return (_0x14bb5b = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (_0xb2e16f) {
            return typeof _0xb2e16f;
        } : function (_0x550530) {

            return _0x550530 && 'function' == typeof Symbol && _0x550530['constructor'] === Symbol && _0x550530 !== Symbol['prototype'] ? 'symbol' : typeof _0x550530;
        })(_0x131feb);
    }

    function _0x2a37bc(_0x46fd84, _0x36793b) {

        if ('object' === _0x14bb5b(_0x46fd84) && _0x46fd84['files'] && (_0x46fd84 = _0x46fd84['files'][0x0]), this['littleEndian'] = !0x1, this['offset'] = 0x0, this['_lastRead'] = null, 'object' === _0x14bb5b(_0x46fd84) && _0x46fd84['name'] && _0x46fd84['size']) {
            if ('function' != typeof window['FileReader']) throw new Error('Incompatible Browser');
            this['fileName'] = _0x46fd84['name'], this['fileType'] = _0x46fd84['type'], this['fileSize'] = _0x46fd84['size'], this['_fileReader'] = new FileReader(), this['_fileReader']['marcFile'] = this, this['_fileReader']['addEventListener']('load', function () {

                this['marcFile']['_u8array'] = new Uint8Array(this['result']), this['marcFile']['_dataView'] = new DataView(this['result']), _0x36793b && _0x36793b['call']();
            }, !0x1), this['_fileReader']['readAsArrayBuffer'](_0x46fd84);
        } else {
            if ('object' === _0x14bb5b(_0x46fd84) && 'string' == typeof _0x46fd84['fileName'] && 'boolean' == typeof _0x46fd84['littleEndian']) {
                this['fileName'] = _0x46fd84['fileName'], this['fileType'] = _0x46fd84['fileType'], this['fileSize'] = _0x46fd84['fileSize'];
                var _0x3c7cf8 = new ArrayBuffer(_0x46fd84);
                this['_u8array'] = new Uint8Array(this['fileType']), this['_dataView'] = new DataView(this['fileType']), _0x46fd84['copyToFile'](this, 0x0), _0x36793b && _0x36793b['call']();
            } else {
                if ('object' === _0x14bb5b(_0x46fd84) && 'number' == typeof _0x46fd84['byteLength']) this['fileName'] = 'file.bin', this['fileType'] = 'application/octet-stream', this['fileSize'] = _0x46fd84['byteLength'], void 0x0 !== _0x46fd84['buffer'] && (_0x46fd84 = _0x46fd84['buffer']), this['_u8array'] = new Uint8Array(_0x46fd84), this['_dataView'] = new DataView(_0x46fd84), _0x36793b && _0x36793b['call']();
                else {
                    if ('number' != typeof _0x46fd84) throw new Error('Invalid source');
                    this['fileName'] = 'file.bin', this['fileType'] = 'application/octet-stream', this['fileSize'] = _0x46fd84, _0x3c7cf8 = new ArrayBuffer(_0x46fd84), (this['_u8array'] = new Uint8Array(_0x3c7cf8), this['_dataView'] = new DataView(_0x3c7cf8), _0x36793b && _0x36793b['call']());
                }
            }
        }
    }

    function _0x120ece() {

        this['records'] = [], this['truncate'] = !0x1;
    }

    function _0x17ae12(_0x38efc1, _0x14317d, _0x52f9fe) {

        for (var _0xdc428d = _0x14317d ? new Uint8Array(_0x38efc1['_u8array']['buffer'], _0x14317d) : _0x38efc1['_u8array'], _0x1084a2 = -0x1, _0x4bc1e2 = _0x52f9fe ? _0xdc428d['length'] - 0x4 : _0xdc428d['length'], _0x4093c7 = 0x0; _0x4093c7 < _0x4bc1e2; _0x4093c7++) _0x1084a2 = _0x1084a2 >>> 0x8 ^ _0x2fb2a0[0xff & (_0x1084a2 ^ _0xdc428d[_0x4093c7])];
        return (-0x1 ^ _0x1084a2) >>> 0x0;
    }

    function _0x161c5e() {

        this['sourceSize'] = 0x0, this['targetSize'] = 0x0, this['metaData'] = '', this['actions'] = [], this['sourceChecksum'] = 0x0, this['targetChecksum'] = 0x0, this['patchChecksum'] = 0x0;
    }

    function _0x47c6e2(_0x562dd2) {

        for (;;) {
            var _0x1b8c2a = 0x7f & _0x562dd2;
            if (0x0 === (_0x562dd2 >>= 0x7)) {
                this['writeU8'](0x80 | _0x1b8c2a);
                break;
            }
            this['writeU8'](_0x1b8c2a), _0x562dd2--;
        }
    }

    function _0x2e8573(_0x350217) {
        for (var _0x22220b = 0x0;;) {
            if (0x7f & _0x350217, 0x0 === (_0x350217 >>= 0x7)) {
                _0x22220b++;
                break;
            }
            _0x22220b++, _0x350217--;
        }
        return _0x22220b;
    }

    function _0x11e872() {

        this['records'] = [], this['sizeInput'] = 0x0, this['sizeOutput'] = 0x0, this['checksumInput'] = 0x0, this['checksumOutput'] = 0x0;
    }

    function _0x554e3f(_0x5666ea) {

        for (;;) {
            var _0x85959d = 0x7f & _0x5666ea;
            if (0x0 === (_0x5666ea >>= 0x7)) {
                this['writeU8'](0x80 | _0x85959d);
                break;
            }
            this['writeU8'](_0x85959d), --_0x5666ea;
        }
    }

    function _0x5156ca(_0x3e64fa) {
        for (var _0x328cfb = 0x0; 0x7f & _0x3e64fa, _0x328cfb++, 0x0 !== (_0x3e64fa >>= 0x7);) --_0x3e64fa;
        return _0x328cfb;
    }



    function _0x14195e(_0x2140e6) {

        return function (_0x447798) {

            if (Array['isArray'](_0x447798)) {
                for (var _0x57257c = 0x0, _0x515df2 = Array(_0x447798['length']); _0x57257c < _0x447798['length']; _0x57257c++) _0x515df2[_0x57257c] = _0x447798[_0x57257c];
                return _0x515df2;
            }
        }(_0x2140e6) || function (_0x5b7d8b) {

            if (Symbol['iterator'] in Object(_0x5b7d8b) || '[object Arguments]' === Object['prototype']['toString']['call'](_0x5b7d8b)) return Array['from'](_0x5b7d8b);
        }(_0x2140e6) || (function () {

            throw new TypeError('Invalid attempt to spread non-iterable instance');
        }());
    }

    function _0x4a68ec(_0x1538b8, _0x43e013) {

        for (var _0x134e06, _0x4ad578 = 0x0; _0x4ad578 < _0x43e013['length']; _0x4ad578++)(_0x134e06 = _0x43e013[_0x4ad578])['enumerable'] = _0x134e06['enumerable'] || !0x1, _0x134e06['configurable'] = !0x0, 'value' in _0x134e06 && (_0x134e06['writable'] = !0x0), Object['defineProperty'](_0x1538b8, _0x134e06['key'], _0x134e06);
    }

    function _0x1847b8(_0x1b7ac8, _0x53bfaa) {

        for (var _0x164bd2, _0x49835a = 0x0; _0x49835a < _0x53bfaa['length']; _0x49835a++)(_0x164bd2 = _0x53bfaa[_0x49835a])['enumerable'] = _0x164bd2['enumerable'] || !0x1, _0x164bd2['configurable'] = !0x0, 'value' in _0x164bd2 && (_0x164bd2['writable'] = !0x0), Object['defineProperty'](_0x1b7ac8, _0x164bd2['key'], _0x164bd2);
    }

    function _0x15e0bd(_0x52dd20, _0x22093e, _0x47993f, _0x424439, _0xf7b655, _0x59da35, _0xe81837) {

        try {
            var _0x42e74d = _0x52dd20[_0x59da35](_0xe81837),
                _0x3faf55 = _0x42e74d['value'];
        } catch (_0xbc49cd) {
            return void _0x47993f(_0xbc49cd);
        }
        _0x42e74d['done'] ? _0x22093e(_0x3faf55) : Promise['resolve'](_0x3faf55)['then'](_0x424439, _0xf7b655);
    }

    function _0x5c1255(_0x516fa9) {

        return (_0x5c1255 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (_0xf310f3) {
            return typeof _0xf310f3;
        } : function (_0xda669f) {

            return _0xda669f && 'function' == typeof Symbol && _0xda669f['constructor'] === Symbol && _0xda669f !== Symbol['prototype'] ? 'symbol' : typeof _0xda669f;
        })(_0x516fa9);
    }

    function _0x9fc116(_0x4aa4a8, _0x1873f8, _0x518918) {

        return _0x1873f8 in _0x4aa4a8 ? Object['defineProperty'](_0x4aa4a8, _0x1873f8, {
            'value': _0x518918,
            'enumerable': !0x0,
            'configurable': !0x0,
            'writable': !0x0
        }) : _0x4aa4a8[_0x1873f8] = _0x518918, _0x4aa4a8;
    }

    function _0x55699e(_0x4fa268, _0xb07636) {

        return function (_0x2e083c) {

            if (Array['isArray'](_0x2e083c)) return _0x2e083c;
        }(_0x4fa268) || function (_0x4e95ca, _0x5662c6) {
            var _0x14d5f3 = [],
                _0x3455bd = !0x0,
                _0x115f78 = !0x1,
                _0x3cffa6 = void 0x0;
            try {
                for (var _0x34ca86, _0x50a700 = _0x4e95ca[Symbol['iterator']](); !(_0x3455bd = (_0x34ca86 = _0x50a700['next']())['done']) && (_0x14d5f3['push'](_0x34ca86['value']), !_0x5662c6 || _0x14d5f3['length'] !== _0x5662c6); _0x3455bd = !0x0);
            } catch (_0x2e55c1) {
                _0x115f78 = !0x0, _0x3cffa6 = _0x2e55c1;
            } finally {
                try {
                    _0x3455bd || null == _0x50a700['return'] || _0x50a700['return']();
                } finally {
                    if (_0x115f78) throw _0x3cffa6;
                }
            }
            return _0x14d5f3;
        }(_0x4fa268, _0xb07636) || (function () {

            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }());
    }

    function _0x491caa(_0x4ff6db, _0x5d50d0) {

        return function (_0x22a964) {

            if (Array['isArray'](_0x22a964)) return _0x22a964;
        }(_0x4ff6db) || function (_0x344e2f, _0x174bc5) {
            var _0x14986e = [],
                _0x4ece59 = !0x0,
                _0x562847 = !0x1,
                _0x535510 = void 0x0;
            try {
                for (var _0x24f938, _0x3df4ae = _0x344e2f[Symbol['iterator']](); !(_0x4ece59 = (_0x24f938 = _0x3df4ae['next']())['done']) && (_0x14986e['push'](_0x24f938['value']), !_0x174bc5 || _0x14986e['length'] !== _0x174bc5); _0x4ece59 = !0x0);
            } catch (_0x7def1a) {
                _0x562847 = !0x0, _0x535510 = _0x7def1a;
            } finally {
                try {
                    _0x4ece59 || null == _0x3df4ae['return'] || _0x3df4ae['return']();
                } finally {
                    if (_0x562847) throw _0x535510;
                }
            }
            return _0x14986e;
        }(_0x4ff6db, _0x5d50d0) || (function () {

            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }());
    }

    function _0x2574d5(_0x1788d8, _0x37c00a) {

        for (var _0x59e377, _0x46744d = 0x0; _0x46744d < _0x37c00a['length']; _0x46744d++)(_0x59e377 = _0x37c00a[_0x46744d])['enumerable'] = _0x59e377['enumerable'] || !0x1, _0x59e377['configurable'] = !0x0, 'value' in _0x59e377 && (_0x59e377['writable'] = !0x0), Object['defineProperty'](_0x1788d8, _0x59e377['key'], _0x59e377);
    }
    var _0xcd8034 = Number['isNaN'],
        _0xe3dfd2 = String['fromCharCode'],
        _0x1d0cbb = Math['abs'],
        _0x1c5f48 = String['prototype'],
        _0x4b9475 = Math['ceil'],
        _0x3463a5 = Math['floor'],
        _0x3d9513 = Math['min'];
    var _0x53be21 = {
            'isEdge': 'Netscape' === navigator['appName'] && -0x1 < navigator['appVersion']['indexOf']('Edge'),
            'isIE': !!document['documentMode'],
            'isWebkit': 'WebkitAppearance' in document['documentElement']['style'] && !/Edge/ ['test'](navigator['userAgent']),
            'isIPhone': /(iPhone|iPod)/gi ['test'](navigator['platform']),
            'isIos': /(iPad|iPhone|iPod)/gi ['test'](navigator['platform']),
            'prefix': (function () {
                var _0x1d9edb = window['getComputedStyle'](document['documentElement'], '');
                return (Array['prototype']['slice']['call'](_0x1d9edb)['join']('')['match'](/-(moz|webkit|ms)-/) || '' === _0x1d9edb['OLink'] && ['', 'o'])[0x1];
            }()),
            'info': function () {
                var _0x91c666 = /(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d\.apre]+)/ ['exec'](navigator['userAgent']);
                return {
                    'name': _0x91c666[0x1]['toLowerCase'](),
                    'version': _0x91c666[0x2]
                };
            }
        },
        _0x165de1 = (function () {
            var _0x4893b1 = !0x1;
            try {
                var _0x12a95a = Object['defineProperty']({}, 'passive', {
                    'get': function () {
                        return _0x4893b1 = !0x0, null;
                    }
                });
                window['addEventListener']('test', null, _0x12a95a), window['removeEventListener']('test', null, _0x12a95a);
            } catch (_0x74c1b1) {}
            return _0x4893b1;
        }()),
        _0x2d3df9 = (function () {


            function _0x20c332(_0x3f866e) {
                var _0x31f28e = this;
                (function (_0x590489, _0x473b28) {

                    if (!(_0x590489 instanceof _0x473b28)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x20c332), this['player'] = _0x3f866e, this['prefix'] = _0x20c332['prefix'], this['property'] = _0x20c332['property'], this['scrollPosition'] = {
                    'x': 0x0,
                    'y': 0x0
                }, _0x58fce2['call'](this['player'], document, 'ms' === this['prefix'] ? 'MSFullscreenChange' : '' ['concat'](this['prefix'], 'fullscreenchange'), function () {

                    _0x561093['call'](_0x31f28e);
                }), this['update']());
            }
            return function (_0xb7d016, _0x456390, _0x21b23a) {

                _0x456390 && _0x44779c(_0xb7d016['prototype'], _0x456390), _0x21b23a && _0x44779c(_0xb7d016, _0x21b23a);
            }(_0x20c332, [{
                'key': 'update',
                'value': function () {

                    this['enabled'], (0x2 == this['player']['mode'] || 0x1 == this['player']['mode'] && this['player']['inFrame']) && _0x5149bc(this['player']['elements']['container'], this['player']['config']['classNames']['fullscreen']['enabled'], this['enabled']);
                }
            }, {
                'key': 'enter',
                'value': function () {

                    this['enabled'] && (_0x20c332['native'] ? this['prefix'] ? !I.empty(this['prefix']) && this['target']['' ['concat'](this['prefix'], 'Request')['concat'](this['property'])]() : this['target']['requestFullscreen']() : _0x20a32c['call'](this, !0x0));
                }
            }, {
                'key': 'exit',
                'value': function () {

                    if (this['enabled']) {
                        if (_0x20c332['native']) {
                            if (this['prefix']) {
                                if (!I.empty(this['prefix'])) {
                                    var _0x54fa69 = 'moz' === this['prefix'] ? 'Cancel' : 'Exit';
                                    document['' ['concat'](this['prefix'])['concat'](_0x54fa69)['concat'](this['property'])]();
                                }
                            } else(document['cancelFullScreen'] || document['exitFullscreen'])['call'](document);
                        } else _0x20a32c['call'](this, !0x1);
                    }
                }
            }, {
                'key': 'toggle',
                'value': function () {

                    this['active'] ? this['exit']() : this['enter']();
                }
            }, {
                'key': 'enabled',
                'get': function () {
                    return _0x20c332['native'];
                }
            }, {
                'key': 'active',
                'get': function () {

                    return !!this['enabled'] && (_0x20c332['native'] ? (this['prefix'] ? document['' ['concat'](this['prefix'])['concat'](this['property'], 'Element')] : document['fullscreenElement']) === this['target'] : _0x108b6f(this['target'], this['player']['config']['classNames']['fullscreen']['fallback']));
                }
            }, {
                'key': 'target',
                'get': function () {

                    return _0x53be21['isEdge'] ? this['player']['game'] : this['player']['elements']['container'];
                }
            }], [{
                'key': 'native',
                'get': function () {

                    return !!(document['fullscreenEnabled'] || document['webkitFullscreenEnabled'] || document['mozFullScreenEnabled'] || document['msFullscreenEnabled']);
                }
            }, {
                'key': 'prefix',
                'get': function () {

                    if (I.func(document['exitFullscreen'])) return '';
                    var _0x10ad3c = '';
                    return ['webkit', 'moz', 'ms']['some'](function (_0x3be415) {

                        return !(!I.func(document['' ['concat'](_0x3be415, 'ExitFullscreen')]) && !I.func(document['' ['concat'](_0x3be415, 'CancelFullScreen')]) || (_0x10ad3c = _0x3be415, 0x0));
                    }), _0x10ad3c;
                }
            }, {
                'key': 'property',
                'get': function () {

                    return 'moz' === this['prefix'] ? 'FullScreen' : 'Fullscreen';
                }
            }]), _0x20c332;
        }()),
        _0x4dc472 = (function () {
            var _0x25f79d = document['createElement']('span'),
                _0x2e1c90 = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd otransitionend',
                    'transition': 'transitionend'
                },
                _0x5d7115 = Object['keys'](_0x2e1c90)['find'](function (_0x20d547) {

                    return void 0x0 !== _0x25f79d['style'][_0x20d547];
                });
            return !!I.str(_0x5d7115) && _0x2e1c90[_0x5d7115];
        }()),
        _0x236fc8 = {
            'rangeInput': (function () {
                var _0x58766d = document['createElement']('input');
                return _0x58766d['type'] = 'range', 'range' === _0x58766d['type'];
            }()),
            'touch': 'ontouchstart' in document['documentElement'],
            'transitions': !0x1 !== _0x4dc472,
            'reducedMotion': 'matchMedia' in window && window['matchMedia']('(prefers-reduced-motion)')['matches'],
            'webgl': (function () {
                var _0x36a2ca = {
                    'DETECTED': !0x1
                };
                if (!_0x36a2ca['DETECTED']) {
                    var _0x56c792 = document['createElement']('canvas');
                    if (_0x56c792 && _0x56c792['getContext'])
                        for (var _0x7b6c23 = ['webgl2', 'experimental-webgl2', 'webgl', 'experimental-webgl'], _0x50adae = 0x0, _0x30c799 = _0x7b6c23['length']; _0x50adae < _0x30c799; ++_0x50adae) {
                            var _0xc19506 = _0x7b6c23[_0x50adae],
                                _0x1f8663 = _0x56c792['getContext'](_0xc19506);
                            if (_0x1f8663) {
                                _0x36a2ca['WEBGL_CONTEXT'] = _0xc19506, _0x36a2ca['WEBGL_VERSION'] = _0x1f8663['getParameter'](_0x1f8663['VERSION']), _0x36a2ca['WEBGL_VENDOR'] = _0x1f8663['getParameter'](_0x1f8663['VENDOR']), _0x36a2ca['WEBGL_SL_VERSION'] = _0x1f8663['getParameter'](_0x1f8663['SHADING_LANGUAGE_VERSION']), _0x36a2ca['MAX_TEXTURE_SIZE'] = _0x1f8663['getParameter'](_0x1f8663['MAX_TEXTURE_SIZE']);
                                var _0x22601b = _0x1f8663['getExtension']('WEBGL_debug_renderer_info');
                                _0x22601b && (_0x36a2ca['WEBGL_VENDOR'] = _0x1f8663['getParameter'](_0x22601b['UNMASKED_VENDOR_WEBGL']), _0x36a2ca['WEBGL_RENDERER'] = _0x1f8663['getParameter'](_0x22601b['UNMASKED_RENDERER_WEBGL'])), _0x36a2ca['DETECTED'] = !0x0;
                                break;
                            }
                        }
                }
                return _0x36a2ca;
            }()),
            'wasm': 'undefined' != typeof WebAssembly && I.obj(WebAssembly),
            'websocket': 'undefined' != typeof WebSocket,
            'webRTCSupported': (function () {
                var _0x4a0953 = !0x1;
                return ['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer']['forEach'](function (_0x4b4ad1) {
                    _0x4a0953 || _0x4b4ad1 in window && (_0x4a0953 = !0x0);
                }), _0x4a0953;
            }()),
            'audioContext': 'undefined' != typeof AudioContext,
            'filesystem': void('showOpenFilePicker' in window && 'showSaveFilePicker' in window && window),
            'indexeddb': 'indexedDB' in window
        },
        _0x1270d7 = function () {
            var _0x1b47ec = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '',
                _0x45505e = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : {};
            if (I.empty(_0x1b47ec) || I.empty(_0x45505e)) return '';
            var _0x48627c = _0x50483d(_0x45505e['i18n'], _0x1b47ec);
            if (I.empty(_0x48627c)) return '';
            var _0x13214a = {
                '{seektime}': _0x45505e['seekTime'],
                '{title}': _0x45505e['title']
            };
            return I.toArr(_0x13214a, function (_0x143ea3) {
                var _0x587520 = _0x387d82(_0x143ea3, 0x2),
                    _0x4ff8cb = _0x587520[0x0],
                    _0x2e6ab0 = _0x587520[0x1];
                _0x48627c = _0xcc7be(_0x48627c, _0x4ff8cb, _0x2e6ab0);
            }), _0x48627c;
        },
        _0x39ea9e = (function () {


            function _0x5abba(_0x110adf, _0x2ad6b2) {

                (function (_0x167d84, _0x271a68) {

                    if (!(_0x167d84 instanceof _0x271a68)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x5abba), this['enabled'] = !0x0, this['key'] = _0x2ad6b2, this['player'] = _0x110adf, this['_supported'] = !0x1);
            }
            return function (_0x40e5b3, _0x27fcef, _0x1a647a) {

                _0x27fcef && _0x22b7ba(_0x40e5b3['prototype'], _0x27fcef), _0x1a647a && _0x22b7ba(_0x40e5b3, _0x1a647a);
            }(_0x5abba, [{
                'key': 'get',
                'value': function (_0x39abec) {

                    if (!_0x5abba['supported'] || !this['enabled']) return null;
                    var _0x225517 = window['localStorage']['getItem'](this['key']);
                    if (I.empty(_0x225517)) return null;
                    var _0x4e8501 = JSON['parse'](_0x225517);
                    return I.str(_0x39abec) && _0x39abec['length'] ? _0x4e8501[_0x39abec] : _0x4e8501;
                }
            }, {
                'key': 'set',
                'value': function (_0x47a6a1) {

                    if (_0x5abba['supported'] && this['enabled'] && I.obj(_0x47a6a1)) {
                        var _0x269fec = this['get']();
                        I.empty(_0x269fec) && (_0x269fec = {}), _0x23c7cf(_0x269fec, _0x47a6a1), window['localStorage']['setItem'](this['key'], JSON['stringify'](_0x269fec));
                    }
                }
            }], [{
                'key': 'supported',
                'get': function () {

                    if (this['_supported']) return !0x0;
                    try {
                        if (!('localStorage' in window)) return !0x1;
                        var _0x55dcbc = '___test';
                        return window['localStorage']['getItem'](_0x55dcbc) || window['localStorage']['setItem'](_0x55dcbc, _0x55dcbc), window['localStorage']['removeItem'](_0x55dcbc), this['_supported'] = !0x0, !0x0;
                    } catch (_0x45c9c9) {
                        return !0x1;
                    }
                }
            }]), _0x5abba;
        }()),
        _0x10aded = {
            'addStyleHook': function () {

                _0x5149bc(this['elements']['container'], this['config']['selectors']['container']['replace']('.', ''), !0x0), _0x5149bc(this['elements']['container'], this['config']['classNames']['uiSupported'], !0x0), _0x5149bc(this['elements']['container'], this['config']['classNames']['hideControls'], !0x0);
            },
            'build': function () {

                this['listeners']['media'](), I.elm(this['elements']['controls']) || (_0x28f202['inject']['call'](this), this['listeners']['controls']()), this['volume'] = null, this['muted'] = null, _0x28f202['updateVolume']['call'](this), _0x5149bc(this['elements']['container'], this['config']['classNames']['isTouch'], this['touch']), this['ready'] = !0x0;
            },
            'toggleControls': function (_0x558d66) {
                var _0x5d4c63 = this['elements']['controls'];
                if (_0x5d4c63) {
                    var _0x1e0a2b = 0x0,
                        _0x29c002 = _0x5161da['call'](this, '.' ['concat'](_0xa96c03({
                            'ejs__dialogs': !0x0
                        }), ' > .')['concat'](_0xa96c03({
                            'ejs__dialog': !0x0
                        })));
                    Array['from'](_0x29c002)['forEach'](function (_0x425445) {

                        !0x0 !== _0x425445['hidden'] && (_0x1e0a2b += 0x1);
                    }), 0x0 < _0x1e0a2b ? _0x10aded['doToggleControls']['call'](this, !0x1) : _0x10aded['doToggleControls']['call'](this, !!(_0x558d66 || this['paused'] || _0x5d4c63['pressed'] || _0x5d4c63['hover']));
                }
            },
            'doToggleControls': function (_0x3eb44b) {

                if (this['started']) {
                    var _0x4cc1bb = void 0x0 === _0x3eb44b ? void 0x0 : !_0x3eb44b,
                        _0x10dd57 = _0x5149bc(this['elements']['container'], this['config']['classNames']['hideControls'], _0x4cc1bb);
                    return _0x10dd57 && _0x28f202['toggleMenu']['call'](this, !0x1), !_0x10dd57;
                }
                return !0x1;
            }
        },
        _0x514a8c = _0x10aded,
        _0x2326ed = function (_0x377af3) {
            ! function (_0x3dae15) {


                function _0x4fd12c(_0x525683) {
                    var _0x24ba16;
                    if (_0x24ba16 = _0x525683['targetTouches'][0x0]) {
                        var _0x58bb44 = _0x3a9438['getBoundingClientRect'](),
                            _0x274c36 = _0x24ba16['clientX'] - _0x58bb44['left'] - _0x58bb44['width'] / 0x2,
                            _0x6a4702 = _0x24ba16['clientY'] - _0x58bb44['top'] - _0x58bb44['height'] / 0x2,
                            _0x3a3864 = 0x0,
                            _0x3a77cc = 0x0,
                            _0x2c2845 = 0x0,
                            _0x1b249b = 0x0,
                            _0x5d2fe5 = Math['atan'](_0x274c36 / _0x6a4702) / (Math['PI'] / 0xb4);
                        _0x6a4702 <= -0xa && (_0x3a3864 = 0x1), _0x6a4702 >= 0xa && (_0x3a77cc = 0x1), _0x274c36 >= 0xa && (_0x1b249b = 0x1, _0x2c2845 = 0x0, (0x0 > _0x5d2fe5 && -0x23 <= _0x5d2fe5 || 0x0 < _0x5d2fe5 && 0x23 >= _0x5d2fe5) && (_0x1b249b = 0x0), _0x3a3864 = 0x0 > _0x5d2fe5 && -0x37 <= _0x5d2fe5 ? 0x1 : 0x0, _0x3a77cc = 0x0 < _0x5d2fe5 && 0x37 >= _0x5d2fe5 ? 0x1 : 0x0), _0x274c36 <= -0xa && (_0x1b249b = 0x0, _0x2c2845 = 0x1, (0x0 > _0x5d2fe5 && -0x23 <= _0x5d2fe5 || 0x0 < _0x5d2fe5 && 0x23 >= _0x5d2fe5) && (_0x2c2845 = 0x0), _0x3a3864 = 0x0 < _0x5d2fe5 && 0x37 >= _0x5d2fe5 ? 0x1 : 0x0, _0x3a77cc = 0x0 > _0x5d2fe5 && -0x37 <= _0x5d2fe5 ? 0x1 : 0x0), _0x2a31c1['classList']['toggle'](_0xa96c03({
                            'dpad-right': !0x0
                        }), _0x1b249b), _0x2a31c1['classList']['toggle'](_0xa96c03({
                            'dpad-left': !0x0
                        }), _0x2c2845), _0x2a31c1['classList']['toggle'](_0xa96c03({
                            'dpad-up': !0x0
                        }), _0x3a3864), _0x2a31c1['classList']['toggle'](_0xa96c03({
                            'dpad-down': !0x0
                        }), _0x3a77cc), _0x5ceb0f(_0x2c2845, _0x1b249b, _0x3a3864, _0x3a77cc);
                    }
                    _0x525683['stopPropagation']();
                }

                function _0x231863(_0x1b6acc) {

                    _0x5ceb0f(0x0, 0x0, 0x0, 0x0), _0x2a31c1['classList']['toggle'](_0xa96c03({
                        'dpad-up': !0x0
                    }), !0x1), _0x2a31c1['classList']['toggle'](_0xa96c03({
                        'dpad-down': !0x0
                    }), !0x1), _0x2a31c1['classList']['toggle'](_0xa96c03({
                        'dpad-right': !0x0
                    }), !0x1), _0x2a31c1['classList']['toggle'](_0xa96c03({
                        'dpad-left': !0x0
                    }), !0x1), _0x1b6acc['stopPropagation']();
                }
                _0x3dae15['width'];
                var _0x31e22c = _0x3dae15['container'],
                    _0x5ceb0f = _0x3dae15['event'];
                'function' != typeof _0x5ceb0f && (_0x5ceb0f = function () {});
                var _0x2a31c1 = _0x110b30('div', {
                        'class': _0xa96c03({
                            'dpad-bg': !0x0
                        })
                    }),
                    _0x3a9438 = _0x110b30('div', {
                        'class': _0xa96c03({
                            'dpad-front': !0x0
                        })
                    });
                _0x2a31c1['innerHTML'] = '<div class="' ['concat'](_0xa96c03({
                    'dpad-1': !0x0
                }), '"><div class="')['concat'](_0xa96c03({
                    'dpad-1-bg': !0x0
                }), `"></div></div>
    <` + 'div class="')['concat'](_0xa96c03({
                    'dpad-2': !0x0
                }), '"><div class="')['concat'](_0xa96c03({
                    'dpad-2-bg': !0x0
                }), '"></div></div>'), _0x31e22c['append'](_0x2a31c1), _0x31e22c['append'](_0x3a9438), _0x58fce2(_0x3a9438, 'touchstart', _0x4fd12c), _0x58fce2(_0x3a9438, 'touchmove', _0x4fd12c), _0x58fce2(_0x3a9438, 'touchend', _0x231863), _0x58fce2(_0x3a9438, 'touchcancel', _0x231863);
            }(_0x377af3);
        };
    _0x2a37bc['prototype']['seek'] = function (_0x2d4e56) {

        this['offset'] = _0x2d4e56;
    }, _0x2a37bc['prototype']['skip'] = function (_0x4cb746) {
        this['offset'] += _0x4cb746;
    }, _0x2a37bc['prototype']['isEOF'] = function () {

        return !(this['offset'] < this['fileSize']);
    }, _0x2a37bc['prototype']['slice'] = function (_0x2b3210, _0x48ae32) {
        var _0x1b5001;
        return _0x48ae32 = _0x48ae32 || this['fileSize'] - _0x2b3210, void 0x0 === this['_u8array']['buffer']['slice'] ? (_0x1b5001 = new _0x2a37bc(_0x48ae32), this['copyToFile'](_0x1b5001, _0x2b3210, _0x48ae32, 0x0)) : ((_0x1b5001 = new _0x2a37bc(0x0))['fileSize'] = _0x48ae32, _0x1b5001['_u8array'] = new Uint8Array(this['_u8array']['buffer']['slice'](_0x2b3210, _0x2b3210 + _0x48ae32))), _0x1b5001['fileName'] = this['fileName'], _0x1b5001['fileType'] = this['fileType'], _0x1b5001['littleEndian'] = this['littleEndian'], _0x1b5001;
    }, _0x2a37bc['prototype']['copyToFile'] = function (_0x5485bc, _0x4a9e98, _0x3d083a, _0x24e50a) {
        void 0x0 === _0x24e50a && (_0x24e50a = _0x4a9e98), _0x3d083a = _0x3d083a || this['fileSize'] - _0x4a9e98;
        for (var _0x43da30 = 0x0; _0x43da30 < _0x3d083a; _0x43da30++) _0x5485bc['_u8array'][_0x24e50a + _0x43da30] = this['_u8array'][_0x4a9e98 + _0x43da30];
    }, _0x2a37bc['prototype']['readU8'] = function () {

        return this['_lastRead'] = this['_u8array'][this['offset']], this['offset']++, this['_lastRead'];
    }, _0x2a37bc['prototype']['readU16'] = function () {

        return this['_lastRead'] = this['littleEndian'] ? this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) : (this['_u8array'][this['offset']] << 0x8) + this['_u8array'][this['offset'] + 0x1], this['offset'] += 0x2, this['_lastRead'] >>> 0x0;
    }, _0x2a37bc['prototype']['readU24'] = function () {

        return this['_lastRead'] = this['littleEndian'] ? this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) + (this['_u8array'][this['offset'] + 0x2] << 0x10) : (this['_u8array'][this['offset']] << 0x10) + (this['_u8array'][this['offset'] + 0x1] << 0x8) + this['_u8array'][this['offset'] + 0x2], this['offset'] += 0x3, this['_lastRead'] >>> 0x0;
    }, _0x2a37bc['prototype']['readU32'] = function () {

        return this['_lastRead'] = this['littleEndian'] ? this['_u8array'][this['offset']] + (this['_u8array'][this['offset'] + 0x1] << 0x8) + (this['_u8array'][this['offset'] + 0x2] << 0x10) + (this['_u8array'][this['offset'] + 0x3] << 0x18) : (this['_u8array'][this['offset']] << 0x18) + (this['_u8array'][this['offset'] + 0x1] << 0x10) + (this['_u8array'][this['offset'] + 0x2] << 0x8) + this['_u8array'][this['offset'] + 0x3], this['offset'] += 0x4, this['_lastRead'] >>> 0x0;
    }, _0x2a37bc['prototype']['readBytes'] = function (_0x39a94f) {

        this['_lastRead'] = Array(_0x39a94f);
        for (var _0x5a4f8b = 0x0; _0x5a4f8b < _0x39a94f; _0x5a4f8b++) this['_lastRead'][_0x5a4f8b] = this['_u8array'][this['offset'] + _0x5a4f8b];
        return this['offset'] += _0x39a94f, this['_lastRead'];
    }, _0x2a37bc['prototype']['readString'] = function (_0x150ee2) {

        this['_lastRead'] = '';
        for (var _0x44f0e4 = 0x0; _0x44f0e4 < _0x150ee2 && this['offset'] + _0x44f0e4 < this['fileSize'] && 0x0 < this['_u8array'][this['offset'] + _0x44f0e4]; _0x44f0e4++) this['_lastRead'] += _0xe3dfd2(this['_u8array'][this['offset'] + _0x44f0e4]);
        return this['offset'] += _0x150ee2, this['_lastRead'];
    }, _0x2a37bc['prototype']['writeU8'] = function (_0x4cde3d) {

        this['_u8array'][this['offset']] = _0x4cde3d, this['offset']++;
    }, _0x2a37bc['prototype']['writeU16'] = function (_0x2918f5) {

        this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x2918f5, this['_u8array'][this['offset'] + 0x1] = _0x2918f5 >> 0x8) : (this['_u8array'][this['offset']] = _0x2918f5 >> 0x8, this['_u8array'][this['offset'] + 0x1] = 0xff & _0x2918f5), this['offset'] += 0x2;
    }, _0x2a37bc['prototype']['writeU24'] = function (_0x1cdbf7) {

        this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x1cdbf7, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x1cdbf7) >> 0x8, this['_u8array'][this['offset'] + 0x2] = (0xff0000 & _0x1cdbf7) >> 0x10) : (this['_u8array'][this['offset']] = (0xff0000 & _0x1cdbf7) >> 0x10, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x1cdbf7) >> 0x8, this['_u8array'][this['offset'] + 0x2] = 0xff & _0x1cdbf7), this['offset'] += 0x3;
    }, _0x2a37bc['prototype']['writeU32'] = function (_0x226a0e) {

        this['littleEndian'] ? (this['_u8array'][this['offset']] = 0xff & _0x226a0e, this['_u8array'][this['offset'] + 0x1] = (0xff00 & _0x226a0e) >> 0x8, this['_u8array'][this['offset'] + 0x2] = (0xff0000 & _0x226a0e) >> 0x10, this['_u8array'][this['offset'] + 0x3] = (0xff000000 & _0x226a0e) >> 0x18) : (this['_u8array'][this['offset']] = (0xff000000 & _0x226a0e) >> 0x18, this['_u8array'][this['offset'] + 0x1] = (0xff0000 & _0x226a0e) >> 0x10, this['_u8array'][this['offset'] + 0x2] = (0xff00 & _0x226a0e) >> 0x8, this['_u8array'][this['offset'] + 0x3] = 0xff & _0x226a0e), this['offset'] += 0x4;
    }, _0x2a37bc['prototype']['writeBytes'] = function (_0x4dd9b4) {

        for (var _0x5a31c1 = 0x0; _0x5a31c1 < _0x4dd9b4['length']; _0x5a31c1++) this['_u8array'][this['offset'] + _0x5a31c1] = _0x4dd9b4[_0x5a31c1];
        this['offset'] += _0x4dd9b4['length'];
    }, _0x2a37bc['prototype']['writeString'] = function (_0x44d818, _0x99bb90) {

        _0x99bb90 = _0x99bb90 || _0x44d818['length'];
        for (var _0xe8c18e = 0x0; _0xe8c18e < _0x44d818['length'] && _0xe8c18e < _0x99bb90; _0xe8c18e++) this['_u8array'][this['offset'] + _0xe8c18e] = _0x44d818['charCodeAt'](_0xe8c18e);
        for (; _0xe8c18e < _0x99bb90; _0xe8c18e++) this['_u8array'][this['offset'] + _0xe8c18e] = 0x0;
        this['offset'] += _0x99bb90;
    };
    var _0x47ef4e = _0x2a37bc,
        _0x35d3f3 = 'PATCH',
        _0x42d92a = 0x0;
    _0x120ece['prototype']['addSimpleRecord'] = function (_0x5359cd, _0x24dd8f) {

        this['records']['push']({
            'offset': _0x5359cd,
            'type': 0x1,
            'length': _0x24dd8f['length'],
            'data': _0x24dd8f
        });
    }, _0x120ece['prototype']['addRLERecord'] = function (_0x3f65aa, _0x3ab540, _0x393dd9) {

        this['records']['push']({
            'offset': _0x3f65aa,
            'type': _0x42d92a,
            'length': _0x3ab540,
            'byte': _0x393dd9
        });
    }, _0x120ece['prototype']['toString'] = function () {

        nSimpleRecords = 0x0, nRLERecords = 0x0;
        for (var _0x312ae9 = 0x0; _0x312ae9 < this['records']['length']; _0x312ae9++) this['records'][_0x312ae9]['type'] === _0x42d92a ? nRLERecords++ : nSimpleRecords++;
        var _0x467575 = 'Simple records: ' + nSimpleRecords;
        return _0x467575 += `
RLE records: ` + nRLERecords, _0x467575 += '\nTotal records: ' + this['records']['length'], this['truncate'] && (_0x467575 += '\nTruncate at: 0x' + this['truncate']['toString'](0x10)), _0x467575;
    }, _0x120ece['prototype']['export'] = function (_0x2b5a7b) {

        for (var _0x5f302f = 0x5, _0x13ddea = 0x0; _0x13ddea < this['records']['length']; _0x13ddea++) _0x5f302f += this['records'][_0x13ddea]['type'] === _0x42d92a ? 0x8 : 0x5 + this['records'][_0x13ddea]['data']['length'];
        _0x5f302f += 0x3, this['truncate'] && (_0x5f302f += 0x3), tempFile = new _0x47ef4e(_0x5f302f), tempFile['fileName'] = _0x2b5a7b + '.ips', tempFile['writeString'](_0x35d3f3);
        var _0x573f24;
        for (_0x13ddea = 0x0; _0x13ddea < this['records']['length']; _0x13ddea++) _0x573f24 = this['records'][_0x13ddea], tempFile['writeU24'](_0x573f24['offset']), _0x573f24['type'] === _0x42d92a ? (tempFile['writeU16'](0x0), tempFile['writeU16'](_0x573f24['length']), tempFile['writeU8'](_0x573f24['byte'])) : (tempFile['writeU16'](_0x573f24['data']['length']), tempFile['writeBytes'](_0x573f24['data']));
        return tempFile['writeString']('EOF'), _0x573f24['truncate'] && tempFile['writeU24'](_0x573f24['truncate']), tempFile;
    }, _0x120ece['prototype']['apply'] = function (_0x26e229) {
        var _0x38a440;
        if (this['truncate']) _0x38a440 = _0x26e229['slice'](0x0, this['truncate']);
        else {
            for (var _0x4722cd, _0x551087 = _0x26e229['fileSize'], _0x3d76f7 = 0x0; _0x3d76f7 < this['records']['length']; _0x3d76f7++)(_0x4722cd = this['records'][_0x3d76f7])['type'] === _0x42d92a ? _0x4722cd['offset'] + _0x4722cd['length'] > _0x551087 && (_0x551087 = _0x4722cd['offset'] + _0x4722cd['length']) : _0x4722cd['offset'] + _0x4722cd['data']['length'] > _0x551087 && (_0x551087 = _0x4722cd['offset'] + _0x4722cd['data']['length']);
            _0x551087 === _0x26e229['fileSize'] ? _0x38a440 = _0x26e229['slice'](0x0, _0x26e229['fileSize']) : (_0x38a440 = new _0x47ef4e(_0x551087), _0x26e229['copyToFile'](_0x38a440, 0x0));
        }
        _0x26e229['seek'](0x0);
        for (_0x3d76f7 = 0x0; _0x3d76f7 < this['records']['length']; _0x3d76f7++)
            if (_0x38a440['seek'](this['records'][_0x3d76f7]['offset']), this['records'][_0x3d76f7]['type'] === _0x42d92a) {
                for (var _0x26dd65 = 0x0; _0x26dd65 < this['records'][_0x3d76f7]['length']; _0x26dd65++) _0x38a440['writeU8'](this['records'][_0x3d76f7]['byte']);
            } else _0x38a440['writeBytes'](this['records'][_0x3d76f7]['data']);
        return _0x38a440;
    };
    var _0x2fb2a0 = (function () {
            for (var _0x24c3f9, _0x2bdae0 = [], _0x42f05c = 0x0; 0x100 > _0x42f05c; _0x42f05c++) {
                _0x24c3f9 = _0x42f05c;
                for (var _0x3a3ee8 = 0x0; 0x8 > _0x3a3ee8; _0x3a3ee8++) _0x24c3f9 = 0x1 & _0x24c3f9 ? 0xedb88320 ^ _0x24c3f9 >>> 0x1 : _0x24c3f9 >>> 0x1;
                _0x2bdae0[_0x42f05c] = _0x24c3f9;
            }
            return _0x2bdae0;
        }()),
        _0x3a4efc = 'BPS1',
        _0x7f0a18 = 0x1,
        _0x1df8b0 = 0x2,
        _0x5cb1c5 = 0x3;
    _0x161c5e['prototype']['toString'] = function () {
        var _0xd3e61d = 'Source size: ' + this['sourceSize'];
        return _0xd3e61d += `
Target size: ` + this['targetSize'], _0xd3e61d += '\nMetadata: ' + this['metaData'], _0xd3e61d += `
#Actions: ` + this['actions']['length'];
    }, _0x161c5e['prototype']['validateSource'] = function (_0x2972a5, _0x123575) {

        return this['sourceChecksum'] === _0x17ae12(_0x2972a5, _0x123575);
    }, _0x161c5e['prototype']['apply'] = function (_0x18e51e, _0x528d20) {

        if (_0x528d20 && !this['validateSource'](_0x18e51e)) throw new Error('error_crc_input');
        for (var _0x44c56d, _0x2d2e71 = new _0x47ef4e(this['targetSize']), _0x17f155 = 0x0, _0x2130ed = 0x0, _0xd123bd = 0x0; _0xd123bd < this['actions']['length']; _0xd123bd++)
            if (0x0 === (_0x44c56d = this['actions'][_0xd123bd])['type']) _0x18e51e['copyToFile'](_0x2d2e71, _0x2d2e71['offset'], _0x44c56d['length']), _0x2d2e71['skip'](_0x44c56d['length']);
            else {
                if (_0x44c56d['type'] === _0x7f0a18) _0x2d2e71['writeBytes'](_0x44c56d['bytes']);
                else {
                    if (_0x44c56d['type'] === _0x1df8b0) {
                        _0x17f155 += _0x44c56d['relativeOffset'];
                        for (var _0x416359 = _0x44c56d['length']; _0x416359--;) _0x2d2e71['writeU8'](_0x18e51e['_u8array'][_0x17f155]), _0x17f155++;
                    } else {
                        if (_0x44c56d['type'] === _0x5cb1c5) {
                            _0x2130ed += _0x44c56d['relativeOffset'];
                            for (_0x416359 = _0x44c56d['length']; _0x416359--;) _0x2d2e71['writeU8'](_0x2d2e71['_u8array'][_0x2130ed]), _0x2130ed++;
                        }
                    }
                }
            } if (_0x528d20 && this['targetChecksum'] !== _0x17ae12(_0x2d2e71)) throw new Error('error_crc_output');
        return _0x2d2e71;
    }, _0x161c5e['prototype']['export'] = function (_0x228865) {
        var _0x34bf47 = _0x3a4efc['length'];
        _0x34bf47 += _0x2e8573(this['sourceSize']), _0x34bf47 += _0x2e8573(this['targetSize']), _0x34bf47 += _0x2e8573(this['metaData']['length']), _0x34bf47 += this['metaData']['length'];
        for (var _0x4db8c3 = 0x0; _0x4db8c3 < this['actions']['length']; _0x4db8c3++) _0x34bf47 += _0x2e8573(((_0x37e4aa = this['actions'][_0x4db8c3])['length'] - 0x1 << 0x2) + _0x37e4aa['type']), _0x37e4aa['type'] === _0x7f0a18 ? _0x34bf47 += _0x37e4aa['length'] : (_0x37e4aa['type'] === _0x1df8b0 || _0x37e4aa['type'] === _0x5cb1c5) && (_0x34bf47 += _0x2e8573((_0x1d0cbb(_0x37e4aa['relativeOffset']) << 0x1) + (0x0 > _0x37e4aa['relativeOffset'] ? 0x1 : 0x0)));
        var _0x3a36a5 = new _0x47ef4e(_0x34bf47 += 0xc);
        _0x3a36a5['fileName'] = _0x228865 + '.bps', _0x3a36a5['littleEndian'] = !0x0, _0x3a36a5['writeVLV'] = _0x47c6e2, _0x3a36a5['writeString'](_0x3a4efc), _0x3a36a5['writeVLV'](this['sourceSize']), _0x3a36a5['writeVLV'](this['targetSize']), _0x3a36a5['writeVLV'](this['metaData']['length']), _0x3a36a5['writeString'](this['metaData'], this['metaData']['length']);
        var _0x37e4aa;
        for (_0x4db8c3 = 0x0; _0x4db8c3 < this['actions']['length']; _0x4db8c3++) _0x37e4aa = this['actions'][_0x4db8c3], _0x3a36a5['writeVLV']((_0x37e4aa['length'] - 0x1 << 0x2) + _0x37e4aa['type']), _0x37e4aa['type'] === _0x7f0a18 ? _0x3a36a5['writeBytes'](_0x37e4aa['bytes']) : (_0x37e4aa['type'] === _0x1df8b0 || _0x37e4aa['type'] === _0x5cb1c5) && _0x3a36a5['writeVLV']((_0x1d0cbb(_0x37e4aa['relativeOffset']) << 0x1) + (0x0 > _0x37e4aa['relativeOffset'] ? 0x1 : 0x0));
        return _0x3a36a5['writeU32'](this['sourceChecksum']), _0x3a36a5['writeU32'](this['targetChecksum']), _0x3a36a5['writeU32'](this['patchChecksum']), _0x3a36a5;
    };
    var _0x5e8f08 = void 0x0,
        _0x9195a = 'UPS1';
    _0x11e872['prototype']['addRecord'] = function (_0x3c77c2, _0x2a2c99) {

        this['records']['push']({
            'offset': _0x3c77c2,
            'XORdata': _0x2a2c99
        });
    }, _0x11e872['prototype']['toString'] = function () {
        var _0x40b994 = 'Records: ' + _0x5e8f08['records']['length'];
        return _0x40b994 += `
Input file size: ` + _0x5e8f08['sizeInput'], _0x40b994 += `
Output file size: ` + _0x5e8f08['sizeOutput'], _0x40b994 += `
Input file checksum` + ': ' + padZeroes(_0x5e8f08['checksumInput'], 0x4), _0x40b994 += `
Output file checksu` + 'm: ' + padZeroes(_0x5e8f08['checksumOutput'], 0x4);
    }, _0x11e872['prototype']['export'] = function (_0x192a6e) {
        var _0x5716a5 = _0x9195a['length'];
        _0x5716a5 += _0x5156ca(this['sizeInput']), _0x5716a5 += _0x5156ca(this['sizeOutput']);
        for (var _0x6b0513 = 0x0; _0x6b0513 < this['records']['length']; _0x6b0513++) _0x5716a5 += _0x5156ca(this['records'][_0x6b0513]['offset']), _0x5716a5 += this['records'][_0x6b0513]['XORdata']['length'] + 0x1;
        _0x5716a5 += 0xc, tempFile = new _0x47ef4e(_0x5716a5), tempFile['writeVLV'] = _0x554e3f, tempFile['fileName'] = _0x192a6e + '.ups', tempFile['writeString'](_0x9195a), tempFile['writeVLV'](this['sizeInput']), tempFile['writeVLV'](this['sizeOutput']);
        for (_0x6b0513 = 0x0; _0x6b0513 < this['records']['length']; _0x6b0513++) tempFile['writeVLV'](this['records'][_0x6b0513]['offset']), tempFile['writeBytes'](this['records'][_0x6b0513]['XORdata']), tempFile['writeU8'](0x0);
        return tempFile['littleEndian'] = !0x0, tempFile['writeU32'](this['checksumInput']), tempFile['writeU32'](this['checksumOutput']), tempFile['writeU32'](_0x17ae12(tempFile, 0x0, !0x0)), tempFile;
    }, _0x11e872['prototype']['validateSource'] = function (_0x1be14f, _0x1dad09) {

        return _0x17ae12(_0x1be14f, _0x1dad09) === this['checksumInput'];
    }, _0x11e872['prototype']['apply'] = function (_0x117459, _0x5317d0) {

        !_0x5317d0 || this['validateSource'](_0x117459), tempFile = new _0x47ef4e(this['sizeOutput']), _0x117459['copyToFile'](tempFile, 0x0, this['sizeInput']), _0x117459['seek'](0x0);
        for (var _0x227ef2, _0x3af29d = 0x0; _0x3af29d < this['records']['length']; _0x3af29d++) {
            _0x227ef2 = this['records'][_0x3af29d], tempFile['skip'](_0x227ef2['offset']), _0x117459['skip'](_0x227ef2['offset']);
            for (var _0x18d705 = 0x0; _0x18d705 < _0x227ef2['XORdata']['length']; _0x18d705++) tempFile['writeU8']((_0x117459['isEOF']() ? 0x0 : _0x117459['readU8']()) ^ _0x227ef2['XORdata'][_0x18d705]);
            tempFile['skip'](0x1), _0x117459['skip'](0x1);
        }
        return _0x5317d0 && (_0x17ae12(tempFile), this['checksumOutput']), tempFile;
    };
    var _0xf84537,
        _0xb3d5b3 = {
            'romdb': null,
            'supportBatterySave': !0x1,
            'hash': '2b35cacf70ae',
            'hash2': 'f5cbb3f38c0bb20e4',
            'hash3': '88cc8ad0c350400499a0',
            'adCloseId': null,
            'startGameId': null,
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
            'shaders': {},
            'firstErr': null,
            'cheatString': '',
            'cheatPath': '',
            'cheatFileName': '',
            'isMobileDevice': !!/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i ['test'](navigator['userAgent'] || ''),
        },
        _0x2c0f6e = _0xb3d5b3,
        _0x306c5c = (function () {
            var _0x17d616 = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'],
                _0x4d96e0 = (function () {


                    function _0x3a5ca4(_0x42042c) {
                        var _0x257acd = _0x42042c['targetModal'],
                            _0x52a535 = _0x42042c['triggers'],
                            _0x4a0de0 = void 0x0 === _0x52a535 ? [] : _0x52a535,
                            _0x3fbb52 = _0x42042c['onShow'],
                            _0x56aaf8 = void 0x0 === _0x3fbb52 ? function () {} : _0x3fbb52,
                            _0x484e25 = _0x42042c['onClose'],
                            _0x4682ee = void 0x0 === _0x484e25 ? function () {} : _0x484e25,
                            _0x36b671 = _0x42042c['openTrigger'],
                            _0x3e26e2 = void 0x0 === _0x36b671 ? 'data-micromodal-trigger' : _0x36b671,
                            _0x2dfbd0 = _0x42042c['closeTrigger'],
                            _0x125e9a = void 0x0 === _0x2dfbd0 ? 'data-micromodal-close' : _0x2dfbd0,
                            _0x14f0ee = _0x42042c['disableScroll'],
                            _0x23d640 = _0x42042c['disableFocus'],
                            _0x346075 = _0x42042c['awaitCloseAnimation'],
                            _0x25a472 = _0x42042c['debugMode'],
                            _0x570eed = _0x42042c['closeByEsckey'];
                        (function (_0x51a79c, _0x2edf8b) {

                            if (!(_0x51a79c instanceof _0x2edf8b)) throw new TypeError('Cannot call a class as a function');
                        }(this, _0x3a5ca4), this['modal'] = document['getElementById'](_0x257acd), this['config'] = {
                            'debugMode': void 0x0 !== _0x25a472 && _0x25a472,
                            'disableScroll': void 0x0 !== _0x14f0ee && _0x14f0ee,
                            'openTrigger': _0x3e26e2,
                            'closeTrigger': _0x125e9a,
                            'onShow': _0x56aaf8,
                            'onClose': _0x4682ee,
                            'awaitCloseAnimation': void 0x0 !== _0x346075 && _0x346075,
                            'disableFocus': void 0x0 !== _0x23d640 && _0x23d640,
                            'closeByEsckey': void 0x0 === _0x570eed || _0x570eed
                        }, 0x0 < _0x4a0de0['length'] && this['registerTriggers']['apply'](this, _0x14195e(_0x4a0de0)), this['onClick'] = this['onClick']['bind'](this), this['onKeydown'] = this['onKeydown']['bind'](this));
                    }
                    return function (_0x246ef4, _0x4f44f1, _0x466a81) {

                        _0x4f44f1 && _0x4a68ec(_0x246ef4['prototype'], _0x4f44f1), _0x466a81 && _0x4a68ec(_0x246ef4, _0x466a81);
                    }(_0x3a5ca4, [{
                        'key': 'registerTriggers',
                        'value': function () {

                            for (var _0x4d97eb = this, _0x1ba899 = arguments['length'], _0x462e88 = Array(_0x1ba899), _0x3f164a = 0x0; _0x3f164a < _0x1ba899; _0x3f164a++) _0x462e88[_0x3f164a] = arguments[_0x3f164a];
                            _0x462e88['forEach'](function (_0x40b974) {
                                _0x40b974['addEventListener']('click', function () {

                                    return _0x4d97eb['showModal']();
                                });
                            });
                        }
                    }, {
                        'key': 'showModal',
                        'value': function () {

                            this['activeElement'] = document['activeElement'], this['modal']['setAttribute']('aria-hidden', 'false'), this['modal']['classList']['add'](_0xa96c03({
                                'is-open': !0x0
                            })), this['setFocusToFirstNode'](), this['addEventListeners'](), this['config']['onShow'](this['modal']);
                        }
                    }, {
                        'key': 'closeModal',
                        'value': function () {
                            var _0x5b48ca = this['modal'];
                            this['modal']['setAttribute']('aria-hidden', 'true'), this['removeEventListeners'](), this['config']['onClose'](this['modal']), this['config']['awaitCloseAnimation'] ? this['modal']['addEventListener']('animationend', function _0x22652e() {

                                _0x5b48ca['classList']['remove'](_0xa96c03({
                                    'is-open': !0x0
                                })), _0x5b48ca['removeEventListener']('animationend', _0x22652e, !0x1);
                            }, !0x1) : _0x5b48ca['classList']['remove'](_0xa96c03({
                                'is-open': !0x0
                            }));
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
                        'value': function (_0xea3bdc) {

                            _0xea3bdc['target']['hasAttribute'](this['config']['closeTrigger']) && (this['closeModal'](), _0xea3bdc['preventDefault']());
                        }
                    }, {
                        'key': 'onKeydown',
                        'value': function (_0x417dcc) {

                            this['config']['closeByEsckey'] && 0x1b === _0x417dcc['keyCode'] && this['closeModal'](_0x417dcc), 0x9 === _0x417dcc['keyCode'] && this['maintainFocus'](_0x417dcc);
                        }
                    }, {
                        'key': 'getFocusableNodes',
                        'value': function () {
                            var _0x2894eb = this['modal']['querySelectorAll'](_0x17d616);
                            return Object['keys'](_0x2894eb)['map'](function (_0x17cdf0) {
                                return _0x2894eb[_0x17cdf0];
                            });
                        }
                    }, {
                        'key': 'setFocusToFirstNode',
                        'value': function () {

                            if (!this['config']['disableFocus']) {
                                var _0x4655d4 = this['getFocusableNodes']();
                                _0x4655d4['length'] && _0x4655d4[0x0]['focus']();
                            }
                        }
                    }, {
                        'key': 'maintainFocus',
                        'value': function (_0x391689) {
                            var _0x1f6ab8 = this['getFocusableNodes']();
                            if (this['modal']['contains'](document['activeElement'])) {
                                var _0x3947f9 = _0x1f6ab8['indexOf'](document['activeElement']);
                                _0x391689['shiftKey'] && 0x0 === _0x3947f9 && (_0x1f6ab8[_0x1f6ab8['length'] - 0x1]['focus'](), _0x391689['preventDefault']()), _0x391689['shiftKey'] || _0x3947f9 !== _0x1f6ab8['length'] - 0x1 || (_0x1f6ab8[0x0]['focus'](), _0x391689['preventDefault']());
                            } else _0x1f6ab8[0x0]['focus']();
                        }
                    }]), _0x3a5ca4;
                }()),
                _0x28f243 = null,
                _0x5f0fd4 = function (_0x41ece7) {

                    if (!document['getElementById'](_0x41ece7)) return !0x1;
                },
                _0x5d98f6 = function (_0x5568db, _0xffde07) {

                    if (function (_0x5ef089) {

                            if (0x0 >= _0x5ef089['length']) console['warn']('MicroModal v' ['concat'](version, ': ❗Please specify at least one %c\'micromodal-trigger\''), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.'), console['warn']('%cExample:', 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', '<a href="#" data-micromodal-trigger="my-modal"></a>');
                        }(_0x5568db), !_0xffde07) return !0x0;
                    for (var _0x34dfb4 in _0xffde07) _0x5f0fd4(_0x34dfb4);
                    return !0x0;
                };
            return {
                'init': function (_0x22eb70) {
                    var _0x68b1be = Object['assign']({}, {
                            'openTrigger': 'data-micromodal-trigger'
                        }, _0x22eb70),
                        _0x2912b7 = _0x14195e(document['querySelectorAll']('[' ['concat'](_0x68b1be['openTrigger'], ']'))),
                        _0x17e34c = function (_0x532956, _0x109b01) {
                            var _0x349980 = [];
                            return _0x532956['forEach'](function (_0x46a839) {
                                var _0x5d09ae = _0x46a839['attributes'][_0x109b01]['value'];
                                void 0x0 === _0x349980[_0x5d09ae] && (_0x349980[_0x5d09ae] = []), _0x349980[_0x5d09ae]['push'](_0x46a839);
                            }), _0x349980;
                        }(_0x2912b7, _0x68b1be['openTrigger']);
                    if (!0x0 !== _0x68b1be['debugMode'] || !0x1 !== _0x5d98f6(_0x2912b7, _0x17e34c))
                        for (var _0x5c0903 in _0x17e34c) {
                            var _0x18a6db = _0x17e34c[_0x5c0903];
                            _0x68b1be['targetModal'] = _0x5c0903, _0x68b1be['triggers'] = _0x14195e(_0x18a6db), new _0x4d96e0(_0x68b1be);
                        }
                },
                'show': function (_0x3a873f, _0x55afe5) {
                    var _0x4f34f9 = _0x55afe5 || {};
                    return _0x4f34f9['targetModal'] = _0x3a873f, !0x0 === _0x4f34f9['debugMode'] && !0x1 === _0x5f0fd4(_0x3a873f) ? _0x28f243 = null : (_0x28f243 = new _0x4d96e0(_0x4f34f9))['showModal'](), _0x28f243;
                },
                'close': function () {

                    _0x28f243['closeModal']();
                }
            };
        }()),
        _0x15423a = (function () {
            var _0x192a89 = _0xa96c03({
                    'ejs-toast': !0x0
                }),
                _0x5d4d05 = _0xa96c03({
                    'ejs-toast-item': !0x0
                }),
                _0x539089 = (function () {


                    function _0x34535c(_0x4887ea) {
                        var _0x8a0ba3 = _0x4887ea['container'],
                            _0x5637c0 = _0x4887ea['message'],
                            _0x16765f = _0x4887ea['duraction'];
                        (function (_0x95f4f6, _0x36e3da) {

                            if (!(_0x95f4f6 instanceof _0x36e3da)) throw new TypeError('Cannot call a class as a function');
                        }(this, _0x34535c), this['container'] = _0x8a0ba3, this['message'] = _0x5637c0, this['duraction'] = _0x16765f || 0xfa0, this['onClick'] = this['onClick']['bind'](this), this['timeout'] = null);
                    }
                    return function (_0x515ba6, _0xda9583, _0x40e40b) {

                        _0xda9583 && _0x1847b8(_0x515ba6['prototype'], _0xda9583), _0x40e40b && _0x1847b8(_0x515ba6, _0x40e40b);
                    }(_0x34535c, [{
                        'key': 'showToast',
                        'value': function () {
                            var _0x36e466, _0x5101ff = this,
                                _0x1375a2 = this['container']['querySelector']('.' ['concat'](_0x192a89));
                            if (_0x1375a2 || (_0x1375a2 = _0x110b30('div', {
                                    'class': _0x192a89
                                }), this['container']['appendChild'](_0x1375a2)), (_0x36e466 = _0x1375a2['querySelectorAll']('.' ['concat'](_0x5d4d05)))['length'] > 0x5) {
                                var _0x55ed10 = _0x36e466[0x0];
                                _0x1375a2['removeChild'](_0x55ed10);
                            }
                            this['modal'] = _0x110b30('div', {
                                'class': _0x5d4d05
                            }, this['message']), this['modal']['setAttribute']('aria-hidden', 'false'), this['modal']['classList']['add'](_0xa96c03({
                                'is-open': !0x0
                            })), this['addEventListeners'](), _0x1375a2['appendChild'](this['modal']), this['timeout'] = setTimeout(function () {

                                _0x5101ff['closeToast']();
                            }, this['duraction']);
                        }
                    }, {
                        'key': 'closeToast',
                        'value': function () {
                            var _0x173b2b = this['modal'],
                                _0x3f9b35 = this['container']['querySelector']('.' ['concat'](_0x192a89));
                            this['modal']['setAttribute']('aria-hidden', 'true');
                            try {
                                _0x3f9b35['removeChild'](_0x173b2b);
                            } catch (_0x48da7b) {}
                            this['removeEventListeners'](), this['timeout'] && (clearTimeout(this['timeout']), this['timeout'] = null);
                        }
                    }, {
                        'key': 'addEventListeners',
                        'value': function () {

                            this['modal']['addEventListener']('touchstart', this['onClick']), this['modal']['addEventListener']('click', this['onClick']);
                        }
                    }, {
                        'key': 'removeEventListeners',
                        'value': function () {

                            this['modal']['removeEventListener']('touchstart', this['onClick']), this['modal']['removeEventListener']('click', this['onClick']);
                        }
                    }, {
                        'key': 'onClick',
                        'value': function (_0x53ccc4) {

                            this['closeToast'](), _0x53ccc4['preventDefault']();
                        }
                    }]), _0x34535c;
                }()),
                _0x2e9cfd = null;
            return {
                'show': function (_0x495b88, _0x5ea3b3, _0x20b22f) {
                    var _0x5d4a46 = {};
                    return _0x5d4a46['container'] = _0x495b88, _0x5d4a46['message'] = _0x5ea3b3, _0x5d4a46['duraction'] = _0x20b22f, (_0x2e9cfd = new _0x539089(_0x5d4a46))['showToast'](), _0x2e9cfd;
                },
                'close': function () {

                    _0x2e9cfd['closeModal']();
                }
            };
        }()),
        _0x1f9872 = {},
        _0x42a2 = {
            'defaultControllers': {
                0x0: {
                    0x0: {
                        'value': '88',
                        'value2': '1'
                    },
                    0x1: {
                        'value': '83',
                        'value2': '3'
                    },
                    0x2: {
                        'value': '16',
                        'value2': '8'
                    },
                    0x3: {
                        'value': '13',
                        'value2': '9'
                    },
                    0x4: {
                        'value': '38',
                        'value2': '12'
                    },
                    0x5: {
                        'value': '40',
                        'value2': '13'
                    },
                    0x6: {
                        'value': '37',
                        'value2': '14'
                    },
                    0x7: {
                        'value': '39',
                        'value2': '15'
                    },
                    0x8: {
                        'value': '90',
                        'value2': '0'
                    },
                    0x9: {
                        'value': '65',
                        'value2': '2'
                    },
                    0xa: {
                        'value': '81',
                        'value2': '4'
                    },
                    0xb: {
                        'value': '69',
                        'value2': '5'
                    },
                    0xc: {
                        'value': '82',
                        'value2': '6'
                    },
                    0xd: {
                        'value': '84',
                        'value2': '7'
                    },
                    0xe: {},
                    0xf: {},
                    0x10: {
                        'value': '72'
                    },
                    0x11: {
                        'value': '70'
                    },
                    0x12: {
                        'value': '71'
                    },
                    0x13: {
                        'value': '84'
                    },
                    0x14: {},
                    0x15: {},
                    0x16: {},
                    0x17: {}
                },
                0x1: {
                    0x0: {
                        'value': '',
                        'value2': '1'
                    },
                    0x1: {
                        'value': '',
                        'value2': '3'
                    },
                    0x2: {
                        'value': '',
                        'value2': '8'
                    },
                    0x3: {
                        'value': '',
                        'value2': '9'
                    },
                    0x4: {
                        'value': '',
                        'value2': '12'
                    },
                    0x5: {
                        'value': '',
                        'value2': '13'
                    },
                    0x6: {
                        'value': '',
                        'value2': '14'
                    },
                    0x7: {
                        'value': '',
                        'value2': '15'
                    },
                    0x8: {
                        'value': '',
                        'value2': '0'
                    },
                    0x9: {
                        'value': '',
                        'value2': '2'
                    },
                    0xa: {
                        'value': '',
                        'value2': '4'
                    },
                    0xb: {
                        'value': '',
                        'value2': '5'
                    },
                    0xc: {
                        'value': '',
                        'value2': '6'
                    },
                    0xd: {
                        'value': '',
                        'value2': '7'
                    },
                    0xe: {},
                    0xf: {},
                    0x10: {
                        'value': ''
                    },
                    0x11: {
                        'value': ''
                    },
                    0x12: {
                        'value': ''
                    },
                    0x13: {
                        'value': ''
                    },
                    0x14: {},
                    0x15: {},
                    0x16: {},
                    0x17: {}
                },
                0x2: {
                    0x0: {
                        'value': '',
                        'value2': '1'
                    },
                    0x1: {
                        'value': '',
                        'value2': '3'
                    },
                    0x2: {
                        'value': '',
                        'value2': '8'
                    },
                    0x3: {
                        'value': '',
                        'value2': '9'
                    },
                    0x4: {
                        'value': '',
                        'value2': '12'
                    },
                    0x5: {
                        'value': '',
                        'value2': '13'
                    },
                    0x6: {
                        'value': '',
                        'value2': '14'
                    },
                    0x7: {
                        'value': '',
                        'value2': '15'
                    },
                    0x8: {
                        'value': '',
                        'value2': '0'
                    },
                    0x9: {
                        'value': '',
                        'value2': '2'
                    },
                    0xa: {
                        'value': '',
                        'value2': '4'
                    },
                    0xb: {
                        'value': '',
                        'value2': '5'
                    },
                    0xc: {
                        'value': '',
                        'value2': '6'
                    },
                    0xd: {
                        'value': '',
                        'value2': '7'
                    },
                    0xe: {},
                    0xf: {},
                    0x10: {
                        'value': ''
                    },
                    0x11: {
                        'value': ''
                    },
                    0x12: {
                        'value': ''
                    },
                    0x13: {
                        'value': ''
                    },
                    0x14: {},
                    0x15: {},
                    0x16: {},
                    0x17: {}
                },
                0x3: {
                    0x0: {
                        'value': '',
                        'value2': '1'
                    },
                    0x1: {
                        'value': '',
                        'value2': '3'
                    },
                    0x2: {
                        'value': '',
                        'value2': '8'
                    },
                    0x3: {
                        'value': '',
                        'value2': '9'
                    },
                    0x4: {
                        'value': '',
                        'value2': '12'
                    },
                    0x5: {
                        'value': '',
                        'value2': '13'
                    },
                    0x6: {
                        'value': '',
                        'value2': '14'
                    },
                    0x7: {
                        'value': '',
                        'value2': '15'
                    },
                    0x8: {
                        'value': '',
                        'value2': '0'
                    },
                    0x9: {
                        'value': '',
                        'value2': '2'
                    },
                    0xa: {
                        'value': '',
                        'value2': '4'
                    },
                    0xb: {
                        'value': '',
                        'value2': '5'
                    },
                    0xc: {
                        'value': '',
                        'value2': '6'
                    },
                    0xd: {
                        'value': '',
                        'value2': '7'
                    },
                    0xe: {},
                    0xf: {},
                    0x10: {
                        'value': ''
                    },
                    0x11: {
                        'value': ''
                    },
                    0x12: {
                        'value': ''
                    },
                    0x13: {
                        'value': ''
                    },
                    0x14: {},
                    0x15: {},
                    0x16: {},
                    0x17: {}
                }
            },
            'controllers': {},
            'remappingAxis': {},
            'virtualGamepadContainer': null,
            'keyMap': {
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
            'mamekeymap': {
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
            'mamekeytype': (_0xf84537 = {
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
                0x3d: 'JOYSTICKLEFT_LEFT'
            }, _0x9fc116(_0xf84537, '61', 'JOYSTICKLEFT_RIGHT'), _0x9fc116(_0xf84537, 0x40, 'BUTTON1'), _0x9fc116(_0xf84537, 0x41, 'BUTTON2'), _0x9fc116(_0xf84537, 0x42, 'BUTTON3'), _0x9fc116(_0xf84537, 0x43, 'BUTTON4'), _0x9fc116(_0xf84537, 0x44, 'BUTTON5'), _0x9fc116(_0xf84537, 0x45, 'BUTTON6'), _0x9fc116(_0xf84537, 0x46, 'BUTTON7'), _0x9fc116(_0xf84537, 0x47, 'BUTTON8'), _0x9fc116(_0xf84537, 0x48, 'BUTTON9'), _0x9fc116(_0xf84537, 0x49, 'BUTTON10'), _0x9fc116(_0xf84537, 0x4a, 'BUTTON11'), _0x9fc116(_0xf84537, 0x4b, 'BUTTON12'), _0x9fc116(_0xf84537, 0x4c, 'BUTTON13'), _0x9fc116(_0xf84537, 0x4d, 'BUTTON14'), _0x9fc116(_0xf84537, 0x4e, 'BUTTON15'), _0x9fc116(_0xf84537, 0x4f, 'BUTTON16'), _0x9fc116(_0xf84537, 0x51, 'MAHJONG_A'), _0x9fc116(_0xf84537, 0x52, 'MAHJONG_B'), _0x9fc116(_0xf84537, 0x53, 'MAHJONG_C'), _0x9fc116(_0xf84537, 0x54, 'MAHJONG_D'), _0x9fc116(_0xf84537, 0x55, 'MAHJONG_E'), _0x9fc116(_0xf84537, 0x56, 'MAHJONG_F'), _0x9fc116(_0xf84537, 0x57, 'MAHJONG_G'), _0x9fc116(_0xf84537, 0x58, 'MAHJONG_H'), _0x9fc116(_0xf84537, 0x59, 'MAHJONG_I'), _0x9fc116(_0xf84537, 0x5a, 'MAHJONG_J'), _0x9fc116(_0xf84537, 0x5b, 'MAHJONG_K'), _0x9fc116(_0xf84537, 0x5c, 'MAHJONG_L'), _0x9fc116(_0xf84537, 0x5d, 'MAHJONG_M'), _0x9fc116(_0xf84537, 0x5e, 'MAHJONG_N'), _0x9fc116(_0xf84537, 0x5f, 'MAHJONG_O'), _0x9fc116(_0xf84537, 0x60, 'MAHJONG_P'), _0x9fc116(_0xf84537, 0x61, 'MAHJONG_Q'), _0x9fc116(_0xf84537, 0x62, 'MAHJONG_KAN'), _0x9fc116(_0xf84537, 0x63, 'MAHJONG_PON'), _0x9fc116(_0xf84537, 0x64, 'MAHJONG_CHI'), _0x9fc116(_0xf84537, 0x65, 'MAHJONG_REACH'), _0x9fc116(_0xf84537, 0x66, 'MAHJONG_RON'), _0x9fc116(_0xf84537, 0x67, 'MAHJONG_FLIP_FLOP'), _0x9fc116(_0xf84537, 0x68, 'MAHJONG_BET'), _0x9fc116(_0xf84537, 0x69, 'MAHJONG_SCORE'), _0x9fc116(_0xf84537, 0x6a, 'MAHJONG_DOUBLE_UP'), _0x9fc116(_0xf84537, 0x6b, 'MAHJONG_BIG'), _0x9fc116(_0xf84537, 0x6c, 'MAHJONG_SMALL'), _0x9fc116(_0xf84537, 0x6d, 'MAHJONG_LAST_CHANCE'), _0x9fc116(_0xf84537, 0x70, 'HANAFUDA_A'), _0x9fc116(_0xf84537, 0x71, 'HANAFUDA_B'), _0x9fc116(_0xf84537, 0x72, 'HANAFUDA_C'), _0x9fc116(_0xf84537, 0x73, 'HANAFUDA_D'), _0x9fc116(_0xf84537, 0x74, 'HANAFUDA_E'), _0x9fc116(_0xf84537, 0x75, 'HANAFUDA_F'), _0x9fc116(_0xf84537, 0x76, 'HANAFUDA_G'), _0x9fc116(_0xf84537, 0x77, 'HANAFUDA_H'), _0x9fc116(_0xf84537, 0x78, 'HANAFUDA_YES'), _0x9fc116(_0xf84537, 0x79, 'HANAFUDA_NO'), _0x9fc116(_0xf84537, 0x7c, 'GAMBLE_KEYIN'), _0x9fc116(_0xf84537, 0x7d, 'GAMBLE_KEYOUT'), _0x9fc116(_0xf84537, 0x7e, 'GAMBLE_SERVICE'), _0x9fc116(_0xf84537, 0x7f, 'GAMBLE_BOOK'), _0x9fc116(_0xf84537, 0x80, 'GAMBLE_DOOR'), _0x9fc116(_0xf84537, 0x81, 'GAMBLE_PAYOUT'), _0x9fc116(_0xf84537, 0x82, 'GAMBLE_BET'), _0x9fc116(_0xf84537, 0x83, 'GAMBLE_DEAL'), _0x9fc116(_0xf84537, 0x84, 'GAMBLE_STAND'), _0x9fc116(_0xf84537, 0x85, 'GAMBLE_TAKE'), _0x9fc116(_0xf84537, 0x86, 'GAMBLE_D_UP'), _0x9fc116(_0xf84537, 0x87, 'GAMBLE_HALF'), _0x9fc116(_0xf84537, 0x88, 'GAMBLE_HIGH'), _0x9fc116(_0xf84537, 0x89, 'GAMBLE_LOW'), _0x9fc116(_0xf84537, 0x8a, 'POKER_HOLD1'), _0x9fc116(_0xf84537, 0x8b, 'POKER_HOLD2'), _0x9fc116(_0xf84537, 0x8c, 'POKER_HOLD3'), _0x9fc116(_0xf84537, 0x8d, 'POKER_HOLD4'), _0x9fc116(_0xf84537, 0x8e, 'POKER_HOLD5'), _0x9fc116(_0xf84537, 0x8f, 'POKER_CANCEL'), _0x9fc116(_0xf84537, 0x90, 'SLOT_STOP1'), _0x9fc116(_0xf84537, 0x91, 'SLOT_STOP2'), _0x9fc116(_0xf84537, 0x92, 'SLOT_STOP3'), _0x9fc116(_0xf84537, 0x93, 'SLOT_STOP4'), _0x9fc116(_0xf84537, 0x94, 'SLOT_STOP_ALL'), _0x9fc116(_0xf84537, 0x98, 'AD_STICK_X'), _0x9fc116(_0xf84537, 0x99, 'AD_STICK_Y'), _0x9fc116(_0xf84537, 0x9a, 'AD_STICK_Z'), _0x9fc116(_0xf84537, 0x9b, 'PADDLE'), _0x9fc116(_0xf84537, 0x9c, 'PADDLE_V'), _0x9fc116(_0xf84537, 0x9d, 'PEDAL'), _0x9fc116(_0xf84537, 0x9e, 'PEDAL2'), _0x9fc116(_0xf84537, 0x9f, 'PEDAL3'), _0x9fc116(_0xf84537, 0xa0, 'LIGHTGUN_X'), _0x9fc116(_0xf84537, 0xa1, 'LIGHTGUN_Y'), _0x9fc116(_0xf84537, 0xa2, 'POSITIONAL'), _0x9fc116(_0xf84537, 0xa3, 'POSITIONAL_V'), _0x9fc116(_0xf84537, 0xa5, 'DIAL'), _0x9fc116(_0xf84537, 0xa6, 'DIAL_V'), _0x9fc116(_0xf84537, 0xa7, 'TRACKBALL_X'), _0x9fc116(_0xf84537, 0xa8, 'TRACKBALL_Y'), _0x9fc116(_0xf84537, 0xa9, 'MOUSE_X'), _0x9fc116(_0xf84537, 0xaa, 'MOUSE_Y'), _0xf84537),
            'gamepad': null,
            'allowCheat': !0x1,
            'resetArcadeCheats': function (_0xc12711) {

                Object['keys'](_0x1f9872)['forEach'](function (_0x4bd473) {

                    _0x1f9872[_0x4bd473] && (_0x1f9872[_0x4bd473]['value'] = _0x1f9872[_0x4bd473]['default'], _0x42a2['setVariable'](_0x4bd473, _0x1f9872[_0x4bd473]['value']));
                }), _0x1edc67['call'](_0xc12711, _0xc12711['elements']['container'], 'reset-arcade-cheats');
            },
            'connection': null,
            'connected': !0x1,
            'playerName': '',
            'players': [],
            'roomMaster': null,
            'coreOptionData': {},
            'currentFrame': 0x0,
            'wait': !0x1,
            'progressHelper': {},
            'icons': {
                'lock': '<svg role="presentation" focusable="false"><use xlink:href="#ejs-lock"></use></svg>',
                'chat': '<svg role="presentation" focusable="false"><use xlink:href="#ejs-chat"></use></svg>'
            },
            'loadRoomsListTimer': null,
            'loadRoomsList': function () {},
            'stopLoadRooms': function () {

                _0x42a2['loadRoomsListTimer'] && clearTimeout(_0x42a2['loadRoomsListTimer']);
            },
            'openRoom': function () {},
            'isPaused': null,
            'setVolume': null,
            'setVariable': null,
            'simulateInput': null,
            'simulateInputFn': null,
            'toggleShader': null,
            'saveState': null,
            'loadState': null,
            'quickSaveState': null,
            'quickLoadState': null,
            'getScreenData': null,
            'getStateInfo': null,
            'setCheat': null,
            'resetCheat': null,
            'getDiskNum': null,
            'setDisk': null,
            'ejectDisk': null,
            'getGameCoreOptions': null,
            'stateSupported': !0x1,
            'saveSavFiles': null,
            'contentCrc32': null,
            'setPlayerDevice': null,
            'netPlayHost': null,
            'netPlayClient': null,
            'netPlayClose': null,
            'netplayNewUser': null,
            'netplayPushData': null,
            'netPlayString': null,
            'netPlayIsHost': !0x1,
            'netPlayUsers': ['', ''],
            'netPlayPassword': null,
            'romcrc32': '',
            '_netPlayConnected': !0x1,
            'netPlayDialogOpened': !0x1,
            'netPlayConnectChange': function () {},
            'classNames': {
                'dialog-container': _0xa96c03({
                    'dialog-container': !0x0
                }),
                'tabs': _0xa96c03({
                    'tabs': !0x0
                }),
                'dialog-title': _0xa96c03({
                    'dialog-title': !0x0
                }),
                'dialog-content': _0xa96c03({
                    'dialog-content': !0x0
                }),
                'dialog-buttons': _0xa96c03({
                    'dialog-buttons': !0x0
                }),
                'gamepad': _0xa96c03({
                    'gamepad': !0x0
                }),
                'gamepad-name': _0xa96c03({
                    'gamepad-name': !0x0
                }),
                'gamepad-remapping-axis': _0xa96c03({
                    'gamepad-remapping-axis': !0x0
                }),
                'overlay': _0xa96c03({
                    'overlay': !0x0
                }),
                'key-setting-popup': _0xa96c03({
                    'key-setting-popup': !0x0
                }),
                'tabs-panel': _0xa96c03({
                    'tabs-panel': !0x0
                }),
                'tabs-content': _0xa96c03({
                    'tabs-content': !0x0
                }),
                'button-container': _0xa96c03({
                    'button-container': !0x0
                }),
                'set': _0xa96c03({
                    'set': !0x0
                }),
                'active': _0xa96c03({
                    'active': !0x0
                }),
                'btn-cancel': _0xa96c03({
                    'btn-cancel': !0x0
                }),
                'btn-create': _0xa96c03({
                    'btn-create': !0x0
                }),
                'btn-submit': _0xa96c03({
                    'btn-submit': !0x0
                }),
                'btn-join-room': _0xa96c03({
                    'btn-join-room': !0x0
                }),
                'btn-quit': _0xa96c03({
                    'btn-quit': !0x0
                }),
                'btn-create-room': _0xa96c03({
                    'btn-create-room': !0x0
                }),
                'netplay-player-name': _0xa96c03({
                    'netplay-player-name': !0x0
                }),
                'netplay-roomlist': _0xa96c03({
                    'netplay-roomlist': !0x0
                }),
                'netplay-room-name-input': _0xa96c03({
                    'netplay-room-name-input': !0x0
                }),
                'netplay-room-password-input': _0xa96c03({
                    'netplay-room-password-input': !0x0
                }),
                'netplay-create-room-set': _0xa96c03({
                    'netplay-create-room-set': !0x0
                }),
                'netplay-room': _0xa96c03({
                    'netplay-room': !0x0
                }),
                'modal': _0xa96c03({
                    'modal': !0x0
                }),
                'modal__overlay': _0xa96c03({
                    'modal__overlay': !0x0
                }),
                'modal__container': _0xa96c03({
                    'modal__container': !0x0
                }),
                'modal__header': _0xa96c03({
                    'modal__header': !0x0
                }),
                'modal__title': _0xa96c03({
                    'modal__title': !0x0
                }),
                'modal__close': _0xa96c03({
                    'modal__close': !0x0
                }),
                'modal__content': _0xa96c03({
                    'modal__content': !0x0
                }),
                'modal__btn': _0xa96c03({
                    'modal__btn': !0x0
                }),
                'modal__btn-primary': _0xa96c03({
                    'modal__btn-primary': !0x0
                }),
                'micromodal-slide': _0xa96c03({
                    'micromodal-slide': !0x0
                }),
                'modal__errmsg': _0xa96c03({
                    'modal__errmsg': !0x0
                }),
                'modal__footer': _0xa96c03({
                    'modal__footer': !0x0
                }),
                'cheats-add': _0xa96c03({
                    'cheats-add': !0x0
                }),
                'cheats-list': _0xa96c03({
                    'cheats-list': !0x0
                }),
                'cheat-code-input': _0xa96c03({
                    'cheat-code-input': !0x0
                }),
                'cheat-name-input': _0xa96c03({
                    'cheat-name-input': !0x0
                }),
                'ejs-switch': _0xa96c03({
                    'ejs-switch': !0x0
                }),
                'ejs-cheat-row': _0xa96c03({
                    'ejs-cheat-row': !0x0
                }),
                'ejs-delete-cheat': _0xa96c03({
                    'ejs-delete-cheat': !0x0
                }),
                'cheat-changed': _0xa96c03({
                    'cheat-changed': !0x0
                }),
                'controls-toggle': _0xa96c03({
                    'ejs--controls-toggle': !0x0
                })
            },
            'initShaders': function () {},
            'setGamepadDialog': function () {
                var _0x1a8832 = this;
                _0x1a8832['elements']['dialogs']['gamepad']['innerHTML'] = ('\n        <div class="')['concat'](_0x42a2['classNames']['dialog-container'], `">
            <div ` + 'class="')['concat'](_0x42a2['classNames']['dialog-title'], `">
                <` + 'h4>Controls Settings' + `</h4>
            </` + 'div>\n            \n            <ul class="')['concat'](_0x42a2['classNames']['tabs'], '" id="controls-tabs">\n                <li class="tabs-title" role="presentation"><a href="#" onclick="return false" role="tab" aria-controls="controls-0" aria-selected="false" id="controls-0-label">Pl' + `ayer 1</a></li>
    ` + '            <li class="tabs-title" role="presentation"><a href="#" onclick="return false" role="tab" aria-controls="controls-1" aria-selected="false" id="controls-1-label">Player 2' + `</a></li>
          ` + '      <li class="tabs-title" role="presentation"><a href="#" onclick="return false" role="tab" aria-controls="controls-2" aria-selected="false" id="controls-2-label">Player 3</a></' + `li>
                ` + '<li class="tabs-title" role="presentation"><a href="#" onclick="return false" role="tab" aria-controls="controls-3" aria-selected="false" id="controls-3-label">' + `Player 4</a></li>
  ` + '          </ul>\n            <div class="')['concat'](_0x42a2['classNames']['dialog-content'], `">
            <div ` + 'class="')['concat'](_0x42a2['classNames']['tabs-content'], ` controls">
        ` + '        \n           ' + ` </div>
            ` + `</div>
            <` + 'div class="')['concat'](_0x42a2['classNames']['dialog-buttons'], `">
                <` + 'a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['btn-submit'], `">Update</a>
       ` + '         <a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['btn-cancel'], `">Cancel</a>
       ` + `     </div>
        ` + '    <div class="')['concat'](_0x42a2['classNames']['overlay'], `" hidden>
          ` + '      <div class="')['concat'](_0x42a2['classNames']['key-setting-popup'], `">
                 ` + '   <span>[Select]</s' + `pan><br />
         ` + '           <div style="color:#fff !important">Press keyboard or gamepad</div>\n                </div>' + `
            </div>
` + `        </div>
     ` + '   ');
                var _0xbd23dd = (`
        <div class=` + '"')['concat'](_0x42a2['classNames']['tabs-panel'], '" id="controls-{inde' + `x}" hidden>
        ` + `    <div>
          ` + '      <div style="">\n                    <div class="')['concat'](_0x42a2['classNames']['gamepad'], '">Connected gamepad: <span class="')['concat'](_0x42a2['classNames']['gamepad-name'], '">None detected</spa' + `n></div>
           ` + '         <div class="')['concat'](_0x42a2['classNames']['gamepad-remapping-axis'], '" hidden><input type="checkbox" value="1" id="remapping-axis-{index}" /><label for="remapping-axis-{index}">Remapping left axis to D-Pad</label></div>\n                </div>\n                <div style="width:25%;float:left">&nbsp;</div>\n                <div style="font-size:12px;width:50%;float:left">\n                    <div class="row">' + `
                   ` + '     <div style="text-align:center;width:50%;float:left">Gam' + `epad</div>
         ` + '               <div style="text-align:center;width:50%;float:left">Keyboard</div' + `>
                  ` + `  </div>
           ` + `     </div>
        ` + '        <div style="' + `clear:both"></div>
 ` + `           </div>
  ` + '      </div>'),
                    _0x115ae0 = ('\n        <div class="')['concat'](_0x42a2['classNames']['button-container'], '" data-id="{id}" data-index="{index}" data-label="{label}" style="margin-bottom:' + `5px">
            <d` + 'iv style="width:25%;float:left;font-size' + `:12px">
            ` + '    <label>{label}:<' + `/label>
            ` + `</div>
            <` + 'div style="width:50%;float:left">\n      ' + `          <div>
    ` + '                <div style="width:50%;float:left;padding: 0 ' + `5px;">
             ` + '           <input style="text-align:center;height:25px;width: 100%;" type="text" data-id="{id}" data-value="" data-type="2" data-index="{index}" readonly="" pla' + `ceholder="">
       ` + '             </div>\n                    <div style="width:50%;float:left;padding' + `: 0 5px;">
         ` + '               <input style="text-align:center;height:25px;width: 100%;" type="text" data-id="{id}" data-value="" data-type="1" data-index="{index}" readonly=""' + ` placeholder="">
   ` + '                 </d' + `iv>
                ` + '    <div style="clea' + `r:both"></div>
     ` + '           </div>\n            </div>\n            <div style="width:25%;float:lef' + `t">
                ` + '<a class="')['concat'](_0x42a2['classNames']['set'], '" href="#" onclick="return false">Set</a' + `>
            </div>` + `
            <div st` + 'yle="clear:both"></d' + `iv>
        </div>`),
                    _0x1a4d83 = {
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
                _0x2c0f6e['arcadeCores']['includes'](_0x1a8832['system']) && (_0x1a4d83[0x2] = 'INSERT COIN'), 'fmsx' === _0x1a8832['system'] && (_0x1a4d83 = {
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
                });
                var _0x50ffd8 = [];
                _0x2c0f6e['buttonMaps'] && (_0x50ffd8 = _0x2c0f6e['buttonMaps']);
                var _0x31f05d = [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x0, 0x9, 0x1, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x13, 0x12, 0x11, 0x10, 0x17, 0x16, 0x15, 0x14];
                if (_0x1a8832['system'], Array['isArray'](_0x50ffd8) && 0x0 < _0x50ffd8['length'] || I.obj(_0x50ffd8)) {
                    var _0x5c6a1e = _0x1a8832['elements']['container']['querySelectorAll']('#controls-tabs li');
                    if (_0x5c6a1e['forEach'](function (_0x4a4420) {
                            _0x9268bd(_0x4a4420, !0x0);
                        }), I.obj(_0x50ffd8)) {
                        var _0x22e7b0 = [];
                        Object['keys'](_0x50ffd8)['forEach'](function (_0xc3925c) {

                            _0x22e7b0['push'](_0x50ffd8[_0xc3925c]);
                        }), _0x50ffd8 = _0x22e7b0;
                    }
                    _0x50ffd8['forEach'](function (_0x4e46c4, _0x3cba38) {

                        _0x5c6a1e[_0x3cba38] && _0x9268bd(_0x5c6a1e[_0x3cba38], !0x1);
                        var _0x543bc9 = _0x50ffd8[_0x3cba38];
                        _0x1a8832['elements']['dialogs']['gamepad']['querySelector']('.' ['concat'](_0x42a2['classNames']['tabs-content']))['innerHTML'] += _0xbd23dd['replace'](/{index}/g, _0x3cba38), _0x31f05d['forEach'](function (_0x323807) {

                            _0x543bc9[_0x323807] && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x3cba38))['innerHTML'] += _0x115ae0['replace'](/{index}/g, _0x3cba38)['replace'](/{id}/g, _0x323807)['replace'](/{label}/g, 'object' == _0x5c1255(_0x543bc9[_0x323807]) ? _0x543bc9[_0x323807]['text'] : _0x543bc9[_0x323807]));
                        }), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="16"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="16"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="17"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="17"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="18"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="18"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="19"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="19"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="20"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="20"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="21"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="21"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="22"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="22"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="23"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="23"][data-index="')['concat'](_0x3cba38, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc');
                    });
                } else {
                    for (var _0x3a0018 = function (_0x6ed590) {

                            _0x1a8832['elements']['dialogs']['gamepad']['querySelector']('.' ['concat'](_0x42a2['classNames']['tabs-content']))['innerHTML'] += _0xbd23dd['replace'](/{index}/g, _0x6ed590), _0x31f05d['forEach'](function (_0x1762e5) {

                                _0x1a4d83[_0x1762e5] && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x6ed590))['innerHTML'] += _0x115ae0['replace'](/{index}/g, _0x6ed590)['replace'](/{id}/g, _0x1762e5)['replace'](/{label}/g, _0x1a4d83[_0x1762e5]));
                            }), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="16"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="16"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="17"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="17"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="18"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="18"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="19"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="19"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="20"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="20"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="21"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="21"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="22"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="22"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc'), _0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="23"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]')) && (_0x1a8832['elements']['dialogs']['gamepad']['querySelector'](('[data-id="23"][data-index="')['concat'](_0x6ed590, '"][data-type="2"]'))['style']['backgroundColor'] = '#ccc');
                        }, _0x22eb7f = 0x0; 0x3 >= _0x22eb7f; _0x22eb7f += 0x1) _0x3a0018(_0x22eb7f);
                }
                Object['keys'](_0x42a2['controllers'])['forEach'](function (_0x5ef4a3) {

                    _0x42a2['controllers'][_0x5ef4a3] && Object['keys'](_0x42a2['controllers'][_0x5ef4a3])['forEach'](function (_0x162c65) {
                        var _0x5816c9 = _0x1a8832['elements']['dialogs']['gamepad']['querySelector']('[data-id="' ['concat'](_0x162c65, '"][data-index="')['concat'](_0x5ef4a3, '"][data-type="1"]')),
                            _0x5e5cd3 = _0x1a8832['elements']['dialogs']['gamepad']['querySelector']('[data-id="' ['concat'](_0x162c65, '"][data-index="')['concat'](_0x5ef4a3, '"][data-type="2"]'));
                        if (!_0x5816c9 || !_0x5e5cd3) return !0x1;
                        var _0x45a889 = _0x42a2['controllers'][_0x5ef4a3][_0x162c65];
                        if (_0x45a889 && (_0x45a889['type'] && 0x1 !== parseInt(_0x45a889['type'], 0xa) ? _0x5e5cd3['value'] = '' : _0x45a889['value'] && _0x45a889['value'] in _0x42a2['keyMap'] && (_0x5816c9['value'] = _0x42a2['keyMap'][_0x45a889['value']], _0x5816c9['setAttribute']('data-value', _0x45a889['value'])), _0x45a889['value2'])) {
                            var _0x325b55 = Gamepad['StandardButtons'][_0x45a889['value2']];
                            _0x325b55 || (_0x325b55 = 'button ' ['concat'](parseInt(_0x45a889['value2'], 0xa) + 0x1)), _0x5e5cd3['value'] = _0x325b55, _0x5e5cd3['setAttribute']('data-value', _0x45a889['value2']);
                        }
                    });
                });
                var _0x4f0074 = _0x1a8832['elements']['dialogs']['gamepad']['querySelectorAll']('input[type=checkbox]');
                Array['from'](_0x4f0074)['forEach'](function (_0x29f115) {
                    var _0x1fc35c = _0x29f115['getAttribute']('id')['replace']('remapping-axis-', '');
                    _0x42a2['remappingAxis'][_0x1fc35c] ? _0x29f115['setAttribute']('checked', !0x0) : _0x29f115['removeAttribute']('checked'), _0x58fce2['call'](_0x1a8832, _0x29f115, 'change', function () {

                        _0x42a2['remappingAxis'][_0x1fc35c] = _0x29f115['checked'] ? 0x1 : 0x0;
                    });
                }), _0x58fce2['call'](this, _0x1a8832['elements']['dialogs']['gamepad']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-submit'])), 'click', function (_0x115dd7) {
                    var _0x337d2b = _0x1a8832['elements']['dialogs']['gamepad']['querySelectorAll']('input[type=text]'),
                        _0x2f5308 = {};
                    Array['from'](_0x337d2b)['forEach'](function (_0x182663) {
                        var _0x1c6038, _0x4fa635 = _0x182663['getAttribute']('data-index'),
                            _0x169e4a = _0x182663['getAttribute']('data-value');
                        0x2 === parseInt(_0x182663['getAttribute']('data-type'), 0xa) && (_0x1c6038 = _0x182663['getAttribute']('data-value'));
                        var _0x44e100 = _0x182663['getAttribute']('data-id');
                        _0x2f5308[_0x4fa635] || (_0x2f5308[_0x4fa635] = {}), _0x2f5308[_0x4fa635][_0x44e100] || (_0x2f5308[_0x4fa635][_0x44e100] = {}), void 0x0 !== _0x169e4a && (_0x2f5308[_0x4fa635][_0x44e100]['value'] = _0x169e4a), void 0x0 !== _0x1c6038 && (_0x2f5308[_0x4fa635][_0x44e100]['value2'] = _0x1c6038);
                    }), _0x28f202['storage']['set']({
                        'controllers': _0x2f5308
                    }), _0x42a2['controllers'] = _0x2f5308;
                    var _0x16a32f = {},
                        _0x26c807 = _0x1a8832['elements']['dialogs']['gamepad']['querySelectorAll']('input[type=checkbox]');
                    return Array['from'](_0x26c807)['forEach'](function (_0x89f019) {
                        var _0xfc63ed = _0x89f019['getAttribute']('id')['replace']('remapping-axis-', '');
                        _0x16a32f[_0xfc63ed] = _0x89f019['checked'] ? 0x1 : 0x0;
                    }), _0x28f202['storage']['set']({
                        'remappingAxis': _0x16a32f
                    }), _0x42a2['remappingAxis'] = _0x16a32f, _0x9268bd(_0x1a8832['elements']['dialogs']['gamepad'], !0x0), _0x1a8832['elements']['container']['focus'](), _0x115dd7['stopPropagation'](), !0x1;
                }), _0x58fce2['call'](this, _0x1a8832['elements']['dialogs']['gamepad']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-cancel'])), 'click', function (_0x3e49cf) {

                    return _0x9268bd(_0x1a8832['elements']['dialogs']['gamepad'], !0x0), _0x1a8832['elements']['container']['focus'](), _0x3e49cf['stopPropagation'](), !0x1;
                }), Array['from'](_0x1a8832['elements']['dialogs']['gamepad']['querySelectorAll']('.' ['concat'](_0x42a2['classNames']['tabs'], ' li')))['forEach'](function (_0x31d9ef) {

                    _0x58fce2['call'](_0x1a8832, _0x31d9ef, 'mousedown', function (_0x4bf910) {

                        _0x5149bc(_0x1a8832['elements']['dialogs']['gamepad']['querySelectorAll']('.' ['concat'](_0x42a2['classNames']['tabs'], ' li')), _0x42a2['classNames']['active'], !0x1), _0x5149bc(_0x31d9ef, _0x42a2['classNames']['active'], !0x0);
                        var _0x24249e = _0x31d9ef['querySelector']('a')['getAttribute']('aria-controls');
                        return Array['from'](_0x1a8832['elements']['dialogs']['gamepad']['querySelectorAll']('.' ['concat'](_0x42a2['classNames']['tabs-content'], ' .')['concat'](_0x42a2['classNames']['tabs-panel'])))['forEach'](function (_0x27b157) {
                            _0x9268bd(_0x27b157, !0x0);
                        }), _0x9268bd(_0x1a8832['elements']['dialogs']['gamepad']['querySelector']('.' ['concat'](_0x42a2['classNames']['tabs-content'], ' #')['concat'](_0x24249e)), !0x1), _0x4bf910['stopPropagation'](), !0x1;
                    });
                }), _0x1edc67['call'](_0x1a8832, _0x1a8832['elements']['dialogs']['gamepad']['querySelector']('[aria-controls="controls-0"]')['parentNode'], 'mousedown');
                var _0xee8b1b = _0x1a8832['elements']['dialogs']['gamepad']['querySelector']('.' ['concat'](_0x42a2['classNames']['overlay']));
                _0x58fce2['call'](_0x1a8832, _0xee8b1b, 'mousedown', function (_0x2b1192) {
                    _0x9268bd(_0xee8b1b, !0x0), _0x2b1192['stopPropagation']();
                }), Array['from'](_0x1a8832['elements']['dialogs']['gamepad']['querySelectorAll']('.' ['concat'](_0x42a2['classNames']['button-container'])))['forEach'](function (_0x4b77de) {
                    _0x58fce2['call'](_0x1a8832, _0x4b77de, 'mousedown', function (_0x8e748f) {

                        _0x1edc67['call'](_0x1a8832, _0x4b77de['querySelector']('a.' ['concat'](_0x42a2['classNames']['set'])), _0x8e748f['type'], !0x0, {});
                    });
                }), Array['from'](_0x1a8832['elements']['dialogs']['gamepad']['querySelectorAll']('.' ['concat'](_0x42a2['classNames']['tabs-panel'], ' a.')['concat'](_0x42a2['classNames']['set'])))['forEach'](function (_0x1595f3) {

                    _0x58fce2['call'](_0x1a8832, _0x1595f3, 'mousedown', function (_0x335df2) {
                        var _0x2de105 = _0x1595f3['parentNode']['parentNode'],
                            _0x51577f = _0x2de105['getAttribute']('data-id'),
                            _0x2a20f6 = _0x2de105['getAttribute']('data-index'),
                            _0x2bc32b = _0x2de105['getAttribute']('data-label');
                        _0x9268bd(_0xee8b1b, !0x1), _0xee8b1b['setAttribute']('data-id', _0x51577f), _0xee8b1b['setAttribute']('data-index', _0x2a20f6);
                        var _0x2be632 = '[ ' ['concat'](_0x2bc32b, ' ]');
                        _0x2be632 += _0x42a2['gamepad']['gamepads'][_0x2a20f6] && 0x10 > _0x51577f ? ('<br /><span style="font-size:12px">Gamepad:')['concat'](_0x42a2['gamepad']['gamepads'][_0x2a20f6]['id'], '</span><br />Press keyboard or gamepad') : '<br />Press keyboard', _0xee8b1b['querySelector']('.' ['concat'](_0x42a2['classNames']['key-setting-popup']))['innerHTML'] = _0x2be632, _0x335df2['stopPropagation']();
                    });
                });
            },
            'setCacheDialog': function () {
                var _0x5969c5 = this;
                _0x5969c5['elements']['dialogs']['cache']['innerHTML'] = ('\n        <div class="')['concat'](_0x42a2['classNames']['dialog-container'], `">
            <div ` + 'class="')['concat'](_0x42a2['classNames']['dialog-title'], `">
                <` + 'h4>Cache Manager</h4>\n            </div>' + `
            <div cl` + 'ass="')['concat'](_0x42a2['classNames']['dialog-content'], `">

            </di` + `v>
            <div ` + 'class="')['concat'](_0x42a2['classNames']['dialog-buttons'], `">
                <` + 'a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['btn-cancel'], `">Close</a>
        ` + `    </div>
        <` + `/div>
        `), _0x58fce2['call'](this, _0x5969c5['elements']['dialogs']['cache']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-cancel'])), 'click', function (_0x17e967) {

                    return _0x9268bd(_0x5969c5['elements']['dialogs']['cache'], !0x0), _0x5969c5['elements']['container']['focus'](), _0x17e967['stopPropagation'](), !0x1;
                }), _0x58fce2['call'](this, _0x5969c5['elements']['dialogs']['cache']['querySelector']('.' ['concat'](_0x42a2['classNames']['dialog-title'], ' a')), 'click', function (_0x5a4859) {

                    return _0x2c0f6e['romdb'] && (_0x2c0f6e['romdb']['clear'](), _0x5969c5['elements']['dialogs']['cache']['querySelector']('.' ['concat'](_0x42a2['classNames']['dialog-content']))['innerHTML'] = '<div style="text-align:center">Empty</div>'), _0x5a4859['stopPropagation'](), !0x1;
                });
            },
            'showLoading': function (_0x40644a) {

                _0x306c5c['show']('modal-6ed698f3d04061f5', {
                    'closeByEsckey': !0x1
                }), this['elements']['container']['querySelector']('.' ['concat'](_0x42a2['classNames']['modal__container']))['innerText'] = _0x40644a || 'Loading...', _0x9268bd(this['elements']['dialogs']['loading'], !0x1);
            },
            'hideLoading': function () {

                _0x306c5c['close'](), _0x9268bd(this['elements']['dialogs']['loading'], !0x0);
            },
            'setLoadingDialog': function () {

                this['elements']['dialogs']['loading'] && (this['elements']['dialogs']['loading']['innerHTML'] = (`
            <div cl` + 'ass="')['concat'](_0x42a2['classNames']['modal'], ' ')['concat'](_0x42a2['classNames']['micromodal-slide'], '" id="modal-6ed698f3d04061f5" aria-hidde' + `n="true">
          ` + '      <div class="')['concat'](_0x42a2['classNames']['modal__overlay'], `" tabindex="-1">
   ` + '             <div class="')['concat'](_0x42a2['classNames']['modal__container'], '" role="dialog" aria-modal="true" aria-labelledby="modal-6ed698f3d04061f5-title">\n                Loading...\n           ' + `     </div>
        ` + `        </div>
     ` + '       </div>'));
            },
            'setCheatDialog': function () {
                var _0x4bc58a = this;
                if (_0x4bc58a['elements']['dialogs']['cheat']) {
                    _0x4bc58a['elements']['dialogs']['cheat']['innerHTML'] = ('\n            <div class="')['concat'](_0x42a2['classNames']['dialog-container'], `">
                <` + 'div class="')['concat'](_0x42a2['classNames']['dialog-title'], `">
                 ` + `   <h4>Cheats</h4>
 ` + '               </div>\n                <div class="')['concat'](_0x42a2['classNames']['dialog-content'], `">
                 ` + '   <div class="')['concat'](_0x42a2['classNames']['cheats-list'], `">
                 ` + `       
            ` + `        </div>
     ` + `           </div>
  ` + '              <div class="')['concat'](_0x42a2['classNames']['dialog-buttons'], `">
                 ` + '   <a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['cheats-add'], '">Add Cheat</a>\n                    <a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['btn-submit'], `">OK</a>
           ` + '         <a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['btn-cancel'], `">Close</a>
        ` + '        </div>\n     ' + `       </div>

     ` + '       \n\n            <div class="')['concat'](_0x42a2['classNames']['modal'], ' ')['concat'](_0x42a2['classNames']['micromodal-slide'], '" id="modal-85cd7a1c543a484b" aria-hidde' + `n="true">
          ` + '      <div class="')['concat'](_0x42a2['classNames']['modal__overlay'], `" tabindex="-1" >
  ` + '              <div class="')['concat'](_0x42a2['classNames']['modal__container'], '" style="width:100%" role="dialog" aria-modal="true" aria-labelledby="modal-85cd7a1c543a484b-title">' + `
                   ` + ' <div class="')['concat'](_0x42a2['classNames']['modal__header'], '">\n                    <h2 class="')['concat'](_0x42a2['classNames']['modal__title'], '" id="modal-85cd7a1c' + `543a484b-title">
   ` + '                 Add' + ` Cheat Code
        ` + '            </h2>\n                    <button class="')['concat'](_0x42a2['classNames']['modal__close'], '" aria-label="Close modal" data-modal-cl' + `ose></button>
      ` + '              </div>' + `
                   ` + ' <main class="')['concat'](_0x42a2['classNames']['modal__content'], '" id="modal-85cd7a1c' + `543a484b-content">

` + '                        <div class="')['concat'](_0x42a2['classNames']['modal__errmsg'], `"></div>
           ` + '             <strong>Code</strong><br />' + `
                   ` + '     <textarea style="width:100%;height:80px;" class="')['concat'](_0x42a2['classNames']['cheat-code-input'], `"></textarea><br />
` + '                        <strong>Descript' + `ion</strong><br />
 ` + '                       <input type="text" style="width:100%" class="')['concat'](_0x42a2['classNames']['cheat-name-input'], `" /><br />

        ` + `            </main>
` + '                    <footer class="')['concat'](_0x42a2['classNames']['modal__footer'], '">\n                    <button class="')['concat'](_0x42a2['classNames']['modal__btn'], ' ')['concat'](_0x42a2['classNames']['modal__btn-primary'], `">Submit</button>
  ` + '                  <button class="')['concat'](_0x42a2['classNames']['modal__btn'], '" data-modal-close aria-label="Close">Cl' + `ose</button>
       ` + '             </foote' + `r>
                <` + `/div>
              ` + `  </div>
           ` + ` </div>
            `);
                    var _0x4b6d68 = _0x4bc58a['elements']['dialogs']['cheat']['querySelector']('#modal-85cd7a1c543a484b');
                    _0x58fce2['call'](this, _0x4bc58a['elements']['dialogs']['cheat']['querySelector']('.' ['concat'](_0x42a2['classNames']['cheats-add'])), 'click', function () {

                        return _0x306c5c['show']('modal-85cd7a1c543a484b', {
                            'closeByEsckey': !0x1,
                            'closeTrigger': 'data-modal-close'
                        }), !0x1;
                    });
                    var _0x321108 = _0x4bc58a['elements']['dialogs']['cheat']['querySelector']('.' ['concat'](_0x42a2['classNames']['cheats-list']));
                    _0x58fce2['call'](this, _0x4b6d68['querySelector']('.' ['concat'](_0x42a2['classNames']['modal__btn-primary'])), 'click', function (_0x41b870) {
                        var _0x5b1686 = _0x4b6d68['querySelector']('.' ['concat'](_0x42a2['classNames']['cheat-name-input']))['value'],
                            _0x389916 = _0x4b6d68['querySelector']('.' ['concat'](_0x42a2['classNames']['cheat-code-input']))['value'];
                        if (_0x5b1686 && _0x389916) {
                            var _0x4b0963 = _0x321108['querySelectorAll']('input:checked');
                            _0x4b6d68['querySelector']('.' ['concat'](_0x42a2['classNames']['cheat-name-input']))['value'] = '', _0x4b6d68['querySelector']('.' ['concat'](_0x42a2['classNames']['cheat-code-input']))['value'] = '', _0x306c5c['close']();
                            var _0x5efa83 = _0x4bc58a['cheats']['length'];
                            _0x4bc58a['cheats']['push']([_0x5b1686, _0x389916]), _0x321108['innerHTML'] += '<div class="' ['concat'](_0x42a2['classNames']['ejs-switch'], '">\n                            <input type="checkbox" value="')['concat'](_0x5efa83, '" id="ejs-cheat-switch-')['concat'](_0x5efa83, `">
                 ` + '           <label for="ejs-cheat-switch-')['concat'](_0x5efa83, '">')['concat'](_0x5b1686, `</label>
           ` + '                 <a href="#" data-idx="')['concat'](_0x5efa83, '" onclick="return false" class="')['concat'](_0x42a2['classNames']['ejs-delete-cheat'], `">&times;</a>
      ` + '                  </div>'), _0x4b0963['forEach'](function (_0x43fa06, _0x4de2af) {

                                _0x321108['querySelector']('#ejs-cheat-switch-' ['concat'](_0x4de2af))['setAttribute']('checked', 'checked');
                            });
                        }
                        return _0x4bc58a['storageSupported'] && localStorage['setItem']('' ['concat'](_0x4bc58a['system'], '-')['concat'](_0x4bc58a['startName'], '-cheats'), JSON['stringify'](_0x4bc58a['cheats'])), _0x41b870['stopPropagation'](), !0x1;
                    });
                    var _0x3ae843 = function () {

                        if (Object['keys'](_0x1f9872)['length']) _0x9268bd(_0x4bc58a['elements']['dialogs']['cheat']['querySelector']('.' ['concat'](_0x42a2['classNames']['cheats-add'])), !0x0), _0x9268bd(_0x4bc58a['elements']['dialogs']['cheat']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-submit'])), !0x0), _0x321108['innerHTML'] = '', Object['keys'](_0x1f9872)['forEach'](function (_0x402172, _0x36234b) {
                            var _0x1558fb = _0x1f9872[_0x402172]['label'],
                                _0x822eb8 = _0x1f9872[_0x402172]['options'],
                                _0xc2cd7 = _0x1f9872[_0x402172]['value'] || _0x1f9872[_0x402172]['default'],
                                _0x3eb0a5 = _0x110b30('div', {
                                    'class': _0x42a2['classNames']['ejs-cheat-row']
                                });
                            _0x3eb0a5['innerHTML'] = ('<label for="ejs-cheat-option-')['concat'](_0x36234b, '">')['concat'](_0x1558fb, '</label><select id="ejs-cheat-option-')['concat'](_0x36234b, '"></select>'), _0x321108['appendChild'](_0x3eb0a5), _0xc2cd7 == _0x1f9872[_0x402172]['default'] ? _0x3eb0a5['querySelector']('select')['classList']['remove'](_0x42a2['classNames']['cheat-changed']) : _0x3eb0a5['querySelector']('select')['classList']['add'](_0x42a2['classNames']['cheat-changed']), _0x822eb8['forEach'](function (_0x1d85c3, _0x275f88) {
                                var _0x15eeb3 = _0x110b30('option', {
                                        'value': _0x275f88
                                    }),
                                    _0x54979a = _0x1d85c3;
                                if (0x0 < _0x1d85c3['indexOf'](' - ')) {
                                    var _0x4f845f = _0x1d85c3['split'](' - ');
                                    _0x4f845f['shift'](), _0x54979a = _0x4f845f['join'](' - '), _0x4f845f = null;
                                }
                                _0xc2cd7 == _0x1d85c3 && (_0x15eeb3['selected'] = !0x0), _0x15eeb3['innerText'] = _0x54979a, _0x3eb0a5['querySelector']('select')['appendChild'](_0x15eeb3);
                            });
                        });
                        else {
                            if (_0x4bc58a['storageSupported']) {
                                var _0x3d6b5d = localStorage['getItem']('' ['concat'](_0x4bc58a['system'], '-')['concat'](_0x4bc58a['startName'], '-cheats'));
                                try {
                                    _0x3d6b5d = JSON['parse'](_0x3d6b5d);
                                } catch (_0x2f809b) {}
                                _0x3d6b5d && (_0x4bc58a['cheats'] = _0x3d6b5d);
                            }
                            Array['isArray'](_0x4bc58a['cheats']) || (_0x4bc58a['cheats'] = []), _0x321108['innerHTML'] = '', _0x4bc58a['cheats'] && Array['isArray'](_0x4bc58a['cheats']) && _0x4bc58a['cheats']['forEach'](function (_0x3062d0, _0x45e654) {
                                var _0x70b27d = _0x3062d0[0x0];
                                _0x3062d0[0x1], _0x321108['innerHTML'] += '<div class="' ['concat'](_0x42a2['classNames']['ejs-switch'], `">
                 ` + '                   <input type="checkbox" value="')['concat'](_0x45e654, '" id="ejs-cheat-switch-')['concat'](_0x45e654, `">
                 ` + '                   <label for="ejs-cheat-switch-')['concat'](_0x45e654, '">')['concat'](_0x70b27d, '</label>\n                                    <a href="#" data-idx="')['concat'](_0x45e654, '" onclick="return false" class="')['concat'](_0x42a2['classNames']['ejs-delete-cheat'], '">&times;</a>\n                                </div>');
                            });
                        }
                    };
                    _0x58fce2['call'](_0x4bc58a, _0x321108, 'change', function (_0x128efa) {

                        if (_0x128efa['target'] && _0x128efa['target']['parentElement']['classList']['contains'](_0x42a2['classNames']['ejs-cheat-row'])) {
                            var _0xb8f578 = _0x128efa['target']['id']['replace']('ejs-cheat-option-', ''),
                                _0x5497d8 = Object['keys'](_0x1f9872)[_0xb8f578];
                            _0x5497d8 && _0x1f9872[_0x5497d8] && (_0x1f9872[_0x5497d8]['value'] = _0x1f9872[_0x5497d8]['options'][_0x128efa['target']['value']], _0x1f9872[_0x5497d8]['value'] == _0x1f9872[_0x5497d8]['default'] ? _0x128efa['target']['classList']['remove'](_0x42a2['classNames']['cheat-changed']) : _0x128efa['target']['classList']['add'](_0x42a2['classNames']['cheat-changed']), _0x42a2['setVariable'](_0x5497d8, _0x1f9872[_0x5497d8]['value']));
                        }
                    }), _0x58fce2['call'](_0x4bc58a, _0x321108, 'click', function (_0x370b05) {

                        if (_0x370b05['target'] && _0x370b05['target']['classList']['contains'](_0x42a2['classNames']['ejs-delete-cheat']) && _0x370b05['target']['getAttribute']('data-idx')) {
                            var _0x59ce80 = _0x370b05['target']['getAttribute']('data-idx');
                            _0x4bc58a['cheats']['splice'](_0x59ce80, 0x1), _0x4bc58a['storageSupported'] && localStorage['setItem']('' ['concat'](_0x4bc58a['system'], '-')['concat'](_0x4bc58a['startName'], '-cheats'), JSON['stringify'](_0x4bc58a['cheats']));
                            var _0x60009e = [];
                            _0x321108['querySelectorAll']('input')['forEach'](function (_0x44cb44, _0x50c7d5) {

                                _0x60009e[_0x50c7d5] = !!_0x321108['querySelector']('#ejs-cheat-switch-' ['concat'](_0x50c7d5, ':checked'));
                            }), _0x60009e['splice'](_0x59ce80, 0x1), _0x3ae843(), _0x60009e['forEach'](function (_0x55a33d, _0x268eee) {

                                _0x55a33d && _0x321108['querySelector']('#ejs-cheat-switch-' ['concat'](_0x268eee))['setAttribute']('checked', 'checked');
                            });
                        }
                        return _0x370b05['stopPropagation'](), !0x1;
                    }), _0x58fce2['call'](_0x4bc58a, _0x4bc58a['elements']['container'], 'reset-arcade-cheats', function () {
                        _0x3ae843();
                    }), _0x58fce2['call'](_0x4bc58a, _0x4bc58a['elements']['container'], 'start-game', function () {

                        _0x42a2['getGameCoreOptions'] && _0x42a2['getGameCoreOptions']()['split']('\n')['forEach'](function (_0x255594) {
                            var _0x4be836 = _0x255594['split']('; '),
                                _0x52bfa5 = _0x4be836[0x0];
                            if (0x0 === _0x52bfa5['indexOf']('fbneo-cheat-')) {
                                var _0x5f0cd9 = _0x4be836[0x1]['split']('|'),
                                    _0x4240e2 = _0x52bfa5['replace'](/_/g, ' ')['replace'](/fbneo\-cheat\-\d+.+?\-(.+)/, '$1'),
                                    _0x28a904 = 0x0 == _0x52bfa5['indexOf']('fbneo-cheat-') ? _0x5f0cd9['slice'](0x0, -0x1) : _0x5f0cd9['slice'](0x1, -0x1),
                                    _0x13aea9 = _0x5f0cd9[0x0];
                                _0x1f9872[_0x52bfa5] = {
                                    'label': _0x4240e2,
                                    'options': _0x28a904,
                                    'default': _0x13aea9
                                };
                            }
                            if (0x0 === _0x52bfa5['indexOf']('fba-cheat-')) {
                                var _0x3e640b = _0x4be836[0x1]['split']('|'),
                                    _0x36c96f = _0x52bfa5['replace'](/_/g, ' ')['replace'](/fba\-cheat\-\d+.+?\-(.+)/, '$1'),
                                    _0x3721db = 0x0 == _0x52bfa5['indexOf']('fba-cheat-') ? _0x3e640b['slice'](0x0, -0x1) : _0x3e640b['slice'](0x1, -0x1),
                                    _0x356ea7 = _0x3e640b[0x0];
                                _0x1f9872[_0x52bfa5] = {
                                    'label': _0x36c96f,
                                    'options': _0x3721db,
                                    'default': _0x356ea7
                                };
                            }
                        }), (_0x3ae843(), _0x2c0f6e['arcadeCores']['includes'](_0x4bc58a['system']) && (_0x42a2['allowCheat'] = !0x1), _0x42a2['setCheat'] || (_0x42a2['allowCheat'] = !0x1), Object['keys'](_0x1f9872)['length'] && (_0x42a2['allowCheat'] = !0x0), !_0x42a2['allowCheat'] && I.elm(_0x4bc58a['elements']['buttons']['cheat']) && _0x4bc58a['elements']['buttons']['cheat']['remove']());
                    }), _0x58fce2['call'](this, _0x4bc58a['elements']['dialogs']['cheat']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-cancel'])), 'click', function (_0x4c7ca7) {

                        return _0x9268bd(_0x4bc58a['elements']['dialogs']['cheat'], !0x0), _0x4c7ca7['stopPropagation'](), _0x4bc58a['elements']['container']['focus'](), !0x1;
                    }), _0x58fce2['call'](this, _0x4bc58a['elements']['dialogs']['cheat']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-submit'])), 'click', function () {

                        return _0x42a2['resetCheat'](), _0x321108['querySelectorAll']('input:checked')['forEach'](function (_0x339ae, _0x5b203c) {
                            var _0x4e63bd = _0x4bc58a['cheats'][_0x339ae['value']];
                            _0x4e63bd && _0x42a2['setCheat'](_0x5b203c, 0x1, _0x4e63bd[0x1]);
                        }), _0x9268bd(_0x4bc58a['elements']['dialogs']['cheat'], !0x0), _0x4bc58a['elements']['container']['focus'](), !0x1;
                    });
                }
            },
            'setNetplayDialog': function () {
                var _0x1386d1 = this,
                    _0x32a8b0 = this;
                if (!_0x42a2['netPlayHost'] || !_0x28f202['supportNetPlay']['call'](this)) return I.elm(_0x32a8b0['elements']['buttons']['netplay']) && (_0x32a8b0['elements']['buttons']['netplay']['remove'](), _0x28f202['fixMenuPos']['call'](_0x32a8b0)), !0x1;
                if (_0x32a8b0['elements']['dialogs']['netplay']) {
                    _0x32a8b0['elements']['dialogs']['netplay']['innerHTML'] = (`
            <div cl` + 'ass="')['concat'](_0x42a2['classNames']['dialog-container'], `">
                <` + 'div class="')['concat'](_0x42a2['classNames']['dialog-title'], `">
                 ` + `   <h4>Netplay</h4>
` + '                </div>\n                <div class="')['concat'](_0x42a2['classNames']['dialog-content'], `">
                 ` + '   <div class="')['concat'](_0x42a2['classNames']['netplay-roomlist'], `" hidden>
          ` + '              <stron' + `g>Rooms</strong>
   ` + '                     <table style="width:100%" cellspacing=0' + `>
                  ` + `          <thead>
  ` + '                    ' + `          <tr>
     ` + '                               <td>Serve' + `r</td>
             ` + '                       <td>Room Name</td>\n                                    <t' + `d>Players</td>
     ` + '                               <td></td>\n                                </tr>\n                     ' + `       </thead>
    ` + '                        <tbody>\n                            ' + `    <tr>
           ` + '                         <td></td>\n                                    <td></td>' + `
                   ` + '                 <td' + `></td>
             ` + '                    ' + `   <td></td>
       ` + '                    ' + `     </tr>
         ` + '                   <' + `/tbody>
            ` + '            </table>' + `
                   ` + ' </div>\n\n                    <div class="')['concat'](_0x42a2['classNames']['netplay-room'], '" hidden>\n                        <strong>Room Name</strong>' + `
                   ` + '     <div data-room-password>Password: <span></span></div>\n                        <table style="width:calc(100% - 20px)" cellspacing="0">\n                     ' + `       <thead>
     ` + '                       <tr>\n                                ' + `<td>Player</td>
    ` + '                            <td>Name</td>\n                                <td></td>\n                ' + `            </tr>
  ` + '                          </thead>\n                         ' + `   <tbody>
         ` + '                   <' + `tr>
                ` + '                <td>' + `1</td>
             ` + '                   <td>Name 1</td>\n                                <td></td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <' + `td>Name 2</td>
     ` + '                    ' + `       <td></td>
   ` + '                         </tr>\n                            <' + `tr>
                ` + '                <td>' + ('3</td>\n                                <td>Name 3</td>\n                         ' + `       <td></td>
   ` + '                         </tr>\n                            <' + `tr>
                ` + '                <td>' + `4</td>
             ` + '                   <' + `td>Name 4</td>
     ` + '                    ' + `       <td></td>
   ` + '                         </tr>\n                            </tbody>\n                        </table>' + `
                   ` + ` </div>
            ` + `    </div>
         ` + '       <div class="'))['concat'](_0x42a2['classNames']['dialog-buttons'], `">
                 ` + '   <a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['btn-quit'], `">Quit Room</a>
    ` + '                <a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['btn-create-room'], '">Create a Room</a>\n                    <a href="#" onclick="return false" class="')['concat'](_0x42a2['classNames']['btn-cancel'], '">Close</a>\n        ' + `        </div>
     ` + `       </div>

     ` + `       
            ` + '<div class="')['concat'](_0x42a2['classNames']['modal'], ' ')['concat'](_0x42a2['classNames']['micromodal-slide'], '" id="modal-9de6c4e9ce2b9361" aria-hidden="true">\n                <div class="')['concat'](_0x42a2['classNames']['modal__overlay'], `" tabindex="-1">
   ` + '             <div class="')['concat'](_0x42a2['classNames']['modal__container'], '" role="dialog" aria-modal="true" aria-labelledby="modal-9de6c4e9ce2b9361-title">\n                    <div class="')['concat'](_0x42a2['classNames']['modal__header'], `">
                 ` + '   <h2 class="')['concat'](_0x42a2['classNames']['modal__title'], '" id="modal-9de6c4e9' + `ce2b9361-title">
   ` + '                    ' + ` Set Player Name
   ` + '                 </h2>\n                    </div>\n                    <main class="')['concat'](_0x42a2['classNames']['modal__content'], '" id="modal-9de6c4e9ce2b9361-content">\n\n                        <div class="')['concat'](_0x42a2['classNames']['modal__errmsg'], `"></div>
           ` + '             <strong>Player Name</strong' + `><br />
            ` + '            <input type="text" maxlength="10" class="')['concat'](_0x42a2['classNames']['netplay-player-name'], '" /><br />\n\n        ' + `            </main>
` + '                    <footer class="')['concat'](_0x42a2['classNames']['modal__footer'], '">\n                    <button class="')['concat'](_0x42a2['classNames']['modal__btn'], ' ')['concat'](_0x42a2['classNames']['modal__btn-primary'], `">Submit</button>
  ` + '                  </footer>\n            ' + `    </div>
         ` + `       </div>
      ` + `      </div>
       ` + `     
            <d` + 'iv class="')['concat'](_0x42a2['classNames']['modal'], ' ')['concat'](_0x42a2['classNames']['micromodal-slide'], '" id="modal-85cd7a1c543a484a" aria-hidde' + `n="true">
          ` + '      <div class="')['concat'](_0x42a2['classNames']['modal__overlay'], '" tabindex="-1">\n                <div class="')['concat'](_0x42a2['classNames']['modal__container'], '" role="dialog" aria-modal="true" aria-labelledby="modal-85cd7a1c543a484a-title"' + `>
                  ` + '  <div class="')['concat'](_0x42a2['classNames']['modal__header'], `">
                 ` + '       <h2 class="')['concat'](_0x42a2['classNames']['modal__title'], '" id="modal-85cd7a1c543a484a-title">\n                       ' + ` Create a Room
     ` + '                   </h2>\n                        <button class="')['concat'](_0x42a2['classNames']['modal__close'], '" aria-label="Close modal" data-modal-cl' + `ose></button>
      ` + '              </div>\n                    <main class="')['concat'](_0x42a2['classNames']['modal__content'], '" id="modal-85cd7a1c' + `543a484a-content">

` + '                        <div class="')['concat'](_0x42a2['classNames']['modal__errmsg'], '"></div>\n                        <div><strong>Room Name</str' + `ong></div>
         ` + '               <div><input type="text" maxlength="20" class="')['concat'](_0x42a2['classNames']['netplay-room-name-input'], `" /></div>
         ` + '               <div><strong>Server</strong></div>\n                        <div><select data-server><' + `/select></div>
     ` + '                   <div><strong>Max Players</strong></div>\n                     ' + `   <div>
           ` + '                 <select data-max-player' + `s>
                 ` + '               <option value="2">2</opti' + `on>
                ` + '                <option value="3">3</opt' + `ion>
               ` + '                 <option value="4">4</option>\n                            </sele' + `ct>
                ` + '        </div>\n                        <div><strong>Password (Optional)</strong>' + `</div>
             ` + '           <div><input type="text" maxlength="10" class="')['concat'](_0x42a2['classNames']['netplay-room-password-input'], `" /></div>

        ` + `            </main>
` + '                    <footer class="')['concat'](_0x42a2['classNames']['modal__footer'], `">
                 ` + '   <button class="')['concat'](_0x42a2['classNames']['modal__btn'], ' ')['concat'](_0x42a2['classNames']['modal__btn-primary'], `">Submit</button>
  ` + '                  <button class="')['concat'](_0x42a2['classNames']['modal__btn'], '" data-modal-close aria-label="Close">Cl' + `ose</button>
       ` + '             </foote' + `r>
                <` + `/div>
              ` + '  </div>\n            </div>\n            \n            <div class="')['concat'](_0x42a2['classNames']['modal'], ' ')['concat'](_0x42a2['classNames']['micromodal-slide'], '" id="modal-5aa765d61d8327de" aria-hidde' + `n="true">
          ` + '      <div class="')['concat'](_0x42a2['classNames']['modal__overlay'], '" tabindex="-1" data' + `-modal-close>
      ` + '          <div class="')['concat'](_0x42a2['classNames']['modal__container'], '" role="dialog" aria-modal="true" aria-labelledby="modal-5aa765d61d8327de-title"' + `>
                  ` + '  <div class="')['concat'](_0x42a2['classNames']['modal__header'], `">
                 ` + '   <h2 class="')['concat'](_0x42a2['classNames']['modal__title'], '" id="modal-5aa765d6' + `1d8327de-title">
   ` + '                    ' + ` Password
          ` + `          </h2>
    ` + '                <button class="')['concat'](_0x42a2['classNames']['modal__close'], '" aria-label="Close modal" data-modal-cl' + `ose></button>
      ` + '              </div>\n                    <main class="')['concat'](_0x42a2['classNames']['modal__content'], '" id="modal-5aa765d6' + `1d8327de-content">

` + '                        <div class="')['concat'](_0x42a2['classNames']['modal__errmsg'], '"></div>\n                        <input type="text" maxlength="10" class="')['concat'](_0x42a2['classNames']['netplay-room-password-input'], `" /><br />

        ` + `            </main>
` + '                    <footer class="')['concat'](_0x42a2['classNames']['modal__footer'], `">
                 ` + '   <button class="')['concat'](_0x42a2['classNames']['modal__btn'], ' ')['concat'](_0x42a2['classNames']['modal__btn-primary'], '">Submit</button>\n                    <button class="')['concat'](_0x42a2['classNames']['modal__btn'], '" data-modal-close aria-label="Close">Cl' + `ose</button>
       ` + '             </footer>\n                </div>\n              ' + `  </div>
           ` + ` </div>
            ` + `
            
      ` + '      <div class="')['concat'](_0x42a2['classNames']['modal'], ' ')['concat'](_0x42a2['classNames']['micromodal-slide'], '" id="modal-7d8fd50ed642340b" aria-hidde' + `n="true">
          ` + '      <div class="')['concat'](_0x42a2['classNames']['modal__overlay'], '" tabindex="-1" data' + `-modal-close>
      ` + '          <div class="')['concat'](_0x42a2['classNames']['modal__container'], '" role="dialog" aria-modal="true" aria-labelledby="modal-7d8fd50ed642340b-title"' + `>
                  ` + '  <div class="')['concat'](_0x42a2['classNames']['modal__header'], `">
                 ` + '   <h2 class="')['concat'](_0x42a2['classNames']['modal__title'], '" id="modal-7d8fd50ed642340b-title"></h2' + `>
                  ` + '  <button class="')['concat'](_0x42a2['classNames']['modal__close'], '" aria-label="Close modal" data-modal-close></button>\n                    </div>\n                    <main class="')['concat'](_0x42a2['classNames']['modal__content'], '" id="modal-7d8fd50e' + `d642340b-content">
 ` + '                    ' + `   
                ` + `    </main>
        ` + '            <footer class="')['concat'](_0x42a2['classNames']['modal__footer'], `">
                 ` + '   <button class="')['concat'](_0x42a2['classNames']['modal__btn'], ' ')['concat'](_0x42a2['classNames']['modal__btn-primary'], '" data-modal-close>O' + `K</button>
         ` + '           </footer>' + `
                </d` + `iv>
                ` + `</div>
            <` + `/div>
            
 ` + '           ');
                    var _0x380a7f, _0x439760 = _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('#modal-9de6c4e9ce2b9361'),
                        _0x5d01d1 = _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('#modal-85cd7a1c543a484a'),
                        _0x2ee0fe = _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('#modal-7d8fd50ed642340b'),
                        _0x26a332 = _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('#modal-5aa765d61d8327de'),
                        _0x38f465 = null;
                    if (_0x42a2['netplayNewUser']) {
                        _0x58fce2['call'](this, _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-cancel'])), 'click', function (_0x58cf4c) {

                            return _0x9268bd(_0x32a8b0['elements']['dialogs']['netplay'], !0x0), _0x42a2['netPlayDialogOpened'] = !0x1, _0x42a2['stopLoadRooms'](), _0x58cf4c['stopPropagation'](), _0x32a8b0['elements']['container']['focus'](), !0x1;
                        });
                        var _0x27fd1a, _0x326130 = function () {

                                _0x9268bd(_0x32a8b0['elements']['widgets']['netplay'], !0x1);
                                var _0x1b5387 = _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                        'netplay-players': !0x0
                                    }))),
                                    _0x25e676 = _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                        'chat-toggle': !0x0
                                    }))),
                                    _0x47de6f = _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                        'chat-box': !0x0
                                    })));
                                _0x1b5387 || (_0x1b5387 = _0x110b30('ul', {
                                    'class': _0xa96c03({
                                        'netplay-players': !0x0
                                    })
                                }), _0x32a8b0['elements']['widgets']['netplay']['appendChild'](_0x1b5387)), _0x25e676 || ((_0x25e676 = _0x110b30('div', {
                                    'class': _0xa96c03({
                                        'chat-toggle': !0x0
                                    })
                                }))['innerHTML'] = '' ['concat'](_0x42a2['icons']['chat'], ' <span class="')['concat'](_0xa96c03({
                                    'chat-count': !0x0
                                }), '">0</span>'), _0x32a8b0['elements']['widgets']['netplay']['appendChild'](_0x25e676), _0x58fce2['call'](_0x32a8b0, _0x25e676, 'click', function () {

                                    _0x5149bc(_0x32a8b0['elements']['widgets']['netplay'], _0xa96c03({
                                        'with-chat-box': !0x0
                                    })), _0x25e676['querySelector']('.' ['concat'](_0xa96c03({
                                        'chat-count': !0x0
                                    })))['innerText'] = '0';
                                })), _0x47de6f || ((_0x47de6f = _0x110b30('div', {
                                    'class': _0xa96c03({
                                        'chat-box': !0x0
                                    })
                                }))['innerHTML'] = (`
                   ` + '         <div class="')['concat'](_0xa96c03({
                                    'chat-messages': !0x0
                                }), `">
                 ` + '               <ul><' + `/ul>
               ` + `             </div>
` + '                            <div class="')['concat'](_0xa96c03({
                                    'chat-input': !0x0
                                }), `">
                 ` + '               <textarea maxlength="100"' + `></textarea>
       ` + '                         <button type="button">Send</button>' + `
                   ` + '         </div>'), _0x32a8b0['elements']['widgets']['netplay']['appendChild'](_0x47de6f), _0x58fce2['call'](_0x32a8b0, _0x47de6f['querySelector']('textarea'), 'keydown keyup', function (_0x57458f) {

                                    return ('keydown' != _0x57458f['type'] || 0xd != _0x57458f['keyCode']) && ('keyup' == _0x57458f['type'] && 0xd == _0x57458f['keyCode'] ? (_0x1edc67['call'](_0x32a8b0, _0x47de6f['querySelector']('button'), 'click'), !0x1) : void _0x57458f['stopPropagation']());
                                }), _0x58fce2['call'](_0x32a8b0, _0x47de6f['querySelector']('button'), 'click', function (_0x14806e) {

                                    if (_0x42a2['connected']) {
                                        var _0x4fd331 = _0x47de6f['querySelector']('textarea')['value']['trim']();
                                        if (_0x47de6f['querySelector']('textarea')['value'] = '', _0x4fd331) {
                                            var _0x11774c = _0x47de6f['querySelector']('.' ['concat'](_0xa96c03({
                                                    'chat-messages': !0x0
                                                }), ' ul')),
                                                _0x607c3 = _0x110b30('li', {});
                                            _0x607c3['innerHTML'] = '<strong>' ['concat'](_0x42a2['playerName'], '</strong> (You) : ')['concat'](_0x4fd331), _0x11774c['appendChild'](_0x607c3);
                                            var _0x29f6a7 = _0x11774c['querySelectorAll']('li');
                                            0x32 < _0x29f6a7['length'] && _0x11774c['removeChild'](_0x29f6a7[0x0]), _0x29f6a7 = null, _0x42a2['connection'] ? _0x42a2['connection']['send'](JSON['stringify']({
                                                'type': 'chat',
                                                'content': _0x4fd331['substring'](0x0, 0x64)
                                            })) : _0x38f465['send'](JSON['stringify']({
                                                'type': 'chat',
                                                'content': _0x4fd331['substring'](0x0, 0x64),
                                                'from': _0x42a2['playerName']
                                            })), _0x47de6f['querySelector']('.' ['concat'](_0xa96c03({
                                                'chat-messages': !0x0
                                            })))['scroll'](0x0, _0x11774c['clientHeight']), _0x47de6f['querySelector']('textarea')['focus']();
                                        }
                                    }
                                    _0x14806e['stopPropagation']();
                                }));
                                var _0x57911c = '';
                                if (_0x42a2['connection']) _0x42a2['players']['forEach'](function (_0x3d041b, _0x2af3e9) {
                                    var _0x78be31 = null;
                                    if (_0x3d041b) {
                                        _0x42a2['connection']['peers'][_0x3d041b] ? _0x78be31 = _0x42a2['connection']['peers'][_0x3d041b]['extra'] : _0x42a2['connection']['userid'] === _0x3d041b && (_0x78be31 = _0x42a2['connection']['extra']);
                                        var _0x45ac26 = _0x78be31['country'] ? ('<i class="ejs-flag ejs-flag-')['concat'](_0x78be31['country']['toLocaleLowerCase'](), '"></i>') : ' ';
                                        _0x57911c += '<li>' ['concat'](_0x2af3e9 + 0x1, '. ')['concat'](_0x78be31['name'], ' ')['concat'](_0x45ac26, '</li>');
                                    } else _0x57911c += '<li>' ['concat'](_0x2af3e9 + 0x1, '. </li>');
                                }), _0x57911c += '', _0x1b5387['innerHTML'] = _0x57911c;
                                else {
                                    var _0x4db45d = _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-room']))['querySelector']('tbody');
                                    _0x4db45d['innerHTML'] = '', _0x42a2['netPlayUsers']['forEach'](function (_0x6b73f7, _0x179854) {

                                        if (_0x6b73f7) {
                                            var _0x370bc7 = document['createElement']('tr');
                                            _0x370bc7['innerHTML'] = '<td>' ['concat'](_0x179854 + 0x1, '</td><td>')['concat'](_0x6b73f7, '</td><td></td>'), _0x4db45d['appendChild'](_0x370bc7);
                                        }
                                    }), _0x57911c = '<ul>', _0x42a2['netPlayUsers']['forEach'](function (_0x2af18e, _0x203a54) {

                                        _0x57911c += '<li>' ['concat'](_0x203a54 + 0x1, '. ')['concat'](_0x2af18e, '</li>');
                                    }), _0x57911c += '</ul>', _0x1b5387['innerHTML'] = _0x57911c;
                                }
                            },
                            _0x835cf7 = 'https://lobby.emulatorjs.com',
                            _0x2c4a71 = function (_0x3eb49b) {
                                var _0xa52cba = _0x3eb49b['data'];
                                if ('object' == _0x5c1255(_0xa52cba)) {
                                    if (_0xa52cba instanceof ArrayBuffer) {
                                        var _0x1ca313 = new Uint8Array(_0xa52cba),
                                            _0x2edf35 = _0x2c0f6e['Module']['_malloc'](_0x1ca313['length'] * _0x1ca313['BYTES_PER_ELEMENT']);
                                        _0x2c0f6e['Module']['HEAPU8']['set'](_0x1ca313, _0x2edf35), _0x2c0f6e['Module']['ccall']('netplay_push_data', 'number', ['number', 'number'], [_0x2edf35, _0x1ca313['byteLength']]), _0x2c0f6e['Module']['_free'](_0x2edf35);
                                    } else _0xa52cba['arrayBuffer'] && function () {
                                        var _0x388d95 = function (_0x4dfdbb) {
                                            return function () {
                                                var _0x5ef3f0 = this,
                                                    _0x47df18 = arguments;
                                                return new Promise(function (_0x237aef, _0x12ef51) {


                                                    function _0x5babbb(_0x1ba4ab) {

                                                        _0x15e0bd(_0x3724be, _0x237aef, _0x12ef51, _0x5babbb, _0x3d53b5, 'next', _0x1ba4ab);
                                                    }

                                                    function _0x3d53b5(_0x4cb820) {

                                                        _0x15e0bd(_0x3724be, _0x237aef, _0x12ef51, _0x5babbb, _0x3d53b5, 'throw', _0x4cb820);
                                                    }
                                                    var _0x3724be = _0x4dfdbb['apply'](_0x5ef3f0, _0x47df18);
                                                    _0x5babbb(void 0x0);
                                                });
                                            };
                                        }(regeneratorRuntime['mark'](function _0x2f3e94() {
                                            var _0x183f03, _0x33cb52, _0xfdf97d;
                                            return regeneratorRuntime['wrap'](function (_0x116872) {

                                                for (;;) switch (_0x116872['prev'] = _0x116872['next']) {
                                                    case 0x0:
                                                        return _0x116872['next'] = 0x2, _0xa52cba['arrayBuffer']();
                                                    case 0x2:
                                                        _0x183f03 = _0x116872['sent'], _0x33cb52 = new Uint8Array(_0x183f03), _0xfdf97d = _0x2c0f6e['Module']['_malloc'](_0x33cb52['length'] * _0x33cb52['BYTES_PER_ELEMENT']), _0x2c0f6e['Module']['HEAPU8']['set'](_0x33cb52, _0xfdf97d), _0x2c0f6e['Module']['ccall']('netplay_push_data', 'number', ['number', 'number'], [_0xfdf97d, _0x33cb52['byteLength']]), _0x2c0f6e['Module']['_free'](_0xfdf97d);
                                                    case 0x8:
                                                    case 'end':
                                                        return _0x116872['stop']();
                                                }
                                            }, _0x2f3e94);
                                        }));
                                        return function () {

                                            return _0x388d95['apply'](this, arguments);
                                        };
                                    }()();
                                } else {
                                    if ('string' == typeof _0xa52cba) {
                                        var _0x5e4b13 = null;
                                        try {
                                            _0x5e4b13 = JSON['parse'](_0xa52cba);
                                        } catch (_0xd9965e) {}
                                        if (_0x5e4b13) {
                                            if ('chat' == _0x5e4b13['type']) {
                                                var _0x1f2d9c = _0x5e4b13['from'],
                                                    _0x471dbf = _0x5e4b13['content'];
                                                if (_0x471dbf) {
                                                    var _0x2369f0 = _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                                            'chat-messages': !0x0
                                                        }), ' ul')),
                                                        _0x69ff62 = _0x110b30('li', {});
                                                    _0x69ff62['innerHTML'] = '<strong>' ['concat'](_0x1f2d9c, '</strong> : ')['concat'](_0x471dbf), _0x2369f0['appendChild'](_0x69ff62);
                                                    var _0x4b598b = _0x2369f0['querySelectorAll']('li');
                                                    if (0x32 < _0x4b598b['length'] && _0x2369f0['removeChild'](_0x4b598b[0x0]), _0x4b598b = null, _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                                            'chat-messages': !0x0
                                                        })))['scroll'](0x0, _0x2369f0['clientHeight']), !_0x32a8b0['elements']['widgets']['netplay']['classList']['contains'](_0xa96c03({
                                                            'with-chat-box': !0x0
                                                        }))) {
                                                        var _0x526e20 = _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                                            'chat-count': !0x0
                                                        })))['innerText'];
                                                        _0x526e20 = parseInt(_0x526e20), _0x526e20++, _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                                            'chat-count': !0x0
                                                        })))['innerText'] = _0x526e20;
                                                    }
                                                }
                                            }
                                        } else 'n:' == _0xa52cba['substring'](0x0, 0x2) && (_0x42a2['netplayNewUser'](), _0x42a2['netPlayUsers'][0x1] = decodeURIComponent(_0xa52cba['substring'](0x2)), _0x326130(), _0x15423a['show'](_0x32a8b0['elements']['container'], decodeURIComponent(_0xa52cba['substring'](0x2)) + ' joined')), 'q:' == _0xa52cba['substring'](0x0, 0x2) && (_0x42a2['netPlayIsHost'] ? (_0x42a2['netPlayClose'](), _0x42a2['netPlayHost'](), _0x42a2['netPlayUsers'][0x1] = '', _0x326130(), _0x15423a['show'](_0x32a8b0['elements']['container'], decodeURIComponent(_0xa52cba['substring'](0x2)) + ' quited')) : _0x38f465['close']());
                                    }
                                }
                            },
                            _0x13706f = function () {

                                _0x42a2['hideLoading']['call'](_0x32a8b0), _0x42a2['connected'] = !0x0, ['n64', 'mupen64plus', 'mupen64plus2', 'mupen64plus-nx']['includes'](_0x32a8b0['system']) || _0x2c0f6e['Module']['_fast_forward_2'], _0x9268bd(_0x32a8b0['elements']['buttons']['loadState'], !0x0), _0x9268bd(_0x32a8b0['elements']['buttons']['saveState'], !0x0), _0x42a2['resetCheat'](), _0x9268bd(_0x32a8b0['elements']['buttons']['cheat'], !0x0), _0x9268bd(_0x28f202['contextMenu']['querySelectorAll']('ul li')['item'](0x1), !0x0), _0x9268bd(_0x28f202['contextMenu']['querySelectorAll']('ul li')['item'](0x2), !0x0), Array['from'](_0x32a8b0['elements']['buttons']['play'])['forEach'](function (_0x5e5a19) {
                                    _0x9268bd(_0x5e5a19, !0x0);
                                });
                                var _0x5233cf = _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-room'])),
                                    _0x5d2315 = _0x5233cf['querySelector']('[data-room-password]');
                                null === _0x42a2['netPlayPassword'] ? _0x9268bd(_0x5d2315, !0x0) : (_0x9268bd(_0x5d2315, !0x1), _0x5d2315['querySelector']('span')['innerText'] = _0x42a2['netPlayPassword']), _0x5233cf['querySelector']('strong')['innerText'] = _0x42a2['netPlayRoomname'], _0x326130(), _0x28f202['updateCoreOptionMenuItems']['call'](_0x32a8b0);
                            },
                            _0x4f25f0 = function () {

                                _0x42a2['connected'] = !0x1, ['n64', 'mupen64plus', 'mupen64plus2', 'mupen64plus-nx']['includes'](_0x32a8b0['system']) || _0x2c0f6e['Module']['_fast_forward_2'], _0x42a2['netPlayUsers'] = ['', ''], _0x42a2['netPlayClose'](), _0x42a2['netPlayIsHost'] = !0x1, !0x1, _0x42a2['hideLoading']['call'](_0x32a8b0), _0x9268bd(_0x32a8b0['elements']['buttons']['restart'], !0x1), _0x9268bd(_0x32a8b0['elements']['buttons']['loadState'], !0x1), _0x9268bd(_0x32a8b0['elements']['buttons']['saveState'], !0x1), _0x42a2['allowCheat'] && _0x9268bd(_0x32a8b0['elements']['buttons']['cheat'], !0x1), _0x9268bd(_0x28f202['contextMenu']['querySelectorAll']('ul li')['item'](0x1), !0x1), _0x9268bd(_0x28f202['contextMenu']['querySelectorAll']('ul li')['item'](0x2), !0x1), Array['from'](_0x32a8b0['elements']['buttons']['play'])['forEach'](function (_0x316e9f) {
                                    _0x9268bd(_0x316e9f, !0x1);
                                }), _0x28f202['updateCoreOptionMenuItems']['call'](_0x32a8b0);
                                var _0x394f29 = _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                    'chat-messages': !0x0
                                }), ' ul'));
                                _0x394f29 && (_0x394f29['innerHTML'] = '');
                                var _0x238c06 = _0x32a8b0['elements']['widgets']['netplay']['querySelector']('.' ['concat'](_0xa96c03({
                                    'netplay-players': !0x0
                                })));
                                _0x238c06 && (_0x238c06['innerHTML'] = ''), _0x9268bd(_0x32a8b0['elements']['widgets']['netplay'], !0x0);
                            },
                            _0x3fcf34 = function (_0x4a502f, _0x1533bf, _0x54e751) {
                                _0x42a2['showLoading']['call'](_0x32a8b0);
                                T.ajax({
                                    type: 'json',
                                    url: 'https://lobby.emulatorjs.com/join',
                                    post: {
                                        'id': _0x1533bf,
                                        'password': _0x54e751,
                                        'nickname': _0x42a2['playerName']
                                    },
                                    headers: {
                                        'accept': 'application/json, text/plain, */*',
                                        'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    success(result, headers) {
                                        if (result) {
                                            if (!result['room_id']) throw 'error';
                                            var _0x167676 = result['nicknames'];
                                            _0x167676[0x1] && (_0x42a2['playerName'] = _0x167676[0x1]), _0x26a332['classList']['remove'](_0xa96c03({
                                                'is-open': !0x0
                                            }));
                                            _0x27fd1a = _0x2c0f6e['servers'][_0x4a502f]['url'];
                                            _0x38f465 = new WebSocket(_0x27fd1a + 'room/' + result['room_id']);
                                            'moz' == _0x53be21['prefix'] && (_0x38f465['binaryType'] = 'arraybuffer');
                                            _0x38f465['onopen'] = function () {

                                                _0x42a2['hideLoading']['call'](_0x32a8b0), _0x38f465['send']('n:' ['concat'](encodeURIComponent(_0x42a2['playerName']))), _0x32a8b0['playing'] || Array['from'](_0x32a8b0['elements']['buttons']['play'])['forEach'](function (_0x3cb9ac) {

                                                    _0x1edc67['call'](_0x32a8b0, _0x3cb9ac, 'click');
                                                }), _0x42a2['netPlayClient'](), _0x42a2['stopLoadRooms'](), _0x42a2['openRoom'](_0x32a8b0), _0x13706f();
                                            };
                                            _0x38f465['onclose'] = function (_0x208860) {

                                                _0x42a2['hideLoading']['call'](_0x32a8b0), _0x42a2['loadRoomsList'](), _0x4f25f0(), 0x3ed != _0x208860['code'] && (_0x2ee0fe['querySelector']('#modal-7d8fd50ed642340b-content')['innerHTML'] = 'Error', _0x306c5c['show']('modal-7d8fd50ed642340b', {
                                                    'closeTrigger': 'data-modal-close'
                                                }));
                                            };
                                            _0x38f465['onmessage'] = function (_0x268ab0) {
                                                _0x2c4a71(_0x268ab0);
                                            };
                                            _
                                            0x38f465['onerror'] = function () {};
                                            _0x42a2['netPlayUsers'][0x0] = _0x167676[0x0];
                                            _0x42a2['netPlayUsers'][0x1] = _0x167676[0x1];
                                            _0x42a2['netPlayRoomname'] = result['room_name'];
                                            _0x42a2['netPlayPassword'] = _0x54e751;
                                            _0x326130();
                                        }
                                    },
                                    error(_0x4fcc70) {
                                        _0x42a2['hideLoading']['call'](_0x32a8b0), _0x2ee0fe['querySelector']('#modal-7d8fd50ed642340b-content')['innerHTML'] = 'Error: ' + ('string' == typeof _0x4fcc70 ? _0x4fcc70 : ''), _0x306c5c['show']('modal-7d8fd50ed642340b', {
                                            'closeTrigger': 'data-modal-close'
                                        });

                                    }
                                });
                            },
                            _0x18d4cc = function (_0xd2fe99) {
                                var _0x3172a0 = _0xd2fe99['target']['getAttribute']('data-id'),
                                    _0x446e22 = _0xd2fe99['target']['getAttribute']('data-server');
                                return 'Y' === _0xd2fe99['target']['getAttribute']('data-password') ? (_0x306c5c['show']('modal-5aa765d61d8327de', {
                                    'closeTrigger': 'data-modal-close'
                                }), _0x26a332['setAttribute']('data-id', _0x3172a0), _0x26a332['setAttribute']('data-server', _0x446e22)) : (_0x42a2['showLoading']['call'](_0x32a8b0), _0x3fcf34(_0x446e22, _0x3172a0, '')), _0xd2fe99['stopPropagation'](), !0x1;
                            };
                        _0x42a2['loadRoomsList'] = function () {

                            _0x9268bd(_0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-roomlist'])), !0x1), _0x9268bd(_0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-room'])), !0x0), _0x9268bd(_0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-create-room'])), !0x1), _0x9268bd(_0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-quit'])), !0x0);
                            var _0x5163f2 = _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-roomlist']))['querySelector']('tbody');
                            _0x42a2['netPlayString'] = encodeURIComponent(JSON['stringify']({
                                'system': _0x32a8b0['system'],
                                'crc32': _0x42a2['romcrc32'],
                                'romname': _0x32a8b0['startName']
                            }));
                            var _0x34f62e = _0x835cf7 + '/list?q=' + _0x42a2['netPlayString'];
                            T.ajax({
                                url: _0x34f62e,
                                type: 'json',
                                headers: {
                                    'content-type': 'application/x-www-form-urlencoded'
                                },
                                success(result) {
                                    if (result) {
                                        var _0xfd61e8 = [],
                                            _0x3bd09f = [];
                                        _0x5163f2['querySelectorAll']('tr')['forEach'](function (_0x503db6) {

                                            _0x3bd09f['push'](_0x503db6['getAttribute']('id'));
                                        }), result['forEach'](function (_0x2ab114) {
                                            var _0x198783 = _0x2ab114['id'];
                                            if (_0xfd61e8['push'](_0x198783), _0x3bd09f['includes'](_0x198783)) {
                                                var _0x458a12 = _0x5163f2['querySelector']('tr[id="' ['concat'](_0x198783, '"]'));
                                                _0x5163f2['removeChild'](_0x458a12);
                                            }
                                            var _0x3c5374 = document['createElement']('tr');
                                            _0x3c5374['setAttribute']('id', _0x198783);
                                            var _0x303726 = _0x2ab114['password'] ? _0x42a2['icons']['lock'] : '',
                                                _0x229fc6 = _0x2ab114['password'] ? 'Y' : 'N',
                                                _0x20c746 = 0x2 > _0x2ab114['players'] ? '<span data-id="' ['concat'](_0x198783, '" data-server="')['concat'](_0x2ab114['server'], '" data-password="')['concat'](_0x229fc6, '" class="')['concat'](_0x42a2['classNames']['btn-join-room'], '">Join</span>') : '',
                                                _0x701aac = _0x2ab114['country'] ? '[' ['concat'](_0x2ab114['country'], '] ') : '',
                                                _0x3bce53 = _0x2ab114['server'] ? _0x2ab114['server'] : '';
                                            if (_0x3bce53 && _0x2c0f6e['servers'][_0x3bce53]) {
                                                var _0x2ab41a = _0x2c0f6e['servers'][_0x3bce53]['name'];
                                                _0x3c5374['innerHTML'] = '<td>' ['concat'](_0x2ab41a, '</td><td>')['concat'](_0x701aac)['concat'](_0x303726)['concat'](_0x2ab114['name'], '</td><td>')['concat'](_0x2ab114['players'], '/2</td><td>')['concat'](_0x20c746, '</td>'), _0x58fce2['call'](_0x1386d1, _0x3c5374['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-join-room'])), 'click', _0x18d4cc), _0x5163f2['appendChild'](_0x3c5374);
                                            }
                                        }), _0x5163f2['querySelectorAll']('tr')['forEach'](function (_0x5ebe69) {

                                            _0xfd61e8['includes'](_0x5ebe69['id']) || _0x5163f2['removeChild'](_0x5ebe69);
                                        });
                                    }
                                    _0x42a2['loadRoomsListTimer'] = setTimeout(_0x42a2['loadRoomsList'], 0x7d0);

                                },
                                error(_0x11aa89) {
                                    console['log']('Network Error', _0x11aa89), _0x42a2['loadRoomsListTimer'] = setTimeout(_0x42a2['loadRoomsList'], 0x7d0);

                                }
                            });
                        }, _0x42a2['openRoom'] = function (_0x5a41eb) {

                            _0x42a2['stopLoadRooms'](), _0x9268bd(_0x5a41eb['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-roomlist'])), !0x0), _0x9268bd(_0x5a41eb['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-room'])), !0x1), _0x9268bd(_0x5a41eb['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-create-room'])), !0x0), _0x9268bd(_0x5a41eb['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-quit'])), !0x1);
                            var _0xd7660d = _0x5a41eb['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-room'])),
                                _0x354316 = _0xd7660d['querySelector']('[data-room-password]');
                            null === _0x42a2['netPlayPassword'] ? _0x9268bd(_0x354316, !0x0) : (_0x9268bd(_0x354316, !0x1), _0x354316['querySelector']('span')['innerText'] = _0x42a2['netPlayPassword']);
                            var _0x4a6e64 = _0xd7660d['querySelector']('tbody');
                            _0x4a6e64['innerHTML'] = '', _0xd7660d['querySelector']('strong')['innerText'] = _0x42a2['netPlayRoomname'], _0x42a2['netPlayUsers']['forEach'](function (_0x199f5b, _0x4a12cb) {
                                var _0x322dd9 = document['createElement']('tr');
                                _0x322dd9['innerHTML'] = '<td>' ['concat'](_0x4a12cb + 0x1, '</td><td>')['concat'](_0x199f5b, '</td><td></td>'), _0x4a6e64['appendChild'](_0x322dd9);
                            });
                        }, _0x58fce2['call'](this, _0x26a332['querySelector']('.' ['concat'](_0x42a2['classNames']['modal__btn-primary'])), 'click', function (_0x49a0ab) {
                            var _0x2d2c08 = _0x26a332['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-room-password-input']))['value'];
                            _0x42a2['showLoading']['call'](_0x32a8b0);
                            var _0x2975e1 = _0x26a332['getAttribute']('data-id'),
                                _0x667cdf = _0x26a332['getAttribute']('data-server');
                            _0x3fcf34(_0x667cdf, _0x2975e1, _0x2d2c08), _0x49a0ab['stopPropagation']();
                        }), _0x58fce2['call'](this, _0x439760['querySelector']('.' ['concat'](_0x42a2['classNames']['modal__btn-primary'])), 'click', function (_0x332531) {
                            var _0x29001a = _0x439760['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-player-name']))['value'];
                            _0x29001a = _0x29001a['replace'](/<|>/g, ''), _0x439760['querySelector']('.' ['concat'](_0x42a2['classNames']['modal__errmsg']))['innerHTML'] = '', _0x29001a['trim']() && (_0x42a2['playerName'] = _0x29001a['trim'](), _0x306c5c['close']()), _0x332531['stopPropagation']();
                        }), _0x58fce2['call'](this, _0x5d01d1['querySelector']('.' ['concat'](_0x42a2['classNames']['modal__btn-primary'])), 'click', function (_0x1e3413) {
                            var _0x3f223c = _0x5d01d1['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-room-name-input']))['value'];
                            _0x3f223c = _0x3f223c['replace'](/<|>/g, '');
                            var _0x5f325f = _0x5d01d1['querySelector']('select[data-server] option:checked')['value'];
                            _0x27fd1a = _0x2c0f6e['servers'][_0x5f325f]['url'];
                            var _0x4bc310 = _0x5d01d1['querySelector']('select[data-max-players] option:checked')['value'];
                            0x2 > _0x4bc310 && (_0x4bc310 = 0x2), 0x4 < _0x4bc310 && (_0x4bc310 = 0x4), _0x4bc310 = 0x2;
                            for (var _0x96dbb9 = 0x0; _0x96dbb9 < _0x4bc310; _0x96dbb9++) _0x42a2['players'][_0x96dbb9] = null;
                            var _0x1547f3 = _0x5d01d1['querySelector']('.' ['concat'](_0x42a2['classNames']['netplay-room-password-input']))['value'];
                            _0x5d01d1['querySelector']('.' ['concat'](_0x42a2['classNames']['modal__errmsg']))['innerHTML'] = '';
                            if (_0x3f223c['trim']()) {
                                _0x42a2['showLoading']['call'](_0x32a8b0);
                                T.ajax({
                                    type: 'json',
                                    url: 'https://lobby.emulatorjs.com/add',
                                    json: {
                                        'room_name': _0x3f223c,
                                        'room_password': _0x1547f3,
                                        'server': _0x5f325f,
                                        'room_key': encodeURIComponent(JSON['stringify']({
                                            'system': _0x32a8b0['system'],
                                            'crc32': _0x42a2['romcrc32'],
                                            'romname': _0x32a8b0['startName'],
                                            'url': _0x32a8b0['config']['url']
                                        }))
                                    },
                                    headers: {
                                        'accept': 'application/json, text/plain, */*',
                                        'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    success(result, headers) {

                                        if (_0x42a2['stopLoadRooms'](), _0x380a7f['closeModal'](), !result['room_id']) throw 'error';
                                        _0x42a2['netPlayPassword'] = _0x1547f3, _0x42a2['netPlayRoomname'] = _0x3f223c, _0x38f465 = new WebSocket(_0x27fd1a + 'room/' + result['room_id']), 'moz' == _0x53be21['prefix'] && (_0x38f465['binaryType'] = 'arraybuffer'), _0x38f465['onopen'] = function () {

                                            _0x42a2['hideLoading']['call'](_0x32a8b0), _0x38f465['send']('core_name=' ['concat'](_0x32a8b0['system'], '&game_crc=')['concat'](_0x42a2['romcrc32'], '&nick=')['concat'](encodeURIComponent(_0x42a2['playerName']))), _0x32a8b0['playing'] || Array['from'](_0x32a8b0['elements']['buttons']['play'])['forEach'](function (_0x4e8e85) {

                                                _0x1edc67['call'](_0x32a8b0, _0x4e8e85, 'click');
                                            }), _0x42a2['netPlayIsHost'] = !0x0, _0x42a2['netPlayHost'](), _0x380a7f['closeModal'](), _0x42a2['stopLoadRooms'](), _0x42a2['openRoom'](_0x32a8b0), _0x42a2['netPlayUsers'][0x0] = _0x42a2['playerName'], _0x13706f();
                                        }, _0x38f465['onclose'] = function (_0x42b823) {

                                            _0x42a2['hideLoading']['call'](_0x32a8b0), _0x42a2['loadRoomsList'](), _0x4f25f0(), 0x3ed != _0x42b823['code'] && (_0x2ee0fe['querySelector']('#modal-7d8fd50ed642340b-content')['innerHTML'] = 'Error', _0x306c5c['show']('modal-7d8fd50ed642340b', {
                                                'closeTrigger': 'data-modal-close'
                                            }));
                                        }, _0x38f465['onmessage'] = function (_0x3b6a7e) {
                                            _0x2c4a71(_0x3b6a7e);
                                        }, _0x38f465['onerror'] = function () {};

                                    },
                                    error() {
                                        _0x42a2['loadRoomsList'](), _0x42a2['hideLoading']['call'](_0x32a8b0), _0x2ee0fe['querySelector']('#modal-7d8fd50ed642340b-content')['innerHTML'] = 'Error', _0x306c5c['show']('modal-7d8fd50ed642340b', {
                                            'closeTrigger': 'data-modal-close'
                                        });
                                    }

                                });
                            } else {
                                _0x380a7f['closeModal']();
                            }
                            _0x1e3413['stopPropagation']();
                        }), _0x58fce2['call'](this, _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-create-room'])), 'click', function (_0x1cb77d) {
                            var _0x5c48aa = !0x0;
                            _0x380a7f = _0x306c5c['show']('modal-85cd7a1c543a484a', {
                                'closeTrigger': 'data-modal-close',
                                'closeByEsckey': !0x1,
                                'onClose': function () {

                                    _0x32a8b0['elements']['container']['focus'](), _0x5c48aa = !0x1;
                                }
                            }), _0x5d01d1['querySelector']('select[data-max-players]')['setAttribute']('disabled', 'disabled');
                            var _0x3aabe8 = _0x5d01d1['querySelector']('select[data-server]');
                            if (_0x3aabe8['innerHTML'] = '', Object['keys'](_0x2c0f6e['servers'])['forEach'](function (_0x3d04c7) {
                                    var _0x615069 = document['createElement']('option');
                                    _0x615069['text'] = _0x2c0f6e['servers'][_0x3d04c7]['name'], _0x615069['value'] = _0x3d04c7, _0x3aabe8['appendChild'](_0x615069);
                                }), 'object' == _0x5c1255(_0x2c0f6e['servers'])) {
                                var _0x4fda0d = !0x1;
                                try {
                                    var _0x4e2ba6 = null;
                                    Object['keys'](_0x2c0f6e['servers'])['forEach'](function (_0x5a5c4c) {
                                        var _0x57a5b7 = _0x2c0f6e['servers'][_0x5a5c4c]['url']['replace']('wss://', 'https://');
                                        ! function _0x401c3a() {
                                            var _0x1607c0, _0x10af77 = new Date()['valueOf']();
                                            return 0x0 === _0x57a5b7['indexOf']('http') ? Promise['race']([fetch(_0x57a5b7), new Promise(function (_0x3ca819, _0xa33263) {
                                                setTimeout(function () {
                                                    _0xa33263(new Error('timeout'));
                                                }, 0x7d0);
                                            })])['then'](function () {

                                                _0x1607c0 = new Date()['valueOf']() - _0x10af77, _0x10af77 = new Date()['valueOf'](), _0x2c0f6e['servers'][_0x5a5c4c]['latency'] = _0x1607c0;
                                                var _0x3bbfec = _0x3aabe8['querySelector']('option[value=' + _0x5a5c4c + ']');
                                                _0x3bbfec['text'] = _0x2c0f6e['servers'][_0x5a5c4c]['name'] + ' (' + _0x1607c0 + 'ms)', (!_0x4e2ba6 || _0x4e2ba6 > _0x1607c0) && (_0x4e2ba6 = _0x1607c0, !_0x4fda0d && (_0x3bbfec['setAttribute']('selected', !0x0), _0x4fda0d = !0x0)), setTimeout(function () {
                                                    _0x5c48aa && _0x401c3a();
                                                }, 0xbb8);
                                            })['catch'](function () {

                                                _0x3aabe8['querySelector']('option[value=' + _0x5a5c4c + ']')['text'] = _0x2c0f6e['servers'][_0x5a5c4c]['name'] + ' (timed out)', setTimeout(function () {
                                                    _0x5c48aa && _0x401c3a();
                                                }, 0xbb8);
                                            }) : void 0x0;
                                        }();
                                    });
                                } catch (_0x238865) {}
                            }
                            return _0x1cb77d['stopPropagation'](), !0x1;
                        }), _0x58fce2['call'](this, _0x32a8b0['elements']['dialogs']['netplay']['querySelector']('.' ['concat'](_0x42a2['classNames']['btn-quit'])), 'click', function (_0x1f1ded) {

                            return _0x38f465['close'](), _0x42a2['stopLoadRooms'](), _0x42a2['loadRoomsList'](), _0x42a2['netPlayClose'](), _0x1f1ded['stopPropagation'](), !0x1;
                        });
                    }
                }
            },
            'setDiskContainer': function () {
                var _0x523d19 = this;
                if (!0x1 === _0x2c0f6e['diskControl']) return _0x523d19['elements']['container']['querySelector'](getClassName('ejs__disk', !0))['remove'](), !0x1;
                if (_0x42a2['getDiskNum'] && 0x1 < _0x42a2['getDiskNum']()) {
                    for (var _0x46901a, _0x56dbe3 = _0x42a2['getDiskNum'](), _0x31d712 = _0x523d19['elements']['container']['querySelector']('.' ['concat'](_0xa96c03({
                            'ejs__disk__container': !0x0
                        }), ' > div')), _0x573de9 = function (_0x18a40a) {

                            (_0x46901a = T.$ct('div', null, getClassName({
                                'ejs__disk__index': !0x0
                            })))['innerHTML'] = 'Disk ' ['concat'](_0x18a40a), _0x58fce2['call'](_0x523d19, _0x46901a, 'click touchstart', function () {

                                _0x42a2['ejectDisk'] && _0x42a2['ejectDisk'](), _0x42a2['setDisk'](_0x18a40a - 0x1), _0x42a2['ejectDisk'] && setTimeout(function () {

                                    _0x42a2['ejectDisk']();
                                }, 0x12c), 'psx' == _0x523d19['system'] || 'psx-legacy' == _0x523d19['system'] ? (_0x523d19['elements']['buttons']['disk']['querySelector']('span')['innerHTML'] = 'Current Disc: ' + _0x18a40a, _0x15423a['show'](_0x523d19['elements']['container'], 'Change Disc: ' + _0x18a40a)) : (_0x523d19['elements']['buttons']['disk']['querySelector']('span')['innerHTML'] = 'Current Disk: ' + _0x18a40a, _0x15423a['show'](_0x523d19['elements']['container'], 'Change Disk: ' + _0x18a40a)), _0x9268bd(_0x523d19['elements']['container']['querySelector'](getClassName('ejs__disk__container', !0)), !0x0);
                                var _0x3f8775 = _0xa96c03({
                                        'ejs__tooltip--visible': !0x0
                                    }),
                                    _0x2aba16 = _0x523d19['elements']['buttons']['disk']['querySelector'](getClassName('ejs__tooltip', !0));
                                _0x5149bc(_0x2aba16, _0x3f8775, !0x0), setTimeout(function () {
                                    _0x5149bc(_0x2aba16, _0x3f8775, !0x1);
                                }, 0x1388);
                            }), _0x31d712['appendChild'](_0x46901a);
                        }, _0x511452 = _0x56dbe3; 0x1 <= _0x511452; _0x511452--) _0x573de9(_0x511452);
                    _0x523d19['elements']['buttons']['disk']['querySelector']('span')['innerHTML'] = 'Current Disk: 1', _0x58fce2['call'](_0x523d19, _0x523d19['elements']['buttons']['disk'], 'click', function () {

                        _0x9268bd(_0x523d19['elements']['container']['querySelector'](getClassName('ejs__disk__container', !0)));
                    });
                } else _0x523d19['elements']['container']['querySelector'](getClassName('ejs__disk', !0)) && _0x523d19['elements']['container']['querySelector'](getClassName('ejs__disk', !0))['remove']();
            },
            'initKeyboard': function () {
                var _0x55e6b3 = this,
                    _0xf0e1ca = this,
                    _0x4dfe12 = this['elements']['dialogs']['gamepad']['querySelector']('.' ['concat'](_0x42a2['classNames']['overlay'])),
                    _0x374757 = function (_0xf2cd97) {

                        if (_0xf0e1ca['focused']) {
                            var _0x3fdb0c = !_0x55e6b3['elements']['dialogs']['gamepad']['hidden'] && !_0x4dfe12['hidden'];
                            if (0x70 <= _0xf2cd97['which'] && 0x7b >= _0xf2cd97['which']);
                            else {
                                var _0x345971 = 'keydown' === _0xf2cd97['type'];
                                if (_0x345971 && _0x3fdb0c) {
                                    var _0x28364f = _0x4dfe12['getAttribute']('data-index'),
                                        _0x2cef0 = _0x4dfe12['getAttribute']('data-id'),
                                        _0x5afbb2 = null;
                                    _0xf2cd97['key'] && ((_0x5afbb2 = _0xf0e1ca['elements']['dialogs']['gamepad']['querySelector']('[data-id="' ['concat'](_0x2cef0, '"][data-index="')['concat'](_0x28364f, '"][data-type="1"]')))['setAttribute']('data-value', _0xf2cd97['keyCode']), _0x5afbb2['value'] = _0x42a2['keyMap'][_0xf2cd97['keyCode']]), _0x9268bd(_0x4dfe12, !0x0);
                                } else Object['keys'](_0x42a2['controllers'])['forEach'](function (_0x223401) {

                                    Object['keys'](_0x42a2['controllers'][_0x223401])['forEach'](function (_0x10d10b) {

                                        if (parseInt(_0x42a2['controllers'][_0x223401][_0x10d10b]['value'], 0xa) === _0xf2cd97['keyCode']) {
                                            if (_0x345971) {
                                                if (0x10 <= _0x10d10b && 0x17 >= _0x10d10b) {
                                                    var _0x450561 = 0x7fff;
                                                    (0x13 == _0x10d10b || 0x11 == _0x10d10b || 0x17 == _0x10d10b || 0x15 == _0x10d10b) && (_0x450561 = -_0x450561), _0x42a2['simulateInput'](_0x223401, _0x10d10b, _0x450561);
                                                } else _0x42a2['simulateInput'](_0x223401, _0x10d10b, 0x1);
                                            } else _0x42a2['simulateInput'](_0x223401, _0x10d10b, 0x0);
                                        }
                                    });
                                });
                            }
                            if (['input', 'textarea']['includes'](_0xf2cd97['target']['nodeName']['toLocaleLowerCase']()) ? _0xf2cd97['stopPropagation']() : (_0xf2cd97['preventDefault'](), _0xf2cd97['stopPropagation']()), _0x3fdb0c) return !0x1;
                            if (_0xf0e1ca['keyboard']) {
                                var _0x36d442 = new KeyboardEvent(_0xf2cd97['type'], {
                                    'isTrusted': !0x1,
                                    'bubbles': !0x1,
                                    'cancelable': !0x1,
                                    'char': _0xf2cd97['char'],
                                    'key': _0xf2cd97['key'],
                                    'shiftKey': _0xf2cd97['shiftKey'],
                                    'ctrlKey': _0xf2cd97['ctrlKey'],
                                    'altKey': _0xf2cd97['altKey'],
                                    'keyCode': _0xf2cd97['keyCode'],
                                    'code': _0xf2cd97['code']
                                });
                                _0x2c0f6e['Module']['canvas']['dispatchEvent'](_0x36d442), _0x2c0f6e['Module']['canvas']['parentElement']['querySelector']('input')['dispatchEvent'](_0x36d442);
                            }
                        }
                    };
                document['body']['addEventListener']('keydown', _0x374757), document['body']['addEventListener']('keyup', _0x374757);
            },
            'initGamepad': function () {
                var _0xd7e427 = this,
                    _0x1e6794 = this,
                    _0x373c88 = this['elements']['dialogs']['gamepad']['querySelector']('.' ['concat'](_0x42a2['classNames']['overlay'])),
                    _0xeed0de = new Gamepad();
                if (_0x42a2['gamepad'] = _0xeed0de, _0xeed0de['init']()) {
                    var _0x5812c0 = 0x0;
                    _0xeed0de['bind'](Gamepad['Event']['TICK'], function (_0x143fca) {

                        _0x143fca['forEach'](function (_0x3cfc89) {
                            var _0x5b9db2, _0x251d69;
                            _0x3cfc89 && _0x3cfc89['axes'] && _0x3cfc89['axes'][0x9] && (3.28571 > (_0x5b9db2 = _0x3cfc89['axes'][0x9]) ? (_0x5812c0 = _0x5b9db2, 0x1 == _0x5b9db2 ? (!_0x3cfc89['extra_buttons'][0xc]['pressed'] && (_0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xc], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xd], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), !_0x3cfc89['extra_buttons'][0xe]['pressed'] && (_0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xe], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xf], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }))) : -0.7142857 >= _0x5b9db2 && -0.714291 <= _0x5b9db2 ? (!_0x3cfc89['extra_buttons'][0xc]['pressed'] && (_0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xc], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xf], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), !_0x3cfc89['extra_buttons'][0xf]['pressed'] && (_0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xf], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xe], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }))) : 0.42856 <= _0x5b9db2 && 0.42858 >= _0x5b9db2 ? (!_0x3cfc89['extra_buttons'][0xd]['pressed'] && (_0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xd], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xc], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), !_0x3cfc89['extra_buttons'][0xe]['pressed'] && (_0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xe], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xf], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }))) : -0.14287 <= _0x5b9db2 && -0.14285 >= _0x5b9db2 ? (!_0x3cfc89['extra_buttons'][0xd]['pressed'] && (_0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xd], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xc], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), !_0x3cfc89['extra_buttons'][0xf]['pressed'] && (_0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xf], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xe], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }))) : -0x1 >= _0x5b9db2 && -1.01 <= _0x5b9db2 ? !_0x3cfc89['extra_buttons'][0xc]['pressed'] && (_0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xc], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xd], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })) : 0.142857 <= _0x5b9db2 && 0.142858 >= _0x5b9db2 ? !_0x3cfc89['extra_buttons'][0xd]['pressed'] && (_0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xd], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xc], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })) : 0.7142857 <= _0x5b9db2 && 0.7142858 >= _0x5b9db2 ? !_0x3cfc89['extra_buttons'][0xe]['pressed'] && (_0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xe], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xf], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })) : -0.42857 >= _0x5b9db2 && -0.42858 <= _0x5b9db2 && !_0x3cfc89['extra_buttons'][0xf]['pressed'] && (_0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0x251d69 = Gamepad['StandardButtons'][0xf], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }), _0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xe], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            }))) : _0x5812c0 != _0x5b9db2 && (_0x3cfc89['extra_buttons'][0xc]['pressed'] && (_0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xc], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x3cfc89['extra_buttons'][0xd]['pressed'] && (_0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xd], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x3cfc89['extra_buttons'][0xe]['pressed'] && (_0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xe], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x3cfc89['extra_buttons'][0xf]['pressed'] && (_0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0x251d69 = Gamepad['StandardButtons'][0xf], _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x5812c0 = _0x5b9db2)), _0x3cfc89 && _0x3cfc89['axes'] && 0x0 in _0x3cfc89['axes'] && _0x42a2['remappingAxis'][_0x3cfc89['index']] && (_0x5b9db2 = _0x3cfc89['axes'][0x0], 0.2 >= _0x1d0cbb(_0x5b9db2) && (_0x5b9db2 = 0x0), 0.5 <= _0x5b9db2 && (_0x251d69 = Gamepad['StandardButtons'][0xf], !_0x3cfc89['extra_buttons'][0xf]['pressed'] && (_0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x5b9db2), -0.5 >= _0x5b9db2 && (_0x251d69 = Gamepad['StandardButtons'][0xe], !_0x3cfc89['extra_buttons'][0xe]['pressed'] && (_0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x5b9db2), 0x0 == _0x5b9db2 && (_0x251d69 = Gamepad['StandardButtons'][0xe], _0x3cfc89['extra_buttons'][0xe]['pressed'] && (_0x3cfc89['extra_buttons'][0xe] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xe,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x251d69 = Gamepad['StandardButtons'][0xf], _0x3cfc89['extra_buttons'][0xf]['pressed'] && (_0x3cfc89['extra_buttons'][0xf] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xf,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x5b9db2)), _0x3cfc89 && _0x3cfc89['axes'] && 0x1 in _0x3cfc89['axes'] && _0x42a2['remappingAxis'][_0x3cfc89['index']] && (_0x5b9db2 = _0x3cfc89['axes'][0x1], 0.2 >= _0x1d0cbb(_0x5b9db2) && (_0x5b9db2 = 0x0), 0.5 <= _0x5b9db2 && (_0x251d69 = Gamepad['StandardButtons'][0xd], !_0x3cfc89['extra_buttons'][0xd]['pressed'] && (_0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x5b9db2), -0.5 >= _0x5b9db2 && (_0x251d69 = Gamepad['StandardButtons'][0xc], !_0x3cfc89['extra_buttons'][0xc]['pressed'] && (_0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x0,
                                'value': 0x1
                            }, _0xeed0de['_fire'](Gamepad['Event']['BUTTON_DOWN'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x5b9db2), 0x0 == _0x5b9db2 && (_0x251d69 = Gamepad['StandardButtons'][0xc], _0x3cfc89['extra_buttons'][0xc]['pressed'] && (_0x3cfc89['extra_buttons'][0xc] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xc,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x251d69 = Gamepad['StandardButtons'][0xd], _0x3cfc89['extra_buttons'][0xd]['pressed'] && (_0x3cfc89['extra_buttons'][0xd] = {
                                'pressed': !0x1,
                                'value': 0x0
                            }, _0xeed0de['_fire'](Gamepad['Event']['BUTTON_UP'], {
                                'control': _0x251d69,
                                'index': 0xd,
                                'gamepad': _0x3cfc89,
                                'gamepadIndex': _0x3cfc89['index']
                            })), _0x5b9db2));
                        });
                    }), _0xeed0de['bind'](Gamepad['Event']['BUTTON_DOWN'], function (_0xb76b03) {

                        if (!_0xd7e427['elements']['dialogs']['gamepad']['hidden'] && !_0x373c88['hidden']) {
                            var _0x396cf2, _0x1f62c8 = parseInt(_0x373c88['getAttribute']('data-index'), 0xa),
                                _0x1b9ced = _0x373c88['getAttribute']('data-id');
                            if (_0xb76b03['gamepad']['index'] === parseInt(_0x1f62c8, 0xa)) {
                                for (var _0x195ac6 = 0x0; 0x20 > _0x195ac6 && ((_0x396cf2 = _0xb76b03['gamepad']['buttons'][_0x195ac6]) || (_0x396cf2 = _0xb76b03['gamepad']['extra_buttons'][_0x195ac6]), !_0x396cf2 || !('number' == typeof _0x396cf2 && 0x1 === _0x396cf2 || 'number' == typeof _0x396cf2['value'] && 0x1 === _0x396cf2['value'])); _0x195ac6 += 0x1);
                                var _0x5d5ac6 = null;
                                (_0x5d5ac6 = _0x1e6794['elements']['dialogs']['gamepad']['querySelector']('[data-id="' ['concat'](_0x1b9ced, '"][data-index="')['concat'](_0x1f62c8, '"][data-type="2"]')))['setAttribute']('data-value', _0xb76b03['index']), _0x5d5ac6['value'] = _0xb76b03['control'] ? _0xb76b03['control'] : 'button ' ['concat'](_0xb76b03['index'] + 0x1), _0x9268bd(_0x373c88, !0x0);
                            }
                        } else {
                            var _0x2d077d = [];
                            _0x2c0f6e['buttonMaps'] && (_0x2d077d = _0x2c0f6e['buttonMaps']), Object['keys'](_0x42a2['controllers'])['forEach'](function (_0x42d9e0) {

                                Object['keys'](_0x42a2['controllers'][_0x42d9e0])['forEach'](function (_0x470e0e) {

                                    parseInt(_0x42a2['controllers'][_0x42d9e0][_0x470e0e]['value2'], 0xa) === parseInt(_0xb76b03['index'], 0xa) && parseInt(_0x42d9e0, 0xa) === parseInt(_0xb76b03['gamepad']['index'], 0xa) && (!_0x2d077d[_0x42d9e0] || _0x2d077d[_0x42d9e0] && _0x2d077d[_0x42d9e0][_0x470e0e]) && _0x42a2['simulateInput'](_0x42d9e0, _0x470e0e, 0x1);
                                });
                            });
                        }
                    }), _0xeed0de['bind'](Gamepad['Event']['BUTTON_UP'], function (_0x291371) {
                        var _0x384ec9 = [];
                        _0x2c0f6e['buttonMaps'] && (_0x384ec9 = _0x2c0f6e['buttonMaps']), Object['keys'](_0x42a2['controllers'])['forEach'](function (_0x107837) {

                            Object['keys'](_0x42a2['controllers'][_0x107837])['forEach'](function (_0x5a253d) {

                                parseInt(_0x42a2['controllers'][_0x107837][_0x5a253d]['value2'], 0xa) === parseInt(_0x291371['index'], 0xa) && parseInt(_0x107837, 0xa) === parseInt(_0x291371['gamepad']['index'], 0xa) && (!_0x384ec9[_0x107837] || _0x384ec9[_0x107837] && _0x384ec9[_0x107837][_0x5a253d]) && _0x42a2['simulateInput'](_0x107837, _0x5a253d, 0x0);
                            });
                        });
                    }), _0xeed0de['bind'](Gamepad['Event']['AXIS_CHANGED'], function (_0x2e2d8d) {
                        var _0x3e1773 = _0x2e2d8d['gamepad']['index'],
                            _0x2744a1 = [];
                        return _0x2c0f6e['buttonMaps'] && (_0x2744a1 = _0x2c0f6e['buttonMaps']), !(0x0 == _0x2744a1['length'] || !_0x2744a1[_0x3e1773]) && ('LEFT_STICK_X' === _0x2e2d8d['axis'] && (0x0 < _0x2e2d8d['value'] ? (_0x2744a1[_0x3e1773][0x10] && _0x42a2['simulateInput'](_0x3e1773, 0x10, 0x7fff * _0x2e2d8d['value']), _0x2744a1[_0x3e1773][0x11] && _0x42a2['simulateInput'](_0x3e1773, 0x11, 0x0)) : (_0x2744a1[_0x3e1773][0x11] && _0x42a2['simulateInput'](_0x3e1773, 0x11, 0x7fff * _0x2e2d8d['value']), _0x2744a1[_0x3e1773][0x10] && _0x42a2['simulateInput'](_0x3e1773, 0x10, 0x0))), 'LEFT_STICK_Y' === _0x2e2d8d['axis'] && (0x0 < _0x2e2d8d['value'] ? (_0x2744a1[_0x3e1773][0x12] && _0x42a2['simulateInput'](_0x3e1773, 0x12, 0x7fff * _0x2e2d8d['value']), _0x2744a1[_0x3e1773][0x13] && _0x42a2['simulateInput'](_0x3e1773, 0x13, 0x0)) : (_0x2744a1[_0x3e1773][0x13] && _0x42a2['simulateInput'](_0x3e1773, 0x13, 0x7fff * _0x2e2d8d['value']), _0x2744a1[_0x3e1773][0x12] && _0x42a2['simulateInput'](_0x3e1773, 0x12, 0x0))), 'RIGHT_STICK_X' === _0x2e2d8d['axis'] && (0x0 < _0x2e2d8d['value'] ? (_0x2744a1[_0x3e1773][0x14] && _0x42a2['simulateInput'](_0x3e1773, 0x14, 0x7fff * _0x2e2d8d['value']), _0x2744a1[_0x3e1773][0x15] && _0x42a2['simulateInput'](_0x3e1773, 0x15, 0x0)) : (_0x2744a1[_0x3e1773][0x15] && _0x42a2['simulateInput'](_0x3e1773, 0x15, 0x7fff * _0x2e2d8d['value']), _0x2744a1[_0x3e1773][0x14] && _0x42a2['simulateInput'](_0x3e1773, 0x14, 0x0))), void('RIGHT_STICK_Y' === _0x2e2d8d['axis'] && (0x0 < _0x2e2d8d['value'] ? (_0x2744a1[_0x3e1773][0x16] && _0x42a2['simulateInput'](_0x3e1773, 0x16, 0x7fff * _0x2e2d8d['value']), _0x2744a1[_0x3e1773][0x17] && _0x42a2['simulateInput'](_0x3e1773, 0x17, 0x0)) : (_0x2744a1[_0x3e1773][0x17] && _0x42a2['simulateInput'](_0x3e1773, 0x17, 0x7fff * _0x2e2d8d['value']), _0x2744a1[_0x3e1773][0x16] && _0x42a2['simulateInput'](_0x3e1773, 0x16, 0x0)))));
                    });
                    var _0x48ecd6 = function () {
                        var _0x1fc6d3 = _0x56b7e6['call'](_0xd7e427, getClassName('ejs__dialogs', !0))['querySelector'](getClassName('ejs__focus_notice__container', !0));
                        _0x1fc6d3 && _0x9268bd(_0x1fc6d3, !0x0);
                    };
                    _0xeed0de['bind'](Gamepad['Event']['BUTTON_DOWN'], _0x48ecd6), _0xeed0de['bind'](Gamepad['Event']['AXIS_CHANGED'], _0x48ecd6), _0xeed0de['bind'](Gamepad['Event']['DISCONNECTED'], function () {

                        [0x0, 0x1, 0x2, 0x3]['forEach'](function (_0x373a74) {
                            var _0x555fa6 = _0xeed0de['gamepads'][_0x373a74];
                            _0x555fa6 ? _0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x373a74)) && (_0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x373a74, ' .')['concat'](_0x42a2['classNames']['gamepad-name']))['innerHTML'] = _0x555fa6['id'], _0x9268bd(_0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x373a74, ' .')['concat'](_0x42a2['classNames']['gamepad-remapping-axis'])), !0x1)) : _0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x373a74)) && (_0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x373a74, ' .')['concat'](_0x42a2['classNames']['gamepad-name']))['innerHTML'] = 'None detected', _0x9268bd(_0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x373a74, ' .')['concat'](_0x42a2['classNames']['gamepad-remapping-axis'])), !0x0));
                        });
                    }), _0xeed0de['bind'](Gamepad['Event']['CONNECTED'], function () {

                        Object['keys'](_0xeed0de['gamepads'])['forEach'](function (_0x2c5511) {
                            var _0x45cead = _0xeed0de['gamepads'][_0x2c5511];
                            _0x45cead ? _0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x2c5511)) && (_0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x2c5511, ' .')['concat'](_0x42a2['classNames']['gamepad-name']))['innerHTML'] = _0x45cead['id'], _0x9268bd(_0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x2c5511, ' .')['concat'](_0x42a2['classNames']['gamepad-remapping-axis'])), !0x1)) : _0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x2c5511)) && (_0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x2c5511, ' .')['concat'](_0x42a2['classNames']['gamepad-name']))['innerHTML'] = 'None detected', _0x9268bd(_0x1e6794['elements']['dialogs']['gamepad']['querySelector']('#controls-' ['concat'](_0x2c5511, ' .')['concat'](_0x42a2['classNames']['gamepad-remapping-axis'])), !0x0));
                        });
                    });
                }
            },
            'setShader': function (_0x3527d4) {

                if ('disabled' === _0x3527d4) _0x2c0f6e['FS']['unlink']('/shader/shader.glslp'), _0x42a2['toggleShader'] && _0x42a2['toggleShader'](0x0);
                else {
                    _0x42a2['toggleShader'] && _0x42a2['toggleShader'](0x0);
                    var _0x345295 = '/shader/' ['concat'](_0x3527d4);
                    _0x2c0f6e['FS']['writeFile']('/shader/shader.glslp', function (_0x2ac6af) {

                        for (var _0x3267b3, _0x2f6f89 = [], _0xf13731 = 0x0; _0xf13731 < _0x2ac6af['length']; _0xf13731 += 0x1) 0xff < (_0x3267b3 = _0x2ac6af[_0xf13731]) && (_0x3267b3 &= 0xff), _0x2f6f89['push'](_0xe3dfd2(_0x3267b3));
                        return _0x2f6f89['join']('');
                    }(_0x2c0f6e['FS']['readFile'](_0x345295))), _0x42a2['toggleShader'] && _0x42a2['toggleShader'](0x1);
                }
            },
            'toggleVirtualGamepad': function (_0x419778) {
                var _0x41c24c = this;
                if (null === _0x42a2['virtualGamepadContainer']) {
                    var _0x1ddc65 = 0x2;
                    switch (_0x41c24c['system']) {
                        case 'gb':
                        case 'gbc':
                        case 'atari7800':
                        case 'lynx':
                        case 'segaMS':
                        case 'segaGG':
                        case 'atari2600':
                            _0x1ddc65 = 0x1;
                            break;
                        case 'nes':
                            _0x1ddc65 = 0x2;
                            break;
                        case 'snes':
                        case 'snes2002':
                        case 'snes2005':
                        case 'snes2010':
                        case 'zc210':
                            _0x1ddc65 = 0x3;
                            break;
                        case 'gba':
                        case 'vbanext':
                        case 'vbam':
                            _0x1ddc65 = 0x3;
                            break;
                        case 'segaMD':
                        case 'segaCD':
                        case 'sega32x':
                        case 'openbor':
                            _0x1ddc65 = 0x5;
                            break;
                        case 'segaSaturn':
                            _0x1ddc65 = 0x6;
                            break;
                        case 'arcade':
                        case 'fba0.2.97.29':
                        case 'mame2003':
                        case 'mame':
                        case 'mame0.193':
                        case 'mame0.243':
                            _0x1ddc65 = 0x7;
                            break;
                        case 'n64':
                        case 'mupen64plus':
                        case 'mupen64plus2':
                        case 'mupen64plus-nx':
                            _0x1ddc65 = 0x8;
                            break;
                        case 'psx':
                            _0x1ddc65 = 0x9;
                            break;
                        case 'pce':
                            _0x1ddc65 = 0xa;
                            break;
                        case 'ws':
                            _0x1ddc65 = 0xb;
                            break;
                        case 'nds':
                        case 'melonds':
                            _0x1ddc65 = 0xc;
                    }
                    var _0x16fa59 = {
                        'ejs-virtual-gamepad': !0x0
                    };
                    _0x16fa59[('ejs-virtual-gamepad-style-')['concat'](_0x1ddc65)] = !0x0, _0x42a2['virtualGamepadContainer'] = _0x110b30('div', {
                        'class': _0xa96c03(_0x16fa59),
                        'hidden': ''
                    }), this['elements']['container']['appendChild'](_0x42a2['virtualGamepadContainer']), _0x42a2['virtualGamepadContainer']['innerHTML'] = ('\n            <div class="')['concat'](_0xa96c03({
                        'virtual-gamepad': !0x0
                    }), '" style="display: bl' + `ock;">
            <` + 'div class="')['concat'](_0xa96c03({
                        'top': !0x0
                    }), '">\n            </div>\n            <div class="')['concat'](_0xa96c03({
                        'dpad-container': !0x0
                    }), `"></div>
           ` + ' <div class="')['concat'](_0xa96c03({
                        'joystick': !0x0
                    }), `"></div>
           ` + ' <div class="')['concat'](_0xa96c03({
                        'center': !0x0
                    }), `">
            <div ` + 'data-key-id-2 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_select': !0x0
                    }), `">SELECT</div>
     ` + '       <div data-key-id-3 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_start': !0x0
                    }), '">START</div>\n            <div data-key-id-2 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_insert_coin': !0x0
                    }), '">INSERT COIN</div>\n' + `            </div>
 ` + '           <div class="')['concat'](_0xa96c03({
                        'right': !0x0
                    }), `">
            <div ` + 'data-key-id-8 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_a': !0x0
                    }), '">A</div>\n            <div data-key-id-0 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_b': !0x0
                    }), `">B</div>
          ` + '  <div data-key-id-9 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_x': !0x0
                    }), '">X</div>\n            <div data-key-id-1 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_y': !0x0
                    }), `">Y</div>
          ` + '  <div data-key-id-10 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_c': !0x0
                    }), `">C</div>
          ` + '  <div data-key-id-11 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_z': !0x0
                    }), `">Z</div>
          ` + '  <div data-key-id-8 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_1': !0x0
                    }), `">1</div>
          ` + '  <div data-key-id-0 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_2': !0x0
                    }), '">2</div>\n            <div data-key-id-10 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_3': !0x0
                    }), `">3</div>
          ` + '  <div data-key-id-9 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_4': !0x0
                    }), '">4</div>\n            <div data-key-id-1 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_5': !0x0
                    }), `">5</div>
          ` + '  <div data-key-id-11 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_6': !0x0
                    }), `">6</div>
          ` + '  <div data-key-id-10 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_l': !0x0
                    }), `">L</div>
          ` + '  <div data-key-id-11 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_r': !0x0
                    }), `">R</div>
          ` + '  <div data-key-id-12 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_l2': !0x0
                    }), `">L2</div>
         ` + '   <div data-key-id-13 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_r2': !0x0
                    }), `">R2</div>


       ` + '     <div data-key-id-23 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_c1': !0x0
                    }), `">C1</div>
         ` + '   <div data-key-id-22 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_c2': !0x0
                    }), `">C2</div>
         ` + '   <div data-key-id-21 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_c3': !0x0
                    }), `">C3</div>
         ` + '   <div data-key-id-20 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_c4': !0x0
                    }), `">C4</div>
         ` + '   <div data-key-id-12 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_z_t': !0x0
                    }), `">Z</div>
          ` + '  <div data-key-id-10 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_l_t': !0x0
                    }), `">L</div>
          ` + '  <div data-key-id-11 class="')['concat'](_0xa96c03({
                        'buttons': !0x0,
                        'b_r_t': !0x0
                    }), `">R</div>

         ` + '   </div>\n            </div>'), _0x9268bd(_0x42a2['virtualGamepadContainer'], !_0x419778);
                    var _0x15d02a = [];
                    _0x2c0f6e['buttonMaps'] && (_0x15d02a = _0x2c0f6e['buttonMaps']), _0x15d02a[0x0] && Object['keys'](_0x15d02a[0x0])['forEach'](function (_0x4d59d3, _0x318c55) {

                        _0x318c55 = _0x15d02a[0x0][_0x4d59d3], _0x42a2['virtualGamepadContainer']['querySelectorAll'](getClassName('buttons', !0))['forEach'](function (_0x2ddfec) {

                            'data-key-id-' ['concat'](_0x4d59d3) in _0x2ddfec['attributes'] && (_0x2ddfec['innerHTML'] = _0x318c55);
                        });
                    }), _0x42a2['virtualGamepadContainer']['querySelectorAll'](getClassName('buttons', !0))['forEach'](function (_0x251908) {
                        var _0x548d28 = _0x110b30('canvas', {
                            'style': 'width: 100%;height: 100%;position: absolute;left: 0;z-index:1'
                        });
                        _0x251908['appendChild'](_0x548d28);
                    });
                    var _0x1e859e = nipplejs['create']({
                        'zone': _0x56b7e6['call'](_0x41c24c, '.' ['concat'](_0xa96c03({
                            'ejs-virtual-gamepad': !0x0
                        }), ' .')['concat'](_0xa96c03({
                            'joystick': !0x0
                        }))),
                        'mode': 'static',
                        'position': {
                            'left': '50%',
                            'top': '50%'
                        },
                        'color': 'red'
                    });
                    _0x1e859e['on']('end', function () {

                        _0x42a2['syncInput'](0x0, 0x13, 0x0), _0x42a2['syncInput'](0x0, 0x12, 0x0), _0x42a2['syncInput'](0x0, 0x11, 0x0), _0x42a2['syncInput'](0x0, 0x10, 0x0);
                    }), _0x1e859e['on']('move', function (_0x476253, _0x37aa9d) {
                        var _0x6ca800 = _0x37aa9d['angle']['degree'],
                            _0x3e5217 = 0x0,
                            _0x33309b = 0x0,
                            _0x56b643 = 0x32;
                        0x0 < _0x6ca800 && 0x2d >= _0x6ca800 && (_0x3e5217 = _0x37aa9d['distance'] / _0x56b643, _0x33309b = -0x1 / 0x2d * _0x6ca800 * _0x37aa9d['distance'] / _0x56b643), 0x2d < _0x6ca800 && 0x5a >= _0x6ca800 && (_0x3e5217 = 0x1 / 0x2d * (0x5a - _0x6ca800) * _0x37aa9d['distance'] / _0x56b643, _0x33309b = -_0x37aa9d['distance'] / _0x56b643), 0x5a < _0x6ca800 && 0x87 >= _0x6ca800 && (_0x3e5217 = 0x1 / 0x2d * (0x5a - _0x6ca800) * _0x37aa9d['distance'] / _0x56b643, _0x33309b = -_0x37aa9d['distance'] / _0x56b643), 0x87 < _0x6ca800 && 0xb4 >= _0x6ca800 && (_0x3e5217 = -_0x37aa9d['distance'] / _0x56b643, _0x33309b = -0x1 / 0x2d * (0xb4 - _0x6ca800) * _0x37aa9d['distance'] / _0x56b643), 0x87 < _0x6ca800 && 0xe1 >= _0x6ca800 && (_0x3e5217 = -_0x37aa9d['distance'] / _0x56b643, _0x33309b = -0x1 / 0x2d * (0xb4 - _0x6ca800) * _0x37aa9d['distance'] / _0x56b643), 0xe1 < _0x6ca800 && 0x10e >= _0x6ca800 && (_0x3e5217 = -0x1 / 0x2d * (0x10e - _0x6ca800) * _0x37aa9d['distance'] / _0x56b643, _0x33309b = _0x37aa9d['distance'] / _0x56b643), 0x10e < _0x6ca800 && 0x13b >= _0x6ca800 && (_0x3e5217 = -0x1 / 0x2d * (0x10e - _0x6ca800) * _0x37aa9d['distance'] / _0x56b643, _0x33309b = _0x37aa9d['distance'] / _0x56b643), 0x13b < _0x6ca800 && 359.9 >= _0x6ca800 && (_0x3e5217 = _0x37aa9d['distance'] / _0x56b643, _0x33309b = 0x1 / 0x2d * (0x168 - _0x6ca800) * _0x37aa9d['distance'] / _0x56b643), 0x0 < _0x3e5217 ? (_0x42a2['simulateInput'](0x0, 0x10, 0x7fff * _0x3e5217), _0x42a2['simulateInput'](0x0, 0x11, 0x0)) : (_0x42a2['simulateInput'](0x0, 0x11, 0x7fff * _0x3e5217), _0x42a2['simulateInput'](0x0, 0x10, 0x0)), 0x0 < _0x33309b ? (_0x42a2['simulateInput'](0x0, 0x12, 0x7fff * _0x33309b), _0x42a2['simulateInput'](0x0, 0x13, 0x0)) : (_0x42a2['simulateInput'](0x0, 0x13, 0x7fff * _0x33309b), _0x42a2['simulateInput'](0x0, 0x12, 0x0));
                    }), _0x2326ed({
                        'container': _0x56b7e6['call'](_0x41c24c, '.' ['concat'](_0xa96c03({
                            'ejs-virtual-gamepad': !0x0
                        }), ' .')['concat'](_0xa96c03({
                            'dpad-container': !0x0
                        }))),
                        'event': function (_0x36d6c2, _0x153fc7, _0xc3a14d, _0x3361b0) {

                            _0x42a2['syncInput'](0x0, 0x4, _0xc3a14d), _0x42a2['syncInput'](0x0, 0x5, _0x3361b0), _0x42a2['syncInput'](0x0, 0x6, _0x36d6c2), _0x42a2['syncInput'](0x0, 0x7, _0x153fc7);
                        }
                    });
                    var _0x4558ca = _0xa96c03({
                            'virtual-gamepad': !0x0
                        }),
                        _0xf4c1da = _0xa96c03({
                            'touch': !0x0
                        });
                    _0x58fce2['call'](_0x41c24c, _0x56b7e6['call'](_0x41c24c, '.' ['concat'](_0x4558ca)), 'touchmove', function (_0x20ee8d) {

                        _0x20ee8d['stopPropagation']();
                    });
                    var _0x4e5fb9 = {};
                    _0x4e5fb9[_0xa96c03({
                        'b_a': !0x0
                    })] = 0x8, _0x4e5fb9[_0xa96c03({
                        'b_b': !0x0
                    })] = 0x0, _0x4e5fb9[_0xa96c03({
                        'b_c': !0x0
                    })] = 0xa, _0x4e5fb9[_0xa96c03({
                        'b_x': !0x0
                    })] = 0x9, _0x4e5fb9[_0xa96c03({
                        'b_y': !0x0
                    })] = 0x1, _0x4e5fb9[_0xa96c03({
                        'b_z': !0x0
                    })] = 0xb, _0x4e5fb9[_0xa96c03({
                        'b_l': !0x0
                    })] = 0xa, _0x4e5fb9[_0xa96c03({
                        'b_r': !0x0
                    })] = 0xb, _0x4e5fb9[_0xa96c03({
                        'b_l2': !0x0
                    })] = 0xc, _0x4e5fb9[_0xa96c03({
                        'b_r2': !0x0
                    })] = 0xd, _0x4e5fb9[_0xa96c03({
                        'b_1': !0x0
                    })] = 0x8, _0x4e5fb9[_0xa96c03({
                        'b_2': !0x0
                    })] = 0x0, _0x4e5fb9[_0xa96c03({
                        'b_3': !0x0
                    })] = 0xa, _0x4e5fb9[_0xa96c03({
                        'b_4': !0x0
                    })] = 0x9, _0x4e5fb9[_0xa96c03({
                        'b_5': !0x0
                    })] = 0x1, _0x4e5fb9[_0xa96c03({
                        'b_6': !0x0
                    })] = 0xb, _0x4e5fb9[_0xa96c03({
                        'b_c1': !0x0
                    })] = 0x17, _0x4e5fb9[_0xa96c03({
                        'b_c2': !0x0
                    })] = 0x16, _0x4e5fb9[_0xa96c03({
                        'b_c3': !0x0
                    })] = 0x15, _0x4e5fb9[_0xa96c03({
                        'b_c4': !0x0
                    })] = 0x14, _0x4e5fb9[_0xa96c03({
                        'b_l_t': !0x0
                    })] = 0xa, _0x4e5fb9[_0xa96c03({
                        'b_r_t': !0x0
                    })] = 0xb, _0x4e5fb9[_0xa96c03({
                        'b_z_t': !0x0
                    })] = 0xc, _0x4e5fb9[_0xa96c03({
                        'b_start': !0x0
                    })] = 0x3, _0x4e5fb9[_0xa96c03({
                        'b_select': !0x0
                    })] = 0x2, _0x4e5fb9[_0xa96c03({
                        'b_insert_coin': !0x0
                    })] = 0x2, Object['keys'](_0x4e5fb9)['forEach'](function (_0x1f43bd) {
                        var _0x717fc1 = _0x4e5fb9[_0x1f43bd];
                        _0x58fce2['call'](_0x41c24c, _0x56b7e6['call'](_0x41c24c, '.' ['concat'](_0x4558ca, ' .')['concat'](_0x1f43bd, ' canvas')), 'touchstart touchend', function (_0x4c7a49) {

                            if ('touchend' === _0x4c7a49['type']) _0x5149bc(_0x56b7e6['call'](_0x41c24c, '.' ['concat'](_0x4558ca, ' .')['concat'](_0x1f43bd)), _0xf4c1da, !0x1), window['setTimeout'](function () {

                                _0x42a2['syncInput'](0x0, _0x717fc1, 0x0);
                            }, 0xa);
                            else {
                                if (_0x5149bc(_0x56b7e6['call'](_0x41c24c, '.' ['concat'](_0x4558ca, ' .')['concat'](_0x1f43bd)), _0xf4c1da, !0x0), [0x14, 0x15, 0x16, 0x17]['includes'](_0x717fc1)) {
                                    var _0x45de3a = 0x7fff;
                                    (0x17 == _0x717fc1 || 0x15 == _0x717fc1) && (_0x45de3a = -_0x45de3a), _0x42a2['syncInput'](0x0, _0x717fc1, _0x45de3a);
                                } else _0x42a2['syncInput'](0x0, _0x717fc1, 0x1);
                            }
                            _0x4c7a49['stopPropagation']();
                        });
                    });
                } else _0x9268bd(_0x42a2['virtualGamepadContainer'], !_0x419778);
            },
            'setup': function () {
                var _0x2056d4 = this;
                if (this['game']) {
                    if (_0x42a2['playerName'] = _0x2056d4['config']['playerName'], _0x5149bc(this['elements']['container'], this['config']['classNames']['type'], !0x0), this['elements']['container']['setAttribute']('tabindex', '0'), this['color']) {
                        var _0xc33db8 = function (_0x444769) {
                            var _0x2fcee7 = _0x444769['toLowerCase']();
                            if (_0x2fcee7 && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/ ['test'](_0x2fcee7)) {
                                if (0x4 === _0x2fcee7['length']) {
                                    for (var _0x2ccad8 = '#', _0x806370 = 0x1; 0x4 > _0x806370; _0x806370 += 0x1) _0x2ccad8 += _0x2fcee7['slice'](_0x806370, _0x806370 + 0x1)['concat'](_0x2fcee7['slice'](_0x806370, _0x806370 + 0x1));
                                    _0x2fcee7 = _0x2ccad8;
                                }
                                for (var _0x4cb83a = [], _0x45a0ab = 0x1; 0x7 > _0x45a0ab; _0x45a0ab += 0x2) _0x4cb83a['push'](parseInt('0x' ['concat'](_0x2fcee7['slice'](_0x45a0ab, _0x45a0ab + 0x2)), 0x10));
                                return _0x4cb83a;
                            }
                            return null;
                        }(this['color']);
                        _0xc33db8 && this['elements']['container']['setAttribute']('style', ('--ejs-primary-color: ')['concat'](_0xc33db8[0x0], ', ')['concat'](_0xc33db8[0x1], ', ')['concat'](_0xc33db8[0x2]));
                    }
                    if (this['elements']['wrapper'] = _0x110b30('div', {
                            'class': this['config']['classNames']['wrapper']
                        }), _0x3ee401(this['game'], this['elements']['wrapper']), 'video' !== _0x2056d4['game']['tagName']['toLocaleLowerCase']()) {
                        var _0x5b43d1 = this['config']['volume'];
                        Object['defineProperty'](_0x2056d4['game'], 'volume', {
                            'get': function () {
                                return _0x5b43d1;
                            },
                            'set': function (_0x4b63e4) {

                                _0x5b43d1 = _0x4b63e4, _0x1edc67['call'](_0x2056d4, _0x2056d4['game'], 'volumechange');
                            }
                        });
                        var _0x3dc4c1 = _0x2056d4['storage']['get']('muted');
                        Object['defineProperty'](_0x2056d4['game'], 'muted', {
                            'get': function () {
                                return _0x3dc4c1;
                            },
                            'set': function (_0x3301fc) {
                                var _0x1bde56 = !!I.bool(_0x3301fc) && _0x3301fc;
                                _0x3dc4c1 = _0x1bde56, _0x1edc67['call'](_0x2056d4, _0x2056d4['game'], 'volumechange');
                            }
                        });
                    }
                } else console['warn']('No game element found!');
            },
            'listeners': function () {
                var _0x29b581 = this;
                _0x29b581['elements']['buttons']['restart'] && _0x58fce2['call'](_0x29b581, _0x29b581['elements']['buttons']['restart'], 'click', function () {

                    _0x15423a['show'](_0x29b581['elements']['container'], 'Restart Game', 0x5dc), 'fbneo' == _0x29b581['system'] || 'arcade' == _0x29b581['system'] ? (_0x42a2['resetArcadeCheats'](_0x29b581), setTimeout(function () {

                        _0x42a2['restartGame']();
                    }, 0x64)) : _0x42a2['restartGame']();
                }), _0x29b581['elements']['buttons']['play'] && Array['from'](_0x29b581['elements']['buttons']['play'])['forEach'](function (_0x422c0a) {

                    _0x58fce2['call'](_0x29b581, _0x422c0a, 'click', function () {

                        _0x29b581['playing'] ? (_0x29b581['playing'] = !0x1, _0x2c0f6e['Module']['pauseMainLoop'](), _0x1edc67['call'](_0x29b581, _0x29b581['elements']['container'], 'pause', !0x1, {
                            'pause': !0x0
                        })) : (_0x29b581['playing'] = !0x0, _0x2c0f6e['Module']['resumeMainLoop'](), _0x1edc67['call'](_0x29b581, _0x29b581['elements']['container'], 'pause', !0x1, {
                            'pause': !0x1
                        }));
                    });
                }), _0x29b581['elements']['buttons']['netplay'] && _0x58fce2['call'](_0x29b581, _0x29b581['elements']['buttons']['netplay'], 'click', function () {

                    _0x9268bd(_0x29b581['elements']['dialogs']['netplay'], !0x1), 0x0 < _0x42a2['netPlayUsers']['filter'](function (_0xb4534a) {
                        return '' != _0xb4534a;
                    })['length'] ? _0x42a2['openRoom'](_0x29b581) : (_0x42a2['netPlayDialogOpened'] = !0x0, _0x42a2['stopLoadRooms'](), _0x42a2['loadRoomsList']()), _0x42a2['playerName'] || _0x306c5c['show']('modal-9de6c4e9ce2b9361', {
                        'closeByEsckey': !0x1
                    });
                }), _0x29b581['elements']['buttons']['cheat'] && _0x58fce2['call'](_0x29b581, _0x29b581['elements']['buttons']['cheat'], 'click', function () {

                    _0x9268bd(_0x29b581['elements']['dialogs']['cheat'], !0x1);
                });
                var _0x45804c = _0x5161da['call'](_0x29b581, '.' ['concat'](_0xa96c03({
                    'ejs__contextmenu': !0x0
                }), ' ul li'));
                Array['from'](_0x45804c)['forEach'](function (_0x1d9fa9, _0x210b60) {

                    0x0 === _0x210b60 && _0x58fce2['call'](_0x29b581, _0x1d9fa9, 'click', function () {
                        var _0x19331d = _0x42a2['getScreenData']();
                        return T.download(_0x29b581['startName'] + '.png', _0x19331d), !0x1;
                    }), 0x1 === _0x210b60 && _0x58fce2['call'](_0x29b581, _0x1d9fa9, 'click', function () {

                        _0x42a2['quickSaveState'](), _0x28f202['contextMenu']['style']['display'] = 'none';
                    }), 0x2 === _0x210b60 && _0x58fce2['call'](_0x29b581, _0x1d9fa9, 'click', function () {

                        _0x42a2['quickLoadState'](), _0x28f202['contextMenu']['style']['display'] = 'none';
                    });
                }), _0x58fce2['call'](_0x29b581, _0x29b581['elements']['container'], 'savestate', function (_0x1a79dc) {
                    var _0x43a744 = _0x1a79dc['detail']['state'],
                        _0x4ca4d8 = new Blob([_0x43a744]),
                        _0x1bcd91 = _0x29b581['startName']['split']('/')['pop']()['split']('.'),
                        _0x20e5aa = _0x1bcd91['slice'](0x0, _0x1bcd91['length'] - 0x1)['join']('.'),
                        _0x2ddf80 = _0x20e5aa ? '' ['concat'](_0x20e5aa, '.state') : 'game.state';
                    'custom' == _0x29b581['config']['onsavestate'] ? loaderWindow && loaderWindow['postMessage']({
                        'act': 'ejs-savestate',
                        'data': {
                            'screenshot': _0x1a79dc['detail']['screenshot'],
                            'state': _0x43a744
                        },
                        'name': _0x2ddf80
                    }, '*') : I.func(_0x29b581['config']['onsavestate']) ? _0x29b581['config']['onsavestate']['call'](null, {
                        'screenshot': _0x1a79dc['detail']['screenshot'],
                        'state': _0x43a744
                    }, _0x2ddf80, _0x29b581['elements']['container']) : T.download(_0x2ddf80, _0x4ca4d8), _0x29b581['elements']['container']['focus']();
                }), _0x29b581['game']['stateloadField'] = _0x110b30('input'), _0x29b581['game']['stateloadField']['type'] = 'file', _0x29b581['game']['stateloadField']['onchange'] = function _0x545f98(_0xbdeff9) {
                    var _0x2b343d, _0x4a2e77 = _0xbdeff9['target']['files'];
                    0x0 < _0x4a2e77['length'] && ((_0x2b343d = new FileReader())['file_name'] = _0x4a2e77[0x0]['name'], _0x2b343d['onload'] = function () {
                        var _0x3ec72a = new Uint8Array(_0x2b343d['result']);
                        EJS_loadState(_0x3ec72a);
                    }, _0x2b343d['readAsArrayBuffer'](_0x4a2e77[0x0])), _0x29b581['game']['stateloadField'] = _0x110b30('input'), _0x29b581['game']['stateloadField']['type'] = 'file', _0x29b581['game']['stateloadField']['onchange'] = _0x545f98;
                }, _0x58fce2['call'](_0x29b581, _0x29b581['elements']['container'], 'loadstate', function () {

                    'custom' == _0x29b581['config']['onloadstate'] ? loaderWindow['postMessage']({
                        'act': 'ejs-loadstate'
                    }, '*') : I.func(_0x29b581['config']['onloadstate']) ? _0x29b581['config']['onloadstate']['call'](null, _0x29b581['loadState']) : _0x29b581['game']['stateloadField']['click'](), _0x29b581['elements']['container']['focus']();
                }), document['addEventListener']('visibilitychange', function () {

                    document['visibilityState'];
                });
            },
            'bindFunction': function () {
                var _0xa343e7, _0x5a546d = this,
                    _0x480a40 = _0x5a546d['system'];
                _0x2c0f6e['Module'] && (_0x2c0f6e['Module']['_set_volume'] || _0x2c0f6e['Module']['_adjust_volume']) && (_0x2c0f6e['Module']['_adjust_volume'] && (_0xa343e7 = _0x2c0f6e['Module']['cwrap']('adjust_volume', 'null', ['number'])), _0x2c0f6e['Module']['_set_volume'] && (_0xa343e7 = _0x2c0f6e['Module']['cwrap']('set_volume', 'null', ['number'])), _0x42a2['setVolume'] = function () {
                    var _0xa2406a = 0x0;
                    0x1 > _0x5a546d['volume'] && (_0xa2406a = 0x0 === _0x5a546d['volume'] ? -0x50 : 0x1e * _0x5a546d['volume'] - 0x1e, _0xa343e7(_0xa2406a)), _0x5a546d['muted'] && (_0xa2406a = -0x50), _0xa343e7(_0xa2406a);
                }), (_0x42a2['setVariable'] = _0x2c0f6e['Module']['cwrap']('set_variable', 'null', ['string', 'string']), _0x42a2['simulateInputFn'] = _0x2c0f6e['Module']['cwrap']('simulate_input', 'null', ['number', 'number', 'number']), _0x42a2['simulateInput'] = function (_0x41a8db, _0x2e7b0b, _0x5c73ea) {

                    _0x42a2['simulateInputFn'](_0x41a8db, _0x2e7b0b, _0x5c73ea);
                }, _0x42a2['syncInput'] = _0x42a2['simulateInput']);
                var _0x27adb8 = _0x2c0f6e['Module']['cwrap']('shader_enable', 'null', ['number']);
                _0x42a2['toggleShader'] = function (_0xd9f6d7) {
                    return _0x27adb8(_0xd9f6d7);
                }, _0x42a2['getStateInfo'] = _0x2c0f6e['Module']['cwrap']('get_state_info', 'string', []), _0x42a2['saveState'] = function () {
                    var _0x4c8290, _0x25690f = _0x42a2['getStateInfo']()['split']('|'),
                        _0x3d73e3 = _0x25690f[0x0] >> 0x0;
                    if (0x0 < _0x3d73e3) {
                        var _0x1d507e = _0x25690f[0x1] >> 0x0;
                        _0x4c8290 = _0x2c0f6e['Module']['HEAPU8']['slice'] ? _0x2c0f6e['Module']['HEAPU8']['slice'](_0x1d507e, _0x1d507e + _0x3d73e3) : _0x2c0f6e['Module']['HEAPU8']['subarray'](_0x1d507e, _0x1d507e + _0x3d73e3);
                    }
                    return _0x4c8290;
                };
                var _0x33642e = _0x2c0f6e['Module']['cwrap']('load_state', 'number', ['string', 'number']);
                _0x42a2['loadState'] = function (_0x1971bf, _0x5bdd1f) {

                    if (_0x42a2['netPlayConnected']) return !0x1;
                    var _0x356696 = _0x1971bf;
                    _0x2c0f6e['FS']['analyzePath']('/game.state')['exists'] && _0x2c0f6e['FS']['unlink']('game.state'), _0x2c0f6e['FS']['createDataFile']('/', 'game.state', _0x356696, !0x0, !0x0), null === _0x5bdd1f && (_0x5bdd1f = 0x0), _0x33642e('game.state', _0x5bdd1f), 'arcade' === _0x480a40 ? setTimeout(function () {

                        _0x42a2['getStateInfo'](), _0x33642e('game.state', _0x5bdd1f), _0x2c0f6e['FS']['unlink']('game.state');
                    }, 0xa) : _0x2c0f6e['FS']['unlink']('game.state'), _0x5a546d['elements']['container']['focus']();
                }, _0x2c0f6e['Module']['_set_cheat'] && (_0x42a2['setCheat'] = _0x2c0f6e['Module']['cwrap']('set_cheat', 'number', ['number', 'number', 'string'])), _0x42a2['resetCheat'] = _0x2c0f6e['Module']['_reset_cheat'] ? _0x2c0f6e['Module']['_reset_cheat'] : function () {}, _0x42a2['quickSaveState'] = function () {

                    if (_0x42a2['netPlayConnected']) return !0x1;
                    if (_0x5a546d['started'] && !_0x42a2['connected']) {
                        var _0x3f4aee = _0x42a2['saveState']();
                        try {
                            _0x2c0f6e['FS']['unlink']('quick.state');
                        } catch (_0x4c1828) {}
                        _0x2c0f6e['FS']['createDataFile']('/', 'quick.state', _0x3f4aee, !0x0, !0x0), _0x15423a['show'](_0x5a546d['elements']['container'], 'Quick Save');
                    }
                }, _0x42a2['quickLoadState'] = function () {

                    if (_0x42a2['netPlayConnected']) return !0x1;
                    if (_0x5a546d['started'] && !_0x42a2['connected']) try {
                        _0x33642e('quick.state', 0x0), 'arcade' === _0x480a40 && setTimeout(function () {

                            _0x42a2['getStateInfo'](), _0x33642e('quick.state', 0x0);
                        }, 0xa), _0x15423a['show'](_0x5a546d['elements']['container'], 'Quick Load');
                    } catch (_0x2176cd) {}
                }, _0x2c0f6e['Module']['_get_disk_num'] && (_0x42a2['getDiskNum'] = _0x2c0f6e['Module']['cwrap']('get_disk_num', 'number', [])), _0x2c0f6e['Module']['_set_disk'] && (_0x42a2['setDisk'] = _0x2c0f6e['Module']['cwrap']('set_disk', 'number', ['number'])), _0x2c0f6e['Module']['_eject_disk'] && (_0x42a2['ejectDisk'] = _0x2c0f6e['Module']['cwrap']('eject_disk', 'null', [])), _0x2c0f6e['Module']['_netplay_host'] && (_0x42a2['netPlayHost'] = _0x2c0f6e['Module']['cwrap']('netplay_host', 'number', ['string', 'string'])), _0x2c0f6e['Module']['_netplay_client'] && (_0x42a2['netPlayClient'] = _0x2c0f6e['Module']['cwrap']('netplay_client', 'number', ['string', 'string'])), _0x2c0f6e['Module']['_netplay_close'] && (_0x42a2['netPlayClose'] = _0x2c0f6e['Module']['cwrap']('netplay_close', 'number', [])), _0x2c0f6e['Module']['_netplay_new_user'] && (_0x42a2['netplayNewUser'] = _0x2c0f6e['Module']['cwrap']('netplay_new_user', 'number', [])), _0x2c0f6e['Module']['_netplay_push_data'] && (_0x42a2['netplayPushData'] = _0x2c0f6e['Module']['cwrap']('netplay_push_data', 'number', ['string', 'number'])), _0x2c0f6e['Module']['_get_content_crc'] && (_0x42a2['contentCrc32'] = _0x2c0f6e['Module']['cwrap']('get_content_crc', 'string', [])), _0x2c0f6e['Module']['_set_player_device'] && (_0x42a2['setPlayerDevice'] = _0x2c0f6e['Module']['cwrap']('set_player_device', 'number', ['number', 'number'])), window['EJS_loadState'] = function (_0x2a076c) {

                    _0x42a2['loadState'](_0x2a076c, 0x0);
                };
                var _0x575dc1 = _0x2c0f6e['Module']['cwrap']('cmd_take_screenshot', '', []);
                _0x42a2['getScreenData'] = function () {

                    return _0x42a2['toggleShader'](0x0), _0x575dc1(), _0x42a2['toggleShader'](0x1), _0x2c0f6e['FS']['readFile']('screenshot.png');
                }, _0x42a2['restartGame'] = _0x2c0f6e['Module']['cwrap']('system_restart', '', []), _0x42a2['currentFrameNum'] = _0x2c0f6e['Module']['cwrap']('get_current_frame_count', '', []), _0x2c0f6e['Module']['_cmd_savefiles'] && (_0x42a2['saveSavFiles'] = _0x2c0f6e['Module']['cwrap']('cmd_savefiles', '', [])), _0x2c0f6e['Module']['_get_core_options'] && (_0x42a2['getGameCoreOptions'] = _0x2c0f6e['Module']['cwrap']('get_core_options', 'string', [])), _0x42a2['systemPause'] = function (_0x4f7204) {
                    return !0x1;
                }, _0x42a2['controllers'] = _0x28f202['storage']['get']('controllers'), _0x42a2['controllers'] || (_0x42a2['controllers'] = _0x42a2['defaultControllers']), _0x42a2['remappingAxis'] = _0x28f202['storage']['get']('remappingAxis'), _0x42a2['remappingAxis'] || (_0x42a2['remappingAxis'] = {});
            }
        };
    Object['defineProperties'](_0x42a2, {
        'netPlayConnected': {
            'get': function () {
                return _0x42a2['_netPlayConnected'];
            },
            'set': function (_0x51a5f1) {

                _0x42a2['_netPlayConnected'] = _0x51a5f1, _0x42a2['netPlayConnectChange'](_0x51a5f1);
            }
        }
    });
    var _0x46cf61 = _0x42a2,
        _0xa436b2 = {
            'storage': null,
            'coreOptionsValues': {},
            'contextMenu': null,
            'normalOptions': {
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
                var _0x56bd2f = {};
                switch (this['system']) {
                    case 'pce':
                        _0x56bd2f = {
                            'pce_nospritelimit': 'enabled'
                        };
                        break;
                    case 'jaguar':
                        _0x56bd2f = {
                            'virtualjaguar_doom_res_hack': 'enabled'
                        };
                        break;
                    case 'psx':
                    case 'nds':
                        _0x56bd2f = {};
                        break;
                    case 'nes':
                        _0x56bd2f = {
                            'fceumm_turbo_enable': 'Both'
                        };
                }
                return _0x56bd2f;
            },
            'getCoreOptionsValues': function () {
                var _0x7f3a38 = _0xa436b2['storage']['get']('core-options');
                return I.empty(_0x7f3a38) && (_0x7f3a38 = {}), _0x7f3a38;
            },
            'getCoreOptions': function () {
                var _0x5aebb4 = {};
                switch (this['system']) {
                    case 'nes':
                        break;
                    case 'snes':
                        _0x5aebb4 = {};
                        break;
                    case 'snes2002':
                    case 'snes2005':
                    case 'snes2010':
                    case 'gb':
                    case 'gba':
                    case 'vbanext':
                    case 'n64':
                        _0x5aebb4 = {};
                        break;
                    case 'nds':
                        _0x5aebb4 = {}, _0x236fc8['wasm'] || delete _0x5aebb4['screen_rotation'];
                        break;
                    case 'vb':
                    case 'pce':
                        _0x5aebb4 = {};
                        break;
                    case 'segaMS':
                    case 'segaGG':
                    case 'segaMD':
                    case 'segaCD':
                    case 'sega32x':
                    case 'segaSaturn':
                        _0x5aebb4 = {};
                        break;
                    case 'msx':
                        break;
                    case 'ws':
                    case 'ngp':
                    case 'jaguar':
                    case 'psx':
                        _0x5aebb4 = {};
                        break;
                    case 'arcade':
                    case 'fba0.2.97.29':
                        _0x5aebb4 = {
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
                        _0x5aebb4 = {};
                        break;
                    default:
                        _0x5aebb4 = {};
                }
                return (_0x2c0f6e['shaders'] && I.obj(_0x2c0f6e['shaders']) && 0x0 < Object['keys'](_0x2c0f6e['shaders'])['length'] && (_0x5aebb4['shader'] = {
                    'label': 'Shader',
                    'options': {
                        'disabled': 'Disabled'
                    },
                    'default': 'disabled'
                }, Object['keys'](_0x2c0f6e['shaders'])['forEach'](function (_0x59193b) {

                    _0x5aebb4['shader']['options'][_0x59193b] = _0x59193b;
                })), _0x2c0f6e['coreOptions'] && Array['isArray'](_0x2c0f6e['coreOptions']) && _0x2c0f6e['coreOptions']['forEach'](function (_0xda4e73) {
                    var _0x24ae2d = _0xda4e73['key'];
                    _0x5aebb4[_0x24ae2d] = {
                        'label': _0xda4e73['label'],
                        'options': _0xda4e73['options'],
                        'default': _0xda4e73['default'],
                        'netplay': _0xda4e73['netplay']
                    };
                }), _0x46cf61['getGameCoreOptions']) && _0x46cf61['getGameCoreOptions']()['split']('\n')['forEach'](function (_0x13cb40) {
                    var _0x227015 = _0x13cb40['split']('; '),
                        _0x19254b = _0x227015[0x0];
                    if (0x0 === _0x19254b['indexOf']('fba-dipswitch-') || 0x0 === _0x19254b['indexOf']('fbneo-dipswitch-')) {
                        var _0x7db7c8 = _0x227015[0x1]['split']('|'),
                            _0x4e5ad6 = _0x19254b['replace'](/_/g, ' ')['replace'](/.+\-(.+)/, '$1'),
                            _0x422b0f = 0x0 == _0x19254b['indexOf']('fbneo-dipswitch-') ? _0x7db7c8['slice'](0x0, -0x1) : _0x7db7c8['slice'](0x1, -0x1),
                            _0x65e5f = _0x7db7c8[0x0]['replace']('(Default) ', '');
                        _0x5aebb4[_0x19254b] = {
                            'label': _0x4e5ad6,
                            'options': _0x422b0f,
                            'default': _0x65e5f,
                            'netplay': !0x0
                        };
                    }
                }), _0x5aebb4;
            },
            'supportNetPlay': function () {

                return !!_0x236fc8['websocket'] && ('segaGG' != this['system'] && (!this['lightgun'] && !this['mouse'] && 'openbor' != this['system']));
            },
            'isNetPlay': function () {},
            'findElements': function () {

                try {
                    return this['elements']['controls'] = _0x56b7e6['call'](this, this['config']['selectors']['controls']['wrapper']), this['elements']['buttons'] = {
                        'play': _0x5161da['call'](this, this['config']['selectors']['buttons']['play']),
                        'pause': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['pause']),
                        'restart': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['restart']),
                        'mute': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['mute']),
                        'settings': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['settings']),
                        'fullscreen': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['fullscreen']),
                        'saveState': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['saveState']),
                        'loadState': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['loadState']),
                        'disk': _0x56b7e6['call'](this, '[data-btn="disk"]'),
                        'gamepad': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['gamepad']),
                        'netplay': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['netplay']),
                        'cheat': _0x56b7e6['call'](this, this['config']['selectors']['buttons']['cheat'])
                    }, this['elements']['inputs'] = {
                        'volume': _0x56b7e6['call'](this, this['config']['selectors']['inputs']['volume'])
                    }, !0x0;
                } catch (_0x43215e) {
                    return this['debug']['warn']('It looks like there is a problem with your custom controls HTML', _0x43215e), !0x1;
                }
            },
            'createIcon': function (_0x568b84, _0x449642) {
                var _0xdbc282 = 'http://www.w3.org/2000/svg',
                    _0xb33714 = document['createElementNS'](_0xdbc282, 'svg');
                _0x3994a2(_0xb33714, _0x23c7cf(_0x449642, {
                    'role': 'presentation',
                    'focusable': 'false'
                }));
                var _0x554262 = document['createElementNS'](_0xdbc282, 'use'),
                    _0x2d4ea0 = '#ejs-' ['concat'](_0x568b84);
                return 'href' in _0x554262 ? _0x554262['setAttributeNS']('http://www.w3.org/1999/xlink', 'href', _0x2d4ea0) : _0x554262['setAttributeNS']('http://www.w3.org/1999/xlink', 'xlink:href', _0x2d4ea0), _0xb33714['appendChild'](_0x554262), _0xb33714;
            },
            'createLabel': function (_0x3632f9) {
                var _0x230862 = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : {},
                    _0x80edf9 = _0x1270d7(_0x3632f9, this['config']);
                'saveState' == _0x3632f9 && (_0x80edf9 += '<span class="' ['concat'](this['config']['classNames']['hotkey'], '"> (Shift + F2)</span>')), 'loadState' == _0x3632f9 && (_0x80edf9 += '<span class="' ['concat'](this['config']['classNames']['hotkey'], '"> (Shift + F4)</span>')), ('mute' == _0x3632f9 || 'unmute' == _0x3632f9) && (_0x80edf9 += '<span class="' ['concat'](this['config']['classNames']['hotkey'], '"> (F9)</span>'));
                var _0x8ed0eb = {};
                _0x8ed0eb[_0x230862['class']] = !0x0, _0x8ed0eb[this['config']['classNames']['hidden']] = !0x0;
                var _0x557531 = Object['assign']({}, _0x230862, {
                    'class': [_0x230862['class'], this['config']['classNames']['tooltip']]['filter'](Boolean)['join'](' ')
                });
                return _0x110b30('span', _0x557531, _0x80edf9);
            },
            'createBadge': function (_0x3b8922) {

                if (I.empty(_0x3b8922)) return null;
                var _0x19b99f = _0x110b30('span', {
                    'class': this['config']['classNames']['menu']['value']
                });
                return _0x19b99f['appendChild'](_0x110b30('span', {
                    'class': this['config']['classNames']['menu']['badge']
                }, _0x3b8922)), _0x19b99f;
            },
            'createButton': function (_0x166adf, _0x54cce4) {
                var _0x10ffd1, _0x378d35, _0x2b9139, _0x3e173c, _0x4d0a71 = _0x110b30('button'),
                    _0x4f9257 = Object['assign']({}, _0x54cce4),
                    _0x566fe8 = _0x21bd55(_0x166adf),
                    _0x285d8f = !0x1;
                'type' in _0x4f9257 || (_0x4f9257['type'] = 'button');
                var _0x547b91 = _0xa96c03({
                    'ejs__control': !0x0
                });
                return 'class' in _0x4f9257 ? !_0x4f9257['class']['includes'](_0x547b91) && (_0x4f9257['class'] += ' ' ['concat'](_0x547b91)) : _0x4f9257['class'] = _0x547b91, 'play' === _0x166adf ? (_0x285d8f = !0x0, _0x10ffd1 = 'play', _0x2b9139 = 'pause', _0x378d35 = 'play', _0x3e173c = 'pause') : 'mute' === _0x166adf ? (_0x285d8f = !0x0, _0x10ffd1 = 'mute', _0x2b9139 = 'unmute', _0x378d35 = 'volume', _0x3e173c = 'muted') : 'fullscreen' === _0x166adf ? (_0x285d8f = !0x0, _0x10ffd1 = 'enterFullscreen', _0x2b9139 = 'exitFullscreen', _0x378d35 = 'enter-fullscreen', _0x3e173c = 'exit-fullscreen') : (_0x10ffd1 = _0x566fe8, _0x378d35 = _0x166adf), _0x285d8f ? (_0x4d0a71['appendChild'](_0xa436b2['createIcon']['call'](this, _0x3e173c, {
                    'class': _0xa96c03({
                        'icon--pressed': !0x0
                    })
                })), _0x4d0a71['appendChild'](_0xa436b2['createIcon']['call'](this, _0x378d35, {
                    'class': _0xa96c03({
                        'icon--not-pressed': !0x0
                    })
                })), _0x4d0a71['appendChild'](_0xa436b2['createLabel']['call'](this, _0x2b9139, {
                    'class': _0xa96c03({
                        'icon--pressed': !0x0
                    })
                })), _0x4d0a71['appendChild'](_0xa436b2['createLabel']['call'](this, _0x10ffd1, {
                    'class': _0xa96c03({
                        'icon--not-pressed': !0x0
                    })
                }))) : (_0x4d0a71['appendChild'](_0xa436b2['createIcon']['call'](this, _0x378d35)), _0x4d0a71['appendChild'](_0xa436b2['createLabel']['call'](this, _0x10ffd1))), _0x23c7cf(_0x4f9257, _0x3db346(this['config']['selectors']['buttons'][_0x566fe8], _0x4f9257)), _0x3994a2(_0x4d0a71, _0x4f9257), 'play' === _0x566fe8 ? (!I.array(this['elements']['buttons'][_0x566fe8]) && (this['elements']['buttons'][_0x566fe8] = []), this['elements']['buttons'][_0x566fe8]['push'](_0x4d0a71)) : this['elements']['buttons'][_0x566fe8] = _0x4d0a71, _0x4d0a71;
            },
            'createRange': function (_0x72cf6a, _0x30d00e) {
                var _0x3a07d4 = _0x110b30('input', _0x23c7cf(_0x3db346(this['config']['selectors']['inputs'][_0x72cf6a]), {
                    'type': 'range',
                    'min': 0x0,
                    'max': 0x64,
                    'step': 0.1,
                    'value': 0x0,
                    'autocomplete': 'off',
                    'role': 'slider',
                    'aria-label': _0x1270d7(_0x72cf6a, this['config']),
                    'aria-valuemin': 0x0,
                    'aria-valuemax': 0x64,
                    'aria-valuenow': 0x0
                }, _0x30d00e));
                return this['elements']['inputs'][_0x72cf6a] = _0x3a07d4, _0xa436b2['updateRangeFill']['call'](this, _0x3a07d4), _0x3a07d4;
            },
            'bindMenuItemShortcuts': function (_0x532271, _0x544e6e) {
                var _0x14a22a = this;
                _0x58fce2(_0x532271, 'keydown keyup', function (_0x2af7ff) {

                    if ([0x20, 0x26, 0x27, 0x28]['includes'](_0x2af7ff['which']) && (_0x2af7ff['preventDefault'](), _0x2af7ff['stopPropagation'](), 'keydown' !== _0x2af7ff['type'])) {
                        var _0x5c340e, _0x31c7e4 = _0x4e2906(_0x532271, '[role="menuitemradio"]');
                        if (!_0x31c7e4 && [0x20, 0x27]['includes'](_0x2af7ff['which'])) _0xa436b2['showMenuPanel']['call'](_0x14a22a, _0x544e6e, !0x0);
                        else 0x20 !== _0x2af7ff['which'] && (0x28 === _0x2af7ff['which'] || _0x31c7e4 && 0x27 === _0x2af7ff['which'] ? (_0x5c340e = _0x532271['nextElementSibling'], !I.elm(_0x5c340e) && (_0x5c340e = _0x532271['parentNode']['firstElementChild'])) : (_0x5c340e = _0x532271['previousElementSibling'], !I.elm(_0x5c340e) && (_0x5c340e = _0x532271['parentNode']['lastElementChild'])), _0x173c20['call'](_0x14a22a, _0x5c340e, !0x0));
                    }
                }, !0x1), _0x58fce2(_0x532271, 'keyup', function (_0x4a9be9) {

                    0xd !== _0x4a9be9['which'] || _0xa436b2['focusFirstMenuItem']['call'](_0x14a22a, null, !0x0);
                });
            },
            'createMenuItem': function (_0x168368) {
                var _0x1383de = this,
                    _0xc73cef = _0x168368['value'],
                    _0x3392f5 = _0x168368['list'],
                    _0x2beee2 = _0x168368['type'],
                    _0x538dd4 = _0x168368['title'],
                    _0x157e0b = _0x168368['badge'],
                    _0x3bd27a = void 0x0 === _0x157e0b ? null : _0x157e0b,
                    _0x429746 = _0x168368['checked'],
                    _0x4aee3d = _0x3db346(this['config']['selectors']['inputs'][_0x2beee2]),
                    _0x417a26 = _0x110b30('button', _0x23c7cf(_0x4aee3d, {
                        'type': 'button',
                        'role': 'menuitemradio',
                        'class': '' ['concat'](this['config']['classNames']['control'], ' ')['concat'](_0x4aee3d['class'] ? _0x4aee3d['class'] : '')['trim'](),
                        'aria-checked': void 0x0 !== _0x429746 && _0x429746,
                        'value': _0xc73cef
                    })),
                    _0x144f0c = _0x110b30('span');
                _0x144f0c['innerHTML'] = _0x538dd4, I.elm(_0x3bd27a) && _0x144f0c['appendChild'](_0x3bd27a), _0x417a26['appendChild'](_0x144f0c), Object['defineProperty'](_0x417a26, 'checked', {
                    'enumerable': !0x0,
                    'get': function () {

                        return 'true' === _0x417a26['getAttribute']('aria-checked');
                    },
                    'set': function (_0x3fc4fd) {

                        _0x3fc4fd && Array['from'](_0x417a26['parentNode']['children'])['filter'](function (_0x49676b) {

                            return _0x4e2906(_0x49676b, '[role="menuitemradio"]');
                        })['forEach'](function (_0x5b6d6a) {

                            return _0x5b6d6a['setAttribute']('aria-checked', 'false');
                        }), _0x417a26['setAttribute']('aria-checked', _0x3fc4fd ? 'true' : 'false');
                    }
                });
                var _0x5230fc = _0xa436b2['getCoreOptions']['call'](this);
                this['listeners']['bind'](_0x417a26, 'click keyup', function (_0xdeebd3) {

                    I.IF(_0xdeebd3, 18) && 0x20 !== _0xdeebd3['which'] || (_0xdeebd3['preventDefault'](), _0xdeebd3['stopPropagation'](), _0x417a26['checked'] = !0x0, Object['keys'](_0xa436b2['normalOptions'])['includes'](_0x2beee2) && _0xa436b2['updateNormalOptions']['call'](_0x1383de, _0x2beee2, _0xc73cef), Object['keys'](_0x5230fc)['includes'](_0x2beee2) && (_0x5230fc[_0x2beee2]['netplay'] && _0x46cf61['connected'] || _0xa436b2['updateCoreOptions']['call'](_0x1383de, _0x2beee2, _0xc73cef)), _0xa436b2['showMenuPanel']['call'](_0x1383de, 'home', I.IF(_0xdeebd3, 18)));
                }, _0x2beee2, !0x1), _0xa436b2['bindMenuItemShortcuts']['call'](this, _0x417a26, _0x2beee2), _0x3392f5['appendChild'](_0x417a26);
            },
            'updateVolume': function () {

                I.elm(this['elements']['inputs']['volume']) && _0xa436b2['setRange']['call'](this, this['elements']['inputs']['volume'], this['muted'] ? 0x0 : this['volume']), I.elm(this['elements']['buttons']['mute']) && (this['elements']['buttons']['mute']['pressed'] = this['muted'] || 0x0 === this['volume']);
            },
            'setRange': function (_0x1c3ef7) {
                var _0x7a3c97 = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x0;
                I.elm(_0x1c3ef7) && (_0x1c3ef7['value'] = _0x7a3c97, _0xa436b2['updateRangeFill']['call'](this, _0x1c3ef7));
            },
            'updateRangeFill': function (_0x44c215) {
                var _0x59885b = I.IF(_0x44c215, 17) ? _0x44c215['target'] : _0x44c215;
                if (I.elm(_0x59885b) && 'range' === _0x59885b['getAttribute']('type')) {
                    if (_0x4e2906(_0x59885b, this['config']['selectors']['inputs']['volume'])) {
                        var _0x41f0a7 = 0x64 * _0x59885b['value'];
                        _0x59885b['setAttribute']('aria-valuenow', _0x41f0a7), _0x59885b['setAttribute']('aria-valuetext', '' ['concat'](_0x41f0a7['toFixed'](0x1), '%'));
                    } else _0x59885b['setAttribute']('aria-valuenow', _0x59885b['value']);
                    _0x53be21['isWebkit'] && _0x59885b['style']['setProperty']('--value', '' ['concat'](_0x59885b['value'] / _0x59885b['max'] * 0x64, '%'));
                }
            },
            'toggleMenuButton': function (_0x1d759c, _0x2deb08) {

                _0x9268bd(this['elements']['settings']['buttons'][_0x1d759c], !_0x2deb08);
            },
            'updateNormalOptions': function (_0x5c17c1, _0x11d919) {

                this['elements']['settings']['buttons'][_0x5c17c1]['querySelector']('.' ['concat'](this['config']['classNames']['menu']['value']))['innerHTML'] = _0xa436b2['normalOptions'][_0x5c17c1]['options'][_0x11d919];
                var _0x3945e7 = {};
                _0x3945e7[_0x5c17c1] = _0x11d919, _0xa436b2['storage']['set'](_0x3945e7), 'shader' === _0x5c17c1 && _0x46cf61['setShader'](_0x11d919), 'virtual-gamepad' === _0x5c17c1 && _0x46cf61['toggleVirtualGamepad']['call'](this, 'enabled' === _0x11d919);
            },
            'updateCoreOptions': function (_0x54219b, _0x1eddd5) {

                if ('nds' == this['system'] && !_0x236fc8['wasm']) return !0x0;
                var _0x2ac9cc;
                if (_0xa436b2['coreOptionsValues'][_0x54219b] = _0x1eddd5, 'controller-device' === _0x54219b && 0x0 != _0x2c0f6e['coreOptions']['filter'](function (_0x1ea4af) {

                        return 'controller-device' == _0x1ea4af['key'];
                    })['length']) {
                    for (_0x2ac9cc = 0x0; 0x4 > _0x2ac9cc; _0x2ac9cc++) _0x46cf61['setPlayerDevice'](_0x2ac9cc, _0x1eddd5);
                }
                if ('shader' === _0x54219b && _0x2c0f6e['shaders'] && I.obj(_0x2c0f6e['shaders']) && 0x0 < Object['keys'](_0x2c0f6e['shaders'])['length']) {
                    if ('disabled' != _0x1eddd5) {
                        var _0x2cfe0d = '/shaders/';
                        var shaderData = _0x2c0f6e['shaders'][_0x1eddd5];
                        _0x2c0f6e['FS']['writeFile']('/shader/shader.glslp', _0x2c0f6e['FS']['readFile'](_0x2cfe0d + shaderData[0]));
                        _0x2c0f6e['FS']['writeFile']('/shader/' + shaderData[1], _0x2c0f6e['FS']['readFile'](_0x2cfe0d + shaderData[1]));
                        _0x46cf61['toggleShader'] && _0x46cf61['toggleShader'](0x1);
                    } else _0x46cf61['toggleShader'] && _0x46cf61['toggleShader'](0x0);
                }
                if ('psx' === this['system'] ? setTimeout(function () {

                        'pcsx_rearmed_frameskip' != _0x54219b && 'pcsx_rearmed_memcard2' != _0x54219b && _0x46cf61['setVariable'](_0x54219b, _0x1eddd5);
                    }, 0x64) : 'fmsx' !== this['system'] && setTimeout(function () {

                        _0x46cf61['setVariable'](_0x54219b, _0x1eddd5);
                    }, 0x32), 'nds' === this['system'] && _0x236fc8['wasm']) {
                    var _0x36c884 = this['elements']['wrapper']['querySelector']('canvas');
                    'screen_rotation' === _0x54219b && (_0x36c884['style']['transform'] = 'rotate(' + _0x1eddd5 + 'deg)', '0' === _0x1eddd5 ? _0x46cf61['setVariable']('desmume_input_rotation', '0') : '90' === _0x1eddd5 ? _0x46cf61['setVariable']('desmume_input_rotation', '270') : '180' === _0x1eddd5 ? _0x46cf61['setVariable']('desmume_input_rotation', '180') : '270' === _0x1eddd5 && _0x46cf61['setVariable']('desmume_input_rotation', '90'), _0xa436b2['fixNdsSize']['call'](this));
                }
                if ('nds' == this['system'] && 'desmume_screens_layout' == _0x54219b && _0xa436b2['fixNdsSize']['call'](this), 'arcade' === this['system'] || 'fba0.2.97.29' === this['system']) {
                    var _0x40700d = this['elements']['wrapper']['querySelector']('canvas');
                    _0x40700d['height'] = 'fba-aspect' === _0x54219b && 'PAR' === _0x1eddd5 ? _0x40700d['width'] / 0x10 * 0x9 : _0x40700d['width'] / 0x4 * 0x3;
                }
                var _0x78aef7 = _0xa436b2['getCoreOptions']['call'](this),
                    _0x2f2543 = _0xa436b2['storage']['get']('core-options');
                (I.empty(_0x2f2543) && (_0x2f2543 = {}), 0x0 !== _0x54219b['indexOf']('fba-cheat-') && 0x0 !== _0x54219b['indexOf']('fbneo-cheat-') && (_0x2f2543[_0x54219b] = _0x1eddd5, _0xa436b2['storage']['set']({
                    'core-options': _0x2f2543
                })), this['elements']['settings']['buttons'][_0x54219b]) && (this['elements']['settings']['buttons'][_0x54219b]['querySelector']('.' ['concat'](this['config']['classNames']['menu']['value']))['innerHTML'] = I.obj(_0x78aef7[_0x54219b]['options']) ? _0x78aef7[_0x54219b]['options'][_0x1eddd5] : _0x1eddd5);
            },
            'setOptionMenuItem': function (_0x502778, _0x48efc2) {
                var _0x41589c = this,
                    _0x207444 = this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]'),
                    _0x42d024 = this['elements']['settings']['popup']['children'][0x0];
                Object['keys'](_0x502778)['forEach'](function (_0x50862f) {
                    var _0x10abf4 = _0x50862f;
                    if (!_0x207444['querySelector']('[item="' ['concat'](_0x50862f, '"]'))) {
                        var _0x17c369 = _0x110b30('button', _0x23c7cf(_0x3db346(_0x41589c['config']['selectors']['buttons']['settings']), {
                            'type': 'button',
                            'class': _0xa96c03({
                                'ejs__control': !0x0,
                                'ejs__control--forward': !0x0
                            }),
                            'role': 'menuitem',
                            'item': _0x50862f,
                            'aria-haspopup': !0x0
                        }));
                        _0x58fce2(_0x17c369, 'click', function () {

                            _0xa436b2['showMenuPanel']['call'](_0x41589c, _0x10abf4, !0x1);
                        });
                        var _0x36ba19, _0x379821 = _0x110b30('span', null, _0x502778[_0x50862f]['label']),
                            _0x33de54 = _0x110b30('span', {
                                'class': _0x41589c['config']['classNames']['menu']['value']
                            });
                        I.obj(_0x48efc2) && (_0x36ba19 = _0x48efc2[_0x10abf4]), I.empty(_0x36ba19) && (_0x36ba19 = _0x502778[_0x10abf4]['default']), _0x33de54['innerHTML'] = I.obj(_0x502778[_0x10abf4]['options']) ? _0x502778[_0x10abf4]['options'][_0x36ba19] : _0x36ba19, _0x379821['appendChild'](_0x33de54), _0x17c369['appendChild'](_0x379821), 'shader' == _0x50862f ? _0x207444['insertAdjacentElement']('afterbegin', _0x17c369) : _0x207444['appendChild'](_0x17c369);
                        var _0x356b60 = _0x110b30('div', {
                                'data-pane': escape(_0x10abf4),
                                'hidden': ''
                            }),
                            _0x3906a6 = _0x110b30('button', {
                                'type': 'button',
                                'class': _0xa96c03({
                                    'ejs__control': !0x0,
                                    'ejs__control--back': !0x0
                                })
                            });
                        _0x3906a6['appendChild'](_0x110b30('span', {
                            'aria-hidden': !0x0
                        }, _0x502778[_0x50862f]['label'])), _0x3906a6['appendChild'](_0x110b30('span', {
                            'class': _0xa96c03({
                                'ejs__sr-only': !0x0
                            })
                        }, _0x1270d7('menuBack', _0x41589c['config']))), _0x58fce2(_0x356b60, 'keydown', function (_0x1953cb) {

                            0x25 !== _0x1953cb['which'] || (_0x1953cb['preventDefault'](), _0x1953cb['stopPropagation'](), _0xa436b2['showMenuPanel']['call'](_0x41589c, 'home', !0x0));
                        }, !0x1), _0x58fce2(_0x3906a6, 'click', function () {

                            _0xa436b2['showMenuPanel']['call'](_0x41589c, 'home', !0x1);
                        }), _0x356b60['appendChild'](_0x3906a6), _0x356b60['appendChild'](_0x110b30('div', {
                            'role': 'menu'
                        })), _0x42d024['appendChild'](_0x356b60), _0x41589c['elements']['settings']['buttons'][_0x10abf4] = _0x17c369, _0x41589c['elements']['settings']['panels'][_0x10abf4] = _0x356b60;
                        var _0x31795a = _0x356b60['querySelector']('[role="menu"]');
                        (function (_0x4d68a9) {

                            if (I.elm(_0x4d68a9)) {
                                for (var _0x592c81 = _0x4d68a9['childNodes']['length']; 0x0 < _0x592c81;) _0x4d68a9['removeChild'](_0x4d68a9['lastChild']), _0x592c81 -= 0x1;
                            }
                        }(_0x31795a), I.obj(_0x502778[_0x50862f]['options']) ? Object['keys'](_0x502778[_0x50862f]['options'])['forEach'](function (_0x3df7c3) {

                            _0xa436b2['createMenuItem']['call'](_0x41589c, {
                                'value': _0x3df7c3,
                                'list': _0x31795a,
                                'type': _0x10abf4,
                                'title': _0x502778[_0x50862f]['options'][_0x3df7c3],
                                'badge': null,
                                'checked': _0x36ba19 === _0x3df7c3
                            });
                        }) : I.array(_0x502778[_0x50862f]['options']) && _0x502778[_0x50862f]['options']['forEach'](function (_0x37f4a2) {

                            _0xa436b2['createMenuItem']['call'](_0x41589c, {
                                'value': _0x37f4a2,
                                'list': _0x31795a,
                                'type': _0x10abf4,
                                'title': _0x37f4a2,
                                'badge': null,
                                'checked': _0x36ba19 === _0x37f4a2
                            });
                        }));
                    }
                });
            },
            'setNormalOptionsMenu': function () {
                var _0x2cdebf = this,
                    _0x3465f5 = this,
                    _0xc963ec = {};
                _0xc963ec['orientation'] = _0xa436b2['storage']['get']('orientation'), _0xc963ec['shader'] = _0xa436b2['storage']['get']('shader'), _0x3465f5['touch'] ? (_0x46cf61['toggleVirtualGamepad']['call'](_0x3465f5, !0x1), _0xc963ec['virtual-gamepad'] = _0xa436b2['storage']['get']('virtual-gamepad'), _0x58fce2['call'](_0x3465f5, _0x3465f5['elements']['container'], 'start-game', function () {

                    ('enabled' === _0xc963ec['virtual-gamepad'] || I.empty(_0xc963ec['virtual-gamepad'])) && _0x46cf61['toggleVirtualGamepad']['call'](_0x3465f5, !0x0);
                })) : delete _0xa436b2['normalOptions']['virtual-gamepad'], _0xa436b2['setOptionMenuItem']['call'](this, _0xa436b2['normalOptions'], _0xc963ec), _0x58fce2['call'](_0x3465f5, _0x3465f5['elements']['container'], 'start-game', function () {
                    var _0x31140c = {};
                    (_0x2c0f6e['shaders'] && I.obj(_0x2c0f6e['shaders']) && 0x0 < Object['keys'](_0x2c0f6e['shaders'])['length'] && (_0x31140c['shader'] = {
                        'label': 'Shader',
                        'options': {
                            'disabled': 'Disabled'
                        },
                        'default': 'disabled'
                    }, Object['keys'](_0x2c0f6e['shaders'])['forEach'](function (_0x13737b) {

                        _0x31140c['shader']['options'][_0x13737b] = _0x13737b;
                    })), _0x2c0f6e['coreOptions'] && Array['isArray'](_0x2c0f6e['coreOptions']) && _0x2c0f6e['coreOptions']['forEach'](function (_0x4c544d) {
                        var _0x168abb = _0x4c544d['key'];
                        _0x31140c[_0x168abb] = {
                            'label': _0x4c544d['label'],
                            'options': _0x4c544d['options'],
                            'default': _0x4c544d['default'],
                            'netplay': _0x4c544d['netplay']
                        };
                    }), 'nds' != _0x3465f5['system'] || _0x236fc8['wasm'] || delete _0x31140c['screen_rotation'], _0x46cf61['getGameCoreOptions']) && _0x46cf61['getGameCoreOptions']()['split']('\n')['forEach'](function (_0x2ed58c) {
                        var _0x9b1426 = _0x2ed58c['split']('; '),
                            _0x4680c6 = _0x9b1426[0x0];
                        if (0x0 === _0x4680c6['indexOf']('fba-dipswitch-') || 0x0 === _0x4680c6['indexOf']('fbneo-dipswitch-')) {
                            var _0x2ddd07 = _0x9b1426[0x1]['split']('|'),
                                _0x4b6491 = _0x4680c6['replace'](/_/g, ' ')['replace'](/.+\-(.+)/, '$1'),
                                _0x546520 = 0x0 == _0x4680c6['indexOf']('fbneo-dipswitch-') ? _0x2ddd07['slice'](0x0, -0x1) : _0x2ddd07['slice'](0x1, -0x1),
                                _0x599396 = _0x2ddd07[0x0]['replace']('(Default) ', '');
                            _0x31140c[_0x4680c6] = {
                                'label': _0x4b6491,
                                'options': _0x546520,
                                'default': _0x599396,
                                'netplay': !0x0
                            };
                        }
                    });
                    var _0x17b758 = _0xa436b2['storage']['get']('core-options');
                    _0xa436b2['coreOptionsValues'] = _0x17b758 || {}, _0xa436b2['setOptionMenuItem']['call'](_0x3465f5, _0x31140c, _0xa436b2['coreOptionsValues']), Object['keys'](_0xa436b2['coreOptionsValues'])['forEach'](function (_0x29dfce) {

                        _0xa436b2['updateCoreOptions']['call'](_0x2cdebf, _0x29dfce, _0xa436b2['coreOptionsValues'][_0x29dfce]);
                    });
                });
            },
            'updateCoreOptionMenuItems': function () {
                var _0x40f455 = this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]'),
                    _0x2ed73c = _0xa436b2['getCoreOptions']['call'](this);
                _0x46cf61['connected'] ? Object['keys'](_0x2ed73c)['forEach'](function (_0x1208eb) {

                    _0x2ed73c[_0x1208eb]['netplay'] && _0x40f455['querySelector']('[item="' ['concat'](_0x1208eb, '"]'))['setAttribute']('disabled', '');
                }) : Object['keys'](_0x2ed73c)['forEach'](function (_0x2b4974) {

                    _0x40f455['querySelector']('[item="' ['concat'](_0x2b4974, '"]'))['removeAttribute']('disabled');
                });
            },
            'setCoreOptionsMenu': function () {

                this['elements']['settings']['panels']['home']['querySelector']('[role="menu"]'), this['elements']['settings']['popup']['children'][0x0];
                var _0x58a74a = _0xa436b2['getCoreOptions']['call'](this),
                    _0x1afd0e = _0xa436b2['storage']['get']('core-options');
                _0xa436b2['coreOptionsValues'] = _0x1afd0e || {}, _0xa436b2['setOptionMenuItem']['call'](this, _0x58a74a, _0x1afd0e);
            },
            'checkMenu': function () {
                var _0x8c12be = this['elements']['settings']['buttons'];
                !I.empty(_0x8c12be) && Object['values'](_0x8c12be)['some'](function (_0x48e621) {

                    return !_0x48e621['hidden'];
                }), _0x9268bd(this['elements']['settings']['menu'], !0x1);
            },
            'focusFirstMenuItem': function (_0x1142dc) {
                var _0x1f9ddd = !!(0x1 < arguments['length'] && void 0x0 !== arguments[0x1]) && arguments[0x1];
                if (!this['elements']['settings']['popup']['hidden']) {
                    var _0x41e163 = _0x1142dc;
                    I.elm(_0x41e163) || (_0x41e163 = Object['values'](this['elements']['settings']['panels'])['find'](function (_0x562be5) {

                        return !_0x562be5['hidden'];
                    }));
                    var _0xdc1add = _0x41e163['querySelector']('[role^="menuitem"]');
                    _0x173c20['call'](this, _0xdc1add, _0x1f9ddd);
                }
            },
            'toggleMenu': function (_0x1923bd) {
                var _0x16f0a8 = this['elements']['settings']['popup'],
                    _0x33bdfa = this['elements']['buttons']['settings'];
                if (I.elm(_0x16f0a8) && I.elm(_0x33bdfa)) {
                    var _0x50ad54 = _0x16f0a8['hidden'],
                        _0x254f41 = _0x50ad54;
                    if (I.bool(_0x1923bd)) _0x254f41 = _0x1923bd;
                    else {
                        if (I.IF(_0x1923bd, 18) && 0x1b === _0x1923bd['which']) _0x254f41 = !0x1;
                        else {
                            if (I.IF(_0x1923bd, 17)) {
                                var _0x2a7d2f = _0x16f0a8['contains'](_0x1923bd['target']);
                                if (_0x2a7d2f || !_0x2a7d2f && _0x1923bd['target'] !== _0x33bdfa && _0x254f41) return;
                            }
                        }
                    }
                    _0x33bdfa['setAttribute']('aria-expanded', _0x254f41), _0x9268bd(_0x16f0a8, !_0x254f41), _0x5149bc(this['elements']['container'], this['config']['classNames']['menu']['open'], _0x254f41), _0x254f41 && I.IF(_0x1923bd, 18) ? _0xa436b2['focusFirstMenuItem']['call'](this, null, !0x0) : !_0x254f41 && !_0x50ad54 && _0x173c20['call'](this, _0x33bdfa, I.IF(_0x1923bd, 18));
                }
            },
            'getMenuSize': function (_0x561935) {
                var _0x56f777 = _0x561935['cloneNode'](!0x0);
                _0x56f777['style']['position'] = 'absolute', _0x56f777['style']['opacity'] = 0x0, _0x56f777['removeAttribute']('hidden'), _0x561935['parentNode']['appendChild'](_0x56f777);
                var _0x5bc00d = _0x56f777['scrollWidth'],
                    _0xbcb352 = _0x56f777['scrollHeight'];
                return _0x353481(_0x56f777), {
                    'width': _0x5bc00d,
                    'height': _0xbcb352
                };
            },
            'showLoadStatePanel': function () {},
            'showMenuPanel': function () {
                var _0x332d95 = this,
                    _0x5b7cc9 = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '',
                    _0x518f84 = !!(0x1 < arguments['length'] && void 0x0 !== arguments[0x1]) && arguments[0x1],
                    _0xf9227 = _0x56b7e6['call'](this, '[data-pane="' ['concat'](escape(_0x5b7cc9), '"]'));
                if (I.elm(_0xf9227)) {
                    var _0x29b292 = _0xf9227['parentNode'],
                        _0x3b5e7b = Array['from'](_0x29b292['children'])['find'](function (_0x292697) {

                            return !_0x292697['hidden'];
                        });
                    if (_0x236fc8['transitions'] && !_0x236fc8['reducedMotion']) {
                        _0x29b292['style']['width'] = '' ['concat'](_0x3b5e7b['scrollWidth'], 'px'), _0x29b292['style']['height'] = '' ['concat'](_0x3b5e7b['scrollHeight'], 'px');
                        var _0x4042ad = _0xa436b2['getMenuSize']['call'](this, _0xf9227),
                            _0x2909cd = function _0x13d897(_0x122b93) {

                                _0x122b93['target'] === _0x29b292 && ['width', 'height']['includes'](_0x122b93['propertyName']) && (_0x29b292['style']['width'] = '', _0x29b292['style']['height'] = '', _0x1c7f8f['call'](_0x332d95, _0x29b292, _0x4dc472, _0x13d897));
                            };
                        _0x58fce2['call'](this, _0x29b292, _0x4dc472, _0x2909cd), _0x29b292['style']['width'] = '' ['concat'](_0x4042ad['width'], 'px'), _0x29b292['style']['height'] = '' ['concat'](_0x4042ad['height'], 'px');
                    }
                    _0x9268bd(_0x3b5e7b, !0x0), _0x9268bd(_0xf9227, !0x1), _0xa436b2['focusFirstMenuItem']['call'](this, _0xf9227, _0x518f84);
                }
            },
            'setLoadState': function (_0x5c2407) {

                _0x5c2407['appendChild'](_0xa436b2['createButton']['call'](this, 'load-state', {
                    'aria-haspopup': !0x0,
                    'aria-expanded': !0x1
                }));
                var _0x53f9af = _0x110b30('div', {
                        'class': _0xa96c03({
                            'ejs__dialog': !0x0,
                            'ejs__load-state__container': !0x0
                        }),
                        'hidden': ''
                    }),
                    _0x2a8d0a = T.$ce('div');
                _0x53f9af['appendChild'](_0x2a8d0a), _0x56b7e6['call'](this, getClassName('ejs__dialogs', !0))['appendChild'](_0x53f9af), this['elements']['dialogs']['loadState'] = _0x53f9af;
            },
            'setDisk': function (_0x2496d9) {
                var _0x578943 = T.$ct('div', null, getClassName({
                    'ejs__disk': !0x0
                }));
                _0x578943['appendChild'](_0xa436b2['createButton']['call'](this, 'disk', {
                    'aria-haspopup': !0x0,
                    'aria-expanded': !0x1
                }));
                var _0x488d7f = _0x110b30('div', {
                        'class': _0xa96c03({
                            'ejs__disk__container': !0x0
                        }),
                        'hidden': ''
                    }),
                    _0x22a449 = T.$ce('div');
                _0x488d7f['appendChild'](_0x22a449), _0x578943['appendChild'](_0x488d7f), _0x2496d9['appendChild'](_0x578943);
            },
            'setGamepad': function (_0x271dfd) {
                var _0x24b1ec = _0xa436b2['createButton']['call'](this, 'gamepad', {
                    'aria-haspopup': !0x0,
                    'aria-expanded': !0x1
                });
                _0x271dfd['appendChild'](_0x24b1ec);
                var _0x13157a = _0x110b30('div', {
                        'class': _0xa96c03({
                            'ejs__dialog': !0x0,
                            'ejs__gamepad__container': !0x0
                        }),
                        'hidden': ''
                    }),
                    _0x11840f = T.$ce('div');
                _0x13157a['appendChild'](_0x11840f), _0x56b7e6['call'](this, getClassName('ejs__dialogs', !0))['appendChild'](_0x13157a), this['elements']['dialogs']['gamepad'] = _0x13157a;
            },
            'setCheat': function (_0x7604c0) {
                var _0x3f6b65 = _0xa436b2['createButton']['call'](this, 'cheat', {
                    'aria-haspopup': !0x0,
                    'aria-expanded': !0x1
                });
                _0x7604c0['appendChild'](_0x3f6b65);
                var _0x3aa0c3 = _0x110b30('div', {
                        'class': _0xa96c03({
                            'ejs__dialog': !0x0,
                            'ejs__cheat__container': !0x0
                        }),
                        'hidden': ''
                    }),
                    _0x46cc1f = T.$ce('div');
                _0x3aa0c3['appendChild'](_0x46cc1f), _0x56b7e6['call'](this, getClassName('ejs__dialogs', !0))['appendChild'](_0x3aa0c3), this['elements']['dialogs']['cheat'] = _0x3aa0c3;
            },
            'setNetplayWidgets': function () {
                var _0x4c7a9a = _0x110b30('div', {
                        'class': _0xa96c03({
                            'ejs__widget': !0x0,
                            'ejs__widget_netplay': !0x0
                        })
                    }),
                    _0x1552c0 = T.$ce('div');
                _0x4c7a9a['appendChild'](_0x1552c0), _0x56b7e6['call'](this, getClassName('ejs__widgets', !0))['appendChild'](_0x4c7a9a), this['elements']['widgets']['netplay'] = _0x4c7a9a;
            },
            'setControllToggleWidgets': function () {
                var _0x13e4bc = this,
                    _0x16cec9 = this,
                    _0x1ca5e6 = _0x110b30('div', {
                        'class': _0xa96c03({
                            'ejs__widget': !0x0,
                            'ejs__widget_controls_toggle': !0x0
                        })
                    }, '<svg role="presentation" focusable="false"><use xlink:href="#ejs-drop-down"></use></svg>'),
                    _0x5a6529 = T.$ce('div');
                _0x1ca5e6['appendChild'](_0x5a6529), _0x56b7e6['call'](this, getClassName('ejs__widgets', !0))['appendChild'](_0x1ca5e6), this['elements']['widgets']['controlToggle'] = _0x1ca5e6, _0x58fce2(this['elements']['container'], 'click touchstart', function (_0x6d12a6) {

                    return !!_0x16cec9['started'] && void(!_0x13e4bc['elements']['controls']['contains'](_0x6d12a6['target']) && !_0x1ca5e6['contains'](_0x6d12a6['target']) && (_0x9268bd(_0x13e4bc['elements']['controls']['querySelector'](getClassName('ejs__menu__container', !0)), !0x0), _0x514a8c['toggleControls']['call'](_0x13e4bc, !0x1), _0x13e4bc['elements']['controls']['classList']['toggle'](_0xa96c03({
                        'ejs__controls_show': !0x0
                    }), !0x1)));
                }), _0x58fce2(_0x1ca5e6, 'click', function (_0x5f1560) {

                    _0x13e4bc['elements']['controls']['classList']['toggle'](_0xa96c03({
                        'ejs__controls_show': !0x0
                    })), _0x5f1560['stopPropagation']();
                }), _0x58fce2['call'](_0x16cec9, _0x16cec9['elements']['container'], 'start-game', function () {

                    _0x46cf61['saveSavFiles'] && _0x46cf61['saveSavFiles']();
                    var _0x21bd0b = 'srm';
                    'nds' === _0x16cec9['system'] && (_0x21bd0b = 'dsv'), ['melonds', 'zc210']['includes'](_0x16cec9['system']) && (_0x21bd0b = 'sav');
                    var _0xba1ab0 = _0x16cec9['startName']['split']('/')['pop']()['split']('.'),
                        _0x32dce3 = _0xba1ab0['slice'](0x0, _0xba1ab0['length'] - 0x1)['join']('.'),
                        _0x4cef4a = _0x2c0f6e['FS']['analyzePath']('/data/saves/' ['concat'](_0x16cec9['savepath'], '/')['concat'](_0x32dce3, '.')['concat'](_0x21bd0b));
                    if (_0x4cef4a['exists']) {
                        var _0x5d1f74 = _0x110b30('div', {
                                'class': _0xa96c03({
                                    'ejs__widget': !0x0,
                                    'ejs__widget_load_srm': !0x0
                                }),
                                'title': 'Import save file'
                            }, '<svg role="presentation" focusable="false"><use xlink:href="#ejs-load-sav"></use></svg>'),
                            _0x4622ca = T.$ce('div');
                        _0x5d1f74['appendChild'](_0x4622ca), _0x56b7e6['call'](_0x13e4bc, getClassName('ejs__widgets', !0))['appendChild'](_0x5d1f74);
                        var _0x33a07e = null;
                        (_0x33a07e = _0x110b30('input'))['type'] = 'file', _0x33a07e['onchange'] = function _0x1b7094(_0x4fb168) {
                            var _0x385ca1, _0x1a714a = _0x4fb168['target']['files'];
                            0x0 < _0x1a714a['length'] && ((_0x385ca1 = new FileReader())['file_name'] = _0x1a714a[0x0]['name'], _0x385ca1['onload'] = function () {
                                var _0x3c26f0 = new Uint8Array(_0x385ca1['result']);
                                _0x2c0f6e['FS']['writeFile']('/data/saves/' ['concat'](_0x16cec9['savepath'], '/')['concat'](_0x32dce3, '.')['concat'](_0x21bd0b), _0x3c26f0), _0x2c0f6e['Module']['_event_load_save_files']();
                            }, _0x385ca1['readAsArrayBuffer'](_0x1a714a[0x0])), _0x33a07e = null, (_0x33a07e = _0x110b30('input'))['type'] = 'file', _0x33a07e['onchange'] = _0x1b7094, _0x33a07e['accept'] = '.srm,.sav,.dsv,.mcr', _0x16cec9['system']['includes'](['psx', 'psx-legacy']) && (_0x33a07e['accept'] = '.srm,.mcr');
                        }, _0x33a07e['accept'] = '.srm,.sav,.dsv,.mcr', _0x16cec9['system']['includes'](['psx', 'psx-legacy']) && (_0x33a07e['accept'] = '.srm,.mcr'), _0x58fce2(_0x5d1f74, 'click', function (_0xa54ebc) {

                            _0x33a07e['click'](), _0xa54ebc['stopPropagation']();
                        });
                        var _0x26157f = _0x110b30('div', {
                                'class': _0xa96c03({
                                    'ejs__widget': !0x0,
                                    'ejs__widget_save_srm': !0x0
                                }),
                                'title': 'Export save file'
                            }, '<svg role="presentation" focusable="false"><use xlink:href="#ejs-save-sav"></use></svg>'),
                            _0x1786cf = T.$ce('div');
                        _0x26157f['appendChild'](_0x1786cf), _0x56b7e6['call'](_0x13e4bc, getClassName('ejs__widgets', !0))['appendChild'](_0x26157f), _0x58fce2(_0x26157f, 'click', function (_0x4bdfea) {
                            var _0x199668 = '/data/saves/' ['concat'](_0x16cec9['savepath'], '/')['concat'](_0x32dce3, '.')['concat'](_0x21bd0b);
                            '' != _0x16cec9['config']['savename'] && (_0x199668 = '/data/saves/' ['concat'](_0x16cec9['savepath'], '/')['concat'](_0x16cec9['config']['savename'], '.')['concat'](_0x21bd0b));
                            try {
                                var _0x334a31 = _0x2c0f6e['FS']['readFile'](_0x199668);
                                T.download(_0x32dce3 + '.' + _0x21bd0b, new Blob([_0x334a31]));
                            } catch (_0x45bd86) {}
                            _0x4bdfea['stopPropagation']();
                        });
                    }
                    if (_0x16cec9['touch']) {
                        var _0x168249 = function (_0x135e42) {
                                var _0x55167c = '';
                                return [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17]['forEach'](function (_0x4b7578) {

                                    'data-key-id-' ['concat'](_0x4b7578) in _0x135e42['attributes'] && (_0x55167c = _0x4b7578);
                                }), _0x135e42['classList']['contains'](_0xa96c03({
                                    'dpad-container': !0x0
                                })) && (_0x55167c = 'dpad'), _0x135e42['classList']['contains'](_0xa96c03({
                                    'joystick': !0x0
                                })) && (_0x55167c = 'joystick'), _0x55167c;
                            },
                            _0x183f12 = {},
                            _0x4f51ab = _0x110b30('div', {
                                'class': _0xa96c03({
                                    'ejs__widget': !0x0,
                                    'ejs__widget_virtual_gamepad': !0x0
                                }),
                                'title': ''
                            }, '<svg fill="currentColor" viewBox="0 0 16 16"><path d="m7.788 2.34-.799 1.278A.25.25 0 0 0 7.201 4h1.598a.25.25 0 0 0 .212-.382l-.799-1.279a.25.25 0 0 0-.424 0Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12h1.598a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0ZM3.617 9.01 2.34 8.213a.25.25 0 0 1 0-.424l1.278-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.383.212Zm10.043-.798-1.277.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"></path><path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0h-3ZM6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 11.5 6h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 4.5 10h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 6 4.5v-3Z"></path></svg>'),
                            _0x4eaf6a = _0x110b30('div', {
                                'class': _0xa96c03({
                                    'step': !0x0,
                                    'step-1': !0x0
                                })
                            });
                        _0x4eaf6a['innerHTML'] = 'You can now chose a control button to adjust the size and adjust the position by dragging.<a data-btn="reset" href="#">Reset All</a> <a data-btn="close" href="#">Close</a>', _0x4f51ab['appendChild'](_0x4eaf6a), _0x4cef4a['exists'] || (_0x4f51ab['style']['right'] = '5px');
                        var _0x25f088 = _0x110b30('div', {
                            'class': _0xa96c03({
                                'step': !0x0,
                                'step-2': !0x0
                            })
                        });
                        _0x25f088['innerHTML'] = 'Size: <input type="range" min="0.6" max="1.5" step="0.1" /> <a data-btn="close" href="#">Save</a>', _0x4f51ab['appendChild'](_0x25f088), _0x9268bd(_0x4eaf6a, !0x0), _0x9268bd(_0x25f088, !0x0), _0x9268bd(_0x4eaf6a['querySelector']('[data-btn="reset"]'), !0x0), _0x56b7e6['call'](_0x13e4bc, getClassName('ejs__widgets', !0))['appendChild'](_0x4f51ab);
                        var _0x31cb57 = _0x25f088['querySelector']('input[type=range]'),
                            _0x3b9a44 = _0xa436b2['storage']['get']('virtual-gamepad-pos');
                        null == _0x3b9a44 && (_0x3b9a44 = {});
                        var _0x52cd1d = null;
                        _0x46cf61['virtualGamepadContainer']['querySelectorAll']('.' ['concat'](_0xa96c03({
                            'buttons': !0x0
                        }), ', .')['concat'](_0xa96c03({
                            'dpad-container': !0x0
                        }), ', .')['concat'](_0xa96c03({
                            'virtual-gamepad': !0x0
                        }), ' .')['concat'](_0xa96c03({
                            'joystick': !0x0
                        })))['forEach'](function (_0x48581a) {
                            var _0x226168 = _0x168249(_0x48581a),
                                _0x424c57 = _0x3b9a44[_0x226168];
                            _0x424c57 && (_0x48581a['style']['left'] = _0x424c57['left'] + 'px', _0x48581a['style']['top'] = _0x424c57['top'] + 'px', _0x424c57['right'] && (_0x48581a['style']['left'] = 'auto', _0x48581a['style']['right'] = _0x424c57['right'] + 'px'), _0x48581a['style']['scale'] = _0x424c57['scale'], 0x0 > _0x16cec9['elements']['container']['clientHeight'] + _0x424c57['top'] && (_0x48581a['style']['top'] = 0x28 - _0x16cec9['elements']['container']['clientHeight'] + 'px')), _0x58fce2(_0x48581a, 'touchstart', function () {

                                _0x52cd1d && _0x52cd1d['classList']['remove'](_0xa96c03({
                                    'active': !0x0
                                })), (_0x52cd1d = _0x48581a)['classList']['add'](_0xa96c03({
                                    'active': !0x0
                                })), _0x9268bd(_0x4eaf6a, !0x0), _0x9268bd(_0x25f088, !0x1);
                            });
                        }), _0x58fce2(_0x4f51ab, 'click', function (_0x3e80fb) {

                            return !!_0x4eaf6a['hidden'] && (_0xa436b2['updateNormalOptions']['call'](_0x16cec9, 'virtual-gamepad', 'enabled'), _0x9268bd(_0x4eaf6a, !0x1), _0x46cf61['virtualGamepadContainer']['querySelectorAll']('.' ['concat'](_0xa96c03({
                                'buttons': !0x0
                            }), ', .')['concat'](_0xa96c03({
                                'dpad-container': !0x0
                            }), ', .')['concat'](_0xa96c03({
                                'virtual-gamepad': !0x0
                            }), ' .')['concat'](_0xa96c03({
                                'joystick': !0x0
                            })))['forEach'](function (_0x44ff38) {

                                _0x44ff38['classList']['add'](_0xa96c03({
                                    'v-selected': !0x0
                                }));
                            }), 0x0 < Object['keys'](_0x3b9a44)['length'] && _0x9268bd(_0x4eaf6a['querySelector']('a[data-btn="reset"]'), !0x1), void _0x3e80fb['stopPropagation']());
                        }), _0x58fce2(_0x4eaf6a['querySelector']('a[data-btn="close"]'), 'click', function (_0xa2b1de) {

                            _0x46cf61['virtualGamepadContainer']['querySelectorAll']('.' ['concat'](_0xa96c03({
                                'buttons': !0x0
                            }), ', .')['concat'](_0xa96c03({
                                'dpad-container': !0x0
                            }), ', .')['concat'](_0xa96c03({
                                'virtual-gamepad': !0x0
                            }), ' .')['concat'](_0xa96c03({
                                'joystick': !0x0
                            })))['forEach'](function (_0x135643) {

                                _0x135643['classList']['remove'](_0xa96c03({
                                    'v-selected': !0x0
                                }));
                            }), _0xa436b2['storage']['set']({
                                'virtual-gamepad-pos': _0x183f12
                            }), _0x9268bd(_0x4eaf6a, !0x0), _0x4eaf6a['querySelector']('a[data-btn="close"]')['innerHTML'] = 'Close', _0xa2b1de['stopPropagation']();
                        }), _0x58fce2(_0x4eaf6a['querySelector']('a[data-btn="reset"]'), 'click', function (_0x485001) {

                            _0x46cf61['virtualGamepadContainer']['querySelectorAll']('.' ['concat'](_0xa96c03({
                                'buttons': !0x0
                            }), ', .')['concat'](_0xa96c03({
                                'dpad-container': !0x0
                            }), ', .')['concat'](_0xa96c03({
                                'virtual-gamepad': !0x0
                            }), ' .')['concat'](_0xa96c03({
                                'joystick': !0x0
                            })))['forEach'](function (_0x28d616) {

                                _0x28d616['style']['cssText'] = '';
                            }), _0x9268bd(_0x4eaf6a['querySelector']('a[data-btn="reset"]'), !0x0), _0x485001['stopPropagation']();
                        }), _0x58fce2(_0x25f088['querySelector']('a[data-btn="close"]'), 'click', function (_0x53e58f) {

                            _0x52cd1d && (_0x52cd1d['classList']['remove'](_0xa96c03({
                                'active': !0x0
                            })), _0x1edc67(_0x4eaf6a['querySelector']('a[data-btn="close"]'), 'click'), _0x9268bd(_0x25f088, !0x0)), _0x52cd1d = null, _0x53e58f['stopPropagation']();
                        }), _0x58fce2(_0x31cb57, 'input change', function (_0x4ed5b8) {

                            if (_0x52cd1d) {
                                var _0x5ed786 = _0x31cb57['value'];
                                _0x52cd1d['style']['scale'] = _0x5ed786, _0x31cb57['style']['setProperty']('--value', '' ['concat']((_0x31cb57['value'] - _0x31cb57['min']) / (_0x31cb57['max'] - _0x31cb57['min']) * 0x64, '%'));
                                var _0x2b5b1b = _0x168249(_0x52cd1d);
                                _0x183f12[_0x2b5b1b] || (_0x183f12[_0x2b5b1b] = {}), _0x183f12[_0x2b5b1b]['scale'] = _0x5ed786, _0x4eaf6a['querySelector']('a[data-btn="close"]')['innerHTML'] = 'Save All', _0x9268bd(_0x4eaf6a['querySelector']('a[data-btn="reset"]'), !0x1);
                            }
                            _0x4ed5b8['stopPropagation']();
                        }), _0x46cf61['virtualGamepadContainer']['querySelectorAll']('.' ['concat'](_0xa96c03({
                            'buttons': !0x0
                        }), ', .')['concat'](_0xa96c03({
                            'dpad-container': !0x0
                        }), ', .')['concat'](_0xa96c03({
                            'virtual-gamepad': !0x0
                        }), ' .')['concat'](_0xa96c03({
                            'joystick': !0x0
                        })))['forEach'](function (_0x3625ac) {
                            var _0x5f1e6d = 0x0,
                                _0x25a1dc = 0x0,
                                _0x4b5dd7 = {};
                            _0x3625ac['addEventListener']('touchstart', function (_0xb05c4e) {

                                if (!_0x3625ac['classList']['contains'](_0xa96c03({
                                        'v-selected': !0x0
                                    }))) return !0x1;
                                if (_0xb05c4e['preventDefault'](), _0x5f1e6d = _0xb05c4e['touches'][0x0]['clientX'], _0x25a1dc = _0xb05c4e['touches'][0x0]['clientY'], _0x3625ac['style']) {
                                    var _0x44a02f = _0x3625ac['style']['scale'] || 0x1;
                                    _0x31cb57['value'] = _0x44a02f, _0x31cb57['style']['setProperty']('--value', '' ['concat']((_0x31cb57['value'] - _0x31cb57['min']) / (_0x31cb57['max'] - _0x31cb57['min']) * 0x64, '%'));
                                }
                                _0x4b5dd7 = function (_0x5a0cd2, _0x4b669d) {
                                    var _0xad6b75 = _0x5a0cd2['getBoundingClientRect'](),
                                        _0x47a2e2 = _0x4b669d['getBoundingClientRect'](),
                                        _0x361978 = -(_0xad6b75['height'] - _0x47a2e2['top']),
                                        _0x80d1ae = parseInt(_0x4b669d['style']['left']),
                                        _0x2dd53d = parseInt(_0x4b669d['style']['right']);
                                    return isNaN(_0x80d1ae) && (_0x80d1ae = 0x0), isNaN(_0x2dd53d) && (_0x2dd53d = 0x0), 0x0 == _0x80d1ae && (_0x80d1ae = _0x47a2e2['left']), _0x2dd53d && (_0x80d1ae = _0xad6b75['width'] - _0x4b669d['clientWidth'] - _0x2dd53d), {
                                        'top': _0x361978,
                                        'left': _0x80d1ae
                                    };
                                }(_0x16cec9['elements']['container'], _0x3625ac);
                            }, !0x0);
                            var _0x24baab = 0x0,
                                _0x10061e = 0x0;
                            _0x3625ac['addEventListener']('touchmove', function (_0x1a7383) {

                                if (!_0x3625ac['classList']['contains'](_0xa96c03({
                                        'active': !0x0
                                    }))) return !0x1;
                                _0x1a7383['preventDefault'](), _0x24baab = _0x1a7383['touches'][0x0]['clientX'] - _0x5f1e6d, _0x10061e = _0x1a7383['touches'][0x0]['clientY'] - _0x25a1dc, _0x3625ac['style']['top'] = _0x4b5dd7['top'] + _0x10061e + 'px', _0x3625ac['style']['left'] = _0x4b5dd7['left'] + _0x24baab + 'px';
                                var _0x106e84 = _0x16cec9['elements']['container']['clientWidth'],
                                    _0xf44dda = (_0x16cec9['elements']['container']['clientHeight'], parseInt(_0x3625ac['style']['left'])),
                                    _0x3b85cc = parseInt(_0x3625ac['style']['top']);
                                isNaN(_0xf44dda) && (_0xf44dda = 0x0), isNaN(_0x3b85cc) && (_0x3b85cc = 0x0);
                                var _0x44bae8 = 0x0;
                                _0xf44dda > _0x106e84 / 0x2 && (_0x44bae8 = _0x106e84 - _0xf44dda - _0x3625ac['clientWidth'] - 0x4), _0x3625ac['style']['bottom'] = '', _0x3625ac['style']['right'] = '', _0x44bae8 && (_0x3625ac['style']['left'] = 'auto', _0x3625ac['style']['right'] = _0x44bae8 + 'px');
                                var _0xa45e30 = _0x168249(_0x52cd1d);
                                _0x183f12[_0xa45e30] = {
                                    'left': _0xf44dda,
                                    'right': _0x44bae8,
                                    'top': _0x3b85cc,
                                    'scale': _0x3625ac['style']['scale']
                                }, _0x4eaf6a['querySelector']('a[data-btn="close"]')['innerHTML'] = 'Save All', _0x9268bd(_0x4eaf6a['querySelector']('a[data-btn="reset"]'), !0x1);
                            });
                        });
                    }
                });
            },
            'setNetplay': function (_0x39f032) {

                _0x39f032['appendChild'](_0xa436b2['createButton']['call'](this, 'netplay', {
                    'aria-haspopup': !0x0,
                    'aria-expanded': !0x1
                }));
                var _0x4f2701 = _0x110b30('div', {
                        'class': _0xa96c03({
                            'ejs__dialog': !0x0,
                            'ejs__netplay__container': !0x0
                        }),
                        'hidden': ''
                    }),
                    _0x21f43c = T.$ce('div');
                _0x4f2701['appendChild'](_0x21f43c), _0x56b7e6['call'](this, getClassName('ejs__dialogs', !0))['appendChild'](_0x4f2701), this['elements']['dialogs']['netplay'] = _0x4f2701, _0xa436b2['setNetplayWidgets']['call'](this);
            },
            'toggleContextMenu': function (_0x3336ee, _0x3ce19e) {
                var _0x177098 = this,
                    _0x2ab01d = _0x177098['elements']['wrapper']['clientWidth'],
                    _0x5c254d = _0x177098['elements']['wrapper']['clientHeight'];
                if (_0x108b6f(_0x3336ee['target'], _0xa96c03({
                        'ejs__dialogs': !0x0
                    }))) {
                    var _0x41edad = _0xa436b2['contextMenu']['timer'];
                    if (this['started']) {
                        var _0x1f9939 = _0x56b7e6['call'](_0x177098, '.' ['concat'](_0xa96c03({
                            'ejs__contextmenu': !0x0
                        }), ' ul'));
                        if (_0x3ce19e) {
                            _0xa436b2['contextMenu']['style']['display'] = 'block', _0xa436b2['contextMenu']['style']['left'] = '' ['concat'](_0x3336ee['layerX'], 'px'), _0xa436b2['contextMenu']['style']['top'] = '' ['concat'](_0x3336ee['layerY'], 'px'), _0xa436b2['contextMenu']['style']['zIndex'] = -0x1;
                            var _0x509b3f = _0xa436b2['contextMenu']['clientWidth'],
                                _0x34866f = _0xa436b2['contextMenu']['clientHeight'];
                            _0x3336ee['layerX'] + _0x509b3f > _0x2ab01d && (_0xa436b2['contextMenu']['style']['left'] = '' ['concat'](_0x3336ee['layerX'] - _0x509b3f, 'px')), _0x3336ee['layerY'] + _0x34866f > _0x5c254d && (_0xa436b2['contextMenu']['style']['top'] = '' ['concat'](_0x3336ee['layerY'] - _0x34866f, 'px')), _0xa436b2['contextMenu']['style']['zIndex'] = 0x1;
                            var _0x5942a7 = _0x5161da['call'](_0x177098, '.' ['concat'](_0xa96c03({
                                'ejs__contextmenu': !0x0
                            }), ' ul li'));
                            if (Array['from'](_0x5942a7)['forEach'](function () {}), null === _0x1f9939['getAttribute']('menu')) {
                                var _0x563bb3 = _0x110b30('li', {});
                                _0x563bb3['appendChild'](_0x110b30('a', {
                                    'target': '_blank',
                                    'href': 'https://www.emulatorjs.com'
                                }, 'EMULATORJS.COM v' ['concat'](_0x177098['version']))), _0x1f9939['appendChild'](_0x563bb3), _0x1f9939['setAttribute']('menu', '');
                            }
                            _0x41edad && clearTimeout(_0x41edad), _0x41edad = setTimeout(function () {}, 0xfa0), _0xa436b2['contextMenu']['timer'] = _0x41edad;
                        } else _0xa436b2['contextMenu']['style']['display'] = 'none';
                    }
                }
            },
            'fixMenuPos': function () {

                document['querySelectorAll']('' ['concat'](this['config']['selectors']['controls']['wrapper'], ' > div, ')['concat'](this['config']['selectors']['controls']['wrapper'], ' > button'))['forEach'](function (_0x43c07f, _0x2a2b7e) {
                    var _0x28b6e2 = _0xa96c03({
                        'ejs__menu': !0x0
                    });
                    _0x43c07f['classList']['contains'](_0x28b6e2) && 0x0 == _0x2a2b7e % 0x2 ? _0x43c07f['classList']['add'](_0xa96c03({
                        'ejs__menu_right': !0x0
                    })) : _0x43c07f['classList']['remove'](_0xa96c03({
                        'ejs__menu_right': !0x0
                    }));
                });
            },
            'fixNdsSize': function () {
                var _0x55be1e = this,
                    _0xfe9596 = 0x0,
                    _0x4c001f = 0x1,
                    _0x3d1a4b = 0x0;
                if (!_0x55be1e['started']) return !0x1;
                if (_0x2c0f6e['Module']['setCanvasSize']) switch (_0xa436b2['coreOptionsValues']['desmume_screens_layout']) {
                    case 'top/bottom':
                    case 'bottom/top':
                    case void 0x0:
                        _0x2c0f6e['Module']['setCanvasSize'](0x200, 0x300), _0x4c001f = 0x1, _0xfe9596 = 0x0, _0x3d1a4b = 0x0;
                        break;
                    case 'left/right':
                    case 'right/left':
                        _0x2c0f6e['Module']['setCanvasSize'](0x400, 0x180), _0x4c001f = 0.375, _0xfe9596 = 0x1, _0x3d1a4b = 0x0;
                        break;
                    case 'top only':
                    case 'bottom only':
                        _0x2c0f6e['Module']['setCanvasSize'](0x200, 0x180), _0x4c001f = 0.75, _0xfe9596 = 0x0, _0x3d1a4b = 0x1;
                }
                var _0x561a79 = 0x0,
                    _0x3615f6 = 0x0,
                    _0xd94de6 = _0x2c0f6e['Module']['canvas'];
                switch (_0xa436b2['coreOptionsValues']['screen_rotation']) {
                    case '0':
                    case '180':
                    case void 0x0:
                        _0x561a79 = 0x0, _0x3615f6 = 0x0, _0x4c001f = 0x1, _0xfe9596 ? (_0x5149bc(_0x55be1e['elements']['wrapper'], _0xa96c03({
                            'nds-fix': !0x0
                        }), !0x0), _0x561a79 = 0x0) : (_0x5149bc(_0x55be1e['elements']['wrapper'], _0xa96c03({
                            'nds-fix': !0x0
                        }), !0x1), _0x561a79 = 0x0);
                        break;
                    case '90':
                    case '270':
                        _0xfe9596 && (_0x5149bc(_0x55be1e['elements']['wrapper'], _0xa96c03({
                            'nds-fix': !0x0
                        }), !0x1), _0x561a79 = 0x0), _0x561a79 = _0x1d0cbb(_0xd94de6['clientHeight'] - _0xd94de6['clientWidth']) / 0x2, 0x1 == _0x4c001f && (_0x4c001f = _0xd94de6['clientWidth'] > _0xd94de6['clientHeight'] ? _0xd94de6['clientWidth'] / _0xd94de6['clientHeight'] : _0xd94de6['clientHeight'] / _0xd94de6['clientWidth']), _0xd94de6['style']['setProperty']('height', 0x64 * _0x4c001f + '%', 'important'), _0x561a79 = _0x1d0cbb(_0xd94de6['clientHeight'] - _0xd94de6['clientWidth']) / 0x2, _0xfe9596 || _0x3d1a4b || (_0x561a79 = -_0x1d0cbb(_0xd94de6['clientHeight'] - _0xd94de6['clientWidth']) / 0x2);
                }
                _0xd94de6['style']['marginTop'] = _0x561a79 + 'px', _0xd94de6['style']['marginLeft'] = _0x3615f6 + 'px';
            },
            'create': function (_0x336aee) {
                var _0x58e4be = this;
                _0xa436b2['storage'] = new _0x39ea9e(_0x58e4be, 'ejs_' ['concat'](_0x58e4be['system'], '_settings'));
                var _0x2ddf91 = _0x110b30('div', _0x3db346(this['config']['selectors']['controls']['wrapper']));
                _0x2ddf91['style']['visibility'] = 'hidden', _0x2ddf91['classList']['add'](_0xa96c03({
                    'ejs__controls_show': !0x0
                })), setTimeout(function () {

                    _0x2ddf91['style']['visibility'] = 'visible';
                }, 0x3e8), _0xa436b2['contextMenu'] = _0x110b30('div', {
                    'class': _0xa96c03({
                        'ejs__contextmenu': !0x0
                    }),
                    'style': 'position: absolute; display:none;z-index:9'
                }), _0xa436b2['contextMenu']['innerHTML'] = '<ul><li><a href="#" onclick="return false">Take Screenshot</a></li><li><a href="#" onclick="return false">Quick Save State<span class="' ['concat'](_0x58e4be['config']['classNames']['hotkey'], '"> (F2)</span>') + ('</a></li><li><a href="#" onclick="return false">Quick Load State') + '<span class="' ['concat'](_0x58e4be['config']['classNames']['hotkey'], '"> (F4)</span>') + '</a></li></ul>', _0x58e4be['elements']['container']['appendChild'](_0xa436b2['contextMenu']);
                var _0x219922 = _0x110b30('div', {
                    'class': _0xa96c03({
                        'ejs__dialog': !0x0,
                        'ejs__cache__container': !0x0
                    }),
                    'hidden': ''
                });
                _0x56b7e6['call'](this, getClassName('ejs__dialogs', !0))['appendChild'](_0x219922), _0x58e4be['elements']['dialogs']['cache'] = _0x219922;
                var _0xd1dbf7 = _0x110b30('div', {
                    'class': _0xa96c03({
                        'ejs__dialog': !0x0,
                        'ejs__loading__container': !0x0
                    }),
                    'hidden': ''
                });
                _0x56b7e6['call'](this, getClassName('ejs__dialogs', !0))['appendChild'](_0xd1dbf7), _0x58e4be['elements']['dialogs']['loading'] = _0xd1dbf7, _0x2ddf91['appendChild'](_0xa436b2['createButton']['call'](this, 'restart')), _0x2ddf91['appendChild'](_0xa436b2['createButton']['call'](this, 'play')), _0x2ddf91['appendChild'](_0xa436b2['createButton']['call'](this, 'save-state', {
                    'aria-expanded': !0x1
                })), _0xa436b2['setLoadState']['call'](this, _0x2ddf91, _0x336aee), _0xa436b2['setDisk']['call'](this, _0x2ddf91, _0x336aee), _0xa436b2['supportNetPlay']['call'](this, _0x2ddf91), _0xa436b2['setNetplay']['call'](this, _0x2ddf91, _0x336aee), _0xa436b2['setGamepad']['call'](this, _0x2ddf91, _0x336aee), _0xa436b2['setCheat']['call'](this, _0x2ddf91, _0x336aee);
                var _0x2d0fa5 = T.$ct('div', null, getClassName({
                    'ejs__volume': !0x0
                }));
                _0x2d0fa5['appendChild'](_0xa436b2['createButton']['call'](this, 'mute'));
                var _0x55e66e = {
                    'max': 0x1,
                    'step': 0.01,
                    'value': this['config']['volume']
                };
                _0x2d0fa5['appendChild'](_0xa436b2['createRange']['call'](this, 'volume', _0x23c7cf(_0x55e66e, {}))), this['elements']['volume'] = _0x2d0fa5, _0x2ddf91['appendChild'](_0x2d0fa5);
                var _0x777bef = T.$ct('div', null, getClassName({
                    'ejs__menu': !0x0
                }));
                _0x777bef['appendChild'](_0xa436b2['createButton']['call'](this, 'settings', {
                    'aria-haspopup': !0x0,
                    'aria-expanded': !0x1
                }));
                var _0x6b76db = _0x110b30('div', {
                        'class': _0xa96c03({
                            'ejs__menu__container': !0x0
                        }),
                        'hidden': ''
                    }),
                    _0x30b759 = T.$ce('div'),
                    _0x5b6a42 = _0x110b30('div', {
                        'data-pane': 'home'
                    }),
                    _0x56edfc = _0x110b30('div', {
                        'role': 'menu'
                    });
                return _0x5b6a42['appendChild'](_0x56edfc), _0x30b759['appendChild'](_0x5b6a42), this['elements']['settings']['panels']['home'] = _0x5b6a42, _0x6b76db['appendChild'](_0x30b759), _0x777bef['appendChild'](_0x6b76db), _0x2ddf91['appendChild'](_0x777bef), this['elements']['settings']['popup'] = _0x6b76db, this['elements']['settings']['menu'] = _0x777bef, _0x2ddf91['appendChild'](_0xa436b2['createButton']['call'](this, 'fullscreen')), this['elements']['controls'] = _0x2ddf91, _0xa436b2['setNormalOptionsMenu']['call'](this), _0xa436b2['setCoreOptionsMenu']['call'](this), _0xa436b2['setControllToggleWidgets']['call'](this), _0x2ddf91;
            },
            'inject': function () {
                var _0x4ed34a = this;
                (function (_0x4c3cd3, _0x410c9e) {

                    if (I.str(_0x4c3cd3)) {
                        var _0x64ea28 = 'cache',
                            _0x28af8a = I.str(_0x410c9e),
                            _0x568f92 = !0x1,
                            _0x31474e = function () {

                                return null !== document['getElementById'](_0x410c9e);
                            },
                            _0x2d127f = function (_0x553d81, _0x3dc6be) {

                                _0x553d81['innerHTML'] = _0x3dc6be, _0x28af8a && _0x31474e() || document['body']['insertAdjacentElement']('afterbegin', _0x553d81);
                            };
                        if (!_0x28af8a || !_0x31474e()) {
                            var _0x4187d9 = _0x39ea9e['supported'],
                                _0x10aa0f = document['createElement']('div');
                            if (_0x10aa0f['setAttribute']('hidden', ''), _0x28af8a && _0x10aa0f['setAttribute']('id', _0x410c9e), _0x4187d9) {
                                var _0x4a8128 = window['localStorage']['getItem']('' ['concat'](_0x64ea28, '-')['concat'](_0x410c9e));
                                if (_0x568f92 = null !== _0x4a8128) {
                                    var _0x184de4 = JSON['parse'](_0x4a8128);
                                    _0x2d127f(_0x10aa0f, _0x184de4['content']);
                                }
                            }
                            _0x568f92 || fetch(_0x4c3cd3)['then'](function (_0x2406bd) {

                                return 0xc8 > _0x2406bd['status'] || 0x12c < _0x2406bd['status'] ? '' : _0x2406bd['text']();
                            })['then'](function (_0x37b8bc) {

                                I.empty(_0x37b8bc) || (_0x4187d9 && window['localStorage']['setItem']('' ['concat'](_0x64ea28, '-')['concat'](_0x410c9e), JSON['stringify']({
                                    'content': _0x37b8bc
                                })), _0x2d127f(_0x10aa0f, _0x37b8bc));
                            })['catch'](function () {});
                        }
                    }
                }('icons.svg', 'ejs-icons'), this['id'] = _0x3463a5(0x2710 * Math['random']()));
                var _0x1919ae = null;
                this['elements']['controls'] = null;
                var _0x2a3d18 = {
                        'id': this['id']
                    },
                    _0x2d34c7 = !0x0;
                I.func(this['config']['controls']) && (this['config']['controls'] = this['config']['controls']['call'](this['props'])), this['config']['controls'] || (this['config']['controls'] = []), I.elm(this['config']['controls']) || I.str(this['config']['controls']) ? _0x1919ae = this['config']['controls'] : (_0x1919ae = _0xa436b2['create']['call'](this, {
                    'id': this['id'],
                    'seektime': this['config']['seekTime'],
                    'speed': this['speed'],
                    'quality': this['quality']
                }), _0x2d34c7 = !0x1);
                var _0x350bec, _0x130722 = function (_0x68ff81) {
                    var _0x1318c7 = _0x68ff81;
                    return I.toArr(_0x2a3d18, function (_0x262e5d) {
                        var _0x400be9 = _0x55699e(_0x262e5d, 0x2),
                            _0x38f7b1 = _0x400be9[0x0],
                            _0x331023 = _0x400be9[0x1];
                        _0x1318c7 = _0xcc7be(_0x1318c7, '{' ['concat'](_0x38f7b1, '}'), _0x331023);
                    }), _0x1318c7;
                };
                if (_0x2d34c7 && (I.str(this['config']['controls']) ? _0x1919ae = _0x130722(_0x1919ae) : I.elm(_0x1919ae) && (_0x1919ae['innerHTML'] = _0x130722(_0x1919ae['innerHTML']))), I.str(this['config']['selectors']['controls']['container']) && (_0x350bec = document['querySelector'](this['config']['selectors']['controls']['container'])), I.elm(_0x350bec) || (_0x350bec = this['elements']['container']), _0x350bec[I.elm(_0x1919ae) ? 'insertAdjacentElement' : 'insertAdjacentHTML']('afterbegin', _0x1919ae), I.elm(this['elements']['controls']) || _0xa436b2['findElements']['call'](this), !I.empty(this['elements']['buttons'])) {
                    var _0x1d0bfb = function (_0x8d797f) {
                        var _0x292a90 = _0x4ed34a['config']['classNames']['controlPressed'];
                        Object['defineProperty'](_0x8d797f, 'pressed', {
                            'enumerable': !0x0,
                            'get': function () {
                                return _0x108b6f(_0x8d797f, _0x292a90);
                            },
                            'set': function () {
                                var _0x273fcc = !!(0x0 < arguments['length'] && void 0x0 !== arguments[0x0]) && arguments[0x0];
                                _0x5149bc(_0x8d797f, _0x292a90, _0x273fcc);
                            }
                        });
                    };
                    Object['values'](this['elements']['buttons'])['filter'](Boolean)['forEach'](function (_0x154aa2) {

                        I.array(_0x154aa2) || I.IF(_0x154aa2, 27) ? Array['from'](_0x154aa2)['filter'](Boolean)['forEach'](_0x1d0bfb) : _0x1d0bfb(_0x154aa2);
                    });
                }
                window['navigator']['userAgent']['includes']('Edge') && _0x2e127f(_0x350bec), _0xa436b2['fixMenuPos']['call'](this);
            }
        },
        _0x28f202 = _0xa436b2,
        _0x409004 = (function () {


            function _0x29ea2a(_0x4ff19e) {

                (function (_0x53280a, _0x547322) {

                    if (!(_0x53280a instanceof _0x547322)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x29ea2a), this['emulator'] = _0x4ff19e, this['lastKey'] = null, this['focusTimer'] = null, this['lastKeyDown'] = null, this['toggleMenu'] = this['toggleMenu']['bind'](this), this['setTabFocus'] = this['setTabFocus']['bind'](this), this['firstTouch'] = this['firstTouch']['bind'](this));
            }
            return function (_0x443a08, _0x484bfb, _0x198726) {
                _0x484bfb && _0x2574d5(_0x443a08['prototype'], _0x484bfb), _0x198726 && _0x2574d5(_0x443a08, _0x198726);
            }(_0x29ea2a, [{
                'key': 'toggleMenu',
                'value': function (_0x3e88a7) {

                    _0x28f202['toggleMenu']['call'](this['emulator'], _0x3e88a7);
                }
            }, {
                'key': 'firstTouch',
                'value': function () {
                    var _0x3ed0ec = this['emulator'],
                        _0x32bc32 = _0x3ed0ec['elements'];
                    _0x3ed0ec['touch'] = !0x0, _0x5149bc(_0x32bc32['container'], _0x3ed0ec['config']['classNames']['isTouch'], !0x0);
                }
            }, {
                'key': 'setTabFocus',
                'value': function (_0x15cc70) {
                    var _0x4ab392 = this['emulator'],
                        _0x237c42 = _0x4ab392['elements'],
                        _0x57fd6b = _0x4ab392;
                    if (clearTimeout(this['focusTimer']), 'keydown' !== _0x15cc70['type'] || 0x9 === _0x15cc70['which']) {
                        'keydown' === _0x15cc70['type'] && (this['lastKeyDown'] = _0x15cc70['timeStamp']);
                        var _0x3d5478 = 0x14 >= _0x15cc70['timeStamp'] - this['lastKeyDown'];
                        ('focus' !== _0x15cc70['type'] || _0x3d5478) && ((function () {
                            var _0x3c848d = _0x57fd6b['config']['classNames']['tabFocus'];
                            _0x5149bc(_0x5161da['call'](_0x57fd6b, '.' ['concat'](_0x3c848d)), _0x3c848d, !0x1);
                        }()), this['focusTimer'] = setTimeout(function () {
                            var _0x2b81fe = document['activeElement'];
                            _0x237c42['container']['contains'](_0x2b81fe) && _0x5149bc(document['activeElement'], _0x57fd6b['config']['classNames']['tabFocus'], !0x0);
                        }, 0xa));
                    }
                }
            }, {
                'key': 'global',
                'value': function () {
                    var _0x4c034b = !(0x0 < arguments['length'] && void 0x0 !== arguments[0x0]) || arguments[0x0],
                        _0x4d51e8 = this['emulator'],
                        _0x206c53 = _0x4d51e8;
                    _0x2c152f['call'](_0x206c53, document['body'], 'click', this['toggleMenu'], _0x4c034b), _0x1fa3b9['call'](_0x206c53, document['body'], 'touchstart', this['firstTouch']), _0x2c152f['call'](_0x206c53, document['body'], 'keydown focus blur', this['setTabFocus'], _0x4c034b, !0x1, !0x0), _0x58fce2['call'](_0x206c53, document['body'], 'keyup', function (_0x4934c9) {

                        _0x206c53['started'] && !_0x206c53['keyboard'] && _0x46cf61['stateSupported'] && (0x71 === _0x4934c9['which'] && (_0x4934c9['shiftKey'] ? null === _0x206c53['elements']['buttons']['saveState']['getAttribute']('hidden') && _0x1edc67['call'](_0x206c53, _0x206c53['elements']['buttons']['saveState'], 'click') : _0x46cf61['quickSaveState']()), 0x73 === _0x4934c9['which'] && (_0x4934c9['shiftKey'] ? null === _0x206c53['elements']['buttons']['loadState']['getAttribute']('hidden') && _0x1edc67['call'](_0x206c53, _0x206c53['elements']['buttons']['loadState'], 'click') : _0x46cf61['quickLoadState']()), 0x78 === _0x4934c9['which'] && _0x1edc67['call'](_0x206c53, _0x206c53['elements']['buttons']['mute'], 'click'));
                    });
                }
            }, {
                'key': 'container',
                'value': function () {
                    var _0x1d8b0a, _0x41e60e = this['emulator'],
                        _0x5a5bc9 = _0x41e60e['elements'],
                        _0x5aac09 = _0x41e60e;
                    _0x58fce2['call'](_0x5aac09, _0x5a5bc9['container'], 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen start-game', function (_0x49f778) {
                        var _0x4fe634 = _0x5a5bc9['controls'];
                        _0x4fe634 && 'enterfullscreen' === _0x49f778['type'] && (_0x4fe634['pressed'] = !0x1, _0x4fe634['hover'] = !0x1);
                        var _0x545452 = 0x0;
                        ['touchstart', 'touchmove', 'mousemove', 'start-game']['includes'](_0x49f778['type']) && (_0x514a8c['toggleControls']['call'](_0x5aac09, !0x0), _0x545452 = _0x5aac09['touch'] ? 0xbb8 : 0x7d0), clearTimeout(_0x1d8b0a), _0x1d8b0a = setTimeout(function () {

                            return _0x514a8c['toggleControls']['call'](_0x5aac09, !0x1);
                        }, _0x545452), _0x5a5bc9['controls']['setAttribute']('data-timer', _0x1d8b0a);
                    }), _0x58fce2['call'](_0x5aac09, window, 'resize', function () {
                        var _0x319bf7 = _0x5aac09['elements']['container']['clientHeight'],
                            _0x3c1fc4 = _0x5161da['call'](_0x5aac09, '.' ['concat'](_0xa96c03({
                                'ejs__menu__container': !0x0
                            }), ' [role="menu"]'));
                        Array['from'](_0x3c1fc4)['forEach'](function (_0x3a1538) {

                            _0x3a1538['style']['maxHeight'] = '' ['concat'](_0x319bf7 - 0x89, 'px'), _0x3a1538['style']['overflow'] = 'auto';
                        }), _0x2c0f6e['Module'] && _0x2c0f6e['Module']['canvas'], 1.3 > _0x5aac09['elements']['container']['clientWidth'] / _0x5aac09['elements']['container']['clientHeight'] ? _0x5149bc(_0x5aac09['elements']['container'], _0xa96c03({
                            'portrait': !0x0
                        }), !0x0) : _0x5149bc(_0x5aac09['elements']['container'], _0xa96c03({
                            'portrait': !0x0
                        }), !0x1), 'nds' == _0x5aac09['system'] && _0x28f202['fixNdsSize']['call'](_0x5aac09);
                    }), _0x1edc67['call'](_0x5aac09, window, 'resize'), _0x58fce2['call'](_0x5aac09, _0x5aac09['elements']['container'], 'enterfullscreen', function () {

                        setTimeout(function () {

                            _0x1edc67['call'](_0x5aac09, window, 'resize');
                        }, 0x12c), 0x1 == _0x5aac09['mode'] && (_0x5aac09['fullscreenActive'] = !0x0, _0x5149bc(_0x5a5bc9['buttons']['fullscreen'], _0x5aac09['config']['classNames']['controlPressed'], _0x5aac09['fullscreenActive']));
                    }), _0x58fce2['call'](_0x5aac09, _0x5aac09['elements']['container'], 'exitfullscreen', function () {

                        setTimeout(function () {

                            _0x1edc67['call'](_0x5aac09, window, 'resize');
                        }, 0x12c), 0x1 == _0x5aac09['mode'] && (_0x5aac09['fullscreenActive'] = !0x1, _0x5149bc(_0x5a5bc9['buttons']['fullscreen'], _0x5aac09['config']['classNames']['controlPressed'], _0x5aac09['fullscreenActive']));
                    }), _0x58fce2['call'](_0x5aac09, _0x5aac09['elements']['container'], 'start-game', function () {
                        var _0xbfe77a = window['document']['createEvent']('UIEvents');
                        _0xbfe77a['initUIEvent']('resize', !0x0, !0x1, window, 0x0), window['dispatchEvent'](_0xbfe77a), _0x5149bc(_0x5aac09['elements']['container'], _0xa96c03({
                            'game-started': !0x0
                        }), !0x0);
                    }), _0x58fce2['call'](_0x5aac09, _0x5aac09['elements']['container'], 'blur', function (_0x52e3b0) {
                        var _0x216e93 = _0x52e3b0['currentTarget'];
                        setTimeout(function () {

                            _0x216e93['contains'](document['activeElement']) || _0x1edc67['call'](_0x5aac09, _0x5aac09['elements'], 'blurgame');
                        }, 0x0);
                    }), _0x58fce2['call'](_0x5aac09, _0x5aac09['elements']['container'], 'focus', function (_0x355183) {
                        var _0x270bee = _0x355183['currentTarget'];
                        setTimeout(function () {

                            _0x270bee['contains'](document['activeElement']) && _0x1edc67['call'](_0x5aac09, _0x5aac09['elements'], 'focusgame');
                        }, 0x0);
                    });
                }
            }, {
                'key': 'media',
                'value': function () {
                    var _0x427a54 = this['emulator'],
                        _0x4690fc = _0x427a54['elements'],
                        _0x2a5f85 = _0x427a54;
                    _0x58fce2['call'](_0x2a5f85, _0x2a5f85['game'], 'volumechange', function (_0x2119ae) {

                        return _0x28f202['updateVolume']['call'](_0x2a5f85, _0x2119ae);
                    }), _0x58fce2['call'](_0x2a5f85, _0x4690fc['container'], 'contextmenu', function (_0x479aa) {

                        _0x2a5f85['touch'] || _0x2a5f85['lightgun'] || _0x2a5f85['mouse'] || _0x28f202['toggleContextMenu']['call'](_0x2a5f85, _0x479aa, !0x0), _0x479aa['preventDefault']();
                    }, !0x1), _0x58fce2['call'](_0x2a5f85, _0x4690fc['container'], 'mousewheel', function (_0x2e1850) {

                        _0x2e1850['stopPropagation']();
                    }, !0x1), _0x58fce2['call'](_0x2a5f85, _0x4690fc['container'], 'mousedown', function (_0x517029) {

                        _0x2a5f85['touch'] || _0x2a5f85['mouse'] || _0x28f202['toggleContextMenu']['call'](_0x2a5f85, _0x517029, !0x1);
                    }, !0x1), _0x58fce2['call'](_0x2a5f85, _0x2a5f85['game'], 'volumechange', function () {

                        _0x2a5f85['storage']['set']({
                            'volume': _0x2a5f85['volume'],
                            'muted': _0x2a5f85['muted']
                        }), _0x46cf61['setVolume'] && _0x46cf61['setVolume']();
                    });
                    var _0x2bddff = _0x2a5f85['config']['events']['concat'](['keyup', 'keydown'])['join'](' ');
                    _0x58fce2['call'](_0x2a5f85, _0x2a5f85['game'], _0x2bddff, function (_0x350e08) {
                        var _0x2e6c86 = _0x350e08['detail'],
                            _0x2882c6 = void 0x0 === _0x2e6c86 ? {} : _0x2e6c86;
                        'error' === _0x350e08['type'] && (_0x2882c6 = _0x2a5f85['game']['error']), _0x1edc67['call'](_0x2a5f85, _0x4690fc['container'], _0x350e08['type'], !0x0, _0x2882c6);
                    });
                }
            }, {
                'key': 'proxy',
                'value': function (_0x3adb7, _0x40c8d9, _0x856576) {
                    var _0x3b3063 = this['emulator'],
                        _0x3dd353 = _0x3b3063['config']['listeners'][_0x856576],
                        _0x30451d = !0x0;
                    I.func(_0x3dd353) && (_0x30451d = _0x3dd353['call'](_0x3b3063, _0x3adb7)), _0x30451d && I.func(_0x40c8d9) && _0x40c8d9['call'](_0x3b3063, _0x3adb7);
                }
            }, {
                'key': 'bind',
                'value': function (_0x3d88e3, _0x54a934, _0x15bce6, _0x3e5975) {
                    var _0x5820fb = this,
                        _0x33fbf9 = !(0x4 < arguments['length'] && void 0x0 !== arguments[0x4]) || arguments[0x4],
                        _0x450519 = this['emulator'],
                        _0x41bcb1 = _0x450519,
                        _0x1d070b = _0x41bcb1['config']['listeners'][_0x3e5975],
                        _0x26b03d = I.func(_0x1d070b);
                    _0x58fce2['call'](_0x41bcb1, _0x3d88e3, _0x54a934, function (_0x41af3d) {
                        return _0x5820fb['proxy'](_0x41af3d, _0x15bce6, _0x3e5975);
                    }, _0x33fbf9 && !_0x26b03d);
                }
            }, {
                'key': 'controls',
                'value': function () {
                    var _0x16b6ed = this,
                        _0x33d2cb = this['emulator'],
                        _0xb71517 = _0x33d2cb['elements'],
                        _0x282473 = _0x53be21['isIE'] ? 'change' : 'input';
                    if (this['bind'](_0xb71517['buttons']['mute'], 'click', function () {

                            _0x33d2cb['muted'] = !_0x33d2cb['muted'];
                        }, 'mute'), this['bind'](_0xb71517['buttons']['fullscreen'], 'click', function () {
                            _0x33d2cb['fullscreen']['toggle']();
                        }, 'fullscreen'), this['bind'](_0xb71517['buttons']['gamepad'], 'click', function () {

                            _0x514a8c['toggleControls']['call'](_0x33d2cb, !0x1), _0x9268bd(_0xb71517['dialogs']['gamepad'], !0x1);
                        }, 'mute'), this['bind'](_0xb71517['buttons']['saveState'], 'click', function () {

                            _0x1edc67['call'](_0x33d2cb, _0x33d2cb['elements']['container'], 'savestate-start', !0x1, {});
                            var _0x5c7551 = _0x46cf61['saveState'](),
                                _0x50421c = _0x46cf61['getScreenData']();
                            _0x1edc67['call'](_0x33d2cb, _0x33d2cb['elements']['container'], 'savestate', !0x1, {
                                'state': _0x5c7551,
                                'screenshot': _0x50421c
                            });
                        }, 'mute'), this['bind'](_0xb71517['buttons']['loadState'], 'click', function () {

                            _0x1edc67['call'](_0x33d2cb, _0x33d2cb['elements']['container'], 'loadstate', !0x1, {});
                        }, 'mute'), this['bind'](_0xb71517['buttons']['settings'], 'click', function (_0x3f0c00) {

                            _0x3f0c00['stopPropagation'](), _0x28f202['toggleMenu']['call'](_0x33d2cb, _0x3f0c00);
                        }), this['bind'](_0xb71517['buttons']['settings'], 'keyup', function (_0x80e301) {
                            var _0x3f0772 = _0x80e301['which'];
                            return [0xd, 0x20]['includes'](_0x3f0772) ? 0xd === _0x3f0772 ? void _0x28f202['focusFirstMenuItem']['call'](_0x33d2cb, null, !0x0) : (_0x80e301['preventDefault'](), _0x80e301['stopPropagation'](), void _0x28f202['toggleMenu']['call'](_0x33d2cb, _0x80e301)) : void 0x0;
                        }, null, !0x1), this['bind'](_0xb71517['settings']['menu'], 'keydown', function (_0x235019) {

                            0x1b === _0x235019['which'] && _0x28f202['toggleMenu']['call'](_0x33d2cb, _0x235019);
                        }), _0x53be21['isIos']) {
                        var _0x4aa84e = _0x5161da['call'](_0x33d2cb, 'input[type="range"]');
                        Array['from'](_0x4aa84e)['forEach'](function (_0x2d8d96) {
                            return _0x16b6ed['bind'](_0x2d8d96, _0x282473, function (_0x45c49d) {

                                return _0x2e127f(_0x45c49d['target']);
                            });
                        });
                    }
                    _0x53be21['isWebkit'] && Array['from'](_0x5161da['call'](_0x33d2cb, 'input[type="range"]'))['forEach'](function (_0xfcee6d) {

                        _0x16b6ed['bind'](_0xfcee6d, 'input', function (_0x29ab03) {

                            return _0x28f202['updateRangeFill']['call'](_0x33d2cb, _0x29ab03['target']);
                        });
                    }), this['bind'](_0xb71517['inputs']['volume'], _0x282473, function (_0x25ddfa) {

                        _0x33d2cb['volume'] = _0x25ddfa['target']['value'];
                    }, 'volume'), this['bind'](_0xb71517['controls'], 'mouseenter mouseleave', function (_0x16ede7) {

                        _0xb71517['controls']['hover'] = 'mouseleave' === _0x16ede7['type'] && null === _0x16ede7['toElement'] || !_0x33d2cb['touch'] && 'mouseenter' === _0x16ede7['type'];
                    }), this['bind'](_0xb71517['controls'], 'mousedown mouseup touchstart touchend touchcancel', function (_0x50203f) {

                        if (['mousedown', 'touchstart']['includes'](_0x50203f['type'])) {
                            _0xb71517['controls']['pressed'] = !0x0;
                            var _0x4a1f27 = _0xb71517['controls']['getAttribute']('data-timer2');
                            clearTimeout(_0x4a1f27);
                        } else {
                            var _0x4e1477 = setTimeout(function () {

                                _0xb71517['controls']['pressed'] = !0x1;
                            }, 0xfa0);
                            _0xb71517['controls']['setAttribute']('data-timer2', _0x4e1477);
                        }
                    }), this['bind'](_0xb71517['controls'], 'focusin focusout', function (_0x6bafde) {
                        var _0x1603da = _0x33d2cb['config'],
                            _0x1c2d02 = _0x33d2cb['elements'],
                            _0x8d107e = 'focusin' === _0x6bafde['type'],
                            _0x42d71e = _0x1c2d02['controls']['getAttribute']('data-timer');
                        if (_0x5149bc(_0x1c2d02['controls'], _0x1603da['classNames']['noTransition'], _0x8d107e), _0x514a8c['toggleControls']['call'](_0x33d2cb, _0x8d107e), _0x8d107e) {
                            setTimeout(function () {

                                _0x5149bc(_0x1c2d02['controls'], _0x1603da['classNames']['noTransition'], !0x1);
                            }, 0x0);
                            var _0x56dab9 = _0x16b6ed['touch'] ? 0xbb8 : 0xfa0;
                            clearTimeout(_0x42d71e), _0x42d71e = setTimeout(function () {

                                return _0x514a8c['toggleControls']['call'](_0x33d2cb, !0x1);
                            }, _0x56dab9), _0x1c2d02['controls']['setAttribute']('data-timer', _0x42d71e);
                        }
                    }), this['bind'](_0xb71517['inputs']['volume'], 'wheel', function (_0xf9e450) {
                        var _0x22621f = _0xf9e450['webkitDirectionInvertedFromDevice'],
                            _0x42f6a0 = _0x491caa([_0xf9e450['deltaX'], -_0xf9e450['deltaY']]['map'](function (_0x37d638) {
                                return _0x22621f ? -_0x37d638 : _0x37d638;
                            }), 0x2),
                            _0x3572eb = _0x42f6a0[0x0],
                            _0x339cfc = _0x42f6a0[0x1],
                            _0x106c65 = Math['sign'](_0x1d0cbb(_0x3572eb) > _0x1d0cbb(_0x339cfc) ? _0x3572eb : _0x339cfc);
                        _0x33d2cb['increaseVolume'](_0x106c65 / 0x32);
                        var _0x2d706a = _0x33d2cb['game']['volume'];
                        (0x1 === _0x106c65 && 0x1 > _0x2d706a || -0x1 === _0x106c65 && 0x0 < _0x2d706a) && _0xf9e450['preventDefault']();
                    }, 'volume', !0x1), this['bind'](_0xb71517['controls'], 'contextmenu', function (_0x4194ef) {

                        _0x4194ef['stopPropagation']();
                    }), this['bind'](_0xb71517['contextMenu'], 'contextmenu', function (_0x546dba) {

                        _0x546dba['stopPropagation']();
                    });
                }
            }]), _0x29ea2a;
        }());
    class EJS_CLASS {
        create() {
            var E = this;
            window['URL'] = window['URL'] || window['webkitURL'];
            var _0x256faf = 0x0,
                _0x2cba0a = !0x1,
                _0x5bf649 = {
                    'psx': ['bin', 'iso', 'cue', 'img', 'mdf', 'pbp', 'toc', 'cbn', 'm3u'],
                    'nds': ['nds', 'bin'],
                    'mesen': ['fds', 'nes', 'unif', 'unf'],
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
                _0x30632c = {
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
            var _0x99e2d1 = document['createElement']('canvas'),
                _0x2af7fe = document['createElement']('input');
            _0x9268bd(_0x2af7fe, !0x0);
            this['game']['appendChild'](_0x99e2d1);
            this['game']['appendChild'](_0x2af7fe);
            _0xb3d5b3['loading'] = _0x110b30('div', {
                'class': this['config']['classNames']['loading']
            });
            this['elements']['container']['appendChild'](_0xb3d5b3['loading']);
            var _0x58c6c3 = {
                'loading-info': _0xa96c03({
                    'loading-info': !0x0
                }),
                'ad': _0xa96c03({
                    'ad-11': !0x0
                }),
                'close-ad': _0xa96c03({
                    'close-ad': !0x0
                }),
                'start-game': _0xa96c03({
                    'start-game': !0x0
                }),
                'on': _0xa96c03({
                    'on': !0x0
                }),
                'p1': _0xa96c03({
                    'p1': !0x0
                }),
                'p2': _0xa96c03({
                    'p2': !0x0
                }),
                'p3': _0xa96c03({
                    'p3': !0x0
                }),
                'p4': _0xa96c03({
                    'p4': !0x0
                })
            };
            (_0xb3d5b3['loading']['innerHTML'] = (`
        <div>
     ` + '   <div class="')['concat'](_0x58c6c3['ad'], '" style="display:block !important;width:300px !important;z-index:1 !important;height:250px !important;visibility: visibl' + `e !important;">
    ` + '    <div class="')['concat'](_0x58c6c3['close-ad'], '" hidden><a href="#" onclick="return fal' + `se"></a></div>
     ` + '   \n        </div>\n        <div class="')['concat'](_0x58c6c3['loading-info'], '" style="position: absolute;bottom: 20px;left: 50%;transform: translateX(-50%);z-index:2">\n        <div class="')['concat'](_0x58c6c3['p1'], `"></div>
        <di` + 'v class="')['concat'](_0x58c6c3['p2'], `"></div>
        <di` + 'v class="')['concat'](_0x58c6c3['p3'], '"></div>\n        </d' + `iv>
        <div sty` + 'le="position: absolute;bottom: 20px;left: 50%;transform: translateX(-50%);width: 100%;text-align: ce' + `nter;z-index: 1;">
 ` + '       <a href="#" onclick="return false" class="')['concat'](_0x58c6c3['start-game'], '">')['concat'](_0x1270d7('playNow', E['config']), `</a>

        <div s` + 'tyle="font-size: 18px;padding-top:5px;di' + `splay:none">
       ` + ` Save Game Roms: 
  ` + '      <label for="ejs-save-rom-1"><input id="ejs-save-rom-1" name="ejs-save-rom" type="radio"> Local' + ` Directory </label>
` + '        <label for="ejs-save-rom-2"><input id="ejs-save-rom-2" name="ejs-save-rom" type="radio"> Browser Storage </label' + `>
        <label for` + '="ejs-save-rom-3"><input id="ejs-save-rom-3" name="ejs-save-rom" type="radio"> D' + `on't Save </label>
 ` + '       </div>\n\n        </div>\n        </div>'), _0xb3d5b3['adCloseId'] = 'ejs-' ['concat'](_0x3463a5(0x5f5e100 * Math['random']()) + 0x1), _0xb3d5b3['startGameId'] = 'ejs-' ['concat'](_0x3463a5(0x5f5e100 * Math['random']()) + 0x1), _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['close-ad']))['setAttribute']('id', _0xb3d5b3['adCloseId']), _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['start-game']))['setAttribute']('id', _0xb3d5b3['startGameId']), E['mode'],
                0x1 != E['mode'] || _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['ad']))['remove'](), _0x58fce2['call'](E, E['elements']['container'], 'click', function (_0x64dde3) {

                    if (E['started']) {
                        var _0x369875 = _0x56b7e6['call'](E, getClassName('ejs__dialogs', !0))['querySelector'](getClassName('ejs__focus_notice__container', !0));
                        _0x369875 && _0x369875['contains'](_0x64dde3['target']) && setTimeout(function () {
                            _0x9268bd(_0x369875, !0x0);
                        }, 0x5);
                    }
                }), _0x58fce2['call'](E, E['elements']['container'], 'focusin', function () {

                    if (document['activeElement'] != E['elements']['container']) return !0x1;
                    E['focused'] = !0x0, _0x9268bd(_0x56b7e6['call'](E, getClassName('ejs__dialogs', !0))['querySelector'](getClassName('ejs__focus_notice__container', !0)), !0x0);
                }), _0x58fce2['call'](E, E['elements']['container'], 'focusout', function (_0x5974c2) {

                    if (E['started'] && !_0x5974c2['relatedTarget']) {
                        if (E['elements']['container'] == _0x5974c2['srcElement']) {
                            var _0x388b19 = document['querySelectorAll']('.' ['concat'](_0xa96c03({
                                    'ejs': !0x0
                                }), ' > *')),
                                _0x642dab = !0x0;
                            if (_0x388b19['forEach'](function (_0x31b7ad) {

                                    _0x108b6f(_0x31b7ad, _0xa96c03({
                                        'ejs__controls': !0x0
                                    })) || _0x108b6f(_0x31b7ad, E['config']['classNames']['wrapper']) || _0x108b6f(_0x31b7ad, _0xa96c03({
                                        'ejs__widgets': !0x0
                                    })) || _0x108b6f(_0x31b7ad, _0xa96c03({
                                        'ejs__dialogs': !0x0
                                    })) || _0x108b6f(_0x31b7ad, _0xa96c03({
                                        'ejs__contextmenu': !0x0
                                    })) || _0x108b6f(_0x31b7ad, _0xa96c03({
                                        'ejs--loading': !0x0
                                    })) || !(_0x31b7ad['clientWidth'] >= 0.8 * E['elements']['container']['clientWidth']) || !(_0x31b7ad['clientHeight'] >= 0.8 * E['elements']['container']['clientHeight']) || (_0x642dab = !0x1);
                                }), !_0x642dab) return E['focused'] = !0x1, !0x1;
                            var _0x12c1bc = _0x56b7e6['call'](E, getClassName('ejs__dialogs', !0))['querySelector'](getClassName('ejs__focus_notice__container', !0));
                            if (_0x12c1bc) _0x9268bd(_0x12c1bc, !0x1);
                            else {
                                var _0x1aec68 = _0x110b30('div', {
                                        'class': _0xa96c03({
                                            'ejs__dialog': !0x0,
                                            'ejs__focus_notice__container': !0x0
                                        })
                                    }),
                                    _0x1bfa1b = _0x110b30('div', {
                                        'style': 'color:#fff !important'
                                    });
                                _0x1bfa1b['innerHTML'] = 'Click to make keyboard keys work', _0x1aec68['appendChild'](_0x1bfa1b);
                                var _0x57bc39 = _0x110b30('div', {
                                    'style': 'color: #fff !important;position: absolute;bottom: 0;font-size: 12px;font-weight: 400;margin: 0;padding: 0;right: 0;'
                                });
                                _0x57bc39['innerHTML'] = ('<a href="https://www.emulatorjs.com/" target="_blank">EMULATORJS.COM v')['concat'](E['version'], '</a>'), _0x1aec68['appendChild'](_0x57bc39), _0x56b7e6['call'](E, getClassName('ejs__dialogs', !0))['appendChild'](_0x1aec68);
                            }
                            E['focused'] = !0x1;
                        } else E['elements']['container']['focus']();
                    }
                }), _0x236fc8['webgl']['DETECTED']) || (_0x9268bd(_0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['start-game'])), !0x0), _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['p3']))['innerHTML'] = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Failed to initialize WebGL.</strong>');
            _0x58fce2['call'](E, E['elements']['container'], 'start-game', function () {
                if (E['started'] = !0x0, E['playing'] = !0x0, E['pointerlock']) {
                    var _0x44c397 = _0xb3d5b3['Module']['specialHTMLTargets']['#canvas-mouse'];
                    _0x58fce2['call'](E, _0x56b7e6['call'](E, getClassName('ejs__dialogs', !0)), 'mousedown', function () {

                        return !(0x0 < Object['keys'](E['elements']['dialogs'])['filter'](function (_0x189e7e) {

                            return null == E['elements']['dialogs'][_0x189e7e]['getAttribute']('hidden');
                        })['length']) && void(!_0x53be21['isMobileDevice'] && _0x44c397['requestPointerLock'] && (function () {
                            var _0x5bf6e5 = _0x44c397['requestPointerLock']();
                            _0x5bf6e5 && _0x5bf6e5['then'](function () {})['catch'](function () {});
                        }()));
                    });
                }
                E['keyboard'] && Array['from'](_0x5161da['call'](E, '.' ['concat'](E['config']['classNames']['hotkey'])) || [])['forEach'](function (_0x5e39ed) {
                    _0x9268bd(_0x5e39ed, !0x0);
                }), _0x9268bd(_0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['loading-info'])), !0x0), _0x514a8c['toggleControls']['call'](E, !0x0);
                var _0xe09e41 = _0xa96c03({
                        'ejs__tooltip--visible': !0x0
                    }),
                    _0x157b96 = E['elements']['buttons']['gamepad']['querySelector'](getClassName('ejs__tooltip', !0));
                _0x5149bc(_0x157b96, _0xe09e41, !0x0), setTimeout(function () {
                    _0x5149bc(_0x157b96, _0xe09e41, !0x1);
                }, 0x1388), _0x9268bd(_0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['start-game'])), !0x0);
                var _0x73fd1d = _0x23c7cf(_0x28f202['defaultCoreOptionsValues']['call'](E), _0x28f202['storage']['get']('core-options') || {});
                'n64' === E['system'] && _0x73fd1d && Object['keys'](_0x73fd1d)['forEach'](function (_0x1c89cc) {

                    'glupen64-aspect' === _0x1c89cc && '16:9' === _0x73fd1d[_0x1c89cc] && (_0x99e2d1['height'] = _0x99e2d1['width'] / 0x10 * 0x9, _0xb3d5b3['aspectRatio'] = 0x10 / 0x9);
                }), ('arcade' === E['system'] || 'fba0.2.97.29' === E['system']) && _0x73fd1d && Object['keys'](_0x73fd1d)['forEach'](function (_0x14c10b) {

                    'fba-aspect' === _0x14c10b && 'PAR' === _0x73fd1d[_0x14c10b] && (_0x99e2d1['height'] = _0x99e2d1['width'] / 0x10 * 0x9, _0xb3d5b3['aspectRatio'] = 0x10 / 0x9);
                }), 'gba' === E['system'] && (_0x99e2d1['height'] = _0x99e2d1['width'] / 1.5, _0xb3d5b3['aspectRatio'] = 1.5), 'nds' === E['system'] && _0x28f202['fixNdsSize']['call'](E), window['setTimeout'](function () {}, 0x96), (function () {
                    var _0x952e2f = E;
                    if ('undefined' != typeof RI) {
                        document['removeEventListener']('mousemove', RI['eventHandler'], !0x1), _0x99e2d1['removeEventListener']('mousedown', RI['canvasEventHandler'], !0x1), _0x99e2d1['removeEventListener']('mouseup', RI['canvasEventHandler'], !0x1), (_0x952e2f['elements']['container']['addEventListener']('mousemove', function (_0x5898b3) {
                            var _0x53170f = 0x0,
                                _0x4d1502 = 0x0,
                                _0x189fdf = _0x5898b3['offsetX'] - _0xb3d5b3['Module']['canvas']['offsetLeft'],
                                _0x30ff70 = _0x5898b3['offsetY'] - _0xb3d5b3['Module']['canvas']['offsetTop'];
                            switch (_0x5898b3['type']) {
                                case 'mousemove':
                                    0x0 > _0x189fdf ? (_0x189fdf = 0x0, _0x53170f = -_0xb3d5b3['Module']['canvas']['offsetWidth']) : _0x189fdf > _0xb3d5b3['Module']['canvas']['offsetWidth'] ? (_0x189fdf = _0xb3d5b3['Module']['canvas']['offsetWidth'], _0x53170f = _0xb3d5b3['Module']['canvas']['offsetWidth']) : _0x53170f = _0x189fdf - RI['currentX'], 0x0 > _0x30ff70 ? (_0x30ff70 = 0x0, _0x4d1502 = -_0xb3d5b3['Module']['canvas']['offsetHeight']) : _0x30ff70 > _0xb3d5b3['Module']['canvas']['offsetHeight'] ? (_0x30ff70 = _0xb3d5b3['Module']['canvas']['offsetHeight'], _0x4d1502 = _0xb3d5b3['Module']['canvas']['offsetHeight']) : _0x4d1502 = _0x30ff70 - RI['currentY'], RI['currentX'] = _0x189fdf, RI['currentY'] = _0x30ff70;
                                    for (var _0xedda11 = 0x0; _0xedda11 < RI['contexts']['length']; _0xedda11 += 0x1) HEAP32[RI['contexts'][_0xedda11]['state'] + 0x20 >> 0x2] = _0x53170f, HEAP32[RI['contexts'][_0xedda11]['state'] + 0x24 >> 0x2] = _0x4d1502;
                            }
                        }, !0x1), _0x952e2f['elements']['container']['addEventListener']('mousedown', RI['canvasEventHandler'], !0x1), _0x952e2f['elements']['container']['addEventListener']('mouseup', RI['canvasEventHandler'], !0x1));
                        var _0x2ae2e4 = function (_0x21baaa) {

                            if (_0x21baaa['targetTouches'][0x0]) {
                                var _0x424829, _0x5deb6c, _0x364e93 = 0x0,
                                    _0x3529ce = 0x0,
                                    _0x450163 = _0x21baaa['target']['getBoundingClientRect'](),
                                    _0x330066 = _0x21baaa['targetTouches'][0x0]['clientX'] - _0x450163['left'],
                                    _0x4e3194 = _0x21baaa['targetTouches'][0x0]['clientY'] - _0x450163['top'];
                                0x0 > _0x330066 ? (_0x330066 = 0x0, _0x364e93 = -_0xb3d5b3['Module']['canvas']['offsetWidth']) : _0x330066 > _0xb3d5b3['Module']['canvas']['offsetWidth'] ? (_0x330066 = _0xb3d5b3['Module']['canvas']['offsetWidth'], _0x364e93 = _0xb3d5b3['Module']['canvas']['offsetWidth']) : _0x364e93 = _0x330066 - RI['currentX'], 0x0 > _0x4e3194 ? (_0x4e3194 = 0x0, _0x3529ce = -_0xb3d5b3['Module']['canvas']['offsetHeight']) : _0x4e3194 > _0xb3d5b3['Module']['canvas']['offsetHeight'] ? (_0x4e3194 = _0xb3d5b3['Module']['canvas']['offsetHeight'], _0x3529ce = _0xb3d5b3['Module']['canvas']['offsetHeight']) : _0x3529ce = _0x4e3194 - RI['currentY'], RI['currentX'] = _0x330066, RI['currentY'] = _0x4e3194;
                                for (var _0x14c627 = 0x0; _0x14c627 < RI['contexts']['length']; _0x14c627 += 0x1) HEAP32[RI['contexts'][_0x14c627]['state'] + 0x20 >> 0x2] = _0x364e93, HEAP32[RI['contexts'][_0x14c627]['state'] + 0x24 >> 0x2] = _0x3529ce;
                                switch (_0x21baaa['type']) {
                                    case 'touchend':
                                    case 'touchstart':
                                        if (0x0 === _0x21baaa['button']) _0x5deb6c = 0x28;
                                        else {
                                            if (0x2 !== _0x21baaa['button']) break;
                                            _0x5deb6c = 0x29;
                                        }
                                        _0x424829 = 'touchend' === _0x21baaa['type'] ? 0x0 : 0x1;
                                        for (var _0x4096e2 = 0x0; _0x4096e2 < RI['contexts']['length']; _0x4096e2 += 0x1) HEAP8[RI['contexts'][_0x4096e2]['state'] + _0x5deb6c >> 0x0] = _0x424829;
                                }
                            }
                        };
                        _0x952e2f['elements']['container']['addEventListener']('touchstart', _0x2ae2e4, !0x1), _0x952e2f['elements']['container']['addEventListener']('touchend', _0x2ae2e4, !0x1);
                    } else {
                        var _0x4d4fc4 = function (_0x187dfb) {
                            var _0x162166 = new MouseEvent(_0x187dfb['type'], {
                                'isTrusted': !0x1,
                                'altKey': _0x187dfb['altKey'],
                                'bubbles': !0x1,
                                'button': _0x187dfb['button'],
                                'buttons': _0x187dfb['buttons'],
                                'cancelBubble': !0x1,
                                'cancelable': !0x0,
                                'clientX': _0x187dfb['clientX'],
                                'clientY': _0x187dfb['clientY'],
                                'composed': !0x0,
                                'ctrlKey': !0x1,
                                'defaultPrevented': !0x1,
                                'detail': _0x187dfb['detail'],
                                'eventPhase': _0x187dfb['eventPhase'],
                                'layerX': _0x187dfb['layerX'],
                                'layerY': _0x187dfb['layerY'],
                                'metaKey': _0x187dfb['metaKey'],
                                'movementX': _0x187dfb['movementX'],
                                'movementY': _0x187dfb['movementY'],
                                'offsetX': _0x187dfb['offsetX'],
                                'offsetY': _0x187dfb['offsetY'],
                                'pageX': _0x187dfb['pageX'],
                                'pageY': _0x187dfb['pageY'],
                                'which': _0x187dfb['which'],
                                'x': _0x187dfb['x'],
                                'y': _0x187dfb['y']
                            });
                            _0xb3d5b3['Module']['canvas']['dispatchEvent'](_0x162166), _0x952e2f['elements']['wrapper']['dispatchEvent'](_0x162166), _0x952e2f['system'];
                        };
                        _0xb3d5b3['Module']['canvas']['addEventListener']('mousemove', function (_0x796663) {

                            _0x796663['stopPropagation']();
                        }), _0xb3d5b3['Module']['canvas']['addEventListener']('mousedown', function (_0x4455eb) {
                            _0x4455eb['stopPropagation']();
                        }), _0xb3d5b3['Module']['canvas']['addEventListener']('mouseup', function (_0x5d4042) {

                            _0x5d4042['stopPropagation']();
                        }), _0xb3d5b3['Module']['canvas']['addEventListener']('touchstart', function (_0x590c40) {
                            _0x590c40['stopPropagation']();
                        }), _0xb3d5b3['Module']['canvas']['addEventListener']('touchend', function (_0x3d7d12) {
                            _0x3d7d12['stopPropagation']();
                        }), _0xb3d5b3['Module']['canvas']['addEventListener']('touchmove', function (_0x2990c2) {
                            _0x2990c2['stopPropagation']();
                        });
                        var _0xc63f4f = function (_0x17acc7) {
                            var _0x4dfd9b, _0x1e3122 = {
                                'isTrusted': !0x1,
                                'altKey': _0x17acc7['altKey'],
                                'bubbles': !0x1,
                                'button': _0x17acc7['button'],
                                'buttons': _0x17acc7['buttons'],
                                'cancelBubble': !0x1,
                                'cancelable': !0x0,
                                'clientX': _0x17acc7['touches'][0x0] ? _0x17acc7['touches'][0x0]['clientX'] : 0x0,
                                'clientY': _0x17acc7['touches'][0x0] ? _0x17acc7['touches'][0x0]['clientY'] : 0x0,
                                'composed': !0x0,
                                'ctrlKey': !0x1,
                                'defaultPrevented': !0x1,
                                'detail': _0x17acc7['detail'],
                                'eventPhase': _0x17acc7['eventPhase'],
                                'layerX': _0x17acc7['layerX'],
                                'layerY': _0x17acc7['layerY'],
                                'metaKey': _0x17acc7['metaKey'],
                                'movementX': _0x17acc7['movementX'],
                                'movementY': _0x17acc7['movementY'],
                                'offsetX': _0x17acc7['offsetX'],
                                'offsetY': _0x17acc7['offsetY'],
                                'pageX': _0x17acc7['touches'][0x0] ? _0x17acc7['touches'][0x0]['pageX'] : 0x0,
                                'pageY': _0x17acc7['touches'][0x0] ? _0x17acc7['touches'][0x0]['pageY'] : 0x0,
                                'which': _0x17acc7['which'],
                                'x': _0x17acc7['touches'][0x0] ? _0x17acc7['touches'][0x0]['screenX'] : 0x0,
                                'y': _0x17acc7['touches'][0x0] ? _0x17acc7['touches'][0x0]['screenY'] : 0x0
                            };
                            'touchstart' == _0x17acc7['type'] ? _0x4dfd9b = new MouseEvent('mousedown', _0x1e3122) : 'touchend' == _0x17acc7['type'] ? _0x4dfd9b = new MouseEvent('mouseup', _0x1e3122) : 'touchmove' == _0x17acc7['type'] && (_0x4dfd9b = new MouseEvent('mousemove', _0x1e3122)), _0x4dfd9b && (_0xb3d5b3['Module']['canvas']['dispatchEvent'](_0x4dfd9b), _0x952e2f['elements']['wrapper']['dispatchEvent'](_0x4dfd9b), _0x952e2f['system']);
                        };
                        _0x952e2f['elements']['container']['addEventListener']('mousemove', _0x4d4fc4, !0x1), _0x952e2f['elements']['container']['addEventListener']('mousedown', _0x4d4fc4, !0x1), _0x952e2f['elements']['container']['addEventListener']('mouseup', _0x4d4fc4, !0x1), _0x952e2f['elements']['container']['addEventListener']('touchstart', _0xc63f4f, !0x1), _0x952e2f['elements']['container']['addEventListener']('touchend', _0xc63f4f, !0x1), _0x952e2f['elements']['container']['addEventListener']('touchmove', _0xc63f4f, !0x1);
                    }
                }()), 'msx' === E['system'] && (function () {

                    if ('undefined' != typeof RI) {
                        document['removeEventListener']('keydown', RI['eventHandler'], !0x1), document['removeEventListener']('keyup', RI['eventHandler'], !0x1);
                        var _0x3a958a = function (_0x5505f2) {
                            var _0x20520a = _0x5505f2['keyCode'],
                                _0x1b7320 = _0x20520a >> 0x3,
                                _0x3e1d4e = 0x1 << (0x7 & _0x20520a);
                            switch (_0x5505f2['type']) {
                                case 'keyup':
                                case 'keydown':
                                    if (0x20 <= _0x1b7320) throw 'key code error! bad code: ' + _0x20520a;
                                    for (var _0x54d0be, _0x3a1585 = 0x0; _0x3a1585 < RI['contexts']['length']; _0x3a1585++) _0x54d0be = HEAP8[RI['contexts'][_0x3a1585]['state'] + _0x1b7320 >> 0x0], 'keyup' === _0x5505f2['type'] ? _0x54d0be &= ~_0x3e1d4e : _0x54d0be |= _0x3e1d4e, HEAP8[RI['contexts'][_0x3a1585]['state'] + _0x1b7320 >> 0x0] = _0x54d0be;
                            }
                        };
                        document['addEventListener']('keydown', _0x3a958a, !0x1), document['addEventListener']('keyup', _0x3a958a, !0x1);
                    }
                }()), setTimeout(function () {

                    !(function () {
                        var _0x203801 = _0x53be21['info']();
                        null === _0x46cf61['setVolume'] && 'undefined' != typeof RA ? (RA['queueAudio'] = function () {
                            var _0x298402, _0x292be5 = E['volume'],
                                _0x48bdd6 = RA['bufIndex'];
                            _0x298402 = RA['bufIndex'] ? RA['buffers'][RA['bufIndex'] - 0x1]['endTime'] : RA['context']['currentTime'], RA['buffers'][_0x48bdd6]['endTime'] = _0x298402 + RA['buffers'][_0x48bdd6]['duration'];
                            var _0x32b2ac = RA['context']['createBufferSource']();
                            if (_0x32b2ac['buffer'] = RA['buffers'][_0x48bdd6], E['muted'] && (_0x292be5 = 0x0), 0x1 === _0x292be5) _0x32b2ac['connect'](RA['context']['destination']);
                            else {
                                var _0x316bd5 = RA['context']['createGain']();
                                _0x32b2ac['connect'](_0x316bd5), _0x316bd5['connect'](RA['context']['destination']), _0x53be21['isEdge'] || 'chrome' === _0x203801['name'] && 0x3c >= parseInt(_0x203801['version'], 0xa) || 'firefox' === _0x203801['name'] && 0x38 >= parseInt(_0x203801['version'], 0xa) || 'opera' === _0x203801['name'] && 0x2c >= parseInt(_0x203801['version'], 0xa) ? _0x316bd5['gain']['value'] = _0x292be5 : 'firefox' === _0x203801['name'] ? _0x316bd5['gain']['setValueAtTime'](_0x292be5, RA['context']['currentTime']) : _0x316bd5['gain']['setValueAtTime'](_0x292be5, RA['context']['currentTime'], 0x0);
                            }
                            _0x32b2ac['start'](_0x298402), RA['bufIndex'] += 0x1, RA['bufOffset'] = 0x0;
                        }, _0x53be21['isIos'] && window['addEventListener']('touchstart', function () {

                            if (RA['context']) {
                                RA['context']['resume']();
                                var _0x552c5e = RA['context']['createBufferSource']();
                                _0x552c5e['connect'](RA['context']['destination']), _0x552c5e['start']();
                            }
                        }, !0x1)) : _0x46cf61['setVolume'] && _0x46cf61['setVolume']();
                    }());
                }, 0x64), setTimeout(function () {

                    E['elements']['container']['focus']();
                }, 0x1e), void 0x0 === window['addRunDependency'];
                var _0x41b3a0 = _0xb3d5b3['FS']['readFile'](E['startName']);
                if (0x8000000 >= _0x41b3a0['length']) {
                    var _0x1383d0;
                    if (['snes', 'snes2002', 'snes2005', 'snes2010']['includes'](E['system'])) {
                        var _0x476997 = _0x41b3a0['length'] % 0x400;
                        _0x1383d0 = new _0x47ef4e(_0x476997 ? _0x41b3a0['slice'] ? _0x41b3a0['slice'](_0x476997) : _0x41b3a0['subarray'](_0x476997) : _0x41b3a0);
                    } else _0x1383d0 = new _0x47ef4e(_0x41b3a0);
                    /*
                    var _0xfb823a = _0x5ef41b['a']['create'](),
                        _0xda0322 = new FileReader(),
                        _0x2943b4 = 0x0,
                        _0x46e133 = _0x1383d0['_u8array']['length']
                        ;_0xda0322['onload'] = function (_0x2df49a) {

                            try {
                                _0xfb823a['update'](_0x2df49a['target']['result']), (function () {

                                    if (_0x2943b4 < _0x46e133) {
                                        var _0x9a4f63 = _0x3d9513(_0x2943b4 + 0x200000, _0x46e133);
                                        _0xda0322['readAsArrayBuffer'](new Blob([_0x1383d0['_u8array']['slice'](_0x2943b4, _0x9a4f63)])), _0x2943b4 = _0x9a4f63;
                                    } else console['log'](_0xfb823a['hex']()), E['hash'] = _0xfb823a['hex'](), 'function' == typeof window['ejsromshash'] && window['ejsromshash'](E['startName'], E['hash']);
                                }());
                            } catch (_0x3a4f09) {
                                console['log'](_0x3a4f09);
                            }
                        };
                        _0x1c5f48['padStart'] || (_0x1c5f48['padStart'] = function (_0x35f66d, _0x5b70f6) {

                            return _0x35f66d >>= 0x0, _0x5b70f6 = (void 0x0 === _0x5b70f6 ? ' ' : _0x5b70f6) + '', this['length'] > _0x35f66d ? this + '' : ((_0x35f66d -= this['length']) > _0x5b70f6['length'] && (_0x5b70f6 += _0x5b70f6['repeat'](_0x35f66d / _0x5b70f6['length'])), _0x5b70f6['slice'](0x0, _0x35f66d) + (this + ''));
                        }),
                    if ( _0x28f202['supportNetPlay']['call'](E) && _0x46cf61['netPlayHost']) {
                        if (_0x46cf61['contentCrc32']) _0x46cf61['romcrc32'] = _0x46cf61['contentCrc32']();
                        else {
                            var _0x466e84 = _0x17ae12(_0x1383d0);
                            _0x46cf61['romcrc32'] = _0x466e84['toString'](0x10), _0x46cf61['romcrc32'] = _0x46cf61['romcrc32']['padStart'](0x8, '0');
                        }
                    }
                    */
                    _0x1c5f48['padStart'] || (_0x1c5f48['padStart'] = function (_0x35f66d, _0x5b70f6) {

                        return _0x35f66d >>= 0x0, _0x5b70f6 = (void 0x0 === _0x5b70f6 ? ' ' : _0x5b70f6) + '', this['length'] > _0x35f66d ? this + '' : ((_0x35f66d -= this['length']) > _0x5b70f6['length'] && (_0x5b70f6 += _0x5b70f6['repeat'](_0x35f66d / _0x5b70f6['length'])), _0x5b70f6['slice'](0x0, _0x35f66d) + (this + ''));
                    });
                    if (_0x28f202['supportNetPlay']['call'](E) && _0x46cf61['netPlayHost']) {
                        if (_0x46cf61['contentCrc32']) _0x46cf61['romcrc32'] = _0x46cf61['contentCrc32']();
                        else {
                            var _0x466e84 = _0x17ae12(_0x1383d0);
                            _0x46cf61['romcrc32'] = _0x466e84['toString'](0x10), _0x46cf61['romcrc32'] = _0x46cf61['romcrc32']['padStart'](0x8, '0');
                        }
                    }
                }
                _0x46cf61['setDiskContainer']['call'](E);
            });
            _0x58fce2['call'](E, _0xb3d5b3['loading']['querySelector']('#' ['concat'](_0xb3d5b3['adCloseId'])), 'click', function () {

                E['started'] && _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['ad']))['parentNode']['removeChild'](_0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['ad']))), E['elements']['container']['focus']();
            });




            function REST_MEMORY() {

                _0x2cba0a ? (window['Module']['TOTAL_MEMORY'] = 0x0, ['jaguar']['includes'](E['system']) && (window['Module']['TOTAL_MEMORY'] = 0x10000000), ['nds', 'nes', 'snes', 'arcade', 'mame']['includes'](E['system']) && (window['Module']['TOTAL_MEMORY'] = 0x0), ['snes2002', 'snes2005', 'snes2010']['includes'](E['system']) && (window['Module']['TOTAL_MEMORY'] = 0x0), 'gba' == E['system'] && (window['Module']['TOTAL_MEMORY'] = 0x0), '3do' == E['system'] && (window['Module']['TOTAL_MEMORY'] = 0x0), 'n64' == E['system'] && (window['Module']['TOTAL_MEMORY'] = 0x0)) : ('nes' === E['system'] && (window['Module']['TOTAL_MEMORY'] = 0x8000000), window['Module']['TOTAL_MEMORY'] = _0x256faf + 0x4000000, _0xb3d5b3['arcadeCores']['includes'](E['system']) && (window['Module']['TOTAL_MEMORY'] = _0x256faf + 0x10000000, _0xb3d5b3['isMobileDevice'] && (window['Module']['TOTAL_MEMORY'] = 0x12c00000)), ['n64', 'nds', 'jaguar']['includes'](E['system']) && (window['Module']['TOTAL_MEMORY'] = _0x256faf + 0x10000000, _0xb3d5b3['isMobileDevice'] && (window['Module']['TOTAL_MEMORY'] = 0x12c00000)), 'gba' == E['system'] && (window['Module']['TOTAL_MEMORY'] = 0x10000000)), 'undefined' != typeof EJS_MEMORY && (window['Module']['TOTAL_MEMORY'] = EJS_MEMORY);
            }
            async function start_rooms(_0x16da6b) {
                console.log(_0x16da6b);
                try {
                    REST_MEMORY();
                    //_0x356200(E),
                } catch (_0x3037d6) {
                    console['log'](_0x3037d6);
                }!E['startName'] && _0x16da6b && (E['startName'] = _0x16da6b);
                var _0x404b09 = [E['startName'],
                    [_0xb3d5b3['hash'], _0xb3d5b3['hash2'], _0xb3d5b3['hash3']]['join']('')
                ];
                E['key'] && (_0xb3d5b3['newCoreKey2'] = E['key']);
                _0xb3d5b3['newCore'] && (_0x404b09 = [E['startName'], _0xb3d5b3['newCoreKey']]);
                _0xb3d5b3['Module']['_get_content_crc'] && (_0x404b09 = [E['startName'], _0xb3d5b3['newCoreKey2']]);
                _0xb3d5b3['Module']['specialHTMLTargets'] && (_0xb3d5b3['Module']['specialHTMLTargets']['#canvas'] = _0xb3d5b3['Module']['canvas'], _0xb3d5b3['Module']['specialHTMLTargets']['#canvas-input'] = _0xb3d5b3['Module']['canvas']['parentElement']['querySelector']('input'), _0xb3d5b3['Module']['specialHTMLTargets']['#canvas-mouse'] = E['elements']['wrapper']);
                'openbor' == E['system'] && (_0x404b09 = [_0xb3d5b3['newCoreKey2']]);
                var _0xba82bb = _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['p3']));
                if(_0x404b09[1]==E['key']){
                    _0x404b09 = _0x404b09[0];
                }else{
                    _0x404b09['unshift']('-v');

                }
                console.log(_0x404b09);
                _0xb3d5b3['Module']['callMain'](_0x404b09);
                E['started'] = !0;
                setTimeout(function () {

                    try {
                        'openbor' != E['config']['system'] && _0x46cf61['getStateInfo']();
                        _0x1edc67['call'](E, E['elements']['container'], 'start-game');
                    } catch (_0x211935) {
                        console.log(_0x211935);
                        _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['p1']))['innerHTML'] = '', _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['p2']))['innerHTML'] = '', _0xba82bb['innerHTML'] = '<strong style="color' + ':#f00;text-shadow: 0' + 'px 0px 3px;">Failed ' + 'to start game</stron' + 'g>', _0xb3d5b3['firstErr'] = null;
                    }
                }, 0x10);
            }
            async function write_rooms() {
                var _0x10a63e = E,
                    _0x2f69b1 = _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['p3'])),
                    _0x2239e4 = E['config'],
                    _0xcf4e6d = (_0x2239e4['gameId'], _0x2239e4['gameUrl']);
                _0x2239e4['system'], _0x10a63e['savepath'] && _0x10a63e['savepath'];
                var _0x3535ad = _0xcf4e6d['split']('/'),
                    _0x2367a8 = _0x3535ad[_0x3535ad['length'] - 0x1];
                if (-0x1 < _0x2367a8['indexOf']('?') && (_0x2367a8 = _0x2367a8['substr'](0x0, _0x2367a8['indexOf']('?'))), _0x2367a8['split']('.')['pop'](), _0x2f69b1['innerHTML'] = 'Download Game Data', _0xb3d5b3['arcadeCores']['includes'](_0x10a63e['system']) && _0x10a63e['config']['gameParentUrl']['length']) {
                    var _0x48dc4b = _0x10a63e['config']['gameParentUrl']['length'] + 0x1;
                    _0x2f69b1['innerHTML'] += ' (' ['concat'](_0x48dc4b, '/')['concat'](_0x48dc4b, ')');
                }
                _0x10a63e['config']['gamePatchUrl'] && (_0x2f69b1['innerHTML'] += ' (2/2)'), void 0x0;
                var autounpack = !0;
                var gamename = F.getname(_0x2239e4['gameUrl']);
                var ext = F.getExt(_0x2367a8);
                if (ext == 'zip' && _0xb3d5b3['arcadeCores']['includes'](E['system'])) autounpack = !1;

                T.FetchItem({
                    url: _0xcf4e6d,
                    key: _0x10a63e['system'] + '-' + gamename,
                    store: 'data-rooms',
                    dataOption: {
                        system: _0x10a63e['system']
                    },
                    autounpack,
                    success(result, headers) {
                        if (I.u8buf(result)) {
                            _0xb3d5b3['Module'].writeFile(gamename, result);
                            _0x256faf += result.byteLength;
                        } else if (I.obj(result)) {
                            I.toArr(result, entry => {
                                if (/__MACOSX/.test(entry[0])) return;
                                if (entry[1]) {
                                    _0xb3d5b3['Module'].writeFile(entry[0], entry[1]);
                                    _0x256faf += entry[1].byteLength;
                                    if (_0x5bf649[_0xb3d5b3['coreFileName']].includes(F.getExt(entry[0]))) {
                                        gamename = entry[0];
                                    }
                                }
                            });
                        }
                        
                        start_rooms(gamename);

                    },
                    error() {
                        _0x2f69b1.innerHTML = '<strong style="color' + ':#f00;text-shadow: 0' + 'px 0px 3px;">Failed ' + 'to start game</stron' + 'g>';
                    },
                    progress(text, current, toled) {
                        _0x2f69b1.innerHTML = text;

                    }
                })

            }
            async function write_patch() {
                if (I.array(E['config']['gamePatchUrl'])) {
                    var p2elm = _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['p3']));
                    var system = E['config']['system'];
                    await I.Async(E['config']['gamePatchUrl'].map(url => T.FetchItem({
                        url,
                        key: system + '-' + F.getname(url),
                        store: 'data-patch',
                        dataOption: {
                            system
                        },
                        success(result, headers) {
                            if (I.u8buf(result)) {
                                _0xb3d5b3['Module'].writeFile(F.getname(url), result);
                                _0x256faf += result.byteLength;
                            } else if (I.obj(result)) {
                                I.toArr(result, entry => {
                                    _0xb3d5b3['Module'].writeFile(entry[0], entry[1]);
                                    _0x256faf += entry[1].byteLength;
                                });
                            }

                        },
                        error(_0x121818) {
                            p2elm.innerHTML = '<strong style="color' + ':#f00;text-shadow: 0' + 'px 0px 3px;">' + _0x121818 + '</strong>';
                        },
                        progress(text, current, toled) {
                            p2elm.innerHTML = 'Game Data ' + text;
                        }
                    })))
                }
                write_rooms();
            }
            async function write_parent() {

                if (I.array(E['config']['gameParentUrl']) && _0xb3d5b3['arcadeCores']['includes'](E['system'])) {

                    var p2elm = _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['p2']));
                    var system = E['config']['system'];
                    await I.Async(E['config']['gameParentUrl'].map(url => T.FetchItem({
                        url,
                        key: system + '-' + F.getname(url),
                        store: 'data-parent',
                        dataOption: {
                            system
                        },
                        success(result, headers) {
                            if (I.u8buf(result)) {
                                _0xb3d5b3['Module'].writeFile(F.getname(url), result);
                                _0x256faf += result.byteLength;
                            } else if (I.obj(result)) {
                                I.toArr(result, entry => {
                                    _0xb3d5b3['Module'].writeFile(entry[0], entry[1]);
                                    _0x256faf += entry[1].byteLength;
                                });
                            }

                        },
                        error(_0x121818) {
                            p2elm.innerHTML = '<strong style="color' + ':#f00;text-shadow: 0' + 'px 0px 3px;">' + _0x121818 + '</strong>';
                        },
                        progress(text, current, toled) {
                            p2elm.innerHTML = 'Game Data ' + text;
                        }
                    })))
                }
                write_patch();
            };
            async function write_bios(_0x280d63) {
                var p2elm = _0xb3d5b3['loading']['querySelector']('.' ['concat'](_0x58c6c3['p2']));
                var key = F.getname(_0x280d63);
                var mime = F.getExt(key);
                var unpack = !0;
                if ('zip' === mime && !mime['arcadeCores']['includes'](_0x314060['system'])) {
                    unpack = !1;
                }
                T.FetchItem({
                    url: _0x280d63,
                    key,
                    store: 'data-bios',
                    unpack,
                    success(result, headers) {
                        if (I.u8buf(result)) {
                            _0xb3d5b3['Module'].writeFile(_0x3e0046, result);
                            _0x256faf += result.byteLength;
                        } else if (I.obj(result)) {
                            I.toArr(result, entry => {
                                _0xb3d5b3['Module'].writeFile(entry[0], entry[1]);
                                _0x256faf += entry[1].byteLength;
                            });
                        }
                        p2elm.innerHTML = 'BIOS ready';
                        write_parent();
                    },
                    progress(text, current, toled) {
                        p2elm.innerHTML = 'BIOS ' + text;
                    },
                    error(_0x121818) {
                        p2elm.innerHTML = '<strong style="color' + ':#f00;text-shadow: 0' + 'px 0px 3px;">' + _0x121818 + '</strong>'
                    }
                });
            }
            var CREATE = new class {
                constructor() {
                    let btn = this.$('.' ['concat'](_0x58c6c3['start-game'])),
                        startEvent = e => {
                            _0x9268bd(btn, !0x0);
                            this.initModule()

                        };
                    T.once(btn, 'click', async e => {
                        if (!E['key']) {
                            btn.innerHTML = 'Loading...';
                            let text  = await T.ajax({url:'hash.php'}).catch(e=>{
                                throw e
                            });
                            text&&text.indexOf('new')===0&&(text = eval(text));
                            if(!I.await(text)) alert('hash key using php script to get');
                            E['key'] = await text;
                            startEvent();
                            /*
                            let func = e => {
                                console.log(e.data);
                                if (e.data && e.data.key) {
                                    E['key'] = e.data.key.slice(0,32)+E['basekey'];
                                    elm.remove();
                                    T.un(window, 'message', func);
                                    startEvent();
                                }
                            };
                            T.on(window, 'message', func);
                            let elm = T.$append(I[31].body, T.$ct('iframe',null,{
                                src:'https://www.emulatorjs.com/embed/game.html?_t=' + (T.time / 100000).toFixed(0),
                                hidden: !0
                            }));
                            */
                        } else {
                            startEvent();
                        }
                    });
                }
                initModule() {
                    var _0x54d2eb = CREATE.$('.' ['concat'](_0x58c6c3['p1']));
                    _0x54d2eb['innerHTML'] = 'Loading...';
                    window['Module'] = {
                        TOTAL_MEMORY: 0x10000000,
                        noInitialRun: !0x0,
                        arguments: [],
                        preRun: [],
                        postRun: [],
                        canvas: _0x99e2d1,
                        print(_0x13e172) {

                            'undefined' != typeof EJS_DEBUG_ && !0x0 === EJS_DEBUG_ && console['log'](_0x13e172);
                        },
                        printErr(_0x57ac99) {
                            _0xb3d5b3['firstErr'] || (_0xb3d5b3['firstErr'] = _0x57ac99), 'undefined' != typeof EJS_DEBUG_ && !0x0 === EJS_DEBUG_ && console['log'](_0x57ac99);
                        },
                        totalDependencies: 0x0,
                        monitorRunDependencies: function (_0x3c8db5) {},
                        urls: {},
                        locateFile(url) {
                            if (!this.urls[url] && _0xb3d5b3['coreFileData'][url]) {
                                _0x256faf += _0xb3d5b3['coreFileData'][url].byteLength;
                                this.urls[url] = F.URL(_0xb3d5b3['coreFileData'][url], F.getMime(url));
                                delete _0xb3d5b3['coreFileData'][url];
                            }
                            return this.urls[url] || url;
                        },
                        readAsync(url, loadbuf, error) {
                            if (I.buf(url)) {
                                loadbuf(url);
                            } else {
                                T.FetchItem({
                                    url
                                }).then(buf => loadbuf(buf.buffer)).catch(error);
                            }
                        },
                        getCore() {
                            let data = this['cwrap']('get_core_options', 'string', [])();
                            if (data) {
                                let list = data.split('\n');
                                return Object.fromEntries(
                                    list.map(v => {
                                        let s = v.split(';');
                                        return [s[0], s[1] && s[1].trim().split('|').map(v => v.trim())];
                                    }));
                            }
                        },
                        readFile(name) {
                            return I.decode(this.FS.readFile(name))
                        },
                        mkdir(path) {
                            let FS = this.FS;
                            if (!FS.analyzePath(path).exists) {
                                let p = path.split('/');
                                let name = p.pop();
                                let newpath = p.join('/');
                                this.mkdir(newpath);
                                FS.createPath(newpath, name, !0x0, !0x0);
                            }
                        },
                        writeFile(path, data) {
                            let newpath = path.split('/').slice(0, -1).join('/');
                            newpath && this.mkdir(newpath);
                            this.FS.writeFile(path, data);


                        },
                    };
                    'openbor' == E['system'] && (window['Module']['preRun'] = [function () {
                        ENV['SDL_EMSCRIPTEN_KEYBOARD_ELEMENT'] = '#canvas';
                    }]);
                    T.FetchItem({
                        url: ejsURL['versionjson'] + E['system'] + '.json',
                        store: 'data-system',
                        type: 'json',
                        success(result, headers) {
                            var realSystem = _0x30632c[E['system']];
                            result['core'] && (realSystem = result['core']), realSystem || (realSystem = E['system']);
                            var systemInfo = result[E['system']];
                            result['extensions'] && (_0x5bf649[realSystem] = result['extensions']);
                            result['options'] && (_0xb3d5b3['coreOptions'] = result['options']);
                            result['shaders'] && (_0xb3d5b3['shaders'] = result['shaders']);
                            !0x1 === result['disk-control'] && (_0xb3d5b3['diskControl'] = !0x1);
                            var _0x76b4f5 = !0x1;
                            'undefined' != typeof SharedArrayBuffer && (_0x76b4f5 = !0x0);
                            var _0x2b3a29 = !0x1;
                            result['threads'] && (_0x2b3a29 = result['threads']);
                            result['buttons'] && (_0xb3d5b3['buttonMaps'] = result['buttons']);
                            result['savepath'] && (E['savepath'] = result['savepath']);
                            result['servers'] && (_0xb3d5b3['servers'] = result['servers']);
                            var _0x1126aa = !0x0,
                                _0x1bd892 = !0x0,
                                _0xbcd9b = !0x0,
                                _0x15fbba = !0x0,
                                _0x119508 = !0x0;
                            'restart' in result && (_0x1126aa = result['restart']);
                            'pause' in result && (_0x1bd892 = result['pause']);
                            'settings' in result && (_0xbcd9b = result['settings']);
                            'volume' in result && (_0x15fbba = result['volume']);
                            'screenshot' in result && (_0x119508 = result['screenshot']);
                            'keyboard' in result && result['keyboard'] && (E['keyboard'] = !0x0);
                            'pointerlock' in result && result['pointerlock'] && (E['pointerlock'] = !0x0);
                            !_0x1126aa && I.elm(E['elements']['buttons']['restart']) && _0x9268bd(E['elements']['buttons']['restart'], !0x0);

                            _0x1bd892 || I.toArr(E['elements']['buttons']['play'], _0x7f333d => _0x9268bd(_0x7f333d, !0x0));
                            _0xbcd9b || _0x9268bd(E['elements']['buttons']['settings'], !0x0);
                            _0x15fbba || _0x9268bd(E['elements']['container']['querySelector'](getClassName('ejs__volume', !0)), !0x0);
                            _0xbcd9b || _0x15fbba || (E['elements']['buttons']['fullscreen']['style']['marginLeft'] = 'auto');
                            _0x119508 || _0x9268bd(E['elements']['container']['querySelector']('.' ['concat'](_0xa96c03({
                                'ejs__contextmenu': !0x0
                            }), ' li:nth-child(1)')), !0x0);
                            var _0x4da793 = 0x1,
                                _0x46e5c5 = !0x1,
                                _0x2751db = !0x1,
                                _0x423298 = !0x1,
                                _0x13ea39 = !0x1;
                            systemInfo instanceof Array ? (_0x4da793 = systemInfo[0x0] ? systemInfo[0x0] : 0x1, _0x46e5c5 = !!(systemInfo[0x1] >> 0x0), _0x2751db = !!(systemInfo[0x2] >> 0x0), _0x423298 = !!(systemInfo[0x3] >> 0x0), _0x13ea39 = !!(systemInfo[0x4] >> 0x0)) : (!!systemInfo['netplay'], _0x4da793 = systemInfo['version'] ? systemInfo['version'] : 0x1, _0x46e5c5 = !!systemInfo['state'], _0x2751db = !!systemInfo['asmjs'], _0x423298 = !!systemInfo['wasm'], _0x13ea39 = !!systemInfo['cheat']);

                            _0x13ea39 && (_0x46cf61['allowCheat'] = !0x0);
                            _0xb3d5b3['newCoreKey'] = headers['key'];
                            E['key'] && (_0xb3d5b3['newCoreKey2'] = E['key']);
                            'nds' != E['system'] || _0x236fc8['wasm'] || (_0x46e5c5 = !0x1);
                            _0xb3d5b3['coreFileVersion'] = _0x4da793;
                            _0xb3d5b3['coreFileName'] = realSystem;
                            var _0x1059f6, _0x56290a = !0x1;
                            ['webgl2', 'experimental-webgl2']['includes'](_0x236fc8['webgl']['WEBGL_CONTEXT']) && (_0x56290a = !0x0);
                            'undefined' != typeof EJS_N64_LEGACY && 0x1 == EJS_N64_LEGACY && (_0x56290a = !0x1);
                            _0xb3d5b3['arcadeCores']['includes'](E['system']) && (_0xb3d5b3['isArcadeCore'] = !0x0);
                            var _0x347004, _0x300c2e = E['config'],
                                _0x4bf7df = (_0x300c2e['gameId'], _0x300c2e['gameUrl']['split']('/')),
                                _0x23596f = _0x4bf7df[_0x4bf7df['length'] - 0x1]; - 0x1 < _0x23596f['indexOf']('?') && (_0x23596f = _0x23596f['substr'](0x0, _0x23596f['indexOf']('?')));
                            if ('fbneo' == E['system'] || 'arcade' == E['system']) {
                                _0x347004 = '' ['concat'](ejsURL['fbneoUrl'], '?name=')['concat'](_0x23596f), 'arcade' == E['system'] && (_0x347004 = '' ['concat'](ejsURL['fbaUrl'], '?name=')['concat'](_0x23596f)), _0x236fc8['wasm'] && _0x423298 ? (_0x1059f6 = '' ['concat'](realSystem, '-wasm.data'), _0x2cba0a = !0x0) : _0x2751db && (_0x1059f6 = '' ['concat'](realSystem, '-asmjs.data')),


                                    CREATE.initWASM(_0x1059f6, _0x4da793);
                            } else {
                                if ('mame' == E['system'] || 'mame0.193' == E['system'] || 'mame0.243' == E['system']) {
                                    var _0x2ef29c;
                                    _0x23596f['split']('.')['pop']();

                                    _0x2ef29c = '' ['concat'](ejsURL['mameUrl'], '?name=')['concat'](_0x23596f);
                                    'mame0.243' == E['system'] && (_0x2ef29c = '' ['concat'](ejsURL['mame0243Url'], '?name=')['concat'](_0x23596f));
                                    var mameURL = ejsURL['mameUrl'],
                                        mameType = 'text';
                                    if ('mame0.243' == E['system']) {
                                        mameURL = ejsURL['mame0243Url'];
                                        mameType = 'json';
                                    }
                                    T.ajax({
                                        url: mameURL + '?name=' + _0x23596f,
                                        type: mameType,
                                        success(result, headers) {
                                            if (result) {
                                                if (mameType == 'text') {
                                                    var _0x400af3 = result['split']('|');
                                                    _0xb3d5b3['coreFileName'] = '' ['concat'](E['system'], '-')['concat'](_0x400af3[0x0]), _0x46e5c5 = '1' === _0x400af3[0x1], I.elm(E['elements']['buttons']['saveState']) && _0x9268bd(E['elements']['buttons']['saveState'], !_0x46e5c5), I.elm(E['elements']['buttons']['loadState']) && _0x9268bd(E['elements']['buttons']['loadState'], !_0x46e5c5), _0x400af3[0x0] ? (_0x236fc8['wasm'] && _0x423298 ? (_0x1059f6 = '' ['concat'](E['system'], '-')['concat'](_0x400af3[0x0], '-wasm.data'), _0x2cba0a = !0x0) : (_0x400af3['innerHTML'] = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Webassembly support is not detected in this browser</strong>', _0x1059f6 = ''), CREATE.initWASM(_0x1059f6, _0x4da793)) : _0x400af3['innerHTML'] = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Unsupported Game</strong>';

                                                } else {
                                                    for (var _0x2ab4e2 in (_0x46e5c5 = 'supported' == result['savestate'], result['files'])) E['config']['gameParentUrl']['push'](result['files'][_0x2ab4e2]);
                                                    _0xb3d5b3['coreFileName'] = '' ['concat'](E['system'], '-')['concat'](result['index']), I.elm(E['elements']['buttons']['saveState']) && _0x9268bd(E['elements']['buttons']['saveState'], !_0x46e5c5), I.elm(E['elements']['buttons']['loadState']) && _0x9268bd(E['elements']['buttons']['loadState'], !_0x46e5c5), _0x9268bd(_0x28f202['contextMenu']['querySelectorAll']('ul li')['item'](0x1), !_0x46e5c5), _0x9268bd(_0x28f202['contextMenu']['querySelectorAll']('ul li')['item'](0x2), !_0x46e5c5), _0x46cf61['stateSupported'] = _0x46e5c5, !_0x46e5c5 && I.elm(E['elements']['buttons']['netplay']) && E['elements']['buttons']['netplay']['remove'](), 0x0 == result['length'] ? _0x54d2eb['innerHTML'] = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Unsupported Game</strong>' : (_0x236fc8['wasm'] && _0x423298 ? (_0x1059f6 = '' ['concat'](E['system'], '-')['concat'](result['index'], '-wasm.data'), _0x2cba0a = !0x0) : (_0x54d2eb['innerHTML'] = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Webassembly support is not detected in this browser</strong>', _0x1059f6 = ''), CREATE.initWASM(_0x1059f6, _0x4da793));

                                                }
                                            }

                                        },
                                        error(_0x29ce42) {
                                            console['log'](_0x29ce42), _0x54d2eb['innerHTML'] = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Network Error</strong>';
                                        }
                                    });
                                } else {
                                    var _0x38e8ee = 'Please upgrade your browser to the latest version';
                                    _0x236fc8['wasm'] && _0x423298 ? (_0x1059f6 = '' ['concat'](realSystem, '-wasm.data'), 'n64' === E['system'] && !_0x56290a && (_0x1059f6 = '' ['concat'](realSystem, '-legacy-wasm.data'), _0x46e5c5 = !0x1), _0x2cba0a = !0x0) : _0x2751db && (_0x1059f6 = '' ['concat'](realSystem, '-asmjs.data'), 'n64' === E['system'] && !_0x56290a && (_0x1059f6 = '' ['concat'](realSystem, '-legacy-asmjs.data')));
                                    _0x2b3a29 && _0x76b4f5 && (_0x1059f6 = '' ['concat'](realSystem, '-wasm-threads.data')), 'undefined' != typeof EJS_CUSTOM_COREFILE && (_0x1059f6 = EJS_CUSTOM_COREFILE), ['mupen64plus', 'mupen64plus-nx']['includes'](E['system']) && !_0x56290a && (_0x38e8ee = 'Your browser does not support WebGL2', _0x1059f6 = null), _0x1059f6 ? CREATE.initWASM(_0x1059f6, _0x4da793) : _0x54d2eb['innerHTML'] = ('<strong style="color:#f00;text-shadow: 0px 0px 3px;">')['concat'](_0x38e8ee, '</strong>');
                                }
                            }
                            I.elm(E['elements']['buttons']['saveState']) && _0x9268bd(E['elements']['buttons']['saveState'], !_0x46e5c5), I.elm(E['elements']['buttons']['loadState']) && _0x9268bd(E['elements']['buttons']['loadState'], !_0x46e5c5), _0x9268bd(_0x28f202['contextMenu']['querySelectorAll']('ul li')['item'](0x1), !_0x46e5c5), _0x9268bd(_0x28f202['contextMenu']['querySelectorAll']('ul li')['item'](0x2), !_0x46e5c5), _0x46cf61['stateSupported'] = _0x46e5c5;


                        },
                        error() {
                            _0x54d2eb['innerHTML'] = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Network Error</strong>';
                        }
                    });

                }
                initWASM(_0x511ae9, _0x5c94d6) {
                    var _0x54d2eb = CREATE.$('.' ['concat'](_0x58c6c3['p1']));
                    var Fitler;
                    /*
                    Filter = (wasmU8)=>{
                        let mime = T.F.CheckExt(wasmU8);
                        console.log(mime);
                        if (!mime) {
                            wasmU8 = wasmU8['slice'](0xc);
                            wasmU8['set']([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c, 0x0, 0x3], 0x0);
                        }
                        return wasmU8;
                    };
                    */
                    _0x511ae9 = _0x511ae9.replace(/\.data$/, '.7z');
                    T.FetchItem({
                        url: ejsURL['cores'] + _0x511ae9,
                        key: _0x511ae9,
                        store: 'data-system',
                        version: _0x5c94d6,
                        Fitler,
                        async success(_0x5bed4d, headers) {
                            var WASM_JS = '';
                            I.toArr(_0x5bed4d, _0x1e5b23 => {
                                let _0xbd83bc = F.getExt(_0x1e5b23[0]);
                                if (_0xbd83bc == 'js' && !_0x1e5b23[0]['includes']('.worker.js')) {
                                    WASM_JS = _0x1e5b23[1];
                                } else if (_0xbd83bc == 'wasm') {
                                    _0x256faf += _0x1e5b23[1].byteLength;
                                    window['Module'].wasmBinary = _0x1e5b23[1];
                                } else {
                                    _0xb3d5b3['coreFileData'][_0x1e5b23[0]] = _0x1e5b23[1];
                                }
                                delete _0x5bed4d[_0x1e5b23[0]];
                            });
                            _0x5bed4d = null;
                            REST_MEMORY();
                            var _0x520a18 = !0x1;
                            var _0x440c41 = I[1].assign(window['Module'], {
                                onRuntimeInitialized() {
                                    _0x520a18 || (_0x520a18 = !0x0);
                                    if (this.wasmBinary) {
                                        this.wasmBinary = null;
                                        delete this.wasmBinary;
                                    }
                                    _0xb3d5b3['FS'] = this['FS'] ? this['FS'] : window['FS'];
                                    _0xb3d5b3['Module'] = this;
                                    CREATE.initCoreData()
                                },
                            });
                            /**
                             * hash key
                             */
                            WASM_JS = I.decode(WASM_JS);
                            WASM_JS = WASM_JS.replace(/function\s*_gettimeofday\(ptr\)\s*\{\n?\s*?var\s*now\s*=\s*/,'function _gettimeofday(ptr) {var now = 1690674045574;').replace(/function\s*callMain\(args\)\s*{/,'function callMain(args) {if(typeof args==="string"){args = ["-v",args,"c37f5e84f377fb892c851b364c55251132d57c66d2f3ea56d2af90bef14773f0"];}console.log(args);');
                            await T.addJS(WASM_JS);
                            if (typeof EmulatorJS_ != 'undefined') {
                                await EmulatorJS_(_0x440c41);
                            } else if (typeof EmulatorJS != 'undefined') {
                                EmulatorJS(_0x440c41)
                            }
                        },
                        progress(_0x16879b, current, toled) {
                            _0x54d2eb['innerHTML'] = 'Download Game Core ' ['concat'](_0x16879b);
                        },
                        error() {
                            _0x54d2eb['innerHTML'] = '<strong style="color:#f00;text-shadow: 0px 0px 3px;">Network Error</strong>';
                        },
                        unpack: !0
                    });
                }
                async initCoreData() {
                    CREATE.$('.' ['concat'](_0x58c6c3['p1']))['innerHTML'] = 'Game Core ready';
                    I.toArr(await T.FetchItem({
                        url: 'bios/shader.zip',
                        unpack: !0,
                        store: 'data-libjs',
                    }), entry => {
                        _0xb3d5b3['Module'].writeFile('/shaders/' + entry[0], entry[1]);
                        _0x256faf += entry[1].length;
                    });
                    var _0x280d63 = E['config']['biosUrl'];
                    _0x46cf61['bindFunction']['call'](E);
                    _0x46cf61['setGamepadDialog']['call'](E);
                    _0x46cf61['setCacheDialog']['call'](E);
                    _0x46cf61['setLoadingDialog']['call'](E);
                    _0x46cf61['setNetplayDialog']['call'](E);
                    _0x46cf61['setCheatDialog']['call'](E);
                    _0x46cf61['initGamepad']['call'](E);
                    _0x46cf61['initKeyboard']['call'](E);
                    _0x46cf61['listeners']['call'](E);
                    _0xb3d5b3['FS']['createFolder'] ? _0xb3d5b3['FS']['createFolder']('/', 'etc', !0x0, !0x0) : _0xb3d5b3['FS']['createPath']('/', 'etc', !0x0, !0x0);
                    'openbor' == E['system'] && (_0xb3d5b3['FS']['mkdir']('/Saves'), 0x2 == E['mode'] && _0xb3d5b3['FS']['mount'](_0xb3d5b3['FS']['filesystems']['IDBFS'], {}, '/Saves'));
                    _0xb3d5b3['FS']['mkdir']('/data');
                    _0xb3d5b3['FS']['mkdir']('/data/saves');
                    0x2 == E['mode'] && ('undefined' == typeof IDBFS ? _0xb3d5b3['FS']['mount'](_0xb3d5b3['FS']['filesystems']['IDBFS'], {}, '/data/saves') : _0xb3d5b3['FS']['mount'](IDBFS, {}, '/data/saves'));
                    _0xb3d5b3['FS']['mkdir']('/shader');
                    0x2 == E['mode'] && _0xb3d5b3['FS']['syncfs'](!0x0, function () {});
                    'openbor' != E['system'] && _0xb3d5b3['FS']['mkdir']('/data/saves/' ['concat'](E['savepath']));
                    var _0x3ba2d7 = !0x1,
                        _0x3fc5d1 = null,
                        _0x540ad4 = null,
                        _0x401e7d = null;
                    _0x58fce2['call'](E, E['elements']['container'], 'start-game', function () {

                        if ('' != E['config']['savename']) {
                            var _0x1ab7ac = 'srm';
                            'nds' === E['system'] && (_0x1ab7ac = 'dsv'), ['melonds', 'zc210']['includes'](E['system']) && (_0x1ab7ac = 'sav');
                            var _0x126d42 = E['startName']['split']('/')['pop']()['split']('.'),
                                _0xf0b1b = _0x126d42['slice'](0x0, _0x126d42['length'] - 0x1)['join']('.');
                            try {
                                var _0x329826 = _0xb3d5b3['FS']['readFile']('/data/saves/' ['concat'](E['savepath'], '/')['concat'](E['config']['savename'], '.')['concat'](_0x1ab7ac));
                                _0xb3d5b3['FS']['writeFile']('/data/saves/' ['concat'](E['savepath'], '/')['concat'](_0xf0b1b, '.')['concat'](_0x1ab7ac), new Uint8Array(_0x329826)), _0xb3d5b3['Module']['_event_load_save_files']();
                            } catch (_0x1f7241) {}
                        }
                    }), _0xb3d5b3['FS']['trackingDelegate']['onWriteToFile'] = function (_0x248d7f) {

                        if (E['started']) {
                            var _0x1e8a47, _0x38580c = E['startName']['split']('/')['pop']()['split']('.'),
                                _0x35c7e1 = _0x38580c['slice'](0x0, _0x38580c['length'] - 0x1)['join']('.'),
                                _0x2a80f4 = 'srm';
                            if ('nds' === E['system'] && (_0x2a80f4 = 'dsv'), ['melonds', 'zc210']['includes'](E['system']) && (_0x2a80f4 = 'sav'), '/data/saves/' == _0x248d7f['substr'](0x0, 0xc)) {
                                _0x540ad4 = '/data/saves/' ['concat'](E['savepath'], '/')['concat'](_0x35c7e1, '.')['concat'](_0x2a80f4), '' != E['config']['savename'] && (_0x540ad4 = '/data/saves/' ['concat'](E['savepath'], '/')['concat'](E['config']['savename'], '.')['concat'](_0x2a80f4));
                                var _0xa025ed = function () {

                                    _0x3ba2d7 = !0x0;
                                    try {
                                        _0x1e8a47 = _0xb3d5b3['FS']['readFile'](_0x540ad4);
                                        var _0x4c59fb = _0x17ae12(new _0x47ef4e(_0x1e8a47));
                                        null == _0x3fc5d1 && (_0x3fc5d1 = _0x4c59fb), _0x3fc5d1 != _0x4c59fb && (0x2 == E['mode'] ? _0xb3d5b3['FS']['syncfs'](function () {
                                            _0x3ba2d7 = !0x1;
                                        }) : window['parent'] && window['parent']['parent'] && window['parent']['parent']['postMessage']({
                                            'act': 'ejs-idb-2',
                                            'data': _0x1e8a47,
                                            'path': _0x540ad4
                                        }, '*'), _0x3fc5d1 = _0x4c59fb);
                                    } catch (_0x96e04d) {}
                                    _0x3ba2d7 = !0x1;
                                };
                                _0x540ad4 != _0x248d7f || _0x3ba2d7 || (_0x401e7d ? (clearTimeout(_0x401e7d), _0x401e7d = null, _0x401e7d = setTimeout(_0xa025ed, 0x64)) : _0x401e7d = setTimeout(_0xa025ed, 0x64));
                            }
                            if ('/Saves/' == _0x248d7f['substr'](0x0, 0x7)) {
                                _0x1e8a47 = _0xb3d5b3['FS']['readFile'](_0x248d7f), _0x540ad4 = _0x248d7f;
                                _0xb3d5b3['FS']['syncfs'](function () {
                                    _0x3ba2d7 = !0x1;
                                })
                            }
                        }
                    }, (function () {
                        var _0x5971e4 = 'srm';
                        'nds' === E['system'] && (_0x5971e4 = 'dsv'), ['melonds', 'zc210']['includes'](E['system']) && (_0x5971e4 = 'sav'), window['setInterval'](function () {

                            if (E['started']) {
                                var _0x4e9ee3 = E['startName']['split']('/')['pop']()['split']('.'),
                                    _0x4bfccb = _0x4e9ee3['slice'](0x0, _0x4e9ee3['length'] - 0x1)['join']('.'),
                                    _0x4c365c = [];
                                _0x46cf61['saveSavFiles'] && _0x46cf61['saveSavFiles']();
                                try {
                                    '' != E['config']['savename'] && (_0x4c365c = _0xb3d5b3['FS']['readFile']('/data/saves/' ['concat'](E['savepath'], '/')['concat'](_0x4bfccb, '.')['concat'](_0x5971e4)), _0xb3d5b3['FS']['writeFile']('/data/saves/' ['concat'](E['savepath'], '/')['concat'](E['config']['savename'], '.')['concat'](_0x5971e4), new Uint8Array(_0x4c365c)));
                                } catch (_0x14be78) {}
                            }
                        }, 0xfa0);
                    }()), _0x46cf61['initShaders']();
                    var _0x39446c = 'camera_allow = "false"' +
                        '\ncamera_driver = "null"' +
                        '\ncamera_device = "null"'; +
                    '\nsavefile_directory = /data/saves/' + E['savepath'] +
                        '\nsystem_directory = /' +
                        '\nvideo_vsync = true' +
                        '\nscreenshot_directory = /' +
                        '\nvideo_shader = /shader/shader.glslp' +
                        '\nvideo_shader_enable = true' +
                        '\nvideo_font_enable = false' +
                        '\nvideo_scale = 1.0' +
                        '\nvideo_gpu_screenshot = false\n';

                    var _0x5cb8fd = _0x28f202['defaultCoreOptionsValues']['call'](E);
                    if (E['lightgun']) {
                        'nes' === E['system'] && (_0x39446c += 'input_libretro_devic' + `e_p2 = "258"
    `);
                        ('segaMD' === E['system'] || 'segaCD' === E['system']) && (_0x5cb8fd['genesis_plus_gx_gun_cursor'] = 'yes', _0x5cb8fd['genesis_plus_gx_invert_mouse'] = 'yes', _0x5cb8fd['genesis_plus_gx_bram'] = 'per game', 0x1 == E['lightgun'] ? _0x39446c += 'input_libretro_devic' + `e_p2 = "260"
    ` : 0x2 == E['lightgun'] ? _0x39446c += 'input_libretro_devic' + `e_p2 = "516"
    ` : 0x3 == E['lightgun'] && (_0x39446c += 'input_libretro_devic' + `e_p2 = "772"
    `));
                        'segaMS' === E['system'] && (_0x5cb8fd['genesis_plus_gx_gun_cursor'] = 'yes', _0x5cb8fd['genesis_plus_gx_invert_mouse'] = 'yes', _0x5cb8fd['genesis_plus_gx_bram'] = 'per game', _0x39446c += 'input_libretro_devic' + `e_p1 = "260"
    `);
                        'snes' === E['system'] && (_0x39446c += 'input_libretro_device_p2 = "260"\n');
                        ['snes2002', 'snes2005', 'snes2010']['includes'](E['system']) && (_0x39446c += 'input_libretro_devic' + `e_p2 = "260"
    `);
                        ['fbneo']['includes'](E['system']) && (_0x39446c += 'input_libretro_devic' + `e_p1 = "514"
    `);

                    }
                    E['mouse'] && ('snes' === E['system'] && (_0x39446c += 'input_libretro_devic' + `e_p1 = 2
    `), ['snes2002', 'snes2005', 'snes2010']['includes'](E['system']) && (_0x39446c += 'input_libretro_devic' + `e_p1 = 2
    `), 'segaMD' === E['system'] && (_0x39446c += 'input_libretro_devic' + `e_p2 = 2
    `));
                    E['multitap'] && ('snes' === E['system'] && (_0x39446c += 'input_libretro_devic' + `e_p2 = 257
    `), ['snes2002', 'snes2005', 'snes2010']['includes'](E['system']) && (_0x39446c += 'input_libretro_device_p2 = 257\n'));
                    ['n64', 'mupen64plus', 'mupen64plus2', 'mupen64plus-nx']['includes'](E['system']) && (_0x39446c += 'input_libretro_devic' + `e_p1 = 5
    `, _0x39446c += 'input_libretro_devic' + `e_p2 = 5
    `, _0x39446c += 'input_libretro_devic' + `e_p3 = 5
    `, _0x39446c += 'input_libretro_devic' + `e_p4 = 5
    `), _0xb3d5b3['arcadeCores']['includes'](E['system']) && (_0x39446c += 'input_libretro_devic' + `e_p1 = 5
    `, _0x39446c += 'input_libretro_devic' + `e_p2 = 5
    `, _0x39446c += 'input_libretro_devic' + `e_p3 = 5
    `, _0x39446c += 'input_libretro_devic' + `e_p4 = 5
    `), 'msx' === E['system'] && (_0x39446c += 'input_libretro_devic' + `e_p1 = 1
    `), 'fmsx' === E['system'] && (_0x39446c += 'input_libretro_devic' + `e_p1 = "257"
    `), ['psx']['includes'](E['system']) && (_0x39446c += 'input_libretro_devic' + `e_p1 = "1"
    `, _0x39446c += 'input_libretro_devic' + `e_p2 = "1"
    `, _0x39446c += 'input_libretro_devic' + `e_p3 = "1"
    `, _0x39446c += 'input_libretro_devic' + `e_p4 = "1"
    `), 'dos' === E['system'] && (_0x39446c += 'input_libretro_devic' + `e_p1 = 3
    `, _0x39446c += 'input_libretro_device_p2 = 3\n'), _0x39446c += 'video_smooth = false\n';
                    var _0x4e876c = _0x23c7cf(_0x5cb8fd, _0x28f202['storage']['get']('core-options') || {}),
                        _0x2e8b8d = '';
                    if (!_0x2e8b8d) {
                        if (E['system'] == 'gba') {
                            _0x2e8b8d = '\nmgba_use_bios = "ON";\nmgba_skip_bios = "OFF"\nmgba_sgb_borders = "OFF"';

                        }
                    }
                    'psx' == E['system'] && (_0x2e8b8d = 'pcsx_rearmed_memcard' + `2 = "disabled"
    `, _0x2e8b8d += 'pcsx_rearmed_multitap = "both"\n');
                    _0x4e876c && Object['keys'](_0x4e876c)['forEach'](function (_0x2e82ca) {

                        _0x2e8b8d += '' ['concat'](_0x2e82ca, ' = "')['concat'](_0x4e876c[_0x2e82ca], '"\n');
                        _0x58fce2['call'](E, E['elements']['container'], 'start-game', function () {

                            'fmsx' == E['system'] || setTimeout(function () {

                                'pcsx_rearmed_frameskip' != _0x2e82ca && 'pcsx_rearmed_memcard2' != _0x2e82ca && _0x46cf61['setVariable'](_0x2e82ca, _0x4e876c[_0x2e82ca]);
                            }, 0x32);
                        });
                    });

                    _0xb3d5b3['FS']['createDataFile']('/etc', 'retroarch.cfg', _0x39446c, !0x0, !0x0);
                    _0xb3d5b3['FS']['createFolder'] ? (_0xb3d5b3['FS']['createFolder']('/home/web_user', '.config', !0x0, !0x0), _0xb3d5b3['FS']['createFolder']('/home/web_user/.config', 'retroarch', !0x0, !0x0)) : (_0xb3d5b3['FS']['createPath']('/home/web_user', '.config', !0x0, !0x0), _0xb3d5b3['FS']['createPath']('/home/web_user/.config', 'retroarch', !0x0, !0x0));
                    _0xb3d5b3['cheatString'] && (_0xb3d5b3['FS']['mkdirTree'](_0xb3d5b3['cheatPath']), _0xb3d5b3['FS']['writeFile'](_0xb3d5b3['cheatPath'] + _0xb3d5b3['cheatFileName'], _0xb3d5b3['cheatString']), _0xb3d5b3['cheatPath'] = '', _0xb3d5b3['cheatString'] = '', _0xb3d5b3['cheatFileName'] = '');
                    0x1 == E['lightgun'] && 'mame0.243' == E['system'] && (_0xb3d5b3['Module']['canvas']['addEventListener']('mousemove', function (_0x3cb437) {
                        var _0x47642b = _0xb3d5b3['Module']['canvas']['clientWidth'],
                            _0x449e54 = _0xb3d5b3['Module']['canvas']['clientHeight'],
                            _0x12c963 = _0x47642b / 0x2,
                            _0x4a87ab = _0x449e54 / 0x2,
                            _0x5162b9 = 0x0,
                            _0x909072 = 0x0,
                            _0x11693f = 0x0;
                        0x0 > _0x3cb437['offsetX'] || _0x3cb437['offsetY'] > _0x47642b || (_0x3cb437['offsetX'] > _0x12c963 ? (_0x5162b9 = (_0x3cb437['offsetX'] - _0x12c963) / _0x47642b * 0x2 * 0x7fff, _0x11693f = 0x10, _0x46cf61['simulateInput'](0x0, 0x11, 0x0), _0x46cf61['simulateInput'](0x0, _0x11693f, _0x5162b9)) : (_0x5162b9 = (_0x3cb437['offsetX'] - _0x12c963) / _0x47642b * 0x2 * 0x7fff, _0x11693f = 0x11, _0x46cf61['simulateInput'](0x0, 0x10, 0x0), _0x46cf61['simulateInput'](0x0, _0x11693f, _0x5162b9)), _0x3cb437['offsetY'] > _0x4a87ab ? (_0x909072 = (_0x3cb437['offsetY'] - _0x4a87ab) / _0x449e54 * 0x2 * 0x7fff, _0x11693f = 0x12, _0x46cf61['simulateInput'](0x0, 0x13, 0x0), _0x46cf61['simulateInput'](0x0, _0x11693f, _0x909072)) : (_0x909072 = (_0x3cb437['offsetY'] - _0x4a87ab) / _0x449e54 * 0x2 * 0x7fff, _0x11693f = 0x13, _0x46cf61['simulateInput'](0x0, 0x12, 0x0), _0x46cf61['simulateInput'](0x0, _0x11693f, _0x909072)));
                    }, !0x1), E['elements']['container']['addEventListener']('mousedown', function (_0x860158) {

                        switch (_0x860158['which']) {
                            case 0x1:
                                _0x46cf61['simulateInput'](0x0, 0x8, 0x1);
                                break;
                            case 0x2:
                                break;
                            case 0x3:
                                _0x46cf61['simulateInput'](0x0, 0x0, 0x1);
                        }
                    }, !0x1), E['elements']['container']['addEventListener']('mouseup', function (_0xc1f09e) {

                        switch (_0xc1f09e['which']) {
                            case 0x1:
                                _0x46cf61['simulateInput'](0x0, 0x8, 0x0);
                                break;
                            case 0x2:
                                break;
                            case 0x3:
                                _0x46cf61['simulateInput'](0x0, 0x0, 0x0);
                        }
                    }, !0x1));
                    _0xb3d5b3['FS']['createDataFile']('/home/web_user/.config/retroarch', 'retroarch-core-options.cfg', _0x2e8b8d, !0x0, !0x0);
                    _0xb3d5b3['FS']['createDataFile']('/etc', 'retroarch-core-options.cfg', _0x2e8b8d, !0x0, !0x0);
                    if (_0x280d63) {
                        write_bios(_0x280d63);
                    } else write_parent();
                }
                $ = s => T.$(s, _0xb3d5b3['loading']);
            }
            E.CREATE = CREATE;

        }
        constructor(elm, configs) {
            var E = this;
            if ('undefined' != typeof EJS_savename) {
                configs['savename'] = EJS_savename;
            }
            if (configs['gameParentUrl'] && I.str(configs['gameParentUrl'])) {
                configs['gameParentUrl'] = [configs['gameParentUrl']];
            }
            this['game'] = T.$(elm);
            this['config'] = I[1].assign(this['config'], configs || {}),
                this['lightgun'] = this['config']['lightgun'];
            this['mouse'] = this['config']['mouse'];
            this['multitap'] = this['config']['multitap'];
            this['cheats'] = this['config']['cheats'];
            this['savepath'] = this['config']['system'];
            this['cheats'] || (this['cheats'] = []);
            this['color'] = this['config']['color'];
            //this['mode'] = 0x1;
            this['fullscreen'] = {
                'active': !0x1
            };
            E['inFrame'] = !0x0;
            T.addJS('./emulatorjs.css', null, !0);
            this['game']['innerHTML'] = '';
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
            this['config']['selectors']['controls']['wrapper'] = getClassName('ejs__controls', !0);
            this['config']['selectors']['container'] = getClassName('ejs', !0);
            this['system'] = this['config']['system'];
            this['config']['mute'] = !0x0;
            this['eventListeners'] = [];
            this['listeners'] = new _0x409004(this);
            this['storage'] = new _0x39ea9e(this, 'ejs_settings');
            this['game']['emulator'] = this;
            if (!I.elm(this['elements']['container'])) {
                this['elements']['container'] = T.$ce('div');
                _0x3ee401(this['game'], this['elements']['container']);
            }
            T.$append(this['elements']['container'], T.$ct('div', null, getClassName({
                'ejs__widgets': !0x0
            })));
            T.$append(
                this['elements']['container'],
                T.$ct('div', null, getClassName({
                    'ejs__dialogs': !0x0
                }))

            );
            _0x514a8c['addStyleHook']['call'](this);
            _0x46cf61['setup']['call'](this);
            _0x514a8c['build']['call'](this);
            this['listeners']['container']();
            this['listeners']['global']();
            this['fullscreen'] = new _0x2d3df9(this);
            this['create']();

        }
        restart() {

            this['currentTime'] = 0x0;
        }
        increaseVolume(_0x16e5bd) {
            var _0x4079cf = this['game']['muted'] ? 0x0 : this['volume'];
            this['volume'] = _0x4079cf + (I.num(_0x16e5bd) ? _0x16e5bd : 0x0);
        }
        decreaseVolume(_0x521751) {

            this['increaseVolume'](-_0x521751);
        }
        loadState(_0xa43f9d) {

            _0x46cf61['loadState'](_0xa43f9d, 0x0);
        }
        on(_0x49a826, _0x570eb9) {

            _0x58fce2['call'](this, this['elements']['container'], _0x49a826, _0x570eb9);
        }
        once(_0x14687a, _0x4f2687) {

            _0x1fa3b9['call'](this, this['elements']['container'], _0x14687a, _0x4f2687);
        }
        off(_0x1216bd, _0x2ed9dd) {

            _0x1c7f8f(this['elements']['container'], _0x1216bd, _0x2ed9dd);
        }
        set playing(a) {
            Array['from'](this['elements']['buttons']['play'] || [])['forEach'](function (_0x11f2c9) {

                _0x11f2c9['pressed'] = a;
            }), this['paused'] = !a;
        }
        get playing() {

            return this['ready'] && !this['paused'];
        }
        set volume(volume) {
            var value = volume;
            I.str(value) && (value = +value), I.num(value) || (value = this['storage']['get']('volume')), I.num(value) || (value = this['config']['volume']), value > 0x1 && (value = 0x1), value < 0x0 && (value = 0x0), this['config']['volume'] = value, this['game']['volume'] = value, !I.empty(volume) && this['muted'] && 0x0 < value && (this['muted'] = !0x1);
        }
        get volume() {

            return +this['game']['volume'];
        }
        set muted(bool) {
            I.bool(bool) || (bool = this['storage']['get']('muted')), I.bool(bool) || (bool = this['config']['muted']), this['config']['muted'] = bool, this['game']['muted'] = bool;
        }
        get muted() {

            return !!this['game']['muted'];
        }
        mode = 0x2;
        version = '0.5.8';
        //4bf51c875c23238fba5f9aa0bb80ac3c  32d57c66d2f3ea56d2af90bef14773f0
        key = 'c37f5e84f377fb892c851b364c55251132d57c66d2f3ea56d2af90bef14773f0';
        //key = '54f99f60'+'901cd32e'+'65c5ef32'+'3c27d0e3'+'32d57c66d2f3ea56d2af90bef14773f0';
        basekey = '32d57c66d2f3ea56d2af90bef14773f0';
        system = '';
        hash = '';
        lightgun = !0x1;
        mouse = !0x1;
        multitap = !0x1;
        keyboard = !0x1;
        pointerlock = !0x1;
        savename = '';
        ready = !0x1;
        paused = !0x0;
        started = !0x1;
        focused = !0x1;
        storageSupported = _0x39ea9e['supported'];
        touch = _0x236fc8['touch'];
        config = {
            'volume': 0.5,
            'muted': !0x1,
            'i18n': {
                'restart': 'Restart',
                'play': 'Play',
                'pause': 'Pause',
                'played': 'Played',
                'volume': 'Volume',
                'mute': 'Mute',
                'unmute': 'Unmute',
                'enterFullscreen': 'Enter fullscreen',
                'exitFullscreen': 'Exit fullscreen',
                'settings': 'Settings',
                'saveState': 'Save State',
                'loadState': 'Load State',
                'disk': 'Disk',
                'netplay': 'Netplay',
                'gamepad': 'Controls Settings',
                'cheat': 'Cheats',
                'menuBack': 'Go back to previous menu',
                'normal': 'Normal',
                'all': 'All',
                'reset': 'Reset',
                'disabled': 'Disabled',
                'enabled': 'Enabled',
                'playNow': 'Play Now'
            },
            'listeners': {
                'play': null,
                'pause': null,
                'restart': null,
                'rewind': null,
                'mute': null,
                'volume': null,
                'fullscreen': null
            },
            'events': ['ready'],
            'selectors': {
                'editable': 'input, textarea, select, [contenteditable]',
                'container': '.ejs',
                'controls': {
                    'container': null,
                    'wrapper': '.jes__controls'
                },
                'buttons': {
                    'play': '[data-btn="play"]',
                    'pause': '[data-btn="pause"]',
                    'mute': '[data-btn="mute"]',
                    'fullscreen': '[data-btn="fullscreen"]',
                    'settings': '[data-btn="settings"]',
                    'saveState': '[data-btn="save-state"]',
                    'loadState': '[data-btn="load-state"]',
                    'gamepad': '[data-btn="gamepad"]',
                    'netplay': '[data-btn="netplay"]',
                    'cheat': '[data-btn="cheat"]'
                },
                'inputs': {
                    'volume': '[data-range="volume"]'
                }
            },
            'classNames': {
                'type': 'ejs--game',
                'wrapper': 'ejs--game-wrapper',
                'control': 'ejs__control',
                'controlPressed': 'ejs__control--pressed',
                'playing': 'ejs--playing',
                'paused': 'ejs--paused',
                'stopped': 'ejs--stopped',
                'loading': 'ejs--loading',
                'hover': 'ejs--hover',
                'tooltip': 'ejs__tooltip',
                'hotkey': 'ejs__hotkey',
                'hidden': 'ejs__sr-only',
                'hideControls': 'ejs--hide-controls',
                'isIos': 'ejs--is-ios',
                'isTouch': 'ejs--is-touch',
                'uiSupported': 'ejs--full-ui',
                'noTransition': 'ejs--no-transition',
                'menu': {
                    'value': 'ejs__menu__value',
                    'badge': 'ejs__badge',
                    'open': 'ejs--menu-open'
                },
                'fullscreen': {
                    'enabled': 'ejs--fullscreen-enabled',
                    'fallback': 'ejs--fullscreen-fallback'
                },
                'tabFocus': 'ejs__tab-focus'
            }
        };
        elements = {
            'container': null,
            'buttons': {},
            'display': {},
            'inputs': {},
            'settings': {
                'popup': null,
                'menu': null,
                'panels': {},
                'buttons': {}
            },
            'dialogs': {
                'gamepad': null,
                'loading': null,
                'netplay': null
            },
            'widgets': {}
        };
    }
    return EJS_CLASS;
})();