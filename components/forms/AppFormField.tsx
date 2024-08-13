import { StyleSheet } from "react-native";
import React from "react";
//in app imports
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

interface Props {
  name: string;
}

const AppFormField: React.FC<Props> = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        // icon="lock"
        // autoCapitalize="none"
        // autoCorrect={false}
        // secureTextEntry={true}
        // textContentType="password"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        // placeholder="Password"
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormField;
