import { Skeleton } from "@acko/skeleton";
import { Typography } from "@acko/typography";

// Iteration 6: Skeleton loading state for plan selection

export default function Prompt096() {
  return (
    <div style={{ maxWidth: 520, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)" }}>
      {/* Header skeleton */}
      <div style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <Skeleton width="24px" height="24px" borderRadius="50%" />
        <Skeleton width="120px" height="20px" />
      </div>

      <div style={{ padding: "var(--space-6) var(--space-4)" }}>
        {/* Title */}
        <Skeleton width="200px" height="28px" style={{ marginBottom: "var(--space-2)" }} />
        <Skeleton width="240px" height="16px" style={{ marginBottom: "var(--space-6)" }} />

        {/* IDV selector skeleton */}
        <div style={{ background: "var(--grey-white)", borderRadius: "var(--radius-xl)", padding: "var(--space-4)", border: "1px solid var(--color-border-subtle)", marginBottom: "var(--space-5)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <Skeleton width="180px" height="16px" />
            <Skeleton width="140px" height="12px" />
          </div>
          <Skeleton width="80px" height="34px" borderRadius="var(--radius-lg)" />
        </div>

        {/* Plan cards skeleton */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ background: "var(--grey-white)", borderRadius: "var(--radius-xl)", padding: "var(--space-4)", border: "1px solid var(--color-border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-3)" }}>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                  <Skeleton width="20px" height="20px" borderRadius="50%" />
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                    {i === 1 && <Skeleton width="90px" height="18px" borderRadius="99px" />}
                    <Skeleton width={i === 1 ? "130px" : "110px"} height="18px" />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-end" }}>
                  <Skeleton width="90px" height="24px" />
                  <Skeleton width="36px" height="12px" />
                </div>
              </div>
              {/* Feature pills skeleton */}
              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                {Array.from({ length: i === 0 ? 2 : i === 1 ? 4 : 6 }).map((_, j) => (
                  <Skeleton key={j} width={`${50 + j * 12}px`} height="20px" borderRadius="99px" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar skeleton */}
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--grey-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-4)" }}>
          <div style={{ maxWidth: 520, margin: "0 auto", display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <Skeleton width="120px" height="18px" />
              <Skeleton width="80px" height="14px" />
            </div>
            <Skeleton width="160px" height="48px" borderRadius="var(--radius-full)" />
          </div>
        </div>
      </div>
    </div>
  );
}
