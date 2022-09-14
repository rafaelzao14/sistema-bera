import { Toast } from "react-native-toast-message/lib/src/Toast";
import { API } from "./mainRequest";

export const loginApi = (data) => {
  API.post("/login", data)
    .then((res) => {
      Toast.show({
        type: "success",
        text1: "Login realizado com sucesso!",
      });
    })
    .catch((err) =>
      Toast.show({
        type: "error",
        text1: "Login ou senha inválidos!",
      })
    );
};
