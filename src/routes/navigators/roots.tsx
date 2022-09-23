import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HistoricDebts from "../../components/organisms/HistoricDebts";

const Roots = () => {
  const Root = createNativeStackNavigator();
  return (
    <Root.Navigator>
      <Root.Screen name="HistoricDebts" component={HistoricDebts} />
    </Root.Navigator>
  );
};

export default Roots;
