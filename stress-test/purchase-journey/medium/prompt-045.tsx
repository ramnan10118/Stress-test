import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0, marginTop: 2 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PLANS = [
  {
    id: "tp",
    name: "Third Party",
    price: 2094,
    tagline: "Legally required minimum",
    recommended: false,
    features: ["Third-party damage cover", "Third-party injury / death", "Personal accident ₹15 lakh"],
    helpText: "Choose this if you have an older car and want to meet the legal minimum.",
  },
  {
    id: "comp",
    name: "Comprehensive",
    price: 4599,
    tagline: "Best balance of cover and cost",
    recommended: true,
    features: ["All Third Party benefits", "Own vehicle damage", "Fire & theft", "Natural disasters"],
    helpText: "Most popular choice for cars between 2–7 years old. Covers your car too.",
  },
  {
    id: "comp_plus",
    name: "Comprehensive+",
    price: 6999,
    tagline: "Maximum protection, zero worries",
    recommended: false,
    features: ["All Comprehensive benefits", "Zero depreciation included", "Engine protection", "Roadside assistance"],
    helpText: "Best for new or high-value cars where you want full protection without deductions.",
  },
];

export default function Prompt045() {
  const [selected, setSelected] = useState("comp");
  const [showHelp, setShowHelp] = useState(false);
  const selectedPlan = PLANS.find((p) => p.id === selected)!;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Select a plan</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "60%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", maxWidth: 520, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Help me choose toggle */}
        <button
          onClick={() => setShowHelp((v) => !v)}
          style={{ background: "none", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", padding: "var(--space-3) var(--space-4)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", touchAction: "manipulation" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-primary)" }}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
            <Typography variant="label-md" weight="semibold" color="primary">Help me choose the right plan</Typography>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-muted)", transform: showHelp ? "rotate(180deg)" : "none", transition: "transform var(--duration-fast) ease" }}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {showHelp && (
          <Card variant="default" padding="md" style={{ background: "var(--color-primary-subtle)", border: "1px solid var(--color-primary-border)" }}>
            <CardContent>
              <Typography variant="label-md" weight="semibold" color="primary" style={{ display: "block", marginBottom: "var(--space-2)" }}>Based on your 2021 Maruti Swift, we suggest:</Typography>
              <Typography variant="body-sm" color="muted">
                Your car is 4–5 years old and mid-range value. <strong>Comprehensive</strong> gives you the best balance — own damage cover, fire & theft, plus natural disaster protection, at a reasonable premium. You can add Zero Depreciation as an add-on if you want claim payments without deductions.
              </Typography>
            </CardContent>
          </Card>
        )}

        {/* Plan cards */}
        {PLANS.map((plan) => (
          <Card
            key={plan.id}
            variant={selected === plan.id ? "elevated" : "default"}
            padding="md"
            role="radio"
            aria-checked={selected === plan.id}
            tabIndex={0}
            onClick={() => setSelected(plan.id)}
            onKeyDown={(e) => e.key === "Enter" && setSelected(plan.id)}
            style={{ cursor: "pointer", outline: selected === plan.id ? `2px solid var(--color-primary)` : "none", outlineOffset: 2, touchAction: "manipulation" }}
          >
            <CardContent>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "var(--radius-full)", border: `2px solid ${selected === plan.id ? "var(--color-primary)" : "var(--color-border-default)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {selected === plan.id && <div style={{ width: 10, height: 10, borderRadius: "var(--radius-full)", background: "var(--color-primary)" }} />}
                    </div>
                    <Typography variant="heading-sm" weight="semibold" color="strong">{plan.name}</Typography>
                    {plan.recommended && <Badge color="blue" size="sm">Recommended</Badge>}
                  </div>
                  <Typography variant="body-sm" color="muted" style={{ marginLeft: 26 }}>{plan.tagline}</Typography>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <Typography variant="heading-md" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.price.toLocaleString("en-IN")}</Typography>
                  <Typography variant="caption" color="muted">/year</Typography>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: "0 0 0 26px", margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)" }}>
                    <CheckIcon />
                    <Typography variant="body-sm" color="default">{f}</Typography>
                  </li>
                ))}
              </ul>
              {selected === plan.id && (
                <div style={{ marginTop: "var(--space-3)", padding: "var(--space-3)", background: "var(--color-surface)", borderRadius: "var(--radius-lg)" }}>
                  <Typography variant="body-sm" color="muted" style={{ fontStyle: "italic" }}>{plan.helpText}</Typography>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
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
