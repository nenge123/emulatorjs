let Fileurl = document.currentScript.src.split('/').slice(0,-1);
let NengeApp = new class{
    dir = Fileurl.join('/')+'/';
    version = 1.7;
    config = {
        'gameId':122,
/*
        'gameUrl':'lll.gba',
        'system':'gba',
        'biosUrl':undefined,
        'gameParentUrl':undefined,
        'gamePatchUrl':undefined,
        'lightgun':undefined,
        'mouse':undefined,
        'multitap':undefined,
        'playerName':undefined,
        'cheats':undefined,
        'color':undefined,
*/
        'OptionSet':{
            //'screenRecord':{
            //    label:'Start Screen Recording',
            //    options:{}
            //},
            'NengePanel':{
                'label':'Nenge\'s Panel',
                'options':{
                    'screenRecord':'Start Screen Recording',
                    'reload':'Reload Page',
                    "tofullScreen":"Full Screen ?",
                    "HomePage":"Home Page",
                    'fastforward':'Fast Forward',
                    'COMBOKEY':'COMBOKEY',
                }
            },
            'FilePanel':{
                'label':'File\'s Panel',
                'options':{
                    'downloadsrm':'DownLoad SRM',
                    'downloadstate':'DownLoad State',
                    'downloadsrm':'DownLoad SRM',
                    "Cache2Manage":"Cache Manage",
                    'uploadsrm':'Upload SRM',
                    'uploadstate':'Upload State',
                    'tosavesrm':'Saved SRM',
                    'toloadsrm':'Loaded SRM',
                }
            }
        },
        onsavestate: async function(){
            EJS.STATE_SAVE(this).then(result=>{
                console.log(result);
            });
            
        },
        onloadstate:async function(){
            EJS.STATE_LOAD(this).then(result=>{
                console.log(result);
            });
        },
        OptionCall:{
            'COMBOKEY':function(EJS_DATA,event){
                let elm = event.target,color = elm.style.color;
                EJS_DATA.Module.cwrap('simulate_input', 'null', ['number', 'number', 'number'])(0,24,color!='red'?0x7fff:0);
                elm.style.color = color!='red'?'red':'';
            },
            'HomePage':function(){
                let href = this.config.HomePage || this.config.runpage|| location.origin;
                if(location.href == href) location.reload();
                else location.href = href;
            },
            'tofullScreen':function(ejs_data){
                ejs_data.Module.canvas.classList.toggle('ejs--screen-'+this.system);

            },
            'Cache2Manage':function(){
                //this.elements.dialogs['cache'];
                let ContextMenuItem = this.MENU_SET('ContextMenuItem');
                ContextMenuItem.CacheManage.call(this);
            },
            'QuickSave':function(){
                EJS.STATE_SAVE(this).then(result=>{
                    console.log(result);
                });
            },
            'QuickLoad':function(){
                    EJS.STATE_LOAD(this).then(result=>{
                        console.log(result);
                    });
            },
            'tosavesrm':function(ejs_data){
                EJS.SRM_SAVE(this).then(result=>{
                    console.log(result);
                });

            },
            'toloadsrm':function(ejs_data){
                EJS.SRM_LOAD(this).then(result=>{
                    console.log(result);
                });
            },
            'reload':()=>{
                location.reload();
            },
            'downloadsrm':function (EJS_DATA){
                EJS.SRM_SAVE(this,true).then(result=>{
                    console.log(result);
                });
            },
            'downloadstate':function (EJS_DATA){
                EJS.STATE_SAVE(this,true).then(result=>{
                    console.log(result);
                });
            },
            'uploadsrm':function (EJS_DATA){
                NengeApp.upload(result=>{
                    EJS.SRM_LOAD(this,result);
                });
            },
            'uploadstate':function (EJS_DATA){
                NengeApp.upload(result=>{
                    EJS.STATE_LOAD(this,result).then(result=>{
                        console.log(result);
                    });
                });
            },
            'fastforward':function (EJS_DATA,event){
                let Module = EJS_DATA.Module;
                if(Module._fast_forward){
                    let elm = event.target,
                        config = this.config,
                        btxt = this.translate(config.OptionSet.NengePanel.options.fastforward),
                        ctx = this.translate('Stop Forward'),
                        num = 0;
                        if(elm.textContent == btxt){
                            elm.innerHTML =ctx;
                            num = 1;
                        }else{
                            elm.innerHTML = btxt;
                        }
                        Module._fast_forward(num);
                }
            },
            'screenRecord':function(ejs_data,event){
                let elm = event.target,
                    btxt = 'Start Screen Recording',
                    ctxt = this.translate(btxt) || btxt,
                    dtxt = 'Stop Screen Recording',
                    etxt = this.translate(dtxt) || dtxt;
                if(!ejs_data.recorder)ejs_data.recorder = NengeApp.setRecord(ejs_data);
                if(!ejs_data.recorder) elm.parentNode.remove();
                if(elm.textContent == etxt){
                    elm.innerHTML = ctxt;
                    ejs_data.recorder.gamename = this.startName;
                    ejs_data.recorder.stop();
                }else{
                    elm.innerHTML = etxt;
                    ejs_data.recorder.start();
                }
                //
            }
        },
        'translate':{
            "File\'s Panel":"文件面板",
            "Nenge's Panel":'能哥面板',
            'DownLoad SRM':'下载电子存档',
            "Upload SRM":"上传电子存档",
            "DownLoad State":"下载即时状态",
            "Upload State":"上传即时状态",
            "Fast Forward":"加速",
            "Stop Forward":'停止加速',
            "Start Screen Recording":'开始录像',
            "Stop Screen Recording":'停止录像',
            "Reload Page":"刷新页面",
            "SELECT":'选择',
            "START":'开始',
            "MENU":'菜单',
            "Full Screen ?":"让屏幕占满?",
            "Loading...":"载入中",
            "OpenGBA RTC":"开启GBARTC",
            "Network Error":"网络错误！",
            "Download Game Core":"载入运行核心",
            "Decompress Game Core":"解压核心进度",
            "Game Core ready":"核心加载完毕！",
            'Download Game Data':'载入游戏数据',
            "Decompress Game Data":"解压游戏数据",
            "Game Data ready":"游戏数据准备完毕！",
            "Take Screenshot":"截图",
            "Home Page":'主页',
            "Cache Manager":"游戏缓存管理",
            "Cache Manage":"游戏缓存列表",
            "Quick Save (F2)":"保存状态",
            "Quick Load (F4)":"读取状态",
            "All Clear":"全部清除",
            "Room Name":"房间名",
            "Password:":"密码",
            "Player":"玩家",
            "Name":"名称",
            "Set Player Name":"设置玩家名",
            "Create a Room":"建房",
            "Password (Optional)":"密码(可选)",
            "Password":"密码",
            "Rooms":"房间列表",
            "Players":"玩家数量",
            "Player Name":"玩家名称",
            "Max Players":"最大玩家数量",
            "OK":"好",
            "Clear":"清除",
            "Remove":"移除",
            "Load this Game":"载入这个游戏",
            'on start':'准备开始',
            'on ready':'准备完毕',
            'COMBOKEY':'连发',
            "Enabled":"启用",
            "enabled":"开启",
            "disabled":"关闭",
            'Disabled':'关闭',
            '2xScaleHQ':'2倍柔化',
            "4xScaleHQ":"4倍柔化",
            "4xScaleHQ.glslp":"启用4倍柔化",
            "CRT easymode":"液晶简易",
            "CRT aperture":"液晶模糊",
            "CRT geom":"液晶管道",
            "Shader":"屏幕滤镜",
            "Virtual Gamepad":"虚拟按键",
            "Enable Turbo Buttons":"开启加速选项",
            "Turbo Delay in frames":"加速帧延迟",
            "Solar sensor level":"光感等级",
            "Frameskip":"跳帧",
            "Screen layout":"屏幕布局",
            "top/bottom":"上/下",
            "bottom/top":"下/上",
            "left/right":"左/右",
            "right/left":"右/左",
            "top only":"只有上",
            "bottom only":"只有下",
            "quick switch":"快速切换",
            "hybrid/top":"放大上",
            "hybrid/bottom":"放大下",
            "Screen Rotation":"旋转屏幕",
            "none":"空的",
            "Player 1 Pak":"玩家1 Pak",
            "Player 2 Pak":"玩家2 Pak",
            "Player 3 Pak":"玩家3 Pak",
            "Player 4 Pak":"玩家4 Pak",
            "memory":"内存",
            "rumble":"噪音",
            "Aspect Ratio (Need to refresh page)":"宽高比（需要刷新页面）",
            "16:9 Resolution":"16:9 分辨率",
            "4:3 Resolution":"4:3 分辨率",
            "Enable second memory card":"开启第二内存卡",
            "Pad 1 Type":"Pad 1类型",
            "Pad 2 Type":"Pad 2类型",
            "Pad 3 Type":"Pad 3类型",
            "Pad 4 Type":"Pad 4类型",
            "default":"默认",
            "standard":"标准",
            "analog":"摇杆",
            "negcon":"NeGcon",
            "Enable Vibration":"启动震动",
            "Enable interlacing mode(s)":"启用隔行扫描模式(*)",
            "Enhanced resolution (slow)":"增强分辨率（慢）",
            "Enhanced resolution speed hack":"增强的分辨率速度破解",
            "INSERT COIN":"投币",
            "Aspect ratio":"宽高比",
            "DAR":"窄屏",
            "PAR":"宽屏",
            "CPU overclock":"CPU超频",
            "Diagnostic Input":"诊断输入",
            "None":"",
            "None":"空的",
            "Hold Start":"按住开始",
            "Start + A + B":"开始+A+B",
            "Hold Start + A + B":"按住开始+A+B",
            "Start + L + R":"开始+L+R",
            "Hold Start + L + R":"按住开始+L+R",
            "Hold Select":"按住选择",
            "Select + A + B":"选择+A+B",
            "Hold Select + A + B":"按住选择+A+B",
            "Select + L + R":"选择+L+R",
            "Hold Select + L + R":"按住选择+L+R",
            "Force Neo Geo mode":"强制NeoGeo模式",
            "MVS":"街机",
            "AES":"家用",
            "UNIBIOS":"反作弊",
            "DIPSWITCH":"DIP开关",
            "Voice":"声音",
            "Test mode":"测试模式",
            "Stop mode":"暂停模式",
            "Off":"关闭",
            "On":"开启",
            "Bios select (Fake)":"Bios 选择(虚拟)",
            "Newer":"较新",
            "Older":"较旧",
            "Music":"音乐",
            "Free play":"免费开始",
            "Newer (no intro, calendar)":"较新(无介绍,日历)",
            "Newer (no intro)":"较新(无介绍)",
            "Region (Fake)":"地区(虚拟)",
            "World":"世界",
            "China":"中国",
            "Taiwan":"台湾",
            "Japan":"日本",
            "Korea":"韩国",
            "Hong Kong":"香港",
            "World":"世界","Restart":"",
            "Play":"开始",
            "Pause":"暂停",
            "Played":"已开始",
            "Volume":"音量",
            "Mute (F9)":"静音(F9)",
            "Unmute (F9)":"取消静音(F9)",
            "Enter fullscreen":"进入全屏",
            "Exit fullscreen":"取消全屏",
            "Settings":"设置",
            "Save State (Shift + F2)":"存储状态(Shift + F2)",
            "Load State (Shift + F4)":"读取状态(Shift + F4)",
            "Netplay":"联机",
            "Controls Settings":"控制设置",
            "Cheats":"金手指",
            "Go back to previous menu":"返回上层菜单",
            "Normal":"普通",
            "All":"全部",
            "Reset":"重设",
            "Play Now":"开始游戏",
            "Restart":"重启",
            "Add Cheat":"添加金手指",
            "Close":"关闭",
            "Add Cheat Code":"添加金手指代码",
            "Code":"代码",
            "Description":"描述",
            "Submit":"提交",
            "Player 1":"玩家1",
            "Player 2":"玩家2",
            "Player 3":"玩家3",
            "Player 4":"玩家4",
            "Update":"更新",
            "Cancel":"取消",
            "Press keyboard or gamepad":"按下任意键",
            "Connected gamepad":"连接的手柄",
            "Gamepad":"手柄",
            "Keyboard":"键盘",
            "Set":"设置",
            "Default":"默认",
            "Low":"低",
            "High":"高",
            "Very High":"很高",
            "4 Players Support":"支持4玩家",
            "Color Palette":"彩电调色板",
            "asqrealc":"",
            "nintendo-vc":"任天堂VC",
            "rgb":"红绿蓝",
            "yuv-v3":"YUV版本3",
            "Auto":"自动",
            "NTSC":"NTSC美国制",
            "PAL":"PAL帕尔制",
            "pal":"PAL帕尔制",
            "Sound Quality":"声音质量",
            "NES":"红白机",
            "Famicom":"家庭用机",
            "Turbo Enable":"启用涡轮",
            "Both":"两者",
            "Region":"地区",
            "Dendy":"山寨FC",
            "bmf-final2":"BMF2",
            "bmf-final3":"BMF3",
            "smooth-fbx":"FBX",
            "composite-direct-fbx":"FBX2",
            "pvm-style-d93-fbx":"FBX3",
            "nescap":"nescap",
            "ntsc-hardware-fbx":"ntsc-hardware-fbx",
            "nes-classic-fbx-fs":"nes-classic-fbx-fs",
            "wavebeam":"波动枪",
            "No Sprite Limit":"无限制",
            "asqrealc":"asqrealc",
            "unsaturated-final":"unsaturated-final",
            "sony-cxa2025as-us":"sony-cxa2025as-us",
            "Saved SRM":"保存SRM",
            "Loaded SRM":"读取SRM",
            "GB Colorization":"GB着色",
            "internal":"内置",
            "auto":"自动",
            "Internal Palette":"内置调色板",
            "GBC - Blue":"GBC蓝",
            "GBC - Brown":"GBC褐色",
            "GBC - Dark Blue":"GBC深蓝",
            "GBC - Dark Brown":"GBC深褐色",
            "GBC - Dark Green":"GBC深绿",
            "GBC - Grayscale":"GBC灰色",
            "GBC - Green":"GBC绿色",
            "GBC - Inverted":"GBC底片",
            "GBC - Orange":"GBC橙色",
            "GBC - Pastel Mix":"GBC混合",
            "GBC - Red":"GBC红色",
            "GBC - Yellow":"GBC黄色",
            "Download BIOS":"下载BIOS",
            "BIOS ready":"BIOS 完成",
            
        },
    };
    coreSupport = {
        'psx': ['bin', 'iso', 'cue', 'img', 'mdf', 'pbp', 'toc', 'cbn', 'm3u'],
        'nds': ['nds', 'bin'],
        'nes': ['fds', 'nes', 'unif', 'unf'],
        'snes': ['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'],
        'snes2002': ['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'],
        'snes2005': ['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'],
        'snes2010': ['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'],
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
        'sega': ['mdx', 'md', 'smd', 'gen', 'bin', 'iso', 'cue', 'sms', 'gg', 'sg', '68k', 'chd'],
        'segacd': ['mdx', 'md', 'smd', 'gen', 'bin', 'iso', 'cue', 'sms', 'gg', 'sg', '68k', 'chd'],
        '32x': ['32x', 'bin', 'gen', 'smd', 'md', 'cue', 'iso', 'sms'],
        'saturn': ['bin', 'cue', 'iso'],
        'msx': ['rom', 'mx1', 'mx2', 'dsk', 'cas'],
        'bluemsx': ['rom', 'ri', 'mx1', 'mx2', 'col', 'dsk', 'cas', 'sg', 'sc', 'm3u'],
        'ws': ['ws', 'wsc'],
        'arcade': ['zip'],
        'fba0.2.97.29': ['zip'],
        'mame2003': ['zip'],
        'mame': ['zip']
    };
    coreSystem = {
        'psx': 'psx',
        'nds': 'nds',
        'nes': 'nes',
        'fc': 'nes',
        'sfc': 'snes',
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
        'msx': 'bluemsx',
        'atari2600': 'a2600',
        'atari7800': 'a7800',
        'lynx': 'lynx',
        'ws': 'ws',
        'arcade': 'arcade',
        'fba0.2.97.29': 'fba0.2.97.29',
        'jaguar': 'jaguar',
        'mame2003': 'mame2003'
    };
    setRecord(obj){
        let Mime;
        [
            'video/webm; codecs=h264',
            'video/webm; codecs=vp9',
            'video/webm; codecs=vp8',
            'video/webm; codecs=vp9.0',
            'video/webm; codecs=vp8.0',
            'video/webm; codecs=avc1',
        ].forEach(
        val=>{
            if(!Mime&&MediaRecorder.isTypeSupported(val))Mime = val;
        });
        /*  open user WebCam/MIC
            let newStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        */
        if(!Mime) return false;
        let Module = obj.Module,
            videoSteam = Module.canvas.captureStream(30);
            if(!videoSteam) {
                return false;
            }
            let recorder = new MediaRecorder(videoSteam, {'mimeType':Mime});
        if(!recorder) {
            videoSteam = null;
            return false;
        }
        recorder.BLOBdata = [];
        recorder.ondataavailable = e=>{
            recorder.BLOBdata.push(e.data);
        };
        recorder.onstop = ()=>{
            if(recorder.BLOBdata.length<1) return;
            let a = document.createElement("a");
                a.href = window.URL.createObjectURL(new Blob(recorder.BLOBdata, {'type':Mime}));
                a.download = (recorder.gamename||'record')+'.'+(Mime.split('\/')[1].split(';')[0]);
                a.click();
                recorder.BLOBdata = [];
        };
        window.recorder = recorder;
        return recorder;
    }
    getName(name,sp){
        name = name.split('/').pop().split('.');
        let startName = name.slice(0, name.length - 1),
            Mime = name.pop();
        return startName+'.'+(sp||Mime);
    }
    download(buf,name,mime){
        let a = document.createElement("a"),data={};
        if(mime)data['type'] = mime;
        a.href = window.URL.createObjectURL(new Blob(buf instanceof Blob ? buf:[buf],data));
        a.download = name;
        a.click();
    }
    upload(cb){
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = event=>{
            let elm = event.target,
                file = elm.files[0];
            if(!file) return ;
            elm.value = '';
            let reader = new FileReader;
            reader.onload = e=>cb(new Uint8Array(e.target.result),file.name);
            reader.readAsArrayBuffer(file);
            input.onchange = null;
            input.remove();
        };
        input.click();
    }
    _elm = "#nenge-game";
    get elm(){
        return this._elm;
    }
    set elm(name){
        if(typeof name == 'string'&&name == this._elm){
            return ;
        }else if(typeof name !='string'){
            if(name[0])name= name[0];
            let id = '';
            if(name.id)id = name.id;
            if(name.className)id = name.classList[0];
            if(id==this._elm) return ;
            name = id;
        }
        let elm = document.querySelector(this._elm);
        if(elm)elm.parentNode.remove();
        this._elm = name;
    }
    
    getbios(core){
        let bios;
        switch (core) {
            case 'msx':
            case 'sega':
                case 'segaCD':
            case 'psx':
                bios = core+'.7z'
            break;
            case 'gb':
            case 'gbc':
            case 'gba':
            case 'vbanext':
                bios = 'gba.7z';
            break;
            case 'mame':
            case 'mame2003':
            case 'fba0.2.97.29':
            case 'arcade':
                bios = 'arcade.7z';
            break;
            case 'segaGG':
                bios = 'bios.gg';
            case 'bluemsx':
                bios = 'msx.gg';
            break;
            default:
                break;
        }
        if(bios) return this.dir+'bios/'+bios;
        else return '';
    };
    cacheName = 'nenge-emu-config';
    SETCONFIG(){
        if(document.getElementsByName('system')[0]){
            this.config.system = document.getElementsByName('system')[0].value;
            this.translate = Number(document.getElementsByName('translate')[0].value);
            this.config.stopMusic = Number(document.getElementsByName('music')[0].value);
            this.config.Arrow = document.getElementsByName('arrow')[0].value;
            this.bios = Number(document.getElementsByName('bios')[0].value);
            if(!this.config.system)alert('核心设置不能留空 Core settings cannot be left blank');
            localStorage.setItem(this.cacheName,JSON.stringify({
                system:this.config.system,
                translate:this.translate,
                music:this.config.stopMusic,
                arrow:this.config.Arrow,
                bios:this.bios
            }));
        }else{
            let cache = localStorage.getItem(this.cacheName);
            if(cache){
                cache = JSON.parse(cache);
                this.translate = Number(cache.translate);
                this.config.stopMusic = Number(cache.music);
                this.config.Arrow =  cache.arrow;
                this.bios = Number(cache.bios);
            }
        }
    }
    RUN(name,core,Buf) {
        this.ELM();
        this.SETCONFIG();
        if(name)this.config.gameUrl = name;
        if(core)this.config.system = core;
        if(Buf)this.config.gameBuf = Buf;
        if(!this.config.system) return;
        if(this.translate !=  undefined&&(this.translate==0|| this.translate==false)){
            this.config.translate = {};
            delete this.config.translate;
        }
        if(this.config.system=='fc')this.config.system = 'nes';
        if(this.config.system=='sfc')this.config.system = 'snes';
        if(this.bios) this.config.biosUrl = this.getbios(this.coreSystem[this.config.system]);
        let time=setInterval((()=>{
            this.ready&&(clearInterval(time),window.emu=new EJS(this.elm,this.config))
        }),500);}
    constructor() {"undefined"==typeof EJS?this.addjs(this.dir+"localforage.min.js",(()=>this.downEJS())):this.ready=!0;}
    ReadFile(FILES) {
        for(let e in FILES){if(e=='version')continue;let t=e.split(".")[0];"libunrar.js.mem"==e&&(t="libunrarmem"),"v.json"==e&&(t="vjson"),this.config[t]=window.URL.createObjectURL(new Blob([FILES[e]])),delete FILES[e]}FILES=null,this.addjs(this.config.emulator,(()=>{window.URL.revokeObjectURL(this.config.emulator),delete this.config.emulator,this.ready=!0}));
    }
    async todownload(v,s){let f = await fetch('https://www.emulatorjs.com/cores/'+v+'?v='+s);if(f.status==404) return console.log(v+' not down');let data = await f.arrayBuffer();if(f.status!='404'&&data.byteLength!=0){
        let buf = new Uint8Array(data);
        if(buf[0] != 0x37&&buf[1] != 0x7a){buf = buf.slice(0xc);
        buf.set([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c, 0x0, 0x3], 0x0);}
        this.download(buf,v.replace('.data','.7z'));}


}async downloadCore(v){for(let i in v){if(i=="fba0.2.97.29")continue;if(i=="pceCD")continue;if(i=='mame'){for(let s =1;s<7;s++)await this.todownload(i+'-'+s+'-wasm.data',v[i].version);; continue;}if(i=='atari2600') continue;if(i=='atari7800') continue;if(i=='segaGG') continue;if(i=='segaMD') continue;if(i=='segaMS') continue;if(i=='segaCD') continue;if(i=='segaSaturn') continue;if(i=='sega32x') continue;if(v[i].asmjs) await this.todownload(i+'-asmjs.data',v[i].version);if(i=='n64'&&v[i].asmjs) await this.todownload(i+'-legacy-asmjs.data',v[i].version);if(v[i].wasm) await this.todownload(i+'-wasm.data',v[i].version);}return v;}SET(data){for(var i in data=data||{},data)this.config[i]=data[i];}CALL(cb){if(this.ready){cb.call(this);}else{let time = setInterval(()=>{if(this.ready){clearInterval(time);cb.call(this);}},500)}}addjs(file, cb) {let elm=document.createElement("script");elm.src=file,elm.onload=()=>cb(),document.body.appendChild(elm);}ELM() {let game = document.querySelector(this.elm),elm;if (!game) {elm = document.createElement('div');document.body.appendChild(elm);elm.style.cssText=`width: 100%;height:100%;position:absolute;left: 0px;top: 0px;right:0px;z-index: 11;`;elm.innerHTML = `<div  id="${this.elm.replace('#','')}" ></div>`;}return document.querySelector(this.elm);}async downEJS() {let EJS = await localforage.getItem('EJS');if (!EJS || EJS.version != this.version) {let response = await fetch(this.dir + 'EJS.7z'),elm = this.ELM();let havesize = 0,downsize = response.headers.get("Content-Length") || 1024;const reader = response.body.getReader();const stream=new ReadableStream({start(e){let a=()=>{reader.read().then((({done:t,value:l})=>{if(t)return e.close(),void(a=null);havesize+=l.length,elm.innerHTML="EJS.7z complete "+Math.floor(havesize/downsize*100)+"%speed "+Math.floor(l.length/1024)+"KB",e.enqueue(l),a()}))};a()}});;let FetchData = await (new Response(stream).arrayBuffer());let worker = new Worker(window.URL.createObjectURL(new Blob([`importScripts("${this.dir}extract7z.min.js");`], {'type': 'application/javascript'})));let Files = {version: this.version};worker.onmessage=a=>{a.data.data?Files[a.data.file]=a.data.data:1==a.data.t&&(localforage.setItem("EJS",Files).then(()=>this.ReadFile(Files)))};worker.postMessage(new Uint8Array(FetchData));} else {this.ReadFile(EJS);}}
};