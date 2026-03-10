import { ChevronLeft, XCircle, Phone, MessageSquare } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Alert } from "@acko/alert";
import { Separator } from "@acko/separator";

const FAILURE_REASONS = [
  { icon: "💳", reason: "Insufficient balance", fix: "Add funds to your account or try a different payment method." },
  { icon: "🔒", reason: "Bank declined — 3D Secure failure", fix: "Authenticate via your bank's OTP. Try again or use UPI." },
  { icon: "⏱️", reason: "Session timed out", fix: "Payment was not processed. No amount was deducted." },
];

export default function Prompt049() {
  const total = 6704;
  const reason = FAILURE_REASONS[1];

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            aria-label="Go back"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Payment failed</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-8) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-5)" }}>
        {/* Failure icon */}
        <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-error-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-error)" }}>
          <XCircle size={28} strokeWidth={1.5} aria-hidden="true" />
        </div>

        <div style={{ textAlign: "center" }}>
          <Typography variant="heading-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            Payment failed
          </Typography>
          <Typography variant="body-md" color="muted">
            Your ₹{total.toLocaleString("en-IN")} payment was not processed. Your policy is <strong>not yet active.</strong>
          </Typography>
        </div>

        {/* Failure reason */}
        <Card variant="default" padding="md" style={{ width: "100%", border: "1px solid var(--color-error-border)" }}>
          <CardContent>
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0 }} aria-hidden="true">{reason.icon}</div>
              <div>
                <Typography variant="label-md" weight="semibold" color="error" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  {reason.reason}
                </Typography>
                <Typography variant="body-sm" color="muted">
                  {reason.fix}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assurance */}
        <Alert variant="info">
          No amount was deducted from your account. If you see a pending charge, it will be reversed within 3–5 business days.
        </Alert>

        {/* Actions */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Try again
          </Button>
          <Button type="button" variant="outline" size="md" style={{ width: "100%", touchAction: "manipulation" }}>
            Change payment method
          </Button>
        </div>

        <Separator />

        {/* Contact support */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center" }}>
          <Typography variant="body-sm" color="muted">Need help?</Typography>
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            <a href="tel:18002662256" style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", color: "var(--color-primary)", textDecoration: "none", touchAction: "manipulation" }}>
              <Phone size={14} aria-hidden="true" />
              <Typography variant="body-sm" color="primary">Call us</Typography>
            </a>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", color: "var(--color-primary)", textDecoration: "none", touchAction: "manipulation" }}>
              <MessageSquare size={14} aria-hidden="true" />
              <Typography variant="body-sm" color="primary">Live chat</Typography>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
