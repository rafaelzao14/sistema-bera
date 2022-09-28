import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import ViewAnimated from "../../components/atoms/ViewAnimated";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderMain from "../../components/organisms/HeaderMain";

import { useDebtStore } from "../../stores/useDebtStores";

import CardPaidDebts from "../../components/molecules/CardPaidDebts";
import { getPaids } from "../../http/services/debtService";
import { style } from "./style";

const PaidDebits = () => {
  const { paidDebts, setPaidDebts } = useDebtStore();

  const listPaids = async () => {
    try {
      const res = await getPaids();
      setPaidDebts(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    listPaids();
  }, []);

  return (
    <View style={style.container}>
      <HeaderMain />
      <SubHeader tittle={"Vacilos pagos"} />
      <ViewAnimated>
        <FlatList
          contentContainerStyle={style.containerList}
          data={paidDebts}
          renderItem={({ item, index }) => {
            return <CardPaidDebts item={item} indexItem={index} />;
          }}
          keyExtractor={({ id }) => id.toString()}
        />
      </ViewAnimated>
    </View>
  );
};
export default PaidDebits;
