webpackJsonp([1],{"4R4o":function(t,s){},AeEs:function(t,s){},AnIW:function(t,s){},"Do/K":function(t,s){},HFfA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("JWK+"),n=(e.n(a),e("pI1A")),i=(e.n(n),e("AeEs")),o=(e.n(i),e("AnIW")),r=(e.n(o),e("d7BR")),d=(e.n(r),e("Do/K")),u=(e.n(d),e("LjF4")),c=(e.n(u),e("7+uW")),l=e("TFhR"),h=e("mtWM"),f=e.n(h),p=e("U/rD"),g=e("mw3O"),m=e.n(g),v=e("gN+L"),w=m.a.parse(location.search.substr(1)).id;new c.default({el:"#app",data:{id:w,details:null,detailTab:["商品详情","本店成交"],tabIndex:0,dealLists:null,bannerList:null,skuType:1,showSku:!1,skuNum:1,isAddCart:!1,showMsg:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;f.a.post(l.a.details,{id:w}).then(function(s){t.details=s.data.data,t.bannerList=[],t.details.imgs.forEach(function(s){t.bannerList.push({clickUrl:"",img:s})})})},changeTab:function(t){this.tabIndex=t,1===t&&this.getDeal()},getDeal:function(){var t=this;f.a.post(l.a.deal,{id:w}).then(function(s){t.dealLists=s.data.data.lists})},chooseSku:function(t){this.skuType=t,this.showSku=!0},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;f.a.post(l.a.addCart,{id:w,number:this.skuNum}).then(function(s){200===s.data.status&&(t.showSku=!1,t.isAddCart=!0,t.showMsg=!0,setTimeout(function(){t.showMsg=!1},2e3))})}},watch:{showSku:function(t,s){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},components:{Swipe:v.a},mixins:[p.a]})},"JWK+":function(t,s){},LjF4:function(t,s){},TFhR:function(t,s,e){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",rankList:"/category/rank",subList:"/category/subList",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",addressList:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in a)a.hasOwnProperty(n)&&(a[n]="http://rap2api.taobao.org/app/mock/7058"+a[n]);s.a=a},"U/rD":function(t,s,e){"use strict";var a={filters:{money:function(t){t=t.toString().replace(/\$|\,/g,""),isNaN(t)&&(t="0");var s=t==(t=Math.abs(t)),e=(t=Math.floor(100*t+.50000000001))%100;t=Math.floor(t/100).toString(),e<10&&(e="0"+e);for(var a=0;a<Math.floor((t.length-(1+a))/3);a++)t=t.substring(0,t.length-(4*a+3))+","+t.substring(t.length-(4*a+3));return(s?"":"-")+t+"."+e}}};s.a=a},d7BR:function(t,s){},"gN+L":function(t,s,e){"use strict";var a=e("DNVT"),n=(e("v2ns"),{name:"swipe",props:{lists:{type:Array,required:!0},name:""},mounted:function(){new a.a(".swiper-container",{loop:!0,effect:"coverflow",autoplay:!0,pagination:{el:".swiper-pagination"}})}}),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return s("div",{key:t.id,staticClass:"swp-page swiper-slide"},[s("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[s("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img,alt:""}})])])})),this._v(" "),s("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var o=e("VU/8")(n,i,!1,function(t){e("4R4o")},null,null);s.a=o.exports},pI1A:function(t,s){},v2ns:function(t,s){}},["HFfA"]);
//# sourceMappingURL=goods.96db62ee9cf28b0684fd.js.map