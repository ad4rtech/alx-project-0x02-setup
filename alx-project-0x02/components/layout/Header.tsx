import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-4 px-6 shadow flex items-center justify-between">
      <h1 className="text-xl font-semibold">ALX Next.js Project</h1>

      <nav className="flex gap-6 text-base">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}
