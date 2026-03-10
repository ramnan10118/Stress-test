import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Tabs } from "@acko/tabs";
import { Separator } from "@acko/separator";

const SERVICES_MAP: Record<string, { id: string; icon: string; title: string; desc: string; badge?: string; badgeColor?: "green" | "blue" | "orange"; cta: string }[]> = {
  included: [
    { id: "rsa", icon: "🚐", title: "Roadside Assistance", desc: "24×7 tow, battery, fuel, tyre, key unlock — pan-India", cta: "Request now", badge: "Included", badgeColor: "green" },
    { id: "cashless", icon: "🏥", title: "Cashless Garages", desc: "5,000+ network garages. Just show your policy number.", cta: "Find garage" },
    { id: "claims", icon: "⚡", title: "30-min claim approval", desc: "Upload photos in the app. Most claims approved in 30 minutes.", cta: "File claim" },
    { id: "pa", icon: "👤", title: "Personal accident cover", desc: "₹15 lakh owner-driver cover included in your plan.", cta: "View details" },
  ],
  explore: [
    { id: "challan", icon: "🚦", title: "Challan check & pay", desc: "Check and pay pending traffic fines instantly.", cta: "Check challans" },
    { id: "health", icon: "💊", title: "Free health check-up", desc: "Annual full-body check-up at partner labs, home collection.", cta: "Book now", badge: "Free", badgeColor: "green" },
    { id: "parking", icon: "🅿️", title: "Smart parking", desc: "Find and book parking spots near your destination.", cta: "Find parking", badge: "New", badgeColor: "orange" },
    { id: "ev", icon: "⚡", title: "EV charging locator", desc: "Navigate to nearest charging stations for electric vehicles.", cta: "Find stations", badge: "New", badgeColor: "blue" },
    { id: "service", icon: "🔧", title: "Car service reminder", desc: "Get reminders for periodic car service and EMI payments.", cta: "Set reminder" },
  ],
};

export default function Prompt087() {
  const [tab, setTab] = useState("included");
  const [active, setActive] = useState<string | null>(null);

  const services = SERVICES_MAP[tab] ?? [];

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      <div style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="heading-sm" weight="bold" color="strong">Value added services</Typography>
        </div>
        <div style={{ padding: "0 var(--space-4)" }}>
          <Tabs value={tab} onChange={setTab} items={[{ value: "included", label: "Included with policy" }, { value: "explore", label: "Explore more" }]} />
        </div>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingBottom: 80 }}>
        {services.map((s) => {
          const isExpanded = active === s.id;
          return (
            <Card key={s.id} variant="default" padding="md" style={{ outline: isExpanded ? "2px solid var(--color-primary)" : "none", outlineOffset: 1 }}>
              <CardContent>
                <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                  <div style={{ width: "var(--scale-44)", height: "var(--scale-44)", borderRadius: "var(--radius-xl)", background: isExpanded ? "var(--color-primary-subtle)" : "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-hidden="true">{s.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-1)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flexWrap: "wrap" }}>
                        <Typography variant="label-md" weight="semibold" color="strong">{s.title}</Typography>
                        {s.badge && <Badge color={s.badgeColor ?? "blue"} size="sm">{s.badge}</Badge>}
                      </div>
                      <button
                        onClick={() => setActive(isExpanded ? null : s.id)}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-1)", touchAction: "manipulation" }}
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "var(--color-text-muted)", transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform var(--duration-fast) ease" }} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                      </button>
                    </div>
                    <Typography variant="body-sm" color="muted" style={{ display: "block" }}>{s.desc}</Typography>
                    {isExpanded && (
                      <div style={{ marginTop: "var(--space-3)" }}>
                        <Separator />
                        <div style={{ paddingTop: "var(--space-3)" }}>
                          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>{s.cta}</Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
