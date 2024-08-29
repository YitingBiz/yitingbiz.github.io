const testimonials = [
    {
      quote: "Vibes has completely transformed my video production process. It's fast, intuitive, and the results are stunning. My audience loves the new content I'm creating.",
      author: "SENAIDA",
      role: "Musician"
    },
    {
      quote: "As a musician, I've always struggled with the technical side of video production. Vibes makes it easy and fun, and the results are amazing.",
      author: "Alex G.",
      role: "Independent Artist"
    },
    {
      quote: "Vibes is a game-changer for any content creator looking to elevate their videos. The AI-driven features save me so much time.",
      author: "Taylor M.",
      role: "YouTuber"
    }
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }