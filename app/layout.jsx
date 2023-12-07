import './globals.css'

export const metadata = {
  title: 'Next 14 App',
  description: 'My first next 14 app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
