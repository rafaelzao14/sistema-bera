import React, { useState } from "react";
import { Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { style } from "./style";

interface PickReasonProp {
  control?: any;
  name?: string;
}

const PickReason = ({ control, name }: PickReasonProp) => {
  const [open, setOpen] = useState(false);

  const listQuantity = [
    { label: "1 Bera", value: 1 },
    { label: "2 Bera", value: 2 },
    { label: "3 Bera", value: 3 },
    { label: "4 Bera", value: 4 },
  ];
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
              items={listQuantity}
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
            {/* {errorAlert && <ErrorMsg msgError={`${errorAlert}`} />} */}
          </>
        );
      }}
    />
  );
};

export default PickReason;
