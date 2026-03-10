import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { TextInput } from "@acko/text-input";

const GARAGES = [
  { id: "g1", name: "AutoPlex Service Centre", area: "Andheri West", distance: "1.2 km", type: "Cashless", rating: 4.7, reviews: 318, open: true, speciality: "Cars, SUVs" },
  { id: "g2", name: "Galaxy Auto Works", area: "Bandra West", distance: "2.6 km", type: "Cashless", rating: 4.5, reviews: 204, open: true, speciality: "Cars, EVs" },
  { id: "g3", name: "SpeedFix Motors", area: "Juhu", distance: "3.1 km", type: "Reimbursement", rating: 4.3, reviews: 97, open: false, speciality: "Cars, Trucks" },
  { id: "g4", name: "Maruti Genuine Parts", area: "Vile Parle", distance: "3.8 km", type: "Cashless", rating: 4.8, reviews: 502, open: true, speciality: "Maruti, Suzuki" },
  { id: "g5", name: "Honda Care Workshop", area: "Santacruz", distance: "4.5 km", type: "Cashless", rating: 4.6, reviews: 223, open: true, speciality: "Honda vehicles" },
];

const FILTERS = ["All", "Cashless", "Open now", "Nearest first"];

export default function Prompt089() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedGarage, setSelectedGarage] = useState<string | null>(null);

  const filtered = GARAGES.filter((g) => {
    const matchSearch = g.name.toLowerCase().includes(search.toLowerCase()) || g.area.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || (filter === "Cashless" && g.type === "Cashless") || (filter === "Open now" && g.open) || filter === "Nearest first";
    return matchSearch && matchFilter;
  }).sort((a, b) => filter === "Nearest first" ? parseFloat(a.distance) - parseFloat(b.distance) : 0);

  const selected = GARAGES.find((g) => g.id === selectedGarage);

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      {/* Header */}
      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-3)" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="heading-sm" weight="bold" color="strong">Cashless garages</Typography>
        </div>
        <TextInput label="" placeholder="Search garage or area" value={search} onChange={setSearch} />
        <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-3)", overflowX: "auto" }}>
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: "var(--space-1) var(--space-3)", borderRadius: "var(--radius-full)", border: "1px solid", borderColor: filter === f ? "var(--color-primary)" : "var(--color-border-default)", background: filter === f ? "var(--color-primary)" : "var(--grey-white)", color: filter === f ? "var(--color-on-primary)" : "var(--color-text-default)", cursor: "pointer", whiteSpace: "nowrap", touchAction: "manipulation" }}>
              <Typography variant="caption" style={{ color: "inherit" }}>{f}</Typography>
            </button>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div style={{ height: 160, background: "var(--color-border-subtle)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.04) 20px, rgba(0,0,0,0.04) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.04) 20px, rgba(0,0,0,0.04) 21px)" }} />
        {GARAGES.slice(0, 4).map((g, i) => (
          <button key={g.id} onClick={() => setSelectedGarage(g.id)} style={{ position: "absolute", background: selectedGarage === g.id ? "var(--color-primary)" : "var(--grey-white)", border: `2px solid ${selectedGarage === g.id ? "var(--color-primary)" : "var(--color-border-default)"}`, borderRadius: "var(--radius-full)", padding: "4px 8px", cursor: "pointer", touchAction: "manipulation", top: `${20 + i * 28}px`, left: `${15 + i * 20}%` }}>
            <Typography variant="caption" style={{ color: selectedGarage === g.id ? "var(--color-on-primary)" : "var(--color-text-default)" }}>🔧 {g.area}</Typography>
          </button>
        ))}
        <div style={{ position: "absolute", top: 12, right: 12, background: "var(--grey-white)", borderRadius: "var(--radius-full)", padding: "4px 10px", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }}>
          <Typography variant="caption" color="muted">📍 Mumbai</Typography>
        </div>
      </div>

      <div style={{ padding: "var(--space-3) var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)", paddingBottom: 80 }}>
        <Typography variant="caption" color="muted">{filtered.length} garages near you</Typography>
        {filtered.map((g) => (
          <Card key={g.id} variant={selectedGarage === g.id ? "elevated" : "default"} padding="md" role="button" tabIndex={0} onClick={() => setSelectedGarage(selectedGarage === g.id ? null : g.id)} onKeyDown={(e) => e.key === "Enter" && setSelectedGarage(g.id)} style={{ cursor: "pointer", outline: selectedGarage === g.id ? "2px solid var(--color-primary)" : "none", outlineOffset: 1, touchAction: "manipulation" }}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                    <Typography variant="label-md" weight="semibold" color="strong">{g.name}</Typography>
                    {g.type === "Cashless" && <Badge color="green" size="sm">Cashless</Badge>}
                  </div>
                  <Typography variant="caption" color="muted" style={{ display: "block" }}>{g.area} · {g.distance}</Typography>
                  <Typography variant="caption" color="muted" style={{ display: "block" }}>{g.speciality}</Typography>
                  <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-1)" }}>
                    <Typography variant="caption" color="default">⭐ {g.rating} ({g.reviews})</Typography>
                    <Typography variant="caption" color={g.open ? "success" : "error"}>{g.open ? "● Open" : "● Closed"}</Typography>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </div>
              {selectedGarage === g.id && (
                <div style={{ marginTop: "var(--space-3)", display: "flex", gap: "var(--space-2)" }}>
                  <Button type="button" variant="primary" size="sm" style={{ flex: 1, touchAction: "manipulation" }}>Navigate</Button>
                  <Button type="button" variant="outline" size="sm" style={{ flex: 1, touchAction: "manipulation" }}>Call</Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
