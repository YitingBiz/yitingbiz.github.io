import { Box, Card, Flex, Text, Container, Heading } from '@radix-ui/themes';
import { NavItem } from './Header';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">
      <Container >
        <p>&copy; 2024 Vibes. All rights reserved.</p>
        <NavItem simple>About</NavItem>
        <NavItem simple>Contact</NavItem>
        <NavItem simple>Privacy</NavItem>
          {/* <a href="/about" className="mx-40">About</a>
          <a href="/contact" className="mx-40">Contact</a>
          <a href="/privacy" className="mx-40">Privacy Policy</a> */}
      </Container>

      <Flex className="bg-white py-4 px-6" justify="between" align="center">
        <Flex align="center" gap="6">

         
        </Flex>
      </Flex>


    </footer>
  );
}
