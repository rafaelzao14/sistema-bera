import create from "zustand";

interface UserCardType {
  infoUserDebts: [];
  setInfoUserDebts: (data: []) => void;
}
export const userCardStore = create<UserCardType>((set) => ({
  infoUserDebts: [],
  setInfoUserDebts: (data) => set(() => ({ infoUserDebts: data })),
}));
