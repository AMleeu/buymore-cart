(function(){"use strict";var t={1157:function(t,e,r){r(6992),r(8674),r(9601),r(7727);var a=r(8935),n=r(2809),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("Header"),r("CartEmpty",{directives:[{name:"show",rawName:"v-show",value:0===t.cartItemsCount,expression:"cartItemsCount === 0"}]}),r("CartWithItems",{directives:[{name:"show",rawName:"v-show",value:t.cartItemsCount>0,expression:"cartItemsCount > 0"}]}),r("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[r("b-navbar-brand",{attrs:{href:"#"},on:{click:t.goToHome}},[t._v("buy more")]),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{href:"#"},on:{click:t.goToCart}},[r("b-icon",{attrs:{icon:"cart","font-scale":"1.5"}}),t._v("   |   "),r("b-badge",{staticClass:"header-badge",attrs:{variant:"primary"}},[t._v(" "+t._s(t.cartItemsCount)+" ")])],1)],1)],1)],1)},c=[],u={methods:{goToCart:function(){this.$router.push({path:"/cart"})},goToHome:function(){this.$router.push({path:"/"})}},computed:{cartItemsCount:function(){return this.$store.getters.cartItemsCount}}},l=u,m=r(1001),d=(0,m.Z)(l,s,c,!1,null,"e4a1aa9e",null),f=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"footer"}},[t._v(" © buymore 2022 ")])},p=[],v={},b=(0,m.Z)(v,h,p,!1,null,"4815d824",null),g=b.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container page-content"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-12 col-md-8 offset-md-2"},[r("b-jumbotron",{attrs:{"bg-variant":"light","text-variant":"black","border-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Your Cart")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" it currently empty, go to homepage to browse items ")]},proxy:!0}])},[r("hr",{staticClass:"my-4"}),r("p",{staticClass:"justift-content-center"},[r("b-breadcrumb",[r("b-breadcrumb-item",{attrs:{href:"#"},on:{click:t.goToHome}},[r("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),t._v(" Home ")],1),r("b-breadcrumb-item",{attrs:{active:""}},[t._v("Cart")])],1)],1)])],1)])])},y=[],_={methods:{goToHome:function(){this.$router.push({path:"/"})}}},w=_,I=(0,m.Z)(w,C,y,!1,null,null,null),T=I.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container page-content"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-12 col-md-8 offset-md-2"},[r("b-list-group",t._l(t.cartItems,(function(e){return r("b-list-group-item",{key:e.id,staticClass:"flex-column align-items-start",attrs:{href:"#"}},[r("div",{staticClass:"d-flex w-100 justify-content-between align-items-center"},[r("small",{staticClass:"cart-item-name"},[t._v(t._s(e.name))]),r("b-badge",{staticClass:"cart-item-badge",attrs:{variant:"primary"}},[t._v(" "+t._s(e.quantity)+" ")]),r("small",[t._v(" R "+t._s(t._f("formatPrice")(e.price))+" ")]),r("div",[r("b-img",{staticClass:"cart-item-image",attrs:{center:"",thumbnail:"",fluid:"",src:e.imgUrl,alt:"Center image",rounded:""}})],1),r("b-button-group",[r("b-button",{attrs:{variant:"secondary"},on:{click:function(r){return t.addToCart(e)}}},[r("b-icon",{attrs:{icon:"plus","font-scale":"1.5"}})],1),r("b-button",{attrs:{variant:"light"},on:{click:function(r){return t.removeFromCart(e)}}},[r("b-icon",{attrs:{icon:"dash","font-scale":"1.5"}})],1)],1)],1)])})),1)],1)]),r("div",{staticClass:"row mb-4 mt-3"},[r("div",{staticClass:"col-6 offset-6 col-md-4 offset-md-6 text-right"},[r("b-alert",{attrs:{show:"",variant:"light"}},[t._v("total is: "),r("hr"),t._v(" R "+t._s(t._f("formatPrice")(t.total)))])],1)])])},$=[],k=(r(1539),r(4916),r(5306),r(6977),function(t){return t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}),P={computed:{cartItems:function(){return this.$store.getters.cartItems},total:function(){var t=this.$store.getters.cartItems.reduce((function(t,e){return t+e.price*e.quantity}),0);return t}},methods:{addToCart:function(t){this.$store.commit("addToCart",t)},removeFromCart:function(t){this.$store.commit("removeFromCart",t)}},filters:{formatPrice:k}},S=P,F=(0,m.Z)(S,x,$,!1,null,"601b1567",null),O=F.exports,Z={components:{CartEmpty:T,CartWithItems:O,Header:f,Footer:g},computed:{cartItemsCount:function(){return this.$store.getters.cartItemsCount}}},j=Z,E=(0,m.Z)(j,o,i,!1,null,null,null),H=E.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("Header"),r("div",{staticClass:"container page-content"},[r("div",{staticClass:"row mb-4"},t._l(t.headphones,(function(e){return r("div",{key:e.id,staticClass:"col-8 offset-2 col-sm-6 offset-sm-0 col-lg-4 mt-3"},[r("b-card",{attrs:{title:e.name,"sub-title":"R "+t.applyformatPrice(e.price),"img-src":e.imgUrl,"img-alt":"Card image","img-top":""}},[r("hr"),r("b-link",{staticClass:"card-link",attrs:{variant:"secondary"},on:{click:function(r){return t.goToitemDetails(e)}}},[t._v(" more info   "),r("b-icon",{attrs:{icon:"info-square-fill",variant:"","font-scale":"1.5"}})],1)],1)],1)})),0)]),r("Footer")],1)},A=[],N={components:{Header:f,Footer:g},computed:{headphones:function(){return this.$store.getters.headphones}},methods:{goToitemDetails:function(t){this.$router.push({name:"item-details",params:t})},applyformatPrice:function(t){return k(t)}}},B=N,U=(0,m.Z)(B,q,A,!1,null,null,null),R=U.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("Header"),r("div",{staticClass:"container page-content"},[r("div",{staticClass:"row mb-4"},[r("div",{staticClass:"col-8 offset-2 mt-3"},[r("h4",[t._v(t._s(t.item.name))]),r("b-button-group",{staticClass:"mb-3"},[r("b-button",{attrs:{variant:"secondary"},on:{click:t.addToCart}},[t._v(" add to cart ")]),r("b-button",{attrs:{variant:"light"},on:{click:t.goToCart}},[r("b-icon",{attrs:{icon:"cart","font-scale":"1.5"}})],1),r("b-button",{attrs:{variant:"light"},on:{click:t.removeFromCart}},[r("b-icon",{attrs:{icon:"dash","font-scale":"1.5"}})],1)],1),r("b-card",{attrs:{"img-src":t.item.imgUrl,"img-alt":"Card image","img-bottom":"",footer:"R "+t.applyformatPrice(t.item.price),"footer-tag":"header"}},[r("b-card-text",[t._v(" "+t._s(t.item.desc)+" ")])],1)],1)])]),r("Footer")],1)},W=[],X={data:function(){return{item:this.$route.params}},components:{Header:f,Footer:g},methods:{addToCart:function(){this.$store.commit("addToCart",this.item)},goToCart:function(){this.$router.push({path:"/cart"})},removeFromCart:function(){this.$store.commit("removeFromCart",this.item)},applyformatPrice:function(t){return k(t)}}},D=X,G=(0,m.Z)(D,M,W,!1,null,null,null),L=G.exports,Y=[{path:"/",component:R},{path:"/cart",component:H},{path:"/item-details/:item",name:"item-details",component:L}],z=r(3019),J=(r(4553),r(561),r(4665)),K=r.p+"img/headphones1.a34b5a6b.webp",Q=r.p+"img/headphones2.6fbaa00b.webp",V=r.p+"img/headphones3.ea3d38a9.webp",tt=r.p+"img/headphones4.fd202cc5.webp";a["default"].use(J.ZP);var et=new J.ZP.Store({state:{headphones:[{id:1,name:"Beats Studio3",price:6700,desc:"Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Active Noise Cancelling (Pure ANC). Beats’ Pure ANC actively blocks external noise and uses real-time audio calibration to preserve clarity, range and emotion",imgUrl:K},{id:2,name:"Sennheiser PXC 550-II",price:6799,desc:"Created for the frequent traveller, the PXC 550-II Wireless from Sennheiser upgrades every journey with unrivalled sound quality and wireless freedom. Travel the world on a single charge with 30 hours of battery life: Listen to music, take calls, interact with AI assistants, or simply journey in tranquillity without distractions. Over-ear, Noise-Canceling,Bluetooth, Audiophile, Travel and Closed Headphone.",imgUrl:Q},{id:3,name:"Beats Solo Pro",price:5999,desc:"Get inspired with Solo Pro wireless headphones. To deliver sound how you want it. Solo Pro features two listening modes: Active Noise Cancelling (ANC) and Transparency.",imgUrl:V},{id:4,name:"Skullcandy Crusher",price:2999,desc:"Skullcandy Crusher BT MOAB/Red",imgUrl:tt}],cartItemsCount:0,cartItems:[]},getters:{headphones:function(t){return t.headphones},cartItemsCount:function(t){return t.cartItemsCount},cartItems:function(t){return t.cartItems}},mutations:{addToCart:function(t,e){var r=(0,z.Z)((0,z.Z)({},e),{},{quantity:1});if(t.cartItems.length>0){var a=t.cartItems.some((function(t){return t.id===r.id}));if(a){var n=t.cartItems.findIndex((function(t){return t.id===r.id}));t.cartItems[n]["quantity"]+=1}else t.cartItems.push(r)}else t.cartItems.push(r);t.cartItemsCount++},removeFromCart:function(t,e){if(t.cartItems.length>0){var r=t.cartItems.some((function(t){return t.id===e.id}));if(r){var a=t.cartItems.findIndex((function(t){return t.id===e.id}));t.cartItems[a]["quantity"]>0&&(t.cartItems[a]["quantity"]-=1,t.cartItemsCount--),0===t.cartItems[a]["quantity"]&&t.cartItems.splice(a,1)}}}}}),rt=r(8262),at=r(3266),nt=(r(44),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.showPreloader?r("preloader"):t._e(),r("router-view")],1)}),ot=[],it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"preloader-wrapper"},[r("b-icon",{staticClass:"cart-icon",attrs:{icon:"cart"}}),r("b-icon",{staticClass:"cart-icon",attrs:{icon:"cart"}}),r("b-icon",{staticClass:"cart-icon",attrs:{icon:"cart"}})],1)},st=[],ct={},ut=(0,m.Z)(ct,it,st,!1,null,"6c2849f9",null),lt=ut.exports,mt={name:"App",components:{Preloader:lt},data:function(){return{showPreloader:!0}},mounted:function(){var t=this;setTimeout((function(){return t.showPreloader=!1}),4e3)}},dt=mt,ft=(0,m.Z)(dt,nt,ot,!1,null,null,null),ht=ft.exports;a["default"].use(rt.XG7),a["default"].use(at.A7),a["default"].use(n.Z),a["default"].config.productionTip=!1;var pt=new n.Z({routes:Y,mode:"history"});new a["default"]({router:pt,store:et,render:function(t){return t(ht)}}).$mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],o=t[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/buymore-cart/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var l=c(r)}for(e&&e(a);u<i.length;u++)o=i[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},a=self["webpackChunkbuymore_cart"]=self["webpackChunkbuymore_cart"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(1157)}));a=r.O(a)})();
//# sourceMappingURL=app-legacy.b8799363.js.map