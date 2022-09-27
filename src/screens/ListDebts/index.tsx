import React, { ReactNode, useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import LoadingCircle from "../../components/atoms/LoadingCircle";
import { getAllUser } from "../../http/services/userService";
import { useAllUserStore } from "../../stores/useAllUser";

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
  const { users, setUsers } = useAllUserStore();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getUsers();
  }, []);
  async function getUsers() {
    try {
      const response = await getAllUser(skip);

      const listUsers: User[] = response.data;

      setUsers([...users, ...listUsers]);
      setSkip(skip + 5);
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
          onEndReached={getUsers}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<LoadingCircle />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getUsers} />
          }
        />
      </ViewAnimated>
    </View>
  );
};

export default ListDebts;
