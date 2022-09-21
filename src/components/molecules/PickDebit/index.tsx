import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { style } from "./style";
type PickerProps = {
  list?: any;
  control?: Control<any>;
  name?: string;

  //FIXME: Arrumar tipagem, só está por que o formato da resposta da API não está definido;
};
//Vai receber por props uma array para listar os dados de todos usuários cadastrados.
const PickerDebit = ({ list, control, name }: PickerProps) => {
  const debit = list.map((item) => {
    return {
      label: item.reason,
      value: item.id,
    };
  });

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(debit);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <DropDownPicker
            placeholder="Selecione o tipo de vacilo"
            style={style.picker}
            containerStyle={style.insideStyle}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={() => {}}
            setItems={setItems}
            dropDownContainerStyle={style.dropDown}
            onSelectItem={(event) => onChange(event.value)}
          />
        );
      }}
    />
  );
};

export default PickerDebit;
