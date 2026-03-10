import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PLANS = [
  {
    id: "individual",
    label: "Individual",
    price: "₹399",
    period: "/month",
    tagline: "Just for you",
    features: ["5 lakh sum insured", "Cashless hospitalisation", "Pre & post hospitalisation", "Day care procedures", "Annual health check-up"],
    badge: null,
  },
  {
    id: "family",
    label: "Family",
    price: "₹799",
    period: "/month",
    tagline: "You + spouse + 2 kids",
    features: ["10 lakh family floater", "Cashless hospitalisation", "Maternity cover (after 9 months)", "New-born cover", "Critical illness rider", "Annual health check-up"],
    badge: "Most popular",
  },
  {
    id: "senior",
    label: "Senior",
    price: "₹1,199",
    period: "/month",
    tagline: "Parents aged 60+",
    features: ["15 lakh sum insured", "No co-payment up to 70 yrs", "Pre-existing disease cover", "Domiciliary hospitalisation", "AYUSH treatment", "Dedicated care manager"],
    badge: null,
  },
];

export default function Prompt017() {
  const [selected, setSelected] = useState("family");

  return (
    <section style={{ background: "var(--color-surface)", padding: "var(--space-16) var(--space-4)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
            Choose the right health plan
          </Typography>
          <Typography variant="body-lg" color="muted">
            Individual, family, or senior — all plans include cashless hospitalisation at 10,000+ hospitals.
          </Typography>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="plans-grid">
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              variant={selected === plan.id ? "elevated" : "default"}
              padding="lg"
              role="button"
              tabIndex={0}
              aria-pressed={selected === plan.id}
              onClick={() => setSelected(plan.id)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(plan.id)}
              style={{
                cursor: "pointer",
                outline: selected === plan.id ? `2px solid var(--color-primary)` : "none",
                outlineOffset: 2,
                transition: "box-shadow var(--duration-fast) ease",
                touchAction: "manipulation",
              }}
            >
              <CardContent>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
                  <div>
                    <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>{plan.label}</Typography>
                    <Typography variant="caption" color="muted">{plan.tagline}</Typography>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Typography variant="heading-lg" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>{plan.price}</Typography>
                    <Typography variant="caption" color="muted">{plan.period}</Typography>
                  </div>
                </div>
                {plan.badge && (
                  <div style={{ marginBottom: "var(--space-3)" }}>
                    <Badge color="green" size="sm">{plan.badge}</Badge>
                  </div>
                )}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                      <CheckIcon />
                      <Typography variant="body-sm" color="default">{f}</Typography>
                    </li>
                  ))}
                </ul>
                <Button type="button" variant={selected === plan.id ? "primary" : "outline"} size="md" style={{ width: "100%", touchAction: "manipulation" }}>
                  Get a quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .plans-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
