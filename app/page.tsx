// import FeaturedSolutions from "@/components/sections/FeaturedSolutions";
// import Hero from "@/components/sections/Hero";
// import Impact from "@/components/sections/Impact";


// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Impact />
//     </>
//   );
// }

import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Impact";
import FeaturedSolutions from "@/components/sections/FeaturedSolutions";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import CTA from "@/components/ui/CTA";
import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  path: "/",
});
export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <Metrics />
      <FeaturedSolutions />
      <Experience />
      <CTA />
    </>
  );
}