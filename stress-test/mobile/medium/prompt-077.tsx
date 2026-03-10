import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Button } from "@acko/button";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";

type ChallanState = "idle" | "loading" | "found" | "paid";

interface Challan {
  id: string;
  violation: string;
  date: string;
  place: string;
  amount: number;
  paid: boolean;
}

const MOCK_CHALLANS: Challan[] = [
  { id: "c1", violation: "Signal jump", date: "12 Feb 2026", place: "Bandra, Mumbai", amount: 500, paid: false },
  { id: "c2", violation: "Speeding (71 in 60 zone)", date: "3 Jan 2026", place: "Andheri Flyover", amount: 1000, paid: false },
  { id: "c3", violation: "No helmet (rider)", date: "18 Dec 2025", place: "Thane", amount: 500, paid: true },
];

export default function Prompt077() {
  const [vehicleNo, setVehicleNo] = useState("MH01AB1234");
  const [state, setState] = useState<ChallanState>("idle");
  const [challans, setChallans] = useState<Challan[]>(MOCK_CHALLANS);
  const [selected, setSelected] = useState<string[]>([]);

  const pendingTotal = challans.filter((c) => !c.paid && selected.includes(c.id)).reduce((s, c) => s + c.amount, 0);

  const handleSearch = () => {
    setState("loading");
    setTimeout(() => setState("found"), 1200);
  };

  const toggleSelect = (id: string) => setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const handlePay = () => {
    setChallans((prev) => prev.map((c) => selected.includes(c.id) ? { ...c, paid: true } : c));
    setSelected([]);
    setState("paid");
  };

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      <div style={{ height: 44, background: "var(--grey-white)" }} />
      <div style={{ background: "var(--grey-white)", padding: "0 var(--space-4) var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <Typography variant="heading-sm" weight="bold" color="strong">Challan check</Typography>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingBottom: selected.length > 0 ? 100 : 40 }}>
        {/* Search */}
        <Card variant="default" padding="md">
          <CardContent>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <TextInput label="Vehicle number" placeholder="e.g. MH01AB1234" value={vehicleNo} onChange={(v) => { setVehicleNo(v.toUpperCase().replace(/\s/g, "")); setState("idle"); }} autoComplete="off" />
              <Button type="button" variant="primary" size="md" style={{ width: "100%", touchAction: "manipulation" }} onClick={handleSearch} disabled={vehicleNo.length < 6}>
                {state === "loading" ? "Checking…" : "Check challans"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {state === "found" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="label-md" weight="semibold" color="strong">Challans for {vehicleNo}</Typography>
              <Badge color={challans.some((c) => !c.paid) ? "orange" : "green"} size="sm">
                {challans.filter((c) => !c.paid).length} pending
              </Badge>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {challans.map((c) => (
                <Card key={c.id} variant="default" padding="md" style={{ opacity: c.paid ? 0.6 : 1 }}>
                  <CardContent>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-2)" }}>
                      <div style={{ display: "flex", gap: "var(--space-3)", flex: 1 }}>
                        {!c.paid && (
                          <input type="checkbox" checked={selected.includes(c.id)} onChange={() => toggleSelect(c.id)} style={{ accentColor: "var(--color-primary)", width: 18, height: 18, marginTop: 2, flexShrink: 0 }} aria-label={`Select challan: ${c.violation}`} />
                        )}
                        <div>
                          <Typography variant="label-md" weight="semibold" color="strong" style={{ display: "block" }}>{c.violation}</Typography>
                          <Typography variant="caption" color="muted" style={{ display: "block" }}>{c.date} · {c.place}</Typography>
                        </div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <Typography variant="label-md" weight="semibold" color={c.paid ? "success" : "error"} style={{ fontVariantNumeric: "tabular-nums", display: "block" }}>₹{c.amount}</Typography>
                        {c.paid && <Badge color="green" size="sm">Paid</Badge>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {state === "paid" && (
          <Card variant="default" padding="md" style={{ background: "var(--color-success-subtle)" }}>
            <CardContent>
              <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                <span>✅</span>
                <Typography variant="label-md" weight="semibold" color="success">Challans paid successfully! Receipt sent to your email.</Typography>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {selected.length > 0 && (
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, padding: "var(--space-4)", background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)" }}>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={handlePay}>
            Pay ₹{pendingTotal} ({selected.length} challan{selected.length > 1 ? "s" : ""})
          </Button>
        </div>
      )}
    </div>
  );
}
