import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../../screens/Login";
import Register from "../../../screens/Register";

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        animationDuration: 500,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
