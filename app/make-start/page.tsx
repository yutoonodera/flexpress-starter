import AisasChart from "../components/AisasChart";
import ChurnChart from "../components/ChurnChart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export default function AttentionPage() {
  return (
    <>
      <Header />
      <section className="my-12">
        <article className="prose prose-lg mx-auto max-w-3xl px-4">
          {/* ページタイトル */}
          <h1>はじまりをつくる</h1>
          <p className="mt-2 text-lg text-gray-700 font-medium">
            株式会社moveeは、企業の成長の“はじまり”となる認知の拡大を大切にし、
            営業や広告に頼らない構造的な接点づくりに取り組んでいます。
          </p>

          <p className="inline-block mt-6 border-b-4 border-gray-800 pb-1 font-semibold text-lg">
            営業や広告に頼らない、構造的な認知の拡大へ
          </p>

          <p>
            企業が成長を続けるうえで見過ごせないのが、
            <strong>チャーン率（Churn Rate）＝既存顧客の離脱率</strong>です。
            どんなに優れたサービスであっても、時間の経過とともに一定割合のユーザーは自然に離脱していきます。
            これは BtoB SaaS、BtoC サブスク、EC、無料Webサービスなど、
            業種を問わず共通して見られる現象です。
          </p>

          <p>
            例えば、BtoB SaaS の優良企業でも年間5％前後、
            一般的なSaaSでは10％前後、BtoCや無料サービスではさらに高い離脱率が報告されています。
            つまり、<strong>何もしなければユーザー数は毎年減っていく</strong>という前提に立つ必要があります。
          </p>

          <div className="my-20">
            <ChurnChart />
          </div>

          <p>
            このように、チャーン率の影響は業種を問わず顕著です。
            だからこそ企業は、単発的な施策ではなく、
            <strong>継続的に新しい接点を生み出す仕組み</strong>を持つ必要があります。
          </p>

          <div className="mt-20" />
          <p>
            多くの企業が新規接点の創出手段としてまず挙げるのは、
            「営業活動の強化」や「広告出稿の拡大」です。
            もちろんこれらも有効な手段ですが、私たちはそこに
            もう一段階、構造的な考え方が必要だと考えています。
          </p>

          <h2>認知（Attention）への投資という考え方</h2>

          <p>
            私たちは、AISASモデルにおける最初の段階である
            「Attention（注意・認知）」に意識的に投資することで、
            自然な形で企業の露出を増やし、新しい接点を生み出すことを重視しています。
          </p>

          <div className="my-8">
            <AisasChart />
          </div>

          <p>
            「Attention」を起点にする取り組みは、単発的な営業や広告ではなく、
            ソフトウェアや仕組みを通じて継続的に認知を広げる
            ことを目的としています。これにより、企業は長期的かつ安定的な接点創出の基盤を築くことができます。
          </p>

          <h3>1. ソフトウェア開発による構造的な認知拡大</h3>

          <p>
            私たちは、ソフトウェア開発を通じて企業の課題を整理し、
            その中から「外から見える強み」を抽出・設計することを重視しています。
            たとえば、情報発信・採用・商品紹介・顧客サポートなど、
            企業の本質的な活動をソフトウェアに落とし込み、認知の拡大へとつなげます。
          </p>

          <p>
            その際、弊社が運営する Next.js ベースの自社サイトや、共通の技術基盤上で
            企業専用のページや機能を「間借り」的に展開することも可能です。
            これにより、ドメインやインフラを持たずとも自社の情報を自然に発信できる
            “露出の仕組み”を提供します。
          </p>

          <p>
            結果として、企業は広告出稿や営業活動に依存せず、
            <strong>ソフトウェアそのものが認知を生む構造</strong>を持つことができます。
          </p>

          <h3>2. その他の取り組み：必要に応じて「なんでもやる」</h3>

          <p>
            moveeでは、認知の拡大や接点づくりに関わることであれば、
            ソフトウェア開発に限らず柔軟に支援しています。
            たとえば、
            <strong>メール送信の代行・アポイント資料の作成・サイト運用・データ分析・改善提案</strong>など、
            必要に応じて伴走型で実務も行います。
          </p>

          <p>
            目的は「サービスを納品すること」ではなく、企業が自ら発信し続けられる状態を一緒につくることです。
            そのために、開発・設計・運用・資料作成といった境界を設けず、
            現場に寄り添いながら必要な作業を実行します。
          </p>

          <p>
            moveeは、いわば“動ける開発パートナー”として、
            プロジェクトごとに最も実効性のある形で認知づくりを支援します。
          </p>

          <h2>「はじまり」への投資が、長期的な成長を支える</h2>

          <p>
            チャーン率が存在する限り、新しい接点の創出は避けて通れません。
            しかし、営業力や広告費に依存するのではなく、
            <strong>認知という「はじまり」に投資することで構造的に露出を拡大する</strong>——
            これが私たちの考え方です。
          </p>

          <p>
            ソフトウェアと仕組み、そして柔軟な実務支援を通じて、
            企業の持続的な成長を後押しします。
          </p>

          <div className="mt-12 text-center text-gray-700">
            <p className="font-medium">株式会社movee</p>
            <p className="text-sm text-gray-500 mt-1">
              企業の“はじまり”を、ともにつくるパートナーでありたいと考えています。
            </p>
          </div>
          <div className="mt-16 border-t pt-8 text-center">
            <p className="text-gray-600 text-sm mb-2">関連ページ</p>
            <Link
              href="/attention-root"
              className="inline-block text-blue-700 font-semibold hover:underline"
            >
              → 「Attentionの全体設計（自然認知と直接認知の2ルート）」を見る
            </Link>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
