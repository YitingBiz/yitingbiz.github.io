import { FaBrain, FaPalette, FaMagic, FaLaptopCode, FaPlayCircle } from 'react-icons/fa';

const features = [
  {
    title: "AI-Powered Creativity",
    description: "Transform your music into visual masterpieces with our AI-driven engine. Simply input your ideas, and let the AI bring your vision to life with dynamic, real-time visuals that adapt to your sound.",
    icon: FaBrain
  },
  {
    title: "Customizable Shaders",
    description: "Take full control of your visual environment with a range of customizable shaders. Adjust and fine-tune the visual effects to match the mood and tone of your music, creating a unique experience for every track.",
    icon: FaPalette
  },
  {
    title: "Dynamic FX Integration",
    description: "Enhance your visuals with a variety of dynamic effects. From subtle enhancements to bold, dramatic transformations, our FX tools give you the flexibility to craft the perfect visual narrative.",
    icon: FaMagic
  },
  {
    title: "Seamless Workflow",
    description: "Experience a seamless workflow with intuitive controls. Whether you're a novice or a pro, our user-friendly interface makes it easy to navigate between AI, shaders, and effects, ensuring your creative process is smooth and efficient.",
    icon: FaLaptopCode
  },
  {
    title: "Real-Time Playback and Control",
    description: "Preview your work in real-time as you create. Our integrated playback controls allow you to see your visuals in action and make adjustments on the fly, ensuring every detail is perfect.",
    icon: FaPlayCircle
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <feature.icon className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}