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

const RegisterForm = () => {
  const register: string = "Cadastro";
  const { control } = useForm({});
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.title}>{register}</Text>
      <ContainerInput>
        <Icon name="person-circle-outline" size={20} color="#FFC225" />
        <ControlledInput control={control} name={"name"} />
      </ContainerInput>
      <ContainerInput>
        <Icon name="ios-mail-outline" size={20} color="#FFC225" />
        <ControlledInput control={control} name={"name1"} />
      </ContainerInput>

      <ContainerInput>
        <Icon name="ios-lock-closed-outline" size={20} color="#FFC225" />
        <ControlledInput control={control} name={"name2"} />
      </ContainerInput>

      <ContainerInput>
        <Icon name="ios-lock-closed-outline" size={20} color="#EA8B8B" />
        <ControlledInput control={control} name={"name3"} />
        <Icon name="eye-off-outline" size={20} color="#FFC225" />
      </ContainerInput>

      <Button textValue={"Cadastrar"} />
      <NoStyleButton
        textValue={"Fazer Login"}
        onClick={() => navigation.navigate("Login")}
      />
    </View>
  );
};
export default RegisterForm;
