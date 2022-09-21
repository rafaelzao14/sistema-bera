import React from "react";
import Toast from "react-native-toast-message";
import AuthStacks from "./src/routes/stacks/AuthStacks";

import "react-native-reanimated";

export default function App() {
  return (
    <>
      <AuthStacks />
      <Toast />
    </>
  );
}
