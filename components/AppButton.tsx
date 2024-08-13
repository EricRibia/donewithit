import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import defaultStyles from "../default-styles";

interface Props {
  label: string;
  styles?: ViewStyle;
  onPress: () => void;
}

const AppButton: React.FC<Props> = ({ styles: propStyles, onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btnStyles, propStyles]}>
        <Text style={styles.textStyles}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyles: {
    width: "100%",
    borderRadius: 1000,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.secondary,
    marginVertical: 10,
  },
  textStyles: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default AppButton;
