import { Typography } from "@acko/typography";
import { Card, CardInset } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Separator } from "@acko/separator";
import { ArrowLeft, CheckCircle, Clock, Circle, Headphones, Car } from "lucide-react";

interface TimelineStep {
  id: string;
  label: string;
  description: string;
  date: string;
  status: "completed" | "current" | "upcoming";
}

const claimSteps: TimelineStep[] = [
  { id: "filed", label: "Claim filed", description: "Your claim has been registered successfully.", date: "28 Feb 2026", status: "completed" },
  { id: "docs", label: "Documents verified", description: "All uploaded documents have been reviewed and accepted.", date: "01 Mar 2026", status: "completed" },
  { id: "inspection", label: "Inspection scheduled", description: "A surveyor will inspect the vehicle at your preferred location.", date: "04 Mar 2026", status: "current" },
  { id: "assessment", label: "Damage assessment", description: "Repair cost estimate will be prepared after inspection.", date: "—", status: "upcoming" },
  { id: "settlement", label: "Claim settled", description: "Approved amount will be transferred to your account.", date: "—", status: "upcoming" },
];

function StepIcon({ status }: { status: TimelineStep["status"] }) {
  if (status === "completed") return <CheckCircle size={20} color="var(--color-success)" aria-hidden="true" />;
  if (status === "current") return <Clock size={20} color="var(--color-warning)" aria-hidden="true" />;
  return <Circle size={20} color="var(--color-text-disabled)" aria-hidden="true" />;
}

export default function Prompt193() {
  const currentStep = claimSteps.find(s => s.status === "current");

  return (
    <div className="p193-root">
      <style>{`
        .p193-root {
          min-height: 100vh;
          background: var(--color-surface);
        }

        .p193-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p193-container {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p193-container {
            padding-inline: var(--space-10);
          }
        }

        .p193-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-block: var(--space-4);
        }

        .p193-back-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-44);
          height: var(--scale-44);
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: var(--radius-lg);
          color: var(--color-text-primary);
          touch-action: manipulation;
          position: relative;
        }

        @media (hover: hover) and (pointer: fine) {
          .p193-back-btn:hover {
            background: var(--color-surface-secondary);
          }
        }

        .p193-back-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
          border-radius: var(--radius-sm);
        }

        .p193-claim-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .p193-claim-meta {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-3);
        }

        .p193-claim-id {
          font-variant-numeric: tabular-nums;
        }

        .p193-vehicle-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .p193-vehicle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-40);
          height: var(--scale-40);
          border-radius: var(--radius-inset-lg);
          background: var(--color-surface-secondary);
          color: var(--color-text-secondary);
          flex-shrink: 0;
        }

        .p193-vehicle-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          min-width: 0;
        }

        .p193-separator-wrap {
          padding-block: var(--space-4);
        }

        .p193-timeline-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .p193-timeline {
          display: flex;
          flex-direction: column;
        }

        .p193-step {
          display: flex;
          gap: var(--space-3);
        }

        .p193-step-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: var(--scale-20);
        }

        .p193-step-line {
          width: var(--scale-2);
          flex: 1;
          min-height: var(--space-4);
          background: var(--color-border);
        }

        .p193-step-line--completed {
          background: var(--color-success);
        }

        .p193-step-content {
          flex: 1;
          padding-bottom: var(--space-5);
          min-width: 0;
          overflow-wrap: break-word;
        }

        .p193-step:last-child .p193-step-content {
          padding-bottom: 0;
        }

        .p193-step-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-2);
          flex-wrap: wrap;
          margin-bottom: var(--space-1);
        }

        .p193-cards-area {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding-bottom: calc(var(--space-8) + env(safe-area-inset-bottom));
        }

        .p193-help-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .p193-help-text {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          min-width: 0;
        }

        @media (max-width: 767px) {
          .p193-help-inner {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>

      {/* Header */}
      <div className="p193-container">
        <div className="p193-header">
          <button className="p193-back-btn" aria-label="Go back" type="button">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="heading-lg" weight="semibold" as="h1">
            Claim status
          </Typography>
        </div>
      </div>

      {/* Cards area */}
      <div className="p193-container">
        <div className="p193-cards-area">

          {/* Main claim card — default variant, padding md (20px) */}
          <Card padding="md">
            {/* Claim information section */}
            <div className="p193-claim-info">
              <div className="p193-claim-meta">
                <div>
                  <Typography variant="label-md" color="muted">
                    Claim ID
                  </Typography>
                  <Typography variant="heading-sm" weight="semibold">
                    <span className="p193-claim-id">CLM-2026-00847</span>
                  </Typography>
                </div>
                <Badge variant="solid" color="orange" size="sm">
                  In progress
                </Badge>
              </div>

              <div className="p193-vehicle-row">
                <div className="p193-vehicle-icon">
                  <Car size={20} aria-hidden="true" />
                </div>
                <div className="p193-vehicle-details">
                  <Typography variant="body-md" weight="medium">
                    Hyundai Creta 2023
                  </Typography>
                  <Typography variant="body-sm" color="muted">
                    KA-01-AB-1234 · Front bumper damage
                  </Typography>
                </div>
              </div>

              {currentStep && (
                <Typography variant="body-sm" color="muted">
                  Current step: {currentStep.label} — {currentStep.date}
                </Typography>
              )}
            </div>

            {/* Structural separator between info and timeline */}
            <div className="p193-separator-wrap">
              <Separator />
            </div>

            {/* Timeline section */}
            <div className="p193-timeline-section">
              <Typography variant="heading-sm" weight="semibold" as="h2">
                Timeline
              </Typography>

              {/* Recessed area for timeline steps — CardInset per card-styles.md */}
              <CardInset>
                <div className="p193-timeline" role="list" aria-label="Claim timeline">
                  {claimSteps.map((step, index) => {
                    const isLast = index === claimSteps.length - 1;
                    const lineCompleted = step.status === "completed";

                    return (
                      <div
                        key={step.id}
                        className="p193-step"
                        role="listitem"
                        aria-current={step.status === "current" ? "step" : undefined}
                      >
                        <div className="p193-step-indicator">
                          <StepIcon status={step.status} />
                          {!isLast && (
                            <div
                              className={`p193-step-line${lineCompleted ? " p193-step-line--completed" : ""}`}
                            />
                          )}
                        </div>

                        <div className="p193-step-content">
                          <div className="p193-step-title-row">
                            <Typography
                              variant="body-md"
                              weight={step.status === "upcoming" ? "regular" : "medium"}
                              color={step.status === "upcoming" ? "muted" : "default"}
                            >
                              {step.label}
                            </Typography>
                            <Typography variant="caption" color="muted">
                              {step.date}
                            </Typography>
                          </div>
                          <Typography variant="body-sm" color="muted">
                            {step.description}
                          </Typography>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardInset>
            </div>
          </Card>

          {/* Help card — demoted variant for secondary supporting content */}
          <Card padding="md" variant="demoted">
            <div className="p193-help-inner">
              <div className="p193-help-text">
                <Typography variant="heading-sm" weight="semibold">
                  Need help with your claim?
                </Typography>
                <Typography variant="body-sm" color="muted">
                  Our claims team is available 24/7.
                </Typography>
              </div>
              <Button
                variant="outline"
                size="md"
                iconLeft={<Headphones size={18} />}
              >
                Contact support
              </Button>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
