import { Toast } from "react-native-toast-message/lib/src/Toast";
import { API } from "./mainRequest";

export const registerApi = (data) => {
  API.post("/register", data)
    .then((res) =>
      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso!",
      })
    )
    .catch((err) =>
      Toast.show({
        type: "error",
        text1: "Erro na solicitação!",
      })
    );
};
