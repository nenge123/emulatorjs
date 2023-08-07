- how to work
    - [index.html](index.html)
    - gb.html [gb.js](run/gb.js)
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
    var T= Nenge,I=T.I,F=T.F;
    let files = await T.FetchItem({
        url:'cores/gb-wasm.7z?'+T.time,
        unpack:!0
    });
    files['retroarch.js'] = I.decode(
        files['retroarch.js']
    ).replace(
        /function\s*_gettimeofday\(ptr\)\s*\{\n?\s*?var\s*now\s*=\s*/,
        'function _gettimeofday(ptr) {var now = 1690674045574;'
    ).replace(
        /function\s*callMain\(args\)\s*{/,
        'function callMain(args) {if(typeof args==="string"){args = ["-v",args,"c37f5e84f377fb892c851b364c55251132d57c66d2f3ea56d2af90bef14773f0"];}console.log(args);'
    );
    await T.addJS(files['retroarch.js']);
    /* ... */
    Module.callMain('test.gb');
    ```