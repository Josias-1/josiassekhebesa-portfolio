// import Container from "./Container";

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 py-12">
//       <Container>
//         <p className="text-sm text-slate-400">
//           © {new Date().getFullYear()} Josias Sekhebesa
//         </p>
//       </Container>
//     </footer>
//   );
// }

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-20">
      <Container>

        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold text-lg">
              Josias Sekhebesa
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Enterprise AI Engineer building Generative AI,
              Agentic AI, and Azure AI solutions.
            </p>
          </div>


          {/* Navigation */}
          <div className="flex md:justify-center gap-6 text-sm text-slate-400">

            <a
              href="/"
              className="hover:text-sky-400 transition"
            >
              Home
            </a>

            <a
              href="/about"
              className="hover:text-sky-400 transition"
            >
              About
            </a>

            <a
              href="/solutions"
              className="hover:text-sky-400 transition"
            >
              Projects
            </a>

            <a
              href="/contact"
              className="hover:text-sky-400 transition"
            >
              Contact
            </a>

          </div>


          {/* Social */}
          <div className="flex md:justify-end gap-5">

            <a
              href="https://www.linkedin.com/in/josias-sekhebesa/"
              target="_blank"
              className="text-sm text-slate-400 hover:text-sky-400 transition"
            >
              LinkedIn
            </a>


            <a
              href="https://calendly.com/sekhebesa/30min"
              target="_blank"
              className="text-sm text-slate-400 hover:text-sky-400 transition"
            >
              Book a call with me.
            </a>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Josias Sekhebesa. All rights reserved.
          </p>


        </div>


      </Container>
    </footer>
  );
}