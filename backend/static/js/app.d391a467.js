(function(t){function e(e){for(var n,i,l=e[0],s=e[1],c=e[2],u=0,f=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={app:0},o=[];function i(t){return l.p+"../static/js/"+({about:"about"}[t]||t)+"."+{about:"d5a6d653"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(t);var c=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},3629:function(t,e,r){t.exports=r.p+"../static/img/ghibli.ee6a6560.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("ce5b"),o=r.n(a),i=r("bc3a"),l=r.n(i),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"brown lighten-5"}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{attrs:{alt:"Ghibli Logo",contain:"",src:r("3629"),width:"140"}})],1),n("v-spacer"),n("v-btn",{attrs:{target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Films")])]),n("v-btn",{attrs:{target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("People")])])],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("Films")],1)],1),n("v-footer",{attrs:{app:""}})],1)},c=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{attrs:{dense:""}},t._l(t.films,(function(t,e){return r("v-col",{key:e,attrs:{cols:"3"}},[r("film-card",{attrs:{film:t}})],1)})),1)],1)},p=[],f=(r("4160"),r("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{"max-width":"374"}},[n("v-app-bar",{attrs:{flat:"",color:"primary"}},[n("v-toolbar-title",{staticClass:"title white--text pl-0"},[t._v(t._s(t.film.title))])],1),n("v-row",[n("v-col",[n("v-card-subtitle",[n("v-row",[n("v-col",[t._v(" "+t._s(t.film.release_date)+". "),n("v-avatar",{attrs:{size:"20"}},[n("v-img",{attrs:{src:r("a6b8")}})],1),n("strong",[t._v(" "+t._s(t.film.rt_score)+" %")])],1)],1),n("v-row",[n("v-col",[t._v(" Director: "),n("strong",[t._v(" "+t._s(t.film.director))])]),n("v-col",[t._v(" Producer: "),n("strong",[t._v(" "+t._s(t.film.producer))])])],1)],1),t.detailsShowed?n("v-card-text",[n("v-row",[n("v-col",[t._v(" "+t._s(t.film.description)+" ")])],1),n("v-row",[n("v-col",[n("span",[t._v(" People: "),n("strong",[t._v(t._s(t.peopleDetails))])])])],1)],1):t._e()],1)],1),n("v-row",[n("v-col",[n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return e.preventDefault(),t.showDetails()}}},[t._v(t._s(t.btnName))])],1)],1)],1)],1)}),d=[],m=(r("a15b"),r("d81d"),r("b0c0"),{name:"FilmCard",props:{film:{type:Object,required:!0}},data:function(){return{detailsShowed:!1,people:[]}},computed:{peopleDetails:function(){return this.people.map((function(t){return t.name})).join(", ")},btnName:function(){return!1===this.detailsShowed?"Show Details":"Hide Details"},scoreImage:function(){return parseInt(this.film.rt_score)>70?"fresh_tomato.svg":"rotten_tomato.svg"}},methods:{showDetails:function(){var t=this;!1===this.detailsShowed&&this.$http.get("http://127.0.0.1:5000/movies/api/people?film_id="+this.film.id).then((function(e){t.people=e.data})),this.detailsShowed=!this.detailsShowed}}}),v=m,h=r("2877"),b=r("6544"),_=r.n(b),g=r("40dc"),w=r("8212"),y=r("8336"),V=r("b0af"),x=r("99d9"),j=r("62ad"),C=r("adda"),O=r("0fd9"),S=r("2a7f"),P=Object(h["a"])(v,f,d,!1,null,null,null),k=P.exports;_()(P,{VAppBar:g["a"],VAvatar:w["a"],VBtn:y["a"],VCard:V["a"],VCardActions:x["a"],VCardSubtitle:x["b"],VCardText:x["c"],VCol:j["a"],VImg:C["a"],VRow:O["a"],VToolbarTitle:S["a"]});var F={name:"Films",components:{FilmCard:k},data:function(){return{films:[]}},mounted:function(){var t=this;this.$http.get("http://127.0.0.1:5000/movies/api/films").then((function(e){t.films=e.data,t.films.forEach((function(t){return t.people=[]}))}))},methods:{showPeople:function(t){var e=this,r=this.films[t].id;this.$http.get("http://127.0.0.1:5000/movies/api/people?film_id="+r).then((function(r){e.films[t].people=r.data,e.films[t].peopleShowed=!0}))}}},$=F,A=Object(h["a"])($,u,p,!1,null,"075791ed",null),D=A.exports;_()(A,{VCol:j["a"],VRow:O["a"]});var E={name:"App",components:{Films:D},data:function(){return{}}},T=E,M=r("7496"),B=r("a523"),I=r("553a"),H=r("f6c4"),L=r("2fa4"),q=Object(h["a"])(T,s,c,!1,null,null,null),J=q.exports;_()(q,{VApp:M["a"],VAppBar:g["a"],VBtn:y["a"],VContainer:B["a"],VFooter:I["a"],VImg:C["a"],VMain:H["a"],VSpacer:L["a"]});r("d3b7");var N=r("8c4f"),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Films")],1)},z=[],G={name:"Home",components:{Films:D}},K=G,Q=Object(h["a"])(K,R,z,!1,null,null,null),U=Q.exports;n["default"].use(N["a"]);var W=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],X=new N["a"]({routes:W}),Y=X,Z=(r("bf40"),r("f309"));n["default"].use(Z["a"]);var tt=new Z["a"]({});n["default"].config.productionTip=!1,n["default"].prototype.$http=l.a,n["default"].use(o.a),new n["default"]({router:Y,vuetify:tt,render:function(t){return t(J)}}).$mount("#app");e["default"]=new o.a({theme:{themes:{light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}})},a6b8:function(t,e,r){t.exports=r.p+"../static/img/rotten_tomato.149b5e8a.svg"}});
//# sourceMappingURL=app.d391a467.js.map