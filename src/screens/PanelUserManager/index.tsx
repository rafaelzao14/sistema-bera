import React from "react";
import { View } from "react-native";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import { style } from "./style";

const PanelUserManager = () => {
  return (
    <View style={style.container}>
      <HeaderAdmin />
      <SubHeader tittle={"Gerenciar Usuários"} />
    </View>
  );
};

export default PanelUserManager;
