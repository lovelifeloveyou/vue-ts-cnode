(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1c4d"],{"7c9d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"panel"},[r("div",{staticClass:"header"},[r("ul",{staticClass:"breadcrumb"},[r("li",[r("router-link",{attrs:{to:"/home"}},[e._v("主页")]),r("span",{staticClass:"divider"},[e._v("/")])],1),r("li",{staticClass:"active"},[e._v("关于")])])]),e._m(0)])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inner topic"},[r("div",{staticClass:"topic_content"},[r("div",{staticClass:"markdown-text"},[r("h3",[e._v("关于")]),r("p",[e._v("CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。")]),r("p",[e._v("CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。")]),r("p",[e._v("CNode 的 SLA 保证是，一个9，即 90.000000%。")]),r("p",[e._v("社区目前由 "),r("a",{attrs:{href:"http://cnodejs.org/user/alsotang",target:"_blank",rel:"noopener noreferrer"}},[e._v("@alsotang")]),e._v(" 在维护，有问题请联系："),r("a",{attrs:{href:"https://github.com/alsotang",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/alsotang")])]),r("p",[e._v("请关注我们的官方微博："),r("a",{attrs:{href:"http://weibo.com/cnodejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://weibo.com/cnodejs")])]),r("h3",[e._v("移动客户端")]),r("p",[e._v("客户端由 "),r("a",{attrs:{href:"https://cnodejs.org/user/soliury",target:"_blank",rel:"noopener noreferrer"}},[e._v("@soliury")]),e._v(" 开发维护。")]),r("p",[e._v("源码地址： "),r("a",{attrs:{href:"https://github.com/soliury/noder-react-native",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/soliury/noder-react-native")]),e._v(" 。")]),r("p",[e._v("立即体验 CNode 客户端，直接扫描页面右侧二维码。")]),r("p",[e._v("另，安卓用户同时可选择："),r("a",{attrs:{href:"https://github.com/TakWolf/CNode-Material-Design",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/TakWolf/CNode-Material-Design")]),e._v(" ，这是 Java 原生开发的安卓客户端。")])]),r("div",{staticClass:"about-friend-links"},[r("h3",[e._v("友情链接")]),r("a",{attrs:{href:"https://www.huoban.com/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"//dn-cnode.qbox.me/Ftmw28ed0I_rir7YYz3c_jVPkCGx",alt:""}})]),r("a",{attrs:{href:"http://100offer.com/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"//dn-cnode.qbox.me/FmU1Ik57z6wrl9JDTNdcYBTDetFq",alt:""}})]),r("a",{attrs:{href:"https://www.teambition.com/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"//dn-cnode.qbox.me/FkMR_SqpCp4Q0eDIaWrQlALiXdmP",alt:""}})]),r("a",{attrs:{href:"http://yunzhihui.com/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"//dn-cnode.qbox.me/Fq2cV_14IFHwelZ-6jey42Z0-eOR",alt:""}})]),r("a",{attrs:{href:"http://www.jiguang.cn/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"//dn-cnode.qbox.me/FijGJbij9GObh5AXw-Vyu5LGn08a",alt:""}})]),r("a",{attrs:{href:"http://segmentfault.com/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"//o4j806krb.qnssl.com/public/images/temp/sf.png",alt:""}})]),r("a",{attrs:{href:"http://ionichina.com/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"//o4j806krb.qnssl.com/public/images/temp/ionichina.png",alt:""}})])]),r("div",{},[r("h3",[e._v("LOGO")]),r("p",[e._v(" 白底： "),r("a",{attrs:{href:"https://cnodejs.org/public/images/cnodejs.svg",target:"_blank",rel:"noopener noreferrer"}},[e._v("/public/images/cnodejs.svg")])]),r("p",[e._v(" 黑底： "),r("a",{attrs:{href:"https://cnodejs.org/public/images/cnodejs_light.svg",target:"_blank",rel:"noopener noreferrer"}},[e._v("/public/images/cnodejs_light.svg")])])])])])}],o=(r("b449"),r("5d83")),s=r("3231"),i=r("064d"),c=r("46d7"),l=r("631e"),p=r("bc7f"),h=r("0261"),d=r("2a89"),g=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return Object(i["a"])(r,[{key:"created",value:function(){this.changeSider()}},{key:"changeSider",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("accesstoken"),e.next=3,this.$store.dispatch("accesstoken",{accesstoken:t});case 3:r=this.$store.state.app.accessInfo,a=!!r.success,this.$store.dispatch("authorOrNot",{showInfo:a,isAuthor:!1}),r&&""!==r.loginname&&r.loginname&&this.$store.dispatch("getInfo",{username:r.loginname});case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(h["default"]);g=Object(p["a"])([Object(d["a"])({})],g);var u=g,_=u,v=r("4023"),b=Object(v["a"])(_,a,n,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0e1c4d.484cd81a.js.map