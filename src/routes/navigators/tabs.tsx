import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import NewDebitIcon from "../../assets/newDebit.svg";
import BeerIcon from "../../assets/paids.svg";
import PendentsIcon from "../../assets/pendents.svg";
import DebitsView from "../../components/organisms/DebitsView";
import NewDebit from "../../components/organisms/NewDebit";
import PaidDebits from "../../components/organisms/PaidDebits";
import Roots from "./roots";
import { style } from "./style";

const Tabs = () => {
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
        }}
      />
      <Tab.Screen
        name="DebitsUser"
        component={Roots}
        options={{
          tabBarButton: () => null,
          // tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
