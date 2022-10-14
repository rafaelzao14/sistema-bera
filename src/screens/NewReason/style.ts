import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  containerSelect: {
    flex: 1,
    width: "90%",
    maxHeight: 300,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#FFCA43",
    marginTop: 46,
    borderRadius: 12,
  },
  containerAdd: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    marginBottom: 16,
  },
});
