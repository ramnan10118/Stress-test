import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Tooltip } from "@acko/tooltip";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@acko/table";

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
const InfoIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-text-muted)", cursor: "help" }}>
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
  </svg>
);

const PLANS = [
  { id: "tp", name: "Third Party", annualPrice: 2094, badge: null, color: "var(--grey-400)" },
  { id: "comp", name: "Comprehensive", annualPrice: 4599, badge: "Recommended", color: "var(--color-primary)" },
  { id: "comp_plus", name: "Comprehensive+", annualPrice: 6999, badge: null, color: "var(--orange-500)" },
];

const FEATURES = [
  { label: "Third-party damage", tooltip: "Covers damage to another person's vehicle or property caused by your car.", tp: true, comp: true, comp_plus: true },
  { label: "Injury to third party", tooltip: "Medical expenses and compensation for injury or death of a third party.", tp: true, comp: true, comp_plus: true },
  { label: "Personal accident ₹15L", tooltip: "Owner-driver coverage for permanent disability or death from an accident.", tp: true, comp: true, comp_plus: true },
  { label: "Own vehicle damage", tooltip: "Covers your own car in case of accident, collision, or rollover.", tp: false, comp: true, comp_plus: true },
  { label: "Fire & explosion", tooltip: "Covers damage from fire or explosion to your vehicle.", tp: false, comp: true, comp_plus: true },
  { label: "Theft cover", tooltip: "Full IDV payout if your car is stolen and not recovered.", tp: false, comp: true, comp_plus: true },
  { label: "Natural calamities", tooltip: "Floods, earthquakes, cyclones, hailstorms — all covered.", tp: false, comp: true, comp_plus: true },
  { label: "Zero depreciation", tooltip: "Full claim without any deduction for depreciation on parts replaced.", tp: false, comp: false, comp_plus: true },
  { label: "Engine protection", tooltip: "Covers engine and gearbox damage from waterlogging or oil leaks.", tp: false, comp: false, comp_plus: true },
  { label: "Roadside assistance", tooltip: "Tow truck, battery, fuel, tyre, key — 24×7 anywhere in India.", tp: false, comp: false, comp_plus: true },
  { label: "Consumables cover", tooltip: "Nuts, bolts, engine oil, and other consumables covered in claims.", tp: false, comp: false, comp_plus: true },
];

export default function Prompt051() {
  const [selected, setSelected] = useState("comp");
  const plan = PLANS.find((p) => p.id === selected)!;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div style={{ textAlign: "center" }}>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Select a plan</Typography>
            <Typography variant="caption" color="muted">Maruti Swift ZXI+ · MH 01 AB 1234</Typography>
          </div>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "60%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4) 100px", maxWidth: 800, margin: "0 auto", width: "100%" }}>
        {/* Plan selector tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
          {PLANS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              aria-pressed={selected === p.id}
              style={{
                background: selected === p.id ? "var(--color-primary)" : "var(--grey-white)",
                border: `2px solid ${selected === p.id ? "var(--color-primary)" : "var(--color-border-default)"}`,
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-3)",
                cursor: "pointer",
                textAlign: "center",
                transition: "all var(--duration-fast) ease",
                touchAction: "manipulation",
              }}
            >
              {p.badge && (
                <div style={{ marginBottom: "var(--space-1)" }}>
                  <Badge color={selected === p.id ? "white" : "blue"} size="sm">{p.badge}</Badge>
                </div>
              )}
              <Typography variant="label-md" weight="semibold" color={selected === p.id ? "default" : "strong"} style={{ display: "block" }}>{p.name}</Typography>
              <Typography variant="heading-sm" weight="bold" color={selected === p.id ? "default" : "primary"} style={{ fontVariantNumeric: "tabular-nums", display: "block" }}>
                ₹{p.annualPrice.toLocaleString("en-IN")}
              </Typography>
              <Typography variant="caption" color={selected === p.id ? "default" : "muted"}>/year</Typography>
            </button>
          ))}
        </div>

        {/* Feature comparison table */}
        <Card variant="outline" padding="none" style={{ overflow: "hidden", marginBottom: "var(--space-4)" }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Coverage feature</TableHead>
                <TableHead style={{ textAlign: "center" }}>Third Party</TableHead>
                <TableHead style={{ textAlign: "center" }}>Comprehensive</TableHead>
                <TableHead style={{ textAlign: "center" }}>Comprehensive+</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {FEATURES.map((row) => (
                <TableRow key={row.label}>
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                      <Typography variant="body-sm" color="default">{row.label}</Typography>
                      <Tooltip content={row.tooltip} side="top">
                        <span><InfoIcon /></span>
                      </Tooltip>
                    </div>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>{row.tp ? <CheckIcon /> : <CrossIcon />}</TableCell>
                  <TableCell style={{ textAlign: "center", background: selected === "comp" ? "var(--color-primary-subtle)" : "transparent" }}>{row.comp ? <CheckIcon /> : <CrossIcon />}</TableCell>
                  <TableCell style={{ textAlign: "center", background: selected === "comp_plus" ? "var(--color-primary-subtle)" : "transparent" }}>{row.comp_plus ? <CheckIcon /> : <CrossIcon />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* IDV notice */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <Typography variant="label-md" weight="semibold" color="default" style={{ display: "block" }}>Insured Declared Value (IDV)</Typography>
                <Typography variant="body-sm" color="muted">Maximum payout in total loss / theft</Typography>
              </div>
              <Typography variant="heading-sm" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>₹5,82,000</Typography>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Sticky bottom */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
            <div>
              <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
              <Typography variant="caption" color="muted">1-year policy</Typography>
            </div>
            <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.annualPrice.toLocaleString("en-IN")}/yr</Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Select {plan.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
