(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,a){t.exports=a("56d7")},3629:function(t,e,a){t.exports=a.p+"../static/img/ghibli.ee6a6560.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=a("ce5b"),s=a.n(o),n=a("bc3a"),l=a.n(n),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],v={name:"App",data:function(){return{}}},u=v,f=a("2877"),p=Object(f["a"])(u,c,i,!1,null,null,null),d=p.exports,m=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-container",[a("v-row",[a("v-col",{attrs:{md:"6",offset:"6"}},[a("h2",[t._v("Ghibli "+t._s(t.$route.name))])])],1)],1)],1),a("v-row",[a("v-col",{attrs:{offset:"2",cols:"9"}},[a("v-sheet",{staticClass:"d-flex",attrs:{rounded:""}},[a("v-container",[a("v-row",t._l(t.films,(function(t,e){return a("v-col",{key:e,attrs:{cols:"3"}},[a("film-card",{attrs:{film:t}})],1)})),1)],1)],1)],1)],1)],1)},_=[],g=(a("4160"),a("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-2",attrs:{width:"250",tile:"",to:"/films/"+t.film.id}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("h5",[t._v(t._s(t.film.title))])])],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("v-card-subtitle",[r("v-row",[r("v-col",[t._v(" ("+t._s(t.film.release_date)+") ")]),r("v-col",[r("v-avatar",{attrs:{size:"20"}},[r("v-img",{attrs:{src:a("a6b8")}})],1),r("strong",[t._v(" "+t._s(t.film.rt_score)+" %")])],1)],1),r("v-row",[r("v-col",[t._v(" Director: "),r("strong",[t._v(" "+t._s(t.film.director))])])],1),r("v-row",[r("v-col",[t._v(" Producer: "),r("strong",[t._v(" "+t._s(t.film.producer))])])],1)],1)],1)],1)],1)}),b=[],w={name:"FilmCard",props:{film:{type:Object,required:!0}}},V=w,C=a("6544"),x=a.n(C),$=a("8212"),y=a("b0af"),F=a("99d9"),E=a("62ad"),j=a("adda"),k=a("0fd9"),O=Object(f["a"])(V,g,b,!1,null,null,null),I=O.exports;x()(O,{VAvatar:$["a"],VCard:y["a"],VCardSubtitle:F["a"],VCol:E["a"],VImg:j["a"],VRow:k["a"]});var L={name:"Films",components:{FilmCard:I},data:function(){return{films:[]}},mounted:function(){var t=this;this.$http.get("./api/films").then((function(e){t.films=e.data,t.films.forEach((function(t){return t.people=[]}))}))}},S=L,P=a("a523"),T=a("8dd9"),D=Object(f["a"])(S,h,_,!1,null,null,null),N=D.exports;x()(D,{VCol:E["a"],VContainer:P["a"],VRow:k["a"],VSheet:T["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-container",[a("v-row",[a("v-col",{attrs:{md:"6",offset:"6"}},[a("h2",[t._v("Ghibli Movie People")])])],1)],1)],1),a("v-row",[a("v-col",{attrs:{offset:"2",cols:"9"}},[a("v-sheet",{staticClass:"d-flex",attrs:{rounded:""}},[a("v-container",[a("v-row",{attrs:{justify:"around"}},t._l(t.people,(function(t,e){return a("v-col",{key:e},[a("character-card",{attrs:{character:t}})],1)})),1)],1)],1)],1)],1)],1)},A=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2",attrs:{width:"250",to:"people/"+t.character.id}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{offset:"3"}},[a("h4",[t._v(t._s(t.character.name))])])],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-card-subtitle",[a("v-row",[a("v-col",[t._v(" ("+t._s(t.character.age)+") ")]),a("v-col",[t._v(" "+t._s(t.character.gender)+" ")])],1),a("v-row",[a("v-col",[t._v(" Eye color: "+t._s(t.character.eye_color)+" ")])],1),a("v-row",[a("v-col",[t._v(" Hair color: "+t._s(t.character.hair_color)+" ")])],1)],1)],1)],1)],1)},H=[],G={name:"CharacterCard",props:{character:{type:Object,required:!0}}},q=G,z=Object(f["a"])(q,M,H,!1,null,null,null),B=z.exports;x()(z,{VCard:y["a"],VCardSubtitle:F["a"],VCol:E["a"],VRow:k["a"]});var J={name:"People",components:{CharacterCard:B},data:function(){return{people:[]}},mounted:function(){var t=this;this.$http.get("./api/people").then((function(e){t.people=e.data}))}},K=J,Q=Object(f["a"])(K,R,A,!1,null,null,null),U=Q.exports;x()(Q,{VCol:E["a"],VContainer:P["a"],VRow:k["a"],VSheet:T["a"]});var W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"6",offset:"3"}},[t.filmNotFound?r("v-card",{staticClass:"pa-2",attrs:{tile:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{offset:"4",cols:"8"}},[r("v-card-title",[t._v(" "+t._s(t.errorMessage)+" ")])],1)],1)],1):r("v-card",{staticClass:"pa-2",attrs:{tile:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{offset:"4",cols:"8"}},[r("v-card-title",[t._v(" "+t._s(t.film.title)+" ")])],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"8",offset:"2"}},[r("v-card-subtitle",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[t._v(" ("+t._s(t.film.release_date)+") ")]),r("v-col",[r("v-avatar",{attrs:{size:"20"}},[r("v-img",{attrs:{src:a("a6b8")}})],1),r("strong",[t._v(" "+t._s(t.film.rt_score)+" %")])],1)],1),r("v-row",[r("v-col",[t._v(" Director: "+t._s(t.film.director)+" ")]),r("v-col",[t._v(" Producer: "+t._s(t.film.producer)+" ")])],1)],1)],1)],1),r("v-row",[r("v-col",{attrs:{offset:"2"}},[r("v-card-text",[t._v(" "+t._s(t.film.description)+" ")])],1)],1),r("v-row",[r("v-col",{attrs:{offset:"2"}},[t.people.length>0?r("v-list",[r("v-subheader",[t._v("People")]),t._l(t.people,(function(e,a){return r("v-list-item",{key:a},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))])],1)],1)}))],2):r("v-card-text",[r("strong",[t._v("No people found for this Film")])])],1)],1)],1)],1)],1)],1)},X=[],Y={name:"FilmDetail",data:function(){return{film:{},people:[],filmNotFound:!0,errorMessage:""}},created:function(){var t=this;this.$http.get("./api/films/"+this.$route.params.id).then((function(e){t.film=e.data,console.log(t.film),t.filmNotFound=!1,t.$http.get("./api/films/"+t.$route.params.id+"/people").then((function(e){return t.people=e.data}))})).catch((function(e){t.errorMessage=e.response.data,t.filmNotFound=!0}))}},Z=Y,tt=a("8860"),et=a("da13"),at=a("5d23"),rt=a("e0c7"),ot=Object(f["a"])(Z,W,X,!1,null,"0225b94f",null),st=ot.exports;x()(ot,{VAvatar:$["a"],VCard:y["a"],VCardSubtitle:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:E["a"],VContainer:P["a"],VImg:j["a"],VList:tt["a"],VListItem:et["a"],VListItemContent:at["a"],VListItemTitle:at["b"],VRow:k["a"],VSubheader:rt["a"]});var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"white"}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{attrs:{alt:"Ghibli Logo",contain:"",src:a("3629"),width:"140"}})],1),r("v-spacer"),r("v-btn",{attrs:{target:"_blank",text:""},on:{click:function(e){return e.preventDefault(),t.goto("films")}}},[r("span",{staticClass:"mr-2"},[t._v("Films")])]),r("v-btn",{attrs:{target:"_blank",text:""},on:{click:function(e){return e.preventDefault(),t.goto("people")}}},[r("span",{staticClass:"mr-2"},[t._v("People")])])],1),r("v-main",{staticClass:"grey lighten-3"},[r("router-view")],1),r("v-footer",{attrs:{app:""}})],1)},lt=[],ct={name:"Home",methods:{goto:function(t){var e="/"+t;e!==this.$route.path&&this.$router.push(e)}}},it=ct,vt=a("7496"),ut=a("40dc"),ft=a("8336"),pt=a("553a"),dt=a("f6c4"),mt=a("2fa4"),ht=Object(f["a"])(it,nt,lt,!1,null,null,null),_t=ht.exports;x()(ht,{VApp:vt["a"],VAppBar:ut["a"],VBtn:ft["a"],VFooter:pt["a"],VImg:j["a"],VMain:dt["a"],VSpacer:mt["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6",offset:"3"}},[a("v-card",{staticClass:"pa-2",attrs:{tile:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{offset:"4",cols:"8"}},[a("v-card-title",[t._v(" "+t._s(t.character.name)+" ")])],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"8",offset:"2"}},[a("v-card-subtitle",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[t._v(" ("+t._s(t.character.age)+") ")]),a("v-col",[a("strong",[t._v(" "+t._s(t.character.gender))])])],1),a("v-row",[a("v-col",[t._v(" Eye color: "+t._s(t.character.eye_color)+" ")]),a("v-col",[t._v(" Hair color: "+t._s(t.character.hair_color)+" ")])],1)],1)],1)],1),a("v-row",[a("v-col",{attrs:{offset:"2"}},[t.films.length>0?a("v-list",[a("v-subheader",[t._v("Films")]),t._l(t.films,(function(e,r){return a("v-list-item",{key:r},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e))])],1)],1)}))],2):a("v-card-text",[a("strong",[t._v("No film found for this Character")])])],1)],1)],1)],1)],1)],1)],1)},bt=[],wt=(a("baa5"),{name:"CharacterDetail",data:function(){return{character:{},films:[]}},created:function(){var t=this;this.$http.get("./api/people/"+this.$route.params.id).then((function(e){t.character=e.data,t.character.films.forEach((function(e){var a=t.extract_film_id(e);t.$http.get("./api/films"+a).then((function(e){t.films.push(e.data.title)}))}))}))},methods:{extract_film_id:function(t){var e=t.lastIndexOf("/");return e>=0?t.substring(e):null}}}),Vt=wt,Ct=Object(f["a"])(Vt,gt,bt,!1,null,"17c2c7ac",null),xt=Ct.exports;x()(Ct,{VCard:y["a"],VCardSubtitle:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:E["a"],VContainer:P["a"],VList:tt["a"],VListItem:et["a"],VListItemContent:at["a"],VListItemTitle:at["b"],VRow:k["a"],VSubheader:rt["a"]}),r["default"].use(m["a"]);var $t=[{path:"/",name:"Home",component:_t,redirect:"/films",children:[{path:"films",name:"Films",component:N},{path:"films/:id",name:"Film",component:st},{path:"people",name:"People",component:U},{path:"people/:id",name:"Character",component:xt}]}],yt=new m["a"]({routes:$t}),Ft=yt,Et=(a("bf40"),a("f309"));r["default"].use(Et["a"]);var jt=new Et["a"]({});r["default"].config.productionTip=!1,r["default"].prototype.$http=l.a,r["default"].use(s.a),new r["default"]({router:Ft,vuetify:jt,render:function(t){return t(d)}}).$mount("#app");e["default"]=new s.a({theme:{themes:{light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}})},a6b8:function(t,e,a){t.exports=a.p+"../static/img/rotten_tomato.149b5e8a.svg"}},[[0,"runtime~app","chunk-vendors"]]]);