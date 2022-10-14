import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    maxHeight: 200,
    borderRadius: 12,
  },
  containerButtons: {
    flexDirection: "row",
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonYes: {
    flex: 1,

    backgroundColor: "#FB4949",
    borderRadius: 8,

    color: "#FFF",

    marginRight: 16,

    height: 42,

    maxWidth: 70,
    maxHeight: 60,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonCancel: {
    flex: 1,

    backgroundColor: "#D9D9D9",
    borderRadius: 8,

    marginRight: 16,

    height: 42,

    maxWidth: 70,
    maxHeight: 60,

    alignItems: "center",
    justifyContent: "center",
  },
});
