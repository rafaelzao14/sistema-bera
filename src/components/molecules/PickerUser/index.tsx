import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { useAllUserStore } from "../../../stores/useAllUser";
import ErrorMsg from "../../atoms/ErrorMsg";
import { style } from "./style";
type PickerProps = {
  control?: Control<any>;
  name?: string;
  errorAlert?: any; //FIXME: arrumar tipagem;

  //FIXME: Arrumar tipagem, só está por que o formato da resposta da API não está definido;
};
//Vai receber por props uma array para listar os dados de todos usuários cadastrados.
const PickerUser = ({ control, name, errorAlert }: PickerProps) => {
  const { users } = useAllUserStore();

  const selectUser = users.map((item) => {
    return {
      label: item.username,
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
              placeholder="Selecione um otário"
              style={style.picker}
              containerStyle={style.insideStyle}
              open={open}
              value={value}
              items={selectUser}
              setOpen={setOpen}
              setValue={() => {}}
              setItems={() => {}}
              dropDownContainerStyle={style.dropDown}
              dropDownDirection="TOP"
              onSelectItem={(event) => onChange(event.value)}
              searchable
            />
            {errorAlert && <ErrorMsg msgError={`${errorAlert}`} />}
          </>
        );
      }}
    />
  );
};

export default PickerUser;
