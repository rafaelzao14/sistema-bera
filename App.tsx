import React from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import AuthStacks from "./src/routes/AuthStacks";

export default function App() {
  return (
    <>
      <AuthStacks />
      <Toast />
    </>
  );
}
