import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _notosans = Noto_Sans({ subsets: ["latin"] })
const _notosansmono = Noto_Sans_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Octagon Insights - Advanced Vision Technology",
  description:
    "Experience the future of vision with Octagon Insights. Advanced 3K Ultra HD camera, day-long battery life, and AI-powered features.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
