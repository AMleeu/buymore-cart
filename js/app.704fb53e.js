(function(){"use strict";var t={5407:function(t,e,r){var a=r(8935),o=r(2809),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["page-container",t.cartItemsCount>0?"min-width-446px":""]},[r("Header"),r("CartEmpty",{directives:[{name:"show",rawName:"v-show",value:0===t.cartItemsCount,expression:"cartItemsCount === 0"}]}),r("CartWithItems",{directives:[{name:"show",rawName:"v-show",value:t.cartItemsCount>0,expression:"cartItemsCount > 0"}]}),r("Footer")],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[r("b-navbar-brand",{attrs:{href:"#"},on:{click:t.goToHome}},[t._v("buy more")]),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{href:"#"},on:{click:t.goToCart}},[r("b-icon",{attrs:{icon:"cart","font-scale":"1.5"}}),t._v("   |   "),r("b-badge",{staticClass:"header-badge",attrs:{variant:"primary"}},[t._v(" "+t._s(t.cartItemsCount)+" ")])],1)],1)],1)],1)},c=[],l={methods:{goToCart(){this.$router.push({path:"/cart"})},goToHome(){this.$router.push({path:"/"})}},computed:{cartItemsCount(){return this.$store.getters.cartItemsCount}}},u=l,m=r(1001),d=(0,m.Z)(u,i,c,!1,null,"e4a1aa9e",null),f=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:[t.cartItemsCount>0?"hide-min-width-446px":""],attrs:{id:"footer"}},[t._v(" © buymore 2022 ")])},p=[],v={computed:{cartItemsCount(){return this.$store.getters.cartItemsCount}}},b=v,g=(0,m.Z)(b,h,p,!1,null,"633eff8f",null),C=g.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container page-content"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-12 col-md-8 offset-md-2"},[r("b-jumbotron",{attrs:{"bg-variant":"light","text-variant":"black","border-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Your Cart")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" it currently empty, go to homepage to browse items ")]},proxy:!0}])},[r("hr",{staticClass:"my-4"}),r("p",{staticClass:"justift-content-center"},[r("b-breadcrumb",[r("b-breadcrumb-item",{attrs:{href:"#"},on:{click:t.goToHome}},[r("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),t._v(" Home ")],1),r("b-breadcrumb-item",{attrs:{active:""}},[t._v("Cart")])],1)],1)])],1)])])},_=[],w={methods:{goToHome(){this.$router.push({path:"/"})}}},I=w,T=(0,m.Z)(I,y,_,!1,null,null,null),x=T.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container page-content"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-12 col-md-8 offset-md-2"},[r("b-list-group",t._l(t.cartItems,(function(e){return r("b-list-group-item",{key:e.id,staticClass:"flex-column align-items-start",attrs:{href:"#"}},[r("div",{staticClass:"d-flex w-100 justify-content-between align-items-center"},[r("small",{staticClass:"cart-item-name"},[t._v(t._s(e.name))]),r("b-badge",{staticClass:"cart-item-badge",attrs:{variant:"primary"}},[t._v(" "+t._s(e.quantity)+" ")]),r("small",[t._v(" R "+t._s(t._f("formatPrice")(e.price))+" ")]),r("div",[r("b-img",{staticClass:"cart-item-image",attrs:{center:"",thumbnail:"",fluid:"",src:e.imgUrl,alt:"Center image",rounded:""}})],1),r("b-button-group",[r("b-button",{attrs:{variant:"secondary"},on:{click:function(r){return t.addToCart(e)}}},[r("b-icon",{attrs:{icon:"plus","font-scale":"1.5"}})],1),r("b-button",{attrs:{variant:"light"},on:{click:function(r){return t.removeFromCart(e)}}},[r("b-icon",{attrs:{icon:"dash","font-scale":"1.5"}})],1)],1)],1)])})),1)],1)]),r("div",{staticClass:"row mb-4 mt-3"},[r("div",{staticClass:"col-6 offset-6 col-md-4 offset-md-6 text-right"},[r("b-alert",{attrs:{show:"",variant:"light"}},[t._v("total is: "),r("hr"),t._v(" R "+t._s(t._f("formatPrice")(t.total)))])],1)])])},k=[];const P=function(t){return t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")};var S={computed:{cartItems(){return this.$store.getters.cartItems},total(){let t=this.$store.getters.cartItems.reduce(((t,e)=>t+e.price*e.quantity),0);return t}},methods:{addToCart(t){this.$store.commit("addToCart",t)},removeFromCart(t){this.$store.commit("removeFromCart",t)}},filters:{formatPrice:P}},F=S,O=(0,m.Z)(F,$,k,!1,null,"f069c676",null),j=O.exports,Z={components:{CartEmpty:x,CartWithItems:j,Header:f,Footer:C},computed:{cartItemsCount(){return this.$store.getters.cartItemsCount}}},E=Z,H=(0,m.Z)(E,n,s,!1,null,null,null),q=H.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("Header"),r("div",{staticClass:"container page-content"},[r("div",{staticClass:"row mb-4"},t._l(t.headphones,(function(e){return r("div",{key:e.id,staticClass:"col-8 offset-2 col-sm-6 offset-sm-0 col-lg-4 mt-3"},[r("b-card",{attrs:{title:e.name,"sub-title":"R "+t.applyformatPrice(e.price),"img-src":e.imgUrl,"img-alt":"Card image","img-top":""}},[r("hr"),r("b-link",{staticClass:"card-link",attrs:{variant:"secondary"},on:{click:function(r){return t.goToitemDetails(e)}}},[t._v(" more info   "),r("b-icon",{attrs:{icon:"info-square-fill",variant:"","font-scale":"1.5"}})],1)],1)],1)})),0)]),r("Footer")],1)},N=[],B={components:{Header:f,Footer:C},computed:{headphones(){return this.$store.getters.headphones}},methods:{goToitemDetails(t){this.$router.push({name:"item-details",params:t})},applyformatPrice(t){return P(t)}}},U=B,R=(0,m.Z)(U,A,N,!1,null,null,null),M=R.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("Header"),r("div",{staticClass:"container page-content"},[r("div",{staticClass:"row mb-4"},[r("div",{staticClass:"col-8 offset-2 mt-3"},[r("h4",[t._v(t._s(t.item.name))]),r("b-button-group",{staticClass:"mb-3"},[r("b-button",{attrs:{variant:"secondary"},on:{click:t.addToCart}},[t._v(" add to cart ")]),r("b-button",{attrs:{variant:"light"},on:{click:t.goToCart}},[r("b-icon",{attrs:{icon:"cart","font-scale":"1.5"}})],1),r("b-button",{attrs:{variant:"light"},on:{click:t.removeFromCart}},[r("b-icon",{attrs:{icon:"dash","font-scale":"1.5"}})],1)],1),r("b-card",{attrs:{"img-src":t.item.imgUrl,"img-alt":"Card image","img-bottom":"",footer:"R "+t.applyformatPrice(t.item.price),"footer-tag":"header"}},[r("b-card-text",[t._v(" "+t._s(t.item.desc)+" ")])],1)],1)])]),r("Footer")],1)},X=[],D={data(){return{item:this.$route.params}},components:{Header:f,Footer:C},methods:{addToCart(){this.$store.commit("addToCart",this.item)},goToCart(){this.$router.push({path:"/cart"})},removeFromCart(){this.$store.commit("removeFromCart",this.item)},applyformatPrice(t){return P(t)}}},G=D,L=(0,m.Z)(G,W,X,!1,null,null,null),Y=L.exports,z=[{path:"/",component:M},{path:"/cart",component:q},{path:"/item-details/:item",name:"item-details",component:Y}],J=r(4665),K=r.p+"img/headphones1.a34b5a6b.webp",Q=r.p+"img/headphones2.6fbaa00b.webp",V=r.p+"img/headphones3.ea3d38a9.webp",tt=r.p+"img/headphones4.fd202cc5.webp";a["default"].use(J.ZP);const et=new J.ZP.Store({state:{headphones:[{id:1,name:"Beats Studio3",price:6700,desc:"Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Active Noise Cancelling (Pure ANC). Beats’ Pure ANC actively blocks external noise and uses real-time audio calibration to preserve clarity, range and emotion",imgUrl:K},{id:2,name:"Sennheiser PXC 550-II",price:6799,desc:"Created for the frequent traveller, the PXC 550-II Wireless from Sennheiser upgrades every journey with unrivalled sound quality and wireless freedom. Travel the world on a single charge with 30 hours of battery life: Listen to music, take calls, interact with AI assistants, or simply journey in tranquillity without distractions. Over-ear, Noise-Canceling,Bluetooth, Audiophile, Travel and Closed Headphone.",imgUrl:Q},{id:3,name:"Beats Solo Pro",price:5999,desc:"Get inspired with Solo Pro wireless headphones. To deliver sound how you want it. Solo Pro features two listening modes: Active Noise Cancelling (ANC) and Transparency.",imgUrl:V},{id:4,name:"Skullcandy Crusher",price:2999,desc:"Skullcandy Crusher BT MOAB/Red",imgUrl:tt}],cartItemsCount:0,cartItems:[]},getters:{headphones:t=>t.headphones,cartItemsCount:t=>t.cartItemsCount,cartItems:t=>t.cartItems},mutations:{addToCart(t,e){let r={...e,quantity:1};if(t.cartItems.length>0){let e=t.cartItems.some((t=>t.id===r.id));if(e){let e=t.cartItems.findIndex((t=>t.id===r.id));t.cartItems[e]["quantity"]+=1}else t.cartItems.push(r)}else t.cartItems.push(r);t.cartItemsCount++},removeFromCart(t,e){if(t.cartItems.length>0){let r=t.cartItems.some((t=>t.id===e.id));if(r){let r=t.cartItems.findIndex((t=>t.id===e.id));t.cartItems[r]["quantity"]>0&&(t.cartItems[r]["quantity"]-=1,t.cartItemsCount--),0===t.cartItems[r]["quantity"]&&t.cartItems.splice(r,1)}}}}});var rt=r(8262),at=r(3266),ot=(r(44),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.showPreloader?r("preloader"):t._e(),r("router-view")],1)}),nt=[],st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"preloader-wrapper"},[r("div",{staticClass:"preloader"},[r("b-icon",{staticClass:"bullseye-icon",attrs:{icon:"bullseye"}}),r("b-icon",{staticClass:"brightness-low-icon",attrs:{icon:"brightness-low"}})],1)])},it=[],ct={},lt=(0,m.Z)(ct,st,it,!1,null,"5dfd3cc8",null),ut=lt.exports,mt={name:"App",components:{Preloader:ut},data(){return{showPreloader:!0}},mounted(){setTimeout((()=>{this.showPreloader=!1}),6e3),setTimeout((()=>{window.scrollTo(0,0)}),6500)}},dt=mt,ft=(0,m.Z)(dt,ot,nt,!1,null,null,null),ht=ft.exports;a["default"].use(rt.XG7),a["default"].use(at.A7),a["default"].use(o.Z),a["default"].config.productionTip=!1;const pt=new o.Z({base:"/buymore-cart/",routes:z});new a["default"]({router:pt,store:et,render:t=>t(ht)}).$mount("#app")}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,n){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],n=t[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(i=!1,n<s&&(s=n));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,o,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/buymore-cart/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,n,s=a[0],i=a[1],c=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(e&&e(a);l<s.length;l++)n=s[l],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},a=self["webpackChunkbuymore_cart"]=self["webpackChunkbuymore_cart"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(5407)}));a=r.O(a)})();
//# sourceMappingURL=app.704fb53e.js.map