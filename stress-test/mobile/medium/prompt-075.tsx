import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Separator } from "@acko/separator";
import { Switch } from "@acko/switch";
import { Alert } from "@acko/alert";

export default function Prompt075() {
  const [autoRenew, setAutoRenew] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const base = 4599;
  const zeroDep = 800;
  const rsa = 299;
  const ncb = -920;
  const gst = Math.round((base + zeroDep + rsa + ncb) * 0.18);
  const total = base + zeroDep + rsa + ncb + gst;

  if (confirmed) {
    return (
      <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-8) var(--space-4)", textAlign: "center", gap: "var(--space-5)" }}>
        <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-success)" }} aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
        </div>
        <Typography variant="heading-md" weight="bold" color="strong">Renewed!</Typography>
        <Typography variant="body-md" color="muted">Your car is covered until 2 Mar 2027. Policy sent to your email.</Typography>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>View policy</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="heading-sm" weight="bold" color="strong">Renew policy</Typography>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 100 }}>
        <Alert variant="warning">Expires in 7 days — 10 Mar 2026. Renew to stay covered.</Alert>

        {/* Vehicle card */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
              <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>🚗</div>
              <div>
                <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>Maruti Swift ZXI+ 2021</Typography>
                <Typography variant="caption" color="muted">MH 01 AB 1234 · Comprehensive</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium breakdown */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Premium breakdown</Typography>
            {[
              { label: "Comprehensive plan", amount: base },
              { label: "Zero Depreciation", amount: zeroDep },
              { label: "Roadside Assistance", amount: rsa },
              { label: "NCB discount (20%)", amount: ncb },
              { label: "GST (18%)", amount: gst },
            ].map((r, i) => (
              <div key={r.label}>
                {i > 0 && <Separator />}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-2) 0" }}>
                  <Typography variant="body-sm" color="muted">{r.label}</Typography>
                  <Typography variant="body-sm" color={r.amount < 0 ? "success" : "default"} style={{ fontVariantNumeric: "tabular-nums" }}>
                    {r.amount < 0 ? `−₹${Math.abs(r.amount)}` : `₹${r.amount}`}
                  </Typography>
                </div>
              </div>
            ))}
            <Separator />
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "var(--space-2)" }}>
              <Typography variant="label-md" weight="semibold" color="strong">Total</Typography>
              <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
            </div>
          </CardContent>
        </Card>

        {/* Auto-renew toggle */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <Typography variant="label-md" weight="semibold" color="default" style={{ display: "block" }}>Auto-renewal</Typography>
                <Typography variant="caption" color="muted">We'll renew 3 days before expiry</Typography>
              </div>
              <Switch checked={autoRenew} onChange={() => setAutoRenew((v) => !v)} aria-label="Toggle auto-renewal" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, padding: "var(--space-4)", background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={() => setConfirmed(true)}>
          Renew now · ₹{total.toLocaleString("en-IN")}
        </Button>
      </div>
    </div>
  );
}
