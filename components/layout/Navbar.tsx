"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";

import Container from "./Container";
import Brand from "@/components/ui/Brand";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <Container>

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Josias Sekhebesa Home"
          >
            <Brand size="sm" />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">

            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  pathname === item.href
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.title}
              </Link>

            ))}

            <a
              href="/JosiasSekhebesa_Summarized_Resume_072026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Download CV
            </a>

          </nav>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="rounded-xl p-2 text-white transition hover:bg-white/10 md:hidden"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </Container>

      {/* Mobile Navigation */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 md:hidden ${
          open ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <Container>

          <nav className="flex flex-col py-6">

            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-xl px-4 py-4 text-lg font-medium transition ${
                  pathname === item.href
                    ? "bg-sky-500/10 text-sky-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.title}
              </Link>

            ))}

            {/* Mobile Actions */}

            <div className="mt-8 border-t border-white/10 pt-6">

              <a
                href="/JosiasSekhebesa_Summarized_Resume_072026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center rounded-xl bg-sky-500 px-5 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                <Download className="mr-3 h-5 w-5" />

                Download CV
              </a>

              <a
                href="https://www.linkedin.com/in/josias-sekhebesa/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-4 flex items-center rounded-xl border border-white/10 px-5 py-4 font-medium text-slate-300 transition hover:border-sky-500 hover:text-white"
              >
                LinkedIn →
              </a>

            </div>

          </nav>

        </Container>

      </div>

    </header>
  );
}