import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { TextInput } from "@acko/text-input";
import { Separator } from "@acko/separator";

type FieldState = "default" | "success" | "error";

interface Field {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  validate: (v: string) => string;
}

const FIELDS: Field[] = [
  { id: "name", label: "Full name", placeholder: "As per Aadhaar / PAN", autoComplete: "name", validate: (v) => (v.trim().length < 2 ? "Enter your full name" : "") },
  { id: "mobile", label: "Mobile number", placeholder: "9876543210", type: "tel", autoComplete: "tel", validate: (v) => (!/^[6-9][0-9]{9}$/.test(v) ? "Enter a valid 10-digit mobile number" : "") },
  { id: "email", label: "Email address", placeholder: "you@example.com", type: "email", autoComplete: "email", validate: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Enter a valid email address" : "") },
  { id: "dob", label: "Date of birth", placeholder: "DD / MM / YYYY", validate: (v) => (v.trim().length < 8 ? "Enter a valid date of birth" : "") },
  { id: "address", label: "Residential address", placeholder: "Flat / House no., Street, City, Pincode", autoComplete: "street-address", validate: (v) => (v.trim().length < 5 ? "Enter your full address" : "") },
];

export default function Prompt044() {
  const [values, setValues] = useState<Record<string, string>>(Object.fromEntries(FIELDS.map((f) => [f.id, ""])));
  const [errors, setErrors] = useState<Record<string, string>>(Object.fromEntries(FIELDS.map((f) => [f.id, ""])));
  const [touched, setTouched] = useState<Record<string, boolean>>(Object.fromEntries(FIELDS.map((f) => [f.id, false])));

  const handleChange = (id: string, value: string) => {
    let cleaned = value;
    if (id === "mobile") cleaned = value.replace(/\D/g, "").slice(0, 10);
    setValues((v) => ({ ...v, [id]: cleaned }));
    if (touched[id]) {
      const field = FIELDS.find((f) => f.id === id)!;
      setErrors((e) => ({ ...e, [id]: field.validate(cleaned) }));
    }
  };

  const handleBlur = (id: string) => {
    setTouched((t) => ({ ...t, [id]: true }));
    const field = FIELDS.find((f) => f.id === id)!;
    setErrors((e) => ({ ...e, [id]: field.validate(values[id]) }));
  };

  const getState = (id: string): FieldState => {
    if (!touched[id] || values[id].length === 0) return "default";
    return errors[id] ? "error" : "success";
  };

  const allValid = FIELDS.every((f) => !f.validate(values[f.id]) && values[f.id].trim().length > 0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Your details</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "52%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-8) var(--space-4)", maxWidth: 520, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "var(--space-6)" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" style={{ margin: "0 0 var(--space-2)", display: "block" }}>
            Who is the policy for?
          </Typography>
          <Typography variant="body-md" color="muted">
            Policy owner's details. All fields are required.
          </Typography>
        </div>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {FIELDS.map((field) => (
            <div key={field.id}>
              <TextInput
                label={field.label}
                placeholder={field.placeholder}
                type={field.type}
                value={values[field.id]}
                onChange={(v) => handleChange(field.id, v)}
                state={getState(field.id)}
                errorText={errors[field.id] || undefined}
                autoComplete={field.autoComplete}
              />
            </div>
          ))}

          {/* Progress indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginTop: "var(--space-2)" }}>
            <div style={{ flex: 1, height: 6, background: "var(--color-border-subtle)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
              <div style={{
                height: "100%",
                background: "var(--color-primary)",
                borderRadius: "var(--radius-full)",
                width: `${(FIELDS.filter((f) => !f.validate(values[f.id]) && values[f.id].trim().length > 0).length / FIELDS.length) * 100}%`,
                transition: "width var(--duration-fast) ease",
              }} />
            </div>
            <Typography variant="caption" color="muted" style={{ flexShrink: 0 }}>
              {FIELDS.filter((f) => !f.validate(values[f.id]) && values[f.id].trim().length > 0).length}/{FIELDS.length}
            </Typography>
          </div>
        </form>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} disabled={!allValid}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
