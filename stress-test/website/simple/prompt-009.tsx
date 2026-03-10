import { Typography } from "@acko/typography";
import { Separator } from "@acko/separator";

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 2.84l3-.02a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6.29 6.29l1.69-1.69a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const NAV_COLS = [
  {
    heading: "Products",
    links: ["Car Insurance", "Bike Insurance", "Health Insurance", "Travel Insurance"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    heading: "Support",
    links: ["Help Centre", "Claim Process", "Grievance Redressal", "Contact Us"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "IRDAI Disclosure"],
  },
];

export default function Prompt009() {
  return (
    <footer style={{ background: "var(--grey-700)", color: "var(--grey-400)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "var(--space-12) var(--space-4)",
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-8)",
            marginBottom: "var(--space-10)",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <img
              src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20Primary%20Dark%20BG.svg"
              alt="ACKO"
              height={48}
              style={{ height: "var(--scale-48)", width: "auto", marginBottom: "var(--space-3)" }}
              loading="lazy"
            />
            <Typography variant="body-sm" color="muted" style={{ textWrap: "pretty", maxWidth: 260 }}>
              India's leading digital-first insurance company. IRDAI Licence No. 157.
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginTop: "var(--space-4)" }}>
              <PhoneIcon />
              <Typography variant="body-sm" color="default">
                1800-266-2256
              </Typography>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <Typography
                variant="label-md"
                weight="semibold"
                color="strong"
                style={{ display: "block", marginBottom: "var(--space-3)" }}
              >
                {col.heading}
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                }}
              >
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: "var(--grey-400)",
                        textDecoration: "none",
                        transition: "color var(--duration-fast) ease",
                        touchAction: "manipulation",
                        display: "block",
                        minHeight: "var(--scale-44)",
                        display: "flex",
                        alignItems: "center",
                      }}
                      className="footer-link"
                    >
                      <Typography variant="body-sm">{link}</Typography>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--grey-600)", paddingTop: "var(--space-6)" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="muted">
              © 2026 Acko General Insurance Ltd. CIN: U66000MH2016PLC271730. All rights reserved.
            </Typography>
            <Typography variant="caption" color="muted">
              IRDAI Licence No. 157 · Registered Office: 36/5, Hustlehub One East, Somasandrapalya, Sector-2, HSR Layout, Bengaluru — 560102
            </Typography>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .footer-grid { grid-template-columns: 1.5fr repeat(4, 1fr) !important; }
        }
        @media (hover: hover) and (pointer: fine) {
          .footer-link:hover { color: var(--grey-white) !important; }
        }
      `}</style>
    </footer>
  );
}
