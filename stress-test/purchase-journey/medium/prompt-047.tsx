import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Dropdown } from "@acko/dropdown";

const MAKES = ["Maruti Suzuki", "Hyundai", "Tata", "Honda", "Toyota", "Mahindra", "Kia", "Renault"];
const MODELS: Record<string, string[]> = {
  "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Ertiga", "Vitara Brezza"],
  Hyundai: ["i20", "Creta", "Venue", "Tucson"],
  Tata: ["Nexon", "Harrier", "Altroz", "Punch"],
  Honda: ["City", "Amaze", "WR-V"],
  Toyota: ["Innova Crysta", "Fortuner", "Urban Cruiser"],
};
const YEARS = Array.from({ length: 15 }, (_, i) => `${2025 - i}`);
const RTO_OPTIONS = ["Mumbai — MH 01", "Pune — MH 12", "Delhi — DL 01", "Bengaluru — KA 01", "Chennai — TN 01"];

export default function Prompt047() {
  const [form, setForm] = useState({
    make: "Maruti Suzuki",
    model: "Swift",
    variant: "ZXI+",
    year: "2021",
    rto: "Mumbai — MH 01",
    regNumber: "MH 01 AB 1234",
    fuelType: "Petrol",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));
  const models = MODELS[form.make] || [];

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Vehicle details</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "35%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", maxWidth: 520, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "var(--space-5)" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" style={{ margin: "0 0 var(--space-2)", display: "block" }}>
            Confirm your vehicle details
          </Typography>
          <Typography variant="body-md" color="muted">
            Edit any field that doesn't match your registration certificate.
          </Typography>
        </div>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {/* Registration number */}
          <TextInput
            label="Registration number"
            value={form.regNumber}
            onChange={(v) => update("regNumber", v.toUpperCase())}
            autoComplete="off"
          />

          {/* Make + Model */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
            <Dropdown
              label="Make"
              value={form.make}
              onChange={(v) => { update("make", v); update("model", MODELS[v]?.[0] || ""); }}
              options={MAKES.map((m) => ({ value: m, label: m }))}
            />
            <Dropdown
              label="Model"
              value={form.model}
              onChange={(v) => update("model", v)}
              options={models.map((m) => ({ value: m, label: m }))}
            />
          </div>

          {/* Variant */}
          <TextInput
            label="Variant"
            placeholder="e.g. ZXI+, VXI, LXI"
            value={form.variant}
            onChange={(v) => update("variant", v)}
          />

          {/* Year + Fuel */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
            <Dropdown
              label="Year of manufacture"
              value={form.year}
              onChange={(v) => update("year", v)}
              options={YEARS.map((y) => ({ value: y, label: y }))}
            />
            <Dropdown
              label="Fuel type"
              value={form.fuelType}
              onChange={(v) => update("fuelType", v)}
              options={["Petrol", "Diesel", "CNG", "Electric", "Hybrid"].map((f) => ({ value: f, label: f }))}
            />
          </div>

          {/* RTO */}
          <Dropdown
            label="RTO (registration office)"
            value={form.rto}
            onChange={(v) => update("rto", v)}
            options={RTO_OPTIONS.map((r) => ({ value: r, label: r }))}
          />
        </form>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Confirm and continue
          </Button>
        </div>
      </div>
    </div>
  );
}
