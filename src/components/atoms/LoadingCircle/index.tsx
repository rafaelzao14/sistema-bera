import React from "react";
import { ActivityIndicator } from "react-native";

const LoadingCircle = () => {
  return (
    <ActivityIndicator size="small" color="#0000ff" style={{ padding: 16 }} />
  );
};

export default LoadingCircle;
