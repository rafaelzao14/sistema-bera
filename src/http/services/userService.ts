import { User } from "../../screens/ListDebts";
import { API } from "../api";

export const getUserPerPage = async (skipNum: number) => {
  try {
    const res = await API.get<User[]>(`/users?skip=${skipNum}&take=8`);
    return res.data;
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
export const getInfoUserCard = async (id, skipNumber) => {
  try {
    const res = await API.get(`/users/${id}/debts?skip=${skipNumber}&take=4`);

    return res.data;
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
