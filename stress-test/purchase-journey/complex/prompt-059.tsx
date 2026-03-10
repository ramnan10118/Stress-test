import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { Dropdown } from "@acko/dropdown";

type Step = "trip" | "travellers" | "plan" | "details" | "payment";

const STEPS: { id: Step; label: string }[] = [
  { id: "trip", label: "Trip" },
  { id: "travellers", label: "Travellers" },
  { id: "plan", label: "Plan" },
  { id: "details", label: "Details" },
  { id: "payment", label: "Payment" },
];

const PLANS = [
  { id: "basic", name: "Basic", price: 199, features: ["Medical up to ₹10L", "Trip cancellation", "Baggage loss"] },
  { id: "standard", name: "Standard", price: 399, features: ["Medical up to ₹25L", "Trip cancel + delay", "Baggage + passport loss", "Flight delay benefit"], badge: "Popular" },
  { id: "premium", name: "Premium", price: 699, features: ["Medical up to ₹50L", "All Standard benefits", "Adventure sports", "24×7 concierge"] },
];

export default function Prompt059() {
  const [step, setStep] = useState<Step>("trip");
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [tripForm, setTripForm] = useState({ destination: "", departure: "", returnDate: "", tripType: "international" });
  const [travellers, setTravellers] = useState([{ name: "", dob: "", passport: "" }]);

  const stepIndex = STEPS.findIndex((s) => s.id === step);
  const plan = PLANS.find((p) => p.id === selectedPlan)!;

  const next = () => {
    const idx = STEPS.findIndex((s) => s.id === step);
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1].id);
  };
  const prev = () => {
    const idx = STEPS.findIndex((s) => s.id === step);
    if (idx > 0) setStep(STEPS[idx - 1].id);
  };

  const addTraveller = () => setTravellers((t) => [...t, { name: "", dob: "", passport: "" }]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={prev} style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
            {STEPS.map((s, i) => (
              <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                <div style={{ width: "var(--scale-24)", height: "var(--scale-24)", borderRadius: "var(--radius-full)", background: i < stepIndex ? "var(--color-primary)" : i === stepIndex ? "var(--color-primary)" : "var(--color-border-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {i < stepIndex ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-on-primary)" }}><path d="M20 6 9 17l-5-5" /></svg>
                  ) : (
                    <Typography variant="caption" weight="semibold" color={i === stepIndex ? "default" : "muted"}>{i + 1}</Typography>
                  )}
                </div>
                {i < STEPS.length - 1 && <div style={{ width: 12, height: 2, background: i < stepIndex ? "var(--color-primary)" : "var(--color-border-subtle)" }} />}
              </div>
            ))}
          </div>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ padding: "0 var(--space-4) var(--space-2)" }}>
          <Typography variant="label-md" weight="semibold" color="strong">{STEPS[stepIndex].label}</Typography>
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4) 100px", maxWidth: 580, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {step === "trip" && (
          <Card variant="default" padding="lg">
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <TextInput label="Destination" placeholder="e.g. Thailand, Europe" value={tripForm.destination} onChange={(v) => setTripForm((f) => ({ ...f, destination: v }))} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                  <TextInput label="Departure" placeholder="DD/MM/YYYY" value={tripForm.departure} onChange={(v) => setTripForm((f) => ({ ...f, departure: v }))} />
                  <TextInput label="Return" placeholder="DD/MM/YYYY" value={tripForm.returnDate} onChange={(v) => setTripForm((f) => ({ ...f, returnDate: v }))} />
                </div>
                <Dropdown label="Trip type" value={tripForm.tripType} onChange={(v) => setTripForm((f) => ({ ...f, tripType: v }))} options={[{ value: "international", label: "International" }, { value: "domestic", label: "Domestic" }]} />
              </div>
            </CardContent>
          </Card>
        )}

        {step === "travellers" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {travellers.map((t, i) => (
              <Card key={i} variant="default" padding="md">
                <CardContent>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Traveller {i + 1}</Typography>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                    <TextInput label="Full name" placeholder="As per passport" value={t.name} onChange={(v) => setTravellers((trs) => trs.map((x, j) => j === i ? { ...x, name: v } : x))} />
                    <TextInput label="Date of birth" placeholder="DD/MM/YYYY" value={t.dob} onChange={(v) => setTravellers((trs) => trs.map((x, j) => j === i ? { ...x, dob: v } : x))} />
                    <TextInput label="Passport number" placeholder="A1234567" value={t.passport} onChange={(v) => setTravellers((trs) => trs.map((x, j) => j === i ? { ...x, passport: v.toUpperCase() } : x))} autoComplete="off" />
                  </div>
                </CardContent>
              </Card>
            ))}
            <button onClick={addTraveller} style={{ background: "none", border: "1px dashed var(--color-border-default)", borderRadius: "var(--radius-lg)", padding: "var(--space-3)", cursor: "pointer", color: "var(--color-primary)", touchAction: "manipulation" }}>
              + Add traveller
            </button>
          </div>
        )}

        {step === "plan" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {PLANS.map((p) => (
              <Card key={p.id} variant={selectedPlan === p.id ? "elevated" : "default"} padding="md" role="radio" aria-checked={selectedPlan === p.id} tabIndex={0} onClick={() => setSelectedPlan(p.id)} onKeyDown={(e) => e.key === "Enter" && setSelectedPlan(p.id)} style={{ cursor: "pointer", outline: selectedPlan === p.id ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, touchAction: "manipulation" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                        <Typography variant="label-lg" weight="semibold" color="strong">{p.name}</Typography>
                        {p.badge && <Badge color="blue" size="sm">{p.badge}</Badge>}
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                        {p.features.map((f) => (
                          <li key={f} style={{ display: "flex", gap: "var(--space-2)" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0, marginTop: 1 }}><path d="M20 6 9 17l-5-5" /></svg>
                            <Typography variant="caption" color="default">{f}</Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "var(--space-4)" }}>
                      <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{p.price}</Typography>
                      <Typography variant="caption" color="muted">/person</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {(step === "details" || step === "payment") && (
          <Card variant="default" padding="lg">
            <CardContent>
              <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
                {step === "details" ? "Contact details" : "Payment summary"}
              </Typography>
              {step === "details" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  <TextInput label="Email address" placeholder="you@example.com" type="email" autoComplete="email" />
                  <TextInput label="Mobile number" placeholder="9876543210" type="tel" autoComplete="tel" />
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body-sm" color="muted">{plan.name} × {travellers.length}</Typography>
                    <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.price * travellers.length}</Typography>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body-sm" color="muted">GST (18%)</Typography>
                    <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{Math.round(plan.price * travellers.length * 0.18)}</Typography>
                  </div>
                  <Separator />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="label-lg" weight="semibold" color="strong">Total</Typography>
                    <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{Math.round(plan.price * travellers.length * 1.18)}</Typography>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>

      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={next}>
            {step === "payment" ? `Pay ₹${Math.round(plan.price * travellers.length * 1.18)}` : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
}
