import { Slot } from "expo-router";

import { Header, Footer } from "../../lib/components";
import { BackNavigator } from "../../lib/components/backNavigator";

export default function DetailsLayout() {
  return (
    <>

      <Slot />
      <Footer />
    </>
  );
}
