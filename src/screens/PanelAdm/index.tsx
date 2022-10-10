import React from "react";
import { View } from "react-native";
import RangeArc from "../../components/molecules/RangeArc";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import { style } from "./style";

const PanelAdm = () => {
  return (
    <View style={style.container}>
      <HeaderAdmin />
      <SubHeader tittle={"Resumão de tudo"} />
      <RangeArc rangeValue={12} description={"Medidor de Vacilões Devendo"} />
    </View>
  );
};

export default PanelAdm;
