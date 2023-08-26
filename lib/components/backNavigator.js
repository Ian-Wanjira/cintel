import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";

export const BackNavigator = () => {
  _goBack = () => {
    router.back();
  };

  return (
    <View style={styles.backNavigator}>
      <IconButton onPress={_goBack} icon="arrow-left" size={24} />
      <Text onPress={_goBack} style={styles.backNavigator__text}>
        Back
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backNavigator: {
    marginHorizontal: 80,
    marginTop: 40,
    backgroundColor: "#FDF8FD",
    paddingVertical: 8,
    paddingHorizontal: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  backNavigator__text: {
    fontSize: 22,
    color: "#1C1B1E80",
  },
});
