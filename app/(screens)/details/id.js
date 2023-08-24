import { StyleSheet, ScrollView, View, Text } from "react-native";

export default function Id() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>ID</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
    justifyItems: "center",
    alignItems: "center",
  },
});
