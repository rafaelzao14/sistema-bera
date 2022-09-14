import React from "react";
import { View } from "react-native";
import { style } from "./style";

export interface RegProps {
  children: React.ReactNode;
}
const ContainerReg = ({ children }: RegProps) => {
  return <View style={style.container}>{children}</View>;
};

export default ContainerReg;
