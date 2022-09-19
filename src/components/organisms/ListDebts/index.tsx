import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getAllUser } from "../../../http/services/getAllUsers";
import CardDebt from "../../atoms/CardDebts";
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
    console.log("usuario:", users[0].debt[0]);
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <FlatList
      contentContainerStyle={style.container}
      data={users}
      renderItem={({ item, index }) => (
        <CardDebt userDetails={item} indexItem={index} />
      )}
      keyExtractor={({ id }) => String(id)}
    />
  );
};

export default ListDebts;
