"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[832],{7942:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(959);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(a),p=n,b=f["".concat(s,".").concat(p)]||f[p]||m[p]||i;return a?r.createElement(b,o(o({ref:t},u),{},{components:a})):r.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(5882),n=(a(959),a(7942));const i={title:"Release v0.3.1",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.1"},o=void 0,l={permalink:"/bublik-release/release-v0.3.1",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-06-28-release-v0.3.1/index.mdx",source:"@site/blog/2024-06-28-release-v0.3.1/index.mdx",title:"Release v0.3.1",description:"We are happy to announce Bublik v0.3.1.",date:"2024-06-28T00:00:00.000Z",formattedDate:"June 28, 2024",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:1.255,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/okt-limonikas",imageURL:"https://github.com/okt-limonikas.png",key:"okt-limonikas"}],frontMatter:{title:"Release v0.3.1",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.1"},nextItem:{title:"Release v0.3.0",permalink:"/bublik-release/release-v0.3.0"}},s={authorsImageUrls:[void 0]},c=[{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4}],u={toc:c};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are happy to announce ",(0,n.kt)("strong",{parentName:"p"},"Bublik v0.3.1"),"."),(0,n.kt)("p",null,"In the latest release of our app, we've introduced several new features and improvements. Notably, we've enhanced the history search form with a new ",(0,n.kt)("inlineCode",{parentName:"p"},"labels"),' field.\nThe reports section now supports formatters to display "%" signs, handles API errors more gracefully, and added table titles. We\'ve also fixed various bugs, including default values in the history search form. Additionally, we polished the UI with background overlays in the command menu.'),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("h3",{id:"frontend"},"Frontend"),(0,n.kt)("h4",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"history:")," added labels field to history global search form (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/5fc9e7b0418843fefa78ae7c744d1fb341b8f441"},"5fc9e7b"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"history:")," added scroll to top of the page on page change (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/634934fce95fc155a0955056f984fe15ba67945f"},"634934f"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:"),' added formatters support to show "%" sign (',(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/5e55703929e931e864c5ac0806770bf8c77cef3f"},"5e55703"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," added handling for API errors for report page (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/323d7bafbdcde44a074132dbc27034b5dc356b70"},"323d7ba"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," added table title from Y axis label (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/c5d3498f51f1d5b2184eaef231af3bf27a71bed2"},"c5d3498"),")")),(0,n.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"history:")," fixed missing default values for history global search form (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/f09609984044c74193441d909ef6334aff83b385"},"f096099"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"history:")," made field names consistent in search form (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/6f569afd25428e4640b2d13b37790fa131def6d6"},"6f569af"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"log:")," added option to contain label inside canvas container (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/5c079461bb1a8c04168f19b7bab6009f96197ccc"},"5c07946"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," fixed axis label overflow inside canvas container (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/79b541646f429c2d14bfb7b62e3854a0180643bb"},"79b5416"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," fixed unstable key for report header list item (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/a6ac058b7e85caf3f7704027a895b74c0a425289"},"a6ac058"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"run:")," fixed copying revision metadata without key (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/eefdf45f9d8eeb2b206a1678048db72d835b5482"},"eefdf45"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"runs:")," ","[form]"," fixed crash when opening tags input (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/90e3df62602eb510344649eb9e8f0f0bd0e101c9"},"90e3df6"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ui:")," ","[combobox]"," fixed selection change callback type (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/9d16f197c3078560c944739fef630646fd551773"},"9d16f19"),")")),(0,n.kt)("h4",{id:"-polish"},"\ud83d\udc85 Polish"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"command:")," added background overlay to command menu (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/08bf23e6b43d0c1c45d7cf2921c852eabd9b9767"},"08bf23e"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"run:")," ","[reports]"," added gap between exit icon and report label (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/de2dd4dd698e8864bc250a7ea0ec6ca60668ecf5"},"de2dd4d"),")")))}f.isMDXComponent=!0}}]);