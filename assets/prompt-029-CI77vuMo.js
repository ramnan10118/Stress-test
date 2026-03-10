import{r as n,j as e}from"./index-D4IFi2An.js";import{T as r}from"./Typography-jWlp8Cjp.js";import{P as S}from"./Progress-C3_6J_BU.js";import{C as o}from"./Card-dxnfeZQ8.js";import{T as c}from"./TextInput-DTObOzMq.js";import{X as z}from"./x-DyMcZ9ge.js";import{P as y}from"./plus-o40pooNT.js";import{S as x}from"./Separator-DEZQlHGi.js";import{B as p}from"./Button-Dc9lrGyJ.js";import{C as B}from"./chevron-left-D5FCWZk9.js";import{P}from"./plane-DKsKYgKs.js";import{B as $}from"./Badge-C33QlmWP.js";import{C as A}from"./check-C5hQatFZ.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-BAyoo0xW.js";const E=["Emergency medical up to ₹50 lakh","Trip cancellation & interruption","Lost & delayed baggage cover","Flight delay cash benefit","Passport loss assistance abroad"],Y=["Trip details","Travellers","Get quote"];function Q(){const[l,d]=n.useState(1),[m,h]=n.useState([{id:"d1",name:""}]),[g,j]=n.useState(""),[u,w]=n.useState(""),[v,f]=n.useState([{id:"t1",name:""}]),k=()=>h(a=>[...a,{id:`d${Date.now()}`,name:""}]),D=a=>h(s=>s.filter(i=>i.id!==a)),N=(a,s)=>h(i=>i.map(t=>t.id===a?{...t,name:s}:t)),C=()=>f(a=>[...a,{id:`t${Date.now()}`,name:""}]),T=(a,s)=>f(i=>i.map(t=>t.id===a?{...t,name:s}:t)),b=m.filter(a=>a.name.trim());return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .p029-page {
          min-height: 100vh;
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
        }

        .p029-header {
          background: var(--grey-white);
          border-bottom: 1px solid var(--color-border-subtle);
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
        }

        .p029-header-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-4);
          height: var(--scale-64);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .p029-logo {
          height: var(--scale-24);
          width: auto;
        }

        .p029-steps {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .p029-step-dot {
          width: var(--scale-28);
          height: var(--scale-28);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .p029-step-line {
          width: var(--scale-24);
          height: 2px;
          border-radius: var(--radius-full);
        }

        .p029-main {
          flex: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: var(--space-8) var(--space-4);
          padding-bottom: var(--space-20);
        }

        @media (min-width: 768px) {
          .p029-header-inner {
            padding-left: var(--space-8);
            padding-right: var(--space-8);
          }
          .p029-main {
            padding-left: var(--space-8);
            padding-right: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p029-header-inner {
            padding-left: var(--space-10);
            padding-right: var(--space-10);
          }
          .p029-main {
            padding-left: var(--space-10);
            padding-right: var(--space-10);
          }
        }

        @media (min-width: 1280px) {
          .p029-header-inner {
            padding-left: 0;
            padding-right: 0;
          }
          .p029-main {
            padding-left: 0;
            padding-right: 0;
          }
        }

        .p029-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }

        @media (min-width: 768px) {
          .p029-grid {
            grid-template-columns: 3fr 2fr;
            align-items: start;
          }
        }

        .p029-dest-row {
          display: flex;
          gap: var(--space-2);
          align-items: flex-end;
        }

        .p029-dest-field {
          flex: 1;
        }

        .p029-remove-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-2);
          min-width: var(--scale-44);
          min-height: var(--scale-44);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-error);
          touch-action: manipulation;
          border-radius: var(--radius-md);
        }

        .p029-add-btn {
          background: none;
          border: 1px dashed var(--color-border-default);
          border-radius: var(--radius-lg);
          padding: var(--space-2) var(--space-4);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-primary);
          touch-action: manipulation;
          min-height: var(--scale-44);
        }

        .p029-date-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
        }

        .p029-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .p029-quote-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
          text-align: center;
        }

        .p029-quote-summary {
          background: var(--color-surface);
          border-radius: var(--radius-xl);
          padding: var(--space-4);
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .p029-edit-link {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-primary);
          touch-action: manipulation;
          padding: var(--space-2);
          min-height: var(--scale-44);
          display: inline-flex;
          align-items: center;
        }

        .p029-coverage-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .p029-coverage-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
        }
      `}),e.jsxs("div",{className:"p029-page",children:[e.jsx("header",{className:"p029-header",children:e.jsxs("div",{className:"p029-header-inner",children:[e.jsx("img",{src:"https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg",alt:"ACKO",className:"p029-logo"}),e.jsx("nav",{className:"p029-steps","aria-label":"Trip builder progress",children:Y.map((a,s)=>{const i=s+1,t=l>=i;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("div",{className:"p029-step-dot",style:{background:t?"var(--color-primary)":"var(--color-border-subtle)",color:t?"var(--color-on-primary)":"var(--color-text-muted)"},"aria-label":`Step ${i}: ${a}${l===i?" (current)":""}`,role:"status",children:e.jsx(r,{variant:"caption",weight:"semibold",children:i})}),i<3&&e.jsx("div",{className:"p029-step-line",style:{background:l>i?"var(--color-primary)":"var(--color-border-subtle)"},"aria-hidden":"true"})]},i)})})]})}),e.jsxs("main",{className:"p029-main",children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)",marginBottom:"var(--space-8)"},children:[e.jsx(r,{variant:"heading-xl",weight:"bold",color:"strong",as:"h1",children:"Travel insurance"}),e.jsx(r,{variant:"body-md",color:"muted",children:"Cover your trip in under 2 minutes. Multi-destination, multi-traveller — one simple plan."})]}),e.jsx(S,{value:l*33,max:100,"aria-label":"Trip builder progress"}),e.jsxs("div",{className:"p029-grid",style:{marginTop:"var(--space-8)"},children:[e.jsxs("div",{children:[l===1&&e.jsxs(o,{variant:"default",padding:"lg",children:[e.jsx(r,{variant:"heading-md",weight:"semibold",color:"strong",style:{display:"block",marginBottom:"var(--space-6)"},children:"Plan your trip"}),e.jsx("form",{onSubmit:a=>{a.preventDefault(),d(2)},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(r,{variant:"label-lg",weight:"semibold",color:"strong",children:"Destinations"}),m.map((a,s)=>e.jsxs("div",{className:"p029-dest-row",children:[e.jsx("div",{className:"p029-dest-field",children:e.jsx(c,{label:`Destination ${s+1}`,placeholder:"e.g. Bangkok, Thailand",value:a.name,onChange:i=>N(a.id,i)})}),m.length>1&&e.jsx("button",{type:"button",className:"p029-remove-btn",onClick:()=>D(a.id),"aria-label":`Remove destination ${s+1}`,children:e.jsx(z,{size:16,"aria-hidden":"true"})})]},a.id)),e.jsxs("button",{type:"button",className:"p029-add-btn",onClick:k,children:[e.jsx(y,{size:16,"aria-hidden":"true"}),e.jsx(r,{variant:"label-md",weight:"semibold",color:"primary",children:"Add destination"})]})]}),e.jsx(x,{}),e.jsxs("div",{className:"p029-date-grid",children:[e.jsx(c,{label:"Departure date",placeholder:"DD / MM / YYYY",value:g,onChange:j}),e.jsx(c,{label:"Return date",placeholder:"DD / MM / YYYY",value:u,onChange:w})]}),e.jsx(p,{type:"submit",variant:"primary",size:"lg",fullWidth:!0,children:"Continue"})]})})]}),l===2&&e.jsxs(o,{variant:"default",padding:"lg",children:[e.jsx(r,{variant:"heading-md",weight:"semibold",color:"strong",style:{display:"block",marginBottom:"var(--space-6)"},children:"Traveller details"}),e.jsx("form",{onSubmit:a=>{a.preventDefault(),d(3)},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[v.map((a,s)=>e.jsx(c,{label:`Traveller ${s+1} — Full name`,placeholder:"As per passport",value:a.name,onChange:i=>T(a.id,i)},a.id)),e.jsxs("button",{type:"button",className:"p029-add-btn",onClick:C,children:[e.jsx(y,{size:16,"aria-hidden":"true"}),e.jsx(r,{variant:"label-md",weight:"semibold",color:"primary",children:"Add traveller"})]}),e.jsx(x,{}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)"},children:[e.jsx(p,{type:"button",variant:"outline",size:"lg",onClick:()=>d(1),children:e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"var(--space-1)"},children:[e.jsx(B,{size:16,"aria-hidden":"true"})," Go back"]})}),e.jsx("div",{style:{flex:1},children:e.jsx(p,{type:"submit",variant:"primary",size:"lg",fullWidth:!0,children:"Continue"})})]})]})})]}),l===3&&e.jsx(o,{variant:"elevated",padding:"lg",children:e.jsxs("div",{className:"p029-quote-center",children:[e.jsx("div",{style:{width:"var(--scale-56)",height:"var(--scale-56)",borderRadius:"var(--radius-full)",background:"var(--color-primary-subtle)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-primary)"},children:e.jsx(P,{size:28,"aria-hidden":"true"})}),e.jsx(r,{variant:"heading-lg",weight:"bold",color:"strong",children:"Your trip is ready to insure"}),e.jsxs("div",{className:"p029-quote-summary",children:[e.jsxs("div",{className:"p029-summary-row",children:[e.jsx(r,{variant:"body-sm",color:"muted",children:"Destinations"}),e.jsx(r,{variant:"body-sm",color:"default",children:b.length>0?b.map(a=>a.name).join(", "):"—"})]}),e.jsxs("div",{className:"p029-summary-row",children:[e.jsx(r,{variant:"body-sm",color:"muted",children:"Dates"}),e.jsx(r,{variant:"body-sm",color:"default",children:g&&u?`${g} → ${u}`:"—"})]}),e.jsxs("div",{className:"p029-summary-row",children:[e.jsx(r,{variant:"body-sm",color:"muted",children:"Travellers"}),e.jsx(r,{variant:"body-sm",color:"default",style:{fontVariantNumeric:"tabular-nums"},children:v.length})]}),e.jsx(x,{}),e.jsxs("div",{className:"p029-summary-row",children:[e.jsx(r,{variant:"label-lg",weight:"semibold",color:"strong",children:"Premium from"}),e.jsxs(r,{variant:"heading-md",weight:"bold",color:"primary",style:{fontVariantNumeric:"tabular-nums"},children:["₹",(199*v.length).toLocaleString("en-IN"),"/trip"]})]})]}),e.jsx(p,{type:"button",variant:"primary",size:"lg",fullWidth:!0,children:"Get full quote"}),e.jsx("button",{type:"button",className:"p029-edit-link",onClick:()=>d(2),children:e.jsx(r,{variant:"label-md",weight:"semibold",color:"primary",children:"Edit details"})})]})})]}),e.jsxs(o,{variant:"default",padding:"md",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)",marginBottom:"var(--space-4)"},children:[e.jsx(r,{variant:"label-lg",weight:"semibold",color:"strong",children:"What's included"}),e.jsx($,{color:"blue",size:"sm",children:"All plans"})]}),e.jsx("ul",{className:"p029-coverage-list",children:E.map(a=>e.jsxs("li",{className:"p029-coverage-item",children:[e.jsx(A,{size:16,strokeWidth:2.5,"aria-hidden":"true",style:{color:"var(--color-success)",flexShrink:0,marginTop:2}}),e.jsx(r,{variant:"body-sm",color:"default",children:a})]},a))})]})]})]})]})]})}export{Q as default};
