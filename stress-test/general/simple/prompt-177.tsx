import { Zap, Shield, PhoneCall, Wrench, Heart, Cog } from "lucide-react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";

const FEATURES = [
  {
    icon: Zap,
    title: "Instant claim settlement",
    description: "Get your claims settled fast — no paperwork, no follow-ups. Just file online and track in real time.",
  },
  {
    icon: Shield,
    title: "Zero depreciation cover",
    description: "Full value of replaced parts covered, regardless of your car's age. No deductions for wear and tear.",
  },
  {
    icon: PhoneCall,
    title: "24/7 roadside assist",
    description: "Flat tyre, dead battery, or breakdown — help reaches you anytime, anywhere across India.",
  },
  {
    icon: Wrench,
    title: "Cashless repairs",
    description: "Drive in, drive out. Repairs at 3,000+ network garages with zero out-of-pocket payments.",
  },
  {
    icon: Heart,
    title: "Personal accident cover",
    description: "Financial protection for you and your passengers in case of accidental injury or disability.",
  },
  {
    icon: Cog,
    title: "Engine protection",
    description: "Covers damage to engine and gearbox from water ingression, oil leakage, and hydrostatic lock.",
  },
];

const ACCENT_COLORS = [
  "var(--color-primary-subtle)",
  "var(--color-success-subtle)",
  "var(--color-warning-subtle)",
  "var(--color-info-subtle)",
  "var(--color-error-subtle)",
  "var(--color-primary-subtle)",
];

const ICON_COLORS = [
  "var(--color-primary)",
  "var(--color-success)",
  "var(--color-warning)",
  "var(--color-info)",
  "var(--color-error)",
  "var(--color-primary)",
];

export default function Prompt177() {
  return (
    <>
      <style>{`
        .p177-page {
          min-height: 100vh;
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
        }

        .p177-header {
          background: var(--grey-white);
          border-bottom: 1px solid var(--color-border-subtle);
          padding: 0 var(--space-4);
          height: var(--scale-56);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .p177-logo {
          height: var(--scale-24);
          width: auto;
        }

        .p177-main {
          flex: 1;
          padding: var(--space-8) 16px;
          padding-bottom: var(--space-20);
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        @media (min-width: 768px) {
          .p177-main {
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        @media (min-width: 1024px) {
          .p177-main {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        .p177-heading-block {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          text-align: center;
        }

        .p177-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3);
        }

        @media (min-width: 768px) {
          .p177-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .p177-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .p177-icon-wrap {
          width: var(--scale-44);
          height: var(--scale-44);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: var(--space-3);
        }

        .p177-card-body {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
      `}</style>

      <div className="p177-page">
        <header className="p177-header">
          <img
            src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
            alt="ACKO"
            className="p177-logo"
          />
        </header>

        <main className="p177-main">
          <div className="p177-heading-block">
            <Typography variant="heading-xl" weight="bold" color="strong" as="h1">
              Why choose ACKO car insurance?
            </Typography>
            <Typography variant="body-md" color="muted">
              Comprehensive coverage built for modern car owners. No paperwork, no agents — just honest protection.
            </Typography>
          </div>

          <div className="p177-grid">
            {FEATURES.map(({ icon: Icon, title, description }, index) => (
              <Card key={title} variant="default" padding="md">
                <div
                  className="p177-icon-wrap"
                  style={{ background: ACCENT_COLORS[index], color: ICON_COLORS[index] }}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="p177-card-body">
                  <Typography variant="heading-md" weight="semibold" color="strong">
                    {title}
                  </Typography>
                  <Typography variant="body-sm" color="muted">
                    {description}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
