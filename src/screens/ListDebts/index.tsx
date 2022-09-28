import React, { ReactNode, useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import LoadingCircle from "../../components/atoms/LoadingCircle";
import { getUserPerPage } from "../../http/services/userService";

import ViewAnimated from "../../components/atoms/ViewAnimated";
import CardDebt from "../../components/molecules/CardDebts";
import SubHeader from "../../components/molecules/SubHeader";
import { style } from "./style";

export type User = {
  username: ReactNode;
  debtQuantity: number;
  id: number;
};

const ListDebts = () => {
  const [users, setUsers] = useState<any>([] as any); //FIXME: NÂO ESQUECER DE ARRUMAR TIPAGEM
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getUsers();
  }, [skip]);

  async function getUsers() {
    //FIXME: Está fazendo loadingde tudo e duplicando alguns objetos recebidos da Api;
    try {
      console.log("getUsers, skip: ", skip);

      const response = await getUserPerPage(skip);

      const listUsers: User[] = response.data;

      setUsers([...users, ...listUsers]);

      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      throw error;
    }
  }

  return (
    <View style={style.container}>
      <SubHeader tittle={"Lista dos vacilões"} />
      {!loading ? null : <LoadingCircle />}

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
          onEndReached={() => {
            console.log("onEndReached");
            setSkip((prev) => prev + 4);
            // getUsers();
          }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<LoadingCircle />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setUsers([]);
                getUsers();
              }}
            />
          }
        />
      </ViewAnimated>
    </View>
  );
};

export default ListDebts;
