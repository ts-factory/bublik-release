"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[986],{7942:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(959);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2826:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(5882),i=(a(959),a(7942));const n={title:"Release v0.2.1",authors:["ol-limonikas"],tags:["release"],slug:"release-v0.2.1"},l=void 0,o={permalink:"/bublik-release/release-v0.2.1",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-12-29-release-v0.1.11/index.mdx",source:"@site/blog/2023-12-29-release-v0.1.11/index.mdx",title:"Release v0.2.1",description:"We are happy to announce Bublik v0.2.1.",date:"2023-12-29T00:00:00.000Z",formattedDate:"December 29, 2023",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:2.605,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/ol-limonikas",imageURL:"https://github.com/ol-limonikas.png",key:"ol-limonikas"}],frontMatter:{title:"Release v0.2.1",authors:["ol-limonikas"],tags:["release"],slug:"release-v0.2.1"},nextItem:{title:"Release v0.1.10",permalink:"/bublik-release/release-v0.1.10"}},s={authorsImageUrls:[void 0]},u=[{value:"Runs",id:"runs",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Profile",id:"profile",level:3},{value:"Admin",id:"admin",level:3},{value:"History expressions",id:"history-expressions",level:3},{value:"Import logs",id:"import-logs",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\u267b Code Refactoring",id:"-code-refactoring",level:4},{value:"\ud83d\udc77\u200d Build System",id:"-build-system",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature-1",level:4},{value:"\ud83d\udcbe DB changes",id:"-db-changes",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix-1",level:4},{value:"\u270f\ufe0f Other",id:"\ufe0f-other",level:4}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are happy to announce ",(0,i.kt)("strong",{parentName:"p"},"Bublik v0.2.1"),"."),(0,i.kt)("h1",{id:"highlights"},"Highlights"),(0,i.kt)("h3",{id:"runs"},"Runs"),(0,i.kt)("p",null,"We've added new mode for runs page which contains various charts to get an easy overview of filtered runs"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Some charts are clickable")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Runs charts",src:a(8353).Z,width:"4568",height:"2750"})),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"In this release we've added authentication with access to profile and user management for admins"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login form",src:a(9462).Z,width:"2830",height:"2034"})),(0,i.kt)("h3",{id:"profile"},"Profile"),(0,i.kt)("p",null,"Added initial profile page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Profile page",src:a(6426).Z,width:"2831",height:"2032"})),(0,i.kt)("h3",{id:"admin"},"Admin"),(0,i.kt)("p",null,"Admin management table"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin",src:a(3151).Z,width:"4492",height:"2704"})),(0,i.kt)("h3",{id:"history-expressions"},"History expressions"),(0,i.kt)("p",null,"Added expression support for multiple history fields"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"History expressions",src:a(9959).Z,width:"2894",height:"2078"})),(0,i.kt)("h3",{id:"import-logs"},"Import logs"),(0,i.kt)("p",null,"Integrated import logs"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Import logs",src:a(6311).Z,width:"2829",height:"2037"})),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"frontend"},"Frontend"),(0,i.kt)("h4",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashboard:")," add popover button with icon and comment if run is marked as compromised"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashboard:")," add TV mode for dashboard for fullscreen viewing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth:")," add authentication"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth:")," add user profile page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"import:")," integrate import logs inside bublik"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history:")," sync client filter state with search params")),(0,i.kt)("h4",{id:"-polish"},"\ud83d\udc85 Polish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ui")," improve scrollbar behaviour when main container is overflowing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ui")," convert all colors to HSL with support of opacity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashboard")," replace dashboard mode icons with updated ones"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashboard")," make dashboard errors to display properly")),(0,i.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashboard")," failing recurcively on dashboard fetch error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashboard")," not refetching dashboard when run is marked as compromised"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," changing date in form and closing not picking correct date"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," changing mode when no page exists returns 404")),(0,i.kt)("h4",{id:"-code-refactoring"},"\u267b Code Refactoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashboard")," refactor dashboard table as well as search params")),(0,i.kt)("h4",{id:"-build-system"},"\ud83d\udc77\u200d Build System"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ci")," update ci/cd actions to latest versions")),(0,i.kt)("h3",{id:"backend"},"Backend"),(0,i.kt)("h4",{id:"-new-feature-1"},"\ud83d\ude80 New Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"import log")," create API to return JSON import log"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add the ability to register users (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/fb0a4390ae22e4b6cdbcd3d29f89ea467a542195"},"fb0a439"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add the ability to log in (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/6428320b4517603bd4f49e151658748a5d9a1f28"},"6428320"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add the ability to get user info (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/e438cc5950966a8265a484a93c890e056a9ec643"},"e438cc5"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add the ability to refresh access token (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/891146419ec10df9777147ec581b05f502fbc0d0"},"8911464"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add the ability to log out (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/ffb2c80079020347fc649ea9df633fa78cb82730"},"ffb2c80"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add the ability to reset password by email (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/70f4c50baf99ec8cc1bf226185216cfb064ea6c3"},"70f4c50"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add the ability to reset password from the profile (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/9d43203d9163536d56331ae982edb807725f0aff"},"9d43203"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add admin functions and admin verification (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/e6a4e50d2ca8371d0225b5473fe54d60c6048cda"},"e6a4e50"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add the ability to update user info yourself (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/30a0029ec585e57e159d77ae9bb2750d84271e9c"},"30a0029"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," separate expressions by meta types"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," add verdicts expression"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," add test arguments expression")),(0,i.kt)("h4",{id:"-db-changes"},"\ud83d\udcbe DB changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auth")," add a custom User model")),(0,i.kt)("h4",{id:"-bug-fix-1"},"\ud83d\udc1b Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"import")," fix import from bublik.xml"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"urls")," fix dashboard redirect to v2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"log")," check the ID and the page query parameter value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"run stats")," take into account DU value when calculating run conclusion"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"run stats")," fix abnormal counter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," change error reporting in filtering by expressions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," fix filtering by expressions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," fix a list of IDs of filtered runs generation")),(0,i.kt)("h4",{id:"\ufe0f-other"},"\u270f\ufe0f Other"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API v1 removal")," move redirection to flower to other redirects"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API v1 removal")," move meta categorization web interface to API v2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API v1 removal")," move import log web interface to API v2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API v1 removal")," extend the functionality of the import via API v2")))}m.isMDXComponent=!0},3151:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/admin-users-c1776e7d53845d96ba4bec0593d96cdc.png"},9462:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/auth-221bab7a09e1e1190c737b7da417a73e.png"},9959:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/history-fields-34fd72d1c5bf3f4aded4e5554a30db86.png"},6311:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/import-logs-1e2e21c27a6f2ebaab180f82efec36d6.png"},6426:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/profile-084d630c00ee29a28c5ab0c1955203e4.png"},8353:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/runs-charts-6235a2f4290e33a823e85332da6d76ca.png"}}]);