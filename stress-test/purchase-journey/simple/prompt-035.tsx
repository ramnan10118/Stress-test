import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { RadioGroup } from "@acko/radio";

const PAYMENT_METHODS = [
  { value: "upi", label: "UPI" },
  { value: "card", label: "Credit / Debit Card" },
  { value: "netbanking", label: "Net Banking" },
  { value: "wallet", label: "Wallet" },
];

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default function Prompt035() {
  const [method, setMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");

  const base = 4599;
  const addOns = 299;
  const gst = Math.round((base + addOns) * 0.18);
  const total = base + addOns + gst;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-default)", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Payment</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "85%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Premium summary */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Premium summary</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body-sm" color="muted">Comprehensive plan</Typography>
                <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{base.toLocaleString("en-IN")}</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body-sm" color="muted">Roadside Assistance</Typography>
                <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{addOns}</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body-sm" color="muted">GST (18%)</Typography>
                <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{gst}</Typography>
              </div>
              <Separator />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">Total</Typography>
                <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment methods */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Choose payment method</Typography>
            <RadioGroup
              name="payment-method"
              value={method}
              onChange={setMethod}
              items={PAYMENT_METHODS}
            />
            {method === "upi" && (
              <div style={{ marginTop: "var(--space-3)" }}>
                <input
                  type="text"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "var(--space-3)",
                    border: "1px solid var(--color-border-default)",
                    borderRadius: "var(--radius-lg)",
                    background: "var(--grey-white)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  aria-label="UPI ID"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Security note */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", justifyContent: "center" }}>
          <LockIcon />
          <Typography variant="caption" color="muted">256-bit SSL secured. PCI-DSS compliant.</Typography>
        </div>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Pay ₹{total.toLocaleString("en-IN")}
          </Button>
        </div>
      </div>
    </div>
  );
}
