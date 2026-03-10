// Dark Mode — Full mobile home screen
import { useState } from "react";
import { Bell, Car, Heart, Plane, ChevronRight, FileText, Phone, Home, User, Shield, Wrench, AlertCircle } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Progress } from "@acko/progress";
import { Separator } from "@acko/separator";

const POLICIES = [
  { icon: Car, type: "Car Insurance", detail: "MH 01 AB 1234 · Maruti Swift", expires: "12 Mar 2026", status: "Active" as const },
  { icon: Heart, type: "Health Insurance", detail: "Family floater · ₹5L cover", expires: "28 Jun 2026", status: "Active" as const },
  { icon: Plane, type: "Travel Insurance", detail: "Thailand · 7 days", expires: "15 Apr 2025", status: "Expired" as const },
];

const QUICK_ACTIONS = [
  { icon: FileText, label: "File a claim" },
  { icon: Wrench, label: "Roadside help" },
  { icon: Phone, label: "Support" },
  { icon: Shield, label: "Buy new policy" },
];

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Policies", active: false },
  { icon: Phone, label: "Claims", active: false },
  { icon: User, label: "Account", active: false },
];

export default function Prompt122() {
  const [notifCount] = useState(3);

  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg" alt="ACKO" style={{ height: "var(--scale-24)", width: "auto" }} />
        <button aria-label={`Notifications, ${notifCount} unread`} style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", position: "relative", color: "var(--color-text-strong)" }}>
          <Bell size={20} aria-hidden="true" />
          {notifCount > 0 && (
            <div style={{ position: "absolute", top: 6, right: 6, width: "var(--scale-16)", height: "var(--scale-16)", borderRadius: "var(--radius-full)", background: "var(--color-error)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="caption" color="strong" style={{ lineHeight: 1 }}>{notifCount}</Typography>
            </div>
          )}
        </button>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", paddingBottom: "calc(var(--scale-72) + var(--space-5))", display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 480, margin: "0 auto", width: "100%" }}>
        {/* Greeting */}
        <div>
          <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
            Good morning, Rohan
          </Typography>
          <Typography variant="body-sm" color="muted">Your policies are active and up to date.</Typography>
        </div>

        {/* Renewal banner */}
        <Card variant="default" padding="none" style={{ background: "var(--color-warning-subtle)", border: "1px solid var(--color-warning)" }}>
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <AlertCircle size={18} aria-hidden="true" style={{ color: "var(--color-warning)", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Renewal due soon</Typography>
                <Typography variant="body-sm" color="muted">Travel insurance expires 15 Apr 2025</Typography>
              </div>
              <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation", flexShrink: 0 }}>Renew</Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Quick actions</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-2)" }}>
            {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
              <button key={label} style={{ background: "var(--color-surface-secondary)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-2xl)", padding: "var(--space-3) var(--space-2)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)", cursor: "pointer", touchAction: "manipulation", minHeight: "var(--scale-72)" }}>
                <div style={{ color: "var(--color-primary)" }}><Icon size={20} aria-hidden="true" /></div>
                <Typography variant="caption" color="strong">{label}</Typography>
              </button>
            ))}
          </div>
        </div>

        {/* Policies */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
            <Typography variant="label-lg" weight="semibold" color="strong">My policies</Typography>
            <button style={{ background: "none", border: "none", cursor: "pointer", touchAction: "manipulation", display: "flex", alignItems: "center", gap: "var(--space-1)", padding: "var(--space-1)" }}>
              <Typography variant="label-sm" color="primary">View all</Typography>
              <ChevronRight size={14} aria-hidden="true" style={{ color: "var(--color-primary)" }} />
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {POLICIES.map(({ icon: Icon, type, detail, expires, status }) => (
              <Card key={type} variant="default" padding="none" style={{ cursor: "pointer", touchAction: "manipulation" }}>
                <CardContent>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                      <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-lg)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>{type}</Typography>
                        <Typography variant="body-sm" color="muted">{detail}</Typography>
                        <Typography variant="caption" color="muted">Expires {expires}</Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flexShrink: 0 }}>
                      <Badge color={status === "Active" ? "green" : "red"} size="sm">{status}</Badge>
                      <ChevronRight size={16} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active claim */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Active claim</Typography>
          <Card variant="default" padding="none">
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">Own damage</Typography>
                <Badge color="blue" size="sm">Under review</Badge>
              </div>
              <Typography variant="caption" color="muted" style={{ display: "block", marginBottom: "var(--space-3)" }}>#ACK-2024-09812 · Filed 10 Jan 2025</Typography>
              <Progress value={50} size="sm" style={{ marginBottom: "var(--space-2)" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="caption" color="primary">Under review</Typography>
                <Typography variant="caption" color="muted">Settlement</Typography>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help */}
        <Typography variant="caption" color="muted" align="center">
          Need help? Call 1800-266-2256 (toll free, 24x7)
        </Typography>
      </main>

      {/* Bottom navigation */}
      <nav aria-label="Main navigation" style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--color-surface-secondary)", borderTop: "1px solid var(--color-border-subtle)", display: "flex", paddingBottom: "env(safe-area-inset-bottom)", zIndex: "var(--z-sticky)" }}>
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
