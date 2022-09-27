import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import { useAuthStore } from "../stores/AuthLogin";
import AuthStack from "./navigators/Stacks/stacks";
import TabNavigator from "./navigators/Tabs/tabs";

const Index = () => {
  const { isLogged } = useAuthStore();

  return (
    <NavigationContainer>
      {isLogged ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Index;
