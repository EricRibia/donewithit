import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../Screens/ListingsScreen";
import ListingDetailsScreen from "../Screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const FeedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Feeds"}>
      <Stack.Screen
        options={{ headerTitleAlign: "center" }}
        name={"Listings"}
        component={ListingsScreen}
      />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigation;
