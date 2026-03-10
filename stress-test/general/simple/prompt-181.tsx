import { Shield, Check, ChevronRight } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Button } from "@acko/button";

const COVERAGE_HIGHLIGHTS = [
  "Own damage cover",
  "Third party liability",
  "Personal accident cover",
  "24×7 roadside assistance",
  "Cashless repairs at 3,000+ garages",
];

export default function Prompt181() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "var(--grey-white)",
        borderBottom: "1px solid var(--color-border-subtle)",
        padding: "0 var(--space-4)",
        height: "var(--scale-56)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
          alt="ACKO"
          style={{ height: "var(--scale-24)", width: "auto" }}
        />
      </header>

      <main style={{
        flex: 1,
        padding: "var(--space-8) var(--space-5)",
        paddingBottom: "calc(var(--scale-80) + var(--space-6) + env(safe-area-inset-bottom))",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}>
        {/* Page title */}
        <div>
          <Typography variant="heading-lg" weight="semibold" color="strong" as="h1" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            Your quote is ready
          </Typography>
          <Typography variant="body-sm" color="muted">
            Comprehensive car insurance for Maruti Swift ZXI+ (MH 01 AB 1234).
          </Typography>
        </div>

        {/* Premium card */}
        <Card variant="default" padding="md">
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
            <div style={{
              width: "var(--scale-40)",
              height: "var(--scale-40)",
              borderRadius: "var(--radius-full)",
              background: "var(--color-primary-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: "var(--color-primary)",
            }}>
              <Shield size={20} aria-hidden="true" />
            </div>
            <div>
              <Typography variant="caption" color="muted" style={{ display: "block" }}>Annual premium</Typography>
              <Typography variant="heading-xl" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                ₹5,782
              </Typography>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <Badge color="green" size="sm">Best value</Badge>
            </div>
          </div>

          <div style={{
            background: "var(--color-success-subtle)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-2) var(--space-3)",
            marginBottom: "var(--space-4)",
          }}>
            <Typography variant="label-md" weight="medium" color="success">
              You save ₹1,240 compared to other insurers
            </Typography>
          </div>

          <Separator />

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
            {COVERAGE_HIGHLIGHTS.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <div style={{
                  width: "var(--scale-20)",
                  height: "var(--scale-20)",
                  borderRadius: "var(--radius-full)",
                  background: "var(--color-success-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--color-success)",
                }}>
                  <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <Typography variant="body-sm" color="default">{item}</Typography>
              </div>
            ))}
          </div>
        </Card>

        {/* Vehicle summary card */}
        <Card variant="demoted" padding="md">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
            {[
              { label: "Vehicle", value: "Maruti Swift ZXI+" },
              { label: "Registration", value: "MH 01 AB 1234" },
              { label: "Year", value: "2021" },
              { label: "IDV", value: "₹5,82,000" },
            ].map(({ label, value }) => (
              <div key={label}>
                <Typography variant="caption" color="muted" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  {label}
                </Typography>
                <Typography variant="label-md" weight="semibold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {value}
                </Typography>
              </div>
            ))}
          </div>
        </Card>

        <button
          type="button"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "var(--space-3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-1)",
            touchAction: "manipulation",
          }}
        >
          <Typography variant="body-sm" color="primary">View full plan details</Typography>
          <ChevronRight size={16} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
        </button>
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
          <Button type="button" variant="primary" size="lg" fullWidth>
            Buy now — ₹5,782/yr
          </Button>
        </div>
      </div>
    </div>
  );
}
