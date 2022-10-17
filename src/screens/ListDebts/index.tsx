import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import LoadingCircle from "../../components/atoms/LoadingCircle";
import { getUserPerPage } from "../../http/services/userService";

import ViewAnimated from "../../components/atoms/ViewAnimated";
import CardDebt from "../../components/molecules/CardDebts";
import SubHeader from "../../components/molecules/SubHeader";
import { sleep } from "../../utils/sleep";
import { style } from "./style";

export type User = {
  username: ReactNode;
  debtQuantity: number;
  id: number;
};

const ListDebts = () => {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [endedList, setEndedList] = useState(false);
  const [skip, setSkip] = useState(0);

  const getUsers = useCallback(async () => {
    try {
      setRefreshing(false);
      await sleep(500);
      const newUsers = await getUserPerPage(skip);

      if (newUsers.length === 0) {
        setEndedList(true);
        return;
      }

      setUsers([...users, ...newUsers]);
      setSkip((prev) => prev + 8);
    } catch (error) {
      console.log(error);
    }
  }, [skip]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const emptyUsers = users.length === 0;
    const initialPage = skip === 0;

    if (emptyUsers && initialPage && !endedList) {
      getUsers();
    }
  }, [skip, users, endedList]);

  function cleanAndRefresh() {
    setRefreshing(true);
    setUsers([]);
    setSkip((prev) => (prev = 0));
    setEndedList(false);
  }
  return (
    <View style={style.container}>
      <SubHeader tittle={"Lista dos vacilões"} />

      <ViewAnimated>
        <FlatList
          contentContainerStyle={style.containerList}
          data={users}
          renderItem={({ item, index }) => (
            <CardDebt userDetails={item} indexItem={index} />
          )}
          keyExtractor={({ id }) => {
            return id.toString();
          }}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (endedList) {
              return;
            }
            getUsers();
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
  );
};

export default ListDebts;
