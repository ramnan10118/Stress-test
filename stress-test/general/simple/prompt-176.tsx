import { AlertTriangle, Clock, ChevronRight } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";

export default function Prompt176() {
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
        paddingBottom: "var(--space-20)",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}>
        <div>
          <Typography variant="heading-lg" weight="semibold" color="strong" as="h1" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            Renewal reminder
          </Typography>
          <Typography variant="body-sm" color="muted">
            Your policy is expiring soon. Renew now to stay protected.
          </Typography>
        </div>

        <Card variant="default" padding="md">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <div style={{
                width: "var(--scale-36)",
                height: "var(--scale-36)",
                borderRadius: "var(--radius-full)",
                background: "var(--color-warning-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-warning)",
                flexShrink: 0,
              }}>
                <AlertTriangle size={18} aria-hidden="true" />
              </div>
              <div>
                <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>
                  Car insurance
                </Typography>
                <Typography variant="caption" color="muted">Maruti Swift ZXI+ · MH 01 AB 1234</Typography>
              </div>
            </div>
            <Badge color="orange" size="sm">Expiring</Badge>
          </div>

          <div style={{
            background: "var(--color-warning-subtle)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-3) var(--space-4)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            marginBottom: "var(--space-4)",
          }}>
            <Clock size={16} aria-hidden="true" style={{ color: "var(--color-warning)", flexShrink: 0 }} />
            <Typography variant="label-md" weight="medium" color="default">
              Expires on 10 Mar 2026 — 7 days left
            </Typography>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", marginBottom: "var(--space-5)" }}>
            {[
              { label: "Policy number", value: "ACK-2026-4721839" },
              { label: "Plan", value: "Comprehensive" },
              { label: "Current premium", value: "₹5,782/yr" },
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

          <Button type="button" variant="primary" size="lg" fullWidth>
            Renew now
          </Button>
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
          <Typography variant="body-sm" color="primary">View all policies</Typography>
          <ChevronRight size={16} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
        </button>
      </main>
    </div>
  );
}
