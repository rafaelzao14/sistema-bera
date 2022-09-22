import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const API = axios.create({
  baseURL: "http://172.25.0.108:3000/api/v1",
  timeout: 3000,
});

API.interceptors.request.use(
  async (conf) => {
    const token = await AsyncStorage.getItem("@token");
    conf.headers.Authorization = `Bearer ${token}`;
    return conf;
  },
  async (err) => {
    return err;
  }
);
