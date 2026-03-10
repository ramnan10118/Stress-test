import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";

// Iteration 8: Full responsive plan selection (mobile + desktop layouts)

const PLANS = [
  {
    id: "tp", name: "Third Party", price: 2094, badge: null,
    features: ["Third-party damage", "Injury to third party", "Personal accident ₹15L"],
  },
  {
    id: "comp", name: "Comprehensive", price: 4599, badge: "Recommended",
    features: ["All Third Party benefits", "Own vehicle damage", "Fire, theft & flood", "Natural calamities"],
  },
  {
    id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null,
    features: ["All Comprehensive benefits", "Zero depreciation", "Engine protection", "Roadside assistance", "Consumables cover"],
  },
];

export default function Prompt098() {
  const [selected, setSelected] = useState("comp");
  const plan = PLANS.find((p) => p.id === selected)!;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <Typography variant="label-lg" weight="semibold" color="strong">Choose a plan</Typography>
          </div>
          <Typography variant="caption" color="muted">Maruti Swift ZXI+ · MH 01 AB 1234</Typography>
        </div>
      </header>

      {/* Main — responsive two-column on desktop */}
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "var(--space-6) var(--space-4) 100px" }}>
        <div className="plan-layout" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          {/* Plan cards */}
          <div className="plan-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-3)" }}>
            {PLANS.map((p) => {
              const isSelected = selected === p.id;
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-3)" }}>
                      <div style={{ display: "flex", gap: "var(--space-3)" }}>
                        <div style={{ width: 20, height: 20, borderRadius: "var(--radius-full)", border: `2px solid ${isSelected ? "var(--color-primary)" : "var(--color-border-default)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          {isSelected && <div style={{ width: 11, height: 11, borderRadius: "var(--radius-full)", background: "var(--color-primary)" }} />}
                        </div>
                        <div>
                          <div style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-2)", flexWrap: "wrap" }}>
                            <Typography variant="label-lg" weight="semibold" color="strong">{p.name}</Typography>
                            {p.badge && <Badge color="blue" size="sm">{p.badge}</Badge>}
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                            {p.features.map((f) => (
                              <div key={f} style={{ display: "flex", gap: "var(--space-1)", alignItems: "center" }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>
                                <Typography variant="caption" color="default">{f}</Typography>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <Typography variant="heading-sm" weight="bold" color={isSelected ? "primary" : "strong"} style={{ fontVariantNumeric: "tabular-nums" }}>
                          ₹{p.price.toLocaleString("en-IN")}
                        </Typography>
                        <Typography variant="caption" color="muted">/year</Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom bar */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-4)" }}>
          <div>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
            <Typography variant="caption" color="muted">1 year policy</Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
            <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.price.toLocaleString("en-IN")}/yr</Typography>
            <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>Continue</Button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .plan-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
