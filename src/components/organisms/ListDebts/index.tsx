import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { getAllUser } from "../../../http/services/getAllUsers";
import CardDebt from "../../atoms/CardDebts";
import SubHeader from "../../molecules/SubHeader";
import { style } from "./style";

type reasonProp = {
  id?: number;
  quantity?: string;
};

type debtsProps = {
  description?: string;
  id?: number;
  paymentId?: number;
  reason?: reasonProp[];
  userId?: number;
};

export type User = {
  debt: debtsProps[];
  email: string;
  id: number;
  name: string;
  password: string;
};

const ListDebts = () => {
  const [users, setUsers] = useState<User[]>();

  async function getUsers() {
    const response = await getAllUser();
    const users: User[] = response.data;

    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={style.container}>
      <SubHeader />
      <FlatList
        contentContainerStyle={style.containerList}
        data={users}
        renderItem={({ item, index }) => (
          <CardDebt userDetails={item} indexItem={index} />
        )}
        keyExtractor={({ id }) => String(id)}
      />
    </View>
  );
};

export default ListDebts;
