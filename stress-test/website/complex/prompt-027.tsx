import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

type FamilySize = "self" | "self_spouse" | "family_3" | "family_4plus";

interface PlanCard {
  id: string;
  name: string;
  sumInsured: string;
  price: number;
  features: string[];
  badge?: string;
}

const PLANS: Record<FamilySize, PlanCard[]> = {
  self: [
    { id: "basic", name: "Individual Basic", sumInsured: "5 lakh", price: 399, features: ["Cashless hospitalisation", "Day care procedures", "Pre & post hospitalisation"] },
    { id: "standard", name: "Individual Plus", sumInsured: "10 lakh", price: 699, features: ["All Basic benefits", "Critical illness add-on", "Annual health check-up"], badge: "Best value" },
  ],
  self_spouse: [
    { id: "floater", name: "Couple Floater", sumInsured: "10 lakh", price: 699, features: ["Cashless hospitalisation", "Maternity cover (after 9 mo)", "Day care procedures"] },
    { id: "floater_plus", name: "Couple Plus", sumInsured: "20 lakh", price: 1199, features: ["All Floater benefits", "Critical illness rider", "Annual check-up for 2"], badge: "Popular" },
  ],
  family_3: [
    { id: "family3", name: "Family Floater", sumInsured: "10 lakh", price: 799, features: ["You + spouse + 1 kid", "New-born cover from day 1", "Cashless at 10,000+ hospitals"] },
    { id: "family3_plus", name: "Family Plus", sumInsured: "20 lakh", price: 1299, features: ["All Family benefits", "Critical illness rider", "2 annual health check-ups"], badge: "Best value" },
  ],
  family_4plus: [
    { id: "family4", name: "Large Family", sumInsured: "15 lakh", price: 999, features: ["4+ members on one plan", "New-born cover from day 1", "Cashless hospitalisation"] },
    { id: "family4_plus", name: "Large Family Plus", sumInsured: "25 lakh", price: 1599, features: ["All Large Family benefits", "Critical illness for 2 adults", "3 annual check-ups"], badge: "Best value" },
  ],
};

const FAMILY_OPTIONS: { value: FamilySize; label: string; sub: string }[] = [
  { value: "self", label: "Just me", sub: "Individual cover" },
  { value: "self_spouse", label: "Me + Spouse", sub: "Couple cover" },
  { value: "family_3", label: "Family of 3", sub: "Me, Spouse, 1 kid" },
  { value: "family_4plus", label: "Family of 4+", sub: "Me, Spouse, 2+ kids" },
];

export default function Prompt027() {
  const [familySize, setFamilySize] = useState<FamilySize>("family_3");
  const plans = PLANS[familySize];

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-64)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>Get a quote</Button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-12) var(--space-4)", textAlign: "center" }}>
        <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-3)" }}>
          Health cover that fits your family
        </Typography>
        <Typography variant="body-lg" style={{ color: "var(--color-text-secondary)" }}>
          Choose your family size and we'll show the plans built for you.
        </Typography>
      </section>

      <Separator />

      <section style={{ padding: "var(--space-10) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          {/* Family selector */}
          <div>
            <Typography variant="heading-sm" weight="semibold" color="strong" align="center" style={{ display: "block", marginBottom: "var(--space-4)" }}>Who are you covering?</Typography>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-3)", maxWidth: 600, margin: "0 auto" }} className="selector-grid">
              {FAMILY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFamilySize(opt.value)}
                  style={{
                    background: familySize === opt.value ? "var(--color-primary)" : "var(--grey-white)",
                    border: `2px solid ${familySize === opt.value ? "var(--color-primary)" : "var(--color-border-default)"}`,
                    borderRadius: "var(--radius-xl)",
                    padding: "var(--space-4) var(--space-3)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all var(--duration-fast) ease",
                    touchAction: "manipulation",
                    minHeight: "var(--scale-44)",
                  }}
                  aria-pressed={familySize === opt.value}
                >
                  <div style={{ color: familySize === opt.value ? "var(--color-on-primary)" : undefined }}>
                    <Typography variant="label-lg" weight="semibold" color={familySize === opt.value ? undefined : "strong"} style={{ display: "block" }}>{opt.label}</Typography>
                    <Typography variant="caption" color={familySize === opt.value ? undefined : "muted"}>{opt.sub}</Typography>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Plan cards */}
          <div>
            <Typography variant="heading-sm" weight="semibold" color="strong" align="center" style={{ display: "block", marginBottom: "var(--space-4)" }}>Plans for you</Typography>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)", maxWidth: 760, margin: "0 auto" }} className="plans-grid">
              {plans.map((plan) => (
                <Card key={plan.id} variant={plan.badge ? "elevated" : "default"} padding="lg" style={{ outline: plan.badge ? "2px solid var(--color-primary)" : "none", outlineOffset: 2 }}>
                  <CardContent>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
                      <div>
                        <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
                        <Typography variant="body-sm" color="muted">Sum insured: {plan.sumInsured}</Typography>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <Typography variant="heading-lg" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.price}</Typography>
                        <Typography variant="caption" color="muted">/month</Typography>
                      </div>
                    </div>
                    {plan.badge && <div style={{ marginBottom: "var(--space-3)" }}><Badge color="green" size="sm">{plan.badge}</Badge></div>}
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                      {plan.features.map((f) => (
                        <li key={f} style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0, marginTop: 2 }}><path d="M20 6 9 17l-5-5" /></svg>
                          <Typography variant="body-sm" color="default">{f}</Typography>
                        </li>
                      ))}
                    </ul>
                    <Button type="button" variant={plan.badge ? "primary" : "outline"} size="md" style={{ width: "100%", touchAction: "manipulation" }}>Get a quote</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 680px) {
          .selector-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .plans-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
