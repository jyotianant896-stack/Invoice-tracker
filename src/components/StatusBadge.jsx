export default function StatusBadge({ status }) {
  if (status === "paid") {
    return (
      <span
        className="inline-flex -rotate-3 items-center justify-center border-2 border-forest-700 px-2.5 py-0.5
                   font-mono text-[11px] font-semibold uppercase tracking-widest text-forest-700"
      >
        Paid
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center border border-ink-700/30 px-2.5 py-0.5
                 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-700/70"
    >
      Unpaid
    </span>
  );
}
