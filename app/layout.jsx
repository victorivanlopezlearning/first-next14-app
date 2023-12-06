import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next 14 App',
  description: 'My first next 14 app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
