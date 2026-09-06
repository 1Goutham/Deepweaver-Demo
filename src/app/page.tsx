import Hero from "@/components/sections/home/hero";
import TrustedBy from "@/components/sections/home/trusted-by";
import AiNativeServices from "@/components/sections/home/ai-native-services";
import OneStack from "@/components/sections/home/one-stack";
import Alliances from "@/components/sections/home/alliances";
import WhyChooseUs from "@/components/sections/home/why-choose-us";
import UniqueAdvantages from "@/components/sections/home/unique-advantages";
import Cta from "@/components/sections/cta";

/**
 * Home establishes positioning and identity; the detail lives on the inner
 * pages. Hero → who trusts us → the four domains → one delivery team across two
 * regions → alliances → how we work → our unique advantages → the close.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AiNativeServices />
      <OneStack />
      <Alliances />
      <WhyChooseUs />
      <UniqueAdvantages />
      <Cta />
    </>
  );
}
