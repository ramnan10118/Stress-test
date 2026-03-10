import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Avatar } from "@acko/avatar";
import { Separator } from "@acko/separator";

const BENEFITS = [
  { icon: "🏥", title: "Cashless hospitalisation", body: "Get treated at 10,000+ network hospitals without paying upfront. We settle the bill directly." },
  { icon: "👨‍👩‍👧", title: "Entire family on one plan", body: "Cover your spouse, kids, and parents under a single family floater plan at one premium." },
  { icon: "🔄", title: "No waiting for renewals", body: "Continuous cover with no-break protection. Renewal in 2 minutes, active the same day." },
];

const TESTIMONIALS = [
  { name: "Divya Menon", city: "Chennai", rating: 5, text: "My father's bypass surgery was fully covered. No bill at discharge. The team was incredibly supportive." },
  { name: "Arjun Kapoor", city: "Pune", rating: 5, text: "Added my parents mid-year without any hassle. The process was online and took less than 10 minutes." },
];

export default function Prompt012() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-20) var(--space-4)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <div>
            <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
              Health cover that puts your family first
            </Typography>
            <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
              One plan covers everyone. No sub-limits, no surprise bills, no fine print traps.
            </Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>
            Get a free quote
          </Button>
        </div>
      </section>

      <Separator />

      {/* Benefits */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            Coverage built around your family
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="benefits-grid">
            {BENEFITS.map((b) => (
              <Card key={b.title} variant="default" padding="lg">
                <CardContent>
                  <div style={{ fontSize: "var(--scale-40)", marginBottom: "var(--space-3)", lineHeight: 1 }} aria-hidden="true">{b.icon}</div>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>{b.title}</Typography>
                  <Typography variant="body-md" color="muted" style={{ textWrap: "pretty" }}>{b.body}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Testimonials */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            What our customers say
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} variant="outline" padding="md">
                <CardContent>
                  <div style={{ display: "flex", gap: "var(--space-1)", marginBottom: "var(--space-3)" }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ color: "var(--orange-400)" }}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <Typography variant="body-md" color="default" style={{ fontStyle: "italic", textWrap: "pretty", marginBottom: "var(--space-4)" }}>"{t.text}"</Typography>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
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

      <style>{`
        @media (min-width: 680px) {
          .benefits-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
