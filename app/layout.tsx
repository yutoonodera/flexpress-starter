// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: 'Acme Corp',
  description: 'Acme Corp|モビーは、ソフトウェア開発を通じて 「認知を生み、接点を広げる」仕組みづくりを支援しています。',
  robots: process.env.NEXT_PUBLIC_ENV === "staging" ? "noindex,nofollow" : "index,follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
