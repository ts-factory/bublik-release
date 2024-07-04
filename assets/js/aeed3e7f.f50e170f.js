"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[811],{7942:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(959);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(5882),n=(r(959),r(7942));const l={title:"Release v0.3.2",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.2"},i=void 0,o={permalink:"/bublik-release/release-v0.3.2",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-07-04-release-v0.3.2/index.mdx",source:"@site/blog/2024-07-04-release-v0.3.2/index.mdx",title:"Release v0.3.2",description:"We are happy to announce Bublik v0.3.2.",date:"2024-07-04T00:00:00.000Z",formattedDate:"July 4, 2024",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:.795,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/okt-limonikas",imageURL:"https://github.com/okt-limonikas.png",key:"okt-limonikas"}],frontMatter:{title:"Release v0.3.2",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.2"},nextItem:{title:"Release v0.3.1",permalink:"/bublik-release/release-v0.3.1"}},s={authorsImageUrls:[void 0]},u=[{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\udce6 Chores",id:"-chores",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are happy to announce ",(0,n.kt)("strong",{parentName:"p"},"Bublik v0.3.2"),"."),(0,n.kt)("p",null,'In the latest release, we\'ve implemented several updates and improvements. We\'ve reordered buttons and links on run page. A new feature has been added to display aggregated values min/max in the logs. Bug fixes include modifying the log display to show only entries with aggr of "single" on the chart, making datasets for charts and tables optional in reports, and removing the "%" sign for values that are "-" or "na" in reports.'),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("h3",{id:"frontend"},"Frontend"),(0,n.kt)("h4",{id:"-chores"},"\ud83d\udce6 Chores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"build:")," upgraded pnpm setup action to latest version (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/290ad7757b9f588412c24138a45fd2d38d695ae0"},"290ad77"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"run:")," ","[details]"," changed order of buttons and links (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/fe9b0244ccf323f1278fac908e7bbe11f0724553"},"fe9b024"),")")),(0,n.kt)("h4",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"log:")," ","[mi]"," added display for aggregated values min/max (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/f476678ca34370d6a39e2b84f099e84eb22fb138"},"f476678"),")")),(0,n.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"log:")," ","[mi]"," display only entries with ",(0,n.kt)("inlineCode",{parentName:"li"},"aggr"),' of "single" on chart (',(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/e391d2aa6a78dfed7139e6d48783641eb8b6be84"},"e391d2a"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," made datasets for chart/table optional (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/ff7d724b37885c0f1fe00c2026c7dccf2f302027"},"ff7d724"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," removed ",(0,n.kt)("inlineCode",{parentName:"li"},"%"),' for values that are "-" or "na" (',(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/88e74167b337f2518bab036c2a0882d5cb9a9318"},"88e7416"),")")))}p.isMDXComponent=!0}}]);