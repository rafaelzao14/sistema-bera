import React from "react";
import { Text, View } from "react-native";
import TabMenu from "../../molecules/TabMenu";
import { style } from "./style";

const DebitsView = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>DebitsView</Text>
      <TabMenu />
    </View>
  );
};

export default DebitsView;
