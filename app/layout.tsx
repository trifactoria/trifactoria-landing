import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "TriFactoria Labs",
  description:
    "A technical studio for developer tools, automation systems, AI-assisted workflows, and creative infrastructure.",
  metadataBase: new URL("https://trifactoria.com"),
  openGraph: {
    title: "TriFactoria Labs",
    description:
      "A technical studio for developer tools, automation systems, AI-assisted workflows, and creative infrastructure.",
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
