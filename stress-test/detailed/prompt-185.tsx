import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Switch } from "@acko/switch";
import { Button } from "@acko/button";

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
}

const ADD_ONS: AddOn[] = [
  { id: "zdep", name: "Zero depreciation", description: "Get full value of replaced parts without depreciation deduction.", price: 1240 },
  { id: "rsa", name: "Roadside assistance", description: "24×7 towing, flat tyre, battery jumpstart, and fuel delivery.", price: 499 },
  { id: "engine", name: "Engine protection", description: "Covers engine damage from waterlogging, oil leakage, and hydrostatic lock.", price: 899 },
  { id: "consumable", name: "Consumables cover", description: "Nut, bolt, screw, oil, grease, and other consumables covered during claim.", price: 349 },
  { id: "rti", name: "Return to invoice", description: "Get the full invoice value of your car in case of total loss or theft.", price: 749 },
];

export default function Prompt185() {
  const [selected, setSelected] = useState<Record<string, boolean>>({ zdep: true, rsa: true });

  const basePremium = 5782;
  const addOnTotal = ADD_ONS.filter((a) => selected[a.id]).reduce((sum, a) => sum + a.price, 0);
  const totalPremium = basePremium + addOnTotal;

  const toggle = (id: string) => setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

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
          <Typography variant="label-lg" weight="semibold" color="strong">Step 3 of 4</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
      </header>

      <main style={{
        flex: 1,
        padding: "var(--space-6) var(--space-5)",
        paddingBottom: "calc(var(--scale-100) + var(--space-6) + env(safe-area-inset-bottom))",
        maxWidth: 480,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}>
        <div>
          <Typography variant="heading-xl" weight="bold" color="strong" as="h1" style={{ display: "block", marginBottom: "var(--space-2)" }}>
            Customise your plan
          </Typography>
          <Typography variant="body-sm" color="muted">
            Add covers that matter to you.
          </Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {ADD_ONS.map((addon) => (
            <Card key={addon.id} variant="default" padding="md">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                    {addon.name}
                  </Typography>
                  <Typography variant="body-sm" color="muted" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                    {addon.description}
                  </Typography>
                  <Typography variant="body-md" weight="medium" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>
                    +₹{addon.price.toLocaleString("en-IN")}/yr
                  </Typography>
                </div>
                <div style={{ flexShrink: 0, paddingTop: "var(--space-1)" }}>
                  <Switch
                    checked={!!selected[addon.id]}
                    onChange={() => toggle(addon.id)}
                    size="md"
                    aria-label={`Toggle ${addon.name}`}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Sticky footer */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "var(--grey-white)",
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "var(--space-4)",
        paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))",
        zIndex: "var(--z-sticky)",
      }}>
        <div style={{ maxWidth: 480, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body-sm" color="muted">Total premium</Typography>
            <Typography variant="heading-md" weight="bold" color="strong" style={{ fontVariantNumeric: "tabular-nums" }}>
              ₹{totalPremium.toLocaleString("en-IN")}/yr
            </Typography>
          </div>
          <Button type="button" variant="primary" size="lg" fullWidth>
            Proceed to KYC
          </Button>
        </div>
      </div>
    </div>
  );
}
