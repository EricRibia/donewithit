import { FlatList, View } from "react-native";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import ListItemComponent from "./components/ListItemComponent";
import Screen from "./components/Screen";
import ListItemSeperator from "./components/ListItemSeperator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListItemDeleteAction from "./components/ListItemDeleteAction";
import { useState } from "react";
import AccountScreen from "./Screens/AccountScreen";

export interface MessagesType {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}
export default function App() {
  const data: MessagesType[] = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("./assets/selfie.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("./assets/selfie.jpg"),
    },
    {
      id: 3,
      title: "T3",
      description: "D3",
      image: require("./assets/selfie.jpg"),
    },
    {
      id: 4,
      title: "T4",
      description: "D4",
      image: require("./assets/selfie.jpg"),
    },
  ];
  const [messages, setMessages] = useState<MessagesType[]>(data);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
  }) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return <AccountScreen />;
}
//
// <FlatList
//     data={messages}
//     renderItem={({ item }) => (
//         <GestureHandlerRootView>
//           <ListItemComponent
//               title={item.title}
//               description={item.description}
//               image={item.image}
//               onPress={() => console.log("clicked")}
//               renderRightActions={() => (
//                   <ListItemDeleteAction onPress={() => handleDelete(item)} />
//               )}
//           />
//         </GestureHandlerRootView>
//     )}
//     keyExtractor={(message) => message.id.toString()}
//     ItemSeparatorComponent={ListItemSeperator}
//     refreshing={refreshing}
//     onRefresh={() =>
//         setMessages([
//           {
//             id: 2,
//             title: "T2",
//             description: "D2",
//             image: require("./assets/selfie.jpg"),
//           },
//         ])
//     }
// />
