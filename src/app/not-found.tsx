import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="That page is not in the weave." lead="The link may be old, or the page has moved." size="md" />
      <Section theme="light" pad="md">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <Button href="/">Back to the start</Button>
        </div>
      </Section>
    </>
  );
}
