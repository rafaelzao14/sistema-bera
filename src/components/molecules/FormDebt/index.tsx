import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, View } from "react-native";
import Toast from "react-native-toast-message";

import { getReasons, registerDebt } from "../../../http/services/debtService";
import { getAllUser } from "../../../http/services/userService";
import { useAllUserStore } from "../../../stores/useAllUser";
import { useDebtStore } from "../../../stores/useDebtStores";
import { debtSchema } from "../../../validators/schema";
import Button from "../../atoms/Button";
import ControlledComment from "../../atoms/ControlledInputComment";
import ErrorMsg from "../../atoms/ErrorMsg";

import PickerDebit from "../PickDebit";
import PickerUser from "../PickerUser";
import { style } from "./style";

type formProp = {
  comment?: string;
  debtId?: number;
  userId?: number;
};
type dataProp = {
  reasonId?: number;
  description?: string;
};
const FormDebt = () => {
  const { setReasons } = useDebtStore();
  const { setUsers } = useAllUserStore();
  const [loading, setLoading] = useState(true);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(debtSchema) });

  console.log(errors);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    init();
  }, []);
  async function renderReasons() {
    try {
      const res = await getReasons();
      const listDebts = res.data;
      setReasons(listDebts);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  }
  async function renderUsers() {
    try {
      const res = await getAllUser(0);
      setUsers(res.data);
      setLoading(false);
      return res;
    } catch (error) {
      throw error;
    }
  }
  async function init() {
    try {
      renderReasons();
      renderUsers();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleNewDebit(data: formProp) {
    const { comment, debtId, userId } = data;

    const dataApi: dataProp = { reasonId: debtId, description: comment };

    try {
      await registerDebt(userId, dataApi);

      Toast.show({
        type: "success",
        text1: "Vacilo Registrado!",
      });
      reset();
    } catch (error) {
      throw error;
    }
  }
  return (
    <View style={style.containerSelect}>
      <ActivityIndicator
        size="small"
        color="#0000ff"
        animating={isSubmitting || loading}
      />
      <PickerUser control={control} name="userId" />
      {errors.userId && <ErrorMsg msgError={`${errors.userId?.message}`} />}
      <PickerDebit control={control} name="debtId" />
      {errors.debtId && <ErrorMsg msgError={`${errors.debtId?.message}`} />}
      <ControlledComment control={control} name={"comment"} />
      {errors.comment && <ErrorMsg msgError={`${errors.comment?.message}`} />}

      <Button textValue={"Registrar"} onClick={handleSubmit(handleNewDebit)} />
    </View>
  );
};
export default FormDebt;
