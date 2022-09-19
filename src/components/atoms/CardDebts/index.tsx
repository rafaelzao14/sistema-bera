import React from "react";
import { Text, View } from "react-native";
import { User } from "../../organisms/ListDebts";

import { style } from "./style";

type CardProps = {
  userDetails?: User;
  indexItem?: number;
};

const CardDebt = ({ userDetails, indexItem }: CardProps) => {
  console.log(userDetails?.debt[indexItem]?.reason[indexItem].quantity);
  return (
    <View style={style.card}>
      <Text>{userDetails.name}</Text>
      <Text>{userDetails.email}</Text>
      <Text>{userDetails.id}</Text>
      <Text>{userDetails?.debt[indexItem]?.description}</Text>
    </View>
  );
};

export default CardDebt;
