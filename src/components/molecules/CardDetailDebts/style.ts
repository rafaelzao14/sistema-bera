import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    backgroundColor: "#CFCFCF",
    width: 360,
    height: 132,
    marginBottom: 16,

    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  containerDescriptions: {
    alignItems: "center",
    maxWidth: 250,
    minWidth: 232,
    maxHeight: 132,
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
