import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import NewDebitIcon from "../../../assets/newDebit.svg";
import BeerIcon from "../../../assets/paids.svg";
import PendentsIcon from "../../../assets/pendents.svg";
import DebitsView from "../../../screens/DebitsView";
import HistoricDebts from "../../../screens/HistoricDebts";
import NewDebit from "../../../screens/NewDebit";
import PaidDebits from "../../../screens/PaidDebits";
import { style } from "../style";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
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
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="DebitsUser"
        component={HistoricDebts}
        options={{
          tabBarButton: () => null,
          // tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
