webpackJsonp([0],{511:function(e,t,s){function i(e){s(532)}var n=s(33)(s(533),s(542),i,"data-v-6d52fc4c",null);e.exports=n.exports},516:function(e,t,s){function i(e){s(517)}var n=s(33)(s(518),s(519),i,"data-v-2d282cff",null);e.exports=n.exports},517:function(e,t){},518:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"news-item",props:["newsItem"],data:function(){return{}}}},519:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("router-link",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"grey--text"},expression:"{class: 'grey--text'}"}],staticClass:"news-item",attrs:{to:"/detail/"+e.newsItem.nid}},[e.newsItem.imageurls&&1===e.newsItem.imageurls.length?s("div",{staticClass:"img-first news-content"},[e.newsItem.imageurls.length?s("div",{staticClass:"posts"},e._l(e.newsItem.imageurls,function(e,t){return s("span",{key:t},[s("img",{attrs:{src:e.url,alt:""}})])})):e._e(),e._v(" "),s("div",{staticClass:"right-part"},[s("div",{staticClass:"list-item-title"},[e._v(e._s(e.newsItem.title))]),e._v(" "),s("div",{staticClass:"some-icons"},[s("span",{staticClass:"update-time"},[e._v(e._s(e.newsItem.show))]),e._v(" "),s("span",{staticClass:"icons"},[e._v(e._s(e.newsItem.site))])])])]):e._e(),e._v(" "),e.newsItem.imageurls&&1!==e.newsItem.imageurls.length?s("div",{staticClass:"title-first news-content"},[s("div",{staticClass:"list-item-title"},[e._v(e._s(e.newsItem.title))]),e._v(" "),e.newsItem.imageurls.length?s("div",{staticClass:"posts"},e._l(e.newsItem.imageurls,function(e,t){return s("span",{key:t},[s("img",{attrs:{src:e.url,alt:"","data-index":t}})])})):e._e(),e._v(" "),s("div",{staticClass:"some-icons"},[s("span",{staticClass:"update-time"},[e._v(e._s(e.newsItem.show))]),e._v(" "),s("span",{staticClass:"icons"},[e._v(e._s(e.newsItem.site))])])]):e._e()])},staticRenderFns:[]}},520:function(e,t,s){function i(e){s(521)}var n=s(33)(s(522),s(523),i,"data-v-15743e1a",null);e.exports=n.exports},521:function(e,t){},522:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"b-loading",props:{show:Boolean},data:function(){return{}},computed:{}}},523:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"b-loading"},[e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"b-loading-logo-wrap"},[s("div",{staticClass:"b-loading-logo"}),e._v(" "),s("div",{staticClass:"b-loading-anim"})])}]}},532:function(e,t){},533:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(60),n=s.n(i),a=s(61),r=s.n(a),o=s(50),c=s.n(o),l=s(51),d=s(534),u=s.n(d),v=s(538),h=s.n(v),p=s(131),f=s(520),w=s.n(f),m=s(516),g=s.n(m),_=s(92);t.default={name:"detail",components:{Preview:u.a,BLoading:w.a,NewsItem:g.a,Error:h.a},data:function(){return{imgIndex:0,scrollTop:0,showLoading:!0,relatedNews:[],previewShow:!1,previewIndex:0,showRelatedNews:!1}},computed:c()({},Object(l.d)({detail:function(e){return e.detail.detail},newsFavorList:function(e){return e.favor.newsFavorList}}),{isFavor:function(){var e=this;return this.newsFavorList.some(function(t){return t.nid===e.detail.nid})},contents:function(){return this.detail&&this.detail.content||[]},imageList:function(){return this.contents.filter(function(e){return"image"===e.type}).map(function(e){return{src:e.data.original.url}})},toggleAction:function(){var e=this.isFavor;return{toggle:!0,toggleStatus:e,toggleHandler:e?"removeFavoriteItem":"addFavoriteItem",toggleIcon:e?"favorite":"favorite_border"}}}),methods:c()({},Object(l.b)("appShell/appHeader",["setAppHeader"]),Object(l.b)("appShell/appBottomNavigator",["hideBottomNav"]),Object(l.b)(["addFavorItem","removeFavorItem"]),{addFavoriteItem:function(){this.addFavorItem(this.detail),this.setAppHeader({actions:[this.toggleAction]})},removeFavoriteItem:function(){this.removeFavorItem(this.detail),this.setAppHeader({actions:[this.toggleAction]})},closePreview:function(){this.previewShow=!1,this.$store.dispatch("appShell/enableOverflowScrollingTouch"),this.$store.dispatch("appShell/enableSwipeBack")},preview:function(e){this.previewIndex=this.$refs.img.indexOf(e.target),this.previewShow=!0,this.$store.dispatch("appShell/disableOverflowScrollingTouch"),this.$store.dispatch("appShell/disableSwipeBack")}}),created:function(){var e=this;p.a.$on("app-header:click-toggle",function(t){e[t.handler]&&e[t.handler]()})},asyncData:function(e){var t=this,s=e.store,i=e.route;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.dispatch("getDetail",{nid:i.params.nid});case 2:case"end":return e.stop()}},e,t)}))()},activated:function(){var e=this;return r()(n.a.mark(function t(){var s,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.$route.params.nid,e.showLoading=!0,e.relatedNews=[],e.setAppHeader({title:"百度新闻",show:!0,showMenu:!1,showFavor:!1,showBack:!0,showLogo:!1,actions:[e.toggleAction]}),t.next=6,e.$store.dispatch("getDetail",{nid:s});case 6:return e.showLoading=!1,t.next=9,_.a.getNewsData({nid:s,category:"getbodyinfo",ver:5});case 9:i=t.sent,e.relatedNews=i.related_news.filter(function(e){return e.sourcets}),e.setAppHeader({actions:[e.toggleAction]});case 12:case"end":return t.stop()}},t,e)}))()},beforeRouteLeave:function(e,t,s){var i=this;s(),setTimeout(function(){return i.closePreview()},500)}}},534:function(e,t,s){function i(e){s(535)}var n=s(33)(s(536),s(537),i,"data-v-4cc90542",null);e.exports=n.exports},535:function(e,t){},536:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(192),n=s.n(i),a=window,r=a.innerWidth,o=a.innerHeight;t.default={name:"previewer",props:{imageList:Array,show:Boolean,index:{type:Number,default:0}},data:function(){return{showInfo:!0,curIndex:1,touchTransiStyle:{}}},computed:{itemStyle:function(){return{width:r+"px",height:o+"px"}},wrapperStyle:function(){return{width:r+"px",height:o+"px"}},ulStyle:function(){return{width:this.imageList.length*r+"px",height:o+"px"}}},methods:{toggleInfo:function(){this.close()},close:function(){var e=this.iscroll;e&&setTimeout(function(){e.destroy()},200),this.$emit("click-close"),this.iscroll=null}},watch:{show:function(e){e&&(this.showInfo=!0)}},updated:function(){if(!this.iscroll&&this.show){this.iscroll=new n.a(this.$refs.wrapper,{snap:"li",scrollX:!0,scrollY:!1,startX:-r*this.index,click:!0,momentum:!1}),this.curIndex=this.index+1;var e=this;this.iscroll.on("scrollEnd",function(){e.curIndex=this.currentPage.pageX+1})}},mounted:function(){var e=this,t=void 0,s=void 0,i=void 0,n=void 0,a=void 0,r=function(s){t={clientX:s.touches[0].clientX,clientY:s.touches[0].clientY},a=!1,n=!0,e.touchTransiStyle={}},o=function(r){if(n){var o=r.touches[0];if(s=o.clientX-t.clientX,i=o.clientY-t.clientY,a||(n=i>Math.abs(s),a=!0),n)return Math.abs(i)>30?void e.close():void(e.touchTransiStyle={opacity:1-Math.abs(i)/30*.6,transform:"translateY("+i+"px)"})}},c=function(t){e.touchTransiStyle={}};this.$el.addEventListener("touchstart",r),this.$el.addEventListener("touchmove",o),this.$el.addEventListener("touchend",c),this.$el.addEventListener("touchcancel",c)}}},537:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"preview",style:e.touchTransiStyle,on:{click:function(t){return t.stopPropagation(),e.toggleInfo(t)}}},[s("div",{ref:"wrapper",staticClass:"preview-wrapper",style:e.wrapperStyle},[s("ul",{style:e.ulStyle},e._l(e.imageList,function(t,i){return s("li",{key:i,style:e.itemStyle},[s("div",{staticClass:"preview-image"},[s("img",{attrs:{src:t.src,alt:""}})])])}))]),e._v(" "),s("transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showInfo,expression:"showInfo"}],staticClass:"preview-icons"},[s("v-icon",{attrs:{light:""},on:{click:function(t){return t.stopPropagation(),e.close(t)}}},[e._v("close")])],1)]),e._v(" "),s("transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showInfo,expression:"showInfo"}],staticClass:"preview-footer"},[s("p",[s("span",{staticClass:"cur-index"},[e._v(e._s(e.curIndex))]),e._v("\n                    /\n                    "),s("span",{staticClass:"total"},[e._v(e._s(e.imageList.length))])])])])],1)])},staticRenderFns:[]}},538:function(e,t,s){function i(e){s(539)}var n=s(33)(s(540),s(541),i,"data-v-412aff5f",null);e.exports=n.exports},539:function(e,t){},540:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"error",props:{message:{type:String,default:"未知错误"}},data:function(){return{}},computed:{},methods:{}}},541:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"error-wrapper"},[e._t("icon",[s("div",{staticClass:"error-icon"},[s("v-icon",{staticClass:"grey--text text--lighten-2",attrs:{"x-large":""}},[e._v("error")])],1)]),e._v(" "),s("p",{staticClass:"error-message dark--text"},[e._v(e._s(e.message))])],2)},staticRenderFns:[]}},542:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"news-detail-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.detail.error,expression:"!detail.error"}],staticClass:"content"},[s("h3",[e._v(e._s(e.detail.title))]),e._v(" "),s("div",{staticClass:"title-info"},[s("span",[e._v(e._s(e.detail.site))]),e._v(" "),s("span",[e._v(e._s(e.detail.show))])]),e._v(" "),s("div",{staticClass:"content"},e._l(e.contents,function(t,i){return s("div",{key:i,staticClass:"news-item"},["text"===t.type?s("p",[e._v(e._s(t.data))]):e._e(),e._v(" "),"image"===t.type?s("img",{ref:"img",refInFor:!0,attrs:{src:t.data.original.url},on:{click:e.preview}}):e._e()])}))]),e._v(" "),s("error",{directives:[{name:"show",rawName:"v-show",value:e.detail.error,expression:"detail.error"}],attrs:{message:e.detail.msg||"加载失败"}}),e._v(" "),s("b-loading",{attrs:{show:e.showLoading}}),e._v(" "),s("preview",{attrs:{show:e.previewShow,imageList:e.imageList,index:e.previewIndex},on:{"click-close":e.closePreview}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.relatedNews.length,expression:"relatedNews.length"}],staticClass:"related-news"},[s("div",{staticClass:"block-title"},[e._v("相关新闻")]),e._v(" "),e._l(e.relatedNews,function(e,t){return s("news-item",{key:e.nid,attrs:{newsItem:e,"data-index":t}})})],2)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.06f6382b9227f844aded.js.map