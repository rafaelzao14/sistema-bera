import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  containerInfos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 200,
    marginBottom: 32,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 32,
  },
  button: {
    backgroundColor: "#EFEFEF",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 12,

    height: 110,
    width: 110,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },

  textInfo: {
    marginLeft: 16,
    fontSize: 16,
  },
  textButton: {
    fontSize: 10,
  },
  endList: {
    padding: 24,
    alignSelf: "center",
    marginBottom: 32,
  },
});
