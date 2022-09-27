import React from "react";
import { Text, View } from "react-native";
import GlassBeer from "../../../assets/glassBeer.svg";
import { style } from "./style";

interface DebtsDetailProps {
  item?: any;
  //FIXME: Concertar tipagem
  indexItem?: number;
}
const CardDeitailDebts = ({ item, indexItem }: DebtsDetailProps) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.textReason}>Motivo: {item.reason.description}</Text>
        <Text style={style.textDescription}>{item.description}</Text>
      </View>
      <View style={style.containerInfo}>
        <GlassBeer />
        <Text>beras:{item.reason.quantity}</Text>
      </View>
    </View>
  );
};

export default CardDeitailDebts;
