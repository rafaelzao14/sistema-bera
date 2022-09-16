import { API } from "./mainRequest";

export const loginApi = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
