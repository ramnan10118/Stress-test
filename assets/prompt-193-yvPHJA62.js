import{j as e}from"./index-D4IFi2An.js";import{A as d}from"./arrow-left-gooZl0rZ.js";import{T as a}from"./Typography-jWlp8Cjp.js";import{C as t,b as o}from"./Card-dxnfeZQ8.js";import{B as p}from"./Badge-C33QlmWP.js";import{C as m}from"./car-Bp7DF6BK.js";import{S as h}from"./Separator-DEZQlHGi.js";import{B as u}from"./Button-Dc9lrGyJ.js";import{H as v}from"./headphones-BM7XkItp.js";import{C as x}from"./circle-check-big-DNCtQ9HZ.js";import{C as f}from"./clock-Cseuw3j3.js";import{C as g}from"./circle-DTCFGNAV.js";import"./createLucideIcon-BAyoo0xW.js";import"./clsx-B-dksMZM.js";const s=[{id:"filed",label:"Claim filed",description:"Your claim has been registered successfully.",date:"28 Feb 2026",status:"completed"},{id:"docs",label:"Documents verified",description:"All uploaded documents have been reviewed and accepted.",date:"01 Mar 2026",status:"completed"},{id:"inspection",label:"Inspection scheduled",description:"A surveyor will inspect the vehicle at your preferred location.",date:"04 Mar 2026",status:"current"},{id:"assessment",label:"Damage assessment",description:"Repair cost estimate will be prepared after inspection.",date:"—",status:"upcoming"},{id:"settlement",label:"Claim settled",description:"Approved amount will be transferred to your account.",date:"—",status:"upcoming"}];function b({status:r}){return r==="completed"?e.jsx(x,{size:20,color:"var(--color-success)","aria-hidden":"true"}):r==="current"?e.jsx(f,{size:20,color:"var(--color-warning)","aria-hidden":"true"}):e.jsx(g,{size:20,color:"var(--color-text-disabled)","aria-hidden":"true"})}function M(){const r=s.find(i=>i.status==="current");return e.jsxs("div",{className:"p193-root",children:[e.jsx("style",{children:`
        .p193-root {
          min-height: 100vh;
          background: var(--color-surface);
        }

        .p193-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p193-container {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p193-container {
            padding-inline: var(--space-10);
          }
        }

        .p193-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-block: var(--space-4);
        }

        .p193-back-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-44);
          height: var(--scale-44);
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: var(--radius-lg);
          color: var(--color-text-primary);
          touch-action: manipulation;
          position: relative;
        }

        @media (hover: hover) and (pointer: fine) {
          .p193-back-btn:hover {
            background: var(--color-surface-secondary);
          }
        }

        .p193-back-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
          border-radius: var(--radius-sm);
        }

        .p193-claim-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .p193-claim-meta {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-3);
        }

        .p193-claim-id {
          font-variant-numeric: tabular-nums;
        }

        .p193-vehicle-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .p193-vehicle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-40);
          height: var(--scale-40);
          border-radius: var(--radius-inset-lg);
          background: var(--color-surface-secondary);
          color: var(--color-text-secondary);
          flex-shrink: 0;
        }

        .p193-vehicle-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          min-width: 0;
        }

        .p193-separator-wrap {
          padding-block: var(--space-4);
        }

        .p193-timeline-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .p193-timeline {
          display: flex;
          flex-direction: column;
        }

        .p193-step {
          display: flex;
          gap: var(--space-3);
        }

        .p193-step-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: var(--scale-20);
        }

        .p193-step-line {
          width: var(--scale-2);
          flex: 1;
          min-height: var(--space-4);
          background: var(--color-border);
        }

        .p193-step-line--completed {
          background: var(--color-success);
        }

        .p193-step-content {
          flex: 1;
          padding-bottom: var(--space-5);
          min-width: 0;
          overflow-wrap: break-word;
        }

        .p193-step:last-child .p193-step-content {
          padding-bottom: 0;
        }

        .p193-step-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-2);
          flex-wrap: wrap;
          margin-bottom: var(--space-1);
        }

        .p193-cards-area {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding-bottom: calc(var(--space-8) + env(safe-area-inset-bottom));
        }

        .p193-help-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .p193-help-text {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          min-width: 0;
        }

        @media (max-width: 767px) {
          .p193-help-inner {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}),e.jsx("div",{className:"p193-container",children:e.jsxs("div",{className:"p193-header",children:[e.jsx("button",{className:"p193-back-btn","aria-label":"Go back",type:"button",children:e.jsx(d,{size:20,"aria-hidden":"true"})}),e.jsx(a,{variant:"heading-lg",weight:"semibold",as:"h1",children:"Claim status"})]})}),e.jsx("div",{className:"p193-container",children:e.jsxs("div",{className:"p193-cards-area",children:[e.jsxs(t,{padding:"md",children:[e.jsxs("div",{className:"p193-claim-info",children:[e.jsxs("div",{className:"p193-claim-meta",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"label-md",color:"muted",children:"Claim ID"}),e.jsx(a,{variant:"heading-sm",weight:"semibold",children:e.jsx("span",{className:"p193-claim-id",children:"CLM-2026-00847"})})]}),e.jsx(p,{variant:"solid",color:"orange",size:"sm",children:"In progress"})]}),e.jsxs("div",{className:"p193-vehicle-row",children:[e.jsx("div",{className:"p193-vehicle-icon",children:e.jsx(m,{size:20,"aria-hidden":"true"})}),e.jsxs("div",{className:"p193-vehicle-details",children:[e.jsx(a,{variant:"body-md",weight:"medium",children:"Hyundai Creta 2023"}),e.jsx(a,{variant:"body-sm",color:"muted",children:"KA-01-AB-1234 · Front bumper damage"})]})]}),r&&e.jsxs(a,{variant:"body-sm",color:"muted",children:["Current step: ",r.label," — ",r.date]})]}),e.jsx("div",{className:"p193-separator-wrap",children:e.jsx(h,{})}),e.jsxs("div",{className:"p193-timeline-section",children:[e.jsx(a,{variant:"heading-sm",weight:"semibold",as:"h2",children:"Timeline"}),e.jsx(o,{children:e.jsx("div",{className:"p193-timeline",role:"list","aria-label":"Claim timeline",children:s.map((i,l)=>{const n=l===s.length-1,c=i.status==="completed";return e.jsxs("div",{className:"p193-step",role:"listitem","aria-current":i.status==="current"?"step":void 0,children:[e.jsxs("div",{className:"p193-step-indicator",children:[e.jsx(b,{status:i.status}),!n&&e.jsx("div",{className:`p193-step-line${c?" p193-step-line--completed":""}`})]}),e.jsxs("div",{className:"p193-step-content",children:[e.jsxs("div",{className:"p193-step-title-row",children:[e.jsx(a,{variant:"body-md",weight:i.status==="upcoming"?"regular":"medium",color:i.status==="upcoming"?"muted":"default",children:i.label}),e.jsx(a,{variant:"caption",color:"muted",children:i.date})]}),e.jsx(a,{variant:"body-sm",color:"muted",children:i.description})]})]},i.id)})})})]})]}),e.jsx(t,{padding:"md",variant:"demoted",children:e.jsxs("div",{className:"p193-help-inner",children:[e.jsxs("div",{className:"p193-help-text",children:[e.jsx(a,{variant:"heading-sm",weight:"semibold",children:"Need help with your claim?"}),e.jsx(a,{variant:"body-sm",color:"muted",children:"Our claims team is available 24/7."})]}),e.jsx(u,{variant:"outline",size:"md",iconLeft:e.jsx(v,{size:18}),children:"Contact support"})]})})]})})]})}export{M as default};
