export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Vibes. All rights reserved.</p>
          <div className="flex justify-between">
            <a href="/about" className="mx-40">About</a>
            <a href="/contact" className="mx-40">Contact</a>
            <a href="/privacy" className="mx-40">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  }
  