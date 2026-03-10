import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

const POLICY_DETAILS = [
  { label: "Policy number", value: "ACK-2026-4721839" },
  { label: "Vehicle", value: "MH 01 AB 1234" },
  { label: "Make & model", value: "Maruti Swift ZXI+ 2021" },
  { label: "Plan", value: "Comprehensive" },
  { label: "Cover from", value: "3 Mar 2026" },
  { label: "Cover until", value: "2 Mar 2027" },
  { label: "IDV", value: "₹5,82,000" },
];

const CheckCircleIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Prompt036() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={24} style={{ height: "var(--scale-24)", width: "auto" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-8) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
        {/* Success state */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)" }}>
          <CheckCircleIcon />
          <div>
            <Typography variant="heading-xl" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)" }}>
              You're covered!
            </Typography>
            <Typography variant="body-md" color="muted">
              Your policy is active. The document has been sent to your email and WhatsApp.
            </Typography>
          </div>
          <div style={{ marginTop: "var(--space-1)" }}>
            <Badge color="green" size="md">Active from today</Badge>
          </div>
        </div>

        {/* Policy details */}
        <Card variant="default" padding="lg" style={{ width: "100%" }}>
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Policy summary</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {POLICY_DETAILS.map((d, i) => (
                <div key={d.label}>
                  {i > 0 && <div style={{ height: 1, background: "var(--color-border-subtle)", marginBottom: "var(--space-3)" }} />}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Typography variant="body-sm" color="muted">{d.label}</Typography>
                    <Typography variant="label-md" weight="semibold" color="strong" align="right">{d.value}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Button type="button" variant="primary" size="lg" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)", touchAction: "manipulation" }}>
            <DownloadIcon />
            Download policy document
          </Button>
          <Button type="button" variant="ghost" size="md" style={{ width: "100%", touchAction: "manipulation" }}>
            Share via WhatsApp
          </Button>
        </div>
      </main>
    </div>
  );
}
