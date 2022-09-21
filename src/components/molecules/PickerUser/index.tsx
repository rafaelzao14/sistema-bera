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
const PickerUser = ({ list, control, name }: PickerProps) => {
  const users = list.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const [open, setOpen] = useState(false);

  const [items, setItems] = useState(users);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <DropDownPicker
            placeholder="Selecione um otário"
            style={style.picker}
            containerStyle={style.insideStyle}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={() => {}}
            setItems={setItems}
            dropDownContainerStyle={style.dropDown}
            dropDownDirection="TOP"
            onSelectItem={(event) => onChange(event.value)}
            searchable
          />
        );
      }}
    />
  );
};

export default PickerUser;
