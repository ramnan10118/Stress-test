import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Skeleton } from "@acko/skeleton";
import { Alert } from "@acko/alert";

type UIState = "loading" | "default" | "selected" | "empty" | "error";

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, badge: null },
  { id: "comp", name: "Comprehensive", price: 4599, badge: "Recommended" },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null },
];

const STATE_LABELS: { value: UIState; label: string }[] = [
  { value: "loading", label: "Loading" },
  { value: "default", label: "Default" },
  { value: "selected", label: "Plan selected" },
  { value: "empty", label: "Empty (no plans)" },
  { value: "error", label: "Error state" },
];

export default function Prompt056() {
  const [uiState, setUiState] = useState<UIState>("default");
  const [selected, setSelected] = useState("comp");

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Plan selection — all states</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", maxWidth: 580, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* State switcher */}
        <div>
          <Typography variant="label-md" weight="semibold" color="muted" style={{ display: "block", marginBottom: "var(--space-2)" }}>Switch state:</Typography>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            {STATE_LABELS.map((s) => (
              <button
                key={s.value}
                onClick={() => setUiState(s.value)}
                style={{
                  padding: "var(--space-1) var(--space-3)",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid",
                  borderColor: uiState === s.value ? "var(--color-primary)" : "var(--color-border-default)",
                  background: uiState === s.value ? "var(--color-primary)" : "var(--grey-white)",
                  cursor: "pointer",
                  touchAction: "manipulation",
                }}
              >
                <Typography variant="body-sm" color="default">{s.label}</Typography>
              </button>
            ))}
          </div>
        </div>

        {/* Loading state */}
        {uiState === "loading" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {[0, 1, 2].map((i) => (
              <Card key={i} variant="default" padding="md">
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-3)" }}>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                      <Skeleton width="120px" height="20px" />
                      <Skeleton width="80px" height="14px" />
                      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", marginTop: "var(--space-2)" }}>
                        {[0, 1, 2].map((j) => <Skeleton key={j} width="100%" height="14px" />)}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-end" }}>
                      <Skeleton width="80px" height="28px" />
                      <Skeleton width="40px" height="12px" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Default / Selected state */}
        {(uiState === "default" || uiState === "selected") && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {PLANS.map((plan) => {
              const isSelected = uiState === "selected" && selected === plan.id;
              return (
                <Card
                  key={plan.id}
                  variant={isSelected ? "elevated" : "default"}
                  padding="md"
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onClick={() => { setSelected(plan.id); setUiState("selected"); }}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(plan.id)}
                  style={{ cursor: "pointer", outline: isSelected ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, touchAction: "manipulation" }}
                >
                  <CardContent>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                        <div style={{ width: 18, height: 18, borderRadius: "var(--radius-full)", border: `2px solid ${isSelected ? "var(--color-primary)" : "var(--color-border-default)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          {isSelected && <div style={{ width: 10, height: 10, borderRadius: "var(--radius-full)", background: "var(--color-primary)" }} />}
                        </div>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                            <Typography variant="heading-sm" weight="semibold" color="strong">{plan.name}</Typography>
                            {plan.badge && <Badge color="blue" size="sm">{plan.badge}</Badge>}
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{plan.price.toLocaleString("en-IN")}</Typography>
                        <Typography variant="caption" color="muted">/year</Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {uiState === "empty" && (
          <div style={{ textAlign: "center", padding: "var(--space-16) var(--space-4)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
            <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="heading-xl" color="muted">🚗</Typography>
            </div>
            <Typography variant="heading-sm" weight="semibold" color="strong">No plans available</Typography>
            <Typography variant="body-md" color="muted" style={{ maxWidth: 280 }}>We couldn't load plans for your vehicle. This may be because the car is not eligible for online purchase.</Typography>
            <Button type="button" variant="outline" size="md" style={{ touchAction: "manipulation" }}>Contact support</Button>
          </div>
        )}

        {/* Error state */}
        {uiState === "error" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Alert variant="error">Failed to load plans. Please check your connection and try again.</Alert>
            <Button type="button" variant="primary" size="md" style={{ width: "100%", touchAction: "manipulation" }}>Retry</Button>
          </div>
        )}
      </main>

      {/* Bottom CTA — only shown in selected state */}
      {uiState === "selected" && (
        <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "sticky", bottom: 0 }}>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
              Continue with {PLANS.find((p) => p.id === selected)?.name}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
