import { useState } from "react";
import { ChevronLeft, Check, X, ChevronDown, ChevronUp, TrendingUp } from "lucide-react";
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
  popular: boolean;
  inclusions: string[];
}

const PLANS: Plan[] = [
  { id: "tp", name: "Third Party", premium: 2094, recommended: false, popular: false, inclusions: ["Third party liability", "Personal accident cover", "Legal liability", "No own damage cover"] },
  { id: "comp", name: "Comprehensive", premium: 5782, recommended: true, popular: true, inclusions: ["Own damage + third party", "Personal accident cover", "Cashless repairs at 3,000+ garages", "24×7 roadside assistance"] },
  { id: "total", name: "ACKO Total Protect", premium: 7499, recommended: false, popular: false, inclusions: ["Everything in Comprehensive", "Zero depreciation cover", "Engine protection", "Return to invoice"] },
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

const VISIBLE_COUNT = 2;

// Iteration 6: +Business — nudge banner + "Most Popular" badge on Comprehensive
export default function Prompt211() {
  const [view, setView] = useState("card");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

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
        <Typography variant="heading-xl" weight="bold" color="strong" as="h1">Choose your plan</Typography>

        {/* ADDED: Nudge banner */}
        <div style={{
          background: "var(--color-surface-accent)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-3) var(--space-4)",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
        }}>
          <TrendingUp size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} aria-hidden="true" />
          <Typography variant="body-sm" weight="medium" color="strong">
            76% of Hyundai i20 owners choose Comprehensive
          </Typography>
        </div>

        <Tabs items={VIEW_TABS} value={view} onChange={setView} variant="pill" size="sm" />

        {view === "card" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {PLANS.map((plan) => {
              const isExpanded = expanded[plan.id] ?? false;
              const visibleItems = isExpanded ? plan.inclusions : plan.inclusions.slice(0, VISIBLE_COUNT);
              const hasMore = plan.inclusions.length > VISIBLE_COUNT;

              return (
                <Card key={plan.id} variant="default" padding="md" style={plan.recommended ? { borderColor: "var(--color-primary)", borderWidth: 2 } : undefined}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-3)", flexWrap: "wrap" }}>
                    {plan.recommended && <Badge color="blue" size="sm">Recommended</Badge>}
                    {/* ADDED: Most Popular badge */}
                    {plan.popular && <Badge color="green" size="sm">Most Popular</Badge>}
                  </div>

                  <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>{plan.name}</Typography>
                  <Typography variant="caption" color="muted" style={{ display: "block" }}>Starting from</Typography>
                  <Typography variant="display-lg" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-4)", fontVariantNumeric: "tabular-nums" }}>
                    ₹{plan.premium.toLocaleString("en-IN")}<Typography variant="body-md" color="muted">/year</Typography>
                  </Typography>

                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-2)" }}>
                    {visibleItems.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                        <Check size={14} strokeWidth={2.5} aria-hidden="true" style={{ color: "var(--color-success)", flexShrink: 0 }} />
                        <Typography variant="body-sm" color="default">{item}</Typography>
                      </div>
                    ))}
                  </div>

                  {hasMore && (
                    <button type="button" onClick={() => toggle(plan.id)} aria-expanded={isExpanded} style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-1) 0", display: "flex", alignItems: "center", gap: "var(--space-1)", color: "var(--color-primary)", touchAction: "manipulation" }}>
                      <Typography variant="label-sm" weight="semibold" color="primary">{isExpanded ? "Show less" : `See all ${plan.inclusions.length} benefits`}</Typography>
                      {isExpanded ? <ChevronUp size={14} aria-hidden="true" /> : <ChevronDown size={14} aria-hidden="true" />}
                    </button>
                  )}

                  <div style={{ marginTop: "var(--space-3)" }}>
                    <Button type="button" variant={plan.recommended ? "primary" : "outline"} size="lg" fullWidth>Select plan</Button>
                  </div>
                  <Typography variant="caption" color="muted" style={{ display: "block", marginTop: "var(--space-3)" }}>Premium inclusive of GST. Subject to underwriting.</Typography>
                </Card>
              );
            })}
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead><Typography variant="label-md" weight="semibold" color="muted">Feature</Typography></TableHead>
                  {PLANS.map((p) => (
                    <TableHead key={p.id} style={{ textAlign: "center" }}>
                      {p.popular && <div style={{ marginBottom: "var(--space-1)" }}><Badge color="green" size="sm">Popular</Badge></div>}
                      <Typography variant="label-md" weight="semibold" color="strong">{p.name}</Typography>
                      <Typography variant="caption" color="muted" style={{ display: "block" }}>Starting from</Typography>
                      <Typography variant="body-sm" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>₹{p.premium.toLocaleString("en-IN")}</Typography>
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
                        {included ? <Check size={16} strokeWidth={2.5} style={{ color: "var(--color-success)" }} aria-hidden="true" /> : <X size={16} strokeWidth={2} style={{ color: "var(--color-text-muted)" }} aria-hidden="true" />}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              {PLANS.map((p) => (
                <Button key={p.id} type="button" variant={p.recommended ? "primary" : "outline"} size="md" fullWidth>Select {p.name.split(" ")[0]}</Button>
              ))}
            </div>
            <Typography variant="caption" color="muted" align="center" style={{ display: "block", marginTop: "var(--space-3)" }}>Premium inclusive of GST. Subject to underwriting.</Typography>
          </div>
        )}
      </main>
    </div>
  );
}
