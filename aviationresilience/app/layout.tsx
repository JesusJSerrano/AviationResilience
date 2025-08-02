import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AviationResilience.org - Emergency Response Planning Software",
  description: "Comprehensive emergency response planning software for airlines, airports, and aviation authorities",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
