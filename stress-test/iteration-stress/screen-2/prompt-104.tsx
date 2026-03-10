// Iteration 4: Home dashboard + active claim tracking card
import { Bell, Car, ChevronRight, FileText, Phone, Home, User, Clock, CheckCircle, Circle } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Progress } from "@acko/progress";

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Policies", active: false },
  { icon: Phone, label: "Claims", active: false },
  { icon: User, label: "Account", active: false },
];

const CLAIM_STEPS = [
  { label: "Submitted", done: true },
  { label: "Under review", done: true },
  { label: "Documents verified", done: false },
  { label: "Settlement", done: false },
];

export default function Prompt104() {
  const completedSteps = CLAIM_STEPS.filter((s) => s.done).length;
  const progress = Math.round((completedSteps / CLAIM_STEPS.length) * 100);

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
          <Typography variant="body-sm" color="muted">You have an active claim in progress.</Typography>
        </div>

        {/* Active claim card */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
            Active claim
          </Typography>
          <Card variant="default" padding="none" style={{ cursor: "pointer", touchAction: "manipulation" }}>
            <CardContent>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
                <div>
                  <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                    Car insurance claim
                  </Typography>
                  <Typography variant="body-sm" color="muted">Claim #ACK-2024-09812</Typography>
                </div>
                <Badge color="blue" size="sm">Under review</Badge>
              </div>

              <Progress value={progress} size="sm" style={{ marginBottom: "var(--space-4)" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {CLAIM_STEPS.map(({ label, done }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <div style={{ color: done ? "var(--color-success)" : "var(--color-border-default)", flexShrink: 0 }}>
                      {done ? <CheckCircle size={16} aria-hidden="true" /> : <Circle size={16} aria-hidden="true" />}
                    </div>
                    <Typography variant="body-sm" color={done ? "default" : "muted"}>{label}</Typography>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Clock size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
                <Typography variant="caption" color="muted">Updated 2 hours ago</Typography>
              </div>
            </CardContent>
          </Card>
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
                    <Typography variant="body-sm" color="muted">MH 01 AB 1234 · Active</Typography>
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
