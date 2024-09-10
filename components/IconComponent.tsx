import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CustomButtonProps {
  name: string;
  backgroundColor?: string;
  iconSize: number;
}

const IconComponent: React.FC<CustomButtonProps> = ({
  backgroundColor,
  name,
  iconSize = 20,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          width: iconSize + 20,
          height: iconSize + 20,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} size={iconSize} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconComponent;
