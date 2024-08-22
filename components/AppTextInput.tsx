import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
//custom in app styles
import defaultStyles from "./../default-styles";

export interface AppTextProps {
  icon: string;
  width?: string | number;
}
const AppTextInput: React.FC<AppTextProps> = ({
  icon,
  width = "100%",
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.textInput}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
