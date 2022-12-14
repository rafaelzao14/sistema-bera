import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Text } from "react-native";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/Ionicons";
import { loginApi } from "../../../http/services/authServices";
import { useAuthStore } from "../../../stores/AuthLogin";
import { loginSchema } from "../../../validators/schema";
import BottomContainer from "../../atoms/BottomContainer";
import Button from "../../atoms/Button";
import ControlledInput from "../../atoms/ControlledInput";
import NoStyleButton from "../../atoms/NoStyleButton";
import ContainerLogin from "../../molecules/ContainerLogin";
import { style } from "./style";

interface LoginProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { login } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema),
  });

  const navigation = useNavigation();

  async function handlerUserLogin(data: LoginProps) {
    try {
      const response = await loginApi(data);
      login(response.access_token);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Opa, Erro!!!",
        text2: "Provavelmente servidor...",
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
        icon={<Icon name="ios-mail-outline" size={18} color="#FFC225" />}
      />

      <ControlledInput
        placeholder={"Senha, sugestão: 1234"}
        secureTextEntry
        control={control}
        name={"password"}
        error={errors.password}
        icon={<Icon name="ios-lock-closed-outline" size={18} color="#FFC225" />}
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
