webpackJsonp([0],{"+tHS":function(e,t,n){var o=n("o0yX");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("c81ef3d0",o,!1,{})},"0zi8":function(e,t,n){"use strict";var o=n("RRo+"),r=n.n(o),s=n("c2Ch"),i={name:"pageheader",data:function(){return{userImgURl:"",delivery:!1,ruleForm2:{password:"",account:""},rules2:{password:[{validator:function(e,t,n){""===t?n(new Error("请输入密码")):n()},trigger:"blur"}],account:[{validator:function(e,t,n){if(!t)return n(new Error("账号不能为空"));setTimeout(function(){r()(t)?/^[1][3,4,5,7,8][0-9]{9}$/.test(t)?n():n(new Error("请输入正确的手机号码")):n(new Error("请输入数字值"))},1e3)},trigger:"blur"}]},dialogFormVisible:!1,dialogTableVisible:!1,form:{name:"",type:[],resource:"",desc:""},formLabelWidth:"120px"}},mounted:function(){this.getCookie()},methods:{resetForm:function(e){this.$refs[e].resetFields()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("登录异常"),!1;Object(s.k)(t.ruleForm2).then(function(e){""!=e.data?(console.log(e.data),1==t.delivery?(console.log("checked == true"),t.setCookie(t.ruleForm2.account,t.ruleForm2.password,7)):(console.log("清空Cookie"),t.clearCookie()),t.$store.commit("setToken",!0),t.dialogFormVisible=!1,t.userImgURl="http://localhost:88/upload/"+e.data.userImg,e.data.userImg=t.userImgURl,t.$store.commit("setUser",e.data),console.log(t.userImgURl),console.log(e.data),t.$message({type:"success",message:"欢迎您："+t.$store.state.user.userName,showClose:!0})):(t.$message({showClose:!0,message:"登录失败，用户名或密码错误",type:"error"}),t.ruleForm2.account="",t.ruleForm2.password="",t.delivery=!1)})})},setCookie:function(e,t,n){var o=new Date;o.setTime(o.getTime()+864e5*n),window.document.cookie="account="+e+";path=/;expires="+o.toGMTString(),window.document.cookie="password="+t+";path=/;expires="+o.toGMTString()},getCookie:function(){if(document.cookie.length>0)for(var e=document.cookie.split("; "),t=0;t<e.length;t++){var n=e[t].split("=");"account"==n[0]?this.ruleForm2.account=n[1]:"password"==n[0]&&(this.ruleForm2.password=n[1])}},clearCookie:function(){this.setCookie("account","password",-1),this.$store.commit("setToken",!1)},loginCheck:function(){1==this.$store.state.token?this.$message({showClose:!0,message:"您已经登录了！"}):this.dialogFormVisible=!0},logout:function(){document.cookie.length>0?(this.clearCookie(),this.$message({showClose:!0,message:"退出登录",type:"success"})):this.$message({showClose:!0,message:"您还未登录"})},toshoppingcar:function(){this.$router.push({name:"shoppingcar",params:{fullStorage:null}})},toRegister:function(){this.$router.push("/register")},toIndex:function(){this.$router.push("/")},toaddbook:function(){this.$store.commit("setUserInfoTag","addbook"),this.$router.push("/addbook")},toorderlist:function(){this.$store.commit("setUserInfoTag","myorders"),this.$router.push("/myorders")},touserinfo:function(e){this.$store.commit("setUserInfoTag","welcome"),this.$router.push("/userinfo")}}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"pageheader"}},[n("div",{staticClass:"top"},[n("el-container",{attrs:{direction:"horizontal"}},[n("el-main",{staticStyle:{"margin-top":"10px"}},[e._v("欢迎使用 乘风 闲置书籍流动平台")]),e._v(" "),n("el-main",[n("ul",[n("li",[n("span",{on:{click:e.toIndex}},[e._v("首页")])]),e._v(" "),n("li",[n("span",{on:{click:e.toRegister}},[e._v("注册")])]),e._v(" "),n("li",[this.$store.state.token?e._e():[n("span",{on:{click:function(t){return e.loginCheck()}}},[e._v("登录")])]],2),e._v(" "),n("li",{staticClass:"img-no-li"},[this.$store.state.token?[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},[n("el-avatar",{staticStyle:{border:"1px solid #EEEAA0"},attrs:{src:this.$store.state.user.userImg}})],1),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{icon:"el-icon-user"}},[n("span",{on:{click:e.touserinfo}},[e._v("个人中心")])]),e._v(" "),n("el-dropdown-item",{attrs:{icon:"el-icon-user"}},[n("span",{on:{click:e.toaddbook}},[e._v("发布闲置书籍")])]),e._v(" "),n("el-dropdown-item",{attrs:{icon:"el-icon-user"}},[n("span",{on:{click:e.toshoppingcar}},[e._v("购物车")])]),e._v(" "),n("el-dropdown-item",{attrs:{icon:"el-icon-circle-close"}},[n("span",{on:{click:e.toorderlist}},[e._v("我的订单")])]),e._v(" "),n("el-dropdown-item",{attrs:{icon:"el-icon-circle-close"}},[n("span",{on:{click:e.logout}},[e._v("退出登录")])])],1)],1)]:e._e()],2)])])],1),e._v(" "),n("el-dialog",{attrs:{title:"登录",visible:e.dialogFormVisible,center:"","append-to-body":!0,"lock-scroll":!1,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"账   号",prop:"num"}},[n("el-input",{staticStyle:{width:"250px"},model:{value:e.ruleForm2.account,callback:function(t){e.$set(e.ruleForm2,"account",t)},expression:"ruleForm2.account"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密   码",prop:"pass"}},[n("el-input",{staticStyle:{width:"250px"},attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}})],1),e._v(" "),n("el-form-item",{staticClass:"from-switch",attrs:{label:"记住密码",prop:"delivery"}},[n("el-switch",{attrs:{"active-color":"#E0B41B"},model:{value:e.delivery,callback:function(t){e.delivery=t},expression:"delivery"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1,e.resetForm("ruleForm2")}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm2")}}},[e._v("登 录")])],1)],1)],1)])};a._withStripped=!0;var c={render:a,staticRenderFns:[]},u=c;var l=!1;var d=n("VU/8")(i,u,!1,function(e){l||n("KGeg")},"data-v-6e24ddec",null);d.options.__file="src/components/pageheader.vue";t.a=d.exports},"1alW":function(e,t,n){var o=n("kM2E");o(o.S,"Number",{isInteger:n("AKgy")})},"21It":function(e,t,n){"use strict";var o=n("FtD3");e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"5VQ+":function(e,t,n){"use strict";var o=n("cGG2");e.exports=function(e,t){o.forEach(e,function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])})}},"7GwW":function(e,t,n){"use strict";var o=n("cGG2"),r=n("21It"),s=n("p1b6"),i=n("DQCr"),a=n("Oi+a"),c=n("oJlt"),u=n("GHBc"),l=n("FtD3");e.exports=function(e){return new Promise(function(t,n){var d=e.data,p=e.headers;o.isFormData(d)&&delete p["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var g=a(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var o="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:o,config:e,request:f};r(t,n,s),f=null}},f.onabort=function(){f&&(n(l("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){n(l("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",f)),f=null},o.isStandardBrowserEnv()){var v=(e.withCredentials||u(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in f&&o.forEach(p,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:f.setRequestHeader(t,e)}),o.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),n(e),f=null)}),d||(d=null),f.send(d)})}},AKgy:function(e,t,n){var o=n("EqjI"),r=Math.floor;e.exports=function(e){return!o(e)&&isFinite(e)&&r(e)===e}},DQCr:function(e,t,n){"use strict";var o=n("cGG2");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},DUeU:function(e,t,n){"use strict";var o=n("cGG2");e.exports=function(e,t){t=t||{};var n={},r=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return o.isPlainObject(e)&&o.isPlainObject(t)?o.merge(e,t):o.isPlainObject(t)?o.merge({},t):o.isArray(t)?t.slice():t}function u(r){o.isUndefined(t[r])?o.isUndefined(e[r])||(n[r]=c(void 0,e[r])):n[r]=c(e[r],t[r])}o.forEach(r,function(e){o.isUndefined(t[e])||(n[e]=c(void 0,t[e]))}),o.forEach(s,u),o.forEach(i,function(r){o.isUndefined(t[r])?o.isUndefined(e[r])||(n[r]=c(void 0,e[r])):n[r]=c(void 0,t[r])}),o.forEach(a,function(o){o in t?n[o]=c(e[o],t[o]):o in e&&(n[o]=c(void 0,e[o]))});var l=r.concat(s).concat(i).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter(function(e){return-1===l.indexOf(e)});return o.forEach(d,u),n}},FtD3:function(e,t,n){"use strict";var o=n("t8qj");e.exports=function(e,t,n,r,s){var i=new Error(e);return o(i,t,n,r,s)}},GHBc:function(e,t,n){"use strict";var o=n("cGG2");e.exports=o.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var o=e;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=o.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"JP+z":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},Joay:function(e,t,n){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"pagefooter"}},[t("div",{staticClass:"footer-context"},[t("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"grid-content bg-purple"},[this._v("© 2021-2021 bookstore.ycy.sise.com 乘风二手商城 版权所有")])])],1)],1)])};o._withStripped=!0;var r={render:o,staticRenderFns:[]},s=r;var i=!1;var a=n("VU/8")({name:"pagefooter"},s,!1,function(e){i||n("+tHS")},"data-v-4cf279fa",null);a.options.__file="src/components/pagefooter.vue";t.a=a.exports},KCLY:function(e,t,n){"use strict";(function(t){var o=n("cGG2"),r=n("5VQ+"),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=n("7GwW"):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(a=n("7GwW")),a),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){c.headers[e]={}}),o.forEach(["post","put","patch"],function(e){c.headers[e]=o.merge(s)}),e.exports=c}).call(t,n("W2nU"))},KGeg:function(e,t,n){var o=n("O+bT");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("1ca31b1a",o,!1,{})},"O+bT":function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\n.dialog-footer[data-v-6e24ddec] .el-button--primary{\n    background-color: #E0B41B;\n    border: 0;\n}\n.dialog-footer[data-v-6e24ddec] .el-button{\n    width: 120px;\n}\n#pageheader[data-v-6e24ddec]{\n  width: 100%;\n  background-color: #666752;\n  color: white;\n  height: 45px;\n}\n.top[data-v-6e24ddec]{\n    width: 1226px;\n    margin:0 auto;\n}\nul[data-v-6e24ddec]{\n    list-style-type:none;\n    margin:0px;\n    width: 200px;\n    position: relative;\n    left:360px;\n}\nul li[data-v-6e24ddec]{\n    float: left;\n    margin-left: 8px;\n    margin-top:10px;\n}\nul > .img-no-li[data-v-6e24ddec]{\n    margin-top: 1px;\n}\n","",{version:3,sources:["C:/StudyProject/GitPro/vue-springboot-bookstores/ui-bookstore/src/components/src/components/pageheader.vue"],names:[],mappings:";AA+QA;IACA,0BAAA;IACA,UAAA;CAEA;AACA;IACA,aAAA;CACA;AAEA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,aAAA;CACA;AACA;IACA,cAAA;IACA,cAAA;CACA;AACA;IACA,qBAAA;IACA,WAAA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;CACA;AACA;IACA,YAAA;IACA,iBAAA;IACA,gBAAA;CACA;AACA;IACA,gBAAA;CACA",file:"pageheader.vue",sourcesContent:['<template>\n  <div id="pageheader">\n      <div class="top">\n        <el-container direction="horizontal">\n          <el-main style="margin-top: 10px">欢迎使用 乘风 闲置书籍流动平台</el-main>\n          <el-main>\n            <ul>\n              <li><span @click="toIndex">首页</span></li>\n            \x3c!--  <li>消息</li>--\x3e\n            \x3c!--  <li> <span @click="clearCookie">test</span></li>--\x3e\n              <li> <span @click="toRegister">注册</span></li>\n              <li><template v-if="!this.$store.state.token"><span @click="loginCheck()">登录</span></template></li>\n              <li class="img-no-li"><template v-if="this.$store.state.token" class="img-down">\n                <el-dropdown>\n                  <span class="el-dropdown-link">\n                    <el-avatar :src="this.$store.state.user.userImg" style="border:1px solid #EEEAA0"></el-avatar>\n                  </span>\n                  <el-dropdown-menu slot="dropdown">\n                    <el-dropdown-item icon="el-icon-user">\n                      <span @click="touserinfo">个人中心</span>\n                    </el-dropdown-item>\n                    <el-dropdown-item icon="el-icon-user">\n                      <span @click="toaddbook">发布闲置书籍</span>\n                    </el-dropdown-item>\n                    <el-dropdown-item icon="el-icon-user">\n                      <span @click="toshoppingcar">购物车</span>\n                    </el-dropdown-item>\n                    <el-dropdown-item icon="el-icon-circle-close">\n                      <span @click="toorderlist">我的订单</span>\n                    </el-dropdown-item>\n                    <el-dropdown-item icon="el-icon-circle-close">\n                      <span @click="logout">退出登录</span>\n                    </el-dropdown-item>\n                  </el-dropdown-menu>\n                </el-dropdown>\n               </template> </li>\n\n            </ul>\n          </el-main>\n        </el-container>\n        \x3c!--仔细阅读Dialog的各个属性参数，会影响到布局排版，例如遇到了一个大坑就是没有设置:append-to-body=\'true\'，导致遮罩遮盖整个页面，:lock-scroll="false"没有设置的话，点击前后会感觉到头部导航栏的移动，体验性很不好！！还有设置dialog的宽度width="40%"前面不用加冒号：--\x3e\n        <el-dialog title="登录" :visible.sync="dialogFormVisible"  center :append-to-body=\'true\' :lock-scroll="false" width="30%">\n          \x3c!--这里可以写各种登录表单--\x3e\n          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">\n            <el-form-item label="账   号" prop="num">\n              <el-input v-model="ruleForm2.account" style="width:250px"></el-input>\n            </el-form-item>\n\n            <el-form-item label="密   码" prop="pass">\n              <el-input type="password" v-model="ruleForm2.password" auto-complete="off" style="width:250px"></el-input>\n            </el-form-item>\n\n            <el-form-item label="记住密码" prop="delivery" class="from-switch">\n              <el-switch v-model="delivery" active-color="#E0B41B"></el-switch>\n            </el-form-item>\n          </el-form>\n          <div slot="footer" class="dialog-footer">\n            <el-button @click="dialogFormVisible = false,resetForm(\'ruleForm2\')">取 消</el-button>\n            <el-button type="primary" @click="submitForm(\'ruleForm2\')">登 录</el-button>\n          </div>\n        </el-dialog>\n      </div>\n\n\n  </div>\n</template>\n<script>\n  import {login} from \'../axios/api\'\n  export default {\n    name: "pageheader",\n    data() {\n      /*插入form方法*/\n      var checkNum = (rule, value, callback) => {\n        if (!value) {\n          return callback(new Error(\'账号不能为空\'));\n        }\n        setTimeout(() => {\n          if (!Number.isInteger(value)) {\n            callback(new Error(\'请输入数字值\'));\n          } else {\n            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;\n            if (!myreg.test(value) ) {\n              callback(new Error(\'请输入正确的手机号码\'));\n            } else {\n              callback();\n            }\n\n          }\n        }, 1000);\n      };\n      var validatePass = (rule, value, callback) => {\n        if (value === \'\') {\n          callback(new Error(\'请输入密码\'));\n        } else {\n\n          callback();\n        }\n      };\n      /*插入form方法*/\n\n      return {\n        userImgURl:\'\',\n        delivery: false,\n        /*插入form方法*/\n        /*设定规则指向*/\n        ruleForm2: {\n          password: \'\',\n          account: \'\',\n\n        },\n        rules2: {\n          password: [\n            { validator: validatePass, trigger: \'blur\' }\n          ],\n\n          account: [\n            { validator: checkNum, trigger: \'blur\' }\n          ]\n        },\n\n        /*插入form方法*/\n        dialogFormVisible:false,\n        dialogTableVisible: false,\n        form: {\n          name: \'\',\n          type: [],\n          resource: \'\',\n          desc: \'\'\n        },\n        formLabelWidth: \'120px\'\n      };\n    },\n    //页面加载调用获取cookie值\n    mounted() {\n      this.getCookie();\n    },\n    methods: {\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      },\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            login(this.ruleForm2).then(res=>{\n              if(res.data!=""){\n                //判断复选框是否被勾选 勾选则调用配置cookie方法\n                console.log(res.data);\n                if (this.delivery == true) {\n                  console.log("checked == true");\n                  //传入账号名，密码，和保存天数3个参数\n                  this.setCookie(this.ruleForm2.account, this.ruleForm2.password, 7);\n                } else {\n                  console.log("清空Cookie");\n                  //清空Cookie\n                  this.clearCookie();\n                }\n                this.$store.commit(\'setToken\',true);\n                this.dialogFormVisible = false;\n                this.userImgURl="http://localhost:88/upload/"+res.data.userImg;\n                res.data.userImg=this.userImgURl;\n                this.$store.commit(\'setUser\',res.data);\n                console.log(this.userImgURl)\n                console.log(res.data)\n                this.$message({\n                  type: \'success\',\n                  message: \'欢迎您：\'+this.$store.state.user.userName,\n                  showClose: true,\n                });\n              }else{\n                this.$message({\n                  showClose: true,\n                  message: \'登录失败，用户名或密码错误\',\n                  type: \'error\'\n                });\n                this.ruleForm2.account="";\n                this.ruleForm2.password="";\n                this.delivery=false;\n              }\n            })\n          } else {\n            this.$message.error("登录异常");\n            return false;\n          }\n        });\n      },\n      //设置cookie\n      setCookie(c_name, c_pwd, exdays) {\n        var exdate = new Date(); //获取时间\n        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数\n        //字符串拼接cookie\n        window.document.cookie = "account" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();\n        window.document.cookie = "password" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();\n      },\n      //读取cookie\n      getCookie: function () {\n        if (document.cookie.length > 0) {\n          var arr = document.cookie.split(\'; \'); //这里显示的格式需要切割一下自己可输出看下\n          for (var i = 0; i < arr.length; i++) {\n            var arr2 = arr[i].split(\'=\'); //再次切割\n            //判断查找相对应的值\n            if (arr2[0] == \'account\') {\n              this.ruleForm2.account = arr2[1]; //保存到保存数据的地方\n            } else if (arr2[0] == \'password\') {\n              this.ruleForm2.password = arr2[1];\n            }\n          }\n        }\n      },\n      //清除cookie\n      clearCookie: function () {\n        this.setCookie("account", "password", -1); //修改2值都为空，天数为负1天就好了\n        this.$store.commit(\'setToken\',false);\n      },\n      loginCheck: function () {\n        if (this.$store.state.token==true) {\n          this.$message({\n            showClose: true,\n            message: \'您已经登录了！\'\n          });\n        } else {\n          this.dialogFormVisible = true;\n        }\n      },\n      logout: function () {\n        if (document.cookie.length > 0) {\n          this.clearCookie();\n          this.$message({\n            showClose: true,\n            message: \'退出登录\',\n            type: "success"\n          });\n        } else {\n          this.$message({\n            showClose: true,\n            message: \'您还未登录\',\n          });\n        }\n\n      },\n      toshoppingcar(){\n        this.$router.push({\n          name:"shoppingcar",\n          params:{\n            fullStorage:null\n          }\n        });\n      },\n\n      toRegister(){\n        this.$router.push(\'/register\')\n      },\n      toIndex(){\n        this.$router.push(\'/\')\n      },\n      toaddbook(){\n        this.$store.commit(\'setUserInfoTag\',\'addbook\');\n        this.$router.push(\'/addbook\')\n      },\n      toorderlist(){\n        this.$store.commit(\'setUserInfoTag\',\'myorders\');\n        this.$router.push(\'/myorders\')\n      },\n      touserinfo(param){\n        this.$store.commit(\'setUserInfoTag\',\'welcome\');\n        this.$router.push(\'/userinfo\')\n      }\n    }\n  }\n<\/script>\n\n<style scoped>\n  .dialog-footer >>>.el-button--primary{\n    background-color: #E0B41B;\n    border: 0;\n\n  }\n  .dialog-footer >>> .el-button{\n    width: 120px;\n  }\n\n#pageheader{\n  width: 100%;\n  background-color: #666752;\n  color: white;\n  height: 45px;\n}\n  .top{\n    width: 1226px;\n    margin:0 auto;\n  }\n  ul{\n    list-style-type:none;\n    margin:0px;\n    width: 200px;\n    position: relative;\n    left:360px;\n  }\n  ul li{\n    float: left;\n    margin-left: 8px;\n    margin-top:10px;\n  }\n  ul > .img-no-li{\n    margin-top: 1px;\n  }\n</style>\n'],sourceRoot:""}])},"Oi+a":function(e,t,n){"use strict";var o=n("dIwP"),r=n("qRfI");e.exports=function(e,t){return e&&!o(t)?r(e,t):t}},"RRo+":function(e,t,n){e.exports={default:n("c45H"),__esModule:!0}},SLDG:function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},TNV1:function(e,t,n){"use strict";var o=n("cGG2");e.exports=function(e,t,n){return o.forEach(n,function(n){e=n(e,t)}),e}},W2nU:function(e,t){var n,o,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{o="function"==typeof clearTimeout?clearTimeout:i}catch(e){o=i}}();var c,u=[],l=!1,d=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&f())}function f(){if(!l){var e=a(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},XmWM:function(e,t,n){"use strict";var o=n("cGG2"),r=n("DQCr"),s=n("fuGk"),i=n("xLtR"),a=n("DUeU");function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}}),o.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,n,o){return this.request(a(o||{},{method:e,url:t,data:n}))}}),e.exports=c},c2Ch:function(e,t,n){"use strict";var o=n("mvHQ"),r=n.n(o),s=n("mtWM"),i=n.n(s).a.create({baseURL:"http://172.0.0.1:8088/",timeout:3e4,headers:{"Content-Type":"application/json;charset=UTF-8"},transformRequest:[function(e){return r()(e)}]});t.k=function(e){return i({url:"user/login",method:"post",data:e})},t.l=function(e){return i({url:"user/register",method:"post",data:e})},t.a=function(e){return i({url:"book/addByUser",method:"post",data:e})},t.f=function(e){return i({url:"book/findBookById",method:"post",data:e})},t.g=function(e){return i({url:"book/findBookComments",method:"post",data:e})},t.h=function(e){return i({url:"book/findBookTop10",method:"post",data:e})},t.c=function(e){return i({url:"book/addComment",method:"post",data:e})},t.b=function(e){return i({url:"car/addCar",method:"post",data:e})},t.i=function(e){return i({url:"car/findCar",method:"post",data:e})},t.e=function(e){return i({url:"car/editCar",method:"post",data:e})},t.m=function(e){return i({url:"order/toOrder",method:"post",data:e})},t.d=function(e){return i({url:"order/createOrder",method:"post",data:e})},t.j=function(e){return i({url:"order/findOrderList",method:"post",data:e})}},c45H:function(e,t,n){n("1alW"),e.exports=n("FeBl").Number.isInteger},cGG2:function(e,t,n){"use strict";var o=n("JP+z"),r=Object.prototype.toString;function s(e){return"[object Array]"===r.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===r.call(e)}function l(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,o){c(t[o])&&c(n)?t[o]=e(t[o],n):c(n)?t[o]=e({},n):s(n)?t[o]=n.slice():t[o]=n}for(var o=0,r=arguments.length;o<r;o++)l(arguments[o],n);return t},extend:function(e,t,n){return l(t,function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},cWxy:function(e,t,n){"use strict";var o=n("dVOP");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},dIwP:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"dLd/":function(e,t,n){e.exports=n.p+"static/img/logo.52b76a8.png"},dVOP:function(e,t,n){"use strict";function o(e){this.message=e}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,e.exports=o},fuGk:function(e,t,n){"use strict";var o=n("cGG2");function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},mtWM:function(e,t,n){e.exports=n("tIFN")},o0yX:function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\n.footer-context[data-v-4cf279fa]{\n    width: 1226px;\n    margin:0 auto;\n}\n#pagefooter[data-v-4cf279fa]{\n      width: 100%;\n      background-color: #666752;\n}\n","",{version:3,sources:["C:/StudyProject/GitPro/vue-springboot-bookstores/ui-bookstore/src/components/src/components/pagefooter.vue"],names:[],mappings:";AAoBA;IACA,cAAA;IACA,cAAA;CACA;AACA;MACA,YAAA;MACA,0BAAA;CAEA",file:"pagefooter.vue",sourcesContent:['<template>\n    <div id="pagefooter">\n        <div class="footer-context">\n            <el-row type="flex" class="row-bg" justify="center">\n                <el-col :span="12"><div class="grid-content bg-purple">© 2021-2021 bookstore.ycy.sise.com 乘风二手商城 版权所有</div>\n                </el-col>\n            </el-row>\n        </div>\n\n    </div>\n</template>\n\n<script>\n    export default {\n        name: "pagefooter"\n    }\n<\/script>\n\n<style scoped>\n\n  .footer-context{\n      width: 1226px;\n      margin:0 auto;\n  }\n    #pagefooter{\n        width: 100%;\n        background-color: #666752;\n\n    }\n</style>\n'],sourceRoot:""}])},oJlt:function(e,t,n){"use strict";var o=n("cGG2"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(o.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=o.trim(e.substr(0,s)).toLowerCase(),n=o.trim(e.substr(s+1)),t){if(i[t]&&r.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},p1b6:function(e,t,n){"use strict";var o=n("cGG2");e.exports=o.isStandardBrowserEnv()?{write:function(e,t,n,r,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),o.isString(r)&&a.push("path="+r),o.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},pxG4:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},qRfI:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},t8qj:function(e,t,n){"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},tIFN:function(e,t,n){"use strict";var o=n("cGG2"),r=n("JP+z"),s=n("XmWM"),i=n("DUeU");function a(e){var t=new s(e),n=r(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var c=a(n("KCLY"));c.Axios=s,c.create=function(e){return a(i(c.defaults,e))},c.Cancel=n("dVOP"),c.CancelToken=n("cWxy"),c.isCancel=n("pBtG"),c.all=function(e){return Promise.all(e)},c.spread=n("pxG4"),c.isAxiosError=n("SLDG"),e.exports=c,e.exports.default=c},xLtR:function(e,t,n){"use strict";var o=n("cGG2"),r=n("TNV1"),s=n("pBtG"),i=n("KCLY");function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return a(e),t.data=r(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}}});
//# sourceMappingURL=0.efb4b7b0983ebd24217f.js.map