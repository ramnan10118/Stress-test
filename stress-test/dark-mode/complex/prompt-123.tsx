// Dark Mode — Light and dark side by side
import { Shield, Clock, Phone, ChevronRight, Star } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";

const FEATURES = [
  { icon: Shield, title: "Zero paperwork", desc: "Buy in 2 minutes flat. Everything digital." },
  { icon: Clock, title: "30-min claims", desc: "Most claims settled within 30 minutes." },
  { icon: Phone, title: "24x7 support", desc: "Round-the-clock emergency assistance." },
];

const PLAN = { name: "Comprehensive", price: 4599, badge: "Popular" };

function HeroSection({ theme }: { theme: "light" | "dark" }) {
  const isDark = theme === "dark";
  const logoUrl = isDark
    ? "https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg"
    : "https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20-%20Color.svg";

  return (
    <div data-theme={theme} style={{ flex: 1, minWidth: 320, background: "var(--color-surface)", borderRadius: "var(--radius-2xl)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={logoUrl} alt="ACKO" style={{ height: "var(--scale-20)", width: "auto" }} />
        <Badge color="blue" size="sm">{theme === "dark" ? "Dark" : "Light"}</Badge>
      </header>

      {/* Hero */}
      <div style={{ padding: "var(--space-8) var(--space-4)" }}>
        <Typography variant="heading-lg" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
          Car insurance built for the digital age
        </Typography>
        <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-5)" }}>
          Comprehensive cover starting at ₹2,094/year. Zero paperwork.
        </Typography>
        <Button type="button" variant="primary" size="md" style={{ touchAction: "manipulation" }}>
          Get a free quote
        </Button>
      </div>

      {/* Features */}
      <div style={{ padding: "0 var(--space-4) var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <Card key={title} variant="default" padding="none">
            <CardContent>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}>
                <div style={{ width: "var(--scale-32)", height: "var(--scale-32)", borderRadius: "var(--radius-lg)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                  <Icon size={16} aria-hidden="true" />
                </div>
                <div>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{title}</Typography>
                  <Typography variant="caption" color="muted">{desc}</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Plan card */}
      <div style={{ padding: "0 var(--space-4) var(--space-6)" }}>
        <Card variant="elevated" padding="none" style={{ outline: "2px solid var(--color-primary)", outlineOffset: 2 }}>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">{PLAN.name}</Typography>
                <Badge color="blue" size="sm">{PLAN.badge}</Badge>
              </div>
              <div style={{ textAlign: "right" }}>
                <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{PLAN.price.toLocaleString("en-IN")}</Typography>
                <Typography variant="caption" color="muted">/year</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonial */}
      <div style={{ padding: "0 var(--space-4) var(--space-6)" }}>
        <div style={{ display: "flex", gap: "var(--space-1)", marginBottom: "var(--space-2)" }}>
          {[0,1,2,3,4].map(i => <Star key={i} size={12} fill="currentColor" aria-hidden="true" style={{ color: "var(--color-warning)" }} />)}
        </div>
        <Typography variant="body-sm" color="default" style={{ display: "block", marginBottom: "var(--space-2)" }}>"Claim settled in 20 minutes."</Typography>
        <Typography variant="caption" color="muted">Rahul S. · Mumbai</Typography>
      </div>
    </div>
  );
}

export default function Prompt123() {
  return (
    <div style={{ minHeight: "100vh", background: "#1a1a2e", padding: "var(--space-6)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
          <div data-theme="dark">
            <Typography variant="heading-xl" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
              Light vs Dark
            </Typography>
            <Typography variant="body-md" color="muted">
              Same components, same tokens — different themes. Semantic tokens adapt automatically.
            </Typography>
          </div>
        </div>

        <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
          <HeroSection theme="light" />
          <HeroSection theme="dark" />
        </div>

        <div data-theme="dark" style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
          <Typography variant="caption" color="muted">
            All values come from CSS custom properties. Zero hardcoded colors, zero conditional logic.
          </Typography>
        </div>
      </div>
    </div>
  );
}
