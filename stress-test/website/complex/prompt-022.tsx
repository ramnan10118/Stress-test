import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Accordion } from "@acko/accordion";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@acko/table";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-disabled)" }}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const COMPARISON_ROWS = [
  { feature: "Cashless hospitalisation", basic: true, family: true, senior: true },
  { feature: "Day care procedures", basic: true, family: true, senior: true },
  { feature: "Pre & post hospitalisation", basic: true, family: true, senior: true },
  { feature: "Maternity cover", basic: false, family: true, senior: false },
  { feature: "New-born cover", basic: false, family: true, senior: false },
  { feature: "Pre-existing diseases", basic: false, family: false, senior: true },
  { feature: "Critical illness add-on", basic: false, family: true, senior: true },
  { feature: "Annual health check-up", basic: true, family: true, senior: true },
];

const FAQ_ITEMS = [
  { value: "q1", trigger: "What is the waiting period for pre-existing conditions?", content: "Typically 2–4 years, depending on the plan. The senior plan covers pre-existing conditions after a 1-year waiting period." },
  { value: "q2", trigger: "Can I add family members mid-year?", content: "Yes, you can add a spouse or newborn at any time. Premium is calculated pro-rata for the remaining policy period." },
  { value: "q3", trigger: "Is there a co-payment clause?", content: "No co-payment is required for the Individual and Family plans. Senior plans may have a co-payment clause for hospitalisation above the policy limit." },
];

export default function Prompt022() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-64)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>Get a quote</Button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-5)" }}>
          <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: 0, textWrap: "balance" }}>
            Health insurance your whole family can rely on
          </Typography>
          <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
            Cashless hospitalisation at 10,000+ hospitals. Plans for individuals, families, and seniors.
          </Typography>
          <Button type="button" variant="primary" size="lg" style={{ touchAction: "manipulation" }}>Get a free quote</Button>
        </div>
      </section>

      <Separator />

      {/* Plan comparison table */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>Compare plans</Typography>
          <Card variant="outline" padding="none" style={{ overflow: "hidden" }}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Individual<br /><Typography variant="caption" color="muted">₹399/mo</Typography></TableHead>
                  <TableHead>
                    <div>Family <Badge color="green" size="sm">Popular</Badge></div>
                    <Typography variant="caption" color="muted">₹799/mo</Typography>
                  </TableHead>
                  <TableHead>Senior<br /><Typography variant="caption" color="muted">₹1,199/mo</Typography></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON_ROWS.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell><Typography variant="body-sm" color="default">{row.feature}</Typography></TableCell>
                    <TableCell>{row.basic ? <CheckIcon /> : <CrossIcon />}</TableCell>
                    <TableCell>{row.family ? <CheckIcon /> : <CrossIcon />}</TableCell>
                    <TableCell>{row.senior ? <CheckIcon /> : <CrossIcon />}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Coverage details */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>Coverage highlights</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="details-grid">
            {[
              { icon: "🏥", title: "Cashless hospitalisation", body: "10,000+ network hospitals across India. No bill at checkout — we pay directly." },
              { icon: "💊", title: "Day care & OPD", body: "Procedures that don't require 24-hour admission — cataracts, dialysis, chemotherapy — all covered." },
              { icon: "👶", title: "Maternity & new-born", body: "Family plan covers maternity (after 9 months waiting) and new-born from day one of birth." },
            ].map((item) => (
              <Card key={item.title} variant="default" padding="md">
                <CardContent>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "var(--scale-32)", flexShrink: 0 }} aria-hidden="true">{item.icon}</div>
                    <div>
                      <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>{item.title}</Typography>
                      <Typography variant="body-md" color="muted" style={{ textWrap: "pretty" }}>{item.body}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>Common questions</Typography>
          <Accordion type="single" items={FAQ_ITEMS} collapsible defaultValue="q1" />
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer style={{ background: "var(--grey-700)", padding: "var(--space-8) var(--space-4)", textAlign: "center" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20Primary%20Dark%20BG.svg" alt="ACKO" height={40} style={{ height: "var(--scale-40)", width: "auto", marginBottom: "var(--space-3)" }} />
        <Typography variant="caption" color="muted" style={{ display: "block" }}>IRDAI Licence No. 157 · © 2026 Acko General Insurance Ltd. All rights reserved.</Typography>
      </footer>

      <style>{`
        @media (min-width: 680px) {
          .details-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
