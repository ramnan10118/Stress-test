// Dark Mode — Car insurance landing page (medium)
import { Shield, Clock, Phone, ChevronRight, Star } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";

const FEATURES = [
  { icon: Shield, title: "Zero paperwork", desc: "Buy in 2 minutes flat. Everything is digital." },
  { icon: Clock, title: "30-min claims", desc: "Most claims settled within 30 minutes." },
  { icon: Phone, title: "24x7 support", desc: "Round-the-clock assistance for emergencies." },
];

const TRUST_STATS = [
  { value: "50L+", label: "Car owners" },
  { value: "4.8★", label: "App rating" },
  { value: "30 min", label: "Avg. claim time" },
];

export default function Prompt116() {
  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-6)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg" alt="ACKO" style={{ height: "var(--scale-24)", width: "auto" }} />
        <Button type="button" variant="outline" size="sm" style={{ touchAction: "manipulation" }}>
          Log in
        </Button>
      </header>

      <main>
        {/* Hero */}
        <section style={{ padding: "var(--space-16) var(--space-6)", maxWidth: 680, margin: "0 auto", width: "100%" }}>
          <Typography variant="display-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
            Car insurance built for the digital age
          </Typography>
          <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)", maxWidth: 500 }}>
            Get comprehensive cover starting at ₹2,094/year. No agents, no paperwork, claims settled in minutes.
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginBottom: "var(--space-10)" }}>
            <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>
              Get a free quote
            </Button>
            <Button type="button" variant="ghost" size="lg" style={{ touchAction: "manipulation" }}>
              Check premium
            </Button>
          </div>

          {/* Trust stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-8)" }}>
            {TRUST_STATS.map(({ value, label }) => (
              <div key={label}>
                <Typography variant="heading-lg" weight="bold" color="primary" style={{ display: "block" }}>{value}</Typography>
                <Typography variant="body-sm" color="muted">{label}</Typography>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Features */}
        <section style={{ padding: "var(--space-12) var(--space-6)", maxWidth: 680, margin: "0 auto", width: "100%" }}>
          <Typography variant="heading-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            Why ACKO?
          </Typography>
          <Typography variant="body-md" color="muted" style={{ display: "block", marginBottom: "var(--space-8)" }}>
            Insurance rethought for people who don't have time for insurance.
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} variant="default" padding="none">
                <CardContent>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)" }}>
                    <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-lg)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>{title}</Typography>
                      <Typography variant="body-sm" color="muted">{desc}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section style={{ padding: "var(--space-8) var(--space-6) var(--space-16)", maxWidth: 680, margin: "0 auto", width: "100%" }}>
          <Card variant="default" padding="none">
            <CardContent>
              <div style={{ display: "flex", gap: "var(--space-1)", marginBottom: "var(--space-3)" }}>
                {[0,1,2,3,4].map(i => <Star key={i} size={14} fill="currentColor" aria-hidden="true" style={{ color: "var(--color-warning)" }} />)}
              </div>
              <Typography variant="body-md" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
                "Claim was settled in 20 minutes. No surveyors, no drama. Just money in my account."
              </Typography>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <div style={{ width: "var(--scale-32)", height: "var(--scale-32)", borderRadius: "var(--radius-full)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Typography variant="label-sm" weight="semibold" color="primary">RS</Typography>
                </div>
                <div>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>Rahul S.</Typography>
                  <Typography variant="caption" color="muted">Mumbai · Comprehensive policy</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer CTA */}
      <div style={{ background: "var(--color-surface-secondary)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-6)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-4)" }}>
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Ready to get covered?</Typography>
          <Typography variant="body-sm" color="muted">Takes less than 2 minutes.</Typography>
        </div>
        <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>
          Get started <ChevronRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
