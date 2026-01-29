export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Decision Memory ✅
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Log decisions, track outcomes, and learn from your past choices.
        </p>

        <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200">
          Start logging decisions
        </button>
      </div>
    </main>
  );
}
