import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    backgroundColor: "#CFCFCF",
    width: 320,
    height: 132,
    marginBottom: 16,

    borderRadius: 12,
  },
  containerInfo: {
    alignItems: "center",
  },
  textReason: {
    fontWeight: "bold",
  },
  textDescription: {
    fontStyle: "italic",
    fontSize: 10,
  },
});
