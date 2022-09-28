import React from "react";
import { SafeAreaView } from "react-native";
import { style } from "./MainContainer";

export interface MainContainerProps {
  children: React.ReactNode;
}
const MainContainer = ({ children }: MainContainerProps) => {
  return <SafeAreaView style={style.containerMain}>{children}</SafeAreaView>;
};

export default MainContainer;
