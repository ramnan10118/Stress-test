import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@acko/table";

// Iteration 3: Add feature comparison table below plan cards

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, badge: null },
  { id: "comp", name: "Comprehensive", price: 4599, badge: "Recommended" },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}><path d="M20 6 9 17l-5-5" /></svg>
);
const CrossIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-disabled)" }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

const ROWS = [
  { label: "Third-party cover", tp: true, comp: true, plus: true },
  { label: "Own car damage", tp: false, comp: true, plus: true },
  { label: "Theft cover", tp: false, comp: true, plus: true },
  { label: "Fire & flood", tp: false, comp: true, plus: true },
  { label: "Zero depreciation", tp: false, comp: false, plus: true },
  { label: "Engine protection", tp: false, comp: false, plus: true },
  { label: "Roadside assistance", tp: false, comp: false, plus: true },
];

export default function Prompt093() {
  const [selected, setSelected] = useState("comp");

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", padding: "var(--space-6) var(--space-4) 100px" }}>
      <Typography variant="heading-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-6)" }}>
        Choose a plan
      </Typography>

      {/* Plan cards as tabs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
        {PLANS.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelected(plan.id)}
            aria-pressed={selected === plan.id}
            style={{
              padding: "var(--space-3)",
              borderRadius: "var(--radius-xl)",
              border: `2px solid ${selected === plan.id ? "var(--color-primary)" : "var(--color-border-default)"}`,
              background: selected === plan.id ? "var(--color-primary)" : "var(--grey-white)",
              cursor: "pointer",
              textAlign: "center",
              touchAction: "manipulation",
            }}
          >
            {plan.badge && (
              <div style={{ marginBottom: "var(--space-1)" }}>
                <Badge color={selected === plan.id ? "white" : "blue"} size="sm">{plan.badge}</Badge>
              </div>
            )}
            <Typography variant="label-md" weight="semibold" color={selected === plan.id ? undefined : "strong"} style={{ color: selected === plan.id ? "var(--color-on-primary)" : undefined, display: "block" }}>
              {plan.name}
            </Typography>
            <Typography variant="heading-sm" weight="bold" color={selected === plan.id ? undefined : "primary"} style={{ color: selected === plan.id ? "var(--purple-200)" : undefined, fontVariantNumeric: "tabular-nums", display: "block" }}>
              ₹{plan.price.toLocaleString("en-IN")}
            </Typography>
            <Typography variant="caption" color={selected === plan.id ? undefined : "muted"} style={{ color: selected === plan.id ? "var(--purple-200)" : undefined }}>/year</Typography>
          </button>
        ))}
      </div>

      {/* Comparison table */}
      <Card variant="outline" padding="none" style={{ overflow: "hidden" }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead><Typography variant="label-md" weight="semibold" color="strong">What's covered</Typography></TableHead>
              <TableHead style={{ textAlign: "center" }}><Typography variant="label-md" weight="semibold" color="strong" align="center">Third Party</Typography></TableHead>
              <TableHead style={{ textAlign: "center", background: selected === "comp" ? "var(--color-primary-subtle)" : "transparent" }}><Typography variant="label-md" weight="semibold" color="strong" align="center">Comprehensive</Typography></TableHead>
              <TableHead style={{ textAlign: "center", background: selected === "comp_plus" ? "var(--color-primary-subtle)" : "transparent" }}><Typography variant="label-md" weight="semibold" color="strong" align="center">Comp+</Typography></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.label}>
                <TableCell>
                  <Typography variant="body-sm" color="default">{row.label}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.tp ? <CheckIcon /> : <CrossIcon />}</TableCell>
                <TableCell style={{ textAlign: "center", background: selected === "comp" ? "var(--color-primary-subtle)" : "transparent" }}>{row.comp ? <CheckIcon /> : <CrossIcon />}</TableCell>
                <TableCell style={{ textAlign: "center", background: selected === "comp_plus" ? "var(--color-primary-subtle)" : "transparent" }}>{row.plus ? <CheckIcon /> : <CrossIcon />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Continue with {PLANS.find((p) => p.id === selected)?.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
