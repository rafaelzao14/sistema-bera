import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LoadingCircle from "../../components/atoms/LoadingCircle";
import CardDebt from "../../components/molecules/CardDebts";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import { getDebts } from "../../http/services/debtService";
import { User } from "../ListDebts";
import { style } from "./style";

const PanelDelete = () => {
  const [debts, setDebts] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [skip, setSkip] = useState(0);
  const [endedList, setEndedList] = useState(false);

  const listDebts = useCallback(async () => {
    try {
      setRefreshing(false);

      const res = await getDebts(skip);

      if (res.length === 0) {
        setEndedList(true);
        return;
      }
      setLoading(false);
      setSkip((prev) => prev + 8);
      setDebts([...debts, ...res]);
    } catch (error) {
      console.log(error.message);
    }
  }, [skip]);

  useEffect(() => {
    if (debts.length === 0) {
      listDebts();
    }
  }, [debts]);

  function cleanAndRefresh() {
    setRefreshing(true);
    setDebts([]);
    setSkip((prev) => (prev = 0));
    setEndedList(false);
  }
  return (
    <View style={style.container}>
      <HeaderAdmin />
      <SubHeader tittle={"Deletar Dívidas"} />
      <View>
        <FlatList
          data={debts}
          renderItem={({ item, index }) => (
            <View>
              <CardDebt userDetails={item} indexItem={index} />
              <TouchableOpacity>
                <Text>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={({ id }) => {
            return id.toString();
          }}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (endedList) {
              return;
            }
            listDebts();
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
      </View>
    </View>
  );
};

export default PanelDelete;
