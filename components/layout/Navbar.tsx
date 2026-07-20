import Link from "next/link";
import Container from "./Container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            JS
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 transition hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}