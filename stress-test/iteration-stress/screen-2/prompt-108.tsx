// Iteration 8: Home dashboard + notification badge on bell + notification panel
import { useState } from "react";
import { Bell, Car, ChevronRight, FileText, Phone, Home, User, X, CheckCircle, AlertCircle } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Policies", active: false },
  { icon: Phone, label: "Claims", active: false },
  { icon: User, label: "Account", active: false },
];

const NOTIFICATIONS = [
  { id: "1", icon: AlertCircle, color: "var(--color-warning)", title: "Policy expiring soon", body: "Your car insurance expires in 14 days.", time: "2h ago", unread: true },
  { id: "2", icon: CheckCircle, color: "var(--color-success)", title: "Claim update", body: "Your claim #ACK-09812 is under review.", time: "Yesterday", unread: true },
  { id: "3", icon: CheckCircle, color: "var(--color-primary)", title: "Payment confirmed", body: "₹6,704 paid for car insurance renewal.", time: "3 days ago", unread: false },
];

export default function Prompt108() {
  const [panelOpen, setPanelOpen] = useState(false);
  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
          alt="ACKO"
          style={{ height: "var(--scale-24)", width: "auto" }}
        />
        <button
          onClick={() => setPanelOpen(true)}
          aria-label={`Notifications, ${unreadCount} unread`}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)", position: "relative" }}
        >
          <Bell size={20} aria-hidden="true" />
          {unreadCount > 0 && (
            <span style={{ position: "absolute", top: "var(--space-1)", right: "var(--space-1)", width: "var(--scale-16)", height: "var(--scale-16)", borderRadius: "var(--radius-full)", background: "var(--color-error)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="caption" style={{ color: "var(--grey-white)", fontSize: 9 }}>{unreadCount}</Typography>
            </span>
          )}
        </button>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4)", paddingBottom: "calc(var(--scale-64) + var(--space-5))", display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 480, margin: "0 auto", width: "100%" }}>
        <div>
          <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
            Good morning, Rohan
          </Typography>
          <Typography variant="body-sm" color="muted">You have {unreadCount} unread notifications.</Typography>
        </div>

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
      </main>

      {/* Notification panel overlay */}
      {panelOpen && (
        <>
          <div
            onClick={() => setPanelOpen(false)}
            aria-hidden="true"
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: "var(--z-modal)" }}
          />
          <div
            role="dialog"
            aria-label="Notifications"
            style={{ position: "fixed", top: 0, right: 0, width: "min(360px, 100vw)", height: "100vh", background: "var(--grey-white)", zIndex: "var(--z-modal)", display: "flex", flexDirection: "column", boxShadow: "var(--shadow-xl)" }}
          >
            <div style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--color-border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography variant="heading-sm" weight="semibold" color="strong">Notifications</Typography>
              <button onClick={() => setPanelOpen(false)} aria-label="Close notifications" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-3)" }}>
              {NOTIFICATIONS.map(({ id, icon: Icon, color, title, body, time, unread }) => (
                <div key={id} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)", padding: "var(--space-3)", borderRadius: "var(--radius-2xl)", background: unread ? "var(--color-surface)" : "transparent", marginBottom: "var(--space-1)" }}>
                  <div style={{ color, flexShrink: 0, paddingTop: "var(--space-1)" }}>
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>{title}</Typography>
                    <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-1)" }}>{body}</Typography>
                    <Typography variant="caption" color="muted">{time}</Typography>
                  </div>
                  {unread && <div style={{ width: "var(--scale-8)", height: "var(--scale-8)", borderRadius: "var(--radius-full)", background: "var(--color-primary)", flexShrink: 0, marginTop: "var(--space-2)" }} />}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

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
