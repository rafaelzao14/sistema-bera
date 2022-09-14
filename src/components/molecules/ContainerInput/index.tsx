import React from "react";
import { View } from "react-native";
import { style } from "./style";

interface Props {
  children: React.ReactNode;
}
const ContainerInput = ({ children }: Props) => {
  return <View style={style.container}>{children}</View>;
};

export default ContainerInput;
