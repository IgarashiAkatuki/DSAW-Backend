(function(){var e={2812:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),r=n(3645),l=n.n(r),i=l()(o());i.push([e.id,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}body::-webkit-scrollbar{display:none}body{background-color:#f2f2f2}.wrapper{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}",""]),t["default"]=i},208:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),r=n(3645),l=n.n(r),i=l()(o());i.push([e.id,".main-wrapper{width:800px;min-width:200px}#input{resize:none;position:relative;display:block;width:100%;padding:10px 11px;border:none;outline:none;box-sizing:border-box;border-radius:5px;box-shadow:inset 0 0 0 1px #a3a3a3;margin-bottom:20px;font-family:Arial,Helvetica,sans-serif}#input:focus{box-shadow:inset 0 0 0 1px #409eff}#input::-webkit-scrollbar{display:none}.show-box{margin-bottom:30px;width:100%;height:auto;min-height:100px}.translation-add-wrapper{display:flex;justify-content:space-between}.translation-word-title{word-break:break-all;font-size:large;font-weight:700}.single-translation .el-card__body{padding:10px 0;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center}.translation-icon{margin-left:15px;white-space:nowrap;cursor:pointer;display:flex;align-items:center}.icon-wrapper{font-size:small;display:inline-flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;margin-right:10px}.icon-text{padding:0}.translation-add .el-card__body{padding:12px 8px}.el-button>span,.show-box .el-icon{pointer-events:none}.translation-content.el-card.is-hover-shadow{border:1px solid #c8c8c8}.translation-text{flex-basis:100%}@media screen and (max-width:960px){.main-wrapper{width:100%}}.ques-wrapper,.setu-wrapper{margin-top:30px}.setu-wrapper{min-height:500px;background-color:hsla(0,0%,100%,0)}.tag{border-radius:3px;color:#fff;padding:4px;background-color:#78bbffd1}.translation-text{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:3px}#add-btn{margin-right:20px}",""]),t["default"]=i},1481:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),r=n(3645),l=n.n(r),i=l()(o());i.push([e.id,"*{text-decoration:none}.md{max-width:800px}code{color:#fff;padding:3px;background-color:gray;border-radius:3px}a{word-break:break-all}",""]),t["default"]=i},5141:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),r=n(3645),l=n.n(r),i=l()(o());i.push([e.id,".ques-wrapper{display:flex;flex-direction:column;align-items:center;gap:30px;margin:50px auto 0;width:100%}.ques-form{width:100%}.form-btn div{display:flex;justify-content:center}",""]),t["default"]=i},3593:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),r=n(3645),l=n.n(r),i=l()(o());i.push([e.id,".dialog .el-dialog__body{padding-bottom:0;padding-top:20px}@media screen and (max-width:512px){.dialog{width:90%}}",""]),t["default"]=i},3032:function(e,t,n){"use strict";var a=n(9242),o=n(2748),r=n(3396),l=n(4870),i=n(1244);n(6844);const s=(0,r._)("h1",null,"DontSpeakAbsWords",-1),u=(0,r._)("h3",null,"黑话/拼音缩写翻译器",-1);function c(e,t){const n=i.os;return(0,r.wg)(),(0,r.iD)("div",null,[s,(0,r.Wm)(n),u])}var d=n(89);const p={},f=(0,d.Z)(p,[["render",c]]);var m=f,w=n(212),g=(n(5494),n(9740)),h=(n(8720),n(7086),n(4470)),_=(n(7539),n(3646)),x=(n(601),n(6374)),y=(n(4542),n(3614)),k=(n(3455),n(9776)),S=(n(6526),n(4902)),v=(n(4184),n(4143)),b=(n(5982),n(6666)),U=n(1565),T=n(8143),j=(n(9077),n(2019),n(5737),n(7139)),z=n(8697),W=(n(5745),n(4517),n(3983));n(6954),n(7658);const O={class:"ques-wrapper"},q=(0,r._)("h2",null,"问卷：知道几个填几个",-1);var C={__name:"Question",props:["words"],emits:["closeQues"],setup(e,{emit:t}){const n=e,a=(0,l.iH)("");let o=(0,l.qj)({content:[]});for(let r=0;r<n.words.length;r++)o.content.push({word:n.words[r].word,translation:""});const i=async e=>{if(!e)return;let t=o.content.filter((e=>""!=e.translation));0!=t.length?await e.validate(((e,n)=>{e?(s.value=!0,c(0,t)):U.z8.error("含有非法内容")})):U.z8.warning("内容为空")};let s=(0,l.iH)(!1),u=[0,0];function c(e,n){e==n.length?(T.T.alert("成功："+u[1]+"个，失败："+u[0]+"个","提交完成",{confirmButtonText:"OK"}),s.value=!1,t("closeQues")):$.ajax({url:"/api/submitTranslationsToTemp",type:"POST",timeout:3e3,data:{word:n[e].word,translation:n[e].translation},dataType:"JSON",success:function(t){0==t.code?(u[1]++,c(e+1,n)):(u[0]++,c(e+1,n))},error:function(t){u[0]++,c(e+1,n)}})}return(t,n)=>{const u=W.EZ,c=z.nH,d=y.mi,p=z.ly,f=w.t;return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",O,[q,(0,r.Wm)(p,{ref_key:"wordsForm",ref:a,model:(0,l.SU)(o),"label-position":"top",class:"ques-form",style:{"max-width":"800px"}},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.words,((e,t)=>((0,r.wg)(),(0,r.j4)(c,{key:t,label:`${t+1}. ${e.word}`,prop:"content."+t+".translation",rules:[{pattern:/\S+/,message:"内容不能为空",trigger:["change","blur"]}]},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:(0,l.SU)(o).content[t].translation,"onUpdate:modelValue":e=>(0,l.SU)(o).content[t].translation=e,size:"large",maxlength:"100",placeholder:"请输入释义"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label","prop"])))),128)),(0,r.Wm)(c,{size:"large",class:"form-btn"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{type:"danger",onClick:n[0]||(n[0]=e=>a.value.resetFields())},{default:(0,r.w5)((()=>[(0,r.Uk)("清空")])),_:1}),(0,r.Wm)(d,{type:"primary",onClick:n[1]||(n[1]=e=>i(a.value))},{default:(0,r.w5)((()=>[(0,r.Uk)("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),[[f,(0,l.SU)(s)]])}}};n(1759);const M=C;var P=M,D=n(5036);n(2344);const N=(0,r._)("div",{class:"image-slot"},[(0,r._)("h3",null,"加载中...")],-1),V=(0,r._)("div",{class:"image-slot"},[(0,r._)("h3",null,"加载失败，可能你运气不好")],-1),A=(0,r._)("h2",null,"涩图",-1);function H(e,t,n,a,o,l){const i=D.F8;return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i,{style:{width:"100%"},src:n.url,fit:e.fit},{placeholder:(0,r.w5)((()=>[N])),error:(0,r.w5)((()=>[V])),_:1},8,["src","fit"]),A],64)}var F={props:["url"]};const L=(0,d.Z)(F,[["render",H]]);var J=L,B=n(7489),Q=(n(5663),{__name:"WordDialog",setup(e,{expose:t}){let n=(0,l.iH)(null),a=(0,l.qj)({word:"",translation:""}),o=(0,l.iH)(!1);const i=()=>{o.value=!0};t({showDialog:i});const s=async e=>{e&&await e.validate(((e,t)=>{if(e){let e=a.word.trim();o.value=!1,$.ajax({url:"/api/addWords",type:"POST",timeout:3e3,data:{word:e},dataType:"JSON",success:function(t){console.log(t),0==t.code?(U.z8.success("词条添加成功！"),""!=a.translation?$.ajax({url:"/api/submitTranslationsToTemp",type:"POST",timeout:3e3,data:{word:e,translation:a.translation.trim()},dataType:"JSON",success:function(e){n.value.resetFields(),0==e.code?U.z8.success("释义提交成功！"):U.z8.error("释义提交错误！")},error:function(){n.value.resetFields(),U.z8.error("释义提交失败！")}}):n.value.resetFields()):(n.value.resetFields(),U.z8.error("词条添加失败！"))},error:function(e){console.log(e),n.value.resetFields(),U.z8.error("词条添加失败！")}})}else U.z8.warning("内容为空")}))};return(e,t)=>{const i=W.EZ,u=z.nH,c=z.ly,d=y.mi,p=B.d0;return(0,r.wg)(),(0,r.j4)(p,{class:"dialog",modelValue:(0,l.SU)(o),"onUpdate:modelValue":t[4]||(t[4]=e=>(0,l.dq)(o)?o.value=e:o=e),"lock-scroll":"true",title:"提交词条",width:"450px","align-center":"",center:"","close-delay":"100"},{footer:(0,r.w5)((()=>[(0,r.Wm)(d,{size:"large",onClick:t[2]||(t[2]=e=>(0,l.dq)(o)?o.value=!1:o=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)("取消")])),_:1}),(0,r.Wm)(d,{size:"large",type:"primary",onClick:t[3]||(t[3]=e=>s((0,l.SU)(n)))},{default:(0,r.w5)((()=>[(0,r.Uk)("确认")])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(c,{"label-position":"top",size:"large",model:(0,l.SU)(a),ref_key:"singleWordForm",ref:n},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"词条（50字符以内）",prop:"word",rules:[{required:!0,pattern:/\S+/,message:"内容不能为空",trigger:["change","blur"]}]},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{modelValue:(0,l.SU)(a).word,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,l.SU)(a).word=e),maxlength:"50",clearable:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(u,{label:"释义（非必填，100字符以内）",prop:"translation",rules:[{pattern:/\S+/,message:"内容不能为空",trigger:["change","blur"]}]},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{modelValue:(0,l.SU)(a).translation,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,l.SU)(a).translation=e),maxlength:"100",clearable:""},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])}}});n(1662);const Z=Q;var E=Z;function I(e){return(0,l.ZM)(((t,n)=>{let a;return{get(){return t(),e},set(t){clearTimeout(a),a=setTimeout((()=>{e=t,n()}),500)}}}))}function G(e){T.T.prompt("请输入释义（不超过100个字符）：","提交",{confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^\S{1,100}$/,inputErrorMessage:"内容为空或字数超过100"}).then((({value:t})=>{$.ajax({url:"/api/queryWord",type:"POST",timeout:1e3,data:{word:e},dataType:"JSON",success:function(n){0==n.code?$.ajax({url:"/api/submitTranslationsToTemp",type:"POST",timeout:3e3,data:{word:e,translation:t.trim()},dataType:"JSON",success:function(e){console.log(e),0==e.code?U.z8.success("提交成功！"):U.z8.error("提交错误！")},error:function(){U.z8.error("提交失败！")}}):$.ajax({url:"/api/addWords",type:"POST",timeout:3e3,data:{word:e},dataType:"JSON",success:function(n){0==n.code&&$.ajax({url:"/api/submitTranslationsToTemp",type:"POST",timeout:3e3,data:{word:e,translation:t.trim()},dataType:"JSON",success:function(e){console.log(e),0==e.code?U.z8.success("提交成功！"):U.z8.error("提交错误！")},error:function(){U.z8.error("提交失败！")}})},error:function(){U.z8.error("添加词条失败！")}})},error:function(){U.z8.error("查询时发生错误！")}})})).catch((()=>{(0,U.z8)({type:"info",message:"取消"})}))}function K(e,t){$.ajax({url:"/api/addLikesToPersistence",type:"POST",timeout:3e3,data:{word:e,translation:t},dataType:"JSON",success:function(e){0==e.code?U.z8.success("成功！"):U.z8.error("失败！")},error:function(){U.z8.error("失败！")}})}function Y(e,t,n){$.ajax({url:"/api/addErratum",type:"POST",timeout:1e3,data:{word:e,translation:t,reason:n},dataType:"JSON",success:function(e){0==e.code?U.z8.success("提交成功！"):U.z8.error("提交失败！")},error:function(){U.z8.error("提交失败！")}})}function R(e,t){$.ajax({url:"/api/addTranslationsSource",type:"POST",timeout:3e3,data:{translation:e,source:t},dataType:"JSON",success:function(e){0==e.code?U.z8.success("提交成功！"):U.z8.error("提交失败！")},error:function(){U.z8.error("提交失败！")}})}const X={key:0,class:"show-box"},ee={class:"translation-add-wrapper"},te={class:"translation-word-title"},ne={class:"translation-text"},ae={key:0,class:"tag"},oe={key:0,class:"icon-wrapper"},re={class:"add-like-icon"},le={class:"icon-text"},ie={key:1,class:"icon-wrapper"},se={class:"sub-error-icon"},ue=(0,r._)("span",{class:"icon-text"},"纠错",-1),ce={class:"ques-wrapper",style:{"min-height":"200px"}},de={class:"setu-wrapper"};var pe={__name:"Main",setup(e){$((function(){(0,b.bM)({title:"提示",message:"成功提交问卷可获得一张涩图",duration:3e3,showClose:!0})}));let t=I(""),n=(0,l.iH)(!0),i=(0,l.iH)(!1),s=(0,l.qj)({words:{},data:[]});function u(e,t){return e.likes>t.likes?-1:e.likes<t.likes?1:0}(0,r.YP)(t,(e=>{s.data.length=0,null==e.match(/\S/)?i.value=!1:(i.value=!0,n.value=!0,$.ajax({url:"/api/getTranslationsFromPersistence",type:"POST",timeout:3e3,data:{word:e},dataType:"JSON",success:function(e){if(console.log(e),0!=e.code)s.data=[{translation:"暂无数据，"}],n.value=!1;else{let t=e.data.map((e=>e.translation));$.ajax({url:"/api/isLiked",type:"POST",timeout:3e3,traditional:!0,data:{translations:t},dataType:"JSON",success:function(t){t.forEach(((t,n)=>{e.data[n].liked=t})),s.data=e.data.sort(u),n.value=!1},error:function(){s.data=[{translation:"请求失败"}],n.value=!1}})}},error:function(){s.data=[{translation:"请求失败"}],n.value=!1}}))}),{immediate:!0});const c=(0,l.iH)(null),d=()=>{c.value.showDialog()};let p=(0,l.qj)({isShowGetBtn:!1,isShowWrapper:!1,isLoading:!0,isShow:!1,url:""}),f=(0,l.qj)({clickCase:z,leftTime:60,text:"获取问卷",wordsNum:5,canClick:!0,disabled:!1}),m=(0,l.qj)({isShowWrapper:!1,isLoading:!1,isShow:!1});function z(){m.isShowWrapper=!0,m.isLoading=!0,$.ajax({url:"/api/getRandomQuestionnaire",type:"POST",timeout:3e3,data:{limit:f.wordsNum},dataType:"JSON",success:function(e){if(console.log(e),0!=e.code){f.leftTime=parseInt(e.message.match(/\d+(?=秒)/)),f.clickCase=W;var t=setInterval((()=>{f.leftTime-=1}),1e3);setTimeout((()=>{f.clickCase=z,clearInterval(t),f.leftTime=60}),1e3*f.leftTime),U.z8.warning("还有"+f.leftTime+"秒可以再次获取问卷"),m.isLoading=!1,m.isShowWrapper=!1}else{f.clickCase=W;t=setInterval((()=>{f.leftTime-=1}),1e3);setTimeout((()=>{f.clickCase=z,clearInterval(t),f.leftTime=60}),6e4),s.words=e.data,m.isShow=!0,f.canClick=!1,m.isLoading=!1,f.text="成功！！"}},error:function(e){U.z8.error("发生错误，"+e),m.isShowWrapper=!1,m.isLoading=!1}})}function W(){U.z8.warning("还有"+f.leftTime+"秒可以再次获取问卷")}function O(){m.isShow=!1,m.isShowWrapper=!1,f.text="获取问卷",f.canClick=!0,p.isShowGetBtn=!0}function q(){p.isShowGetBtn=!1,p.isLoading=!0,p.isShowWrapper=!0,$.ajax({url:"https://moe.jitsu.top/api/?sort=setu&type=json",type:"POST",timeout:3600,success:function(e){p.url=e.pics[0],p.isShow=!0,p.isLoading=!1},error:function(){$.ajax({url:"https://moe.jitsu.top/api/?sort=setu&type=json",type:"POST",timeout:3600,success:function(e){p.url=e.pics[0],p.isShow=!0,p.isLoading=!1},error:function(e){console.log(e),p.url="https://tvax4.sinaimg.cn/large/ec43126fgy1gx5p436yu5j21041hg7wi.jpg",p.isShow=!0,p.isLoading=!1}})}})}function C(e){let n=e.target.dataset.index;K(t.value,s.data[n].translation),0==s.data[n].liked?(s.data[n].liked=1,s.data[n].likes+=1):(s.data[n].liked=0,s.data[n].likes-=1)}function M(e){let n=e.target.dataset.index,a=s.data[n].translation;T.T.prompt("错误原因（100字以内）：","纠错",{confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^\S{1,100}$/,inputErrorMessage:"内容为空或字数超过100"}).then((({value:e})=>{Y(t.value,a,e.trim())})).catch((()=>{(0,U.z8)({type:"info",message:"取消"})}))}function D(e){let t=e.target.dataset.index,n=s.data[t].translation;T.T.prompt("请输入Tag（单个，30字以内）","Tag",{confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^\S{1,30}$/,inputErrorMessage:"内容为空或字数超过30"}).then((({value:e})=>{R(n,e.trim())})).catch((()=>{(0,U.z8)({type:"info",message:"取消"})}))}return(e,u)=>{const b=v.Kf,U=S.Dv,T=k.dq,z=y.mi,W=x.Q2,$=_.BM,N=h.YK,V=g.b2,A=g.G4,H=w.t;return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",null,[(0,r.Wm)(A,{class:"main-wrapper-inner"},{default:(0,r.w5)((()=>[(0,r.Wm)(V,null,{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("textarea",{name:"input",id:"input","onUpdate:modelValue":u[0]||(u[0]=e=>(0,l.dq)(t)?t.value=e:t=e),rows:"10",maxlength:"100",placeholder:"在这里输入要翻译的词（包括但不限于拼音缩写/中文黑话/emoji，100字符以内）",autofocus:""},null,512),[[a.nr,(0,l.SU)(t)]]),(0,l.SU)(i)?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",X,[(0,r.Wm)(W,{fill:"fill",direction:"vertical",style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(T,{class:"translation-add"},{default:(0,r.w5)((()=>[(0,r.Wm)(U,{span:24},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{shadow:"never"},{default:(0,r.w5)((()=>[(0,r._)("div",ee,[(0,r._)("span",te,(0,j.zw)((0,l.SU)(t)),1),(0,r._)("span",{class:"translation-icon",onClick:u[1]||(u[1]=e=>(0,l.SU)(G)((0,l.SU)(t)))},"添加➕")])])),_:1})])),_:1})])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,l.SU)(s).data,((e,n)=>((0,r.wg)(),(0,r.j4)(T,{key:n,gutter:3,class:"single-translation"},{default:(0,r.w5)((()=>[(0,r.Wm)(U,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"translation-content",shadow:"hover"},{default:(0,r.w5)((()=>[(0,r._)("span",ne,[(0,r._)("span",null,(0,j.zw)(e.translation),1),null!=e.source?((0,r.wg)(),(0,r.iD)("code",ae,(0,j.zw)(e.source),1)):(0,r.kq)("",!0),null===e.source?((0,r.wg)(),(0,r.j4)(z,{key:1,"data-index":n,onClick:D,size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)("添加tag")])),_:2},1032,["data-index"])):(0,r.kq)("",!0),(0,r.wy)((0,r._)("a",{href:"#",onClick:u[2]||(u[2]=(0,a.iM)((e=>(0,l.SU)(G)((0,l.SU)(t))),["prevent"]))},"点此添加 ",512),[[a.F8,"暂无数据，"==e.translation]])]),e.word?((0,r.wg)(),(0,r.iD)("span",oe,[(0,r._)("span",re,[(0,r.Wm)(z,{onClick:C,"data-index":n,type:0==e.liked?"none":"success",icon:(0,l.SU)(o.Star),circle:""},null,8,["data-index","type","icon"])]),(0,r._)("span",le,(0,j.zw)(e.likes),1)])):(0,r.kq)("",!0),e.word?((0,r.wg)(),(0,r.iD)("span",ie,[(0,r._)("span",se,[(0,r.Wm)(z,{onClick:M,"data-index":n,type:"danger",icon:(0,l.SU)(o.Delete),circle:""},null,8,["data-index","icon"])]),ue])):(0,r.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),[[H,(0,l.SU)(n)]]):(0,r.kq)("",!0),(0,r.Wm)(z,{id:"add-btn",type:"success",size:"large",onClick:d},{default:(0,r.w5)((()=>[(0,r.Uk)("添加词条")])),_:1}),(0,r.Wm)(N,{"split-button":"",type:"primary",onClick:u[4]||(u[4]=e=>(0,l.SU)(f).canClick&&(0,l.SU)(f).clickCase()),size:"large",disabled:(0,l.SU)(f).disabled,trigger:"click","hide-on-click":!1},{dropdown:(0,r.w5)((()=>[(0,r.Wm)(b,{style:{width:"360px"}},{default:(0,r.w5)((()=>[(0,r.Wm)($,{min:1,max:20,modelValue:(0,l.SU)(f).wordsNum,"onUpdate:modelValue":u[3]||(u[3]=e=>(0,l.SU)(f).wordsNum=e),"show-input":""},null,8,["modelValue"])])),_:1})])),default:(0,r.w5)((()=>[(0,r.Uk)((0,j.zw)((0,l.SU)(f).text)+" ",1)])),_:1},8,["disabled"]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",ce,[(0,l.SU)(m).isShow?((0,r.wg)(),(0,r.j4)((0,l.SU)(P),{key:0,words:(0,l.SU)(s).words,onCloseQues:O},null,8,["words"])):(0,r.kq)("",!0)])),[[a.F8,(0,l.SU)(m).isShowWrapper],[H,(0,l.SU)(m).isLoading]]),(0,l.SU)(p).isShowGetBtn?((0,r.wg)(),(0,r.j4)(z,{key:1,onClick:q,size:"large",type:"warning",style:{display:"block",margin:"30px auto"}},{default:(0,r.w5)((()=>[(0,r.Uk)("获取图片")])),_:1})):(0,r.kq)("",!0),(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",de,[(0,l.SU)(p).isShow?((0,r.wg)(),(0,r.j4)((0,l.SU)(J),{key:0,url:(0,l.SU)(p).url},null,8,["url"])):(0,r.kq)("",!0)])),[[a.F8,(0,l.SU)(p).isShowWrapper],[H,(0,l.SU)(p).isLoading]])])),_:1})])),_:1})]),(0,r.Wm)((0,l.SU)(E),{ref_key:"wordDialog",ref:c},null,512)],64)}}};n(9113);const fe=pe;var me=fe;const we=(0,r._)("h1",null,"DontSpeakAbsWords",-1),ge=(0,r._)("p",null,[(0,r.Uk)("给我好好说话(恼 "),(0,r._)("strong",null,"最后更新于2022.11.16")],-1),he=(0,r._)("h2",null,"Q&A",-1),_e=(0,r._)("p",null,[(0,r._)("strong",null,"Q：为什么要做这个东西？")],-1),xe=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)('A：一开始是受到了"能不能好好说话"的启发，想做一个包括但不限于翻译'),(0,r._)("code",null,"拼音缩写"),(0,r.Uk)("，"),(0,r._)("code",null,"emoji"),(0,r.Uk)("，"),(0,r._)("code",null,"中文黑话"),(0,r.Uk)("的网站，于是就有了现在这个Demo")])],-1),ye=(0,r._)("hr",null,null,-1),ke=(0,r._)("p",null,[(0,r._)("strong",null,"Q：我要怎么使用？")],-1),Se=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)("A：如果你想给"),(0,r._)("code",null,"xswl"),(0,r.Uk)("贡献翻译，你可以点击"),(0,r._)("code",null,"添加词条"),(0,r.Uk)("，提交该词语及该词语的翻译")])],-1),ve=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)("如果你想查找"),(0,r._)("code",null,"xswl"),(0,r.Uk)("的翻译，你可以在输入框里输入该词，获取翻译")])],-1),be=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)("如果你想给"),(0,r._)("code",null,"yf"),(0,r.Uk)("词条下的"),(0,r._)("code",null,"檐枫"),(0,r.Uk)("翻译贡献出处，你可以点击"),(0,r._)("code",null,"添加出处"),(0,r.Uk)("，来提交此翻译的出处如"),(0,r._)("code",null,"北京邮电大学檐枫动漫社")])],-1),Ue=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)("你也可以点击"),(0,r._)("code",null,"获得问卷"),(0,r.Uk)("，来获得一份问卷，填入你对这些词的解释，来帮助其他人w")])],-1),Te=(0,r._)("hr",null,null,-1),je=(0,r._)("p",null,[(0,r._)("strong",null,"Q：收集到的数据会用来干什么呢？")],-1),ze=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)("A：收集到的所有数据都将被定期"),(0,r._)("code",null,"开源"),(0,r.Uk)("，并且我们计划用收集到的数据训练能翻译"),(0,r._)("code",null,"抽象话"),(0,r.Uk)("的AI")])],-1),We=(0,r._)("hr",null,null,-1),Oe=(0,r._)("p",null,[(0,r._)("strong",null,"Q：我发现了bug，请问怎么提交？")],-1),qe=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)("A：可以在GitHub的issue提交或者发送到邮箱"),(0,r._)("a",{href:"mailto:midsummra@gmail.com"},"midsummra@gmail.com")])],-1),Ce=(0,r._)("hr",null,null,-1),Me=(0,r._)("p",null,[(0,r._)("strong",null,"请用抽象话填满我qwq"),(0,r._)("br"),(0,r._)("strong",null,[(0,r.Uk)(" Github："),(0,r._)("a",{href:"https://github.com/IgarashiAkatuki/DontSpeakAbsWords",target:"_blank"},"https://github.com/IgarashiAkatuki/DontSpeakAbsWords")])],-1);function Pe(e,t,n,a,o,l){const i=v.Kf;return(0,r.wg)(),(0,r.j4)(i,{shadow:"never","body-style":"text-align:left",class:"md"},{default:(0,r.w5)((()=>[we,ge,he,_e,xe,ye,ke,Se,ve,be,Ue,Te,je,ze,We,Oe,qe,Ce,Me])),_:1})}var De={};n(268);const $e=(0,d.Z)(De,[["render",Pe]]);var Ne=$e;const Ve={class:"wrapper"},Ae={class:"main-wrapper"};var He={__name:"App",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("div",Ve,[(0,r._)("div",Ae,[(0,r.Wm)((0,l.SU)(m)),(0,r.Wm)((0,l.SU)(me)),(0,r.Wm)((0,l.SU)(Ne))])]))}};n(6142);const Fe=He;var Le=Fe;const Je=(0,a.ri)(Le);for(const[$,Be]of Object.entries(o))Je.component($,Be);Je.mount("#app")},6142:function(e,t,n){var a=n(2812);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=n(7037).Z;o("fc648b60",a,!0,{sourceMap:!1,shadowMode:!1})},9113:function(e,t,n){var a=n(208);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=n(7037).Z;o("41563f18",a,!0,{sourceMap:!1,shadowMode:!1})},268:function(e,t,n){var a=n(1481);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=n(7037).Z;o("61ab3a96",a,!0,{sourceMap:!1,shadowMode:!1})},1759:function(e,t,n){var a=n(5141);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=n(7037).Z;o("24acca04",a,!0,{sourceMap:!1,shadowMode:!1})},1662:function(e,t,n){var a=n(3593);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=n(7037).Z;o("b4b68dce",a,!0,{sourceMap:!1,shadowMode:!1})}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,s=0;s<a.length;s++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,l=a[0],i=a[1],s=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var c=s(n)}for(t&&t(a);u<l.length;u++)r=l[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3032)}));a=n.O(a)})();
//# sourceMappingURL=app.657793da.js.map