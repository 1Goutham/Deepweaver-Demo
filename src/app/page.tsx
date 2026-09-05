import Hero from "@/components/sections/home/hero";
import TrustStrip from "@/components/sections/home/trust-strip";
import Statement from "@/components/sections/home/statement";
import Pillars from "@/components/sections/home/pillars";
import Layers from "@/components/sections/home/layers";
import Capabilities from "@/components/sections/home/capabilities";
import Proof from "@/components/sections/home/proof";
import Why from "@/components/sections/home/why";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Statement />
      <Pillars />
      <Layers />
      <Capabilities />
      <Proof />
      <Why />
      <Cta />
    </>
  );
}
