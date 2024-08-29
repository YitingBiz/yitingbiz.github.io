import Image from 'next/image'

const showcaseItems = [
  { src: '/showcase-1.jpg', alt: 'AI-generated abstract music visual' },
  { src: '/showcase-2.jpg', alt: 'Dynamic rhythm visualization' },
  { src: '/showcase-3.jpg', alt: 'Colorful sound wave representation' },
  { src: '/showcase-4.jpg', alt: 'Futuristic music landscape' },
]

export default function Showcase() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Discover What's Possible</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}