import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

interface Props {
  label: string;
}

const AppSubmitButton: React.FC<Props> = ({ label }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton label={label} onPress={handleSubmit} />;
};

export default AppSubmitButton;
