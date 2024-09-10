import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  AppFormPicker,
} from "../components/forms";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().min(3).label("Description"),
  category: Yup.string().required().min(4).label("Category"),
  images: Yup.array().min(1, "Please select at least 1 image"),
  // category: Yup.object().required().nullable().label("Category"),
});

const formFields = {
  title: "",
  price: "",
  description: "",
  category: "",
  images: [],
};
const categories = [
  {
    label: "Furniture",
    backgroundColor: "pink",
    icon: "table-furniture",
    value: 1,
  },
  {
    label: "Cars",
    value: 2,
    backgroundColor: "orange",
    icon: "car",
  },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: "blue",
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: "purple",
    icon: "gamepad",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "black",
    icon: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "green",
    icon: "soccer",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "brown",
    icon: "music",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "violet",
    icon: "book",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "gray",
    icon: "apps",
  },
];
export default function () {
  const { location } = useLocation();
  return (
    <Screen styles={styles.container}>
      <AppForm
        initialValues={formFields}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name={"images"} />
        <AppFormField
          autoCorrect={false}
          maxLength={255}
          placeholder="Title"
          name="title"
        />
        <AppFormField
          keyboardTyoe="numeric"
          maxLength={8}
          placeholder="0.00"
          name="price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
        />
        <AppFormField
          multiline
          maxLength={255}
          placeholder="Description"
          numberOfLines={3}
          name="description"
        />
        <AppSubmitButton label="Post it" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
