import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GlassBeer from "../../../assets/glassBeer.svg";
import { getInfoUserCard } from "../../../http/services/userService";

import { userCardStore } from "../../../stores/useCardStore";
import { style } from "./style";

type CardProps = {
  userDetails?: any;
  //FIXME: Arrumar tipagem;

  indexItem?: number;
};

const CardDebt = ({ userDetails, indexItem }: CardProps) => {
  const navigation = useNavigation();
  const { setInfoUserDebts } = userCardStore();

  async function handleRenderCard(id) {
    try {
      const res = await getInfoUserCard(id);

      setInfoUserDebts(res.data);

      navigation.navigate("DebitsUser");
    } catch (error) {}
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
