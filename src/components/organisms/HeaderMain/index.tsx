import jwt_decode, { JwtPayload } from "jwt-decode";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useAuthStore } from "../../../stores/AuthLogin";
import AvatarFake from "../../atoms/AvatarFake";
import { styleHeader } from "./style";

const HeaderMain = () => {
  const { token } = useAuthStore();

  const decod = jwt_decode<JwtPayload>(token);

  return (
    <View style={styleHeader.container}>
      <View style={styleHeader.containerInfoUser}>
        <Text style={styleHeader.titleWelcome}>Bem vindo,</Text>
        <Text style={styleHeader.nameUser}>{decod.username}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="chevron-down" size={20} style={styleHeader.downIcon} />
      </TouchableOpacity>

      <AvatarFake />
    </View>
  );
};

export default HeaderMain;
