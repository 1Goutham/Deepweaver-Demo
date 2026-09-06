import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Tag from "@/components/ui/tag";
import { platformPosition, australia, sovereignStack, neocloud, india } from "@/content/sovereign";
import { cn } from "@/lib/utils";

export default function SovereignDeep() {
  return (
    <>
      <Section theme="mist" id="stack">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow="The sovereign AI stack, end to end" title="Four stages, with assurance across the top and silicon underneath." />
          <Reveal delay={0.08} className="mt-10 flex flex-wrap items-center gap-2 border-y border-line py-4">
            <span className="eyebrow mr-2">{sovereignStack.top.label}</span>
            {sovereignStack.top.items.map((i) => (
              <Tag key={i}>{i}</Tag>
            ))}
          </Reveal>
          <Reveal delay={0.12} className="mt-6">
            <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {sovereignStack.stages.map((st) => (
                <li key={st.step} className="bg-bg p-6">
                  <p className="flex items-baseline gap-3"><span className="font-display text-sm text-accent">{st.step}</span><span className="text-display-xs text-fg">{st.name}</span></p>
                  <ul className="mt-4 divide-y divide-line border-t border-line text-[0.875rem] text-fg-muted">
                    {st.items.map((i) => (
                      <li key={i} className="py-2">{i}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.16} className="mt-6 flex flex-wrap items-center gap-2 border-y border-line py-4">
            <span className="eyebrow mr-2">{sovereignStack.bottom.label}</span>
            {sovereignStack.bottom.items.map((i) => (
              <Tag key={i}>{i}</Tag>
            ))}
            <span className="ml-auto text-sm text-fg-muted">NVIDIA · AMD · Qualcomm</span>
          </Reveal>
        </div>
      </Section>
      <Section theme="light" pad="lg" id="platform">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader
            eyebrow="Where we sit on a sovereign platform"
            title="The platform supplies sovereign infrastructure. We are the delivery layer above it."
            lead="Turning capacity into governed production systems."
          />
          <Reveal className="mt-14" delay={0.1}>
            <div className="hidden grid-cols-12 gap-8 border-b border-line pb-3 md:grid">
              <span className="eyebrow col-span-4">Platform capability</span>
              <span className="eyebrow col-span-8">What DeepWeaver delivers on top</span>
            </div>
            <ol className="divide-y divide-line border-b border-line">
              {platformPosition.map((r) => (
                <li key={r.platform} className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
                  <h3 className="col-span-12 text-display-xs md:col-span-4">{r.platform}</h3>
                  <div className="col-span-12 md:col-span-8">
                    <p className="text-[0.9375rem] text-fg">{r.delivers}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {r.items.map((i) => (
                        <Tag key={i}>{i}</Tag>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section theme="paper" pad="lg" id="alliance">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow={neocloud.eyebrow} title={neocloud.title} lead={neocloud.lead} />
          <Reveal delay={0.1} className="mt-14">
            <ol className="grid gap-x-8 gap-y-10 border-t border-line pt-10 md:grid-cols-3">
              {neocloud.members.map((m) => (
                <li key={m.who}>
                  <p className={cn("eyebrow", m.lead && "text-amber")}>{m.where}</p>
                  <h3 className="mt-4 text-display-sm text-fg">{m.who}</h3>
                  <p className="mt-3 max-w-[36ch] text-[0.9375rem] leading-relaxed text-fg-muted">{m.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section theme="lilac" pad="lg" id="australia">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow="Sovereign AI · Australia" title="Australian sovereign experience." lead={australia.intro} />
          <div className="mt-14 grid-12 gap-y-12">
            <Reveal className="col-span-12 lg:col-span-7" delay={0.1}>
              <p className="eyebrow mb-4">Three layers, three partners</p>
              <ol className="divide-y divide-line border-y border-line">
                {australia.layers.map((l) => (
                  <li key={l.name} className="grid gap-3 py-6 md:grid-cols-12 md:gap-6">
                    <span className="col-span-12 font-display text-sm font-medium text-lavender md:col-span-3">{l.partner}</span>
                    <div className="col-span-12 md:col-span-9">
                      <h3 className="text-display-xs">{l.name}</h3>
                      <p className="mt-1 text-[0.9375rem] text-fg-muted">{l.body}</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {l.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8" delay={0.16}>
              <p className="eyebrow mb-4">Solution highlights</p>
              <ul className="space-y-6">
                {australia.highlights.map((h) => (
                  <li key={h.name} className="border-t border-line pt-4">
                    <p className="font-medium">{h.name}</p>
                    <p className="mt-1 text-sm text-fg-muted">{h.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>
      <Section theme="light" pad="lg" id="india">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow={india.eyebrow} title={india.title} lead={india.lead} />
          <Reveal delay={0.1} className="mt-14">
            <ol className="grid gap-x-8 gap-y-10 border-t border-line pt-10 md:grid-cols-3">
              {india.items.map((it) => (
                <li key={it.name}>
                  <h3 className="max-w-[16ch] text-display-sm text-fg">{it.name}</h3>
                  <p className="mt-3 max-w-[36ch] text-[0.9375rem] leading-relaxed text-fg-muted">{it.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
