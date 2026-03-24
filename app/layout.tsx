import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'خارطة طريق الأمن السيبراني | Cybersecurity Roadmap',
  description: 'خطة عملية خطوة بخطوة لدخول مجال الأمن السيبراني للمبتدئين',
  generator: 'v0.app',
  icons : null,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark" suppressHydrationWarning>
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
