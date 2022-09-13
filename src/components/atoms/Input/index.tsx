import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { style } from "./style";

interface InputProps extends TextInputProps {
  typePassword?: boolean;
}
export const Input = ({ typePassword, ...rest }: InputProps) => {
  return (
    <TextInput
      style={style.input}
      placeholderTextColor="#AEA8A8"
      secureTextEntry={typePassword}
      autoCapitalize="none"
      {...rest}
    />
  );
};
