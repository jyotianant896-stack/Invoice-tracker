export default function Header() {
  return (
    <header className="border-b-2 border-ink-900 pb-5">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-700/60">
            Accounts Receivable
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Ledger
          </h1>
        </div>
        <p className="hidden font-mono text-xs text-ink-700/50 sm:block">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </header>
  );
}
