import React from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import Index from "./src/routes";

export default function App() {
  return (
    <>
      <Index />
      <Toast />
    </>
  );
}
