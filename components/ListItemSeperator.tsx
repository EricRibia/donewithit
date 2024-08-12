import { StyleSheet, View } from "react-native";
import defaultStyles from "../default-styles";

export default function () {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: defaultStyles.colors.light,
  },
});
