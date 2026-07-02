// A handful of example invoices used only the very first time the app
// loads (i.e. when localStorage is empty). Dates are relative to "today"
// so the overdue bonus feature has something real to demonstrate no
// matter when this is run.

function daysFromToday(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

export const seedInvoices = [
  {
    id: "inv_001",
    customer: "Solstice Roasting Co.",
    amount: 1840,
    dueDate: daysFromToday(-9),
    status: "unpaid",
  },
  {
    id: "inv_002",
    customer: "Marrow & Vine",
    amount: 620.5,
    dueDate: daysFromToday(12),
    status: "unpaid",
  },
  {
    id: "inv_003",
    customer: "North Field Studio",
    amount: 3200,
    dueDate: daysFromToday(-30),
    status: "paid",
  },
  {
    id: "inv_004",
    customer: "Harbor & Kin",
    amount: 275,
    dueDate: daysFromToday(4),
    status: "unpaid",
  },
  {
    id: "inv_005",
    customer: "Quietwood Furniture",
    amount: 5460,
    dueDate: daysFromToday(-2),
    status: "unpaid",
  },
  {
    id: "inv_006",
    customer: "Pale Fox Bakery",
    amount: 412.75,
    dueDate: daysFromToday(-18),
    status: "paid",
  },
];
