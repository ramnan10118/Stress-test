import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";

const POLICIES = [
  { id: "car", icon: "🚗", name: "Car Insurance", vehicle: "MH 01 AB 1234", status: "active", expiry: "2 Mar 2027", premium: "₹5,637" },
  { id: "health", icon: "❤️", name: "Health Insurance", vehicle: "Family (3 members)", status: "active", expiry: "15 Jun 2026", premium: "₹2,697/yr" },
  { id: "travel", icon: "✈️", name: "Travel Insurance", vehicle: "Thailand trip", status: "expired", expiry: "28 Feb 2026", premium: "₹1,196" },
];

const QUICK_ACTIONS = [
  { icon: "📄", label: "File claim" },
  { icon: "🔄", label: "Renew" },
  { icon: "📥", label: "Download" },
  { icon: "📞", label: "Support" },
];

export default function Prompt061() {
  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      {/* Status bar area */}
      <div style={{ height: 44, background: "var(--color-primary)" }} />

      {/* Header */}
      <div style={{ background: "var(--color-primary)", padding: "0 var(--space-4) var(--space-5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <Typography variant="label-sm" color="muted" style={{ display: "block" }}>Good morning,</Typography>
            <Typography variant="heading-md" weight="bold" color="default" style={{ display: "block" }}>Arjun 👋</Typography>
          </div>
          <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-full)", background: "var(--purple-700)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Typography variant="label-lg" weight="bold" color="default">A</Typography>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 80 }}>
        {/* Quick actions */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-2)" }}>
              {QUICK_ACTIONS.map((a) => (
                <button key={a.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", borderRadius: "var(--radius-md)", touchAction: "manipulation", minHeight: "var(--scale-44)" }}>
                  <span aria-hidden="true">{a.icon}</span>
                  <Typography variant="caption" color="muted">{a.label}</Typography>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policies */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>My policies</Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {POLICIES.map((p) => (
              <Card key={p.id} variant="default" padding="md" role="button" tabIndex={0} style={{ cursor: "pointer", touchAction: "manipulation" }}>
                <CardContent>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "var(--space-3)" }}>
                      <span style={{ marginTop: 2 }} aria-hidden="true">{p.icon}</span>
                      <div>
                        <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>{p.name}</Typography>
                        <Typography variant="caption" color="muted" style={{ display: "block" }}>{p.vehicle}</Typography>
                        <Typography variant="caption" color="muted">Expires {p.expiry}</Typography>
                      </div>
                    </div>
                    <Badge color={p.status === "active" ? "green" : "orange"} size="sm">{p.status === "active" ? "Active" : "Expired"}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Explore */}
        <Card variant="default" padding="md" style={{ background: "var(--color-primary-subtle)" }}>
          <CardContent>
            <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>Explore more insurance</Typography>
            <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-3)" }}>Bike, life, term, home — all at ACKO prices</Typography>
            <Button type="button" variant="outline" size="sm" style={{ touchAction: "manipulation" }}>Browse plans</Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom nav */}
      <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", display: "flex", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        {[{ icon: "🏠", label: "Home", active: true }, { icon: "📋", label: "Policies" }, { icon: "🔔", label: "Alerts" }, { icon: "👤", label: "Account" }].map((item) => (
          <button key={item.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "var(--space-2) 0", background: "none", border: "none", cursor: "pointer", touchAction: "manipulation", minHeight: "var(--scale-56)" }}>
            <span aria-hidden="true">{item.icon}</span>
            <Typography variant="caption" color={item.active ? "primary" : "muted"}>{item.label}</Typography>
          </button>
        ))}
      </nav>
    </div>
  );
}
