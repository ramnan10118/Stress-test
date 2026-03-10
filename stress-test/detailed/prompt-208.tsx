import { useState } from "react";
import { ChevronLeft, Check, X } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Progress } from "@acko/progress";
import { Tabs } from "@acko/tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@acko/table";

interface Plan {
  id: string;
  name: string;
  premium: number;
  recommended: boolean;
  inclusions: string[];
}

const PLANS: Plan[] = [
  { id: "tp", name: "Third Party", premium: 2094, recommended: false, inclusions: ["Third party liability", "Personal accident cover", "Legal liability", "No own damage cover"] },
  { id: "comp", name: "Comprehensive", premium: 5782, recommended: true, inclusions: ["Own damage + third party", "Personal accident cover", "Cashless repairs at 3,000+ garages", "24×7 roadside assistance"] },
  { id: "total", name: "ACKO Total Protect", premium: 7499, recommended: false, inclusions: ["Everything in Comprehensive", "Zero depreciation cover", "Engine protection", "Return to invoice"] },
];

const FEATURES = [
  { name: "Third party liability", tp: true, comp: true, total: true },
  { name: "Personal accident cover", tp: true, comp: true, total: true },
  { name: "Own damage cover", tp: false, comp: true, total: true },
  { name: "Cashless repairs", tp: false, comp: true, total: true },
  { name: "Roadside assistance", tp: false, comp: true, total: true },
  { name: "Zero depreciation", tp: false, comp: false, total: true },
  { name: "Engine protection", tp: false, comp: false, total: true },
  { name: "Return to invoice", tp: false, comp: false, total: true },
];

const VIEW_TABS = [
  { value: "card", label: "Card view" },
  { value: "compare", label: "Compare view" },
];

// Iteration 3: +Design lead — Card/Compare toggle with table view
export default function Prompt208() {
  const [view, setView] = useState("card");

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button type="button" aria-label="Go back" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Step 2 of 4</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5)", paddingBottom: "var(--space-20)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <Progress value={50} max={100} />

        <Typography variant="heading-xl" weight="bold" color="strong" as="h1">
          Choose your plan
        </Typography>

        {/* ADDED: View toggle */}
        <Tabs items={VIEW_TABS} value={view} onChange={setView} variant="pill" size="sm" />

        {view === "card" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {PLANS.map((plan) => (
              <Card key={plan.id} variant="default" padding="md" style={plan.recommended ? { borderColor: "var(--color-primary)", borderWidth: 2 } : undefined}>
                {plan.recommended && (
                  <div style={{ marginBottom: "var(--space-3)" }}><Badge color="blue" size="sm">Recommended</Badge></div>
                )}
                <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>{plan.name}</Typography>
                <Typography variant="display-lg" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)", fontVariantNumeric: "tabular-nums" }}>
                  ₹{plan.premium.toLocaleString("en-IN")}<Typography variant="body-md" color="muted">/year</Typography>
                </Typography>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                  {plan.inclusions.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                      <Check size={14} strokeWidth={2.5} aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }} />
                      <Typography variant="body-sm" color="default">{item}</Typography>
                    </div>
                  ))}
                </div>
                <Button type="button" variant={plan.recommended ? "primary" : "outline"} size="lg" fullWidth>Select plan</Button>
              </Card>
            ))}
          </div>
        ) : (
          /* ADDED: Compare table view */
          <div style={{ overflowX: "auto" }}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead><Typography variant="label-md" weight="semibold" color="muted">Feature</Typography></TableHead>
                  {PLANS.map((p) => (
                    <TableHead key={p.id} style={{ textAlign: "center" }}>
                      <Typography variant="label-md" weight="semibold" color="strong">{p.name}</Typography>
                      <div style={{ marginTop: "var(--space-1)" }}>
                        <Typography variant="body-sm" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>₹{p.premium.toLocaleString("en-IN")}</Typography>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {FEATURES.map((feat) => (
                  <TableRow key={feat.name}>
                    <TableCell><Typography variant="body-sm" color="default">{feat.name}</Typography></TableCell>
                    {[feat.tp, feat.comp, feat.total].map((included, i) => (
                      <TableCell key={i} style={{ textAlign: "center" }}>
                        {included
                          ? <Check size={16} strokeWidth={2.5} aria-hidden="true" style={{ color: "var(--color-success)" }} />
                          : <X size={16} strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-muted)" }} />
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              {PLANS.map((p) => (
                <Button key={p.id} type="button" variant={p.recommended ? "primary" : "outline"} size="md" fullWidth>
                  Select {p.name.split(" ")[0]}
                </Button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
