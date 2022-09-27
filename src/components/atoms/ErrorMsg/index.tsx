import React from "react";

import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { style } from "./style";

interface ErrProp {
  msgError?: string;
}
const ErrorMsg = ({ msgError }: ErrProp) => {
  return (
    <Text style={style.error}>
      <Icon name="alert-circle-outline" size={16} />
      {msgError}
    </Text>
  );
};

export default ErrorMsg;
