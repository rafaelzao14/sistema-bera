import axios from "axios";

export const API = axios.create({
  baseURL: "https://rafaelzao14.herokuapp.com",
  timeout: 2000,
});
