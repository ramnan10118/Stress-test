import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Avatar } from "@acko/avatar";
import { Separator } from "@acko/separator";
import { TextInput } from "@acko/text-input";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const COVERAGE_HIGHLIGHTS = [
  { icon: "🏥", title: "Emergency medical", body: "Hospitalisations, surgery, and emergency evacuation covered worldwide up to full sum insured." },
  { icon: "✈️", title: "Trip cancellation", body: "100% reimbursement if your trip is cancelled for a covered reason — before or after departure." },
  { icon: "🧳", title: "Lost & delayed baggage", body: "Compensation per bag for loss, theft, or delays over 12 hours." },
  { icon: "🔀", title: "Flight delays", body: "Cash benefit for every 6-hour delay beyond the scheduled departure." },
];

const CLAIM_STEPS = [
  { num: "1", title: "Inform us within 24 hours", body: "Call our 24×7 travel helpline or submit via the ACKO app. Do this from wherever you are in the world." },
  { num: "2", title: "Collect your documents", body: "Boarding passes, medical bills, police FIR, airline delay certificate — whatever applies to your claim type." },
  { num: "3", title: "Submit online", body: "Upload all documents through the app or email. No courier, no physical forms." },
  { num: "4", title: "Receive settlement", body: "Most travel claims are reviewed and settled within 7 working days of complete document submission." },
];

const TESTIMONIALS = [
  { name: "Rohan M.", city: "Bengaluru", rating: 5, text: "Got appendicitis in Singapore. ACKO's helpline arranged hospital admission and paid the bill directly — ₹2.8 lakh settlement." },
  { name: "Sneha K.", city: "Mumbai", rating: 4, text: "Flight cancelled due to strike. Reimbursement of ₹14,000 processed within 5 days. Smooth process." },
];

export default function Prompt023() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-64)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>Get a quote</Button>
        </div>
      </header>

      {/* Destination search hero */}
      <section style={{ background: "var(--color-primary)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)", textAlign: "center" }}>
          <div style={{ color: "var(--color-on-primary)" }}>
            <Typography variant="display-lg" weight="bold" style={{ margin: 0, textWrap: "balance" }}>
              Travel covered, wherever you're headed
            </Typography>
          </div>
          <Typography variant="body-lg" color="muted">
            International or domestic — single trip or annual multi-trip. From ₹199.
          </Typography>
          <div style={{ background: "var(--grey-white)", borderRadius: "var(--radius-2xl)", padding: "var(--space-5)", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }} className="quote-inputs">
              <TextInput label="Destination" placeholder="e.g. Thailand" />
              <TextInput label="Travel date" placeholder="DD / MM / YYYY" type="text" />
            </div>
            <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Get your quote</Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Coverage highlights */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>What's covered</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-4)" }} className="coverage-grid">
            {COVERAGE_HIGHLIGHTS.map((c) => (
              <Card key={c.title} variant="default" padding="md">
                <CardContent>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "var(--scale-32)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{c.icon}</div>
                    <div>
                      <Typography variant="heading-sm" weight="semibold" style={{ color: "var(--color-text-strong)", display: "block", marginBottom: "var(--space-1)" }}>{c.title}</Typography>
                      <Typography variant="body-sm" style={{ color: "var(--color-text-secondary)" }}>{c.body}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Claim process */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)" }}>How to file a travel claim</Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {CLAIM_STEPS.map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
                <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", background: "var(--color-primary)", color: "var(--color-on-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Typography variant="label-lg" weight="bold">{s.num}</Typography>
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

      {/* Testimonials */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>Real claims, real settlements</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} variant="outline" padding="md">
                <CardContent>
                  <Typography variant="body-md" color="default" style={{ fontStyle: "italic", marginBottom: "var(--space-4)" }}>"{t.text}"</Typography>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <Avatar initials={t.name.split(" ").map(n => n[0]).join("")} size="sm" />
                    <div>
                      <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{t.name}</Typography>
                      <Typography variant="caption" color="muted">{t.city}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <footer style={{ background: "var(--grey-700)", padding: "var(--space-8) var(--space-4)", textAlign: "center" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20Primary%20Dark%20BG.svg" alt="ACKO" height={40} style={{ height: "var(--scale-40)", width: "auto", marginBottom: "var(--space-3)" }} />
        <Typography variant="caption" color="muted" style={{ display: "block" }}>IRDAI Licence No. 157 · © 2026 Acko General Insurance Ltd. All rights reserved.</Typography>
      </footer>

      <style>{`
        @media (min-width: 680px) {
          .quote-inputs { grid-template-columns: 1fr 1fr !important; }
          .coverage-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
