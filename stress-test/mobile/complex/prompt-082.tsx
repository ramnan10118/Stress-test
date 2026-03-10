import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Accordion } from "@acko/accordion";
import { Separator } from "@acko/separator";
import { Tabs } from "@acko/tabs";

const POLICY = {
  number: "ACK-2026-4721839",
  type: "Comprehensive",
  vehicle: "Maruti Swift ZXI+ 2021",
  reg: "MH 01 AB 1234",
  expiry: "2 Mar 2027",
  premium: 5637,
  idv: 582000,
  addOns: ["Zero Depreciation", "Roadside Assistance"],
};

const COVERAGE = [
  { icon: "🚗", title: "Own damage", desc: "Up to IDV ₹5,82,000" },
  { icon: "🛡️", title: "Third party", desc: "Unlimited liability" },
  { icon: "👤", title: "Personal accident", desc: "₹15 lakh" },
  { icon: "🛡️", title: "Zero depreciation", desc: "No deduction on parts" },
  { icon: "🚐", title: "Roadside assistance", desc: "24×7 pan-India" },
  { icon: "🔥", title: "Fire & theft", desc: "Full IDV payout" },
];

const FAQ = [
  { value: "q1", trigger: "How to file a claim?", content: "ACKO app → File a Claim → upload photos → submit. Most claims approved in 30 min." },
  { value: "q2", trigger: "How do I get a cashless repair?", content: "Visit any of our 5,000+ network garages. Show your policy number. Surveyor will approve repairs within 2 hours." },
  { value: "q3", trigger: "What is IDV?", content: "Insured Declared Value is the maximum payout in case of total loss or theft of your vehicle." },
];

export default function Prompt082() {
  const [tab, setTab] = useState("summary");

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--color-primary)" }} />

      {/* Header */}
      <div style={{ background: "var(--color-primary)", padding: "0 var(--space-4) var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div style={{ flex: 1 }}>
          <Typography variant="heading-sm" weight="bold" style={{ color: "var(--grey-white)", display: "block" }}>Policy details</Typography>
          <Typography variant="caption" style={{ color: "var(--purple-200)" }}>{POLICY.vehicle}</Typography>
        </div>
        <Badge color="green" size="sm">Active</Badge>
      </div>

      {/* Tabs */}
      <div style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)" }}>
        <Tabs value={tab} onChange={setTab} items={[
          { value: "summary", label: "Summary" },
          { value: "coverage", label: "Coverage" },
          { value: "faq", label: "FAQ" },
        ]} />
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 100 }}>
        {tab === "summary" && (
          <>
            {/* Key facts */}
            <Card variant="default" padding="md">
              <CardContent>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                  {[
                    { label: "Policy no.", value: POLICY.number.split("-").slice(-1)[0] },
                    { label: "Plan", value: POLICY.type },
                    { label: "Premium", value: `₹${POLICY.premium.toLocaleString("en-IN")}/yr` },
                    { label: "IDV", value: `₹${(POLICY.idv / 100000).toFixed(1)}L` },
                    { label: "Registration", value: POLICY.reg },
                    { label: "Expires", value: POLICY.expiry },
                  ].map((f) => (
                    <div key={f.label}>
                      <Typography variant="caption" color="muted" style={{ display: "block" }}>{f.label}</Typography>
                      <Typography variant="label-sm" weight="semibold" color="strong">{f.value}</Typography>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add-ons */}
            <Card variant="default" padding="md">
              <CardContent>
                <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>Add-ons</Typography>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                  {POLICY.addOns.map((a) => <Badge key={a} color="green" size="sm">{a}</Badge>)}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <Button type="button" variant="primary" size="md" style={{ width: "100%", touchAction: "manipulation" }}>File a claim</Button>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-2)" }}>
                <Button type="button" variant="outline" size="sm" style={{ touchAction: "manipulation" }}>Download PDF</Button>
                <Button type="button" variant="outline" size="sm" style={{ touchAction: "manipulation" }}>Share</Button>
              </div>
            </div>
          </>
        )}

        {tab === "coverage" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
            {COVERAGE.map((c) => (
              <Card key={c.title} variant="default" padding="sm">
                <CardContent>
                  <div style={{ width: 22, height: 22, marginBottom: "var(--space-1)", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">{c.icon}</div>
                  <Typography variant="label-sm" weight="semibold" color="strong" style={{ display: "block" }}>{c.title}</Typography>
                  <Typography variant="caption" color="muted">{c.desc}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {tab === "faq" && <Accordion type="single" collapsible items={FAQ} />}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-3) var(--space-4)", display: "flex", gap: "var(--space-3)" }}>
        <Button type="button" variant="primary" size="md" style={{ flex: 1, touchAction: "manipulation" }}>File claim</Button>
        <Button type="button" variant="outline" size="md" style={{ flex: 1, touchAction: "manipulation" }}>Renew</Button>
      </div>
    </div>
  );
}
