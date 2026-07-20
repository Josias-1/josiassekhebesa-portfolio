import PageHero from "@/components/ui/PageHero";
import ComingSoon from "@/components/ui/ComingSoon";

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Enterprise AI Solutions"
        description="A collection of enterprise AI platforms, intelligent automation solutions, Retrieval-Augmented Generation (RAG) systems, and Azure AI architectures designed to solve real business challenges."
      />

      <ComingSoon />
    </>
  );
}