import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Separator } from "@acko/separator";
import { Badge } from "@acko/badge";

type ChallanStatus = "idle" | "loading" | "found" | "none";

interface Challan {
  offence: string;
  date: string;
  authority: string;
  amount: number;
  status: "unpaid" | "paid";
}

const MOCK_CHALLANS: Challan[] = [
  { offence: "Red light violation", date: "12 Jan 2026", authority: "Mumbai Traffic Police", amount: 1000, status: "unpaid" },
  { offence: "Overspeed (NH-48)", date: "3 Feb 2026", authority: "Maharashtra Highway Patrol", amount: 2000, status: "unpaid" },
  { offence: "Seatbelt violation", date: "18 Nov 2025", authority: "Mumbai Traffic Police", amount: 500, status: "paid" },
];

export default function Prompt025() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [status, setStatus] = useState<ChallanStatus>("idle");

  const handleSearch = () => {
    if (!vehicleNumber.trim()) return;
    setStatus("loading");
    setTimeout(() => setStatus("found"), 1200);
  };

  const unpaid = MOCK_CHALLANS.filter((c) => c.status === "unpaid");
  const totalDue = unpaid.reduce((s, c) => s + c.amount, 0);

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-64)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <Button type="button" variant="ghost" size="sm" style={{ touchAction: "manipulation" }}>Log in</Button>
        </div>
      </header>

      {/* Hero with vehicle input */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <div>
            <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
              Check and pay your vehicle challans
            </Typography>
            <Typography variant="body-lg" color="muted">
              Real-time data from Parivahan and state traffic portals. Free to check.
            </Typography>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <TextInput
              label="Vehicle registration number"
              placeholder="MH 01 AB 1234"
              value={vehicleNumber}
              onChange={(v) => setVehicleNumber(v.toUpperCase())}
              autoComplete="off"
            />
            <Button type="submit" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} disabled={status === "loading"}>
              {status === "loading" ? "Checking…" : "Check challans"}
            </Button>
          </form>
        </div>
      </section>

      {/* Results section */}
      {status === "found" && (
        <>
          <Separator />
          <section style={{ padding: "var(--space-12) var(--space-4)" }}>
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
                <div>
                  <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block" }}>Results for {vehicleNumber}</Typography>
                  <Typography variant="body-sm" color="muted">{MOCK_CHALLANS.length} challan{MOCK_CHALLANS.length !== 1 ? "s" : ""} found</Typography>
                </div>
                {unpaid.length > 0 && (
                  <div style={{ background: "var(--color-error-subtle)", border: "1px solid var(--color-error-border)", borderRadius: "var(--radius-xl)", padding: "var(--space-3) var(--space-4)" }}>
                    <Typography variant="label-md" color="error">
                      Total due: <strong style={{ fontVariantNumeric: "tabular-nums" }}>₹{totalDue.toLocaleString("en-IN")}</strong>
                    </Typography>
                  </div>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
                {MOCK_CHALLANS.map((c, i) => (
                  <Card key={i} variant={c.status === "unpaid" ? "default" : "outline"} padding="md">
                    <CardContent>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-3)" }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                            <Typography variant="label-lg" weight="semibold" color="strong">{c.offence}</Typography>
                            <Badge color={c.status === "unpaid" ? "red" : "green"} size="sm">{c.status === "unpaid" ? "Unpaid" : "Paid"}</Badge>
                          </div>
                          <Typography variant="body-sm" color="muted">{c.date} · {c.authority}</Typography>
                        </div>
                        <Typography variant="heading-sm" weight="bold" color={c.status === "unpaid" ? "error" : "muted"} style={{ fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>
                          ₹{c.amount.toLocaleString("en-IN")}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {unpaid.length > 0 && (
                <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
                  Pay ₹{totalDue.toLocaleString("en-IN")} now
                </Button>
              )}
            </div>
          </section>
        </>
      )}

      <Separator />

      {/* What is challan explainer */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-12) var(--space-4)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Typography variant="heading-lg" weight="semibold" color="strong" style={{ margin: "0 0 var(--space-4)", textWrap: "balance" }}>What is a traffic challan?</Typography>
          <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty", marginBottom: "var(--space-4)" }}>
            A challan is a fine issued for a traffic rule violation — speeding, signal jumping, mobile usage while driving, or missing documents. Under the Motor Vehicles (Amendment) Act, 2019, fines were substantially increased and unpaid challans can result in licence suspension or vehicle impoundment.
          </Typography>
          <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
            ACKO integrates with the Parivahan portal and state traffic systems to give you current, accurate challan data — and lets you pay in one step.
          </Typography>
        </div>
      </section>

      <footer style={{ background: "var(--grey-700)", padding: "var(--space-8) var(--space-4)", textAlign: "center" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20Primary%20Dark%20BG.svg" alt="ACKO" height={40} style={{ height: "var(--scale-40)", width: "auto", marginBottom: "var(--space-3)" }} />
        <Typography variant="caption" color="muted" style={{ display: "block" }}>IRDAI Licence No. 157 · © 2026 Acko General Insurance Ltd.</Typography>
      </footer>
    </div>
  );
}
