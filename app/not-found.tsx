import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-4">
        Error 404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
        Page not found
      </h1>
      <p className="text-slate-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm transition-colors"
      >
        Back to homepage
      </Link>
    </main>
  );
}
