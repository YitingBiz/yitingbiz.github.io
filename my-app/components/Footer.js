'use client'

import React from 'react';
import { Box, Card, Flex, Text, Container, Heading, TextField, Button } from '@radix-ui/themes';
import { styled } from '@stitches/react';
import { NavItem } from './Header';
const StyledFooter = styled('footer', {
  backgroundColor: 'var(--gray-12)',
  color: 'white',
  paddingTop: '4rem',
  paddingBottom: '2rem',
});

const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '@media (min-width: 640px)': {
    flexDirection: 'row',
  },
});

export default function Footer() {
  return (
    <footer>
      <Box css={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Flex direction="column" gap="6">
          <Box>
            {/* <Heading size="5" align="center" mb="4">
              Join Our Newsletter
            </Heading>
            <Text size="3" align="center" mb="4">
              Stay updated with our latest news and offers!
            </Text> */}
            {/* <form
              id="myForm"
              action="https://script.google.com/macros/s/AKfycbx8VxRVWpeMWuB0HXFjQQkLDN4CIDjGGQMAwHMzIgZLN7DvAXwcMYVYEv8SQLrG8jmzcg/exec"
              method="POST"
            >
              <TextField.Root size="3" style={{ flex: 1 }}>
                <TextField.Input type="text" name="firstName" placeholder="Your Name" required />
              </TextField.Root>
              <TextField.Root size="3" style={{ flex: 1 }}>
                <TextField.Input type="email" name="email" placeholder="Your Email" required />
              </TextField.Root>
              <Button size="3" variant="solid">
                Subscribe
              </Button>
            </form> */}
          </Box>

          <Flex justify="center" gap="6">
            {/* <NavItem simple href="/about">About</NavItem>
            <NavItem simple="/contact">Contact</NavItem> */}
            {/* <NavItem simple="/privacy">Privacy</NavItem> */}
          </Flex>

          <Text size="2" align="center">
            &copy; 2024 Vibes. All rights reserved.
          </Text>
          <Text size="2" align="center">
            hello@gotvibes.xyz
          </Text>
        </Flex>
      </Box>
    </footer>
  );
}