import React from "react";
import { View } from "react-native";
import HeaderMain from "../../components/organisms/HeaderMain";
import ListDebts from "../ListDebts";

import { style } from "./style";

const DebitsView = () => {
  return (
    <View style={style.container}>
      <HeaderMain />

      <ListDebts />
    </View>
  );
};

export default DebitsView;
