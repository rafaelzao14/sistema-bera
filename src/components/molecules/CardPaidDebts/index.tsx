import { format } from "date-fns";
import React from "react";
import { Text, View } from "react-native";
import Checked from "../../../assets/checked.svg";
import { style } from "./style";

interface DebtsDetailProps {
  item?: {
    debt?: {
      users?: {
        username: string;
      };
    };
    createdAt: string;
    description?: string;
  };
  indexItem?: number;
}
const CardPaidDebts = ({ item, indexItem }: DebtsDetailProps) => {
  return (
    <View style={style.container}>
      <View style={style.containerElements}>
        <Text style={style.textName}>{item.debt.users.username}</Text>
        <Text style={style.textDescription}>
          Pago em: {format(new Date(item.createdAt), "dd/MM/yyyy")}
        </Text>
        <Text style={style.textDescription}>{item.description}</Text>
      </View>
      <View style={style.containerInfo}>
        <Checked />
      </View>
    </View>
  );
};

export default CardPaidDebts;
