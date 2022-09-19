import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    maxHeight: 150,
    backgroundColor: "#FFCA43",
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
    paddingTop: 58,
    paddingLeft: 16,
    maxHeight: 150,
  },
  titleWelcome: {
    color: "#FFF",
    fontSize: 24,
  },
  nameUser: {
    color: "#181414",
    fontSize: 24,
    fontWeight: "bold",
  },
  downIcon: {
    color: "#FFF",
    marginLeft: 207,
    marginTop: 8,
  },
  modal: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
