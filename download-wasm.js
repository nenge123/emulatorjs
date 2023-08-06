let list = {
    'psx': 'psx',
    'nds': 'nds',
    'nes': 'nes',
    'mesen': 'mesen',
}
let list2 = {
    'snes': 'snes',
    'snes2002': 'snes2002',
    'snes2005': 'snes2005',
    'snes2010': 'snes2010',
};
let list3 ={ 
    'gb': 'gb',
    'gbc': 'gb',
    'gba': 'gba',
    'vbanext': 'vbanext',
};
let list4 ={
    'vb': 'vb',
    'n64': 'n64',
    '3do': '3do',
    'segaMS': 'sega',
    'segaGG': 'sega',
    'segaMD': 'sega',
}
let list5 = {
    'segaCD': 'segacd',
    'sega32x': '32x',
    'segaSaturn': 'saturn',
    'ngp': 'ngp',
};
let list6 = {
    'pce': 'pce',
    'pcfx': 'pcfx',
    'msx': 'bluemsx',
    'atari2600': 'a2600',
};
let list7 = {
    'atari7800': 'a7800',
    'lynx': 'lynx',
    'ws': 'ws',
    'arcade': 'arcade',
}
let list8 ={
    //'fba0.2.97.29': 'fba0.2.97.29',
    'fbneo': 'fbneo',
    'jaguar': 'jaguar',
    'mame2003': 'mame2003',
    'fbneo': 'fbneo',
};
let list9 = {
    'mame0.193': 'mame',
    'mame0.243': 'mame0.243',

};
let list10 = {
    'atari5200':'a5200',
    };
    let FetchItem = (name) => T.FetchItem({
        url: 'https://www.emulatorjs.com/cores/' + name + '-wasm.data?'+T.time,
        Filter(wasmU8) {
            wasmU8 = wasmU8['slice'](0xc);
            wasmU8['set']([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c, 0x0, 0x3], 0x0);
            return wasmU8;
        },
        success(data) {
            T.download(name + '-wasm.7z', data)
        }
    });
    let toDownload = async entry=>{
        let dname = entry[1];
        let keyname = entry[0];
        if(dname =='fba0.2.97.29')return ;
        await T.FetchItem({
            url: 'https://www.emulatorjs.com/api/v?name=' + keyname + '&_t=' + T.time,
            type: 'text',        
            success(data) {
                T.download(keyname + '.json', data)
            }
        });
        if(dname == 'sega'&&entry!='segaMD') return;
        if ('mame' == dname || 'mame0.193' == dname || 'mame0.243' == dname) {
            let len = 0;
            if ('mame0.193' == dname) dname = 'mame';
            if ('mame' == dname) {
                len = 7;
            }
            if ('mame0.243' == dname) {
                len = 8;
            }

            for (let i = 2; i < len; i++) {
                await FetchItem(dname + '-' + i);
            }
            return;

        }
        await FetchItem(dname);
    };
let result = [].concat(
    await I.Async(I.toArr(list).map(toDownload)),
    await I.Async(I.toArr(list2).map(toDownload)),
    await I.Async(I.toArr(list3).map(toDownload)),
    await I.Async(I.toArr(list4).map(toDownload)),
    await I.Async(I.toArr(list5).map(toDownload)),
    await I.Async(I.toArr(list6).map(toDownload)),
    await I.Async(I.toArr(list7).map(toDownload)),
    await I.Async(I.toArr(list8).map(toDownload)),
    await I.Async(I.toArr(list9).map(toDownload))
);
console.log(result);