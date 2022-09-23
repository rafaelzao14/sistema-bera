import { API } from "../api";

export const getAllUser = async () => {
  try {
    const res = await API.get("/users");
    return res;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
