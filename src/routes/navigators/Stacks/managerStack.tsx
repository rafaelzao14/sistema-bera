import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewReason from "../../../screens/NewReason";
import PanelAdm from "../../../screens/PanelAdm";
import PanelDelete from "../../../screens/PanelDelete";
import PanelUserManager from "../../../screens/PanelUserManager";

const ManagerStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        animationDuration: 500,
        title: "",
        headerStyle: {
          backgroundColor: "#FFCA43",
        },
      }}
    >
      <Stack.Screen name="PanelAdm" component={PanelAdm} />
      <Stack.Screen name="PanelDelete" component={PanelDelete} />
      <Stack.Screen name="PanelUserManager" component={PanelUserManager} />
      <Stack.Screen name="PanelReasonManager" component={NewReason} />
    </Stack.Navigator>
  );
};

export default ManagerStack;
