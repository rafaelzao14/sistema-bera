import { MotiView } from "moti";
import React, { ReactNode, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { getAllUser } from "../../../http/services/getAllUsers";
import CardDebt from "../../atoms/CardDebts";
import SubHeader from "../../molecules/SubHeader";
import { style } from "./style";

export type User = {
  username: ReactNode;
  debtQuantity: number;
  id: number;
};

const ListDebts = () => {
  const [users, setUsers] = useState<User[]>();

  async function getUsers() {
    try {
      const response = await getAllUser();

      const users: User[] = response.data;

      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={style.container}>
      <SubHeader />
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing" }}
      >
        <FlatList
          contentContainerStyle={style.containerList}
          data={users}
          renderItem={({ item, index }) => (
            <CardDebt userDetails={item} indexItem={index} />
          )}
          keyExtractor={({ id }) => String(id)}
        />
      </MotiView>
    </View>
  );
};

export default ListDebts;
