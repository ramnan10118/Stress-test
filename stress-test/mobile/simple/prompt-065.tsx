import { useState } from "react";
import { Typography } from "@acko/typography";

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "var(--color-primary)" : "none"} stroke={active ? "var(--color-primary)" : "var(--color-text-muted)"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "policies",
    label: "Policies",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "var(--color-primary)" : "none"} stroke={active ? "var(--color-primary)" : "var(--color-text-muted)"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "claims",
    label: "Claims",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "var(--color-primary)" : "var(--color-text-muted)"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: "more",
    label: "More",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "var(--color-primary)" : "var(--color-text-muted)"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    ),
  },
];

export default function Prompt065() {
  const [active, setActive] = useState("home");

  return (
    <div style={{ maxWidth: 390, margin: "0 auto" }}>
      {/* Preview area */}
      <div style={{ background: "var(--color-surface)", height: 200, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <Typography variant="body-md" color="muted">Page content area</Typography>
      </div>

      {/* Bottom nav */}
      <nav style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", display: "flex", paddingBottom: "env(safe-area-inset-bottom, 0px)" }} role="navigation" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            aria-current={active === item.id ? "page" : undefined}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, padding: "var(--space-2) 0", background: "none", border: "none", cursor: "pointer", touchAction: "manipulation", minHeight: "var(--scale-56)" }}
          >
            {item.icon(active === item.id)}
            <Typography variant="caption" color={active === item.id ? "primary" : "muted"} weight={active === item.id ? "semibold" : "regular"}>
              {item.label}
            </Typography>
          </button>
        ))}
      </nav>

      {/* Annotation */}
      <div style={{ padding: "var(--space-5) var(--space-4)", background: "var(--color-surface)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Bottom navigation specs</Typography>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          {["Min touch target: 44×44 px", "Label always visible", "Active item: var(--color-primary)", "Inactive: var(--color-text-muted)", "Safe-area padding for iOS"].map((s) => (
            <li key={s} style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0, marginTop: 2 }}><path d="M20 6 9 17l-5-5" /></svg>
              <Typography variant="body-sm" color="default">{s}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
