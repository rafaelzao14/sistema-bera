import { API } from "../api";

export const getAllUser = async (skipNum) => {
  try {
    const res = await API.get(`/users?skip=${skipNum}&take=5`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getInfoUserCard = async (id) => {
  try {
    const res = await API.get(`/users/${id}/debts`);

    return res;
  } catch (error) {
    throw error;
  }
};

export const registerApi = async (data) => {
  try {
    const res = await API.post("/users", data);

    return res.data;
  } catch (error) {
    throw error;
  }
};
