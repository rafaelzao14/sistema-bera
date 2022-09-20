import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  textTittle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    marginTop: 80,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFCA43",
    height: 41,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  icon: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
});
