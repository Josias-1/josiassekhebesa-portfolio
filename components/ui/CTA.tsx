import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-5xl rounded-3xl border border-sky-500/20 bg-gradient-to-r from-slate-900 to-slate-950 p-16 text-center">

        <h2 className="text-4xl font-bold text-white">
          Let's build intelligent systems together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Whether you're exploring Enterprise AI,
          Azure, Agentic AI or intelligent automation,
          I'd love to hear about your project.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white hover:bg-sky-600"
        >
          Contact Me
        </Link>

      </div>

    </section>
  );
}