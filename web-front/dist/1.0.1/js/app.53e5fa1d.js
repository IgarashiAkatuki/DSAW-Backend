(function(){var t={8668:function(t,n,e){"use strict";e.r(n);var a=e(8081),o=e.n(a),r=e(3645),i=e.n(r),l=i()(o());l.push([t.id,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}body::-webkit-scrollbar{display:none}.wrapper{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}",""]),n["default"]=l},5904:function(t,n,e){"use strict";e.r(n);var a=e(8081),o=e.n(a),r=e(3645),i=e.n(r),l=i()(o());l.push([t.id,".main-wrapper{width:800px;min-width:200px}#input{resize:none;position:relative;display:block;width:100%;padding:10px 11px;border:none;outline:none;box-sizing:border-box;border-radius:5px;box-shadow:inset 0 0 0 1px #a3a3a3;margin-bottom:20px;font-family:Arial,Helvetica,sans-serif}#input:focus{box-shadow:inset 0 0 0 1px #409eff}#input::-webkit-scrollbar{display:none}.show-box{margin-bottom:30px;width:100%;height:auto;min-height:100px}.translation-add-row{display:flex;justify-content:space-between}.translation-word-title{font-size:large;font-weight:700}.single-translation .el-card__body{height:25px;line-height:25px;padding:20px 0}.translation-icon{cursor:pointer;font-size:small}.add-like-icon,.sub-error-icon{display:block}@media screen and (max-width:960px){.single-translation .el-card__body{height:15px;line-height:15px}}.translation-add .el-card__body{line-height:5px}.translation-content,.translation-icon{height:100%}.translation-icon .el-card__body{padding:0;height:100%;display:flex;justify-content:center;align-items:center}.el-card.is-hover-shadow{border:1px solid #000}.icon-wrapper{pointer-events:none}@media screen and (max-width:960px){.main-wrapper{width:100%}}",""]),n["default"]=l},4774:function(t,n,e){"use strict";e.r(n);var a=e(8081),o=e.n(a),r=e(3645),i=e.n(r),l=i()(o());l.push([t.id,"*{text-decoration:none}.md{max-width:800px}code{color:#fff;background-color:gray}",""]),n["default"]=l},6778:function(t,n,e){"use strict";e.r(n);var a=e(8081),o=e.n(a),r=e(3645),i=e.n(r),l=i()(o());l.push([t.id,".ques-wrapper{display:flex;flex-direction:column;align-items:center;gap:30px;margin:50px auto 0;width:100%}.ques-form{width:100%}.form-btn div{display:flex;justify-content:center}",""]),n["default"]=l},2385:function(t,n,e){"use strict";var a=e(9242),o=e(3396),r=e(4870);const i=(0,o._)("h1",null,"输入抽象关键字",-1),l=[i];function s(t,n,e,a,r,i){return(0,o.wg)(),(0,o.iD)("div",null,l)}var u={},d=e(89);const c=(0,d.Z)(u,[["render",s]]);var p=c,f=e(212),w=(e(5494),e(9740)),m=(e(8720),e(7086),e(4783)),g=(e(3455),e(6374)),h=(e(4542),e(9776)),_=(e(6526),e(4902)),x=(e(4184),e(4143)),y=(e(5982),e(1565)),v=e(2861),b=(e(2019),e(5962),e(7139)),k=e(70),S=e(8697),U=(e(5745),e(4517),e(3003));e(6954);const T=/^[\u4e00-\u9fa5A-Za-z0-9_-]+[\)）（，；\(\.\%。\u4e00-\u9fa5A-Za-z0-9_-]?$/,z={class:"ques-wrapper"};var j={__name:"Question",props:["words"],emits:["closeQues"],setup(t,{emit:n}){const e=t,a=(0,r.iH)("");let i=(0,r.qj)({content:[{word:e.words[0].word,translation:""},{word:e.words[1].word,translation:""},{word:e.words[2].word,translation:""},{word:e.words[3].word,translation:""},{word:e.words[4].word,translation:""}]});const l=async t=>{if(!t)return;let n=i.content.filter((t=>""!=t.translation));0!=n.length?await t.validate(((t,e)=>{t?(s.value=!0,d(0,n)):alert("含有非法内容")})):alert("空表格")};let s=(0,r.iH)(!1),u=[0,0];function d(t,e){t==e.length?(v.T.alert("成功："+u[1]+"个，失败："+u[0]+"个","提交完成",{confirmButtonText:"OK"}),s.value=!1,n("closeQues")):$.ajax({url:"/api/submitTranslationsToTemp",type:"POST",timeout:1e3,data:{word:e[t].word,translation:e[t].translation},dataType:"JSON",success:function(n){1==n.info?(u[1]++,d(t+1,e)):(u[0]++,d(t+1,e))},error:function(){u[0]++,d(t+1,e)}})}return(n,e)=>{const u=U.EZ,d=S.nH,c=m.mi,p=S.ly,w=f.t;return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",z,[(0,o.Wm)(p,{ref_key:"wordsForm",ref:a,model:(0,r.SU)(i),"label-position":"top",class:"ques-form",style:{"max-width":"800px"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.words,((t,n)=>((0,o.wg)(),(0,o.j4)(d,{key:n,label:`${n+1}. ${t.word}`,prop:"content."+n+".translation",rules:[{pattern:(0,r.SU)(T),message:"请输入合法内容",trigger:["change","blur"]}]},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:(0,r.SU)(i).content[n].translation,"onUpdate:modelValue":t=>(0,r.SU)(i).content[n].translation=t,size:"large",placeholder:"请输入释义"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label","prop","rules"])))),128)),(0,o.Wm)(d,{size:"large",class:"form-btn"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{type:"danger",onClick:e[0]||(e[0]=t=>a.value.resetFields())},{default:(0,o.w5)((()=>[(0,o.Uk)("清空")])),_:1}),(0,o.Wm)(c,{type:"primary",onClick:e[1]||(e[1]=t=>l(a.value))},{default:(0,o.w5)((()=>[(0,o.Uk)("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),[[w,(0,r.SU)(s)]])}}};e(1399);const O=j;var W=O;function A(t){return(0,r.ZM)(((n,e)=>{let a;return{get(){return n(),t},set(n){clearTimeout(a),a=setTimeout((()=>{t=n,e()}),500)}}}))}function P(t){v.T.prompt("请输入释义","提交",{confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^[\u4e00-\u9fa5A-Za-z0-9_-]+[\)）（，；\(\.\%。\u4e00-\u9fa5A-Za-z0-9_-]?$/,inputErrorMessage:"空值或者含有非法字符"}).then((({value:n})=>{$.ajax({url:"/api/queryWord",type:"POST",timeout:1e3,data:{word:t},dataType:"JSON",success:function(e){1==e.info?$.ajax({url:"/api/submitTranslationsToTemp",type:"POST",timeout:1e3,data:{word:t,translation:n},dataType:"JSON",success:function(t){console.log(t),1==t.info?y.z8.success("提交成功！"):y.z8.error("提交错误！")},error:function(){y.z8.error("提交失败！")}}):$.ajax({url:"/api/addWords",type:"POST",timeout:1e3,data:{word:t},dataType:"JSON",success:function(e){1==e.info&&$.ajax({url:"/api/submitTranslationsToTemp",type:"POST",timeout:1e3,data:{word:t,translation:n},dataType:"JSON",success:function(t){console.log(t),1==t.info?y.z8.success("提交成功！"):y.z8.error("提交错误！")},error:function(){y.z8.error("提交失败！")}})},error:function(){y.z8.error("添加词条失败！")}})},error:function(){y.z8.error("查询时发生错误！")}})})).catch((()=>{(0,y.z8)({type:"info",message:"取消"})}))}function M(t){$.ajax({url:"/api/addLikesToPersistence",type:"POST",timeout:1e3,data:{translation:t},dataType:"JSON",success:function(t){1==t.info?y.z8.success("添加成功！"):y.z8.error("添加失败！")},error:function(){y.z8.error("添加失败！")}})}function Z(t,n,e){$.ajax({url:"/api/feedback/addErratum",type:"POST",timeout:1e3,data:{word:t,translation:n,reason:e},dataType:"JSON",success:function(t){1==t.info?y.z8.success("提交成功！"):y.z8.error("提交失败！")},error:function(){y.z8.error("提交失败！")}})}function q(){v.T.prompt("输入需要被翻译的词条","添加",{confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^[\u4e00-\u9fa5A-Za-z0-9_-]+[\)）（，；\(\.\%。\u4e00-\u9fa5A-Za-z0-9_-]?$/,inputErrorMessage:"词条不合法"}).then((({value:t})=>{$.ajax({url:"/api/addWords",type:"POST",timeout:1e3,data:{word:t},dataType:"JSON",success:function(t){1==t.info?y.z8.success("添加成功！"):y.z8.error("添加失败！")},error:function(){y.z8.error("添加失败！")}})})).catch((()=>{(0,y.z8)({type:"info",message:"取消"})}))}const C={class:"show-box"},D=(0,o._)("div",null,null,-1),N={class:"translation-add-row"},Q={class:"translation-word-title"},H={class:"icon-wrapper"},J=(0,o._)("span",{class:"add-like-icon"},"👍",-1),L=(0,o._)("div",{class:"icon-wrapper"},[(0,o._)("span",{class:"sub-error-icon"},"❌"),(0,o._)("span",null,"纠错")],-1),B={style:{"min-height":"200px"}};var F={__name:"Main",setup(t){let n=(0,r.iH)(!0),e=A(""),i=(0,r.iH)(!1),l=(0,r.qj)({text:e,data:[]}),s=k.ZP.create({timeout:3e3}),u=(0,r.qj)({getTranslationsFromTemp:{word:e},words:{}});(0,o.YP)(e,(t=>{l.data.length=0,null==t.match(/\S/)?i.value=!1:(i.value=!0,n.value=!0,$.ajax({url:"/api/getTranslationsFromPersistence",type:"POST",timeout:3e3,data:{word:t},dataType:"JSON",success:function(t){n.value=!1,t.info?l.data=[{translation:"暂无数据"}]:l.data=t},error:function(){n.value=!1,l.data=[{translation:"请求失败"}]}}))}),{immediate:!0});let d=(0,r.qj)({text:"获取问卷",canClick:!0,disabled:!1}),c=(0,r.qj)({isShowWrapper:!1,isShow:!1,isLoading:!1});function p(){0==c.isShow?(c.isShowWrapper=!0,c.isLoading=!0,s.post("/api/getRandomQuestionnaire").then((t=>{if(t.data.info)return alert(t.data.info),c.isLoading=!1,void(c.isShowWrapper=!1);u.words=t.data,c.isShow=!0,d.canClick=!1,c.isLoading=!1,d.text="成功！！"})).catch((t=>{y.z8.error("发生错误"),d.text="获取失败",d.disabled=!0,c.isShowWrapper=!1,c.isLoading=!1}))):(c.isShow=!1,c.isLoading=!1,c.isShowWrapper=!1,d.text="你已提交",d.disabled=!0)}function S(t){let n=t.target.parentNode.dataset.translation;M(n)}function U(t){let n=t.target.parentNode.dataset.translation;v.T.prompt("错误原因：","纠错",{confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^[\u4e00-\u9fa5A-Za-z0-9_-]+[\)）（，；\(\.\%。\u4e00-\u9fa5A-Za-z0-9_-]?$/,inputErrorMessage:"原因格式错误"}).then((({value:t})=>{Z(e.value,n,t)})).catch((()=>{(0,y.z8)({type:"info",message:"取消"})}))}return(t,s)=>{const y=x.Kf,v=_.Dv,k=h.dq,T=g.Q2,z=m.mi,j=w.b2,O=w.G4,A=f.t;return(0,o.wg)(),(0,o.iD)("section",null,[(0,o.Wm)(O,{class:"main-wrapper-inner"},{default:(0,o.w5)((()=>[(0,o.Wm)(j,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("textarea",{name:"input",id:"input","onUpdate:modelValue":s[0]||(s[0]=t=>(0,r.dq)(e)?e.value=t:e=t),rows:"10",placeholder:"请输入关键字"},null,512),[[a.nr,(0,r.SU)(e)]]),(0,o.wy)((0,o._)("div",C,[D,(0,o.wy)(((0,o.wg)(),(0,o.j4)(T,{fill:"fill",direction:"vertical",style:{width:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{class:"translation-add"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{span:24},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{shadow:"never"},{default:(0,o.w5)((()=>[(0,o._)("div",N,[(0,o._)("span",Q,(0,b.zw)((0,r.SU)(e)),1),(0,o._)("span",{class:"translation-icon",onClick:s[1]||(s[1]=t=>(0,r.SU)(P)((0,r.SU)(e)))},"➕")])])),_:1})])),_:1})])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(l).data,(t=>((0,o.wg)(),(0,o.j4)(k,{key:t,gutter:3,class:"single-translation"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{span:t.id?16:24,xm:t.id?16:24,sm:t.id?18:24,md:t.id?18:24,lg:t.id?18:24,xl:t.id?18:24},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"translation-content",shadow:"hover"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(t.translation),1)])),_:2},1024)])),_:2},1032,["span","xm","sm","md","lg","xl"]),t.id?((0,o.wg)(),(0,o.j4)(v,{key:0,span:4,xm:4,sm:3,md:3,lg:3,xl:3},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"translation-icon add-likes",shadow:"hover","data-translation":t.translation,onClick:S},{default:(0,o.w5)((()=>[(0,o._)("div",H,[J,(0,o._)("span",null,(0,b.zw)(t.likes),1)])])),_:2},1032,["data-translation"])])),_:2},1024)):(0,o.kq)("",!0),t.id?((0,o.wg)(),(0,o.j4)(v,{key:1,span:4,xm:4,sm:3,md:3,lg:3,xl:3},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"translation-icon add-against",shadow:"hover","data-translation":t.translation,onClick:U},{default:(0,o.w5)((()=>[L])),_:2},1032,["data-translation"])])),_:2},1024)):(0,o.kq)("",!0)])),_:2},1024)))),128))])),_:1})),[[A,(0,r.SU)(n)]])],512),[[a.F8,(0,r.SU)(i)]]),(0,o.Wm)(z,{type:"success",size:"large",onClick:(0,r.SU)(q)},{default:(0,o.w5)((()=>[(0,o.Uk)("添加词条")])),_:1},8,["onClick"]),(0,o.Wm)(z,{disabled:(0,r.SU)(d).disabled,type:"primary",onClick:s[2]||(s[2]=t=>(0,r.SU)(d).canClick&&p()),size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)((0,r.SU)(d).text),1)])),_:1},8,["disabled"]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",B,[(0,r.SU)(c).isShow?((0,o.wg)(),(0,o.j4)((0,r.SU)(W),{key:0,words:(0,r.SU)(u).words,onCloseQues:p},null,8,["words"])):(0,o.kq)("",!0)])),[[a.F8,(0,r.SU)(c).isShowWrapper],[A,(0,r.SU)(c).isLoading]])])),_:1})])),_:1})])}}};e(7708);const E=F;var K=E;const V=(0,o._)("h1",null,"DontSpeakAbsWords",-1),G=(0,o._)("p",null,[(0,o.Uk)("给我好好说话(恼 "),(0,o._)("strong",null,"最后更新于2022.11.13")],-1),I=(0,o._)("h2",null,"Q&A",-1),Y=(0,o._)("p",null,[(0,o._)("strong",null,"Q：为什么要做这个东西？")],-1),R=(0,o._)("p",null,[(0,o._)("strong",null,[(0,o.Uk)('A：一开始是受到了"能不能好好说话"的启发，想做一个包括但不限于翻译'),(0,o._)("code",null,"拼音缩写"),(0,o.Uk)("，"),(0,o._)("code",null,"emoji"),(0,o.Uk)("，"),(0,o._)("code",null,"中文黑话"),(0,o.Uk)("的网站，于是就有了现在这个Demo")])],-1),X=(0,o._)("hr",null,null,-1),tt=(0,o._)("p",null,[(0,o._)("strong",null,"Q：怎么使用这个网站？")],-1),nt=(0,o._)("p",null,[(0,o._)("strong",null,[(0,o.Uk)("A：如果你想翻译"),(0,o._)("code",null,"xswl"),(0,o.Uk)("，你可以点击"),(0,o._)("code",null,"添加词条"),(0,o.Uk)("，提交该词语")])],-1),et=(0,o._)("p",null,[(0,o._)("strong",null,[(0,o.Uk)("如果你想查找"),(0,o._)("code",null,"xswl"),(0,o.Uk)("的释义，你可以在输入框里输入该词，获取释义")])],-1),at=(0,o._)("p",null,[(0,o._)("strong",null,[(0,o.Uk)("你也可以点击"),(0,o._)("code",null,"获得问卷"),(0,o.Uk)("，来获得一份问卷，填入你对这些词的解释，帮助我们完善网站w")])],-1),ot=(0,o._)("hr",null,null,-1),rt=(0,o._)("p",null,[(0,o._)("strong",null,"Q：收集到的数据会用来干什么呢？")],-1),it=(0,o._)("p",null,[(0,o._)("strong",null,[(0,o.Uk)("A：收集到的所有数据都将被定期"),(0,o._)("code",null,"开源"),(0,o.Uk)("，并且我们计划用收集到的数据训练能翻译"),(0,o._)("code",null,"抽象话"),(0,o.Uk)("的AI")])],-1),lt=(0,o._)("hr",null,null,-1),st=(0,o._)("p",null,[(0,o._)("strong",null,"Q：我发现了bug，请问怎么提交？")],-1),ut=(0,o._)("p",null,[(0,o._)("strong",null,[(0,o.Uk)("A：可以在GitHub的issue提交或者发送到邮箱"),(0,o._)("a",{href:"mailto:midsummra@gmail.com"},"midsummra@gmail.com")])],-1),dt=(0,o._)("hr",null,null,-1),ct=(0,o._)("p",null,[(0,o._)("strong",null,"请用抽象话填满我qwq"),(0,o._)("br"),(0,o._)("strong",null,[(0,o.Uk)("Github："),(0,o._)("a",{href:"https://github.com/IgarashiAkatuki/DontSpeakAbsWords",target:"_blank"},"https://github.com/IgarashiAkatuki/DontSpeakAbsWords")])],-1);function pt(t,n,e,a,r,i){const l=x.Kf;return(0,o.wg)(),(0,o.j4)(l,{shadow:"never","body-style":"text-align:left",class:"md"},{default:(0,o.w5)((()=>[V,G,I,Y,R,X,tt,nt,et,at,ot,rt,it,lt,st,ut,dt,ct])),_:1})}var ft={};e(786);const wt=(0,d.Z)(ft,[["render",pt]]);var mt=wt;const gt={class:"wrapper"},ht={class:"main-wrapper"};var _t={__name:"App",setup(t){return(t,n)=>((0,o.wg)(),(0,o.iD)("div",gt,[(0,o._)("div",ht,[(0,o.Wm)((0,r.SU)(p)),(0,o.Wm)((0,r.SU)(K)),(0,o.Wm)((0,r.SU)(mt))])]))}};e(6521);const xt=_t;var yt=xt;const vt=(0,a.ri)(yt);vt.config.globalProperties.$axios=k.ZP,k.ZP.defaults.baseURL="/",vt.mount("#app")},6521:function(t,n,e){var a=e(8668);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=e(7037).Z;o("35145966",a,!0,{sourceMap:!1,shadowMode:!1})},7708:function(t,n,e){var a=e(5904);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=e(7037).Z;o("666cae10",a,!0,{sourceMap:!1,shadowMode:!1})},786:function(t,n,e){var a=e(4774);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=e(7037).Z;o("4488e5ba",a,!0,{sourceMap:!1,shadowMode:!1})},1399:function(t,n,e){var a=e(6778);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=e(7037).Z;o("7d5f9175",a,!0,{sourceMap:!1,shadowMode:!1})}},n={};function e(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return t[a](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(n,a,o,r){if(!a){var i=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],r=t[d][2];for(var l=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(e.O).every((function(t){return e.O[t](a[s])}))?a.splice(s--,1):(l=!1,r<i&&(i=r));if(l){t.splice(d--,1);var u=o();void 0!==u&&(n=u)}}return n}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[a,o,r]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var o,r,i=a[0],l=a[1],s=a[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(s)var d=s(e)}for(n&&n(a);u<i.length;u++)r=i[u],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(d)},a=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(2385)}));a=e.O(a)})();
//# sourceMappingURL=app.53e5fa1d.js.map