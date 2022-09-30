import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import CardDeitailDebts from "../../components/molecules/CardDetailDebts";
import SubHeader from "../../components/molecules/SubHeader";

import ViewAnimated from "../../components/atoms/ViewAnimated";
import HeaderMain from "../../components/organisms/HeaderMain";

import { useRoute } from "@react-navigation/native";
import LoadingCircle from "../../components/atoms/LoadingCircle";
import { getInfoUserCard } from "../../http/services/userService";
import { sleep } from "../../utils/sleep";
import { style } from "./style";

const HistoricDebts = () => {
  const route = useRoute();
  const { name, id } = route.params;

  const [userDebts, setUserDebts] = useState<any[]>([]); //FIXME: corrigir tipagem
  const [skip, setSkip] = useState(0);
  const [endedList, setEndedList] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const renderCardInfos = useCallback(
    async (idUser, skipNumber) => {
      try {
        setRefreshing(false);
        await sleep(500);
        const historicInfos = await getInfoUserCard(idUser, skipNumber);

        if (historicInfos.length === 0) {
          setEndedList(true);
          return;
        }
        setUserDebts([...userDebts, ...historicInfos]);
        setSkip((prev) => prev + 4);
        return;
      } catch (error) {
        error;
      }
    },
    [skip]
  );
  function cleanAndRefresh() {
    setRefreshing(true);
    setUserDebts([]);
    setSkip((prev) => (prev = 0));
    setEndedList(false);
  }

  useEffect(() => {
    const initialPage = skip === 0;
    const emptyHistoric = userDebts.length === 0;

    if (emptyHistoric && initialPage) {
      renderCardInfos(id, skip);
    }
  }, [userDebts, skip, endedList]);

  return (
    <>
      <HeaderMain />

      <View style={style.container}>
        <SubHeader tittle={`Vacilos do ${name} `} />
        <ViewAnimated>
          <FlatList
            contentContainerStyle={style.containerList}
            data={userDebts}
            renderItem={({ item, index }) => {
              return <CardDeitailDebts item={item} indexItem={index} />;
            }}
            keyExtractor={({ id }) => {
              return id.toString();
            }}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              if (endedList) {
                return;
              }
              renderCardInfos(id, skip);
            }}
            ListFooterComponent={() => {
              if (endedList) {
                return <Text style={{ padding: 16 }}>Fim dos nomes</Text>;
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

export default HistoricDebts;
