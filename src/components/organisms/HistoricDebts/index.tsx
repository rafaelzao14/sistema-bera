import React from "react";
import { FlatList, Text, View } from "react-native";
import { userCardStore } from "../../../stores/useCardStore";
import { style } from "./style";

const HistoricDebts = () => {
  const { infoUserDebts } = userCardStore();
  console.log(infoUserDebts);
  return (
    <View style={style.container}>
      <FlatList
        contentContainerStyle={style.container}
        data={infoUserDebts}
        renderItem={({ item, index }) => <Text>{item.description}</Text>}
        keyExtractor={({ id }) => String(id)}
      />
    </View>
  );
};

export default HistoricDebts;
