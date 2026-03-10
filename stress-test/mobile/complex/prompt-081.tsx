import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Alert } from "@acko/alert";

const POLICIES = [
  { id: "car", icon: "🚗", type: "Car Insurance", name: "Comprehensive", vehicle: "MH 01 AB 1234", expiry: "2 Mar 2027", status: "active", premium: 5637, daysLeft: 365 },
  { id: "health", icon: "❤️", type: "Health Insurance", name: "Family Floater Plus", vehicle: "3 members", expiry: "15 Jun 2026", status: "active", premium: 2697, daysLeft: 104 },
  { id: "travel", icon: "✈️", type: "Travel Insurance", name: "Standard", vehicle: "Thailand · 5 days", expiry: "28 Feb 2026", status: "expired", premium: 1196, daysLeft: 0 },
];

const RECOMMENDATIONS = [
  { icon: "🏍️", title: "Bike insurance", subtitle: "Cover your two-wheeler from ₹499/yr" },
  { icon: "🏠", title: "Home insurance", subtitle: "Protect your home from ₹299/yr" },
];

const QUICK_ACTIONS = [
  { icon: "📋", label: "File claim", color: "var(--color-primary)" },
  { icon: "🔄", label: "Renew", color: "var(--orange-500)" },
  { icon: "🏥", label: "Garages", color: "var(--teal-500, var(--color-primary))" },
  { icon: "📞", label: "Support", color: "var(--color-text-muted)" },
];

export default function Prompt081() {
  const [bannerShown, setBannerShown] = useState(true);

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--color-primary)" }} />

      {/* Header */}
      <div style={{ background: "var(--color-primary)", padding: "0 var(--space-4) var(--space-5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
          <div>
            <Typography variant="label-sm" style={{ color: "var(--purple-200)", display: "block" }}>Good evening,</Typography>
            <Typography variant="heading-md" weight="bold" style={{ color: "var(--grey-white)", display: "block" }}>Arjun 👋</Typography>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <button style={{ background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", touchAction: "manipulation" }} aria-label="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              <div style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: "var(--radius-full)", background: "var(--color-error)", border: "1.5px solid var(--color-primary)" }} />
            </button>
            <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", background: "var(--purple-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="label-md" weight="bold" style={{ color: "var(--grey-white)" }}>A</Typography>
            </div>
          </div>
        </div>

        {/* Coverage summary */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-2)" }}>
          <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "var(--radius-xl)", padding: "var(--space-3)" }}>
            <Typography variant="caption" style={{ color: "var(--purple-200)", display: "block" }}>Active policies</Typography>
            <Typography variant="heading-sm" weight="bold" style={{ color: "var(--grey-white)" }}>2</Typography>
          </div>
          <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "var(--radius-xl)", padding: "var(--space-3)" }}>
            <Typography variant="caption" style={{ color: "var(--purple-200)", display: "block" }}>Total coverage</Typography>
            <Typography variant="heading-sm" weight="bold" style={{ color: "var(--grey-white)", fontVariantNumeric: "tabular-nums" }}>₹6.1L+</Typography>
          </div>
        </div>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 80 }}>
        {/* Alert banner */}
        {bannerShown && (
          <Alert variant="warning">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-2)" }}>
              <Typography variant="body-sm" style={{ color: "var(--color-warning-text)" }}>Travel insurance expired. Book your next trip worry-free.</Typography>
              <button onClick={() => setBannerShown(false)} style={{ background: "none", border: "none", cursor: "pointer", flexShrink: 0, touchAction: "manipulation" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
          </Alert>
        )}

        {/* Quick actions */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              {QUICK_ACTIONS.map((a) => (
                <button key={a.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", touchAction: "manipulation", minHeight: "var(--scale-56)" }}>
                  <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", background: "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">{a.icon}</div>
                  <Typography variant="caption" color="muted">{a.label}</Typography>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policies */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
            <Typography variant="label-lg" weight="semibold" color="strong">My policies</Typography>
            <button style={{ background: "none", border: "none", cursor: "pointer", touchAction: "manipulation" }}>
              <Typography variant="body-sm" color="primary">See all</Typography>
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {POLICIES.map((p) => (
              <Card key={p.id} variant={p.status === "active" ? "default" : "default"} padding="md" role="button" tabIndex={0} style={{ cursor: "pointer", touchAction: "manipulation", opacity: p.status === "expired" ? 0.7 : 1 }}>
                <CardContent>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-xl)", background: p.status === "active" ? "var(--color-primary-subtle)" : "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{p.type}</Typography>
                          <Typography variant="caption" color="muted" style={{ display: "block" }}>{p.vehicle}</Typography>
                        </div>
                        <Badge color={p.status === "active" ? "green" : "orange"} size="sm">{p.status === "active" ? "Active" : "Expired"}</Badge>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-2)" }}>
                        <Typography variant="caption" color={p.status === "expired" ? "error" : "muted"}>
                          {p.status === "expired" ? "Expired" : "Expires"} {p.expiry}
                        </Typography>
                        <Typography variant="caption" weight="semibold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{p.premium.toLocaleString("en-IN")}/yr</Typography>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>You might need</Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {RECOMMENDATIONS.map((r) => (
              <Card key={r.title} variant="default" padding="md" style={{ background: "var(--color-primary-subtle)", border: "1px solid var(--color-primary-border)" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                      <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">{r.icon}</div>
                      <div>
                        <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{r.title}</Typography>
                        <Typography variant="caption" color="muted">{r.subtitle}</Typography>
                      </div>
                    </div>
                    <Button type="button" variant="outline" size="sm" style={{ touchAction: "manipulation", flexShrink: 0 }}>Get</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", display: "flex" }}>
        {[{ icon: "🏠", label: "Home", active: true }, { icon: "📋", label: "Policies" }, { icon: "📁", label: "Claims" }, { icon: "👤", label: "Account" }].map((item) => (
          <button key={item.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "var(--space-2) 0", background: "none", border: "none", cursor: "pointer", touchAction: "manipulation", minHeight: "var(--scale-56)" }}>
            <div style={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">{item.icon}</div>
            <Typography variant="caption" color={item.active ? "primary" : "muted"}>{item.label}</Typography>
          </button>
        ))}
      </nav>
    </div>
  );
}
