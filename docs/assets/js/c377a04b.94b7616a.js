"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="gha-trigger",l={unversionedId:"index",id:"index",title:"gha-trigger",description:"License",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/gha-trigger/gha-trigger.github.io/edit/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/getting-started"}},s={},u=[{value:"Status",id:"status",level:2},{value:"Goal",id:"goal",level:2},{value:"Background",id:"background",level:2},{value:"Architecture",id:"architecture",level:2},{value:"How to rerun and cancel CI",id:"how-to-rerun-and-cancel-ci",level:2},{value:"How to trigger workflows manually",id:"how-to-trigger-workflows-manually",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Supported Events",id:"supported-events",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"LICENSE",id:"license",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gha-trigger"},"gha-trigger"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/gha-trigger/gha-triggger/main/LICENSE"},(0,a.kt)("img",{parentName:"a",src:"http://img.shields.io/badge/license-mit-blue.svg?style=flat-square",alt:"License"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gha-trigger/gha-trigger"},"https://github.com/gha-trigger/gha-trigger")),(0,a.kt)("p",null,"Webhook Server for Secure GitHub Actions"),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Under development. This doesn't work yet.\nWe aim to release v0.1.0 in September 2022.")),(0,a.kt)("h2",{id:"goal"},"Goal"),(0,a.kt)("p",null,"Run GitHub Actions Workflow securely.\nPrevent GitHub Actions Workflow from being modifying and running malicious commands."),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"GitHub Actions is very powerful CI Platform, but also has a security risk that someone modifies workflow and CI scripts and run malicious commands.\nFor example, secrets with strong permission may be abused and stolen."),(0,a.kt)("p",null,"You can use other CI Platform to prevent workflows from being modifying, but we would like to use GitHub Actions because GitHub Actions is very powerful."),(0,a.kt)("p",null,"So we design the architecture and develop GitHub App to achieve the above goal."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/188292546-53f0b4d2-fbe6-4bec-8b28-1b635b5e2eb0.png",alt:"gha-trigger drawio"})),(0,a.kt)("p",null,"You create two GitHub repositories."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Main Repository",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Users develop this repository"),(0,a.kt)("li",{parentName:"ul"},"Disable GitHub Actions"))),(0,a.kt)("li",{parentName:"ul"},"CI Repository",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Manage GitHub Actions Workflows and CI scripts"),(0,a.kt)("li",{parentName:"ul"},"Only CI maintainers have write permissiono and other users have only read permission")))),(0,a.kt)("p",null,"When events such as ",(0,a.kt)("inlineCode",{parentName:"p"},"push")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pull_request")," occur in Main Repository, the webhook is sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger")," validates and filters webhooks and triggers GitHub Actions Workflows of CI Repository via GitHub API.\nWorkflows of CI Repository update commit statuses of Main Repository and send pull request comments so that users can refer CI results from Main Repository's pull request pages."),(0,a.kt)("p",null,"The important thing is that workflows and CI scripts are managed at the repository other than ",(0,a.kt)("inlineCode",{parentName:"p"},"Main Repository")," and only restricted people have the write permission of ",(0,a.kt)("inlineCode",{parentName:"p"},"CI Repository"),".\nThis prevents users from modifying workflows and CI scripts and makes GitHub Actions secure."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger")," supports multiple pairs of ",(0,a.kt)("inlineCode",{parentName:"p"},"Main Repository")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CI Repository"),".\nYou can also share ",(0,a.kt)("inlineCode",{parentName:"p"},"CI Repository")," for multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"Main Repository"),"."),(0,a.kt)("h2",{id:"how-to-rerun-and-cancel-ci"},"How to rerun and cancel CI"),(0,a.kt)("p",null,"Users don't have the write permission of CI Repository, so they can't rerun and cancel workflows directly.\nBut they can rerun and cancel workflows via pull request comments."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/187913667-8019683a-6556-40f7-9f5e-c58adbb42025.png",alt:"image"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rerun workflows: ",(0,a.kt)("inlineCode",{parentName:"li"},"/rerun-workflow <workflow run id> [<workflow run id> ...]")),(0,a.kt)("li",{parentName:"ul"},"Rerun failed jobs: ",(0,a.kt)("inlineCode",{parentName:"li"},"/rerun-failed-jobs <workflow run id> [<workflow run id> ...]")),(0,a.kt)("li",{parentName:"ul"},"Cancel workflows: ",(0,a.kt)("inlineCode",{parentName:"li"},"/cancel <workflow run id> [<workflow run id> ...]"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger")," guides commands by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary"},"$GITHUB_STEP_SUMMARY"),"."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/187903524-260b805c-5d02-4e29-ad14-8a4320f28071.png",alt:"image"})),(0,a.kt)("h2",{id:"how-to-trigger-workflows-manually"},"How to trigger workflows manually"),(0,a.kt)("p",null,"If you would like to add workflows that users run manually, you have to create a repository for those workflows."),(0,a.kt)("p",null,"For detail, please see ",(0,a.kt)("a",{parentName:"p",href:"manual-workflow"},"Manual Workflow"),"."),(0,a.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"We provide some GitHub Actions for gha-trigger.\nPlease see ",(0,a.kt)("a",{parentName:"p",href:"github-actions"},"GitHub Actions"),"."),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("p",null,"gha-trigger supports only AWS Lambda at the moment,\nbut we're considering to support other platform such as Google Cloud Function too."),(0,a.kt)("h2",{id:"supported-events"},"Supported Events"),(0,a.kt)("p",null,"gha-trigger aims to support ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"},"all events that GitHub Actions supports"),"."),(0,a.kt)("p",null,"For detail, please see ",(0,a.kt)("a",{parentName:"p",href:"events"},"Supported Events"),"."),(0,a.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,a.kt)("h3",{id:"pros"},"Pros"),(0,a.kt)("p",null,"The pros of ",(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger")," is that you can run GitHub Actions securely.\nYou can prevent GitHub Actions Workflow from being modifying and running malicious commands."),(0,a.kt)("h3",{id:"cons"},"Cons"),(0,a.kt)("p",null,"Compared with normal GitHub Actions usage, ",(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger")," has some drawbacks."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"github.token")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"CI Repository")," can't be used to access ",(0,a.kt)("inlineCode",{parentName:"li"},"Main Repository")),(0,a.kt)("li",{parentName:"ul"},"You have to fix workfows to migrate existing workflows to ",(0,a.kt)("inlineCode",{parentName:"li"},"gha-trigger")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/learn-github-actions/contexts"},"Contexts")," and ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables"},"Default environment variables")," are different from original event",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gha-trigger")," passes the event payload to Workflow as input"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gha-trigger")," uses not Checks API but Commit Status API"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gha-trigger")," calls GitHub API so it has a risk of GitHub API rate limit issue"),(0,a.kt)("li",{parentName:"ul"},"The experience for rerunning and canceling CI is a little bad"),(0,a.kt)("li",{parentName:"ul"},"It spends money"),(0,a.kt)("li",{parentName:"ul"},"You have to set up and maintain ",(0,a.kt)("inlineCode",{parentName:"li"},"gha-trigger"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Continous update"),(0,a.kt)("li",{parentName:"ul"},"Monitoring"),(0,a.kt)("li",{parentName:"ul"},"Trouble shooting")))),(0,a.kt)("h2",{id:"license"},"LICENSE"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/gha-trigger/gha-triggger/main/LICENSE"},"MIT")))}c.isMDXComponent=!0}}]);