"use strict";(self.webpackChunksafedep=self.webpackChunksafedep||[]).push([[372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(m,l(l({ref:t},s),{},{components:r})):a.createElement(m,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},l="Overview",i={unversionedId:"overview",id:"overview",title:"Overview",description:"SafeDep provides a set of open source software components for visibility and policy control of 3rd party software dependencies. At its core, a Supply Chain Security Gateway can be setup to monitor and control consumption of 3rd party dependencies during an application build.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/safedep/safedep.io/tree/main/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},p={},c=[{value:"Example",id:"example",level:2},{value:"What happened?",id:"what-happened",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Showcase",id:"showcase",level:2}],s={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"SafeDep provides a set of open source software components for visibility and policy control of 3rd party software dependencies. At its core, a ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/gateway"},"Supply Chain Security Gateway")," can be setup to monitor and control consumption of 3rd party dependencies during an application build."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The example below is for Java application builds using ",(0,n.kt)("inlineCode",{parentName:"p"},"gradle")," package manager")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Setup ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/safedep/gateway"},"gateway")," by following ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/quickstart"},"Quickstart")),(0,n.kt)("li",{parentName:"ul"},"Clone ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/safedep/demo-clients"},"demo clients"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/safedep/demo-client-java\n")),(0,n.kt)("p",null,"Run Java app build"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd demo-client-java && ./gradlew assemble --refresh-dependencies\n")),(0,n.kt)("p",null,"Observe that the build failed with an error such as"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"> Could not resolve all files for configuration ':app:compileClasspath'.\n> Could not resolve org.apache.logging.log4j:log4j:2.16.0.\n  Required by:\n      project :app\n  > Could not resolve org.apache.logging.log4j:log4j:2.16.0.\n      > Could not get resource 'http://localhost:10000/maven2/org/apache/logging/log4j/log4j/2.16.0/log4j-2.16.0.pom'.\n        > Could not GET 'http://localhost:10000/maven2/org/apache/logging/log4j/log4j/2.16.0/log4j-2.16.0.pom'. Received status code 403 from server: Forbidden\n")),(0,n.kt)("h3",{id:"what-happened"},"What happened?"),(0,n.kt)("p",null,"Access to ",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.log4j:log4j:2.16.0")," was blocked by a security policy written in ",(0,n.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"Rego language")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rego"},'violations[{"message": msg, "code": code}] {\n  input.target.artefact.group = "org.apache.logging.log4j"\n  input.target.artefact.name = "log4j"\n  semver.compare(input.target.artefact.version, "2.17.0") = -1\n\n  msg := "Old and vulnerable version of log4j2 is not allowed"\n  code := "old_and_vulnerable_software"\n}\n')),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(8958).Z,width:"656",height:"371"})),(0,n.kt)("h2",{id:"showcase"},"Showcase"))}d.isMDXComponent=!0},8958:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/supply-chain-gateway-hld-fa4c0b613a6beb5dbc674d43dc4cc500.png"}}]);