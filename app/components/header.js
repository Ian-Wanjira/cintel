import { Appbar } from "react-native-paper";
import { router } from "expo-router";

export const Header = () => {
  const _goBack = () => router.back();

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Back" />
    </Appbar.Header>
  );
};
