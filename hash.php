<?php
function getRequest($api, $timeout = 20){
    $url_info = parse_url($api['url']);
    $ssl = $url_info['scheme'] == 'https' ? false : null;
    $curlObj = curl_init();
    $options = [
        CURLOPT_URL => $api['url'],
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_FOLLOWLOCATION => 1,
        CURLOPT_AUTOREFERER => 1,
        CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
        CURLOPT_TIMEOUT => $timeout,
        //CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_0,
        //请求头
        CURLOPT_HTTPHEADER => array(
            ':authority:'=>'www.emulatorjs.com',
            'Referer'         => 'https://www.emulatorjs.com/embed/game.html',
            'User-Agent'      => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko)',
            'X-Real-IP'       => long2ip(mt_rand(1884815360, 1884890111)),
            'Accept'          => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language' => 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
            'Connection'      => 'keep-alive',
            'Content-Type'    => 'application/x-www-form-urlencoded',
        ),
        //IP4
        CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
        CURLOPT_REFERER => isset($api['refer'])?$api['refer']:$url_info['host'], //伪造来路
        //CURLOPT_COOKIEFILE=>dirname(__FILE__).'/kugou.cookies.txt',
        //CURLOPT_COOKIEJAR=>dirname(__FILE__).'/kugou.cookies.txt',
        CURLOPT_POST=>isset($api['body'])?true:false,
        CURLOPT_POSTFIELDS => isset($api['body']) ?(is_array($api['body'])?http_build_query($api['body']):$api['body']):null,
        CURLOPT_SSL_VERIFYHOST => $ssl,
        CURLOPT_SSL_VERIFYPEER => $ssl,
        CURLOPT_COOKIE=>isset($api['cookies'])?$api['cookies']:null,
    ];
    //print_r($options);exit;
    curl_setopt_array($curlObj, $options);
    curl_setopt($curlObj,CURLOPT_REFERER,'https://www.emulatorjs.com/embed/game.html');
    $returnData = curl_exec($curlObj);
    if (curl_errno($curlObj)) {
        //error message
        $returnData = curl_error($curlObj);
    }
    curl_close($curlObj);
    return $returnData;
}
$data =  getRequest(array(
    'url'=>'https://www.emulatorjs.com/embed/load.html?_t=16993375'
    ));
    $matchs = [];
    if(preg_match("/<script>(.+?)<\/script>/s",$data,$matchs)){
        echo 'new Promise(async re=>{let datas = await (new Promise(back=>{'.str_replace('eval(','back(',$matchs[1]).'}));let key = datas.match(/\'key\':\'(\w+)\'/);if(key&&key[1])re(key[1]);});';
    }
?>