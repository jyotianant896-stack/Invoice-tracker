import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { formatCurrency, formatDate, isOverdue } from "../utils/format";

export default function InvoiceTable({ invoices, filter, onMarkPaid }) {
  const [noopId, setNoopId] = useState(null);

  if (invoices.length === 0) {
    return (
      <div className="border border-dashed border-ink-900/25 px-6 py-16 text-center">
        <p className="font-display text-lg text-ink-900">
          {filter === "all"
            ? "No invoices yet."
            : `No ${filter} invoices.`}
        </p>
        <p className="mt-1 font-mono text-xs text-ink-700/60">
          {filter === "all"
            ? "Add the first one using the form above."
            : "Try a different filter."}
        </p>
      </div>
    );
  }

  function handleMarkPaid(inv) {
    if (inv.status === "paid") {
      setNoopId(inv.id);
      window.setTimeout(() => setNoopId((id) => (id === inv.id ? null : id)), 1800);
      return;
    }
    onMarkPaid(inv.id);
  }

  return (
    <div className="overflow-x-auto border border-ink-900/15">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-ink-900 font-mono text-[11px] uppercase tracking-widest text-ink-700/60">
            <th className="px-4 py-3 font-medium">Customer</th>
            <th className="px-4 py-3 font-medium">Due date</th>
            <th className="px-4 py-3 font-medium text-right">Amount</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => {
            const overdue = isOverdue(inv);
            return (
              <tr
                key={inv.id}
                className={`border-b border-ink-900/10 last:border-b-0 ${
                  overdue ? "bg-rust-600/[0.05]" : ""
                }`}
              >
                <td className="px-4 py-3 font-body text-sm text-ink-900">
                  {inv.customer}
                </td>
                <td className="px-4 py-3 font-mono text-sm text-ink-700/80">
                  <span className="tabular">{formatDate(inv.dueDate)}</span>
                  {overdue && (
                    <span className="ml-2 border border-rust-600/40 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-rust-600">
                      Overdue
                    </span>
                  )}
                </td>
                <td className="tabular px-4 py-3 text-right font-mono text-sm text-ink-900">
                  {formatCurrency(inv.amount)}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={inv.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => handleMarkPaid(inv)}
                    className={`border px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                      inv.status === "paid"
                        ? "cursor-default border-ink-900/10 text-ink-700/30"
                        : "border-ink-900/30 text-ink-700 hover:border-ink-900 hover:text-ink-900"
                    }`}
                  >
                    Mark paid
                  </button>
                  {noopId === inv.id && (
                    <p className="mt-1 font-mono text-[10px] text-ink-700/50">
                      Already paid.
                    </p>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
