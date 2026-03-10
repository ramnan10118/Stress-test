// Dark Mode — Payment screen
import { useState } from "react";
import { ChevronLeft, Lock } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { RadioGroup } from "@acko/radio";
import { Separator } from "@acko/separator";

const PAYMENT_METHODS = [
  { value: "upi", label: "UPI" },
  { value: "card", label: "Credit / Debit Card" },
  { value: "netbanking", label: "Net Banking" },
];

export default function Prompt114() {
  const [method, setMethod] = useState("upi");

  const base = 4599;
  const addOns = 299;
  const gst = Math.round((base + addOns) * 0.18);
  const total = base + addOns + gst;

  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button aria-label="Go back" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <Typography variant="label-lg" weight="semibold" color="strong">Payment</Typography>
        <div style={{ width: "var(--scale-44)" }} />
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", paddingBottom: "calc(var(--scale-72) + var(--space-5))", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Premium summary */}
        <Card variant="default" padding="none">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
              Premium summary
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {[["Comprehensive plan", base], ["Roadside Assistance", addOns], ["GST (18%)", gst]].map(([label, amount]) => (
                <div key={String(label)} style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body-sm" color="muted">{label}</Typography>
                  <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{Number(amount).toLocaleString("en-IN")}</Typography>
                </div>
              ))}
              <Separator />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">Total</Typography>
                <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>
                  ₹{total.toLocaleString("en-IN")}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment methods */}
        <Card variant="default" padding="none">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
              Payment method
            </Typography>
            <RadioGroup name="payment" value={method} onChange={setMethod} items={PAYMENT_METHODS} />
          </CardContent>
        </Card>

        {/* Security */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", justifyContent: "center" }}>
          <Lock size={14} aria-hidden="true" style={{ color: "var(--color-success)" }} />
          <Typography variant="caption" color="muted">256-bit SSL secured · PCI-DSS compliant</Typography>
        </div>
      </main>

      {/* Bottom CTA */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--color-surface-secondary)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))", zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Pay ₹{total.toLocaleString("en-IN")}
          </Button>
        </div>
      </div>
    </div>
  );
}
