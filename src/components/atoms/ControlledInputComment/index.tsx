import React from "react";
import { Control, Controller } from "react-hook-form";
import { InputProps } from "../Input";
import InputComment from "../InputComment";

interface ControllerProps extends InputProps {
  control?: Control<any>;
  name?: string;
}

const ControlledComment = ({ control, name, ...rest }: ControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return <InputComment onChangeText={onChange} value={value} {...rest} />;
      }}
    />
  );
};

export default ControlledComment;
