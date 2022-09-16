import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFCA43",
    height: 120,
    color: "#BC6600",
    alignItems: "center",
    borderTopColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginLeft: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
  },
  mainIcon: {
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
  },
});
