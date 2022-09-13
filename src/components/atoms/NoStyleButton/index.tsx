import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./style";

interface NoStyleBtnProps {
  textValue: String;
  propsNav?: String;
  onClick?: () => void;
}

const NoStyleButton = ({ textValue, onClick }: NoStyleBtnProps) => {
  return (
    <TouchableOpacity style={style.button} onPress={onClick}>
      <Text style={style.text}>{textValue}</Text>
    </TouchableOpacity>
  );
};

export default NoStyleButton;
