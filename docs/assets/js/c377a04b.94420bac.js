"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="gha-trigger",s={unversionedId:"index",id:"index",title:"gha-trigger",description:"License",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/gha-trigger/gha-trigger.github.io/edit/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/getting-started"}},l={},u=[{value:"Status",id:"status",level:2},{value:"Goal",id:"goal",level:2},{value:"Background",id:"background",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Supported runtime",id:"supported-runtime",level:2},{value:"How to rerun and cancel CI",id:"how-to-rerun-and-cancel-ci",level:2},{value:"How to trigger workflows manually",id:"how-to-trigger-workflows-manually",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"LICENSE",id:"license",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gha-trigger"},"gha-trigger"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/suzuki-shunsuke/gha-triggger/main/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"http://img.shields.io/badge/license-mit-blue.svg?style=flat-square",alt:"License"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gha-triggger"},"https://github.com/suzuki-shunsuke/gha-triggger")),(0,i.kt)("p",null,"Webhook Server for Secure GitHub Actions"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Under development. This doesn't work yet.\nWe aim to release v0.1.0 in September 2022.")),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"Run GitHub Actions Workflow securely.\nPrevent GitHub Actions Workflow from being modifying and running malicious commands."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"GitHub Actions is very powerful CI Platform, but also has a security risk that someone modifies workflow and CI scripts and run malicious commands.\nFor example, secrets with strong permission may be abused and stolen."),(0,i.kt)("p",null,"You can use other CI Platform to prevent workflows from being modifying, but we would like to use GitHub Actions because GitHub Actions is very powerful."),(0,i.kt)("p",null,"So we design the architecture and develop GitHub App to achieve the above goal."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/186283702-cb3d7de1-6bb0-45dc-8387-d251068484a1.png",alt:"gha-trigger architecture"})),(0,i.kt)("p",null,"You create two GitHub repositories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main Repository",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Users develop this repository"),(0,i.kt)("li",{parentName:"ul"},"Disable GitHub Actions"))),(0,i.kt)("li",{parentName:"ul"},"CI Repository",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Manage GitHub Actions Workflows and CI scripts"),(0,i.kt)("li",{parentName:"ul"},"Only CI maintainers have write permissiono and other users have only read permission")))),(0,i.kt)("p",null,"And you create some GitHub Apps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitHub App for Webhook Server",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GitHub App for receiving webhook and getting data from Main Repository"),(0,i.kt)("li",{parentName:"ul"},"GitHub App for triggering GitHub Actions Workflow"))),(0,i.kt)("li",{parentName:"ul"},"GitHub App for GitHub Actions Workflow",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GitHub App used in CI Repository's GitHub Actions Workflow",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Access Main and CI Repository"),(0,i.kt)("li",{parentName:"ul"},"Update commit statuses")))))),(0,i.kt)("p",null,"When events such as ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pull_request")," occur in Main Repository, the webhook is sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"gha-trigger"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"gha-trigger")," validates and filters webhooks and triggers GitHub Actions Workflows of CI Repository via GitHub API.\nWorkflows of CI Repository update commit statuses of Main Repository and send pull request comments so that users can refer CI results from Main Repository's pull request pages."),(0,i.kt)("p",null,"The important thing is that workflows and CI scripts are managed at the repository other than ",(0,i.kt)("inlineCode",{parentName:"p"},"Main Repository")," and only restricted people have the write permission of ",(0,i.kt)("inlineCode",{parentName:"p"},"CI Repository"),".\nThis prevents users from modifying workflows and CI scripts and makes GitHub Actions secure."),(0,i.kt)("h2",{id:"supported-runtime"},"Supported runtime"),(0,i.kt)("p",null,"gha-trigger supports only AWS Lambda at the moment,\nbut we're considering to support other platform such as Google Cloud Function too."),(0,i.kt)("h2",{id:"how-to-rerun-and-cancel-ci"},"How to rerun and cancel CI"),(0,i.kt)("p",null,"Users don't have the write permission of CI Repository, so they can't rerun and cancel workflows directly.\nBut they can rerun and cancel workflows via pull request comments."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/187913667-8019683a-6556-40f7-9f5e-c58adbb42025.png",alt:"image"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rerun workflows: ",(0,i.kt)("inlineCode",{parentName:"li"},"/rerun-workflow <workflow id> [<workflow id> ...]")),(0,i.kt)("li",{parentName:"ul"},"Rerun failed jobs: ",(0,i.kt)("inlineCode",{parentName:"li"},"/rerun-failed-jobs <workflow id> [<workflow id> ...]")),(0,i.kt)("li",{parentName:"ul"},"Cancel workflows: ",(0,i.kt)("inlineCode",{parentName:"li"},"/cancel <workflow id> [<workflow id> ...]"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"/rerun-job")," isn't supported for now. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gha-trigger/issues/54"},"#54"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gha-trigger")," guides commands by ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary"},"$GITHUB_STEP_SUMMARY"),"."),(0,i.kt)("p",null,"e.g."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/187903524-260b805c-5d02-4e29-ad14-8a4320f28071.png",alt:"image"})),(0,i.kt)("h2",{id:"how-to-trigger-workflows-manually"},"How to trigger workflows manually"),(0,i.kt)("p",null,"If you would like to add workflows that users run manually, you have to create a repository for those workflows.\nLet's call the repository ",(0,i.kt)("inlineCode",{parentName:"p"},"Manual Trigger Repository"),".\nYou have to install GitHub App in ",(0,i.kt)("inlineCode",{parentName:"p"},"Main Repository")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Manual Trigger Repository")," so that workflows can access ",(0,i.kt)("inlineCode",{parentName:"p"},"Main Repository"),".\nYou also have to give users the write permission of ",(0,i.kt)("inlineCode",{parentName:"p"},"Manual Trigger Repository"),", so you have to be careful the treat of this repository."),(0,i.kt)("p",null,"One of the usecase of this repository we assume is that users scaffold pull requests of Main Repository."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction"},"tfaction")," provides the feature."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://suzuki-shunsuke.github.io/tfaction/docs/feature/scaffold-working-dir"},"Scaffold working directory by GitHub Actions workflow_dispatch event")),(0,i.kt)("p",null,"In that case, you can give GitHub App only permission to push commits to ",(0,i.kt)("inlineCode",{parentName:"p"},"Main Repository"),".\nIf GitHub App can create pull requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"Main Repository"),", a user can approve and merge them himself. This is risky so workflows should create only feature branches in ",(0,i.kt)("inlineCode",{parentName:"p"},"Main Repository")," and let users open pull requests themselves."),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"We provide some GitHub Actions for gha-trigger.\nPlease see ",(0,i.kt)("a",{parentName:"p",href:"github-actions"},"GitHub Actions"),"."),(0,i.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,i.kt)("h3",{id:"pros"},"Pros"),(0,i.kt)("p",null,"The pros of ",(0,i.kt)("inlineCode",{parentName:"p"},"gha-trigger")," is that you can run GitHub Actions securely.\nYou can prevent GitHub Actions Workflow from being modifying and running malicious commands."),(0,i.kt)("h3",{id:"cons"},"Cons"),(0,i.kt)("p",null,"Compared with normal GitHub Actions usage, ",(0,i.kt)("inlineCode",{parentName:"p"},"gha-trigger")," has some drawbacks."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"github.token")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"CI Repository")," can't be used to access ",(0,i.kt)("inlineCode",{parentName:"li"},"Main Repository")),(0,i.kt)("li",{parentName:"ul"},"You have to fix workfows to migrate existing workflows to ",(0,i.kt)("inlineCode",{parentName:"li"},"gha-trigger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/learn-github-actions/contexts"},"Contexts")," and ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables"},"Default environment variables")," are different from original event",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gha-trigger")," passes the event payload to Workflow as input"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gha-trigger")," uses not Checks API but Commit Status API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gha-trigger")," calls GitHub API so it has a risk of GitHub API rate limit issue"),(0,i.kt)("li",{parentName:"ul"},"The experience for rerunning and canceling CI is a little bad"),(0,i.kt)("li",{parentName:"ul"},"It spends money"),(0,i.kt)("li",{parentName:"ul"},"You have to set up and maintain ",(0,i.kt)("inlineCode",{parentName:"li"},"gha-trigger"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Continous update"),(0,i.kt)("li",{parentName:"ul"},"Monitoring"),(0,i.kt)("li",{parentName:"ul"},"Trouble shooting")))),(0,i.kt)("h2",{id:"license"},"LICENSE"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/suzuki-shunsuke/gha-triggger/main/LICENSE"},"MIT")))}c.isMDXComponent=!0}}]);