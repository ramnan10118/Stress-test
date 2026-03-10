import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";

const NOTIFICATIONS = [
  { id: "1", type: "warning", icon: "⚠️", title: "Policy expiring soon", body: "Your car insurance expires in 7 days. Renew now to stay covered.", time: "2h ago", unread: true },
  { id: "2", type: "success", icon: "✅", title: "Claim settled", body: "Claim #CL-2026-001 has been settled. ₹28,450 transferred to your account.", time: "Yesterday", unread: true },
  { id: "3", type: "info", icon: "📋", title: "Policy document ready", body: "Your updated policy document is ready. Tap to download.", time: "3 days ago", unread: false },
  { id: "4", type: "info", icon: "🔔", title: "Auto-renewal scheduled", body: "Your health insurance will auto-renew on 15 Jun 2026. Premium: ₹2,697.", time: "1 week ago", unread: false },
  { id: "5", type: "promo", icon: "🎁", title: "Refer & earn ₹500", body: "Refer a friend to ACKO. They save on first policy, you earn ₹500.", time: "2 weeks ago", unread: false },
];

const TYPE_COLOR: Record<string, "orange" | "green" | "blue"> = {
  warning: "orange",
  success: "green",
  info: "blue",
  promo: "blue",
};

export default function Prompt069() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () => setNotifications((ns) => ns.map((n) => ({ ...n, unread: false })));
  const dismiss = (id: string) => setNotifications((ns) => ns.filter((n) => n.id !== id));

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) var(--space-4)", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <Typography variant="heading-sm" weight="bold" color="strong">Notifications</Typography>
            {unreadCount > 0 && <Badge color="blue" size="sm">{unreadCount} new</Badge>}
          </div>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead} style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", touchAction: "manipulation" }}>
            <Typography variant="body-sm" color="primary">Mark all read</Typography>
          </button>
        )}
      </div>

      <div style={{ padding: "var(--space-3) var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)", paddingBottom: 80 }}>
        {notifications.length === 0 ? (
          <div style={{ textAlign: "center", padding: "var(--space-16) 0" }}>
            <div style={{ marginBottom: "var(--space-3)" }} aria-hidden="true">🔕</div>
            <Typography variant="body-md" color="muted">All caught up!</Typography>
          </div>
        ) : (
          notifications.map((n) => (
            <Card key={n.id} variant="default" padding="md" style={{ background: n.unread ? "var(--color-primary-subtle)" : "var(--grey-white)", position: "relative" }}>
              <CardContent>
                <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0 }} aria-hidden="true">{n.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-1)" }}>
                      <Typography variant="label-md" weight="semibold" color="strong">{n.title}</Typography>
                      {n.unread && <div style={{ width: 8, height: 8, borderRadius: "var(--radius-full)", background: "var(--color-primary)", flexShrink: 0, marginTop: 4 }} />}
                    </div>
                    <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-2)" }}>{n.body}</Typography>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="caption" color="muted">{n.time}</Typography>
                      <button onClick={() => dismiss(n.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", padding: "var(--space-1)", touchAction: "manipulation" }} aria-label={`Dismiss notification: ${n.title}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
