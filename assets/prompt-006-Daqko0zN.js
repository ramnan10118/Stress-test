import{j as r}from"./index-D4IFi2An.js";import{T as t}from"./Typography-jWlp8Cjp.js";import"./clsx-B-dksMZM.js";const l=[{value:"50 lakh+",label:"Customers protected"},{value:"3 days",label:"Average claim settlement"},{value:"5,000+",label:"Cashless garages"},{value:"24 × 7",label:"Customer support"}],i=()=>r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{color:"var(--color-success)",flexShrink:0},children:r.jsx("path",{d:"M20 6 9 17l-5-5"})});function n(){return r.jsxs("section",{style:{background:"var(--grey-white)",padding:"var(--space-10) var(--space-4)",borderTop:"1px solid var(--color-border-subtle)",borderBottom:"1px solid var(--color-border-subtle)"},children:[r.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)",marginBottom:"var(--space-8)"},children:[r.jsx(i,{}),r.jsx(t,{variant:"label-lg",weight:"semibold",color:"muted",children:"TRUSTED BY INDIA"}),r.jsx(i,{})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0"},className:"trust-grid",children:l.map((e,o)=>r.jsx("div",{children:r.jsxs("div",{style:{padding:"var(--space-6) var(--space-4)",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)",borderRight:o%2===0?"1px solid var(--color-border-subtle)":"none",borderBottom:o<2?"1px solid var(--color-border-subtle)":"none"},children:[r.jsx(t,{variant:"heading-xl",weight:"bold",color:"primary",style:{fontVariantNumeric:"tabular-nums"},children:e.value}),r.jsx(t,{variant:"body-sm",color:"muted",children:e.label})]})},e.label))})]}),r.jsx("style",{children:`
        @media (min-width: 680px) {
          .trust-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .trust-grid > div > div {
            border-bottom: none !important;
          }
          .trust-grid > div:last-child > div {
            border-right: none !important;
          }
          .trust-grid > div:nth-child(2) > div {
            border-right: 1px solid var(--color-border-subtle) !important;
          }
          .trust-grid > div:nth-child(3) > div {
            border-right: 1px solid var(--color-border-subtle) !important;
          }
        }
      `})]})}export{n as default};
