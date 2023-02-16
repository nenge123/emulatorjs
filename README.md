![Image](/images/zan.jpg?raw=true)

How to use on your site
==============
>download `common.min.js`|`extract7z.zip`|`libunrar.min.zip`|`zip.min.js`,`extractzip.min.js`<hr>`emulator_4.99_19_Nenge.min.zip` `/i18n/*.json`|`/frontend/buttons.zip+shader.zip`|`/bios/arcade.7z`<hr> to your website same root
- HTML
```html
<div style="position:fixed;left:0px;right:0px;top:0px;bottom:0px;" hidden><div id="game"></div></div>

<app-emu data-system="gba" style="position:fixed;left:0px;right:0px;top:0px;bottom:0px;" hidden></app-emu>
<script src="emu.js"></script>
```
- emu.js
```javascript
!function(){
    var d=document,script = d.createElement('script'),slm=d.currentScript,JSpath = slm.src.split('/').slice(0,-1).join('/')+'/';
    script.src = '/js/common.js?'+Math.random();d.body.appendChild(script);
    d.addEventListener('NengeReady',async e=>{
        T.DB_NAME = 'Emulatorjs'; //定义 indexdb name
        T.LibStore = 'data-libjs'; //定义 储存js文件表
        //T.Libzip = 'zip.min.js'; //解压zip的库,可选 extractzip.min.js(不支持中文名) 替代
        T.version = 1;//定义js版本 便于更新数据
        T.DB_STORE_MAP = { //所有表 all store table if you change this,must chang emulator_4.99_19_Nenge.js 'DISK.DB'
            'data-patch': {'system': false},
            'data-parent': {'system': false},
            'data-rooms': {'system': false},
            'data-system': {},
            'data-bios': {'system': false},
            'data-saves': {'timestamp': false},
            'data-openbor': {'timestamp': false},
            'data-libjs': {},
        };
        T.RootPath = JSpath; //site root
        T.lang = await T.FetchItem({ //add i18n lang
            url: T.RootPath + 'i18n/' + T.i18nName + '.json?' + T.time,
            type: 'json',
            version: T.version
        });
        await T.loadLibjs(T.RootPath+'emulator_4.99_19_Nenge.min.zip?'+T.time,e=>console.log('Loading:'+e));//download emulator_4.99_19_Nenge.min.zip and Decompress
        await T.loadLibjs('scss_emujs.css');//must after emulator_4.99_19_Nenge.min.zip
            /* base method more option see http://www.emulatorjs.com/
           if(typeof EJS =="undefined" )await T.callaction('installEJS');
           T.$('#game').hidden = false;
            new EJS('#game',{
                gameUrl:'',
                system:'gba',
                gameId: '', //set Unique ID on Netplay
                biosUrl:'',
                cheats:'', //set check code like  'aabbccdd xx\naabbccdd xx\n'
                gameparenturl: [],
                gamepatchurl: '', //add ips .. game patch
            });*/
            T.action['TAG-APP-EMU'] = async (elm,status)=>{
                if(status=='connect'){
                    if(elm.dataset.install) return;
                    if(typeof EJS =="undefined" )await T.callaction('installEJS');//这样做避免全局污染 只有存在<app-emu>才进行插入js
                    let config = I.toObj(elm.dataset),div = T.$append(elm,T.$ce('div'));
                    elm.ok = true;elm.hidden = false;new EJS(div,config);
                }
            };
            T.customElement('app-emu');
    });
};

```

基本上已经完成魔改
==============
> 如果有文件请及时反馈,手机不要浏览器中玩,要添加至主屏幕.

- [ ] 清除已知沉淀代码,打包加载不要到1MB!再次加载秒打开.
- [x] 提高清晰的 最低720P
- [x] 本地数据库缓存管理,允许替换旧版核心
- [ ] 移除部事件,采用CSS替代  
  - [x] 底部菜单
- [ ] 搓玻璃按键UI
  - [x] 摇杆默认不会加载,只有需要时才加载`nipplejs.js`
  - [x] system-gb:轻微改动,上调按键位置.
- [ ] 更多请issue或者PR


# backup cores 请常备份核心以免其不再提供公开下载问题问题
> the core some time will update.maybe save the cores to you local computer,backup!
```javascript
    //f12 console
    let CoreSystemList = {
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
        //'fba0.2.97.29': 'fba0.2.97.29',
        'fbneo': 'fbneo',
        'jaguar': 'jaguar',
        'mame2003': 'mame2003',
        //'mame0.193': 'mame',
        //'mame0.243': 'mame0.243',
        'sega': 'sega',
        'segaMS': 'sega',
        'segaGG': 'sega',
        'segaMD': 'sega',
        'segaCD': 'segacd',
        'sega32x': '32x',
        'zc210':'zc210',
        'openbor':'openbor',
        'n64-legacy':'n64-legacy',
        'amiga':'amiga',
        'px68k':'px68k',
        'beetle-psx':'beetle-psx',
        'mupen64plus':'mupen64plus',
        'mupen64plus2':'mupen64plus2',
        'mupen64plus-nx':'mupen64plus-nx',
        'vbanext':'vbanext',
        
        'mame-1': 'mame',
        'mame-2': 'mame',
        'mame-3': 'mame',
        'mame-4': 'mame',
        'mame-5': 'mame',
        'mame-6': 'mame',
        'mame-7': 'mame',
        
        'mame0.243-1': 'mame0.243',
        'mame0.243-2': 'mame0.243',
        'mame0.243-3': 'mame0.243',
        'mame0.243-4': 'mame0.243',
        'mame0.243-5': 'mame0.243',
        'mame0.243-6': 'mame0.243',
        'mame0.243-7': 'mame0.243',
        'mame0.243-8': 'mame0.243',
    };
    let jsonUrl = str=> `https://www.emulatorjs.com/api/v?name=${str}&_t=${Nenge.time}`;
    let CoreUrl = str=>`https://www.emulatorjs.com/cores/${str}?v=${Nenge.time}`;
    let func = [],kk={};
    Nenge.I.toArr(CoreSystemList,entry=>{
        func.push(async e=>{
            await Nenge.FetchItem({
                url:CoreUrl(entry[0]+'-wasm.data'),
                Filter(wasmU8){
                    let mime = Nenge.F.checkBuffer(wasmU8);
                    if (!mime || !['zip', '7z'].includes(mime)) {
                        wasmU8 = wasmU8['slice'](0xc);
                        wasmU8['set']([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c, 0x0, 0x3], 0x0);
                    }
                    return wasmU8;
                },
                success(data){
                    Nenge.down(entry[0]+'-wasm.7z',data)
                }
            });
            await Nenge.FetchItem({
                url:CoreUrl(entry[0]+'-asmjs.data'),
                Filter(wasmU8){
                    let mime = Nenge.F.checkBuffer(wasmU8);
                    if (!mime || !['zip', '7z'].includes(mime)) {
                        wasmU8 = wasmU8['slice'](0xc);
                        wasmU8['set']([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c, 0x0, 0x3], 0x0);
                    }
                    return wasmU8;
                },
                success(data){
                    Nenge.down(entry[0]+'-asmjs.7z',data)
                }
            });
            if(kk[entry[1]]) return;
            await Nenge.FetchItem({
                url:jsonUrl(entry[1]),
                type:'text',
                success(data){
                    Nenge.down(entry[1]+'.json',data)
                }
            });
            kk[entry[1]] = true;
        });
    });
    let xx;
    while(xx = func.pop()){
        await xx();
    }
```

# 如何使用自己的核心
> search 搜索 Wasm_Download
> 增加判断条件即可