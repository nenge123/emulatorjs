

## HOW to open GBA RTC ##
- 使用【Vbanext】核心添加目标游戏,返回添加绿宝石或红宝石，通过游戏里面的缓存管理打开目标游戏！
- Use the [Vbanext] core to add the target game, return to add emeralds or Pokemon Ruby, and open the target game through the cache management in the game!

## 基本用法 Basic usage ##
- 直接使用
```html
<script src="emulator.min.js"></script>
<script>
    new EJS('#game',{
        'gameUrl':'Pokemon Ruby Version.gba',
        'system':'vbanext'
    });
<script>
```
- 使用启动器 Using loader read EJS.7z
```html
<!-- localhost add <script src="emulator.min.js"></script> -->
<script src="NengeApp.min.js"></script>
<script>
    NengeApp.CALL(function ({
        delete this.confing.translate; //close Chinese language
        this.SET({
            'stopMusic':true, //close sound,run fast batter
            'runpage':'index.html', // set cache run other game index.html?core=vbanext&game=Pokemon Ruby Version.gba
            'ad_page':'ad.html', //set ad
        });
        this.RUN();
        //this.RUN(gameUrl,system,file u8arrayBuffer);
    }));
<script>
```
### config ###
- OptionSet 设置自定义菜单
```javascript
'OptionSet':{
    'screenRecord':{
        'label':'Start Screen Recording',
        'options': {},
    }
```
- OptionCall 设置自定义菜单回调函数
```javascript
'OptionCall':{
    'screenRecord':function(ejs_data,event){
        this // === emu = new EJS..
        ejs_data.Module;
        ejs_data.FS;
        if(event)event.target //elm
    }
}
```
- SETKEY 设置按钮按键
```javascript
SETKEY:(GamepadMap,G,GamepadMapBtn)=>{
    //console.log(GamepadMap,G,GamepadMapBtn);
    //GamepadMap keystate 键值对照 GamepadMap[0] is B
    //G is on show button 显示按钮 G.B show B key
    //GamepadMapBtn customize key func 自定义按键函数
    //GamepadMapBtn
    //set B to xx event 设置B按钮
    //G.B = 'B::xx name';GamepadMap['xx'] = G.B;
    //GamepadMapBtn['xx'] = function(elm,ejs_data,event){
        //click B run this
        //this == ejs_this(new EJS)
    //
}
```

## Function ##
- EJS.STATE_SAVE,EJS.STATE_LOAD
```javascript
let emu = new EJS(...);
//save state
EJS.STATE_SAVE(emu);
//download state
EJS.STATE_SAVE(emu,true);
//load state
EJS.STATE_LOAD(emu);
//load state by file
EJS.STATE_LOAD(emu,u8ArrayBuff);

```
- EJS.DB_SELECT
```javascript
let roms = await EJS.DB_SELECT('roms');
EJS.DB_SELECT('roms').then(EJS.DB_SELECT(roms=>{
    roms.getAll(result=>{
        console.log(result); //ejs-roms roms info
    })
})

```
- EJS.FETCH_FILE fetch file/save file/load file
```javascript
EJS.FETCH_FILE({
    url:'v.json',//important
    type:'json',
    success:json=>{
        console.log(json);
    },
    error:e=>{
        console.log(`Network Error`);
    },
    process:e=>{
        console.log(`file is download:${e}`);
    }
});
EJS.FETCH_FILE({
    url:'Pokemon Ruby Version.gba',//important
    key:'gba-Pokemon Ruby Version.gba', //important
    dbname:'romsdata',//important
    filename:'Pokemon Ruby Version.gba',
    success:buf=>{
        console.log(buf);
        new EJS('#game',{
            gameUrl:'Pokemon Ruby Version.gba',
            system:'gba',
            gameBuf:buf
        })
    },
    error:e=>{
        console.log(`Network Error`);
    },
    process:e=>{
        console.log(`file is download:${e}`);
    }
});
EJS.FETCH_FILE({
    url:'gba-wasm.data',//important
    key:'gba-wasm.data',//important
    dbname:'system',//important
    version:3,//options
    success:buf=>{
        console.log(buf);
    },
    error:e=>{
        console.log(`Network Error`);
    },
    process:e=>{
        console.log(`file is download:${e}`);
    }
});
```


