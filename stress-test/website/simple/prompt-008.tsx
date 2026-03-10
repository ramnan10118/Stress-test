import { useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const NAV_LINKS = ["Car", "Health", "Travel", "Challan"];

export default function Prompt008() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        background: "var(--grey-white)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 var(--space-4)",
          height: "var(--scale-64)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-4)",
        }}
      >
        {/* Logo */}
        <a href="/" aria-label="ACKO home" style={{ display: "flex", flexShrink: 0 }}>
          <img
            src="https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg"
            alt="ACKO"
            height={28}
            style={{ height: "var(--scale-28)", width: "auto" }}
            loading="eager"
          />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                transition: "color var(--duration-fast) ease",
                touchAction: "manipulation",
                minHeight: "var(--scale-44)",
                display: "flex",
                alignItems: "center",
              }}
              className="nav-link"
            >
              <Typography variant="body-md">{link}</Typography>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ flexShrink: 0 }} className="desktop-cta">
          <Button type="button" variant="primary" size="sm" style={{ touchAction: "manipulation" }}>
            Get a quote
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "var(--space-2)",
            color: "var(--color-text-default)",
            touchAction: "manipulation",
            minWidth: "var(--scale-44)",
            minHeight: "var(--scale-44)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          style={{
            background: "var(--grey-white)",
            borderTop: "1px solid var(--color-border-subtle)",
            padding: "var(--space-4)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
          }}
          className="mobile-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "var(--color-text-default)",
                textDecoration: "none",
                padding: "var(--space-3) var(--space-2)",
                borderRadius: "var(--radius-lg)",
                touchAction: "manipulation",
                minHeight: "var(--scale-44)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body-md" weight="semibold">{link}</Typography>
            </a>
          ))}
          <div style={{ paddingTop: "var(--space-3)" }}>
            <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
              Get a quote
            </Button>
          </div>
        </nav>
      )}

      <style>{`
        @media (min-width: 680px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: block !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 679px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .nav-link:hover { color: var(--color-text-strong) !important; }
        }
        @media (hover: hover) and (pointer: fine) {
          .nav-link:hover { color: var(--color-text-strong) !important; }
        }
      `}</style>
    </header>
  );
}
