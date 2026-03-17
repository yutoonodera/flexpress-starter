import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export const metadata = {
  title: "非営利団体・NPO向けソフトウェア支援 | 株式会社movee",
  description:
    "非営利団体やNPOの活動を、ソフトウェア開発・コンサルティングでサポートします。社会課題の解決に間接的に貢献するため、できるだけ安価または無料で対応しています。",
};

export default function NonprofitSupportPage() {
  const supports = [
    {
      icon: "💻",
      title: "ソフトウェア開発",
      body: "Webサイトや会員管理システム、予約機能など、団体の活動を支える仕組みを開発します。小規模なものから柔軟に対応可能です。",
    },
    {
      icon: "🧭",
      title: "技術・運用コンサルティング",
      body: "技術選定や運用の設計、改善提案など、開発に限らず、活動を支える伴走支援も行います。",
    },
    {
      icon: "🤝",
      title: "費用面での柔軟な対応",
      body: "社会課題への間接的な貢献の一環として、できるだけ安価または無料での対応を行っています。お気軽にご相談ください。",
    },
  ];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
            非営利団体・NPOの活動を、ソフトウェアで支援します。
          </h1>
          <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto text-left">
            私たちは、社会課題の解決に取り組む団体の活動を、間接的に支援することも大切な役割と考えています。
            <br />
            そのため、ソフトウェア開発やコンサルティングをできるだけ安価、もしくは無料でご提供しています。
          </p>
        </section>

        {/* Support features（カードではなくセクション型） */}
        <section className="space-y-12">
          {supports.map((s) => (
            <div
              key={s.title}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* アイコン */}
              <div className="flex-shrink-0 text-4xl bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
                {s.icon}
              </div>

              {/* テキスト */}
              <div>
                <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-20">
          <div className="rounded-2xl border bg-blue-50 p-8 text-center">
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              「予算が限られているけれど、活動を広げるためにWebの力を活用したい」
              そんな団体の皆様のご相談を歓迎しています。
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                お問い合わせ
              </a>
              <a
                href="mailto:info@movee.jp"
                className="rounded-xl border border-blue-200 px-5 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
              >
                info@movee.jp にメール
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
