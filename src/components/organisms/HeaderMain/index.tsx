import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { authLoginStore } from "../../../stores/AuthLogin";
import { modalHeader } from "../../../stores/ModalHeader";
import { style } from "./style";

const HeaderMain = () => {
  const { infoUser } = authLoginStore();
  const { setOpened } = modalHeader();
  return (
    <View style={style.container}>
      <View style={style.containerInfoUser}>
        <Text style={style.titleWelcome}>Bem vindo,</Text>
        <Text style={style.nameUser}>
          {infoUser[0]?.toUpperCase() + infoUser.substring(1)}
        </Text>
      </View>
      <TouchableOpacity onPress={() => setOpened()}>
        <Icon name="chevron-down" size={20} style={style.downIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMain;
