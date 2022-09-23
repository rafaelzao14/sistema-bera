import { API } from "../api";

export const getInfoUserCard = async (id) => {
  try {
    const res = await API.get(`/users/${id}/debts`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
