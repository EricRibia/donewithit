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
import { Swipeable } from "react-native-gesture-handler";
import IconComponent from "./IconComponent";
import defaultStyles from "../default-styles";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ListItemProps {
  title: string;
  description?: string;
  isSwipeable: boolean;
  image?: ImageSourcePropType;
  icon?: string;
  iconBackground?: string;
  onPress: () => void;
  renderRightActions?: any;
}
const ListItemComponent: React.FC<ListItemProps> = ({
  title,
  description,
  image,
  onPress,
  icon,
  iconBackground,
  renderRightActions,
  isSwipeable,
}) => {
  return (
    <View>
      {isSwipeable ? (
        <Swipeable renderRightActions={renderRightActions}>
          <TouchableHighlight
            onPress={onPress}
            underlayColor={defaultStyles.colors.light}
          >
            <View style={styles.userInfoContainer}>
              {image && <Image style={styles.userImg} source={image} />}
              {icon && (
                <IconComponent name={icon} backgroundColor={iconBackground} />
              )}
              <View style={styles.detailsContainer}>
                <AppText
                  numberOfLines={1}
                  style={[styles.text, { marginBottom: 0 }]}
                >
                  {title}
                </AppText>
                {description && (
                  <AppText
                    numberOfLines={2}
                    style={[
                      styles.text,
                      {
                        color: "rgba(157,157,157,0.86)",
                      },
                    ]}
                  >
                    {description}
                  </AppText>
                )}
              </View>
              <MaterialCommunityIcons name="chevron-right" size={25} />
            </View>
          </TouchableHighlight>
        </Swipeable>
      ) : (
        <TouchableHighlight
          onPress={onPress}
          underlayColor={defaultStyles.colors.light}
        >
          <View style={styles.userInfoContainer}>
            {image && <Image style={styles.userImg} source={image} />}
            {icon && (
              <IconComponent name={icon} backgroundColor={iconBackground} />
            )}
            <View style={{ marginLeft: 10 }}>
              <AppText style={[styles.text, { marginBottom: 0 }]}>
                {title}
              </AppText>
              {description && (
                <AppText
                  style={[
                    styles.text,
                    {
                      color: "rgba(157,157,157,0.86)",
                    },
                  ]}
                >
                  {description}
                </AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      )}
    </View>
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
});
