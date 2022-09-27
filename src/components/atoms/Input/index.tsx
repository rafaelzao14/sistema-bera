import React from "react";
import { TextInput, TextInputProps } from "react-native";
import ContainerInput from "../../molecules/ContainerInput";
import ErrorMsg from "../ErrorMsg";

import { style } from "./style";

export interface InputProps extends TextInputProps {
  errorMessage?: string;
  icon?: React.ReactNode;
}
const Input = ({ errorMessage, icon, ...rest }: InputProps) => {
  return (
    <>
      <ContainerInput>
        {icon && icon}
        <TextInput
          style={style.input}
          placeholderTextColor="#AEA8A8"
          autoCapitalize="none"
          {...rest}
        />
      </ContainerInput>
      {errorMessage && <ErrorMsg msgError={errorMessage} />}
    </>
  );
};
export default Input;
