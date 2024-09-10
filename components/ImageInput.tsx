import React, { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/colors";
import * as ImagePicker from "expo-image-picker";
import AppText from "./AppText";

interface Props {
  onChangeImageUri: (uri: string) => void;
}

const ImageInput: React.FC<Props> = ({ onChangeImageUri }) => {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) onChangeImageUri(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  const askCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access");
  };
  useEffect(() => {
    askCameraPermission();
  }, []);
  return (
    <TouchableOpacity onPress={selectImage}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="camera" size={40} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light,
    borderRadius: 15,
    marginRight: 10,
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  imageSize: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});

export default ImageInput;
