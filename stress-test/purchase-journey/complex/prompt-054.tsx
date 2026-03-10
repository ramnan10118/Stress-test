import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Switch } from "@acko/switch";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { Accordion } from "@acko/accordion";

const ADD_ONS = [
  {
    id: "zero_dep",
    icon: "🛡️",
    name: "Zero Depreciation",
    tagline: "Get full claim without depreciation cuts",
    description: "When you claim, ACKO will pay for new parts without deducting depreciation. Ideal for cars up to 5 years old.",
    price: 800,
    recommended: true,
    faq: [{ value: "zd1", trigger: "What is depreciation in insurance?", content: "Depreciation is the loss in value of car parts over time. Without zero dep, claim payouts are reduced by the depreciated value of parts replaced. Zero dep cover removes this deduction." }],
  },
  {
    id: "rsa",
    icon: "🚐",
    name: "Roadside Assistance",
    tagline: "Help within 30 min — anywhere in India",
    description: "Tow truck, battery jump-start, fuel delivery, tyre change, key replacement — 24×7 across India.",
    price: 299,
    recommended: true,
    faq: [],
  },
  {
    id: "engine",
    icon: "⚙️",
    name: "Engine Protection",
    tagline: "Covers your engine against water & oil damage",
    description: "Protects your engine and gearbox if they're damaged by waterlogging (flood) or oil leakage. Especially useful during monsoon.",
    price: 550,
    recommended: false,
    faq: [],
  },
  {
    id: "consumables",
    icon: "🔩",
    name: "Consumables Cover",
    tagline: "Covers nuts, bolts, oils used in repair",
    description: "Consumable items used during repairs — engine oil, nut & bolts, screws, washers — are covered in claim settlements.",
    price: 399,
    recommended: false,
    faq: [],
  },
  {
    id: "tyres",
    icon: "🛞",
    name: "Tyre Protection",
    tagline: "Covers tyre damage not from accidents",
    description: "Accidental tyre damage — cuts, bursts, bulges, and flat tyres — covered beyond normal accident claims.",
    price: 350,
    recommended: false,
    faq: [],
  },
  {
    id: "key_lock",
    icon: "🔑",
    name: "Key & Lock Replacement",
    tagline: "Covers cost of replacing lost / stolen keys",
    description: "If your car keys are lost or stolen, we cover the cost of replacement keys and lock-set changes.",
    price: 199,
    recommended: false,
    faq: [],
  },
];

export default function Prompt054() {
  const [enabled, setEnabled] = useState<string[]>(["zero_dep", "rsa"]);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setEnabled((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  const basePremium = 4599;
  const addOnTotal = ADD_ONS.filter((a) => enabled.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const gst = Math.round((basePremium + addOnTotal) * 0.18);
  const total = basePremium + addOnTotal + gst;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Customise your plan</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "70%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4) 120px", maxWidth: 600, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Typography variant="body-sm" color="muted">
          Add extra protection to your Comprehensive plan. Toggle to select, tap to learn more.
        </Typography>

        {ADD_ONS.map((addon) => {
          const isEnabled = enabled.includes(addon.id);
          const isExpanded = expanded === addon.id;
          return (
            <Card key={addon.id} variant="default" padding="md" style={{ outline: isEnabled ? `2px solid var(--color-primary)` : "none", outlineOffset: 2, background: isEnabled ? "var(--color-primary-subtle)" : "var(--grey-white)" }}>
              <CardContent>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-3)" }}>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", flex: 1 }}>
                    <div style={{ flexShrink: 0 }} aria-hidden="true">{addon.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-1)" }}>
                        <Typography variant="label-lg" weight="semibold" color="strong">{addon.name}</Typography>
                        {addon.recommended && <Badge color="green" size="sm">Recommended</Badge>}
                      </div>
                      <Typography variant="body-sm" color="muted" style={{ marginBottom: "var(--space-1)" }}>{addon.tagline}</Typography>
                      <Typography variant="label-md" weight="semibold" color={isEnabled ? "primary" : "muted"} style={{ fontVariantNumeric: "tabular-nums" }}>
                        +₹{addon.price}/yr
                      </Typography>
                      <button
                        onClick={() => setExpanded(isExpanded ? null : addon.id)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-primary)", padding: "var(--space-1) 0", marginTop: "var(--space-1)", touchAction: "manipulation" }}
                      >
                        <Typography variant="body-sm" color="primary">{isExpanded ? "Less details ↑" : "More details ↓"}</Typography>
                      </button>
                      {isExpanded && (
                        <Typography variant="body-sm" color="muted" style={{ marginTop: "var(--space-2)", textWrap: "pretty" }}>{addon.description}</Typography>
                      )}
                    </div>
                  </div>
                  <Switch checked={isEnabled} onChange={() => toggle(addon.id)} aria-label={`${isEnabled ? "Remove" : "Add"} ${addon.name}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </main>

      {/* Sticky running total */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "var(--space-4)", marginBottom: "var(--space-3)", justifyContent: "space-between" }}>
            <div>
              <Typography variant="body-sm" color="muted" style={{ display: "block" }}>Comprehensive + {enabled.length} add-on{enabled.length !== 1 ? "s" : ""}</Typography>
              <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}/yr</Typography>
            </div>
            <Typography variant="caption" color="muted" style={{ alignSelf: "flex-end" }}>incl. GST ₹{gst}</Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Continue</Button>
        </div>
      </div>
    </div>
  );
}
