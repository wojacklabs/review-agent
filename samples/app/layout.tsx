import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Review Agent Samples',
  description: 'Sample components for code review learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
