import { Text } from "react-native";
import React from "react";
//in app imports

interface Props {
  children: React.ReactNode;
  style?: React.ComponentProps<typeof Text>["style"];
}
const AppText: React.FC<Props> = ({ children, style }) => {
  return <Text style={style}>{children}</Text>;
};

export default AppText;
