import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";

// Iteration 2: Add recommended badge + visual hierarchy improvement

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, desc: "Mandatory cover. Protects others from damage you cause.", badge: null },
  { id: "comp", name: "Comprehensive", price: 4599, desc: "Your car + third party. Best for most car owners.", badge: "Recommended" },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, desc: "All Comprehensive benefits + zero dep + engine cover.", badge: "Most value" },
];

export default function Prompt092() {
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
        {PLANS.map((plan) => {
          const isSelected = selected === plan.id;
          return (
            <Card
              key={plan.id}
              variant={isSelected ? "elevated" : "default"}
              padding="none"
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => setSelected(plan.id)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(plan.id)}
              style={{ cursor: "pointer", outline: isSelected ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, overflow: "hidden", touchAction: "manipulation" }}
            >
              {/* Recommended banner */}
              {plan.badge === "Recommended" && (
                <div style={{ background: "var(--color-primary)", padding: "var(--space-1) var(--space-4)" }}>
                  <Typography variant="caption" weight="semibold" style={{ color: "var(--color-on-primary)" }}>
                    ⭐ {plan.badge} for your vehicle
                  </Typography>
                </div>
              )}
              <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-3)" }}>
                  <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "var(--radius-full)", border: `2px solid ${isSelected ? "var(--color-primary)" : "var(--color-border-default)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      {isSelected && <div style={{ width: 11, height: 11, borderRadius: "var(--radius-full)", background: "var(--color-primary)" }} />}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                        <Typography variant="label-lg" weight="semibold" color="strong">{plan.name}</Typography>
                        {plan.badge === "Most value" && <Badge color="orange" size="sm">{plan.badge}</Badge>}
                      </div>
                      <Typography variant="body-sm" color="muted">{plan.desc}</Typography>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <Typography variant="heading-sm" weight="bold" color={isSelected ? "primary" : "strong"} style={{ fontVariantNumeric: "tabular-nums" }}>
                      ₹{plan.price.toLocaleString("en-IN")}
                    </Typography>
                    <Typography variant="caption" color="muted">/year</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Continue with {PLANS.find((p) => p.id === selected)?.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
