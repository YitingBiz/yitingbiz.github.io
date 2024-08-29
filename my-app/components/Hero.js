import Image from 'next/image'

export default function Hero() {
  return (
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-16 md:py-24 lg:py-32 bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Unleash Your Creativity with AI-Powered Music Videos</h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8">
          Vibes is a revolutionary platform that empowers creators to produce stunning music videos with the help of advanced AI.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-lg transition duration-300">
          Get Started
        </button>
      </div>
  )
}