import create from "zustand";

type AuthLog = {
  isLogged: boolean;
  changeUserOn: (authState: boolean) => void;
  infoUser: any;
  setInfoUser: (data: string) => void;
};

export const authLoginStore = create<AuthLog>((set) => ({
  isLogged: false,
  infoUser: [],
  changeUserOn: (authState) => set({ isLogged: authState }),
  setInfoUser: (data) => set({ infoUser: data }),
}));
