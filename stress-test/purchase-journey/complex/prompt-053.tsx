import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { Accordion } from "@acko/accordion";

const CheckCircleIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
  </svg>
);

const POLICY_SUMMARY = [
  { label: "Policy number", value: "ACK-2026-4721839" },
  { label: "Policyholder", value: "Arjun Mehta" },
  { label: "Vehicle", value: "MH 01 AB 1234" },
  { label: "Make & model", value: "Maruti Swift ZXI+ 2021" },
  { label: "Plan", value: "Comprehensive" },
  { label: "Add-ons", value: "Zero Dep, Roadside Assistance" },
  { label: "Premium paid", value: "₹5,637" },
  { label: "Cover period", value: "3 Mar 2026 – 2 Mar 2027" },
  { label: "IDV", value: "₹5,82,000" },
];

const COVERAGE = [
  { icon: "🚗", title: "Own damage", value: "Up to IDV ₹5,82,000" },
  { icon: "🛡️", title: "Third-party", value: "Unlimited injury cover" },
  { icon: "👤", title: "Personal accident", value: "₹15 lakh, owner-driver" },
  { icon: "🛡️", title: "Zero depreciation", value: "No deduction on parts" },
  { icon: "🚐", title: "Roadside assistance", value: "24×7 pan-India" },
  { icon: "🔥", title: "Fire & theft", value: "Full IDV payout" },
];

const FAQ = [
  { value: "q1", trigger: "How do I file a claim?", content: "Open the ACKO app → tap File a Claim → upload photos → submit. Most claims approved in 30 minutes." },
  { value: "q2", trigger: "Can I add more add-ons now?", content: "Add-ons can only be added at the time of new purchase or renewal. You can add them when your policy renews in March 2027." },
  { value: "q3", trigger: "Where do I find my cashless garages?", content: "In the ACKO app → Garages, or call 1800-266-2256. There are 5,000+ network garages across India." },
];

export default function Prompt053() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={24} style={{ height: "var(--scale-24)", width: "auto" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-8) var(--space-4)", maxWidth: 640, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {/* Success */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)" }}>
          <CheckCircleIcon />
          <div>
            <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)", display: "block" }}>Your car is covered!</Typography>
            <Typography variant="body-lg" color="muted">Policy active now. Document sent to arjun@example.com and WhatsApp.</Typography>
          </div>
          <Badge color="green" size="md">Active · 3 Mar 2026</Badge>
        </div>

        {/* Policy summary */}
        <Card variant="default" padding="lg">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Policy summary</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {POLICY_SUMMARY.map((d, i) => (
                <div key={d.label}>
                  {i > 0 && <div style={{ height: 1, background: "var(--color-border-subtle)", marginBottom: "var(--space-3)" }} />}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-4)" }}>
                    <Typography variant="body-sm" color="muted" style={{ flexShrink: 0 }}>{d.label}</Typography>
                    <Typography variant="label-md" weight="semibold" color="strong" align="right">{d.value}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Coverage grid */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>What's covered</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }} className="coverage-grid">
            {COVERAGE.map((c) => (
              <Card key={c.title} variant="default" padding="sm">
                <CardContent>
                  <div style={{ marginBottom: "var(--space-1)" }} aria-hidden="true">{c.icon}</div>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{c.title}</Typography>
                  <Typography variant="caption" color="muted">{c.value}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>What happens next?</Typography>
          <Accordion type="single" items={FAQ} collapsible defaultValue="q1" />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)", touchAction: "manipulation" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download policy PDF
          </Button>
          <Button type="button" variant="outline" size="md" style={{ width: "100%", touchAction: "manipulation" }}>Share via WhatsApp</Button>
          <Button type="button" variant="ghost" size="sm" style={{ width: "100%", touchAction: "manipulation" }}>Go to home</Button>
        </div>
      </main>

      <style>{`
        @media (min-width: 480px) {
          .coverage-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
