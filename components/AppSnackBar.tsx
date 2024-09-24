import React from "react";
import { Snackbar } from "react-native-paper";
import { useError } from "../context/ErrorContext";

const AppSnackBar = () => {
  const { error, clearError } = useError();

  return (
    <Snackbar visible={!!error} onDismiss={clearError} duration={3000}>
      {error}
    </Snackbar>
  );
};

export default AppSnackBar;
