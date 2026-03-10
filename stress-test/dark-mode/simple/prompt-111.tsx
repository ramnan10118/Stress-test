// Dark Mode — Car insurance hero
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Badge } from "@acko/badge";

const TRUST_ITEMS = ["IRDAI Licence No. 157", "50 lakh+ car owners", "Claims in 30 min"];

export default function Prompt111() {
  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ padding: "0 var(--space-6)", height: "var(--scale-56)", display: "flex", alignItems: "center", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg"
          alt="ACKO"
          style={{ height: "var(--scale-24)", width: "auto" }}
        />
      </header>

      {/* Hero */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", padding: "var(--space-16) var(--space-6)" }}>
        <div style={{ maxWidth: 600, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Typography variant="display-lg" weight="bold" color="strong">
              Car insurance that protects you, not just your car
            </Typography>
            <Typography variant="body-lg" color="muted" style={{ maxWidth: 480 }}>
              Get comprehensive cover starting at ₹2,094/year. 100% digital, zero paperwork.
            </Typography>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
            <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>
              Get a free quote
            </Button>
            <Button type="button" variant="outline" size="lg" style={{ touchAction: "manipulation" }}>
              Renew existing policy
            </Button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
            {TRUST_ITEMS.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <div style={{ width: "var(--scale-6)", height: "var(--scale-6)", borderRadius: "var(--radius-full)", background: "var(--color-success)" }} aria-hidden="true" />
                <Typography variant="caption" color="muted">{item}</Typography>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
