// Iteration 5: Home dashboard — full skeleton loading state
import { Bell, Home, FileText, Phone, User } from "lucide-react";
import { Skeleton } from "@acko/skeleton";
import { Typography } from "@acko/typography";

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Policies", active: false },
  { icon: Phone, label: "Claims", active: false },
  { icon: User, label: "Account", active: false },
];

export default function Prompt105() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
          alt="ACKO"
          style={{ height: "var(--scale-24)", width: "auto" }}
        />
        <button aria-label="Notifications" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
          <Bell size={20} aria-hidden="true" />
        </button>
      </header>

      <main aria-busy="true" aria-label="Loading home dashboard" style={{ flex: 1, padding: "var(--space-5) var(--space-4)", paddingBottom: "calc(var(--scale-64) + var(--space-5))", display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 480, margin: "0 auto", width: "100%" }}>
        {/* Greeting skeleton */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <Skeleton style={{ height: "var(--scale-24)", width: "60%", borderRadius: "var(--radius-md)" }} />
          <Skeleton style={{ height: "var(--scale-16)", width: "45%", borderRadius: "var(--radius-md)" }} />
        </div>

        {/* Policy card skeleton */}
        <div>
          <Skeleton style={{ height: "var(--scale-20)", width: "30%", borderRadius: "var(--radius-md)", marginBottom: "var(--space-3)" }} />
          <div style={{ background: "var(--grey-white)", borderRadius: "var(--radius-3xl)", padding: "var(--space-4)", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <Skeleton style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-lg)", flexShrink: 0 }} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <Skeleton style={{ height: "var(--scale-16)", width: "55%", borderRadius: "var(--radius-md)" }} />
                <Skeleton style={{ height: "var(--scale-12)", width: "75%", borderRadius: "var(--radius-md)" }} />
              </div>
              <Skeleton style={{ height: "var(--scale-20)", width: "var(--scale-48)", borderRadius: "var(--radius-full)" }} />
            </div>
          </div>
        </div>

        {/* Quick actions skeleton */}
        <div>
          <Skeleton style={{ height: "var(--scale-20)", width: "35%", borderRadius: "var(--radius-md)", marginBottom: "var(--space-3)" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
            {[0, 1].map((i) => (
              <Skeleton key={i} style={{ height: "var(--scale-80)", borderRadius: "var(--radius-2xl)" }} />
            ))}
          </div>
        </div>

        {/* Services skeleton */}
        <div>
          <Skeleton style={{ height: "var(--scale-20)", width: "45%", borderRadius: "var(--radius-md)", marginBottom: "var(--space-3)" }} />
          <div style={{ background: "var(--grey-white)", borderRadius: "var(--radius-3xl)", padding: "var(--space-4)", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {[0, 1].map((i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <Skeleton style={{ width: "var(--scale-20)", height: "var(--scale-20)", borderRadius: "var(--radius-md)" }} />
                  <Skeleton style={{ height: "var(--scale-16)", width: "var(--scale-120)", borderRadius: "var(--radius-md)" }} />
                </div>
                <Skeleton style={{ height: "var(--scale-20)", width: "var(--scale-44)", borderRadius: "var(--radius-full)" }} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom nav */}
      <nav aria-label="Main navigation" style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", display: "flex", paddingBottom: "env(safe-area-inset-bottom)", zIndex: "var(--z-sticky)" }}>
        {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
          <button key={label} aria-label={label} aria-current={active ? "page" : undefined} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", background: "none", border: "none", cursor: "pointer", touchAction: "manipulation", padding: "var(--space-3) var(--space-2)", color: active ? "var(--color-primary)" : "var(--color-text-muted)" }}>
            <Icon size={20} aria-hidden="true" />
            <Typography variant="caption" color={active ? "primary" : "muted"}>{label}</Typography>
          </button>
        ))}
      </nav>
    </div>
  );
}
