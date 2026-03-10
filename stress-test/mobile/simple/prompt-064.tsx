import { Typography } from "@acko/typography";
import { Badge } from "@acko/badge";

export default function Prompt064() {
  return (
    <div style={{ maxWidth: 390, margin: "0 auto", background: "var(--color-primary)" }}>
      {/* Status bar */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--space-5)" }}>
        <Typography variant="label-sm" weight="semibold" color="default" style={{ fontVariantNumeric: "tabular-nums" }}>9:41</Typography>
        <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
          {/* Signal bars */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
            {[8, 11, 14, 17].map((h, i) => <div key={i} style={{ width: 3, height: h, background: i < 3 ? "var(--grey-white)" : "rgba(255,255,255,0.4)", borderRadius: 2 }} />)}
          </div>
          {/* WiFi */}
          <svg width="16" height="12" viewBox="0 0 24 18" fill="none" aria-hidden="true">
            <path d="M1 6.5C5.5 2.5 18.5 2.5 23 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <path d="M4.5 10.5C7.5 7.5 16.5 7.5 19.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M8 14.5C10 12.5 14 12.5 16 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="17.5" r="1.5" fill="white" />
          </svg>
          {/* Battery */}
          <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
            <div style={{ width: 22, height: 12, border: "1.5px solid white", borderRadius: 3, padding: 2, display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1, height: "100%", background: "white", borderRadius: 1 }} />
            </div>
            <div style={{ width: 2, height: 5, background: "white", borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* Header content */}
      <div style={{ padding: "var(--space-3) var(--space-4) var(--space-5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
          <div>
            <Typography variant="label-sm" color="muted" style={{ display: "block" }}>Good morning</Typography>
            <Typography variant="heading-lg" weight="bold" color="default" style={{ display: "block", textWrap: "balance" }}>Arjun Mehta</Typography>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <button style={{ background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation" }} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            </button>
            <button style={{ background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", width: "var(--scale-40)", height: "var(--scale-40)", borderRadius: "var(--radius-full)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", touchAction: "manipulation" }} aria-label="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              <div style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: "var(--radius-full)", background: "var(--color-error)", border: "1.5px solid var(--color-primary)" }} />
            </button>
          </div>
        </div>

        {/* Coverage summary pill */}
        <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "var(--radius-xl)", padding: "var(--space-3) var(--space-4)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <Typography variant="caption" color="muted" style={{ display: "block" }}>Active coverage</Typography>
            <Typography variant="label-lg" weight="semibold" color="default">2 policies</Typography>
          </div>
          <Badge color="white" size="sm">All clear</Badge>
        </div>
      </div>
    </div>
  );
}
