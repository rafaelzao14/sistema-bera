import React from "react";
import { Controller, FieldError } from "react-hook-form";
import Input, { InputProps } from "../Input";

interface ControllerProps extends InputProps {
  control: any;
  name?: string;
  error?: FieldError;
}

const ControlledInput = ({
  name,
  control,
  error,
  ...rest
}: ControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <Input
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={error?.message}
            {...rest}
          />
        );
      }}
    />
  );
};

export default ControlledInput;
