import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItemComponent from "../components/ListItemComponent";
import defaultStyles from "../default-styles";
import Screen from "../components/Screen";

export default function ({ route }) {
  const listing = route.params;
  return (
    <Screen styles={{ paddingHorizontal: 10 }}>
      <View
        style={{
          height: 200,
        }}
      >
        <Image style={styles.img} source={listing.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{listing.title}</Text>
        <Text
          style={[
            styles.text,
            {
              color: defaultStyles.colors.primary,
            },
          ]}
        >
          {listing.subTitle}
        </Text>
      </View>

      <ListItemComponent
        title="Eric N. Ribia"
        description=" 5 Listings"
        image={require("./../assets/selfie.jpg")}
        isSwipeable={false}
        onPress={() => console.log("orese")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginRight: 10,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
  userInfoContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
});
