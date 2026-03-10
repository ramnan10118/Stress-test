import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { TextInput } from "@acko/text-input";

const PlaneIcon = () => (
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
    <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function Prompt003() {
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <section
      style={{
        background: "var(--color-primary)",
        padding: "var(--space-20) var(--space-4)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-8)",
        }}
      >
        {/* Logo */}
        <img
          src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Dark%20bg.svg"
          alt="ACKO"
          height={28}
          style={{ height: "var(--scale-28)", width: "auto" }}
          loading="eager"
        />

        {/* Heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Typography
            variant="display-lg"
            weight="bold"
            color="default"
            style={{
              margin: 0,
              textWrap: "balance",
            }}
          >
            Travel worry-free, wherever you go
          </Typography>
          <Typography
            variant="body-lg"
            color="muted"
            style={{ textWrap: "pretty" }}
          >
            Cover for medical emergencies, trip cancellations, lost baggage, and more — for every trip, every traveller.
          </Typography>
        </div>

        {/* Search form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            background: "var(--grey-white)",
            borderRadius: "var(--radius-2xl)",
            padding: "var(--space-5)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <TextInput
            label="Where are you travelling?"
            placeholder="e.g. Bangkok, Thailand"
            value={destination}
            onChange={setDestination}
            iconLeft={<PlaneIcon />}
            autoComplete="off"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-3)",
            }}
          >
            <TextInput
              label="Departure date"
              placeholder="DD / MM / YYYY"
              type="text"
              value={departDate}
              onChange={setDepartDate}
              iconLeft={<CalendarIcon />}
              autoComplete="off"
            />
            <TextInput
              label="Return date"
              placeholder="DD / MM / YYYY"
              type="text"
              value={returnDate}
              onChange={setReturnDate}
              iconLeft={<CalendarIcon />}
              autoComplete="off"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            style={{ width: "100%", touchAction: "manipulation" }}
          >
            Search plans
          </Button>
        </form>

        <Typography
          variant="caption"
          color="muted"
          align="center"
        >
          IRDAI Licence No. 157 · Plans from ₹199 per trip
        </Typography>
      </div>
    </section>
  );
}
