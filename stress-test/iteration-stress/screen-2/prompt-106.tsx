// Iteration 6: Home dashboard — empty state (no policies added yet)
import { Bell, Home, FileText, Phone, User, Plus, ShieldOff } from "lucide-react";
import { Typography } from "@acko/typography";
import { Button } from "@acko/button";

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Policies", active: false },
  { icon: Phone, label: "Claims", active: false },
  { icon: User, label: "Account", active: false },
];

const PRODUCTS = [
  { label: "Car insurance", from: "₹2,094/yr" },
  { label: "Health insurance", from: "₹299/mo" },
  { label: "Travel insurance", from: "₹49/trip" },
];

export default function Prompt106() {
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

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", paddingBottom: "calc(var(--scale-64) + var(--space-5))", display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 480, margin: "0 auto", width: "100%" }}>
        {/* Greeting */}
        <div>
          <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
            Welcome, Rohan
          </Typography>
          <Typography variant="body-sm" color="muted">Get started by buying your first policy.</Typography>
        </div>

        {/* Empty state */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "var(--space-10) var(--space-4)", textAlign: "center" }}>
          <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-surface-secondary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-4)", color: "var(--color-text-muted)" }}>
            <ShieldOff size={28} aria-hidden="true" />
          </div>
          <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            No active policies
          </Typography>
          <Typography variant="body-sm" color="muted" style={{ maxWidth: 280, display: "block", marginBottom: "var(--space-6)" }}>
            You're not covered yet. Add a policy to protect yourself and your family.
          </Typography>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>
            Buy your first policy
          </Button>
        </div>

        {/* Browse products */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
            Popular products
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {PRODUCTS.map(({ label, from }) => (
              <button
                key={label}
                style={{ background: "var(--grey-white)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-2xl)", padding: "var(--space-4)", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", touchAction: "manipulation", textAlign: "left" }}
              >
                <Typography variant="label-lg" weight="medium" color="strong">{label}</Typography>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <Typography variant="body-sm" color="muted">from {from}</Typography>
                  <div style={{ color: "var(--color-primary)" }}>
                    <Plus size={16} aria-hidden="true" />
                  </div>
                </div>
              </button>
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
