import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { TextInput } from "@acko/text-input";
import { Dropdown } from "@acko/dropdown";
import { Progress } from "@acko/progress";

type ClaimStep = "type" | "details" | "photos" | "review" | "submitted";

const CLAIM_TYPES = [
  { id: "accident", icon: "🚗", label: "Accidental damage" },
  { id: "theft", icon: "🔓", label: "Theft" },
  { id: "fire", icon: "🔥", label: "Fire / flood" },
  { id: "glass", icon: "🪟", label: "Windshield / glass" },
  { id: "tp", icon: "🛡️", label: "Third-party damage" },
];

const STEPS_LABEL = ["Claim type", "Details", "Photos", "Review"];

export default function Prompt083() {
  const [step, setStep] = useState<ClaimStep>("type");
  const [claimType, setClaimType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);

  const stepIndex = ["type", "details", "photos", "review"].indexOf(step);
  const progress = Math.round((stepIndex / 3) * 100);

  const STEPS_MAP: Record<string, number> = { type: 0, details: 1, photos: 2, review: 3, submitted: 4 };

  const next = () => {
    const order: ClaimStep[] = ["type", "details", "photos", "review", "submitted"];
    const idx = order.indexOf(step);
    if (idx < order.length - 1) setStep(order[idx + 1]);
  };

  const prev = () => {
    const order: ClaimStep[] = ["type", "details", "photos", "review", "submitted"];
    const idx = order.indexOf(step);
    if (idx > 0) setStep(order[idx - 1]);
  };

  if (step === "submitted") {
    return (
      <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-8) var(--space-4)", gap: "var(--space-5)" }}>
        <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-success)" }} aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
        </div>
        <Typography variant="heading-md" weight="bold" color="strong" align="center">Claim registered!</Typography>
        <Typography variant="body-md" color="muted" align="center">Claim #CL-2026-002 is registered. A surveyor will contact you within 2 hours.</Typography>
        <Badge color="blue" size="md">CL-2026-002</Badge>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Track claim</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      {/* Header */}
      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <button onClick={prev} style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div style={{ flex: 1 }}>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>File a claim</Typography>
          <Typography variant="caption" color="muted">Step {stepIndex + 1} of 4 · {STEPS_LABEL[stepIndex]}</Typography>
        </div>
      </div>
      <div style={{ height: 3, background: "var(--color-border-subtle)" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "var(--color-primary)", transition: "width var(--duration-fast) ease" }} />
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 100 }}>
        {/* Step 1: Claim type */}
        {step === "type" && (
          <>
            <Typography variant="body-md" color="muted">What happened to your vehicle?</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {CLAIM_TYPES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setClaimType(t.id)}
                  aria-pressed={claimType === t.id}
                  style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-4)", background: claimType === t.id ? "var(--color-primary-subtle)" : "var(--grey-white)", border: `2px solid ${claimType === t.id ? "var(--color-primary)" : "var(--color-border-default)"}`, borderRadius: "var(--radius-xl)", cursor: "pointer", touchAction: "manipulation", textAlign: "left" }}
                >
                  <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">{t.icon}</div>
                  <Typography variant="label-md" weight="semibold" color={claimType === t.id ? "primary" : "strong"}>{t.label}</Typography>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 2: Details */}
        {step === "details" && (
          <>
            <TextInput label="Date of incident" placeholder="DD/MM/YYYY" value={date} onChange={setDate} />
            <TextInput label="Location" placeholder="e.g. Bandra Kurla Complex, Mumbai" value={location} onChange={setLocation} />
            <div>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Description</Typography>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Briefly describe what happened..."
                rows={4}
                style={{ width: "100%", padding: "var(--space-3)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", background: "var(--grey-white)", resize: "none", boxSizing: "border-box" }}
              />
            </div>
          </>
        )}

        {/* Step 3: Photos */}
        {step === "photos" && (
          <>
            <Typography variant="body-md" color="muted">Upload photos of the damage. Clear photos speed up claim processing.</Typography>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--space-2)" }}>
              {["Front view", "Rear view", "Left side", "Right side", "Interior", "Damage close-up"].map((label, i) => (
                <button key={label} style={{ aspectRatio: "1", borderRadius: "var(--radius-xl)", border: "2px dashed var(--color-border-default)", background: "var(--color-surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-1)", cursor: "pointer", touchAction: "manipulation" }} aria-label={`Upload ${label}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-text-muted)" }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                  <Typography variant="caption" color="muted" align="center">{label}</Typography>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 4: Review */}
        {step === "review" && (
          <Card variant="default" padding="md">
            <CardContent>
              <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Review your claim</Typography>
              {[
                { label: "Claim type", value: CLAIM_TYPES.find((t) => t.id === claimType)?.label ?? claimType },
                { label: "Date", value: date || "Not entered" },
                { label: "Location", value: location || "Not entered" },
                { label: "Description", value: desc || "Not provided" },
                { label: "Photos", value: "0 uploaded" },
              ].map((row, i) => (
                <div key={row.label}>
                  {i > 0 && <div style={{ height: 1, background: "var(--color-border-subtle)", margin: "var(--space-2) 0" }} />}
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-2)" }}>
                    <Typography variant="body-sm" color="muted" style={{ flexShrink: 0 }}>{row.label}</Typography>
                    <Typography variant="label-sm" weight="semibold" color="strong" align="right">{row.value}</Typography>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, padding: "var(--space-4)", background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={next} disabled={step === "type" && !claimType}>
          {step === "review" ? "Submit claim" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
