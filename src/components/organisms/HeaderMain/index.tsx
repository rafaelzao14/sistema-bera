import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { authLoginStore } from "../../../stores/AuthLogin";
import { style } from "./style";

const HeaderMain = () => {
  const { infoUser } = authLoginStore();

  return (
    <View style={style.container}>
      <View style={style.containerInfoUser}>
        <Text style={style.titleWelcome}>Bem vindo,</Text>
        <Text style={style.nameUser}>{infoUser?.name}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="chevron-down" size={20} style={style.downIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMain;
