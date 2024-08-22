import { TouchableOpacity, StyleSheet } from "react-native";
//in app imports
import AppText from "./AppText";
import React from "react";

interface Props {
  onPress: (value: string) => void;
  item: any;
}
const PickerItem: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.label)}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
