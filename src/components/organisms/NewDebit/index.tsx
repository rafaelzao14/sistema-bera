import React from "react";
import { View } from "react-native";
import { fakeListUser } from "../../../mocks/listUsers";
import { authLoginStore } from "../../../stores/AuthLogin";
import PickerUser from "../../molecules/PickerNewDebit";
import HeaderMain from "../HeaderMain";
import { style } from "./style";

const NewDebit = () => {
  const { infoUser } = authLoginStore();
  console.log(infoUser);

  return (
    <View style={style.container}>
      <HeaderMain />
      <View style={style.containerSelect}>
        <PickerUser list={fakeListUser} />
      </View>
    </View>
  );
};

export default NewDebit;
