import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { authLoginStore } from "../../../stores/AuthLogin";
import AvatarFake from "../../atoms/AvatarFake";
import { styleHeader } from "./style";

const HeaderMain = () => {
  const { infoUser } = authLoginStore();

  return (
    <View style={styleHeader.container}>
      <View style={styleHeader.containerInfoUser}>
        <Text style={styleHeader.titleWelcome}>Bem vindo,</Text>
        <Text style={styleHeader.nameUser}>{infoUser?.name}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="chevron-down" size={20} style={styleHeader.downIcon} />
      </TouchableOpacity>

      <AvatarFake />
    </View>
  );
};

export default HeaderMain;
