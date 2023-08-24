import { Slot } from "expo-router";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
