import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GTMScript from '@/components/GTMScript';
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
      <GTMScript gtmId={GTM_ID} />
      </head>
      <body>
        <Theme appearance="dark" accentColor="blue" grayColor="slate" scaling="95%">
          {children}
        </Theme>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  )
}