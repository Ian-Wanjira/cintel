import { Slot } from "expo-router";

import { UserProvider } from "../lib/contexts";
import { PaperProvider, Text } from "react-native-paper";
import { Header } from "../lib/components/header";

export default function AppLayout() {
  return (
    <>
      <UserProvider>
        <PaperProvider>
          <Header />
          <Slot />
        </PaperProvider>
      </UserProvider>
    </>
  );
}
