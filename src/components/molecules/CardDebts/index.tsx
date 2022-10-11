import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GlassBeer from "../../../assets/glassBeer.svg";

import { style } from "./style";

type CardProps = {
  userDetails?: {
    id?: number;
    username?: string;
    debtQuantity?: number;
  };

  indexItem?: number;
};

const CardDebt = ({ userDetails, indexItem }: CardProps) => {
  const navigation = useNavigation();

  function handleRenderCard(i) {
    try {
      navigation.navigate("DebitsUser", {
        id: userDetails.id,
        name: userDetails.username,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TouchableOpacity
      style={style.card}
      onPress={() => handleRenderCard(userDetails.id)}
    >
      <View style={style.containerName}>
        <Text style={style.userName}>{userDetails.username}</Text>
      </View>
      <View style={style.containerText}>
        <GlassBeer />
        <Text style={style.textInfo}>Beras: {userDetails.debtQuantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardDebt;
