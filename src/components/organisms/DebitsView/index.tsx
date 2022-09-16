import React from "react";
import { View } from "react-native";
import HeaderMain from "../HeaderMain";
import ModalHeader from "../ModalHeader";

import { style } from "./style";

const DebitsView = () => {
  return (
    <View style={style.container}>
      <HeaderMain />
      <ModalHeader />
    </View>
  );
};

export default DebitsView;
