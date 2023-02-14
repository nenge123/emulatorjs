!function(){
    var d=document,
        script = d.createElement('script'),
        slm=d.currentScript,
        JSpath = slm.src.split('/').slice(0,-1).join('/')+'/';
    script.src = 'common.js?5345435';
    d.body.appendChild(script);
    d.addEventListener('NengeReady',async e=>{
        let T = e.detail,I = T.I;
        T.Libzip = 'zip.min.js'; //低版本IOS可能不兼容 如果不是对中文有必要要求,用 extractzip.min.js 替代
        T.DB_NAME = 'Emulatorjs'; //定义 indexdb name
        T.LibStore = 'data-libjs'; //定义 储存js文件表
        T.version = 8;
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
        let coreList = Nttr('.core-list');
        await T.loadLibjs(T.RootPath+'emulator_4.99_19_Nenge.min.zip?'+T.time,e=>{T.$('.nenge-status').innerHTML = 'Loading:'+e;});
        await T.loadLibjs('scss_emujs.css');
        coreList.hidden = false;
        await EJS.getSystemIcon(coreList.obj,e=>{T.$('.nenge-status').innerHTML = 'Loading:'+e;});
        T.$('.nenge-status').remove();
        coreList.$('h1').classList.add('active');
        coreList.click(e=>{
            let elm = e.target;
            if(I.elm(elm)){
                let tag = elm.tagName;
                if(tag=='H1'){
                    elm.classList.toggle('active');
                }else if(tag=='P'){
                    let system = elm.dataset.system;
                    if(system){
                        coreList.remove();
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
        coreList.$('iframe').src="https://www.emulatorjs.com/ad.html";
        window.EJS_DEBUG_ = true;
        script.remove();
        slm.remove();
    },{once:true});
}();;