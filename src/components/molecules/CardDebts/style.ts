import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  card: {
    flexDirection: "row",

    backgroundColor: "#CFCFCF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CFCFCF",

    height: 96,
    width: 360,

    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 20,

    justifyContent: "space-between",
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
  containerName: {
    maxWidth: 72,
    fontWeight: "bold",
  },
  userName: {
    fontSize: 14,
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
