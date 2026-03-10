import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { RadioGroup } from "@acko/radio";
import { TextInput } from "@acko/text-input";
import { Alert } from "@acko/alert";
import { Badge } from "@acko/badge";

type PaymentState = "idle" | "processing" | "success" | "failure";

const TRUST_ITEMS = [
  { icon: "🔒", text: "256-bit SSL" },
  { icon: "✅", text: "PCI-DSS compliant" },
  { icon: "🏦", text: "RBI authorised" },
  { icon: "⚡", text: "Instant policy" },
];

const SAVED_CARDS = [
  { id: "visa", label: "Visa •••• 4242", sub: "Expires 08/27" },
  { id: "mc", label: "Mastercard •••• 1881", sub: "Expires 03/26" },
];

const BREAKDOWN = [
  { label: "Comprehensive plan", amount: 4599 },
  { label: "Zero Depreciation", amount: 800 },
  { label: "Roadside Assistance", amount: 299 },
  { label: "NCB discount (20%)", amount: -920, positive: false },
  { label: "GST (18%)", amount: 859 },
];
const TOTAL = BREAKDOWN.reduce((s, r) => s + r.amount, 0);

export default function Prompt052() {
  const [method, setMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [savedCard, setSavedCard] = useState("visa");
  const [state, setState] = useState<PaymentState>("idle");

  const handlePay = () => {
    setState("processing");
    setTimeout(() => setState("success"), 2000);
  };

  if (state === "success") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-8) var(--space-4)" }}>
        <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-5)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-success)" }} aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
          </svg>
        </div>
        <Typography variant="heading-md" weight="bold" color="strong" align="center" style={{ marginBottom: "var(--space-2)" }}>Payment successful!</Typography>
        <Typography variant="body-md" color="muted" align="center" style={{ marginBottom: "var(--space-6)" }}>₹{TOTAL.toLocaleString("en-IN")} paid. Your policy is now active.</Typography>
        <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>View policy</Button>
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
          <Typography variant="label-lg" weight="semibold" color="strong">Secure Payment</Typography>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <Typography variant="caption" color="success">SSL</Typography>
          </div>
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "90%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", maxWidth: 580, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Premium summary */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Premium summary</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {BREAKDOWN.map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body-sm" color="muted">{row.label}</Typography>
                  <Typography variant="body-sm" color={row.positive === false ? "success" : "default"} style={{ fontVariantNumeric: "tabular-nums" }}>
                    {row.amount < 0 ? `−₹${Math.abs(row.amount).toLocaleString("en-IN")}` : `₹${row.amount.toLocaleString("en-IN")}`}
                  </Typography>
                </div>
              ))}
              <Separator />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">Total</Typography>
                <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{TOTAL.toLocaleString("en-IN")}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment method */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Choose payment method</Typography>
            <RadioGroup
              name="method"
              value={method}
              onChange={setMethod}
              items={[
                { value: "upi", label: "UPI" },
                { value: "saved_card", label: "Saved card" },
                { value: "new_card", label: "New card" },
                { value: "netbanking", label: "Net banking" },
                { value: "wallet", label: "Wallet" },
              ]}
            />

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
                  <TextInput label="CVV" placeholder="•••" type="password" autoComplete="cc-csc" />
                </div>
                <TextInput label="Name on card" placeholder="As on the card" autoComplete="cc-name" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: "var(--space-5)", justifyContent: "center", flexWrap: "wrap" }}>
          {TRUST_ITEMS.map((t) => (
            <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
              <span aria-hidden="true">{t.icon}</span>
              <Typography variant="caption" color="muted">{t.text}</Typography>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={handlePay} disabled={state === "processing"}>
            {state === "processing" ? "Processing…" : `Pay ₹${TOTAL.toLocaleString("en-IN")} securely`}
          </Button>
          <Typography variant="caption" color="muted" align="center" style={{ display: "block", marginTop: "var(--space-2)" }}>
            By paying you agree to our terms. Policy issued instantly on success.
          </Typography>
        </div>
      </div>
    </div>
  );
}
