"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[67],{7942:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(959);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=i,b=m["".concat(s,".").concat(f)]||m[f]||p[f]||n;return a?r.createElement(b,o(o({ref:t},u),{},{components:a})):r.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(5882),i=(a(959),a(7942));const n={title:"Release v0.2.5",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.2.5"},o=void 0,l={permalink:"/bublik-release/release-v0.2.5",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-04-12-release-v0.2.5/index.mdx",source:"@site/blog/2024-04-12-release-v0.2.5/index.mdx",title:"Release v0.2.5",description:"We are happy to announce Bublik v0.2.5.",date:"2024-04-12T00:00:00.000Z",formattedDate:"April 12, 2024",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:1.55,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/okt-limonikas",imageURL:"https://github.com/okt-limonikas.png",key:"okt-limonikas"}],frontMatter:{title:"Release v0.2.5",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.2.5"},nextItem:{title:"Release v0.2.4",permalink:"/bublik-release/release-v0.2.4"}},s={authorsImageUrls:[void 0]},c=[{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"\u267b Code Refactoring",id:"-code-refactoring",level:4},{value:"\ud83d\udce6 Chores",id:"-chores",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\udd28 Issue Fix",id:"-issue-fix",level:4},{value:"\ud83d\udce6 Chores",id:"-chores-1",level:4}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are happy to announce ",(0,i.kt)("strong",{parentName:"p"},"Bublik v0.2.5"),"."),(0,i.kt)("p",null,'This update brings numerous enhancements to both the frontend and backend of Bublik. On the frontend, fixes were made to address issues like page overflow in the log section and adapting search parameters to API changes in history. Bugs such as app crashes due to toast messages on email confirmation page and various issues in the history section were resolved. Also we changed default logs to experimental ones by default. You can toggle those off in user settings if you have issues with experimental or use button above "Legacy" to disable experimental logs. Backend improvements include fixing issues with detailed run statistics and completing various chores to streamline operations. These changes aim to improve overall performance and functionality.'),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"frontend"},"Frontend"),(0,i.kt)("h4",{id:"-polish"},"\ud83d\udc85 Polish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"log:")," fix horizontal page overflow (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/803c05c27c99c1e88d34ef28d0048e9e26deea3e"},"803c05c"),")")),(0,i.kt)("h4",{id:"-code-refactoring"},"\u267b Code Refactoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," adapt search params to api changes (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/91ae184af0c0916cc074795f4c28b2c4379ef1a0"},"91ae184"),")")),(0,i.kt)("h4",{id:"-chores"},"\ud83d\udce6 Chores"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"log:")," change default log mode to experimental (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/d851f0412fc47c38455c103d709b7ba7f5592f0c"},"d851f04"),")")),(0,i.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth:")," prevent app crash caused by toast messages (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/ce1211ff30bffadfc4d246d0bb012a6714c51d2e"},"ce1211f"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," ","[checkbox]"," prevent double select (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/ab1d2ed3e5818a7fab759efe5aae4780ed22b148"},"ab1d2ed"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," ","[form]"," missing default values (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/ed7a34ae00d474530a0ca1172de7a51f71437fd8"},"ed7a34a"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," not display dates in legend (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/41a2a5a156ecd3eefe1c385060635478cf74ad8a"},"41a2a5a"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," skipping fetching data on direct navigation (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/bc721e1994a1fa34289051633616f00ba9462979"},"bc721e1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"log:")," scroll to saved line (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/41cf3567a58cf15dd654fb6c7f4b24b92a6f2c9d"},"41cf356"),")")),(0,i.kt)("h3",{id:"backend"},"Backend"),(0,i.kt)("h4",{id:"-issue-fix"},"\ud83d\udd28 Issue Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Negative values in detailed run statistics ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/issues/20"},"#20")),(0,i.kt)("li",{parentName:"ul"},"Strange percentages in run statistics ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/issues/22"},"#22"))),(0,i.kt)("h4",{id:"-chores-1"},"\ud83d\udce6 Chores"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," unify names of query params containing metas (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/3c7e0564730bc34c887a49d2eee66ac0affb84c4"},"3c7e056"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," support filtering by metas with type label (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/bbd72e6c46e4101f7459f16837283c40437e1c08"},"bbd72e6"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," structure the use of metas and their exprs (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/9f400c042bc701ef199641d82935cc921129d96b"},"9f400c0"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," structure the getting of query params (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/94c853be40d970be17e995b6f9caa2251cbd0166"},"94c853b"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," fix query param and variable names (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/84f5342c51eabe8ad3e4831410e3336c67ec5044"},"84f5342"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," add comments and division into blocks (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/b00caac3015021ddadd7b7da7e46c536b21a59b6"},"b00caac"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," make the order of getting data more logical (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/09f06e7f2ab15f75d2bbd20d56ddb991e1f98cd5"},"09f06e7"),")")))}m.isMDXComponent=!0}}]);