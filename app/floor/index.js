import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Link, router } from "expo-router";
import { Button } from "react-native-paper";

import { Footer, Header } from "../../lib/components";
import { useUser, useUserDispatch } from "../../lib/contexts";

export default function Floor() {
  const floors = new Array(20).fill(0).map((_, i) => i + 1);
  const { floor } = useUser();
  const dispatch = useUserDispatch();

  const selectFloor = (floor) => {
    dispatch({ type: "SET_FLOOR", payload: floor });
  };

  const _onPress = (floor) => {
    selectFloor(floor);
    router.push("/office");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text variant="displaySmall" style={styles.title}>
          SELECT FLOOR
        </Text>
        <View style={styles.content}>
          {floors.map((floor) => (
            <Button
              key={floor}
              mode="elevated"
              onPress={() => _onPress(floor)}
              textColor="white"
              buttonColor="#6C6CA3"
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              {floor}
            </Button>
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
    width: 760,
    alignSelf: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    marginTop: 24,
  },
  title: {
    textAlign: "center",
    color: "#010089",
  },
  buttonContent: {
    width: 172,
    height: 56,
  },
  button: {
    borderRadius: 104,
  },
});
