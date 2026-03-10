import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";

const STEPS = [
  { num: "1", title: "Enter your car number", body: "Type your vehicle registration number. We pull your car details instantly — no manual entry." },
  { num: "2", title: "Choose your plan", body: "Pick from Third Party, Comprehensive, or Comprehensive+. Compare features side by side." },
  { num: "3", title: "Pay and get covered", body: "Pay securely online. Your policy is active immediately and the document is in your email in seconds." },
];

const STATS = [
  { value: "50 lakh+", label: "Policies issued" },
  { value: "96%", label: "Claims approved" },
  { value: "30 min", label: "Avg. claim time" },
  { value: "4.6 / 5", label: "Customer rating" },
];

export default function Prompt011() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-20) var(--space-4)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} loading="eager" />
          <div>
            <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
              Car insurance that pays out, not just pays up
            </Typography>
            <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
              100% digital. No agents, no paperwork. Claims settled in 30 minutes.
            </Typography>
          </div>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center" }}>
            <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>Get a free quote</Button>
            <Button type="button" variant="outline" size="lg" style={{ touchAction: "manipulation" }}>Renew policy</Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* How it works */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            How it works
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="steps-grid">
            {STEPS.map((s) => (
              <Card key={s.num} variant="default" padding="lg">
                <CardContent>
                  <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", background: "var(--color-primary)", color: "var(--color-on-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-4)" }}>
                    <Typography variant="heading-sm" weight="bold" color="default">{s.num}</Typography>
                  </div>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>{s.title}</Typography>
                  <Typography variant="body-md" color="muted" style={{ textWrap: "pretty" }}>{s.body}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Trust bar */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-10) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }} className="trust-grid">
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: "var(--space-6) var(--space-4)", textAlign: "center", borderRight: i % 2 === 0 ? "1px solid var(--color-border-subtle)" : "none", borderBottom: i < 2 ? "1px solid var(--color-border-subtle)" : "none" }}>
              <Typography variant="heading-xl" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums", display: "block" }}>{s.value}</Typography>
              <Typography variant="body-sm" color="muted">{s.label}</Typography>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (min-width: 680px) {
          .steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .trust-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .trust-grid > div { border-bottom: none !important; }
          .trust-grid > div:nth-child(2) { border-right: 1px solid var(--color-border-subtle) !important; }
          .trust-grid > div:nth-child(3) { border-right: 1px solid var(--color-border-subtle) !important; }
          .trust-grid > div:last-child { border-right: none !important; }
        }
      `}</style>
    </div>
  );
}
