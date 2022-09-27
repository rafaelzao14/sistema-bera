import React from "react";
import { Control, Controller } from "react-hook-form";
import { InputProps } from "../Input";
import InputComment from "../InputComment";

interface ControllerProps extends InputProps {
  control?: Control<any>;
  name?: string;
  errorAlert?: any; //FIXME: arrumar tipagem;
}

const ControlledComment = ({
  control,
  name,
  errorAlert,
  ...rest
}: ControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <InputComment
            onChangeText={onChange}
            value={value}
            errorMsg={errorAlert}
            {...rest}
          />
        );
      }}
    />
  );
};

export default ControlledComment;
