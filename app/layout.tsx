import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "TriFactoria Labs",
  description:
    "A studio for exploring software systems, developer tools, and creative infrastructure.",
  metadataBase: new URL("https://trifactoria.com"),
  openGraph: {
    title: "TriFactoria Labs",
    description:
      "A small studio space for exploring systems, developer tools, and creative infrastructure.",
    url: "https://trifactoria.com",
    type: "website",
  },
  robots: { index: true, follow: true },
};

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
