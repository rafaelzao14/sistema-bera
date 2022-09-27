import create from "zustand";

interface AllUserData {
  users: any;
  setUsers: (data) => void;
}

export const useAllUserStore = create<AllUserData>((set) => ({
  users: [],
  setUsers: (data) => set(() => ({ users: data })),
}));
