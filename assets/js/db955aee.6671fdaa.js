"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[9835],{1341:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"configuration/artifacts/index","title":"Artifacts","description":"Bublik supports displaying test artifacts through a dropdown menu on both the log page and log preview. This feature enables easy access to additional test-related files and resources.","source":"@site/docs/03-configuration/artifacts/index.md","sourceDirName":"03-configuration/artifacts","slug":"/configuration/artifacts/","permalink":"/bublik-release/configuration/artifacts/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Artifacts"},"sidebar":"defaultSidebar","previous":{"title":"Report","permalink":"/bublik-release/configuration/report-config/"},"next":{"title":"Management","permalink":"/bublik-release/management/"}}');var s=i(5105),l=i(5136);const r={title:"Artifacts"},a="Log Artifacts",o={},c=[{value:"Configuration",id:"configuration",level:2},{value:"File Location",id:"file-location",level:3},{value:"Schema",id:"schema",level:3},{value:"Fields Description",id:"fields-description",level:4},{value:"Example Configuration",id:"example-configuration",level:3},{value:"Path Resolution",id:"path-resolution",level:2},{value:"Current Limitations",id:"current-limitations",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"log-artifacts",children:"Log Artifacts"})}),"\n",(0,s.jsx)(n.p,{children:"Bublik supports displaying test artifacts through a dropdown menu on both the log page and log preview. This feature enables easy access to additional test-related files and resources."}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"To enable artifacts in your logs, you need to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create an ",(0,s.jsx)(n.code,{children:"artifacts.json"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["Place it at ",(0,s.jsx)(n.code,{children:"/json/node_<id>/artifacts.json"})," in your log structure"]}),"\n",(0,s.jsx)(n.li,{children:"Format it according to the schema specification"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"file-location",children:"File Location"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"artifacts.json"})," file must be located at: ",(0,s.jsx)(n.code,{children:"/json/node_<id>/artifacts.json"})]}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"<id>"})," is your node identifier."]}),"\n",(0,s.jsxs)(n.p,{children:["Example full path: ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"<bublik_url>/logs/dpdk-ethdev-ts/2025/03/03/balin-x710-p0-cbs-speed-stack-03:00:37/json/node_id2/artifacts.json"})]}),"\n",(0,s.jsx)(n.h3,{id:"schema",children:"Schema"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"artifacts.json"})," file must conform to the following schema: ",(0,s.jsx)(n.a,{href:"https://github.com/okt-limonikas/bublik-log-viewer/blob/main/internal/command/schemas/artifact.json",children:"URL"})]}),"\n",(0,s.jsx)(n.h4,{id:"fields-description",children:"Fields Description"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"version"}),": Schema version"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"artifacts"}),": Array of artifact objects with the following properties:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),': Type of the artifact (currently supports "text")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"view_type"}),': How the artifact should be displayed (currently supports "inline")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": Display name for the artifact"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": Detailed description of the artifact"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"download_enabled"}),": Boolean flag to enable/disable download option"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": Relative path to the artifact file (use this or ",(0,s.jsx)(n.code,{children:"uri"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uri"}),": Absolute URL to the artifact file (use this or ",(0,s.jsx)(n.code,{children:"path"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Here's an example of a valid ",(0,s.jsx)(n.code,{children:"artifacts.json"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": 1,\n  "artifacts": [\n    {\n      "type": "text",\n      "view_type": "inline",\n      "name": "Relative artifacts",\n      "description": "Relative artifacts",\n      "download_enabled": false,\n      "path": "./relative.txt"\n    },\n    {\n      "type": "text",\n      "view_type": "inline",\n      "name": "Relative up folder",\n      "description": "Relative up folder",\n      "download_enabled": false,\n      "path": "../relative.txt"\n    },\n    {\n      "type": "text",\n      "view_type": "inline",\n      "name": "Absolute artifacts",\n      "description": "Absolute artifacts",\n      "download_enabled": true,\n      "uri": "<bublik_url>/logs/dpdk-ethdev-ts/2025/03/03/balin-x710-p0-cbs-speed-stack-03:00:37/json/node_id2/absolute.txt"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"path-resolution",children:"Path Resolution"}),"\n",(0,s.jsx)(n.p,{children:"Artifacts support both relative and absolute paths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Relative paths (using ",(0,s.jsx)(n.code,{children:"path"}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"./file.txt"})," - File in the current directory"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"../file.txt"})," - File in the parent directory"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Absolute paths (using ",(0,s.jsx)(n.code,{children:"uri"}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Must be a complete URL to the resource"}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"http://your-server.com/path/to/file.txt"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"current-limitations",children:"Current Limitations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Only text-type artifacts are currently supported"}),"\n",(0,s.jsx)(n.li,{children:"Artifacts can only be viewed inline in the browser"}),"\n",(0,s.jsx)(n.li,{children:"Future updates will add support for more artifact types and viewing options"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5136:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(8101);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);