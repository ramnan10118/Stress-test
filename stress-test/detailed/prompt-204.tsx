import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Separator } from "@acko/separator";
import { Button } from "@acko/button";

const POLICY_DETAILS = [
  { label: "Policy number", value: "ACK-2026-4721839" },
  { label: "Vehicle", value: "MH 01 AB 1234" },
  { label: "Make & model", value: "Maruti Swift ZXI+ 2021" },
  { label: "Plan", value: "Comprehensive" },
  { label: "Cover from", value: "3 Mar 2026" },
  { label: "Cover until", value: "2 Mar 2027" },
  { label: "Premium paid", value: "₹5,782" },
];

export default function Prompt204() {
  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "var(--color-surface-secondary)",
        borderBottom: "1px solid var(--color-border-subtle)",
        padding: "0 var(--space-4)",
        height: "var(--scale-56)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg"
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

          <Typography variant="display-sm" weight="bold" color="strong" align="center" as="h1">
            Your policy is active!
          </Typography>
          <Typography variant="body-md" color="muted" align="center">
            Coverage starts immediately. Your documents have been sent to your email and WhatsApp.
          </Typography>
        </div>

        {/* Summary card — elevated dark surface */}
        <Card variant="elevated" padding="md" style={{ width: "100%" }}>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
            Policy summary
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {POLICY_DETAILS.map(({ label, value }, i) => (
              <div key={label}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-4)" }}>
                  <Typography variant="body-sm" color="muted">{label}</Typography>
                  <Typography variant="body-sm" weight="medium" color="strong" align="right" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {value}
                  </Typography>
                </div>
                {i < POLICY_DETAILS.length - 1 && (
                  <div style={{ marginTop: "var(--space-3)" }}><Separator /></div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Actions */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="lg" fullWidth>
            <Download size={16} aria-hidden="true" style={{ marginRight: "var(--space-2)" }} />
            Download policy
          </Button>
          <Button type="button" variant="ghost" size="md" fullWidth>
            Go to dashboard
            <ArrowRight size={16} aria-hidden="true" style={{ marginLeft: "var(--space-2)" }} />
          </Button>
        </div>

        <Typography variant="body-sm" color="muted" align="center">
          Questions? Call us at 1800-266-2256 (toll free, 24×7)
        </Typography>
      </main>
    </div>
  );
}
