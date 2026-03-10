import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Badge } from "@acko/badge";

const FamilyIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ color: "var(--color-primary)" }}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function Prompt002() {
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
          alignItems: "center",
          textAlign: "center",
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

        <div
          style={{
            width: "var(--scale-80)",
            height: "var(--scale-80)",
            borderRadius: "var(--radius-full)",
            background: "var(--color-primary-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-hidden="true"
        >
          <FamilyIcon />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "center" }}>
          <div>
            <Badge color="purple">Health Insurance</Badge>
          </div>

          <Typography
            variant="display-lg"
            weight="bold"
            color="strong"
            style={{
              margin: 0,
              textWrap: "balance",
            }}
          >
            Protect every person your family depends on
          </Typography>

          <Typography
            variant="body-lg"
            color="muted"
            style={{
              textWrap: "pretty",
              maxWidth: 460,
            }}
          >
            Comprehensive health cover for your entire family — one plan, one premium, no separate paperwork per person.
          </Typography>
        </div>

        <Button
          type="button"
          variant="primary"
          size="lg"
          style={{
            touchAction: "manipulation",
            minWidth: "var(--scale-160)",
          }}
        >
          Get a free quote
        </Button>

        <Typography
          variant="caption"
          color="muted"
        >
          Plans starting at ₹399/month · IRDAI Licence No. 157
        </Typography>
      </div>
    </section>
  );
}
