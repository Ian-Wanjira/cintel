import { Slot } from "expo-router";

import { Header, Footer } from "../../components";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
