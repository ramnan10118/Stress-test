import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Button } from "@acko/button";
import { Progress } from "@acko/progress";

type OnboardingStep = 0 | 1 | 2 | 3 | 4;

const SLIDES: { icon: string; title: string; desc: string; accent: string }[] = [
  { icon: "🛡️", title: "India's most loved insurer", desc: "8 crore+ happy customers. Claims settled in 30 minutes — directly on the app.", accent: "var(--color-primary)" },
  { icon: "🚗", title: "Car insurance that's actually simple", desc: "Enter your vehicle number and get covered in under 3 minutes. No paperwork, no agents.", accent: "var(--purple-700)" },
  { icon: "❤️", title: "Health cover for the whole family", desc: "One floater plan covers everyone. Cashless treatment at 10,000+ hospitals.", accent: "var(--red-600, var(--color-error))" },
  { icon: "⚡", title: "Claims? We make them fast.", desc: "Upload photos → get approved in 30 min → cashless repair at 5,000+ garages. No hassle.", accent: "var(--orange-500)" },
  { icon: "🎁", title: "Reward for staying safe", desc: "No Claim Bonus: up to 50% discount if you drive carefully year after year.", accent: "var(--color-success)" },
];

export default function Prompt090() {
  const [step, setStep] = useState<OnboardingStep>(0);
  const [skipped, setSkipped] = useState(false);

  if (skipped || step === SLIDES.length) {
    return (
      <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-8) var(--space-6)", gap: "var(--space-6)" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={32} style={{ height: 32, width: "auto" }} />
        <div>
          <Typography variant="heading-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)", textWrap: "balance" }} align="center">Welcome to ACKO</Typography>
          <Typography variant="body-md" color="muted" align="center">Get covered in minutes. Login or sign up to continue.</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Login / Sign up</Button>
          <Button type="button" variant="ghost" size="md" style={{ width: "100%", touchAction: "manipulation" }}>Continue as guest</Button>
        </div>
        <Typography variant="caption" color="muted" align="center">
          By continuing, you agree to ACKO's terms and privacy policy.
        </Typography>
      </div>
    );
  }

  const slide = SLIDES[step];
  const progress = Math.round(((step + 1) / SLIDES.length) * 100);

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Status bar */}
      <div style={{ height: 44, background: slide.accent, transition: "background var(--duration-fast) ease" }} />

      {/* Hero area */}
      <div style={{ background: slide.accent, transition: "background var(--duration-fast) ease", padding: "var(--space-4) var(--space-6) var(--space-10)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", minHeight: 260, justifyContent: "center" }}>
        {/* Skip */}
        <div style={{ alignSelf: "flex-end" }}>
          <button onClick={() => setSkipped(true)} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "var(--radius-full)", padding: "var(--space-1) var(--space-3)", cursor: "pointer", touchAction: "manipulation" }}>
            <Typography variant="caption" style={{ color: "var(--grey-white)" }}>Skip</Typography>
          </button>
        </div>

        {/* Icon */}
        <div style={{ width: 100, height: 100, borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">
          {slide.icon}
        </div>

        <div>
          <Typography variant="heading-md" weight="bold" style={{ color: "var(--grey-white)", margin: "0 0 var(--space-2)", textWrap: "balance" }} align="center">{slide.title}</Typography>
          <Typography variant="body-md" style={{ color: "rgba(255,255,255,0.8)", textWrap: "pretty" }} align="center">{slide.desc}</Typography>
        </div>
      </div>

      {/* Bottom pane */}
      <div style={{ flex: 1, background: "var(--grey-white)", borderTopLeftRadius: "var(--radius-2xl)", borderTopRightRadius: "var(--radius-2xl)", marginTop: -24, padding: "var(--space-6) var(--space-6) var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* Dot indicators */}
        <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "center" }}>
          {SLIDES.map((_, i) => (
            <div key={i} style={{ height: 8, borderRadius: "var(--radius-full)", background: i === step ? slide.accent : "var(--color-border-subtle)", width: i === step ? 24 : 8, transition: "all var(--duration-fast) ease" }} />
          ))}
        </div>

        {/* Progress */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-1)" }}>
            <Typography variant="caption" color="muted">Step {step + 1} of {SLIDES.length}</Typography>
            <Typography variant="caption" weight="semibold" color="default">{progress}%</Typography>
          </div>
          <Progress value={progress} />
        </div>

        {/* Bullets for current slide */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          {[
            ["Instant policy issuance", "Saves to email & WhatsApp"],
            ["Car covered from ₹2,094/yr", "3-minute online process"],
            ["Cashless at 10,000+ hospitals", "₹5–20 lakh sum insured"],
            ["5,000+ cashless garages", "Surveyor within 24 hours"],
            ["50% off after 5 claim-free years", "Transferable to new vehicle"],
          ][step].map((bullet) => (
            <div key={bullet} style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: slide.accent, flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>
              <Typography variant="body-sm" color="default">{bullet}</Typography>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", background: slide.accent, touchAction: "manipulation" }} onClick={() => step < SLIDES.length - 1 ? setStep((s) => (s + 1) as OnboardingStep) : setStep(SLIDES.length as OnboardingStep)}>
            {step < SLIDES.length - 1 ? "Next" : "Get started"}
          </Button>
          {step < SLIDES.length - 1 && (
            <button onClick={() => setStep(SLIDES.length as OnboardingStep)} style={{ background: "none", border: "none", cursor: "pointer", touchAction: "manipulation" }}>
              <Typography variant="body-sm" color="muted" align="center" style={{ display: "block" }}>Skip to login</Typography>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
