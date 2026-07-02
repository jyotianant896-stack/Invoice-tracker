import { useState } from "react";

const EMPTY = { customer: "", amount: "", dueDate: "" };

function validate({ customer, amount, dueDate }) {
  const errors = {};
  if (!customer.trim()) errors.customer = "Customer name is required.";

  if (amount === "") {
    errors.amount = "Amount is required.";
  } else if (Number.isNaN(Number(amount)) || Number(amount) <= 0) {
    errors.amount = "Amount must be a positive number.";
  }

  if (!dueDate) errors.dueDate = "Due date is required.";

  return errors;
}

export default function InvoiceForm({ onAdd }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [justAdded, setJustAdded] = useState(false);

  function handleChange(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    setJustAdded(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onAdd(values);
    setValues(EMPTY);
    setErrors({});
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-4 border border-ink-900/15 bg-parchment/40 p-5 sm:grid-cols-[2fr_1fr_1fr_auto]"
    >
      <Field label="Customer" error={errors.customer}>
        <input
          type="text"
          value={values.customer}
          onChange={(e) => handleChange("customer", e.target.value)}
          placeholder="Acme Supply Co."
          className={inputClass(errors.customer)}
        />
      </Field>

      <Field label="Amount (USD)" error={errors.amount}>
        <input
          type="number"
          step="0.01"
          inputMode="decimal"
          value={values.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
          placeholder="0.00"
          className={`tabular ${inputClass(errors.amount)}`}
        />
      </Field>

      <Field label="Due date" error={errors.dueDate}>
        <input
          type="date"
          value={values.dueDate}
          onChange={(e) => handleChange("dueDate", e.target.value)}
          className={inputClass(errors.dueDate)}
        />
      </Field>

      <div className="flex items-end">
        <button
          type="submit"
          className="w-full whitespace-nowrap border-2 border-ink-900 bg-ink-900 px-4 py-2 font-mono text-xs
                     uppercase tracking-widest text-paper transition-colors hover:bg-ink-800 sm:w-auto"
        >
          Add invoice
        </button>
      </div>

      {justAdded && (
        <p className="col-span-full font-mono text-xs text-forest-700">
          Invoice added.
        </p>
      )}
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-widest text-ink-700/60">
        {label}
      </span>
      {children}
      {error && (
        <span className="font-mono text-[11px] text-rust-600">{error}</span>
      )}
    </label>
  );
}

function inputClass(error) {
  return `border bg-paper px-3 py-2 font-body text-sm text-ink-900 outline-none transition-colors
    focus:border-ink-900 ${error ? "border-rust-500" : "border-ink-900/20"}`;
}
