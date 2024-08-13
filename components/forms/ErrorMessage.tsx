import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import AppText from "../AppText";
import { FormikErrors, FormikValues } from "formik";

interface Props {
  error:
    | FormikErrors<FormikValues[string][number]>[]
    | string
    | string[]
    | FormikErrors<any>
    | any;
  visible: any;
}

const ErrorMessage: React.FC<Props> = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
