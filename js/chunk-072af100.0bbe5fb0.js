(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-072af100"],{"09e7":function(e,t,n){},1799:function(e,t,n){"use strict";var a=n("7a23"),i={"aria-label":"Page navigation example"},c={class:"pagination"},o=Object(a["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),r=[o],l=["onClick"],s=Object(a["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),d=[s];function g(e,t,n,o,s,g){return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",i,[Object(a["createElementVNode"])("ul",c,[Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["page-item",{disabled:!n.pages.has_pre}])},[Object(a["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(a["withModifiers"])((function(e){return g.updatePage(n.pages.current_page-1)}),["prevent"]))},r)],2),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.pages.total_pages,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:t,class:Object(a["normalizeClass"])(["page-item",{active:n.pages.current_page===e}])},[Object(a["createElementVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return g.updatePage(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,l)],2)})),128)),Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["page-item",{disabled:!n.pages.has_next}])},[Object(a["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return g.updatePage(n.pages.current_page+1)}),["prevent"]))},d)],2)])])}var p={props:{pages:{type:Object,default:function(){return{}}}},methods:{updatePage:function(e){this.$emit("emit-page",e)}}},u=n("6b0d"),b=n.n(u);const m=b()(p,[["render",g]]);t["a"]=m},"5fda":function(e,t,n){},a01c:function(e,t,n){"use strict";n("5fda")},e676:function(e,t,n){"use strict";n.r(t);n("caad"),n("2532");var a=n("7a23"),i={class:"container pt-6 pt-lg-7"},c={class:"nav nav-tabs"},o={class:"nav-item"},r=["onClick"],l={class:"list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-4"},s={class:"tag text-white"},d={class:"painting-card-info d-flex align-items-center justify-content-around"},g=["onClick"],p={key:0,class:"bi bi-suit-heart-fill fs-4 text-white"},u={key:1,class:"bi bi-suit-heart fs-4 text-white"},b=["disabled","onClick"],m={key:0,class:"spinner-border spinner-grow-sm"},j=Object(a["createTextVNode"])(" 欣賞畫作 "),O=["disabled","onClick"],f={key:0,class:"spinner-border spinner-grow-sm"},h=Object(a["createTextVNode"])(" 加入收藏 "),v={class:"d-flex justify-content-center my-4"};function k(e,t,n,k,y,E){var N=Object(a["resolveComponent"])("Loading"),w=Object(a["resolveComponent"])("SwiperSlide"),V=Object(a["resolveComponent"])("Swiper"),B=Object(a["resolveComponent"])("PaginationVue");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(N,{active:y.isLoading,"z-index":1060},null,8,["active"]),Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(V,{"slides-per-view":1,"space-between":0,modules:y.modules,navigation:"",pagination:{clickable:!0}},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(y.paintings,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:e.id},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",{class:"swiper-painting",style:Object(a["normalizeStyle"])({backgroundImage:"url(".concat(e.imageUrl,")")})},null,4)]})),_:2},1024)})),128))]})),_:1},8,["modules"]),Object(a["createElementVNode"])("ul",c,[Object(a["createElementVNode"])("li",o,[Object(a["createElementVNode"])("a",{href:"#","data-toggle":"tab",class:Object(a["normalizeClass"])(["nav-link",{active:""===y.category}]),onClick:t[0]||(t[0]=Object(a["withModifiers"])((function(){return E.getPaintings&&E.getPaintings.apply(E,arguments)}),["prevent"]))},"所有創作",2)]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(y.paintingsByCategory,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:"nav-item",key:e.id},[Object(a["createElementVNode"])("a",{href:"#","data-toggle":"tab",class:Object(a["normalizeClass"])(["nav-link",{active:y.category===e.category}]),onClick:Object(a["withModifiers"])((function(t){return E.getPaintings(1,e.category)}),["prevent"])},Object(a["toDisplayString"])(e.category),11,r)])})),128))]),Object(a["createElementVNode"])("ul",l,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(y.paintings,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:e.id,class:"col position-relative mt-4"},[Object(a["createElementVNode"])("span",s,Object(a["toDisplayString"])(e.category),1),Object(a["createElementVNode"])("div",{class:"card-image border border-bottom-0 border-primary rounded-top",style:Object(a["normalizeStyle"])({backgroundImage:"url(".concat(e.imageUrl,")")})},null,4),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("a",{href:"#",class:"favorite",onClick:Object(a["withModifiers"])((function(t){return E.toggleFavorite(e.id)}),["prevent"])},[y.favorite.includes(e.id)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",p)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",u))],8,g),Object(a["createElementVNode"])("h3",null,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.size),1)]),Object(a["createElementVNode"])("button",{type:"button",class:"card-btn btn btn-info btn-view",disabled:y.state.paintingLoading===e.id||!e.is_enabled,onClick:function(t){return E.getPainting(e.id)}},[y.state.paintingLoading===e.id?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",m)):Object(a["createCommentVNode"])("",!0),j],8,b),Object(a["createElementVNode"])("button",{type:"button",class:"card-btn btn btn-primary text-white btn-collect",disabled:y.state.paintingLoading===e.id||!e.is_enabled,onClick:function(t){return E.addToCollection(e.id,e.title)}},[y.state.paintingLoading===e.id?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",f)):Object(a["createCommentVNode"])("",!0),h],8,O)])})),128))]),Object(a["createElementVNode"])("div",v,[Object(a["createVNode"])(B,{pages:y.pagination,onEmitPage:E.getPaintings},null,8,["pages","onEmitPage"])])])],64)}n("99af"),n("c740"),n("4de4"),n("d3b7"),n("a434"),n("e9c4");var y=n("4da1"),E=n("8349"),N=(n("5f67"),n("0939"),n("09e7"),n("3e94")),w=n("1799"),V={data:function(){return{isLoading:!1,paintings:[],category:"",allPaintings:[],state:{paintingLoading:""},paintingsByCategory:[],pagination:{},modules:[y["a"],y["b"]],favorite:JSON.parse(localStorage.getItem("favorite"))||[]}},components:{Swiper:E["a"],SwiperSlide:E["b"],PaginationVue:w["a"]},methods:{getPaintings:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;this.category="",this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("clara-vue3","/products?page=").concat(t);n&&(this.category=n,a="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("clara-vue3","/products?page=").concat(t,"&category=").concat(n)),this.$http.get(a).then((function(t){e.paintings=t.data.products,e.isLoading=!1,e.pagination=t.data.pagination})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))},getAllPaintings:function(){var e=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("clara-vue3","/products/all")).then((function(t){function n(e,t,n){return n.findIndex((function(t){return e.category===t.category}))===t}e.allPaintings=t.data.products,e.isLoading=!1,e.paintingsByCategory=e.allPaintings.filter(n)})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))},getPainting:function(e){this.$router.push("/painting/".concat(e))},addToCollection:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.state.paintingLoading=e;var i={product_id:e,qty:a};this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("clara-vue3","/cart"),{data:i}).then((function(e){n.state.paintingLoading="",N["a"].emit("get-collection"),n.$httpMessageState(e,"加入收藏",t)})).catch((function(e){n.state.paintingLoading="",n.$httpMessageState(e,"加入收藏",t)}))},toggleFavorite:function(e){var t=this.favorite.findIndex((function(t){return t===e}));-1===t?this.favorite.push(e):this.favorite.splice(t,1)}},watch:{favorite:{handler:function(){localStorage.setItem("favorite",JSON.stringify(this.favorite))},deep:!0}},mounted:function(){this.getPaintings(),this.getAllPaintings()}},B=(n("a01c"),n("6b0d")),C=n.n(B);const P=C()(V,[["render",k],["__scopeId","data-v-5df8f77b"]]);t["default"]=P}}]);
//# sourceMappingURL=chunk-072af100.0bbe5fb0.js.map