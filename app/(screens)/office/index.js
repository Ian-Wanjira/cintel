import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Link, router } from "expo-router";
import { Button } from "react-native-paper";

import { Footer, Header } from "../../components";

export default function Office() {
  const office = new Array(9)
    .fill(0)
    .map((_, i) => i + 1)
    .map((i) => String.fromCharCode(64 + i));

  const _onPress = (floor) => {
    console.log(floor);
    router.push("/welcome");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text variant="displaySmall" style={styles.title}>
          SELECT OFFICE
        </Text>
        <View style={styles.content}>
          {office.map((office) => (
            <Button
              key={office}
              mode="elevated"
              onPress={() => _onPress(office)}
              textColor="white"
              buttonColor="#6C6CA3"
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              {"OFFICE " + office}
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
    width: 582,
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
    height: 60,
  },
  button: {
    borderRadius: 104,
  },
});
