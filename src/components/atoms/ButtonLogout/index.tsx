import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { style } from "./style";

const ButtonLogout = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.container}>
        <Image source={require("../../../assets/exitLogo.png")} />
        <Text style={style.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonLogout;
