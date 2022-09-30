import * as SplashScreen from "expo-splash-screen";
import React from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import Index from "./src/routes";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);
export default function App() {
  return (
    <>
      <Index />
      <Toast />
    </>
  );
}
