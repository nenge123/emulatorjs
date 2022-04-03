# About
source by [www.emulatorjs.com](https://www.emulatorjs.com) version 0.4.70

# what's new in 0.4.70

-  gba:mgba version-6 support RTC.but new one can't using 'Fast Forward',if you set system 'mgba' will use old one to play 'gba'.
- snes:
- nes:

# Change
>2020/04/03
- fix FS err code
- add SaveState SaveSRM ...
>old
- Remove source indexDB/ajax-get Function
- Add NengeDBFS function SAVE/fetch file. make it to be fast!
- keep [www.emulatorjs.com] ads in code.should not harm others!
- add resize canvans UI,like the 'nds' game will better show.

#How to use

```html
    <script src="assets/js/NengeDBFS.js"></script>
    <app-emujs system='gb' language="zh" gameUrl='rooms/宝可梦 - 比卡超.7z' style="width: 100%;height:100vh !important;"></app-emujs>
```
>or

```html
    <script src="assets/js/NengeDBFS.js"></script>
    <div style="width: 100%;height:100%;position:absolute;left: 0px;top: 0px;right:0px;z-index: 11;" id="game" ></div>
    <script>NengeDBFS.READY(
        '#game',
        {
            gameurl:'rooms/宝可梦 - 比卡超.7z',
            system:'gb',
            language:'zh'
            /*
            Other parameter reference see http://www.emulatorjs.com/nes.html
            */
        });
        //when document ready full option
        new EJS(
            '#game',
            {
                gameurl:'rooms/宝可梦 - 比卡超.7z', //required
                system:'gb', //required
                //optional
                _system:true, // using old system cores
                language:'zh', // see NengeDBFS under
                gameId:'', //set Unique ID on Netplay
                biosurl:'', //set bios
                cheats:'',//set check code like  'aabbccdd xx\naabbccdd xx\n'
                gameparenturl:'',
                gamepatchurl:'', //add ips .. game patch
                SaveState:async function (state,img){
                    //this  = ejs
                    //state u8
                    //img u8
                    //game FileName this.fileName
                    //when user save
                },
                SaveSRM:async function (srm){
                    //srm/dsv is save u8
                    //this = ejs
                    //when user save
                },
                LoadState:async function (olddata){
                    ///olddata = {contents:u8,timestamp:Date}
                    // web user load game will check or down
                    //this  = ejs
                    let FileTime = olddata&&olddata.timestamp.valueOf();
                    return await this.DBFS.FectchItem(
                        url:'your server host?gamename='+this.systemt+'-'+this.fileName+'&time='+ FileTime,
                        upack:true //if this is zip
                    );
                },
                LoadSRM:async function (olddata){
                    ///olddata = {contents:u8,timestamp:Date}
                    // web user load game will check or down
                    //this  = ejs
                    let FileTime = olddata&&olddata.timestamp.valueOf();
                    //if(FileTime>xxx) return ;
                    return await this.DBFS.FectchItem(
                        url:'your server host?gamename='+this.systemt+'-'+this.fileName+'&time='+ FileTime,
                        upack:true //if this is zip
                    );
                }
            }
        );
    <script>
```

# LANGUAGE
```javascript
self.LANGUAGE = {
    'zh': {...}
}

```