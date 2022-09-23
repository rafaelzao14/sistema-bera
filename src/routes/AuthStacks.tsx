import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import { useAuthStore } from "../stores/AuthLogin";
import Stacks from "./navigators/stacks";
import Tabs from "./navigators/tabs";

const AuthStacks = () => {
  const { isLogged } = useAuthStore();

  return (
    <NavigationContainer>
      {isLogged ? (
        <>
          <Tabs />
        </>
      ) : (
        <Stacks />
      )}
    </NavigationContainer>
  );
};

export default AuthStacks;
