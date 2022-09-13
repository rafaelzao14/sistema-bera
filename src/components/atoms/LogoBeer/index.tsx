import React from "react";
import { Image } from "react-native";
import { style } from "./style";

const LogoBeer = () => {
  return (
    <Image style={style.logo} source={require("../../../assets/logo1.png")} />
  );
};

export default LogoBeer;
