import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import React from "react";
import ImageInputList from "../ImageInputList";

interface Props {
  name;
}
const AppFormImagePicker: React.FC<Props> = (props) => {
  const {
    setFieldTouched,
    setFieldValue,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  const imageValues: {
    id: string;
    uri: string;
  }[] = values[props.name] as {
    id: string;
    uri: string;
  }[];

  const handleAddImage = (uri: string) => {
    setFieldValue(props.name, [
      ...imageValues,
      { uri: uri, id: generateUniqueId() },
    ]);
  };
  const handleRemoveImage = (id: string) => {
    setFieldValue(
      props.name,
      imageValues.filter((item) => item.id !== id)
    );
  };
  const generateUniqueId = () => {
    const id = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
    return id.toString(); // Convert the number to a string
  };
  return (
    <>
      <ImageInputList
        imageUris={imageValues}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage visible={touched[props.name]} error={errors[props.name]} />
    </>
  );
};

export default AppFormImagePicker;
