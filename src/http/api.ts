import axios from "axios";
import { API_URL } from "../../env";
import { useAuthStore } from "../stores/AuthLogin";

export const API = axios.create({
  baseURL: API_URL,
  timeout: 3000,
});

API.interceptors.request.use(
  async (conf) => {
    const token = useAuthStore.getState().token;
    conf.headers.Authorization = `Bearer ${token}`;
    return conf;
  },
  async (err) => {
    return err;
  }
);
