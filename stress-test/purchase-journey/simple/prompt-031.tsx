import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { TextInput } from "@acko/text-input";

export default function Prompt031() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [error, setError] = useState("");

  const validate = (val: string) => {
    const re = /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$/;
    if (!re.test(val.replace(/\s/g, ""))) {
      setError("Enter a valid vehicle number (e.g. MH 01 AB 1234)");
    } else {
      setError("");
    }
  };

  const handleChange = (val: string) => {
    const cleaned = val.toUpperCase().replace(/[^A-Z0-9\s]/g, "").slice(0, 12);
    setVehicleNumber(cleaned);
    if (cleaned.length > 4) validate(cleaned);
    else setError("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "var(--space-4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={28} style={{ height: "var(--scale-28)", width: "auto" }} />
        </div>
      </header>

      {/* Content */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-8) var(--space-4)" }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
            <Typography variant="heading-xl" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)", textWrap: "balance" }}>
              Enter your car number
            </Typography>
            <Typography variant="body-md" color="muted">
              We'll fetch your car details automatically — no manual entry.
            </Typography>
          </div>

          {/* License plate styled input */}
          <div style={{ background: "var(--orange-50)", border: "2px solid var(--orange-300)", borderRadius: "var(--radius-xl)", padding: "var(--space-4)", marginBottom: "var(--space-4)", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", justifyContent: "center", marginBottom: "var(--space-2)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "var(--radius-full)", background: "var(--orange-400)" }} />
              <Typography variant="caption" weight="semibold">IND</Typography>
            </div>
            <input
              type="text"
              value={vehicleNumber}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="MH 01 AB 1234"
              autoFocus
              autoComplete="off"
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                textAlign: "center",
                color: "var(--color-text-strong)",
                textTransform: "uppercase",
              }}
              aria-label="Vehicle registration number"
            />
          </div>

          {error && (
            <Typography variant="body-sm" color="error" align="center" style={{ display: "block", marginBottom: "var(--space-3)" }}>
              {error}
            </Typography>
          )}

          <Button
            type="button"
            variant="primary"
            size="lg"
            style={{ width: "100%", touchAction: "manipulation" }}
            disabled={!!error || vehicleNumber.length < 6}
          >
            Continue
          </Button>

          <Typography variant="caption" color="muted" align="center" style={{ display: "block", marginTop: "var(--space-3)" }}>
            Your data is secure and used only to fetch policy details.
          </Typography>
        </div>
      </main>
    </div>
  );
}
