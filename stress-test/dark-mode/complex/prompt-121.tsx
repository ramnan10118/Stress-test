// Dark Mode — Full car insurance landing page
import { useState } from "react";
import { Shield, Clock, Phone, ChevronRight, Star, CheckCircle, Users, Zap } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Accordion } from "@acko/accordion";

const FEATURES = [
  { icon: Shield, title: "Zero paperwork", desc: "Buy in 2 minutes flat. Everything is 100% digital." },
  { icon: Clock, title: "30-min claims", desc: "Most claims settled within 30 minutes — no surveyor visits." },
  { icon: Phone, title: "24x7 support", desc: "Round-the-clock assistance for emergencies and breakdowns." },
  { icon: Users, title: "50 lakh+ customers", desc: "Trusted by millions of car, bike, and health insurance buyers." },
];

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, badge: null, highlights: ["Mandatory by law", "Covers third-party damage", "No own damage cover"] },
  { id: "comp", name: "Comprehensive", price: 4599, badge: "Popular", highlights: ["Own damage + third party", "Theft and fire cover", "Personal accident cover"] },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null, highlights: ["Zero depreciation", "Engine protection", "Consumables cover"] },
];

const TRUST_STATS = [
  { value: "50L+", label: "Happy customers" },
  { value: "4.8", label: "App store rating" },
  { value: "30 min", label: "Avg. claim time" },
  { value: "₹2,094", label: "Starting price" },
];

const FAQS = [
  { title: "What does comprehensive car insurance cover?", content: "Comprehensive car insurance covers damage to your own car from accidents, theft, fire, and natural disasters, plus third-party liability. It's the most complete protection available." },
  { title: "How fast are claims settled?", content: "Most claims are settled within 30 minutes through our digital-first process. No surveyors, no paperwork — just upload photos and get paid." },
  { title: "Can I transfer my existing no-claim bonus?", content: "Yes, your existing NCB is automatically transferred when you switch to ACKO. Just share your previous policy details during purchase." },
  { title: "Is ACKO a legitimate insurance company?", content: "ACKO is a fully licensed general insurance company regulated by IRDAI (Licence No. 157). We're backed by Amazon, Accel, and other leading investors." },
];

const TESTIMONIALS = [
  { name: "Rahul S.", location: "Mumbai", text: "Claim settled in 20 minutes. No surveyors, no drama.", rating: 5 },
  { name: "Priya K.", location: "Bengaluru", text: "Switched from a traditional insurer. The difference is night and day.", rating: 5 },
  { name: "Amit D.", location: "Delhi", text: "The whole process took 3 minutes. Unbelievable.", rating: 5 },
];

export default function Prompt121() {
  const [selectedPlan, setSelectedPlan] = useState("comp");

  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-6)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg" alt="ACKO" style={{ height: "var(--scale-24)", width: "auto" }} />
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <Button type="button" variant="ghost" size="sm" style={{ touchAction: "manipulation" }}>Log in</Button>
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>Get a quote</Button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "var(--space-20) var(--space-6)", maxWidth: 720, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
          <Zap size={16} aria-hidden="true" style={{ color: "var(--color-primary)" }} />
          <Typography variant="overline" color="primary">Trusted by 50 lakh+ car owners</Typography>
        </div>
        <Typography variant="display-lg" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
          Car insurance that protects you, not just your car
        </Typography>
        <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)", maxWidth: 540 }}>
          Get comprehensive cover starting at ₹2,094/year. 100% digital, zero paperwork, claims in 30 minutes.
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginBottom: "var(--space-12)" }}>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>Get a free quote</Button>
          <Button type="button" variant="outline" size="lg" style={{ touchAction: "manipulation" }}>Renew existing policy</Button>
        </div>

        {/* Trust stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "var(--space-6)" }}>
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
      <section style={{ padding: "var(--space-16) var(--space-6)", maxWidth: 720, margin: "0 auto", width: "100%" }}>
        <Typography variant="heading-xl" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Why ACKO?</Typography>
        <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)" }}>Insurance rethought for people who don't have time for insurance.</Typography>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)" }}>
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

      <Separator />

      {/* Plans */}
      <section style={{ padding: "var(--space-16) var(--space-6)", maxWidth: 720, margin: "0 auto", width: "100%" }}>
        <Typography variant="heading-xl" weight="bold" color="strong" align="center" style={{ display: "block", marginBottom: "var(--space-2)" }}>Choose your plan</Typography>
        <Typography variant="body-lg" color="muted" align="center" style={{ display: "block", marginBottom: "var(--space-8)" }}>All plans include personal accident cover and 24x7 assistance.</Typography>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {PLANS.map((p) => {
            const isSelected = selectedPlan === p.id;
            return (
              <Card
                key={p.id}
                variant={isSelected ? "elevated" : "default"}
                padding="none"
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelectedPlan(p.id)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedPlan(p.id)}
                style={{ cursor: "pointer", outline: isSelected ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, touchAction: "manipulation", transition: "box-shadow var(--duration-fast) var(--ease-out-cubic)" }}
              >
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-4)", marginBottom: "var(--space-3)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                      <Typography variant="heading-sm" weight="semibold" color="strong">{p.name}</Typography>
                      {p.badge && <Badge color="blue" size="sm">{p.badge}</Badge>}
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Typography variant="heading-md" weight="bold" color={isSelected ? "primary" : "strong"} style={{ fontVariantNumeric: "tabular-nums" }}>₹{p.price.toLocaleString("en-IN")}</Typography>
                      <Typography variant="caption" color="muted">/year</Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                    {p.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                        <CheckCircle size={14} aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }} />
                        <Typography variant="body-sm" color="muted">{h}</Typography>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator />

      {/* Testimonials */}
      <section style={{ padding: "var(--space-16) var(--space-6)", maxWidth: 720, margin: "0 auto", width: "100%" }}>
        <Typography variant="heading-xl" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>What our customers say</Typography>
        <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)" }}>Real stories from real car owners.</Typography>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} variant="default" padding="none">
              <CardContent>
                <div style={{ display: "flex", gap: "var(--space-1)", marginBottom: "var(--space-3)" }}>
                  {Array.from({ length: t.rating }, (_, i) => <Star key={i} size={14} fill="currentColor" aria-hidden="true" style={{ color: "var(--color-warning)" }} />)}
                </div>
                <Typography variant="body-md" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>"{t.text}"</Typography>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <div style={{ width: "var(--scale-32)", height: "var(--scale-32)", borderRadius: "var(--radius-full)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="label-sm" weight="semibold" color="primary">{t.name.charAt(0)}</Typography>
                  </div>
                  <div>
                    <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{t.name}</Typography>
                    <Typography variant="caption" color="muted">{t.location}</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* FAQs */}
      <section style={{ padding: "var(--space-16) var(--space-6)", maxWidth: 720, margin: "0 auto", width: "100%" }}>
        <Typography variant="heading-xl" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Frequently asked questions</Typography>
        <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)" }}>Everything you need to know about car insurance.</Typography>
        <Accordion items={FAQS.map(f => ({ title: f.title, content: f.content }))} />
      </section>

      {/* Footer CTA */}
      <div style={{ background: "var(--color-surface-secondary)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-8) var(--space-6)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-4)" }}>
          <div>
            <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>Ready to get covered?</Typography>
            <Typography variant="body-sm" color="muted">Takes less than 2 minutes.</Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>
            Get started <ChevronRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: "var(--space-6)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <Typography variant="caption" color="muted" align="center" style={{ display: "block" }}>
          ACKO General Insurance Ltd. · IRDAI Licence No. 157 · CIN: U66000MH2016PLC287385
        </Typography>
      </footer>
    </div>
  );
}
