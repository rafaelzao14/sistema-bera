import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import jwt_decode from "jwt-decode";
import React from "react";
import { useForm } from "react-hook-form";
import { Text } from "react-native";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/Ionicons";
import { setTokenStorage } from "../../../helpers/localStorage";
import { loginApi } from "../../../http/services/loginRequest";
import { authLoginStore } from "../../../stores/AuthLogin";
import { loginSchema } from "../../../validators/schema";
import Button from "../../atoms/Button";
import ControlledInput from "../../atoms/ControlledInput";
import NoStyleButton from "../../atoms/NoStyleButton";
import BottomContainer from "../../molecules/BottomContainer";
import ContainerLogin from "../../molecules/ContainerLogin";
import { style } from "./style";

interface LoginProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { changeUserOn, setInfoUser } = authLoginStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema),
  });

  const navigation = useNavigation();

  async function handlerUserLogin(data: LoginProps) {
    try {
      const response = await loginApi(data);
      changeUserOn(true);

      setTokenStorage(response.access_token);

      const decoded = jwt_decode(response.access_token);

      const { username }: string = decoded;

      setInfoUser(username);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Algum erro fdp aconteceu",
        text2:
          "Pode ser do servidor um sua imcopetência de digitar as coisas certa",
      });
    }
  }
  return (
    <ContainerLogin>
      <Text style={style.loginTitle}>Login</Text>
      <ControlledInput
        control={control}
        name={"email"}
        placeholder={"Emeiu"}
        error={errors.email}
        icon={<Icon name="ios-mail-outline" size={20} color="#FFC225" />}
      />

      <ControlledInput
        placeholder={"Senha, sugestão: 1234"}
        secureTextEntry
        control={control}
        name={"password"}
        error={errors.password}
        icon={<Icon name="ios-lock-closed-outline" size={20} color="#FFC225" />}
      />
      <BottomContainer>
        <Button textValue={"Entrar"} onClick={handleSubmit(handlerUserLogin)} />
        <NoStyleButton
          textValue={"Cadastre-se"}
          onClick={() => navigation.navigate("Register")}
        />
      </BottomContainer>
    </ContainerLogin>
  );
};

export default LoginForm;
