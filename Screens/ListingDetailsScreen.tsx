import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

export default function () {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 200,
        }}
      >
        <Image style={styles.img} source={require("./../assets/car1.jpg")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Jeep Rangler for sale!</Text>
        <Text
          style={[
            styles.text,
            {
              color: Colors.primary,
            },
          ]}
        >
          KES 100
        </Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Image
          style={styles.userImg}
          source={require("./../assets/selfie.jpg")}
        />
        <View>
          <Text style={[styles.text, { marginBottom: 0 }]}>Eric N. Ribia</Text>
          <Text
            style={[
              styles.text,
              {
                color: "rgba(157,157,157,0.86)",
              },
            ]}
          >
            5 Listings
          </Text>
        </View>
      </View>
    </View>
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
