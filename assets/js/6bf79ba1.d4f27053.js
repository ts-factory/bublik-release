"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[5205],{7942:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var i=a(959);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=n,p=m["".concat(s,".").concat(f)]||m[f]||u[f]||r;return a?i.createElement(p,o(o({ref:t},d),{},{components:a})):i.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3676:(e,t,a)=>{a.d(t,{Z:()=>p});var i=a(959),n=a(5924),r=a(1013),o=a(9174);const l="admonition_VRRA",s="admonitionHeading_z6R5",c="admonitionIcon_lorP",d="admonitionContent_Nqwa";const m={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function f(e){const{mdxAdmonitionTitle:t,rest:a}=function(e){const t=i.Children.toArray(e),a=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=i.createElement(i.Fragment,null,t.filter((e=>e!==a)));return{mdxAdmonitionTitle:a,rest:n}}(e.children);return{...e,title:e.title??t,children:a}}function p(e){const{children:t,type:a,title:o,icon:p}=f(e),b=function(e){const t=u[e]??e,a=m[t];return a||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),m.info)}(a),h=o??b.label,{iconComponent:g}=b,k=p??i.createElement(g,null);return i.createElement("div",{className:(0,n.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${b.infimaClassName}`,l)},i.createElement("div",{className:s},i.createElement("span",{className:c},k),h),i.createElement("div",{className:d},t))}},9919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var i=a(5882),n=(a(959),a(7942)),r=a(659),o=a(3676);const l={title:"Release v0.5.0",authors:["okt-limonikas","ol-nata"],tags:["release"],slug:"release-v0.5.0"},s=void 0,c={permalink:"/bublik-release/release-v0.5.0",editUrl:"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-10-16-release-v0.5.0/index.mdx",source:"@site/blog/2024-10-16-release-v0.5.0/index.mdx",title:"Release v0.5.0",description:"We are happy to announce Bublik v0.5.0.",date:"2024-10-16T00:00:00.000Z",formattedDate:"October 16, 2024",tags:[{label:"release",permalink:"/bublik-release/tags/release"}],readingTime:2.525,hasTruncateMarker:!0,authors:[{name:"Kostromin Danil",title:"Bublik UI Maintainer",url:"https://github.com/okt-limonikas",imageURL:"https://github.com/okt-limonikas.png",key:"okt-limonikas"},{name:"Rybchenko Natalia",title:"Bublik Backend Maintainer",url:"https://github.com/ol-nata",imageURL:"https://github.com/ol-nata.png",key:"ol-nata"}],frontMatter:{title:"Release v0.5.0",authors:["okt-limonikas","ol-nata"],tags:["release"],slug:"release-v0.5.0"},prevItem:{title:"Release v0.6.0",permalink:"/bublik-release/release-v0.6.0"},nextItem:{title:"Release v0.4.3",permalink:"/bublik-release/release-v0.4.3"}},d={authorsImageUrls:[void 0,void 0]},m=[{value:"Highlights",id:"highlights",level:2},{value:"Sticky Stacked Headers",id:"sticky-stacked-headers",level:3},{value:"Small UI Improvements",id:"small-ui-improvements",level:3},{value:"Config Font Size",id:"config-font-size",level:3},{value:"Config Exists",id:"config-exists",level:3},{value:"Updated Record Config Header",id:"updated-record-config-header",level:3},{value:"Change Dashboard Headers Order",id:"change-dashboard-headers-order",level:3},{value:"Add Report Argument Labels",id:"add-report-argument-labels",level:3},{value:"Admin Section",id:"admin-section",level:2},{value:"Update Steps",id:"update-steps",level:3},{value:"Important Info",id:"important-info",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\u267b Code Refactoring",id:"-code-refactoring",level:4},{value:"\ud83d\udce6 Chores",id:"-chores",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature-1",level:4},{value:"\ud83d\udc85 Polish",id:"-polish-1",level:4},{value:"\ud83d\udce6 Chores",id:"-chores-1",level:4},{value:"\u267b Code Refactoring",id:"-code-refactoring-1",level:4}],u={toc:m};function f(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are happy to announce ",(0,n.kt)("strong",{parentName:"p"},"Bublik v0.5.0"),"."),(0,n.kt)("p",null,"In this release we've added ",(0,n.kt)("strong",{parentName:"p"},"sticky stacked headers")," for reports and fixed some bugs for configs also added config font size settings. We also made the report record headers more readable, made the x-axis and sequence group argument labels configurable, and made it possible to change the order of the dashboard columns. For administrators, added a command to reformat configurations."),(0,n.kt)("h2",{id:"highlights"},"Highlights"),(0,n.kt)("h3",{id:"sticky-stacked-headers"},"Sticky Stacked Headers"),(0,n.kt)("video",{controls:!0,width:"100%",height:"100%"},(0,n.kt)("source",{src:r.Z})),(0,n.kt)("h3",{id:"small-ui-improvements"},"Small UI Improvements"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Small UI Improvements",src:a(5060).Z,width:"3344",height:"1980"})),(0,n.kt)("h3",{id:"config-font-size"},"Config Font Size"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Font Size",src:a(7683).Z,width:"3344",height:"1982"})),(0,n.kt)("h3",{id:"config-exists"},"Config Exists"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Config Exists",src:a(5355).Z,width:"3380",height:"2002"})),(0,n.kt)("h3",{id:"updated-record-config-header"},"Updated Record Config Header"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Config Header",src:a(5046).Z,width:"3344",height:"1980"})),(0,n.kt)("h3",{id:"change-dashboard-headers-order"},"Change Dashboard Headers Order"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Change Dashboard Headers Order",src:a(3534).Z,width:"3344",height:"1980"})),(0,n.kt)("h3",{id:"add-report-argument-labels"},"Add Report Argument Labels"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Args",src:a(9966).Z,width:"3344",height:"1982"})),(0,n.kt)("h2",{id:"admin-section"},"Admin Section"),(0,n.kt)("h3",{id:"update-steps"},"Update Steps"),(0,n.kt)("p",null,"Deployment: ",(0,n.kt)("inlineCode",{parentName:"p"},"./scripts/deploy --steps django_settings run_services")),(0,n.kt)(o.Z,{type:"danger",icon:"\ud83d\udca1",title:"Upgrade",mdxType:"Admonition"},"When upgrading to this version, you need to reformat all configurations."," ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("b",null,"Follow these steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Activate the virtual environment: ",(0,n.kt)("code",null,"source .env/bin/activate")),(0,n.kt)("li",null,"Call the configuration reformatting command:"," ",(0,n.kt)("code",null,"python manage.py reformat_configs")))),(0,n.kt)("h3",{id:"important-info"},"Important Info"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Configurations whose automatic formatting has failed will not be supported by Bublik. Either reformat them manually or delete.")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("h3",{id:"frontend"},"Frontend"),(0,n.kt)("h4",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"configs:")," ","[editor]"," added setting to change font size (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/53ef50e029270879fc73d9010998d17b51e0af06"},"53ef50e"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/issues/145"},"#145")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"configs:")," added shortcut to trigger autocomplete in editor ",(0,n.kt)("inlineCode",{parentName:"li"},"ctrl+\\")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/e5f6078a60f0b6ee38e1e36bd7da3a634e058ade"},"e5f6078"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/issues/144"},"#144")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," added button to copy link for currently open report (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/83f5c6337f21a48d515c57959d926205b7c45c8a"},"83f5c63"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/issues/152"},"#152")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," added link to config used for generation current report (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/3f606cc063c7305fdb9648542781d3e407c86cb3"},"3f606cc"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/issues/151"},"#151")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," added sticky-stacked headers for all levels (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/f0ce3af9ac834a547591ddcdaeec76eed27145be"},"f0ce3af"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/issues/147"},"#147"))),(0,n.kt)("h4",{id:"-polish"},"\ud83d\udc85 Polish"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"history:")," ","[plots]"," moved links for plot point to modal header (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/38d822197ba8cc2c0bc751214680f14a0de9c9e2"},"38d8221"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"log:")," fixed button for log filters being shown on top of the new bug modal (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/8fd958bd10515163c8eb9d2c6acb76d05b0a74ed"},"8fd958b"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," fixed missing border in case ",(0,n.kt)("inlineCode",{parentName:"li"},"multiple_sequences")," is ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/46d2b14bb6934787cf16913bd7af56fe42f9559a"},"46d2b14"),")")),(0,n.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"configs:"),' added modal to show "navigate to existing config" if it exists (',(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/4639f2127d6963406cb54d134c626b5c43bd3ad4"},"4639f21"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"configs:")," allowed partial updates for config (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/7b8150d76f9724b8191a76e99487eb27ba42dd9e"},"7b8150d"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"log,run:"),' fixed parameters incorrectly cutting off "=" (',(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/b6d2032255ae3c8918f93891d0d055a95d674583"},"b6d2032"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/issues/137"},"#137"))),(0,n.kt)("h4",{id:"-code-refactoring"},"\u267b Code Refactoring"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"build:")," adjusted release config to sort sections (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/9d1affc83e4e5ba6374c227db3da7c50bf62f6bc"},"9d1affc"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/issues/138"},"#138")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"configs:")," extracted all components to improve readability (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/df9cbc3c7b92d04d5c37d69dffdcfaac2555d220"},"df9cbc3"),")")),(0,n.kt)("h4",{id:"-chores"},"\ud83d\udce6 Chores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sidebar:")," moved history and measurements links to the bottom (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/commit/b48007433f5679d642eab3884abb47d3d4f3315d"},"b480074"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik-ui/issues/139"},"#139"))),(0,n.kt)("h3",{id:"backend"},"Backend"),(0,n.kt)("h4",{id:"-new-feature-1"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"management:")," add ability to reformat configs (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/38b843519a76a9e8384b02270134cd6422f35e8b"},"38b8435"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"management:")," update reformat configs command (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/000c27f0d5b8a26fff9a4fad669fa257cb6dfb2d"},"000c27f"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dashboard:")," make it possible to sort columns (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/e837f0ebbb9b04450f4d79c7c8ffc35a5950e1db"},"e837f0e"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"management:")," update reformat configs command (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/0a9b06e19caae735c8228a089027356386adda3e"},"0a9b06e"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"config:")," format the main config during migration (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/74f10a7110fb80ef713b0343a1cb005204a7dea3"},"74f10a7"),")")),(0,n.kt)("h4",{id:"-polish-1"},"\ud83d\udc85 Polish"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," make measurement chart label more readable (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/546ad9053ba2465bbef9c7d6c6b8b2870e25a9a7"},"546ad90"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," make headers more readable (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/063a325b39c9675c3c03018bf2d6c9d6aaed5729"},"063a325"),")")),(0,n.kt)("h4",{id:"-chores-1"},"\ud83d\udce6 Chores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"settings:")," increase the access token lifetime (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/4dbf1b0bbfb3978ba59193470989d3ca32e02eee"},"4dbf1b0"),")")),(0,n.kt)("h4",{id:"-code-refactoring-1"},"\u267b Code Refactoring"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cleanup:")," apply linter to report services (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/6610fac7223627cae4863847fa3c696c6173684a"},"6610fac"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"report:")," apply linter to report components (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/06ba32c087974e61baab2c29d89fe871d32c37d5"},"06ba32c"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"config:")," refactor the main config migration (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ts-factory/bublik/commit/0dc8df50390f15857c39b7b79d8195d490bce88f"},"0dc8df5"),")")))}f.isMDXComponent=!0},659:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/medias/output-4450e60bb4614a0de9ecd3f6df13425b.mp4"},3534:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/config-header-179e6974ae09f2be0f3133dc962a4792.png"},5355:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/exists_config-5ac47154ee9cc4a94ea7660f91d2f508.png"},7683:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/font-size-8a4a08bc734fca90daa6de6813ebc8dc.png"},5046:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/report-label-ff0758e38b74dafe46e238af50538cf3.png"},5060:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/reports-d4e87d12e9f9e60c9ad028b29b86ee02.png"},9966:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/seq-824fa96d0a261f4bb1ed6e570e3ab971.png"}}]);