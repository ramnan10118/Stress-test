import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
  </svg>
);

const ADD_ONS = [
  { name: "Zero Depreciation", price: 800 },
  { name: "Roadside Assistance", price: 299 },
];

const base_od = 3280;
const base_tp = 1319;
const addOnTotal = ADD_ONS.reduce((s, a) => s + a.price, 0);
const subtotal = base_od + base_tp + addOnTotal;
const ncb = -656;
const taxable = subtotal + ncb;
const gst = Math.round(taxable * 0.18);
const total = taxable + gst;

export default function Prompt048() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Premium breakdown</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "82%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", maxWidth: 520, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Context */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Maruti Swift ZXI+</Typography>
            <Typography variant="body-sm" color="muted">MH 01 AB 1234 · 2021</Typography>
          </div>
          <Badge color="blue" size="sm">Comprehensive</Badge>
        </div>

        {/* Detailed breakdown */}
        <Card variant="default" padding="lg">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>Premium components</Typography>

            {/* Own damage */}
            <div style={{ marginBottom: "var(--space-3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                  <Typography variant="label-md" weight="semibold" color="default">Own Damage premium</Typography>
                  <InfoIcon />
                </div>
                <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{base_od.toLocaleString("en-IN")}</Typography>
              </div>
              <Typography variant="caption" color="muted">Based on IDV ₹5,82,000 and car age</Typography>
            </div>

            {/* Third party */}
            <div style={{ marginBottom: "var(--space-3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                  <Typography variant="label-md" weight="semibold" color="default">Third Party premium</Typography>
                  <InfoIcon />
                </div>
                <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{base_tp.toLocaleString("en-IN")}</Typography>
              </div>
              <Typography variant="caption" color="muted">IRDAI regulated rate — engine capacity 1197cc</Typography>
            </div>

            {/* Add-ons */}
            {ADD_ONS.map((a) => (
              <div key={a.name} style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
                <Typography variant="body-sm" color="muted">{a.name}</Typography>
                <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{a.price}</Typography>
              </div>
            ))}

            <Separator />

            {/* NCB discount */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-3)", marginBottom: "var(--space-2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                <Typography variant="body-sm" style={{ color: "var(--color-success-text)" }}>NCB discount (20%)</Typography>
                <InfoIcon />
              </div>
              <Typography variant="body-sm" style={{ color: "var(--color-success-text)", fontVariantNumeric: "tabular-nums" }}>−₹{Math.abs(ncb).toLocaleString("en-IN")}</Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
              <Typography variant="body-sm" style={{ color: "var(--color-text-secondary)" }}>Subtotal (after NCB)</Typography>
              <Typography variant="body-sm" style={{ color: "var(--color-text-default)", fontVariantNumeric: "tabular-nums" }}>₹{taxable.toLocaleString("en-IN")}</Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                <Typography variant="body-sm" style={{ color: "var(--color-text-secondary)" }}>GST (18%)</Typography>
                <InfoIcon />
              </div>
              <Typography variant="body-sm" style={{ color: "var(--color-text-default)", fontVariantNumeric: "tabular-nums" }}>₹{gst.toLocaleString("en-IN")}</Typography>
            </div>

            <Separator />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "var(--space-3)" }}>
              <Typography variant="heading-sm" weight="semibold" style={{ color: "var(--color-text-strong)" }}>Total premium</Typography>
              <Typography variant="heading-lg" weight="bold" style={{ color: "var(--color-primary)", fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
            </div>
          </CardContent>
        </Card>

        {/* Edit add-ons */}
        <button style={{ background: "none", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", padding: "var(--space-3) var(--space-4)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)", touchAction: "manipulation" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-primary)" }}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
          <Typography variant="body-sm" color="primary">Edit add-ons</Typography>
        </button>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Proceed to pay ₹{total.toLocaleString("en-IN")}
          </Button>
        </div>
      </div>
    </div>
  );
}
