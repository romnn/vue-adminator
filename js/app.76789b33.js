(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({"404error":"404error","500error":"500error","basictables~datatables":"basictables~datatables",basictables:"basictables",datatables:"datatables",blank:"blank",calendar:"calendar","charts~dashboard":"charts~dashboard",charts:"charts",dashboard:"dashboard",chat:"chat",email:"email",emailcompose:"emailcompose",emaildefault:"emaildefault",forms:"forms",login:"login",openstreetmap:"openstreetmap",signup:"signup",ui:"ui"}[t]||t)+"."+{"404error":"8a9b4d72","500error":"e2d0124a","basictables~datatables":"db7104b2",basictables:"7b244c43",datatables:"2f993cda",blank:"b8a9bdf8",calendar:"10d3652e","charts~dashboard":"f1fc0d69",charts:"8d0ec77a",dashboard:"28429c87",chat:"33df8959",email:"36cc269c",emailcompose:"908c4486",emaildefault:"1d49e9ee",forms:"fd90f351",login:"07d5793d",openstreetmap:"317868b9",signup:"233a9901",ui:"d2378115"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"404error":1,"500error":1,"basictables~datatables":1,datatables:1,blank:1,calendar:1,"charts~dashboard":1,charts:1,dashboard:1,chat:1,email:1,emailcompose:1,emaildefault:1,forms:1,openstreetmap:1,ui:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({"404error":"404error","500error":"500error","basictables~datatables":"basictables~datatables",basictables:"basictables",datatables:"datatables",blank:"blank",calendar:"calendar","charts~dashboard":"charts~dashboard",charts:"charts",dashboard:"dashboard",chat:"chat",email:"email",emailcompose:"emailcompose",emaildefault:"emaildefault",forms:"forms",login:"login",openstreetmap:"openstreetmap",signup:"signup",ui:"ui"}[t]||t)+"."+{"404error":"835208a5","500error":"835208a5","basictables~datatables":"830fbad4",basictables:"31d6cfe0",datatables:"6efb32ba",blank:"7457fb2b",calendar:"ec39c04d","charts~dashboard":"235eb6ee",charts:"2cf9527b",dashboard:"6f2f019a",chat:"1b2cd41f",email:"a1f36622",emailcompose:"430334d6",emaildefault:"64842a49",forms:"7c95f941",login:"31d6cfe0",openstreetmap:"77df32ea",signup:"31d6cfe0",ui:"7c95f941"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],p.parentNode.removeChild(p),a(s)},p.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0354":function(t,e,a){},"0613":function(t,e,a){"use strict";var n=a("2b0e"),r=a("2f62");n["default"].use(r["a"]),e["a"]=new r["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"0908":function(t,e,a){"use strict";var n=a("d936"),r=a.n(n);r.a},"1e5c":function(t,e,a){},"1fdd":function(t,e,a){},2682:function(t,e,a){"use strict";var n=a("d90a"),r=a.n(n);r.a},"2dc1":function(t,e,a){},"31a8":function(t,e,a){},"34ed":function(t,e,a){"use strict";var n=a("2dc1"),r=a.n(n);r.a},3525:function(t,e,a){},"45c5":function(t,e,a){"use strict";var n=a("a9b1"),r=a.n(n);r.a},"4c45":function(t,e,a){"use strict";var n=a("31a8"),r=a.n(n);r.a},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"5d05":function(t,e,a){"use strict";var n=a("1e5c"),r=a.n(n);r.a},"5ee3":function(t,e,a){},"66c0":function(t,e,a){"use strict";var n=a("1fdd"),r=a.n(n);r.a},"6a2a":function(t,e,a){"use strict";var n=a("f7a3"),r=a.n(n);r.a},"85a1":function(t,e,a){},"85ee":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n="THEME"},8677:function(t,e,a){"use strict";var n=a("85a1"),r=a.n(n);r.a},"89ac":function(t,e,a){"use strict";var n=a("0354"),r=a.n(n);r.a},"9c0c":function(t,e,a){},"9d64":function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},a9b1:function(t,e,a){},ac1a:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));a("4160"),a("159b");var n=a("d4ec"),r=a("bee2"),o=a("262e"),s=a("2caf"),i=a("9ab4"),c=a("6fc5"),l=a("0613"),u=a("2b0e"),d=a("85ee"),p=function(t,e){return"theme-"+t[e]},b=function(t,e){u["default"].cookies.set(d["a"],t,{expires:1/0}),document.body.classList.forEach((function(t){document.body.classList.remove(t)})),document.body.classList.add(e)},f=function(t){Object(o["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.appName="Vue Adminator",t.isCollapsed=!1,t.isLoading=!1,t.availableThemes=["light","dark"],t.theme=0,t.themeClass=p(t.availableThemes,t.theme),t}return Object(r["a"])(a,[{key:"toggleCollapse",value:function(){this.isCollapsed=!this.isCollapsed}},{key:"setLoading",value:function(t){this.isLoading=t}},{key:"toggleTheme",value:function(){this.theme=(this.theme+1)%this.availableThemes.length,this.themeClass=p(this.availableThemes,this.theme),b(this.theme,this.themeClass)}},{key:"setTheme",value:function(t){t>=0&&this.availableThemes.length>t&&(this.theme=t,this.themeClass=p(this.availableThemes,t),b(this.theme,this.themeClass))}}]),a}(c["d"]);Object(i["a"])([c["c"]],f.prototype,"toggleCollapse",null),Object(i["a"])([c["c"]],f.prototype,"setLoading",null),Object(i["a"])([c["c"]],f.prototype,"toggleTheme",null),Object(i["a"])([c["c"]],f.prototype,"setTheme",null),f=Object(i["a"])([Object(c["b"])({dynamic:!0,store:l["a"],name:"app"})],f);var m=Object(c["e"])(f)},afbc:function(t,e,a){"use strict";a("d3b7");var n=a("2b0e"),r=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",class:{"is-collapsed":t.isCollapsed}},[a("sidebar-c",{attrs:{title:"Vue Adminator"}}),a("div",{staticClass:"page-container"},[a("navigation-bar-c"),a("main",{staticClass:"main-content"},[a("transition",{attrs:{id:"mainContent",name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("footer-c",[a("span",{attrs:{id:"footer"}},[t._v(" MIT © by "),a("a",{attrs:{href:"https://github.com/romnnn"}},[t._v("romnn")]),t._v(" based on "),a("a",{attrs:{href:"https://colorlib.com",title:"Colorlib"}},[t._v("Colorlib "),a("span",{staticClass:"icon icon-new-window"})])])])],1)],1)},s=[],i=a("d4ec"),c=a("bee2"),l=a("262e"),u=a("2caf"),d=a("9ab4"),p=a("60a3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar pB-40"},[n("div",{staticClass:"sidebar-inner"},[n("div",{staticClass:"sidebar-logo"},[n("div",{staticClass:"peers ai-c fxw-nw"},[n("div",{staticClass:"peer peer-greed"},[n("router-link",{staticClass:"sidebar-link td-n",attrs:{to:"/"}},[n("div",{staticClass:"peers ai-c fxw-nw"},[n("div",{staticClass:"peer"},[n("div",{staticClass:"logo"},[n("img",{staticClass:"centerX",attrs:{src:a("9d64"),alt:""}})])]),n("div",{staticClass:"peer peer-greed"},[n("h6",{staticClass:"lh-1 mB-0 logo-text"},[t._v(t._s(t.title))])])])])],1),n("div",{staticClass:"peer"},[n("div",{staticClass:"mobile-toggle sidebar-toggle"},[n("a",{staticClass:"td-n",on:{click:function(e){return e.preventDefault(),t.toggleSidebar(e)}}},[n("i",{staticClass:"icon-arrow-circle-left"})])])])])]),n("ul",{staticClass:"sidebar-menu pos-r"},[n("sidebar-element-c",{attrs:{title:"Dashboard",route:{name:"dashboard"}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-blue-500 icon-home"})]},proxy:!0}])}),n("sidebar-element-c",{attrs:{title:"Email",route:{name:"inbox"}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-brown-500 icon-email"})]},proxy:!0}])}),n("sidebar-element-c",{attrs:{title:"Compose",route:{name:"compose"}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-blue-500 icon-share"})]},proxy:!0}])}),n("sidebar-element-c",{attrs:{title:"Calendar",route:{name:"calendar"}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-deep-orange-500 icon-calendar"})]},proxy:!0}])}),n("sidebar-element-c",{attrs:{title:"Chat",route:{name:"chat"}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-deep-purple-500 icon-comment-alt"})]},proxy:!0}])}),n("sidebar-element-c",{attrs:{title:"Charts",route:{name:"charts"}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-indigo-500 icon-bar-chart"})]},proxy:!0}])}),n("sidebar-element-c",{attrs:{title:"Forms",route:{name:"forms"}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-light-blue-500 icon-pencil"})]},proxy:!0}])}),n("sidebar-element-c",{attrs:{title:"UI Elements",route:{name:"ui"}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-pink-500 icon-palette"})]},proxy:!0}])}),n("sidebar-dropdown-c",{attrs:{title:"Tables"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-pink-500 icon-palette"})]},proxy:!0},{key:"entries",fn:function(){return[n("sidebar-dropdown-element-c",{attrs:{title:"Basic Tables",route:{name:"basictables"}}}),n("sidebar-dropdown-element-c",{attrs:{title:"Data Tables",route:{name:"datatables"}}})]},proxy:!0}])}),n("sidebar-dropdown-c",{attrs:{title:"Maps"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-purple-500 icon-map"})]},proxy:!0},{key:"entries",fn:function(){return[n("sidebar-dropdown-element-c",{attrs:{title:"Open Street Map",route:{name:"openstreetmap"}}})]},proxy:!0}])}),n("sidebar-dropdown-c",{attrs:{title:"Pages"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-red-500 icon-files"})]},proxy:!0},{key:"entries",fn:function(){return[n("sidebar-dropdown-element-c",{attrs:{title:"Blank",route:{name:"blank"}}}),n("sidebar-dropdown-element-c",{attrs:{title:"404 Error",route:{name:"error404"}}}),n("sidebar-dropdown-element-c",{attrs:{title:"500 Error",route:{name:"error500"}}}),n("sidebar-dropdown-element-c",{attrs:{title:"Log In",route:{name:"login"}}}),n("sidebar-dropdown-element-c",{attrs:{title:"Sign Up",route:{name:"signup"}}})]},proxy:!0}])}),n("sidebar-dropdown-c",{attrs:{title:"Multiple Levels"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"c-teal-500 icon-view-list-alt"})]},proxy:!0},{key:"entries",fn:function(){return[n("sidebar-dropdown-element-c",{attrs:{title:"Menu Item",route:"#menu1"}}),n("sidebar-dropdown-c",{attrs:{title:"Menu Item"},scopedSlots:t._u([{key:"entries",fn:function(){return[n("sidebar-dropdown-element-c",{attrs:{title:"Menu Item",route:"#menu2"}}),n("sidebar-dropdown-element-c",{attrs:{title:"Menu Item",route:"#menu3"}})]},proxy:!0}])})]},proxy:!0}])})],1)])])},f=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"sidebar-link",class:{active:t.active},attrs:{to:t.route}},[a("span",{staticClass:"dot-holder"}),a("span",{staticClass:"icon-holder"},[t._t("icon")],2),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])],1)},h=[],v=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);Object(d["a"])([Object(p["c"])({default:"Sidebar Element"})],v.prototype,"title",void 0),Object(d["a"])([Object(p["c"])({default:"/"})],v.prototype,"route",void 0),Object(d["a"])([Object(p["c"])({default:!1})],v.prototype,"active",void 0),v=Object(d["a"])([Object(p["a"])({name:"SidebarElementC",components:{}})],v);var g=v,j=g,O=(a("f91e"),a("2877")),y=Object(O["a"])(j,m,h,!1,null,"6c7894e4",null),C=y.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"dropdown-toggle",attrs:{for:t.uuid,"data-toggle":"collapse",href:"#"+t.uuid,"aria-expanded":"true","aria-controls":t.uuid},on:{click:function(e){t.open=!t.open}}},[a("span",{staticClass:"icon-holder"},[t._t("icon")],2),a("span",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._m(0)]),a("div",{staticClass:"collapse",attrs:{id:t.uuid}},[a("ul",{staticClass:"dropdown-menu"},[t._t("entries")],2)])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"arrow"},[a("i",{staticClass:"icon-angle-right"})])}],_=(a("ac1f"),a("5319"),function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.open=!1,t}return Object(c["a"])(a,[{key:"uuid",get:function(){return this.title.replace(/\s+/g,"")}}]),a}(p["d"]));Object(d["a"])([Object(p["c"])({default:"Sidebar Dropdown Element"})],_.prototype,"title",void 0),Object(d["a"])([Object(p["c"])({default:!1})],_.prototype,"active",void 0),_=Object(d["a"])([Object(p["a"])({name:"SidebarDropdownC",components:{}})],_);var x=_,E=x,A=(a("45c5"),Object(O["a"])(E,w,k,!1,null,"c9105e3a",null)),S=A.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("router-link",{staticClass:"sidebar-link",class:{active:t.active},attrs:{to:t.route}},[a("span",{staticClass:"dot-holder"}),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])],1)},D=[],I=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);Object(d["a"])([Object(p["c"])({default:"Sidebar Dropdown Element"})],I.prototype,"title",void 0),Object(d["a"])([Object(p["c"])({default:"/"})],I.prototype,"route",void 0),Object(d["a"])([Object(p["c"])({default:!1})],I.prototype,"active",void 0),I=Object(d["a"])([Object(p["a"])({name:"SidebarDropdownElementC",components:{}})],I);var N=I,P=N,$=(a("e77c"),Object(O["a"])(P,T,D,!1,null,"0a90b9cc",null)),q=$.exports,B=a("ac1a"),L=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"toggleSidebar",value:function(){B["a"].toggleCollapse()}}]),a}(p["d"]);Object(d["a"])([Object(p["c"])({default:"Vue Adminator"})],L.prototype,"title",void 0),Object(d["a"])([Object(p["c"])({default:"@/assets/images/logo.png"})],L.prototype,"logo",void 0),L=Object(d["a"])([Object(p["a"])({name:"SidebarC",components:{SidebarElementC:C,SidebarDropdownC:S,SidebarDropdownElementC:q}})],L);var R=L,z=R,M=(a("d1d9"),Object(O["a"])(z,b,f,!1,null,null,null)),H=M.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"ta-c lh-0 fsz-sm"},[a("span",[t._t("default")],2)])},U=[],V=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);V=Object(d["a"])([Object(p["a"])({name:"FooterC",components:{}})],V);var X=V,Y=X,J=(a("5d05"),Object(O["a"])(Y,F,U,!1,null,"3fd02bd8",null)),K=J.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header navbar"},[a("div",{staticClass:"header-container"},[a("ul",{staticClass:"nav-left"},[a("li",[a("a",{staticClass:"sidebar-toggle",attrs:{id:"sidebar-toggle"},on:{click:function(e){return e.preventDefault(),t.toggleSidebar(e)}}},[a("i",{staticClass:"icon-menu"})])]),t._e(),a("li",{staticClass:"search-input",class:{active:t.searchToggled}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"searchInput",staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),a("ul",{staticClass:"nav-right"},[a("account-dropdown-c",{attrs:{username:"Admin",picture:"https://randomuser.me/api/portraits/lego/5.jpg"}}),a("notification-dropdown-c",{attrs:{title:"Notifications",number:2,more:"notifications"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("i",{staticClass:"icon-bell"})]},proxy:!0},{key:"entries",fn:function(){return[a("notification-dropdown-element-c",{attrs:{headline:"A new user signed up for the platform","sub-headline":"13 mins ago"}}),a("notification-dropdown-element-c",{attrs:{headline:"ERRID 777 arrived 10 minutes later than predicted in Berlin - Hauptbahnhof","sub-headline":"20 mins ago"}})]},proxy:!0}])}),a("li",[a("a",{staticClass:"btn",attrs:{title:"Change theme",id:"themeToggleBtn"},on:{click:t.toggleTheme}},[a("span",{staticClass:"icon icon-palette"})])])],1)])])},Q=[],W=(a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"notifications dropdown"},[a("a",{attrs:{"data-toggle":"dropdown"}},[a("span",{staticClass:"counter"},[t._v(t._s(t.number))]),a("a",{staticClass:"dropdown-toggle no-after"},[t._t("icon")],2)]),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"pX-20 bdB"},[a("i",{staticClass:"icon-bell pR-10"}),a("span",{staticClass:"fsz-sm fw-600"},[t._v(t._s(t.title))])]),a("li",[a("ul",{staticClass:"pos-r scrollable lis-n p-0 m-0 fsz-sm"},[t._t("entries")],2)]),t.more?a("li",{staticClass:"pX-20 ta-c bdT"},[a("span",[a("a",{staticClass:"cH-blue fsz-sm td-n"},[t._v(" View all "+t._s(t.title)+" "),a("i",{staticClass:"icon-angle-right fsz-xs mL-10"})])])]):t._e()])])}),Z=[],tt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.open=!1,t}return Object(c["a"])(a,[{key:"uuid",get:function(){return this.title.replace(/\s+/g,"")}}]),a}(p["d"]);Object(d["a"])([Object(p["c"])({default:"Notification Dropdown"})],tt.prototype,"title",void 0),Object(d["a"])([Object(p["c"])()],tt.prototype,"more",void 0),Object(d["a"])([Object(p["c"])({default:0})],tt.prototype,"number",void 0),tt=Object(d["a"])([Object(p["a"])({name:"NotificationDropdownC",components:{}})],tt);var et=tt,at=et,nt=(a("34ed"),Object(O["a"])(at,W,Z,!1,null,"34d5f337",null)),rt=nt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("navigation-bar-dropdown-element-c",{scopedSlots:t._u([{key:"icon",fn:function(){return[a("img",{staticClass:"w-3r bdrs-50p",attrs:{src:t.image}})]},proxy:!0},{key:"content",fn:function(){return[a("span",[a("router-link",{staticClass:"fw-500",attrs:{to:""}},[t._v(" "+t._s(t.headline)+" ")])],1),a("p",{staticClass:"m-0"},[a("small",{staticClass:"fsz-xs"},[t._v(t._s(t.subHeadline))])])]},proxy:!0}])})},st=[],it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"peers fxw-nw td-n p-5 bdB cH-blue"},[a("div",{staticClass:"peer mR-15"},[t._t("icon")],2),a("div",{staticClass:"peer peer-greed"},[t._t("content")],2)])])},ct=[],lt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);lt=Object(d["a"])([Object(p["a"])({name:"NavigationBarDropdownElementC",components:{}})],lt);var ut=lt,dt=ut,pt=(a("0908"),Object(O["a"])(dt,it,ct,!1,null,"b1da5f5e",null)),bt=pt.exports,ft=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);Object(d["a"])([Object(p["c"])({default:"../../assets/images/logo.png"})],ft.prototype,"image",void 0),Object(d["a"])([Object(p["c"])({default:"This is a notification headline!"})],ft.prototype,"headline",void 0),Object(d["a"])([Object(p["c"])({default:"This is a notification sub-headline!"})],ft.prototype,"subHeadline",void 0),ft=Object(d["a"])([Object(p["a"])({name:"NotificationDropdownElementC",components:{NavigationBarDropdownElementC:bt}})],ft);var mt=ft,ht=mt,vt=(a("ccc6"),Object(O["a"])(ht,ot,st,!1,null,"88a34724",null)),gt=vt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("navigation-bar-dropdown-element-c",{scopedSlots:t._u([{key:"icon",fn:function(){return[a("img",{staticClass:"w-3r bdrs-50p",attrs:{src:t.image}})]},proxy:!0},{key:"content",fn:function(){return[a("div",[a("div",{staticClass:"peers jc-sb fxw-nw mB-5"},[a("router-link",{staticClass:"peers jc-sb fxw-nw mB-5",attrs:{to:""}},[a("p",{staticClass:"fw-500 mB-0"},[t._v(t._s(t.headline))])]),a("div",{staticClass:"peer"},[a("small",{staticClass:"fsz-xs"},[t._v(t._s(t.status))])])],1),a("span",{staticClass:"fsz-sm"},[t._v(" "+t._s(t.subHeadline)+" ")])])]},proxy:!0}])})},Ot=[],yt=a("cdd0"),Ct=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.open=!1,t}return Object(c["a"])(a,[{key:"logout",value:function(){yt["a"].logout()}}]),a}(p["d"]);Object(d["a"])([Object(p["c"])({default:"../../assets/images/logo.png"})],Ct.prototype,"image",void 0),Object(d["a"])([Object(p["c"])({default:"This is an email status"})],Ct.prototype,"status",void 0),Object(d["a"])([Object(p["c"])({default:"This is an email headline"})],Ct.prototype,"headline",void 0),Object(d["a"])([Object(p["c"])({default:"This is an email sub-headline"})],Ct.prototype,"subHeadline",void 0),Ct=Object(d["a"])([Object(p["a"])({name:"EmailDropdownElementC",components:{NavigationBarDropdownElementC:bt}})],Ct);var wt=Ct,kt=wt,_t=(a("89ac"),Object(O["a"])(kt,jt,Ot,!1,null,"cc3057a2",null)),xt=_t.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"dropdown"},[a("a",{staticClass:"dropdown-toggle no-after peers fxw-nw ai-c",attrs:{"data-toggle":"dropdown"}},[t._m(0),a("div",{staticClass:"peer user-email-container"},[a("span",{staticClass:"fsz-sm"},[t._v(t._s(t.email))])])]),a("ul",{staticClass:"dropdown-menu fsz-sm"},[a("account-dropdown-element-c",{attrs:{title:"Profile"}},[a("i",{staticClass:"icon-user mR-10"})]),a("account-dropdown-element-c",{attrs:{title:"Settings"}},[a("i",{staticClass:"icon-settings mR-10"})]),a("account-dropdown-element-c",{attrs:{title:"Notifications"}},[a("i",{staticClass:"icon-email mR-10"})]),a("li",{staticClass:"divider",attrs:{role:"separator"}}),a("div",{on:{click:function(e){return e.preventDefault(),t.logout()}}},[a("account-dropdown-element-c",{attrs:{title:"Logout"}},[a("i",{staticClass:"icon-power-off mR-10"})])],1)],1)])},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"peer mR-10 user-icon-container"},[a("i",{staticClass:"icon-user mR-10"})])}],St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("router-link",{staticClass:"d-b td-n",attrs:{to:t.route}},[t._t("default"),a("span",[t._v(t._s(t.title))])],2)],1)},Tt=[],Dt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);Object(d["a"])([Object(p["c"])({default:"/"})],Dt.prototype,"route",void 0),Object(d["a"])([Object(p["c"])({default:"I provide account details"})],Dt.prototype,"title",void 0),Dt=Object(d["a"])([Object(p["a"])({name:"AccountDropdownElementC",components:{}})],Dt);var It=Dt,Nt=It,Pt=(a("2682"),Object(O["a"])(Nt,St,Tt,!1,null,"36bf6de3",null)),$t=Pt.exports,qt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.open=!1,t}return Object(c["a"])(a,[{key:"logout",value:function(){yt["a"].logout()}}]),a}(p["d"]);Object(d["a"])([Object(p["c"])({default:"Account Dropdown"})],qt.prototype,"username",void 0),Object(d["a"])([Object(p["c"])()],qt.prototype,"email",void 0),Object(d["a"])([Object(p["c"])()],qt.prototype,"picture",void 0),qt=Object(d["a"])([Object(p["a"])({name:"AccountDropdownC",components:{AccountDropdownElementC:$t}})],qt);var Bt=qt,Lt=Bt,Rt=(a("6a2a"),Object(O["a"])(Lt,Et,At,!1,null,"0fd58490",null)),zt=Rt.exports,Mt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.searchToggled=!1,t.search=null,t}return Object(c["a"])(a,[{key:"toggleTheme",value:function(){B["a"].toggleTheme()}},{key:"toggleSearch",value:function(){var t=this;this.searchToggled=!this.searchToggled,window.setTimeout((function(){t.$refs["searchInput"].focus()}),0)}},{key:"toggleSidebar",value:function(){var t=this;B["a"].toggleCollapse(),this.$redrawVueMasonry(),setTimeout((function(){t.$redrawVueMasonry()}),100)}}]),a}(p["d"]);Mt=Object(d["a"])([Object(p["a"])({name:"NavigationBarC",components:{NotificationDropdownC:rt,NotificationDropdownElementC:gt,EmailDropdownElementC:xt,AccountDropdownC:zt}})],Mt);var Ht=Mt,Ft=Ht,Ut=(a("8677"),Object(O["a"])(Ft,G,Q,!1,null,"4ca92a0a",null)),Vt=Ut.exports,Xt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"isCollapsed",get:function(){return B["a"].isCollapsed}}]),a}(p["d"]);Xt=Object(d["a"])([Object(p["a"])({name:"Adminator",components:{SidebarC:H,FooterC:K,NavigationBarC:Vt}})],Xt);var Yt=Xt,Jt=Yt,Kt=(a("c8b3"),Object(O["a"])(Jt,o,s,!1,null,"52b09b2d",null)),Gt=Kt.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pos-a w-100 h-100 d-f ai-c jc-c",attrs:{id:"error-container"}},[a("div",{staticClass:"d-f",attrs:{id:"error-view"}},[a("router-view",{staticClass:"d-f",attrs:{id:"concrete-error-view"}}),a("div",{attrs:{id:"global-error-view"}},[a("p",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/",type:"primary"}},[t._v(" Take me home ")])],1)])],1)])},Wt=[],Zt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);Zt=Object(d["a"])([Object(p["a"])({name:"Error",components:{}})],Zt);var te=Zt,ee=te,ae=(a("66c0"),Object(O["a"])(ee,Qt,Wt,!1,null,null,null)),ne=ae.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"peers ai-s fxw-nw h-100vh"},[n("div",{staticClass:"landing-cover d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv"},[n("div",{staticClass:"pos-a centerXY"},[n("div",{staticClass:"landing-logo pos-r"},[n("img",{staticClass:"pos-r",attrs:{src:a("9d64"),alt:""}}),n("p",[n("router-link",{staticClass:"landing-name pos-r",attrs:{to:"/"}},[t._v(t._s(t.appName))])],1)])])]),n("div",{staticClass:"landing-content col-12 col-md-4 peer pX-40 pY-80 h-100 scrollable pos-r"},[n("router-view")],1)])},oe=[],se=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"appName",get:function(){return B["a"].appName}}]),a}(p["d"]);se=Object(d["a"])([Object(p["a"])({name:"Landing",components:{}})],se);var ie=se,ce=ie,le=(a("4c45"),Object(O["a"])(ce,re,oe,!1,null,"172ee536",null)),ue=le.exports;n["default"].use(r["a"]);var de=function(){return!0},pe=function(t,e,a){de()?a({name:"dashboard"}):a()},be=function(t,e,a){de()?a():a({name:"login"})},fe=[{path:"/",beforeEnter:be,meta:{requiresAuth:!0},redirect:"/dashboard"},{path:"/(login|signup)",redirect:"/dashboard",component:ue,children:[{path:"/login",name:"login",beforeEnter:pe,component:function(){return a.e("login").then(a.bind(null,"a55b"))}},{path:"/signup",name:"signup",component:function(){return a.e("signup").then(a.bind(null,"34c3"))}}]},{path:"/dashboard",redirect:"/dashboard/start",meta:{requiresAuth:!0},beforeEnter:be,component:Gt,children:[{path:"start",name:"dashboard",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return Promise.all([a.e("charts~dashboard"),a.e("dashboard")]).then(a.bind(null,"7277"))}},{path:"email",meta:{requiresAuth:!0},redirect:{name:"inboxes",params:{inbox:"inbox"}},beforeEnter:be,component:function(){return a.e("email").then(a.bind(null,"4fdd"))},children:[{path:"inbox",name:"inbox",meta:{requiresAuth:!0},beforeEnter:be,redirect:{name:"inboxes",params:{inbox:"inbox"}}},{path:":inbox(inbox|sent|important|drafts|spam|trash)",name:"inboxes",props:!0,meta:{requiresAuth:!0},beforeEnter:be,component:function(){return a.e("emaildefault").then(a.bind(null,"228a"))}},{path:"compose",name:"compose",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return a.e("emailcompose").then(a.bind(null,"1389"))}}]},{path:"calendar",name:"calendar",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return a.e("calendar").then(a.bind(null,"ac0f"))}},{path:"chat",name:"chat",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return a.e("chat").then(a.bind(null,"293a"))}},{path:"charts",name:"charts",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return Promise.all([a.e("charts~dashboard"),a.e("charts")]).then(a.bind(null,"6923"))}},{path:"forms",name:"forms",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return a.e("forms").then(a.bind(null,"0894"))}},{path:"ui",name:"ui",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return a.e("ui").then(a.bind(null,"021c"))}},{path:"blank",name:"blank",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return a.e("blank").then(a.bind(null,"9de2"))}},{path:"tables/basictables",name:"basictables",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return Promise.all([a.e("basictables~datatables"),a.e("basictables")]).then(a.bind(null,"78e8"))}},{path:"tables/datatables",name:"datatables",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return Promise.all([a.e("basictables~datatables"),a.e("datatables")]).then(a.bind(null,"d976"))}},{path:"maps/openstreetmap",name:"openstreetmap",meta:{requiresAuth:!0},beforeEnter:be,component:function(){return a.e("openstreetmap").then(a.bind(null,"4dc2"))}}]},{path:"/error",redirect:"/error/404",component:ne,children:[{path:"404",name:"error404",component:function(){return a.e("404error").then(a.bind(null,"8cdb"))}},{path:"500",name:"error500",component:function(){return a.e("500error").then(a.bind(null,"3d1f"))}}]},{path:"*",redirect:{name:"error404"}}],me=new r["a"]({mode:"history",base:"",routes:fe});e["a"]=me},b184:function(t,e,a){"use strict";var n=a("fca8"),r=a.n(n);r.a},c8b3:function(t,e,a){"use strict";var n=a("f310"),r=a.n(n);r.a},ccc6:function(t,e,a){"use strict";var n=a("5ee3"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nprogress-container"),a("router-view")],1)},o=[],s=(a("d3b7"),a("25f0"),a("d4ec")),i=a("bee2"),c=a("262e"),l=a("2caf"),u=a("9ab4"),d=a("60a3"),p=a("4d37"),b=a("85ee"),f=a("ac1a"),m=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"mounted",value:function(){var t,e=parseInt((null!==(t=this.$cookies.get(b["a"]))&&void 0!==t?t:"").toString());isNaN(e)||f["a"].setTheme(e)}}]),a}(d["d"]);m=Object(u["a"])([Object(d["a"])({name:"App",components:{NprogressContainer:p["a"]}})],m);var h=m,v=h,g=(a("5c0b"),a("b184"),a("2877")),j=Object(g["a"])(v,r,o,!1,null,null,null),O=j.exports,y=a("afbc"),C=a("0613"),w=a("5f5b"),k=a("5637"),_=a.n(k),x=a("5385"),E=a("da19"),A=a("bc3a"),S=a.n(A),T=a("a7fe"),D=a.n(T),I=a("3f9b");n["default"].config.productionTip=!1,n["default"].use(E["a"]),n["default"].use(I["a"]),n["default"].use(D.a,S.a),n["default"].use(x["a"]),n["default"].use(w["a"]);var N={showSpinner:!1,latencyThreshold:70,router:!0,http:!0,parent:".nprogress-container"};n["default"].use(_.a,N);var P=new _.a(N),$=localStorage.getItem("user-token");$&&(n["default"].axios.defaults.headers.common["Authorization"]=$),n["default"].axios.defaults.headers.common["Accept"]="application/json",new n["default"]({nprogress:P,router:y["a"],axios:S.a,store:C["a"],render:function(t){return t(O)}}).$mount("#app")},cdd0:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));a("d3b7"),a("96cf");var n,r=a("1da1"),o=a("d4ec"),s=a("bee2"),i=a("262e"),c=a("2caf"),l=a("9ab4"),u=a("6fc5"),d=a("0613"),p=a("afbc"),b=a("2b0e");(function(t){t[t["Loading"]=0]="Loading",t[t["Failed"]=1]="Failed",t[t["Authenticated"]=2]="Authenticated"})(n||(n={}));var f=function(t){Object(i["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.authenticationAPI="http://192.168.1.7:5000/api/admin/v1/auth/login",t.signupAPI="http://192.168.1.7:5000/api/admin/v1/auth/signup",t.appAllowsRegister=!1,t.authToken="",t.userID=null,t.authState=null,t}return Object(s["a"])(a,[{key:"setAuthState",value:function(t){this.authState=t}},{key:"setAuthToken",value:function(t){this.authToken=t}},{key:"setUserID",value:function(t){this.userID=t}},{key:"authRequest",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){a.setAuthState(n.Loading),b["default"].axios.post(a.authenticationAPI,e).then((function(e){var r,o=e.data.token,s=e.data.userID;a.setAuthToken(o),a.setUserID(null!==(r=null===s||void 0===s?void 0:s.getId())&&void 0!==r?r:""),a.setAuthState(n.Authenticated),b["default"].cookies.set("user-token",o,{expires:e.data.expiration}),b["default"].cookies.set("user-id",s,{expires:e.data.expiration}),b["default"].axios.defaults.headers.common["Authorization"]=o,t(e.data)}),(function(t){a.setAuthState(n.Failed),b["default"].cookies.remove("user-token"),r(t)}))})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"checkToken",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){var n={token:e.authToken};b["default"].axios.post(e.authenticationAPI,n).then((function(){return t(!0)}),(function(){e.logout(),p["a"].push("/").catch((function(){})),a(!1)}))})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"logout",value:function(){b["default"].cookies.remove("user-token"),b["default"].cookies.remove("user-id"),delete b["default"].axios.defaults.headers.common["Authorization"],this.setAuthToken(""),this.setUserID(null),this.setAuthState(null),p["a"].push({name:"login"}).catch((function(){}))}},{key:"isAuthenticated",get:function(){return!!this.authToken}},{key:"authHeader",get:function(){return{Authorization:"Bearer ".concat(this.authToken)}}}]),a}(u["d"]);Object(l["a"])([u["c"]],f.prototype,"setAuthState",null),Object(l["a"])([u["c"]],f.prototype,"setAuthToken",null),Object(l["a"])([u["c"]],f.prototype,"setUserID",null),Object(l["a"])([Object(u["a"])({rawError:!0})],f.prototype,"authRequest",null),Object(l["a"])([Object(u["a"])({rawError:!0})],f.prototype,"checkToken",null),Object(l["a"])([Object(u["a"])({rawError:!0})],f.prototype,"logout",null),f=Object(l["a"])([Object(u["b"])({dynamic:!0,store:d["a"],name:"auth"})],f);var m=Object(u["e"])(f)},d1d9:function(t,e,a){"use strict";var n=a("3525"),r=a.n(n);r.a},d90a:function(t,e,a){},d936:function(t,e,a){},db5e:function(t,e,a){},e115:function(t,e,a){},e77c:function(t,e,a){"use strict";var n=a("e115"),r=a.n(n);r.a},f310:function(t,e,a){},f7a3:function(t,e,a){},f91e:function(t,e,a){"use strict";var n=a("db5e"),r=a.n(n);r.a},fca8:function(t,e,a){}});
//# sourceMappingURL=app.76789b33.js.map