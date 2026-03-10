import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";

// Iteration 5: Empty state — no plans available

export default function Prompt095() {
  return (
    <div style={{ maxWidth: 520, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", gap: "var(--space-3)", position: "sticky", top: 0 }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="label-lg" weight="semibold" color="strong">Choose a plan</Typography>
      </div>

      {/* Empty state */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-10) var(--space-8)", gap: "var(--space-5)" }}>
        {/* Illustration */}
        <div style={{ width: 120, height: 120, borderRadius: "var(--radius-full)", background: "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="52" height="52" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" fill="var(--color-border-subtle)" />
            <path d="M16 24h16M24 16v16" stroke="var(--color-text-muted)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <Typography variant="heading-md" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)", textWrap: "balance" }} align="center">No plans available</Typography>
          <Typography variant="body-md" color="muted" style={{ textWrap: "pretty" }} align="center">
            We couldn't find insurance plans for this vehicle. This may happen if the vehicle is too old, a commercial vehicle, or has an outstanding claim.
          </Typography>
        </div>

        <Card variant="default" padding="md" style={{ width: "100%", background: "var(--color-primary-subtle)", border: "1px solid var(--color-primary-border)" }}>
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>What you can do</Typography>
            {[
              "Double-check your vehicle registration number",
              "Try a different policy type (e.g., standalone OD)",
              "Contact ACKO support for commercial vehicle plans",
            ].map((tip) => (
              <div key={tip} style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-2)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }}><path d="M20 6 9 17l-5-5" /></svg>
                <Typography variant="body-sm" color="default">{tip}</Typography>
              </div>
            ))}
          </CardContent>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Contact support</Button>
          <Button type="button" variant="ghost" size="md" style={{ width: "100%", touchAction: "manipulation" }}>Go back and edit details</Button>
        </div>
      </div>
    </div>
  );
}
