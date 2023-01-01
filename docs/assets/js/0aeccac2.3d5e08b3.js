"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,b=p["".concat(l,".").concat(d)]||p[d]||g[d]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1e3},o="Design",s={unversionedId:"design",id:"design",title:"Design",description:"Avoid GitHub API call as much as possible",source:"@site/docs/design.md",sourceDirName:".",slug:"/design",permalink:"/design",draft:!1,editUrl:"https://github.com/gha-trigger/gha-trigger.github.io/edit/main/docs/design.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Architecture (AWS Lambda)",permalink:"/architecture-aws-lambda"}},l={},c=[{value:"Avoid GitHub API call as much as possible",id:"avoid-github-api-call-as-much-as-possible",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"design"},"Design"),(0,i.kt)("h2",{id:"avoid-github-api-call-as-much-as-possible"},"Avoid GitHub API call as much as possible"),(0,i.kt)("p",null,"gha-trigger has to call GitHub API, which has a risk of GitHub API rate limiting.\nSo gha-trigger avoids GitHub API call as much as possible."),(0,i.kt)("p",null,"This is a trade off between usability and stability (scalability)."),(0,i.kt)("p",null,"In future, gha-trigger may add options to call GitHub API for usability."),(0,i.kt)("p",null,"For example, to set GitHub Actions Job URL ",(0,i.kt)("inlineCode",{parentName:"p"},"$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID/jobs/<job id>")," to a commit status, gha-trigger has to call GitHub API to get the job ID (",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/71240338/obtain-job-id-from-a-workflow-run-using-contexts"},"ref"),").\nTo avoid the API call, gha-trigger sets a workflow run URL ",(0,i.kt)("inlineCode",{parentName:"p"},"$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID")," instead of the job URL."),(0,i.kt)("p",null,"Also, to get ",(0,i.kt)("inlineCode",{parentName:"p"},"GHA_SHA")," for some GitHub events such as ",(0,i.kt)("inlineCode",{parentName:"p"},"release"),", gha-trigger has to call GitHub API to get the default branch's commit hash.\nTo avoid the API call, gha-trigger doesn't set ",(0,i.kt)("inlineCode",{parentName:"p"},"GHA_SHA")," for some GitHub events."))}p.isMDXComponent=!0}}]);