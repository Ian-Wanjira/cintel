import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
import { Button, Text } from "react-native-paper";
import { Link } from "expo-router";

import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logoText}>
        CintelCore <Text style={{ color: "#FF0000" }}>AMS</Text>
      </Text>
      <View style={styles.main}>
        <View style={styles.content}>
          <Text style={styles.title} variant="displayMedium">
            Welcome to International House
          </Text>
          <View style={styles.buttonContainer}>
            <Link href="/details">
              <Button mode="contained" buttonColor="#010089">
                New Visitor
              </Button>
            </Link>
            <Button
              mode="outlined"
              textColor="#010089"
              style={styles.outlinedBtn}
            >
              Return Visitor
            </Button>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/home.png")} />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 64,
    paddingBottom: 31,
  },
  header: {
    color: "#010089",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 29.05,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
  },
  logoText: {
    color: "#010089",
  },
  content: {
    flexBasis: "55%",
  },
  imageContainer: {
    flexBasis: "40%",
  },
  image: {
    objectFit: "contain",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    color: "#3D3D4A",
    maxWidth: 700,
  },
  buttonContainer: {
    marginTop: 32,
    flexDirection: "row",
    gap: 16,
  },
  outlinedBtn: {
    borderColor: "#010089",
  },
});
