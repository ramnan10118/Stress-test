import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card, CardInset } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Separator } from "@acko/separator";
import { Avatar } from "@acko/avatar";
import {
  ArrowLeft,
  Phone,
  MapPin,
  Clock,
  Star,
  Wrench,
  Navigation,
  X,
} from "lucide-react";

type RequestStatus = "searching" | "assigned" | "en-route" | "arrived";

const statusConfig: Record<
  RequestStatus,
  { label: string; badgeColor: "orange" | "blue" | "green" | "purple"; description: string }
> = {
  searching: {
    label: "Searching",
    badgeColor: "orange",
    description: "Looking for a technician near you...",
  },
  assigned: {
    label: "Assigned",
    badgeColor: "blue",
    description: "A technician has been assigned to your request.",
  },
  "en-route": {
    label: "En route",
    badgeColor: "purple",
    description: "Your technician is on the way.",
  },
  arrived: {
    label: "Arrived",
    badgeColor: "green",
    description: "Your technician has arrived at the location.",
  },
};

export default function Prompt085() {
  const [status] = useState<RequestStatus>("en-route");
  const config = statusConfig[status];

  return (
    <div className="p085-root">
      <style>{`
        .p085-root {
          min-height: 100vh;
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
        }

        .p085-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p085-container {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p085-container {
            padding-inline: var(--space-10);
          }
        }

        .p085-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-block: var(--space-4);
        }

        .p085-back-btn {
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
          .p085-back-btn:hover {
            background: var(--color-surface-secondary);
          }
        }

        .p085-back-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
          border-radius: var(--radius-sm);
        }

        .p085-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding-bottom: var(--space-4);
        }

        .p085-status-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .p085-status-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .p085-eta-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .p085-map-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-inset-lg);
          background: var(--color-surface-secondary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          color: var(--color-text-secondary);
        }

        .p085-tech-row {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .p085-tech-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          min-width: 0;
        }

        .p085-tech-name-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .p085-rating {
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .p085-call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-44);
          height: var(--scale-44);
          border: none;
          background: var(--color-surface-secondary);
          cursor: pointer;
          border-radius: var(--radius-full);
          color: var(--color-primary);
          flex-shrink: 0;
          touch-action: manipulation;
        }

        @media (hover: hover) and (pointer: fine) {
          .p085-call-btn:hover {
            background: var(--color-primary);
            color: var(--color-card-bg);
          }
        }

        .p085-call-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
          border-radius: var(--radius-full);
        }

        .p085-vehicle-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-top: var(--space-3);
        }

        .p085-vehicle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-36);
          height: var(--scale-36);
          border-radius: var(--radius-inset-lg);
          background: var(--color-surface-secondary);
          color: var(--color-text-secondary);
          flex-shrink: 0;
        }

        .p085-request-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .p085-detail-row {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .p085-detail-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-20);
          height: var(--scale-20);
          color: var(--color-text-secondary);
          flex-shrink: 0;
          margin-top: var(--scale-2);
        }

        .p085-footer {
          position: sticky;
          bottom: 0;
          background: var(--color-surface);
          border-top: var(--border-hairline) solid var(--color-border);
          padding-block: var(--space-4);
          padding-bottom: calc(var(--space-4) + env(safe-area-inset-bottom));
        }

        .p085-footer-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p085-footer-inner {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p085-footer-inner {
            padding-inline: var(--space-10);
          }
        }
      `}</style>

      {/* Header */}
      <div className="p085-container">
        <div className="p085-header">
          <button className="p085-back-btn" aria-label="Go back" type="button">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="heading-lg" weight="semibold" as="h1">
            Roadside assistance
          </Typography>
        </div>
      </div>

      {/* Main content */}
      <div className="p085-container">
        <div className="p085-content">

          {/* Status section */}
          <Card padding="md">
            <div className="p085-status-section">
              <div className="p085-status-row">
                <Badge variant="solid" color={config.badgeColor} size="sm">
                  {config.label}
                </Badge>
              </div>
              <Typography variant="heading-md" weight="semibold">
                Help is on the way
              </Typography>
              <Typography variant="body-sm" color="muted">
                {config.description}
              </Typography>
              <div className="p085-eta-row">
                <Clock size={16} color="var(--color-text-secondary)" aria-hidden="true" />
                <Typography variant="body-md" weight="medium">
                  ETA: 12 minutes
                </Typography>
              </div>
            </div>
          </Card>

          {/* Live location placeholder */}
          <Card padding="md">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <Typography variant="heading-sm" weight="semibold" as="h2">
                Live location
              </Typography>
              <CardInset>
                <div className="p085-map-placeholder" role="img" aria-label="Map showing technician location">
                  <Navigation size={24} aria-hidden="true" />
                  <Typography variant="body-sm" color="muted">
                    Live map view
                  </Typography>
                </div>
              </CardInset>
            </div>
          </Card>

          {/* Technician details */}
          <Card padding="md">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <Typography variant="heading-sm" weight="semibold" as="h2">
                Technician details
              </Typography>

              <div className="p085-tech-row">
                <Avatar initials="RK" size="lg" alt="Rajesh Kumar" />
                <div className="p085-tech-info">
                  <div className="p085-tech-name-row">
                    <Typography variant="body-md" weight="medium">
                      Rajesh Kumar
                    </Typography>
                    <div className="p085-rating">
                      <Star size={14} color="var(--color-warning)" fill="var(--color-warning)" aria-hidden="true" />
                      <Typography variant="caption" color="muted">
                        4.8
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="body-sm" color="muted">
                    5 years experience · 320 assists
                  </Typography>
                </div>
                <button
                  className="p085-call-btn"
                  type="button"
                  aria-label="Call Rajesh Kumar"
                >
                  <Phone size={20} aria-hidden="true" />
                </button>
              </div>

              <Separator />

              <div className="p085-vehicle-row">
                <div className="p085-vehicle-icon">
                  <Wrench size={18} aria-hidden="true" />
                </div>
                <div>
                  <Typography variant="body-sm" weight="medium">
                    Service vehicle
                  </Typography>
                  <Typography variant="caption" color="muted">
                    White Mahindra Bolero · KA-05-MN-9876
                  </Typography>
                </div>
              </div>
            </div>
          </Card>

          {/* Request details */}
          <Card padding="md" variant="demoted">
            <div className="p085-request-details">
              <Typography variant="heading-sm" weight="semibold" as="h2">
                Request details
              </Typography>
              <div className="p085-detail-row">
                <div className="p085-detail-icon">
                  <Wrench size={16} aria-hidden="true" />
                </div>
                <div>
                  <Typography variant="body-sm" weight="medium">
                    Flat tyre
                  </Typography>
                  <Typography variant="caption" color="muted">
                    Rear left tyre — requested at 2:45 PM
                  </Typography>
                </div>
              </div>
              <div className="p085-detail-row">
                <div className="p085-detail-icon">
                  <MapPin size={16} aria-hidden="true" />
                </div>
                <div>
                  <Typography variant="body-sm" weight="medium">
                    Pickup location
                  </Typography>
                  <Typography variant="caption" color="muted">
                    Near Silk Board Junction, Bengaluru
                  </Typography>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>

      {/* Sticky footer — cancel request */}
      <div className="p085-footer">
        <div className="p085-footer-inner">
          <Button
            variant="danger"
            size="lg"
            fullWidth
            iconLeft={<X size={18} />}
          >
            Cancel request
          </Button>
        </div>
      </div>
    </div>
  );
}
