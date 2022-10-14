import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { UserRole } from "../../@types/roleEnum";
import LoadingCircle from "../../components/atoms/LoadingCircle";
import ViewAnimated from "../../components/atoms/ViewAnimated";
import CardUserManager from "../../components/molecules/CardUserManager";
import ModalDelete from "../../components/molecules/ModalDelete";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import HeaderMain from "../../components/organisms/HeaderMain";
import { getUserPerPage } from "../../http/services/userService";
import { useAuthStore } from "../../stores/AuthLogin";
import { sleep } from "../../utils/sleep";
import { style } from "./style";

const PanelUserManager = () => {
  const { userInfo } = useAuthStore();
  const isAdm = userInfo.role === UserRole.ADMIN;

  const [users, setUsers] = useState<any[]>([]); //FIXME: NÂO ESQUECER DE ARRUMAR TIPAGEM
  const [refreshing, setRefreshing] = useState(false);
  const [endedList, setEndedList] = useState(false);
  const [skip, setSkip] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function toogleModal() {
    setOpenModal(true);
  }

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
    <>
      {isAdm ? <HeaderAdmin /> : <HeaderMain />}
      <SubHeader tittle={"Gerenciar Usuários"} />
      <View style={style.container}>
        <ViewAnimated>
          <FlatList
            contentContainerStyle={style.containerList}
            data={users}
            renderItem={({ item, index }) => (
              <CardUserManager
                userDetails={item}
                indexItem={index}
                toogle={toogleModal}
              />
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
      <ModalDelete visibility={openModal} controlVisible={setOpenModal} />
    </>
  );
};

export default PanelUserManager;
