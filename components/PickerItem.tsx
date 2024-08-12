import { TouchableOpacity, StyleSheet } from "react-native";
//in app imports
import AppText from "./AppText";
import React from "react";

interface Props {
  label: string;
  onPress: (value: string) => void;
}
const PickerItem: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(label)}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
