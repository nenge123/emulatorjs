var T= Nenge,I=T.I,F=T.F;
var Module = {};
(async function(){

    let files = await T.FetchItem({
        url:'cores/gba-wasm.7z',
        unpack:!0
    });
    let games = await T.FetchItem({
        url:'run/gb-test.zip',
        unpack:!0
    });
    let bios = await T.FetchItem({
        url:'bios/gba.zip',
        unpack:!0
    });
    console.log(files,games);files['retroarch.js'] = I.decode(files['retroarch.js']).replace(/function\s*_gettimeofday\(ptr\)\s*\{\n?\s*?var\s*now\s*=\s*/,'function _gettimeofday(ptr) {var now = 1690674045574;').replace(/function\s*callMain\(args\)\s*{/,'function callMain(args) {if(typeof args==="string"){args = ["-v",args,"c37f5e84f377fb892c851b364c55251132d57c66d2f3ea56d2af90bef14773f0"];}console.log(args);');
    await T.addJS(files['retroarch.js']);
    //await T.addJS('./emu_gba.js?'+T.time);
    Module = {
        wasmBinary : files['retroarch.wasm'],
        canvas:T.$('canvas'),
        hash:'2b35cacf70aef5cbb3f38c0bb20e488cc8ad0c350400499a0',
        'TOTAL_MEMORY': 0x10000000,
        'noInitialRun': !0x0,
        'arguments': [],
        'preRun': [],
        'postRun': [],
        'totalDependencies': 0x0,
        onRuntimeInitialized(){
            let args = 'test.gb';
            if(Module.specialHTMLTargets){
                I[1].assign(Module.specialHTMLTargets,{
                    '#canvas':Module.canvas,
                    '#canvas-input':T.$('#ejs-input'),
                    '#canvas-mouse':T.$('#game')
                });
            }
            let FS = Module.FS;
            this.mkdir('/home/web_user/.config');
            this.mkdir('/home/web_user/retroarch/userdata/config/remaps/mGBA');
            this.mkdir('/etc/mGBA');
            this.mkdir('/shader');
            this.mkdir('/saves');
            FS.writeFile(args,games['test.gb']);
            I.toArr(bios,v=>Module.writeFile(v[0],v[1]));
            this.writeFile('/etc/retroarch-core-options.cfg', 'mgba_gb_model = "Game Boy Advance";\nmgba_use_bios = "ON";\nmgba_skip_bios = "OFF"\nmgba_gb_colors = "Grayscale"\nmgba_gb_colors_preset = "3"\nmgba_sgb_borders = "OFF"\nmgba_color_correction = "OFF"\nmgba_interframe_blending = "OFF"\nmgba_audio_low_pass_filter = "enabled"\nmgba_audio_low_pass_range = "60"\nmgba_allow_opposing_directions = "no"\nmgba_solar_sensor_level = "0"\nmgba_force_gbp = "OFF"\nmgba_idle_optimization = ""\nmgba_frameskip = "disabled"\nmgba_frameskip_threshold = ""\nmgba_frameskip_interval = "0"\n');
            this.writeFile('/etc/retroarch.cfg', 'savefile_directory = "/saves"' +
            '\nsystem_directory = "/"\n' +
            '\nsavestate_directory = "/saves"' +
            '\nvideo_vsync = true' +
            '\nscreenshot_directory = "/"' +
            '\nvideo_shader = "/shader/shader.glslp"' +
            '\nvideo_shader_enable = true' +
            '\nvideo_font_enable = false' +
            '\nvideo_scale = 1.0' +
            '\nvideo_gpu_screenshot = false' +
            '\ncamera_allow = "false"' +
            '\ncamera_driver = "null"' +
            '\ncamera_device = "null"'+
            '\nvideo_smooth = false'+
            '\n');
//savefile_directory = /data/saves/gba\nsystem_directory = /\nvideo_vsync = true\nscreenshot_directory = /\nvideo_shader = /shader/shader.glslp\nvideo_shader_enable = true\nvideo_font_enable = false\nvideo_scale = 1.0\nvideo_gpu_screenshot = false\nvideo_smooth = false\n
            T.once(T.$('canvas'),'click',async e=>{
                Module.callMain(args);
                console.log('click',args,Module.getCore());

            })
            console.log('ok');
        },
        print(e){
            console.log(e);
        },
        printErr(e){
            console.log(e);
        },
        inputValue(...a){
            return this['cwrap']('simulate_input', 'null', ['number', 'number', 'number'])(...a);
        },
        setVariable(...a){
            return this['cwrap']('set_variable', 'null', ['string', 'string']).apply(this,a);
        },
        getCore(){
            let data = this['cwrap']('get_core_options', 'string', [])();
            if(data){
                let list = data.split('\n');
                return Object.fromEntries(
                list.map(v=>{
                    let s = v.split(';');
                    return [s[0],s[1]&&s[1].trim().split('|').map(v=>v.trim())];
                }));
            }
        },
        readFile(name){
            return I.decode(this.FS.readFile(name))
        },
        mkdir(path){
            let FS = this.FS;
            if(!FS.analyzePath(path).exists){
                let p = path.split('/');
                let name = p.pop();
                let newpath = p.join('/');
                this.mkdir(newpath);
                FS.createPath(newpath, name, !0x0, !0x0);
            }
        },
        writeFile(path,data){
            let newpath = path.split('/').slice(0,-1).join('/');
            newpath&&this.mkdir(newpath);
            this.FS.writeFile(path,data);


        },
    };
    EmulatorJS_(Module);
})()