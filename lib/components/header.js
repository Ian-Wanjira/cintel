import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const Header = () => {
  return (
    <>
      <View style={styles.logo}>
        <Text style={[styles.logoText, styles.logoTextBlue]}>CintelCore</Text>
        <Text style={[styles.logoText, styles.logoTextRed]}>AMS</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    paddingHorizontal: 80,
    paddingTop: 76,
    flexDirection: "row",
    gap: 12,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 500,
  },
  logoTextBlue: {
    color: "#010089",
  },
  logoTextRed: {
    color: "#FF0000",
    borderWidth: 2,
    paddingHorizontal: 6,
    borderColor: "#FF0000",
  },
});
