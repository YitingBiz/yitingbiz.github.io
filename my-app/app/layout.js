import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { global } from 'styled-jsx/css';

export const metadata = {
  title: 'Vibes - AI-Powered Music Videos',
  description: 'Create stunning music videos with advanced AI technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}