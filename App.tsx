import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
  Platform,
  TouchableNativeFeedback,
  Text,
  Alert,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./Screens/WelcomeScreen";
import ListingsScreen from "./Screens/ListingsScreen";
import ListingDetailsScreen from "./Screens/ListingDetailsScreen";
import ViewImageScreen from "./Screens/ViewImageScreen";
export default function App() {
  console.log(useDeviceOrientation());
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View
    //     style={[
    //       ImageViewScreenStyles.bg,
    //
    //       {
    //         backgroundColor: "#fff",
    //         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //       },
    //     ]}
    //   >
    //     <ListingsScreen />
    //     {/*<WelcomeScreen />*/}
    //     {/*<View style={ImageViewScreenStyles.btnContainer}>*/}
    //     {/*  <TouchableOpacity>*/}
    //     {/*    <View style={ImageViewScreenStyles.btnOne}></View>*/}
    //     {/*  </TouchableOpacity>*/}
    //     {/*  <TouchableOpacity>*/}
    //     {/*    <View style={ImageViewScreenStyles.btnTwo}></View>*/}
    //     {/*  </TouchableOpacity>*/}
    //     {/*</View>*/}
    //     {/*<Image*/}
    //     {/*  style={ImageViewScreenStyles.img}*/}
    //     {/*  source={require("./assets/car1.jpg")}*/}
    //     {/*/>*/}
    //   </View>
    // </SafeAreaView>
    // <ListingsScreen />
    // <ListingDetailsScreen />
    <ViewImageScreen />
  );
}

const ImageViewScreenStyles = StyleSheet.create({
  bg: {
    backgroundColor: "#000",
    flex: 1,
  },
  btnContainer: {
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  },
  btnOne: {
    backgroundColor: "#4ecdc4",
    width: 50,
    height: 50,
  },
  btnTwo: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
  },
  img: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
const landingScreenStyles = StyleSheet.create({
  bg: {
    width: "100%",
    resizeMode: "cover",
    alignItems: "center",
    flex: 1,
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

export function LandingScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={landingScreenStyles.bg}
        source={require("./assets/bg.jpg")}
      >
        <Text style={landingScreenStyles.logo}>Cars. App</Text>
        <Text style={landingScreenStyles.subText}>Know your cars</Text>
      </ImageBackground>
      <TouchableOpacity>
        <View style={landingScreenStyles.registerBtn}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={landingScreenStyles.loginBtn}></View>
      </TouchableOpacity>
    </View>
  );
}

export function Current() {
  const [numberOfLines, setNumberOfLines] = useState(1);
  const [loading, setLoading] = useState(false);

  const updateNumberOfLines = () => {
    if (numberOfLines === 1) {
      setNumberOfLines(10);
    } else {
      setNumberOfLines(1);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.contentContainer,
          {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          },
        ]}
      >
        <Image
          style={styles.sourImageStyles}
          source={require("./assets/events-header.png")}
        />
        <Button title="Load Data" onPress={() => fetchData()} />
        <Image
          style={styles.networkImageStyles}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/500/500",
          }}
        />
        <TouchableNativeFeedback>
          <View style={styles.nativeFeedbackView}>
            <Text style={styles.textStyles}>Native Feedback</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.btnsContainer}>
          <Button
            title="Show Alert"
            onPress={() => Alert.alert("Success", "This was done successfully")}
          />
          <Button
            title="Show Prompt"
            onPress={() =>
              Alert.prompt("Success", "This was done successfully")
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnsContainer: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sourImageStyles: {
    marginVertical: 8,
    width: "100%",
    resizeMode: "cover",
    height: 200,
    borderRadius: 20,
  },
  contentContainer: {
    padding: 10,
    flex: 1,
  },
  nativeFeedbackView: {
    width: "100%",
    height: 100,
    backgroundColor: "rgba(75,182,144,0.67)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  networkImageStyles: {
    marginVertical: 8,
    resizeMode: "cover",
    width: "100%",
    borderRadius: 20,
  },
  textStyles: {
    fontWeight: "300",
  },
});

export function Apptext({ children }) {
  return (
    <View>
      <MaterialCommunityIcons name="email" size={100} color="dodgerblue" />
      <Text style={textStyles.text}>{children}</Text>
    </View>
  );
}

Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
const textStyles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});
