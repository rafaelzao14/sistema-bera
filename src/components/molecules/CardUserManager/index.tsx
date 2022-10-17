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

const CardUserManager = ({ userDetails, indexItem, toogle }: CardProps) => {
  const navigation = useNavigation();

  return (
    <View style={style.card}>
      <View style={style.containerName}>
        <Text style={style.userName}>{userDetails.username}</Text>
      </View>
      <View style={style.containerText}>
        <TouchableOpacity onPress={toogle}>
          <Icon name="trash" size={24} color={"#FB4949"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardUserManager;
