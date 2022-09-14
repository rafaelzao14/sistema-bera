import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Toast from "react-native-toast-message";
import AuthStacks from "./src/routes/stacks/AuthStacks";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <AuthStacks />
      <Toast />
    </>
  );
}
