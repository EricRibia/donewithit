import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import CategoryPicker from "../CategoryPicker";
import { CategoriesResponseT } from "../../types";

interface Props {
  name: string;
  isLoading: boolean;
  numberOfColumns: number;
  items: CategoriesResponseT[];
  width?: number | string;
}

const AppFormPicker: React.FC<Props> = ({
  items,
  isLoading,
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
        isLoading={isLoading}
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
