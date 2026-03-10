import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Switch } from "@acko/switch";
import { Separator } from "@acko/separator";
import { Alert } from "@acko/alert";

type RenewalStep = "review" | "addons" | "payment" | "success";

const ADD_ONS = [
  { id: "zero_dep", label: "Zero Depreciation", price: 800, enabled: true },
  { id: "rsa", label: "Roadside Assistance", price: 299, enabled: true },
  { id: "engine", label: "Engine Protection", price: 550, enabled: false },
  { id: "tyres", label: "Tyre Protection", price: 399, enabled: false },
];

export default function Prompt086() {
  const [step, setStep] = useState<RenewalStep>("review");
  const [addOns, setAddOns] = useState(ADD_ONS);
  const [autoRenew, setAutoRenew] = useState(false);

  const toggleAddOn = (id: string) => setAddOns((prev) => prev.map((a) => a.id === id ? { ...a, enabled: !a.enabled } : a));

  const base = 4599;
  const addonTotal = addOns.filter((a) => a.enabled).reduce((s, a) => s + a.price, 0);
  const ncb = -920;
  const gst = Math.round((base + addonTotal + ncb) * 0.18);
  const total = base + addonTotal + ncb + gst;

  const STEPS: { id: RenewalStep; label: string }[] = [
    { id: "review", label: "Review" },
    { id: "addons", label: "Add-ons" },
    { id: "payment", label: "Payment" },
  ];

  const stepIdx = STEPS.findIndex((s) => s.id === step);

  const next = () => {
    if (step === "review") setStep("addons");
    else if (step === "addons") setStep("payment");
    else if (step === "payment") setStep("success");
  };

  if (step === "success") {
    return (
      <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-8) var(--space-4)", gap: "var(--space-5)" }}>
        <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-success)" }} aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
        </div>
        <Typography variant="heading-md" weight="bold" color="strong" align="center">Renewed!</Typography>
        <Typography variant="body-md" color="muted" align="center">₹{total.toLocaleString("en-IN")} paid. Your car is covered until 2 Mar 2027.</Typography>
        <Badge color="green" size="md">Active · 3 Mar 2026 – 2 Mar 2027</Badge>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>View policy</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />
      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) 0", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", height: "var(--scale-56)" }}>
          <button onClick={() => { if (stepIdx > 0) setStep(STEPS[stepIdx - 1].id); }} style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Renewal</Typography>
        </div>
        {/* Step indicators */}
        <div style={{ display: "flex", paddingBottom: 0 }}>
          {STEPS.map((s, i) => (
            <div key={s.id} style={{ flex: 1, textAlign: "center", paddingBottom: "var(--space-2)", borderBottom: `2px solid ${i <= stepIdx ? "var(--color-primary)" : "var(--color-border-subtle)"}` }}>
              <Typography variant="caption" color={i <= stepIdx ? "primary" : "muted"} weight={i === stepIdx ? "semibold" : "regular"}>{s.label}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 100 }}>
        {/* Step 1: Review */}
        {step === "review" && (
          <>
            <Alert variant="warning">Your policy expires in 7 days. Renew to stay covered.</Alert>
            <Card variant="default" padding="md">
              <CardContent>
                <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-3)" }}>
                  <div style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center" }}>🚗</div>
                  <div>
                    <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>Maruti Swift ZXI+ · 2021</Typography>
                    <Typography variant="caption" color="muted">MH 01 AB 1234 · Comprehensive</Typography>
                  </div>
                </div>
                <Separator />
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "var(--space-3)" }}>
                  <Typography variant="body-sm" color="muted">Base premium</Typography>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>₹{base.toLocaleString("en-IN")}</Typography>
                </div>
              </CardContent>
            </Card>
            <Card variant="default" padding="md">
              <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <Typography variant="label-md" weight="semibold" color="default" style={{ display: "block" }}>NCB discount (20%)</Typography>
                    <Typography variant="caption" color="muted">Claim-free last year</Typography>
                  </div>
                  <Typography variant="label-md" color="success" style={{ fontVariantNumeric: "tabular-nums" }}>−₹920</Typography>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Step 2: Add-ons */}
        {step === "addons" && (
          <>
            <Typography variant="body-sm" color="muted">Toggle add-ons to include or remove from your renewal.</Typography>
            {addOns.map((a) => (
              <Card key={a.id} variant="default" padding="md" style={{ background: a.enabled ? "var(--color-primary-subtle)" : "var(--grey-white)", outline: a.enabled ? "2px solid var(--color-primary)" : "none", outlineOffset: 1 }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{a.label}</Typography>
                      <Typography variant="caption" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>+₹{a.price}/yr</Typography>
                    </div>
                    <Switch checked={a.enabled} onChange={() => toggleAddOn(a.id)} aria-label={`${a.enabled ? "Remove" : "Add"} ${a.label}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        )}

        {/* Step 3: Payment */}
        {step === "payment" && (
          <Card variant="default" padding="md">
            <CardContent>
              <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Premium summary</Typography>
              {[
                { label: "Comprehensive plan", amt: base },
                ...addOns.filter((a) => a.enabled).map((a) => ({ label: a.label, amt: a.price })),
                { label: "NCB (20%)", amt: ncb },
                { label: "GST (18%)", amt: gst },
              ].map((r, i) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
                  <Typography variant="body-sm" color="muted">{r.label}</Typography>
                  <Typography variant="body-sm" color={r.amt < 0 ? "success" : "default"} style={{ fontVariantNumeric: "tabular-nums" }}>
                    {r.amt < 0 ? `−₹${Math.abs(r.amt)}` : `₹${r.amt}`}
                  </Typography>
                </div>
              ))}
              <Separator />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                <Typography variant="label-md" weight="semibold" color="strong">Total</Typography>
                <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <Typography variant="label-sm" weight="semibold" color="default" style={{ display: "block" }}>Auto-renewal next year</Typography>
                  <Typography variant="caption" color="muted">We'll auto-renew 3 days before expiry</Typography>
                </div>
                <Switch checked={autoRenew} onChange={() => setAutoRenew((v) => !v)} aria-label="Enable auto-renewal" />
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, padding: "var(--space-4)", background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={next}>
          {step === "payment" ? `Pay ₹${total.toLocaleString("en-IN")}` : "Continue"}
        </Button>
      </div>
    </div>
  );
}
