import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Tabs } from "@acko/tabs";
import { Progress } from "@acko/progress";

const ACTIVE_CLAIMS = [
  {
    id: "cl001", policy: "Car Insurance", type: "Accidental damage", number: "CL-2026-001",
    date: "28 Feb 2026", status: "in_progress", step: 3, total: 5,
    stepLabel: "Repair in progress", amount: 28450,
  },
];

const PAST_CLAIMS = [
  { id: "cl000", policy: "Car Insurance", type: "Windshield crack", number: "CL-2025-088", date: "12 Nov 2025", status: "settled", amount: 8200 },
  { id: "cl999", policy: "Health Insurance", type: "Hospitalisation", number: "CL-2025-045", date: "3 Sep 2025", status: "settled", amount: 52000 },
  { id: "cl990", policy: "Car Insurance", type: "Theft of belongings", number: "CL-2024-103", date: "17 Dec 2024", status: "rejected", amount: 0 },
];

export default function Prompt074() {
  const [tab, setTab] = useState("active");

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) 0", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="heading-sm" weight="bold" color="strong">Claims</Typography>
      </div>

      <div style={{ background: "var(--grey-white)", padding: "var(--space-3) var(--space-4) 0", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <Tabs value={tab} onChange={setTab} items={[{ value: "active", label: "Active" }, { value: "history", label: "History" }]} />
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingBottom: 100 }}>
        {tab === "active" && (
          ACTIVE_CLAIMS.length > 0 ? ACTIVE_CLAIMS.map((c) => (
            <Card key={c.id} variant="elevated" padding="md">
              <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-3)" }}>
                  <div>
                    <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{c.policy}</Typography>
                    <Typography variant="caption" color="muted">{c.type} · {c.date}</Typography>
                  </div>
                  <Badge color="orange" size="sm">In progress</Badge>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
                  <Typography variant="caption" color="muted">Step {c.step} of {c.total}: {c.stepLabel}</Typography>
                  <Typography variant="caption" weight="semibold" color="default">{Math.round((c.step / c.total) * 100)}%</Typography>
                </div>
                <Progress value={Math.round((c.step / c.total) * 100)} />
                <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-3)" }}>
                  <Button type="button" variant="outline" size="sm" style={{ flex: 1, touchAction: "manipulation" }}>Track</Button>
                  <Button type="button" variant="ghost" size="sm" style={{ flex: 1, touchAction: "manipulation" }}>Call garage</Button>
                </div>
              </CardContent>
            </Card>
          )) : (
            <div style={{ textAlign: "center", padding: "var(--space-12) 0" }}>
            <div style={{ marginBottom: "var(--space-3)" }}>📋</div>
            <Typography variant="body-md" color="muted">No active claims</Typography>
            </div>
          )
        )}

        {tab === "history" && PAST_CLAIMS.map((c) => (
          <Card key={c.id} variant="default" padding="md" role="button" tabIndex={0} style={{ cursor: "pointer", touchAction: "manipulation" }}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{c.policy}</Typography>
                  <Typography variant="caption" color="muted" style={{ display: "block" }}>{c.type}</Typography>
                  <Typography variant="caption" color="muted">{c.number} · {c.date}</Typography>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Badge color={c.status === "settled" ? "green" : "orange"} size="sm">{c.status === "settled" ? "Settled" : "Rejected"}</Badge>
                  {c.status === "settled" && (
                    <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginTop: "var(--space-1)", fontVariantNumeric: "tabular-nums" }}>₹{c.amount.toLocaleString("en-IN")}</Typography>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, padding: "var(--space-4)", background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>File a new claim</Button>
      </div>
    </div>
  );
}
