import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { StyleSheet, View } from "react-native";
import Colors from "../../utils/colors";
export const ListingsLoader = () => {
  const colorMode = "light";
  return (
    <MotiView style={styles.container}>
      <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
        <Skeleton height={200} colorMode={colorMode} width={"100%"}></Skeleton>
      </View>
      <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
        <Skeleton height={20} colorMode={colorMode} width={"50%"}></Skeleton>
      </View>
      <View style={{ marginTop: 20, marginBottom: 20, paddingHorizontal: 10 }}>
        <Skeleton height={20} colorMode={colorMode} width={"20%"}></Skeleton>
      </View>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginBottom: 20,
  },
  titleSkeleton: {},
  subTitleSkeleton: {},
});
