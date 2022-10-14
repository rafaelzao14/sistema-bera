import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { style } from "./style";

interface ModalProp {
  visibility?: boolean;
  controlVisible?: (param: boolean) => void;
}

const ModalDelete = ({ visibility, controlVisible }: ModalProp) => {
  return (
    <View>
      <Modal
        isVisible={visibility}
        animationIn="zoomIn"
        animationInTiming={300}
        animationOut="zoomOut"
        animationOutTiming={300}
        backdropOpacity={0.5}
      >
        <View style={style.container}>
          <Text>Quer excluir memo mermão??</Text>
          <View style={style.containerButtons}>
            <TouchableOpacity style={style.buttonYes}>
              <Text style={{ color: "#FFF" }}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.buttonCancel}
              onPress={() => controlVisible(false)}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDelete;
