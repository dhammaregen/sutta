(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{405:function(t,n,c){var content=c(407);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(9).default)("1b7833da",content,!0,{sourceMap:!1})},406:function(t,n,c){"use strict";c(405)},407:function(t,n,c){(n=c(8)(!1)).push([t.i,".v-application code{background-color:#000}.content-nav{width:100%;padding:.5rem 1rem;display:flex;justify-content:space-between;background-color:#fff}.content{display:flex;flex-flow:column wrap;align-items:center;padding-left:0;padding-right:0}",""]),t.exports=n},417:function(t,n,c){"use strict";c.r(n);c(19),c(37),c(119);var e=c(242),o=c(53);console.log("homeicon",e.a);var l=o.ScvVue.ScvSearchField,r=o.ScvVue.ScvResults,v=o.ScvVue.ScvSutta,d=o.ScvVue.ScvSettings,f={components:{HomeIcon:e.a,ScvSearchField:l,ScvResults:r,ScvSutta:v,ScvSettings:d},data:function(){return{panels:[0,1],lang:"de"}},mounted:function(){},methods:{clickHome:function(){console.log("clickHome",window.location),this.$route.query.search&&(window.location.href=window.location.href.replace(/\?.*/,""))},githubUrl:function(path){return"https://github.com/sc-voice/scv-static/blob/main/".concat(path)}},computed:{version:function(){return c(169).version},js:function(){return o.ScvSrc}}},h=(c(406),c(7)),S=c(22),m=c.n(S),w=c(402),j=c(60),component=Object(h.a)(f,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("v-sheet",{staticClass:"content",attrs:{light:""}},[c("div",{staticClass:"content-nav"},[c("v-btn",{staticClass:"scv-icon-btn",attrs:{icon:""},on:{click:function(n){return t.clickHome()}}},[c("home-icon",{staticClass:"scv-settings-icon"})],1),t._v(" "),c("scv-settings",{attrs:{monolingual:"de",version:t.version,dark:"",js:t.js}})],1),t._v(" "),c("div",{staticClass:"content-search"},[c("scv-search-field",{attrs:{lang:t.lang,js:t.js}}),t._v(" "),c("scv-results",{attrs:{lang:t.lang,js:t.js}})],1),t._v(" "),c("scv-sutta",{attrs:{js:t.js}})],1)}),[],!1,null,null,null);n.default=component.exports;m()(component,{VBtn:w.a,VSheet:j.a})}}]);