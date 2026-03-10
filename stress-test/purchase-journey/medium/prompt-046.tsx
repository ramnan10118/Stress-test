import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

const CheckCircleIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const COVERAGE_HIGHLIGHTS = [
  { icon: "🚗", title: "Own damage cover", body: "Up to IDV of ₹5,82,000" },
  { icon: "🛡️", title: "Third-party liability", body: "Unlimited personal injury, ₹7.5L property" },
  { icon: "👤", title: "Personal accident", body: "₹15 lakh cover for owner-driver" },
  { icon: "🚐", title: "Roadside assistance", body: "24×7, anywhere in India" },
];

const NEXT_STEPS = [
  { num: "1", text: "Policy document emailed to you@example.com — check spam if not in inbox." },
  { num: "2", text: "Share your policy number for any roadside assistance — ACK-2026-4721839." },
  { num: "3", text: "Download the ACKO app to file claims and track your policy instantly." },
];

export default function Prompt046() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={24} style={{ height: "var(--scale-24)", width: "auto" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-8) var(--space-4)", maxWidth: 520, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* Success */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)" }}>
          <CheckCircleIcon />
          <div>
            <Typography variant="heading-xl" weight="semibold" color="strong" style={{ margin: "0 0 var(--space-2)", display: "block" }}>
              You're covered!
            </Typography>
            <Typography variant="body-md" color="muted">
              Policy active from today. Document sent to your email and WhatsApp.
            </Typography>
          </div>
          <Badge color="green" size="md">Active · 3 Mar 2026 – 2 Mar 2027</Badge>
        </div>

        {/* Policy summary */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
              <Typography variant="label-lg" weight="semibold" color="strong">Policy summary</Typography>
              <Typography variant="caption" color="muted">ACK-2026-4721839</Typography>
            </div>
            {[
              { label: "Vehicle", value: "MH 01 AB 1234" },
              { label: "Make & model", value: "Maruti Swift ZXI+ 2021" },
              { label: "Plan", value: "Comprehensive" },
              { label: "Premium paid", value: "₹6,704" },
              { label: "IDV", value: "₹5,82,000" },
            ].map((d, i) => (
              <div key={d.label}>
                {i > 0 && <Separator />}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-2) 0" }}>
                  <Typography variant="body-sm" color="muted">{d.label}</Typography>
                  <Typography variant="label-md" weight="semibold" color="strong">{d.value}</Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Coverage highlights */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>What you're covered for</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
            {COVERAGE_HIGHLIGHTS.map((c) => (
              <Card key={c.title} variant="default" padding="sm">
                <CardContent>
                  <div style={{ marginBottom: "var(--space-1)" }} aria-hidden="true">{c.icon}</div>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{c.title}</Typography>
                  <Typography variant="caption" color="muted">{c.body}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next steps */}
        <div>
          <Typography variant="label-lg" weight="semibold" style={{ color: "var(--color-text-strong)", display: "block", marginBottom: "var(--space-3)" }}>Next steps</Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {NEXT_STEPS.map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                <div style={{ width: "var(--scale-24)", height: "var(--scale-24)", borderRadius: "var(--radius-full)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <Typography variant="caption" weight="semibold" style={{ color: "var(--color-primary)" }}>{s.num}</Typography>
                </div>
                <Typography variant="body-sm" style={{ color: "var(--color-text-secondary)" }}>{s.text}</Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)", touchAction: "manipulation" }}>
            <DownloadIcon />
            Download policy
          </Button>
          <Button type="button" variant="outline" size="md" style={{ width: "100%", touchAction: "manipulation" }}>
            Share via WhatsApp
          </Button>
        </div>
      </main>
    </div>
  );
}
