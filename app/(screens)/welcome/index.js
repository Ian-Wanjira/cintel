import { StyleSheet, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

import { Footer } from "../../components";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Welcome() {
  const name = "John Doe";

  const timer = setTimeout(() => {
    router.push("/");
  }, 5000);

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text variant="headlineSmall" style={styles.title}>
          WELCOME
        </Text>
        <Text variant="headlineMedium" style={styles.name}>
          {name.toUpperCase()}
        </Text>
        <Text variant="headlineSmall" style={styles.info}>
          PLEASE PROCEED
        </Text>
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
    justifyContent: "center",
    alignItems: "center",
    gap: 48,
  },
  title: {
    color: "#010089",
  },
  name: {
    fontWeight: "bold",
    color: "#010089",
  },
  info: {
    fontWeight: 500,
    color: "#010089",
  },
});
