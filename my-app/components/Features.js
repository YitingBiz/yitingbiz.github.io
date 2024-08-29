'use client';

import React from 'react';
import { Card, Flex, Text } from '@radix-ui/themes';
import { FaBrain, FaPalette, FaMagic, FaLaptopCode, FaPlayCircle } from 'react-icons/fa';

const features = [
  {
    title: "AI-Powered Creativity",
    description: "Transform your music into visual masterpieces with our AI-driven engine. Simply input your ideas, and let the AI bring your vision to life with dynamic, real-time visuals that adapt to your sound.",
    icon: FaBrain,
    color: 'violet'
  },
  {
    title: "Customizable Shaders",
    description: "Take full control of your visual environment with a range of customizable shaders. Adjust and fine-tune the visual effects to match the mood and tone of your music, creating a unique experience for every track.",
    icon: FaPalette,
    color: 'cyan'
  },
  {
    title: "Dynamic FX Integration",
    description: "Enhance your visuals with a variety of dynamic effects. From subtle enhancements to bold, dramatic transformations, our FX tools give you the flexibility to craft the perfect visual narrative.",
    icon: FaMagic,
    color: 'amber'
  },
  {
    title: "Seamless Workflow",
    description: "Experience a seamless workflow with intuitive controls. Whether you're a novice or a pro, our user-friendly interface makes it easy to navigate between AI, shaders, and effects, ensuring your creative process is smooth and efficient.",
    icon: FaLaptopCode,
    color: 'violet'
  },
  {
    title: "Real-Time Playback and Control",
    description: "Preview your work in real-time as you create. Our integrated playback controls allow you to see your visuals in action and make adjustments on the fly, ensuring every detail is perfect.",
    icon: FaPlayCircle,
    color: 'cyan'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <Flex direction="row" gap="4" wrap="wrap">
          {[0, 1, 2].map((blockIndex) => (
            <Card key={blockIndex} style={{ flex: '1 1 30%', minWidth: '300px' }}>
              {features.slice(blockIndex * 2, blockIndex * 2 + 2).map((feature, index) => (
                <Flex key={index} direction="column" gap="2" p="4">
                  <feature.icon className="text-4xl" style={{ color: `var(--${feature.color}-9)` }} />
                  <Text as="h3" size="5" weight="bold">{feature.title}</Text>
                  <Text as="p" size="2">{feature.description}</Text>
                </Flex>
              ))}
            </Card>
          ))}
        </Flex>
      </div>
    </section>
  );
}