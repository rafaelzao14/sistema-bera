import React from "react";
import { View } from "react-native";
import { style } from "./style";

export interface LogProps {
  children: React.ReactNode;
}
const ContainerLogin = ({ children }: LogProps) => {
  return <View style={style.container}>{children}</View>;
};

export default ContainerLogin;
