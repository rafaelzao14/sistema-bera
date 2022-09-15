import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DebitsView from "../../components/organisms/DebitsView";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import { authLoginStore } from "../../stores/AuthLogin";

const AuthStacks = () => {
  const Stack = createNativeStackNavigator();
  const { isLogged } = authLoginStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isLogged === true ? (
          <Stack.Screen name="Debits" component={DebitsView} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStacks;
