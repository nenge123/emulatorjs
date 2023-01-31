/**所有函数 参数不能含有AJAX地址传递,html绑定中亦不能含有地址,这样增加了xss可能性 */
(function () {
    let T = this,
        StopDF = e => {
            e.preventDefault();
            e.stopPropagation();
        },
        MD5 = async s=> {
            if(typeof window.SparkMD5 =='undefined')await T.loadLibjs('spark-md5.min.js');
            return window.SparkMD5.hash(s);
        },
        getJson = post=>T.ajax({'url':location.href,post,'type':'json'}),
        HASH = T.$('meta[name="hash"]').content,
        ROOT = T.JSpath.split('/').slice(0,-3).join('/')+'/';
    /**所有函数 参数不能含有AJAX地址传递,html绑定中亦不能含有地址,这样增加了xss可能性 */
    Object.assign(
        T.action, {
            "TAG-APP-GFM":(elm,status)=>{
                if(T.attr(elm,'disable')) return;
                if(status=='connect'){
                        let href = T.attr(elm,'href');
                        if(!href){
                        T.docload(async e=>{
                            elm.innerHTML = `<div class="markdown-github">${await T.runaction('GetGFM',[elm.textContent])}</div>`;
                            elm.hidden = false;
                        });
                        }else{
                            if(/\.md$/.test(href)){
                                elm.setAttribute('disable',true);
                                T.FetchItem({
                                    url:href,
                                    type:'text',
                                    async success(text){
                                        elm.innerHTML = `<div class="markdown-github">${await T.runaction('GetGFM',[text])}</div>`;
                                    }
                                })
                            }
                        }
                }
            },
            "TAG-APP-IP":(elm,status)=>{
                if(status=='connect'){
                    T.docload(e=>{
                        //http://ip.zxinc.org/api.php?type=json&ip=240e:47d:1018:6813:403d:ab4e:237f:79ab
                        /*
                        let ip = T.attr(elm,'ip');
                        T.ajax({
                            'url':'http://ip.zxinc.org/api.php?type=json&ip='+ip,
                            'type':'json',
                            success:e=>{
                                console.log(e);
                                if(e.code==0){
                                    elm.innerHTML = e.data.location;
                                }
                            }
                        })
                        */
                        
                    });
                }
            },
            GetGFM(text){
                return T.FetchItem({
                    url:'https://api.github.com/markdown',
                    json:{text},
                    type:'text',
                });
            },
            clearNewPassword(){
                let elm = T.$('input[name="new-password"]');
                if(elm){
                    elm.classList.remove('active');
                    elm.value="";}
            },
            openForumTheadsEdit(btn){
                btn.hidden = true;
                let editThread = Nttr('.edit-thread'),tids = T.$$('[name="tid"]');
                if(editThread.ispost){
                    return editThread.nWindow.runaction('show');
                }
                if(tids.length){
                    T.I.toArr(tids,elm=>{
                        elm.parentNode.parentNode.classList.add('on-edit');
                        T.on(elm,'change',e=>{
                            let html="",tidlist=[];
                            T.I.toArr(tids,x=>{
                                if(x.checked==true){
                                    html+=`<li>${T.$(`li[tid="${x.value}"] .title`).textContent}</li>`;
                                    tidlist.push(x.value);
                                }
                            });
                            editThread.$('.list').innerHTML = html;
                            editThread.$('input[name="tids"]').value = tidlist.join(',');
                        });
                        T.on(elm.parentNode,'pointerdown',e=>{
                            let {pageX,pageY,clientY} = e,rect=editThread.rect,xwidth="",w=window.screen.width,h=window.screen.height;
                            if(h - rect.height - clientY - 150 >0){
                                pageY +=20;
                            }else{
                                pageY -=30+rect.height;
                            }
                            if(!editThread.xwidth)editThread.xwidth = rect.width;
                            if(w-editThread.xwidth-pageX<=50){
                                xwidth = 'width:'+(w - pageX-50)+'px;';
                            }
                            editThread.css = `left:${pageX+20}px;top:${pageY}px;${xwidth};`;
                        });
                    });
                    Nttr(editThread.$('select[name="action"]')).on('change',e=>{
                        let elm = e.target;
                        if(elm.value=='6'){
                            elm.classList.add('active');
                        }else{
                            elm.classList.remove('active');
                        }
                    });
                    Nttr(editThread.$('.close')).click(e=>editThread.css="");
                }

            },
            ajaxWindow(elm){
                let href = T.attr(elm,'href');
                let action = T.attr(elm,'action');
                let ajax = T.attr(elm,'ajax');
                elm.removeAttribute('ajax');
                if(href){
                    T.on(elm,T.I.mobile?'touchend':'click',e=>{
                        T.stopProp(e);
                        T.runaction('ajax_'+ajax,[elm]);
                        return false;
                    },false);
                }else if(action){
                    T.on(elm,'submit',e=>{
                        T.stopEvent(e);
                        T.runaction('ajax_'+ajax,[elm]);
                        return false;
                    });
                }
            },
            ajax_editThread(elm){
                let method = T.attr(elm,'method').toUpperCase();
                let action = T.attr(elm,'action');
                let post=T.I.formdata(elm),tids = post.get('tids'),html="";
                if(!elm.nWindow){
                    elm.nWindow = nWindow();
                    elm.nWindow.action['submit'] = function(e){
                        if(elm.ispost)return ;
                        elm.ispost = true;
                        T.ajax({
                            url:action,
                            get:method=='GET'?T.I.toObj(elm):undefined,
                            post:method=='POST'?elm:undefined,
                            type:'json',
                            success(e){
                                elm.ispost = false;
                                if(e){
                                    if(e.title){
                                        elm.nWindow.title(e.title)
                                    }
                                    if(e.html){
                                        elm.nWindow.body(e.html)
                                    }
                                    if(e.hidden){
                                        T.I.toArr(e.hidden,entry=>{
                                            elm.nWindow.hiddenPath(entry[0],entry[1]);
                                        });
                                    }
                                    if(e.success){
                                        setTimeout(()=>{
                                            if(e.href)location.href = e.href;
                                            else location.reload();
                                        },3000)
                                    }
                                }
                            },
                            loadstart(e){
                                elm.nWindow.body(`<p class="loading">&#61473;</p>`);
                            }
                        });
                    }
                }
                if(!elm.ispost){
                    if(!tids)return;
                    tids.split(',').forEach(v=>{
                        html  += '<li>'+T.$(`li[tid="${v}"] .title`).textContent+'</li>';
                    });
                    elm.nWindow.body(`<ul class="edit-post">${html}</ul>`)
                    let title = T.$('select[name="action"] option[value="'+post.get('action')+'"]',elm).textContent;
                    if(post.get('action')=='6'){
                        title+='<span class="i-arrow">&#61697;</span>'+T.$('select[name="forumid"] option[value="'+post.get('forumid')+'"]',elm).textContent;
                    }
                    elm.nWindow.title(title)
                    elm.nWindow.hiddenFooter();
                    elm.nWindow.footer(`<p class="end"><button type="button" data-naction="submit">${T.$('[type="submit"]',elm).textContent}</button></p>`);
                }
                elm.Nttr&&(elm.Nttr.css='');
                elm.nWindow.runaction('show');
                return ;
            },
            ajax_deleteThread(elm){
                if(!elm.nWindow){
                    elm.nWindow = nWindow();
                    elm.nWindow.action['submit'] = function(e){
                        if(elm.ispost)return ;
                        elm.ispost = true;
                        post = new FormData();
                        post.append('action',T.attr(elm,'data-post'));
                        post.append('hash',T.attr(elm,'data-hash'));
                        T.ajax({
                            url:location.href,
                            post,
                            type:'json',
                            success(e){
                                elm.ispost = false;
                                if(e){
                                    if(e.title){
                                        elm.nWindow.title(e.title)
                                    }
                                    if(e.html){
                                        elm.nWindow.body(e.html)
                                    }
                                    if(e.hidden){
                                        T.I.toArr(e.hidden,entry=>{
                                            elm.nWindow.hiddenPath(entry[0],entry[1]);
                                        });
                                    }
                                    if(e.success){
                                        setTimeout(()=>{
                                            if(e.href)location.href = e.href;
                                            else location.reload();
                                        },3000)
                                    }
                                }
                            },
                            error(){

                            },
                            loadstart(e){
                                elm.nWindow.body(`<p class="loading">&#61473;</p>`);
                            }
                        });
                    }
                }
                elm.nWindow.title(elm.textContent)
                elm.nWindow.body(T.getLang('are you delete?'))
                elm.nWindow.hiddenFooter();
                elm.nWindow.footer(`<p class="end"><button type="button" class="success" data-naction="submit">${T.getLang('submit')}</button></p>`);
                elm.nWindow.runaction('show');
            },
            ajax_getPostList(elm){
                let url = T.attr(elm,'href'),id = url.match(/thread-(\d+)-(\d+)/),post = new FormData(),page = parseInt(id[2]?id[2]:1),listprev=[],listnext=[],reHref= (v,page)=>v.replace(/thread-\d+-\d+/,'thread-'+id[1]+'-'+page);
                post.append('page',page);
                T.$('.reply-list').classList.add('active');
                //防止回复框在某楼层被覆盖
                let replybtn = T.$('.post-footer-action .quick-post-href');
                if(replybtn)replybtn.parentNode.insertBefore(T.$('.quick-post'),replybtn);
                T.$$('.pagination.only').forEach(
                    pp=>{
                        let prev =  T.$('.prev',pp),next=T.$('.next',pp);
                        if(prev)listprev.push(prev);
                        if(next)listnext.push(next);
                    }
                );
                T.ajax({
                    url,
                    post,
                    type:'json',
                    success(json,status,request){
                        if(page==1){
                            listprev.forEach(v=>{
                                v.hidden = true;
                            });
                            listnext.forEach(v=>{
                                v.hidden = false;
                                v.href = reHref(v.href,page+1);
                            });
                        }else{
                            listprev.forEach(v=>{
                                v.hidden = page==2?true:false;
                                v.href = reHref(v.href,page>1?page-1:1);
                            });
                            listnext.forEach(v=>{
                                v.hidden = false;
                                v.href = reHref(v.href,page+1);
                            });
                        }
                        if(json){
                            if(json.code==0||json.html!=""){
                                T.$('.reply-list').innerHTML = json.html;
                                T.runaction('BindEvent');
                                T.$('.reply-list').classList.remove('active');
                                return;
                            }
                        }
                        //如果无返回隐藏
                        T.$('.reply-list').classList.remove('active');
                        if(elm.classList.contains('next')){
                            listnext.forEach(v=>{
                                v.hidden = true;
                            });
                        }
                    },
                    error(e){
                        console.log(e);
                        T.$('.reply-list').classList.remove('active');
                    }
                })
            },
            async ajax_onLogin(elm){
                let post = T.I.post(elm),
                    msg=T.$('.msg-feedback'),
                    $I = str=>T.$(`input[name="${str}"]`),
                    $a = 'active',
                    check = str=>{
                        let obj = $I(str);
                        if(!obj) return false;
                        let data = post.get(str),c=obj.classList;
                        c[!data?'add':'remove']($a);
                        return c.contains($a);
                    }
                ;
                if(check('email')||check('password')||check('username')||check('new-password')){
                    return;
                }
                if($I('new-password')){
                    if(post.get('new-password') != post.get('password')){
                        T.$('input[name="new-password"]').classList.add('active');
                        T.$('input[name="new-password"]').value = "";
                        return;
                    }
                    post.set('new-password',await MD5(post.get('new-password')));
                }
                if($I('password'))post.set('password',await MD5(post.get('password')));
                elm.classList.add($a);
                T.ajax({
                    url:location.href,
                    post,
                    type:'json',
                    success(json){
                        if(json){
                            if(json.msg){
                                msg.innerHTML = json.msg;
                            }
                            if(json.href){
                                setTimeout(()=>{location.href = json.href},2000);
                            }else if(json.code==-1){
                                elm.classList.remove($a);
                                if(json.key){
                                    let obj = $I(json.key);
                                    if(obj)obj.classList.add($a)
                                    if(json.key=='password'){
                                        if($I('new-password'))$I('new-password').value="";
                                        else obj.value="";
                                    }else if(json.key=='code')obj.value="";
                                }
                            }
                        }
                    },
                    error(){
                        elm.classList.remove($a);
                    }
                })
            },
            hideBox(elm){
                let boxbody = T.$('.box-body',elm.parentNode);
                boxbody.hidden = !boxbody.hidden;
            },
            showPostInfo(elm,e){
                if(e.target != elm) return;
                let act = elm.parentNode.classList.contains('active');
                elm.parentNode.classList[act?'remove':'add']('active');
            },
            async qickPostBtn(elm,e){
                T.stopEvent(e);
                let postQuick = T.$('.quick-post'),pid=T.attr(elm,'xn-pid');
                T.$('input[name="pid"]',postQuick).value = pid;
                if(T.editor)T.editor.remove();
                let txt = T.$('.post-textarea').value.replace(/<blockquote>\s*<p>\s*.+?\.\.\.\s*<\/p>\s*<\/blockquote>/isg,'');
                if(pid&&T.$('.post-message-'+pid)){
                    let pidname = '.post-message-'+pid;
                    let text = T.HTMLToTxt(T.$(pidname+' .container-body ').innerHTML.replace(/<blockquote>.+<\/blockquote>/isg,'')).slice(0,50)+'...';
                    let poster = T.$(pidname+' .container-top .poster').innerHTML;
                    let floor = T.$(pidname+' .container-top .floor').textContent;
                    txt = `<blockquote><p><cite>${floor}</cite>${poster}</p><p>${text}</p></blockquote>${txt||'<p></p>'}`;
                }
                T.$('.post-textarea').value = txt;
                elm.parentNode.insertBefore(postQuick,elm);
                if(T.editor)await T.editor.install();
                postQuick.scrollIntoView();
            },
            BindEvent(){
                T.$$('[xn-action]').forEach(elm=>{
                    let act = T.attr(elm,'xn-action');
                    if(elm.tagName=="INPUT") T.on(elm,'change',e=>{T.runaction(act,[elm,e])});
                    else T.on(elm,T.I.mobile?'touchend':'click',e=>{T.runaction(act,[elm,e])});
                    elm.removeAttribute('xn-action');
                });
                T.$$('[ajax]').forEach(elm=>T.runaction('ajaxWindow',[elm]));
            },
            togglePrevActive(elm){
                elm.parentNode.classList.toggle('active');
            },
            toggleActive(elm){
                elm.parentNode.classList.toggle('active');
            },
            async imagesPost(imagedata,process){
                let post = T.I.post({'hash':HASH,'action':'images-post'});
                if(imagedata.length>1)T.I.toArr(imagedata,v=>post.append('image[]',v));
                else post.append('image',imagedata[0]);
                return await T.ajax({
                        url:ROOT+'?api.htm',
                        type:'json',
                        post,
                        upload:{
                            process(e){
                                console.log(e);
                                process&&process(1);
                            }
                        }
                });
            }
        }
    );
    /**所有函数 参数不能含有AJAX地址传递,html绑定中亦不能含有地址,这样增加了xss可能性 */
    T.uploadImage = async (blobInfo, progress)=>{
        console.log(await blobInfo.blob());
        return 'http://127.0.0.1/xiunobbs4/assets/images/avatar.png';
        //return {'location':};
    };
    T.upload_btn = (cb, value, meta) => {
        const input = T.$ce('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.multiple = true;
        input.addEventListener('change', async (e) => {
            let result = await  T.runaction('imagesPost',[e.target.files]);
            console.log(result);
            cb("");
            return;
            cb('http://127.0.0.1/xiunobbs4/assets/images/avatar.png', { title: file.name });
            input.remove();
        });
        input.click();
    };
    T.editor = new class{
        list = {
            'tinymce':{
                name:'tinymce',
                remove(){
                    return window.tinymce.remove();
                },
                async install(){
                    if(typeof tinymce == 'undefined'){
                        let url=T.JSpath+'tinymce/tinymce.min.js',js = await T.loadScript(url,{store:T.LibStore,key:'tinymce-6.3.1.js',type:'text'},true);
                        js = js.replace(/document\.currentScript\.src/g,'"'+url+'"');
                        js = js.replace(/loadScript\(\w+?\)\s*\{/g,'loadScript(url) {let name = url.replace(Nenge.JSpath+\'tinymce/\',\'\'); return Nenge.loadScript(url,{store:Nenge.LibStore,key:\'tinymce-6.3.1\/\'+name,type:\'text\'});')
                        await T.addJS(js);
                    }
                    let language,userLang = T.language.toUpperCase(),langmap = {
                        'ZH-CN':'zh-Hans',
                        'ZH-TW':'zh-Hant.js',
                        'EN-GB':'uk',
                        'EN-US':undefined,
                        'EN':undefined
                    };
                    
                    let toolbar = T.I.mobile ?'undo redo blocks image backcolor color bold italic  alignleft aligncenter ' +
                        'alignright alignjustify bullist numlist outdent indent removeformat':'undo redo | blocks | ' +
                        'image bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat|file';
                    language = langmap.hasOwnProperty(userLang)?langmap[userLang]:T.language.replace('-','_');
                    return tinymce.init({
                        selector: 'textarea.post-textarea',
                        height: 350,
                        language,
                        skin: 'tinymce-5',
                        plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'help','file'
                        ],
                        toolbar,
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                        images_upload_handler: T.uploadImage,
                        file_picker_types: 'image',
                        file_picker_callback:T.upload_btn,
                        image_list:async (success) => {
                            T.ajax({
                                'url':'?api.htm',
                                'type':'json',
                                'post':T.I.post({
                                    'action':'images-post-list',
                                    'hash':HASH
                                }),
                                success(json){
                                    if(json){
                                        let html = "",list=[{'title':T.getLang('unuse_attach_list'),'menu':[]}];
                                        T.I.toArr(json,entry=>{
                                            html+=`<li><p>${entry[0]}</p><p><button type="button">${T.getLang('insert')}</button></p></li>`;
                                            list[0]['menu'].push({
                                                'title':entry[0],
                                                'value':entry[1]['src'],
                                            });
                                        });
                                        T.$('.upload-attach').innerHTML = html;
                                        success(list);
                                    }
                                }
                            });
                        },
                        setup: (editor) => {
                            editor.ui.registry.addButton('imagelist', {
                                text: 'My Picture',
                                onAction: (_) => editor.insertContent(`&nbsp;<strong>It's my button!</strong>&nbsp;`)
                            });
                        }
                    });

                },
                save(){
                    T.editor.contenter.forEach(v=>v.save());
                }
            },
            'github-markdown':{
                //https://api.github.com/markdown
                //post  accept: application/json {text:""}
            }
        };
        base = 'tinymce';
        remove(){
            return this.list[this.base].remove();
        }
        async install(){
            this.contenter =  await this.list[this.base].install();
        }
        async save(){
            return await this.list[this.base].save();
        }
    };
    T.docload(async () => {
        let bodyclass = document.body.classList;
        if(bodyclass.contains('module-forum')){
        }
        T.runaction('BindEvent');
        T.customElement('app-ip');
        T.customElement('app-gfm');
        let posttextarea = T.$('textarea.post-textarea');
        if(posttextarea){
            T.editor.install();
        }
    });
    /**所有函数 参数不能含有AJAX地址传递,html绑定中亦不能含有地址,这样增加了xss可能性 */
}).call(Nenge);