import { Slot } from "expo-router";

import { UserProvider } from "../lib/contexts";

export default function AppLayout() {
  return (
    <>
      <UserProvider>
        <Slot />
      </UserProvider>
    </>
  );
}
