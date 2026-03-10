import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

const SERVICES = [
  { icon: "🚐", title: "Tow truck" },
  { icon: "🔧", title: "On-site repair" },
  { icon: "🔋", title: "Battery jump-start" },
  { icon: "⛽", title: "Fuel delivery" },
  { icon: "🛞", title: "Tyre change" },
  { icon: "🔑", title: "Key replacement" },
];

const HOW_STEPS = [
  { num: "1", title: "Open the ACKO app", body: "Find Roadside Assistance on the home screen or in your active policy card." },
  { num: "2", title: "Select a service", body: "Choose tow truck, battery, fuel, tyre change, or key replacement." },
  { num: "3", title: "Share your location", body: "Auto-detected via GPS, or drop a pin manually anywhere in India." },
  { num: "4", title: "Track your technician", body: "Live map tracking shows exactly where your help is and the ETA in real time." },
];

const PRICING = [
  { plan: "Essential", price: "₹199/yr", features: ["Tow truck (3 uses)", "Battery jump-start (2 uses)", "Fuel delivery (1 use)"] },
  { plan: "Standard", price: "₹399/yr", features: ["All Essential services", "Tyre change (3 uses)", "Key replacement (2 uses)", "Priority dispatch"], badge: "Most popular" },
  { plan: "Premium", price: "₹799/yr", features: ["All Standard services", "Unlimited towing", "Concierge support", "Guaranteed 20 min ETA"] },
];

export default function Prompt024() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-64)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>Get help now</Button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-5)" }}>
          <div style={{ background: "var(--color-success-subtle)", borderRadius: "var(--radius-full)", padding: "var(--space-2) var(--space-4)" }}>
            <Typography variant="label-md" weight="semibold" color="success">24×7 · All India coverage</Typography>
          </div>
          <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: 0, textWrap: "balance" }}>
            Roadside help that actually shows up
          </Typography>
          <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
            Breakdowns don't keep business hours. We're ready 365 days a year, within 30 minutes, guaranteed.
          </Typography>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center" }}>
            <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>Request help now</Button>
            <Button type="button" variant="outline" size="lg" style={{ touchAction: "manipulation" }}>View plans</Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* 6-service grid */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)" }}>Services available</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-3)" }} className="services-grid">
            {SERVICES.map((s) => (
              <Card key={s.title} variant="default" padding="md">
                <CardContent>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "var(--scale-36)", marginBottom: "var(--space-2)" }} aria-hidden="true">{s.icon}</div>
                    <Typography variant="label-md" weight="semibold" color="default">{s.title}</Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* How to request */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>How to request help</Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {HOW_STEPS.map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
                <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Typography variant="label-lg" weight="bold" style={{ color: "var(--color-on-primary)" }}>{s.num}</Typography>
                </div>
                <div style={{ paddingTop: "var(--space-2)" }}>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>{s.title}</Typography>
                  <Typography variant="body-md" color="muted">{s.body}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>Choose your plan</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="pricing-grid">
            {PRICING.map((p) => (
              <Card key={p.plan} variant={p.badge ? "elevated" : "default"} padding="lg" style={{ outline: p.badge ? `2px solid var(--color-primary)` : "none", outlineOffset: 2 }}>
                <CardContent>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
                    <Typography variant="heading-sm" weight="semibold" color="strong">{p.plan}</Typography>
                    {p.badge && <Badge color="green" size="sm">{p.badge}</Badge>}
                  </div>
                  <Typography variant="heading-lg" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums", display: "block", marginBottom: "var(--space-4)" }}>{p.price}</Typography>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                    {p.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>
                        <Typography variant="body-sm" color="default">{f}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Button type="button" variant={p.badge ? "primary" : "outline"} size="md" style={{ width: "100%", touchAction: "manipulation" }}>Choose {p.plan}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: "var(--grey-700)", padding: "var(--space-8) var(--space-4)", textAlign: "center" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20Primary%20Dark%20BG.svg" alt="ACKO" height={40} style={{ height: "var(--scale-40)", width: "auto", marginBottom: "var(--space-3)" }} />
        <Typography variant="caption" color="muted" style={{ display: "block" }}>IRDAI Licence No. 157 · © 2026 Acko General Insurance Ltd.</Typography>
      </footer>

      <style>{`
        @media (min-width: 680px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
