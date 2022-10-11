import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import { useAuthStore } from "../stores/AuthLogin";
import AuthStack from "./navigators/Stacks/stacks";
import TabNavigator from "./navigators/Tabs/tabs";

const Index = () => {
  //validação se é admin;
  /*
  function validateAuth(){
    if(isLogged){
      if(!isAdmin){
        return (
          <TabNavigator />
        )
        return (<MenuAdm />)
      }
    }else {
      return (<AuthStack />);
    }
  }


  */
  const { isLogged } = useAuthStore();
  // const isAdmin = true;

  function validateAuth() {
    if (isLogged) {
      return <TabNavigator />;
    } else {
      return <AuthStack />;
    }
  }

  return <NavigationContainer>{validateAuth()}</NavigationContainer>;
};

export default Index;
