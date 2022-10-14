import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { style } from "./style";

type CardProps = {
  userDetails?: {
    id?: number;
    username?: string;
    debtQuantity?: number;
  };

  indexItem?: number;
  toogle?: () => void;
};

const CardGeneralDebt = ({ userDetails, indexItem, toogle }: CardProps) => {
  const navigation = useNavigation();

  function handleRenderCard(i) {
    try {
      navigation.navigate("DebitsUser", {
        id: userDetails.id,
        name: userDetails.username,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.card}>
      <View style={style.containerName}>
        <Text style={style.userName}>{userDetails.username}</Text>
      </View>
      <View style={style.containerText}>
        <Text>Devendo:</Text>
        <Text style={style.textInfo}>{userDetails.debtQuantity} Beras</Text>
        <TouchableOpacity onPress={toogle}>
          <Icon name="trash" size={24} color={"#FB4949"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardGeneralDebt;
