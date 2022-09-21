import React from "react";
import { View } from "react-native";
import FormDebt from "../../molecules/FormDebt";
import SubHeader from "../../molecules/SubHeader";

import HeaderMain from "../HeaderMain";
import { style } from "./style";

const NewDebit = () => {
  return (
    <View style={style.container}>
      <HeaderMain />
      <SubHeader />
      <FormDebt />
    </View>
  );
};

export default NewDebit;
