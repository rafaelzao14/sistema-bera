import React from "react";
import { Text, View } from "react-native";
import GlassBeer from "../../../assets/glassBeer.svg";
import { style } from "./style";

interface DebtsDetailProps {
  item: {
    description: string;
    id: number;
    paymentId: 21;
    reason: {
      description: string;
      id: number;
      quantity: number;
    };
    userId: number;
  };
  indexItem?: number;
}
const CardDeitailDebts = ({ item, indexItem }: DebtsDetailProps) => {
  return (
    <View style={style.container}>
      <View style={style.containerDescriptions}>
        <Text style={style.textReason}>{item.reason.description}</Text>
        <Text style={style.textDescription}>Motivo:{item.description} </Text>
      </View>
      <View style={style.containerInfo}>
        <GlassBeer />
        <Text>beras:{item.reason.quantity}</Text>
      </View>
    </View>
  );
};

export default CardDeitailDebts;
