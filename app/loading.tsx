export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060B14]">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-sky-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />

      </div>

      <div className="relative text-center">

        {/* Animated AI Core */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-sky-500/30">

          <div className="h-12 w-12 animate-ping rounded-full bg-sky-500/30" />

          <div className="absolute h-8 w-8 rounded-full bg-sky-400" />

        </div>

        <h2 className="mt-10 text-3xl font-bold text-white">
          Initialising Enterprise AI
        </h2>

        <p className="mt-4 text-slate-400">
          Preparing intelligent experiences...
        </p>

        {/* Progress */}

        <div className="mx-auto mt-10 h-1 w-72 overflow-hidden rounded-full bg-slate-800">

          <div className="h-full w-1/2 animate-pulse rounded-full bg-sky-500" />

        </div>

      </div>

    </main>
  );
}