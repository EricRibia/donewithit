import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";
import IconComponent from "./IconComponent";
import AppText from "./AppText";

interface Props {
  label: string;
  onPress: (item: any) => void;
  item: any;
}

const CategoryPicker: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={() => onPress(item.label)}>
      <View style={styles.container}>
        <IconComponent
          name={item.icon}
          backgroundColor={item.backgroundColor}
          iconSize={60}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPicker;
