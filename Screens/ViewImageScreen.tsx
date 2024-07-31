import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function () {
  return (
    <View
      style={[
        styles.bg,
        {
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="close" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.img} source={require("./../assets/car1.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#000",
    flex: 1,
  },
  btnContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 40,
    flexDirection: "row",
  },
  img: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
