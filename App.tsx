import { StyleSheet } from "react-native";
import { useState } from "react";
import MessagesScreen from "./Screens/MessagesScreen";
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
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState("Furniture");
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({});
