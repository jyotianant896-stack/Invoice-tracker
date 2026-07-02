import { formatCurrency } from "../utils/format";

function Stat({ label, value, accent }) {
  return (
    <div className="flex-1 border border-ink-900/15 bg-parchment/60 px-5 py-4">
      <p className="font-mono text-[11px] uppercase tracking-widest text-ink-700/60">
        {label}
      </p>
      <p
        className={`tabular mt-1 font-display text-2xl font-semibold ${
          accent ?? "text-ink-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default function SummaryBar({ invoices }) {
  const total = invoices.length;
  const outstanding = invoices
    .filter((i) => i.status === "unpaid")
    .reduce((sum, i) => sum + i.amount, 0);
  const collected = invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Stat label="Invoices" value={total} />
      <Stat
        label="Outstanding"
        value={formatCurrency(outstanding)}
        accent="text-rust-600"
      />
      <Stat
        label="Collected"
        value={formatCurrency(collected)}
        accent="text-forest-700"
      />
    </div>
  );
}
