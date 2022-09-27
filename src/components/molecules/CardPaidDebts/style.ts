import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    backgroundColor: "#CFCFCF",
    width: 380,
    maxHeight: 100,

    marginBottom: 16,

    borderRadius: 12,
  },
  containerElements: {
    maxWidth: "100%",
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
    width: "100%",
  },
});
