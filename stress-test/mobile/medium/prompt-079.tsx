import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";

const DOCS = [
  { id: "d1", icon: "📄", name: "Policy document", policy: "Car Insurance", date: "3 Mar 2026", size: "1.2 MB", tag: "Current" },
  { id: "d2", icon: "🧾", name: "Tax certificate", policy: "Car Insurance", date: "3 Mar 2026", size: "210 KB", tag: "FY 2025-26" },
  { id: "d3", icon: "✅", name: "Claim settlement", policy: "Car Insurance", date: "28 Feb 2026", size: "450 KB", tag: "CL-2026-001" },
  { id: "d4", icon: "📄", name: "Policy document", policy: "Health Insurance", date: "15 Jun 2025", size: "980 KB", tag: "Current" },
  { id: "d5", icon: "🧾", name: "Tax certificate", policy: "Health Insurance", date: "15 Jun 2025", size: "190 KB", tag: "FY 2025-26" },
  { id: "d6", icon: "📄", name: "Policy document", policy: "Car Insurance (prev)", date: "3 Mar 2025", size: "1.1 MB", tag: "Expired" },
];

const FILTERS = ["All", "Car Insurance", "Health Insurance"];

export default function Prompt079() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? DOCS : DOCS.filter((d) => d.policy.startsWith(filter));

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) 0", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="heading-sm" weight="bold" color="strong">Documents</Typography>
      </div>

      {/* Filter chips */}
      <div style={{ background: "var(--grey-white)", padding: "var(--space-3) var(--space-4)", display: "flex", gap: "var(--space-2)", overflowX: "auto", borderBottom: "1px solid var(--color-border-subtle)" }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{ padding: "var(--space-1) var(--space-3)", borderRadius: "var(--radius-full)", border: "1px solid", borderColor: filter === f ? "var(--color-primary)" : "var(--color-border-default)", background: filter === f ? "var(--color-primary)" : "var(--grey-white)", color: filter === f ? "var(--color-on-primary)" : "var(--color-text-default)", cursor: "pointer", whiteSpace: "nowrap", touchAction: "manipulation" }}
          >
            <Typography variant="body-sm" style={{ color: "inherit" }}>{f}</Typography>
          </button>
        ))}
      </div>

      <div style={{ padding: "var(--space-3) var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)", paddingBottom: 80 }}>
        {filtered.map((doc) => (
          <Card key={doc.id} variant="default" padding="md">
            <CardContent>
              <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", background: "var(--color-primary-subtle)", borderRadius: "var(--radius-xl)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{doc.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-1)" }}>
                    <Typography variant="label-md" weight="semibold" color="strong">{doc.name}</Typography>
                    <Badge color={doc.tag === "Expired" ? "orange" : "blue"} size="sm">{doc.tag}</Badge>
                  </div>
                  <Typography variant="caption" color="muted" style={{ display: "block" }}>{doc.policy}</Typography>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "var(--space-2)" }}>
                    <Typography variant="caption" color="muted">{doc.date} · {doc.size}</Typography>
                    <div style={{ display: "flex", gap: "var(--space-2)" }}>
                      <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-1)", touchAction: "manipulation" }} aria-label={`Download ${doc.name}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-primary)" }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                      </button>
                      <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-1)", touchAction: "manipulation" }} aria-label={`Share ${doc.name}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-text-muted)" }}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
