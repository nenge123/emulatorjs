(function (){
    var d=document,script = d.createElement('script'),slm=d.currentScript,
    JSpath = slm.src.split('/').slice(0,-1).join('/')+'/';//if you use path
    script.src = 'common.min.js?222';
    d.body.appendChild(script);
    d.addEventListener('NengeReady',async e=>{
        let T = e.detail,I = T.I;
        /**
         * set env
         */
        T.Libzip = 'zip.min.js'; //低版本IOS可能不兼容 如果不是对中文有必要要求,用 extractzip.min.js 替代
        T.DB_NAME = 'Emulatorjs'; //定义 indexdb name
        T.LibStore = 'data-libjs'; //定义 储存js文件表
        T.version = 4;
        T.DB_STORE_MAP = { //所有表
            'data-patch': {'system': false},
            'data-parent': {'system': false},
            'data-rooms': {'system': false},
            'data-system': {},
            'data-bios': {'system': false},
            'data-saves': {'timestamp': false},
            'data-openbor': {'timestamp': false},
            'data-libjs': {},
        };
        T.RootPath = JSpath; //site root,if you use my file set T.JSpath
        /**
         * set lang
         */
        T.lang = await T.FetchItem({
            url: T.RootPath + 'i18n/' + T.i18nName + '.json?' + T.time,
            type: 'json',
            version: T.version
        });
        /**
         * loading emulatorjs
         */
        await T.loadLibjs(T.RootPath+'emulator_4.99_19_Nenge.min.zip?'+T.time,e=>{
           //e is file download process
           console.log(e);
        });
        /**
         * loading css
         */
        await T.loadLibjs('scss_emujs.css');
        /**
         * bind DB to EJS
         */
        I.defines(window.EJS,{
            DB:{
                'libjs':T.getStore('data-libjs'),
                'patch':T.getStore('data-patch'),
                'parent':T.getStore('data-parent'),
                'rooms':T.getStore('data-rooms'),
                'system':T.getStore('data-system'),
                'bios':T.getStore('data-bios'),
                'saves':T.getStore('data-saves'),
                'openbor':T.getStore('data-openbor'),
            }
        },1);
        Nenge.triger(document,'EJSREADY',{detail:Nenge});
    });
})()