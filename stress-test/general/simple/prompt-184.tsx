import { ChevronLeft, User, Phone, Mail } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Button } from "@acko/button";

const NOMINEES = [
  {
    name: "Priya Sharma",
    relation: "Spouse",
    share: "60%",
    phone: "+91 98765 43210",
    email: "priya.sharma@email.com",
  },
  {
    name: "Arjun Sharma",
    relation: "Son",
    share: "40%",
    phone: "+91 98765 43211",
    email: "arjun.sharma@email.com",
  },
];

export default function Prompt184() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "var(--grey-white)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
      }}>
        <div style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "0 var(--space-4)",
          height: "var(--scale-56)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <button
            type="button"
            aria-label="Go back"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-2)",
              minWidth: "var(--scale-44)",
              minHeight: "var(--scale-44)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              touchAction: "manipulation",
              color: "var(--color-text-strong)",
            }}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Nominee details</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{
        flex: 1,
        padding: "var(--space-5)",
        paddingBottom: "var(--space-20)",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}>
        <div>
          <Typography variant="heading-lg" weight="semibold" color="strong" as="h1" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            Your nominees
          </Typography>
          <Typography variant="body-sm" color="muted">
            These people will receive the policy benefits in case of a claim.
          </Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {NOMINEES.map((nominee) => (
            <Card key={nominee.name} variant="default" padding="md">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <div style={{
                  width: "var(--scale-40)",
                  height: "var(--scale-40)",
                  borderRadius: "var(--radius-full)",
                  background: "var(--color-primary-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--color-primary)",
                }}>
                  <User size={20} aria-hidden="true" />
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>
                    {nominee.name}
                  </Typography>
                  <Typography variant="caption" color="muted">{nominee.relation}</Typography>
                </div>
                <Badge color="blue" size="sm">{nominee.share}</Badge>
              </div>

              <Separator />

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <Phone size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                  <Typography variant="body-sm" color="default">{nominee.phone}</Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <Mail size={14} aria-hidden="true" style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                  <Typography variant="body-sm" color="default">{nominee.email}</Typography>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Button type="button" variant="outline" size="md" fullWidth>
          Edit nominees
        </Button>
      </main>
    </div>
  );
}
