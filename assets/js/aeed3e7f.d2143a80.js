"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[3811],{7942:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(959);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,f=m["".concat(s,".").concat(b)]||m[b]||p[b]||l;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(5882),n=(a(959),a(7942));const l={title:"Release v0.3.2",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.2"},i=void 0,o={permalink:"/bublik-release/release-v0.3.2",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-07-04-release-v0.3.2/index.mdx",source:"@site/blog/2024-07-04-release-v0.3.2/index.mdx",title:"Release v0.3.2",description:"We are happy to announce Bublik v0.3.2.",date:"2024-07-04T00:00:00.000Z",formattedDate:"July 4, 2024",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:1.24,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/okt-limonikas",imageURL:"https://github.com/okt-limonikas.png",key:"okt-limonikas"}],frontMatter:{title:"Release v0.3.2",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.2"},prevItem:{title:"Release v0.3.3",permalink:"/bublik-release/release-v0.3.3"},nextItem:{title:"Release v0.3.1",permalink:"/bublik-release/release-v0.3.1"}},s={authorsImageUrls:[void 0]},u=[{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\udce6 Chores",id:"-chores",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix-1",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature-1",level:4},{value:"\ud83d\udce6 Chores",id:"-chores-1",level:4}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are happy to announce ",(0,n.kt)("strong",{parentName:"p"},"Bublik v0.3.2"),"."),(0,n.kt)("p",null,'In the latest release, we\'ve implemented several updates and improvements. We\'ve reordered buttons and links on run page. A new feature has been added to display aggregated values min/max in the logs. Bug fixes include modifying the log display to show only entries with aggr of "single" on the chart, sorting points by x-axis value on a chart in reports, making report configs and building charts in reports more flexible, making datasets for charts and tables optional in reports, and removing the "%" sign for values that are "-" or "na" in reports.'),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("h3",{id:"frontend"},"Frontend"),(0,n.kt)("h4",{id:"-chores"},"\ud83d\udce6 Chores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"build:")," upgraded pnpm setup action to latest version (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/290ad7757b9f588412c24138a45fd2d38d695ae0"},"290ad77"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"run:")," ","[details]"," changed order of buttons and links (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/fe9b0244ccf323f1278fac908e7bbe11f0724553"},"fe9b024"),")")),(0,n.kt)("h4",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"log:")," ","[mi]"," added display for aggregated values min/max (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/f476678ca34370d6a39e2b84f099e84eb22fb138"},"f476678"),")")),(0,n.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"log:")," ","[mi]"," display only entries with ",(0,n.kt)("inlineCode",{parentName:"li"},"aggr"),' of "single" on chart (',(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/e391d2aa6a78dfed7139e6d48783641eb8b6be84"},"e391d2a"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," made datasets for chart/table optional (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/ff7d724b37885c0f1fe00c2026c7dccf2f302027"},"ff7d724"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," removed ",(0,n.kt)("inlineCode",{parentName:"li"},"%"),' for values that are "-" or "na" (',(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/88e74167b337f2518bab036c2a0882d5cb9a9318"},"88e7416"),")")),(0,n.kt)("h3",{id:"backend"},"Backend"),(0,n.kt)("h4",{id:"-bug-fix-1"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," fix incorrect measurement results order in datasets (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/2636d9ea9d54e41ebf0518867bbb83eea4f09019"},"2636d9e"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reports:")," fix generation of record IDs (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/bba7bcf351c138a3494fd7dcaac2815272cac88f"},"bba7bcf"),")")),(0,n.kt)("h4",{id:"-new-feature-1"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," allow extra args in 'records","_","order' in config (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/0301ce1a5d98198508d1f44869451368bfeb278c"},"0301ce1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," change handling of non-numeric values of x-axis arg (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/af65dac3645a9ef9ba195c127cba5187ae3393e5"},"af65dac"),")")),(0,n.kt)("h4",{id:"-chores-1"},"\ud83d\udce6 Chores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," make measurement units more readable (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/803c9a849756455ac2eb1ba1511e8c9b45492ee9"},"803c9a8"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cleanup:")," apply linter to reports related code (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/840543cb6d2e9ccb75b9bcec179b11d56a4e98aa"},"840543c"),")")))}m.isMDXComponent=!0}}]);