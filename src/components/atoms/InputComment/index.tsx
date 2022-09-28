import React from "react";
import { TextInput, TextInputProps } from "react-native";
import ErrorMsg from "../ErrorMsg";
import { style } from "./style";

interface inputCommentProps extends TextInputProps {
  textPlaceHolder?: string;
  errorMsg?: string;
}

const InputComment = ({ errorMsg, ...rest }: inputCommentProps) => {
  return (
    <>
      <TextInput
        style={style.input}
        placeholder="Descreva melhor (máx.200 caracter)"
        placeholderTextColor="#AEA8A8"
        maxLength={200}
        multiline={true}
        blurOnSubmit={true}
        {...rest}
      />
      {errorMsg && <ErrorMsg msgError={`${ErrorMsg}`} />}
    </>
  );
};

export default InputComment;
