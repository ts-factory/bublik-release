"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[343],{7942:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(959);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),k=l,g=m["".concat(s,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(5882),l=(a(959),a(7942));const r={title:"Release v0.1.5",authors:["ol-limonikas"],tags:["release"],slug:"release-v0.1.5"},i=void 0,o={permalink:"/bublik-release/release-v0.1.5",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-05-31-release-v0.1.5/index.mdx",source:"@site/blog/2023-05-31-release-v0.1.5/index.mdx",title:"Release v0.1.5",description:"We are happy to announce Bublik v0.1.5",date:"2023-05-31T00:00:00.000Z",formattedDate:"May 31, 2023",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:3.655,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/ol-limonikas",imageURL:"https://github.com/ol-limonikas.png",key:"ol-limonikas"}],frontMatter:{title:"Release v0.1.5",authors:["ol-limonikas"],tags:["release"],slug:"release-v0.1.5"},prevItem:{title:"Release v0.1.8",permalink:"/bublik-release/release-v0.1.8"},nextItem:{title:"Release v0.1.3",permalink:"/bublik-release/release-v0.1.3"}},s={authorsImageUrls:[void 0]},u=[{value:"Reworked sidebar",id:"reworked-sidebar",level:3},{value:"New changelog UI",id:"new-changelog-ui",level:3},{value:"Reworked run toolbar",id:"reworked-run-toolbar",level:3},{value:"Opening NOK results on link click",id:"opening-nok-results-on-link-click",level:3},{value:"New log UI",id:"new-log-ui",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\udcdd Documentation",id:"-documentation",level:4},{value:"\ud83d\udc77\u200d Build System",id:"-build-system",level:4},{value:"\ud83d\udd27 Continuous Integration | CI",id:"-continuous-integration--ci",level:4},{value:"\u267b Code Refactoring",id:"-code-refactoring",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\u23ea Reverts",id:"-reverts",level:4},{value:"\u2705 Tests",id:"-tests",level:4},{value:"\ud83d\udce6 Chores",id:"-chores",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\udc85 Polish",id:"-polish-1",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature-1",level:4}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We are happy to announce ",(0,l.kt)("strong",{parentName:"p"},"Bublik v0.1.5"),"\nIn this release we added initial support for new log UI. Added ability to open/collapse sidebar menus.\nMany more style and internal changes"),(0,l.kt)("h1",{id:"highlights"},"Highlights"),(0,l.kt)("h3",{id:"reworked-sidebar"},"Reworked sidebar"),(0,l.kt)("p",null,"We've added ability to show/hide collapsed menus inside sidebar at any time. Now you can jump back and forth between different pages"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Also you can now hide/show sidebar by pressing ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"S"))," on the keyboard")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Reworked sidebar",src:a(2436).Z,width:"507",height:"2027"})),(0,l.kt)("h3",{id:"new-changelog-ui"},"New changelog UI"),(0,l.kt)("p",null,"We also added changelog"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"New changelog",src:a(6413).Z,width:"2890",height:"2078"})),(0,l.kt)("h3",{id:"reworked-run-toolbar"},"Reworked run toolbar"),(0,l.kt)("p",null,"We've moved toolbar with various buttons"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Reworked toolbar",src:a(2318).Z,width:"3288",height:"1056"})),(0,l.kt)("p",null,"Added ability to hide/show columns via dropdown menu"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Toggle run table columns",src:a(3634).Z,width:"3258",height:"792"})),(0,l.kt)("h3",{id:"opening-nok-results-on-link-click"},"Opening NOK results on link click"),(0,l.kt)("p",null,"You can now go to run with opened results by clicking on NOK with ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+click")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nok results",src:a(6170).Z,width:"3356",height:"1860"})),(0,l.kt)("h3",{id:"new-log-ui"},"New log UI"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This is experimental feature and may not work as expected!")),(0,l.kt)("p",null,"In this release we started to integrate new log UI this is still work in progress.\nWe want to hear your feedback and features you maybe want :)"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"New log UI",src:a(2316).Z,width:"3356",height:"2076"})),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"frontend"},"Frontend"),(0,l.kt)("h4",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"config:")," adjust docs to new build pipeline")),(0,l.kt)("h4",{id:"-build-system"},"\ud83d\udc77\u200d Build System"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"size:")," extract echarts chunk manulally to reduce size"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vite:")," add ability to specify remote JSON logs storage")),(0,l.kt)("h4",{id:"-continuous-integration--ci"},"\ud83d\udd27 Continuous Integration | CI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"build:")," fix failing to parse passed args"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"build:")," skip changelog for beta releases")),(0,l.kt)("h4",{id:"-code-refactoring"},"\u267b Code Refactoring"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"icon:")," convert all icons to ",(0,l.kt)("inlineCode",{parentName:"li"},".svg")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," change displayed run columns"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ui:")," replace all skeletons with component")),(0,l.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"history:")," lazy loading modules"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," ","[frame]"," not saving line number on subsequent navigations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"runs:")," date range picker no label warning"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"runs:")," importing from lazy loaded module")),(0,l.kt)("h4",{id:"-polish"},"\ud83d\udc85 Polish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"animation:")," ","[dialog]"," add animation to dialog content"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"changelog:")," add confetti explosion on new release"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"history:")," add animation to context menu"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"history:")," align reset buttons with close button"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"import:")," fix overflow scrollbars"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"import:")," make modal title bigger"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," ","[table]"," add group columns with border"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," add background on row hover"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," uppercase table columns"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltip:")," change shadow")),(0,l.kt)("h4",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ci:")," add changelog to the ui"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"faq:")," add latest tag info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"formatting:")," convert formatting to use tabs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," add experimental support for JSON logs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," add initial support for displaying log content"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," add pagination support to schema"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," add pagination support to schema"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," ","[results-table]"," add key list with URLs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," add column visibility toggle to run/diff pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," add tooltips to details/toolbar buttons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sidebar:")," add collapsible links"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sidebar:")," show/hide sidebar on ",(0,l.kt)("inlineCode",{parentName:"li"},"s")," keypress"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ui:")," add dropdown menu component"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ui:")," add skeleton component")),(0,l.kt)("h4",{id:"-reverts"},"\u23ea Reverts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," ","[frame]"," not saving line number on navigations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," rollback renaming column ids for run table")),(0,l.kt)("h4",{id:"-tests"},"\u2705 Tests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ci:")," fix lint command"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"e2e:")," add playwright support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"history:")," add some snapshot tests to history"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"import:")," fix snapshot for overflow table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"import:")," fix snapshot test for loading table state"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," remove build target from lib"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"run:")," fix div instead of button when no URL present"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ui:")," ","[clock]"," fix timezone issue in CI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ui:")," ","[icon]"," fix svgr not loading in vitest")),(0,l.kt)("h4",{id:"-chores"},"\ud83d\udce6 Chores"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"build:")," migrate from webpack to vite"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"build:")," upgrade vite to v4.3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"changelog:")," ","[modal]"," disable modal until checkbox is ready"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"changelog:")," lazy load changelog"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ci:")," add new commit types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ci:")," fix compare URL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ci:")," update pipeline for manual releases"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"deploy:")," adjust API for new JSON format"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"env:")," move all env configs to bublik app config"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," add run ID to tab title"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"log:")," remove zod schema converting to JSON from production bundle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nx:")," upgrade nx to 16.2.1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"release:")," v0.16.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"test:")," update snapshots")),(0,l.kt)("h3",{id:"backend"},"Backend"),(0,l.kt)("h4",{id:"-polish-1"},"\ud83d\udc85 Polish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"update run stats structure"),(0,l.kt)("li",{parentName:"ul"},"reduce the number of requests when fetching the result details"),(0,l.kt)("li",{parentName:"ul"},"reduce the number of queries to the DB for retrieving metas and test arguments"),(0,l.kt)("li",{parentName:"ul"},"recalculate stats for the previously imported runs"),(0,l.kt)("li",{parentName:"ul"},"avoid measurement results dups after live import")),(0,l.kt)("h4",{id:"-new-feature-1"},"\ud83d\ude80 New Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"implement the new API to get JSON log URL"),(0,l.kt)("li",{parentName:"ul"},"add runtime to the import table")))}m.isMDXComponent=!0},2436:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Capture-2023-06-09-103917-7537eb18a729e619d54ab8ee1b25cb77.png"},6413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Capture-2023-06-09-104647-bc1ab7c37122fbd3b670e7333e4ef076.png"},2318:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Capture-2023-06-09-104900-99f5c6c88eef27bb57deb8ae95bbb7c0.png"},3634:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Capture-2023-06-09-105115-e572c161cfa997960473a5bfc22ca5f2.png"},6170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Capture-2023-06-09-105620-c7f8645855d078395009dae0eea9a785.png"},2316:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Capture-2023-06-09-110507-8ae21225fb93192e19f6214a9a186e06.png"}}]);