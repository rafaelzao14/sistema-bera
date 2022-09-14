import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../screens/Login";
import Register from "../../screens/Register";

const NoAuth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </>
  );
};
export default NoAuth;
