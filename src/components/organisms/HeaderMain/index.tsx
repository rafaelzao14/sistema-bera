import jwt_decode, { JwtPayload } from "jwt-decode";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "../../../stores/AuthLogin";
import ModalLogout from "../../molecules/ModalLogout";
import { styleHeader } from "./style";

const HeaderMain = () => {
  const { token, logOut } = useAuthStore();

  const decod = jwt_decode<JwtPayload>(token);

  const [openModal, setOpenModal] = useState(false);

  function toogleModal() {
    setOpenModal(true);
  }

  return (
    <View style={styleHeader.container}>
      <View style={styleHeader.containerInfoUser}>
        <Text style={styleHeader.titleWelcome}>Bem vindo,</Text>
        <Text style={styleHeader.nameUser}>{decod.username}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => toogleModal()}>
          {/* <Icon name="chevron-down" size={20} style={styleHeader.downIcon} /> */}
          <Text style={styleHeader.downIcon}>Sair</Text>
        </TouchableOpacity>
      </View>
      <ModalLogout
        visibility={openModal}
        controlVisible={setOpenModal}
        doLogout={logOut}
      />
    </View>
  );
};

export default HeaderMain;
