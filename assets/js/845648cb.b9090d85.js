"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return a?i.createElement(m,r(r({ref:t},p),{},{components:a})):i.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7705:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const o={"sidebar-position":2,title:"Why Tailcall?"},r=void 0,l={unversionedId:"intro/why-tailcall",id:"intro/why-tailcall",title:"Why Tailcall?",description:"What we have built is an open-source API Gateway solution that thinks about the problem from first principles and achieves far superior results than the legacy solutions that are available today. To understand how it works, here is the technical implementation of our solution.",source:"@site/docs/intro/why-tailcall.md",sourceDirName:"intro",slug:"/intro/why-tailcall",permalink:"/docs/intro/why-tailcall",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro/why-tailcall.md",tags:[],version:"current",frontMatter:{"sidebar-position":2,title:"Why Tailcall?"},sidebar:"tutorialSidebar",previous:{title:"API Composition",permalink:"/docs/"}},s={},c=[{value:"High-Level Architecture",id:"high-level-architecture",level:2},{value:"Composition Specification (Blueprint)",id:"composition-specification-blueprint",level:2},{value:"Publishing",id:"publishing",level:2},{value:"Client Consumption",id:"client-consumption",level:2},{value:"Hash Code",id:"hash-code",level:2},{value:"Programming Interface",id:"programming-interface",level:2},{value:"GraphQL in Production",id:"graphql-in-production",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"What we have built is an open-source API Gateway solution that thinks about the problem from first principles and achieves far superior results than the legacy solutions that are available today. To understand how it works, here is the technical implementation of our solution."),(0,n.kt)("h2",{id:"high-level-architecture"},"High-Level Architecture"),(0,n.kt)("p",null,"The clients and the services remain the same with an addition of three components viz. The ",(0,n.kt)("strong",{parentName:"p"},"Composition Spec")," (Also known as the \u201cBlueprint\u201d), Schema ",(0,n.kt)("strong",{parentName:"p"},"Registry,")," and the Tailcall ",(0,n.kt)("strong",{parentName:"p"},"Gateway"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tailcall-architecture",src:a(6874).Z,width:"1600",height:"838"})),(0,n.kt)("p",null,"The metadata about how the APIs are composed is saved in the Schema Registry. Metadata includes - information about the service\u2019s endpoint, the schema of the endpoint\u2019s input, and security and resilience settings. Whenever a client makes a request to the gateway, the metadata is fetched from the registry, and based on the logic, requests are made to the customer\u2019s microservices."),(0,n.kt)("h2",{id:"composition-specification-blueprint"},"Composition Specification (Blueprint)"),(0,n.kt)("p",null,"The Composition Spec contains all the information that is required to compose APIs. Which includes the schema of the valid requests and responses, host and protocol information, and, resiliency expectations such as throttling, caching, and security features such as authentication, authorization, etc."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tailcall-blueprint",src:a(9964).Z,width:"1600",height:"457"})),(0,n.kt)("h2",{id:"publishing"},"Publishing"),(0,n.kt)("p",null,"Once the composition specification is ready, we publish the specification on the tailcall registry. The publishing process has two steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Pre-Publish:")),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We run all the validations and check if there are any invalid states in the composition specification provided by the developer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We also identify performance bottlenecks in the way APIs are composed for eg: the N + 1 problem."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},'\ud83d\udca1 The N + 1 problem in API composition refers to a situation where a single request to API, results in multiple additional requests being made. This can occur when an API returns a list of objects that each require additional data from another API, resulting in a separate request for each object. This can lead to poor performance and increased load on the API. The problem can be solved by using techniques such as "eager loading" or "batching" to reduce the number of requests made.'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We recommend standard best practices for API composition so that developers can integrate it on day one.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We also apply many optimizations eg: including constant folding, inlining, etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Before publishing a unique sha1 hash is generated for the specification provided by the developer (We will learn more about this in the coming sections)")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Post-Publish:")),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"A unified endpoint is automatically generated.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tailcall-blueprint",src:a(1228).Z,width:"1600",height:"648"})),(0,n.kt)("h2",{id:"client-consumption"},"Client Consumption"),(0,n.kt)("p",null,"When the client makes a request it needs to make sure the hash is sent as a part of the request. This is the same hash that\u2019s produced before publishing on the registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'https://tailcall.com/d5fb0/graphQL' \\\n  --data-raw '{\"query\": \"{ posts { title body user { name email } } } }\"}'\n")),(0,n.kt)("h2",{id:"hash-code"},"Hash Code"),(0,n.kt)("p",null,"The hash is used to address the composition spec. It\u2019s basically a SHA1 of the specification. When the specification changes, the SHA1 changes. This gives us a lot of power for eg:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Versioning:")," Each change is version controlled. You can run multiple versions of the specification at the same time in production, without actually maintaining each one of them or using the additional infrastructure."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Canary Releases:")," This becomes a first-class feature of the gateway. Because the spec is versioned we can control the exposure of a newly developed feature easily."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Immutability:")," Each spec is immutable, this guarantees that once a specification is deployed and stable in production, no one can change it at runtime. Thus making product rollbacks much safer."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Breaking Changes:")," Since each specification is independent of the other, we can deploy breaking changes in production without causing any issues for the existing clients.")),(0,n.kt)("h2",{id:"programming-interface"},"Programming Interface"),(0,n.kt)("p",null,"Essentially what we are building is a programmable API Gateway. And the way we could do that is by using some embedded DSLs in general-purpose languages such as Typescript, Javascript etc. Or using configs in YAML, JSON or some other format. We could even have a Graphical User Interface on the web that could allow developers to drag and drop endpoints and create a composition layer on the fly."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tailcall-interface",src:a(2943).Z,width:"1440",height:"960"})),(0,n.kt)("p",null,"Once the composition spec is created by the developer it will be compiled into an intermediary representation (IR). This layer is basically for the computer to understand so developers don\u2019t need to write it by hand. However, this layer will have high-performance primitives to perform API composition. The intermediary representation is then sent to the runtime for execution. The idea of creating a layered architecture is that we should potentially be able to swap out the current runtime which will be in Scala to a Rust-based implementation for high performance. For projects such as these massive adoption happens when you beat other frameworks in performance benchmarks."),(0,n.kt)("h2",{id:"graphql-in-production"},"GraphQL in Production"),(0,n.kt)("p",null,"At Tailcall, we understand the power of GraphQL and the great developer experience it provides when building UI applications. However, we also recognize that it comes with its own set of challenges, particularly when working with legacy infrastructure. For example:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"GraphQL as a protocol is not as widely understood by CDNs, proxies, and telemetry platforms as compared to other protocols such as REST."),(0,n.kt)("li",{parentName:"ol"},"Additionally, in certain cases, GraphQL can be slower for communication between client and server when compared to its peers such as REST and GRPC.")),(0,n.kt)("p",null,"That's why Tailcall provides a flexible solution. Our unified endpoint allows developers to choose the protocol that works best for them, whether it be GraphQL, REST, or GRPC. Our approach is to recommend using GraphQL in the development environment, but in production mode, we offer the ability to seamlessly convert it to a more standard and more performant protocol without any additional development work."),(0,n.kt)("p",null,"This way, teams can enjoy the benefits of GraphQL in the development phase, but also ensure the best performance and compatibility in production. Tailcall's goal is to strike a balance between developer experience and performance, making it easier for teams to build and deploy their applications."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Generic Solution:")," It\u2019s a reusable solution across many use cases."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Robust"),": It\u2019s designed to recover from failure without any dev intervention."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Predictable Performance"),": Introspection allows transparency around performance."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Modular:")," Allows developers to write, maintain and version control just their bit of the composition spec."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Canary Support"),":","*","*"," Provides first-class support for canary releases."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Decoupled Releases:")," Immutability and versioning allow multiple versions of the composition spec to be deployed in production simultaneously."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"E2E Solution:")," It\u2019s a complete programmable API Gateway with first-class support for API composition.")))}u.isMDXComponent=!0},6874:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tailcall-architecture-b45336f22a3e603f3b825871fea29bc5.png"},9964:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tailcall-blueprint-4f3aa85f8d63106977f79070b070e934.png"},1228:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tailcall-digest-c63785f90ab664bed47194dc554436da.png"},2943:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tailcall-interface-bafc38aad10ad97ed6276b2e85e9bd5b.png"}}]);