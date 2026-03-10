import { Typography } from "@acko/typography";
import { Separator } from "@acko/separator";

const STATS = [
  { value: "50 lakh+", label: "Customers protected" },
  { value: "3 days", label: "Average claim settlement" },
  { value: "5,000+", label: "Cashless garages" },
  { value: "24 × 7", label: "Customer support" },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Prompt006() {
  return (
    <section
      style={{
        background: "var(--grey-white)",
        padding: "var(--space-10) var(--space-4)",
        borderTop: "1px solid var(--color-border-subtle)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-2)",
            marginBottom: "var(--space-8)",
          }}
        >
          <CheckIcon />
          <Typography
            variant="label-lg"
            weight="semibold"
            color="muted"
          >
            TRUSTED BY INDIA
          </Typography>
          <CheckIcon />
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0",
          }}
          className="trust-grid"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label}>
              <div
                style={{
                  padding: "var(--space-6) var(--space-4)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  borderRight: i % 2 === 0 ? "1px solid var(--color-border-subtle)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--color-border-subtle)" : "none",
                }}
              >
                <Typography
                  variant="heading-xl"
                  weight="bold"
                  color="primary"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body-sm" color="muted">
                  {stat.label}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .trust-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .trust-grid > div > div {
            border-bottom: none !important;
          }
          .trust-grid > div:last-child > div {
            border-right: none !important;
          }
          .trust-grid > div:nth-child(2) > div {
            border-right: 1px solid var(--color-border-subtle) !important;
          }
          .trust-grid > div:nth-child(3) > div {
            border-right: 1px solid var(--color-border-subtle) !important;
          }
        }
      `}</style>
    </section>
  );
}
