import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-background.jpg"
          alt="AI-generated music visuals"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 text-center">
        <Image
          src="/vibes-logo.png"
          alt="Vibes Logo"
          width={150}
          height={150}
          className="mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">Unleash Your Creativity with AI-Powered Music Videos</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Vibes is a revolutionary platform that empowers creators to produce stunning music videos with the help of advanced AI. Whether you're a musician, content creator, or educator, Vibes simplifies video production, allowing you to focus on what matters most—your creativity.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}