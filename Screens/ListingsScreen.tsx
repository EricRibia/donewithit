import { Platform, StatusBar, StyleSheet, View } from "react-native";
import CardComponent from "../components/CardComponent";

export default function () {
  return (
    <View style={styles.bg}>
      <CardComponent
        title="Jeep Rangler for sale!"
        subTitle="KES 100"
        image={require("./../assets/car1.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 0,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
