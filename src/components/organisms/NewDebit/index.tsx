import { useFocusEffect } from "@react-navigation/native";
import { MotiView, useAnimationState } from "moti";
import React from "react";
import { View } from "react-native";
import FormDebt from "../../molecules/FormDebt";
import SubHeader from "../../molecules/SubHeader";

import HeaderMain from "../HeaderMain";
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

      <SubHeader />

      <MotiView state={animationState}>
        <FormDebt />
      </MotiView>
    </View>
  );
};

export default NewDebit;
