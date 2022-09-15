import { View, Text } from "react-native";
import React from "react";
import { style } from "./style";
import ButtonDebits from "../../atoms/ButtonDebits";
import ButtonPayment from "../../atoms/ButtonPayment";
import ButtonPendences from "../../atoms/ButtonPendences";
import ButtonLogout from "../../atoms/ButtonLogout";

type TabProps = {
  children?: React.ReactNode;
};
const TabMenu = ({ children }: TabProps) => {
  return (
    <View style={style.container}>
      {children}
      <ButtonDebits />
      <ButtonPayment />
      <ButtonPendences />
      <ButtonLogout />
    </View>
  );
};

export default TabMenu;
