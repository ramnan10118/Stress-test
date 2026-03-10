// Dark Mode — Claims screen
import { ChevronLeft, Plus, Clock, CheckCircle, FileText, AlertCircle } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Progress } from "@acko/progress";
import { Separator } from "@acko/separator";

const CLAIMS = [
  {
    id: "ACK-2024-09812",
    type: "Own damage",
    date: "10 Jan 2025",
    amount: 24500,
    status: "under-review",
    statusLabel: "Under review",
    progress: 50,
    steps: ["Submitted", "Under review", "Documents verified", "Settlement"],
    currentStep: 1,
  },
  {
    id: "ACK-2023-05441",
    type: "Own damage",
    date: "3 Aug 2023",
    amount: 18200,
    status: "settled",
    statusLabel: "Settled",
    progress: 100,
    steps: ["Submitted", "Under review", "Documents verified", "Settlement"],
    currentStep: 3,
  },
];

const STATUS_COLOR: Record<string, "blue" | "green" | "red" | "yellow"> = {
  "under-review": "blue",
  "settled": "green",
  "rejected": "red",
  "pending": "yellow",
};

export default function Prompt120() {
  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button aria-label="Go back" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <Typography variant="label-lg" weight="semibold" color="strong">Claims</Typography>
        <div style={{ width: "var(--scale-44)" }} />
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4) var(--space-20)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* Start claim CTA */}
        <Card variant="default" padding="none" style={{ background: "var(--color-primary-subtle)", border: "1px solid var(--color-primary)" }}>
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
              <div>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  Start a new claim
                </Typography>
                <Typography variant="body-sm" color="muted">Accidents, theft, or damage — we've got you.</Typography>
              </div>
              <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation", flexShrink: 0 }}>
                <Plus size={14} aria-hidden="true" style={{ marginRight: "var(--space-1)" }} />
                File claim
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Claims list */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
            Your claims
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {CLAIMS.map((claim) => (
              <Card key={claim.id} variant="default" padding="none" style={{ cursor: "pointer", touchAction: "manipulation" }}>
                <CardContent>
                  {/* Claim header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-3)" }}>
                    <div>
                      <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                        {claim.type}
                      </Typography>
                      <Typography variant="caption" color="muted">#{claim.id} · {claim.date}</Typography>
                    </div>
                    <Badge color={STATUS_COLOR[claim.status]} size="sm">{claim.statusLabel}</Badge>
                  </div>

                  {/* Amount */}
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
                    <Typography variant="body-sm" color="muted">Claim amount</Typography>
                    <Typography variant="label-lg" weight="semibold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                      ₹{claim.amount.toLocaleString("en-IN")}
                    </Typography>
                  </div>

                  {/* Progress */}
                  <Progress value={claim.progress} size="sm" style={{ marginBottom: "var(--space-3)" }} />

                  {/* Steps */}
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {claim.steps.map((step, i) => (
                      <Typography
                        key={step}
                        variant="caption"
                        color={i <= claim.currentStep ? "primary" : "muted"}
                        style={{ textAlign: "center", maxWidth: 60 }}
                      >
                        {step}
                      </Typography>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)", padding: "var(--space-3)", background: "var(--color-surface-secondary)", borderRadius: "var(--radius-2xl)" }}>
          <AlertCircle size={16} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0, marginTop: 2 }} />
          <Typography variant="caption" color="muted">
            Claims are typically settled within 30 minutes. For emergencies, call 1800-266-2256 (toll free, 24x7).
          </Typography>
        </div>
      </main>
    </div>
  );
}
