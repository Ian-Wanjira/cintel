import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const Footer = () => {
  return (
    <Text style={styles.footer}>
      Powered By: <Text style={{ color: "#010089" }}>Cintel<Text>Core</Text></Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    fontSize: 16,
    padding: 20,
    marginBottom: -20,
    color: "#FF0000",
  },
});
