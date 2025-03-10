import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedNavigation from "./Navigation/FeedNavigation";
import "react-native-reanimated";
import "react-native-gesture-handler";
import ListingEditScreen from "./Screens/ListingEditScreen";
import AccountScreen from "./Screens/AccountScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "./utils/colors";
import { StyleSheet } from "react-native";
import NavigationTheme from "./Navigation/NavigationTheme";
import NewListingButton from "./Navigation/NewListingButton";
import AppSnackBar from "./components/AppSnackBar";
import { ErrorProvider } from "./context/ErrorContext";
import { PaperProvider } from "react-native-paper";
const Tab = createBottomTabNavigator();

export interface RootStackParamList {
  Feed: undefined; // No parameters
  Feeds: undefined; // No parameters
  FeedDetails: undefined; // No parameters
  Add: undefined; // Example with parameters
  Account: undefined; // Example with parameters
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.medium,
        tabBarStyle: { height: 60, paddingBottom: 20 },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name={"home"} size={size} color={color} />
          ),
          headerTitleAlign: "center",
          tabBarLabel: "Home",
          headerShown: false,
        }}
        name={"ListingsTab"}
        component={FeedNavigation}
      />
      <Tab.Screen
        options={({ navigation, route }) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate("Add")} />
          ),
          tabBarLabel: "",
          headerTitle: "New Listing",
          headerTitleAlign: "center",
        })}
        name={"Add"}
        component={ListingEditScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name={"account"}
              size={size}
              color={color}
            />
          ),
          headerTitleAlign: "center",
        }}
        name={"Account"}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <PaperProvider>
      <ErrorProvider>
        <NavigationContainer theme={NavigationTheme}>
          <TabNavigator />
          {/*<AuthNavigator />*/}
        </NavigationContainer>
        <AppSnackBar />
      </ErrorProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  addNavigation: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarStyles: {
    paddingBottom: 30,
  },
});
