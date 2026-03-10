import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { RadioGroup } from "@acko/radio";
import { TextInput } from "@acko/text-input";

const TRUST_BADGES = [
  { icon: "🔒", label: "256-bit SSL" },
  { icon: "✅", label: "PCI-DSS" },
  { icon: "🏦", label: "RBI certified" },
  { icon: "⚡", label: "Instant policy" },
];

const SAVED_CARDS = [
  { id: "visa", label: "Visa •••• 4242", sub: "Expires 08/27" },
  { id: "mc", label: "Mastercard •••• 1881", sub: "Expires 03/26" },
];

const PAYMENT_METHODS = [
  { value: "upi", label: "UPI" },
  { value: "saved_card", label: "Saved card" },
  { value: "new_card", label: "New card" },
  { value: "netbanking", label: "Net banking" },
];

export default function Prompt043() {
  const [method, setMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [savedCard, setSavedCard] = useState("visa");

  const base = 4599;
  const rsa = 299;
  const zeroDep = 800;
  const gst = Math.round((base + rsa + zeroDep) * 0.18);
  const total = base + rsa + zeroDep + gst;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Payment</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "88%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", maxWidth: 520, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Premium summary */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Premium summary</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {[
                { label: "Comprehensive plan", amount: base },
                { label: "Zero Depreciation", amount: zeroDep },
                { label: "Roadside Assistance", amount: rsa },
                { label: "GST (18%)", amount: gst },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body-sm" color="muted">{row.label}</Typography>
                  <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{row.amount.toLocaleString("en-IN")}</Typography>
                </div>
              ))}
              <Separator />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">Total</Typography>
                <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment method */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Payment method</Typography>
            <RadioGroup name="payment-method" value={method} onChange={setMethod} items={PAYMENT_METHODS} />

            {method === "upi" && (
              <div style={{ marginTop: "var(--space-3)" }}>
                <TextInput label="UPI ID" placeholder="yourname@upi" value={upiId} onChange={setUpiId} autoComplete="off" />
              </div>
            )}

            {method === "saved_card" && (
              <div style={{ marginTop: "var(--space-3)" }}>
                <RadioGroup name="saved-card" value={savedCard} onChange={setSavedCard} items={SAVED_CARDS} />
              </div>
            )}

            {method === "new_card" && (
              <div style={{ marginTop: "var(--space-3)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <TextInput label="Card number" placeholder="1234 5678 9012 3456" autoComplete="cc-number" />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                  <TextInput label="Expiry" placeholder="MM / YY" autoComplete="cc-exp" />
                  <TextInput label="CVV" placeholder="•••" autoComplete="cc-csc" type="password" />
                </div>
                <TextInput label="Name on card" placeholder="As on the card" autoComplete="cc-name" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          {TRUST_BADGES.map((b) => (
            <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
              <span aria-hidden="true">{b.icon}</span>
              <Typography variant="caption" color="muted">{b.label}</Typography>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Pay ₹{total.toLocaleString("en-IN")} securely
          </Button>
        </div>
      </div>
    </div>
  );
}
