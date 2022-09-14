import React from "react";
import { View } from "react-native";
import { style } from "./MainContainer";

export interface MainContainerProps {
  children: React.ReactNode;
}
const MainContainer = ({ children }: MainContainerProps) => {
  return <View style={style.containerMain}>{children}</View>;
};

export default MainContainer;
