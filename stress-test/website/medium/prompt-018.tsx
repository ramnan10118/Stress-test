import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";

const MYTHS = [
  {
    myth: "Car insurance is only required for new cars.",
    reality: "Third-party insurance is legally mandatory for all cars — new or old — under the Motor Vehicles Act, 1988. Driving without it carries a fine of up to ₹4,000 and possible imprisonment.",
  },
  {
    myth: "Filing a claim always increases my premium.",
    reality: "Only own-damage claims affect your No Claim Bonus. Third-party claims do not affect your NCB. And if your NCB savings outweigh the repair cost, skipping the claim makes financial sense.",
  },
  {
    myth: "A higher IDV always means better coverage.",
    reality: "Insured Declared Value (IDV) is the maximum payout in a total loss — not daily coverage quality. What matters more is the plan type, add-ons, and claim settlement ratio.",
  },
];

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true" style={{ color: "var(--color-error)" }}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Prompt018() {
  return (
    <section style={{ background: "var(--color-surface)", padding: "var(--space-16) var(--space-4)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
            Car insurance myths — busted
          </Typography>
          <Typography variant="body-lg" color="muted">
            Don't let misinformation cost you money or coverage.
          </Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          {MYTHS.map((item, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-3)" }} className="myth-row">
              {/* Myth */}
              <Card variant="default" padding="md">
                <CardContent>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-3)" }}>
                    <CrossIcon />
                    <Badge color="pink" size="sm">Myth</Badge>
                  </div>
                  <Typography variant="body-lg" color="default" style={{ fontStyle: "italic" }}>
                    "{item.myth}"
                  </Typography>
                </CardContent>
              </Card>

              {/* Reality */}
              <Card variant="elevated" padding="md">
                <CardContent>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-3)" }}>
                    <CheckIcon />
                    <Badge color="green" size="sm">Reality</Badge>
                  </div>
                  <Typography variant="body-lg" color="default" style={{ textWrap: "pretty" }}>
                    {item.reality}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .myth-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
