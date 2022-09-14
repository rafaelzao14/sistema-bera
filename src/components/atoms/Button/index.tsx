import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./style";

interface BtnProps {
  textValue: String;
  onClick?: () => void;
}

const Button = ({ textValue, onClick }: BtnProps) => {
  return (
    <TouchableOpacity style={style.button} onPress={onClick}>
      <Text style={style.text}>{textValue}</Text>
    </TouchableOpacity>
  );
};

export default Button;
