(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-04adae30":"384def30","chunk-274dbb54":"984f4fe3","chunk-5f4ad635":"4d32dd33","chunk-c420df12":"4b0ddb43","chunk-d1e02790":"6c0cca9d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-274dbb54":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-04adae30":"31d6cfe0","chunk-274dbb54":"5c3e7589","chunk-5f4ad635":"31d6cfe0","chunk-c420df12":"31d6cfe0","chunk-d1e02790":"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mt-5",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[e.existUser?n("router-link",{staticClass:"btn btn-primary mx-2",attrs:{to:{name:"home"}}},[e._v("\n      Home\n    ")]):e._e(),e.existUser?e._e():n("router-link",{staticClass:"btn btn-primary mx-2",attrs:{to:{name:"register"}}},[e._v("Register")]),e.existUser?e._e():n("router-link",{staticClass:"btn btn-primary mx-2",attrs:{to:{name:"login"}}},[e._v("Login")]),e.existUser?n("a",{staticClass:"btn btn-danger mx-2",on:{click:e.logout}},[e._v("Sign Out")]):e._e()],1),n("router-view")],1)},o=[],i=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={name:"App",methods:c({},Object(i["b"])(["logout"])),computed:c({},Object(i["c"])(["existUser"]))},d=l,f=(n("034f"),n("2877")),m=Object(f["a"])(d,a,o,!1,null,null,null),p=m.exports,h=n("8c4f"),b=n("59ca");r["default"].use(h["a"]);var v=[{path:"/register",name:"register",component:function(){return n.e("chunk-c420df12").then(n.bind(null,"73cf"))}},{path:"/",name:"home",component:function(){return n.e("chunk-274dbb54").then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(){return n.e("chunk-5f4ad635").then(n.bind(null,"a55b"))}},{path:"/add",name:"add",component:function(){return n.e("chunk-04adae30").then(n.bind(null,"7e55"))},meta:{requiresAuth:!0}},{path:"/update/:id",name:"update",component:function(){return n.e("chunk-d1e02790").then(n.bind(null,"2e8c"))},meta:{requiresAuth:!0}}],g=new h["a"]({mode:"history",base:"/",routes:v});g.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth})),a=b.auth().currentUser;r&&null===a?n({name:"login"}):n()}));var y=g,k=n("59ca");r["default"].use(i["a"]);var O=new i["a"].Store({state:{user:"",error:"",tasks:[],task:{name:"",id:""},load:!1,text:""},mutations:{setUser:function(e,t){e.user=t},setError:function(e,t){e.error=t},setTasks:function(e,t){e.tasks=t},setTask:function(e,t){e.task=t},deleteTask:function(e,t){e.tasks=e.tasks.filter((function(e){return e.id!=t}))},loadFirebase:function(e,t){e.load=t}},actions:{search:function(e,t){e.commit;var n=e.state;console.log(t),n.text=t.toLowerCase()},createUser:function(e,t){var n=e.commit;n("loadFirebase",!0),k.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(e){n("setUser",{email:e.user.email,uid:e.user.uid}),E.collection(e.user.email).add({name:"Task example"}).then((function(){y.push({name:"home"}),n("loadFirebase",!1)}))})).catch((function(e){n("setError",e.code)}))},loginUser:function(e,t){var n=e.commit;n("loadFirebase",!0),k.auth().signInWithEmailAndPassword(t.email,t.password).then((function(e){n("setUser",{email:e.user.email,uid:e.user.uid}),y.push({name:"home"}),n("loadFirebase",!1)})).catch((function(e){n("setError",e.code)}))},detectUser:function(e,t){var n=e.commit;n("setUser",null!=t?{email:t.email,uid:t.uid}:null)},logout:function(e){var t=e.commit;k.auth().signOut(),t("setUser",null),y.push({name:"login"})},getTasks:function(e){var t=e.commit;t("loadFirebase",!0);var n=k.auth().currentUser,r=[];E.collection(n.email).get().then((function(e){e.forEach((function(e){var t=e.data();t.id=e.id,r.push(t)})),t("loadFirebase",!1)})),t("setTasks",r)},getTask:function(e,t){var n=e.commit,r=k.auth().currentUser;E.collection(r.email).doc(t).get().then((function(e){var t=e.data();t.id=e.id,n("setTask",t)}))},updateTask:function(e,t){var n=e.commit;n("loadFirebase",!0);var r=k.auth().currentUser;E.collection(r.email).doc(t.id).update({name:t.name}).then((function(){y.push({name:"home"}),n("loadFirebase",!1)}))},addTask:function(e,t){var n=e.commit;n("loadFirebase",!0);var r=k.auth().currentUser;E.collection(r.email).add({name:t}).then((function(e){y.push({name:"home"}),n("loadFirebase",!1)}))},deleteTask:function(e,t){var n=e.commit,r=k.auth().currentUser;E.collection(r.email).doc(t).delete().then((function(){n("deleteTask",t)}))}},getters:{existUser:function(e){return null!==e.user&&""!==e.user&&void 0!==e.user},filteredArray:function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,i=e.tasks[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var u=o.value,c=u.name.toLowerCase();c.indexOf(e.text)>=0&&t.push(u)}}catch(s){r=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return t}}}),w=n("5f5b"),j=(n("f9e3"),n("2dd8"),n("1dce")),x=n.n(j);r["default"].use(w["a"]),r["default"].use(x.a);var U=n("59ca");n("ea7b"),n("e71f");var P={apiKey:"AIzaSyAseMe72xm1BI7ICtpCfkwpfy9DOmGlvcs",authDomain:"fir-crud-6b5ee.firebaseapp.com",databaseURL:"https://fir-crud-6b5ee.firebaseio.com",projectId:"fir-crud-6b5ee",storageBucket:"fir-crud-6b5ee.appspot.com",messagingSenderId:"1065038021",appId:"1:1065038021:web:75cfd7b38bef850b3e00ac"},T=U.initializeApp(P);T.firestore().settings({});var E=t["default"]=T.firestore();r["default"].config.productionTip=!1,U.auth().onAuthStateChanged((function(e){console.log(e),e?O.dispatch("detectUser",{email:e.email,uid:e.uid}):O.dispatch("detectUser",null),new r["default"]({router:y,store:O,render:function(e){return e(p)}}).$mount("#app")}))},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.73dfbe49.js.map