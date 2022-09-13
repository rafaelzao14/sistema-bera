import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../atoms/Button";
import ControlledInput from "../../atoms/ControlledInput";
import NoStyleButton from "../../atoms/NoStyleButton";
import ContainerInput from "../../ContainerInput";
import { style } from "./style";

const LoginForm = () => {
  const { control } = useForm({});
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.loginTitle}>Login</Text>
      <ContainerInput>
        <Icon name="ios-mail-outline" size={20} color="#FFC225" />
        <ControlledInput
          placeholder={"Emailzinho de merda"}
          control={control}
          name={"name1"}
        />
      </ContainerInput>

      <ContainerInput>
        <Icon name="ios-lock-closed-outline" size={20} color="#FFC225" />
        <ControlledInput
          placeholder={"Senha, sugestão: 1234"}
          control={control}
          name={"name2"}
        />
      </ContainerInput>
      <Button textValue={"Entrar"} />
      <NoStyleButton
        textValue={"Cadastre-se"}
        onClick={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default LoginForm;
