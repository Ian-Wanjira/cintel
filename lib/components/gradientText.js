import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export const GradientText = ({ children, style, ...props }) => {
  return (
    <MaskedView
      maskElement={
        <Text {...props} style={[style, { backgroundColor: "transparent" }]}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={["#010089", "#F00"]}
        start={{ x: 0.15, y: 1 }}
        end={{ x: 0.85, y: 0 }}
      >
        <Text {...props} style={[style, { opacity: 0 }]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};
