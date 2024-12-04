"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[516],{7942:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(959);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=o,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(b,n(n({ref:t},u),{},{components:a})):r.createElement(b,n({ref:t},u))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(5882),o=(a(959),a(7942));const i={title:"Release v0.3.0",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.0"},n=void 0,l={permalink:"/bublik-release/release-v0.3.0",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-06-06-release-v0.3.0/index.mdx",source:"@site/blog/2024-06-06-release-v0.3.0/index.mdx",title:"Release v0.3.0",description:"We are happy to announce Bublik v0.3.0.",date:"2024-06-06T00:00:00.000Z",formattedDate:"June 6, 2024",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:2.595,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/okt-limonikas",imageURL:"https://github.com/okt-limonikas.png",key:"okt-limonikas"}],frontMatter:{title:"Release v0.3.0",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.0"},prevItem:{title:"Release v0.3.1",permalink:"/bublik-release/release-v0.3.1"},nextItem:{title:"Release v0.2.6",permalink:"/bublik-release/release-v0.2.6"}},c={authorsImageUrls:[void 0]},s=[{value:"Highlights",id:"highlights",level:2},{value:"Run Reports",id:"run-reports",level:3},{value:"Copy Short Link",id:"copy-short-link",level:3},{value:"Command Menu",id:"command-menu",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"\ud83d\udce6 Chores",id:"-chores",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\udd28 Issue Fix",id:"-issue-fix",level:4},{value:"\ud83d\udce6 Chores",id:"-chores-1",level:4}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are happy to announce ",(0,o.kt)("strong",{parentName:"p"},"Bublik v0.3.0"),"."),(0,o.kt)("p",null,"In this relaese we've added a new page featuring charts and tables to visualize and analyze run reports. Introduced a button that allows users to easily copy a short URL of the current page for sharing.\nAdded navigation shortcuts for quick access to pages, enhancing user experience."),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("h3",{id:"run-reports"},"Run Reports"),(0,o.kt)("p",null,"Now you can use Bublik for run reports building. To build a run report, an appropriate configuration is required. Information about the run report configuration format and its location can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ts-factory/bublik/blob/main/doc/wiki/reports.md"},"doc/wiki/reports.md"),". An example of the run report configuration can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ts-factory/bublik/blob/main/doc/wiki/report_config.json"},"doc/wiki/report_config.json"),"."),(0,o.kt)("p",null,"You can find available reports on run page"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Report Button",src:a(9709).Z,width:"3376",height:"2072"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Report Page",src:a(7182).Z,width:"3376",height:"2066"})),(0,o.kt)("h3",{id:"copy-short-link"},"Copy Short Link"),(0,o.kt)("p",null,"You can shortcut button to copy short link of the current page on right top corner"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy Link Button Run Page",src:a(5879).Z,width:"3354",height:"2078"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy Link Button Runs Page",src:a(7071).Z,width:"3352",height:"2078"})),(0,o.kt)("h3",{id:"command-menu"},"Command Menu"),(0,o.kt)("p",null,"We've added command menu with some shortcuts to common actions, pages"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Command",src:a(7792).Z,width:"3352",height:"2078"})),(0,o.kt)("p",null,"Also you can copy short link to current page from command menu"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Command Copy",src:a(7355).Z,width:"3350",height:"2078"})),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added missing dependency to useMemo hook for args calculation (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/b67f56bf8378c5556eaedce4553f0f40cb99e7bb"},"b67f56b"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added missing dependency to useMemo hook for chart series calculation (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/38b7682b700d5ad82430219adfce7858d0009b40"},"38b7682"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:"),' added rel="noreferrer" to external links (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/867099344a49554f29899729860d032969e20aa7"},"8670993"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," fixed build issues with tests (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/d965e1b6692939c2b92775659cbb208df7c4d425"},"d965e1b"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," fixed scroll to element id containing only numbers (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/960d826842271495710927543bf0d46f2c0b948c"},"960d826"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," prevent conditional calling of API query hook (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/976998be71777a01290482fd0ffd50aca09d1ce1"},"976998b"),")")),(0,o.kt)("h4",{id:"-polish"},"\ud83d\udc85 Polish"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added underline on hover for revision link (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/9dc8ab3ff464eeb72dc2675ed3cf8e8a0ce73b2a"},"9dc8ab3"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," fixed styles for dropdown menu item (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/89a7921867a4be3710a06cbb4ee8f420d027257d"},"89a7921"),")")),(0,o.kt)("h4",{id:"-chores"},"\ud83d\udce6 Chores"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:")," upgraded cmdk package to latest version (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/196d26bddd609e802705f20a5cf5ace1b676a598"},"196d26b"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"icons:")," added upload icon to icon library (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/9ea35bb226ba1c4b7b5812342bea7a771e7521d6"},"9ea35bb"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," extracted run-report test block (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/17ac97789e9b34e738761faa2d8bd93687eb2fb3"},"17ac977"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," generated library for run report (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/c8fdf56646407d7d9a0e7ef16205754bc26795ff"},"c8fdf56"),")")),(0,o.kt)("h4",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:"),' added "copy short url" button to dashboard page (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/5794f1bd990b99029ade8224ecdf6bdaf54f2be9"},"5794f1b"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:"),' added "copy short url" button to history page (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/4f5aa785eeb8d9268fba4757d2c80192fc2ea0c6"},"4f5aa78"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:"),' added "copy short url" button to run page (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/a661fed0888727398fc44a304cdddd52f9baa501"},"a661fed"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:"),' added "copy short url" to runs page (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/6afdd3a5bcf0896a00e0acab3b3be29438586f93"},"6afdd3a"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:"),' added "copy-short-url" button to log page (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/19b6ce1316de6cf3c7aedcb3425602e4ab4af4bc"},"19b6ce1"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:"),' added "copy-short-url" button to measurements page (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/3aa5b5e7e89acbbb4ab90f8484da9ed1d11c521a"},"3aa5b5e"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:"),' added "copy-short-url" button to run page (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/ba2ff97a93a8961b02c36c9ef92d7f591a5f6105"},"ba2ff97"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:")," added button for copying short url to current page (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/02af6f8ef0cacd95fef206a4cdba60f5106b08db"},"02af6f8"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:")," added command component (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/8c416c1e023585ec6c93d01c205b0489d4373caa"},"8c416c1"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:")," added component for command to copy short url (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/a5459d301a0b63059462b824633842e2043bde1a"},"a5459d3"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:")," added endpoint for creating short url (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/2fd89ddf9f379861c29d4e15a45ceff101b1f923"},"2fd89dd"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"copy-short-url:"),' generated library for "copy short url button" (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/04a093141098c9f6c1cb856656aa81e699f5a3bd"},"04a0931"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added dropdown for run configs links (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/c5fb2811ffe8656714d499ef090df4ccd5e09fc6"},"c5fb281"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added initial report header (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/dc1195c2471d0dbfc1c70d4fc07199d3187947eb"},"dc1195c"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added run report container component (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/48591fc4d874ddceb0bf614efa6c9de6e72d1ce4"},"48591fc"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added sidebar link for run report (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/bdc2f1c9aadd5892b65ea7c1ae614c341027bc68"},"bdc2f1c"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added table and chart components (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/4e4d3a75d17c8c03f6b898265b65d4d4333fc42a"},"4e4d3a7"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," added warnings popover (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/46d983dad714768c6f6676d1b4d1dba4c22c8dcd"},"46d983d"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reports:")," made revision links clickable (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/41d50d8dbb44d47e1daf735d64ad0beedfe264e9"},"41d50d8"),")")),(0,o.kt)("h3",{id:"backend"},"Backend"),(0,o.kt)("h4",{id:"-issue-fix"},"\ud83d\udd28 Issue Fix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support Debian 12 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/issues/17"},"#17")),(0,o.kt)("li",{parentName:"ul"},"Add URL shortner ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/issues/26"},"#26")),(0,o.kt)("li",{parentName:"ul"},"Add run reports support ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/issues/32"},"#32"))),(0,o.kt)("h4",{id:"-chores-1"},"\ud83d\udce6 Chores"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cleanup:")," remove unnecessary logging (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/32dadc6cc862f3a7b38b8be4efa5cd9d90bb4a34"},"32dadc6"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cleanup:")," remove unnecessary manage.py call (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/4faeba97b3763ed8ef1291ba2127e81be5f4a036"},"4faeba9"),")")))}p.isMDXComponent=!0},7792:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cmd-1-f0f3c6ad133e48173dbe26ed3c56c5a7.png"},7355:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cmd-2-7f32099cf98a66da54c4347774f50449.png"},5879:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/copy-1-5e65fe44c2f365d62542089d323520dc.png"},7071:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/copy-2-a7f0741bf5a81d0bbe0f9edc5d1585d7.png"},9709:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/report-1-72d5bae82bd9e28f47e81fd72954eab7.png"},7182:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/report-2-b7f1818c3122456b448bc706982a8f34.png"}}]);