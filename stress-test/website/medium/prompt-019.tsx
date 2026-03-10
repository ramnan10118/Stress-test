import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-error)", flexShrink: 0 }}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const COVERED = [
  "Emergency medical hospitalisation abroad",
  "Emergency dental treatment",
  "Medical evacuation and repatriation",
  "Trip cancellation due to illness or death",
  "Trip interruption and curtailment",
  "Lost, stolen, or delayed checked baggage",
  "Flight delays exceeding 6 hours",
  "Passport loss abroad",
];

const NOT_COVERED = [
  "Pre-existing conditions (non-emergency)",
  "Self-inflicted injuries or substance use",
  "High-risk adventure activities (unless add-on)",
  "Travel to sanctioned or war-affected countries",
  "Claims without supporting documentation",
  "Cosmetic or elective medical procedures",
];

export default function Prompt019() {
  return (
    <section style={{ background: "var(--color-surface)", padding: "var(--space-16) var(--space-4)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
            What your travel policy covers
          </Typography>
          <Typography variant="body-lg" color="muted">
            No surprises when you file a claim.
          </Typography>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-5)" }} className="coverage-grid">
          {/* Covered */}
          <Card variant="default" padding="lg">
            <CardContent>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}>
                <div style={{ width: "var(--scale-32)", height: "var(--scale-32)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckIcon />
                </div>
                <Typography variant="heading-sm" weight="semibold" color="success">Covered</Typography>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {COVERED.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)" }}>
                    <div style={{ marginTop: 2 }}><CheckIcon /></div>
                    <Typography variant="body-md" color="default">{item}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Not covered */}
          <Card variant="default" padding="lg">
            <CardContent>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}>
                <div style={{ width: "var(--scale-32)", height: "var(--scale-32)", borderRadius: "var(--radius-full)", background: "var(--color-error-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CrossIcon />
                </div>
                <Typography variant="heading-sm" weight="semibold" color="error">Not covered</Typography>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {NOT_COVERED.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)" }}>
                    <div style={{ marginTop: 2 }}><CrossIcon /></div>
                    <Typography variant="body-md" color="default">{item}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Typography variant="label-md" color="muted" align="center" style={{ marginTop: "var(--space-4)" }}>
          Coverage details may vary by plan. Please read the policy wordings for complete information.
        </Typography>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .coverage-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
