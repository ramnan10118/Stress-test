import{r as l,j as e}from"./index-D4IFi2An.js";import{B as o}from"./Button-Dc9lrGyJ.js";import{B as g}from"./Badge-C33QlmWP.js";import{T as r}from"./Typography-jWlp8Cjp.js";import{C as s}from"./Card-dxnfeZQ8.js";import{T as c}from"./TextInput-DTObOzMq.js";import{S as t}from"./Separator-DEZQlHGi.js";import{C as u}from"./clock-Cseuw3j3.js";import{S as x}from"./shield-BzKTxnx7.js";import{W as v}from"./wrench-DZ28xkLV.js";import{S as y}from"./star-Ch4n3Cis.js";import{A as b}from"./Avatar-BOqqzDjP.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-BAyoo0xW.js";const f=[{num:"1",title:"Enter your car number",body:"We pull your car details instantly — no manual data entry needed."},{num:"2",title:"Select your plan",body:"Compare Third Party, Comprehensive, and Total Protect side by side."},{num:"3",title:"Pay and get covered",body:"Policy issued instantly. Document in your inbox in seconds."}],j=[{icon:u,title:"Digital-first claims",body:"File in 2 minutes from your phone. Most claims approved in 30 minutes."},{icon:x,title:"Transparent pricing",body:"The price you see is what you pay. No agent commissions, no hidden charges."},{icon:v,title:"3,000+ network garages",body:"Cashless repairs across India. No upfront payment, no running around."}],N=[{name:"Priya S.",city:"Mumbai",rating:5,text:"Claims settled in 35 minutes. I couldn't believe it. Best insurer I've used."},{name:"Rahul V.",city:"Delhi",rating:5,text:"Saved ₹3,000 on renewal vs my previous insurer. Digital, fast, zero calls."},{name:"Ananya P.",city:"Bengaluru",rating:4,text:"Roadside assistance at midnight. Tow truck in 28 minutes. Genuinely impressed."}];function M(){const[d,p]=l.useState(""),[m,h]=l.useState("");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .p021-page {
          min-height: 100vh;
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
        }

        /* ── Section Container ── */
        .p021-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p021-container { padding-inline: var(--space-8); }
        }

        @media (min-width: 1024px) {
          .p021-container { padding-inline: var(--space-10); }
        }

        /* ── Header ── */
        .p021-header {
          background: var(--grey-white);
          border-bottom: 1px solid var(--color-border-subtle);
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
        }

        .p021-header-inner {
          height: var(--scale-64);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .p021-logo {
          height: var(--scale-24);
          width: auto;
        }

        .p021-header-actions {
          display: flex;
          gap: var(--space-2);
        }

        /* ── Hero ── */
        .p021-hero {
          background: var(--grey-white);
          padding-block: var(--space-16);
        }

        .p021-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-10);
          align-items: center;
        }

        @media (min-width: 768px) {
          .p021-hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .p021-hero-copy {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .p021-quote-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        /* ── Sections ── */
        .p021-section {
          padding-block: var(--space-16);
        }

        .p021-section-alt {
          padding-block: var(--space-16);
          background: var(--grey-white);
        }

        .p021-section-heading {
          margin-bottom: var(--space-10);
          text-align: center;
        }

        /* ── Grids ── */
        .p021-grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3);
        }

        @media (min-width: 768px) {
          .p021-grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── Step number circle ── */
        .p021-step-num {
          width: var(--scale-36);
          height: var(--scale-36);
          border-radius: var(--radius-full);
          background: var(--color-primary);
          color: var(--color-on-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: var(--space-3);
        }

        /* ── Benefit icon ── */
        .p021-benefit-icon {
          width: var(--scale-44);
          height: var(--scale-44);
          border-radius: var(--radius-xl);
          background: var(--color-primary-subtle);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: var(--space-3);
        }

        /* ── Star rating ── */
        .p021-stars {
          display: flex;
          gap: var(--space-1);
          margin-bottom: var(--space-3);
        }

        /* ── Footer ── */
        .p021-footer {
          background: var(--grey-700);
          padding-block: var(--space-10);
        }

        .p021-footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
        }

        .p021-footer-logo {
          height: var(--scale-44);
          width: auto;
        }
      `}),e.jsxs("div",{className:"p021-page",children:[e.jsx("header",{className:"p021-header",children:e.jsxs("div",{className:"p021-container p021-header-inner",children:[e.jsx("img",{src:"https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg",alt:"ACKO",className:"p021-logo"}),e.jsxs("div",{className:"p021-header-actions",children:[e.jsx(o,{type:"button",variant:"outline",size:"sm",children:"Log in"}),e.jsx(o,{type:"button",variant:"primary",size:"sm",children:"Get a quote"})]})]})}),e.jsx("section",{className:"p021-hero",children:e.jsxs("div",{className:"p021-container p021-hero-grid",children:[e.jsxs("div",{className:"p021-hero-copy",children:[e.jsx(g,{color:"green",size:"sm",children:"Trusted by 50 lakh+ car owners"}),e.jsx(r,{variant:"display-lg",weight:"bold",color:"strong",as:"h1",style:{textWrap:"balance"},children:"Car insurance that works when you need it most"}),e.jsx(r,{variant:"body-lg",color:"muted",style:{textWrap:"pretty"},children:"100% digital. No agents. Claims in 30 minutes. Prices you can trust."})]}),e.jsxs(s,{variant:"elevated",padding:"lg",children:[e.jsx(r,{variant:"heading-md",weight:"semibold",color:"strong",style:{display:"block",marginBottom:"var(--space-6)"},children:"Get your free quote"}),e.jsxs("form",{onSubmit:a=>a.preventDefault(),className:"p021-quote-form",children:[e.jsx(c,{label:"Vehicle number",placeholder:"MH 01 AB 1234",value:d,onChange:a=>p(a.toUpperCase()),autoComplete:"off"}),e.jsx(c,{label:"Mobile number",placeholder:"9876543210",type:"tel",value:m,onChange:a=>h(a.replace(/\D/g,"").slice(0,10)),autoComplete:"tel"}),e.jsx(o,{type:"submit",variant:"primary",size:"lg",fullWidth:!0,children:"View my quote"})]})]})]})}),e.jsx(t,{}),e.jsx("section",{className:"p021-section",children:e.jsxs("div",{className:"p021-container",children:[e.jsx("div",{className:"p021-section-heading",children:e.jsx(r,{variant:"heading-xl",weight:"bold",color:"strong",as:"h2",style:{textWrap:"balance"},children:"How it works"})}),e.jsx("div",{className:"p021-grid-3",children:f.map(a=>e.jsxs(s,{variant:"default",padding:"md",children:[e.jsx("div",{className:"p021-step-num",children:e.jsx(r,{variant:"label-lg",weight:"bold",children:a.num})}),e.jsx(r,{variant:"heading-sm",weight:"semibold",color:"strong",style:{display:"block",marginBottom:"var(--space-2)"},children:a.title}),e.jsx(r,{variant:"body-sm",color:"muted",children:a.body})]},a.num))})]})}),e.jsx(t,{}),e.jsx("section",{className:"p021-section-alt",children:e.jsxs("div",{className:"p021-container",children:[e.jsx("div",{className:"p021-section-heading",children:e.jsx(r,{variant:"heading-xl",weight:"bold",color:"strong",as:"h2",style:{textWrap:"balance"},children:"Why choose ACKO"})}),e.jsx("div",{className:"p021-grid-3",children:j.map(({icon:a,title:i,body:n})=>e.jsxs(s,{variant:"default",padding:"lg",children:[e.jsx("div",{className:"p021-benefit-icon",children:e.jsx(a,{size:22,"aria-hidden":"true"})}),e.jsx(r,{variant:"heading-sm",weight:"semibold",color:"strong",style:{display:"block",marginBottom:"var(--space-2)"},children:i}),e.jsx(r,{variant:"body-md",color:"muted",children:n})]},i))})]})}),e.jsx(t,{}),e.jsx("section",{className:"p021-section",children:e.jsxs("div",{className:"p021-container",children:[e.jsx("div",{className:"p021-section-heading",children:e.jsx(r,{variant:"heading-xl",weight:"bold",color:"strong",as:"h2",style:{textWrap:"balance"},children:"Trusted by 50 lakh+ drivers"})}),e.jsx("div",{className:"p021-grid-3",children:N.map(a=>e.jsxs(s,{variant:"outline",padding:"md",children:[e.jsx("div",{className:"p021-stars",children:Array.from({length:a.rating}).map((i,n)=>e.jsx(y,{size:14,fill:"var(--orange-400)",stroke:"none","aria-hidden":"true"},n))}),e.jsxs(r,{variant:"body-md",color:"default",style:{marginBottom:"var(--space-4)"},children:['"',a.text,'"']}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx(b,{initials:a.name.split(" ").map(i=>i[0]).join(""),size:"sm"}),e.jsxs("div",{children:[e.jsx(r,{variant:"label-md",weight:"semibold",color:"strong",style:{display:"block"},children:a.name}),e.jsx(r,{variant:"caption",color:"muted",children:a.city})]})]})]},a.name))})]})}),e.jsx(t,{}),e.jsx("footer",{className:"p021-footer",children:e.jsxs("div",{className:"p021-container p021-footer-inner",children:[e.jsx("img",{src:"https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20Primary%20Dark%20BG.svg",alt:"ACKO",className:"p021-footer-logo"}),e.jsx(r,{variant:"body-sm",color:"muted",align:"center",children:"IRDAI Licence No. 157 · © 2026 Acko General Insurance Ltd. All rights reserved."})]})})]})]})}export{M as default};
