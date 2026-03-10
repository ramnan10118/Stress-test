import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Button } from "@acko/button";
import { Badge } from "@acko/badge";

const SERVICES = [
  { id: "rsa", icon: "🚐", name: "Roadside Assistance", desc: "Tow, battery, fuel — 24×7 nationwide", badge: "Included", badgeColor: "green" as const },
  { id: "cashless", icon: "🏥", name: "Cashless Garages", desc: "5,000+ network garages across India", badge: null },
  { id: "challan", icon: "🚦", name: "Challan Check", desc: "Check and pay traffic fines instantly", badge: null },
  { id: "health", icon: "❤️", name: "Health Check-up", desc: "Annual health check, home collection", badge: "Free" as any, badgeColor: "green" as const },
  { id: "renewal", icon: "🔄", name: "Auto-renewal", desc: "Never miss your renewal date", badge: "Active", badgeColor: "blue" as const },
  { id: "parking", icon: "🅿️", name: "Smart Parking", desc: "Find and book parking spots near you", badge: "New", badgeColor: "orange" as const },
];

export default function Prompt063() {
  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      {/* Header */}
      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="heading-sm" weight="bold" color="strong">Value added services</Typography>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingBottom: 80 }}>
        {SERVICES.map((s) => (
          <Card key={s.id} variant="default" padding="md" role="button" tabIndex={0} style={{ cursor: "pointer", touchAction: "manipulation" }}>
            <CardContent>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-xl)", background: "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-hidden="true">{s.icon}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                      <Typography variant="label-md" weight="semibold" color="strong">{s.name}</Typography>
                      {s.badge && <Badge color={s.badgeColor ?? "blue"} size="sm">{s.badge}</Badge>}
                    </div>
                    <Typography variant="body-sm" color="muted">{s.desc}</Typography>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }}><path d="m9 18 6-6-6-6" /></svg>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
