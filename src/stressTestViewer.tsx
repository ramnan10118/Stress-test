import { useState, lazy, Suspense } from "react";

// ── Prompt metadata ───────────────────────────────────────────────────
const prompts = [
  // Website — Simple
  { number: "001", category: "Website", complexity: "Simple", label: "Car insurance hero" },
  { number: "002", category: "Website", complexity: "Simple", label: "Health insurance hero" },
  { number: "003", category: "Website", complexity: "Simple", label: "Travel insurance hero" },
  { number: "004", category: "Website", complexity: "Simple", label: "Roadside assistance hero" },
  { number: "005", category: "Website", complexity: "Simple", label: "Challan check hero" },
  { number: "006", category: "Website", complexity: "Simple", label: "Trust bar" },
  { number: "007", category: "Website", complexity: "Simple", label: "Car insurance features section" },
  { number: "008", category: "Website", complexity: "Simple", label: "Header" },
  { number: "009", category: "Website", complexity: "Simple", label: "Footer" },
  { number: "010", category: "Website", complexity: "Simple", label: "Renewal reminder banner" },
  // Website — Medium
  { number: "011", category: "Website", complexity: "Medium", label: "Car insurance landing page" },
  { number: "012", category: "Website", complexity: "Medium", label: "Health insurance landing page" },
  { number: "013", category: "Website", complexity: "Medium", label: "Travel insurance landing page" },
  { number: "014", category: "Website", complexity: "Medium", label: "Roadside assistance landing page" },
  { number: "015", category: "Website", complexity: "Medium", label: "Challan check landing page" },
  { number: "016", category: "Website", complexity: "Medium", label: "ACKO vs traditional insurers" },
  { number: "017", category: "Website", complexity: "Medium", label: "Health insurance plans section" },
  { number: "018", category: "Website", complexity: "Medium", label: "Myth busters section" },
  { number: "019", category: "Website", complexity: "Medium", label: "Travel insurance coverage section" },
  { number: "020", category: "Website", complexity: "Medium", label: "Testimonials section" },
  // Website — Complex
  { number: "021", category: "Website", complexity: "Complex", label: "Full car insurance landing page" },
  { number: "022", category: "Website", complexity: "Complex", label: "Full health insurance landing page" },
  { number: "023", category: "Website", complexity: "Complex", label: "Full travel insurance landing page" },
  { number: "024", category: "Website", complexity: "Complex", label: "Full roadside assistance landing page" },
  { number: "025", category: "Website", complexity: "Complex", label: "Full challan check page" },
  { number: "026", category: "Website", complexity: "Complex", label: "Car insurance with coverage calculator" },
  { number: "027", category: "Website", complexity: "Complex", label: "Health insurance with family selector" },
  { number: "028", category: "Website", complexity: "Complex", label: "Car insurance claims page" },
  { number: "029", category: "Website", complexity: "Complex", label: "Travel insurance trip builder" },
  { number: "030", category: "Website", complexity: "Complex", label: "Car insurance renewal page" },
  // Purchase Journey — Simple
  { number: "031", category: "Purchase Journey", complexity: "Simple", label: "Vehicle number entry" },
  { number: "032", category: "Purchase Journey", complexity: "Simple", label: "Vehicle details confirmation" },
  { number: "033", category: "Purchase Journey", complexity: "Simple", label: "Plan selection" },
  { number: "034", category: "Purchase Journey", complexity: "Simple", label: "Add-ons selection" },
  { number: "035", category: "Purchase Journey", complexity: "Simple", label: "Payment screen" },
  { number: "036", category: "Purchase Journey", complexity: "Simple", label: "Policy confirmation" },
  { number: "037", category: "Purchase Journey", complexity: "Simple", label: "Owner details form" },
  { number: "038", category: "Purchase Journey", complexity: "Simple", label: "Previous policy details" },
  { number: "039", category: "Purchase Journey", complexity: "Simple", label: "OTP verification" },
  { number: "040", category: "Purchase Journey", complexity: "Simple", label: "Premium display" },
  // Purchase Journey — Medium
  { number: "041", category: "Purchase Journey", complexity: "Medium", label: "Plan selection with comparison" },
  { number: "042", category: "Purchase Journey", complexity: "Medium", label: "Add-ons with running total" },
  { number: "043", category: "Purchase Journey", complexity: "Medium", label: "Payment with trust badges" },
  { number: "044", category: "Purchase Journey", complexity: "Medium", label: "Owner details with validation" },
  { number: "045", category: "Purchase Journey", complexity: "Medium", label: "Plan selection with help" },
  { number: "046", category: "Purchase Journey", complexity: "Medium", label: "Policy confirmation with next steps" },
  { number: "047", category: "Purchase Journey", complexity: "Medium", label: "Vehicle details editable" },
  { number: "048", category: "Purchase Journey", complexity: "Medium", label: "Premium breakdown" },
  { number: "049", category: "Purchase Journey", complexity: "Medium", label: "Payment failure screen" },
  { number: "050", category: "Purchase Journey", complexity: "Medium", label: "Journey progress stepper" },
  // Purchase Journey — Complex
  { number: "051", category: "Purchase Journey", complexity: "Complex", label: "Full plan selection screen" },
  { number: "052", category: "Purchase Journey", complexity: "Complex", label: "Full payment screen" },
  { number: "053", category: "Purchase Journey", complexity: "Complex", label: "Full policy confirmation" },
  { number: "054", category: "Purchase Journey", complexity: "Complex", label: "Full add-ons screen" },
  { number: "055", category: "Purchase Journey", complexity: "Complex", label: "Full car insurance details form" },
  { number: "056", category: "Purchase Journey", complexity: "Complex", label: "Plan selection all states" },
  { number: "057", category: "Purchase Journey", complexity: "Complex", label: "Payment all states" },
  { number: "058", category: "Purchase Journey", complexity: "Complex", label: "Health insurance family plan" },
  { number: "059", category: "Purchase Journey", complexity: "Complex", label: "Travel insurance purchase" },
  { number: "060", category: "Purchase Journey", complexity: "Complex", label: "Car insurance renewal" },
  // Mobile — Simple
  { number: "061", category: "Mobile", complexity: "Simple", label: "Home dashboard" },
  { number: "062", category: "Mobile", complexity: "Simple", label: "Policy details" },
  { number: "063", category: "Mobile", complexity: "Simple", label: "Value added services" },
  { number: "064", category: "Mobile", complexity: "Simple", label: "Home screen header" },
  { number: "065", category: "Mobile", complexity: "Simple", label: "Bottom navigation" },
  { number: "066", category: "Mobile", complexity: "Simple", label: "Active policy card" },
  { number: "067", category: "Mobile", complexity: "Simple", label: "Claim status card" },
  { number: "068", category: "Mobile", complexity: "Simple", label: "Empty state — no policies" },
  { number: "069", category: "Mobile", complexity: "Simple", label: "Notifications screen" },
  { number: "070", category: "Mobile", complexity: "Simple", label: "Account screen" },
  // Mobile — Medium
  { number: "071", category: "Mobile", complexity: "Medium", label: "Home dashboard with banner" },
  { number: "072", category: "Mobile", complexity: "Medium", label: "Policy details with accordion" },
  { number: "073", category: "Mobile", complexity: "Medium", label: "Value added services screen" },
  { number: "074", category: "Mobile", complexity: "Medium", label: "Claims screen" },
  { number: "075", category: "Mobile", complexity: "Medium", label: "Renewal screen" },
  { number: "076", category: "Mobile", complexity: "Medium", label: "Roadside assistance request" },
  { number: "077", category: "Mobile", complexity: "Medium", label: "Challan check screen" },
  { number: "078", category: "Mobile", complexity: "Medium", label: "Home screen skeleton state" },
  { number: "079", category: "Mobile", complexity: "Medium", label: "Policy documents screen" },
  { number: "080", category: "Mobile", complexity: "Medium", label: "Profile edit screen" },
  // Mobile — Complex
  { number: "081", category: "Mobile", complexity: "Complex", label: "Full home screen" },
  { number: "082", category: "Mobile", complexity: "Complex", label: "Full policy details" },
  { number: "083", category: "Mobile", complexity: "Complex", label: "Full claims flow" },
  { number: "084", category: "Mobile", complexity: "Complex", label: "Home screen all states" },
  { number: "085", category: "Mobile", complexity: "Complex", label: "Roadside assistance tracking" },
  { number: "086", category: "Mobile", complexity: "Complex", label: "Full renewal flow" },
  { number: "087", category: "Mobile", complexity: "Complex", label: "Full value added services" },
  { number: "088", category: "Mobile", complexity: "Complex", label: "Claim status screen" },
  { number: "089", category: "Mobile", complexity: "Complex", label: "Garage locator" },
  { number: "090", category: "Mobile", complexity: "Complex", label: "Onboarding screen" },
  // Iteration
  { number: "091", category: "Iteration", complexity: "Iteration 1", label: "Plan selection — base" },
  { number: "092", category: "Iteration", complexity: "Iteration 2", label: "Plan selection — recommended badge" },
  { number: "093", category: "Iteration", complexity: "Iteration 3", label: "Plan selection — comparison table" },
  { number: "094", category: "Iteration", complexity: "Iteration 4", label: "Plan selection — sticky bar" },
  { number: "095", category: "Iteration", complexity: "Iteration 5", label: "Plan selection — empty state" },
  { number: "096", category: "Iteration", complexity: "Iteration 6", label: "Plan selection — skeleton" },
  { number: "097", category: "Iteration", complexity: "Iteration 7", label: "Plan selection — error state" },
  { number: "098", category: "Iteration", complexity: "Iteration 8", label: "Plan selection — responsive" },
  { number: "099", category: "Iteration", complexity: "Iteration 9", label: "Plan selection — tooltips" },
  { number: "100", category: "Iteration", complexity: "Iteration 10", label: "Plan selection — animations" },
  { number: "101", category: "Iteration", complexity: "Iteration 1", label: "Home dashboard — base" },
  { number: "102", category: "Iteration", complexity: "Iteration 2", label: "Home dashboard — services" },
  { number: "103", category: "Iteration", complexity: "Iteration 3", label: "Home dashboard — renewal banner" },
  { number: "104", category: "Iteration", complexity: "Iteration 4", label: "Home dashboard — claim card" },
  { number: "105", category: "Iteration", complexity: "Iteration 5", label: "Home dashboard — skeleton" },
  { number: "106", category: "Iteration", complexity: "Iteration 6", label: "Home dashboard — empty state" },
  { number: "107", category: "Iteration", complexity: "Iteration 7", label: "Home dashboard — promo banner" },
  { number: "108", category: "Iteration", complexity: "Iteration 8", label: "Home dashboard — notification badge" },
  { number: "109", category: "Iteration", complexity: "Iteration 9", label: "Home dashboard — greeting" },
  { number: "110", category: "Iteration", complexity: "Iteration 10", label: "Home dashboard — animations" },
  // Dark Mode
  { number: "111", category: "Dark Mode", complexity: "Simple", label: "Car insurance hero dark" },
  { number: "112", category: "Dark Mode", complexity: "Simple", label: "Mobile home dashboard dark" },
  { number: "113", category: "Dark Mode", complexity: "Simple", label: "Plan selection dark" },
  { number: "114", category: "Dark Mode", complexity: "Simple", label: "Payment screen dark" },
  { number: "115", category: "Dark Mode", complexity: "Simple", label: "Policy confirmation dark" },
  { number: "116", category: "Dark Mode", complexity: "Medium", label: "Car insurance landing dark" },
  { number: "117", category: "Dark Mode", complexity: "Medium", label: "Policy details dark" },
  { number: "118", category: "Dark Mode", complexity: "Medium", label: "Add-ons screen dark" },
  { number: "119", category: "Dark Mode", complexity: "Medium", label: "Challan check dark" },
  { number: "120", category: "Dark Mode", complexity: "Medium", label: "Claims screen dark" },
  { number: "121", category: "Dark Mode", complexity: "Complex", label: "Full car insurance landing dark" },
  { number: "122", category: "Dark Mode", complexity: "Complex", label: "Full mobile home screen dark" },
  { number: "123", category: "Dark Mode", complexity: "Complex", label: "Light and dark side by side" },
  { number: "124", category: "Dark Mode", complexity: "Complex", label: "Payment screen all states dark" },
  { number: "125", category: "Dark Mode", complexity: "Complex", label: "Full travel insurance landing dark" },
  { number: "126", category: "Dark Mode", complexity: "Targeted", label: "Dark mode — foundation colours only" },
  { number: "127", category: "Dark Mode", complexity: "Targeted", label: "Dark mode — CSS token variables only" },
  { number: "128", category: "Dark Mode", complexity: "Targeted", label: "Dark mode — semantic tokens only" },
  { number: "129", category: "Dark Mode", complexity: "Targeted", label: "Dark mode — no layout shift" },
  { number: "130", category: "Dark Mode", complexity: "Targeted", label: "Dark mode — all interactive states" },
  // Copy Heavy
  { number: "131", category: "Copy-Heavy", complexity: "Simple", label: "Policy terms section" },
  { number: "132", category: "Copy-Heavy", complexity: "Simple", label: "Health exclusions section" },
  { number: "133", category: "Copy-Heavy", complexity: "Simple", label: "Travel coverage details" },
  { number: "134", category: "Copy-Heavy", complexity: "Medium", label: "Car insurance FAQ" },
  { number: "135", category: "Copy-Heavy", complexity: "Medium", label: "Claims process explainer" },
  { number: "136", category: "Copy-Heavy", complexity: "Medium", label: "Health insurance plan details" },
  { number: "137", category: "Copy-Heavy", complexity: "Medium", label: "Policy document summary" },
  { number: "138", category: "Copy-Heavy", complexity: "Medium", label: "Travel covered vs not covered" },
  { number: "139", category: "Copy-Heavy", complexity: "Complex", label: "Full car insurance policy details" },
  { number: "140", category: "Copy-Heavy", complexity: "Complex", label: "Full health insurance comparison" },
  { number: "141", category: "Copy-Heavy", complexity: "Complex", label: "Terms and conditions page" },
  { number: "142", category: "Copy-Heavy", complexity: "Targeted", label: "Benefits section — 40 words each" },
  { number: "143", category: "Copy-Heavy", complexity: "Targeted", label: "Dense info — typography tokens only" },
  { number: "144", category: "Copy-Heavy", complexity: "Targeted", label: "Policy summary — table tokens only" },
  { number: "145", category: "Copy-Heavy", complexity: "Targeted", label: "Claims FAQ — Accordion component" },
  // Broken
  { number: "146", category: "Broken", complexity: "Vague", label: "Build an insurance screen" },
  { number: "147", category: "Broken", complexity: "Vague", label: "Build something for ACKO" },
  { number: "148", category: "Broken", complexity: "Vague", label: "Build a form" },
  { number: "149", category: "Broken", complexity: "Vague", label: "Build a mobile screen for ACKO" },
  { number: "150", category: "Broken", complexity: "Vague", label: "Build a page" },
  { number: "151", category: "Broken", complexity: "Incomplete", label: "Plan selection screen with..." },
  { number: "152", category: "Broken", complexity: "Incomplete", label: "Payment screen showing the..." },
  { number: "153", category: "Broken", complexity: "Incomplete", label: "Home dashboard with header and..." },
  { number: "154", category: "Broken", complexity: "Incomplete", label: "Travel insurance page with..." },
  { number: "155", category: "Broken", complexity: "Incomplete", label: "Challan check screen with..." },
  { number: "156", category: "Broken", complexity: "Missing context", label: "Build the next screen" },
  { number: "157", category: "Broken", complexity: "Missing context", label: "Add an error state" },
  { number: "158", category: "Broken", complexity: "Missing context", label: "Make it dark mode" },
  { number: "159", category: "Broken", complexity: "Missing context", label: "Build what we discussed" },
  { number: "160", category: "Broken", complexity: "Missing context", label: "Update layout to be compact" },
  // Contradiction
  { number: "161", category: "Contradiction", complexity: "Simple", label: "Minimal hero — but everything included" },
  { number: "162", category: "Contradiction", complexity: "Simple", label: "Simple plan screen — but all details" },
  { number: "163", category: "Contradiction", complexity: "Simple", label: "Clean home screen — but everything" },
  { number: "164", category: "Contradiction", complexity: "Medium", label: "Fast payment — but 8 methods" },
  { number: "165", category: "Contradiction", complexity: "Medium", label: "Calm claims — but red urgent UI" },
  { number: "166", category: "Contradiction", complexity: "Medium", label: "Follow design system — but custom" },
  { number: "167", category: "Contradiction", complexity: "Medium", label: "Mobile first — but desktop only" },
  { number: "168", category: "Contradiction", complexity: "Medium", label: "Easy to scan — but unstructured" },
  { number: "169", category: "Contradiction", complexity: "Complex", label: "Fast loading — but 20 sections" },
  { number: "170", category: "Contradiction", complexity: "Complex", label: "Trustworthy — but cartoon neon" },
  { number: "171", category: "Contradiction", complexity: "Complex", label: "Accessible — but no focus states" },
  { number: "172", category: "Contradiction", complexity: "Targeted", label: "No package — but follow system" },
  { number: "173", category: "Contradiction", complexity: "Targeted", label: "Foundation colours — but all bright" },
  { number: "174", category: "Contradiction", complexity: "Targeted", label: "No inline styles — but pixel dims" },
  { number: "175", category: "Contradiction", complexity: "Targeted", label: "Production ready — but TODOs" },
  // General — Simple
  { number: "176", category: "General", complexity: "Simple", label: "Car insurance renewal reminder" },
  { number: "177", category: "General", complexity: "Simple", label: "Health insurance benefits summary" },
  { number: "178", category: "General", complexity: "Simple", label: "Claim status tracker" },
  { number: "179", category: "General", complexity: "Simple", label: "Vehicle details" },
  { number: "180", category: "General", complexity: "Simple", label: "Payment success receipt" },
  { number: "181", category: "General", complexity: "Simple", label: "Quick quote result" },
  // Detailed
  { number: "184", category: "Detailed", complexity: "Detailed", label: "Quote results screen" },
  { number: "185", category: "Detailed", complexity: "Detailed", label: "Add-ons selection screen" },
  { number: "195", category: "Detailed", complexity: "Detailed", label: "Mobile policy dashboard" },
  { number: "196", category: "Detailed", complexity: "Detailed", label: "Claim filing initiation" },
  { number: "197", category: "Detailed", complexity: "Detailed", label: "Claim status tracking" },
  { number: "203", category: "Detailed", complexity: "Detailed", label: "Dark mode claims filing" },
  { number: "204", category: "Detailed", complexity: "Detailed", label: "Dark mode policy confirmation" },
  // Iteration chain 206–215: Plan selection screen evolving through 10 review rounds
  { number: "206", category: "Detailed", complexity: "Detailed", label: "Iter 1 — Base plan selection" },
  { number: "207", category: "Detailed", complexity: "Detailed", label: "Iter 2 — +PM: bigger price, full-width CTA" },
  { number: "208", category: "Detailed", complexity: "Detailed", label: "Iter 3 — +Design: card/compare toggle" },
  { number: "209", category: "Detailed", complexity: "Detailed", label: "Iter 4 — +Legal: disclaimer, Starting from" },
  { number: "210", category: "Detailed", complexity: "Detailed", label: "Iter 5 — +UX: collapsed inclusions" },
  { number: "211", category: "Detailed", complexity: "Detailed", label: "Iter 6 — +Business: nudge, Most Popular" },
  { number: "212", category: "Detailed", complexity: "Detailed", label: "Iter 7 — +QA: responsive compare, card gap" },
  { number: "213", category: "Detailed", complexity: "Detailed", label: "Iter 8 — +A11y: color strip, focus, ARIA" },
  { number: "214", category: "Detailed", complexity: "Detailed", label: "Iter 9 — +PM: savings callout, tooltip" },
  { number: "215", category: "Detailed", complexity: "Detailed", label: "Iter 10 — Final: subtext, trust strip" },
];

// ── Lazy load all generated components ───────────────────────────────
const componentMap: Record<string, React.LazyExoticComponent<any>> = {};
prompts.forEach(({ number, category }) => {
  const folder = category === "Website" ? "website"
    : category === "Purchase Journey" ? "purchase-journey"
    : category === "Mobile" ? "mobile"
    : category === "Iteration" ? "iteration-stress"
    : category === "Dark Mode" ? "dark-mode"
    : category === "Copy-Heavy" ? "copy-heavy"
    : category === "Broken" ? "broken-prompts"
    : category === "General" ? "general"
    : category === "Detailed" ? "detailed"
    : "contradiction-prompts";

    const complexity = prompts.find(p => p.number === number)?.complexity.toLowerCase() || "";
    const subfolder = ["simple", "medium", "complex", "targeted"].includes(complexity)
      ? complexity
      : category === "Iteration" ? (parseInt(number) <= 100 ? "screen-1" : "screen-2")
      : "";

  const path = subfolder ? `../stress-test/${folder}/${subfolder}/prompt-${number}.tsx` : `../stress-test/${folder}/prompt-${number}.tsx`;
  componentMap[number] = lazy(() =>
    import(/* @vite-ignore */ path).catch(() => ({
      default: () => (
        <div style={{ padding: "40px", textAlign: "center", color: "#666" }}>
          <p style={{ fontSize: "18px", marginBottom: "8px" }}>⚠️ prompt-{number}.tsx not generated yet</p>
          <p style={{ fontSize: "14px" }}>Run <code>stress test {number}</code> in Cursor first</p>
        </div>
      ),
    }))
  );
});

// ── Category colours ──────────────────────────────────────────────────
const categoryColor: Record<string, string> = {
  Website: "#0ea5e9",
  "Purchase Journey": "#8b5cf6",
  Mobile: "#10b981",
  Iteration: "#f59e0b",
  "Dark Mode": "#6366f1",
  "Copy-Heavy": "#ec4899",
  Broken: "#ef4444",
  Contradiction: "#f97316",
  General: "#14b8a6",
  Detailed: "#8b5cf6",
};

// ── Viewer ────────────────────────────────────────────────────────────
export default function StressTestViewer() {
  const [selected, setSelected] = useState("001");
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(prompts.map(p => p.category)))];

  const filtered = prompts.filter(p => {
    const matchesCategory = filterCategory === "All" || p.category === filterCategory;
    const matchesSearch =
      p.number.includes(search) ||
      p.label.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const current = prompts.find(p => p.number === selected)!;
  const Component = componentMap[selected];

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f8fafc" }}>

      {/* Sidebar */}
      <div style={{ width: "280px", borderRight: "1px solid #e2e8f0", background: "#fff", display: "flex", flexDirection: "column", flexShrink: 0 }}>

        {/* Header */}
        <div style={{ padding: "16px", borderBottom: "1px solid #e2e8f0" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>ACKO Stress Test</p>
          <p style={{ fontSize: "13px", color: "#64748b" }}>{prompts.length} prompts</p>
        </div>

        {/* Search */}
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #e2e8f0" }}>
          <input
            type="text"
            placeholder="Search prompts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: "100%", padding: "8px 10px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
          />
        </div>

        {/* Category filter */}
        <div style={{ padding: "8px 16px", borderBottom: "1px solid #e2e8f0", display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                padding: "3px 8px", borderRadius: "999px", fontSize: "11px", fontWeight: 500, cursor: "pointer", border: "none",
                background: filterCategory === cat ? "#0f172a" : "#f1f5f9",
                color: filterCategory === cat ? "#fff" : "#64748b",
              }}
            >
              {cat === "All" ? "All" : cat.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Prompt list */}
        <div style={{ overflowY: "auto", flex: 1 }}>
          {filtered.map(p => (
            <div
              key={p.number}
              onClick={() => setSelected(p.number)}
              style={{
                padding: "10px 16px", cursor: "pointer", borderBottom: "1px solid #f1f5f9",
                background: selected === p.number ? "#f8fafc" : "transparent",
                borderLeft: selected === p.number ? `3px solid ${categoryColor[p.category]}` : "3px solid transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#94a3b8", minWidth: "28px" }}>{p.number}</span>
                <span style={{
                  fontSize: "10px", fontWeight: 500, padding: "1px 6px", borderRadius: "999px",
                  background: `${categoryColor[p.category]}18`, color: categoryColor[p.category]
                }}>
                  {p.complexity}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: selected === p.number ? "#0f172a" : "#475569", marginLeft: "36px" }}>{p.label}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ padding: "24px 16px", fontSize: "13px", color: "#94a3b8", textAlign: "center" }}>No prompts found</p>
          )}
        </div>
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Toolbar */}
        <div style={{ padding: "12px 24px", borderBottom: "1px solid #e2e8f0", background: "#fff", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{
            fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px",
            background: `${categoryColor[current.category]}18`, color: categoryColor[current.category]
          }}>
            {current.category}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#0f172a" }}>#{current.number} — {current.label}</span>
          <span style={{ fontSize: "12px", color: "#94a3b8", marginLeft: "auto" }}>{current.complexity}</span>
        </div>

        {/* Component preview */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Suspense fallback={
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#94a3b8", fontSize: "14px" }}>
              Loading...
            </div>
          }>
            <Component />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
