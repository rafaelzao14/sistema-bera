import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode, { JwtPayload } from "jwt-decode";
import create from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isLogged: boolean;
  token: string;
  userInfo: { email: string; username: string };
  login: (token: string) => void;
  logOut: () => void;
};

export const store: (set, get) => AuthState = (set) => ({
  isLogged: false,
  token: "",
  userInfo: { email: "", username: "" },

  login: (token) => {
    set(() => ({
      token: token,
      isLogged: true,
      userInfo: jwt_decode<JwtPayload>(token),
    }));
  },
  logOut: () => {
    set(() => ({
      token: "",
      isLogged: false,
      userInfo: "",
    }));
  },
});

export const useAuthStore = create(
  persist(store, {
    getStorage: () => AsyncStorage,
    name: "auth",
  })
);
