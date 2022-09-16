import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DebitsView from "../../components/organisms/DebitsView";
import NewDebit from "../../components/organisms/NewDebit";
import PaidDebits from "../../components/organisms/PaidDebits";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import { authLoginStore } from "../../stores/AuthLogin";
import { style } from "./style";

import NewDebitIcon from "../../assets/newDebit.svg";
import BeerIcon from "../../assets/paids.svg";
import PendentsIcon from "../../assets/pendents.svg";

const AuthStacks = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const { isLogged } = authLoginStore();

  return (
    <NavigationContainer>
      {isLogged ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: style.container,
          }}
        >
          <Tab.Screen
            name="PaidDebits"
            component={PaidDebits}
            options={{
              tabBarLabel: "Pagas",
              tabBarIcon: () => <BeerIcon style={style.icon} />,
              tabBarActiveTintColor: "#FFF",
              tabBarInactiveTintColor: "#BC6600",
              tabBarLabelStyle: style.label,
            }}
          />
          <Tab.Screen
            name="NewDebit"
            component={NewDebit}
            options={{
              tabBarLabel: "Nova Dívida",
              tabBarIcon: () => <NewDebitIcon style={style.mainIcon} />,
              tabBarActiveTintColor: "#FFF",
              tabBarInactiveTintColor: "#BC6600",
              tabBarLabelStyle: style.label,
            }}
          />
          <Tab.Screen
            name="Debits"
            component={DebitsView}
            options={{
              tabBarLabel: "Pendentes",
              tabBarIcon: () => <PendentsIcon style={style.icon} />,
              tabBarActiveTintColor: "#FFF",
              tabBarInactiveTintColor: "#BC6600",
              tabBarLabelStyle: style.label,
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AuthStacks;
