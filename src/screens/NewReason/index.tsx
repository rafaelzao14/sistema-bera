import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import Button from "../../components/atoms/Button";
import CircleButton from "../../components/atoms/CircleButton";
import ContainerNumbers from "../../components/atoms/ContainerNumbers";
import ControlledComment from "../../components/atoms/ControlledInputComment";
import SubHeader from "../../components/molecules/SubHeader";
import HeaderAdmin from "../../components/organisms/HeaderAdmin";
import { style } from "./style";

const NewReason = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [quantity, setQuantity] = useState(1);

  function handleAddBera() {
    if (quantity === 15) {
      Toast.show({
        type: "info",
        text1: "Ninguém aqui é a ambev!!",
      });
      return;
    }
    setQuantity(quantity + 1);
  }
  function handleLowerBera() {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  }
  function handleReason(data) {
    const { reason } = data;
    const objReason = {
      reason: reason,
      quantity: quantity,
    };
    console.log(objReason);
  }
  return (
    <View style={style.container}>
      <HeaderAdmin />
      <SubHeader tittle={"Registrar Motivo"} />
      <View style={style.containerSelect}>
        <ControlledComment
          control={control}
          name={"reason"}
          placeholder={"Escreva o motivo. (máx 60 caracter)."}
        />
        <View style={style.containerAdd}>
          <CircleButton label="-" onClick={handleLowerBera} />
          <ContainerNumbers quantity={quantity} />
          <CircleButton label="+" onClick={handleAddBera} />
        </View>
        <Button textValue={"Registrar"} onClick={handleSubmit(handleReason)} />
      </View>
    </View>
  );
};

export default NewReason;
