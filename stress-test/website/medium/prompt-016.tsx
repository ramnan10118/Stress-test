import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@acko/table";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-success)" }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: "var(--color-text-disabled)" }}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ROWS = [
  { param: "Price", acko: "Starts at ₹2,094/yr", traditional: "₹4,500–₹8,000/yr", ackoWins: true },
  { param: "Claim speed", acko: "Approved in 30 min", traditional: "7–15 business days", ackoWins: true },
  { param: "Paperwork", acko: "Zero — 100% digital", traditional: "Forms, visits, agents", ackoWins: true },
  { param: "Support", acko: "In-app, 24×7", traditional: "Business hours only", ackoWins: true },
  { param: "Digital experience", acko: "App + web, instant", traditional: "Branch or phone only", ackoWins: true },
];

export default function Prompt016() {
  return (
    <section style={{ background: "var(--color-surface)", padding: "var(--space-16) var(--space-4)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <Typography variant="heading-xl" weight="semibold" color="strong" align="center" style={{ margin: "0 0 var(--space-3)", textWrap: "balance" }}>
            ACKO vs traditional insurers
          </Typography>
          <Typography variant="body-lg" color="muted">
            See the difference across the parameters that matter most.
          </Typography>
        </div>

        <Card variant="outline" padding="none" style={{ overflow: "hidden" }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Parameter</TableHead>
                <TableHead>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <img src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg" alt="ACKO" height={18} style={{ height: 18, width: "auto" }} />
                  </div>
                </TableHead>
                <TableHead>Traditional insurer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ROWS.map((row) => (
                <TableRow key={row.param}>
                  <TableCell>
                    <Typography variant="label-lg" weight="semibold" color="default">
                      {row.param}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                      {row.ackoWins && <CheckIcon />}
                      <Typography variant="body-sm" color="default">{row.acko}</Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                      <CrossIcon />
                      <Typography variant="body-sm" color="muted">{row.traditional}</Typography>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Typography variant="label-md" color="muted" align="center" style={{ marginTop: "var(--space-4)" }}>
          Prices and timelines are indicative. Actual values may vary.
        </Typography>
      </div>
    </section>
  );
}
