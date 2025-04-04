"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[8278],{8302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"schedule/index","title":"Schedule","description":"Introduction","source":"@site/docs/05-schedule/index.md","sourceDirName":"05-schedule","slug":"/schedule/","permalink":"/bublik-release/schedule/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Schedule"},"sidebar":"defaultSidebar","previous":{"title":"Log Artifacts","permalink":"/bublik-release/publish/artifacts"},"next":{"title":"Management","permalink":"/bublik-release/management/"}}');var s=t(5105),r=t(5136);const l={title:"Schedule"},o="Schedule",c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Short term",id:"short-term",level:2},{value:"Long term",id:"long-term",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"schedule",children:"Schedule"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Schedule config is the first step towards implementation of in-bublik runs scheduling. ",(0,s.jsx)("br",{}),"\nThe end goal is to provide an API that will allow an external entity to get info on what to run."]}),"\n",(0,s.jsx)(n.h2,{id:"short-term",children:"Short term"}),"\n",(0,s.jsxs)(n.p,{children:["Short term solution is to have a config file that we can point a jenkins worker at. ",(0,s.jsx)("br",{}),"\nOne or several files."]}),"\n",(0,s.jsx)(n.p,{children:"Each schedule file contains detailed configuration with the following key elements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tools configuration"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"List of tools needed for the run"}),"\n",(0,s.jsx)(n.li,{children:"Tool specifications including name, revision/branch/commit, URL, and access method (git, pip, wget)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testbench parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Key-value pairs defining the testbench setup"}),"\n",(0,s.jsx)(n.li,{children:"Each parameter includes name, type, and value"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Execution parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tools to be utilized during test execution"}),"\n",(0,s.jsx)(n.li,{children:"Tool-specific parameters with name, type (option, option_flag, env), and value"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The schema provides a comprehensive structure for defining exactly what to run, which versions to use, and how to prepare and execute the testbench environment."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ts-factory/bublik/blob/main/bublik/data/schemas/schedule.json",children:"See full schema"})}),"\n",(0,s.jsx)(n.h2,{id:"long-term",children:"Long term"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Documentation is currently in progress. ",(0,s.jsx)("br",{}),"\nPlease check back later for updates.",(0,s.jsx)("br",{})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5136:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(8101);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);