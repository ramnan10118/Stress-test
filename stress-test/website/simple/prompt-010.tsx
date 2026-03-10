import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Alert } from "@acko/alert";

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function Prompt010() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div
        style={{
          padding: "var(--space-8) var(--space-4)",
          textAlign: "center",
          color: "var(--color-text-muted)",
        }}
      >
        <Typography variant="body-sm">Banner dismissed.</Typography>
      </div>
    );
  }

  return (
    <div style={{ padding: "var(--space-4)" }}>
      {/* Full-width renewal banner */}
      <div
        style={{
          background: "var(--grey-white)",
          border: "1px solid var(--color-warning-border)",
          borderLeft: "4px solid var(--color-warning)",
          borderRadius: "var(--radius-2xl)",
          padding: "var(--space-4) var(--space-5)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
          maxWidth: 760,
          margin: "0 auto",
          boxShadow: "var(--shadow-md)",
        }}
        role="alert"
        aria-live="polite"
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "var(--space-4)",
          }}
        >
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", flex: 1 }}>
            <div
              style={{
                width: "var(--scale-40)",
                height: "var(--scale-40)",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-warning-subtle)",
                color: "var(--color-warning)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CalendarIcon />
            </div>
            <div>
              <Typography
                variant="heading-sm"
                weight="semibold"
                color="strong"
                style={{ display: "block" }}
              >
                Your policy expires in 7 days
              </Typography>
              <Typography variant="body-sm" color="muted" style={{ marginTop: "var(--space-1)" }}>
                MH 01 AB 1234 · Policy No. ACK-2023-8471234 · Expires 10 Mar 2026
              </Typography>
            </div>
          </div>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss renewal reminder"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              padding: "var(--space-1)",
              minWidth: "var(--scale-44)",
              minHeight: "var(--scale-44)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-md)",
              touchAction: "manipulation",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Premium + CTA row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Typography variant="caption" color="muted" style={{ display: "block" }}>
              Renewal premium
            </Typography>
            <Typography
              variant="heading-md"
              weight="bold"
              color="strong"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              ₹5,499
            </Typography>
            <Typography variant="caption" color="muted">
              Comprehensive · incl. GST
            </Typography>
          </div>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              style={{ touchAction: "manipulation" }}
            >
              View details
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              style={{ touchAction: "manipulation" }}
            >
              Renew now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
