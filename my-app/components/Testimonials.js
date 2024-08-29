'use client';

import React from 'react';
import { Card, Flex, Text, Avatar } from '@radix-ui/themes';

const testimonials = [
  {
    quote: "Vibes has completely transformed my video production process. It's fast, intuitive, and the results are stunning.",
    author: "SENAIDA",
    role: "Musician",
    color: 'blue'
  },
  {
    quote: "As a musician, I've always struggled with the technical side of video production. Vibes makes it easy and fun, and the results are amazing.",
    author: "Alex G.",
    role: "Independent Artist",
    color: 'green'
  },
  {
    quote: "Vibes is a game-changer for any content creator looking to elevate their videos. The AI-driven features save me so much time.",
    author: "Taylor M.",
    role: "YouTuber",
    color: 'purple'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <Flex direction="row" gap="4" wrap="wrap">
          {testimonials.map((testimonial, index) => (
            <Card key={index} style={{ flex: '1 1 30%', minWidth: '300px' }} className="testimonial-card">
              <Flex direction="column" gap="3" p="4">
                <Text as="p" size="3" style={{ fontStyle: 'italic' }}>"{testimonial.quote}"</Text>
                <Flex align="center" gap="2">
                  <Avatar size="3" fallback={testimonial.author[0]} />
                  <Flex direction="column">
                    <Text as="span" size="2" weight="bold">{testimonial.author}</Text>
                    <Text as="span" size="1" color="gray">{testimonial.role}</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
      </div>
    </section>
  );
}