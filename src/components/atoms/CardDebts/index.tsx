import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GlassBeer from "../../../assets/glassBeer.svg";
import { User } from "../../organisms/ListDebts";
import { style } from "./style";

type CardProps = {
  userDetails?: User;
  indexItem?: number;
};

const CardDebt = ({ userDetails, indexItem }: CardProps) => {
  console.log(userDetails?.debt[indexItem]?.reason[indexItem]?.quantity);
  return (
    <TouchableOpacity style={style.card}>
      <Text>{userDetails.name}</Text>
      <View style={style.containerText}>
        <GlassBeer />
        <Text style={style.textInfo}>Beras: 00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardDebt;
