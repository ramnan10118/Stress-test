import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Progress } from "@acko/progress";

const STEPS = [
  { id: "registered", label: "Claim registered", date: "28 Feb 2026, 2:31 PM", done: true },
  { id: "inspection", label: "Survey scheduled", date: "1 Mar 2026, 11:00 AM", done: true },
  { id: "repair", label: "Car at garage", date: "2 Mar 2026", done: true },
  { id: "approval", label: "Repair approval pending", date: "Expected 4 Mar", done: false },
  { id: "settled", label: "Claim settled", date: "—", done: false },
];

export default function Prompt067() {
  const doneCount = STEPS.filter((s) => s.done).length;
  const progress = Math.round((doneCount / STEPS.length) * 100);

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", background: "var(--color-surface)", minHeight: "100vh" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="heading-sm" weight="bold" color="strong">Claim status</Typography>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 80 }}>
        {/* Claim summary */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-3)" }}>
              <div>
                <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>Claim #CL-2026-001</Typography>
                <Typography variant="caption" color="muted">Accidental damage · Maruti Swift</Typography>
              </div>
              <Badge color="orange" size="sm">In progress</Badge>
            </div>
            <div style={{ marginBottom: "var(--space-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-1)" }}>
                <Typography variant="caption" color="muted">Progress</Typography>
                <Typography variant="caption" weight="semibold" color="default">{doneCount}/{STEPS.length} steps</Typography>
              </div>
              <Progress value={progress} />
            </div>
            <Typography variant="caption" color="muted">Estimated settlement: 7–10 days from garage repair</Typography>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Claim journey</Typography>
            <div style={{ position: "relative" }}>
              {STEPS.map((s, i) => (
                <div key={s.id} style={{ display: "flex", gap: "var(--space-3)", position: "relative", paddingBottom: i < STEPS.length - 1 ? "var(--space-5)" : 0 }}>
                  {/* Vertical line */}
                  {i < STEPS.length - 1 && (
                    <div style={{ position: "absolute", left: 11, top: 24, bottom: 0, width: 2, background: s.done ? "var(--color-primary)" : "var(--color-border-subtle)" }} />
                  )}
                  {/* Dot */}
                  <div style={{ width: 24, height: 24, borderRadius: "var(--radius-full)", background: s.done ? "var(--color-primary)" : "var(--color-border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                    {s.done ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                    ) : (
                      <div style={{ width: 8, height: 8, borderRadius: "var(--radius-full)", background: "var(--color-border-default)" }} />
                    )}
                  </div>
                  <div style={{ paddingTop: 2 }}>
                    <Typography variant="label-sm" weight="semibold" color={s.done ? "strong" : "muted"} style={{ display: "block" }}>{s.label}</Typography>
                    <Typography variant="caption" color="muted">{s.date}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Button type="button" variant="outline" size="md" style={{ width: "100%", touchAction: "manipulation" }}>Contact garage</Button>
        <Button type="button" variant="ghost" size="md" style={{ width: "100%", touchAction: "manipulation" }}>View documents</Button>
      </div>
    </div>
  );
}
