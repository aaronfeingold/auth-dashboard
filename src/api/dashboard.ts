// Mock Dashboard API
import type { KPI, Transaction } from "../types/dashboard";

const MOCK_KPIS: KPI[] = [
  { label: "Revenue", value: 120000, unit: "$" },
  { label: "Expenses", value: 45000, unit: "$" },
  { label: "Profit", value: 75000, unit: "$" },
  { label: "Active Clients", value: 32, unit: "" },
];

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "t1",
    date: "2024-06-01",
    description: "Invoice #1001",
    amount: 5000,
    type: "income",
  },
  {
    id: "t2",
    date: "2024-06-02",
    description: "Office Rent",
    amount: -2000,
    type: "expense",
  },
  {
    id: "t3",
    date: "2024-06-03",
    description: "Consulting",
    amount: 3000,
    type: "income",
  },
  {
    id: "t4",
    date: "2024-06-04",
    description: "Software Subscription",
    amount: -500,
    type: "expense",
  },
];

export function fetchKPIs(): Promise<KPI[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_KPIS), 800);
  });
}

export function fetchTransactions(): Promise<Transaction[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_TRANSACTIONS), 1200);
  });
}
