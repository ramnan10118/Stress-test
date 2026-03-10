import { ChevronLeft, Car, Calendar, Shield, Edit } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Button } from "@acko/button";

const VEHICLE_INFO = [
  { label: "Registration number", value: "MH 01 AB 1234" },
  { label: "Make & model", value: "Maruti Swift ZXI+" },
  { label: "Year of manufacture", value: "2021" },
  { label: "Fuel type", value: "Petrol" },
  { label: "Engine number", value: "K12N-XXXXXX" },
  { label: "Chassis number", value: "MA3FJEB1S00XXXXXX" },
];

const POLICY_INFO = [
  { label: "Policy number", value: "ACK-2026-4721839" },
  { label: "Plan", value: "Comprehensive" },
  { label: "Valid from", value: "3 Mar 2026" },
  { label: "Valid till", value: "2 Mar 2027" },
  { label: "IDV", value: "₹5,82,000" },
];

export default function Prompt179() {
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
          <Typography variant="label-lg" weight="semibold" color="strong">Vehicle details</Typography>
          <button
            type="button"
            aria-label="Edit vehicle details"
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
              color: "var(--color-primary)",
            }}
          >
            <Edit size={18} aria-hidden="true" />
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
        {/* Vehicle hero card */}
        <Card variant="default" padding="md">
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
            <div style={{
              width: "var(--scale-48)",
              height: "var(--scale-48)",
              borderRadius: "var(--radius-xl)",
              background: "var(--color-primary-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: "var(--color-primary)",
            }}>
              <Car size={24} aria-hidden="true" />
            </div>
            <div>
              <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>
                Maruti Swift ZXI+
              </Typography>
              <Typography variant="body-sm" color="muted">MH 01 AB 1234 · 2021 · Petrol</Typography>
            </div>
          </div>
          <Separator />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
            {VEHICLE_INFO.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-4)" }}>
                <Typography variant="body-sm" color="muted">{label}</Typography>
                <Typography variant="body-sm" weight="medium" color="strong" align="right" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {value}
                </Typography>
              </div>
            ))}
          </div>
        </Card>

        {/* Active policy card */}
        <Card variant="demoted" padding="md">
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <Shield size={16} aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }} />
            <Typography variant="label-lg" weight="semibold" color="strong">Active policy</Typography>
            <Badge color="green" size="sm">Active</Badge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
            {POLICY_INFO.map(({ label, value }) => (
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

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-3)" }}>
          <Button type="button" variant="primary" size="lg" fullWidth>
            View policy details
          </Button>
          <Button type="button" variant="outline" size="md" fullWidth>
            Download RC copy
          </Button>
        </div>
      </main>
    </div>
  );
}
