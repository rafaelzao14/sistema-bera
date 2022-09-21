import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  picker: {
    flexDirection: "row",
    backgroundColor: "#FFCA43",
    width: "100%",
    height: 46,

    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: "#FFF",

    alignSelf: "center",
    marginBottom: 16,
  },
  text: {
    textAlign: "center",
    width: "100%",
    fontSize: 12,
    fontWeight: "bold",
  },
  insideStyle: {
    backgroundColor: "#FFCA43",
    width: "80%",
  },
  dropDown: {
    backgroundColor: "#FFCA43",
    borderWidth: 1,
    borderColor: "#FFF",
  },
});
