import Hero from "@/components/sections/home/hero";
import Statement from "@/components/sections/home/statement";
import Domains from "@/components/sections/home/domains";
import Services from "@/components/sections/home/services";
import Partnership from "@/components/sections/home/partnership";
import Proof from "@/components/sections/home/proof";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Domains />
      <Services />
      <Proof />
      <Partnership />
      <Cta />
    </>
  );
}
