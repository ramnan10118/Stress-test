import { FileText, RefreshCw, Download, Headphones, Car, Heart, ChevronRight } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";

const POLICIES = [
  {
    id: "car",
    icon: Car,
    type: "Car insurance",
    detail: "Maruti Swift ZXI+ · MH 01 AB 1234",
    expiry: "2 Mar 2027",
    expiringSoon: false,
  },
  {
    id: "health",
    icon: Heart,
    type: "Health insurance",
    detail: "Family floater · 4 members",
    expiry: "15 Apr 2026",
    expiringSoon: true,
  },
];

const QUICK_ACTIONS = [
  { icon: FileText, label: "File claim" },
  { icon: RefreshCw, label: "Renew" },
  { icon: Download, label: "Download" },
  { icon: Headphones, label: "Support" },
];

export default function Prompt195() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "var(--grey-white)",
        borderBottom: "1px solid var(--color-border-subtle)",
        padding: "0 var(--space-4)",
        height: "var(--scale-56)",
        display: "flex",
        alignItems: "center",
      }}>
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
          alt="ACKO"
          style={{ height: "var(--scale-24)", width: "auto" }}
        />
      </header>

      <main style={{
        flex: 1,
        padding: "var(--space-6) var(--space-5)",
        paddingBottom: "var(--space-20)",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}>
        {/* Greeting */}
        <div>
          <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
            Hi Ramnan
          </Typography>
          <Typography variant="body-sm" color="muted">Your active policies</Typography>
        </div>

        {/* Policy cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {POLICIES.map((policy) => {
            const Icon = policy.icon;
            return (
              <Card key={policy.id} variant="default" padding="md">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}>
                  <div style={{
                    width: "var(--scale-40)",
                    height: "var(--scale-40)",
                    borderRadius: "var(--radius-xl)",
                    background: "var(--color-primary-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--color-primary)",
                  }}>
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                      {policy.type}
                    </Typography>
                    <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                      {policy.detail}
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-3)" }}>
                      <Typography variant="caption" color="muted" style={{ fontVariantNumeric: "tabular-nums" }}>
                        Expires {policy.expiry}
                      </Typography>
                      {policy.expiringSoon && <Badge color="orange" size="sm">Expiring soon</Badge>}
                    </div>
                    <Button type="button" variant="ghost" size="sm">
                      View details
                      <ChevronRight size={14} aria-hidden="true" style={{ marginLeft: "var(--space-1)" }} />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick actions */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>
            Quick actions
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-3)" }}>
            {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "var(--space-4) var(--space-2)",
                  background: "var(--grey-white)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "var(--radius-xl)",
                  cursor: "pointer",
                  touchAction: "manipulation",
                }}
                aria-label={label}
              >
                <div style={{
                  width: "var(--scale-36)",
                  height: "var(--scale-36)",
                  borderRadius: "var(--radius-full)",
                  background: "var(--color-primary-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                }}>
                  <Icon size={18} aria-hidden="true" />
                </div>
                <Typography variant="caption" weight="medium" color="default">{label}</Typography>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
