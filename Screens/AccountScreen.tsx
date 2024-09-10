import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Screen from "../components/Screen";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListItemComponent from "../components/ListItemComponent";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import defaultStyles from "../default-styles";
export default function () {
  const accountOptions: {
    id: number;
    title: string;
    icon: string;
    iconBackground: string;
  }[] = [
    {
      id: 1,
      title: "My Listings",
      icon: "format-list-bulleted",
      iconBackground: defaultStyles.colors.secondary,
    },
    {
      id: 2,
      title: "My Messages",
      icon: "email",
      iconBackground: defaultStyles.colors.primary,
    },
  ];
  return (
    <Screen backgroundColor="#f1f1f1">
      <View style={styles.userInfoContainer}>
        <Image
          style={styles.userImg}
          source={require("./../assets/selfie.jpg")}
        />
        <View>
          <Text style={[styles.text, { marginBottom: 0 }]}>Eric Ribia</Text>
          <Text
            style={[
              styles.text,
              {
                color: "rgba(157,157,157,0.86)",
              },
            ]}
          >
            ericribia@gmail.com
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <FlatList
          data={accountOptions}
          renderItem={({ item }) => (
            <ListItemComponent
              title={item.title}
              onPress={() => console.log("clicked")}
              icon={item.icon}
              iconBackground={item.iconBackground}
              isSwipeable={false}
            />
          )}
          keyExtractor={(message) => message.id.toString()}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItemComponent
        title="Log Out"
        onPress={() => console.log("clicked")}
        icon="logout"
        iconBackground="#ffe66d"
        isSwipeable={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
    top: 0,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginRight: 10,
  },
  userInfoContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    marginBottom: 30,
  },
});
