import{r as o,j as e}from"./index-D4IFi2An.js";import{A as t}from"./arrow-left-gooZl0rZ.js";import{T as a}from"./Typography-jWlp8Cjp.js";import{C as i,b as l}from"./Card-dxnfeZQ8.js";import{B as c}from"./Badge-C33QlmWP.js";import{C as d}from"./clock-Cseuw3j3.js";import{c as p}from"./createLucideIcon-BAyoo0xW.js";import{A as m}from"./Avatar-BOqqzDjP.js";import{S as h}from"./star-Ch4n3Cis.js";import{P as v}from"./phone-Cwm9u6Nt.js";import{S as x}from"./Separator-DEZQlHGi.js";import{W as s}from"./wrench-DZ28xkLV.js";import{M as u}from"./map-pin-B4QenqTm.js";import{B as g}from"./Button-Dc9lrGyJ.js";import{X as f}from"./x-DyMcZ9ge.js";import"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],b=p("navigation",j),y={searching:{label:"Searching",badgeColor:"orange",description:"Looking for a technician near you..."},assigned:{label:"Assigned",badgeColor:"blue",description:"A technician has been assigned to your request."},"en-route":{label:"En route",badgeColor:"purple",description:"Your technician is on the way."},arrived:{label:"Arrived",badgeColor:"green",description:"Your technician has arrived at the location."}};function W(){const[n]=o.useState("en-route"),r=y[n];return e.jsxs("div",{className:"p085-root",children:[e.jsx("style",{children:`
        .p085-root {
          min-height: 100vh;
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
        }

        .p085-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p085-container {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p085-container {
            padding-inline: var(--space-10);
          }
        }

        .p085-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-block: var(--space-4);
        }

        .p085-back-btn {
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
          .p085-back-btn:hover {
            background: var(--color-surface-secondary);
          }
        }

        .p085-back-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
          border-radius: var(--radius-sm);
        }

        .p085-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding-bottom: var(--space-4);
        }

        .p085-status-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .p085-status-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .p085-eta-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .p085-map-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-inset-lg);
          background: var(--color-surface-secondary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          color: var(--color-text-secondary);
        }

        .p085-tech-row {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .p085-tech-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          min-width: 0;
        }

        .p085-tech-name-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .p085-rating {
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .p085-call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-44);
          height: var(--scale-44);
          border: none;
          background: var(--color-surface-secondary);
          cursor: pointer;
          border-radius: var(--radius-full);
          color: var(--color-primary);
          flex-shrink: 0;
          touch-action: manipulation;
        }

        @media (hover: hover) and (pointer: fine) {
          .p085-call-btn:hover {
            background: var(--color-primary);
            color: var(--color-card-bg);
          }
        }

        .p085-call-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
          border-radius: var(--radius-full);
        }

        .p085-vehicle-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-top: var(--space-3);
        }

        .p085-vehicle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-36);
          height: var(--scale-36);
          border-radius: var(--radius-inset-lg);
          background: var(--color-surface-secondary);
          color: var(--color-text-secondary);
          flex-shrink: 0;
        }

        .p085-request-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .p085-detail-row {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .p085-detail-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-20);
          height: var(--scale-20);
          color: var(--color-text-secondary);
          flex-shrink: 0;
          margin-top: var(--scale-2);
        }

        .p085-footer {
          position: sticky;
          bottom: 0;
          background: var(--color-surface);
          border-top: var(--border-hairline) solid var(--color-border);
          padding-block: var(--space-4);
          padding-bottom: calc(var(--space-4) + env(safe-area-inset-bottom));
        }

        .p085-footer-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p085-footer-inner {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p085-footer-inner {
            padding-inline: var(--space-10);
          }
        }
      `}),e.jsx("div",{className:"p085-container",children:e.jsxs("div",{className:"p085-header",children:[e.jsx("button",{className:"p085-back-btn","aria-label":"Go back",type:"button",children:e.jsx(t,{size:20,"aria-hidden":"true"})}),e.jsx(a,{variant:"heading-lg",weight:"semibold",as:"h1",children:"Roadside assistance"})]})}),e.jsx("div",{className:"p085-container",children:e.jsxs("div",{className:"p085-content",children:[e.jsx(i,{padding:"md",children:e.jsxs("div",{className:"p085-status-section",children:[e.jsx("div",{className:"p085-status-row",children:e.jsx(c,{variant:"solid",color:r.badgeColor,size:"sm",children:r.label})}),e.jsx(a,{variant:"heading-md",weight:"semibold",children:"Help is on the way"}),e.jsx(a,{variant:"body-sm",color:"muted",children:r.description}),e.jsxs("div",{className:"p085-eta-row",children:[e.jsx(d,{size:16,color:"var(--color-text-secondary)","aria-hidden":"true"}),e.jsx(a,{variant:"body-md",weight:"medium",children:"ETA: 12 minutes"})]})]})}),e.jsx(i,{padding:"md",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx(a,{variant:"heading-sm",weight:"semibold",as:"h2",children:"Live location"}),e.jsx(l,{children:e.jsxs("div",{className:"p085-map-placeholder",role:"img","aria-label":"Map showing technician location",children:[e.jsx(b,{size:24,"aria-hidden":"true"}),e.jsx(a,{variant:"body-sm",color:"muted",children:"Live map view"})]})})]})}),e.jsx(i,{padding:"md",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(a,{variant:"heading-sm",weight:"semibold",as:"h2",children:"Technician details"}),e.jsxs("div",{className:"p085-tech-row",children:[e.jsx(m,{initials:"RK",size:"lg",alt:"Rajesh Kumar"}),e.jsxs("div",{className:"p085-tech-info",children:[e.jsxs("div",{className:"p085-tech-name-row",children:[e.jsx(a,{variant:"body-md",weight:"medium",children:"Rajesh Kumar"}),e.jsxs("div",{className:"p085-rating",children:[e.jsx(h,{size:14,color:"var(--color-warning)",fill:"var(--color-warning)","aria-hidden":"true"}),e.jsx(a,{variant:"caption",color:"muted",children:"4.8"})]})]}),e.jsx(a,{variant:"body-sm",color:"muted",children:"5 years experience · 320 assists"})]}),e.jsx("button",{className:"p085-call-btn",type:"button","aria-label":"Call Rajesh Kumar",children:e.jsx(v,{size:20,"aria-hidden":"true"})})]}),e.jsx(x,{}),e.jsxs("div",{className:"p085-vehicle-row",children:[e.jsx("div",{className:"p085-vehicle-icon",children:e.jsx(s,{size:18,"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx(a,{variant:"body-sm",weight:"medium",children:"Service vehicle"}),e.jsx(a,{variant:"caption",color:"muted",children:"White Mahindra Bolero · KA-05-MN-9876"})]})]})]})}),e.jsx(i,{padding:"md",variant:"demoted",children:e.jsxs("div",{className:"p085-request-details",children:[e.jsx(a,{variant:"heading-sm",weight:"semibold",as:"h2",children:"Request details"}),e.jsxs("div",{className:"p085-detail-row",children:[e.jsx("div",{className:"p085-detail-icon",children:e.jsx(s,{size:16,"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx(a,{variant:"body-sm",weight:"medium",children:"Flat tyre"}),e.jsx(a,{variant:"caption",color:"muted",children:"Rear left tyre — requested at 2:45 PM"})]})]}),e.jsxs("div",{className:"p085-detail-row",children:[e.jsx("div",{className:"p085-detail-icon",children:e.jsx(u,{size:16,"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx(a,{variant:"body-sm",weight:"medium",children:"Pickup location"}),e.jsx(a,{variant:"caption",color:"muted",children:"Near Silk Board Junction, Bengaluru"})]})]})]})})]})}),e.jsx("div",{className:"p085-footer",children:e.jsx("div",{className:"p085-footer-inner",children:e.jsx(g,{variant:"danger",size:"lg",fullWidth:!0,iconLeft:e.jsx(f,{size:18}),children:"Cancel request"})})})]})}export{W as default};
