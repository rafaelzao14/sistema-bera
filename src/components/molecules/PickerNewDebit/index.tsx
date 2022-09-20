import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { style } from "./style";
type PickerProps = {
  list?: any;
  //FIXME: Arrumar tipagem, só está por que o formato da resposta da API não está definido;
};
//Vai receber por props uma array para listar os dados de todos usuários cadastrados.
const PickerNewDebit = ({ list }: PickerProps) => {
  // const [items, setItems] = useState<Array<ItemType>>(
  //   violationAttendanceTypes.map(attendance => {
  //     return {
  //       label: attendance.description,
  //       value: attendance.id,
  //     };
  //   }),
  // );
  console.log("usuariooooooooo", list);
  const users = list.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(users);
  console.log(value);
  return (
    <DropDownPicker
      style={style.picker}
      containerStyle={style.insideStyle}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={style.dropDown}
    />
  );
};

export default PickerNewDebit;
