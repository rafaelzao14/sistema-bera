import { useFocusEffect } from "@react-navigation/native";
import { useAnimationState } from "moti";
import React from "react";
import { View } from "react-native";
import ViewAnimated from "../../components/atoms/ViewAnimated";
import FormDebt from "../../components/molecules/FormDebt";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderMain from "../../components/organisms/HeaderMain";

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

  useFocusEffect(() => {
    onPress("open");
    return () => onPress("closed");
  });

  return (
    <View style={style.container}>
      <HeaderMain />

      <SubHeader tittle={"Novo Vacilo"} />

      <ViewAnimated>
        <FormDebt />
      </ViewAnimated>
    </View>
  );
};

export default NewDebit;
