import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Details</Text>
        <View style={styles.linkContainer}>
          <Link style={styles.link} href="/">
            Home
          </Link>
          <Link style={styles.link} href="/otp">
            OTP
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
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
