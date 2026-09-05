import Image from "next/image";
import { trustMarks, alliances } from "@/content/home";

export default function TrustStrip() {
  return (
    <section data-theme="dark" aria-label="Certifications and alliances" className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-wide gap-8 px-5 py-8 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-12">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5">
          <span className="eyebrow text-white/45">Responsible AI by design</span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {trustMarks.map((t) => (
              <li key={t.label} className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-full bg-white p-[3px]">
                  <Image src={t.src} alt="" width={64} height={64} className="size-full object-contain" />
                </span>
                <span className="text-[0.8125rem] leading-tight">
                  <span className="block font-medium text-white/90">{t.label}</span>
                  <span className="block text-white/50">{t.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-5 lg:col-span-7 lg:justify-end" aria-label="Alliances">
          {alliances.map((a) => (
            <li key={a.name} className="opacity-70 transition-opacity hover:opacity-100">
              <Image src={a.src} alt={a.name} width={a.w} height={a.h} className="h-5 w-auto brightness-0 invert md:h-6" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
