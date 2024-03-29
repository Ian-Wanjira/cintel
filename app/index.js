import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { GradientText, Footer } from "../lib/components";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Text style={styles.title}>WELCOME TO :</Text>
          <GradientText style={styles.subtitle}>
            INTERNATIONAL HOUSE
          </GradientText>
          <View style={styles.buttonContainer}>
            <Link href="/details">
              <Button
                mode="contained"
                buttonColor="#010089"
                style={styles.primaryButton}
                contentStyle={{ height: 56 }}
              >
                <Text style={styles.primaryButtonText}>New Visitor</Text>
              </Button>
            </Link>
            <Button
              mode="outlined"
              style={styles.outlinedBtn}
              contentStyle={{ height: 56 }}
            >
              <Text style={styles.outlinedBtnText}>Return Visitor</Text>
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
    paddingHorizontal: 76,
    paddingBottom: 31,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: "flex-end",
    
  },
  image: {
    objectFit: "contain",
    marginLeft: "auto",
    width: 400
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3D3D4A",
    marginBottom: 12
  },
  subtitle: {
    fontSize: 34,
    fontWeight: 900,
    color: "#3D3D4A",
  },
  buttonContainer: {
    marginTop: 32,
    flexDirection: "row",
    gap: 16,
  },
  primaryButton: {
    borderRadius: 100,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  outlinedBtn: {
    borderColor: "#010089",
    borderRadius: 100,
    borderWidth: 2,
  },
  outlinedBtnText: {
    color: "#010089",
    fontSize: 20,
  },
});
