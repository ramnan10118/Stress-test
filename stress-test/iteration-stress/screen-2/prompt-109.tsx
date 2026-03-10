// Iteration 9: Home dashboard + rich personalised greeting (time-of-day, avatar initials, contextual message)
import { Bell, Car, ChevronRight, FileText, Phone, Home, User } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Policies", active: false },
  { icon: Phone, label: "Claims", active: false },
  { icon: User, label: "Account", active: false },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return { salutation: "Good morning", emoji: "☀️", message: "Drive safe today." };
  if (hour < 17) return { salutation: "Good afternoon", emoji: "🌤️", message: "Hope your day is going well." };
  return { salutation: "Good evening", emoji: "🌙", message: "Time to wind down." };
}

const USER = { name: "Rohan Mehta", initials: "RM" };

export default function Prompt109() {
  const { salutation, message } = getGreeting();

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
        {/* Personalised greeting */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          {/* Avatar */}
          <div style={{ width: "var(--scale-48)", height: "var(--scale-48)", borderRadius: "var(--radius-full)", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-hidden="true">
            <Typography variant="label-lg" weight="semibold" style={{ color: "var(--grey-white)" }}>
              {USER.initials}
            </Typography>
          </div>
          <div>
            <Typography variant="body-sm" color="muted" style={{ display: "block" }}>
              {salutation}
            </Typography>
            <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block" }}>
              {USER.name.split(" ")[0]} 👋
            </Typography>
            <Typography variant="caption" color="muted">
              {message}
            </Typography>
          </div>
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

        {/* Quick actions */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
            Quick actions
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
            {[{ icon: FileText, label: "File a claim" }, { icon: Phone, label: "Roadside help" }].map(({ icon: Icon, label }) => (
              <button key={label} style={{ background: "var(--grey-white)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-2xl)", padding: "var(--space-4)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-2)", cursor: "pointer", touchAction: "manipulation", minHeight: "var(--scale-80)", textAlign: "left" }}>
                <div style={{ color: "var(--color-primary)" }}><Icon size={20} aria-hidden="true" /></div>
                <Typography variant="label-md" weight="medium" color="strong">{label}</Typography>
              </button>
            ))}
          </div>
        </div>

        {/* Profile nudge */}
        <Card variant="default" padding="none" style={{ background: "var(--color-surface-secondary)", border: "none" }}>
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
              <div>
                <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  Complete your profile
                </Typography>
                <Typography variant="body-sm" color="muted">Add your nominee details for faster claims.</Typography>
              </div>
              <ChevronRight size={16} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
            </div>
          </CardContent>
        </Card>
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
