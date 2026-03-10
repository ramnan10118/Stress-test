import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";

// Iteration 4: Add sticky bottom bar with real-time price + IDV selector

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, badge: null },
  { id: "comp", name: "Comprehensive", price: 4599, badge: "Recommended" },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null },
];

const IDV_OPTIONS = [
  { label: "Market value (₹5,82,000)", value: 582000 },
  { label: "Lower IDV (₹5,40,000)", value: 540000 },
  { label: "Higher IDV (₹6,10,000)", value: 610000 },
];

export default function Prompt094() {
  const [selected, setSelected] = useState("comp");
  const [idvIndex, setIdvIndex] = useState(0);
  const [idvOpen, setIdvOpen] = useState(false);

  const plan = PLANS.find((p) => p.id === selected)!;
  const idv = IDV_OPTIONS[idvIndex];

  const idvAdjustment = idvIndex === 0 ? 0 : idvIndex === 1 ? -200 : 300;
  const adjustedPrice = plan.price + idvAdjustment;

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", padding: "var(--space-6) var(--space-4) 120px" }}>
      <Typography variant="heading-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
        Choose a plan
      </Typography>
      <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-5)" }}>
        Maruti Swift ZXI+ · MH 01 AB 1234
      </Typography>

      {/* IDV selector */}
      <Card variant="default" padding="md" style={{ marginBottom: "var(--space-5)" }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>
                Insured Declared Value (IDV)
              </Typography>
              <Typography variant="caption" color="muted">Max payout in total loss or theft</Typography>
            </div>
            <button
              onClick={() => setIdvOpen((v) => !v)}
              style={{ background: "var(--color-primary-subtle)", border: "none", borderRadius: "var(--radius-lg)", padding: "var(--space-2) var(--space-3)", cursor: "pointer", display: "flex", alignItems: "center", gap: "var(--space-1)", touchAction: "manipulation" }}
            >
              <Typography variant="label-sm" weight="semibold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>
                ₹{(idv.value / 100000).toFixed(1)}L
              </Typography>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "var(--color-primary)", transform: idvOpen ? "rotate(180deg)" : "none" }} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          </div>
          {idvOpen && (
            <div style={{ marginTop: "var(--space-3)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <Separator />
              {IDV_OPTIONS.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => { setIdvIndex(i); setIdvOpen(false); }}
                  style={{ padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-lg)", border: "1px solid", borderColor: idvIndex === i ? "var(--color-primary)" : "var(--color-border-default)", background: idvIndex === i ? "var(--color-primary-subtle)" : "var(--grey-white)", cursor: "pointer", textAlign: "left", touchAction: "manipulation" }}
                >
                  <Typography variant="body-sm" color={idvIndex === i ? "primary" : "default"}>{opt.label}</Typography>
                </button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Plan cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {PLANS.map((p) => {
          const isSelected = selected === p.id;
          const adj = p.price + idvAdjustment;
          return (
            <Card
              key={p.id}
              variant={isSelected ? "elevated" : "default"}
              padding="md"
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => setSelected(p.id)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(p.id)}
              style={{ cursor: "pointer", outline: isSelected ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, touchAction: "manipulation" }}
            >
              <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "var(--radius-full)", border: `2px solid ${isSelected ? "var(--color-primary)" : "var(--color-border-default)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {isSelected && <div style={{ width: 11, height: 11, borderRadius: "var(--radius-full)", background: "var(--color-primary)" }} />}
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                        <Typography variant="label-lg" weight="semibold" color="strong">{p.name}</Typography>
                        {p.badge && <Badge color="blue" size="sm">{p.badge}</Badge>}
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Typography variant="heading-sm" weight="bold" color={isSelected ? "primary" : "strong"} style={{ fontVariantNumeric: "tabular-nums" }}>
                      ₹{adj.toLocaleString("en-IN")}
                    </Typography>
                    <Typography variant="caption" color="muted">/year</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Sticky bar */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
            <div>
              <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
              <Typography variant="caption" color="muted">IDV {idv.label.split("(")[1]?.replace(")", "") ?? ""}</Typography>
            </div>
            <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>
              ₹{adjustedPrice.toLocaleString("en-IN")}/yr
            </Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Continue</Button>
        </div>
      </div>
    </div>
  );
}
