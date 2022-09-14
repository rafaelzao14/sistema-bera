import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Toast from "react-native-toast-message";
import DebitsView from "./src/components/organisms/DebitsView";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="Debits" component={DebitsView} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
