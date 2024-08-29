export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Vibes. All rights reserved.</p>
          <div>
            <a href="/about" className="mx-4">About</a>
            <a href="/contact" className="mx-4">Contact</a>
            <a href="/privacy" className="mx-4">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  }
  