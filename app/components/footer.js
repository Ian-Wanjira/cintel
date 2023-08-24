import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const Footer = () => {
  return (
    <Text style={styles.footer}>
      Powered by <Text style={{ color: "#010089" }}>Cintel</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    fontSize: 12,
    padding: 20,
  },
});
