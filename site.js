!function(){
    var d=document,
        script = d.createElement('script'),
        slm=d.currentScript,
        JSpath = slm.src.split('/').slice(0,-1).join('/')+'/';
    script.src = 'common.min.js?5345435';
    d.body.appendChild(script);
    d.addEventListener('NengeReady',async e=>{
        let T = e.detail,I = T.I;
        T.Libzip = 'zip.min.js'; //低版本IOS可能不兼容 如果不是对中文有必要要求,用 extractzip.min.js 替代
        T.DB_NAME = 'Emulatorjs'; //定义 indexdb name
        T.LibStore = 'data-libjs'; //定义 储存js文件表
        T.version = 6;
        T.DB_STORE_MAP = { //所有表
            'data-patch': {
                'system': false
            },
            'data-parent': {
                'system': false
            },
            'data-rooms': {
                'system': false
            },
            'data-system': {},
            'data-bios': {
                'system': false
            },
            'data-saves': {
                'timestamp': false
            },
            'data-openbor': {
                'timestamp': false
            },
            'data-libjs': {},
        };
        T.RootPath = JSpath; //site root
        T.lang = await T.FetchItem({
            url: T.RootPath + 'i18n/' + T.i18nName + '.json?' + T.time,
            type: 'json',
            version: T.version
        });
        await T.loadLibjs(T.RootPath+'emulator_4.99_19_Nenge.min.zip',e=>{
            T.$('.nenge-status').innerHTML = 'Loading:'+e;
        });
        T.$('.nenge-status').remove();
        await T.loadLibjs('scss_emujs.css');
        I.defines(EJS,{
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
        Nttr('.core-list').hidden = false;
        Nttr('.core-list').click(e=>{
            let elm = e.target;
            if(I.elm(elm)){
                let tag = elm.tagName;
                if(tag=='H1'){
                    elm.classList.toggle('active');
                }else if(tag=='P'){
                    let system = elm.dataset.system;
                    if(system){
                        Nttr('.core-list').remove();
                        T.$('#game').parentNode.hidden = false;
                        new EJS('#game', {
                            gameUrl:'',
                            system,
                            gameId: '', //set Unique ID on Netplay
                            biosUrl:'',
                            cheats:'', //set check code like  'aabbccdd xx\naabbccdd xx\n'
                            gameparenturl: '',
                            gamepatchurl: '', //add ips .. game patch
                        });

                    }
                }
            }
        });
        window.EJS_DEBUG_ = true;
        script.remove();
        slm.remove();
    },{once:true});
}();;