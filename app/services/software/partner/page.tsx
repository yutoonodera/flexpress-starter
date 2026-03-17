import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export const metadata = {
    title: "開発パートナー募集 | 株式会社movee",
    description: "マーケ・デザイン・制作会社様の裏側で、開発を支えるB2Bパートナー向けのご案内ページです。",
  };

  export default function PartnerDevelopmentPage() {
    const features = [
      {
        icon: "🧠",
        title: "要件定義から伴走",
        body: "クライアント要望の整理・要件化など、上流フェーズから対応可能。ふわっとした要望も構造化し、スムーズな開発進行を支えます。",
      },
      {
        icon: "⚡",
        title: "スピーディな開発",
        body: "小回りの利く体制で、初期リリースまで最短4週間で対応可能。限られたスケジュールの中でも成果を出します。",
      },
      {
        icon: "🧪",
        title: "自動テスト & CI/CD で高品質なデプロイ",
        body: "自動テストとCI/CDで品質を担保し、安定したリリースを実現。改修・運用も安心してお任せいただけます。",
      },
    ];

    return (
      <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            開発を安心して任せられる、パートナーとして。
          </h1>
          <p className="mt-4 text-base text-gray-600">
            マーケティング・デザイン・制作会社様の裏側で、システム開発をスムーズに支える開発チームです。
          </p>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">{f.icon}</div>
              <h2 className="mt-3 text-lg font-semibold">{f.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">{f.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <div className="rounded-2xl border bg-blue-50 p-6 text-center">
            <p className="text-sm text-gray-700">
              制作・マーケティング・開発パートナーとしてのご相談も歓迎しています。
              NDAや請負・業務委託契約にも柔軟に対応可能です。
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
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
