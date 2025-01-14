"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[585],{1420:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>c});var n=t(8723),i=t(5105),r=t(5136);const l={title:"Release v0.2.6",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.2.6"},a=void 0,o={authorsImageUrls:[void 0]},c=[{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\udce6 Chores",id:"-chores",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\ud83d\udc77\u200d Build System",id:"-build-system",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\udd28 Issue Fix",id:"-issue-fix",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["We are happy to announce ",(0,i.jsx)(s.strong,{children:"Bublik v0.2.6"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"This release introduces a series of small, incremental changes aimed at enhancing user experience and addressing various issues.\nIt includes fixes for parameter-related crashes and fixes issue with parameter diff on run page.\nAdditionally, constraints for minimum and maximum values have been added to charts.\nNow when clicking on test in log tree log frame will be scrolled to the top to reset, We also added stacked chart mode for measurements page.\nOverall, these updates contribute to a smoother and more refined user interface."}),"\n",(0,i.jsx)(s.p,{children:"Backend improvements include fixing issues with importruns."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note!"}),"\nAfter upgrading to this version, it is necessary to clean up the databases of projects using live import:\nit is necessary to find and re-import runs for which TestIterationResult objects with the same ",(0,i.jsx)(s.code,{children:"exec_seqno"})," exist in the database."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsx)(s.h3,{id:"frontend",children:"Frontend"}),"\n",(0,i.jsx)(s.h4,{id:"-chores",children:"\ud83d\udce6 Chores"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["fix run library test config (",(0,i.jsx)(s.a,{href:"https://github.com/ts-factory/bublik-ui/commit/4f3df15d2c95896a609e6c0bc4d79aefc77d335e",children:"4f3df15"}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-polish",children:"\ud83d\udc85 Polish"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"log:"})," [chart] add constraints for min/max values (",(0,i.jsx)(s.a,{href:"https://github.com/ts-factory/bublik-ui/commit/88b52621ab4324d1313dc3ee1f5d5d67e98fb98c",children:"88b5262"}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-bug-fix",children:"\ud83d\udc1b Bug Fix"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"charts:"})," correct tooltip message for zoom button (",(0,i.jsx)(s.a,{href:"https://github.com/ts-factory/bublik-ui/commit/aeaa1ea162e43c6a037dca948f9a9522b65a26e3",children:"aeaa1ea"}),")"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"run:"})," result parameters diff crashing on some results (",(0,i.jsx)(s.a,{href:"https://github.com/ts-factory/bublik-ui/commit/d196c74f093fa8dbe8c6adbce99de907bac9b34b",children:"d196c74"}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-build-system",children:"\ud83d\udc77\u200d Build System"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["enable sourcemaps (",(0,i.jsx)(s.a,{href:"https://github.com/ts-factory/bublik-ui/commit/976756ce1bda98d6d5c2549a5c7f724c5534d268",children:"976756c"}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-new-feature",children:"\ud83d\ude80 New Feature"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"log:"})," scroll to top of log on test click (",(0,i.jsx)(s.a,{href:"https://github.com/ts-factory/bublik-ui/commit/e6cfda2d8f940f52452630fd7fb270ee7de97c42",children:"e6cfda2"}),")"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"measurements:"})," add stacked chart mode (",(0,i.jsx)(s.a,{href:"https://github.com/ts-factory/bublik-ui/commit/5ad0f20e614435ac30c19ae1542e1bc2bee1c7d4",children:"5ad0f20"}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"backend",children:"Backend"}),"\n",(0,i.jsx)(s.h4,{id:"-issue-fix",children:"\ud83d\udd28 Issue Fix"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Update during importruns error ",(0,i.jsx)(s.a,{href:"https://github.com/ts-factory/bublik/issues/29",children:"#29"})]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5136:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>a});var n=t(8101);const i={},r=n.createContext(i);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:s},e.children)}},8723:e=>{e.exports=JSON.parse('{"permalink":"/bublik-release/blog/release-v0.2.6","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-05-12-release-v0.2.6/index.mdx","source":"@site/blog/2024-05-12-release-v0.2.6/index.mdx","title":"Release v0.2.6","description":"We are happy to announce Bublik v0.2.6.","date":"2024-05-12T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/bublik-release/blog/tags/release"}],"readingTime":1.16,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/okt-limonikas","imageURL":"https://github.com/okt-limonikas.png","key":"okt-limonikas","page":null}],"frontMatter":{"title":"Release v0.2.6","authors":["okt-limonikas"],"tags":["release"],"slug":"release-v0.2.6"},"unlisted":false,"prevItem":{"title":"Release v0.3.0","permalink":"/bublik-release/blog/release-v0.3.0"},"nextItem":{"title":"Release v0.2.5","permalink":"/bublik-release/blog/release-v0.2.5"}}')}}]);