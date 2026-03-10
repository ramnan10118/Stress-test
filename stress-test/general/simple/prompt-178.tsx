import { ChevronLeft, FileText, Clock, CheckCircle } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Progress } from "@acko/progress";
import { Button } from "@acko/button";

const TIMELINE = [
  { label: "Claim filed", date: "28 Feb 2026", done: true },
  { label: "Documents verified", date: "1 Mar 2026", done: true },
  { label: "Inspection scheduled", date: "3 Mar 2026", done: true },
  { label: "Repair approved", date: "Pending", done: false },
  { label: "Amount settled", date: "Pending", done: false },
];

export default function Prompt178() {
  const completedSteps = TIMELINE.filter((s) => s.done).length;
  const progressPercent = Math.round((completedSteps / TIMELINE.length) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "var(--grey-white)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
      }}>
        <div style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "0 var(--space-4)",
          height: "var(--scale-56)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <button
            type="button"
            aria-label="Go back"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-2)",
              minWidth: "var(--scale-44)",
              minHeight: "var(--scale-44)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              touchAction: "manipulation",
              color: "var(--color-text-strong)",
            }}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Claim status</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{
        flex: 1,
        padding: "var(--space-5)",
        paddingBottom: "var(--space-20)",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
      }}>
        {/* Claim summary card */}
        <Card variant="default" padding="md">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <FileText size={18} aria-hidden="true" style={{ color: "var(--color-primary)", flexShrink: 0 }} />
              <div>
                <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>
                  Claim #CL-2026-0042
                </Typography>
                <Typography variant="caption" color="muted">Maruti Swift ZXI+ · MH 01 AB 1234</Typography>
              </div>
            </div>
            <Badge color="orange" size="sm">In progress</Badge>
          </div>

          <div style={{ marginBottom: "var(--space-4)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
              <Typography variant="caption" color="muted">Progress</Typography>
              <Typography variant="caption" weight="medium" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                {completedSteps}/{TIMELINE.length} steps
              </Typography>
            </div>
            <Progress value={progressPercent} max={100} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
            {[
              { label: "Claim type", value: "Own damage" },
              { label: "Estimated amount", value: "₹18,500" },
              { label: "Filed on", value: "28 Feb 2026" },
              { label: "Policy", value: "Comprehensive" },
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

        {/* Timeline card */}
        <Card variant="default" padding="md">
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
            Timeline
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {TIMELINE.map(({ label, date, done }, i) => (
              <div key={label} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, gap: "var(--space-1)" }}>
                  <div style={{
                    width: "var(--scale-24)",
                    height: "var(--scale-24)",
                    borderRadius: "var(--radius-full)",
                    background: done ? "var(--color-success-subtle)" : "var(--color-surface-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: done ? "var(--color-success)" : "var(--color-text-muted)",
                  }}>
                    {done
                      ? <CheckCircle size={14} aria-hidden="true" />
                      : <Clock size={14} aria-hidden="true" />
                    }
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div style={{
                      width: 2,
                      height: "var(--scale-16)",
                      background: done ? "var(--color-success)" : "var(--color-border-subtle)",
                      borderRadius: "var(--radius-full)",
                    }} />
                  )}
                </div>
                <div style={{ paddingTop: "var(--scale-2)" }}>
                  <Typography variant="label-md" weight={done ? "semibold" : "medium"} color={done ? "strong" : "muted"} style={{ display: "block" }}>
                    {label}
                  </Typography>
                  <Typography variant="caption" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {date}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Button type="button" variant="outline" size="md" fullWidth>
          Need help? Contact support
        </Button>
      </main>
    </div>
  );
}
