# Ledger – Invoice Tracker

## Overview

Ledger is a modern, single-page **Invoice Tracker** application built with **React**, **Vite**, and **Tailwind CSS**. It provides an intuitive interface for creating, managing, and tracking invoices while offering real-time financial insights.

The application is entirely frontend-based, with invoice data managed through React state and persisted using **localStorage**, ensuring that all records remain available even after refreshing the browser. No backend or database is required.

---

## Technology Stack

* **Frontend:** React, Vite
* **Styling:** Tailwind CSS
* **Language:** JavaScript (ES6+)
* **Storage:** Browser Local Storage

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the application in your browser using the URL provided by Vite (typically `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

---

## Key Features

### Invoice Management

* Create new invoices with customer details, amount, and due date.
* View all invoices in a clean, organized table.
* Mark invoices as paid with a single click.
* Prevent duplicate payment actions for invoices that have already been paid.

### Form Validation

The application performs client-side validation to ensure data integrity by verifying:

* Customer name is provided.
* Invoice amount is greater than zero.
* Due date is selected.

Validation errors are displayed inline, preventing invalid submissions.

### Invoice Filtering

Easily filter invoices by status:

* All
* Paid
* Unpaid

Each filter displays a live invoice count for quick insights.

### Financial Summary

A dynamic summary dashboard displays:

* Total Invoices
* Total Outstanding Amount
* Total Collected Amount

These values are calculated directly from the current invoice list on every render, ensuring the displayed information is always accurate and synchronized.

### Overdue Invoice Detection

Invoices that remain unpaid after their due date are automatically:

* Marked with an **Overdue** badge.
* Highlighted for improved visibility.

### Persistent Data Storage

On the first launch, the application loads a set of sample invoices demonstrating various payment states (Paid, Unpaid, and Overdue).

Subsequent changes are automatically saved to **localStorage** using the key:

```
ledger.invoices.v1
```

This allows invoice data to persist across browser refreshes without requiring a backend service.

---

## Project Structure

```text
src/
├── components/          Reusable UI components
│   ├── Invoice Table
│   ├── Invoice Form
│   ├── Filters
│   ├── Summary Bar
│   ├── Header
│   └── Status Badge
│
├── hooks/
│   └── useInvoices.js   State management and localStorage persistence
│
├── data/
│   └── seed.js          Initial sample invoice data
│
├── utils/
│   └── format.js        Currency formatting, date formatting, overdue logic
│
├── App.jsx
└── main.jsx
```

The application follows a simple, modular architecture where a custom hook manages business logic and persistence while reusable UI components focus solely on presentation.

---

## Design Highlights

* Clean and responsive user interface
* Modular React component architecture
* Centralized state management using custom hooks
* Persistent browser storage
* Dynamic financial calculations
* Inline form validation
* Maintainable and scalable project structure

---

## Future Enhancements

Potential improvements include:

* Edit existing invoices
* Delete invoices
* Column-based sorting
* Search functionality
* Advanced filtering options
* Enhanced date picker component
* Export invoices (PDF/Excel)
* Dashboard analytics
* Unit and integration testing using **Vitest** and **React Testing Library**

---

## Project Summary

This project demonstrates key frontend development concepts, including:

* React Component-Based Architecture
* Custom Hooks
* State Management
* Form Validation
* Local Storage Persistence
* Dynamic Data Rendering
* Financial Summary Calculations
* Responsive User Interface
* Clean and Maintainable Code


