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
  button: {
    flex: 1,

    backgroundColor: "#FFBA09",
    borderRadius: 8,

    marginRight: 16,

    height: 42,

    maxWidth: 70,
    maxHeight: 60,

    alignItems: "center",
    justifyContent: "center",
  },
});
