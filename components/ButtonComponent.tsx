import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
} from "react-native";
import React from "react";

interface CustomButtonProps {
  label: string;
  styles: ViewStyle;
}

const ButtonComponent: React.FC<CustomButtonProps> = (props) => {
  return (
    <TouchableOpacity>
      <View style={[styles.btnStyles, props.styles]}>
        <Text style={styles.textStyles}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyles: {
    width: "100%",
    borderRadius: 100,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default ButtonComponent;
