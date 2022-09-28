import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { useDebtStore } from "../../../stores/useDebtStores";
import ErrorMsg from "../../atoms/ErrorMsg";
import { style } from "./style";
type PickerProps = {
  control?: Control<any>;
  name?: string;
  errorAlert?: any; //FIXME: arrumar tipagem;

  //FIXME: Arrumar tipagem, só está por que o formato da resposta da API não está definido;
};
//Vai receber por props uma array para listar os dados de todos usuários cadastrados.
const PickerDebit = ({ control, name, errorAlert }: PickerProps) => {
  const { reasons } = useDebtStore();
  const debit = reasons.map((item) => {
    return {
      label: item.description,
      value: item.id,
    };
  });
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <DropDownPicker
              placeholder="Selecione o tipo de vacilo"
              style={style.picker}
              containerStyle={style.insideStyle}
              open={open}
              value={value}
              items={debit}
              setOpen={setOpen}
              setValue={() => {}}
              setItems={() => {}}
              dropDownContainerStyle={style.dropDown}
              onSelectItem={(event) => onChange(event.value)}
              listMode="MODAL"
              badgeStyle={{ borderColor: "#FFF" }}
              listItemContainerStyle={style.containerLabel}
              listItemLabelStyle={style.labelItem}
              selectedItemLabelStyle={style.selectedItem}
              selectedItemContainerStyle={style.containerSelectItem}
              textStyle={style.text}
              modalProps={{
                animationType: "fade",
              }}
              modalContentContainerStyle={style.modalDebit}
              modalTitle={"Qual dos vacilos abaixo?"}
              modalTitleStyle={style.modalDebit}
            />
            {errorAlert && <ErrorMsg msgError={`${errorAlert}`} />}
          </>
        );
      }}
    />
  );
};

export default PickerDebit;
