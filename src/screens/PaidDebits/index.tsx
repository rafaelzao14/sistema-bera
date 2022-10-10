import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderMain from "../../components/organisms/HeaderMain";

import LoadingCircle from "../../components/atoms/LoadingCircle";
import ViewAnimated from "../../components/atoms/ViewAnimated";
import CardPaidDebts from "../../components/molecules/CardPaidDebts";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import { getPaids } from "../../http/services/debtService";
import { style } from "./style";

const PaidDebits = () => {
  const [paidDebts, setPaidDebts] = useState<any[]>([]);
  const [skip, setSkip] = useState(0);
  const [endedList, setEndedList] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const isAdmin = true;

  const getListPaids = useCallback(
    async (skipNumber) => {
      try {
        setRefreshing(false);

        const listDebts = await getPaids(skipNumber);

        if (listDebts.length === 0) {
          setEndedList(true);
          return;
        }
        setPaidDebts([...paidDebts, ...listDebts]);
        setSkip((prev) => prev + 5);
      } catch (error) {
        console.log(error);
      }
    },
    [skip]
  );

  useEffect(() => {
    const initialPage = skip === 0;
    const emptyHistoric = paidDebts.length === 0;

    if (emptyHistoric && initialPage) {
      getListPaids(skip);
    }
  }, [paidDebts, skip, endedList]);
  function cleanAndRefresh() {
    setRefreshing(true);
    setPaidDebts([]);
    setSkip((prev) => (prev = 0));
    setEndedList(false);
  }
  return (
    <>
      {isAdmin ? <HeaderAdmin /> : <HeaderMain />}
      {/* <HeaderMain /> */}
      <View style={style.container}>
        <SubHeader tittle={"Vacilos pagos"} />
        <ViewAnimated>
          <FlatList
            data={paidDebts}
            renderItem={({ item, index }) => {
              return <CardPaidDebts item={item} indexItem={index} />;
            }}
            keyExtractor={({ id }) => id.toString()}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              if (endedList) {
                return;
              }
              getListPaids(skip);
            }}
            ListFooterComponent={() => {
              if (endedList) {
                return <Text style={style.endList}>Fim dos nomes</Text>;
              }
              if (!refreshing) {
                return <LoadingCircle />;
              }
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={cleanAndRefresh}
              />
            }
          />
        </ViewAnimated>
      </View>
    </>
  );
};
export default PaidDebits;
