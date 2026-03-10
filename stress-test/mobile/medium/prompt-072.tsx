import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Accordion } from "@acko/accordion";
import { Separator } from "@acko/separator";

const KEY_DETAILS = [
  { label: "Policy number", value: "ACK-2026-4721839" },
  { label: "Plan type", value: "Comprehensive" },
  { label: "IDV", value: "₹5,82,000" },
  { label: "Add-ons", value: "Zero Dep · Roadside Assistance" },
  { label: "Premium paid", value: "₹5,637" },
  { label: "Valid from", value: "3 Mar 2026" },
  { label: "Valid till", value: "2 Mar 2027" },
];

const ACCORDION_ITEMS = [
  { value: "coverage", trigger: "What's covered?", content: "Own vehicle damage, third-party liability, personal accident (₹15L), fire, theft, natural calamities, zero depreciation, and roadside assistance." },
  { value: "exclusions", trigger: "What's not covered?", content: "Driving under influence, deliberate damage, wear and tear, mechanical/electrical failure (unless add-on), war and nuclear risk." },
  { value: "claim", trigger: "How to file a claim?", content: "1. Open ACKO app → 'File a Claim'. 2. Upload accident photos and FIR (if applicable). 3. Survey scheduled within 24 hrs. 4. Cashless repair at network garage or reimbursement within 7 days." },
  { value: "renewal", trigger: "When does it renew?", content: "Your policy renews on 2 Mar 2027. We'll remind you 30, 14, and 7 days before. Auto-renewal is off by default." },
];

export default function Prompt072() {
  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--color-primary)" }} />

      {/* Header */}
      <div style={{ background: "var(--color-primary)", padding: "0 var(--space-4) var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div>
          <Typography variant="heading-sm" weight="bold" color="default" style={{ display: "block" }}>Policy details</Typography>
          <Typography variant="caption" color="muted">Maruti Swift ZXI+ · MH 01 AB 1234</Typography>
        </div>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 80 }}>
        {/* Status + quick actions */}
        <Card variant="elevated" padding="md">
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
              <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>🚗</div>
                <div>
                  <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Active</Typography>
                  <Typography variant="caption" color="muted">Expires 2 Mar 2027</Typography>
                </div>
              </div>
              <Badge color="green" size="md">Covered</Badge>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
              <Button type="button" variant="primary" size="sm" style={{ flex: 1, touchAction: "manipulation" }}>File claim</Button>
              <Button type="button" variant="outline" size="sm" style={{ flex: 1, touchAction: "manipulation" }}>Download</Button>
              <Button type="button" variant="ghost" size="sm" style={{ flex: 1, touchAction: "manipulation" }}>Renew</Button>
            </div>
          </CardContent>
        </Card>

        {/* Key details */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Policy summary</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {KEY_DETAILS.map((d, i) => (
                <div key={d.label}>
                  {i > 0 && <Separator />}
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-2) 0", gap: "var(--space-2)" }}>
                    <Typography variant="body-sm" color="muted" style={{ flexShrink: 0 }}>{d.label}</Typography>
                    <Typography variant="label-sm" weight="semibold" color="strong" align="right">{d.value}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ accordion */}
        <div>
          <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>FAQs</Typography>
          <Accordion type="single" collapsible items={ACCORDION_ITEMS} />
        </div>
      </div>
    </div>
  );
}
