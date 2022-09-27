import { API } from "../api";

export const registerDebt = async (userId, data) => {
  try {
    const res = await API.post(`users/${userId}/debts`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const getReasons = async () => {
  try {
    const res = await API.get("/reasons");

    return res;
  } catch (error) {
    throw error;
  }
};

export const getPaids = async () => {
  try {
    const res = await API.get("/payments");

    return res;
  } catch (error) {
    throw error;
  }
};
