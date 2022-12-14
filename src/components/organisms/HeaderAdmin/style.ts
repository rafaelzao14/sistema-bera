import { StyleSheet } from "react-native";

export const styleHeader = StyleSheet.create({
  container: {
    alignItems: "center",

    backgroundColor: "#FFCA43",

    flex: 1,
    flexDirection: "row",

    justifyContent: "space-between",

    maxHeight: 150,

    paddingLeft: 32,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  containerInfoUser: {
    flexDirection: "column",
    maxHeight: 150,
    marginTop: 16,
  },
  nameUser: {
    color: "#181414",
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWelcome: {
    color: "#FFF",
    fontSize: 24,
  },
  downIcon: {
    color: "#FFF",
    marginLeft: 132,
    marginTop: 32,
  },
});
