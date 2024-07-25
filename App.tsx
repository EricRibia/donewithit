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
} from "react-native";
import { useState } from "react";

export default function App() {
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
          { paddingTop: Platform.OS === "android" ? 40 : 0 },
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
