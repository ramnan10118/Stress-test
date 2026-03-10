// Dark Mode — Challan check screen
import { useState } from "react";
import { Search, AlertCircle, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";

type ViewState = "input" | "results";

const MOCK_CHALLANS = [
  { id: "CH-001", offence: "Jumping red light", location: "MG Road, Bengaluru", date: "14 Jan 2025", amount: 2000, paid: false },
  { id: "CH-002", offence: "Over-speeding", location: "Outer Ring Road, Bengaluru", date: "02 Dec 2024", amount: 1000, paid: true },
];

export default function Prompt119() {
  const [view, setView] = useState<ViewState>("input");
  const [vehicleNo, setVehicleNo] = useState("KA 01 AB 1234");

  const unpaidTotal = MOCK_CHALLANS.filter(c => !c.paid).reduce((s, c) => s + c.amount, 0);

  return (
    <div data-theme="dark" style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--color-surface-secondary)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-6)", height: "var(--scale-56)", display: "flex", alignItems: "center" }}>
        <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg" alt="ACKO" style={{ height: "var(--scale-24)", width: "auto" }} />
      </header>

      <main style={{ flex: 1, padding: "var(--space-8) var(--space-4)", maxWidth: 480, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {view === "input" && (
          <>
            <div>
              <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                Check traffic challans
              </Typography>
              <Typography variant="body-sm" color="muted">
                Enter your vehicle number to see pending fines and pay instantly.
              </Typography>
            </div>

            <Card variant="default" padding="none">
              <CardContent>
                <Typography variant="label-md" weight="medium" color="strong" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                  Vehicle number
                </Typography>
                <div style={{ position: "relative", marginBottom: "var(--space-4)" }}>
                  <div style={{ position: "absolute", left: "var(--space-3)", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)", pointerEvents: "none" }}>
                    <Search size={16} aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    value={vehicleNo}
                    onChange={(e) => setVehicleNo(e.target.value.toUpperCase())}
                    placeholder="MH 01 AB 1234"
                    autoComplete="off"
                    style={{ width: "100%", padding: "var(--space-3) var(--space-3) var(--space-3) var(--space-10)", background: "var(--color-surface-secondary)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-lg)", color: "var(--color-text-strong)", fontSize: "var(--scale-16)", boxSizing: "border-box", outline: "none" }}
                    aria-label="Vehicle registration number"
                  />
                </div>
                <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }} onClick={() => setView("results")}>
                  Check challans
                </Button>
              </CardContent>
            </Card>

            <Typography variant="caption" color="muted" align="center">
              Data sourced from Parivahan, e-Challan, and state traffic systems.
            </Typography>
          </>
        )}

        {view === "results" && (
          <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  {vehicleNo}
                </Typography>
                <Typography variant="body-sm" color="muted">{MOCK_CHALLANS.length} challan{MOCK_CHALLANS.length > 1 ? "s" : ""} found</Typography>
              </div>
              <button onClick={() => setView("input")} style={{ background: "none", border: "none", cursor: "pointer", touchAction: "manipulation", color: "var(--color-primary)", padding: "var(--space-2)" }}>
                <Typography variant="label-md" color="primary">Change</Typography>
              </button>
            </div>

            {unpaidTotal > 0 && (
              <Card variant="default" padding="none" style={{ border: "1px solid var(--color-error-border)", background: "var(--color-error-subtle)" }}>
                <CardContent>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <AlertCircle size={18} aria-hidden="true" style={{ color: "var(--color-error)", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <Typography variant="label-lg" weight="semibold" color="error" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                        ₹{unpaidTotal.toLocaleString("en-IN")} pending
                      </Typography>
                      <Typography variant="body-sm" color="muted">Pay now to avoid licence suspension.</Typography>
                    </div>
                    <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation", flexShrink: 0 }}>Pay all</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {MOCK_CHALLANS.map((c, i) => (
                <Card key={c.id} variant="default" padding="none">
                  <CardContent>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-3)" }}>
                      <div style={{ flex: 1 }}>
                        <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>{c.offence}</Typography>
                        <Typography variant="body-sm" color="muted" style={{ display: "block" }}>{c.location}</Typography>
                        <Typography variant="caption" color="muted">{c.date}</Typography>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <Typography variant="label-lg" weight="semibold" color={c.paid ? "muted" : "error"} style={{ display: "block", fontVariantNumeric: "tabular-nums" }}>
                          ₹{c.amount.toLocaleString("en-IN")}
                        </Typography>
                        <Badge color={c.paid ? "green" : "red"} size="sm">{c.paid ? "Paid" : "Unpaid"}</Badge>
                      </div>
                    </div>
                    {!c.paid && (
                      <div style={{ marginTop: "var(--space-3)" }}>
                        <Button type="button" variant="outline" size="sm" style={{ touchAction: "manipulation" }}>
                          Pay ₹{c.amount.toLocaleString("en-IN")}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
