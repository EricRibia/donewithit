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
}

const IconComponent: React.FC<CustomButtonProps> = (props) => {
  console.log("po");
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor,
        },
      ]}
    >
      <MaterialCommunityIcons name={props.name} size={20} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconComponent;
