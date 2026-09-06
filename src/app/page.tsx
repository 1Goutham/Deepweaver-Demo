import Hero from "@/components/sections/home/hero";
import TrustedBy from "@/components/sections/home/trusted-by";
import AiNativeServices from "@/components/sections/home/ai-native-services";
import CustomerOutcomes from "@/components/sections/home/customer-outcomes";
import Services from "@/components/sections/home/services";
import Alliances from "@/components/sections/home/alliances";
import WhyChooseUs from "@/components/sections/home/why-choose-us";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AiNativeServices />
      <CustomerOutcomes />
      <Services />
      <Alliances />
      <WhyChooseUs />
      <Cta />
    </>
  );
}
