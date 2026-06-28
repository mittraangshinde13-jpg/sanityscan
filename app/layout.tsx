import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: '/sanityscan-logo.png',
    apple: '/sanityscan-logo.png',
  },
  title: 'SanityScan — Bank Statement Analysis for Loan Professionals',
  description:
    'SanityScan helps loan brokers, DSAs, and Chartered Accountants identify potential underwriting issues in bank statements before submitting loan applications. Reduce rejections. Improve client conversations.',
  keywords: [
    'bank statement analysis',
    'loan broker tools',
    'DSA software India',
    'underwriting risk',
    'MSME loans',
    'loan rejection prevention',
    'chartered accountant tools',
  ],
  openGraph: {
    title:
      'SanityScan — Catch Hidden Bank Statement Red Flags Before the Bank Does',
    description:
      'AI-powered bank statement analysis for loan brokers and DSAs in India. Identify underwriting risks before submission.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#071A2D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
      style={{
        backgroundColor: '#071A2D',
        colorScheme: 'dark',
      }}
    >
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7N7K3EC36L"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7N7K3EC36L');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xdxlzof13o");
          `}
        </Script>
      </head>

      <body
        className="font-sans antialiased"
        style={{
          backgroundColor: '#071A2D',
          color: '#F0F4F8',
        }}
      >
        {children}
      </body>
    </html>
  )
}