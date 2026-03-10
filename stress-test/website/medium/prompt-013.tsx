import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Accordion } from "@acko/accordion";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

const HIGHLIGHTS = [
  { icon: "🏥", title: "Medical emergencies", body: "Hospitalisation, surgery, and emergency evacuation covered up to the full sum insured." },
  { icon: "✈️", title: "Trip cancellation", body: "Get reimbursed if your trip is cancelled due to illness, natural disaster, or airline insolvency." },
  { icon: "🧳", title: "Lost baggage", body: "Compensation for lost, stolen, or delayed checked baggage — per bag, not per trip." },
];

const FAQ_ITEMS = [
  { value: "q1", trigger: "What is travel insurance and do I need it?", content: "Travel insurance covers unexpected events while travelling — medical emergencies, trip cancellations, lost baggage, and more. It's essential for international travel and strongly recommended for domestic trips." },
  { value: "q2", trigger: "Does the policy cover pre-existing conditions?", content: "Medical emergencies directly arising from pre-existing conditions are generally not covered. However, life-threatening emergencies resulting from a pre-existing condition may be covered. Please read the policy wordings for specifics." },
  { value: "q3", trigger: "Can I buy travel insurance after I've departed?", content: "No. Travel insurance must be purchased before you begin your trip. Cover starts from your departure date and cannot be backdated." },
];

export default function Prompt013() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "var(--color-primary)", padding: "var(--space-20) var(--space-4)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <div>
            <Typography variant="display-lg" weight="bold" color="default" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
              Travel with the confidence that you're covered
            </Typography>
            <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
              Single trip or annual multi-trip — plans from ₹199. Instant cover, worldwide.
            </Typography>
          </div>
          <Button type="button" variant="secondary" size="lg" style={{ touchAction: "manipulation" }}>
            Get a free quote
          </Button>
        </div>
      </section>

      <Separator />

      {/* Coverage highlights */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            What's covered
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="highlights-grid">
            {HIGHLIGHTS.map((h) => (
              <Card key={h.title} variant="default" padding="lg">
                <CardContent>
                  <div style={{ fontSize: "var(--scale-36)", marginBottom: "var(--space-3)", lineHeight: 1 }} aria-hidden="true">{h.icon}</div>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>{h.title}</Typography>
                  <Typography variant="body-md" color="muted" style={{ textWrap: "pretty" }}>{h.body}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            Common questions
          </Typography>
          <Accordion type="single" items={FAQ_ITEMS} collapsible defaultValue="q1" />
        </div>
      </section>

      <style>{`
        @media (min-width: 680px) {
          .highlights-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
