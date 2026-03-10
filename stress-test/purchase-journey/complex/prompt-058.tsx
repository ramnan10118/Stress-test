import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";

type FamilyMember = { id: string; relation: string; age: string; preExisting: boolean };

const PLAN_OPTIONS = [
  { id: "basic", name: "Family Floater Basic", sumInsured: "₹5 lakh", price: 599, features: ["Cashless hospitalisation", "Day care procedures", "Pre & post hospitalisation"] },
  { id: "plus", name: "Family Floater Plus", sumInsured: "₹10 lakh", price: 899, features: ["All Basic benefits", "Maternity cover (9 mo wait)", "Annual health check-up"], badge: "Recommended" },
  { id: "super", name: "Family Floater Super", sumInsured: "₹20 lakh", price: 1499, features: ["All Plus benefits", "Critical illness rider", "AYUSH treatment", "OPD cover"] },
];

const RELATIONS = ["Self", "Spouse", "Son", "Daughter", "Father", "Mother"];

export default function Prompt058() {
  const [members, setMembers] = useState<FamilyMember[]>([
    { id: "m1", relation: "Self", age: "32", preExisting: false },
    { id: "m2", relation: "Spouse", age: "29", preExisting: false },
    { id: "m3", relation: "Son", age: "4", preExisting: false },
  ]);
  const [selectedPlan, setSelectedPlan] = useState("plus");

  const addMember = () => setMembers((m) => [...m, { id: `m${Date.now()}`, relation: "Father", age: "", preExisting: false }]);
  const removeMember = (id: string) => setMembers((m) => m.filter((x) => x.id !== id));
  const updateMember = (id: string, field: keyof FamilyMember, value: string | boolean) =>
    setMembers((m) => m.map((x) => (x.id === id ? { ...x, [field]: value } : x)));

  const plan = PLAN_OPTIONS.find((p) => p.id === selectedPlan)!;
  const adultCount = members.filter((m) => Number(m.age) >= 18 || !m.age).length;
  const childCount = members.filter((m) => Number(m.age) < 18 && m.age).length;
  const total = plan.price * members.length;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Health insurance</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "65%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, padding: "var(--space-5) var(--space-4) 110px", maxWidth: 640, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* Family members */}
        <Card variant="default" padding="lg">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
              <Typography variant="label-lg" weight="semibold" color="strong">Family members</Typography>
              <Badge color="blue" size="sm">{members.length} member{members.length !== 1 ? "s" : ""}</Badge>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {members.map((m) => (
                <div key={m.id} style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-2)", flex: 1 }}>
                    <select
                      value={m.relation}
                      onChange={(e) => updateMember(m.id, "relation", e.target.value)}
                      style={{ padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", background: "var(--grey-white)", touchAction: "manipulation" }}
                    >
                      {RELATIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <input
                      type="number"
                      placeholder="Age"
                      value={m.age}
                      min={1}
                      max={99}
                      onChange={(e) => updateMember(m.id, "age", e.target.value)}
                      style={{ width: 70, padding: "var(--space-2)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", background: "var(--grey-white)", textAlign: "center", touchAction: "manipulation" }}
                      aria-label={`Age for ${m.relation}`}
                    />
                  </div>
                  <label style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", padding: "var(--space-2)", cursor: "pointer", touchAction: "manipulation" }}>
                    <input type="checkbox" checked={m.preExisting} onChange={(e) => updateMember(m.id, "preExisting", e.target.checked)} style={{ accentColor: "var(--color-primary)", width: 16, height: 16 }} aria-label={`Pre-existing condition for ${m.relation}`} />
                    <Typography variant="caption" color="muted">Pre-existing</Typography>
                  </label>
                  {members.length > 1 && (
                    <button onClick={() => removeMember(m.id)} style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", color: "var(--color-error)", touchAction: "manipulation", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label={`Remove ${m.relation}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button onClick={addMember} style={{ marginTop: "var(--space-3)", background: "none", border: "1px dashed var(--color-border-default)", borderRadius: "var(--radius-lg)", padding: "var(--space-2) var(--space-3)", cursor: "pointer", color: "var(--color-primary)", touchAction: "manipulation" }}>
              + Add member
            </button>
          </CardContent>
        </Card>

        {/* Plan selection */}
        <div>
          <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-3)" }}>Choose your plan</Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {PLAN_OPTIONS.map((p) => (
              <Card key={p.id} variant={selectedPlan === p.id ? "elevated" : "default"} padding="md" role="radio" aria-checked={selectedPlan === p.id} tabIndex={0} onClick={() => setSelectedPlan(p.id)} onKeyDown={(e) => e.key === "Enter" && setSelectedPlan(p.id)} style={{ cursor: "pointer", outline: selectedPlan === p.id ? "2px solid var(--color-primary)" : "none", outlineOffset: 2, touchAction: "manipulation" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                        <Typography variant="label-lg" weight="semibold" color="strong">{p.name}</Typography>
                        {p.badge && <Badge color="green" size="sm">{p.badge}</Badge>}
                      </div>
                      <Typography variant="caption" color="muted">Sum insured: {p.sumInsured}</Typography>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{p.price}</Typography>
                      <Typography variant="caption" color="muted">/member/mo</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <div style={{ background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
            <Typography variant="body-sm" color="muted">{members.length} members · {plan.name}</Typography>
            <Typography variant="heading-sm" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>₹{total}/mo</Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>Continue</Button>
        </div>
      </div>
    </div>
  );
}
