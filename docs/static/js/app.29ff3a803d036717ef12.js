webpackJsonp([1],{Dbsp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("fZjL"),o=n.n(i),r=n("//Fk"),s=n.n(r),a=n("woOf"),c=n.n(a),d=n("Zrlr"),u=n.n(d),l=n("wxAW"),f=n.n(l),h=function(){function t(){u()(this,t),this.listeners={}}return f()(t,[{key:"on",value:function(t,e){void 0===this.listeners[t]&&(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"emit",value:function(t){this.listeners[t]&&this.listeners[t].forEach(function(t){return t()})}}]),t}(),m={name:"VueUeditorWrap",data:function(){return{id:"editor"+Math.random().toString().slice(-10),editor:null,status:0,initValue:"",defaultConfig:{UEDITOR_HOME_URL:"./static/UEditor/",enableAutoSave:!1}}},props:{value:{type:String,default:""},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:{type:Boolean,default:!1},name:{type:String,default:""}},computed:{mixedConfig:function(){return c()({},this.defaultConfig,this.config)}},methods:{registerButton:function(t){var e=t.name,n=t.icon,i=t.tip,o=t.handler,r=t.UE,s=void 0===r?window.UE:r;s.registerUI(e,function(t,e){t.registerCommand(e,{execCommand:function(){o(t,e)}});var r=new s.ui.Button({name:e,title:i,cssRules:"background-image: url("+n+") !important;background-size: cover;",onclick:function(){t.execCommand(e)}});return t.addListener("selectionchange",function(){var n=t.queryCommandState(e);-1===n?(r.setDisabled(!0),r.setChecked(!1)):(r.setDisabled(!1),r.setChecked(n))}),r})},_initEditor:function(){var t=this;this.$nextTick(function(){t.init(),t.editor=window.UE.getEditor(t.id,t.mixedConfig),t.editor.addListener("ready",function(){t.status=2,t.editor.setContent(t.initValue),t.$emit("ready",t.editor),t.editor.addListener("contentChange",function(){t.$emit("input",t.editor.getContent())})})})},_checkDependencies:function(){var t=this;return new s.a(function(e,n){!!window.UE&&!!window.UEDITOR_CONFIG&&0!==o()(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor?e():window.loadEnv?window.loadEnv.on("scriptsLoaded",function(){e()}):(window.loadEnv=new h,t._loadConfig().then(function(){return t._loadCore()}).then(function(){e(),window.loadEnv.emit("scriptsLoaded")}))})},_loadConfig:function(){var t=this;return new s.a(function(e,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==o()(window.UEDITOR_CONFIG).length)e();else{var i=document.createElement("script");i.type="text/javascript",i.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==o()(window.UEDITOR_CONFIG).length?e():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",i.src)}}})},_loadCore:function(){var t=this;return new s.a(function(e,n){if(window.UE&&window.UE.getEditor)e();else{var i=document.createElement("script");i.type="text/javascript",i.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){window.UE&&window.UE.getEditor?e():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",i.src)}}})},_setContent:function(t){t===this.editor.getContent()||this.editor.setContent(t)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(t){var e=this;switch(this.status){case 0:this.status=1,this.initValue=t,this._checkDependencies().then(function(){return e._initEditor()});break;case 1:this.initValue=t;break;case 2:this._setContent(t)}},immediate:!0}}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("script",{attrs:{id:this.id,name:this.name,type:"text/plain"}})},staticRenderFns:[]},g=n("VU/8")(m,p,!1,null,null,null);e.default=g.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("ul",{staticClass:"nav"},[e("router-link",{attrs:{to:{path:"/Home"},tag:"li"}},[this._v("主页")]),this._v(" "),e("router-link",{attrs:{to:{path:"/Empty"},tag:"li"}},[this._v("空白页")])],1),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("OCtB")},"data-v-4b1889fb",null).exports,s=n("/ocq"),a=n("WMqk"),c={name:"HelloWorld",components:{VueUeditorWrap:n.n(a).a},data:function(){return{msg:'<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',config:{serverUrl:"http://35.201.165.105:8000/controller.php",UEDITOR_HOME_URL:"./static/UEditor/",autoHeightEnabled:!1,initialFrameHeight:240,initialFrameWidth:"100%",enableAutoSave:!1}}},mounted:function(){console.log("%c注意：本Demo提供的serverUrl是为了方便小伙伴们体验图片文件等上传功能。\n请勿在生产环境使用此serverUrl！！！","background:#f33;color:#fff")},methods:{ready:function(t){console.log("你要的实例"+t.key+"在此:",t)},showData:function(){alert(this.msg),console.log(this.msg)},myInit:function(){this.$refs.ueditor.forEach(function(t){t.registerButton({name:"test",icon:"./static/test-button.png",tip:"this is a test tip",handler:function(t,e){t.execCommand("inserthtml","<span>text inserted by test button</span>")}}),t.registerButton({name:"center",icon:"./static/center.png",tip:"表格居中",handler:function(t,e){var n=t.document.querySelectorAll("table");n.length?n.forEach(function(t){t.style.margin="0 auto"}):t.trigger("showmessage",{content:"没有表格",timeout:2e3})}})})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"preview",domProps:{innerHTML:t._s(t.msg)},on:{click:t.showData}}),t._v(" "),t._l(2,function(e){return n("vue-ueditor-wrap",{key:e,ref:"ueditor",refInFor:!0,attrs:{destroy:!1,config:t.config,init:t.myInit},on:{ready:t.ready},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})})],2)},staticRenderFns:[]};var u=n("VU/8")(c,d,!1,function(t){n("R4Yp")},null,null).exports,l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("你瞅啥?")])},staticRenderFns:[]},f=n("VU/8")(null,l,!1,null,null,null).exports;i.a.use(s.a);var h=new s.a({routes:[{path:"*",redirect:"/Home"},{path:"/Home",component:u},{path:"/Empty",component:f}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:h,components:{App:r},template:"<App/>"})},OCtB:function(t,e){},R4Yp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.29ff3a803d036717ef12.js.map