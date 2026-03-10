import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Separator } from "@acko/separator";

const HOW_STEPS = [
  { num: "1", title: "Enter your vehicle number", body: "Type your registration number. We query the traffic enforcement database in real time." },
  { num: "2", title: "View all challans", body: "See every pending fine — amount, offence, date, and the issuing authority." },
  { num: "3", title: "Pay securely", body: "Pay directly within the app using UPI, card, or net banking. Receipt generated instantly." },
];

export default function Prompt015() {
  const [vehicleNumber, setVehicleNumber] = useState("");

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Hero with input */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-20) var(--space-4)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
          <div>
            <Typography variant="display-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
              Check and clear your challans in minutes
            </Typography>
            <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
              See all pending traffic fines for any vehicle, anywhere in India. Free to check, instant results.
            </Typography>
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <TextInput
              label="Vehicle number"
              placeholder="MH 01 AB 1234"
              value={vehicleNumber}
              onChange={(v) => setVehicleNumber(v.toUpperCase())}
              autoComplete="off"
              required
            />
            <Button type="submit" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
              Check now
            </Button>
          </form>
        </div>
      </section>

      <Separator />

      {/* How it works */}
      <section style={{ padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-10)", textWrap: "balance" }}>
            How it works
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-4)" }} className="steps-grid">
            {HOW_STEPS.map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
                <div style={{ width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", background: "var(--color-primary-subtle)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Typography variant="label-lg" weight="bold" color="primary">{s.num}</Typography>
                </div>
                <div style={{ paddingTop: "var(--space-2)" }}>
                  <Typography variant="heading-sm" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>{s.title}</Typography>
                  <Typography variant="body-md" color="muted">{s.body}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* What is a challan */}
      <section style={{ background: "var(--grey-white)", padding: "var(--space-16) var(--space-4)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Typography variant="heading-lg" weight="semibold" color="strong" style={{ margin: "0 0 var(--space-4)", textWrap: "balance" }}>
            What is a challan?
          </Typography>
          <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty", marginBottom: "var(--space-4)" }}>
            A challan is a traffic fine issued by law enforcement for a road violation — speeding, signal jumping, not wearing a seatbelt, or driving without valid documents. Under the Motor Vehicles Act, unpaid challans can result in your vehicle's registration being suspended.
          </Typography>
          <Typography variant="body-lg" color="muted" style={{ textWrap: "pretty" }}>
            ACKO integrates directly with the Parivahan database and state traffic portals so you always see up-to-date challan information — not stale records.
          </Typography>
        </div>
      </section>

      <style>{`
        @media (min-width: 680px) {
          .steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
