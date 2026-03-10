import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Separator } from "@acko/separator";
import { Button } from "@acko/button";
import { Badge } from "@acko/badge";

const MENU_ITEMS = [
  { icon: "📋", label: "My policies", count: 2 },
  { icon: "🔔", label: "Notifications", count: 3 },
  { icon: "📁", label: "Documents" },
  { icon: "💬", label: "Support" },
  { icon: "🎁", label: "Refer & Earn" },
  { icon: "🔒", label: "Privacy & security" },
  { icon: "⚙️", label: "Settings" },
];

export default function Prompt070() {
  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      {/* Header */}
      <div style={{ background: "var(--grey-white)", padding: "var(--space-3) var(--space-4) var(--space-4)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <Typography variant="heading-sm" weight="bold" color="strong">Account</Typography>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: 80 }}>
        {/* Profile */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
              <div style={{ width: "var(--scale-56)", height: "var(--scale-56)", borderRadius: "var(--radius-full)", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Typography variant="heading-sm" weight="bold" style={{ color: "var(--color-on-primary)" }}>A</Typography>
              </div>
              <div style={{ flex: 1 }}>
                <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>Arjun Mehta</Typography>
                <Typography variant="body-sm" color="muted" style={{ display: "block" }}>arjun@example.com</Typography>
                <Typography variant="caption" color="muted">+91 98765 43210</Typography>
              </div>
              <button style={{ background: "none", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-lg)", padding: "var(--space-2) var(--space-3)", cursor: "pointer", touchAction: "manipulation" }}>
                <Typography variant="caption" color="default">Edit</Typography>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* KYC badge */}
        <Card variant="default" padding="md" style={{ background: "var(--color-success-subtle)", border: "1px solid var(--color-success-border)" }}>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                <span aria-hidden="true">✅</span>
                <div>
                  <Typography variant="label-md" weight="semibold" color="success" style={{ display: "block" }}>KYC verified</Typography>
                  <Typography variant="caption" color="muted">PAN & Aadhaar linked</Typography>
                </div>
              </div>
              <Badge color="green" size="sm">Verified</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Menu */}
        <Card variant="default" padding="none">
          {MENU_ITEMS.map((item, i) => (
            <div key={item.label}>
              {i > 0 && <Separator />}
              <button style={{ display: "flex", alignItems: "center", width: "100%", padding: "var(--space-4)", background: "none", border: "none", cursor: "pointer", textAlign: "left", touchAction: "manipulation", minHeight: "var(--scale-56)" }}>
                <span style={{ marginRight: "var(--space-3)", width: 24, textAlign: "center" }} aria-hidden="true">{item.icon}</span>
                <Typography variant="label-md" weight="semibold" color="default" style={{ flex: 1 }}>{item.label}</Typography>
                {item.count && <Badge color="blue" size="sm">{item.count}</Badge>}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "var(--color-text-muted)", marginLeft: "var(--space-2)" }} aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </div>
          ))}
        </Card>

        {/* Logout */}
        <Button type="button" variant="ghost" size="md" style={{ width: "100%", touchAction: "manipulation" }}>
          <Typography variant="label-md" color="error">Log out</Typography>
        </Button>

        <Typography variant="caption" color="muted" align="center">
          ACKO General Insurance Ltd. · v2.1.4 · IRDAI Reg No. 157
        </Typography>
      </div>
    </div>
  );
}
