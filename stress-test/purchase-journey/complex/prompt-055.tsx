import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Dropdown } from "@acko/dropdown";
import { Separator } from "@acko/separator";
import { Checkbox } from "@acko/checkbox";

type FieldState = "default" | "success" | "error";

const FUEL_TYPES = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"].map((f) => ({ value: f, label: f }));
const YEARS = Array.from({ length: 15 }, (_, i) => `${2025 - i}`).map((y) => ({ value: y, label: y }));
const POLICY_TYPES = ["New policy", "Renewal"].map((v) => ({ value: v.toLowerCase().replace(" ", "_"), label: v }));

interface FormData {
  ownerName: string;
  mobile: string;
  email: string;
  dob: string;
  panNumber: string;
  aadhaarLast4: string;
  address: string;
  pincode: string;
  city: string;
  previousInsurer: string;
  previousPolicyExpiry: string;
  ncb: string;
}

export default function Prompt055() {
  const [section, setSection] = useState<"owner" | "address" | "previous">("owner");
  const [form, setForm] = useState<FormData>({
    ownerName: "", mobile: "", email: "", dob: "", panNumber: "", aadhaarLast4: "",
    address: "", pincode: "", city: "",
    previousInsurer: "", previousPolicyExpiry: "", ncb: "20",
  });
  const [consentChecked, setConsentChecked] = useState(false);

  const update = (field: keyof FormData, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const SECTIONS = [
    { id: "owner", label: "Owner details" },
    { id: "address", label: "Address" },
    { id: "previous", label: "Previous policy" },
  ] as const;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Your details</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        {/* Section tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--color-border-subtle)" }}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              style={{
                flex: 1,
                padding: "var(--space-3)",
                background: "none",
                border: "none",
                borderBottom: section === s.id ? `2px solid var(--color-primary)` : "2px solid transparent",
                cursor: "pointer",
                touchAction: "manipulation",
              }}
            >
              <Typography variant="label-sm" weight={section === s.id ? "semibold" : "regular"} color={section === s.id ? "primary" : "muted"}>
                {s.label}
              </Typography>
            </button>
          ))}
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: section === "owner" ? "33%" : section === "address" ? "66%" : "100%", background: "var(--color-primary)", borderRadius: "var(--radius-full)", transition: "width var(--duration-fast) ease" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4) 100px", maxWidth: 580, margin: "0 auto", width: "100%" }}>
        {section === "owner" && (
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <TextInput label="Full name" placeholder="As per Aadhaar / PAN" value={form.ownerName} onChange={(v) => update("ownerName", v)} autoComplete="name" />
            <TextInput label="Mobile number" placeholder="9876543210" type="tel" value={form.mobile} onChange={(v) => update("mobile", v.replace(/\D/g, "").slice(0, 10))} autoComplete="tel" />
            <TextInput label="Email address" placeholder="you@example.com" type="email" value={form.email} onChange={(v) => update("email", v)} autoComplete="email" />
            <TextInput label="Date of birth" placeholder="DD / MM / YYYY" value={form.dob} onChange={(v) => update("dob", v)} />
            <TextInput label="PAN number" placeholder="ABCDE1234F" value={form.panNumber} onChange={(v) => update("panNumber", v.toUpperCase().slice(0, 10))} autoComplete="off" />
            <TextInput label="Aadhaar (last 4 digits)" placeholder="1234" value={form.aadhaarLast4} onChange={(v) => update("aadhaarLast4", v.replace(/\D/g, "").slice(0, 4))} type="text" />
          </form>
        )}

        {section === "address" && (
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <TextInput label="Flat / House no., Street" placeholder="e.g. 24, MG Road" value={form.address} onChange={(v) => update("address", v)} autoComplete="street-address" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
              <TextInput label="Pincode" placeholder="400001" value={form.pincode} onChange={(v) => update("pincode", v.replace(/\D/g, "").slice(0, 6))} autoComplete="postal-code" />
              <TextInput label="City" placeholder="Mumbai" value={form.city} onChange={(v) => update("city", v)} autoComplete="address-level2" />
            </div>
          </form>
        )}

        {section === "previous" && (
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <TextInput label="Previous insurer name" placeholder="e.g. HDFC Ergo" value={form.previousInsurer} onChange={(v) => update("previousInsurer", v)} />
            <TextInput label="Previous policy expiry date" placeholder="DD / MM / YYYY" value={form.previousPolicyExpiry} onChange={(v) => update("previousPolicyExpiry", v)} />
            <Dropdown
              label="No Claim Bonus (NCB)"
              value={form.ncb}
              onChange={(v) => update("ncb", v)}
              options={[
                { value: "0", label: "0% — No NCB" },
                { value: "20", label: "20% — 1 year claim-free" },
                { value: "25", label: "25% — 2 years claim-free" },
                { value: "35", label: "35% — 3 years claim-free" },
                { value: "45", label: "45% — 4 years claim-free" },
                { value: "50", label: "50% — 5+ years claim-free" },
              ]}
            />
            <Separator />
            <Checkbox
              checked={consentChecked}
              onChange={() => setConsentChecked((v) => !v)}
              label="I confirm the above details are accurate. I understand that incorrect NCB declaration may result in claim rejection."
            />
          </form>
        )}
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <Button
            type="button"
            variant="primary"
            size="lg"
            style={{ width: "100%", touchAction: "manipulation" }}
            onClick={() => {
              if (section === "owner") setSection("address");
              else if (section === "address") setSection("previous");
            }}
            disabled={section === "previous" && !consentChecked}
          >
            {section === "previous" ? "Confirm and continue" : "Save and next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
