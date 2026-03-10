import { useState } from "react";
import { ChevronLeft, ShieldCheck, Wrench, Droplets, Package } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Switch } from "@acko/switch";

const ADD_ONS = [
  { id: "zero-dep", Icon: ShieldCheck, name: "Zero Depreciation", description: "Get the full claim amount without any depreciation deduction.", price: 699 },
  { id: "rsa", Icon: Wrench, name: "Roadside Assistance", description: "24x7 help for breakdowns, flat tyres, and towing.", price: 299 },
  { id: "engine", Icon: Droplets, name: "Engine Protection", description: "Covers engine damage caused by water ingression or leakage.", price: 499 },
  { id: "consumables", Icon: Package, name: "Consumables Cover", description: "Covers nuts, bolts, and engine oil used during repairs.", price: 199 },
];

export default function Prompt034() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addOnTotal = ADD_ONS.filter((a) => selected.has(a.id)).reduce((sum, a) => sum + a.price, 0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button aria-label="Go back" style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation", color: "var(--color-text-strong)" }}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Add-ons</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: "var(--scale-1)", background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "80%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      {/* Content — composition.md: header → --space-8 → title → --space-2 → subtitle → --space-8 → content */}
      <main style={{ flex: 1, padding: "var(--space-6) var(--space-4)", paddingBottom: "calc(160px + env(safe-area-inset-bottom))", maxWidth: 480, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "var(--space-6)" }}>
          <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            Enhance your cover
          </Typography>
          <Typography variant="body-sm" color="muted">
            Optional add-ons to strengthen your policy. Skip if you don't need them.
          </Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {ADD_ONS.map(({ id, Icon, name, description, price }) => {
            const isSelected = selected.has(id);
            return (
              <Card
                key={id}
                variant={isSelected ? "elevated" : "default"}
                padding="none"
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => toggle(id)}
                onKeyDown={(e) => (e.key === " " || e.key === "Enter") && toggle(id)}
                style={{ cursor: "pointer", outline: isSelected ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, touchAction: "manipulation", transition: "box-shadow var(--duration-fast) var(--ease-out-cubic), outline-color var(--duration-fast) var(--ease-out-cubic)" }}
              >
                <CardContent>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)" }}>
                    <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-lg)", background: isSelected ? "var(--color-primary-subtle)" : "var(--color-surface-secondary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: isSelected ? "var(--color-primary)" : "var(--color-text-muted)", transition: "background var(--duration-fast) var(--ease-out-cubic), color var(--duration-fast) var(--ease-out-cubic)" }}>
                      <Icon size={20} aria-hidden="true" />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                        {name}
                      </Typography>
                      <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                        {description}
                      </Typography>
                      <Typography variant="label-lg" weight="semibold" color={isSelected ? "primary" : "default"} style={{ fontVariantNumeric: "tabular-nums" }}>
                        +₹{price}/yr
                      </Typography>
                    </div>

                    <div onClick={(e) => e.stopPropagation()} style={{ flexShrink: 0, paddingTop: "var(--space-1)" }}>
                      <Switch checked={isSelected} onChange={() => toggle(id)} aria-label={`Add ${name}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Sticky bottom CTA — safe area padding per ui-polish.md */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))", zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          {selected.size > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
              <Typography variant="body-sm" color="muted">
                {selected.size} add-on{selected.size > 1 ? "s" : ""} selected
              </Typography>
              <Typography variant="label-lg" weight="semibold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
                +₹{addOnTotal.toLocaleString("en-IN")}/yr
              </Typography>
            </div>
          )}
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            {selected.size > 0 ? "Continue with add-ons" : "Skip for now"}
          </Button>
        </div>
      </div>
    </div>
  );
}
