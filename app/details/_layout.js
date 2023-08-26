import { Slot } from "expo-router";

import { Header, Footer } from "../../lib/components";

export default function DetailsLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
