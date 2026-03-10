import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { RadioGroup } from "@acko/radio";
import { TextInput } from "@acko/text-input";
import { Badge } from "@acko/badge";

export default function Prompt038() {
  const [hadPrevious, setHadPrevious] = useState("yes");
  const [form, setForm] = useState({ insurer: "", policyNumber: "", expiryDate: "" });
  const [ncbSlab, setNcbSlab] = useState("20");

  const NCB_OPTIONS = [
    { value: "0", label: "0% — New policy / claim made this year" },
    { value: "20", label: "20% — 1 claim-free year" },
    { value: "25", label: "25% — 2 consecutive claim-free years" },
    { value: "35", label: "35% — 3 consecutive claim-free years" },
    { value: "45", label: "45% — 4 consecutive claim-free years" },
    { value: "50", label: "50% — 5+ consecutive claim-free years" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-default)", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Previous policy</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "55%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        <div>
          <Typography variant="heading-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)" }}>
            Previous insurance details
          </Typography>
          <Typography variant="body-md" color="muted">
            Helps us verify your No Claim Bonus (NCB) and keep continuity of cover.
          </Typography>
        </div>

        {/* Had previous policy? */}
        <Card variant="default" padding="md">
          <CardContent>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Did you have a policy before?</Typography>
            <RadioGroup
              name="had-previous"
              value={hadPrevious}
              onChange={setHadPrevious}
              items={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No — first-time insurance" },
              ]}
            />
          </CardContent>
        </Card>

        {hadPrevious === "yes" && (
          <>
            <Card variant="default" padding="md">
              <CardContent>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Previous insurer details</Typography>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  <TextInput label="Insurer name" placeholder="e.g. HDFC Ergo, Bajaj Allianz" value={form.insurer} onChange={(v) => setForm((f) => ({ ...f, insurer: v }))} />
                  <TextInput label="Policy number" placeholder="Optional" value={form.policyNumber} onChange={(v) => setForm((f) => ({ ...f, policyNumber: v }))} />
                  <TextInput label="Policy expiry date" placeholder="DD / MM / YYYY" value={form.expiryDate} onChange={(v) => setForm((f) => ({ ...f, expiryDate: v }))} />
                </div>
              </CardContent>
            </Card>

            <Card variant="default" padding="md">
              <CardContent>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-3)" }}>
                  <Typography variant="label-lg" weight="semibold" color="strong">No Claim Bonus (NCB)</Typography>
                  <Badge color="green" size="sm">Saves on premium</Badge>
                </div>
                <Typography variant="body-sm" color="muted" style={{ marginBottom: "var(--space-3)" }}>
                  How many consecutive claim-free years did you have?
                </Typography>
                <RadioGroup
                  name="ncb"
                  value={ncbSlab}
                  onChange={setNcbSlab}
                  items={NCB_OPTIONS}
                />
              </CardContent>
            </Card>
          </>
        )}
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
