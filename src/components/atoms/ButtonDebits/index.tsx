import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { style } from "./style";

const ButtonDebits = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.container}>
        <Image source={require("../../../assets/beer1.png")} />
        <Text style={style.text}>Nova Dívida</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonDebits;
