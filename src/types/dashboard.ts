export interface KPI {
  label: string;
  value: number;
  unit: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
}
