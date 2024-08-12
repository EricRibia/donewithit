import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import React from "react";

interface ScreenProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = (props) => {
  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: props.backgroundColor }]}
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
