import { useMemo, useState } from "react";
import Header from "./components/Header";
import SummaryBar from "./components/SummaryBar";
import Filters from "./components/Filters";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceTable from "./components/InvoiceTable";
import { useInvoices } from "./hooks/useInvoices";

export default function App() {
  const { invoices, addInvoice, markPaid } = useInvoices();
  const [filter, setFilter] = useState("all");

  const counts = useMemo(
    () => ({
      all: invoices.length,
      unpaid: invoices.filter((i) => i.status === "unpaid").length,
      paid: invoices.filter((i) => i.status === "paid").length,
    }),
    [invoices]
  );

  const visible = useMemo(() => {
    if (filter === "all") return invoices;
    return invoices.filter((i) => i.status === filter);
  }, [invoices, filter]);

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-10 sm:px-8">
      <Header />

      <main className="mt-8 flex flex-col gap-8">
        <SummaryBar invoices={invoices} />

        <InvoiceForm onAdd={addInvoice} />

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Invoices
            </h2>
            <Filters value={filter} onChange={setFilter} counts={counts} />
          </div>
          <InvoiceTable
            invoices={visible}
            filter={filter}
            onMarkPaid={markPaid}
          />
        </section>
      </main>

      <footer className="mt-14 border-t border-ink-900/10 pt-4 font-mono text-[11px] text-ink-700/40">
        Data is stored locally in this browser.
      </footer>
    </div>
  );
}
