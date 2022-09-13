import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LogoBeer from "../../components/atoms/LogoBeer";
import MainContainer from "../../components/organisms/ContainerMain";
import { style } from "../../components/organisms/ContainerMain/MainContainer";
import LoginForm from "../../components/organisms/LoginForm";
import { styleKeyboard } from "./style";

const Login = () => {
  return (
    <ImageBackground
      source={require("../../assets/backgroud1.jpg")}
      resizeMode="cover"
      style={style.backgroundImg}
    >
      <SafeAreaView>
        <MainContainer>
          <LogoBeer />
          <KeyboardAwareScrollView
            contentContainerStyle={styleKeyboard.keyboard}
          >
            <LoginForm />
          </KeyboardAwareScrollView>
        </MainContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
