import { Car, ChevronRight } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Progress } from "@acko/progress";

export default function Prompt066() {
  const daysLeft = 47;
  const totalDays = 365;
  const progressPercent = Math.round(((totalDays - daysLeft) / totalDays) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", padding: "var(--space-6) var(--space-4)" }}>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
          Active policy
        </Typography>

        <Card variant="default" padding="none" style={{ cursor: "pointer", touchAction: "manipulation" }}>
          <CardContent>
            {/* Top row: icon + details + badge + chevron */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
              <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-xl)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                <Car size={22} aria-hidden="true" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                  <Typography variant="label-lg" weight="semibold" color="strong">Car Insurance</Typography>
                  <Badge color="green" size="sm">Active</Badge>
                </div>
                <Typography variant="body-sm" color="muted" style={{ display: "block" }}>
                  Maruti Swift ZXI+ · MH 01 AB 1234
                </Typography>
                <Typography variant="caption" color="muted">
                  Comprehensive · Expires 18 Apr 2026
                </Typography>
              </div>
              <ChevronRight size={18} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0, marginTop: "var(--space-2)" }} />
            </div>

            {/* Policy period progress */}
            <div style={{ marginBottom: "var(--space-2)" }}>
              <Progress value={progressPercent} size="sm" color="primary" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="caption" color="muted">{daysLeft} days remaining</Typography>
              <Typography variant="caption" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>{progressPercent}% elapsed</Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
