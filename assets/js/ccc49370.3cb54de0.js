"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[6103],{329:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(959),l=n(5924),r=n(9274),o=n(1013),i=n(8448),c=n(4567),s=n(2949),m=n(5882),u=n(9174),d=n(201);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:l,date:o,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(r.d,{title:n,description:l,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(1469);function p(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function h(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=h({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function b(e){const t=e.getBoundingClientRect();return t.top===t.bottom?b(e.parentNode):t}function L(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>b(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(b(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function E(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,v.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function H(e){const t=(0,a.useRef)(void 0),n=E();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=L(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function k(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(k,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const N=a.memo(k);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:i,...c}=e;const s=(0,v.L)(),u=o??s.tableOfContents.minHeadingLevel,d=i??s.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>h({toc:p(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:u,maxHeadingLevel:d});return H((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:u,maxHeadingLevel:d}}),[l,r,u,d])),a.createElement(N,(0,m.Z)({toc:g,className:n,linkClassName:l},c))}const C="tableOfContents_UB5S";function _(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(C,"thin-scrollbar",t)},a.createElement(x,(0,m.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function y(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:v}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(_,{toc:r,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function I(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(y,{sidebar:e.sidebar},a.createElement(t,null))))}}}]);