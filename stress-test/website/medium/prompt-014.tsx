import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";

const SERVICES = [
  { icon: "🚐", title: "Tow truck", body: "Tow to the nearest garage or your preferred service centre." },
  { icon: "🔧", title: "On-site repair", body: "Minor repairs done at your location — no tow needed." },
  { icon: "🔋", title: "Battery jump-start", body: "Dead battery? We'll get you moving in minutes." },
  { icon: "⛽", title: "Fuel delivery", body: "Emergency fuel delivered to your exact location." },
  { icon: "🛞", title: "Tyre change", body: "Flat tyre? We'll swap it with your spare, wherever you are." },
  { icon: "🔑", title: "Key replacement", body: "Lost or locked-in keys handled without the stress." },
];

const REQUEST_STEPS = [
  { num: "1", title: "Open the ACKO app", body: "Tap Roadside Assistance on the home screen." },
  { num: "2", title: "Select your service", body: "Choose what you need — tow, battery, fuel, tyre, or key." },
  { num: "3", title: "Share your location", body: "We auto-detect your GPS or let you pin the map manually." },
  { num: "4", title: "Help is on the way", body: "A confirmed technician arrives within 30 minutes, tracked live." },
];

export default function Prompt014() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-20) var(--space-4)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-5)" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <div style={{ background: "var(--color-primary-subtle)", borderRadius: "var(--radius-full)", padding: "var(--space-2) var(--space-4)" }}>
            <Typography variant="label-lg" weight="semibold" color="primary">Help within 30 minutes — guaranteed</Typography>
          </div>
          <div>
            <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
              Roadside assistance that actually shows up
            </Typography>
            <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
              Breakdowns happen. We're ready — 24 hours a day, 365 days a year, anywhere in India.
            </Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>
            Request help now
          </Button>
        </div>
      </section>

      <Separator />

      {/* Services grid */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            Services we provide
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-4)" }} className="services-grid">
            {SERVICES.map((s) => (
              <Card key={s.title} variant="default" padding="md">
                <CardContent>
                  <div style={{ fontSize: "var(--scale-32)", marginBottom: "var(--space-2)", lineHeight: 1 }} aria-hidden="true">{s.icon}</div>
                  <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>{s.title}</Typography>
                  <Typography variant="body-sm" color="muted">{s.body}</Typography>
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
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            How to request help
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {REQUEST_STEPS.map((s, i) => (
              <div key={s.num} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
                <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", background: "var(--color-primary)", color: "var(--color-on-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Typography variant="label-lg" weight="bold" color="default">{s.num}</Typography>
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

      <style>{`
        @media (min-width: 680px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
