import React from "react";
import { Text, View } from "react-native";

import { style } from "./style";

type SubHeaderProps = {
  children?: React.ReactNode;
  tittle?: string;
};
const SubHeader = ({ children, tittle }: SubHeaderProps) => {
  return (
    <View style={style.containerTitle}>
      <Text style={style.textTittle}> {tittle}</Text>
      {children}
    </View>
  );
};

export default SubHeader;
