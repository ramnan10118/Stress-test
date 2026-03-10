import { useState } from "react";
import { Plane, Plus, X, Check, ChevronLeft } from "lucide-react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { TextInput } from "@acko/text-input";
import { Badge } from "@acko/badge";
import { Separator } from "@acko/separator";
import { Progress } from "@acko/progress";

interface Destination {
  id: string;
  name: string;
}

interface Traveller {
  id: string;
  name: string;
}

const COVERAGE_ITEMS = [
  "Emergency medical up to ₹50 lakh",
  "Trip cancellation & interruption",
  "Lost & delayed baggage cover",
  "Flight delay cash benefit",
  "Passport loss assistance abroad",
];

const STEP_LABELS = ["Trip details", "Travellers", "Get quote"];

export default function Prompt029() {
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState<Destination[]>([
    { id: "d1", name: "" },
  ]);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState<Traveller[]>([
    { id: "t1", name: "" },
  ]);

  const addDestination = () =>
    setDestinations((d) => [...d, { id: `d${Date.now()}`, name: "" }]);

  const removeDestination = (id: string) =>
    setDestinations((d) => d.filter((x) => x.id !== id));

  const updateDestination = (id: string, name: string) =>
    setDestinations((d) => d.map((x) => (x.id === id ? { ...x, name } : x)));

  const addTraveller = () =>
    setTravellers((t) => [...t, { id: `t${Date.now()}`, name: "" }]);

  const updateTraveller = (id: string, name: string) =>
    setTravellers((t) => t.map((x) => (x.id === id ? { ...x, name } : x)));

  const filledDestinations = destinations.filter((d) => d.name.trim());

  return (
    <>
      <style>{`
        .p029-page {
          min-height: 100vh;
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
        }

        .p029-header {
          background: var(--grey-white);
          border-bottom: 1px solid var(--color-border-subtle);
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
        }

        .p029-header-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-4);
          height: var(--scale-64);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .p029-logo {
          height: var(--scale-24);
          width: auto;
        }

        .p029-steps {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .p029-step-dot {
          width: var(--scale-28);
          height: var(--scale-28);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .p029-step-line {
          width: var(--scale-24);
          height: 2px;
          border-radius: var(--radius-full);
        }

        .p029-main {
          flex: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: var(--space-8) var(--space-4);
          padding-bottom: var(--space-20);
        }

        @media (min-width: 768px) {
          .p029-header-inner {
            padding-left: var(--space-8);
            padding-right: var(--space-8);
          }
          .p029-main {
            padding-left: var(--space-8);
            padding-right: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p029-header-inner {
            padding-left: var(--space-10);
            padding-right: var(--space-10);
          }
          .p029-main {
            padding-left: var(--space-10);
            padding-right: var(--space-10);
          }
        }

        @media (min-width: 1280px) {
          .p029-header-inner {
            padding-left: 0;
            padding-right: 0;
          }
          .p029-main {
            padding-left: 0;
            padding-right: 0;
          }
        }

        .p029-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }

        @media (min-width: 768px) {
          .p029-grid {
            grid-template-columns: 3fr 2fr;
            align-items: start;
          }
        }

        .p029-dest-row {
          display: flex;
          gap: var(--space-2);
          align-items: flex-end;
        }

        .p029-dest-field {
          flex: 1;
        }

        .p029-remove-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-2);
          min-width: var(--scale-44);
          min-height: var(--scale-44);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-error);
          touch-action: manipulation;
          border-radius: var(--radius-md);
        }

        .p029-add-btn {
          background: none;
          border: 1px dashed var(--color-border-default);
          border-radius: var(--radius-lg);
          padding: var(--space-2) var(--space-4);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-primary);
          touch-action: manipulation;
          min-height: var(--scale-44);
        }

        .p029-date-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
        }

        .p029-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .p029-quote-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
          text-align: center;
        }

        .p029-quote-summary {
          background: var(--color-surface);
          border-radius: var(--radius-xl);
          padding: var(--space-4);
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .p029-edit-link {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-primary);
          touch-action: manipulation;
          padding: var(--space-2);
          min-height: var(--scale-44);
          display: inline-flex;
          align-items: center;
        }

        .p029-coverage-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .p029-coverage-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
        }
      `}</style>

      <div className="p029-page">
        {/* Header */}
        <header className="p029-header">
          <div className="p029-header-inner">
            <img
              src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
              alt="ACKO"
              className="p029-logo"
            />
            <nav className="p029-steps" aria-label="Trip builder progress">
              {STEP_LABELS.map((label, i) => {
                const s = i + 1;
                const isActive = step >= s;
                return (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <div
                      className="p029-step-dot"
                      style={{
                        background: isActive ? "var(--color-primary)" : "var(--color-border-subtle)",
                        color: isActive ? "var(--color-on-primary)" : "var(--color-text-muted)",
                      }}
                      aria-label={`Step ${s}: ${label}${step === s ? " (current)" : ""}`}
                      role="status"
                    >
                      <Typography variant="caption" weight="semibold">{s}</Typography>
                    </div>
                    {s < 3 && (
                      <div
                        className="p029-step-line"
                        style={{ background: step > s ? "var(--color-primary)" : "var(--color-border-subtle)" }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="p029-main">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", marginBottom: "var(--space-8)" }}>
            <Typography variant="heading-xl" weight="bold" color="strong" as="h1">
              Travel insurance
            </Typography>
            <Typography variant="body-md" color="muted">
              Cover your trip in under 2 minutes. Multi-destination, multi-traveller — one simple plan.
            </Typography>
          </div>

          <Progress value={step * 33} max={100} aria-label="Trip builder progress" />

          <div className="p029-grid" style={{ marginTop: "var(--space-8)" }}>
            {/* Form column */}
            <div>
              {/* Step 1: Trip builder */}
              {step === 1 && (
                <Card variant="default" padding="lg">
                  <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-6)" }}>
                    Plan your trip
                  </Typography>

                  <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                        <Typography variant="label-lg" weight="semibold" color="strong">Destinations</Typography>
                        {destinations.map((d, i) => (
                          <div key={d.id} className="p029-dest-row">
                            <div className="p029-dest-field">
                              <TextInput
                                label={`Destination ${i + 1}`}
                                placeholder="e.g. Bangkok, Thailand"
                                value={d.name}
                                onChange={(v) => updateDestination(d.id, v)}
                              />
                            </div>
                            {destinations.length > 1 && (
                              <button
                                type="button"
                                className="p029-remove-btn"
                                onClick={() => removeDestination(d.id)}
                                aria-label={`Remove destination ${i + 1}`}
                              >
                                <X size={16} aria-hidden="true" />
                              </button>
                            )}
                          </div>
                        ))}
                        <button type="button" className="p029-add-btn" onClick={addDestination}>
                          <Plus size={16} aria-hidden="true" />
                          <Typography variant="label-md" weight="semibold" color="primary">Add destination</Typography>
                        </button>
                      </div>

                      <Separator />

                      <div className="p029-date-grid">
                        <TextInput
                          label="Departure date"
                          placeholder="DD / MM / YYYY"
                          value={departureDate}
                          onChange={setDepartureDate}
                        />
                        <TextInput
                          label="Return date"
                          placeholder="DD / MM / YYYY"
                          value={returnDate}
                          onChange={setReturnDate}
                        />
                      </div>

                      <Button type="submit" variant="primary" size="lg" fullWidth>
                        Continue
                      </Button>
                    </div>
                  </form>
                </Card>
              )}

              {/* Step 2: Traveller details */}
              {step === 2 && (
                <Card variant="default" padding="lg">
                  <Typography variant="heading-md" weight="semibold" color="strong" style={{ display: "block", marginBottom: "var(--space-6)" }}>
                    Traveller details
                  </Typography>

                  <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                      {travellers.map((t, i) => (
                        <TextInput
                          key={t.id}
                          label={`Traveller ${i + 1} — Full name`}
                          placeholder="As per passport"
                          value={t.name}
                          onChange={(v) => updateTraveller(t.id, v)}
                        />
                      ))}
                      <button type="button" className="p029-add-btn" onClick={addTraveller}>
                        <Plus size={16} aria-hidden="true" />
                        <Typography variant="label-md" weight="semibold" color="primary">Add traveller</Typography>
                      </button>

                      <Separator />

                      <div style={{ display: "flex", gap: "var(--space-3)" }}>
                        <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)}>
                          <span style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                            <ChevronLeft size={16} aria-hidden="true" /> Go back
                          </span>
                        </Button>
                        <div style={{ flex: 1 }}>
                          <Button type="submit" variant="primary" size="lg" fullWidth>
                            Continue
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Card>
              )}

              {/* Step 3: Quote */}
              {step === 3 && (
                <Card variant="elevated" padding="lg">
                  <div className="p029-quote-center">
                    <div style={{
                      width: "var(--scale-56)",
                      height: "var(--scale-56)",
                      borderRadius: "var(--radius-full)",
                      background: "var(--color-primary-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                    }}>
                      <Plane size={28} aria-hidden="true" />
                    </div>

                    <Typography variant="heading-lg" weight="bold" color="strong">
                      Your trip is ready to insure
                    </Typography>

                    <div className="p029-quote-summary">
                      <div className="p029-summary-row">
                        <Typography variant="body-sm" color="muted">Destinations</Typography>
                        <Typography variant="body-sm" color="default">
                          {filledDestinations.length > 0
                            ? filledDestinations.map((d) => d.name).join(", ")
                            : "—"}
                        </Typography>
                      </div>
                      <div className="p029-summary-row">
                        <Typography variant="body-sm" color="muted">Dates</Typography>
                        <Typography variant="body-sm" color="default">
                          {departureDate && returnDate
                            ? `${departureDate} → ${returnDate}`
                            : "—"}
                        </Typography>
                      </div>
                      <div className="p029-summary-row">
                        <Typography variant="body-sm" color="muted">Travellers</Typography>
                        <Typography variant="body-sm" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>
                          {travellers.length}
                        </Typography>
                      </div>
                      <Separator />
                      <div className="p029-summary-row">
                        <Typography variant="label-lg" weight="semibold" color="strong">Premium from</Typography>
                        <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>
                          ₹{(199 * travellers.length).toLocaleString("en-IN")}/trip
                        </Typography>
                      </div>
                    </div>

                    <Button type="button" variant="primary" size="lg" fullWidth>
                      Get full quote
                    </Button>

                    <button type="button" className="p029-edit-link" onClick={() => setStep(2)}>
                      <Typography variant="label-md" weight="semibold" color="primary">Edit details</Typography>
                    </button>
                  </div>
                </Card>
              )}
            </div>

            {/* Coverage sidebar */}
            <Card variant="default" padding="md">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                <Typography variant="label-lg" weight="semibold" color="strong">What's included</Typography>
                <Badge color="blue" size="sm">All plans</Badge>
              </div>
              <ul className="p029-coverage-list">
                {COVERAGE_ITEMS.map((item) => (
                  <li key={item} className="p029-coverage-item">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      aria-hidden="true"
                      style={{ color: "var(--color-success)", flexShrink: 0, marginTop: 2 }}
                    />
                    <Typography variant="body-sm" color="default">{item}</Typography>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
