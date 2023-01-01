"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||g[m]||i;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:100},s="Configuration",l={unversionedId:"config/index",id:"config/index",title:"Configuration",description:"gha-trigger supports only environment variables as source of configuration,",source:"@site/docs/config/index.md",sourceDirName:"config",slug:"/config/",permalink:"/config/",draft:!1,editUrl:"https://github.com/gha-trigger/gha-trigger.github.io/edit/main/docs/config/index.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"GitHub Apps",permalink:"/config/github-app"}},o={},p=[{value:"<code>aws</code>",id:"aws",level:2},{value:"<code>github_apps</code>",id:"github_apps",level:2},{value:"user, org, installation_id",id:"user-org-installation_id",level:3},{value:"secrets",id:"secrets",level:3},{value:"name",id:"name",level:3},{value:"repos",id:"repos",level:2},{value:"repos[].events",id:"reposevents",level:2},{value:"repos[].events[].workflow",id:"reposeventsworkflow",level:2},{value:"repos[].events[].matches",id:"reposeventsmatches",level:2},{value:"repos[].events[].matches[].events",id:"reposeventsmatchesevents",level:3},{value:"branches, tags, paths, branches-ignore, tags-ignore, paths-ignore",id:"branches-tags-paths-branches-ignore-tags-ignore-paths-ignore",level:3},{value:"Secrets for GitHub App",id:"secrets-for-github-app",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," supports only environment variables as source of configuration,\nbut we are considering other sources such as GitHub, S3, DynamoDB, AWS AppConfig, and so on."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\naws:\n  region: us-east-1\ngithub_apps:\n  - name: webhook\n    user: suzuki-shunsuke\n    app_id: 123456789\n    secret:\n      type: aws_secretsmanager\n      secret_id: test-gha-trigger-main\n  - name: ci\n    user: suzuki-shunsuke\n    app_id: 123456789\n    secret:\n      type: aws_secretsmanager\n      secret_id: test-gha-trigger-trigger-workflow\nrepos:\n  - repo_owner: suzuki-shunsuke\n    repo_name: test-gha-trigger-main\n    workflow_github_app_name: ci\n    ci_repo_name: test-gha-trigger-ci\n    events:\n      - matches:\n          - events:\n              - name: pull_request\n            branches:\n              - value: main\n                type: equal\n        workflow:\n          workflow_file_name: test_pull_request.yaml\n          ref: pull_request\n      - matches:\n          - events:\n              - name: push\n            branches:\n              - value: main\n                type: equal\n        workflow:\n          workflow_file_name: test.yaml\n          ref: main\n")),(0,r.kt)("h2",{id:"aws"},(0,r.kt)("inlineCode",{parentName:"h2"},"aws")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region")," (optional): If you create secrets in a different region from Lambda Function, you need to set the region.")),(0,r.kt)("h2",{id:"github_apps"},(0,r.kt)("inlineCode",{parentName:"h2"},"github_apps")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"github_apps:\n  - name: webhook\n    user: suzuki-shunsuke\n    app_id: 123456789\n    secret:\n      type: aws_secretsmanager\n      region: us-east-1\n      secret_id: test-gha-trigger-main\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," uses multiple GitHub Apps to receive Webhook and access repositories by GitHub API.\nSo you have to configure GitHub App ID and App Private Key."),(0,r.kt)("h3",{id:"user-org-installation_id"},"user, org, installation_id"),(0,r.kt)("p",null,"To get GitHub App access token, you have to configure one of the following settings."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/apps/apps#get-a-user-installation-for-the-authenticated-app"},"user"),": GitHub User name where GitHub App is installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/apps/apps#get-an-organization-installation-for-the-authenticated-app"},"org"),": GitHub Organization name where GitHub App is installed"),(0,r.kt)("li",{parentName:"ul"},"installation_id: GitHub App Installation ID")),(0,r.kt)("h3",{id:"secrets"},"secrets"),(0,r.kt)("p",null,"Private Keys are managed by Secrets Manager, so you have to configure to access Secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"secret:\n  type: aws_secretsmanager\n  secret_id: test-gha-trigger-main\n  version_id: xxx\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," supports only AWS Secrets Manager at the moment, but we are considering other Secrets Manager such as GCP Secrets Manager."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: Currently, only ",(0,r.kt)("inlineCode",{parentName:"li"},"aws_secretsmanager")," is supported"),(0,r.kt)("li",{parentName:"ul"},"secret_id: AWS SecretsManager's secret id"),(0,r.kt)("li",{parentName:"ul"},"version_id: (Optional) AWS SecretsManager's secret version id")),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name")," is used to identify GitHub App.\nThis is a ",(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," specific setting, so you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," freely.\n",(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," uses GitHub App to run GitHub Actions Workflow, so ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is used to specify which GitHub App is used."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'github_apps:\n  - name: ci\n    # ...\nrepos:\n  - workflow_github_app_name: ci # Use the GitHub App "ci" to run GitHub Actions Workflow for this repository CI\n    # ...\n')),(0,r.kt)("h2",{id:"repos"},"repos"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," supports multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Main Repository"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"repo_owner: ",(0,r.kt)("inlineCode",{parentName:"li"},"Main Repository")," owner"),(0,r.kt)("li",{parentName:"ul"},"repo_name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Main Repository")," name"),(0,r.kt)("li",{parentName:"ul"},"workflow_github_app_name: GitHub App name to run Workflows"),(0,r.kt)("li",{parentName:"ul"},"ci_repo_name: ",(0,r.kt)("inlineCode",{parentName:"li"},"CI Repository")," name"),(0,r.kt)("li",{parentName:"ul"},"events")),(0,r.kt)("h2",{id:"reposevents"},"repos[].events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"matches: Webhook filter"),(0,r.kt)("li",{parentName:"ul"},"workflow: GitHub Actions Workflow")),(0,r.kt)("h2",{id:"reposeventsworkflow"},"repos[].events[].workflow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"workflow_file_name"),(0,r.kt)("li",{parentName:"ul"},"ref")),(0,r.kt)("h2",{id:"reposeventsmatches"},"repos[].events[].matches"),(0,r.kt)("p",null,"You can filter webhooks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"events"),(0,r.kt)("li",{parentName:"ul"},"branches"),(0,r.kt)("li",{parentName:"ul"},"tags"),(0,r.kt)("li",{parentName:"ul"},"paths"),(0,r.kt)("li",{parentName:"ul"},"branches-ignore"),(0,r.kt)("li",{parentName:"ul"},"tags-ignore"),(0,r.kt)("li",{parentName:"ul"},"paths-ignore")),(0,r.kt)("p",null,"If all filters matches the event, workflow is run."),(0,r.kt)("h3",{id:"reposeventsmatchesevents"},"repos[].events[].matches[].events"),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- matches:\n    - events:\n        # OR condition\n        - name: pull_request\n        - name: push\n")),(0,r.kt)("p",null,"You can also specify event action."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    - events:\n        - name: pull_request\n          types:\n            - opened\n")),(0,r.kt)("h3",{id:"branches-tags-paths-branches-ignore-tags-ignore-paths-ignore"},"branches, tags, paths, branches-ignore, tags-ignore, paths-ignore"),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- matches:\n    - branches:\n        - value: main\n          type: equal\n")),(0,r.kt)("p",null,"Supported types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"equal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/strings#Contains"},"contain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/regexp#Regexp.MatchString"},"regexp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/strings#HasPrefix"},"prefix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/strings#HasSuffix"},"suffix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/path#Match"},"glob"))),(0,r.kt)("h2",{id:"secrets-for-github-app"},"Secrets for GitHub App"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," requires the following secrets."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"webhook_secret: GitHub App's Webhook Secret"),(0,r.kt)("li",{parentName:"ul"},"github_app_private_key: GitHub App's private key"),(0,r.kt)("li",{parentName:"ul"},"(optional) app_id: GitHub App ID"),(0,r.kt)("li",{parentName:"ul"},"(optional) installation_id: GitHub App Installation ID")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," supports only AWS SecretsManager at the moment."))}c.isMDXComponent=!0}}]);