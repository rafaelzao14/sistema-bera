import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { style } from "./style";

interface ModalProp {
  visibility?: boolean;
  controlVisible?: (param: boolean) => void;
  doLogout?: () => void;
}

const ModalLogout = ({ visibility, controlVisible, doLogout }: ModalProp) => {
  return (
    <View>
      <Modal
        isVisible={visibility}
        animationIn="zoomIn"
        animationInTiming={600}
        animationOut="zoomOut"
        animationOutTiming={600}
      >
        <View style={style.container}>
          <Text>Já vai desgraça?</Text>
          <View style={style.containerButtons}>
            <TouchableOpacity style={style.button} onPress={() => doLogout()}>
              <Text>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.button}
              onPress={() => controlVisible(false)}
            >
              <Text>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalLogout;
