import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode, useState } from "react";
//custom in app styles
import defaultStyles from "./../default-styles";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import AppText from "./AppText";

export interface AppTextProps {
  icon: string;
  placeholder: string;
  items: { label: string; value: any }[];
  onSelectItem: (value: string) => void;
  selectedItem: string;
  numberOfColumns: number;
  width?: number;
  PickerItemComponent: React.FC<any>;
  string;
}
const AppPicker: React.FC<AppTextProps> = ({
  icon,
  placeholder,
  onSelectItem,
  selectedItem,
  items,
  numberOfColumns = 3,
  PickerItemComponent = PickerItem,
  width = "100%",
  ...otherProps
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText
              multiLine={false}
              numberOfLines={1}
              style={[styles.text, defaultStyles.textInput]}
            >
              {selectedItem}
            </AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                onPress={(item) => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
                item={item}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    fontSize: 18,
    flex: 1,
  },
});

export default AppPicker;
