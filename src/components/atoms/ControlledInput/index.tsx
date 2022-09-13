import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "../Input";

interface ControllerProps {
  control: any;
  name?: string;
  placeholder?: string;
  typePassword?: boolean;
}

const ControlledInput = ({
  name,
  control,
  placeholder,
  typePassword,
}: ControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#AEA8A8"
          secureTextEntry={typePassword}
          autoCapitalize="none"
        />
      )}
    />
  );
};

export default ControlledInput;
