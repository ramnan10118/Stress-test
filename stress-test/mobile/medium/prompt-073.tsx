import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Tabs } from "@acko/tabs";

const CATEGORIES = {
  included: [
    { icon: "🚐", name: "Roadside Assistance", desc: "Tow, battery, fuel — 24×7", status: "Included" },
    { icon: "💊", name: "Telehealth", desc: "Free doctor consultation", status: "Included" },
    { icon: "✅", name: "Cashless Claims", desc: "30-min claim approval", status: "Included" },
    { icon: "🏥", name: "Network Garages", desc: "5,000+ garages nationally", status: "Included" },
  ],
  discover: [
    { icon: "🅿️", name: "Smart Parking", desc: "Find & book near you", badge: "New", badgeColor: "orange" as const },
    { icon: "🚦", name: "Challan Check", desc: "Pay fines instantly", badge: null },
    { icon: "🔧", name: "Service Reminder", desc: "Car service & EMI alerts", badge: null },
    { icon: "📍", name: "Garage Locator", desc: "Navigate to nearest", badge: null },
    { icon: "🏃", name: "Fitness Rewards", desc: "Stay healthy, earn discounts", badge: "Beta", badgeColor: "blue" as const },
    { icon: "⚡", name: "EV Charging", desc: "Find charging stations", badge: "New", badgeColor: "green" as const },
  ],
};

export default function Prompt073() {
  const [tab, setTab] = useState("included");

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) 0", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="heading-sm" weight="bold" color="strong">Services</Typography>
      </div>

      <div style={{ background: "var(--grey-white)", padding: "var(--space-3) var(--space-4) 0", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <Tabs value={tab} onChange={setTab} items={[{ value: "included", label: "Included" }, { value: "discover", label: "Discover" }]} />
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingBottom: 80 }}>
        {tab === "included" && CATEGORIES.included.map((s) => (
          <Card key={s.name} variant="default" padding="md" role="button" tabIndex={0} style={{ cursor: "pointer", touchAction: "manipulation" }}>
            <CardContent>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-xl)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{s.name}</Typography>
                  <Typography variant="body-sm" color="muted">{s.desc}</Typography>
                </div>
                <Badge color="green" size="sm">{s.status}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}

        {tab === "discover" && CATEGORIES.discover.map((s) => (
          <Card key={s.name} variant="default" padding="md" role="button" tabIndex={0} style={{ cursor: "pointer", touchAction: "manipulation" }}>
            <CardContent>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-xl)", background: "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: 2 }}>
                      <Typography variant="label-md" weight="semibold" color="strong">{s.name}</Typography>
                      {s.badge && <Badge color={s.badgeColor ?? "blue"} size="sm">{s.badge}</Badge>}
                    </div>
                    <Typography variant="body-sm" color="muted">{s.desc}</Typography>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
