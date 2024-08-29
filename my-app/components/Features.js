'use client';

import React from 'react';
import { Card, Flex, Text, Container, Heading } from '@radix-ui/themes';
import { FaBrain, FaPalette, FaMagic, FaLaptopCode, FaPlayCircle } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const features = [
  {
    title: "AI-Powered Creativity",
    description: "Transform your music into visual masterpieces with our AI-driven engine.",
    icon: FaBrain,
    color: 'violet'
  },
  {
    title: "Customizable Shaders",
    description: "Take full control of your visual environment with a range of customizable shaders.",
    icon: FaPalette,
    color: 'cyan'
  },
  {
    title: "Dynamic FX Integration",
    description: "Enhance your visuals with a variety of dynamic effects for the perfect visual narrative.",
    icon: FaMagic,
    color: 'amber'
  },
  {
    title: "Seamless Workflow",
    description: "Experience a seamless workflow with intuitive controls for efficient creation.",
    icon: FaLaptopCode,
    color: 'indigo'
  },
  {
    title: "Real-Time Playback",
    description: "Preview your work in real-time as you create, ensuring every detail is perfect.",
    icon: FaPlayCircle,
    color: 'green'
  }
];

export default function Features() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container size="4">
        <Heading size="8" align="center" className="mb-12">Features</Heading>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="px-2">
              <Card style={{ height: '300px' }}>
                <Flex direction="column" gap="3" p="4" style={{ height: '100%' }}>
                  <feature.icon className="text-4xl" style={{ color: `var(--${feature.color}-9)` }} />
                  <Text as="h3" size="5" weight="bold">{feature.title}</Text>
                  <Text as="p" size="2">{feature.description}</Text>
                </Flex>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}