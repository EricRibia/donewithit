import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().min(3).label("Description"),
  category: Yup.string().required().min(4).label("Category"),
  // category: Yup.object().required().nullable().label("Category"),
});

const formFields = {
  title: "",
  price: "",
  description: "",
  category: "",
};
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
export default function () {
  return (
    <Screen styles={styles.container}>
      <AppForm
        initialValues={formFields}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          multiline
          maxLength={255}
          placeholder="Description"
          numberOfLines={3}
          name="description"
        />
        <AppSubmitButton label="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
