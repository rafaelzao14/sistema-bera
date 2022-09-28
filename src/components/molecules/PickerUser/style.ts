import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  picker: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    width: "100%",
    height: 46,

    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: "#FFF",

    alignSelf: "center",
    marginBottom: 16,
  },
  text: {
    width: "100%",
    // textAlign: "center",
    // textAlignVertical: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#767676",
  },
  insideStyle: {
    backgroundColor: "#FFCA43",
    alignItems: "center",
    width: "80%",
  },
  dropDown: {
    backgroundColor: "#FFCA43",
    borderWidth: 0.5,
    borderColor: "#FFF",
  },
  modalDebit: {
    backgroundColor: "#FFF",
  },
  containerLabel: {
    justifyContent: "center",
    alignSelf: "center",
    height: 40,
    marginTop: 16,
    // backgroundColor: "red",
  },
  labelItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItem: {
    color: "#FFF",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  containerSelectItem: {
    backgroundColor: "#9F9F9F",
    justifyContent: "center",
  },
});
