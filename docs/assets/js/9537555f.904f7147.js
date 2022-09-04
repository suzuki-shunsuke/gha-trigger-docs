"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,b=c["".concat(p,".").concat(m)]||c[m]||k[m]||i;return r?a.createElement(b,n(n({ref:t},s),{},{components:r})):a.createElement(b,n({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var u=2;u<i;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const i={sidebar_position:100},n="GitHub Apps",l={unversionedId:"config/github-app",id:"config/github-app",title:"GitHub Apps",description:"https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app",source:"@site/docs/config/github-app.md",sourceDirName:"config",slug:"/config/github-app",permalink:"/config/github-app",draft:!1,editUrl:"https://github.com/gha-trigger/gha-trigger.github.io/edit/main/docs/config/github-app.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/config/"},next:{title:"CI Repository",permalink:"/config/ci-repository"}},p={},u=[{value:"1. Webhook App",id:"1-webhook-app",level:2},{value:"2. Trigger CI Workflow App",id:"2-trigger-ci-workflow-app",level:2},{value:"3. CI App",id:"3-ci-app",level:2},{value:"4. Manual Workflow App",id:"4-manual-workflow-app",level:2}],s={toc:u};function k(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github-apps"},"GitHub Apps"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app"},"https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app")),(0,o.kt)("p",null,"You have to create three or four types of GitHub Apps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Webhook App"),": GitHub App for webhook server to receive webhook and get data from Main Repository"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Trigger CI Workflow App"),": GitHub App for webhook server to trigger CI Repository GitHub Actions Workflow"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"CI App"),": GitHub App for CI Repository GitHub Actions Workflow to access Main Repository"),(0,o.kt)("li",{parentName:"ol"},"(Optional) ",(0,o.kt)("inlineCode",{parentName:"li"},"Manual Workflow App"),": GitHub App for Manual Workflow Repository to access Main Repository")),(0,o.kt)("h2",{id:"1-webhook-app"},"1. Webhook App"),(0,o.kt)("p",null,"GitHub App for webhook server to receive webhook and get data from Main Repository"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Webhook: Active"),(0,o.kt)("li",{parentName:"ul"},"Permissions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Issues: Read-only",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To subscribe Issue comment events"))),(0,o.kt)("li",{parentName:"ul"},"Pull requests: Read and write",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To notify error in webhook server to pull requests"))))),(0,o.kt)("li",{parentName:"ul"},"Subscribe to events",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Issue comment",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To support slash command such as ",(0,o.kt)("inlineCode",{parentName:"li"},"/rerun-workflow")))),(0,o.kt)("li",{parentName:"ul"},"Please subscribe events to trigger workflows"))),(0,o.kt)("li",{parentName:"ul"},"Repository access",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Main Repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To receive webhook")))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To subscribe events, you have to set required permissions.\nFor example, if you'd like to subscribe ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," event, you have to set ",(0,o.kt)("inlineCode",{parentName:"p"},"Contents: Read-only")," permission.")),(0,o.kt)("h2",{id:"2-trigger-ci-workflow-app"},"2. Trigger CI Workflow App"),(0,o.kt)("p",null,"GitHub App for webhook server to trigger CI Repository GitHub Actions Workflow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Webhook: Inactive"),(0,o.kt)("li",{parentName:"ul"},"Permissions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Actions: Read and write",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To run GitHub Actions Workflow"))))),(0,o.kt)("li",{parentName:"ul"},"Repository access",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CI Repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To run GitHub Actions Workflow")))))),(0,o.kt)("h2",{id:"3-ci-app"},"3. CI App"),(0,o.kt)("p",null,"GitHub App for CI Repository GitHub Actions Workflow to access Main Repository"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Webhook: Inactive"),(0,o.kt)("li",{parentName:"ul"},"Permissions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Commit statuses: Read and write",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To update commit statuses"))),(0,o.kt)("li",{parentName:"ul"},"Contents: Read-only",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To checkout Main Repository"))),(0,o.kt)("li",{parentName:"ul"},"Please add permissions for CI"))),(0,o.kt)("li",{parentName:"ul"},"Repository access",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Main Repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To access Main Repository in CI"))),(0,o.kt)("li",{parentName:"ul"},"CI Repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To issue GitHub App token in CI")))))),(0,o.kt)("h2",{id:"4-manual-workflow-app"},"4. Manual Workflow App"),(0,o.kt)("p",null,"GitHub App for Manual Workflow Repository to access Main Repository"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Webhook: Inactive"),(0,o.kt)("li",{parentName:"ul"},"Permissions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Contents: Read-only",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To checkout Main Repository"))),(0,o.kt)("li",{parentName:"ul"},"Please add permissions for CI"))),(0,o.kt)("li",{parentName:"ul"},"Repository access",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Main Repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To access Main Repository in CI"))),(0,o.kt)("li",{parentName:"ul"},"Manual Workflow Repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To issue GitHub App token in CI")))))))}k.isMDXComponent=!0}}]);