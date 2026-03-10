import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Button } from "@acko/button";

type StepStatus = "completed" | "active" | "upcoming";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  status: StepStatus;
}

const STEPS: Step[] = [
  { id: 1, title: "Vehicle details", subtitle: "Maruti Swift ZXI+ · 2021 · MH 01 AB 1234", status: "completed" },
  { id: 2, title: "Select a plan", subtitle: "Comprehensive · ₹4,599/yr", status: "completed" },
  { id: 3, title: "Add-ons & details", subtitle: "Zero Dep + RSA · Your info saved", status: "active" },
  { id: 4, title: "Payment", subtitle: "₹6,704 due", status: "upcoming" },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-on-primary)" }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Prompt050() {
  const activeStep = STEPS.find((s) => s.status === "active")!;
  const completedCount = STEPS.filter((s) => s.status === "completed").length;
  const progressPct = (completedCount / STEPS.length) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={24} style={{ height: "var(--scale-24)", width: "auto" }} />
          <div style={{ width: "var(--scale-44)" }} />
        </div>

        {/* Overall progress bar */}
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: `${progressPct}%`, background: "var(--color-primary)", borderRadius: "var(--radius-full)", transition: "width var(--duration-fast) ease" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* Title */}
        <div>
          <Typography variant="caption" color="muted" style={{ display: "block", marginBottom: "var(--space-1)" }}>
            Step {activeStep.id} of {STEPS.length}
          </Typography>
          <Typography variant="heading-xl" weight="semibold" color="strong" style={{ margin: 0 }}>
            {activeStep.title}
          </Typography>
        </div>

        {/* Stepper */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STEPS.map((step, i) => (
            <div key={step.id} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              {/* Icon + connector */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div
                  style={{
                    width: "var(--scale-36)",
                    height: "var(--scale-36)",
                    borderRadius: "var(--radius-full)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: step.status === "completed" ? "var(--color-primary)" : step.status === "active" ? "var(--color-primary)" : "var(--color-border-subtle)",
                    border: step.status === "active" ? `3px solid var(--color-primary)` : "none",
                    flexShrink: 0,
                  }}
                >
                  {step.status === "completed" ? (
                    <CheckIcon />
                  ) : (
                    <Typography
                      variant="label-md"
                      weight="bold"
                      color={step.status === "active" ? "default" : "muted"}
                    >
                      {step.id}
                    </Typography>
                  )}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      height: "var(--scale-40)",
                      background: step.status === "completed" ? "var(--color-primary)" : "var(--color-border-subtle)",
                      marginTop: "var(--space-1)",
                      marginBottom: "var(--space-1)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingTop: "var(--space-1)", paddingBottom: i < STEPS.length - 1 ? "var(--space-5)" : 0 }}>
                <Typography
                  variant="label-lg"
                  weight="semibold"
                  color={step.status === "upcoming" ? "muted" : "strong"}
                  style={{ display: "block", marginBottom: "var(--space-1)" }}
                >
                  {step.title}
                </Typography>
                <Typography variant="body-sm" color="muted">
                  {step.subtitle}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Active step detail card */}
        <Card variant="elevated" padding="md" style={{ outline: "2px solid var(--color-primary)", outlineOffset: 2 }}>
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="muted" style={{ display: "block", marginBottom: "var(--space-1)" }}>
              Currently completing
            </Typography>
            <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
              {activeStep.title}
            </Typography>
            <Typography variant="body-sm" color="muted">
              {activeStep.subtitle}
            </Typography>
          </CardContent>
        </Card>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
