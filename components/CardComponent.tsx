import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import defaultStyles from "../default-styles";
interface CustomCardProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress: () => void;
}
const CardComponent: React.FC<CustomCardProps> = ({
  title,
  subTitle,
  image,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <View
          style={{
            height: 200,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          <Image style={styles.img} source={image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text
            style={[
              styles.text,
              {
                color: defaultStyles.colors.primary,
              },
            ]}
          >
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default CardComponent;
