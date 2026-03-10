import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { Button } from "@acko/button";
import { Separator } from "@acko/separator";
import { Avatar } from "@acko/avatar";
import { ArrowLeft, Pencil, Plus } from "lucide-react";

interface FamilyMember {
  id: string;
  name: string;
  age: number;
  relation: "Self" | "Spouse" | "Child";
  initials: string;
  badgeColor: "purple" | "blue" | "green" | "orange";
}

const initialMembers: FamilyMember[] = [
  { id: "self", name: "Rahul Sharma", age: 34, relation: "Self", initials: "RS", badgeColor: "purple" },
  { id: "spouse", name: "Priya Sharma", age: 31, relation: "Spouse", initials: "PS", badgeColor: "blue" },
  { id: "child-1", name: "Aarav Sharma", age: 8, relation: "Child", initials: "AS", badgeColor: "green" },
  { id: "child-2", name: "Ananya Sharma", age: 5, relation: "Child", initials: "AS", badgeColor: "orange" },
];

export default function Prompt192() {
  const [members] = useState<FamilyMember[]>(initialMembers);

  return (
    <div className="p192-root">
      <style>{`
        .p192-root {
          min-height: 100vh;
          background: var(--color-surface);
        }

        .p192-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p192-container {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p192-container {
            padding-inline: var(--space-10);
          }
        }

        .p192-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-block: var(--space-4);
        }

        .p192-back-btn {
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
        }

        @media (hover: hover) and (pointer: fine) {
          .p192-back-btn:hover {
            background: var(--color-surface-secondary);
          }
        }

        .p192-back-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
        }

        .p192-intro {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          padding-bottom: var(--space-8);
        }

        .p192-member-row {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding-block: var(--space-4);
        }

        .p192-member-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .p192-name-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .p192-edit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--scale-44);
          height: var(--scale-44);
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: var(--radius-lg);
          color: var(--color-text-secondary);
          flex-shrink: 0;
          touch-action: manipulation;
        }

        @media (hover: hover) and (pointer: fine) {
          .p192-edit-btn:hover {
            background: var(--color-surface-secondary);
            color: var(--color-primary);
          }
        }

        .p192-edit-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: var(--scale-2);
        }

        .p192-add-section {
          padding-top: var(--space-6);
          padding-bottom: var(--space-8);
        }

        .p192-footer {
          position: sticky;
          bottom: 0;
          background: var(--color-surface);
          padding-block: var(--space-4);
          padding-bottom: calc(var(--space-4) + env(safe-area-inset-bottom));
          border-top: var(--border-hairline) solid var(--color-border);
        }

        .p192-footer-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        @media (min-width: 768px) {
          .p192-footer-inner {
            padding-inline: var(--space-8);
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        @media (min-width: 1024px) {
          .p192-footer-inner {
            padding-inline: var(--space-10);
          }
        }

        .p192-footer-summary {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
        }

        @media (min-width: 768px) {
          .p192-footer .p192-continue-btn {
            width: auto;
            min-width: 200px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="p192-container">
        <div className="p192-header">
          <button className="p192-back-btn" aria-label="Go back" type="button">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <Typography variant="heading-lg" weight="semibold" as="h1">
            Add family members
          </Typography>
        </div>
      </div>

      {/* Intro */}
      <div className="p192-container">
        <div className="p192-intro">
          <Typography variant="body-md" color="muted">
            Add the family members you'd like to cover under this health insurance plan.
            You can edit details anytime before payment.
          </Typography>
        </div>
      </div>

      {/* Members Card */}
      <div className="p192-container">
        <Card padding="md">
          {members.map((member, index) => (
            <div key={member.id}>
              <div className="p192-member-row">
                <Avatar initials={member.initials} size="md" alt={member.name} />

                <div className="p192-member-info">
                  <div className="p192-name-row">
                    <Typography variant="heading-sm" weight="semibold" truncate>
                      {member.name}
                    </Typography>
                    <Badge
                      variant="outline"
                      color={member.badgeColor}
                      size="sm"
                    >
                      {member.relation}
                    </Badge>
                  </div>
                  <Typography variant="body-sm" color="muted">
                    {member.age} years old
                  </Typography>
                </div>

                <button
                  className="p192-edit-btn"
                  type="button"
                  aria-label={`Edit ${member.name}`}
                >
                  <Pencil size={18} aria-hidden="true" />
                </button>
              </div>

              {index < members.length - 1 && <Separator />}
            </div>
          ))}
        </Card>
      </div>

      {/* Add member */}
      <div className="p192-container">
        <div className="p192-add-section">
          <Button
            variant="outline"
            size="md"
            iconLeft={<Plus size={18} />}
            fullWidth
          >
            Add another member
          </Button>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="p192-footer">
        <div className="p192-footer-inner">
          <div className="p192-footer-summary">
            <Typography variant="body-sm" color="muted">
              Covering
            </Typography>
            <Typography variant="heading-md" weight="semibold">
              {members.length} members
            </Typography>
          </div>
          <Button variant="primary" size="lg" fullWidth className="p192-continue-btn">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
