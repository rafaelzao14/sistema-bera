import React from "react";

const AuthStacks = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="Debits" component={DebitsView} />
    </Stack.Navigator>
  );
};

export default AuthStacks;
