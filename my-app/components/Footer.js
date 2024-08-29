import { Box, Card, Flex, Text, Container, Heading } from '@radix-ui/themes';
import { NavItem } from './Header';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">
      <Container>
        <Text  size="3" align="center"> &copy; 2024 Vibes. All rights reserved.</Text>
      </Container>
      {/* <Container className="container mx-auto">
        <div className="flex justify-center space-x-8 mt-4">
          <NavItem simple>About</NavItem>
          <NavItem simple>Contact</NavItem>
          <NavItem simple>Privacy</NavItem>
        </div>
      </Container> */}
    </footer>
  );
}
