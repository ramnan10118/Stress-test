import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { TextInput } from "@acko/text-input";

const CarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8.25 18.75a1.5 1.5 0 0 1-1.5-1.5v-.75m10.5.75a1.5 1.5 0 0 0 1.5-1.5v-.75M3.75 12h16.5m-16.5 0a2.25 2.25 0 0 1-2.25-2.25V7.5A2.25 2.25 0 0 1 3.75 5.25h1.028a2.25 2.25 0 0 1 1.81.918l1.624 2.182h7.576l1.624-2.182a2.25 2.25 0 0 1 1.81-.918h1.028a2.25 2.25 0 0 1 2.25 2.25v2.25a2.25 2.25 0 0 1-2.25 2.25m-16.5 0v3.75m16.5-3.75v3.75M7.5 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>
);

export default function Prompt005() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [error, setError] = useState("");

  function validateVehicle(value: string) {
    const cleaned = value.toUpperCase().replace(/\s/g, "");
    if (cleaned.length > 0 && !/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/.test(cleaned)) {
      setError("Enter a valid vehicle number, e.g. MH 01 AB 1234.");
    } else {
      setError("");
    }
  }

  function handleChange(val: string) {
    const formatted = val.toUpperCase().slice(0, 10);
    setVehicleNumber(formatted);
    if (error) validateVehicle(formatted);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    validateVehicle(vehicleNumber);
  }

  return (
    <section
      style={{
        background: "var(--grey-white)",
        padding: "var(--space-20) var(--space-4)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-8)",
        }}
      >
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
          alt="ACKO"
          height={28}
          style={{ height: "var(--scale-28)", width: "auto" }}
          loading="eager"
        />

        {/* Heading block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Typography
            variant="display-lg"
            weight="bold"
            color="strong"
            style={{
              margin: 0,
              textWrap: "balance",
            }}
          >
            Check your vehicle challans instantly
          </Typography>
          <Typography
            variant="body-lg"
            color="muted"
            style={{ textWrap: "pretty" }}
          >
            Enter your vehicle number to see all pending traffic fines from across India. Pay directly from the app.
          </Typography>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <TextInput
            label="Vehicle number"
            placeholder="MH 01 AB 1234"
            value={vehicleNumber}
            onChange={handleChange}
            iconLeft={<CarIcon />}
            autoComplete="off"
            state={error ? "error" : "default"}
            errorText={error || undefined}
            required
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            style={{ width: "100%", touchAction: "manipulation" }}
          >
            Check now
          </Button>
        </form>

        {/* Trust line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-4)",
            flexWrap: "wrap",
          }}
        >
          {["Free to use", "All states covered", "Real-time data"].map((item) => (
            <div
              key={item}
              style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ color: "var(--color-success)", flexShrink: 0 }}
              >
                <path d="M4 10l4.5 4.5L16 6" />
              </svg>
              <Typography variant="label-lg" color="muted">
                {item}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
