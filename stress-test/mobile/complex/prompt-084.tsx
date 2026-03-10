import { useState } from "react";
import { Bell, Car, Heart, ChevronRight, FileText, Phone, Home, User, Shield, Plus } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Skeleton } from "@acko/skeleton";
import { Progress } from "@acko/progress";

type ViewState = "loading" | "empty" | "single" | "multiple";

const POLICIES = [
  { icon: Car, type: "Car Insurance", detail: "Maruti Swift ZXI+ · MH 01 AB 1234", expires: "18 Apr 2026", status: "Active" as const, daysLeft: 47 },
  { icon: Heart, type: "Health Insurance", detail: "Family floater · ₹5L cover", expires: "28 Jun 2026", status: "Active" as const, daysLeft: 118 },
];

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Policies", active: false },
  { icon: Phone, label: "Claims", active: false },
  { icon: User, label: "Account", active: false },
];

function StateSwitcher({ state, onChange }: { state: ViewState; onChange: (s: ViewState) => void }) {
  const states: ViewState[] = ["loading", "empty", "single", "multiple"];
  return (
    <div style={{ display: "flex", gap: "var(--space-2)", padding: "var(--space-3) var(--space-4)", background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", justifyContent: "center", flexWrap: "wrap" }}>
      {states.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          style={{ background: state === s ? "var(--color-primary)" : "transparent", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-full)", padding: "var(--space-1) var(--space-3)", cursor: "pointer", touchAction: "manipulation", color: state === s ? "var(--color-on-primary)" : "var(--color-text-muted)" }}
        >
          <Typography variant="caption" color={state === s ? undefined : "muted"}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </Typography>
        </button>
      ))}
    </div>
  );
}

function LoadingState() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      {/* Greeting skeleton */}
      <div>
        <Skeleton variant="text" width="60%" height="var(--scale-24)" />
        <div style={{ marginTop: "var(--space-2)" }}>
          <Skeleton variant="text" width="80%" height="var(--scale-16)" />
        </div>
      </div>
      {/* Policy card skeleton */}
      <div>
        <Skeleton variant="text" width="30%" height="var(--scale-16)" />
        <div style={{ marginTop: "var(--space-3)" }}>
          <Skeleton variant="rounded" width="100%" height="var(--scale-80)" />
        </div>
      </div>
      {/* Quick actions skeleton */}
      <div>
        <Skeleton variant="text" width="35%" height="var(--scale-16)" />
        <div style={{ marginTop: "var(--space-3)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
          <Skeleton variant="rounded" width="100%" height="var(--scale-72)" />
          <Skeleton variant="rounded" width="100%" height="var(--scale-72)" />
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "var(--space-16) var(--space-4)", gap: "var(--space-2)" }}>
      <div style={{ width: "var(--scale-56)", height: "var(--scale-56)", borderRadius: "var(--radius-full)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", marginBottom: "var(--space-4)" }}>
        <Shield size={28} aria-hidden="true" />
      </div>
      <Typography variant="heading-md" weight="semibold" color="strong">
        No active policies
      </Typography>
      <Typography variant="body-sm" color="muted" style={{ maxWidth: 280, marginBottom: "var(--space-6)" }}>
        You don't have any policies yet. Get covered in under 2 minutes.
      </Typography>
      <Button type="button" variant="primary" size="lg">
        <Plus size={16} aria-hidden="true" style={{ marginRight: "var(--space-2)" }} />
        Buy a policy
      </Button>
    </div>
  );
}

function PolicyCard({ icon: Icon, type, detail, expires, status, daysLeft }: typeof POLICIES[0]) {
  const progressPercent = Math.round(((365 - daysLeft) / 365) * 100);
  return (
    <Card variant="default" padding="none" style={{ cursor: "pointer", touchAction: "manipulation" }}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
          <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-xl)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
            <Icon size={22} aria-hidden="true" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
              <Typography variant="label-lg" weight="semibold" color="strong">{type}</Typography>
              <Badge color="green" size="sm">{status}</Badge>
            </div>
            <Typography variant="body-sm" color="muted" style={{ display: "block" }}>{detail}</Typography>
            <Typography variant="caption" color="muted">Expires {expires}</Typography>
          </div>
          <ChevronRight size={18} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0, marginTop: "var(--space-2)" }} />
        </div>
        <Progress value={progressPercent} size="sm" color="primary" />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-2)" }}>
          <Typography variant="caption" color="muted">{daysLeft} days left</Typography>
          <Typography variant="caption" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>{progressPercent}%</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

function QuickActions() {
  return (
    <div>
      <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
        Quick actions
      </Typography>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
        {[
          { icon: FileText, label: "File a claim" },
          { icon: Phone, label: "Roadside help" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            style={{ background: "var(--grey-white)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-2xl)", padding: "var(--space-4)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-2)", cursor: "pointer", touchAction: "manipulation", minHeight: "var(--scale-72)", textAlign: "left" }}
          >
            <div style={{ color: "var(--color-primary)" }}><Icon size={20} aria-hidden="true" /></div>
            <Typography variant="label-md" weight="medium" color="strong">{label}</Typography>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Prompt084() {
  const [state, setState] = useState<ViewState>("multiple");

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" style={{ height: "var(--scale-24)", width: "auto" }} />
        <button type="button" aria-label="Notifications" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
          <Bell size={20} aria-hidden="true" />
        </button>
      </header>

      {/* State switcher (demo control) */}
      <StateSwitcher state={state} onChange={setState} />

      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", paddingBottom: "calc(var(--scale-64) + var(--space-6))", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {state === "loading" && <LoadingState />}

        {state === "empty" && <EmptyState />}

        {(state === "single" || state === "multiple") && (
          <>
            {/* Greeting */}
            <div>
              <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                Good morning, Rohan
              </Typography>
              <Typography variant="body-sm" color="muted">
                {state === "single" ? "Your policy is active." : "All policies are active and up to date."}
              </Typography>
            </div>

            {/* Policies */}
            <div>
              <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
                {state === "single" ? "My policy" : "My policies"}
              </Typography>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {(state === "single" ? [POLICIES[0]] : POLICIES).map((p) => (
                  <PolicyCard key={p.type} {...p} />
                ))}
              </div>
            </div>

            <QuickActions />
          </>
        )}
      </main>

      {/* Bottom navigation */}
      <nav aria-label="Main navigation" style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", display: "flex", paddingBottom: "env(safe-area-inset-bottom)", zIndex: "var(--z-sticky)" }}>
        {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
          <button key={label} type="button" aria-label={label} aria-current={active ? "page" : undefined} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", background: "none", border: "none", cursor: "pointer", touchAction: "manipulation", padding: "var(--space-2) var(--space-2) var(--space-3)", color: active ? "var(--color-primary)" : "var(--color-text-muted)" }}>
            <Icon size={20} aria-hidden="true" />
            <Typography variant="caption" color={active ? "primary" : "muted"}>{label}</Typography>
          </button>
        ))}
      </nav>
    </div>
  );
}
