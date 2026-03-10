import { ChevronLeft, CheckCircle, Clock, Circle, Headphones } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";

type StepStatus = "completed" | "current" | "upcoming";

const TIMELINE: { label: string; timestamp: string; status: StepStatus }[] = [
  { label: "Submitted", timestamp: "28 Feb 2026, 10:32 AM", status: "completed" },
  { label: "Documents verified", timestamp: "1 Mar 2026, 2:15 PM", status: "completed" },
  { label: "Surveyor assigned", timestamp: "3 Mar 2026, 11:00 AM", status: "current" },
  { label: "Settlement", timestamp: "Pending", status: "upcoming" },
];

const STATUS_ICON: Record<StepStatus, typeof CheckCircle> = {
  completed: CheckCircle,
  current: Clock,
  upcoming: Circle,
};

export default function Prompt197() {
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
          gap: "var(--space-2)",
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
          <Typography variant="heading-md" weight="semibold" color="strong">
            Claim #CL2024001
          </Typography>
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
        {/* Status card */}
        <Card variant="default" padding="md">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
            <Badge color="orange" size="md">Under review</Badge>
          </div>

          <Typography variant="display-sm" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)", fontVariantNumeric: "tabular-nums" }}>
            ₹18,500
          </Typography>
          <Typography variant="body-sm" color="muted">
            Estimated claim amount
          </Typography>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            {[
              { label: "Date filed", value: "28 Feb 2026" },
              { label: "Claim type", value: "Own damage" },
              { label: "Vehicle", value: "MH 01 AB 1234" },
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
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-5)" }}>
            Claim timeline
          </Typography>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {TIMELINE.map((step, i) => {
              const Icon = STATUS_ICON[step.status];
              const iconColor = step.status === "completed"
                ? "var(--color-success)"
                : step.status === "current"
                  ? "var(--color-warning)"
                  : "var(--color-text-muted)";
              const bgColor = step.status === "completed"
                ? "var(--color-success-subtle)"
                : step.status === "current"
                  ? "var(--color-warning-subtle)"
                  : "var(--color-surface-secondary)";

              return (
                <div key={step.label} style={{ display: "flex", gap: "var(--space-3)" }}>
                  {/* Icon + connector */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: "var(--scale-28)",
                      height: "var(--scale-28)",
                      borderRadius: "var(--radius-full)",
                      background: bgColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: iconColor,
                    }}>
                      <Icon size={14} aria-hidden="true" />
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div style={{
                        width: 2,
                        flex: 1,
                        minHeight: "var(--scale-24)",
                        background: step.status === "completed" ? "var(--color-success)" : "var(--color-border-subtle)",
                        borderRadius: "var(--radius-full)",
                      }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingBottom: i < TIMELINE.length - 1 ? "var(--space-5)" : 0, paddingTop: "var(--scale-4)" }}>
                    <Typography
                      variant="body-sm"
                      weight={step.status === "upcoming" ? "regular" : "semibold"}
                      color={step.status === "upcoming" ? "muted" : "strong"}
                      style={{ display: "block" }}
                    >
                      {step.label}
                    </Typography>
                    <Typography variant="caption" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>
                      {step.timestamp}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Support button */}
        <Button type="button" variant="ghost" size="md" fullWidth>
          <Headphones size={16} aria-hidden="true" style={{ marginRight: "var(--space-2)" }} />
          Contact support
        </Button>
      </main>
    </div>
  );
}
