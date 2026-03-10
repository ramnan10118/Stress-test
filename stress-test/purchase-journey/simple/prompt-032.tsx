import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Badge } from "@acko/badge";

interface VehicleDetail { label: string; value: string; editable?: boolean; }

export default function Prompt032() {
  const [editing, setEditing] = useState(false);
  const [details, setDetails] = useState({
    make: "Maruti Suzuki",
    model: "Swift",
    variant: "ZXI+ (Petrol)",
    year: "2021",
  });

  const FIELDS: VehicleDetail[] = [
    { label: "Registration number", value: "MH 01 AB 1234" },
    { label: "Make", value: details.make, editable: true },
    { label: "Model", value: details.model, editable: true },
    { label: "Variant", value: details.variant, editable: true },
    { label: "Year of manufacture", value: details.year, editable: true },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-default)", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={24} style={{ height: "var(--scale-24)", width: "auto" }} />
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        {/* Progress */}
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "40%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-8) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "var(--space-6)" }}>
          <Typography variant="heading-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)" }}>
            Is this your car?
          </Typography>
          <Typography variant="body-md" color="muted">
            We fetched these details from the Parivahan database. Please confirm or edit.
          </Typography>
        </div>

        <Card variant="default" padding="lg" style={{ marginBottom: "var(--space-4)" }}>
          <CardContent>
            {!editing ? (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginBottom: "var(--space-4)" }}>
                  {FIELDS.map((field) => (
                    <div key={field.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <Typography variant="body-sm" color="muted">{field.label}</Typography>
                      <Typography variant="label-md" weight="semibold" color="strong" align="right">{field.value}</Typography>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setEditing(true)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-primary)", padding: "var(--space-1)", touchAction: "manipulation", display: "flex", alignItems: "center", gap: "var(--space-1)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                  <Typography variant="body-sm" color="primary">Edit details</Typography>
                </button>
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <TextInput label="Make" value={details.make} onChange={(v) => setDetails((d) => ({ ...d, make: v }))} />
                <TextInput label="Model" value={details.model} onChange={(v) => setDetails((d) => ({ ...d, model: v }))} />
                <TextInput label="Variant" value={details.variant} onChange={(v) => setDetails((d) => ({ ...d, variant: v }))} />
                <TextInput label="Year of manufacture" value={details.year} onChange={(v) => setDetails((d) => ({ ...d, year: v }))} type="text" />
                <Button type="button" variant="outline" size="sm" onClick={() => setEditing(false)} style={{ touchAction: "manipulation" }}>Save changes</Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
          Yes, this is my car
        </Button>
      </main>
    </div>
  );
}
