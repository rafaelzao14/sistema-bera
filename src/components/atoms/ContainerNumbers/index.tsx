import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";

interface ContainerNumbersProps {
  quantity: number;
}
const ContainerNumbers = ({ quantity }: ContainerNumbersProps) => {
  return (
    <View style={style.container}>
      <Text style={style.number}>{quantity}</Text>
      <Text style={style.text}>beras</Text>
    </View>
  );
};

export default ContainerNumbers;
