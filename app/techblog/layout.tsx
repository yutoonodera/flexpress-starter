// app/layout.tsx

export const metadata = {
  title: 'テックブログ|株式会社movee',
  description: '福岡のソフトウェア開発、株式会社movee|モビーのテックブログです',
  robots: process.env.NEXT_PUBLIC_ENV === "staging" ? "noindex,nofollow" : "index,follow",
  icons: {
    icon: "/techblog/favicon.ico",
    apple: "/techblog/apple-touch-icon.png",
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
