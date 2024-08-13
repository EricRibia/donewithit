import { TextInput, Text, StyleSheet, Switch } from "react-native";
// in app imports
import Screen from "./components/Screen";
import { useState } from "react";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import LoginScreen from "./Screens/LoginScreen";
import ListingsScreen from "./Screens/ListingsScreen";
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
