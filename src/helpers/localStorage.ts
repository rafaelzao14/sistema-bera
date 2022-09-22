import AsyncStorage from "@react-native-async-storage/async-storage";

export const setTokenStorage = async (token: string) => {
  try {
    await AsyncStorage.setItem("@token", token);
  } catch (error) {
    console.log(error.message);
  }
};
