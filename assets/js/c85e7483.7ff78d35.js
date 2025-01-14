"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[9158],{8948:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var s=t(4490),n=t(5105),r=t(5136);const l={title:"Release v0.3.1",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.1"},a=void 0,o={authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:2},{value:"Run Reports",id:"run-reports",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix-1",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature-1",level:4},{value:"\ud83d\udc85 Polish",id:"-polish-1",level:4}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["We are happy to announce ",(0,n.jsx)(i.strong,{children:"Bublik v0.3.1"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["In the latest release of our app, we've introduced several new features and improvements. Notably, we've enhanced the history search form with a new ",(0,n.jsx)(i.code,{children:"labels"}),' field.\nThe reports section now supports more detailed filtering by measurements, the use of partially suitable configurations, formatters to display "%" signs, handles API errors more gracefully, and added table titles. We\'ve also fixed various bugs, including default values in the history search form. Additionally, we polished the UI with background overlays in the command menu.']}),"\n",(0,n.jsx)(i.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(i.h3,{id:"run-reports",children:"Run Reports"}),"\n",(0,n.jsxs)(i.p,{children:["Now, when building a run report, you can specify the measurements, the results of which will be contained in the report, not only by specifying the names of these measurements, but also by specifying aggregation and keys. This information must be specified in the report configuration. An example can be found in ",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/blob/main/doc/wiki/report_config.json",children:"doc/wiki/report_config.json"}),"."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note!"}),"\nDue to the above changes, ",(0,n.jsx)(i.strong,{children:"the configuration format has been changed"}),". See the example at the link above."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsx)(i.h3,{id:"frontend",children:"Frontend"}),"\n",(0,n.jsx)(i.h4,{id:"-new-feature",children:"\ud83d\ude80 New Feature"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"history:"})," added labels field to history global search form (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/5fc9e7b0418843fefa78ae7c744d1fb341b8f441",children:"5fc9e7b"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"history:"})," added scroll to top of the page on page change (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/634934fce95fc155a0955056f984fe15ba67945f",children:"634934f"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"reports:"}),' added formatters support to show "%" sign (',(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/5e55703929e931e864c5ac0806770bf8c77cef3f",children:"5e55703"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"reports:"})," added handling for API errors for report page (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/323d7bafbdcde44a074132dbc27034b5dc356b70",children:"323d7ba"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"reports:"})," added table title from Y axis label (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/c5d3498f51f1d5b2184eaef231af3bf27a71bed2",children:"c5d3498"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"-bug-fix",children:"\ud83d\udc1b Bug Fix"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"history:"})," fixed missing default values for history global search form (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/f09609984044c74193441d909ef6334aff83b385",children:"f096099"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"history:"})," made field names consistent in search form (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/6f569afd25428e4640b2d13b37790fa131def6d6",children:"6f569af"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"log:"})," added option to contain label inside canvas container (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/5c079461bb1a8c04168f19b7bab6009f96197ccc",children:"5c07946"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"reports:"})," fixed axis label overflow inside canvas container (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/79b541646f429c2d14bfb7b62e3854a0180643bb",children:"79b5416"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"reports:"})," fixed unstable key for report header list item (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/a6ac058b7e85caf3f7704027a895b74c0a425289",children:"a6ac058"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"run:"})," fixed copying revision metadata without key (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/eefdf45f9d8eeb2b206a1678048db72d835b5482",children:"eefdf45"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"runs:"})," [form] fixed crash when opening tags input (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/90e3df62602eb510344649eb9e8f0f0bd0e101c9",children:"90e3df6"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"ui:"})," [combobox] fixed selection change callback type (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/9d16f197c3078560c944739fef630646fd551773",children:"9d16f19"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"-polish",children:"\ud83d\udc85 Polish"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"command:"})," added background overlay to command menu (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/08bf23e6b43d0c1c45d7cf2921c852eabd9b9767",children:"08bf23e"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"run:"})," [reports] added gap between exit icon and report label (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik-ui/commit/de2dd4dd698e8864bc250a7ea0ec6ca60668ecf5",children:"de2dd4d"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"backend",children:"Backend"}),"\n",(0,n.jsx)(i.h4,{id:"-bug-fix-1",children:"\ud83d\udc1b Bug Fix"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"report:"})," fix filtering by measurements (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/54431c434afe8279598b7824f38e9773f54cfe0d",children:"54431c4"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"report:"})," support unequal measurement sequences (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/97ec69a72650153782c6e58f958ffc67ded18f64",children:"97ec69a"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"report:"})," fix calculation of percentages (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/e306157f60abe7f77b4fe7d3c76487a3e92b868a",children:"e306157"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"-new-feature-1",children:"\ud83d\ude80 New Feature"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"report:"})," add accounting for measurement keys and aggr (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/ccd75a0c7cf805ba1223724659b92972f9946c87",children:"ccd75a0"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"report:"})," make the name of y axis more informative (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/bd6a38f763105b3e8035a1754d265696df7ea5ac",children:"bd6a38f"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"report:"})," add formatters for table column values (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/af1510f4c3289957eb13c7e334787a47d5ddf3a3",children:"af1510f"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"report:"})," make it possible to use partially suitable config (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/51f29c7ee392d96fc0ae52b8820c2b776a30b29a",children:"51f29c7"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"-polish-1",children:"\ud83d\udc85 Polish"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"cleanup:"})," replace special Unicode characters (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/81109f00243e041e8eeaea6efa9bf01f9ba70434",children:"81109f0"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"doc/wiki:"})," fix style in report config example (",(0,n.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/db1a6e0c61335b8fd9b6bdb58ff3007570cbfbac",children:"db1a6e0"}),")"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5136:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>a});var s=t(8101);const n={},r=s.createContext(n);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:i},e.children)}},4490:e=>{e.exports=JSON.parse('{"permalink":"/bublik-release/blog/release-v0.3.1","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-06-28-release-v0.3.1/index.mdx","source":"@site/blog/2024-06-28-release-v0.3.1/index.mdx","title":"Release v0.3.1","description":"We are happy to announce Bublik v0.3.1.","date":"2024-06-28T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/bublik-release/blog/tags/release"}],"readingTime":2.16,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/okt-limonikas","imageURL":"https://github.com/okt-limonikas.png","key":"okt-limonikas","page":null}],"frontMatter":{"title":"Release v0.3.1","authors":["okt-limonikas"],"tags":["release"],"slug":"release-v0.3.1"},"unlisted":false,"prevItem":{"title":"Release v0.3.2","permalink":"/bublik-release/blog/release-v0.3.2"},"nextItem":{"title":"Release v0.3.0","permalink":"/bublik-release/blog/release-v0.3.0"}}')}}]);