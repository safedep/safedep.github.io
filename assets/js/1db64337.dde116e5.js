"use strict";(self.webpackChunksafedep=self.webpackChunksafedep||[]).push([[1372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return a?r.createElement(m,i(i({ref:t},s),{},{components:a})):r.createElement(m,i({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},i="Overview",l={unversionedId:"overview",id:"overview",title:"Overview",description:"SafeDep provides a set of open source software components for visibility and policy control of 3rd party software dependencies. At its core, a Supply Chain Security Gateway can be setup to monitor and control consumption of 3rd party dependencies during an application build.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/safedep/safedep.github.io/tree/main/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},p={},c=[{value:"Showcase",id:"showcase",level:2},{value:"Example",id:"example",level:2},{value:"What happened?",id:"what-happened",level:3},{value:"Architecture",id:"architecture",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"SafeDep provides a set of open source software components for visibility and policy control of 3rd party software dependencies. At its core, a ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/gateway"},"Supply Chain Security Gateway")," can be setup to monitor and control consumption of 3rd party dependencies during an application build."),(0,n.kt)("h2",{id:"showcase"},"Showcase"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://asciinema.org/a/fnAHzwrKr1rs80n3eTDgZ0BAu"},(0,n.kt)("img",{parentName:"a",src:"https://asciinema.org/a/fnAHzwrKr1rs80n3eTDgZ0BAu.svg",alt:"asciicast"}))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The example below is for Java application builds using ",(0,n.kt)("inlineCode",{parentName:"p"},"gradle")," package manager")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Setup ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/safedep/gateway"},"gateway")," by following ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/quickstart"},"Quickstart")),(0,n.kt)("li",{parentName:"ul"},"Clone ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/safedep/demo-clients"},"demo clients"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/safedep/demo-client-java\n")),(0,n.kt)("p",null,"Run Java app build"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd demo-client-java && ./gradlew assemble --refresh-dependencies\n")),(0,n.kt)("p",null,"Observe that the build failed with an error such as"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"> Could not resolve all files for configuration ':app:compileClasspath'.\n> Could not resolve org.apache.logging.log4j:log4j:2.16.0.\n  Required by:\n      project :app\n  > Could not resolve org.apache.logging.log4j:log4j:2.16.0.\n      > Could not get resource 'http://localhost:10000/maven2/org/apache/logging/log4j/log4j/2.16.0/log4j-2.16.0.pom'.\n        > Could not GET 'http://localhost:10000/maven2/org/apache/logging/log4j/log4j/2.16.0/log4j-2.16.0.pom'. Received status code 403 from server: Forbidden\n")),(0,n.kt)("h3",{id:"what-happened"},"What happened?"),(0,n.kt)("p",null,"Access to ",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.log4j:log4j:2.16.0")," was blocked by a security policy written in ",(0,n.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"Rego language")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rego"},'violations[{"message": msg, "code": code}] {\n  input.target.artefact.group = "org.apache.logging.log4j"\n  input.target.artefact.name = "log4j"\n  semver.compare(input.target.artefact.version, "2.17.0") = -1\n\n  msg := "Old and vulnerable version of log4j2 is not allowed"\n  code := "old_and_vulnerable_software"\n}\n')),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8958).Z,width:"656",height:"371"})))}u.isMDXComponent=!0},8958:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/supply-chain-gateway-hld-fa4c0b613a6beb5dbc674d43dc4cc500.png"}}]);