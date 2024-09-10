import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../utils/colors";
import ImageInput from "./ImageInput";

interface Props {
  imageUris: {
    uri: string;
    id: string;
  }[];
  onAddImage: (uri: string) => void;
  onRemoveImage: (id: string) => void;
}

const ImageInputList: React.FC<Props> = ({
  imageUris,
  onAddImage,
  onRemoveImage,
}) => {
  const scrollView = useRef<ScrollView | null>(null);
  const createConfirmDialog = (imageID: string) =>
    Alert.alert("Remove Image", "Are you sure you want to remove the image", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => onRemoveImage(imageID) },
    ]);
  return (
    <View>
      <ScrollView
        horizontal={true}
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        {imageUris.map((imageData) => (
          <TouchableOpacity
            key={imageData.id}
            onPress={() => createConfirmDialog(imageData.id)}
          >
            <Image style={styles.imageSize} source={{ uri: imageData.uri }} />
          </TouchableOpacity>
        ))}
        <ImageInput onChangeImageUri={onAddImage} />
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  imageSize: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
});
