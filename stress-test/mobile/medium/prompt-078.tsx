import { Skeleton } from "@acko/skeleton";

export default function Prompt078() {
  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      {/* Status bar skeleton */}
      <div style={{ height: 44, background: "var(--grey-white)" }} />

      {/* Header skeleton */}
      <div style={{ background: "var(--grey-white)", padding: "var(--space-3) var(--space-4) var(--space-4)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <Skeleton width="80px" height="14px" />
            <Skeleton width="140px" height="24px" />
          </div>
          <Skeleton width="40px" height="40px" borderRadius="50%" />
        </div>
        {/* Coverage pill skeleton */}
        <div style={{ background: "var(--color-border-subtle)", borderRadius: "var(--radius-xl)", padding: "var(--space-3) var(--space-4)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <Skeleton width="80px" height="12px" />
            <Skeleton width="120px" height="18px" />
          </div>
          <Skeleton width="60px" height="22px" borderRadius="99px" />
        </div>
      </div>

      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Quick actions skeleton */}
        <div style={{ background: "var(--grey-white)", borderRadius: "var(--radius-xl)", padding: "var(--space-4)", border: "1px solid var(--color-border-subtle)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-2)" }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
                <Skeleton width="36px" height="36px" borderRadius="50%" />
                <Skeleton width="40px" height="12px" />
              </div>
            ))}
          </div>
        </div>

        {/* Section heading */}
        <Skeleton width="100px" height="18px" />

        {/* Policy cards skeleton */}
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ background: "var(--grey-white)", borderRadius: "var(--radius-xl)", padding: "var(--space-4)", border: "1px solid var(--color-border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
              <Skeleton width="44px" height="44px" borderRadius="var(--radius-xl)" />
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <Skeleton width="120px" height="16px" />
                <Skeleton width="90px" height="12px" />
                <Skeleton width="100px" height="12px" />
              </div>
            </div>
            <Skeleton width="50px" height="22px" borderRadius="99px" />
          </div>
        ))}

        {/* Upsell card skeleton */}
        <div style={{ background: "var(--grey-white)", borderRadius: "var(--radius-xl)", padding: "var(--space-4)", border: "1px solid var(--color-border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <Skeleton width="100px" height="16px" />
            <Skeleton width="150px" height="12px" />
          </div>
          <Skeleton width="72px" height="36px" borderRadius="var(--radius-full)" />
        </div>
      </div>

      {/* Bottom nav skeleton */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", display: "flex", padding: "var(--space-2) 0" }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
            <Skeleton width="24px" height="24px" borderRadius="50%" />
            <Skeleton width="36px" height="10px" />
          </div>
        ))}
      </div>
    </div>
  );
}
