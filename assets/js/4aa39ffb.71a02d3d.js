"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[817],{7942:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(959);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(r),d=n,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(5882),n=(r(959),r(7942));const i={title:"Release v0.2.3",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.2.3"},l=void 0,o={permalink:"/bublik-release/release-v0.2.3",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-02-23-release-v0.2.3/index.mdx",source:"@site/blog/2024-02-23-release-v0.2.3/index.mdx",title:"Release v0.2.3",description:"We are happy to announce Bublik v0.2.3.",date:"2024-02-23T00:00:00.000Z",formattedDate:"February 23, 2024",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:.81,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/okt-limonikas",imageURL:"https://github.com/okt-limonikas.png",key:"okt-limonikas"}],frontMatter:{title:"Release v0.2.3",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.2.3"},nextItem:{title:"Release v0.2.2",permalink:"/bublik-release/release-v0.2.2"}},s={authorsImageUrls:[void 0]},c=[{value:"User preferences",id:"user-preferences",level:3},{value:"Run results diff highlight",id:"run-results-diff-highlight",level:3},{value:"Performance regression",id:"performance-regression",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\udc77\u200d Build System",id:"-build-system",level:3},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:3},{value:"Backend",id:"backend",level:3}],u={toc:c};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are happy to announce ",(0,n.kt)("strong",{parentName:"p"},"Bublik v0.2.3"),"."),(0,n.kt)("h1",{id:"highlights"},"Highlights"),(0,n.kt)("h3",{id:"user-preferences"},"User preferences"),(0,n.kt)("p",null,"Now you can adjust some settings and default in user settings if you have an account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"user prefs",src:r(4981).Z,width:"3411",height:"2035"})),(0,n.kt)("h3",{id:"run-results-diff-highlight"},"Run results diff highlight"),(0,n.kt)("p",null,"Now you can click on result row to highlight parameter difference relative to click row"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"run highlight",src:r(645).Z,width:"3411",height:"2035"})),(0,n.kt)("h3",{id:"performance-regression"},"Performance regression"),(0,n.kt)("p",null,"We've added simple form to catch regressions in speed\nList of URLs can be configured via config options"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"perf test",src:r(7930).Z,width:"2688",height:"2034"})),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("h3",{id:"frontend"},"Frontend"),(0,n.kt)("h3",{id:"-build-system"},"\ud83d\udc77\u200d Build System"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"docker:")," add docker for easily bootstrapping dev env (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/f0da04db315506a64d04e8932f265fc0be6d250f"},"f0da04d"),")")),(0,n.kt)("h3",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"providers:")," ","[tooltip]"," disable hoverable content (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/dc6baf5ee560c7ed9881802efde702607def69b4"},"dc6baf5"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ui:")," ","[checkbox]"," not updating on label click (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/3475b01081281b6766da0cd691df52d2c5aa1efc"},"3475b01"),")")),(0,n.kt)("h3",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"log:")," make log page respect user preferences (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/ef5ebe34c5c9954252dc0d3cebfe09af2a273c45"},"ef5ebe3"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"performance:")," add view for bublik performance self-testing (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/2a3619b4dc8f3258459d84e3816fb5c5bd3060b9"},"2a3619b"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"run:")," add ability to highlight param difference (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/b75d2956820c99673e4516d7ffa9522cdcb7a205"},"b75d295"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ui:")," add radio group component (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/aa27baa741f637dcdb39235b5233f1506c0653f8"},"aa27baa"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"user:")," ","[preferences]"," add user preferences form (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/2ce58cebce2e08bf884f2669e0fbb3aa57fa5ba3"},"2ce58ce"),")")),(0,n.kt)("h3",{id:"backend"},"Backend"))}f.isMDXComponent=!0},7930:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/perf-test-185afdee250f681f671b710f7c0c9be2.png"},645:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/run-highlight-3059426e8414593f07766fbbefe7facb.png"},4981:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/user-preferences-032c3884bffe806d937eb2c1a6f9ff43.png"}}]);