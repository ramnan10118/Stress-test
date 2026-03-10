import { useState } from "react";
import { ChevronLeft, Camera, Plus } from "lucide-react";
import { Typography } from "@acko/typography";
import { TextInput } from "@acko/text-input";
import { Textarea } from "@acko/textarea";
import { Dropdown } from "@acko/dropdown";
import { Button } from "@acko/button";
import { Progress } from "@acko/progress";

const DAMAGE_OPTIONS = [
  { value: "accident", label: "Accident" },
  { value: "theft", label: "Theft" },
  { value: "natural", label: "Natural calamity" },
  { value: "fire", label: "Fire" },
];

export default function Prompt196() {
  const [regNumber, setRegNumber] = useState("");
  const [damageType, setDamageType] = useState("");
  const [description, setDescription] = useState("");

  const canProceed = regNumber.trim().length > 0 && damageType.length > 0;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "var(--grey-white)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
      }}>
        <div style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "0 var(--space-4)",
          height: "var(--scale-56)",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
        }}>
          <button
            type="button"
            aria-label="Go back"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-2)",
              minWidth: "var(--scale-44)",
              minHeight: "var(--scale-44)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              touchAction: "manipulation",
              color: "var(--color-text-strong)",
            }}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">File a claim</Typography>
        </div>
      </header>

      <main style={{
        flex: 1,
        padding: "var(--space-5)",
        paddingBottom: "calc(var(--scale-80) + var(--space-6) + env(safe-area-inset-bottom))",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}>
        {/* Step indicator */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)" }}>
            <Typography variant="caption" weight="medium" color="muted">Step 1 of 3</Typography>
            <Typography variant="caption" color="muted">Describe the incident</Typography>
          </div>
          <Progress value={33} max={100} />
        </div>

        {/* Page title */}
        <Typography variant="heading-lg" weight="semibold" color="strong" as="h1">
          Describe the incident
        </Typography>

        {/* Form fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <TextInput
            label="Registration number"
            placeholder="e.g. MH 01 AB 1234"
            value={regNumber}
            onChange={setRegNumber}
            type="text"
            required
          />

          <Dropdown
            label="Type of damage"
            placeholder="Select damage type"
            options={DAMAGE_OPTIONS}
            value={damageType}
            onChange={(val) => setDamageType(val as string)}
            variant="single"
            size="md"
            required
          />

          <Textarea
            label="Brief description"
            placeholder="Describe what happened — location, time, circumstances"
            value={description}
            onChange={setDescription}
            rows={4}
            maxLength={500}
            showCount
          />

          {/* Photo upload */}
          <div>
            <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-3)" }}>
              Upload photos (optional)
            </Typography>
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Upload photo ${i + 1}`}
                  style={{
                    width: "var(--scale-80)",
                    height: "var(--scale-80)",
                    borderRadius: "var(--radius-xl)",
                    border: "2px dashed var(--color-border-subtle)",
                    background: "var(--grey-white)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "var(--space-1)",
                    cursor: "pointer",
                    touchAction: "manipulation",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {i === 0 ? <Camera size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                  <Typography variant="caption" color="muted">{i === 0 ? "Camera" : "Add"}</Typography>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Sticky CTA */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "var(--grey-white)",
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "var(--space-4)",
        paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))",
        zIndex: "var(--z-sticky)",
      }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" disabled={!canProceed} fullWidth>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
