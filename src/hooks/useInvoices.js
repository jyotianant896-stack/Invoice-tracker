import { useEffect, useState } from "react";
import { seedInvoices } from "../data/seed";

const STORAGE_KEY = "ledger.invoices.v1";

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // Corrupt or inaccessible storage — fall back to seed data below.
  }
  return seedInvoices;
}

export function useInvoices() {
  const [invoices, setInvoices] = useState(loadInitial);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
    } catch {
      // Storage may be full or unavailable (e.g. private browsing) —
      // the app still works for the current session, it just won't persist.
    }
  }, [invoices]);

  function addInvoice({ customer, amount, dueDate }) {
    const invoice = {
      id: `inv_${Date.now().toString(36)}`,
      customer: customer.trim(),
      amount: Number(amount),
      dueDate,
      status: "unpaid",
    };
    setInvoices((prev) => [invoice, ...prev]);
  }

  function markPaid(id) {
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === id && inv.status !== "paid"
          ? { ...inv, status: "paid" }
          : inv
      )
    );
  }

  return { invoices, addInvoice, markPaid };
}
