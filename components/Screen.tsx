import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import Constants from "expo-constants";
import React from "react";

interface ScreenProps {
  backgroundColor?: string;
  styles?: ViewStyle;
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = (props) => {
  return (
    <SafeAreaView
      style={[
        styles.screen,
        props.styles,
        { backgroundColor: props.backgroundColor },
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
