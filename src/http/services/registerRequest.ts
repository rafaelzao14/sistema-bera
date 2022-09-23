import { API } from "../api";

export const registerApi = async (data) => {
  try {
    const res = await API.post("/users", data);

    return res.data;
  } catch (error) {
    throw error;
  }
};
