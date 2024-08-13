import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface Props {
  name: string;
  items: { label: string; value: any }[];
}

const AppFormPicker: React.FC<Props> = ({ items, name, placeholder }) => {
  const { errors, values, setFieldValue, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        icon="apps"
        placeholder={placeholder}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name] as string}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormPicker;
