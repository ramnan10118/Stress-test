import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Avatar } from "@acko/avatar";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ color: "var(--orange-400)" }}>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const FEATURED = {
  name: "Kavitha Rajan",
  city: "Hyderabad",
  rating: 5,
  text: "My car was totalled in an accident on the Outer Ring Road. I filed the claim from the ACKO app while still at the scene. Within 35 minutes I had an approval notification. The entire settlement — ₹9.2 lakh — was processed in 3 working days. I've been with ACKO for 4 years and this is exactly why I'll never switch.",
  policy: "Comprehensive+ · Zero Depreciation",
};

const SUPPORTING = [
  {
    name: "Sameer Joshi",
    city: "Nagpur",
    rating: 5,
    text: "Premium was ₹2,800 cheaper than my previous insurer for the same comprehensive cover. The renewal was online, took 4 minutes. No agent calls, no upsell.",
  },
  {
    name: "Meera Pillai",
    city: "Kochi",
    rating: 4,
    text: "Roadside assistance got me a tow at 2 AM on the highway. Genuinely surprised — I expected a 2-hour wait. It was 28 minutes. Polite team, no extra charges.",
  },
];

export default function Prompt020() {
  return (
    <section style={{ background: "var(--color-surface)", padding: "var(--space-16) var(--space-4)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
            What our customers say
          </Typography>
          <Typography variant="body-lg" color="muted">
            Real stories from real customers — not marketing copy.
          </Typography>
        </div>

        {/* Featured large testimonial */}
        <Card variant="elevated" padding="lg" style={{ marginBottom: "var(--space-5)" }}>
          <CardContent>
            <div style={{ display: "flex", gap: "var(--space-1)", marginBottom: "var(--space-4)" }}>
              {Array.from({ length: FEATURED.rating }).map((_, i) => <StarIcon key={i} />)}
            </div>
            <Typography variant="body-lg" color="default" style={{ fontStyle: "italic", textWrap: "pretty", marginBottom: "var(--space-5)" }}>
              "{FEATURED.text}"
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <Avatar initials={FEATURED.name.split(" ").map(n => n[0]).join("")} size="md" />
              <div>
                <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block" }}>{FEATURED.name}</Typography>
                <Typography variant="body-sm" color="muted">{FEATURED.city} · {FEATURED.policy}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supporting two */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="supporting-grid">
          {SUPPORTING.map((t) => (
            <Card key={t.name} variant="outline" padding="md">
              <CardContent>
                <div style={{ display: "flex", gap: "var(--space-1)", marginBottom: "var(--space-3)" }}>
                  {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} />)}
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

      <style>{`
        @media (min-width: 680px) {
          .supporting-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
