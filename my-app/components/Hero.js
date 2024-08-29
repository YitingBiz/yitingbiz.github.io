import { Container, Heading, Text, Flex, Button } from '@radix-ui/themes'

export default function Hero() {
  return (
    <Container size="4" className=" py-32 md:py-64">
      <Flex direction="column" align="center" gap="6">
        <br></br>
        <Heading size="9" align="center" className="max-w-[800px]  leading-tight">
        Unleash Your Creativity with AI-Powered Music Videos.
        </Heading>
        <Text size="5" align="center" color="gray" className="max-w-[600px]">
        Vibes is a revolutionary platform that empowers creators to produce stunning music videos with the help of advanced AI. Whether you’re a musician, content creator, or educator, Vibes simplifies video production, allowing you to focus on what matters most—your creativity.        </Text>
        <Flex gap="4" mt="6">
          {/* <Button size="4" variant="surface">
            Start Free Trial
          </Button> */}
          {/* <Button size="4" variant="outline">
            Explore V4 Beta
          </Button> */}
        </Flex>
      </Flex>
    </Container>
  )
}