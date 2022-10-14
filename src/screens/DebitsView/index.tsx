import React from "react";
import { View } from "react-native";
import { UserRole } from "../../@types/roleEnum";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import HeaderMain from "../../components/organisms/HeaderMain";
import { useAuthStore } from "../../stores/AuthLogin";
import ListDebts from "../ListDebts";

import { style } from "./style";

const DebitsView = () => {
  const { userInfo } = useAuthStore();

  const isAdm = userInfo.role === UserRole.ADMIN;
  return (
    <View style={style.container}>
      {isAdm ? <HeaderAdmin /> : <HeaderMain />}
      <ListDebts />
    </View>
  );
};

export default DebitsView;
