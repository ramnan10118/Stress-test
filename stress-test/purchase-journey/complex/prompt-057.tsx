import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Alert } from "@acko/alert";
import { Skeleton } from "@acko/skeleton";
import { Separator } from "@acko/separator";

type PaymentUIState = "idle" | "loading" | "processing" | "success" | "failure_declined" | "failure_timeout" | "failure_auth";

const TOTAL = 5637;

const STATE_OPTIONS: { value: PaymentUIState; label: string }[] = [
  { value: "idle", label: "Idle" },
  { value: "loading", label: "Loading" },
  { value: "processing", label: "Processing" },
  { value: "success", label: "Success" },
  { value: "failure_declined", label: "Declined" },
  { value: "failure_timeout", label: "Timeout" },
  { value: "failure_auth", label: "Auth failed" },
];

export default function Prompt057() {
  const [state, setState] = useState<PaymentUIState>("idle");

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Payment — all states</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", maxWidth: 520, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* State switcher */}
        <div>
          <Typography variant="label-md" weight="semibold" color="muted" style={{ display: "block", marginBottom: "var(--space-2)" }}>Switch state:</Typography>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            {STATE_OPTIONS.map((s) => (
              <button key={s.value} onClick={() => setState(s.value)} style={{ padding: "var(--space-1) var(--space-3)", borderRadius: "var(--radius-full)", border: "1px solid", borderColor: state === s.value ? "var(--color-primary)" : "var(--color-border-default)", background: state === s.value ? "var(--color-primary)" : "var(--grey-white)", cursor: "pointer", touchAction: "manipulation" }}>
                <Typography variant="body-sm" color="default">{s.label}</Typography>
              </button>
            ))}
          </div>
        </div>

        {/* Loading state */}
        {state === "loading" && (
          <Card variant="default" padding="lg">
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <Skeleton width="140px" height="18px" />
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
                    <Skeleton width="120px" height="14px" />
                    <Skeleton width="60px" height="14px" />
                  </div>
                ))}
                <Separator />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Skeleton width="80px" height="20px" />
                  <Skeleton width="90px" height="28px" />
                </div>
                <Skeleton width="100%" height="48px" />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Idle / default state */}
        {state === "idle" && (
          <Card variant="default" padding="lg">
            <CardContent>
              <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Premium summary</Typography>
              {[
                { label: "Comprehensive plan", amt: 4599 },
                { label: "Zero Depreciation", amt: 800 },
                { label: "NCB (−20%)", amt: -920 },
                { label: "GST (18%)", amt: 858 },
              ].map((r) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
                  <Typography variant="body-sm" color="muted">{r.label}</Typography>
                  <Typography variant="body-sm" color={r.amt < 0 ? "success" : "default"} style={{ fontVariantNumeric: "tabular-nums" }}>
                    {r.amt < 0 ? `−₹${Math.abs(r.amt)}` : `₹${r.amt}`}
                  </Typography>
                </div>
              ))}
              <Separator />
              <div style={{ display: "flex", justifyContent: "space-between", margin: "var(--space-3) 0" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">Total</Typography>
                <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{TOTAL.toLocaleString("en-IN")}</Typography>
              </div>
              <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={() => setState("processing")}>
                Pay ₹{TOTAL.toLocaleString("en-IN")}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Processing state */}
        {state === "processing" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-5)", padding: "var(--space-16) 0", textAlign: "center" }}>
            <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", border: "3px solid var(--color-primary-subtle)", borderTop: "3px solid var(--color-primary)", animation: "spin 1s linear infinite" }} aria-label="Processing" />
            <Typography variant="heading-sm" weight="semibold" color="strong">Processing your payment…</Typography>
            <Typography variant="body-md" color="muted">Please don't close this screen. This usually takes a few seconds.</Typography>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Success state */}
        {state === "success" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-10) 0", textAlign: "center" }}>
            <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-success)" }} aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <Typography variant="heading-md" weight="bold" color="strong">Payment successful!</Typography>
            <Typography variant="body-md" color="muted">₹{TOTAL.toLocaleString("en-IN")} paid. Your policy is now active and document is in your email.</Typography>
            <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>View policy</Button>
          </div>
        )}

        {/* Failure states */}
        {(state === "failure_declined" || state === "failure_timeout" || state === "failure_auth") && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-8) 0", textAlign: "center" }}>
              <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-error-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-error)" }} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <Typography variant="heading-sm" weight="bold" color="strong">Payment failed</Typography>
              <Typography variant="body-md" color="muted">
                {state === "failure_declined" && "Your card was declined. Check your balance or try a different card."}
                {state === "failure_timeout" && "The payment timed out. No amount was charged. Please try again."}
                {state === "failure_auth" && "3D Secure authentication failed. Please authenticate via your bank OTP."}
              </Typography>
            </div>
            <Alert variant="info">No amount was deducted. Any pending charge will reverse within 3–5 business days.</Alert>
            <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={() => setState("idle")}>Try again</Button>
            <Button type="button" variant="outline" size="md" style={{ width: "100%", touchAction: "manipulation" }}>Change payment method</Button>
          </div>
        )}
      </main>
    </div>
  );
}
