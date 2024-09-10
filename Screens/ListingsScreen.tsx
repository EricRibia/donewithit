import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CardComponent from "../components/CardComponent";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import Screen from "../components/Screen";
import Colors from "../utils/colors";
import routes from "../Navigation/routes";
type ListingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Feeds"
>;
export default function () {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Jeep Rangler for sale!",
      subTitle: "KES 10000",
      image: require("./../assets/car1.jpg"),
    },
    {
      id: 2,
      title: "Head band for sale!",
      subTitle: "KES 50",
      image: require("./../assets/events-header.png"),
    },
    {
      id: 3,
      title: "Smoke Screen!",
      subTitle: "KES 0",
      image: require("./../assets/bg.jpg"),
    },
  ]);
  const { navigate } = useNavigation<ListingsScreenNavigationProp>();
  return (
    <Screen
      backgroundColor={Colors.light}
      styles={{
        paddingHorizontal: 10,
        paddingTop: 20,
      }}
    >
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            onPress={() => navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  bg: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 0,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 10,
  },
});
