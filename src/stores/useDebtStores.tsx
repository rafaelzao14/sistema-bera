import create from "zustand";

type Debts = {
  reasons: [];
  setReasons: (data) => void;
  paidDebts: [];
  setPaidDebts: (data) => void;
};
export const useDebtStore = create<Debts>((set) => ({
  reasons: [],
  setReasons: (data) => set(() => ({ reasons: data })),
  paidDebts: [],
  setPaidDebts: (data) => set(() => ({ paidDebts: data })),
}));
