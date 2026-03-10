import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { Switch } from "@acko/switch";

const ADD_ONS = [
  { id: "zero_dep", label: "Zero depreciation", price: 800, enabled: false },
  { id: "rsa", label: "Roadside assistance", price: 299, enabled: true },
  { id: "engine", label: "Engine protection", price: 550, enabled: false },
  { id: "tyres", label: "Tyre protection", price: 399, enabled: false },
];

export default function Prompt030() {
  const [addOns, setAddOns] = useState(ADD_ONS);
  const [ncbConfirmed, setNcbConfirmed] = useState(false);

  const toggleAddOn = (id: string) => {
    setAddOns((prev) => prev.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a)));
  };

  const basePremium = 4599;
  const addOnTotal = addOns.filter((a) => a.enabled).reduce((s, a) => s + a.price, 0);
  const ncbDiscount = ncbConfirmed ? -920 : 0;
  const gst = Math.round((basePremium + addOnTotal + ncbDiscount) * 0.18);
  const totalPremium = basePremium + addOnTotal + ncbDiscount + gst;

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-64)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <Badge color="orange" size="sm">Renewal due in 7 days</Badge>
        </div>
      </header>

      <section style={{ padding: "var(--space-10) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-6)" }} className="renewal-grid">
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {/* Current policy */}
            <Card variant="default" padding="lg">
              <CardContent>
                <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Current policy details</Typography>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                  {[
                    { label: "Vehicle", value: "MH 01 AB 1234" },
                    { label: "Make & model", value: "Maruti Swift ZXI+" },
                    { label: "Year", value: "2021" },
                    { label: "Policy type", value: "Comprehensive" },
                    { label: "Expiry", value: "10 Mar 2026" },
                    { label: "Policy no.", value: "ACK-2023-8471234" },
                  ].map((item) => (
                    <div key={item.label}>
                      <Typography variant="caption" color="muted" style={{ display: "block" }}>{item.label}</Typography>
                      <Typography variant="label-md" weight="semibold" color="strong">{item.value}</Typography>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add-on options */}
            <Card variant="default" padding="lg">
              <CardContent>
                <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Customise your cover</Typography>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  {addOns.map((addon) => (
                    <div key={addon.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-3)", borderRadius: "var(--radius-lg)", background: addon.enabled ? "var(--color-primary-subtle)" : "var(--color-surface)", border: `1px solid ${addon.enabled ? "var(--color-primary)" : "var(--color-border-subtle)"}` }}>
                      <div>
                        <Typography variant="label-md" weight="semibold" color="default" style={{ display: "block" }}>{addon.label}</Typography>
                        <Typography variant="caption" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>+₹{addon.price}/yr</Typography>
                      </div>
                      <Switch
                        checked={addon.enabled}
                        onChange={() => toggleAddOn(addon.id)}
                        aria-label={`${addon.enabled ? "Remove" : "Add"} ${addon.label}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* NCB */}
            <Card variant="default" padding="md">
              <CardContent>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Claim-free discount (NCB)</Typography>
                    <Typography variant="body-sm" color="muted">20% off — 1 claim-free year</Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <Typography variant="label-md" color="success" style={{ fontVariantNumeric: "tabular-nums" }}>-₹920</Typography>
                    <Switch
                      checked={ncbConfirmed}
                      onChange={() => setNcbConfirmed((v) => !v)}
                      aria-label={`${ncbConfirmed ? "Remove" : "Apply"} NCB discount`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Premium breakdown + CTA */}
          <div>
            <Card variant="elevated" padding="lg" style={{ position: "sticky", top: "calc(var(--scale-64) + var(--space-4))" }}>
              <CardContent>
                <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Premium breakdown</Typography>

                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body-sm" color="muted">Base premium</Typography>
                    <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{basePremium.toLocaleString("en-IN")}</Typography>
                  </div>
                  {addOns.filter((a) => a.enabled).map((a) => (
                    <div key={a.id} style={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body-sm" color="muted">{a.label}</Typography>
                      <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>+₹{a.price}</Typography>
                    </div>
                  ))}
                  {ncbConfirmed && (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body-sm" color="success">NCB discount (20%)</Typography>
                      <Typography variant="body-sm" color="success" style={{ fontVariantNumeric: "tabular-nums" }}>-₹920</Typography>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body-sm" color="muted">GST (18%)</Typography>
                    <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{gst.toLocaleString("en-IN")}</Typography>
                  </div>
                  <Separator />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="label-lg" weight="semibold" color="strong">Total</Typography>
                    <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{totalPremium.toLocaleString("en-IN")}</Typography>
                  </div>
                </div>

                <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Renew now</Button>
                <Typography variant="caption" color="muted" align="center" style={{ display: "block", marginTop: "var(--space-3)" }}>Policy active immediately. Document in email in seconds.</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 680px) {
          .renewal-grid { grid-template-columns: 3fr 2fr !important; }
        }
      `}</style>
    </div>
  );
}
