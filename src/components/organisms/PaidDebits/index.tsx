import React from "react";
import { View } from "react-native";
import SubHeader from "../../molecules/SubHeader";
import HeaderMain from "../HeaderMain";
import { style } from "./style";

const PaidDebits = () => {
  return (
    <View style={style.container}>
      <HeaderMain />
      <SubHeader />
    </View>
  );
};
export default PaidDebits;
