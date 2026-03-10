import { CheckCircle, Download, Home } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Button } from "@acko/button";

const LINE_ITEMS = [
  { label: "Own damage premium", value: "₹4,218" },
  { label: "Third party premium", value: "₹2,094" },
  { label: "Zero depreciation add-on", value: "₹1,240" },
  { label: "GST (18%)", value: "₹1,359" },
];

export default function Prompt180() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "var(--grey-white)",
        borderBottom: "1px solid var(--color-border-subtle)",
        padding: "0 var(--space-4)",
        height: "var(--scale-56)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
          alt="ACKO"
          style={{ height: "var(--scale-24)", width: "auto" }}
        />
      </header>

      <main style={{
        flex: 1,
        padding: "var(--space-10) var(--space-5)",
        paddingBottom: "var(--space-24)",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
        alignItems: "center",
      }}>
        {/* Success hero — sparse content pattern */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", textAlign: "center" }}>
          <div style={{
            width: "var(--scale-64)",
            height: "var(--scale-64)",
            borderRadius: "var(--radius-full)",
            background: "var(--color-success-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-success)",
          }}>
            <CheckCircle size={32} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <Typography variant="heading-xl" weight="bold" color="strong" align="center" as="h1">
              Payment successful
            </Typography>
            <Typography variant="body-md" color="muted" align="center">
              Your car insurance is now active. A receipt has been sent to your email.
            </Typography>
          </div>

          <Badge color="green" size="md">Paid on 3 Mar 2026</Badge>
        </div>

        {/* Receipt card */}
        <Card variant="default" padding="md" style={{ width: "100%" }}>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
            Payment receipt
          </Typography>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
            {LINE_ITEMS.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body-sm" color="muted">{label}</Typography>
                <Typography variant="body-sm" weight="medium" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {value}
                </Typography>
              </div>
            ))}
          </div>

          <Separator />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "var(--space-4)" }}>
            <Typography variant="label-lg" weight="semibold" color="strong">Total paid</Typography>
            <Typography variant="heading-md" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
              ₹8,911
            </Typography>
          </div>
        </Card>

        {/* Payment details card */}
        <Card variant="demoted" padding="md" style={{ width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
            {[
              { label: "Transaction ID", value: "TXN-20260303-7891" },
              { label: "Payment method", value: "UPI — Google Pay" },
              { label: "Policy number", value: "ACK-2026-4721839" },
              { label: "Vehicle", value: "MH 01 AB 1234" },
            ].map(({ label, value }) => (
              <div key={label}>
                <Typography variant="caption" color="muted" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  {label}
                </Typography>
                <Typography variant="label-md" weight="semibold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {value}
                </Typography>
              </div>
            ))}
          </div>
        </Card>

        {/* Actions */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="lg" fullWidth>
            <Download size={16} aria-hidden="true" style={{ marginRight: "var(--space-2)" }} />
            Download receipt
          </Button>
          <Button type="button" variant="outline" size="md" fullWidth>
            <Home size={16} aria-hidden="true" style={{ marginRight: "var(--space-2)" }} />
            Go to home
          </Button>
        </div>
      </main>
    </div>
  );
}
