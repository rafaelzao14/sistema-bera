import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  card: {
    flexDirection: "row",

    backgroundColor: "#CFCFCF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CFCFCF",

    height: 96,
    width: 350,

    margin: 6,

    justifyContent: "space-around",
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInfo: {
    color: "#626262",
    fontSize: 12,
    fontWeight: "bold",
  },
});
