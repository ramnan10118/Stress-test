import { useState } from "react";
import { ChevronLeft, Shield, Check } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";

type FilterType = "all" | "comprehensive" | "third_party";

const QUOTES = [
  {
    id: "acko",
    name: "ACKO Comprehensive+",
    type: "comprehensive" as const,
    premium: 5782,
    recommended: true,
    highlights: ["Zero depreciation", "Cashless repairs", "24×7 RSA"],
  },
  {
    id: "basic",
    name: "ACKO Third Party",
    type: "third_party" as const,
    premium: 2094,
    recommended: false,
    highlights: ["Third party cover", "Personal accident", "Legal liability"],
  },
  {
    id: "total",
    name: "ACKO Total Protect",
    type: "comprehensive" as const,
    premium: 7499,
    recommended: false,
    highlights: ["Engine protect", "Consumables", "Return to invoice"],
  },
];

const FILTERS: { value: FilterType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "comprehensive", label: "Comprehensive" },
  { value: "third_party", label: "Third Party" },
];

export default function Prompt184() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = filter === "all" ? QUOTES : QUOTES.filter((q) => q.type === filter);

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
          gap: "var(--space-2)",
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
          <Typography variant="label-lg" weight="semibold" color="strong">
            Quotes for MH 02 AB 1234 · Alto 2019
          </Typography>
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
        gap: "var(--space-5)",
      }}>
        {/* Filter chips */}
        <div style={{ display: "flex", gap: "var(--space-2)" }}>
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              style={{
                padding: "var(--space-2) var(--space-4)",
                borderRadius: "var(--radius-full)",
                border: "1px solid",
                borderColor: filter === value ? "var(--color-primary)" : "var(--color-border-subtle)",
                background: filter === value ? "var(--color-primary-subtle)" : "var(--grey-white)",
                cursor: "pointer",
                touchAction: "manipulation",
              }}
            >
              <Typography
                variant="label-md"
                weight={filter === value ? "semibold" : "medium"}
                color={filter === value ? "primary" : "muted"}
              >
                {label}
              </Typography>
            </button>
          ))}
        </div>

        {/* Quote cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {filtered.map((quote) => (
            <Card
              key={quote.id}
              variant="default"
              padding="md"
              style={quote.recommended ? { borderColor: "var(--color-primary)", borderWidth: 2 } : undefined}
            >
              {quote.recommended && (
                <div style={{ marginBottom: "var(--space-3)" }}>
                  <Badge color="blue" size="sm">ACKO Recommended</Badge>
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-3)" }}>
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
                  <Shield size={20} aria-hidden="true" />
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block" }}>
                    {quote.name}
                  </Typography>
                </div>
              </div>

              <Typography variant="display-sm" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)", fontVariantNumeric: "tabular-nums" }}>
                ₹{quote.premium.toLocaleString("en-IN")}
                <Typography variant="body-sm" color="muted">/year</Typography>
              </Typography>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                {quote.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "var(--space-1)",
                      padding: "var(--scale-2) var(--space-2)",
                      borderRadius: "var(--radius-lg)",
                      background: "var(--color-success-subtle)",
                    }}
                  >
                    <Check size={12} strokeWidth={2.5} aria-hidden="true" style={{ color: "var(--color-success)" }} />
                    <Typography variant="caption" weight="medium" color="default">{h}</Typography>
                  </span>
                ))}
              </div>

              <Button type="button" variant={quote.recommended ? "primary" : "outline"} size="lg" fullWidth>
                Select plan
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
