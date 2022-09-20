import React from "react";
import { Text, View } from "react-native";

import { style } from "./style";

type SubHeaderProps = {
  children?: React.ReactNode;
};
const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <View style={style.containerTitle}>
      <Text style={style.textTittle}> Lista dos Vacilões</Text>
      {children}
    </View>
  );
};

export default SubHeader;
