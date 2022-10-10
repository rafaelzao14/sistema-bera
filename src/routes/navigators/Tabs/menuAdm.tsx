import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AdmIcon from "../../../assets/admIcon.svg";
import NewDebitIcon from "../../../assets/newDebit.svg";
import BeerIcon from "../../../assets/paids.svg";
import PendentsIcon from "../../../assets/pendents.svg";
import DebitsView from "../../../screens/DebitsView";
import HistoricDebts from "../../../screens/HistoricDebts";
import NewDebit from "../../../screens/NewDebit";
import PaidDebits from "../../../screens/PaidDebits";
import PanelAdm from "../../../screens/PanelAdm";
import { style } from "../style";

const MenuAdm = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: style.container,
      }}
    >
      <Tab.Screen
        name="MenuAdm"
        component={PanelAdm}
        options={{
          tabBarLabel: "Admin",
          tabBarIcon: () => <AdmIcon />,
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#BC6600",
          tabBarLabelStyle: style.label,
        }}
      />
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
          tabBarLabel: "Novo Vacilo",
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

export default MenuAdm;
