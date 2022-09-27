import { format } from "date-fns";
import React from "react";
import { Text, View } from "react-native";
import Checked from "../../../assets/checked.svg";
import { style } from "./style";

interface DebtsDetailProps {
  item?: any;
  //FIXME: Concertar tipagem
  indexItem?: number;
}
const CardPaidDebts = ({ item, indexItem }: DebtsDetailProps) => {
  return (
    <View style={style.container}>
      <View style={style.containerElements}>
        <Text style={style.textReason}>{item.debt.users.username}</Text>
        <Text style={style.textDescription}>
          pago em: {format(new Date(item.createdAt), "dd-MM-yyyy")}
        </Text>
        <Text style={style.textDescription}>{item.debt.description}</Text>
      </View>
      <View style={style.containerInfo}>
        <Checked />
      </View>
    </View>
  );
};

export default CardPaidDebts;