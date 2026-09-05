import Image from "next/image";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import Button from "@/components/ui/button";
import { site } from "@/lib/site";

type Props = { eyebrow?: string; title?: string; body?: string };

export default function Cta({
  eyebrow = "Start the conversation",
  title = "Bring frontier AI to the floor, the field and the front office.",
  body = "Tell us where the programme is stuck — pilots without owners, data that cannot leave, a plant that plans in spreadsheets — and we will bring the right shape of engagement.",
}: Props) {
  return (
    <Section theme="dark" pad="lg" className="overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-[10%] top-1/2 w-[46vw] max-w-[640px] -translate-y-1/2 opacity-[0.55] lg:-right-[4%]">
        <Image src="/brand/form-arch.png" alt="" width={1675} height={1589} className="w-full" />
      </div>
      <div className="relative mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-[40rem]">
          <p className="eyebrow text-violet">{eyebrow}</p>
          <h2 className="mt-6 text-display-lg font-semibold">{title}</h2>
          <p className="mt-6 max-w-[50ch] text-lead font-light text-fg-muted">{body}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button href="/contact" size="lg" className="bg-white text-ink hover:bg-violet">
              Get in touch
            </Button>
            <a href={`mailto:${site.email}`} className="link-wipe text-[0.9375rem] font-medium text-fg">
              {site.email}
            </a>
          </div>
          <p className="mt-10 text-xs text-fg-soft">Australia · India · Onshore, offshore and blended, in the customer&rsquo;s time zone.</p>
        </Reveal>
      </div>
    </Section>
  );
}
