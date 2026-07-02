# Ledger — Invoice Tracker

A small, single-page invoice tracker built with React, Vite, and Tailwind CSS.
All data lives in React state and is persisted to `localStorage`, so a page
refresh doesn't lose anything. No backend, no database.

## Running it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## What's here

- **First load**: the app seeds a handful of example invoices (a mix of
  paid, unpaid, and overdue) so there's something to look at immediately.
  After that, everything you do is saved to `localStorage` under the key
  `ledger.invoices.v1`.
- **Add an invoice**: the form validates that the customer name is present,
  the amount is a positive number, and a due date is set. Errors show
  inline next to each field and the invoice is never added until the form
  is valid.
- **Mark as paid**: once an invoice is paid, the button becomes disabled
  and clicking it (or an already-disabled state) shows a small
  "Already paid." message instead of doing anything.
- **Filter**: All / Unpaid / Paid, with live counts in each tab.
- **Summary bar**: total invoice count, total outstanding (sum of unpaid),
  and total collected (sum of paid) — all computed from the invoice list
  on every render, never stored as separate state that could drift out
  of sync.
- **Overdue bonus**: unpaid invoices past their due date get an "Overdue"
  tag and a subtle highlighted row.

## Structure

```
src/
  components/       UI pieces (table, form, filters, summary, header, badge)
  hooks/useInvoices.js   State + localStorage persistence
  data/seed.js       Example invoices for first load
  utils/format.js    Currency/date formatting + overdue check
```

Component breakdown is intentionally flat — this is a single screen, so
there's one hook owning the data and a handful of presentational
components underneath `App`.

## What I'd improve with more time

- Editing/deleting an existing invoice, not just adding and marking paid.
- Sorting the table by column (currently it's insertion order).
- Swap the plain `<input type="date">` for a nicer date picker component.
- Basic tests (form validation, the "already paid" no-op, derived totals)
  with Vitest + React Testing Library.
