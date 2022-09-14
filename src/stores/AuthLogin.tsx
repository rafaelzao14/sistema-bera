import create from "zustand";

type AuthLog = {
  isLogged: boolean;
  changeUserOn: (authState: boolean) => void;
};

export const authLoginStore = create<AuthLog>((set) => ({
  isLogged: false,

  changeUserOn: (authState) => set({ isLogged: authState }),
}));
