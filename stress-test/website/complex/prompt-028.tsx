import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Accordion } from "@acko/accordion";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { TextInput } from "@acko/text-input";
import { useState } from "react";

const CLAIM_STEPS = [
  { num: "1", icon: "📱", title: "Open the ACKO app", body: "Tap 'File a Claim' on your active policy. Works for own-damage, theft, and third-party claims." },
  { num: "2", icon: "📸", title: "Document the damage", body: "Take clear photos of all damage from multiple angles. More photos = faster processing." },
  { num: "3", icon: "📋", title: "Submit the claim", body: "Fill in the incident details — date, time, location, description. Add any police FIR or MLC if applicable." },
  { num: "4", icon: "🔍", title: "Our team reviews", body: "A claims specialist reviews your submission. For most cases, approval is within 30 minutes." },
  { num: "5", icon: "🏭", title: "Repairs at a network garage", body: "Take your car to any of 5,000+ cashless garages. We authorise the repairs directly." },
  { num: "6", icon: "✅", title: "Pickup and settle", body: "Collect your car once repairs are done. The garage bills us directly — no out-of-pocket for you." },
];

const GARAGE_CITIES = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Kolkata"];

const CLAIM_TYPES = [
  { value: "own_damage", trigger: "What is covered under own-damage claims?", content: "Your own vehicle's damage from accidents, fire, natural disasters (floods, earthquakes, storms), theft, vandalism, and malicious acts. Wear and tear, mechanical breakdown, and depreciation are excluded." },
  { value: "third_party", trigger: "What is a third-party claim?", content: "A claim for damage or injury caused to another person, their vehicle, or property by your car. Third-party cover is legally mandatory and included in all ACKO car insurance plans." },
  { value: "theft", trigger: "How do I claim for car theft?", content: "File an FIR at the nearest police station immediately. Then submit the FIR copy, RC, driving licence, and keys to ACKO via the app. Settlement is processed after the investigation period as required by law." },
];

export default function Prompt028() {
  const [pincode, setPincode] = useState("");

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-64)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>File a claim</Button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-12) var(--space-4)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
          <Badge color="green" size="md">96% claims approved · Avg. 30 min</Badge>
          <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: 0, textWrap: "balance" }}>
            A claims process that works when you need it
          </Typography>
          <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
            File in 2 minutes from your phone. Cashless repairs at 5,000+ garages. No paperwork.
          </Typography>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>File a claim now</Button>
        </div>
      </section>

      <Separator />

      {/* Step-by-step claim process */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            How the claims process works
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="steps-grid">
            {CLAIM_STEPS.map((s) => (
              <Card key={s.num} variant="default" padding="md">
                <CardContent>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "var(--scale-32)", flexShrink: 0 }} aria-hidden="true">{s.icon}</div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                        <Typography variant="caption" color="muted">Step {s.num}</Typography>
                        <Typography variant="label-lg" weight="semibold" color="strong">{s.title}</Typography>
                      </div>
                      <Typography variant="body-sm" color="muted">{s.body}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Garage locator */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" style={{ margin: "0 0 var(--space-4)", textWrap: "balance" }}>Find a cashless garage near you</Typography>
          <Typography variant="body-md" color="muted" style={{ marginBottom: "var(--space-5)" }}>
            5,000+ network garages across India. No upfront payment, no running around.
          </Typography>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
              <TextInput label="Enter pincode or city" placeholder="400001 or Mumbai" value={pincode} onChange={setPincode} />
            </div>
            <div style={{ paddingTop: 24 }}>
              <Button type="submit" variant="primary" size="md" style={{ touchAction: "manipulation" }}>Search</Button>
            </div>
          </form>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-4)" }}>
            {GARAGE_CITIES.map((city) => (
              <button
                key={city}
                style={{ padding: "var(--space-1) var(--space-3)", borderRadius: "var(--radius-full)", border: "1px solid var(--color-border-default)", background: "var(--color-surface)", cursor: "pointer", touchAction: "manipulation" }}
              >
                <Typography variant="body-sm" color="default">{city}</Typography>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Claim types FAQ */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>Types of claims</Typography>
          <Accordion type="single" items={CLAIM_TYPES} collapsible defaultValue="own_damage" />
        </div>
      </section>

      <footer style={{ background: "var(--grey-700)", padding: "var(--space-8) var(--space-4)", textAlign: "center" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20Primary%20Dark%20BG.svg" alt="ACKO" height={40} style={{ height: "var(--scale-40)", width: "auto", marginBottom: "var(--space-3)" }} />
        <Typography variant="caption" color="muted" style={{ display: "block" }}>IRDAI Licence No. 157 · © 2026 Acko General Insurance Ltd.</Typography>
      </footer>

      <style>{`
        @media (min-width: 680px) {
          .steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
