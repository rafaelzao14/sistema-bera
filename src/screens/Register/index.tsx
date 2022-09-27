import React from "react";
import { ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoBeer from "../../components/atoms/LogoBeer";
import { style } from "../../components/molecules/ContainerMain/MainContainer";
import RegisterForm from "../../components/organisms/RegisterForm";
import { styleKeyboard } from "./style";

const Register = () => {
  return (
    <ImageBackground
      source={require("../../assets/backgroud1.jpg")}
      resizeMode="cover"
      style={style.backgroundImg}
    >
      <SafeAreaView style={styleKeyboard.keyboard}>
        <LogoBeer />
        <KeyboardAwareScrollView contentContainerStyle={styleKeyboard.keyboard}>
          <RegisterForm />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Register;
