import { useState, useEffect, useRef } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { Card, CardContent } from "@acko/card";
import { Badge } from "@acko/badge";

// Iteration 10: Full animations — entrance, selection transition, price counter

const PLANS = [
  { id: "tp", name: "Third Party", price: 2094, badge: null, desc: "Mandatory cover for all car owners." },
  { id: "comp", name: "Comprehensive", price: 4599, badge: "Recommended", desc: "Your car + third party. Best for most." },
  { id: "comp_plus", name: "Comprehensive+", price: 6999, badge: null, desc: "All Comprehensive + zero dep + more." },
];

function useCountUp(target: number, duration = 400) {
  const [value, setValue] = useState(target);
  const prevRef = useRef(target);

  useEffect(() => {
    const start = prevRef.current;
    const diff = target - start;
    if (diff === 0) return;
    const startTime = performance.now();
    const raf = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(raf);
      else { setValue(target); prevRef.current = target; }
    };
    requestAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export default function Prompt100() {
  const [selected, setSelected] = useState("comp");
  const [mounted, setMounted] = useState(false);

  const plan = PLANS.find((p) => p.id === selected)!;
  const animatedPrice = useCountUp(plan.price, 350);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", minHeight: "100vh", background: "var(--color-surface)", padding: "var(--space-6) var(--space-4) 110px" }}>
      {/* Header — slides in from top */}
      <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(-12px)", transition: "opacity 0.3s ease, transform 0.3s ease", marginBottom: "var(--space-6)" }}>
        <Typography variant="heading-md" weight="bold" color="strong" style={{ display: "block", marginBottom: "var(--space-1)" }}>
          Choose a plan
        </Typography>
        <Typography variant="body-sm" color="muted">
          Maruti Swift ZXI+ · MH 01 AB 1234
        </Typography>
      </div>

      {/* Plan cards — staggered entrance */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {PLANS.map((p, i) => {
          const isSelected = selected === p.id;
          return (
            <div
              key={p.id}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.35s ease ${i * 0.07 + 0.1}s, transform 0.35s ease ${i * 0.07 + 0.1}s`,
              }}
            >
              <Card
                variant={isSelected ? "elevated" : "default"}
                padding="none"
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelected(p.id)}
                onKeyDown={(e) => e.key === "Enter" && setSelected(p.id)}
                style={{
                  cursor: "pointer",
                  outline: isSelected ? "2px solid var(--color-primary)" : "none",
                  outlineOffset: 2,
                  overflow: "hidden",
                  touchAction: "manipulation",
                  transition: "box-shadow 0.2s ease, outline 0.15s ease",
                }}
              >
                {/* Highlight bar */}
                <div style={{
                  height: 3,
                  background: isSelected ? "var(--color-primary)" : "transparent",
                  transition: "background 0.2s ease",
                }} />

                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-3)" }}>
                    <div style={{ display: "flex", gap: "var(--space-3)" }}>
                      {/* Animated radio dot */}
                      <div style={{
                        width: 20, height: 20,
                        borderRadius: "var(--radius-full)",
                        border: `2px solid ${isSelected ? "var(--color-primary)" : "var(--color-border-default)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: 2,
                        transition: "border-color 0.2s ease",
                      }}>
                        <div style={{
                          width: 11, height: 11,
                          borderRadius: "var(--radius-full)",
                          background: "var(--color-primary)",
                          transform: isSelected ? "scale(1)" : "scale(0)",
                          transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        }} />
                      </div>
                      <div>
                        <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center", marginBottom: "var(--space-1)" }}>
                          <Typography variant="label-lg" weight="semibold" color="strong">{p.name}</Typography>
                          {p.badge && (
                            <div style={{ transform: "scale(1)", transition: "transform 0.2s ease" }}>
                              <Badge color="blue" size="sm">{p.badge}</Badge>
                            </div>
                          )}
                        </div>
                        <Typography variant="body-sm" color="muted" style={{ transition: "color 0.2s ease" }}>{p.desc}</Typography>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <Typography variant="heading-sm" weight="bold" color={isSelected ? "primary" : "strong"} style={{
                        fontVariantNumeric: "tabular-nums",
                        transition: "color 0.2s ease",
                      }}>
                        ₹{p.price.toLocaleString("en-IN")}
                      </Typography>
                      <Typography variant="caption" color="muted">/year</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Sticky bottom — animated price counter */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "var(--grey-white)",
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "var(--space-4)",
        transform: mounted ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.35s",
      }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
            <div>
              <Typography variant="label-lg" weight="semibold" color="strong" style={{ display: "block" }}>{plan.name}</Typography>
              <Typography variant="caption" color="muted">1-year policy · incl. GST</Typography>
            </div>
            <Typography variant="heading-md" weight="bold" color="primary" style={{ fontVariantNumeric: "tabular-nums" }}>
              ₹{animatedPrice.toLocaleString("en-IN")}/yr
            </Typography>
          </div>
          <Button type="button" variant="primary" size="lg" style={{ width: "100%", touchAction: "manipulation" }}>
            Continue with {plan.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
