import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

const INFO_ICON = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
  </svg>
);

const BREAKDOWN = [
  { label: "Own-damage premium", amount: 3280 },
  { label: "Third-party premium (IRDAI regulated)", amount: 1319 },
  { label: "Personal accident cover", amount: 0 },
  { label: "Roadside Assistance add-on", amount: 299 },
];

const gst = Math.round((3280 + 1319 + 299) * 0.18);
const total = 3280 + 1319 + 299 + gst;

export default function Prompt040() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-default)", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Premium summary</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "80%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Vehicle context */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Maruti Swift ZXI+</Typography>
            <Typography variant="body-sm" color="muted">MH 01 AB 1234 · 2021</Typography>
          </div>
          <Badge color="blue" size="sm">Comprehensive</Badge>
        </div>

        {/* Breakdown card */}
        <Card variant="default" padding="lg">
          <CardContent>
            <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>How your premium is calculated</Typography>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {BREAKDOWN.map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", flex: 1, minWidth: 0 }}>
                    <Typography variant="body-sm" color="muted" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.label}</Typography>
                    <INFO_ICON />
                  </div>
                  <Typography variant="body-sm" weight="semibold" color={item.amount === 0 ? "success" : "default"} style={{ fontVariantNumeric: "tabular-nums", flexShrink: 0, marginLeft: "var(--space-3)" }}>
                    {item.amount === 0 ? "Included" : `₹${item.amount.toLocaleString("en-IN")}`}
                  </Typography>
                </div>
              ))}

              <Separator />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body-sm" color="muted">Subtotal</Typography>
                <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{(total - gst).toLocaleString("en-IN")}</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                  <Typography variant="body-sm" color="muted">GST (18%)</Typography>
                  <INFO_ICON />
                </div>
                <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>₹{gst.toLocaleString("en-IN")}</Typography>
              </div>

              <Separator />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="heading-sm" weight="semibold" color="strong">Total premium</Typography>
                <Typography variant="heading-lg" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total.toLocaleString("en-IN")}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* IDV info */}
        <Card variant="outline" padding="md">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <Typography variant="label-md" weight="semibold" color="default" style={{ display: "block" }}>Insured Declared Value (IDV)</Typography>
                <Typography variant="body-sm" color="muted">Maximum payout in case of total loss or theft</Typography>
              </div>
              <Typography variant="heading-sm" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>₹5,82,000</Typography>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Bottom CTA */}
      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Proceed to pay ₹{total.toLocaleString("en-IN")}
          </Button>
        </div>
      </div>
    </div>
  );
}
