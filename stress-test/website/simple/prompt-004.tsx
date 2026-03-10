import { Button } from "@acko/button";
import { Typography } from "@acko/typography";

const ClockIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TruckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 2.84l3-.02a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6.29 6.29l1.69-1.69a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const SERVICES = [
  { label: "Tow truck", icon: <TruckIcon /> },
  { label: "Flat tyre", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg> },
  { label: "Battery jump", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
  { label: "Fuel delivery", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 22V11l7-7 7 7v11H3z" /><path d="M9 22V12h6v10" /><path d="M17 22h4M19 20v-4" /></svg> },
];

export default function Prompt004() {
  return (
    <section
      style={{
        background: "var(--grey-white)",
        padding: "var(--space-20) var(--space-4)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-8)",
        }}
      >
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
          alt="ACKO"
          height={28}
          style={{ height: "var(--scale-28)", width: "auto" }}
          loading="eager"
        />

        {/* Key benefit callout */}
        <div
          style={{
            background: "var(--color-primary-subtle)",
            borderRadius: "var(--radius-2xl)",
            padding: "var(--space-6)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-4)",
          }}
        >
          <div
            style={{
              width: "var(--scale-64)",
              height: "var(--scale-64)",
              flexShrink: 0,
              borderRadius: "var(--radius-full)",
              background: "var(--color-primary)",
              color: "var(--color-on-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ClockIcon />
          </div>
          <div>
            <Typography
              variant="heading-xl"
              weight="bold"
              color="primary"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              30 min
            </Typography>
            <Typography
              variant="body-md"
              color="muted"
              style={{ marginTop: "var(--space-1)" }}
            >
              Average response time, 24 hours a day, 7 days a week
            </Typography>
          </div>
        </div>

        {/* Heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Typography
            variant="display-lg"
            weight="bold"
            color="strong"
            style={{
              margin: 0,
              textWrap: "balance",
            }}
          >
            Help arrives before your patience runs out
          </Typography>
          <Typography
            variant="body-lg"
            color="muted"
            style={{ textWrap: "pretty" }}
          >
            Stranded on the highway at midnight? Flat tyre in the rain? One tap and our team is on the way — guaranteed within 30 minutes.
          </Typography>
        </div>

        {/* Service pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
          {SERVICES.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                background: "var(--color-surface)",
                borderRadius: "var(--radius-full)",
                padding: "var(--space-2) var(--space-3)",
                color: "var(--color-text-secondary)",
              }}
            >
              {s.icon}
              <Typography variant="label-lg">{s.label}</Typography>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
          className="rsa-ctas"
        >
          <Button
            type="button"
            variant="primary"
            size="lg"
            style={{ touchAction: "manipulation", width: "100%" }}
          >
            Request roadside help
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="lg"
            style={{
              touchAction: "manipulation",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-2)",
            }}
          >
            <PhoneIcon />
            Call 1800-266-2256
          </Button>
        </div>

        <Typography
          variant="caption"
          color="muted"
        >
          Available with all ACKO car insurance policies · IRDAI Licence No. 157
        </Typography>
      </div>

      <style>{`
        @media (min-width: 480px) {
          .rsa-ctas {
            flex-direction: row !important;
          }
        }
      `}</style>
    </section>
  );
}
