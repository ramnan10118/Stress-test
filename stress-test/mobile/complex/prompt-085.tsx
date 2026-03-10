import { useState } from "react";
import { ChevronLeft, Phone, MapPin, Clock, CheckCircle, Loader2, Truck, User } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Progress } from "@acko/progress";
import { Separator } from "@acko/separator";

type TrackingState = "searching" | "assigned" | "en_route" | "arrived";

const STEPS = [
  { key: "searching", label: "Searching" },
  { key: "assigned", label: "Assigned" },
  { key: "en_route", label: "En route" },
  { key: "arrived", label: "Arrived" },
];

const PROVIDER = {
  name: "Rajesh Kumar",
  vehicle: "MH 04 KL 9876 · Tata Ace",
  phone: "+91 98765 43210",
  eta: "12 min",
  rating: "4.8",
};

function StateSwitcher({ state, onChange }: { state: TrackingState; onChange: (s: TrackingState) => void }) {
  return (
    <div style={{ display: "flex", gap: "var(--space-2)", padding: "var(--space-3) var(--space-4)", background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", justifyContent: "center", flexWrap: "wrap" }}>
      {(["searching", "assigned", "en_route", "arrived"] as TrackingState[]).map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          style={{ background: state === s ? "var(--color-primary)" : "transparent", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-full)", padding: "var(--space-1) var(--space-3)", cursor: "pointer", touchAction: "manipulation", color: state === s ? "var(--color-on-primary)" : "var(--color-text-muted)" }}
        >
          <Typography variant="caption" color={state === s ? undefined : "muted"}>
            {s === "en_route" ? "En route" : s.charAt(0).toUpperCase() + s.slice(1)}
          </Typography>
        </button>
      ))}
    </div>
  );
}

function StepTracker({ currentState }: { currentState: TrackingState }) {
  const currentIndex = STEPS.findIndex((s) => s.key === currentState);
  const progressPercent = Math.round(((currentIndex + 1) / STEPS.length) * 100);

  return (
    <div>
      <Progress value={progressPercent} size="sm" color={currentState === "arrived" ? "success" : "primary"} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-2)" }}>
        {STEPS.map((step, i) => (
          <Typography key={step.key} variant="caption" color={i <= currentIndex ? (currentState === "arrived" ? "success" : "primary") : "muted"} style={{ textAlign: "center", maxWidth: "var(--scale-64)" }}>
            {step.label}
          </Typography>
        ))}
      </div>
    </div>
  );
}

function SearchingView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "var(--space-10) var(--space-4)", gap: "var(--space-4)" }}>
      <div style={{ width: "var(--scale-56)", height: "var(--scale-56)", borderRadius: "var(--radius-full)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Loader2 size={28} aria-hidden="true" style={{ color: "var(--color-primary)", animation: "spin 1.2s linear infinite" }} />
      </div>
      <div>
        <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
          Finding help near you
        </Typography>
        <Typography variant="body-sm" color="muted">
          We're locating the nearest service provider. This usually takes 1–2 minutes.
        </Typography>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function ProviderCard({ state }: { state: TrackingState }) {
  return (
    <Card variant="default" padding="none">
      <CardContent>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
          <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-full)", background: "var(--color-surface-secondary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)", flexShrink: 0 }}>
            <User size={22} aria-hidden="true" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
              <Typography variant="label-lg" weight="semibold" color="strong">{PROVIDER.name}</Typography>
              <Badge color="green" size="sm">{PROVIDER.rating} ★</Badge>
            </div>
            <Typography variant="body-sm" color="muted" style={{ display: "block" }}>{PROVIDER.vehicle}</Typography>
          </div>
          <a
            href={`tel:${PROVIDER.phone}`}
            aria-label={`Call ${PROVIDER.name}`}
            style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-success)", flexShrink: 0, touchAction: "manipulation", textDecoration: "none" }}
          >
            <Phone size={18} aria-hidden="true" />
          </a>
        </div>

        <Separator />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-4)" }}>
          {state === "en_route" && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Clock size={14} aria-hidden="true" style={{ color: "var(--color-primary)" }} />
                <Typography variant="label-md" weight="medium" color="strong">ETA {PROVIDER.eta}</Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Truck size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
                <Typography variant="caption" color="muted">On the way</Typography>
              </div>
            </>
          )}
          {state === "assigned" && (
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <CheckCircle size={14} aria-hidden="true" style={{ color: "var(--color-success)" }} />
              <Typography variant="label-md" weight="medium" color="strong">Provider confirmed</Typography>
            </div>
          )}
          {state === "arrived" && (
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <CheckCircle size={14} aria-hidden="true" style={{ color: "var(--color-success)" }} />
              <Typography variant="label-md" weight="medium" color="success">Help has arrived</Typography>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function ArrivedView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "var(--space-6) var(--space-4)", gap: "var(--space-2)" }}>
      <div style={{ width: "var(--scale-56)", height: "var(--scale-56)", borderRadius: "var(--radius-full)", background: "var(--color-success-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-success)", marginBottom: "var(--space-2)" }}>
        <CheckCircle size={28} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <Typography variant="heading-md" weight="semibold" color="strong">
        Help has arrived
      </Typography>
      <Typography variant="body-sm" color="muted" style={{ maxWidth: 280 }}>
        Your service provider is at your location. Stay safe.
      </Typography>
    </div>
  );
}

export default function Prompt085() {
  const [state, setState] = useState<TrackingState>("en_route");

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <button type="button" aria-label="Go back" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <Typography variant="label-lg" weight="semibold" color="strong">Roadside assistance</Typography>
        <div style={{ width: "var(--scale-44)" }} />
      </header>

      {/* State switcher (demo) */}
      <StateSwitcher state={state} onChange={setState} />

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {/* Step tracker */}
        <StepTracker currentState={state} />

        {/* Request summary */}
        <Card variant="demoted" padding="none">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  Flat tyre
                </Typography>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <MapPin size={12} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
                  <Typography variant="caption" color="muted">Andheri West, Mumbai</Typography>
                </div>
              </div>
              <Typography variant="caption" color="muted">Req #RSA-4821</Typography>
            </div>
          </CardContent>
        </Card>

        {/* State-specific content */}
        {state === "searching" && <SearchingView />}

        {(state === "assigned" || state === "en_route" || state === "arrived") && (
          <ProviderCard state={state} />
        )}

        {state === "arrived" && <ArrivedView />}

        {/* Map placeholder */}
        {(state === "en_route" || state === "assigned") && (
          <Card variant="default" padding="none">
            <div style={{ height: "var(--scale-160, 200px)", background: "var(--color-surface-secondary)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <MapPin size={24} aria-hidden="true" style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-2)" }} />
                <Typography variant="body-sm" color="muted">Live map tracking</Typography>
              </div>
            </div>
          </Card>
        )}

        {/* Help */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", justifyContent: "center" }}>
          <Phone size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
          <Typography variant="caption" color="muted">
            Need urgent help? Call 1800-266-2256
          </Typography>
        </div>
      </main>

      {/* Bottom CTA — context changes by state */}
      {state !== "searching" && (
        <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))", position: "sticky", bottom: 0, zIndex: "var(--z-sticky)" }}>
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            {state === "arrived" ? (
              <Button type="button" variant="primary" size="lg" fullWidth>
                Rate your experience
              </Button>
            ) : (
              <div style={{ display: "flex", gap: "var(--space-3)" }}>
                <Button type="button" variant="outline" size="lg" style={{ flex: 1 }}>
                  Cancel request
                </Button>
                <a
                  href={`tel:${PROVIDER.phone}`}
                  style={{ flex: 1, display: "contents", textDecoration: "none" }}
                >
                  <Button type="button" variant="primary" size="lg" style={{ flex: 1, touchAction: "manipulation" }}>
                    Call provider
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
