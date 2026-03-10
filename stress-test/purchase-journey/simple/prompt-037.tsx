import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { TextInput } from "@acko/text-input";

export default function Prompt037() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [errors, setErrors] = useState({ name: "", mobile: "", email: "" });

  const validate = (field: string, value: string) => {
    if (field === "name" && value.trim().length < 2) return "Enter your full name";
    if (field === "mobile" && !/^[6-9][0-9]{9}$/.test(value)) return "Enter a valid 10-digit mobile number";
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
    return "";
  };

  const handleChange = (field: string, value: string) => {
    let cleaned = value;
    if (field === "mobile") cleaned = value.replace(/\D/g, "").slice(0, 10);
    setForm((f) => ({ ...f, [field]: cleaned }));
    if (errors[field as keyof typeof errors]) {
      setErrors((e) => ({ ...e, [field]: validate(field, cleaned) }));
    }
  };

  const handleBlur = (field: string) => {
    setErrors((e) => ({ ...e, [field]: validate(field, form[field as keyof typeof form]) }));
  };

  const isValid = !Object.values(errors).some(Boolean) && Object.values(form).every((v) => v.trim().length > 0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-default)", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Your details</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "50%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-8) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "var(--space-8)" }}>
          <Typography variant="heading-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)" }}>
            Who is the policy for?
          </Typography>
          <Typography variant="body-md" color="muted">
            We need the vehicle owner's details for the policy document.
          </Typography>
        </div>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <TextInput
            label="Full name"
            placeholder="As per Aadhaar / PAN"
            value={form.name}
            onChange={(v) => handleChange("name", v)}
            state={errors.name ? "error" : "default"}
            errorText={errors.name || undefined}
            autoComplete="name"
          />
          <TextInput
            label="Mobile number"
            placeholder="9876543210"
            type="tel"
            value={form.mobile}
            onChange={(v) => handleChange("mobile", v)}
            state={errors.mobile ? "error" : "default"}
            errorText={errors.mobile || undefined}
            autoComplete="tel"
          />
          <TextInput
            label="Email address"
            placeholder="you@example.com"
            type="email"
            value={form.email}
            onChange={(v) => handleChange("email", v)}
            state={errors.email ? "error" : "default"}
            errorText={errors.email || undefined}
            autoComplete="email"
          />
          <Typography variant="caption" color="muted">
            Policy document and updates will be sent to your email and mobile.
          </Typography>
        </form>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} disabled={!isValid}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
