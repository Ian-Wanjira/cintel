import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
import { PaperProvider, Button, Text } from "react-native-paper";

export default function Page() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.main}>
            <View>
              <Text style={styles.title} variant="displayLarge">
                Welcome to International House
              </Text>
              <View style={styles.buttonContainer}>
                <Button style={styles.newVisitorBtn} mode="contained">
                  New Visitor
                </Button>
                <Button mode="outlined">Return Visitor</Button>
              </View>
            </View>
            <View>
              <Image
                resizeMode="contain"
                style={{ maxWidth: screenWidth * 0.95 }}
                source={require("../assets/landing.png")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  newVisitorBtn: {
    backgroundColor: "#010089",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    gap: 16,
  },
});
