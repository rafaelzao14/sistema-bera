import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./style";

interface CircleButtonProps {
  label?: string;
  onClick?: () => void;
}

const CircleButton = ({ label, onClick }: CircleButtonProps) => {
  return (
    <TouchableOpacity style={style.button} onPress={onClick}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CircleButton;
