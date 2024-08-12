import { Platform } from "react-native";
import colors from "./utils/colors";

export default {
  colors: colors,
  textInput: {
    fontSize: 18,
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
