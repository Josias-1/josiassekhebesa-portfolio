import Link from "next/link";

import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            JS
          </Link>

          <nav className="hidden md:flex gap-8">

            <Link href="/">Home</Link>

            <Link href="/experience">Experience</Link>

            <Link href="/solutions">Solutions</Link>

            <Link href="/architecture">Architecture</Link>

            <Link href="/insights">Insights</Link>

            <Link href="/contact">Contact</Link>

          </nav>

        </div>
      </Container>
    </header>
  );
}