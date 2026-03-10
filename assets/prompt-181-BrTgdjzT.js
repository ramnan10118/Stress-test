import{r as s,j as e}from"./index-D4IFi2An.js";import{T as r}from"./Typography-jWlp8Cjp.js";import{T as n}from"./TextInput-DTObOzMq.js";import{S as c}from"./search-C5vYSZfi.js";import{C as d}from"./Card-dxnfeZQ8.js";import{B as l}from"./Badge-C33QlmWP.js";import{U as p}from"./user-DPiwGMzw.js";import{C as m}from"./clock-Cseuw3j3.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-BAyoo0xW.js";const h=[{id:"1",category:"Car Insurance",categoryColor:"purple",title:"What does comprehensive car insurance actually cover?",excerpt:"A clear breakdown of what's included in a comprehensive policy — and what isn't. No jargon, just plain answers.",author:"Priya Mehta",readTime:"4 min read"},{id:"2",category:"Health",categoryColor:"green",title:"How to choose the right health insurance for your family",excerpt:"Picking a family health plan can feel overwhelming. Here's a simple framework to help you decide.",author:"Rahul Sharma",readTime:"6 min read"},{id:"3",category:"Claims",categoryColor:"orange",title:"Filing a car insurance claim: step-by-step guide",excerpt:"What to do right after an accident, which documents you need, and how to track your claim status.",author:"Ankit Verma",readTime:"5 min read"},{id:"4",category:"Travel",categoryColor:"blue",title:"Do you really need travel insurance for domestic trips?",excerpt:"Most people skip travel insurance for short trips. Here's why that might be a costly mistake.",author:"Sneha Iyer",readTime:"3 min read"},{id:"5",category:"Tips",categoryColor:"pink",title:"5 ways to lower your car insurance premium",excerpt:"Simple, practical steps you can take today to reduce what you pay — without reducing coverage.",author:"Vikram Das",readTime:"4 min read"},{id:"6",category:"Health",categoryColor:"green",title:"Understanding waiting periods in health insurance",excerpt:"Why can't you claim immediately after buying a policy? Here's what waiting periods mean for you.",author:"Meera Nair",readTime:"5 min read"}];function k(){const[i,o]=s.useState(""),t=h.filter(a=>a.title.toLowerCase().includes(i.toLowerCase())||a.category.toLowerCase().includes(i.toLowerCase()));return e.jsxs("div",{className:"p181-root",children:[e.jsx("style",{children:`
        .p181-root {
          min-height: 100vh;
          background: var(--color-surface);
        }

        .p181-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p181-container {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p181-container {
            padding-inline: var(--space-10);
          }
        }

        .p181-header {
          padding-top: var(--space-12);
          padding-bottom: var(--space-8);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          text-wrap: balance;
        }

        .p181-search {
          padding-bottom: var(--space-8);
          max-width: 480px;
        }

        .p181-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
          padding-bottom: calc(var(--space-12) + env(safe-area-inset-bottom));
        }

        @media (min-width: 768px) {
          .p181-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .p181-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .p181-card-inner {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          height: 100%;
        }

        .p181-card-body {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          flex: 1;
        }

        .p181-card-meta {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-top: auto;
          padding-top: var(--space-3);
        }

        .p181-meta-item {
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .p181-meta-dot {
          width: var(--scale-4);
          height: var(--scale-4);
          border-radius: var(--radius-full);
          background: var(--color-border);
          flex-shrink: 0;
        }

        .p181-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          padding-block: var(--space-12);
        }
      `}),e.jsx("div",{className:"p181-container",children:e.jsxs("div",{className:"p181-header",children:[e.jsx(r,{variant:"display-sm",weight:"bold",as:"h1",children:"Insurance explained simply"}),e.jsx(r,{variant:"body-lg",color:"muted",children:"Clear answers to common insurance questions — no jargon, no fine print tricks."})]})}),e.jsx("div",{className:"p181-container",children:e.jsx("div",{className:"p181-search",children:e.jsx(n,{label:"Search articles",placeholder:"Search by topic or keyword...",value:i,onChange:o,type:"search",size:"lg",iconLeft:e.jsx(c,{size:18})})})}),e.jsx("div",{className:"p181-container",children:e.jsxs("div",{className:"p181-grid",children:[t.map(a=>e.jsx(d,{padding:"md",children:e.jsxs("div",{className:"p181-card-inner",children:[e.jsx("div",{children:e.jsx(l,{variant:"outline",color:a.categoryColor,size:"sm",children:a.category})}),e.jsxs("div",{className:"p181-card-body",children:[e.jsx(r,{variant:"heading-sm",weight:"semibold",children:a.title}),e.jsx(r,{variant:"body-sm",color:"muted",children:a.excerpt})]}),e.jsxs("div",{className:"p181-card-meta",children:[e.jsxs("div",{className:"p181-meta-item",children:[e.jsx(p,{size:14,color:"var(--color-text-secondary)","aria-hidden":"true"}),e.jsx(r,{variant:"caption",color:"muted",children:a.author})]}),e.jsx("div",{className:"p181-meta-dot","aria-hidden":"true"}),e.jsxs("div",{className:"p181-meta-item",children:[e.jsx(m,{size:14,color:"var(--color-text-secondary)","aria-hidden":"true"}),e.jsx(r,{variant:"caption",color:"muted",children:a.readTime})]})]})]})},a.id)),t.length===0&&e.jsxs("div",{className:"p181-empty",children:[e.jsx(r,{variant:"heading-md",weight:"semibold",children:"No articles found"}),e.jsx(r,{variant:"body-md",color:"muted",children:"Try a different search term."})]})]})})]})}export{k as default};
