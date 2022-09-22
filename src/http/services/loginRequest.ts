import { API } from "./mainRequest";

export const loginApi = async (data) => {
  try {
    const res = await API.post("/auth/login", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
