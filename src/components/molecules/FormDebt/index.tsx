import React from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, View } from "react-native";
import Toast from "react-native-toast-message";
import { registerDebt } from "../../../http/services/registerDebt";
import { fakeDebits, fakeListUser } from "../../../mocks/listUsers";
import Button from "../../atoms/Button";
import ControlledComment from "../../atoms/ControlledInputComment";
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
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleNewDebit(data: formProp) {
    const { comment, debtId, userId } = data;

    const dataApi: any = { reasonId: debtId, description: comment };
    try {
      await registerDebt(userId, dataApi);

      Toast.show({
        type: "success",
        text1: "Vacilo Registrado!",
      });
      reset();
    } catch (error) {}
  }
  return (
    <View style={style.containerSelect}>
      <ActivityIndicator
        size="small"
        color="#0000ff"
        animating={isSubmitting}
      />
      <PickerUser list={fakeListUser} control={control} name="userId" />
      <PickerDebit list={fakeDebits} control={control} name="debtId" />
      <ControlledComment control={control} name={"comment"} />
      <Button textValue={"Registrar"} onClick={handleSubmit(handleNewDebit)} />
    </View>
  );
};
export default FormDebt;
function registerDebts(id: any, data: string) {
  throw new Error("Function not implemented.");
}
