import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { style } from "./style";

interface inputCommentProps extends TextInputProps {
  textPlaceHolder?: string;
}

const InputComment = ({ ...rest }: inputCommentProps) => {
  return (
    <TextInput
      style={style.input}
      placeholder="Descreva melhor o B.O"
      placeholderTextColor="#AEA8A8"
      {...rest}
    />
  );
};

export default InputComment;
