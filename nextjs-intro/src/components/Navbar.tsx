import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex gap-6">
        <Link href="/" className="font-semibold hover:text-blue-200 transition-colors">
          Home
        </Link>
        <Link href="/about" className="font-semibold hover:text-blue-200 transition-colors">
          About
        </Link>
        <Link href="/services" className="font-semibold hover:text-blue-200 transition-colors">
          Services
        </Link>
        <Link href="/contact" className="font-semibold hover:text-blue-200 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
