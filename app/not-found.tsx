import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060B14] px-6">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />

      </div>

      <div className="relative max-w-2xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
          ERROR 404
        </p>

        <h1 className="mt-6 text-6xl font-black tracking-tight text-white md:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-xl leading-9 text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring Enterprise AI solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
          >
            Back Home
          </Link>

          <Link
            href="/solutions"
            className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-slate-300 transition hover:border-sky-500 hover:text-white"
          >
            Explore Solutions
          </Link>

        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-slate-900/40 p-8">

          <h2 className="text-2xl font-semibold text-white">
            Looking for something specific?
          </h2>

          <div className="mt-8 grid gap-4 text-left md:grid-cols-2">

            <Link
              href="/playbook"
              className="rounded-xl border border-white/10 p-5 transition hover:border-sky-500"
            >
              <h3 className="font-semibold text-white">
                Enterprise AI Articles
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Architecture guides, engineering principles and Azure AI
                best practices.
              </p>

            </Link>

            <Link
              href="/experience"
              className="rounded-xl border border-white/10 p-5 transition hover:border-sky-500"
            >
              <h3 className="font-semibold text-white">
                Professional Experience
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Explore enterprise projects, certifications and technical
                expertise.
              </p>

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}