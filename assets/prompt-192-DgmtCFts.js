import{r as t,j as a}from"./index-D4IFi2An.js";import{A as s}from"./arrow-left-gooZl0rZ.js";import{T as i}from"./Typography-jWlp8Cjp.js";import{C as d}from"./Card-dxnfeZQ8.js";import{A as l}from"./Avatar-BOqqzDjP.js";import{B as c}from"./Badge-C33QlmWP.js";import{c as p}from"./createLucideIcon-BAyoo0xW.js";import{S as m}from"./Separator-DEZQlHGi.js";import{B as n}from"./Button-Dc9lrGyJ.js";import{P as h}from"./plus-o40pooNT.js";import"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],u=p("pencil",v),x=[{id:"self",name:"Rahul Sharma",age:34,relation:"Self",initials:"RS",badgeColor:"purple"},{id:"spouse",name:"Priya Sharma",age:31,relation:"Spouse",initials:"PS",badgeColor:"blue"},{id:"child-1",name:"Aarav Sharma",age:8,relation:"Child",initials:"AS",badgeColor:"green"},{id:"child-2",name:"Ananya Sharma",age:5,relation:"Child",initials:"AS",badgeColor:"orange"}];function z(){const[r]=t.useState(x);return a.jsxs("div",{className:"p192-root",children:[a.jsx("style",{children:`
        .p192-root {
          min-height: 100vh;
          background: var(--color-surface);
        }

        .p192-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p192-container {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p192-container {
            padding-inline: var(--space-10);
          }
        }

        .p192-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-block: var(--space-4);
        }

        .p192-back-btn {
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
        }

        @media (hover: hover) and (pointer: fine) {
          .p192-back-btn:hover {
            background: var(--color-surface-secondary);
          }
        }

        .p192-back-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
        }

        .p192-intro {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          padding-bottom: var(--space-8);
        }

        .p192-member-row {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding-block: var(--space-4);
        }

        .p192-member-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .p192-name-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .p192-edit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-44);
          height: var(--scale-44);
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: var(--radius-lg);
          color: var(--color-text-secondary);
          flex-shrink: 0;
          touch-action: manipulation;
        }

        @media (hover: hover) and (pointer: fine) {
          .p192-edit-btn:hover {
            background: var(--color-surface-secondary);
            color: var(--color-primary);
          }
        }

        .p192-edit-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
        }

        .p192-add-section {
          padding-top: var(--space-6);
          padding-bottom: var(--space-8);
        }

        .p192-footer {
          position: sticky;
          bottom: 0;
          background: var(--color-surface);
          padding-block: var(--space-4);
          padding-bottom: calc(var(--space-4) + env(safe-area-inset-bottom));
          border-top: var(--border-hairline) solid var(--color-border);
        }

        .p192-footer-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        @media (min-width: 768px) {
          .p192-footer-inner {
            padding-inline: var(--space-8);
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        @media (min-width: 1024px) {
          .p192-footer-inner {
            padding-inline: var(--space-10);
          }
        }

        .p192-footer-summary {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
        }

        @media (min-width: 768px) {
          .p192-footer .p192-continue-btn {
            width: auto;
            min-width: 200px;
          }
        }
      `}),a.jsx("div",{className:"p192-container",children:a.jsxs("div",{className:"p192-header",children:[a.jsx("button",{className:"p192-back-btn","aria-label":"Go back",type:"button",children:a.jsx(s,{size:20,"aria-hidden":"true"})}),a.jsx(i,{variant:"heading-lg",weight:"semibold",as:"h1",children:"Add family members"})]})}),a.jsx("div",{className:"p192-container",children:a.jsx("div",{className:"p192-intro",children:a.jsx(i,{variant:"body-md",color:"muted",children:"Add the family members you'd like to cover under this health insurance plan. You can edit details anytime before payment."})})}),a.jsx("div",{className:"p192-container",children:a.jsx(d,{padding:"md",children:r.map((e,o)=>a.jsxs("div",{children:[a.jsxs("div",{className:"p192-member-row",children:[a.jsx(l,{initials:e.initials,size:"md",alt:e.name}),a.jsxs("div",{className:"p192-member-info",children:[a.jsxs("div",{className:"p192-name-row",children:[a.jsx(i,{variant:"heading-sm",weight:"semibold",truncate:!0,children:e.name}),a.jsx(c,{variant:"outline",color:e.badgeColor,size:"sm",children:e.relation})]}),a.jsxs(i,{variant:"body-sm",color:"muted",children:[e.age," years old"]})]}),a.jsx("button",{className:"p192-edit-btn",type:"button","aria-label":`Edit ${e.name}`,children:a.jsx(u,{size:18,"aria-hidden":"true"})})]}),o<r.length-1&&a.jsx(m,{})]},e.id))})}),a.jsx("div",{className:"p192-container",children:a.jsx("div",{className:"p192-add-section",children:a.jsx(n,{variant:"outline",size:"md",iconLeft:a.jsx(h,{size:18}),fullWidth:!0,children:"Add another member"})})}),a.jsx("div",{className:"p192-footer",children:a.jsxs("div",{className:"p192-footer-inner",children:[a.jsxs("div",{className:"p192-footer-summary",children:[a.jsx(i,{variant:"body-sm",color:"muted",children:"Covering"}),a.jsxs(i,{variant:"heading-md",weight:"semibold",children:[r.length," members"]})]}),a.jsx(n,{variant:"primary",size:"lg",fullWidth:!0,className:"p192-continue-btn",children:"Continue"})]})})]})}export{z as default};
