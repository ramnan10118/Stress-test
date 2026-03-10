// Dark Mode — Plan selection
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, badge: null, desc: "Mandatory cover. Protects third parties — not your car." },
  { id: "comp", name: "Comprehensive", price: 4599, badge: "Recommended", desc: "Your car + third party. Best for most drivers." },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null, desc: "All Comprehensive benefits + zero depreciation + more." },
];

export default function Prompt113() {
  const [selected, setSelected] = useState("comp");
  const plan = PLANS.find((p) => p.id === selected)!;

  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button aria-label="Go back" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <Typography variant="label-lg" weight="semibold" color="strong">Choose a plan</Typography>
        <div style={{ width: "var(--scale-44)" }} />
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4) 110px", maxWidth: 520, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "var(--space-6)" }}>
          <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
            Select your plan
          </Typography>
          <Typography variant="body-sm" color="muted">Maruti Swift ZXI+ · MH 01 AB 1234</Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {PLANS.map((p) => {
            const isSelected = selected === p.id;
            return (
              <Card
                key={p.id}
                variant={isSelected ? "elevated" : "default"}
                padding="none"
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelected(p.id)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(p.id)}
                style={{ cursor: "pointer", outline: isSelected ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, touchAction: "manipulation", transition: "box-shadow var(--duration-fast) var(--ease-out-cubic), outline-color var(--duration-fast) var(--ease-out-cubic)" }}
              >
                <div style={{ height: 3, background: isSelected ? "var(--color-primary)" : "transparent" }} />
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-3)" }}>
                    <div style={{ display: "flex", gap: "var(--space-3)" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "var(--radius-full)", border: `2px solid ${isSelected ? "var(--color-primary)" : "var(--color-border-default)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <div style={{ width: 11, height: 11, borderRadius: "var(--radius-full)", background: "var(--color-primary)", transform: isSelected ? "scale(1)" : "scale(0)", transition: "transform var(--duration-fast) cubic-bezier(0.34,1.56,0.64,1)" }} />
                      </div>
                      <div>
                        <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center", marginBottom: "var(--space-1)" }}>
                          <Typography variant="label-lg" weight="semibold" color="strong">{p.name}</Typography>
                          {p.badge && <Badge color="blue" size="sm">{p.badge}</Badge>}
                        </div>
                        <Typography variant="body-sm" color="muted">{p.desc}</Typography>
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
      </main>

      {/* Sticky bottom */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--color-surface-secondary)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))", zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-4)" }}>
          <div>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
            <Typography variant="body-sm" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.price.toLocaleString("en-IN")}/yr · incl. GST</Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation", flexShrink: 0 }}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
