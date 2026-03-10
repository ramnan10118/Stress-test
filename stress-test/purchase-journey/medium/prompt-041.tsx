import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@acko/table";
import { Separator } from "@acko/separator";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const CrossIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-disabled)" }}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, badge: null },
  { id: "comp", name: "Comprehensive", price: 4599, badge: "Recommended" },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null },
];

const COMPARISON = [
  { feature: "Third-party damage", tp: true, comp: true, comp_plus: true },
  { feature: "Personal accident ₹15L", tp: true, comp: true, comp_plus: true },
  { feature: "Own vehicle damage", tp: false, comp: true, comp_plus: true },
  { feature: "Fire & theft", tp: false, comp: true, comp_plus: true },
  { feature: "Natural disasters", tp: false, comp: true, comp_plus: true },
  { feature: "Zero depreciation", tp: false, comp: false, comp_plus: true },
  { feature: "Engine protection", tp: false, comp: false, comp_plus: true },
  { feature: "Roadside assistance", tp: false, comp: false, comp_plus: true },
];

export default function Prompt041() {
  const [selected, setSelected] = useState("comp");
  const selectedPlan = PLANS.find((p) => p.id === selected)!;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Choose a plan</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "60%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", maxWidth: 600, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* Plan selector cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-2)" }}>
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              variant={selected === plan.id ? "elevated" : "default"}
              padding="sm"
              role="radio"
              aria-checked={selected === plan.id}
              tabIndex={0}
              onClick={() => setSelected(plan.id)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(plan.id)}
              style={{ cursor: "pointer", outline: selected === plan.id ? `2px solid var(--color-primary)` : "none", outlineOffset: 2, touchAction: "manipulation" }}
            >
              <CardContent>
                <div style={{ textAlign: "center" }}>
                  {plan.badge && <div style={{ marginBottom: "var(--space-1)" }}><Badge color="blue" size="sm">{plan.badge}</Badge></div>}
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
                  <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums", display: "block" }}>₹{plan.price.toLocaleString("en-IN")}</Typography>
                  <Typography variant="caption" color="muted">/year</Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature comparison table */}
        <Card variant="outline" padding="none" style={{ overflow: "hidden" }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead style={{ textAlign: "center" }}>TP</TableHead>
                <TableHead style={{ textAlign: "center" }}>Comp</TableHead>
                <TableHead style={{ textAlign: "center" }}>Comp+</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARISON.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell><Typography variant="body-sm" color="default">{row.feature}</Typography></TableCell>
                  <TableCell style={{ textAlign: "center" }}>{row.tp ? <CheckIcon /> : <CrossIcon />}</TableCell>
                  <TableCell style={{ textAlign: "center" }}>{row.comp ? <CheckIcon /> : <CrossIcon />}</TableCell>
                  <TableCell style={{ textAlign: "center" }}>{row.comp_plus ? <CheckIcon /> : <CrossIcon />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
            <Typography variant="body-sm" color="muted">{selectedPlan.name}</Typography>
            <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{selectedPlan.price.toLocaleString("en-IN")}/yr</Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Select {selectedPlan.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
