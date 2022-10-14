import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SmallIconBeer from "../../assets/beerMugIconSmall.svg";
import ManagerReasonIcon from "../../assets/reasonManagerIcon.svg";
import SettingIcon from "../../assets/settingIcon.svg";
import StackIcon from "../../assets/stackCheckIcon.svg";
import TrashIcon from "../../assets/trashIcon.svg";
import RangeArc from "../../components/molecules/RangeArc";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import { style } from "./style";

const PanelAdm = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <HeaderAdmin />
      <SubHeader tittle={"Resumão de tudo"} />
      <View>
        <RangeArc rangeValue={12} description={"Medidor de Vacilões Devendo"} />
        <View style={style.content}>
          <View style={style.containerInfos}>
            <SmallIconBeer />
            <Text style={style.textInfo}>00 Litros não pagos</Text>
          </View>

          <View style={style.containerInfos}>
            <StackIcon />
            <Text style={style.textInfo}> 00 Dívidas pagas</Text>
          </View>

          <View style={style.containerButtons}>
            <TouchableOpacity
              style={style.button}
              onPress={() => navigation.navigate("PanelDelete")}
            >
              <TrashIcon />
              <Text style={style.textButton}>Deletar Dívidas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.button}
              onPress={() => navigation.navigate("PanelUserManager")}
            >
              <SettingIcon />
              <Text style={style.textButton}>Gerenciar Usuários</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.button}
              onPress={() => navigation.navigate("PanelReasonManager")}
            >
              <ManagerReasonIcon />
              <Text style={style.textButton}>Gerenciar Dívidas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PanelAdm;
