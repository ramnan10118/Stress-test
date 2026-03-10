import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Button } from "@acko/button";
import { Alert } from "@acko/alert";

interface ProfileForm {
  name: string;
  email: string;
  mobile: string;
  dob: string;
  pan: string;
  address: string;
  pincode: string;
  city: string;
}

const INITIAL: ProfileForm = {
  name: "Arjun Mehta",
  email: "arjun@example.com",
  mobile: "9876543210",
  dob: "15 / 08 / 1993",
  pan: "ABCDE1234F",
  address: "24, MG Road, Bandra West",
  pincode: "400050",
  city: "Mumbai",
};

export default function Prompt080() {
  const [form, setForm] = useState<ProfileForm>(INITIAL);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const update = (field: keyof ProfileForm, value: string) => { setForm((f) => ({ ...f, [field]: value })); setSaved(false); };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => { setSaving(false); setSaved(true); }, 1000);
  };

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) var(--space-4)", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="heading-sm" weight="bold" color="strong">Edit profile</Typography>
        </div>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 100 }}>
        {saved && <Alert variant="success">Profile updated successfully.</Alert>}

        {/* Avatar edit */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="heading-lg" weight="bold" color="default">A</Typography>
            </div>
            <button style={{ position: "absolute", bottom: 0, right: 0, width: 28, height: 28, borderRadius: "var(--radius-full)", background: "var(--grey-white)", border: "1px solid var(--color-border-default)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation" }} aria-label="Change photo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            </button>
          </div>
          <Typography variant="body-sm" color="muted">Tap to change photo</Typography>
        </div>

        {/* Personal details */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Personal details</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <TextInput label="Full name" value={form.name} onChange={(v) => update("name", v)} autoComplete="name" />
              <TextInput label="Date of birth" value={form.dob} onChange={(v) => update("dob", v)} />
              <TextInput label="PAN number" value={form.pan} onChange={(v) => update("pan", v.toUpperCase().slice(0, 10))} autoComplete="off" />
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Contact</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <TextInput label="Email" value={form.email} onChange={(v) => update("email", v)} type="email" autoComplete="email" />
              <TextInput label="Mobile" value={form.mobile} onChange={(v) => update("mobile", v.replace(/\D/g, "").slice(0, 10))} type="tel" autoComplete="tel" />
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card variant="default" padding="md">
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Address</Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <TextInput label="Street address" value={form.address} onChange={(v) => update("address", v)} autoComplete="street-address" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                <TextInput label="Pincode" value={form.pincode} onChange={(v) => update("pincode", v.replace(/\D/g, "").slice(0, 6))} autoComplete="postal-code" />
                <TextInput label="City" value={form.city} onChange={(v) => update("city", v)} autoComplete="address-level2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, padding: "var(--space-4)", background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={handleSave} disabled={saving}>
          {saving ? "Saving…" : "Save changes"}
        </Button>
      </div>
    </div>
  );
}
