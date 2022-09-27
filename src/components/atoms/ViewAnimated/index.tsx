import { useFocusEffect } from "@react-navigation/native";
import { MotiView, useAnimationState } from "moti";
import React from "react";

interface ViewAnimatedProp {
  children?: React.ReactNode;
}

const ViewAnimated = ({ children }: ViewAnimatedProp) => {
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
  return <MotiView state={animationState}>{children}</MotiView>;
};

export default ViewAnimated;
