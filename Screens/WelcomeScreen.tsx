import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { Colors } from "../utils/colors";

export default function () {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        blurRadius={3}
        style={styles.bg}
        source={require("./../assets/bg.jpg")}
      >
        <Text style={styles.logo}>Cars. App</Text>
        <Text style={styles.subText}>Know your cars</Text>
        <View style={styles.btnsContainer}>
          <ButtonComponent
            label="register"
            styles={{ backgroundColor: Colors.secondary, marginBottom: 15 }}
          />
          <ButtonComponent
            label="login"
            styles={{ backgroundColor: Colors.primary }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    resizeMode: "cover",
    alignItems: "center",
    flex: 1,
  },
  btnsContainer: {
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  registerBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#fc5c65",
  },
  loginBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    fontWeight: "bold",
    color: "#fc5c65",
    fontSize: 30,
    paddingTop: 100,
  },
  subText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 20,
  },
  borderStyles: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 10,
  },
  shadowIOSStyles: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  textStyles: {
    fontSize: 30,
    fontFamily: "Roboto", //android
    fontWeight: "600",
    fontStyle: "italic",
    textTransform: "capitalize",
    textDecorationLine: "line-through",
    textAlign: "center",
    lineHeight: 30,
  },
});
