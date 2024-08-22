import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import CategoryPicker from "../CategoryPicker";

interface Props {
  name: string;
  numberOfColumns: number;
  items: { label: string; value: any }[];
  width?: number | string;
}

const AppFormPicker: React.FC<Props> = ({
  items,
  name,
  placeholder,
  numberOfColumns = 3,
  width = "100%",
}) => {
  const { errors, values, setFieldValue, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        icon="apps"
        placeholder={placeholder}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name] as string}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={CategoryPicker}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormPicker;
