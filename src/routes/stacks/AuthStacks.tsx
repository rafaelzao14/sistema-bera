import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DebitsView from "../../components/organisms/DebitsView";
import { authLoginStore } from "../../stores/AuthLogin";
import NoAuth from "./NoAuth";

const AuthStacks = () => {
  const Stack = createNativeStackNavigator();
  const { isLogged } = authLoginStore();

  const authorizedRoutes = () => {
    if (isLogged) {
      return <Stack.Screen name="Debits" component={DebitsView} />;
    } else {
      return <NoAuth />;
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {authorizedRoutes()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStacks;
