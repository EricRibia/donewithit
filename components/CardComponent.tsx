import { StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "../utils/colors";
import React from "react";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
interface CustomCardProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}
const CardComponent: React.FC<CustomCardProps> = ({
  title,
  subTitle,
  image,
}) => {
  return (
    <View>
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
                color: Colors.primary,
              },
            ]}
          >
            {subTitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: "#fff",
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
