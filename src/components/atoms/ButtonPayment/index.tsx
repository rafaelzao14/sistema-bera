import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { style } from "./style";

const ButtonPayment = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.container}>
        <Image source={require("../../../assets/beerPagas1.png")} />
        <Text style={style.text}>Pagas</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonPayment;
