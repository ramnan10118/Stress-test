import { Button } from "@acko/button";
import { Typography } from "@acko/typography";

export default function Prompt001() {
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
          maxWidth: 640,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--space-6)",
        }}
      >
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
          alt="ACKO"
          height={28}
          style={{ height: "var(--scale-28)", width: "auto" }}
          loading="eager"
        />

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
            Car insurance that protects you, not just your car
          </Typography>

          <Typography
            variant="body-lg"
            color="muted"
            style={{
              textWrap: "pretty",
              maxWidth: 480,
            }}
          >
            Get comprehensive cover starting at ₹2,094/year. 100% digital, zero paperwork, and claims settled in under 30 minutes.
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
            width: "100%",
          }}
          className="hero-ctas"
        >
          <Button
            type="button"
            variant="primary"
            size="lg"
            style={{ touchAction: "manipulation", width: "100%" }}
          >
            Get a free quote
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            style={{ touchAction: "manipulation", width: "100%" }}
          >
            Renew existing policy
          </Button>
        </div>

        <Typography
          variant="caption"
          color="muted"
        >
          IRDAI Licence No. 157 · Trusted by 50 lakh+ car owners
        </Typography>
      </div>

      <style>{`
        @media (min-width: 480px) {
          .hero-ctas {
            flex-direction: row !important;
            width: auto !important;
          }
          .hero-ctas > * {
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
