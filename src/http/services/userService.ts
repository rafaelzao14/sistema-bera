import { API } from "../api";

export const getUserPerPage = async (skipNum: number) => {
  try {
    const res = await API.get(`/users?skip=${skipNum}&take=4`);
    return res;
  } catch (error) {
    throw error;
  }
};
export const getSingleUser = async (skipNum: number) => {
  try {
    const res = await API.get(`/users/${skipNum}`);
    return res;
  } catch (error) {
    throw error;
  }
};
export const getAllUser = async () => {
  try {
    const res = await API.get(`/users`);
    return res;
  } catch (error) {
    throw error;
  }
};
export const getInfoUserCard = async (id: any) => {
  try {
    const res = await API.get(`/users/${id}/debts`);

    return res;
  } catch (error) {
    throw error;
  }
};

export const registerApi = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await API.post("/users", data);

    return res.data;
  } catch (error) {
    throw error;
  }
};
