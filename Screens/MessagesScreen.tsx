import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import { useState } from "react";
import { FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
//in app imports
import Screen from "../components/Screen";
import ListItemComponent from "../components/ListItemComponent";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";

export interface MessagesType {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

import { StyleSheet } from "react-native";

export default function () {
  const data: MessagesType[] = [
    {
      id: 1,
      title:
        "T1 sapientem habeo viris solet agam reprehendunt error aeque suspendisse maiorum iriure porttitor dicta facilis reque fugit definitiones posidonium dolor inimicus vocibus reprimique sale a interpretaris maximus libero ridens invenire pertinacia recteque natoque persecuti tale rhoncus consequat contentiones viverra eius evertitur dolores fames liber fames necessitatibus orci dolores graeci dicta lobortis vel urna audire luctus mucius signiferumque evertitur consul propriae graeco interdum patrioque epicurei phasellus nunc facilisis no repudiandae ad audire antiopam suas sodales euismod impetus adversarium dissentiunt quaeque dolorum menandri platonem saepe repudiandae vocent sanctus cu dolores tale eruditi justo te cu nisi mel qui ponderum gubergren recteque necessitatibus possim",
      description:
        "D1 lorem tritani adipiscing ferri epicurei consetetur alterum invenire sale qui elit nonumes accumsan mnesarchum dictumst melius lacinia fames ea dissentiunt voluptatum assueverit menandri posidonium maiestatis vivamus per tellus invenire efficiantur porta option ornatus rhoncus repudiandae sem felis his est ex vituperatoribus delicata habeo praesent mediocrem pharetra pri singulis iuvaret tempus dapibus viverra invenire porta vestibulum euripidis mauris cetero splendide harum iaculis ultrices augue at augue sociosqu elit autem graeco commodo perpetua menandri nonumes debet auctor est evertitur scelerisque constituam sanctus ubique populo commodo mediocrem dictumst wisi scripta noster honestatis corrumpit turpis aperiri eripuit efficitur eu ubique consul intellegat vocibus dictumst potenti intellegat inciderint sonet cras parturient maiorum nec tantas venenatis dapibus vivamus quaestio facilisi donec platonem melius natoque habitasse quidam delicata accommodare contentiones molestie scelerisque platea maluisset eu ne nascetur nominavi malesuada tota cetero ceteros sodales usu appareat scripta corrumpit ubique definitionem sumo reformidans tincidunt persius hendrerit ignota interesset usu singulis solum quaestio latine faucibus cras scripta litora saepe sociosqu natum maluisset pertinacia falli no dicam mentitum eleifend scelerisque quidam oporteat veniam deterruisset malorum laoreet platea eos gravida suavitate maluisset mattis dolores elit verterem mauris reprehendunt eleifend explicari aliquet aliquip mnesarchum conclusionemque elaboraret novum malorum fuisset ut vero epicuri instructior graecis verear tibique euripidis malorum aliquid mi partiendo auctor per etiam vivendo natoque animal eleifend elementum audire meliore ocurreret simul fames oporteat noluisse quod verterem quaestio dictumst feugait ultricies iaculis interdum eget primis reprimique adversarium egestas parturient lacinia nibh sadipscing verear equidem sed nisl sociis iuvaret posidonium tamquam euismod proin instructior enim expetendis mazim vix tractatos hendrerit litora luptatum mandamus natoque malesuada repudiare sapien adipisci tacimates tritani conclusionemque suscipit sem oratio elit a constituto decore blandit mediocritatem ornatus ius platea ultrices magnis vidisse commodo moderatius ocurreret hinc nominavi aeque atomorum arcu vel laoreet mandamus nunc definitionem odio consectetur elitr error quidam",
      image: require("../assets/selfie.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/selfie.jpg"),
    },
    {
      id: 3,
      title: "T3",
      description: "D3",
      image: require("../assets/selfie.jpg"),
    },
    {
      id: 4,
      title: "T4",
      description: "D4",
      image: require("../assets/selfie.jpg"),
    },
  ];
  const [messages, setMessages] = useState<MessagesType[]>(data);
  const handleDelete = (item) => {
    console.log("e", item);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <GestureHandlerRootView>
            <ListItemComponent
              title={item.title}
              description={item.description}
              image={item.image}
              onPress={() => console.log("clicked")}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
              isSwipeable
            />
          </GestureHandlerRootView>
        )}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeperator}
        onRefresh={() => {
          console.log("refreshing");
        }}
        refreshing={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
