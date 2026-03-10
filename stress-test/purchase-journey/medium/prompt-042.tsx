import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Switch } from "@acko/switch";
import { Separator } from "@acko/separator";

const ADD_ONS = [
  { id: "zero_dep", icon: "🛡️", name: "Zero Depreciation", description: "Full claim without depreciation deduction on parts.", price: 800 },
  { id: "rsa", icon: "🚐", name: "Roadside Assistance", description: "Tow, battery, fuel, tyre, key — 24×7 anywhere in India.", price: 299 },
  { id: "engine", icon: "⚙️", name: "Engine Protection", description: "Covers damage from waterlogging or oil leak.", price: 550 },
  { id: "consumables", icon: "🔩", name: "Consumables Cover", description: "Nuts, bolts, lubricants, and fuel costs covered in claims.", price: 399 },
  { id: "key_loss", icon: "🔑", name: "Key & Lock Replacement", description: "Covers loss or theft of keys including replacement lock.", price: 199 },
  { id: "tyres", icon: "🛞", name: "Tyre Protection", description: "Accidental tyre damage — cuts, bursts, bulges covered.", price: 350 },
];

export default function Prompt042() {
  const [enabled, setEnabled] = useState<string[]>(["rsa", "zero_dep"]);

  const toggle = (id: string) => setEnabled((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const basePremium = 4599;
  const addOnTotal = ADD_ONS.filter((a) => enabled.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const gst = Math.round((basePremium + addOnTotal) * 0.18);
  const total = basePremium + addOnTotal + gst;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Add-ons</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "70%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", maxWidth: 520, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Typography variant="body-sm" style={{ color: "var(--color-text-secondary)" }}>
          Enhance your Comprehensive plan with targeted add-ons. Toggle to add or remove.
        </Typography>

        {ADD_ONS.map((addon) => {
          const isEnabled = enabled.includes(addon.id);
          return (
            <Card
              key={addon.id}
              variant="default"
              padding="md"
              style={{
                outline: isEnabled ? `2px solid var(--color-primary)` : "none",
                outlineOffset: 2,
                background: isEnabled ? "var(--color-primary-subtle)" : "var(--grey-white)",
                transition: "background var(--duration-fast) ease, outline var(--duration-fast) ease",
              }}
            >
              <CardContent>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-3)" }}>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", flex: 1 }}>
                    <div style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">{addon.icon}</div>
                    <div>
                      <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>{addon.name}</Typography>
                      <Typography variant="body-sm" color="muted" style={{ marginBottom: "var(--space-1)" }}>{addon.description}</Typography>
                      <Typography variant="label-md" weight="semibold" color={isEnabled ? "primary" : "muted"} style={{ fontVariantNumeric: "tabular-nums" }}>
                        +₹{addon.price}/yr
                      </Typography>
                    </div>
                  </div>
                  <Switch
                    checked={isEnabled}
                    onChange={() => toggle(addon.id)}
                    aria-label={`${isEnabled ? "Remove" : "Add"} ${addon.name}`}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </main>

      {/* Sticky bottom with running total */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", marginBottom: "var(--space-3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body-sm" style={{ color: "var(--color-text-muted)" }}>Base plan</Typography>
              <Typography variant="body-sm" style={{ color: "var(--color-text-default)", fontVariantNumeric: "tabular-nums" }}>₹{basePremium.toLocaleString("en-IN")}</Typography>
            </div>
            {enabled.length > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body-sm" style={{ color: "var(--color-text-muted)" }}>{enabled.length} add-on{enabled.length !== 1 ? "s" : ""}</Typography>
                <Typography variant="body-sm" style={{ color: "var(--color-text-default)", fontVariantNumeric: "tabular-nums" }}>+₹{addOnTotal.toLocaleString("en-IN")}</Typography>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body-sm" style={{ color: "var(--color-text-muted)" }}>GST (18%)</Typography>
              <Typography variant="body-sm" style={{ color: "var(--color-text-default)", fontVariantNumeric: "tabular-nums" }}>₹{gst.toLocaleString("en-IN")}</Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "var(--space-1)" }}>
              <Typography variant="label-lg" weight="semibold" style={{ color: "var(--color-text-strong)" }}>Total</Typography>
              <Typography variant="heading-md" weight="bold" style={{ color: "var(--color-primary)", fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
            </div>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
