import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jacob C - Arcade Portfolio',
  description: 'Retro Arcade Style Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

