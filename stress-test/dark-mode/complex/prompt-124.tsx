// Dark Mode — Payment screen all states
import { useState } from "react";
import { ChevronLeft, Lock, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { RadioGroup } from "@acko/radio";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { Skeleton } from "@acko/skeleton";

type PaymentState = "idle" | "processing" | "success" | "failure";

const PAYMENT_METHODS = [
  { value: "upi", label: "UPI" },
  { value: "card", label: "Credit / Debit Card" },
  { value: "netbanking", label: "Net Banking" },
];

const base = 4599;
const addOns = 299;
const gst = Math.round((base + addOns) * 0.18);
const total = base + addOns + gst;

function PaymentIdle({ onPay }: { onPay: () => void }) {
  const [method, setMethod] = useState("upi");

  return (
    <>
      <Card variant="default" padding="none">
        <CardContent>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Premium summary</Typography>
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
              <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card variant="default" padding="none">
        <CardContent>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Payment method</Typography>
          <RadioGroup name="payment" value={method} onChange={setMethod} items={PAYMENT_METHODS} />
        </CardContent>
      </Card>

      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", justifyContent: "center" }}>
        <Lock size={14} aria-hidden="true" style={{ color: "var(--color-success)" }} />
        <Typography variant="caption" color="muted">256-bit SSL secured · PCI-DSS compliant</Typography>
      </div>

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--color-surface-secondary)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))", zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" onClick={onPay} style={{ width: "100%", touchAction: "manipulation" }}>
            Pay ₹{total.toLocaleString("en-IN")}
          </Button>
        </div>
      </div>
    </>
  );
}

function PaymentProcessing() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-4)", padding: "var(--space-16) var(--space-4)", textAlign: "center" }}>
      <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Loader2 size={28} aria-hidden="true" style={{ color: "var(--color-primary)", animation: "spin 1s linear infinite" }} />
      </div>
      <div>
        <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Processing payment</Typography>
        <Typography variant="body-sm" color="muted">Please don't close this screen or press back.</Typography>
      </div>
      <div style={{ width: "100%", maxWidth: 300 }}>
        <Skeleton height={4} style={{ borderRadius: "var(--radius-full)" }} />
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function PaymentSuccess() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-4)", padding: "var(--space-16) var(--space-4)", textAlign: "center" }}>
      <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-success)" }}>
        <CheckCircle size={32} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <Typography variant="heading-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Payment successful</Typography>
        <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-1)" }}>Your policy is now active.</Typography>
        <Typography variant="body-sm" color="muted">Policy documents sent to rohan@email.com</Typography>
      </div>
      <Card variant="default" padding="none" style={{ width: "100%", maxWidth: 360 }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
            <Typography variant="body-sm" color="muted">Amount paid</Typography>
            <Typography variant="label-lg" weight="semibold" color="success" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body-sm" color="muted">Policy number</Typography>
            <Typography variant="label-md" weight="medium" color="strong">ACK-CAR-2024-11223</Typography>
          </div>
        </CardContent>
      </Card>
      <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation", width: "100%", maxWidth: 360 }}>
        View policy
      </Button>
    </div>
  );
}

function PaymentFailure({ onRetry }: { onRetry: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-4)", padding: "var(--space-16) var(--space-4)", textAlign: "center" }}>
      <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-error-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-error)" }}>
        <XCircle size={32} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <Typography variant="heading-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Payment failed</Typography>
        <Typography variant="body-sm" color="muted">Your bank declined the transaction. No amount was deducted.</Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%", maxWidth: 360 }}>
        <Button type="button" variant="primary" size="lg" onClick={onRetry} style={{ touchAction: "manipulation", width: "100%" }}>
          Retry payment
        </Button>
        <Button type="button" variant="outline" size="md" style={{ touchAction: "manipulation", width: "100%" }}>
          Try a different method
        </Button>
      </div>
      <Typography variant="caption" color="muted">
        If money was deducted, it will be refunded within 5–7 business days.
      </Typography>
    </div>
  );
}

export default function Prompt124() {
  const [state, setState] = useState<PaymentState>("idle");

  const simulatePayment = () => {
    setState("processing");
    setTimeout(() => setState(Math.random() > 0.5 ? "success" : "failure"), 2500);
  };

  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button aria-label="Go back" onClick={() => setState("idle")} style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <Typography variant="label-lg" weight="semibold" color="strong">Payment</Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <Badge color={state === "success" ? "green" : state === "failure" ? "red" : state === "processing" ? "yellow" : "blue"} size="sm">
            {state === "idle" ? "Ready" : state === "processing" ? "Processing" : state === "success" ? "Paid" : "Failed"}
          </Badge>
        </div>
      </header>

      {/* State selector (demo control) */}
      <div style={{ padding: "var(--space-3) var(--space-4)", background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", display: "flex", gap: "var(--space-2)", justifyContent: "center", flexWrap: "wrap" }}>
        {(["idle", "processing", "success", "failure"] as PaymentState[]).map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            style={{
              background: state === s ? "var(--color-primary)" : "transparent",
              border: "1px solid var(--color-border-default)",
              borderRadius: "var(--radius-full)",
              padding: "var(--space-1) var(--space-3)",
              cursor: "pointer",
              touchAction: "manipulation",
              color: state === s ? "var(--color-on-primary)" : "var(--color-text-muted)",
            }}
          >
            <Typography variant="caption" color={state === s ? undefined : "muted"}>{s.charAt(0).toUpperCase() + s.slice(1)}</Typography>
          </button>
        ))}
      </div>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", paddingBottom: state === "idle" ? "calc(var(--scale-72) + var(--space-5))" : "var(--space-5)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {state === "idle" && <PaymentIdle onPay={simulatePayment} />}
        {state === "processing" && <PaymentProcessing />}
        {state === "success" && <PaymentSuccess />}
        {state === "failure" && <PaymentFailure onRetry={simulatePayment} />}
      </main>
    </div>
  );
}
