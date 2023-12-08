import './globals.css'

export const metadata = {
  title: 'Next 14 App',
  description: 'My first next 14 app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-w-6xl mx-auto md:min-h-screen md:grid md:place-items-center py-20 md:py-0 dark:bg-slate-900 dark:text-white'>{children}</body>
    </html>
  )
}
