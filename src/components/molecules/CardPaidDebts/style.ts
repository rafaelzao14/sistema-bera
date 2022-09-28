import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    backgroundColor: "#CFCFCF",
    maxHeight: 264,
    maxWidth: "80%",
    // maxWidth: 380,
    minHeight: 100,
    minWidth: 340,

    marginTop: 16,

    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  containerElements: {
    alignItems: "flex-start",
    width: "80%",
    paddingLeft: 8,
  },
  containerInfo: {
    paddingRight: 16,
  },
  textName: {
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: 11,
  },
});
