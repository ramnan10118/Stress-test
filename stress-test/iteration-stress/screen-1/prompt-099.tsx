import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Tooltip } from "@acko/tooltip";

// Iteration 9: Add tooltips on features and plan pricing

const InfoIcon = ({ label }: { label: string }) => (
  <Tooltip content={label} side="top">
    <span style={{ display: "inline-flex", cursor: "help" }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-text-muted)" }}>
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
      </svg>
    </span>
  </Tooltip>
);

const PLANS = [
  {
    id: "tp", name: "Third Party", price: 2094, badge: null,
    tooltip: "Required by law. Protects others from damage or injury caused by your car. Does NOT cover your own vehicle.",
    priceTooltip: "This is the IRDAI-mandated minimum price for third-party cover, standardised across all insurers.",
    features: [
      { label: "Third-party liability", tip: "Covers property damage you cause to others. Unlimited for injury." },
      { label: "Personal accident ₹15L", tip: "Owner-driver cover in case of permanent disability or death due to an accident." },
    ],
  },
  {
    id: "comp", name: "Comprehensive", price: 4599, badge: "Recommended",
    tooltip: "Covers your own car AND third-party damage. Best balance of price and protection.",
    priceTooltip: "Includes own damage, third-party, and PA cover. Price is based on your car's age, model, and IDV.",
    features: [
      { label: "Own car damage", tip: "Covers repair or replacement of your vehicle from accident, rollover, or impact." },
      { label: "Theft cover", tip: "Full IDV payout if your car is stolen and not recovered within 90 days." },
      { label: "Fire & flood", tip: "Damage from fire, explosion, or natural disasters like floods and cyclones." },
      { label: "Third-party + PA", tip: "Includes all third-party cover and ₹15L personal accident benefit." },
    ],
  },
  {
    id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null,
    tooltip: "All Comprehensive benefits plus zero depreciation, engine protection, and roadside assistance bundled in.",
    priceTooltip: "Bundles add-ons at a discounted rate vs. buying them individually. Saves ~₹450 vs. adding them separately.",
    features: [
      { label: "All Comprehensive benefits", tip: "Includes everything in the Comprehensive plan." },
      { label: "Zero depreciation", tip: "No deduction for depreciation on replaced parts. Get full cost of new parts." },
      { label: "Engine protection", tip: "Covers engine and gearbox damage from waterlogging or oil leakage." },
      { label: "Roadside assistance", tip: "24×7 tow truck, battery jump, fuel, tyre change, key unlock — pan-India." },
    ],
  },
];

export default function Prompt099() {
  const [selected, setSelected] = useState("comp");

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", padding: "var(--space-6) var(--space-4) 100px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-2)" }}>
        <Typography variant="heading-md" weight="bold" color="strong">Choose a plan</Typography>
        <InfoIcon label="All plans include GST. Prices may vary based on your vehicle's IDV and NCB." />
      </div>
      <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-6)" }}>
        Maruti Swift ZXI+ · MH 01 AB 1234
      </Typography>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {PLANS.map((plan) => {
          const isSelected = selected === plan.id;
          return (
            <Card
              key={plan.id}
              variant={isSelected ? "elevated" : "default"}
              padding="md"
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => setSelected(plan.id)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(plan.id)}
              style={{ cursor: "pointer", outline: isSelected ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, touchAction: "manipulation" }}
            >
              <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-3)", marginBottom: "var(--space-3)" }}>
                  <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "var(--radius-full)", border: `2px solid ${isSelected ? "var(--color-primary)" : "var(--color-border-default)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      {isSelected && <div style={{ width: 11, height: 11, borderRadius: "var(--radius-full)", background: "var(--color-primary)" }} />}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                        <Typography variant="label-lg" weight="semibold" color="strong">{plan.name}</Typography>
                        {plan.badge && <Badge color="blue" size="sm">{plan.badge}</Badge>}
                        <InfoIcon label={plan.tooltip} />
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                      <Typography variant="heading-sm" weight="bold" color={isSelected ? "primary" : "strong"} style={{ fontVariantNumeric: "tabular-nums" }}>
                        ₹{plan.price.toLocaleString("en-IN")}
                      </Typography>
                      <InfoIcon label={plan.priceTooltip} />
                    </div>
                    <Typography variant="caption" color="muted">/year</Typography>
                  </div>
                </div>

                {/* Features with tooltips */}
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  {plan.features.map((f) => (
                    <div key={f.label} style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>
                      <Typography variant="body-sm" color="default">{f.label}</Typography>
                      <InfoIcon label={f.tip} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Continue with {PLANS.find((p) => p.id === selected)?.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
