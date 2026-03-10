import { useState } from "react";
import { ChevronLeft, MapPin, Phone, AlertTriangle } from "lucide-react";
import { Typography } from "@acko/typography";
import { Button } from "@acko/button";
import { Card, CardContent } from "@acko/card";
import { RadioGroup } from "@acko/radio";
import { TextInput } from "@acko/text-input";
import { Textarea } from "@acko/textarea";
import { Alert } from "@acko/alert";

const ISSUE_OPTIONS = [
  { value: "flat_tyre", label: "Flat tyre" },
  { value: "battery_dead", label: "Battery dead" },
  { value: "engine_fail", label: "Engine won't start" },
  { value: "accident", label: "Accident" },
  { value: "keys_locked", label: "Keys locked inside" },
  { value: "fuel_empty", label: "Out of fuel" },
];

export default function Prompt076() {
  const [issue, setIssue] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const canSubmit = issue && location.trim().length > 0;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            type="button"
            aria-label="Go back"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Roadside assistance</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", paddingBottom: "calc(var(--scale-80) + var(--space-6) + env(safe-area-inset-bottom))", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {/* Page title — heading-md for a flow screen step */}
        <div>
          <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            Request roadside help
          </Typography>
          <Typography variant="body-sm" color="muted">
            Help usually arrives within 30–45 minutes. We'll keep you updated.
          </Typography>
        </div>

        {/* Emergency notice */}
        <Alert variant="warning" title="In case of an accident">
          Call 112 (emergency services) first. Then come back here to request assistance.
        </Alert>

        {/* Vehicle info */}
        <Card variant="default" padding="none">
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <AlertTriangle size={18} aria-hidden="true" style={{ color: "var(--color-warning)", flexShrink: 0 }} />
              <div>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Maruti Swift ZXI+</Typography>
                <Typography variant="caption" color="muted">MH 01 AB 1234 · Comprehensive plan</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What happened */}
        <div>
          <RadioGroup
            label="What happened?"
            options={ISSUE_OPTIONS}
            value={issue}
            onChange={setIssue}
            variant="card"
            size="md"
          />
        </div>

        {/* Location */}
        <TextInput
          label="Your location"
          placeholder="Enter your current address or landmark"
          value={location}
          onChange={setLocation}
          iconLeft={<MapPin size={16} aria-hidden="true" />}
        />

        {/* Additional notes */}
        <Textarea
          label="Additional details (optional)"
          placeholder="Any details that could help the service team"
          value={notes}
          onChange={setNotes}
          rows={3}
          maxLength={200}
          showCount
        />

        {/* Emergency call */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", justifyContent: "center" }}>
          <Phone size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
          <Typography variant="caption" color="muted">
            Immediate help? Call 1800-266-2256 (toll free, 24x7)
          </Typography>
        </div>
      </main>

      {/* Sticky CTA */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))", zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" disabled={!canSubmit} fullWidth>
            Request assistance
          </Button>
        </div>
      </div>
    </div>
  );
}
