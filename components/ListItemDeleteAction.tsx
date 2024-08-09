import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../utils/colors";
import React from "react";

interface ListItemDeleteActionProps {
  onPress: () => void;
}
const ListItemDeleteAction: React.FC<ListItemDeleteActionProps> = ({
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color={Colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
