import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "../../../stores/AuthLogin";
import ModalLogout from "../../molecules/ModalLogout";
import { styleHeader } from "./style";

const HeaderMain = () => {
  const { userInfo, logOut } = useAuthStore();
  console.log(userInfo);

  const [openModal, setOpenModal] = useState(false);

  function toogleModal() {
    setOpenModal(true);
  }

  return (
    <View style={styleHeader.container}>
      <View style={styleHeader.containerInfoUser}>
        <Text style={styleHeader.titleWelcome}>Bem vindo,</Text>
        <Text style={styleHeader.nameUser}>{userInfo.username}</Text>
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
