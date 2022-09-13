import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./style";

interface BtnProps {
  textValue: String;
}

const Button = ({ textValue }: BtnProps) => {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.text}>{textValue}</Text>
    </TouchableOpacity>
  );
};

export default Button;
