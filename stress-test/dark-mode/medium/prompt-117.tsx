import { ChevronLeft, Download, Share2, Check, X } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";

const POLICY_GRID = [
  { label: "Policy number", value: "ACK-2026-4721839" },
  { label: "Plan", value: "Comprehensive+" },
  { label: "Valid from", value: "3 Mar 2026" },
  { label: "Valid till", value: "2 Mar 2027" },
];

const COVERAGE_ITEMS = [
  { label: "Own damage cover", included: true },
  { label: "Third party liability", included: true },
  { label: "Personal accident cover", included: true },
  { label: "Zero depreciation", included: true },
  { label: "Roadside assistance", included: true },
  { label: "Engine protection", included: false },
  { label: "Consumables cover", included: false },
];

const PREMIUM_BREAKDOWN = [
  { label: "Own damage premium", value: "₹4,218" },
  { label: "Third party premium", value: "₹2,094" },
  { label: "Zero depreciation", value: "₹1,240" },
  { label: "Roadside assistance", value: "₹499" },
  { label: "GST (18%)", value: "₹1,449" },
];

export default function Prompt117() {
  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Sticky header */}
      <header style={{
        background: "var(--color-surface-secondary)",
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
          justifyContent: "space-between",
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
          <Typography variant="label-lg" weight="semibold" color="strong">Policy details</Typography>
          <button
            type="button"
            aria-label="Share policy"
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
            <Share2 size={18} aria-hidden="true" />
          </button>
        </div>
      </header>

      <main style={{
        flex: 1,
        padding: "var(--space-5)",
        paddingBottom: "var(--space-20)",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
      }}>
        {/* Policy header card */}
        <Card variant="default" padding="md">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
            <div>
              <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                Car insurance
              </Typography>
              <Typography variant="body-sm" color="muted">Maruti Swift ZXI+ · MH 01 AB 1234</Typography>
            </div>
            <Badge color="green" size="sm">Active</Badge>
          </div>
          <Separator />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            {POLICY_GRID.map(({ label, value }) => (
              <div key={label}>
                <Typography variant="caption" color="muted" style={{ display: "block", marginBottom: "var(--space-1)" }}>{label}</Typography>
                <Typography variant="label-md" weight="semibold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {value}
                </Typography>
              </div>
            ))}
          </div>
        </Card>

        {/* Coverage card */}
        <Card variant="default" padding="md">
          <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
            What's covered
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {COVERAGE_ITEMS.map(({ label, included }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div style={{
                  width: "var(--scale-20)",
                  height: "var(--scale-20)",
                  borderRadius: "var(--radius-full)",
                  background: included ? "var(--color-success-subtle)" : "var(--color-surface-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: included ? "var(--color-success)" : "var(--color-text-muted)",
                }}>
                  {included
                    ? <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                    : <X size={12} strokeWidth={2.5} aria-hidden="true" />
                  }
                </div>
                <Typography variant="body-sm" color={included ? "default" : "muted"}>{label}</Typography>
              </div>
            ))}
          </div>
        </Card>

        {/* Premium breakdown card */}
        <Card variant="demoted" padding="md">
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)" }}>
            Premium breakdown
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {PREMIUM_BREAKDOWN.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body-sm" color="muted">{label}</Typography>
                <Typography variant="body-sm" weight="medium" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {value}
                </Typography>
              </div>
            ))}
            <Separator />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="label-lg" weight="semibold" color="strong">Total paid</Typography>
              <Typography variant="label-lg" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                ₹9,500
              </Typography>
            </div>
          </div>
        </Card>

        {/* Download button */}
        <div style={{ marginTop: "var(--space-3)" }}>
          <Button type="button" variant="outline" size="lg" fullWidth>
            <Download size={16} aria-hidden="true" style={{ marginRight: "var(--space-2)" }} />
            Download policy document
          </Button>
        </div>

        <Typography variant="caption" color="muted" align="center">
          Need help? Call 1800-266-2256 (toll free, 24×7)
        </Typography>
      </main>
    </div>
  );
}
