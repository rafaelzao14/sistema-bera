import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MenuAdm from "../Tabs/menuAdm";

const StackAdm = () => {
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
      <Stack.Screen
        name="MenuAdm"
        component={MenuAdm}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackAdm;
