
- [x] no longer fetch new version form emulatorjs.com,I love steamdeck

- how to work
    ```html
    <div style="position:fixed;left:0px;right:0px;top:0px;bottom:0px;">
        <div id="game"></div>
    </div>
    <script src="emulator.js" type="text/javascript"></script>
    <script type="text/javascript">
        var EJS_DEBUG_ = true;
        var EJS_EMU = new EJS('#game',{
            gameUrl:'kof97.zip',
            system:'fbneo', //all core system name in cores xxx.json
            gameId:'', //set Unique ID on Netplay
            biosUrl:'bios/arcade.7z', //opt set bios
            gameParentUrl:'',
            gamePatchUrl:'', //add ips .. game patch
        });
    </script>
    ```
- hash key fix
    - retroarch.js
    ```javascript
    function _gettimeofday(ptr) {
        var now = Date.now();
        HEAP32[ptr >> 2] = now / 1e3 | 0;
        HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0;
        return 0
    }
    //make the now = 1690674045574
    //c37f5e84f377fb892c851b364c55251132d57c66d2f3ea56d2af90bef14773f0
    //demo fix
    files['retroarch.js'] = I.decode(
        files['retroarch.js']
    ).replace(
        /function\s*_gettimeofday\(ptr\)\s*\{\n?\s*?var\s*now\s*=\s*/,
        'function _gettimeofday(ptr) {var now = 1690674045574;'
    );
    /* ... */
    Module.callMain(['test.gb','c37f5e84f377fb892c851b364c55251132d57c66d2f3ea56d2af90bef14773f0']);
    ```