import { useState, useRef } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";

export default function Prompt039() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [resent, setResent] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    setError("");
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (text.length === 6) {
      setOtp(text.split(""));
      inputRefs.current[5]?.focus();
    }
    e.preventDefault();
  };

  const handleResend = () => {
    setResent(true);
    setOtp(["", "", "", "", "", ""]);
    setError("");
    setTimeout(() => setResent(false), 30000);
    inputRefs.current[0]?.focus();
  };

  const isFilled = otp.every((d) => d.length === 1);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "var(--grey-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 var(--space-4)", height: "var(--scale-56)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-default)", padding: "var(--space-2)", minWidth: "var(--scale-44)", minHeight: "var(--scale-44)", display: "flex", alignItems: "center", touchAction: "manipulation" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <Typography variant="label-lg" weight="semibold" color="strong">Verify OTP</Typography>
          <div style={{ width: "var(--scale-44)" }} />
        </div>
        <div style={{ height: 4, background: "var(--color-border-subtle)" }}>
          <div style={{ height: "100%", width: "75%", background: "var(--color-primary)", borderRadius: "var(--radius-full)" }} />
        </div>
      </header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-8) var(--space-4)" }}>
        <div style={{ width: "100%", maxWidth: 360, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
          {/* Phone icon */}
          <div style={{ width: "var(--scale-64)", height: "var(--scale-64)", borderRadius: "var(--radius-full)", background: "var(--color-primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-primary)" }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 2.84l3-.02a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6.29 6.29l1.69-1.69a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>

          <div>
            <Typography variant="heading-lg" weight="bold" color="strong" style={{ margin: "0 0 var(--space-2)" }}>
              Enter OTP
            </Typography>
            <Typography variant="body-md" color="muted">
              We sent a 6-digit code to <Typography variant="body-md" weight="semibold" color="strong" as="span">+91 98765 43210</Typography>
            </Typography>
          </div>

          {/* OTP inputs */}
          <div
            style={{ display: "flex", gap: "var(--space-2)", justifyContent: "center" }}
            onPaste={handlePaste}
          >
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                autoFocus={i === 0}
                style={{
                  width: "var(--scale-48)",
                  height: "var(--scale-56)",
                  textAlign: "center",
                  borderRadius: "var(--radius-xl)",
                  border: `2px solid ${error ? "var(--color-error)" : digit ? "var(--color-primary)" : "var(--color-border-default)"}`,
                  background: digit ? "var(--color-primary-subtle)" : "var(--grey-white)",
                  color: "var(--color-text-strong)",
                  outline: "none",
                  transition: "border-color var(--duration-fast) ease",
                  touchAction: "manipulation",
                }}
                aria-label={`OTP digit ${i + 1}`}
              />
            ))}
          </div>

          {error && (
            <Typography variant="body-sm" color="error">{error}</Typography>
          )}

          {resent && (
            <Typography variant="body-sm" color="success">OTP resent successfully.</Typography>
          )}

          <Button
            type="button"
            variant="primary"
            size="lg"
            style={{ width: "100%", touchAction: "manipulation" }}
            disabled={!isFilled}
          >
            Verify and continue
          </Button>

          <button
            onClick={handleResend}
            disabled={resent}
            style={{ background: "none", border: "none", cursor: resent ? "default" : "pointer", color: resent ? "var(--color-text-disabled)" : "var(--color-primary)", touchAction: "manipulation" }}
          >
            <Typography variant="body-sm">
              {resent ? "OTP sent — retry in 30 s" : "Resend OTP"}
            </Typography>
          </button>
        </div>
      </main>
    </div>
  );
}
