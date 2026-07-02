const OPTIONS = [
  { key: "all", label: "All" },
  { key: "unpaid", label: "Unpaid" },
  { key: "paid", label: "Paid" },
];

export default function Filters({ value, onChange, counts }) {
  return (
    <div className="flex gap-1 font-mono text-xs uppercase tracking-widest">
      {OPTIONS.map((opt) => {
        const active = value === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className={`border px-3 py-1.5 transition-colors ${
              active
                ? "border-ink-900 bg-ink-900 text-paper"
                : "border-ink-900/20 text-ink-700/70 hover:border-ink-900/50"
            }`}
          >
            {opt.label}
            <span className="ml-1.5 opacity-60">{counts[opt.key]}</span>
          </button>
        );
      })}
    </div>
  );
}
