import React from "react";
import { View } from "react-native";

export interface MainContainerProps {
  children: React.ReactNode;
}
const MainContainer = ({ children }: MainContainerProps) => {
  return <View>{children}</View>;
};

export default MainContainer;
