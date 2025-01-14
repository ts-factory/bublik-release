"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[8872],{7128:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>d});var n=s(8730),r=s(5105),t=s(5136);const l={title:"Release v0.2.1",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.2.1"},a="Highlights",o={authorsImageUrls:[void 0]},d=[{value:"Authentication Module",id:"authentication-module",level:3},{value:"User",id:"user",level:4},{value:"Administrator",id:"administrator",level:4},{value:"Runs",id:"runs",level:3},{value:"History expressions",id:"history-expressions",level:3},{value:"Import logs",id:"import-logs",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\u267b Code Refactoring",id:"-code-refactoring",level:4},{value:"\ud83d\udc77\u200d Build System",id:"-build-system",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\ude80 New Feature",id:"-new-feature-1",level:4},{value:"\ud83d\udcbe DB changes",id:"-db-changes",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix-1",level:4},{value:"\u270f\ufe0f Other",id:"\ufe0f-other",level:4}];function h(e){const i={a:"a",admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["We are happy to announce ",(0,r.jsx)(i.strong,{children:"Bublik v0.2.1"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"authentication-module",children:"Authentication Module"}),"\n",(0,r.jsx)(i.p,{children:"At the moment, the Bublik authentication module exists separately from the rest of the Bublik functionality. If you want to test its work, you can contact the developer of the Bublik."}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsx)(i.p,{children:"The authentication module in the Bublik has nothing to do with authentication on the server. Thus, you cannot access the system using your server credentials. To access the system, you need to be registered directly in the Bublik authentication module."})}),"\n",(0,r.jsx)(i.h4,{id:"user",children:"User"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Login form",src:s(7286).A+"",width:"2830",height:"2034"})}),"\n",(0,r.jsx)(i.p,{children:"Registration\nUsers who are not project administrators are registered in the system by the administrator. After user registration, a verification link will be sent to the email address specified during registration. The user will be able to log in only after confirming the email address by clicking on the link from the incoming email."}),"\n",(0,r.jsx)(i.p,{children:"Profile page"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Profile page",src:s(8849).A+"",width:"2831",height:"2032"})}),"\n",(0,r.jsx)(i.p,{children:"Features"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"update your first and last name;"}),"\n",(0,r.jsx)(i.li,{children:"change the password from your profile;"}),"\n",(0,r.jsx)(i.li,{children:"reset the password via email."}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"administrator",children:"Administrator"}),"\n",(0,r.jsx)(i.p,{children:"Admin management table"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Admin",src:s(2008).A+"",width:"4492",height:"2704"})}),"\n",(0,r.jsx)(i.p,{children:"Registration\nIf you are the administrator of the project and want to be registered in the system, please contact the administrator of the Bublik."}),"\n",(0,r.jsx)(i.p,{children:"Features"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"update your first and last name;"}),"\n",(0,r.jsx)(i.li,{children:"change the password from your profile;"}),"\n",(0,r.jsx)(i.li,{children:"reset the password via email;"}),"\n",(0,r.jsx)(i.li,{children:"view the list of users;"}),"\n",(0,r.jsx)(i.li,{children:"create a user;"}),"\n",(0,r.jsx)(i.li,{children:"change the user's first name, last name and password;"}),"\n",(0,r.jsx)(i.li,{children:"deactivate the user."}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsx)(i.p,{children:"Only one user can be registered to one email address.\nIn this release we've added authentication with access to profile and user management for admins"})}),"\n",(0,r.jsx)(i.h3,{id:"runs",children:"Runs"}),"\n",(0,r.jsx)(i.p,{children:"We've added new mode for runs page which contains various charts to get an easy overview of filtered runs"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsx)(i.p,{children:"Some charts are clickable"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Runs charts",src:s(7854).A+"",width:"4568",height:"2750"})}),"\n",(0,r.jsx)(i.h3,{id:"history-expressions",children:"History expressions"}),"\n",(0,r.jsx)(i.p,{children:"Added expression support for multiple history fields"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"History expressions",src:s(3186).A+"",width:"2894",height:"2078"})}),"\n",(0,r.jsx)(i.h3,{id:"import-logs",children:"Import logs"}),"\n",(0,r.jsx)(i.p,{children:"Integrated import logs"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Import logs",src:s(4123).A+"",width:"2829",height:"2037"})}),"\n",(0,r.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsx)(i.h3,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsx)(i.h4,{id:"-new-feature",children:"\ud83d\ude80 New Feature"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"dashboard:"})," add popover button with icon and comment if run is marked as compromised"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"dashboard:"})," add TV mode for dashboard for fullscreen viewing"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth:"})," add authentication"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth:"})," add user profile page"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"import:"})," integrate import logs inside bublik"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history:"})," sync client filter state with search params"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"-polish",children:"\ud83d\udc85 Polish"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"ui"})," improve scrollbar behaviour when main container is overflowing"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"ui"})," convert all colors to HSL with support of opacity"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"dashboard"})," replace dashboard mode icons with updated ones"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"dashboard"})," make dashboard errors to display properly"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"-bug-fix",children:"\ud83d\udc1b Bug Fix"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"dashboard"})," failing recursively on dashboard fetch error"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"dashboard"})," not fetching dashboard when run is marked as compromised"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history"})," changing date in form and closing not picking correct date"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history"})," changing mode when no page exists returns 404"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"-code-refactoring",children:"\u267b Code Refactoring"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"dashboard"})," refactor dashboard table as well as search params"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"-build-system",children:"\ud83d\udc77\u200d Build System"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"ci"})," update ci/cd actions to latest versions"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"backend",children:"Backend"}),"\n",(0,r.jsx)(i.h4,{id:"-new-feature-1",children:"\ud83d\ude80 New Feature"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"import log"})," create API to return JSON import log"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add the ability to register users (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/fb0a4390ae22e4b6cdbcd3d29f89ea467a542195",children:"fb0a439"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add the ability to log in (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/6428320b4517603bd4f49e151658748a5d9a1f28",children:"6428320"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add the ability to get user info (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/e438cc5950966a8265a484a93c890e056a9ec643",children:"e438cc5"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add the ability to refresh access token (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/891146419ec10df9777147ec581b05f502fbc0d0",children:"8911464"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add the ability to log out (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/ffb2c80079020347fc649ea9df633fa78cb82730",children:"ffb2c80"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add the ability to reset password by email (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/70f4c50baf99ec8cc1bf226185216cfb064ea6c3",children:"70f4c50"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add the ability to reset password from the profile (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/9d43203d9163536d56331ae982edb807725f0aff",children:"9d43203"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add admin functions and admin verification (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/e6a4e50d2ca8371d0225b5473fe54d60c6048cda",children:"e6a4e50"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add the ability to update user info yourself (",(0,r.jsx)(i.a,{href:"https://github.com/ts-factory/bublik/commit/30a0029ec585e57e159d77ae9bb2750d84271e9c",children:"30a0029"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history"})," separate expressions by meta types"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history"})," add verdicts expression"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history"})," add test arguments expression"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"-db-changes",children:"\ud83d\udcbe DB changes"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"auth"})," add a custom User model"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"-bug-fix-1",children:"\ud83d\udc1b Bug Fix"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"import"})," fix import from bublik.xml"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"urls"})," fix dashboard redirect to v2"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"log"})," check the ID and the page query parameter value"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"run stats"})," take into account DU value when calculating run conclusion"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"run stats"})," fix abnormal counter"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history"})," change error reporting in filtering by expressions"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history"})," fix filtering by expressions"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"history"})," fix a list of IDs of filtered runs generation"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"\ufe0f-other",children:"\u270f\ufe0f Other"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"API v1 removal"})," move redirection to flower to other redirects"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"API v1 removal"})," move meta categorization web interface to API v2"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"API v1 removal"})," move import log web interface to API v2"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"API v1 removal"})," extend the functionality of the import via API v2"]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2008:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/admin-users-c1776e7d53845d96ba4bec0593d96cdc.png"},7286:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/auth-221bab7a09e1e1190c737b7da417a73e.png"},3186:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/history-fields-34fd72d1c5bf3f4aded4e5554a30db86.png"},4123:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/import-logs-1e2e21c27a6f2ebaab180f82efec36d6.png"},8849:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/profile-084d630c00ee29a28c5ab0c1955203e4.png"},7854:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/runs-charts-6235a2f4290e33a823e85332da6d76ca.png"},5136:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>a});var n=s(8101);const r={},t=n.createContext(r);function l(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:i},e.children)}},8730:e=>{e.exports=JSON.parse('{"permalink":"/bublik-release/blog/release-v0.2.1","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-12-29-release-v0.1.11/index.mdx","source":"@site/blog/2023-12-29-release-v0.1.11/index.mdx","title":"Release v0.2.1","description":"We are happy to announce Bublik v0.2.1.","date":"2023-12-29T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/bublik-release/blog/tags/release"}],"readingTime":3.745,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/okt-limonikas","imageURL":"https://github.com/okt-limonikas.png","key":"okt-limonikas","page":null}],"frontMatter":{"title":"Release v0.2.1","authors":["okt-limonikas"],"tags":["release"],"slug":"release-v0.2.1"},"unlisted":false,"prevItem":{"title":"Release v0.2.2","permalink":"/bublik-release/blog/release-v0.2.2"},"nextItem":{"title":"Release v0.1.10","permalink":"/bublik-release/blog/release-v0.1.10"}}')}}]);