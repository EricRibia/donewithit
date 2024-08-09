import { StyleSheet, View } from "react-native";

import { Colors } from "../utils/colors";

export default function () {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.light,
  },
});
