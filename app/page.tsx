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
import CTA from "@/components/ui/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <FeaturedSolutions />
      <Experience />
      <CTA />
    </>
  );
}