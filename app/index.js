import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
import { PaperProvider, Button, Text } from "react-native-paper";
import { Link } from "expo-router";

export default function Page() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.title} variant="displayLarge">
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
          <View style={styles.image}>
            <Image
              resizeMode="contain"
              style={{ maxWidth: screenWidth * 0.95 }}
              source={require("../assets/landing.png")}
            />
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#3D3D4A",
    maxWidth: 700,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    gap: 16,
  },
  outlinedBtn: {
    borderColor: "#010089",
  },
});
