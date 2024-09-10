import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../utils/colors";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import React from "react";
interface Props {
  onPress: () => void;
}
const NewListingButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.newListingButton}>
        <MaterialCommunityIcons
          name={"plus-circle"}
          size={50}
          color={"white"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;
const styles = StyleSheet.create({
  newListingButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    borderColor: Colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 30,
    height: 80,
    width: 80,
  },
});
