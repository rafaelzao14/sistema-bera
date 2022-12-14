import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Text } from "react-native";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/Ionicons";
import { registerApi } from "../../../http/services/userService";

import { registerSchema } from "../../../validators/schema";

import BottomContainer from "../../atoms/BottomContainer";
import Button from "../../atoms/Button";
import ControlledInput from "../../atoms/ControlledInput";
import NoStyleButton from "../../atoms/NoStyleButton";
import ContainerReg from "../../molecules/ContainerRegister";
import { style } from "./style";

interface DataFormProp {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

const RegisterForm = () => {
  const register: string = "Cadastro";
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFormProp>({
    resolver: yupResolver(registerSchema),
  });
  const navigation = useNavigation();

  async function handleUserRegister(data: DataFormProp) {
    const { username, email, password } = data;

    const register = { username: username, email: email, password: password };
    try {
      await registerApi(register);
      Toast.show({
        type: "success",
        text2: "Mais um cadastro inútil no banco de dados",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text2: "Ou o adm fez cagada ou você tá cagando!",
      });
    }
  }
  return (
    <ContainerReg>
      <Text style={style.title}>{register}</Text>

      <ControlledInput
        control={control}
        name={"username"}
        placeholder={"Qualquer nome merda"}
        icon={<Icon name="person-circle-outline" size={18} color="#FFC225" />}
        error={errors.username}
      />

      <ControlledInput
        control={control}
        name={"email"}
        placeholder={"Emeiu"}
        icon={<Icon name="ios-mail-outline" size={18} color="#FFC225" />}
        error={errors.email}
      />

      <ControlledInput
        control={control}
        name={"password"}
        placeholder={"Senha"}
        secureTextEntry
        icon={<Icon name="ios-lock-closed-outline" size={18} color="#FFC225" />}
        error={errors.password}
      />

      {/* <Icon name="ios-lock-closed-outline" size={18} color="#EA8B8B" /> */}
      <ControlledInput
        control={control}
        name={"confirm_password"}
        placeholder={"Confirme a bosta da senha"}
        secureTextEntry
        icon={<Icon name="ios-lock-closed-outline" size={18} color="#FFC225" />}
        error={errors.confirm_password}
      />
      {/* <Icon name="eye-off-outline" size={18} color="#FFC225" /> */}

      <BottomContainer>
        <Button
          textValue={"Cadastrar"}
          onClick={handleSubmit(handleUserRegister)}
        />
        <NoStyleButton
          textValue={"Fazer Login"}
          onClick={() => navigation.navigate("Login")}
        />
      </BottomContainer>
    </ContainerReg>
  );
};
export default RegisterForm;
