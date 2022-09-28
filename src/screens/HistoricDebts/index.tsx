import React from "react";
import { FlatList, View } from "react-native";
import CardDeitailDebts from "../../components/molecules/CardDetailDebts";
import SubHeader from "../../components/molecules/SubHeader";

import ViewAnimated from "../../components/atoms/ViewAnimated";
import HeaderMain from "../../components/organisms/HeaderMain";

import { useRoute } from "@react-navigation/native";
import { userCardStore } from "../../stores/useCardStore";
import { style } from "./style";

const HistoricDebts = () => {
  const { infoUserDebts } = userCardStore();
  const route = useRoute();

  const { name } = route.params;
  return (
    <>
      <HeaderMain />

      <View style={style.container}>
        <SubHeader tittle={`Vacilos do ${name} `} />
        <ViewAnimated>
          <FlatList
            contentContainerStyle={style.containerList}
            data={infoUserDebts}
            renderItem={({ item, index }) => {
              return <CardDeitailDebts item={item} indexItem={index} />;
            }}
            keyExtractor={({ id }) => {
              return id.toString();
            }}
          />
        </ViewAnimated>
      </View>
    </>
  );
};

export default HistoricDebts;
