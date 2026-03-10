import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { RadioGroup } from "@acko/radio";
import { Checkbox } from "@acko/checkbox";

const ADD_ONS = [
  { id: "zero_dep", label: "Zero depreciation", price: 800 },
  { id: "rsa", label: "Roadside assistance", price: 299 },
  { id: "engine_protect", label: "Engine protection", price: 550 },
];

const PLAN_RECOMMENDATIONS: Record<string, { name: string; basePrice: number; features: string[] }> = {
  new: { name: "Comprehensive+", basePrice: 6999, features: ["Own damage cover", "Third-party cover", "Personal accident cover", "Zero depreciation included"] },
  "1-3": { name: "Comprehensive", basePrice: 4599, features: ["Own damage cover", "Third-party cover", "Personal accident cover", "Optional add-ons"] },
  "4-7": { name: "Third-party + OD", basePrice: 2999, features: ["Mandatory third-party cover", "Own damage cover", "Personal accident cover"] },
  "8+": { name: "Third-party", basePrice: 2094, features: ["Mandatory third-party cover", "Personal accident cover"] },
};

export default function Prompt026() {
  const [carAge, setCarAge] = useState("1-3");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const plan = PLAN_RECOMMENDATIONS[carAge];
  const addOnTotal = ADD_ONS.filter((a) => selectedAddOns.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const totalPremium = plan.basePrice + addOnTotal;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-64)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>Buy now</Button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-12) var(--space-4)", textAlign: "center" }}>
        <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
          Build your car insurance plan
        </Typography>
        <Typography variant="body-lg" color="muted">
          Tell us about your car and we'll recommend the right coverage. Customise to fit your needs.
        </Typography>
      </section>

      <Separator />

      <section style={{ padding: "var(--space-10) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-6)" }} className="calculator-grid">
          {/* Left: inputs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Card variant="default" padding="lg">
              <CardContent>
                <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>How old is your car?</Typography>
                <RadioGroup
                  label="Car age"
                  value={carAge}
                  onChange={setCarAge}
                  options={[
                    { value: "new", label: "Brand new" },
                    { value: "1-3", label: "1–3 years" },
                    { value: "4-7", label: "4–7 years" },
                    { value: "8+", label: "8+ years" },
                  ]}
                />
              </CardContent>
            </Card>

            <Card variant="default" padding="lg">
              <CardContent>
                <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Add extra protection</Typography>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  {ADD_ONS.map((addon) => (
                    <div
                      key={addon.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleAddOn(addon.id)}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleAddOn(addon.id)}
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: "var(--space-3)", borderRadius: "var(--radius-lg)", background: selectedAddOns.includes(addon.id) ? "var(--color-primary-subtle)" : "var(--color-surface)", border: `1px solid ${selectedAddOns.includes(addon.id) ? "var(--color-primary)" : "var(--color-border-default)"}`, touchAction: "manipulation" }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }} onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          checked={selectedAddOns.includes(addon.id)}
                          onChange={() => toggleAddOn(addon.id)}
                          label={addon.label}
                        />
                      </div>
                        <Typography variant="label-md" weight="semibold" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>+₹{addon.price}</Typography>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: plan recommendation */}
          <div>
            <Card variant="elevated" padding="lg" style={{ outline: "2px solid var(--color-primary)", outlineOffset: 2 }}>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                  <Badge color="blue" size="sm">Recommended for you</Badge>
                </div>
                <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>{plan.name}</Typography>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>
                      <Typography variant="body-sm" color="default">{f}</Typography>
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: "1px solid var(--color-border-subtle)", paddingTop: "var(--space-4)", marginBottom: "var(--space-4)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-1)" }}>
                    <Typography variant="body-sm" color="muted">Base premium</Typography>
                    <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.basePrice.toLocaleString("en-IN")}</Typography>
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-1)" }}>
                      <Typography variant="body-sm" color="muted">Add-ons</Typography>
                      <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>+₹{addOnTotal.toLocaleString("en-IN")}</Typography>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="label-lg" weight="semibold" color="strong">Total premium</Typography>
                    <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{totalPremium.toLocaleString("en-IN")}</Typography>
                  </div>
                </div>
                <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Buy now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 680px) {
          .calculator-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
