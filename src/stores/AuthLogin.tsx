import create from "zustand";

type AuthLog = {
  isLogged: boolean;
  changeUserOn: (authState: boolean) => void;
  infoUser: string;
  setInfoUser: (data: any) => void;
};

export const authLoginStore = create<AuthLog>((set) => ({
  isLogged: false,
  infoUser: "",
  changeUserOn: (authState) => set({ isLogged: authState }),
  setInfoUser: (data) => set({ infoUser: data }),
}));
