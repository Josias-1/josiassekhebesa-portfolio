import Link from "next/link";
import Container from "./Container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">

      <Container>

        <div className="flex h-20 items-center justify-between">


          {/* Brand */}
          <Link
            href="/"
            className="flex flex-col"
          >
            <span className="text-xl font-bold text-white">
              Josias Sekhebesa
            </span>

            <span className="text-xs text-sky-400">
              Enterprise AI Engineer
            </span>
          </Link>



          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-sky-400"
              >
                {item.title}
              </Link>

            ))}


            {/* CV Button */}
            <a
              href="/Josias-Sekhebesa-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Download CV
            </a>


          </nav>


        </div>

      </Container>

    </header>
  );
}