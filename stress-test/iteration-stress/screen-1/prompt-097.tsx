import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Alert } from "@acko/alert";
import { Badge } from "@acko/badge";

// Iteration 7: Error state variants — network error, partial load, retry flow

type ErrorVariant = "network" | "partial" | "timeout";

const ERROR_INFO: Record<ErrorVariant, { title: string; body: string; retry: string }> = {
  network: { title: "No internet connection", body: "Check your Wi-Fi or mobile data and try again.", retry: "Retry" },
  partial: { title: "Some plans couldn't load", body: "We could only load part of the available plans. Some options may be missing.", retry: "Load all plans" },
  timeout: { title: "Taking longer than usual", body: "Our servers are busy. Please wait a moment and try again.", retry: "Try again" },
};

const PARTIAL_PLANS = [
  { id: "tp", name: "Third Party", price: 2094, loaded: true },
  { id: "comp", name: "Comprehensive", price: 4599, loaded: false },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, loaded: false },
];

export default function Prompt097() {
  const [variant, setVariant] = useState<ErrorVariant>("network");
  const [retried, setRetried] = useState(false);

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      {/* Header */}
      <div style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", gap: "var(--space-3)", position: "sticky", top: 0 }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="label-lg" weight="semibold" color="strong">Choose a plan</Typography>
      </div>

      <div style={{ padding: "var(--space-5) var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Error variant switcher */}
        <div>
          <Typography variant="caption" color="muted" style={{ display: "block", marginBottom: "var(--space-2)" }}>Error variant:</Typography>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            {(["network", "partial", "timeout"] as ErrorVariant[]).map((v) => (
              <button key={v} onClick={() => { setVariant(v); setRetried(false); }} style={{ padding: "var(--space-1) var(--space-3)", borderRadius: "var(--radius-full)", border: "1px solid", borderColor: variant === v ? "var(--color-primary)" : "var(--color-border-default)", background: variant === v ? "var(--color-primary)" : "var(--grey-white)", color: variant === v ? "var(--color-on-primary)" : "var(--color-text-default)", cursor: "pointer", touchAction: "manipulation" }}>
                <Typography variant="caption" style={{ color: "inherit" }}>{v}</Typography>
              </button>
            ))}
          </div>
        </div>

        {/* Network error */}
        {variant === "network" && !retried && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-5)", padding: "var(--space-10) 0", textAlign: "center" }}>
            <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-error-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-error)" }} aria-hidden="true">
                <line x1="1" y1="1" x2="23" y2="23" /><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" /><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><path d="M10.71 5.05A16 16 0 0 1 22.56 9" /><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" />
              </svg>
            </div>
            <div>
              <Typography variant="heading-sm" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }} align="center">{ERROR_INFO.network.title}</Typography>
              <Typography variant="body-md" color="muted" align="center">{ERROR_INFO.network.body}</Typography>
            </div>
            <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }} onClick={() => setRetried(true)}>
              {ERROR_INFO.network.retry}
            </Button>
          </div>
        )}

        {/* Partial load */}
        {variant === "partial" && (
          <>
            <Alert variant="warning">Some plans could not be loaded. Showing available plans only.</Alert>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {PARTIAL_PLANS.map((plan) => (
                <Card key={plan.id} variant="default" padding="md" style={{ opacity: plan.loaded ? 1 : 0.5 }}>
                  <CardContent>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                        <div style={{ width: 20, height: 20, borderRadius: "var(--radius-full)", border: "2px solid var(--color-border-default)", background: "var(--grey-white)" }} />
                        <div>
                          <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
                          {!plan.loaded && <Badge color="orange" size="sm">Failed to load</Badge>}
                        </div>
                      </div>
                      {plan.loaded ? (
                        <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.price.toLocaleString("en-IN")}/yr</Typography>
                      ) : (
                        <Button type="button" variant="ghost" size="sm" style={{ touchAction: "manipulation" }}>Retry</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Timeout */}
        {variant === "timeout" && !retried && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-10) 0" }}>
            <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-warning-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-warning-text)" }} aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <div>
              <Typography variant="heading-sm" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }} align="center">{ERROR_INFO.timeout.title}</Typography>
              <Typography variant="body-md" color="muted" align="center">{ERROR_INFO.timeout.body}</Typography>
            </div>
            <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }} onClick={() => setRetried(true)}>{ERROR_INFO.timeout.retry}</Button>
          </div>
        )}

        {/* After retry */}
        {retried && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-6) 0" }}>
            <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", border: "3px solid var(--color-primary-subtle)", borderTop: "3px solid var(--color-primary)", animation: "spin 1s linear infinite" }} aria-label="Loading" />
            <Typography variant="body-md" color="muted" align="center">Loading plans…</Typography>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}
      </div>
    </div>
  );
}
