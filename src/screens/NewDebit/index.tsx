import { useFocusEffect } from "@react-navigation/native";
import { useAnimationState } from "moti";
import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserRole } from "../../@types/roleEnum";
import ViewAnimated from "../../components/atoms/ViewAnimated";
import FormDebt from "../../components/molecules/FormDebt";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import HeaderMain from "../../components/organisms/HeaderMain";
import { useAuthStore } from "../../stores/AuthLogin";

import { style } from "./style";

const NewDebit = () => {
  const animationState = useAnimationState({
    open: {
      opacity: 1,
      scale: 1,
    },
    close: { opacity: 0, scale: 0 },
  });

  const onPress = (status: string) => {
    if (status === "closed") {
      animationState.transitionTo("close");
      return;
    }
    animationState.transitionTo("open");
  };
  const { userInfo } = useAuthStore();

  const isAdm = userInfo.role === UserRole.ADMIN;

  useFocusEffect(() => {
    onPress("open");
    return () => onPress("closed");
  });

  return (
    <View style={style.container}>
      {isAdm ? <HeaderAdmin /> : <HeaderMain />}

      <SubHeader tittle={"Novo Vacilo"} />
      <ViewAnimated>
        <KeyboardAwareScrollView>
          <FormDebt />
        </KeyboardAwareScrollView>
      </ViewAnimated>
    </View>
  );
};

export default NewDebit;
