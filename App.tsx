import Screen from "./components/Screen";
import AppText from "./components/AppText";
import AppButton from "./components/AppButton";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "./utils/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <AppText>Tweets Section</AppText>
      <AppButton
        label={"View Tweets"}
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <AppText>Tweet Details:{route.params.id}</AppText>
    </Screen>
  );
};

const Account = () => {
  return (
    <Screen>
      <AppText>Account Screen</AppText>
    </Screen>
  );
};

export type RootStackParamList = {
  Tweets: undefined; // No parameters
  TweetDetails: { id: number }; // Parameters for Details screen
};
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name={"Feed"}
        component={Tweets}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name={"home"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name={"Account"} component={Account} />
    </Tab.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"Tweets"}>
      <Stack.Screen name={"Tweets"} component={Tweets} />
      <Stack.Screen
        name={"TweetDetails"}
        component={TweetDetails}
        options={({ route }) => ({
          title: `Details:${route.params.id}`,
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      {/*<StackNavigator />*/}
      <TabNavigator />
    </NavigationContainer>
  );
}
