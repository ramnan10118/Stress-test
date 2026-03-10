// Dark Mode — Full travel insurance landing page
import { useState } from "react";
import { Plane, Shield, Clock, Heart, ChevronRight, Star, CheckCircle, Globe, Stethoscope, Luggage, AlertTriangle, ChevronDown } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Accordion } from "@acko/accordion";

const COVERAGE = [
  { icon: Stethoscope, title: "Medical emergencies", desc: "Up to ₹50L cover for hospitalisation, doctor visits, and medicines abroad.", amount: "₹50L" },
  { icon: Luggage, title: "Lost baggage", desc: "Compensation for delayed, lost, or damaged baggage up to ₹1L.", amount: "₹1L" },
  { icon: AlertTriangle, title: "Trip cancellation", desc: "Reimbursement for non-refundable bookings if your trip is cancelled.", amount: "₹2L" },
  { icon: Plane, title: "Flight delay", desc: "₹5,000 for every 6 hours of delay. No questions asked.", amount: "₹15K" },
  { icon: Globe, title: "Passport loss", desc: "Cover for emergency passport replacement and related expenses.", amount: "₹50K" },
  { icon: Heart, title: "Emergency evacuation", desc: "Covers air ambulance and medical evacuation costs.", amount: "₹25L" },
];

const PLANS = [
  { id: "basic", name: "Basic", price: 499, duration: "7 days", badge: null },
  { id: "standard", name: "Standard", price: 999, duration: "15 days", badge: "Popular" },
  { id: "premium", name: "Premium", price: 1999, duration: "30 days", badge: null },
];

const DESTINATIONS = ["Thailand", "Singapore", "Dubai", "Europe", "USA", "Bali", "Japan", "Australia"];

const FAQS = [
  { title: "When should I buy travel insurance?", content: "Buy it as soon as you book your trip. This ensures you're covered for cancellation even before you travel." },
  { title: "Does it cover COVID-19?", content: "Yes, all our plans cover COVID-19 related medical expenses and trip cancellation." },
  { title: "What documents do I need to claim?", content: "Just upload photos of relevant bills and documents through the app. No physical paperwork needed." },
  { title: "Can I extend my policy while abroad?", content: "Yes, you can extend your policy from the ACKO app anytime before it expires." },
];

const TESTIMONIALS = [
  { name: "Sneha M.", location: "Bengaluru", text: "Got hospitalised in Bangkok — ACKO handled everything. ₹3.5L claim settled in 2 days.", rating: 5 },
  { name: "Ravi P.", location: "Mumbai", text: "Flight delayed 12 hours. Got ₹10,000 directly in my account. No hassle.", rating: 5 },
];

export default function Prompt125() {
  const [selectedPlan, setSelectedPlan] = useState("standard");

  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-6)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg" alt="ACKO" style={{ height: "var(--scale-24)", width: "auto" }} />
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <Button type="button" variant="ghost" size="sm" style={{ touchAction: "manipulation" }}>Log in</Button>
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>Get covered</Button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "var(--space-20) var(--space-6)", maxWidth: 720, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
          <Plane size={16} aria-hidden="true" style={{ color: "var(--color-primary)" }} />
          <Typography variant="overline" color="primary">Travel insurance</Typography>
        </div>
        <Typography variant="display-lg" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
          Travel with confidence. We handle the rest.
        </Typography>
        <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)", maxWidth: 540 }}>
          Comprehensive international travel cover starting at ₹499. Medical emergencies, trip cancellation, lost baggage — all covered.
        </Typography>

        {/* Destination pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-8)" }}>
          {DESTINATIONS.map((d) => (
            <div key={d} style={{ background: "var(--color-surface-secondary)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-full)", padding: "var(--space-1) var(--space-3)" }}>
              <Typography variant="caption" color="muted">{d}</Typography>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>Get travel cover</Button>
          <Button type="button" variant="outline" size="lg" style={{ touchAction: "manipulation" }}>Check what's covered</Button>
        </div>
      </section>

      <Separator />

      {/* Coverage */}
      <section style={{ padding: "var(--space-16) var(--space-6)", maxWidth: 720, margin: "0 auto", width: "100%" }}>
        <Typography variant="heading-xl" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>What's covered</Typography>
        <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)" }}>Everything you need for a worry-free trip.</Typography>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-4)" }}>
          {COVERAGE.map(({ icon: Icon, title, desc, amount }) => (
            <Card key={title} variant="default" padding="none">
              <CardContent>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}>
                  <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-lg)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-1)" }}>
                      <Typography variant="label-lg" weight="semibold" color="strong">{title}</Typography>
                      <Badge color="green" size="sm">{amount}</Badge>
                    </div>
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
        <Typography variant="body-lg" color="muted" align="center" style={{ display: "block", marginBottom: "var(--space-8)" }}>All plans include 24x7 global assistance.</Typography>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-4)" }}>
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
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
                    <Typography variant="label-lg" weight="semibold" color="strong">{p.name}</Typography>
                    {p.badge && <Badge color="blue" size="sm">{p.badge}</Badge>}
                  </div>
                  <Typography variant="heading-md" weight="bold" color={isSelected ? "primary" : "strong"} style={{ display: "block", fontVariantNumeric: "tabular-nums", marginBottom: "var(--space-1)" }}>
                    ₹{p.price.toLocaleString("en-IN")}
                  </Typography>
                  <Typography variant="body-sm" color="muted">{p.duration}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator />

      {/* Testimonials */}
      <section style={{ padding: "var(--space-16) var(--space-6)", maxWidth: 720, margin: "0 auto", width: "100%" }}>
        <Typography variant="heading-xl" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Real traveller stories</Typography>
        <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)" }}>Don't take our word for it.</Typography>
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
        <Typography variant="body-lg" color="muted" style={{ display: "block", marginBottom: "var(--space-8)" }}>Everything you need to know before you travel.</Typography>
        <Accordion items={FAQS.map(f => ({ title: f.title, content: f.content }))} />
      </section>

      {/* Footer CTA */}
      <div style={{ background: "var(--color-surface-secondary)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-8) var(--space-6)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-4)" }}>
          <div>
            <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>Ready to travel worry-free?</Typography>
            <Typography variant="body-sm" color="muted">Cover starts from ₹499. Takes 2 minutes.</Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>
            Get travel cover <ChevronRight size={16} aria-hidden="true" />
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
