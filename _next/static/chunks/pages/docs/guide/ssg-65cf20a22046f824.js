(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7885],{9229:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guide/ssg",function(){return r(1209)}])},1209:function(s,e,r){"use strict";r.r(e),r.d(e,{Stars:function(){return a},__N_SSG:function(){return t}});var n=r(5893),o=r(6997),l=r(1151);r(5675);var i=r(4912),t=!0;let a=()=>{let s=Object.assign({strong:"strong"},(0,l.ah)()),{stars:e}=(0,i.sC)();return(0,n.jsx)(s.strong,{children:e})};function c(s){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",hr:"hr",pre:"pre",span:"span"},(0,l.ah)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Next.js SSG"}),"\n",(0,n.jsxs)(e.p,{children:["With Next.js, you can pre-render your page using\n",(0,n.jsx)(e.a,{href:"https://nextjs.org/docs/basic-features/pages#static-generation-recommended",children:"Static Generation (SSG)"}),".\nYour pages will be generated at build time and statically served to visitors. It\ncan also be cached by a CDN to maximize the performance."]}),"\n",(0,n.jsx)(e.p,{children:"This is supported by Nextra too. Here's an example:"}),"\n","\n","\n","\n",(0,n.jsx)("div",{className:"mt-6 rounded border border-gray-200 p-4 dark:border-gray-900",children:(0,n.jsxs)(e.p,{children:["Nextra has ",(0,n.jsx)(a,{})," stars on GitHub!"]})}),"\n",(0,n.jsxs)(e.p,{children:["The number above was generated at build time via ",(0,n.jsx)(e.code,{children:"getStaticProps"}),". With\n",(0,n.jsx)(e.a,{href:"https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration",children:"Incremental Static Regeneration"}),"\nenabled, it will be kept up to date."]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.p,{children:"Here's the MDX code for the example above:"}),"\n",(0,n.jsx)(e.pre,{"data-language":"mdx","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(e.code,{"data-language":"mdx","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { useSSG } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nextra/ssg'"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getStaticProps"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({ params }) "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`https://api.github.com/repos/shuding/nextra`"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(res "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"res"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".json"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(repo "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      props"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// We add an `ssg` field to the page props,"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// which will be provided to the Nextra `useSSG` hook."})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ssg"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          stars"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"repo"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".stargazers_count"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// The page will be considered as stale and regenerated every 60 seconds."})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      revalidate"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }))"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Stars"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Get the data from SSG, and render it as a component."})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"stars"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useSSG"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"strong"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">{stars}</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"strong"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Nextra has "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Stars "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" stars on GitHub"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"})]})]})})]})}e.default=(0,o.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.ah)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(c,{...s})}):c(s)},pageOpts:{filePath:"pages/docs/guide/ssg.mdx",route:"/docs/guide/ssg",headings:[{depth:1,value:"Next.js SSG",id:"nextjs-ssg"}],title:"Next.js SSG"},pageNextRoute:"/docs/guide/ssg"})}},function(s){s.O(0,[6997,9774,2888,179],function(){return s(s.s=9229)}),_N_E=s.O()}]);