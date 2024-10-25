import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GTMProvider from '@/components/GTMScript';
export const metadata = {
  title: 'Vibes - AI-Powered Music Videos',
  description: 'Create stunning music videos with advanced AI technology',
}

export default function RootLayout({ children }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
  console.log("gtm id is ", GTM_ID);

  return (
    <html lang="en">
      <head>
      <GTMProvider />
      </head>
      <body>
        <Theme appearance="dark" accentColor="blue" grayColor="slate" scaling="95%">
          {children}
        </Theme>
      </body>
    </html>
  )
}