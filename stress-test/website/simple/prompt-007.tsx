import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";

const InstantIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const PriceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ClaimsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const BENEFITS = [
  {
    icon: <InstantIcon />,
    title: "Instant policy",
    body: "Buy or renew your car insurance in under 5 minutes. Policy document in your inbox immediately — no waiting.",
  },
  {
    icon: <PriceIcon />,
    title: "Low premiums",
    body: "No agents, no commissions. Our digital-first model means savings go directly to you — every renewal.",
  },
  {
    icon: <ClaimsIcon />,
    title: "Fast claims",
    body: "File a claim from your phone in 2 minutes. Approved within 30 minutes, settled within 48 hours.",
  },
];

export default function Prompt007() {
  return (
    <section
      style={{
        background: "var(--color-surface)",
        padding: "var(--space-16) var(--space-4)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <Typography
            variant="heading-xl"
            weight="semibold"
            color="strong"
            align="center"
            style={{
              margin: "0 0 var(--space-3)",
              textWrap: "balance",
            }}
          >
            Why car owners choose ACKO
          </Typography>
          <Typography variant="body-lg" color="muted">
            Built for the digital age, designed for real life.
          </Typography>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-4)",
          }}
          className="features-grid"
        >
          {BENEFITS.map((b) => (
            <Card key={b.title} variant="default" padding="lg">
              <CardContent>
                <div
                  style={{
                    width: "var(--scale-48)",
                    height: "var(--scale-48)",
                    borderRadius: "var(--radius-xl)",
                    background: "var(--color-primary-subtle)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {b.icon}
                </div>
                <Typography
                  variant="heading-sm"
                  weight="semibold"
                  color="strong"
                  style={{ marginBottom: "var(--space-2)", display: "block" }}
                >
                  {b.title}
                </Typography>
                <Typography variant="body-md" color="muted" style={{ textWrap: "pretty" }}>
                  {b.body}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .features-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
