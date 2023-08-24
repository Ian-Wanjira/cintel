import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Button, Text, TextInput } from "react-native-paper";

export default function Details() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Text variant="displayMedium" style={styles.title}>
            DATA CAPTURE
          </Text>
          <View style={styles.form}>
            <TextInput></TextInput>
          </View>
        </View>
        <View style={styles.image}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
  },
  content: {
    gap: 32,
  },
  main: {
    flex: 1,
  },
  title: {
    color: "#010089",
  },
  link: {
    fontSize: 24,
    color: "#0070f3",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
