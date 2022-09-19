import { MotiView } from "moti";
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
        <Text style={style.nameUser}>{infoUser.name}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="chevron-down" size={20} style={style.downIcon} />
      </TouchableOpacity>
      <MotiView
        style={style.modal}
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "timing",
          duration: 350,
        }}
      >
        <Text>Modal Teste</Text>
      </MotiView>
    </View>
  );
};

export default HeaderMain;
