import React from "react";

import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { style } from "./style";

interface ErrProp {
  msgError?: string;
}
const ErrorMsg = ({ msgError }: ErrProp) => {
  return (
    <View style={style.container}>
      <Text style={style.error}>
        <Icon name="alert-circle-outline" size={12} />
        {msgError}
      </Text>
    </View>
  );
};

export default ErrorMsg;
