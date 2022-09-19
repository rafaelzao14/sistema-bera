import { API } from "./mainRequest";

export const getAllUser = async () => {
  try {
    const res = await API.get("/allUsers");
    return res;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
