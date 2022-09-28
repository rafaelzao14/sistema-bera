import React from "react";

import { View } from "react-native";
import { style } from "./style";

interface BotProps {
  children: React.ReactNode;
}
const BottomContainer = ({ children }: BotProps) => {
  return <View style={style.containerBottom}>{children}</View>;
};

export default BottomContainer;
