// app/layout.tsx

export const metadata = {
  title: 'D.log|Acme Corp',
  description: '福岡のソフトウェア開発、株式会社movee|代表の個人的な記録です。1ヶ月前、1年前の自分が何を考えていたか、を振り返れるようにしています。',
  robots: process.env.NEXT_PUBLIC_ENV === "staging" ? "noindex,nofollow" : "index,follow",
  // icons: {
  //   icon: "/dlog/favicon.ico",
  //   apple: "/dlog/apple-touch-icon.png",
  // },
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
