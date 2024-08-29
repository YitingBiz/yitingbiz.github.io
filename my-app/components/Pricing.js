import React from 'react';
import { Card, Flex, Text, Container, Button } from '@radix-ui/themes';

const plans = [
  {
    name: "Free Trial",
    price: "Free",
    features: ["Access to core features", "Customizable visuals", "Basic support"],
    color: 'blue'
  },
  {
    name: "Pro Plan",
    price: "$20/month",
    features: ["Advanced features", "Premium support", "Exclusive content"],
    color: 'green'
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    features: ["Tailored solutions", "Dedicated account manager", "Priority support"],
    color: 'purple'
  }
];

export default function Pricing() {
  return (

    <section className="py-20 bg-white">
      <br></br>

      <Container className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <Flex direction="row" gap="5" wrap="wrap">
          {plans.map((plan, index) => (
            <Card key={index} style={{ flex: '1 1 30%', minWidth: '300px' }} className="pricing-card">
              <Flex direction="column" gap="3" p="4">
                <Text as="h3" size="6" weight="bold">{plan.name}</Text>
                <Text as="p" size="8" weight="bold">{plan.price}</Text>
                <Flex direction="column" gap="2">
                  {plan.features.map((feature, featureIndex) => (
                    <Text key={featureIndex} as="span" size="2">• {feature}</Text>
                  ))}
                </Flex>
                <Button disabled size="3" className="mt-4">Get Started</Button>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </section>
  );
}