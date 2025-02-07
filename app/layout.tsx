import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chess Scorer',
  description: 'Track chess piece captures and calculate scores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center">Chess Scorer</h1>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <p className="text-center">© 2024 Chess Scorer</p>
        </footer>
      </body>
    </html>
  );
}
