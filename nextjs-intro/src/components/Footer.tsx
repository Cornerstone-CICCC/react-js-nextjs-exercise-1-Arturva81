export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} NextJS Intro. All rights reserved.</p>
      </div>
    </footer>
  );
}
