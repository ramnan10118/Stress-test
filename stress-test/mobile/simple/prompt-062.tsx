import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Separator } from "@acko/separator";

const DETAILS = [
  { label: "Policy number", value: "ACK-2026-4721839" },
  { label: "Insurer", value: "ACKO General Insurance" },
  { label: "Vehicle", value: "MH 01 AB 1234" },
  { label: "Make & model", value: "Maruti Swift ZXI+ 2021" },
  { label: "Plan type", value: "Comprehensive" },
  { label: "Add-ons", value: "Zero Dep, Roadside Assistance" },
  { label: "IDV", value: "₹5,82,000" },
  { label: "Premium paid", value: "₹5,637" },
  { label: "Valid from", value: "3 Mar 2026" },
  { label: "Valid till", value: "2 Mar 2027" },
];

export default function Prompt062() {
  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--color-primary)" }} />

      {/* Header */}
      <div style={{ background: "var(--color-primary)", padding: "0 var(--space-4) var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--grey-white)" }}><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div>
          <Typography variant="heading-sm" weight="bold" color="default" style={{ display: "block" }}>Policy details</Typography>
          <Typography variant="caption" color="muted">Car Insurance</Typography>
        </div>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 80 }}>
        {/* Status card */}
        <Card variant="elevated" padding="md">
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>🚗</div>
                <div>
                  <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Maruti Swift</Typography>
                  <Typography variant="caption" color="muted">MH 01 AB 1234</Typography>
                </div>
              </div>
              <Badge color="green" size="md">Active</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Policy info */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Policy information</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {DETAILS.map((d, i) => (
                <div key={d.label}>
                  {i > 0 && <Separator />}
                  <div style={{ display: "flex", justifyContent: "space-between", paddingTop: i > 0 ? "var(--space-3)" : 0, gap: "var(--space-2)" }}>
                    <Typography variant="body-sm" color="muted" style={{ flexShrink: 0 }}>{d.label}</Typography>
                    <Typography variant="label-sm" weight="semibold" color="strong" align="right">{d.value}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="md" style={{ width: "100%", touchAction: "manipulation" }}>File a claim</Button>
          <Button type="button" variant="outline" size="md" style={{ width: "100%", touchAction: "manipulation" }}>Download policy PDF</Button>
          <Button type="button" variant="ghost" size="md" style={{ width: "100%", touchAction: "manipulation" }}>Share via WhatsApp</Button>
        </div>
      </div>
    </div>
  );
}
