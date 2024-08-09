import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import { Colors } from "../utils/colors";
import { Swipeable } from "react-native-gesture-handler";

interface ListItemProps {
  title: string;
  description: string;
  image: ImageSourcePropType;
  onPress: () => void;
  renderRightActions: any;
}
const ListItemComponent: React.FC<ListItemProps> = ({
  title,
  description,
  image,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={Colors.light}>
        <View style={styles.userInfoContainer}>
          <Image style={styles.userImg} source={image} />
          <View>
            <Text style={[styles.text, { marginBottom: 0 }]}>{title}</Text>
            <Text
              style={[
                styles.text,
                {
                  color: "rgba(157,157,157,0.86)",
                },
              ]}
            >
              {description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItemComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
  userInfoContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginRight: 10,
  },
});
