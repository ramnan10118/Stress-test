import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Switch } from "@acko/switch";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { Alert } from "@acko/alert";

const ADD_ONS = [
  { id: "zero_dep", label: "Zero Depreciation", price: 800, enabled: true },
  { id: "rsa", label: "Roadside Assistance", price: 299, enabled: true },
  { id: "engine", label: "Engine Protection", price: 550, enabled: false },
  { id: "tyres", label: "Tyre Protection", price: 399, enabled: false },
];

export default function Prompt060() {
  const [addOns, setAddOns] = useState(ADD_ONS);
  const [ncb, setNcb] = useState(true);
  const [step, setStep] = useState<"review" | "success">("review");

  const toggle = (id: string) => setAddOns((prev) => prev.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a)));

  const base = 4599;
  const addOnTotal = addOns.filter((a) => a.enabled).reduce((s, a) => s + a.price, 0);
  const ncbAmt = ncb ? -920 : 0;
  const gst = Math.round((base + addOnTotal + ncbAmt) * 0.18);
  const total = base + addOnTotal + ncbAmt + gst;

  if (step === "success") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-8) var(--space-4)", gap: "var(--space-5)", textAlign: "center" }}>
        <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-success)" }} aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
        </div>
        <div>
          <Typography variant="heading-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Renewed successfully!</Typography>
          <Typography variant="body-md" color="muted">Your car is covered for another year. Policy document sent to your email.</Typography>
        </div>
        <Badge color="green" size="md">Active · 3 Mar 2026 – 2 Mar 2027</Badge>
        <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>Download policy</Button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div style={{ textAlign: "center" }}>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Renewal</Typography>
            <Typography variant="caption" color="muted">Expires in 7 days</Typography>
          </div>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4) 110px", maxWidth: 580, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <Alert variant="warning">Your policy for MH 01 AB 1234 expires on 10 Mar 2026. Renew now to stay covered.</Alert>

        {/* Current policy */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Renewing for</Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Maruti Swift ZXI+ · 2021</Typography>
                <Typography variant="body-sm" color="muted">MH 01 AB 1234 · Comprehensive</Typography>
              </div>
              <Badge color="orange" size="sm">Expiring soon</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Add-ons */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Add-ons (toggle to add/remove)</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {addOns.map((a) => (
                <div key={a.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <Typography variant="label-md" weight="semibold" color="default" style={{ display: "block" }}>{a.label}</Typography>
                    <Typography variant="caption" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>+₹{a.price}/yr</Typography>
                  </div>
                  <Switch checked={a.enabled} onChange={() => toggle(a.id)} aria-label={`${a.enabled ? "Remove" : "Add"} ${a.label}`} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* NCB */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <Typography variant="label-md" weight="semibold" color="default" style={{ display: "block" }}>NCB discount (20%)</Typography>
                <Typography variant="caption" color="muted">You made no claims this year</Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Typography variant="label-md" color="success" style={{ fontVariantNumeric: "tabular-nums" }}>-₹920</Typography>
                <Switch checked={ncb} onChange={() => setNcb((v) => !v)} aria-label={`${ncb ? "Remove" : "Apply"} NCB discount`} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium breakdown */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Premium breakdown</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><Typography variant="body-sm" color="muted">Base premium</Typography><Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{base.toLocaleString("en-IN")}</Typography></div>
              {addOns.filter((a) => a.enabled).map((a) => (
                <div key={a.id} style={{ display: "flex", justifyContent: "space-between" }}><Typography variant="body-sm" color="muted">{a.label}</Typography><Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{a.price}</Typography></div>
              ))}
              {ncb && <div style={{ display: "flex", justifyContent: "space-between" }}><Typography variant="body-sm" color="success">NCB (20%)</Typography><Typography variant="body-sm" color="success" style={{ fontVariantNumeric: "tabular-nums" }}>−₹920</Typography></div>}
              <div style={{ display: "flex", justifyContent: "space-between" }}><Typography variant="body-sm" color="muted">GST (18%)</Typography><Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{gst}</Typography></div>
              <Separator />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">Total</Typography>
                <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={() => setStep("success")}>
            Renew now · ₹{total.toLocaleString("en-IN")}
          </Button>
        </div>
      </div>
    </div>
  );
}
