import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";

// Iteration 1: Base plan selection — minimal, no extras

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, desc: "Mandatory cover. Covers damage you cause to others." },
  { id: "comp", name: "Comprehensive", price: 4599, desc: "Covers your car + third party. Recommended for most drivers." },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, desc: "Everything in Comprehensive plus zero dep & engine cover." },
];

export default function Prompt091() {
  const [selected, setSelected] = useState("comp");

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", padding: "var(--space-6) var(--space-4) 100px" }}>
      <Typography variant="heading-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
        Choose a plan
      </Typography>
      <Typography variant="body-md" color="muted" style={{ display: "block", marginBottom: "var(--space-6)" }}>
        Maruti Swift ZXI+ · MH 01 AB 1234
      </Typography>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
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
            style={{
              cursor: "pointer",
              outline: selected === plan.id ? "2px solid var(--color-primary)" : "none",
              outlineOffset: 2,
              touchAction: "manipulation",
            }}
          >
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-3)" }}>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "var(--radius-full)", border: `2px solid ${selected === plan.id ? "var(--color-primary)" : "var(--color-border-default)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    {selected === plan.id && <div style={{ width: 10, height: 10, borderRadius: "var(--radius-full)", background: "var(--color-primary)" }} />}
                  </div>
                  <div>
                    <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
                    <Typography variant="body-sm" color="muted">{plan.desc}</Typography>
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>
                    ₹{plan.price.toLocaleString("en-IN")}
                  </Typography>
                  <Typography variant="caption" color="muted">/year</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", maxWidth: 520, margin: "0 auto" }}>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
          Continue with {PLANS.find((p) => p.id === selected)?.name}
        </Button>
      </div>
    </div>
  );
}
