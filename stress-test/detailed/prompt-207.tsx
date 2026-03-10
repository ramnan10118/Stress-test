import { ChevronLeft, Check } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Progress } from "@acko/progress";

interface Plan {
  id: string;
  name: string;
  premium: number;
  recommended: boolean;
  inclusions: string[];
}

const PLANS: Plan[] = [
  {
    id: "tp",
    name: "Third Party",
    premium: 2094,
    recommended: false,
    inclusions: ["Third party liability", "Personal accident cover", "Legal liability", "No own damage cover"],
  },
  {
    id: "comp",
    name: "Comprehensive",
    premium: 5782,
    recommended: true,
    inclusions: ["Own damage + third party", "Personal accident cover", "Cashless repairs at 3,000+ garages", "24×7 roadside assistance"],
  },
  {
    id: "total",
    name: "ACKO Total Protect",
    premium: 7499,
    recommended: false,
    inclusions: ["Everything in Comprehensive", "Zero depreciation cover", "Engine protection", "Return to invoice"],
  },
];

// Iteration 2: PM feedback — price bigger/bolder (display-lg), placed right below plan name, CTA full width
export default function Prompt207() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "var(--grey-white)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
      }}>
        <div style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "0 var(--space-4)",
          height: "var(--scale-56)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <button type="button" aria-label="Go back" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Step 2 of 4</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5)", paddingBottom: "var(--space-20)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <Progress value={50} max={100} />

        <Typography variant="heading-xl" weight="bold" color="strong" as="h1">
          Choose your plan
        </Typography>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {PLANS.map((plan) => (
            <Card key={plan.id} variant="default" padding="md" style={plan.recommended ? { borderColor: "var(--color-primary)", borderWidth: 2 } : undefined}>
              {plan.recommended && (
                <div style={{ marginBottom: "var(--space-3)" }}>
                  <Badge color="blue" size="sm">Recommended</Badge>
                </div>
              )}

              <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                {plan.name}
              </Typography>

              {/* CHANGED: Price now display-lg (largest available), placed right below name before inclusions */}
              <Typography variant="display-lg" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)", fontVariantNumeric: "tabular-nums" }}>
                ₹{plan.premium.toLocaleString("en-IN")}
                <Typography variant="body-md" color="muted">/year</Typography>
              </Typography>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                {plan.inclusions.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }} />
                    <Typography variant="body-sm" color="default">{item}</Typography>
                  </div>
                ))}
              </div>

              {/* CHANGED: CTA now fullWidth */}
              <Button type="button" variant={plan.recommended ? "primary" : "outline"} size="lg" fullWidth>
                Select plan
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
