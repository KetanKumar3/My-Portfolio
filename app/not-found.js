import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 text-emerald-500">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-base md:text-lg mb-8 text-gray-400">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium transition hover:bg-gray-200"
      >
        Go back home
      </Link>
    </div>
  );
}
