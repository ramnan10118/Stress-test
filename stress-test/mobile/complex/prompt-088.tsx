import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Progress } from "@acko/progress";
import { Separator } from "@acko/separator";

const CLAIM = {
  id: "CL-2026-001",
  type: "Accidental damage",
  vehicle: "Maruti Swift ZXI+ · MH 01 AB 1234",
  filedOn: "28 Feb 2026",
  estimatedAmount: 28450,
  garage: "AutoPlex Service, Andheri West, Mumbai",
};

const TIMELINE = [
  { id: "registered", label: "Claim registered", date: "28 Feb, 2:31 PM", note: "Claim ID generated, surveyor assigned.", done: true },
  { id: "surveyor", label: "Surveyor visited", date: "1 Mar, 11:20 AM", note: "Physical inspection done. Damage photos verified.", done: true },
  { id: "approval", label: "Repair approved", date: "1 Mar, 5:14 PM", note: "Repair estimate of ₹28,450 approved by ACKO.", done: true },
  { id: "repair", label: "Car at garage", date: "2 Mar 2026", note: "Vehicle checked in at AutoPlex Service, Andheri West.", done: true },
  { id: "quality", label: "Quality check", date: "Expected 5 Mar", note: "ACKO inspector will verify repairs before delivery.", done: false },
  { id: "settled", label: "Claim settled", date: "—", note: "Payment will be released directly to the garage.", done: false },
];

const doneCount = TIMELINE.filter((t) => t.done).length;
const progress = Math.round((doneCount / TIMELINE.length) * 100);

export default function Prompt088() {
  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--color-primary)" }} />

      {/* Header */}
      <div style={{ background: "var(--color-primary)", padding: "0 var(--space-4) var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div style={{ flex: 1 }}>
          <Typography variant="heading-sm" weight="bold" style={{ color: "var(--grey-white)", display: "block" }}>Claim status</Typography>
          <Typography variant="caption" style={{ color: "var(--purple-200)" }}>{CLAIM.id} · {CLAIM.type}</Typography>
        </div>
        <Badge color="orange" size="sm">In progress</Badge>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 100 }}>
        {/* Progress summary */}
        <Card variant="elevated" padding="md">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
              <div>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Claim progress</Typography>
                <Typography variant="caption" color="muted">{doneCount} of {TIMELINE.length} steps completed</Typography>
              </div>
              <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>{progress}%</Typography>
            </div>
            <Progress value={progress} />
            <Typography variant="caption" color="muted" style={{ marginTop: "var(--space-2)", display: "block" }}>
              Estimated settlement: 7–10 days from today
            </Typography>
          </CardContent>
        </Card>

        {/* Claim details */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Claim details</Typography>
            {[
              { label: "Claim ID", value: CLAIM.id },
              { label: "Vehicle", value: CLAIM.vehicle },
              { label: "Filed on", value: CLAIM.filedOn },
              { label: "Repair amount", value: `₹${CLAIM.estimatedAmount.toLocaleString("en-IN")}` },
              { label: "Garage", value: CLAIM.garage },
            ].map((row, i) => (
              <div key={row.label}>
                {i > 0 && <Separator />}
                <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-2)", padding: i > 0 ? "var(--space-2) 0" : "0 0 var(--space-2)" }}>
                  <Typography variant="body-sm" color="muted" style={{ flexShrink: 0 }}>{row.label}</Typography>
                  <Typography variant="label-sm" weight="semibold" color="strong" align="right">{row.value}</Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Journey</Typography>
            <div style={{ position: "relative" }}>
              {TIMELINE.map((t, i) => (
                <div key={t.id} style={{ display: "flex", gap: "var(--space-3)", position: "relative", paddingBottom: i < TIMELINE.length - 1 ? "var(--space-5)" : 0 }}>
                  {i < TIMELINE.length - 1 && (
                    <div style={{ position: "absolute", left: 11, top: 24, bottom: 0, width: 2, background: t.done ? "var(--color-primary)" : "var(--color-border-subtle)" }} />
                  )}
                  <div style={{ width: 24, height: 24, borderRadius: "var(--radius-full)", background: t.done ? "var(--color-primary)" : "var(--color-border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                    {t.done ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                    ) : (
                      <div style={{ width: 8, height: 8, borderRadius: "var(--radius-full)", background: "var(--color-border-default)" }} />
                    )}
                  </div>
                  <div style={{ paddingTop: 2 }}>
                    <Typography variant="label-sm" weight="semibold" color={t.done ? "strong" : "muted"} style={{ display: "block" }}>{t.label}</Typography>
                    <Typography variant="caption" color="muted" style={{ display: "block" }}>{t.date}</Typography>
                    <Typography variant="caption" color="muted" style={{ marginTop: 2, display: "block" }}>{t.note}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, padding: "var(--space-3) var(--space-4)", background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", display: "flex", gap: "var(--space-3)" }}>
        <Button type="button" variant="outline" size="md" style={{ flex: 1, touchAction: "manipulation" }}>Call garage</Button>
        <Button type="button" variant="primary" size="md" style={{ flex: 1, touchAction: "manipulation" }}>Chat support</Button>
      </div>
    </div>
  );
}
