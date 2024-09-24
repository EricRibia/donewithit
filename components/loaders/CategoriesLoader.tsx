import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { StyleSheet } from "react-native";
export const CategoriesLoader = () => {
  const colorMode = "light";
  return (
    <MotiView style={styles.container}>
      <Skeleton
        height={60}
        colorMode={colorMode}
        width={60}
        radius="round"
      ></Skeleton>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  shape: {
    width: "30%",
    height: 300,
  },
  container: {
    width: "33%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
