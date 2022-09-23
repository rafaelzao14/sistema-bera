import { API } from "../api";

export const registerDebt = async (userId, data) => {
  try {
    const res = await API.post(`users/${userId}/debts`, data);

    return res;
  } catch (error) {
    console.log(error);
  }
};
