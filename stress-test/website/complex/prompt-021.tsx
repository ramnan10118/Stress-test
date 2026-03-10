import { useState } from "react";
import { Check, Star, Shield, Clock, Wrench } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Avatar } from "@acko/avatar";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

const STEPS = [
  { num: "1", title: "Enter your car number", body: "We pull your car details instantly — no manual data entry needed." },
  { num: "2", title: "Select your plan", body: "Compare Third Party, Comprehensive, and Total Protect side by side." },
  { num: "3", title: "Pay and get covered", body: "Policy issued instantly. Document in your inbox in seconds." },
];

const BENEFITS = [
  { icon: Clock, title: "Digital-first claims", body: "File in 2 minutes from your phone. Most claims approved in 30 minutes." },
  { icon: Shield, title: "Transparent pricing", body: "The price you see is what you pay. No agent commissions, no hidden charges." },
  { icon: Wrench, title: "3,000+ network garages", body: "Cashless repairs across India. No upfront payment, no running around." },
];

const TESTIMONIALS = [
  { name: "Priya S.", city: "Mumbai", rating: 5, text: "Claims settled in 35 minutes. I couldn't believe it. Best insurer I've used." },
  { name: "Rahul V.", city: "Delhi", rating: 5, text: "Saved ₹3,000 on renewal vs my previous insurer. Digital, fast, zero calls." },
  { name: "Ananya P.", city: "Bengaluru", rating: 4, text: "Roadside assistance at midnight. Tow truck in 28 minutes. Genuinely impressed." },
];

export default function Prompt021() {
  const [carNumber, setCarNumber] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <>
      <style>{`
        .p021-page {
          min-height: 100vh;
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
        }

        /* ── Section Container ── */
        .p021-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p021-container { padding-inline: var(--space-8); }
        }

        @media (min-width: 1024px) {
          .p021-container { padding-inline: var(--space-10); }
        }

        /* ── Header ── */
        .p021-header {
          background: var(--grey-white);
          border-bottom: 1px solid var(--color-border-subtle);
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
        }

        .p021-header-inner {
          height: var(--scale-64);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .p021-logo {
          height: var(--scale-24);
          width: auto;
        }

        .p021-header-actions {
          display: flex;
          gap: var(--space-2);
        }

        /* ── Hero ── */
        .p021-hero {
          background: var(--grey-white);
          padding-block: var(--space-16);
        }

        .p021-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-10);
          align-items: center;
        }

        @media (min-width: 768px) {
          .p021-hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .p021-hero-copy {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .p021-quote-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        /* ── Sections ── */
        .p021-section {
          padding-block: var(--space-16);
        }

        .p021-section-alt {
          padding-block: var(--space-16);
          background: var(--grey-white);
        }

        .p021-section-heading {
          margin-bottom: var(--space-10);
          text-align: center;
        }

        /* ── Grids ── */
        .p021-grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3);
        }

        @media (min-width: 768px) {
          .p021-grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── Step number circle ── */
        .p021-step-num {
          width: var(--scale-36);
          height: var(--scale-36);
          border-radius: var(--radius-full);
          background: var(--color-primary);
          color: var(--color-on-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: var(--space-3);
        }

        /* ── Benefit icon ── */
        .p021-benefit-icon {
          width: var(--scale-44);
          height: var(--scale-44);
          border-radius: var(--radius-xl);
          background: var(--color-primary-subtle);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: var(--space-3);
        }

        /* ── Star rating ── */
        .p021-stars {
          display: flex;
          gap: var(--space-1);
          margin-bottom: var(--space-3);
        }

        /* ── Footer ── */
        .p021-footer {
          background: var(--grey-700);
          padding-block: var(--space-10);
        }

        .p021-footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
        }

        .p021-footer-logo {
          height: var(--scale-44);
          width: auto;
        }
      `}</style>

      <div className="p021-page">
        {/* Header */}
        <header className="p021-header">
          <div className="p021-container p021-header-inner">
            <img
              src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
              alt="ACKO"
              className="p021-logo"
            />
            <div className="p021-header-actions">
              <Button type="button" variant="outline" size="sm">Log in</Button>
              <Button type="button" variant="primary" size="sm">Get a quote</Button>
            </div>
          </div>
        </header>

        {/* Hero with quote form */}
        <section className="p021-hero">
          <div className="p021-container p021-hero-grid">
            <div className="p021-hero-copy">
              <Badge color="green" size="sm">Trusted by 50 lakh+ car owners</Badge>
              <Typography variant="display-lg" weight="bold" color="strong" as="h1" style={{ textWrap: "balance" }}>
                Car insurance that works when you need it most
              </Typography>
              <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
                100% digital. No agents. Claims in 30 minutes. Prices you can trust.
              </Typography>
            </div>

            <Card variant="elevated" padding="lg">
              <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-6)" }}>
                Get your free quote
              </Typography>
              <form onSubmit={(e) => e.preventDefault()} className="p021-quote-form">
                <TextInput
                  label="Vehicle number"
                  placeholder="MH 01 AB 1234"
                  value={carNumber}
                  onChange={(v) => setCarNumber(v.toUpperCase())}
                  autoComplete="off"
                />
                <TextInput
                  label="Mobile number"
                  placeholder="9876543210"
                  type="tel"
                  value={mobile}
                  onChange={(v) => setMobile(v.replace(/\D/g, "").slice(0, 10))}
                  autoComplete="tel"
                />
                <Button type="submit" variant="primary" size="lg" fullWidth>
                  View my quote
                </Button>
              </form>
            </Card>
          </div>
        </section>

        <Separator />

        {/* How it works */}
        <section className="p021-section">
          <div className="p021-container">
            <div className="p021-section-heading">
              <Typography variant="heading-xl" weight="bold" color="strong" as="h2" style={{ textWrap: "balance" }}>
                How it works
              </Typography>
            </div>
            <div className="p021-grid-3">
              {STEPS.map((s) => (
                <Card key={s.num} variant="default" padding="md">
                  <div className="p021-step-num">
                    <Typography variant="label-lg" weight="bold">{s.num}</Typography>
                  </div>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body-sm" color="muted">{s.body}</Typography>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Benefits grid */}
        <section className="p021-section-alt">
          <div className="p021-container">
            <div className="p021-section-heading">
              <Typography variant="heading-xl" weight="bold" color="strong" as="h2" style={{ textWrap: "balance" }}>
                Why choose ACKO
              </Typography>
            </div>
            <div className="p021-grid-3">
              {BENEFITS.map(({ icon: Icon, title, body }) => (
                <Card key={title} variant="default" padding="lg">
                  <div className="p021-benefit-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                    {title}
                  </Typography>
                  <Typography variant="body-md" color="muted">{body}</Typography>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Testimonials */}
        <section className="p021-section">
          <div className="p021-container">
            <div className="p021-section-heading">
              <Typography variant="heading-xl" weight="bold" color="strong" as="h2" style={{ textWrap: "balance" }}>
                Trusted by 50 lakh+ drivers
              </Typography>
            </div>
            <div className="p021-grid-3">
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} variant="outline" padding="md">
                  <div className="p021-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="var(--orange-400)" stroke="none" aria-hidden="true" />
                    ))}
                  </div>
                  <Typography variant="body-md" color="default" style={{ marginBottom: "var(--space-4)" }}>
                    "{t.text}"
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <Avatar initials={t.name.split(" ").map((n) => n[0]).join("")} size="sm" />
                    <div>
                      <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" color="muted">{t.city}</Typography>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Footer */}
        <footer className="p021-footer">
          <div className="p021-container p021-footer-inner">
            <img
              src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20Primary%20Dark%20BG.svg"
              alt="ACKO"
              className="p021-footer-logo"
            />
            <Typography variant="body-sm" color="muted" align="center">
              IRDAI Licence No. 157 · © 2026 Acko General Insurance Ltd. All rights reserved.
            </Typography>
          </div>
        </footer>
      </div>
    </>
  );
}
