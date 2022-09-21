import React from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, View } from "react-native";
import Toast from "react-native-toast-message";
import { fakeDebits, fakeListUser } from "../../../mocks/listUsers";
import { sleep } from "../../../utils/sleep";
import Button from "../../atoms/Button";
import ControlledComment from "../../atoms/ControlledInputComment";
import PickerDebit from "../PickDebit";
import PickerUser from "../PickerUser";
import { style } from "./style";

const FormDebt = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleNewDebit(data: any) {
    console.log(data);

    await sleep(2000);
    Toast.show({
      type: "success",
      text1: "Vacilo Registrado!",
    });
    reset();
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
