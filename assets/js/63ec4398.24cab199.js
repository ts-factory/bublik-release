"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[857],{7942:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var l=a(959);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return a?l.createElement(f,i(i({ref:t},d),{},{components:a})):l.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=a(5882),r=(a(959),a(7942));const n={title:"Release v0.1.2",authors:["ol-limonikas"],tags:["release"],slug:"release-v0.1.2"},i=void 0,o={permalink:"/bublik-release/release-v0.1.2",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-02-20-release-v0.1.2/index.mdx",source:"@site/blog/2023-02-20-release-v0.1.2/index.mdx",title:"Release v0.1.2",description:"We are happy to announce Bublik v0.1.2",date:"2023-02-20T00:00:00.000Z",formattedDate:"February 20, 2023",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:1.73,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/ol-limonikas",imageURL:"https://github.com/ol-limonikas.png",key:"ol-limonikas"}],frontMatter:{title:"Release v0.1.2",authors:["ol-limonikas"],tags:["release"],slug:"release-v0.1.2"},prevItem:{title:"Release v0.1.3",permalink:"/bublik-release/release-v0.1.3"},nextItem:{title:"Release v0.1.1",permalink:"/bublik-release/release-v0.1.1"}},s={authorsImageUrls:[void 0]},u=[{value:"Error details",id:"error-details",level:2},{value:"Example error",id:"example-error",level:3},{value:"History context menu",id:"history-context-menu",level:2},{value:"Tab names",id:"tab-names",level:2},{value:"Example tab names",id:"example-tab-names",level:3},{value:"Details diff",id:"details-diff",level:2},{value:"Example diff",id:"example-diff",level:3},{value:"Event logs",id:"event-logs",level:2},{value:"Example event logs table",id:"example-event-logs-table",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature-1",level:4},{value:"\ud83d\udcbe DB changes",id:"-db-changes",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix-1",level:4},{value:"\u270f\ufe0f Other",id:"\ufe0f-other",level:4}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are happy to announce ",(0,r.kt)("strong",{parentName:"p"},"Bublik v0.1.2")),(0,r.kt)("p",null,"In this release we focused on more robust error experience, so you can have more context on what exactly went wrong.\nAlso, we added more self-describing tab names, so you can easily find what you are looking for."),(0,r.kt)("h1",{id:"highlights"},"Highlights"),(0,r.kt)("h2",{id:"error-details"},"Error details"),(0,r.kt)("h3",{id:"example-error"},"Example error"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Error details",src:a(6556).Z,width:"3456",height:"2006"})),(0,r.kt)("h2",{id:"history-context-menu"},"History context menu"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Selecting tags will apply filters and refetch the data. ",(0,r.kt)("br",null),"\nIt works just like clicking refresh button")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"History context menu",src:a(3510).Z,width:"3456",height:"2004"})),(0,r.kt)("h2",{id:"tab-names"},"Tab names"),(0,r.kt)("h3",{id:"example-tab-names"},"Example tab names"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tab names",src:a(1862).Z,width:"1852",height:"216"})),(0,r.kt)("h2",{id:"details-diff"},"Details diff"),(0,r.kt)("h3",{id:"example-diff"},"Example diff"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Details diff",src:a(1784).Z,width:"3456",height:"2006"})),(0,r.kt)("h2",{id:"event-logs"},"Event logs"),(0,r.kt)("h3",{id:"example-event-logs-table"},"Example event logs table"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Events logs table",src:a(2250).Z,width:"3456",height:"2006"})),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"frontend"},"Frontend"),(0,r.kt)("h4",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"feat(history): add reset button to history global filter form"),(0,r.kt)("li",{parentName:"ul"},"feat(history): add context menu to history linear/aggregation tables"),(0,r.kt)("li",{parentName:"ul"},"feat(help): bake frontend revisions into deploy-info component at build time"),(0,r.kt)("li",{parentName:"ul"},"feat(dev): add events table with celery task status and links to logs/flower"),(0,r.kt)("li",{parentName:"ul"},"feat(run-diff): ","[details]"," add diff for run info details")),(0,r.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fix(history): remove unnecessary requests if no test name is found"),(0,r.kt)("li",{parentName:"ul"},"fix(history): failing to parse URL search params on some requests"),(0,r.kt)("li",{parentName:"ul"},"fix(runs): add total percentage of expected runs"),(0,r.kt)("li",{parentName:"ul"},"fix(run-diff): don't show suspence loading spinner for run-diff page"),(0,r.kt)("li",{parentName:"ul"},"fix(dev): flower URL is incorrect in iframe"),(0,r.kt)("li",{parentName:"ul"},"fix(ui): ","[datepickers]"," wrong order of date segments and wrong literals")),(0,r.kt)("h4",{id:"-polish"},"\ud83d\udc85 Polish"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"style(history): add backdrop blur for dialogs"),(0,r.kt)("li",{parentName:"ul"},"style(history): place duration in column to save some space"),(0,r.kt)("li",{parentName:"ul"},"style(run): add empty state for run page"),(0,r.kt)("li",{parentName:"ul"},"chore(sidebar): move flower/import/tests links under dev menu")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)("h4",{id:"-new-feature-1"},"\ud83d\ude80 New Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the table of import statuses is added to the dev section")),(0,r.kt)("h4",{id:"-db-changes"},"\ud83d\udcbe DB changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"added a new model - EventLog to log Bublik events")),(0,r.kt)("h4",{id:"-bug-fix-1"},"\ud83d\udc1b Bug Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parse and show plan info")),(0,r.kt)("h4",{id:"\ufe0f-other"},"\u270f\ufe0f Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"persistent option added to the Flower service to save Celery tasks after services restart"),(0,r.kt)("li",{parentName:"ul"},"changes applied to gunicorn and nginx to change max buffer and size of URIs")))}p.isMDXComponent=!0},1784:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/details-diff-362d21fb1e7af29b74ece1955e50994d.png"},2250:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/event-log-b1a345c2d06b43d73687257565ce3181.png"},3510:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/history-context-menu-d224229185019c7ac10be7400fef3f85.png"},6556:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/history-error-3ee9e03f1a1af89e42d885e651dfb45f.png"},1862:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/tabs-6e2c96b3dd54542c2a64d996d6cc19b7.png"}}]);