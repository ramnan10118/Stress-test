// Iteration 2: Home dashboard + value added services section
import { Bell, Car, ChevronRight, FileText, Phone, Home, User, ShieldCheck, Wrench } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Policies", active: false },
  { icon: Phone, label: "Claims", active: false },
  { icon: User, label: "Account", active: false },
];

const SERVICES = [
  { icon: ShieldCheck, label: "Zero Depreciation", status: "Active" },
  { icon: Wrench, label: "Roadside Assistance", status: "Active" },
];

const QUICK_ACTIONS = [
  { icon: FileText, label: "File a claim" },
  { icon: Phone, label: "Roadside help" },
];

export default function Prompt102() {
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
            Good morning, Rohan
          </Typography>
          <Typography variant="body-sm" color="muted">Your policies are active and up to date.</Typography>
        </div>

        {/* Policy card */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
            My policies
          </Typography>
          <Card variant="default" padding="none" style={{ cursor: "pointer", touchAction: "manipulation" }}>
            <CardContent>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-lg)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                    <Car size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Car insurance</Typography>
                    <Typography variant="body-sm" color="muted">MH 01 AB 1234 · Expires 12 Mar 2026</Typography>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flexShrink: 0 }}>
                  <Badge color="green" size="sm">Active</Badge>
                  <ChevronRight size={16} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Value added services */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
            Value added services
          </Typography>
          <Card variant="default" padding="none">
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {SERVICES.map(({ icon: Icon, label, status }, i) => (
                  <div key={label}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                        <div style={{ color: "var(--color-primary)" }}>
                          <Icon size={18} aria-hidden="true" />
                        </div>
                        <Typography variant="label-md" weight="medium" color="strong">{label}</Typography>
                      </div>
                      <Badge color="green" size="sm">{status}</Badge>
                    </div>
                    {i < SERVICES.length - 1 && (
                      <div style={{ marginTop: "var(--space-3)" }}>
                        <Separator />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick actions */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
            Quick actions
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
            {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
              <button
                key={label}
                style={{ background: "var(--grey-white)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-2xl)", padding: "var(--space-4)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-2)", cursor: "pointer", touchAction: "manipulation", minHeight: "var(--scale-80)", textAlign: "left" }}
              >
                <div style={{ color: "var(--color-primary)" }}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <Typography variant="label-md" weight="medium" color="strong">{label}</Typography>
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
