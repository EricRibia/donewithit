import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Screen from "./components/Screen";
import AppText from "./components/AppText";
import AppButton from "./components/AppButton";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import ListingEditScreen from "./Screens/ListingEditScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];
export default function App() {
  const [imageUris, setImageUris] = useState<{ id: string; uri: string }[]>([]);
  const [category, setCategory] = useState("Furniture");
  const addImage = (imageUri: string) => {
    setImageUris([
      ...imageUris,
      {
        id: generateUniqueId(),
        uri: imageUri,
      },
    ]);
  };
  const removeImage = (imageId: string) => {
    const updatedList = imageUris.filter((imgData) => imgData.id !== imageId);
    setImageUris(updatedList);
  };
  const generateUniqueId = () => {
    const id = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
    return id.toString(); // Convert the number to a string
  };
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
  },
});
